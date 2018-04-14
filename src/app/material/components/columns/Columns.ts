import { each } from 'lodash'
import { FormioComponents } from 'formiojs/lib/components/Components'
import { mixin, MaterialBaseMixin } from '../../lib/index'

export class MaterialColumnsComponent extends FormioComponents {
  get className () {
    return `row ${this.component.customClass} mdc-layout-grid`
  }

  addComponents () {
    this.element.classList.add('mdc-layout-grid')

    const container = this.ce('div', {
      class: 'mdc-layout-grid__inner'
    })

    this.element.appendChild(container)

    each(this.component.columns, (column) => {
      column.type = 'column'
      this.addComponent(column, container, this.data)
    })
  }
}
mixin(MaterialColumnsComponent, [MaterialBaseMixin])
