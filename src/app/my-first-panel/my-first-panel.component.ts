import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-my-first-panel',
  templateUrl: './my-first-panel.component.html',
  styleUrls: ['./my-first-panel.component.css']
})
export class MyFirstPanelComponent  {

  constructor(
    public dialogRef: MatDialogRef<MyFirstPanelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
export interface DialogData {
  title: string;
  message: string;
}