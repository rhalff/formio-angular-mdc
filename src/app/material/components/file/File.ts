import { FileComponent } from 'formiojs/lib/components/file/File'
import { mixin, MaterialBaseMixin } from '../../lib/index'

export class MaterialFileComponent extends FileComponent {
}

mixin(MaterialFileComponent, [MaterialBaseMixin])
