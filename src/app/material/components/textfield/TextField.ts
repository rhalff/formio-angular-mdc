import { TextFieldComponent } from 'formiojs/lib/components/textfield/TextField'
import { MDCTextField } from '@material/textfield'
import {
  mixin,
  MaterialBaseMixin,
  MaterialErrorMixin,
  MdcWrapper
} from '../../lib/index'
import './TextField.scss'

@MdcWrapper({
  class: 'mdc-text-field'
})
export class MaterialTextFieldComponent extends TextFieldComponent {
  _mdcTextField: any
  constructor (component, options, data) {
    super(component, options, data)
  }

  build () {
    super.build()
    this._mdcTextField = new MDCTextField(this.element)
  }

  elementInfo () {
    const info = super.elementInfo()

    info.attr.class = 'mdc-text-field__input'

    return info
  }
}

mixin(MaterialTextFieldComponent, [MaterialErrorMixin, MaterialBaseMixin])
