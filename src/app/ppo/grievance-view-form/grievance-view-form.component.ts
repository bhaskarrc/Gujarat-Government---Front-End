import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatDialog } from '@angular/material';
import { ppoMessage } from 'src/app/common/error-message/common-message.constants';

@Component({
  selector: 'app-grievance-view-form',
  templateUrl: './grievance-view-form.component.html',
  styleUrls: ['./grievance-view-form.component.css']
})
export class GrievanceViewFormComponent implements OnInit {
  // variables
  grievanceRegistrationForm: FormGroup;
  errorMessage = ppoMessage;
  jeevanPramanForm: FormGroup;

  // form controls
  attachmentTypeCodeCtrl: FormControl = new FormControl();
  statusCtrl: FormControl = new FormControl();
  grievanceCtrl: FormControl = new FormControl();
  departmentListFromWhichRetiredCtrl: FormControl = new FormControl();
  nameOfTreasuryOfficeCtrl: FormControl = new FormControl();
  stateCtrl: FormControl = new FormControl();
  countryCtrl: FormControl = new FormControl();


  // lists
  attachmentTypeCode: ListValue[] = [
    { value: '01', viewValue: 'Supporting Document' },
    { value: '02', viewValue: 'Sanction Order' },
    { value: '03', viewValue: 'Others' }
  ];
  status_list: ListValue[] = [
    { value: '1', viewValue: 'Open' },
    { value: '2', viewValue: 'Close' },
    { value: '3', viewValue: 'No Action Required' }
  ];
  departmentListFromWhichRetired_list: ListValue[] = [
    { value: '1', viewValue: '' },
    { value: '2', viewValue: '' }
  ];

  nameOfTreasuryOffice_list: ListValue[] = [
    { value: '1', viewValue: '' },
    { value: '2', viewValue: '' }
  ];

  state_list: ListValue[] = [
    { value: '1', viewValue: 'Gujarat' },
    { value: '2', viewValue: 'Maharashtra' }
  ];

  country_list: ListValue[] = [
    { value: '1', viewValue: 'India' },
    { value: '2', viewValue: 'US' }
  ];


  grievance_list: ListValue[] = [
    { value: '1', viewValue: 'Pensioner related' },
    { value: '2', viewValue: 'Family pension related' }
  ];
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {

    this.grievanceRegistrationFormData();
  }

  grievanceRegistrationFormData() {
    this.grievanceRegistrationForm = this.fb.group({
      departnameNameFromWhichRetired: ['1'],
      nameOfTreasuryOffice: ['1'],
      pensionerName: ['Indra Nooyi'],
      address: ['Maharashtra'],
      pincode: ['300021'],
      grievanceState: ['1'],
      grievanceCountry: ['1'],
      mobile: ['9428234266'],
      phone: [''],
      email: ['indra@gmail.com', Validators.required],
      ppoNo: ['DPP/P/004148'],
      grievanceDescription: ['description goes here'],
      status: ['1'],
      remarks: [''],
      classification: ['1']
    });
  }
}
