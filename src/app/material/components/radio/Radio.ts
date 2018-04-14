import { each } from 'lodash'
import { RadioComponent } from 'formiojs/lib/components/radio/Radio'
import { mixin, MaterialBaseMixin } from '../../lib/index'

export class MaterialRadioComponent extends RadioComponent {
  row: any
  info: any
  wrappers: any[]
  errorContainer: any
  constructor (component, attr, data) {
    super({
      ...component
      // customClass: 'mdc-radio'
    }, attr, data)
  }

  /*
  elementInfo() {
    const info = super.elementInfo()

    info.attr.class="mdc-radio__native-control"

    return info
  }
  */

  createInput (container) {
    const inputGroup = this.ce('div', {
      class: 'input-group'
    })

    const wrappers = []

    if (this.component.inputType === 'radio') {
      this.info.attr.name += this.id
    }

    each(this.component.values, (value) => {
      const wrapperClass = 'form-check mdc-radio'

      const labelWrapper = this.ce('div', {
        class: wrapperClass
      })

      const label = this.ce('label', {
        class: 'control-label form-check-label'
      })

      this.addShortcut(label, value.shortcut)

      // Determine the attributes for this input.
      const inputId = `${this.id}${this.row}-${value.value}`
      this.info.attr.id = inputId
      this.info.attr.value = value.value
      label.setAttribute('for', this.info.attr.id)

      // Create the input.
      const input = this.ce('input')
      each(this.info.attr, (value, key) => {
        input.setAttribute(key, value)
      })

      this.setInputLabelStyle(label)
      this.setInputStyle(input)

      this.addInput(input, label)

      labelWrapper.appendChild(label)

      inputGroup.appendChild(labelWrapper)
      wrappers.push(labelWrapper)
    })
    this.wrappers = wrappers
    container.appendChild(inputGroup)
    this.errorContainer = container
  }
}

mixin(MaterialRadioComponent, [MaterialBaseMixin])
