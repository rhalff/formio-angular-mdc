import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component'
import { AppFormComponent } from './components/form/form.component'
import { MaterialFormioComponent } from './material/formio.component'
import {
  FormioModule,
  FormioAppConfig,
  FormioLoader
} from 'angular-formio'
import { AppConfig } from '../app.config'
import { PublicLoader } from './material/lib/index'
import { AppService } from './app.service'
import { RouterModule } from '@angular/router'
import { SuccessComponent } from './components/success/success.component'
import { AppDialogComponent } from './components/dialog/dialog'
import { MdcModule } from './mdc.module'

@NgModule({
  declarations: [
    AppComponent,
    AppFormComponent,
    MaterialFormioComponent,
    SuccessComponent,
    AppDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdcModule,
    FormioModule,
    RouterModule.forRoot([
      {
        path: '',
        component: AppFormComponent
      },
      {
        path: 'success',
        component: SuccessComponent
      }
    ])
  ],
  providers: [
    AppService,
    {
      provide: FormioAppConfig,
      useClass: AppConfig
    },
    {
      provide: FormioLoader,
      useClass: PublicLoader
    }
  ],
  entryComponents: [
    AppFormComponent,
    AppDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
