import { MaterialTextFieldComponent } from '../textfield/TextField'

export class MaterialPasswordComponent extends MaterialTextFieldComponent {
  elementInfo () {
    const info = super.elementInfo()
    info.attr.type = 'password'
    return info
  }
}
