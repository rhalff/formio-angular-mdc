import { MaterialBaseComponent } from '../base/Base'
import { mixin, MaterialBaseMixin } from '../../lib/index'

export class MaterialHiddenComponent extends MaterialBaseComponent {
  elementInfo () {
    const info = super.elementInfo()

    info.type = 'input'
    info.attr.type = 'hidden'
    info.changeEvent = 'change'

    return info
  }

  createLabel () {
    return
  }
}

mixin(MaterialHiddenComponent, [MaterialBaseMixin])
