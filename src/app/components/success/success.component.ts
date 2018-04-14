import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { AppDialogComponent } from '../dialog/dialog'
import { Router } from '@angular/router'
import { MdcDialog, MdcDialogRef } from '@angular-mdc/web/dialog'

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SuccessComponent implements OnInit {
  name: string
  dialogRef: MdcDialogRef<AppDialogComponent>

  constructor (
    public dialog: MdcDialog,
    private _router: Router
  ) {}

  ngOnInit () {
    setTimeout(() => {
      this.openDialog()
    })
  }

  openDialog () {
    this.dialogRef = this.dialog.open(AppDialogComponent, {
      escapeToClose: true,
      clickOutsideToClose: true,
      data: {
        title: 'Submission Complete.',
        message: null
      }
    })

    this.dialogRef.beforeClose().subscribe(result => {
      this._router.navigate(['/'])
    })
  }

  closeDialog () {
    this.dialogRef.close()
  }
}
