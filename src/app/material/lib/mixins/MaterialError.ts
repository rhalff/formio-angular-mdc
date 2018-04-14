export class MaterialErrorMixin {
  errorElement: any
  element: any
  _errorContainer: any
  ce: any
  createErrorElement () {
    if (!this.errorContainer) {
      return
    }

    this.errorElement = this.ce('div', {
      class: 'formio-errors invalid-feedback mdc-text-field-helper-text mdc-text-field-helper-text--persistent mdc-text-field-helper-text--validation-msg'
    })
    this.errorContainer.appendChild(this.errorElement)
  }

  get errorContainer () {
    return this.element.parentNode
  }

  set errorContainer (element) {
    this._errorContainer = element
  }
}
