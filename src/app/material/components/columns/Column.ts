import { FormioComponents } from 'formiojs/lib/components/Components'
import { mixin, MaterialBaseMixin } from '../../lib/index'
export class MaterialColumnComponent extends FormioComponents {
  get className () {
    const comp = this.component

    // available component props: width, offset, push, pull
    return `mdc-layout-grid__cell mdc-layout-grid__cell--span-${comp.width ? comp.width : 6}`
  }
}

mixin(MaterialColumnComponent, [MaterialBaseMixin])
