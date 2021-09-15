
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { ListValue } from 'src/app/model/common-grant';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { DdoDirective } from 'src/app/common/directive/ddo-directive';
import { CreateEmployee } from 'src/app/model/ddo-forms';


const ELEMENT_DATA: CreateEmployee[] = [
  {
    employeeNumber: '1234567891',
    employeeName: 'Charul Patel',
    gpfCpfPpaNo: 'SBIN0010568',
    employeeType: 'GO',
    employeeDesignation: 'Account Clerk',
    billAccountNo: '9426283050005',
    ifscCode: 'ICIC0000165',
    branchName: 'This Bank',
    mobileNumber: '9429283050',
    emailId: 'charul2211@gmail.com ',
    bankVerificationFlag: 'Yes',
    bankVerificationDate: '12-Feb-2020',
    panNumber: 'QWER7895A',
    aadharNumber: '123456789012',


  }
];

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  // variables
  isSearch: Boolean = true;
  ifscSame: Boolean;
  filterElementData: CreateEmployee[];
  public toggleButton = true;
  selectedBankFlag = true;
  isIfscCodeValid: boolean;

  // Date
  maxDate = new Date();

  // form group
  employeeDetailsForm: FormGroup;
  smartSearch: FormGroup;

  // form control
  auditorctrl: FormControl = new FormControl();
  billcategoryCtrl: FormControl = new FormControl();
  auditornameCtrl: FormControl = new FormControl();
  ddonameCtrl: FormControl = new FormControl();
  empTypeCtrl: FormControl = new FormControl();
  billtypeCtrl: FormControl = new FormControl();
  bankFlag: FormControl = new FormControl('1');
  employeeTypeCtrl: FormControl = new FormControl();
  designationCtrl: FormControl = new FormControl();

  // directive object for checkbox
  directiveObj = new CommonDirective(this.router);

  // directive object foe workflow
  directiveObject = new DdoDirective(this.dialog);


  // list start
  designationList: ListValue[] = [
    { value: '101011', viewValue: '2nd Additional Senior Civil Judge' },
    { value: '100983', viewValue: 'A.D.C. To H.E. Governor' },
    { value: '102385', viewValue: 'Account Clerk' },
    { value: '9910000220', viewValue: 'Account Controller' },

  ];

  bankBranchList: ListValue[] = [
    { value: 'SBIN0016051', viewValue: 'STATE BANK OF INDIA, SECTOR 10B GANDHINAGAR' }
  ];

  employeeTypeList: ListValue[] = [
    { value: '1', viewValue: 'GO' },
    { value: '2', viewValue: 'NGO' },
    { value: '3', viewValue: 'MLA' },
    { value: '4', viewValue: 'IAS/IPS/IFS' },

  ];

  bankFlagList: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];
  // list end

  // error message
  errorMessagePan = 'Please enter valid PAN No. in format Like :  AAAAA1111A';
  errorMessageAdhar = 'Please enter valid AADHAAR Number';

  // table data start
  newdisplayedColumns: string[] = [
    'select',
    'employeeNumber',
    'employeeName',
    'gpfCpfPpaNo',
    'employeeType',
    'employeeDesignation',
    'billAccountNo',
    'ifscCode',
    'branchName',
    'mobileNumber',
    'emailId',
    'bankVerificationFlag',
    'bankVerificationDate',
    'panNumber',
    'aadharNumber',
    'action'
  ];
  newDataSource = new MatTableDataSource<CreateEmployee>(ELEMENT_DATA);
  // table data end



  @ViewChild(MatSort) sort: MatSort;

  // constructor
  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder) { }

  ngOnInit() {
    this.employeeDetailsFormData();
    this.smartSearchFormData();

  }

  // on selection change
  onSelectionChange(sel) {
    if (sel.value === '1') {
      this.selectedBankFlag = true;
    } else {
      this.selectedBankFlag = false;
    }
  }

  // go to page
  gotopage() {
    this.router.navigate(['/treasury-bill/saved-bill/bill-prepration-fom']);
  }


  // fillIFSC data
  fillIfscData() {
    this.employeeDetailsForm.patchValue({
      bankBranchName: this.bankBranchList[0].viewValue

    });
  }


  // function for employee details form data
  employeeDetailsFormData() {
    this.employeeDetailsForm = this.fb.group({
      bankAccountNo: [''],
      ifscCode: [''],
      bankBranchName: [''],
      emailId: ['', Validators.email],
      mobileNumber: [''],
      employeeNo: [''],
      panNumber: ['', Validators.pattern(/^([A-Z]){5}([0-9]){4}([A-Z]){1}?$/)],
      aadharNumber: ['', Validators.pattern(/^([0-9]){12}?$/)],
      bankFlag: ['1'],
      bankVerificationDate: [''],
      bankVerificationFlag: ['1']
    });
  }

  // search
  search() {

    this.isSearch = false;
  }

  // function for search form data
  smartSearchFormData() {

    this.smartSearch = this.fb.group({

      employeeNo: [''],
      employeeName: [''],
      gpfCpfPpaNo: [''],
      employeeType: [''],
      employeeDesignation: [''],
      bankAccountNo: [''],
      ifscCode: [''],
      bankBranchName: [''],
      mobileNumber: [''],
      bankVerificationFlag: [''],
      panNumber: [''],
      aadharNumber: [''],
    });
  }

  // search data on basis of search fields
  onSearch() {
    const formVal = this.smartSearch.value;
    if (formVal.employeeNo !== '' && formVal.employeeNo != null) {
      this.filterElementData = ELEMENT_DATA.filter(
        searchByemployee => searchByemployee.employeeNumber === formVal.employeeNo);
      this.newDataSource = new MatTableDataSource<CreateEmployee>(this.filterElementData);
    }
    if (formVal.employeeName !== '' && formVal.employeeName != null) {
      this.filterElementData = ELEMENT_DATA.filter(
        searchByemployee => searchByemployee.employeeName.toLowerCase() === formVal.employeeName.toLowerCase());
      this.newDataSource = new MatTableDataSource<CreateEmployee>(this.filterElementData);
    }

    if (formVal.gpfCpfPpaNo !== '' && formVal.gpfCpfPpaNo != null) {
      this.filterElementData = ELEMENT_DATA.filter(
        searchByGPFNumber => searchByGPFNumber.gpfCpfPpaNo.toLowerCase() === formVal.gpfCpfPpaNo.toLowerCase());
      this.newDataSource = new MatTableDataSource<CreateEmployee>(this.filterElementData);
    }

    if (formVal.employeeDesignation !== '' && formVal.employeeDesignation != null) {

      if (formVal.employeeDesignation === '101011') {
        const designationValue = '2nd Additional Senior Civil Judge';
        this.filterElementData = ELEMENT_DATA.filter(
          searchBydesignationType => searchBydesignationType.employeeDesignation.toLowerCase() === designationValue.toLowerCase());
        this.newDataSource = new MatTableDataSource<CreateEmployee>(this.filterElementData);
      }
      if (formVal.employeeDesignation === '100983') {
        const designationValue = 'A.D.C. To H.E. Governor';
        this.filterElementData = ELEMENT_DATA.filter(
          searchBydesignationType => searchBydesignationType.employeeDesignation.toLowerCase() === designationValue.toLowerCase());
        this.newDataSource = new MatTableDataSource<CreateEmployee>(this.filterElementData);
      }
      if (formVal.employeeDesignation === '102385') {
        const designationValue = 'Account Clerk';
        this.filterElementData = ELEMENT_DATA.filter(
          searchBydesignationType => searchBydesignationType.employeeDesignation.toLowerCase() === designationValue.toLowerCase());
        this.newDataSource = new MatTableDataSource<CreateEmployee>(this.filterElementData);
      }
      if (formVal.employeeDesignation === '9910000220') {
        const designationValue = 'Account Controller';
        this.filterElementData = ELEMENT_DATA.filter(
          searchBydesignationType => searchBydesignationType.employeeDesignation.toLowerCase() === designationValue.toLowerCase());
        this.newDataSource = new MatTableDataSource<CreateEmployee>(this.filterElementData);
      }
    }

    if (formVal.employeeType !== '' && formVal.employeeType != null) {

      if (formVal.employeeType === '1') {
        const employeeTypeValue = 'GO';
        this.filterElementData = ELEMENT_DATA.filter(
          searchByemployeeType => searchByemployeeType.employeeType.toLowerCase() === employeeTypeValue.toLowerCase());
        this.newDataSource = new MatTableDataSource<CreateEmployee>(this.filterElementData);
      }
      if (formVal.employeeType === '2') {
        const employeeTypeValue = 'NGO';
        this.filterElementData = ELEMENT_DATA.filter(
          searchByemployeeType => searchByemployeeType.employeeType.toLowerCase() === employeeTypeValue.toLowerCase());
        this.newDataSource = new MatTableDataSource<CreateEmployee>(this.filterElementData);
      }
      if (formVal.employeeType === '3') {
        const employeeTypeValue = 'MLA';
        this.filterElementData = ELEMENT_DATA.filter(
          searchByemployeeType => searchByemployeeType.employeeType.toLowerCase() === employeeTypeValue.toLowerCase());
        this.newDataSource = new MatTableDataSource<CreateEmployee>(this.filterElementData);
      }
      if (formVal.employeeType === '4') {
        const employeeTypeValue = 'IAS/IPS/IFS';
        this.filterElementData = ELEMENT_DATA.filter(
          searchByemployeeType => searchByemployeeType.employeeType.toLowerCase() === employeeTypeValue.toLowerCase());
        this.newDataSource = new MatTableDataSource<CreateEmployee>(this.filterElementData);
      }
    }

    if (formVal.bankAccountNo !== '' && formVal.bankAccountNo != null) {
      this.filterElementData = ELEMENT_DATA.filter(
        searchByMobile => searchByMobile.billAccountNo.toLowerCase() === formVal.bankAccountNo.toLowerCase());
      this.newDataSource = new MatTableDataSource<CreateEmployee>(this.filterElementData);
    }

    if (formVal.ifscCode !== '' && formVal.ifscCode != null) {
      this.filterElementData = ELEMENT_DATA.filter(
        searchByIfscCode => searchByIfscCode.ifscCode.toLowerCase() === formVal.ifscCode.toLowerCase());
      if (this.filterElementData.length !== 0) {
        this.isIfscCodeValid = true;
      } else {
        this.isIfscCodeValid = false;
      }
      this.newDataSource = new MatTableDataSource<CreateEmployee>(this.filterElementData);
    }

    if (formVal.bankBranchName !== '' && formVal.bankBranchName != null) {
      this.filterElementData = ELEMENT_DATA.filter(
        searchByBranch => searchByBranch.branchName.toLowerCase() === formVal.bankBranchName.toLowerCase());
      this.newDataSource = new MatTableDataSource<CreateEmployee>(this.filterElementData);

    }

    if (formVal.mobileNumber !== '' && formVal.mobileNumber != null) {
      this.filterElementData = ELEMENT_DATA.filter(
        searchByMobile => searchByMobile.mobileNumber.toLowerCase() === formVal.mobileNumber.toLowerCase());
      this.newDataSource = new MatTableDataSource<CreateEmployee>(this.filterElementData);
    }

    if (formVal.bankVerificationFlag !== '' && formVal.bankVerificationFlag != null) {
      if (formVal.bankVerificationFlag === '1') {
        const bankVerificationValue = 'Yes';
        this.filterElementData = ELEMENT_DATA.filter(
          searchBybankVerificationFlag =>
            searchBybankVerificationFlag.bankVerificationFlag.toLowerCase() === bankVerificationValue.toLowerCase());
        this.newDataSource = new MatTableDataSource<CreateEmployee>(this.filterElementData);
      }
      if (formVal.bankVerificationFlag === '2') {
        const bankVerificationValue = 'No';
        this.filterElementData = ELEMENT_DATA.filter(
          searchBybankVerificationFlag =>
            searchBybankVerificationFlag.bankVerificationFlag.toLowerCase() === bankVerificationValue.toLowerCase());
        this.newDataSource = new MatTableDataSource<CreateEmployee>(this.filterElementData);
      }
    }

    if (formVal.panNumber !== '' && formVal.panNumber != null) {
      this.filterElementData = ELEMENT_DATA.filter(
        searchByPan => searchByPan.panNumber === formVal.panNumber);
      this.newDataSource = new MatTableDataSource<CreateEmployee>(this.filterElementData);
    }
    if (formVal.aadharNumber !== '' && formVal.aadharNumber != null) {
      this.filterElementData = ELEMENT_DATA.filter(
        searchByTan => searchByTan.aadharNumber === formVal.aadharNumber);
      this.newDataSource = new MatTableDataSource<CreateEmployee>(this.filterElementData);
    }


    if ((formVal.employeeNo === '' || formVal.employeeNo == null)
      && (formVal.employeeName === '' || formVal.employeeName == null)
      && (formVal.gpfCpfPpaNo === '' || formVal.gpfCpfPpaNo == null)
      && (formVal.employeeDesignation === '' || formVal.employeeDesignation == null)
      && (formVal.employeeType === '' || formVal.employeeType == null)
      && (formVal.bankAccountNo === '' || formVal.bankAccountNo == null)
      && (formVal.ifscCode === '' || formVal.ifscCode == null)
      && (formVal.bankBranchName === '' || formVal.bankBranchName == null)
      && (formVal.mobileNumber === '' || formVal.mobileNumber == null)
      && (formVal.bankVerificationFlag === '' || formVal.bankVerificationFlag == null)
      && (formVal.panNumber === '' || formVal.panNumber == null)
      && (formVal.aadharNumber === '' || formVal.aadharNumber == null)) {
      this.newDataSource = new MatTableDataSource<CreateEmployee>(ELEMENT_DATA);
    }

  }

  // check ifsc
  checkIfsc() {
    const formVal = this.employeeDetailsForm.value;
    if (formVal.ifscCode !== '' && formVal.ifscCode != null) {
      this.filterElementData = ELEMENT_DATA.filter(
        searchByifscCode => searchByifscCode.ifscCode.toLowerCase() === formVal.ifscCode.toLowerCase());

      if (this.filterElementData.length !== 0) {
        this.isIfscCodeValid = true;
      } else {
        this.isIfscCodeValid = false;
      }
    }
  }


  // return search form control
  get fc() {
    return this.smartSearch.controls;
  }

  // reset form
  clearForm() {
    this.smartSearch.reset();
  }


  // delete details
  deleteDetail(index) { }

  // edit details
  editDetail(index) { }


  //  go to dashboard
  goToDashboard() { }
}
