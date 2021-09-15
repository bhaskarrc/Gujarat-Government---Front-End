import { treasuryBillMessage } from './../../../common/error-message/common-message.constants';
import { element } from 'protractor';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';

import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { CommonListing } from 'src/app/model/common-listing';
import { SelectionModel } from '@angular/cdk/collections';
import { ListValue } from 'src/app/model/paoModel';
@Component({
  selector: 'app-cheque-reprint',
  templateUrl: './cheque-reprint.component.html',
  styleUrls: ['./cheque-reprint.component.css']
})
export class ChequeReprintComponent implements OnInit {
  // form group
  chequeReprintForm: FormGroup;
  // Form control
  formatCtrl: FormControl = new FormControl();
  chequeCtrl: FormControl = new FormControl();
  // Variable
  isTokentable: Boolean = false;
  isSubmitted: Boolean = false;
  // error message
  errorMessages = treasuryBillMessage;
  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder,) { }
  // Lists
  format_list: ListValue[] = [
    { value: '1', viewValue: 'CTS2010' },
    { value: '2', viewValue: 'Regular ' },
  ];
  ontoken() {
    this.isTokentable = true;
    this.isSubmitted = true;
    if (this.chequeReprintForm.valid) {
      this.isSubmitted = false;
      console.log(this.chequeReprintForm.value);
    } else {
      this.isTokentable = false;
    }
  }
  // cheque Reprint Form form control name
  ngOnInit() {
    this.chequeReprintForm = this.fb.group({
      startrange: ['', Validators.required],
      endrange: ['', Validators.required],
      format: ['1', Validators.required]

    });
  }

}