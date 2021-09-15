import { group } from '@angular/animations';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { OldBankDetailsComponent } from '../create-mla/old-bank-details/old-bank-details.component';
import { paoMessage } from 'src/app/common/error-message/common-message.constants';
import { CreateMLA, ListValue } from 'src/app/model/paoModel';

const ELEMENT_DATA: CreateMLA[] = [
  {
    mlaNo: '30',
    assemblyNo: '251',
    mlaName: 'Mr. Virendrasinh Jadeja',
    department: 'Gujarat Legislature Secretariat',
    designation: 'MLA',
    majorHead: '2054',
    difference: '12907.00',
  }
];
@Component({
  selector: 'app-update-mla',
  templateUrl: './update-mla.component.html',
  styleUrls: ['./update-mla.component.css']
})
export class UpdateMlaComponent implements OnInit {
  // Variable
  errorMessages = paoMessage;
  isTokentable = false;
  isvisibla = false;
  myModel: boolean = false;

  isvisible = false;
  // Form Group
  createMLAForm: FormGroup;
  // Form Control
  mlaNameCtrl: FormControl = new FormControl();
  prefixCtrl: FormControl = new FormControl();
  notifivaioNumberCtrl: FormControl = new FormControl();
  designationCtrl: FormControl = new FormControl();
  // Form Control
  displayedBrowseColumns = ['srNo', 'notiNo', 'mlaNo', 'assemblyNo', 'mlaName', 'mlaconNo', 'designation'];
  dataSourceBrowse = new MatTableDataSource(ELEMENT_DATA);
  constructor(private router: Router, private fb: FormBuilder, public dialog: MatDialog,) { }
  // Date
  maxDate = new Date();
  // List
  mlaName_list: ListValue[] = [
    { value: '1', viewValue: ' Mr. Saurabh Patel' },
  ];
  notifivaioNumber_list: ListValue[] = [
    { value: '1', viewValue: ' Governor' },
    { value: '2', viewValue: ' L.P.A.D' },
    { value: '3', viewValue: ' G.A.D' },
    { value: '4', viewValue: ' G.L.S' },
  ];
  prefix_list: ListValue[] = [
    { value: '1', viewValue: ' Mr.' },
    { value: '2', viewValue: ' Mrs.' },
    { value: '3', viewValue: ' Shri' },
    { value: '4', viewValue: ' Shrimati' },
    { value: '5', viewValue: ' Dr.' },
    { value: '6', viewValue: ' Prof.' },
    { value: '7', viewValue: ' Hon. Shri' },
  ];

  designation_list: ListValue[] = [
    { value: '1', viewValue: ' MLA' },
    { value: '2', viewValue: ' Minister' },
    { value: '3', viewValue: ' LOP' },
    { value: '4', viewValue: ' Speaker' },
    { value: '5', viewValue: ' GOG' },
    { value: '6', viewValue: ' WHIP' },
    { value: '7', viewValue: ' Chief WHIP' },
  ];
  phy_hanicap_list: ListValue[] = [
    { value: '1', viewValue: ' yes' },
    { value: '2', viewValue: ' No' },
  ];
  rea_end_list: ListValue[] = [
    { value: '1', viewValue: ' Tenure End' },
    { value: '2', viewValue: ' Death' },
    { value: '3', viewValue: ' Rejection' },
    { value: '4', viewValue: ' Designation Change' },
  ];

  ngOnInit() {
    this.createMLAeData();
  }

  createMLAeData() {
    this.createMLAForm = this.fb.group({
      mlaNu: [''],
      mlaNames: [''],
      mlaNo: ['1'],
      notificationNo: ['P/5/11459'],
      mlaName: [''],
      notifivaioNumber: ['1'],
      NotificationDate: [''],
      assmNo: ['14'],
      mlaConstNo: ['1'],
      mlaConstName: ['ABDASA'],
      prefix: ['1'],
      firstName: ['Pradyuman'],
      middleName: ['K'],
      lasttName: ['Mahapat'],
      dateOfBirth: [''],
      age: ['55'],
      partyName: ['Mr. Abc'],
      designation: ['1'],
      addPresent: ['Gandhinagar'],
      addPermanent: [''],
      mono: [''],
      emailmla: [''],
      redno: [''],
      leadger: [''],
      accountNO: ['1212121212'],
      panNO: ['112Ep85ga'],
      bankName: ['SBI'],
      ifscCode: ['SBI0000165'],
      phy_hanicap: ['1'],
      percent: ['50%'],
      tenusureEndDate: [''],
      tenusureStartDate: [''],
      rea_end: ['1'],
      remarks: ['Bank Information'],
      payAuthoNO: [''],
      paymentAuthorityDate: [''],
      misc: ['0.00'],
      professionalTax: ['0.00'],
      surchargeofIncomeTax: ['0.00'],
      incomeTax: ['0.00']

    });

  }
  oldbankdetail() {
    const dialogRef = this.dialog.open(OldBankDetailsComponent, {
      width: '1200px'
    });
  }

  ontoken(index) {
    if (index.value === '1') {
      this.isTokentable = true;
    } else {
      this.isTokentable = false;
    }
  }
  ontokenno(index) {
    if (index.value === index.value) {
      this.createMLAForm.patchValue({
        notificationNo: 'P/5/11459',
      });
    }
  }
  update() {
    this.isvisible = true;
  }
  search() {
    this.isvisibla = true;
  }
  eventHandler() {
    this.myModel = !this.myModel;

    if (this.myModel === true) {
      this.createMLAForm.patchValue({
        addPermanent: ['Gandhinagar']
      });
    } else {
      this.createMLAForm.patchValue({
        addPermanent: ['']
      });
    }
  }

}
