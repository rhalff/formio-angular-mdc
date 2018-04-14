import { EditGridComponent } from 'formiojs/lib/components/editrgrid/EditGrid'
import { mixin, MaterialBaseMixin } from '../../lib/index'

export class MaterialEditGridComponent extends EditGridComponent {
}

mixin(MaterialEditGridComponent, [MaterialBaseMixin])
