import { SelectBoxesComponent } from 'formiojs/lib/components/selectboxes/SelectBoxes'
import { mixin, MaterialBaseMixin } from '../../lib/index'

export class MaterialSelectBoxesComponent extends SelectBoxesComponent {
}

mixin(MaterialSelectBoxesComponent, [MaterialBaseMixin])
