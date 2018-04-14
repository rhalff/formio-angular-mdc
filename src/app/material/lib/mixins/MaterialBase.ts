import { maskInput } from 'vanilla-text-mask'
import { each } from 'lodash'
import { getInputMask } from 'formiojs/lib/utils/index'

class Tooltip {
  constructor (_el, _options) {
    throw Error('Not Implemented')
  }
}

export class MaterialBaseMixin {
  info: any
  labelElement: any
  text: (val: string) => any
  component: any
  tbody: any
  dataValue: any
  tooltip: () => any
  ce: (el: string, options?: any) => any
  description: any
  t: (val: any) => any
  addNewValue: () => any
  setInputStyles: (styles: any) => any
  append: (el: any) => any
  labelIsHidden: () => any
  errorContainer: any
  errorElement: any
  options: any
  hasInput: any
  addEventListener: any
  addValue: any
  removeValue: any
  addClass: any
  element: any
  inputs: any
  appendTo: any
  removeChildFrom: any
  id: any
  // className: any
  customStyle: any
  decorate: (container: any) => void
  shouldDisable: boolean
  disabled: boolean
  createInput: (element: any) => any
  _inputMask: any
  maskPlaceholder: any

  getIcon (name) {
    return this.ce('i', {
      class: this.iconClass(name)
    })
  }

  setInputMask (input) {
    if (input && this.component.inputMask) {
      const mask = getInputMask(this.component.inputMask)
      this._inputMask = mask
      input.mask = maskInput({
        inputElement: input,
        mask
      })
      if (mask.numeric) {
        input.setAttribute('pattern', '\\d*')
      }
      if (!this.component.placeholder) {
        input.setAttribute('placeholder', this.maskPlaceholder(mask))
      }
    }
  }

  /**
   * During components build there is a component.getElement()
   *
   * Perhaps that can be used to return the (to be created)
   * wrapper element instead.
   *
   * I almost think that could work.
   *
   * @returns {any}
   */
  createElement () {
    // If the element is already created, don't recreate.
    if (this.element) {
      return this.element
    }

    this.element = this.ce('div', {
      id: this.id,
      class: this.className,
      style: this.customStyle
    })

    // Ensure you can get the component info from the element.
    this.element.component = this.component

    if (this.decorate) {
      this.decorate(this.element)
    }

    return this.element
  }

  get className () {
    let className = this.hasInput ? 'form-group has-feedback ' : ''
    className += `formio-component formio-component-${this.component.type} `
    if (this.component.key) {
      className += `formio-component-${this.component.key} `
    }
    if (this.component.customClass) {
      className += this.component.customClass
    }
    if (this.hasInput && this.component.validate && this.component.validate.required) {
      className += ' required'
    }

    return className
  }

  createWrapper () {
    if (!this.component.multiple) {
      return false
    } else {
      const table = this.ce('table', {
        class: 'table table-bordered'
      })
      this.tbody = this.ce('tbody')
      table.appendChild(this.tbody)

      // Add a default value.
      const dataValue = this.dataValue
      if (!dataValue || !dataValue.length) {
        this.addNewValue()
      }

      // Build the rows.
      this.buildRows()

      this.setInputStyles(table)

      // Add the table to the element.
      this.append(table)

      return true
    }
  }

  buildRows () {
    if (!this.tbody) {
      return
    }
    this.inputs = []
    this.tbody.innerHTML = ''
    each(this.dataValue, (value, index) => {
      const tr = this.ce('tr')
      const td = this.ce('td')
      const input = this.createInput(td)
      input.value = value
      tr.appendChild(td)

      if (!this.shouldDisable) {
        const tdAdd = this.ce('td')
        tdAdd.appendChild(this.removeButton(index))
        tr.appendChild(tdAdd)
      }

      this.tbody.appendChild(tr)
    })

    if (!this.shouldDisable) {
      const tr = this.ce('tr')
      const td = this.ce('td', {
        colspan: '2'
      })
      td.appendChild(this.addButton())
      tr.appendChild(td)
      this.tbody.appendChild(tr)
    }

    if (this.shouldDisable) {
      this.disabled = true
    }
  }

  iconClass (name, spinning?) {
    if (!this.options.icons || this.options.icons === 'glyphicon') {
      return spinning ? `glyphicon glyphicon-${name} glyphicon-spin` : `glyphicon glyphicon-${name}`
    }
    switch (name) {
      case 'zoom-in':
        return 'fa fa-search-plus'
      case 'zoom-out':
        return 'fa fa-search-minus'
      case 'question-sign':
        return 'fa fa-question-circle'
      case 'remove-circle':
        return 'fa fa-times-circle-o'
      default:
        return spinning ? `fa fa-${name} fa-spin` : `fa fa-${name}`
    }
  }

