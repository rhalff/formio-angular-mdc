import { Injectable } from '@angular/core'

@Injectable()
export class PublicLoader {
  static instance: any
  public loading = true

  constructor () {
    if (PublicLoader.instance) {
      throw Error('Loader already instantiated')
    }
    PublicLoader.instance = this
  }

  static getInstance () {
    return PublicLoader.instance
  }
}
