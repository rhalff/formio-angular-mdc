import { TableComponent } from 'formiojs/lib/components/table/Table'
import { mixin, MaterialBaseMixin } from '../../lib/index'

export class MaterialTableComponent extends TableComponent {
}

mixin(MaterialTableComponent, [MaterialBaseMixin])
