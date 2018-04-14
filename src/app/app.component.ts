import { Component } from '@angular/core'
import { AppService } from './app.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor (
    private _appService: AppService
  ) {}

  get title () {
    return this._appService.pageTitle
  }
}
