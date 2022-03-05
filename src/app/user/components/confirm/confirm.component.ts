import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../../interface/user.interface';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  constructor( private dialogRef:MatDialogRef<ConfirmComponent>, @Inject(MAT_DIALOG_DATA) public data: User ) { }

  ngOnInit(): void {
  }

  delete(){
    this.dialogRef.close(true);
  }
  close(){
    this.dialogRef.close();
  }
}
