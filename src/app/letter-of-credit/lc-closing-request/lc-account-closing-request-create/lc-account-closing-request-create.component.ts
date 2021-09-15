import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { lcMessage } from 'src/app/common/error-message/common-message.constants';
import { ListValue } from 'src/app/model/letter-of-credit';
import { LetterOfCreditDirectives } from 'src/app/common/directive/letter-of-credit-directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lc-account-closing-request-create',
  templateUrl: './lc-account-closing-request-create.component.html',
  styleUrls: ['./lc-account-closing-request-create.component.css']
})
export class LcAccountClosingRequestCreateComponent implements OnInit {

  // List of Office Names
  OfficeName_list: ListValue[] = [
    { value: '1', viewValue: 'Dy Conservator Of Forest Gandhinagar Division, Gandhinagar' },
    { value: '2', viewValue: 'Con Of forest (Account) Gandhinagar' },
    { value: '3', viewValue: 'Dy Con Of Forest Publicity & Liaison, Gandhinagar' },
    { value: '4', viewValue: 'Dy. Con. Of Forest Training Centre, Gandhinagar' },
    { value: '5', viewValue: 'Dy Con. Of Forest Research, Gandhinagar' },
    { value: '6', viewValue: 'Gandhinagar Wild Life Circle' },
  ];

  // List of Budget Provision
  budgetProvision_list: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];

  // List of Details of Staff
  detailsOfStaff_list: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];

  // List of Designation
  designation_list: ListValue[] = [
    { value: '', viewValue: '' }
  ];


  // List of Attachments
  attachmentTypeCode: any[] = [
    { value: '01', viewValue: 'Supporting Document' },
    { value: '02', viewValue: 'Sanction Order' },
    { value: '03', viewValue: 'Others' },
  ];

  todayDate = new Date();
  showRemarksVar = false;
  showDesignationVar = false;
  lcOpeningRequestCreateForm: FormGroup;
  OfficeNameCtrl: FormControl = new FormControl();
  budgetProvisionCtrl: FormControl = new FormControl();
  detailsOfStaffCtrl: FormControl = new FormControl();
  designationCtrl: FormControl = new FormControl();
  errorMessage = lcMessage;

  constructor(private fb: FormBuilder, private el: ElementRef, public dialog: MatDialog, private router: Router) { }

  // Create object to access Methods of Letter of Credit Directive
  directiveObject = new LetterOfCreditDirectives(this.router, this.dialog, this.el);

  ngOnInit() {
    this.lcOpeningRequestCreateFormData();
  }

  // Initialize Form Fields
  lcOpeningRequestCreateFormData() {
    this.lcOpeningRequestCreateForm = this.fb.group({
      divisionOfficeName: [''],
      divisionOfficeAddress: [''],
      administrativeDepartment: [''],
      parentHeadDepartment: [''],
      district: [''],
      cardexNo: [''],
      ddoCode: [''],
      ddoName: [''],
      budgetProvision: [''],
      remarks: [''],
      detailsOfStaffSanctioned: [''],
      designation: [''],
      noOfSanctioned: [''],
      anticipatedDate: [''],
      effectiveDate: [''],
      closingDate: [''],
    })
  }

  // Method to show remarks
  showRemarks() {
    if (this.lcOpeningRequestCreateForm.controls['budgetProvision'].value == '2') {
      this.showRemarksVar = true;
    } else {
      this.showRemarksVar = false;
    }
  }

  // Method to show Designation
  showDesignation() {
    if (this.lcOpeningRequestCreateForm.controls['detailsOfStaffSanctioned'].value == '1') {
      this.showDesignationVar = true;
    } else {
      this.showDesignationVar = false;
    }
  }

  // Method to add row
  addData() {
    if (this.lcOpeningRequestCreateForm.controls['divisionOfficeName'].value != '') {
      this.lcOpeningRequestCreateForm.patchValue({
        divisionOfficeAddress: 'Gandhinagar',
        administrativeDepartment: 'Forest',
        parentHeadDepartment: 'Forest',
        district: 'Gandhinagar',
        cardexNo: '986',
        ddoCode: '1234',
        ddoName: 'Treasury Office, Gandhinagar'
      });
    }
  }
}
