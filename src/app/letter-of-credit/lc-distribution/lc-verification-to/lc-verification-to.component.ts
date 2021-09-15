import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { ListValue, LCDistribution } from 'src/app/model/letter-of-credit';
import { LetterOfCreditDirectives } from 'src/app/common/directive/letter-of-credit-directive';

@Component({
  selector: 'app-lc-verification-to',
  templateUrl: './lc-verification-to.component.html',
  styleUrls: ['./lc-verification-to.component.css']
})
export class LcVerificationToComponent implements OnInit {

  todayDate = new Date();
  isSearch: boolean;
  lcVerificationForm: FormGroup;

  //Table Data for LC Verification TO
  LcdistributionDATA: LCDistribution[] = [
    {
      referenceNo: '19-20/LC/CLR/001', divisionCode: 'AFR007',
      divisionName: 'Dy. Con. of Forest training Center, Gandhinagar', lcNo: 'LC57SE001EE0010001',
      entryType: 'Distribution', lcAmount: '450000000', lcIssueDate: '15-Jun-2019 03:31',
      receivedFrom: 'TestUser2', receivedDate: '16-Jun-2020 01:25',
      sentTo: 'TestUser1', sentDate: '17-Jun-2020 11:02', lyingWith: 'TestUser2', status: 'Authorized',
      authorizedDate: '17-Jun-2020 11:30', referenceDate: ''
    },
    {
      referenceNo: '19-20/LC/CLR/002', divisionCode: 'AFR007',
      divisionName: 'Dy. Con. of Forest training Center, Gandhinagar', lcNo: 'LC57SE001EE0010002',
      entryType: 'Distribution', lcAmount: '450000000', lcIssueDate: '15-Jun-2019 03:31',
      receivedFrom: 'TestUser2', receivedDate: '16-Jun-2020 01:25',
      sentTo: 'TestUser1', sentDate: '17-Jun-2020 11:02', lyingWith: 'TestUser2', status: 'Authorized',
      authorizedDate: '17-Jun-2020 11:30', referenceDate: ''
    },
    {
      referenceNo: '19-20/LC/CLR/003', divisionCode: 'AFR007',
      divisionName: 'Dy. Con. of Forest training Center, Gandhinagar', lcNo: 'LC57SE001EE0010003',
      entryType: 'Distribution', lcAmount: '450000000', lcIssueDate: '15-Jun-2019 03:31',
      receivedFrom: 'TestUser2', receivedDate: '16-Jun-2020 01:25',
      sentTo: 'TestUser1', sentDate: '17-Jun-2020 11:02', lyingWith: 'TestUser2', status: 'Authorized',
      authorizedDate: '17-Jun-2020 11:30', referenceDate: ''
    },
    {
      referenceNo: '19-20/LC/CLR/004', divisionCode: 'AFR007',
      divisionName: 'Dy. Con. of Forest training Center, Gandhinagar', lcNo: 'LC57SE001EE0010004',
      entryType: 'Distribution', lcAmount: '450000000', lcIssueDate: '15-Jun-2019 03:31',
      receivedFrom: 'TestUser2', receivedDate: '16-Jun-2020 01:25',
      sentTo: 'TestUser1', sentDate: '17-Jun-2020 11:02', lyingWith: 'TestUser2', status: 'Authorized',
      authorizedDate: '17-Jun-2020 11:30', referenceDate: ''
    }
  ];

  // Table Columns for LC Verification TO Table
  LcdistributionDATAColumn: string[] = [
    'select', 'srno', 'referenceNo', 'divisionCode', 'divisionName', 'lcNo', 'entryType', 'lcAmount', 'lcIssueDate',
    'receivedFrom', 'receivedDate', 'sentTo', 'sentDate', 'lyingWith', 'status', 'authorizedDate', 'action'
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

  // List of Division Code
  DivisionCodeList: ListValue[] = [
    { value: '1', viewValue: 'AFR002' },
    { value: '2', viewValue: 'AFR003' },
    { value: '3', viewValue: 'AFR005' },
    { value: '4', viewValue: 'AFR007' },
  ];

  // List of Division Name
  DivisionNameList: ListValue[] = [
    { value: '1', viewValue: 'Dy Conservator Of Forest Gandhinagar Division, Gandhinagar' },
    { value: '2', viewValue: 'Con Of forest (Account) Gandhinagar' },
    { value: '3', viewValue: 'Dy Con Of Forest Publicity & Liaison, Gandhinagar' },
    { value: '4', viewValue: 'Dy. Con. Of Forest Training Centre, Gandhinagar' },
  ];

  // List of Circle Code
  CircleCodeList: ListValue[] = [
    { value: '1', viewValue: 'AFR001' },
    { value: '2', viewValue: 'CFNGWLC' },
    { value: '3', viewValue: 'CFRST' },
    { value: '4', viewValue: 'EE014' },
    { value: '5', viewValue: 'SE001' },
  ];

  // List of Circle Name
  CircleNameList: ListValue[] = [
    { value: '1', viewValue: 'Dir. Parks & Garden, G. S. Gnr. ' },
    { value: '2', viewValue: 'Principal Chief Conservator Of Forest Guj.St. Gnr' },
    { value: '3', viewValue: 'Supdt. Eng. Sujalam Suphalam Circle. Gnr.' },
    { value: '4', viewValue: 'Supt .Engr.C.P.Circle, Gandhinagar' },
  ];

  valueBetweenError = false;
  workFlowData = 'fromLCVerificationToEdit';
  EntryTypeCtrl: FormControl = new FormControl();
  StatusCtrl: FormControl = new FormControl();
  DivisionCodeCtrl: FormControl = new FormControl();
  DivisionNameCtrl: FormControl = new FormControl();
  CircleCodeCtrl: FormControl = new FormControl();
  CircleNameCtrl: FormControl = new FormControl();
  LcdistributionDataSource = new MatTableDataSource<any>(this.LcdistributionDATA);

  constructor(private fb: FormBuilder, private el: ElementRef, public dialog: MatDialog, private router: Router) { }

  // Create object to access Methods of Letter of Credit Directive
  directiveObject = new LetterOfCreditDirectives(this.router, this.dialog, this.el);

  ngOnInit() {
    this.lcVerificationFormData();
  }

  // Initialize Form Fields
  lcVerificationFormData() {
    this.lcVerificationForm = this.fb.group({
      circleCode: [''],
      circleName: [''],
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
