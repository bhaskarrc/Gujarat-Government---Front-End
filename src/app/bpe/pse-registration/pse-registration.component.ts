import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { bpeMessage } from 'src/app/common/error-message/common-message.constants';
import { CommonListing } from 'src/app/model/common-listing';

@Component({
  selector: 'app-pse-registration',
  templateUrl: './pse-registration.component.html',
  styleUrls: ['./pse-registration.component.css']
})
export class PseRegistrationComponent implements OnInit {
  // errorMessages ts file
  errorMessages = bpeMessage;
  todayDate = Date.now();
  initiatiomdate = new Date((new Date()));
  maxDate = new Date();
  selection = new SelectionModel<any>(true, []);
  isSubmitted = false;

  // FormGroup
  pseRegistrationForm: FormGroup;

  // FormControl
  pseTypeCtrl: FormControl = new FormControl();
  deptCtrl: FormControl = new FormControl();
  talukaCtrl: FormControl = new FormControl();
  distCtrl: FormControl = new FormControl();
  registrationYearCtrl: FormControl = new FormControl();

  // List values
  pseTypeList: CommonListing[] = [
    { value: '1', viewValue: 'Government Authority' },
    { value: '2', viewValue: 'Government Company' },
    { value: '3', viewValue: 'Independent Bodies' },
    { value: '4', viewValue: 'Joint Sector Company' },
    { value: '5', viewValue: 'Missions' },
    { value: '6', viewValue: 'Society' },
    { value: '7', viewValue: 'Statutory Corporation/Board' },
    { value: '8', viewValue: 'Trust' }
  ];

  departmentTypeList: CommonListing[] = [
    { value: '1', viewValue: 'Finance Department' },
    { value: '2', viewValue: 'Education Department' },
    { value: '3', viewValue: 'Health Department' },
  ];
  talukaList: CommonListing[] = [
    { value: '0', viewValue: 'City East' },
    { value: '1', viewValue: 'City West' },
    { value: '2', viewValue: 'Bavla' },
    { value: '3', viewValue: 'Daskoi' },
    { value: '4', viewValue: 'Detroj-Rampura' },
    { value: '5', viewValue: 'Dhandhuka' },
    { value: '6', viewValue: 'Dholera' },
    { value: '7', viewValue: 'Dholka' },
    { value: '8', viewValue: 'Mandal' },
    { value: '9', viewValue: 'Sanand' },
    { value: '10', viewValue: 'Viramgam' },
    { value: '1', viewValue: 'Amreli' },
    { value: '2', viewValue: 'Babra' },
    { value: '3', viewValue: 'Bagasara' },
    { value: '4', viewValue: 'Dhari' },
    { value: '5', viewValue: 'Jafrabad' },
    { value: '6', viewValue: 'Khambha' },
    { value: '7', viewValue: 'Kunkavav vadia' },
    { value: '8', viewValue: 'Lathi' },
    { value: '9', viewValue: 'Lilia' },
    { value: '10', viewValue: 'Rajula' },
    { value: '11', viewValue: 'Savarkundla' },
  ];
  districtList: CommonListing[] = [
    { value: '0', viewValue: 'Ahmedabad' },
    { value: '1', viewValue: 'Amreli' },
    { value: '2', viewValue: 'Anand' },
    { value: '3', viewValue: 'Aravalli' },
    { value: '4', viewValue: 'Banaskantha' },
    { value: '5', viewValue: 'Bharuch' },
    { value: '6', viewValue: 'Bhavnagar' },
    { value: '7', viewValue: 'Botad' },
    { value: '8', viewValue: 'Chhota Udaipur' },
    { value: '9', viewValue: 'Dahod' },
    { value: '10', viewValue: 'Dang' },
    { value: '11', viewValue: 'Devbhoomi Dwarka' },
    { value: '12', viewValue: 'Gandhinagar' },
  ];

  registrationYearList: CommonListing[] = [
    { value: '1', viewValue: '2018-19' },
    { value: '2', viewValue: '2019-20' },
    { value: '3', viewValue: '2020-21' },
    { value: '4', viewValue: '2021-22' },
  ];
  attachmentTypeCode: any[] = [
    { value: '01', viewValue: 'Supporting Document' },
    { value: '02', viewValue: 'Sanction Order' },
    { value: '03', viewValue: 'Others' },
  ];

  constructor(private fb: FormBuilder, public dialog: MatDialog, private el: ElementRef) { }


  ngOnInit() {

    this.pseRegistrationForm = this.fb.group({
      // FormGroup Fields
      id: [{ value: '1', disabled: true }],
      pseName: [''],
      pseType: [''],
      abbrName: [''],
      regNumber: [''],
      regYear: [''],
      regAct: [''],
      panNo: [''],
      tanNo: [''],
      urnNo: [''],
      dept: [''],
      addrFirst: [''],
      addrSecond: [''],
      city: [''],
      pin: [''],
      taluka: [''],
      district: [''],


    });
  }

  // function to clear form
  clearForm() {
    this.pseRegistrationForm.reset();
    const id = 2;
    this.pseRegistrationForm.patchValue({
      id: id
    });
  }

  // errormsg shows on click submit button
  onSave() {
    if (this.pseRegistrationForm.valid) {
      this.isSubmitted = false;
    } else {
      this.isSubmitted = true;
    }

  }
}
