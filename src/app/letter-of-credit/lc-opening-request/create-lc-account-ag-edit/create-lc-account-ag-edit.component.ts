import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
// tslint:disable-next-line: max-line-length
import { ListValue, LCRequest } from 'src/app/model/letter-of-credit';
import { LetterOfCreditDirectives } from 'src/app/common/directive/letter-of-credit-directive';
import { lcMessage } from 'src/app/common/error-message/common-message.constants';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-lc-account-ag-edit',
  templateUrl: './create-lc-account-ag-edit.component.html',
  styleUrls: ['./create-lc-account-ag-edit.component.css']
})
export class CreateLcAccountAgEditComponent implements OnInit {

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

  // List of Circle Names
  CircleNameList: any[] = [
    { value: '1', viewValue: 'Dir. Parks & Garden, G. S. Gnr.', code: 'SE005' },
    { value: '2', viewValue: 'Pay & Accounts Officer, N.W.R. & W.S. Deptt. Gnr.', code: 'EE014' },
    { value: '3', viewValue: 'Supdt. Eng. Elect. Eng. R.& B. Circle, Gnr.', code: 'SE003' },
    { value: '4', viewValue: 'Supdt. Eng. State Road Project Circle, Gnr.', code: 'SE009' },
    { value: '5', viewValue: 'Supt.Engr.C.P.Circle, Gandhinagar', code: 'SE001' },
    { value: '6', viewValue: 'Other', code: '' },
  ];

  // List of Designation
  designation_list: ListValue[] = [
    { value: '1', viewValue: 'Deputy Accountant' }
  ];

  // List of Head of department
  headOfDepartmentList: any[] = [
    { value: '1', viewValue: 'Principal Chief conservator of forest' },
    { value: '2', viewValue: 'Principal Chief conservator of Wild life' },
  ];

  // List of Attachments
  attachmentTypeCode: any[] = [
    { value: '01', viewValue: 'Supporting Document' },
    { value: '02', viewValue: 'Sanction Order' },
    { value: '03', viewValue: 'Others' },
  ];

  // selectedIndex: number;
  // tabDisable: Boolean = true;
  showTreasuryVar = true;
  workFlowData = 'fromLCAccountOpeningRequest';
  divisionOfficeAddressValue = 'Deputy Conservator of Forest, Neat Temple, Gandhinagar';
  administrativeDepartmentValue = 'Forest and Environment Department';
  parentHeadDepartmentValue = 'Convertor of Forest';
  districtValue = 'Gandhinagar';
  cardexNoValue = '986';
  ddoCodeValue = '986';
  ddoNameValue = 'Deputy Conservator of Forest';
  noOfSanctionedValue = '2';
  errorMessage = lcMessage;
  todayDate = new Date();
  anticipatedDateValue = new Date(2019, 1, 15);
  showRemarksVar = false;
  showDesignationVar = false;
  lcOpeningRequestCreateForm: FormGroup;
  OfficeNameCtrl: FormControl = new FormControl();
  CircleNameCtrl: FormControl = new FormControl();
  budgetProvisionCtrl: FormControl = new FormControl();
  detailsOfStaffCtrl: FormControl = new FormControl();
  designationCtrl: FormControl = new FormControl();
  majorHeadCtrl: FormControl = new FormControl();
  subMajorHeadCtrl: FormControl = new FormControl();
  minorHeadCtrl: FormControl = new FormControl();
  subHeadCtrl: FormControl = new FormControl();
  detailedHeadCtrl: FormControl = new FormControl();
  headOfDepartmentCtrl: FormControl = new FormControl();

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
      headOfDepartment: [{ value: '2', disabled: true }],
      cardexNo: [{ value: '141', disabled: true }],
      ddoCode: [{ value: '467', disabled: true }],
      circleNameHeader: [{ value: '1', disabled: true }],
      circleName: [{ value: '1', disabled: true }],
      circleCode: [{ value: 'SE005', disabled: true }],
      remarks: [{ value: '', disabled: true }],

      budgetProvision: [''],
      detailsOfStaffSanctioned: [''],
      designation: [''],
      noOfSanctioned: [''],
      anticipatedDate: [''],
      majorHead: ['1'],
      subMajorHead: ['1'],
      minorHead: ['2'],
      subHead: ['1'],
      bankAccountNumber: ['12345678'],
      bankName: ['1'],
      bankBranch: ['1'],
      otherCircleName: [''],
      ddoIFMSUserID: ['GAGUJ12345'],
      ddoFullName: ['Test'],
      agAuthorizationNo: [''],
      agAuthorizationDate: [''],
      detailedHead: ['1'],
      agRemarks:  [{ value: '', disabled: false }],
    });
  }

  // Method to be exectuted on circle dropdown change
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
