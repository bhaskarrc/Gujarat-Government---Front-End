import { Component, OnInit, ElementRef, Inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from 'src/app/model/standing-charge';

@Component({
  selector: 'app-verifypopupdialog',
  templateUrl: './verifypopupdialog.component.html',
  styleUrls: ['./verifypopupdialog.component.css']
})
export class VerifypopupdialogComponent implements OnInit {

  constructor(private elem: ElementRef,
    private toastr: ToastrService,
    private router: Router,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<VerifypopupdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private el: ElementRef,
  ) { }

  ngOnInit() {
  }
  vitocancel(): void {
    this.dialogRef.close();
  }
}
