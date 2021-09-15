import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { ListValue, LcVerification } from 'src/app/model/letter-of-credit';
import { LetterOfCreditDirectives } from 'src/app/common/directive/letter-of-credit-directive';

@Component({
  selector: 'app-lc-verification',
  templateUrl: './lc-verification.component.html',
  styleUrls: ['./lc-verification.component.css']
})
export class LcVerificationComponent implements OnInit {

  isSearch: boolean;
  todayDate = new Date();
  lcVerificationForm: FormGroup;

  //Table Data for LC Verification
  LcdistributionDATA: LcVerification[] = [
    {
      divisionCode: 'AFR007', divisionName: 'Dy. Con. of Forest training Center, Gandhinagar', lcNo: 'TRY/GNR/LC/0001',
      entryType: 'Distribution', lcAmount: '450000000', lcIssueDate: '02-APR-2019', status: 'Authorize', authorizedDate: '02-APR-2019'
    },
    {
      divisionCode: 'AFR007', divisionName: 'Dy. Con. of Forest training Center, Gandhinagar', lcNo: 'TRY/GNR/LC/0001',
      entryType: 'Distribution', lcAmount: '450000000', lcIssueDate: '02-APR-2019', status: 'Authorize', authorizedDate: '02-APR-2019'
    },
    {
      divisionCode: 'AFR007', divisionName: 'Dy. Con. of Forest training Center, Gandhinagar', lcNo: 'TRY/GNR/LC/0001',
      entryType: 'Distribution', lcAmount: '450000000', lcIssueDate: '02-APR-2019', status: 'Authorize', authorizedDate: '02-APR-2019'
    },
    {
      divisionCode: 'AFR007', divisionName: 'Dy. Con. of Forest training Center, Gandhinagar', lcNo: 'TRY/GNR/LC/0001',
      entryType: 'Distribution', lcAmount: '450000000', lcIssueDate: '02-APR-2019', status: 'Authorize', authorizedDate: '02-APR-2019'
    }
  ];

  // Table Columns for LC Verification Table
  LcdistributionDATAColumn: string[] = [
    'select', 'srno', 'divisionCode', 'divisionName', 'lcNo', 'entryType', 'lcAmount', 'lcIssueDate', 'status', 'authorizedDate', 'action'
  ];

  // List of Entry Type
  EntryTypeList: ListValue[] = [
    { value: '1', viewValue: 'Distribution' },
    { value: '2', viewValue: 'Withdrawal' },
  ];

  // List of Status
  StatusList: ListValue[] = [
    { value: '1', viewValue: 'In Process' },
    { value: '2', viewValue: 'Approved' },
    { value: '3', viewValue: 'Authorized' },
    { value: '4', viewValue: 'Returned' },
  ];

  valueBetweenError = false;
  EntryTypeCtrl: FormControl = new FormControl();
  StatusCtrl: FormControl = new FormControl();
  LcdistributionDataSource = new MatTableDataSource<LcVerification>(this.LcdistributionDATA);

  constructor(private fb: FormBuilder, private el: ElementRef, public dialog: MatDialog, private router: Router) { }

  // Create object to access Methods of Letter of Credit Directive
  directiveObject = new LetterOfCreditDirectives(this.router, this.dialog, this.el);

  ngOnInit() {
    this.lcVerificationFormData();
  }

  // Initialize Form Fields
  lcVerificationFormData() {
    this.lcVerificationForm = this.fb.group({
      lcIssueFromDate: [''],
      lcIssueToDate: [''],
      entryType: ['1'],
      status: [''],
      lcAmountBetween: [''],
      and: [''],
      referenceFromDate: [''],
      referenceToDate: [''],
      divisionCode: [''],
      lcNumber: ['']
    });
  }

  // Method to Search
  search() {
    this.isSearch = false;
  }

  // Method to compare amounts
  compareAmount() {
    if (this.lcVerificationForm.controls['lcAmountBetween'].value > this.lcVerificationForm.controls['and'].value) {
      this.valueBetweenError = true;
    } else {
      this.valueBetweenError = false;
    }
  }
}
