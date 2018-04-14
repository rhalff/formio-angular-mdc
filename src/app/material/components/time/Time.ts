import * as moment from 'moment'
import { MaterialTextFieldComponent } from '../textfield/TextField'

export class MaterialTimeComponent extends MaterialTextFieldComponent {
  elementInfo () {
    const info = super.elementInfo()
    info.attr.type = 'time'
    return info
  }
  getValueAt (index) {
    if (!this.inputs.length || !this.inputs[index]) {
      return null
    }
    const val = this.inputs[index].value
    if (!val) {
      return null
    }

    return moment(val, this.component.format).format('HH:mm:ss')
  }
  setValueAt (index, value) {
    this.inputs[index].value = moment(value, 'HH:mm:ss').format(this.component.format)
  }
}
