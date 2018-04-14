import {
  Component
} from '@angular/core'
import { AppService } from '../../app.service'
import { FormioAppConfig, FormioLoader } from 'angular-formio'
import { Router } from '@angular/router'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class AppFormComponent {
  errors = []
  src: string

  constructor (
    private _appService: AppService,
    private _appConfig: FormioAppConfig,
    private _router: Router,
    public loader: FormioLoader
  ) {
    this.src = _appConfig.appUrl
  }

  onFormSuccess () {
    this._router.navigate(['/success'])
  }

  onFormError (errors) {
    this.errors = errors

    document.documentElement.scrollTop = 0
  }

  onFormLoad (form) {
    if (form.title) {
      this._appService.pageTitle = form.title
    }
  }
}
