import { MaterialBaseComponent } from '../base/Base'
export class MaterialUnknownComponent extends MaterialBaseComponent {
  build () {
    this.element = this.ce('div', {
      id: this.id
    })
    this.element.appendChild(this.text(`Unknown component: ${this.component.type}`))
    return this.element
  }
}
