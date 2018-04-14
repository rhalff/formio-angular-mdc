import { Component, Inject, ViewEncapsulation } from '@angular/core'
import { MDC_DIALOG_DATA, MdcDialogRef } from '@angular-mdc/web/dialog'

@Component({
  selector: 'app-dialog',
  styleUrls: ['dialog.scss'],
  templateUrl: 'dialog.html',
  encapsulation: ViewEncapsulation.None

})
export class AppDialogComponent {
  constructor (
    public dialogRef: MdcDialogRef<AppDialogComponent>,
    @Inject(MDC_DIALOG_DATA) public data: any) { }

  onClick (): void {
    this.dialogRef.close()
  }
}
