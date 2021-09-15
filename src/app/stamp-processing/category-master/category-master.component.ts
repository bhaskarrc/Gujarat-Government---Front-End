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
  selector: 'app-category-master',
  templateUrl: './category-master.component.html',
  styleUrls: ['./category-master.component.css']
})
export class CategoryMasterComponent implements OnInit {

  // Entry Field Details
  catNameDrop_List: CommonListing[] = [
    { value: '1', viewValue: 'Agency License' },
    { value: '2', viewValue: 'Agreement' },
    { value: '3', viewValue: 'Court Fee Label' },
    { value: '4', viewValue: 'Court Fee Paper' },
    { value: '5', viewValue: 'Foreign bill' },
    { value: '6', viewValue: 'Hundi' },
    { value: '7', viewValue: 'Insurance' },
    { value: '8', viewValue: 'Non Judicial Paper' },
    { value: '9', viewValue: 'Notary' },
    { value: '10', viewValue: 'Revenue' },
    { value: '11', viewValue: 'Share transfer' },
    { value: '12', viewValue: 'Special Adhesive' },
  ];

  status_List: CommonListing[] = [
    { value: '1', viewValue: 'Active' },
    { value: '2', viewValue: 'Inactive' },
  ];
  majHead_List: CommonListing[] = [
    { value: '1', viewValue: '0006:State Goods and Services Tax(SGST)' },
    { value: '2', viewValue: '0008:Integrated Goods and Services Tax(IGST)' },
    { value: '3', viewValue: '0020:Corporation Tax' },
    { value: '4', viewValue: '0021:Taxes on Income other than Corporation Tax' },
    { value: '5', viewValue: '0028:Other Taxes on Income and Expenditure' },
    { value: '6', viewValue: '0029:Land Revenue' },
    { value: '7', viewValue: '0030:Stamps and Registration Fees' },
  ];
  subMajHead_List: CommonListing[] = [
    { value: '1', viewValue: '01:Stamps-Judicial' },
    { value: '2', viewValue: '02:Stamp-Non-Judicial' },
    { value: '3', viewValue: '03:Registration Fees' },
  ];
  minMajHead_List: CommonListing[] = [
    { value: '1', viewValue: '101:Court fees realised in stamps' },
    { value: '2', viewValue: '800:Other Receipts' },
    { value: '3', viewValue: '102:Sale of Stamps' },
    { value: '4', viewValue: '103:Duty on Impressing of documents' },
    { value: '5', viewValue: '800:Other Receipts' },
    { value: '6', viewValue: '104:Fees for Registering Documents' },
    { value: '7', viewValue: '800:Other Receipts' },
  ];
  subHead_List: CommonListing[] = [
    { value: '1', viewValue: '01:Court fees realised in stamps' },
    { value: '2', viewValue: '90:Deduct Refund' },
    { value: '3', viewValue: '00:Sale of Stamps' },
    { value: '4', viewValue: '90:Deduct Refund' },
  ];
  purpose_List: CommonListing[] = [
    { value: '1', viewValue: 'Stamp - Judicial' },
    { value: '2', viewValue: 'Stamp - Non Judicial' },
  ];

  finYearCtrl: FormControl = new FormControl();
  catNameCtrl: FormControl = new FormControl();
  majHeadCtrl: FormControl = new FormControl();
  subMajHeadCtrl: FormControl = new FormControl();
  minHeadCtrl: FormControl = new FormControl();
  subHeadCtrl: FormControl = new FormControl();
  purposeCtrl: FormControl = new FormControl();
  treSubTreCtrl: FormControl = new FormControl();
  stampCtrl: FormControl = new FormControl();
  statusCtrl: FormControl = new FormControl();
  date: any = new Date();
  errorMessages = stampProcessMessage;
  directiveObject = new StampProcessingDirectives(this.router, this.dialog);

  catForm: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.catForm = this.fb.group({
      finYear: ['10', Validators.required],
      catName: ['', Validators.required],
      stamp: ['', Validators.required],
      status: ['', Validators.required],
      majorHead: ['', Validators.required],
      majHeadDrop1: ['', Validators.required],
      minHeadDropBud: ['', Validators.required],
      minHeadDrop1: ['', Validators.required],
      subMajHeadDropBud: ['', Validators.required],
      subMajHeadDrop1: ['', Validators.required],
      subHeadDropBud: ['', Validators.required],
      subHeadDrop1: ['', Validators.required],
      purpose: ['', Validators.required],
      purposeDrop: ['', Validators.required],
    });
  }

  gotoListing() {
    this.router.navigate(['./stamp-processing/category-master-list']);
  }

}
