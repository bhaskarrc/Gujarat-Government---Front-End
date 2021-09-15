import { Component, OnInit, ElementRef } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ListValue, ChequebookDetailsTO } from 'src/app/model/letter-of-credit';
import { LetterOfCreditDirectives } from 'src/app/common/directive/letter-of-credit-directive';

@Component({
  selector: 'app-lc-chequebook-listing-to',
  templateUrl: './lc-chequebook-listing-to.component.html',
  styleUrls: ['./lc-chequebook-listing-to.component.css']
})
export class LcChequebookListingToComponent implements OnInit {

  // List of Cheque Type
  ChequeTypeList: ListValue[] = [
    { value: '1', viewValue: 'Normal' },
    { value: '2', viewValue: 'CTS 2010' }
  ];

  // List of Request Type
  RequestTypeList: ListValue[] = [
    { value: '1', viewValue: 'Activate' },
    { value: '2', viewValue: 'Inactivate' }
  ];

  // List of Status Type
  StatusTypeList: ListValue[] = [
    { value: '1', viewValue: 'Authorized' },
    { value: '2', viewValue: 'In Processes' },
    { value: '3', viewValue: 'Returned' }
  ];

  // List of Division Code
  DivisionCodeList: ListValue[] = [
    { value: '1', viewValue: 'AFR002' },
    { value: '2', viewValue: 'AFR003' },
    { value: '3', viewValue: 'AFR005' },
    { value: '4', viewValue: 'AFR007' }
  ];

  // List of Division Name
  DivisionNameList: ListValue[] = [
    { value: '1', viewValue: 'Con Of forest (Account) Gandhinagar' },
    { value: '2', viewValue: 'Dy Conservator Of Forest Gandhinagar Division, Gandhinagar' },
    { value: '3', viewValue: 'Dy Con Of Forest Publicity & Liaison, Gandhinagar' },
    { value: '4', viewValue: 'Dy. Con Of Forest Training Center, Gandhinagr' }
  ];

  // Table Data for Chequebook Details
  ChequbookDetailsData: ChequebookDetailsTO[] = [
    {
      referenceNumber: '19-20/LC/CB/001', referenceDate: '17-Apr-2020 02:25',
      divisionCode: 'AFR007', divisionName: 'Dy. Con Of Forest Training Center, Gandhinagr',
      typeOfRequest: 'Activate', startingChequeSeries: 'AFR007-230201',
      endingChequeSeries: 'EE001-320300', receivedFrom: 'ABC User',
      receivedDate: '16-Apr-2020 07:55', sentTo: 'MNOP User', sentDate: '14-Apr-2020 01:11', lyingWith: 'XYZ User',
      workFlowStatus: 'Authorized by Approver', status: 'In Process'
    },
    {
      referenceNumber: '19-20/LC/CB/002', referenceDate: '17-Apr-2020 02:25',
      divisionCode: 'AFR007', divisionName: 'Dy. Con Of Forest Training Center, Gandhinagr',
      typeOfRequest: 'Activate', startingChequeSeries: 'EE001-320301', endingChequeSeries:
        'EE001-320400', receivedFrom: 'ABC User',
      receivedDate: '16-Apr-2020 07:55', sentTo: 'MNOP User', sentDate: '14-Apr-2020 01:11', lyingWith: 'XYZ User',
      workFlowStatus: 'Authorized by Approver', status: 'In Process'
    },
    {
      referenceNumber: '19-20/LC/CB/003', referenceDate: '17-Apr-2020 02:25',
      divisionCode: 'AFR001', divisionName: 'Ex Eng C P Div No 1, Gandhinagar',
      typeOfRequest: 'Inactivate', startingChequeSeries: 'EE001-320501',
      endingChequeSeries: 'EE001-320600', receivedFrom: 'PQR User',
      receivedDate: '16-Apr-2020 07:55', sentTo: 'MNOP User', sentDate: '14-Apr-2020 01:11', lyingWith: 'XYZ User',
      workFlowStatus: 'Authorized by Approver', status: 'In Process'
    },
  ];

  // Table Column for Cheque book Details Table
  ChequbookDetailsDataColumn: string[] = [
    'srNo', 'referenceNumber', 'referenceDate', 'divisionCode',
    'divisionName', 'typeOfRequest', 'startingChequeSeries', 'endingChequeSeries',
    'receivedFrom', 'receivedDate', 'sentTo', 'sentDate', 'lyingWith', 'workFlowStatus', 'status', 'action'
  ];
  workFlowData = 'fromLcChequebookActivateInactivate';
  todayDate = new Date();
  ChequeTypeCTRL: FormControl = new FormControl();
  RequestTypeCTRL: FormControl = new FormControl();
  StatusCTRL: FormControl = new FormControl();
  DivisionCodeCTRL: FormControl = new FormControl();
  DivisionNameCTRL: FormControl = new FormControl();
  lcChequeBookActivateInactivateForm: FormGroup;
  ChequbookDetailsDataSource = new MatTableDataSource<ChequebookDetailsTO>(this.ChequbookDetailsData);

  constructor(private fb: FormBuilder, private el: ElementRef, public dialog: MatDialog, private router: Router) { }

  // Create object to access Methods of Letter of Credit Directive
  directiveObject = new LetterOfCreditDirectives(this.router, this.dialog, this.el);

  ngOnInit() {
    this.lcChequeBookActivateInactivateFormData();
  }

  // Initialize the Form Fields
  lcChequeBookActivateInactivateFormData() {
    this.lcChequeBookActivateInactivateForm = this.fb.group({
      requestType: [''],
      chequeType: [''],
      receivedFromDate: [''],
      receivedToDate: [''],
      lyingWith: [''],
      status: [''],
      referenceFromDate: [''],
      referenceToDate: [''],
      divisionCode: [''],
      divisionName: [''],
      sentFromDate: [''],
      sentToDate: [''],
    });
  }
}
