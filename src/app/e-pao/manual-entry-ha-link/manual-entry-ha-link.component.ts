
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

import { SelectionModel } from '@angular/cdk/collections';

import { Component, OnInit } from '@angular/core';
import { EPOAMessage } from 'src/app/common/error-message/common-message.constants';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { WorkFlowEPaoComponent } from '../work-flow-e-pao/work-flow-e-pao.component';

@Component({
  selector: 'app-manual-entry-ha-link',
  templateUrl: './manual-entry-ha-link.component.html',
  styleUrls: ['./manual-entry-ha-link.component.css']
})
export class ManualEntryHaLinkComponent implements OnInit {

  // Date
  todayDate = Date.now();
  initiatiomdate = new Date((new Date()));
  maxDate = new Date();
  // errorMessages
  errorMessages = EPOAMessage;
  isSubmitted = false;
  // FormGroup
  entryMasterForm: FormGroup;
  // FormControl

  creditTotal = 0;
  debitTotal = 0;
  typeCtrl: FormControl = new FormControl();
  mHeadCtrl: FormControl = new FormControl();
  subMajorHeadCtrl: FormControl = new FormControl();
  minorHeadCtrl: FormControl = new FormControl();
  subHeadCtrl: FormControl = new FormControl();
  objeHeadCtrl: FormControl = new FormControl();

  mHeadCreditCtrl: FormControl = new FormControl();
  subMajorHeadCreditCtrl: FormControl = new FormControl();
  minorHeadCreditCtrl: FormControl = new FormControl();
  subHeadCreditCtrl: FormControl = new FormControl();
  objeHeadCreditCtrl: FormControl = new FormControl();
  // List
  type_list: any[] = [
    { value: '1', viewValue: 'Amount not from GST' },
    { value: '2', viewValue: 'Amount not received from RBI' },
    { value: '3', viewValue: 'Amount mismatched from RBI' },
    { value: '4', viewValue: 'Amount mismatched from GST' },
  ];
  majorHead_list: any[] = [
    { value: '1', viewValue: '0006' },
    { value: '2', viewValue: '8658' },
    { value: '3', viewValue: '8675' },
  ];
  sub_major: any[] = [
    { value: '1', viewValue: '00' },
  ];
  minor_head: any[] = [
    { value: '1', viewValue: '101' },
    { value: '2', viewValue: '102' },
    { value: '3', viewValue: '103' },
    { value: '4', viewValue: '104' },
    { value: '5', viewValue: '105' },
    { value: '6', viewValue: '106' },
    { value: '7', viewValue: '107' },
    { value: '8', viewValue: '108' },
    { value: '9', viewValue: '138' },
  ];
  sub_head: any[] = [
    { value: '1', viewValue: '01' },
    { value: '2', viewValue: '02' },
    { value: '3', viewValue: '03' },
    { value: '4', viewValue: '04' },
    { value: '5', viewValue: '05' },
  ];
  details_head: any[] = [
    { value: '1', viewValue: '01' },
    { value: '2', viewValue: '02' },
    { value: '3', viewValue: '03' },
    { value: '4', viewValue: '04' },
    { value: '5', viewValue: '05' },
    { value: '6', viewValue: '06' },
    { value: '7', viewValue: '07' },
    { value: '8', viewValue: '08' },
    { value: '9', viewValue: '09' },
    { value: '10', viewValue: '10' },
  ];
  object_head: any[] = [
    { value: '1', viewValue: '0000' },
  ];

  majorHeadCredit_list: any[] = [
    { value: '1', viewValue: '4048' },
    { value: '2', viewValue: '4843' },
    { value: '3', viewValue: '4444' },
  ];
  subCredit_major: any[] = [
    { value: '1', viewValue: '101' },
    { value: '2', viewValue: '102' },
  ];
  minorCredit_head: any[] = [
    { value: '1', viewValue: '00' },
    { value: '2', viewValue: '01' },
  ];
  subCredit_head: any[] = [
    { value: '1', viewValue: '00' },
    { value: '2', viewValue: '01' },
  ];
  detailsCredit_head: any[] = [
    { value: '1', viewValue: '00' },
    { value: '2', viewValue: '01' },
  ];
  objectCredit_head: any[] = [
    { value: '1', viewValue: '00' },
    { value: '2', viewValue: '01' },
  ];
  Element_Data_1: any[] = [
    { majorHead: '1', subMajorHead: '1', minorHead: '1', subHead: '1', detailsHead: '1', objectHead: '1', amt: 200.00 }
  ];
  Element_Data_2: any[] = [
    { majorHead: '1', subMajorHead: '1', minorHead: '1', subHead: '1', detailsHead: '1', objectHead: '1', amt: 200.00 }
  ];
  dataSourceCredit = new MatTableDataSource<any>(this.Element_Data_1);
  dataSourceDebit = new MatTableDataSource<any>(this.Element_Data_2);
  creditColumns: string[] = ['srno', 'majorHead', 'subMajorHead', 'minorHead', 'subHead', 'detailsHead', 'objectHead', 'amt', 'action'];
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {

    this.entryMasterForm = this.fb.group({
      date: new Date('10-Jul-2020'),
      cinNo: ['19-20/E-PAO/ME/001'],
      type: ['1'],

      mHead: [''],
      subMajorHead: [''],
      detailsHead: [''],
      subHead: [''],
      minorHead: [''],
      objectHead: [''],
      amt: [''],
      totalAmount: ['200.00'],
      mHeadCredit: [''],
      subMajorHeadCredit: [''],
      detailsHeadCredit: [''],
      subHeadCredit: [''],
      minorHeadCredit: [''],
      objectHeadCredit: [''],
      amtCredit: [''],
      totalAmountCredit: ['200.00'],

    });
  }

  addCreditRow() {
    if (this.dataSourceCredit) {
      this.dataSourceCredit = new MatTableDataSource(this.Element_Data_1);
      const p_data = this.dataSourceCredit.data;

      p_data.push({
        majorHead: '', subMajorHead: '', minorHead: '', subHead: '', detailsHead: '', objectHead: '', amt: 0
      });
      this.dataSourceCredit.data = p_data;
    }
  }

  addDebitRow() {
    if (this.dataSourceDebit) {
      this.dataSourceDebit = new MatTableDataSource(this.Element_Data_2);
      const p_data = this.dataSourceDebit.data;

      p_data.push({
        majorHead: '', subMajorHead: '', minorHead: '', subHead: '', detailsHead: '', objectHead: '', amt: 0
      });
      this.dataSourceDebit.data = p_data;
    }
  }


  onSave() {
    if (this.entryMasterForm.valid) {
      this.isSubmitted = false;
    } else {
      this.isSubmitted = true;
    }

  }

  clearForm() {
    this.entryMasterForm.reset();
  }
  // WorkFlow Dialog
  commentEpaoDetails(): void {
    const dialogRef = this.dialog.open(WorkFlowEPaoComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  totalAmountCredit(): number {
    let amountExp = 0;
    this.dataSourceCredit.data.forEach((element) => {
      amountExp = amountExp + Number(element.amt);
    });
    return amountExp;
  }
  totalAmountDebit(): number {
    let amountExp = 0;
    this.dataSourceDebit.data.forEach((element) => {
      amountExp = amountExp + Number(element.amt);
    });
    return amountExp;
  }

}


