import { HTMLComponent } from 'formiojs/lib/components/html/HTML'
import { mixin, MaterialBaseMixin } from '../../lib/index'

export class MaterialHTMLComponent extends HTMLComponent {}

mixin(MaterialHTMLComponent, [MaterialBaseMixin])
