import { MDCTextField } from '@material/textfield'
import { TextFieldComponent } from 'formiojs/lib/components/textfield/TextField'
import {
  mixin,
  MaterialBaseMixin,
  MaterialErrorMixin,
  MdcWrapper
} from '../../lib'

@MdcWrapper({
  class: 'mdc-text-field mdc-text-field--textarea'
})
export class MaterialTextAreaComponent extends TextFieldComponent {
  viewOnly: any
  _mdcTextField: any

  build () {
    super.build()
    this._mdcTextField = new MDCTextField(this.element)
  }

  getValue () {
    if (this.viewOnly) {
      return this.dataValue
    }

    return super.getValue()
  }

  elementInfo () {
    const info = super.elementInfo()
    info.type = 'textarea'

    if (this.component.rows) {
      info.attr.rows = this.component.rows
    }

    if (this.component.hasOwnProperty('spellcheck')) {
      info.attr.spellcheck = this.component.spellcheck
    }

    info.attr.class = 'mdc-text-field__input'

    return info
  }
}

mixin(MaterialTextAreaComponent, [MaterialErrorMixin, MaterialBaseMixin])
