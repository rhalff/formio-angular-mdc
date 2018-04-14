import { MaterialTextFieldComponent } from '../textfield/TextField'

export class MaterialEmailComponent extends MaterialTextFieldComponent {
  constructor (component, options, data) {
    super(component, options, data)
    this.validators.push('email')
  }
  elementInfo () {
    const info = super.elementInfo()
    info.attr.type = 'email'
    return info
  }
}
