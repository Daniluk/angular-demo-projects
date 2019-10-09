import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { IDialogData } from './interfaces/IDialogData';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDialogData
  ) {
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  isInvalid(user) {
    if (user.email === '' || user.password === ''  ) {
      return true;
    }
    // console.log('isInvalid', user);
    return false;
    // return (checkCondition_to_be_met || clicked_on_prev_button);
 }
}
