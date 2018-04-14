import {
  debounce,
  each,
  get,
  isEqual,
  find,
  isString,
  isObject
} from 'lodash'
import { MaterialBaseMixin, MaterialErrorMixin, mixin } from '../../lib'
import { BaseComponent } from 'formiojs/lib/components/base/Base'
import { SelectComponent } from 'formiojs/lib/components/select/Select'

export type Query = {
  limit?: number,
  skip?: number,
  select?: any
}

export type SelectOptions = {
  value: any
  label: string
  element?: any
}

export class MaterialSelectComponent extends BaseComponent {
  choices: false
  triggerUpdate: any
  activated: boolean

  _selectOptions: Array<any>

  selectContainer: any
  selectInput: any
  lazyLoadInit: any
  loading: boolean
  row: any

  events: any
  defaultValue: any

  bottomLineElement: any

  activate = SelectComponent.prototype.activate
  addPlaceholder = SelectComponent.prototype.addPlaceholder
  updateItems = SelectComponent.prototype.updateItems
  updateCustomItems = SelectComponent.prototype.updateCustomItems
  itemValue = SelectComponent.prototype.itemValue
  refreshItems = SelectComponent.prototype.refreshItems
  loadItems = SelectComponent.prototype.loadItems

  constructor (component, options, data) {
    super({
      ...component,
      customClass: 'mdc-select',
      labelPosition: 'bottom'
    }, options, data)

    // Trigger an update.
    this.triggerUpdate = debounce(this.updateItems.bind(this), 100)

    // Keep track of the select options.
    this._selectOptions = []

    if (this.component.template) {
      console.warn('MaterialSelectComponent: Templates not supported')
    }

    // If this component has been activated.
    this.activated = false

    // If they wish to refresh on a value, then add that here.
    if (this.component.refreshOn) {
      this.on('change', (event) => {
        if (this.component.refreshOn === 'data') {
          this.refreshItems()
        } else if (event.changed && (event.changed.component.key === this.component.refreshOn)) {
          this.refreshItems()
        }
      })
    }
  }

  elementInfo () {
    const info = super.elementInfo()

    info.type = 'select'
    info.changeEvent = 'change'
    info.attr.class = 'mdc-select__native-control'

    return info
  }

  createWrapper () {
    return false
  }

  itemTemplate (data) {
    if (!data) {
      return ''
    }

    return data.label ? this.t(data.label) : JSON.stringify(data)
  }

  createInput (container) {
    this.selectContainer = container
    this.selectInput = super.createInput(container)
  }

  /**
   * Adds an option to the select dropdown.
   *
   * @param value
   * @param label
   */
  addOption (value, label, attr?) {
    const option: SelectOptions = {
      value: value,
      label: label
    }

    this._selectOptions.push(option)

    option.element = document.createElement('option')
    if (this.dataValue === option.value) {
      option.element.setAttribute('selected', 'selected')
      option.element.selected = 'selected'
    }
    option.element.innerHTML = label
    if (attr) {
      each(attr, (value, key) => {
        option.element.setAttribute(key, value)
      })
    }

    this.selectInput.appendChild(option.element)
  }

  setItems (items) {
    // If the items is a string, then parse as JSON.
    if (typeof items === 'string') {
      try {
        items = JSON.parse(items)
      } catch (err) {
        console.warn(err.message)
        items = []
      }
    }

    this._selectOptions = []

    // If they provided select values, then we need to get them instead.
    if (this.component.selectValues) {
      items = get(items, this.component.selectValues)
    }

    // Iterate through each of the items.
    each(items, (item) => {
      this.addOption(this.itemValue(item), this.itemTemplate(item))
    })

    // Re-attach select input.
    this.appendTo(this.selectInput, this.selectContainer)

    // We are no longer loading.
    this.loading = false

    // If a value is provided, then select it.
    if (this.dataValue) {
      this.setValue(this.dataValue, true)
    } else {
      // If a default value is provided then select it.
      const defaultValue = this.defaultValue
      if (defaultValue) {
        this.setValue(defaultValue)
      }
    }
  }

