import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { lcMessage } from 'src/app/common/error-message/common-message.constants';
// tslint:disable-next-line: max-line-length
import { ListValue } from 'src/app/model/letter-of-credit';
import { LetterOfCreditDirectives } from 'src/app/common/directive/letter-of-credit-directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-lc-account-division',
  templateUrl: './create-lc-account-division.component.html',
  styleUrls: ['./create-lc-account-division.component.css']
})
export class CreateLcAccountDivisionComponent implements OnInit {

  // List of Office Names
  OfficeName_list: ListValue[] = [
    { value: '1', viewValue: 'Director, Sardar Patel Zological Park, kevadia' },
  ];

  // List of Circle Names
  CircleNameList: any[] = [
    { value: '1', viewValue: 'Dir. Parks & Garden, G. S. Gnr.', code: 'SE005' },
    { value: '2', viewValue: 'Supt.Engr.C.P.Circle, Gandhinagar', code: 'SE001' },
    { value: '3', viewValue: 'Pay & Accounts Officer, N.W.R. & W.S. Deptt. Gnr.', code: 'EE014' },
    { value: '4', viewValue: 'Supdt. Eng. Elect. Eng. R.& B. Circle, Gnr.', code: 'SE003' },
    { value: '5', viewValue: 'Supdt. Eng. State Road Project Circle, Gnr.', code: 'SE009' },
    { value: '6', viewValue: 'Other', code: '' },
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

  workFlowData = 'fromLCAccountOpeningRequest';
  todayDate = new Date();
  errorMessage = lcMessage;
  showDesignationVar = false;
  lcOpeningRequestCreateForm: FormGroup;
  OfficeNameCtrl: FormControl = new FormControl();
  budgetProvisionCtrl: FormControl = new FormControl();
  detailsOfStaffCtrl: FormControl = new FormControl();
  designationCtrl: FormControl = new FormControl();
  CircleNameCtrl: FormControl = new FormControl();
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
      divisionName: [''],
      officeName: ['Director, Sardar Patel Zological Park, kevadia'],
      divisionOfficeAddress: ['At. Po. Limadi (Kevadiya), Ta : Darudeshwar, Dist: Narmada, Gujarat, India'],
      administrativeDepartment: ['Forest And Environment Department'],
      headOfDepartment: ['2'],
      treasuryOffice: ['District Treasury Office, Gandhinagar'],
      district: ['Gandhinagar'],
      cardexNo: ['141'],
      ddoCode: ['467'],
      circleName: [''],
      circleCode: [''],
      otherCircleName: [''],
      budgetProvision: [''],
      remarks: [''],
      detailsOfStaffSanctioned: [''],
      designation: [''],
      noOfSanctioned: [''],
      anticipatedDate: ['']
    });
  }

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
