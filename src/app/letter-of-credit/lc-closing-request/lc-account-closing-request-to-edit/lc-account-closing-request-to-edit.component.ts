import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { ListValue } from 'src/app/model/letter-of-credit';
import { LetterOfCreditDirectives } from 'src/app/common/directive/letter-of-credit-directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lc-account-closing-request-to-edit',
  templateUrl: './lc-account-closing-request-to-edit.component.html',
  styleUrls: ['./lc-account-closing-request-to-edit.component.css']
})
export class LcAccountClosingRequestToEditComponent implements OnInit {

  // List of Offices
  OfficeName_list: ListValue[] = [
    { value: '1', viewValue: 'Deputy Conservator of Forest' }
  ];

  // List of Budget Provision
  budgetProvision_list: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];

  // List of Staff Details
  detailsOfStaff_list: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];

  // List of Designation
  designation_list: ListValue[] = [
    { value: '1', viewValue: 'Deputy Accountant' }
  ];

  // List of Banks
  BankName_list: ListValue[] = [
    { value: '1', viewValue: 'State Bank Of India' }
  ];

  // List of Bank Branches types
  BankBranch_list: ListValue[] = [
    { value: '1', viewValue: 'State Bank of India (LIC Road, Godhra)' }
  ];

  // List of Attachments
  attachmentTypeCode: any[] = [
    { value: '01', viewValue: 'Supporting Document' },
    { value: '02', viewValue: 'Sanction Order' },
    { value: '03', viewValue: 'Others' },
  ];

  showTreasuryVar = true;
  divisionOfficeAddressValue = "Deputy Conservator of Forest, Neat Temple, Gandhinagar";
  administrativeDepartmentValue = "Forest and Environment Department";
  parentHeadDepartmentValue = "Convertor of Forest";
  districtValue = "Gandhinagar";
  cardexNoValue = "986"
  ddoCodeValue = "986";
  ddoNameValue = "Deputy Conservator of Forest";
  noOfSanctionedValue = "2";
  majorHeadValue = "8782";
  subMajorHeadValue = "00";
  minorHeadValue = "103";
  subHeadValue = "01";

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

  constructor(private fb: FormBuilder, private el: ElementRef, public dialog: MatDialog, private router: Router) { }

  // Create object to access Methods of Letter of Credit Directive
  directiveObject = new LetterOfCreditDirectives(this.router, this.dialog, this.el);

  ngOnInit() {
    this.lcOpeningRequestCreateFormData();
  }

  // Initialize Form Fields
  lcOpeningRequestCreateFormData() {
    this.lcOpeningRequestCreateForm = this.fb.group({
      divisionOfficeName: ['1'],
      divisionOfficeAddress: [''],
      administrativeDepartment: [''],
      parentHeadDepartment: [''],
      district: [''],
      cardexNo: [''],
      ddoCode: [''],
      ddoName: [''],
      budgetProvision: ['2'],
      remarks: [''],
      detailsOfStaffSanctioned: ['1'],
      designation: ['1'],
      noOfSanctioned: [''],
      anticipatedDate: [''],
      lcRemarks: [''],
      majorHead: ['8782'],
      subMajorHead: ['00'],
      minorHead: ['103'],
      subHead: ['01'],
      bankAccountNumber: ['12345678'],
      bankName: ['1'],
      bankBranch: ['1'],
      divisionCode: ['D098'],
      circleCode: ['D098'],
      circleName: ['State Bank of India (LIC Road, Godhra)'],
      ddoIFMSUserID: ['GAGUJ12345'],
      ddoFullName: ['Test'],
      lcTreasuryRemarks: ['']
    });
  }

  // Method to show remarks
  showRemarks() {
    if (this.lcOpeningRequestCreateForm.controls['budgetProvision'].value === '2') {
      this.showRemarksVar = true;
    } else {
      this.showRemarksVar = false;
    }
  }

  // Method to show designation
  showDesignation() {
    if (this.lcOpeningRequestCreateForm.controls['detailsOfStaffSanctioned'].value === '1') {
      this.showDesignationVar = true;
    } else {
      this.showDesignationVar = false;
    }
  }

}
