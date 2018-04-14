import { Injectable } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Injectable()
export class AppService {
  private _pageTitle = ''
  constructor (
    private _titleService: Title
  ) {}

  set pageTitle (title) {
    this._pageTitle = title
    this._titleService.setTitle(title)
  }

  get pageTitle () {
    return this._pageTitle
  }
}
