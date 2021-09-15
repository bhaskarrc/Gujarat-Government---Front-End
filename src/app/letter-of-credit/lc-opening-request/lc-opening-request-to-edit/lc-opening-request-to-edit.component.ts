import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { ListValue, Treasury } from 'src/app/model/letter-of-credit';
import { LetterOfCreditDirectives } from 'src/app/common/directive/letter-of-credit-directive';
import { Router } from '@angular/router';
import { lcMessage } from 'src/app/common/error-message/common-message.constants';

@Component({
  selector: 'app-lc-opening-request-to-edit',
  templateUrl: './lc-opening-request-to-edit.component.html',
  styleUrls: ['./lc-opening-request-to-edit.component.css']
})
export class LcOpeningRequestToEditComponent implements OnInit {

  // List of Major Head
  majorHead_list: ListValue[] = [
    { value: '1', viewValue: '8782 - Cash Remittances and adjustment between Officers' }
  ];

  // List of Sub Major Head
  subMajorHead_list: ListValue[] = [
    { value: '1', viewValue: '00' }
  ];

  // List of Minor Head
  minorHead_list: ListValue[] = [
    { value: '1', viewValue: '102 - Public Works Remittances' },
    { value: '2', viewValue: '103 - Forest Remittances' }
  ];

  // List of Sub Head
  subHead_list: ListValue[] = [
    { value: '1', viewValue: '01 - Remittances' }
  ];

  // List of Detailed Head
  detailedHead_list: ListValue[] = [
    { value: '1', viewValue: '00' }
  ];

  // List of Office Names
  OfficeName_list: ListValue[] = [
    { value: '1', viewValue: 'Deputy Conservator of Forest' }
  ];

  // List of Bank Branch
  BankBranch_list: ListValue[] = [
    { value: '1', viewValue: 'State Bank of India (LIC Road, Godhra)' }
  ];

  // List of Circle Names
  CircleNameList: ListValue[] = [
    { value: '1', viewValue: 'Dir. Parks & Garden, G. S. Gnr.' },
    { value: '2', viewValue: 'Pay & Accounts Officer, N.W.R. & W.S. Deptt. Gnr.' },
    { value: '3', viewValue: 'Supdt. Eng. Elect. Eng. R.& B. Circle, Gnr.' },
    { value: '4', viewValue: 'Supdt. Eng. State Road Project Circle, Gnr.' },
    { value: '5', viewValue: 'Supt.Engr.C.P.Circle, Gandhinagar' },
    { value: '6', viewValue: 'Other' },
  ];

  // Table Data for Treasury LC Data
  TreasuryLCData: Treasury[] = [
    { employeeNumber: '', employeeName: '' }
  ];

  // Table Columns for Treasury Lc Data
  TreasuryLCDataColumn: string[] = [
    'srNo', 'employeeNumber', 'employeeName'
  ];

  // Table Data for Sub Treasury LC Data
  SubTreasuryLCData: Treasury[] = [
    { employeeNumber: '', employeeName: '' }
  ];

  // Table Columns for Sub Treasury Lc Data
  SubTreasuryLCDataColumn: string[] = [
    'srNo', 'employeeNumber', 'employeeName'
  ];

  // List of Attachments
  attachmentTypeCode: any[] = [
    { value: '01', viewValue: 'Supporting Document' },
    { value: '02', viewValue: 'Sanction Order' },
    { value: '03', viewValue: 'Others' },
  ];

  // List of Head of department
  headOfDepartmentList: any[] = [
    { value: '1', viewValue: 'Principal Chief conservator of forest' },
    { value: '2', viewValue: 'Principal Chief conservator of Wild life' },
  ];


  // List Bank Name
  BankName_list: ListValue[] = [
    { value: '1', viewValue: 'State Bank of India' },
  ];

