import { FormComponent } from 'formiojs/lib/components/form/Form'
import { mixin, MaterialBaseMixin } from '../../lib/index'

export class MaterialFormComponent extends FormComponent {}

mixin(MaterialFormComponent, [MaterialBaseMixin])
