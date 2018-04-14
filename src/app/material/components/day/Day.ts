import { DayComponent } from 'formiojs/lib/components/day/Day'
import { mixin, MaterialBaseMixin } from '../../lib/index'

export class MaterialDayComponent extends DayComponent {
}

mixin(MaterialDayComponent, [MaterialBaseMixin])
