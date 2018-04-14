import { FormioAppConfig } from 'angular-formio'
import { environment } from './environments/environment'

export class AppConfig extends FormioAppConfig {
  appUrl = environment.appUrl
  apiUrl = 'https://api.form.io'
  icons = 'fontawesome'
  // formOnly?: boolean
}
