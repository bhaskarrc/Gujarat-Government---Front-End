import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { lcMessage } from 'src/app/common/error-message/common-message.constants';
import { ListValue, Treasury } from 'src/app/model/letter-of-credit';
import { LetterOfCreditDirectives } from 'src/app/common/directive/letter-of-credit-directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-lc-account-division-edit',
  templateUrl: './create-lc-account-division-edit.component.html',
  styleUrls: ['./create-lc-account-division-edit.component.css']
})
export class CreateLcAccountDivisionEditComponent implements OnInit {

  // List of Circle Names
  CircleNameList: any[] = [
    { value: '1', viewValue: 'Dir. Parks & Garden, G. S. Gnr.', code: 'SE005' },
    { value: '2', viewValue: 'Pay & Accounts Officer, N.W.R. & W.S. Deptt. Gnr.', code: 'EE014' },
    { value: '3', viewValue: 'Supdt. Eng. Elect. Eng. R.& B. Circle, Gnr.', code: 'SE003' },
    { value: '4', viewValue: 'Supdt. Eng. State Road Project Circle, Gnr.', code: 'SE009' },
    { value: '5', viewValue: 'Supt.Engr.C.P.Circle, Gandhinagar', code: 'SE001' },
    { value: '6', viewValue: 'Other', code: '' },
  ];

  // List of Bank Branch
  BankBranch_list: ListValue[] = [
    { value: '1', viewValue: 'State Bank of India (LIC Road, Godhra)' }
  ];

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

  // Table Data for Treasury LC Data
  TreasuryLCData: Treasury[] = [
    { employeeNumber: '', employeeName: '' }
  ];

  // Table Columns for Treasury Lc Data
  TreasuryLCDataColumn: string[] = [
    'srNo', 'employeeNumber', 'employeeName', 'action'
  ];

  // Table Data for Sub Treasury LC Data
  SubTreasuryLCData: Treasury[] = [
    { employeeNumber: '', employeeName: '' }
  ];

  // Table Columns for Sub Treasury Lc Data
  SubTreasuryLCDataColumn: string[] = [
    'srNo', 'employeeNumber', 'employeeName', 'action'
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

  // selectedIndex: number;
  // tabDisable: Boolean = true;
  workFlowData = 'fromLCAccountOpeningRequest';
  isInputTreasury = true;
  isInputSubTreasury = true;
  isDeleteTreasury = false;
  isDeleteSubTreasury = false;
  showTreasuryVar = true;
  errorMessage = lcMessage;
  todayDate = new Date();
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
  headOfDepartmentCtrl: FormControl = new FormControl();
  subHeadCtrl: FormControl = new FormControl();
  detailedHeadCtrl: FormControl = new FormControl();
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
      divisionName: ['Director, Sardar Patel Zological Park, kevadia'],
      officeName: [{value:'Director, Sardar Patel Zological Park, kevadia',disabled:true}],
      divisionOfficeAddress: [{value:'At. Po. Limadi (Kevadiya), Ta : Darudeshwar, Dist: Narmada, Gujarat, India',disabled:true}],
      administrativeDepartment: [{value:'Forest And Environment Department',disabled:true}],
      treasuryOffice: [{value:'District Treasury Office, Gandhinagar',disabled:true}],
      district: [{value:'Gandhinagar',disabled:true}],
      headOfDepartment: ['2'],
      cardexNo: [{value:'141',disabled:true}],
      ddoCode: [{value:'467',disabled:true}],
      ddoName: ['Director, Sardar Patel Zological Park, kevadia'],
      circleNameHeader: ['1'],
      otherCircleName: [''],
      budgetProvision: [''],
      remarks: [''],
      detailsOfStaffSanctioned: [''],
      designation: [''],
      noOfSanctioned: [''],
      anticipatedDate: [''],
      
      agAuthorizationNo: [{ value: '', disabled: true }],
      agAuthorizationDate: [{ value: '', disabled: true }],
      majorHead: [{ value: '1', disabled: true }],
      subMajorHead: [{ value: '1', disabled: true }],
      minorHead: [{ value: '1', disabled: true }],
      subHead: [{ value: '1', disabled: true }],
      detailedHead: [{ value: '1', disabled: true }],
      agRemarks: [{ value: '', disabled: true }],
      
      bankAccountNumber: ['12345678'],
      bankName: [''],
      bankBranch: [''],
      circleCode: ['SE005'],
      circleName: ['1'],
      ddoIFMSUserID: ['GAGUJ12345'],
      ddoFullName: ['Test'],
      
      bankCode: [''],
      bankRemarks: [''],
      
      divisionCode: [{ value: '', disabled: true }],
      lcRemarks:  [{ value: '', disabled: true }],
    });
  }

  // Method to update bank code
  updateBankCode() {
    this.lcOpeningRequestCreateForm.controls['bankCode'].setValue('1257');
  }

  // Method to add employee in Treasury Table
  addEmployeeTreasury() {
    const p_data = this.TreasuryLCDataSource.data;
    this.isInputTreasury = false;
    this.isDeleteTreasury = true;
    p_data.push({
      employeeNumber: '',
      employeeName: '',
    });
    this.TreasuryLCDataSource.data = p_data;
  }

  // Method to Delete employee in Treasury Table
  deleteEmployeeTreasury(index) {
    this.TreasuryLCDataSource.data.splice(index, 1);
    this.TreasuryLCDataSource = new MatTableDataSource(
      this.TreasuryLCDataSource.data
    );
  }

  // Method to add employee in Sub Treasury Table
  addEmployeeSubTreasury() {
    const p_data = this.SubTreasuryLCDataSource.data;
    this.isInputSubTreasury = false;
    this.isDeleteSubTreasury = true;
    p_data.push({
      employeeNumber: '',
      employeeName: '',
    });
    this.SubTreasuryLCDataSource.data = p_data;
  }

  // Method to delete employee in Treasury Table
  deleteEmployeeSubTreasury(index) {
    this.SubTreasuryLCDataSource.data.splice(index, 1);
    this.SubTreasuryLCDataSource = new MatTableDataSource(
      this.SubTreasuryLCDataSource.data
    );
  }

  // Method Executed on change of Circle
  onCircle(event) {
    Object.keys(this.CircleNameList).forEach(key => {
      if (this.CircleNameList[key].value === event.value) {
        this.lcOpeningRequestCreateForm.patchValue({
          circleCode: this.CircleNameList[key].code,
        });
      }
    });
  }

}
