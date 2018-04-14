import { MaterialTextFieldComponent } from '../textfield/TextField'
export class MaterialPhoneNumberComponent extends MaterialTextFieldComponent {
  constructor (component, attr, data) {
    super({
      ...component,
      placeholder: ' '
    }, attr, data)
  }

  setInputMask (input) {
    super.setInputMask(input)

    if (this.component.inputMask) {
      input.setAttribute(
        'pattern',
        this.component.inputMask
          .replace(/9/g, '\\d')
          .replace(/([()])/g, '\\\$1')
      )
    }
  }
}
