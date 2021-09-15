import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { ListValue, LcOpeningRequest } from 'src/app/model/letter-of-credit';
import { LetterOfCreditDirectives } from 'src/app/common/directive/letter-of-credit-directive';

@Component({
  selector: 'app-lc-opening-request-to',
  templateUrl: './lc-opening-request-to.component.html',
  styleUrls: ['./lc-opening-request-to.component.css']
})
export class LcOpeningRequestToComponent implements OnInit {

  // Table Data of LC Account Listing Division
  LcOpeningRequestSavedData: LcOpeningRequest[] = [
    {
      referenceNo: '19-20/LC/OPR/001', referenceDate: new Date('04/16/2020'),
      divisionName: 'Director, Sardar Patel Zological Park, kevadia',
      officeName: 'Director, Sardar Patel Zological Park, kevadia',
      cardexNo: '141', ddoCode: '467', ddoName: 'Director, Sardar Patel Zological Park, kevadia',
      circleName: 'Conservator of Forest, Wild Life Circle, Vadodara',
      receivedFrom: 'ABC user', receivedDate: new Date('04/16/2020'),
      sentTo: 'MNOP user', sentDate: new Date('04/16/2020'), lyingWith: 'XYZ user', status: 'In process',
   workflowStatus: 'Pending'
    }
  ];

  // Table Columns of LC Account Listing AG
  LcOpeningRequestSavedDataColumn: string[] = [
    'srNo', 'referenceNo', 'referenceDate', 'divisionName', 'officeName', 'cardexNo',
    'ddoCode', 'circleName', 'receivedFrom', 'receivedDate', 'sentTo',
    'sentDate', 'lyingWith', 'workflowStatus', 'status', 'action'
  ];

  // List of Statuses
  StatusList: ListValue[] = [
    { value: '1', viewValue: 'Authorized' },
    { value: '2', viewValue: 'In Process' },
    { value: '3', viewValue: 'Returned' }
  ];

  // List of Department
  departmentList: ListValue[] = [
    { value: '1', viewValue: 'Forest And Environment Department' },
    { value: '2', viewValue: 'Narmada, Water Resources, Water Supply And Kalpsar Department' },
    { value: '3', viewValue: 'Road and Building Department' },
  ];

  // List of Circle Name
  circleNameList: ListValue[] = [
    { value: '1', viewValue: 'Dir. Parks & Garden, G. S. Gnr.' },
    { value: '2', viewValue: 'Supt.Engr.C.P.Circle, Gandhinagar' },
    { value: '3', viewValue: 'Pay & Accounts Officer, N.W.R. & W.S. Deptt. Gnr.' },
    { value: '4', viewValue: 'Supdt. Eng. Elect. Eng. R.& B. Circle, Gnr.' },
    { value: '5', viewValue: 'Supdt. Eng. State Road Project Circle, Gnr.' },
  ];

  // List of Division Names
  divisionNameList: ListValue[] = [
    { value: '1', viewValue: 'Con. Of forest (Account) Gandhinagar' },
    { value: '2', viewValue: 'Dy. Con. Of Forest Publicity & Liaison, Gandhinagar' },
    { value: '3', viewValue: 'Dy. Con. Of Forest Training Centre, Gandhinagar' },
    { value: '4', viewValue: 'Dy. Conservator Of Forest Gandhinagar Division, Gandhinagar' },
  ];

  // List of Office Names
  officeNameList: ListValue[] = [
    { value: '1', viewValue: 'Deputy Conservator of Forest' }
  ];


  // List of Workflow Statuses
  workflowStatusList: any[] = [
    { value: '1', viewValue: 'Authorized' },
    { value: '2', viewValue: 'Pending' },
    { value: '3', viewValue: 'Returned' }
  ];

  workFlowData = 'fromLCAccountOpeningRequest';
  todayDate = new Date();
  isSearch: boolean;
  accountClosingRequestForm: FormGroup;
  StatusCtrl: FormControl = new FormControl();
  departmentCtrl: FormControl = new FormControl();
  circleNameCtrl: FormControl = new FormControl();
  divisionNameCtrl: FormControl = new FormControl();
  officeNameCtrl: FormControl = new FormControl();
 workflowStatusCtrl: FormControl = new FormControl();
  LcOpeningRequestSavedDataSource = new MatTableDataSource<any>(this.LcOpeningRequestSavedData);

  constructor(private fb: FormBuilder, private el: ElementRef, public dialog: MatDialog, private router: Router) { }

  // Create object to access Methods of Letter of Credit Directive
  directiveObject = new LetterOfCreditDirectives(this.router, this.dialog, this.el);

  ngOnInit() {
    this.accountClosingRequestFormData();
  }

  // Initialize Form Fields
  accountClosingRequestFormData() {
    this.accountClosingRequestForm = this.fb.group({
      department: [''],
      cardexNumber: [''],
      ddoNumber: [''],
      circleName: [''],
      divisionName: [''],
      officeName: [''],
      referenceFromDate: [''],
      referenceToDate: [''],
      status: [''],
      lyingWith: [''],
       workflowStatus: [''],
    });
  }

}
