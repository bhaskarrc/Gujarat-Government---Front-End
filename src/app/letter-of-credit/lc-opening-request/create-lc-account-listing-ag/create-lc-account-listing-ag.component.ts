import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
// tslint:disable-next-line: max-line-length
import { ListValue, LcOpeningRequest } from 'src/app/model/letter-of-credit';
import { LetterOfCreditDirectives } from 'src/app/common/directive/letter-of-credit-directive';

@Component({
  selector: 'app-create-lc-account-listing-ag',
  templateUrl: './create-lc-account-listing-ag.component.html',
  styleUrls: ['./create-lc-account-listing-ag.component.css']
})
export class CreateLcAccountListingAgComponent implements OnInit {

  // List of Departments
  DepartmentList: ListValue[] = [
    { value: '1', viewValue: 'Forest And Environment Department' },
    { value: '2', viewValue: 'Narmada, Water Resources, Water Supply And Kalpsar Department' },
    { value: '3', viewValue: 'Road and Building Department' }
  ];

  // List of District
  distritList: ListValue[] = [
    { value: '1', viewValue: 'Ahmedabad' },
    { value: '2', viewValue: 'Amreli' },
    { value: '3', viewValue: 'Anand' },
    { value: '4', viewValue: 'Arvalli' },
    { value: '5', viewValue: 'Bharuch' },
    { value: '6', viewValue: 'Bhavnagar' },
    { value: '7', viewValue: 'Bhuj' },
    { value: '8', viewValue: 'Botad' },
    { value: '9', viewValue: 'ChottaUdepur' },
    { value: '10', viewValue: 'Dahod' },
    { value: '11', viewValue: 'DevbhumiDwarka' },
    { value: '12', viewValue: 'Gandhinagar' },
    { value: '13', viewValue: 'GirSomnath' },
    { value: '14', viewValue: 'Godhara' },
    { value: '1', viewValue: 'Himmatnagar' },
    { value: '3', viewValue: 'Jamnagar' },
    { value: '3', viewValue: 'Junagadh' },
    { value: '3', viewValue: 'Mahisagar' },
    { value: '3', viewValue: 'Mahesana' },
    { value: '3', viewValue: 'Morbi' },
    { value: '3', viewValue: 'Nadiad' },
    { value: '3', viewValue: 'Narmada' },
    { value: '3', viewValue: 'Navsari' },
    { value: '3', viewValue: 'Palanpur' },
    { value: '3', viewValue: 'Patan' },
    { value: '3', viewValue: 'Porbandar' },
    { value: '3', viewValue: 'Rajkot' },
    { value: '3', viewValue: 'Surat' },
    { value: '3', viewValue: 'Surendranagar' },
    { value: '3', viewValue: 'Vadodara' },
    { value: '3', viewValue: 'Valsad' },
    { value: '3', viewValue: 'Vyara' },
  ];

  // List of Circles
  circleList: any[] = [
    { value: '1', viewValue: 'Dir. Parks & Garden, G. S. Gnr.', code: 'SE005' },
    { value: '2', viewValue: 'Pay & Accounts Officer, N.W.R. & W.S. Deptt. Gnr.', code: 'EE014' },
    { value: '3', viewValue: 'Supdt. Eng. Elect. Eng. R.& B. Circle, Gnr.', code: 'SE003' },
    { value: '4', viewValue: 'Supdt. Eng. State Road Project Circle, Gnr.', code: 'SE009' },
    { value: '5', viewValue: 'Supt.Engr.C.P.Circle, Gandhinagar', code: 'SE001' },
    { value: '6', viewValue: 'Other', code: '' },
  ];

  // Table Data of LC Account Listing AG
  LcOpeningRequestSavedData: LcOpeningRequest[] = [
    {
      referenceNo: '19-20/LC/OPR/001',
      referenceDate: new Date(),
      divisionName: 'Director, Sardar Patel Zological Park, kevadia',
      officeName: 'Director, Sardar Patel Zological Park, kevadia',
      cardexNo: '141',
      ddoCode: '467', ddoName: 'Director, Sardar Patel Zological Park, kevadia',
      circleName: 'Conservator of Forest, Wild Life Circle, Vadodara',
      receivedFrom: 'ABC user',
      //  receivedDate: '16/04/2020 11:30:30',
      receivedDate: new Date('04/16/2020'),
      sentTo: 'MNOP user',
      //  sentDate: '16/04/2020 11:50:30',
      sentDate: new Date('04/16/2020'),
      lyingWith: 'XYZ user',
      status: 'In process',
      workflowStatus: 'Pending'
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
  workflowStatusList: any[] = [
    { value: '1', viewValue: 'Authorized' },
    { value: '2', viewValue: 'Pending' },
    { value: '3', viewValue: 'Returned' }
  ];

  todayDate = new Date();
  isSearch: boolean;
  workFlowData = 'fromLCAccountOpeningRequest';
  accountClosingRequestForm: FormGroup;
  StatusCtrl: FormControl = new FormControl();
  DepartmentCtrl: FormControl = new FormControl();
  distritCtrl: FormControl = new FormControl();
  circleCtrl: FormControl = new FormControl();
  workflowStatusCtrl: FormControl = new FormControl();
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
      department: [''],
      district: [''],
      cardexNumber: [''],
      ddoNo: [''],
      referenceFromDate: [''],
      referenceToDate: [''],
      status: [''],
      lyingWith: [''],
      circleName: [''],
      workflowStatus: [''],
    });
  }
}
