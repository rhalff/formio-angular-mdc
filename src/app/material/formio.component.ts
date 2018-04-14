import {
  Component,
  ViewEncapsulation,
  ElementRef,
  ViewChild,
  EventEmitter,
  Output
} from '@angular/core'
import {
  get,
  flow,
  isString
} from 'lodash'
import * as FF from 'formiojs/form'

const FormioForm = FF.default

import materialComponents from './components/index'
import { BaseComponent } from 'formiojs/lib/components/base/Base'

import {
  forceColumns,
  findAndUpdateComponent
} from './utils'

import { FormioComponent } from 'angular-formio'
import { PublicLoader } from './lib/public_loader'

@Component({
  selector: 'material-formio',
  templateUrl: './formio.component.html',
  styleUrls: ['./formio.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MaterialFormioComponent extends FormioComponent {
  @ViewChild('materialFormio') formioElement?: ElementRef
  @Output() success = new EventEmitter()

  options = {
    disableAlerts: true
  }

  onError (error: any) {
    if (!error) {
      return
    }
    if (isString(error)) {
      error = {
        message: error
      }
    }
    error = error instanceof Array ? error : [error]

    this.errorChange.emit(error)
  }

  async setForm (form: any) {
    form = flow(
      forceColumns,
      findAndUpdateComponent(
        ({ key, type }) => key === 'bonus' && type === 'hidden',
        (component) => ({
          ...component,
          type: 'textfield',
          label: get(
            component,
            ['properties', 'description']
          ) || component.label || component.key,
          validate: {
            required: true
          }
        })
      )
    )(form)

    if (this.formio) {
      this.formio.form = form

      return undefined
    }

    await BaseComponent.requireLibrary(
      'mdc',
      'mdc',
      'https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js',
      true
    )

    this.formLoad.emit(form)

    const formio = new FormioForm(
      get(this.formioElement, 'nativeElement', null),
      {
        // icons: this.config ? this.config.icons : '',
        noAlerts: true,
        readOnly: this.readOnly,
        viewAsHtml: this.viewOnly,
        i18n: get(this.options, 'i18n', null),
        fileService: get(this.options, 'fileService', null),
        hooks: this.hooks,
        components: materialComponents
      }
    )

    formio.form = form

    this.formio = formio
    if (this.url) {
      this.formio.url = this.url
    }
    if (this.src) {
      this.formio.url = this.src
    }
    this.formio.nosubmit = true
    this.formio.on('prevPage', (data: any) => this.onPrevPage(data))
    this.formio.on('nextPage', (data: any) => this.onNextPage(data))
    this.formio.on('change', (value: any) => this.change.emit(value))
    this.formio.on('customEvent', (event: any) =>
      this.customEvent.emit(event)
    )
    this.formio.on('submit', (submission: any) =>
      this.submitForm(submission)
    )

    this.formio.on('render', () => {
      this.render.emit()
    })

    this.formio.on('error', (error: any) => {
      this.onError(error)
    })

    PublicLoader.getInstance().loading = false

    this.readyResolve(this.formio)

    return this.formio
  }

  submitExecute (submission: object) {
    this.service
      .saveSubmission(submission)
      .subscribe(
        ((result: {}) => {
          this.formio.emit('resetForm')
          this.success.emit(result)
        }),
        (error) => this.onError(error)
      )
  }
}
