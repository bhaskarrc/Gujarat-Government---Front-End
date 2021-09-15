import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { ListValue, LCDistribution } from 'src/app/model/letter-of-credit';
import { LetterOfCreditDirectives } from 'src/app/common/directive/letter-of-credit-directive';

@Component({
  selector: 'app-lc-distribution-circle',
  templateUrl: './lc-distribution-circle.component.html',
  styleUrls: ['./lc-distribution-circle.component.css']
})
export class LcDistributionCircleComponent implements OnInit {

  isSearch: boolean;
  lcVerificationForm: FormGroup;

  // Table Data for LC Distribution
  LcdistributionDATA: LCDistribution[] = [
    {
      referenceNo: '19-20/Grant/GCO/001', referenceDate: '02-Apr-2020 09:21', divisionCode: 'AFR007',
      divisionName: 'Dy. Con. of Forest training Center, Gandhinagar', lcNo: 'LC57SE001EE0010001',
      entryType: 'Distribution', lcAmount: '450000000', lcIssueDate: '02-Apr-2019 04:14', lyingWith: 'Test User 1',
      status: 'Authorized', authorizedDate: '02-Apr-2019 11:30', receivedFrom: '', receivedDate: '', sentTo: '', sentDate: '',
    },
    {
      referenceNo: '19-20/Grant/GCO/002', referenceDate: '02-Apr-2020 09:21', divisionCode: 'AFR007',
      divisionName: 'Dy. Con. of Forest training Center, Gandhinagar', lcNo: 'LC57SE001EE0010002',
      entryType: 'Distribution', lcAmount: '450000000', lcIssueDate: '02-Apr-2019 04:14', lyingWith: 'Test User 1',
      status: 'Authorized', authorizedDate: '02-Apr-2019 01:50', receivedFrom: '', receivedDate: '', sentTo: '', sentDate: '',
    },
    {
      referenceNo: '19-20/Grant/GCO/003', referenceDate: '02-Apr-2020 09:21', divisionCode: 'AFR007',
      divisionName: 'Dy. Con. of Forest training Center, Gandhinagar', lcNo: 'LC57SE001EE0010003',
      entryType: 'Distribution', lcAmount: '450000000', lcIssueDate: '02-Apr-2019 04:14', lyingWith: 'Test User 1',
      status: 'Authorized', authorizedDate: '02-Apr-2019 05:17', receivedFrom: '', receivedDate: '', sentTo: '', sentDate: '',
    },
    {
      referenceNo: '19-20/Grant/GCO/004', referenceDate: '02-Apr-2020 09:21', divisionCode: 'AFR007',
      divisionName: 'Dy. Con. of Forest training Center, Gandhinagar', lcNo: 'LC57SE001EE0010004',
      entryType: 'Distribution', lcAmount: '450000000', lcIssueDate: '02-Apr-2019 04:14', lyingWith: 'Test User 1',
      status: 'Authorized', authorizedDate: '02-Apr-2019 09:00', receivedFrom: '', receivedDate: '', sentTo: '', sentDate: '',
    }
  ];

  // Table Columns for LC Distribution Table
  LcdistributionDATAColumn: string[] = [
    'select', 'srno', 'referenceNo', 'referenceDate', 'divisionCode', 'divisionName',
    'lcNo', 'entryType', 'lcAmount', 'lcIssueDate', 'lyingWith', 'status', 'authorizedDate', 'action'
  ];

  // List of Entry Type
  EntryTypeList: ListValue[] = [
    { value: '1', viewValue: 'Distribution' },
    { value: '2', viewValue: 'Withdrawal' },
  ];

  // List of Status
  StatusList: ListValue[] = [
    { value: '1', viewValue: 'Authorized' },
    { value: '2', viewValue: 'Pending' },
    { value: '3', viewValue: 'Returned' },
    // { value: '4', viewValue: 'Approved' },
  ];

  // List of Division Codes
  DivisionCodeList: ListValue[] = [
    { value: '1', viewValue: 'AFR002' },
    { value: '2', viewValue: 'AFR003' },
    { value: '3', viewValue: 'AFR005' },
    { value: '4', viewValue: 'AFR007' },
  ];

  // List of Division Names
  DivisionNameList: ListValue[] = [
    { value: '1', viewValue: 'Con. Of forest (Account) Gandhinagar' },
    { value: '2', viewValue: 'Dy. Con. Of Forest Publicity & Liaison, Gandhinagar' },
    { value: '3', viewValue: 'Dy. Con. Of Forest Training Centre, Gandhinagar' },
    { value: '4', viewValue: 'Dy. Conservator Of Forest Gandhinagar Division, Gandhinagar' },
  ];

  todayDate = new Date();
  valueBetweenError = false;
  EntryTypeCtrl: FormControl = new FormControl();
  StatusCtrl: FormControl = new FormControl();
  DivisionCodeCtrl: FormControl = new FormControl();
  DivisionNameCtrl: FormControl = new FormControl();
  LcdistributionDataSource = new MatTableDataSource<LCDistribution>(this.LcdistributionDATA);

  constructor(private fb: FormBuilder, private el: ElementRef, public dialog: MatDialog, private router: Router) { }

  // Create object to access Methods of Letter of Credit Directive
  directiveObject = new LetterOfCreditDirectives(this.router, this.dialog, this.el);

  ngOnInit() {
    this.lcVerificationFormData();
  }

  // Initialize Form Fields
  lcVerificationFormData() {
    this.lcVerificationForm = this.fb.group({
      divisionCode: [''],
      divisionName: [''],
      lcIssueFromDate: [''],
      lcIssueToDate: [''],
      entryType: ['1'],
      status: [''],
      lcAmountBetween: [''],
      and: [''],
      referenceFromDate: [''],
      referenceToDate: [''],
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
