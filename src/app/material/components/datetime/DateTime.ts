import { DateTimeComponent } from 'formiojs/lib/components/datetime/DateTime'
import { mixin, MaterialBaseMixin } from '../../lib/index'

export class MaterialDateTimeComponent extends DateTimeComponent {
}

mixin(MaterialDateTimeComponent, [MaterialBaseMixin])