  workFlowData = 'fromLCAccountOpeningRequest';
  showTreasuryVar = true;
  divisionOfficeAddressValue = 'Deputy Conservator of Forest, Neat Temple, Gandhinagar';
  administrativeDepartmentValue = 'Forest and Environment Department';
  parentHeadDepartmentValue = 'Convertor of Forest';
  districtValue = 'Gandhinagar';
  cardexNoValue = '986';
  ddoCodeValue = '986';
  ddoNameValue = 'Deputy Conservator of Forest';
  noOfSanctionedValue = '2';
  majorHeadValue = '8782';
  subMajorHeadValue = '00';
  minorHeadValue = '103';
  subHeadValue = '01';

  todayDate = new Date();
  errorMessage = lcMessage;
  anticipatedDateValue = new Date(2019, 1, 15);
  showRemarksVar = false;
  showDesignationVar = false;
  lcOpeningRequestCreateForm: FormGroup;
  OfficeNameCtrl: FormControl = new FormControl();
  budgetProvisionCtrl: FormControl = new FormControl();
  detailsOfStaffCtrl: FormControl = new FormControl();
  designationCtrl: FormControl = new FormControl();
  BankNameCtrl: FormControl = new FormControl();
  BankBranchCtrl: FormControl = new FormControl();
  CircleNameCtrl: FormControl = new FormControl();
  majorHeadCtrl: FormControl = new FormControl();
  subMajorHeadCtrl: FormControl = new FormControl();
  minorHeadCtrl: FormControl = new FormControl();
  subHeadCtrl: FormControl = new FormControl();
  detailedHeadCtrl: FormControl = new FormControl();
  headOfDepartmentCtrl: FormControl = new FormControl();
  TreasuryLCDataSource = new MatTableDataSource(this.TreasuryLCData);
  SubTreasuryLCDataSource = new MatTableDataSource(this.SubTreasuryLCData);

  constructor(private fb: FormBuilder, private el: ElementRef, public dialog: MatDialog, private router: Router) { }

  // Create object to access Methods of Letter of Credit Directive
  directiveObject = new LetterOfCreditDirectives(this.router, this.dialog, this.el);

  ngOnInit() {
    this.lcOpeningRequestCreateFormData();
  }

  // Initialize Form Fields
  lcOpeningRequestCreateFormData() {
    this.lcOpeningRequestCreateForm = this.fb.group({
      divisionName: [{ value: 'Director, Sardar Patel Zological Park, kevadia', disabled: true }],
      officeName: [{ value: 'Director, Sardar Patel Zological Park, kevadia', disabled: true }],
      divisionOfficeAddress: [{ value: 'At. Po. Limadi (Kevadiya), Ta : Darudeshwar, Dist: Narmada, Gujarat, India', disabled: true }],
      administrativeDepartment: [{ value: 'Forest And Environment Department', disabled: true }],
      treasuryOffice: [{ value: 'District Treasury Office, Gandhinagar', disabled: true }],
      district: [{ value: 'Gandhinagar', disabled: true }],
      cardexNo: [{ value: '141', disabled: true }],
      ddoCode: [{ value: '467', disabled: true }],
      ddoName: [{ value: 'Director, Sardar Patel Zological Park, kevadia', disabled: true }],
      circleNameHeader: ['1'],
      headOfDepartment: [{ value: '2', disabled: true }],
      otherCircleName: ['Ahmedabad'],
      budgetProvision: [''],
      remarks: [{ value: '', disabled: true }],
      lcRemarks:  [{value: '', disabled : false}],
  agRemarks: [{ value: '', disabled: true }],
      bankRemarks: [{ value: '', disabled: true }],
      majorHead: ['1'],
      subMajorHead: ['1'],
      minorHead: ['1'],
      subHead: ['1'],
      bankAccountNumber: ['12345678'],
      bankName: [{ value: '1', disabled: true }],
      bankBranch: ['1'],
      divisionCode: [''],
      circleCode: [{ value: 'D098', disabled: true }],
      circleName: ['1'],
      ddoIFMSUserID: ['GAGUJ12345'],
      ddoFullName: ['Test'],
      agAuthorizationNo: [{ value: '', disabled: true }],
      agAuthorizationDate: [{ value: '', disabled: true }],
      detailedHead: ['1'],
      bankCode: [{value: '1257', disabled: true}],
    });
  }
}