  get active () {
    return !this.component.lazyLoad || this.activated
  }

  addInput (input, container) {
    super.addInput(input, container)
    if (this.component.multiple) {
      input.setAttribute('multiple', true)
    }

    this.triggerUpdate()
    this.addEventListener(input, 'focus', () => this.activate())
  }

  getView (data) {
    return this.itemTemplate(data)
  }

  getValue (flags = { changed: false }) {
    if (!flags.changed && this.dataValue) {
      return this.dataValue
    }

    const values = []

    each(this._selectOptions, (selectOption) => {
      if (selectOption.element && selectOption.element.selected) {
        values.push(selectOption.value)
      }
    })

    const value = this.component.multiple ? values : values.shift()

    return value
  }

  setValue (value, flags?) {
    flags = this.getFlags.apply(this, arguments)
    // const hasPreviousValue = Array.isArray(this.dataValue) ? this.dataValue.length : this.dataValue
    const hasValue = Array.isArray(value) ? value.length : value
    const changed = flags.changed || this.hasChanged(value, this.dataValue)
    this.dataValue = value

    // Do not set the value if we are loading... that will happen after it is done.
    if (this.loading) {
      return changed
    }

    // Determine if we need to perform an initial lazyLoad api call if searchField is provided.
    if (
      this.component.searchField &&
      this.component.lazyLoad &&
      !this.lazyLoadInit &&
      !this.active &&
      !this._selectOptions.length &&
      hasValue
    ) {
      this.loading = true
      this.lazyLoadInit = true
      this.triggerUpdate(this.dataValue, true)
      return changed
    }

    if (hasValue) {
      const values = Array.isArray(value) ? value : [value]
      each(this._selectOptions, (selectOption) => {
        each(values, (val) => {
          if (isEqual(val, selectOption.value)) {
            selectOption.element.selected = true
            selectOption.element.setAttribute('selected', 'selected')
            return false
          }
        })
      })
    } else {
      each(this._selectOptions, (selectOption) => {
        selectOption.element.selected = false
        selectOption.element.removeAttribute('selected')
      })
    }

    this.updateOnChange(flags, changed)
    return changed
  }

  /**
   * Check if a component is eligible for multiple validation
   *
   * @return {boolean}
   */
  validateMultiple () {
    // Select component will contain one input when flagged as multiple.
    return false
  }

  /**
   * Ouput this select dropdown as a string value.
   * @return {*}
   */
  asString (value?) {
    value = value || this.getValue()

    if (this.component.dataSrc === 'values') {
      value = find(this.component.data.values, ['value', value])
    }

    if (isString(value)) {
      return value
    }

    return isObject(value)
      ? this.itemTemplate(value)
      : '-'
  }

  setupValueElement (element) {
    element.innerHTML = this.asString()
  }

  createLabel (container) {
    if (this.labelIsHidden()) {
      return
    }
    let className = 'control-label mdc-select__label mdc-select__label--float-above'
    let style = ''

    const {
      labelPosition
    } = this.component

    if (labelPosition) {
      console.warn('MaterialSelectComponent: label positioning is ignored.')
    }

    if (this.hasInput && this.component.validate && this.component.validate.required) {
      className += ' field-required'
    }

    this.labelElement = this.ce('div', {
      class: className,
      style
    })

    if (this.info.attr.id) {
      this.labelElement.setAttribute('for', this.info.attr.id)
    }

    this.labelElement.appendChild(this.text(this.component.label))
    this.createTooltip(this.labelElement)

    container.appendChild(this.labelElement)

    this.createBottomLine(container)
  }

  createBottomLine (container) {
    this.bottomLineElement = this.ce('div', {
      class: 'mdc-select__bottom-line'
    })

    container.appendChild(this.bottomLineElement)
  }

  get requestHeaders () {
    return SelectComponent.prototype.requestHeaders.apply(this)
  }
}

mixin(MaterialSelectComponent, [MaterialBaseMixin, MaterialErrorMixin])
