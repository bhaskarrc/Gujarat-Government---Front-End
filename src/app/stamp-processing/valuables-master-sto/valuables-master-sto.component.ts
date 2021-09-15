import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { SaveConfirmCommonDialogComponent } from '../save-confirm-common-dialog/save-confirm-common-dialog.component';
import { MatDialog } from '@angular/material';
import { CloseConfirmCommonDialogComponent } from '../close-confirm-common-dialog/close-confirm-common-dialog.component';
import { stampProcessMessage } from 'src/app/common/error-message/common-message.constants';
import { StampProcessingDirectives } from 'src/app/common/directive/stamp-processing-directive';

@Component({
  selector: 'app-valuables-master-sto',
  templateUrl: './valuables-master-sto.component.html',
  styleUrls: ['./valuables-master-sto.component.css']
})
export class ValuablesMasterStoComponent implements OnInit {
// Entry Field Details

  status_List: CommonListing[] = [
    { value: '1', viewValue: 'Active'},
    { value: '2', viewValue: 'Inactive'},
  ];

  catNameSecond_List: CommonListing[] = [
    { value: '1', viewValue: 'Cashbox'},
    { value: '2', viewValue: 'Sealed Packet'},
    { value: '3', viewValue: 'Exam Article'},
    { value: '4', viewValue: 'Padlocks and Key'},
    { value: '5', viewValue: 'Others'},
  ];

  statusCtrl: FormControl = new FormControl();
  catNameSecondCtrl: FormControl = new FormControl();
  errorMessages = stampProcessMessage;
  date: any = new Date();
  directiveObject = new StampProcessingDirectives(this.router, this.dialog);

  subValueForm: FormGroup;
  temp2Value = 'Sub-Treasury Office, Gandhinagar';

  constructor(private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.subValueForm = this.fb.group({
      catName: ['', Validators.required],
      catNameSecond: ['', Validators.required],
      subCatName: ['', Validators.required],
      temp1: ['Sub-Treasury Office, Gandhinagar', Validators.required],
      status: ['', Validators.required],
      statusSecond: ['', Validators.required],
    });
  }

  gotoListing() {
    this.router.navigate(['./stamp-processing/strong-room-article-category-master-sto-list']);
  }
}
