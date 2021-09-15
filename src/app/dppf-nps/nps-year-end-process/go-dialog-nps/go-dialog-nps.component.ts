import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from 'src/app/model/standing-charge';
import { Router } from '@angular/router';

@Component({
  selector: 'app-go-dialog-nps',
  templateUrl: './go-dialog-nps.component.html',
  styleUrls: ['./go-dialog-nps.component.css']
})
export class GoDialogNpsComponent implements OnInit {

  passForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<GoDialogNpsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private router: Router,
    private fb: FormBuilder,
    private el: ElementRef) { }

  ngOnInit() {
    this.passForm = this.fb.group({
      password: [''],
    });
  }

  onNoClick(): void {
    this.dialogRef.close('no');
  }

}
