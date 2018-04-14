import { ContainerComponent } from 'formiojs/lib/components/container/Container'
import { mixin, MaterialBaseMixin } from '../../lib/index'

export class MaterialContainerComponent extends ContainerComponent {
  build () {
    this.element = this.ce('div', {
      class: `formio-container-component ${this.component.customClass}`
    })
    if (!this.hasValue) {
      this.dataValue = {}
    }
    this.addComponents(this.element, this.dataValue)
  }
}
mixin(MaterialContainerComponent, [MaterialBaseMixin])
