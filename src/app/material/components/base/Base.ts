import { BaseComponent } from 'formiojs/lib/components/base/Base'
import { mixin, MaterialBaseMixin } from '../../lib/index'

export class MaterialBaseComponent extends BaseComponent {}

mixin(MaterialBaseComponent, [MaterialBaseMixin])
