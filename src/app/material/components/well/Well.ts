import { FormioComponents } from 'formiojs/lib/components/Components'
import { mixin, MaterialBaseMixin } from '../../lib/index'
export class MaterialWellComponent extends FormioComponents {
  get className () {
    return `mdc-card formio-component formio-component-well ${this.component.customClass}`
  }
}
mixin(MaterialWellComponent, [MaterialBaseMixin])
