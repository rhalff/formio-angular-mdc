import { ResourceComponent } from 'formiojs/lib/components/resource/Resource'
import { mixin, MaterialBaseMixin } from '../../lib/index'

export class MaterialResourceComponent extends ResourceComponent {
}

mixin(MaterialResourceComponent, [MaterialBaseMixin])
