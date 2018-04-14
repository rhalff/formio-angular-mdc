import { ButtonComponent } from 'formiojs/lib/components/button/Button'
import { mixin, MaterialBaseMixin } from '../../lib/index'

export class MaterialButtonComponent extends ButtonComponent {
  elementInfo () {
    const info = super.elementInfo()

    info.type = 'button'
    info.attr.type = (this.component.action === 'submit') ? 'submit' : 'button'
    info.attr.class = `mdc-button mdc-button--raised`

    this.component.theme = this.component.theme || 'default'

    if (this.component.block) {
      info.attr.class += ' btn-block'
    }
    if (this.component.customClass) {
      info.attr.class += ` ${this.component.customClass}`
    }
    return info
  }
}

mixin(MaterialButtonComponent, [MaterialBaseMixin])
