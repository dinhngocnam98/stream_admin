import { Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-delete-dialog',
  templateUrl: 'delete-dialog.component.html',
  styleUrls: ['delete-dialog.component.scss'],
})
export class DeleteDialogComponent {

  constructor(protected ref: NbDialogRef<DeleteDialogComponent>) {}

  cancel() {
    this.ref.close(false);
  }

  submit() {
    this.ref.close(true);
  }
}
