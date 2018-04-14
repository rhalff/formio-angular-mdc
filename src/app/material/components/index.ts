import { MaterialAddressComponent } from './address/Address'
import { MaterialBaseComponent } from './base/Base'
import { MaterialContentComponent } from './content/Content'
import { MaterialContainerComponent } from './container/Container'
import { MaterialDataGridComponent } from './datagrid/DataGrid'
import { MaterialDateTimeComponent } from './datetime/DateTime'
import { MaterialDayComponent } from './day/Day'
import { MaterialEditGridComponent } from './editrgrid/EditGrid'
import { MaterialHTMLComponent } from './html/HTML'
import { MaterialHiddenComponent } from './hidden/Hidden'
import { MaterialFormComponent } from './form/Form'
import { MaterialTextFieldComponent } from './textfield/TextField'
import { MaterialPhoneNumberComponent } from './phonenumber/PhoneNumber'
import { MaterialEmailComponent } from './email/Email'
import { MaterialTimeComponent } from './time/Time'
import { MaterialCheckBoxComponent } from './checkbox/Checkbox'
import { MaterialCurrencyComponent } from './currency/Currency'
import { MaterialFieldsetComponent } from './fieldset/Fieldset'
import { MaterialSignatureComponent } from './signature/Signature'
import { MaterialSelectComponent } from './select/Select'
import { MaterialResourceComponent } from './resource/Resource'
import { MaterialTextAreaComponent } from './textarea/TextArea'
import { MaterialButtonComponent } from './button/Button'
import { MaterialNumberComponent } from './number/Number'
import { MaterialPasswordComponent } from './password/Password'
import { MaterialPanelComponent } from './panel/Panel'
import { MaterialColumnComponent } from './columns/Column'
import { MaterialColumnsComponent } from './columns/Columns'
import { MaterialTableComponent } from './table/Table'
import { MaterialUnknownComponent } from './unknown/Unknown'
import { MaterialRadioComponent } from './radio/Radio'
import { MaterialSelectBoxesComponent } from './selectboxes/SelectBoxes'
import { MaterialSurveyComponent } from './survey/Survey'
import { MaterialWellComponent } from './well/Well'
import { MaterialGmapComponent } from './gmap/Gmap'
import { MaterialFileComponent } from './file/File'
import { UnknownComponent } from 'formiojs/lib/components/index'
const MaterialioComponentsIndex = {
  address: MaterialAddressComponent,
  base: MaterialBaseComponent,
  content: MaterialContentComponent,
  container: MaterialContainerComponent,
  datagrid: MaterialDataGridComponent,
  datetime: MaterialDateTimeComponent,
  day: MaterialDayComponent,
  htmlelement: MaterialHTMLComponent,
  hidden: MaterialHiddenComponent,
  editgrid: MaterialEditGridComponent,
  form: MaterialFormComponent,
  textfield: MaterialTextFieldComponent,
  phoneNumber: MaterialPhoneNumberComponent,
  email: MaterialEmailComponent,
  time: MaterialTimeComponent,
  checkbox: MaterialCheckBoxComponent,
  currency: MaterialCurrencyComponent,
  fieldset: MaterialFieldsetComponent,
  signature: MaterialSignatureComponent,
  select: MaterialSelectComponent,
  resource: MaterialResourceComponent,
  textarea: MaterialTextAreaComponent,
  button: MaterialButtonComponent,
  number: MaterialNumberComponent,
  password: MaterialPasswordComponent,
  panel: MaterialPanelComponent,
  column: MaterialColumnComponent,
  columns: MaterialColumnsComponent,
  table: MaterialTableComponent,
  unknown: MaterialUnknownComponent,
  radio: MaterialRadioComponent,
  selectboxes: MaterialSelectBoxesComponent,
  survey: MaterialSurveyComponent,
  well: MaterialWellComponent,
  gmap: MaterialGmapComponent,
  file: MaterialFileComponent,
  create: function (component, options, data, nobuild) {
    let comp = null
    if (!component.type) {
      return null
    } else if (this.hasOwnProperty(component.type)) {
      comp = new this[component.type](component, options, data)
    } else {
      comp = new UnknownComponent(component, options, data)
    }
    if (!nobuild) {
      comp.build()
      comp.isBuilt = true
    }
    return comp
  }
}

export default MaterialioComponentsIndex
