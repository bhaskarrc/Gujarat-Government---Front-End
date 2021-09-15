import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from 'src/app/model/emd';
import { Component, OnInit, Inject } from '@angular/core';
@Component({
  selector: 'app-go-dialog',
  templateUrl: './go-dialog.component.html',
  styleUrls: ['./go-dialog.component.css']
})
export class GoDialogComponent implements OnInit {
  passForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<GoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private router: Router,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.passForm = this.fb.group({
      password: [''],
    });
  }
  // closes dialog
  onNoClick(): void {
    this.dialogRef.close('no');
  }


}