  addButton (justIcon?) {
    const addButton = this.ce('a', {
      class: 'btn btn-primary'
    })
    this.addEventListener(addButton, 'click', (event) => {
      event.preventDefault()
      this.addValue()
    })

    const addIcon = this.ce('i', {
      class: this.iconClass('plus')
    })

    if (justIcon) {
      addButton.appendChild(addIcon)
      return addButton
    } else {
      addButton.appendChild(addIcon)
      addButton.appendChild(this.text(this.component.addAnother || ' Add Another'))
      return addButton
    }
  }

  removeButton (index) {
    const removeButton = this.ce('button', {
      type: 'button',
      class: 'btn btn-default btn-secondary',
      tabindex: '-1'
    })

    this.addEventListener(removeButton, 'click', (event) => {
      event.preventDefault()
      this.removeValue(index)
    })

    const removeIcon = this.ce('i', {
      class: this.iconClass('remove-circle')
    })
    removeButton.appendChild(removeIcon)
    return removeButton
  }

  createLabel (container) {
    if (this.labelIsHidden()) {
      return
    }
    let className = 'control-label'
    let style = ''

    const {
      labelPosition
    } = this.component

    if (this.hasInput && this.component.validate && this.component.validate.required) {
      className += ' field-required'
    }

    if (labelPosition) {
      console.warn('MaterialBaseComponent: label positioning is ignored.')
    }

    className += ' mdc-floating-label'

    this.labelElement = this.ce('label', {
      class: className,
      style
    })
    if (this.info.attr.id) {
      this.labelElement.setAttribute('for', this.info.attr.id)
    }
    this.labelElement.appendChild(this.text(this.component.label))
    this.createTooltip(this.labelElement)
    container.appendChild(this.labelElement)
  }

  createTooltip (container, component?, classes?) {
    component = component || this.component
    classes = classes || `${this.iconClass('question-sign')} text-muted`
    if (!component.tooltip) {
      return
    }
    this.tooltip = this.ce('i', {
      class: classes
    })
    container.appendChild(this.text(' '))
    container.appendChild(this.tooltip)

    /* tslint:disable */
    new Tooltip(this.tooltip, {
      delay: {
        hide: 100
      },
      placement: 'right',
      html: true,
      title: component.tooltip.replace(/(?:\r\n|\r|\n)/g, '<br />')
    })
    /* tslint:enable */
  }

  createDescription (container) {
    if (!this.component.description) {
      return
    }
    this.description = this.ce('div', {
      class: 'help-block'
    })
    this.description.innerHTML = this.t(this.component.description)
    container.appendChild(this.description)
  }

  createErrorElement () {
    if (!this.errorContainer) {
      return
    }
    this.errorElement = this.ce('div', {
      class: 'formio-errors invalid-feedback'
    })
    this.errorContainer.appendChild(this.errorElement)
  }

  addPrefix (input, inputGroup) {
    let prefix = null
    if (this.component.prefix) {
      prefix = this.ce('div', {
        class: 'input-group-addon'
      })
      prefix.appendChild(this.text(this.component.prefix))
      inputGroup.appendChild(prefix)
    }
    return prefix
  }

  addSuffix (input, inputGroup) {
    let suffix = null
    if (this.component.suffix) {
      suffix = this.ce('div', {
        class: 'input-group-addon'
      })
      suffix.appendChild(this.text(this.component.suffix))
      inputGroup.appendChild(suffix)
    }
    return suffix
  }

  addInputGroup (input, container) {
    let inputGroup = null

    // TODO
    if (this.component.prefix || this.component.suffix) {
      inputGroup = this.ce('div', {
        class: 'input-group'
      })
      container.appendChild(inputGroup)
    }

    return inputGroup
  }

  addInputError (message, dirty) {
    if (!message) {
      return
    }

    if (this.errorElement) {
      const errorMessage = this.ce('p', {
        class: 'help-block'
      })
      errorMessage.appendChild(this.text(message))
      this.errorElement.appendChild(errorMessage)
    }

    // Add error classes
    this.addClass(this.element, 'has-error')
    this.inputs.forEach((input) => this.addClass(input, 'is-invalid'))
    if (dirty && this.options.highlightErrors) {
      this.addClass(this.element, 'alert alert-danger')
    }
  }

  setLoading (element, loading) {
    if (element.loading === loading) {
      return
    }

    element.loading = loading
    if (!element.loader && loading) {
      element.loader = this.ce('i', {
        class: `${this.iconClass('refresh', true)} button-icon-right`
      })
    }
    if (element.loader) {
      if (loading) {
        this.appendTo(element.loader, element)
      } else {
        this.removeChildFrom(element.loader, element)
      }
    }
  }

  elementInfo () {
    const attributes: any = {
      name: this.options.name,
      type: this.component.inputType || 'text',
      class: 'form-control',
      lang: this.options.language
    }

    if (this.component.placeholder) {
      attributes.placeholder = this.t(this.component.placeholder)
    }

    if (this.component.tabindex) {
      attributes.tabindex = this.component.tabindex
    }

    if (this.component.autofocus) {
      attributes.autofocus = this.component.autofocus
    }

    return {
      type: 'input',
      component: this.component,
      changeEvent: 'change',
      attr: attributes
    }
  }
}
