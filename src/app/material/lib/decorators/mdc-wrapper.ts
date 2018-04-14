export function MdcWrapper (attrs) {
  return (target) => {
    function getElement () {
      return this.wrapper
    }

    function createElement () {
      if (this.element) {
        return this.element
      }

      this.wrapper = this.ce('div', {
        id: this.id,
        class: this.className,
        style: this.customStyle
      })

      this.element = this.ce('div', {
        id: `${this.id}-wrapper`,
        ...attrs
      })

      this.element.component = this.component

      this.wrapper.appendChild(this.element)
    }

    target.prototype.createElement = createElement
    target.prototype.getElement = getElement

    return target
  }
}
