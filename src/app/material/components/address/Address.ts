import { AddressComponent } from 'formiojs/lib/components/address/Address'
import { mixin, MaterialBaseMixin } from '../../lib/index'

export class MaterialAddressComponent extends AddressComponent {}

mixin(MaterialAddressComponent, [MaterialBaseMixin])
