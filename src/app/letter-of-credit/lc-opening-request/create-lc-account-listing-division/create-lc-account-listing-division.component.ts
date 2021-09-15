import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { LcOpeningRequest, ListValue } from 'src/app/model/letter-of-credit';
import { LetterOfCreditDirectives } from 'src/app/common/directive/letter-of-credit-directive';

@Component({
  selector: 'app-create-lc-account-listing-division',
  templateUrl: './create-lc-account-listing-division.component.html',
  styleUrls: ['./create-lc-account-listing-division.component.css']
})
export class CreateLcAccountListingDivisionComponent implements OnInit {

  // Table Data of LC Account Listing Division
  LcOpeningRequestSavedData: LcOpeningRequest[] = [
    {
      referenceNo: '19-20/LC/OPR/001',
      referenceDate: new Date(),
      divisionName: 'Director,Sardar Patel ZologicalPark, kevadia',
      officeName: 'Director, Sardar Patel Zological Park, kevadia',
      cardexNo: '141',
      ddoCode: '467',
      ddoName: 'Director, Sardar Patel Zological Park, kevadia',
      circleName: 'Conservator of Forest, Wild Life Circle, Vadodara',
      receivedFrom: 'ABC user',
      receivedDate: new Date('04/16/2020'),
      sentTo: 'MNOP user',
      sentDate: new Date('04/16/2020'),
      lyingWith: 'XYZ user',
      status: 'Pending',
      workflowStatus: 'Pending',
    },
  ];

  // Table Columns of LC Account Listing AG
  LcOpeningRequestSavedDataColumn: string[] = [
    'srNo',
    'referenceNo',
    'referenceDate',
    'divisionName',
    'officeName',
    'cardexNo',
    'ddoCode',
    'circleName',
    'receivedFrom',
    'receivedDate',
    'sentTo',
    'sentDate',
    'lyingWith',
    'workflowStatus',
    'status',
    'action'
  ];

  // List of Statuses
  StatusList: any[] = [
    { value: '1', viewValue: 'Authorized' },
    { value: '2', viewValue: 'Pending' },
    { value: '3', viewValue: 'Returned' }
  ];

  // List of Workflow Statuses
  workflowStatusList: ListValue[] = [
    { value: '1', viewValue: 'Authorized' },
    { value: '2', viewValue: 'Pending' },
    { value: '3', viewValue: 'Returned' }
  ];

  todayDate = new Date();
  workFlowData = 'fromLCAccountOpeningRequest';
  isSearch: boolean;
  accountClosingRequestForm: FormGroup;
  StatusCtrl: FormControl = new FormControl();
  workFlowStatusCtrl: FormControl = new FormControl();
  LcOpeningRequestSavedDataSource = new MatTableDataSource<LcOpeningRequest>(this.LcOpeningRequestSavedData);

  constructor(private fb: FormBuilder, private el: ElementRef, public dialog: MatDialog, private router: Router) { }

  // Create object to access Methods of Letter of Credit Directive
  directiveObject = new LetterOfCreditDirectives(this.router, this.dialog, this.el);

  ngOnInit() {
    this.accountClosingRequestFormData();
  }

  // Initialize Form Fields
  accountClosingRequestFormData() {
    this.accountClosingRequestForm = this.fb.group({
      referenceNumber: [''],
      referenceFromDate: [''],
      referenceToDate: [''],
      status: [''],
      workflowStatus: [''],
      lyingWith: [''],
    });
  }

  // Method to delete row
  delete(index) {
    this.LcOpeningRequestSavedDataSource.data.splice(index, 1);
    this.LcOpeningRequestSavedDataSource = new MatTableDataSource(this.LcOpeningRequestSavedDataSource.data);
  }
}
