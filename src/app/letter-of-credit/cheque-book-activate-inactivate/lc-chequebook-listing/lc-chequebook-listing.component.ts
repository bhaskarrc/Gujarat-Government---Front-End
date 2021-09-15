import { Component, OnInit, ElementRef } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { ListValue, ChequebookDetails } from 'src/app/model/letter-of-credit';
import { LetterOfCreditDirectives } from 'src/app/common/directive/letter-of-credit-directive';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-lc-chequebook-listing',
  templateUrl: './lc-chequebook-listing.component.html',
  styleUrls: ['./lc-chequebook-listing.component.css']
})
export class LcChequebookListingComponent implements OnInit {

  // List of Cheque Type
  ChequeTypeList: ListValue[] = [
    { value: '1', viewValue: 'CTS 2010' },
    { value: '2', viewValue: 'Normal' }
  ];

  // List of Request Type
  RequestTypeList: ListValue[] = [
    { value: '1', viewValue: 'Activate' },
    { value: '2', viewValue: 'Inactivate' }
  ];

  // List of Status
  StatusTypeList: ListValue[] = [
    { value: '1', viewValue: 'Authorized' },
    { value: '2', viewValue: 'In Process' },
    { value: '3', viewValue: 'Returned' }
  ];

  // Display data for Chequebook Details
  ChequbookDetailsData: ChequebookDetails[] = [
    {
      referenceNumber: '19-20/LC/CB/001',
      referenceDate: '17-Apr-2020 06:50',
      typeOfRequest: 'Activate',
      startingChequeSeries: 'EE002-420101',
      endingChequeSeries: 'EE002-420200',
      receivedFrom: 'ABC User',
      receivedDate: '16-Apr-2020 02:25',
      sentTo: 'MNOP User',
      sentDate: '16-Apr-2020 11:30',
      lyingWith: 'XYZ User',
      workFlowStatus: 'Authorized by Approver',
      status: 'In Process',
    },
    {
      referenceNumber: '19-20/LC/CB/002',
      referenceDate: '17-Apr-2020 06:50',
      typeOfRequest: 'Activate',
      startingChequeSeries: 'EE002-420201',
      endingChequeSeries: 'EE002-420300',
      receivedFrom: 'ABC User',
      receivedDate: '16-Apr-2020 02:25',
      sentTo: 'MNOP User',
      sentDate: '16-Apr-2020 11:30',
      lyingWith: 'XYZ User',
      workFlowStatus: 'Authorized by Approver',
      status: 'In Process',
    },
    {
      referenceNumber: '19-20/LC/CB/003',
      referenceDate: '17-Apr-2020 06:50',
      typeOfRequest: 'Inactivate',
      startingChequeSeries: 'EE002-420301',
      endingChequeSeries: 'EE002-420400',
      receivedFrom: 'PQR User',
      receivedDate: '16-Apr-2020 02:25',
      sentTo: 'MNOP User',
      sentDate: '16-Apr-2020 11:30',
      lyingWith: 'XYZ User',
      workFlowStatus: 'Authorized by Approver',
      status: 'In Process',
    }
  ];

  // Data Column for Chequebook Details Table
  ChequbookDetailsDataColumn: string[] = [
    'srno',
    'referenceNumber',
    'referenceDate',
    'typeOfRequest',
    'startingChequeSeries',
    'endingChequeSeries',
    'receivedFrom',
    'receivedDate',
    'sentTo',
    'sentDate',
    'lyingWith',
    'workFlowStatus',
    'status',
    'action'
  ];
  workFlowData = 'fromLcChequebookActivateInactivate';
  todayDate = new Date();
  ChequeTypeCTRL: FormControl = new FormControl();
  RequestTypeCTRL: FormControl = new FormControl();
  StatusCTRL: FormControl = new FormControl();
  lcChequeBookActivateInactivateForm: FormGroup;
  ChequbookDetailsDataSource = new MatTableDataSource<ChequebookDetails>(this.ChequbookDetailsData);

  constructor(private fb: FormBuilder, private el: ElementRef, public dialog: MatDialog, private router: Router) { }

  // Create object to access Methods of Letter of Credit Directive
  directiveObject = new LetterOfCreditDirectives(this.router, this.dialog, this.el);

  ngOnInit() {
    this.lcChequeBookActivateInactivateFormData();
  }

  // Form Fields Initialization
  lcChequeBookActivateInactivateFormData() {
    this.lcChequeBookActivateInactivateForm = this.fb.group({
      requestType: [''],
      chequeType: ['1'],
      sentFromDate: [''],
      sentToDate: [''],
      lyingWith: [''],
      status: [''],
      referenceFromDate: [''],
      referenceToDate: [''],
      receiveFromDate: [''],
      receiveToDate: [''],
    });
  }
}
