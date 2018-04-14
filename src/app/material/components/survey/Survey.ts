import { SurveyComponent } from 'formiojs/lib/components/survey/Survey'
import { mixin, MaterialBaseMixin } from '../../lib/index'

export class MaterialSurveyComponent extends SurveyComponent {
}

mixin(MaterialSurveyComponent, [MaterialBaseMixin])
