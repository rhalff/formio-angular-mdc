import { CheckBoxComponent } from 'formiojs/lib/components/checkbox/Checkbox'
import { mixin, MaterialBaseMixin } from '../../lib/index'

export class MaterialCheckBoxComponent extends CheckBoxComponent {
}

mixin(MaterialCheckBoxComponent, [MaterialBaseMixin])
