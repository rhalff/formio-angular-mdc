import { GmapComponent } from 'formiojs/lib/components/gmap/Gmap'
import { mixin, MaterialBaseMixin } from '../../lib/index'

export class MaterialGmapComponent extends GmapComponent {
}

mixin(MaterialGmapComponent, [MaterialBaseMixin])
