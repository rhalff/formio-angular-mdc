import { SignatureComponent } from 'formiojs/lib/components/signature/Signature'
import { mixin, MaterialBaseMixin } from '../../lib/index'

export class MaterialSignatureComponent extends SignatureComponent {
}

mixin(MaterialSignatureComponent, [MaterialBaseMixin])
