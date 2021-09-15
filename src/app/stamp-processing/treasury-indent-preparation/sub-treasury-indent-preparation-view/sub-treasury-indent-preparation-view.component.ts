import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { ElementStIndentSto, ElementFinalStIndentSto } from 'src/app/model/stamp-processing';


const ELEMENT_DATA3: ElementStIndentSto[] = [
  {
    checkbox: true,
    deno: '1',
    stock: '0',
    supply: '0',
    qtySold: '0',
    closeBal: '0',
    qtyDue: '0',
    qtyReq: '',
    qtyApp: '0',
    qtyRequired: '',
  },
  {
    checkbox: true,
    deno: '2',
    stock: '4',
    supply: '4',
    qtySold: '3',
    closeBal: '1',
    qtyDue: '1',
    qtyReq: '',
    qtyApp: '4',
    qtyRequired: '',
  },
  {
    checkbox: true,
    deno: '5',
    stock: '6',
    supply: '4',
    qtySold: '3',
    closeBal: '3',
    qtyDue: '0',
    qtyReq: '',
    qtyApp: '2',
    qtyRequired: '',
  },
  {
    checkbox: true,
    deno: '10',
    stock: '0',
    supply: '0',
    qtySold: '0',
    closeBal: '0',
    qtyDue: '0',
    qtyReq: '',
    qtyApp: '0',
    qtyRequired: '',
  },
  {
    checkbox: false,
    deno: '20',
    stock: '5',
    supply: '3',
    qtySold: '5',
    closeBal: '3',
    qtyDue: '2',
    qtyReq: '',
    qtyApp: '1',
    qtyRequired: '',
  }
];
// Final Table Sources
const ELEMENT_FINAL2: ElementFinalStIndentSto[] = [
  {
    typeOfStamp: 'Agreement', deno: '100', stock: '5', supply: '4', qtySold: '4',
    closeBal: '2', qtyDue: '2', qtyReq: '5', qtyApp: '5', qtyRequired: '3',
  }
];
const ELEMENT_FINAL3: ElementFinalStIndentSto[] = [
  {
    typeOfStamp: 'Court Fee Label', deno: '1', stock: '0', supply: '0', qtySold: '0',
    closeBal: '0', qtyDue: '0', qtyReq: '7', qtyApp: '0', qtyRequired: '6',
  },
  {
    typeOfStamp: 'Court Fee Label', deno: '2', stock: '4', supply: '4', qtySold: '3',
    closeBal: '1', qtyDue: '1', qtyReq: '8', qtyApp: '4', qtyRequired: '6',
  },
  {
    typeOfStamp: 'Court Fee Label', deno: '5', stock: '6', supply: '4', qtySold: '3',
    closeBal: '3', qtyDue: '0', qtyReq: '6', qtyApp: '2', qtyRequired: '5',
  },
  {
    typeOfStamp: 'Court Fee Label', deno: '10', stock: '0', supply: '0', qtySold: '0',
    closeBal: '0', qtyDue: '0', qtyReq: '6', qtyApp: '0', qtyRequired: '4',
  },
];
@Component({
  selector: 'app-sub-treasury-indent-preparation-view',
  templateUrl: './sub-treasury-indent-preparation-view.component.html',
  styleUrls: ['./sub-treasury-indent-preparation-view.component.css']
})
export class SubTreasuryIndentPreparationViewComponent implements OnInit {

  indentType_List: CommonListing[] = [
    { value: '1', viewValue: 'Regular Indent'},
    { value: '2', viewValue: 'Mid-Term Indent'}
  ];

  subTre_List: CommonListing[] = [
    { value: '1', viewValue: 'Dhandhuka'},
    { value: '2', viewValue: 'Dholka'},
    { value: '2', viewValue: 'Sanad'},
    { value: '2', viewValue: 'Viramgam'},
  ];
  stamp_List: CommonListing[] = [
    { value: '1', viewValue: 'Agency License'},
    { value: '2', viewValue: 'Agreement'},
    { value: '3', viewValue: 'Court Fee Label'},
    { value: '4', viewValue: 'Court Fee Paper'},
    { value: '5', viewValue: 'Foreign bill'},
    { value: '6', viewValue: 'Hundi'},
    { value: '7', viewValue: 'Insurance'},
    { value: '8', viewValue: 'Non Judicial Paper'},
    { value: '9', viewValue: 'Notary'},
    { value: '10', viewValue: 'Revenue'},
    { value: '11', viewValue: 'Share transfer'},
    { value: '12', viewValue: 'Special Adhesive'},
    ];

    dataSource3 = new MatTableDataSource(ELEMENT_DATA3);
    // Final Tables
    dataSourceFinal2 = new MatTableDataSource(ELEMENT_FINAL2);
    dataSourceFinal3 = new MatTableDataSource(ELEMENT_FINAL3);
    dataSourceFinalHeading = [];

    displayedColumns: string[] = ['position', 'checkbox', 'denomination', 'stock', 'unitVal',
     'supplyReceived', 'qtySold', 'closingBal', 'qtyDue',
    'qtyRequired', 'qtyApproved', 'remarks'];
    displayFinal: string[] = ['position', 'typeOfStamp', 'denomination', 'stock', 'unitVal',
     'supplyReceived', 'qtySold', 'closingBal', 'qtyDue',
    'qtyRequired', 'qtyApproved', 'remarks', 'action'];

  indentForCtrl: FormControl = new FormControl();
  indentTypeCtrl: FormControl = new FormControl();
  subTreOffCtrl: FormControl = new FormControl();
  stampCtrl: FormControl = new FormControl();

  treasuryIndentForm: FormGroup;

  temp1Value = 'Treasury Office, Ahmedabad';
  temp2Value = 'Superintendent of Stamps Office, Gandhinagar';
  temp3Value = 'Treasury Office, Gandhinagar';
  date: any = new Date();
  intendDate = '04-Apr-2020';
  intendNumber = '51/00057/072019/23';
  lastIntendDate = '04-Apr-2020';
  fromDateVal = '05-Apr-2020';
  toDateVal = '20-Apr-2020';

  stampVal: string;

  onAdd = false;
  onAdd2 = false;
  onAdd3 = false;
  onAdd4 = false;
  onAdd5 = false;
  onAdd6 = false;
  onAdd7 = false;
  onAdd8 = false;
  onAdd9 = false;
  onAdd10 = false;
  onAdd11 = false;
  onAdd12 = false;
  onCheck = false;
  onCheck2 = false;
  onCheck3 = false;
  showSubTre = false;

  constructor(private fb: FormBuilder,
    private router: Router) {
  }

  ngOnInit() {
    this.createForm();
    this.whenAddClick();
  }

  createForm() {
    this.treasuryIndentForm = this.fb.group({
      finYear: ['2019-2020'],
      indentType: ['1'],
      intDate: [''],
      indNumber: [''],
      lastIndent: [''],
      indentFor: ['1'],
      subTreOff: ['1'],
      indentTo: [''],
      stamp: ['3'],
      fromDate: [''],
      toDate: [''],
      temp1: [''],
      temp2: [''],
      temp3: [''],
    });
  }


  whenAddClick() {
    this.stampVal = this.treasuryIndentForm.controls.stamp.value;

    if (this.stampVal === '1') {
      this.onAdd = true ;
    } else if (this.stampVal === '2') {
      this.onAdd2 = true ;
    } else if (this.stampVal === '3') {
      this.onAdd3 = true ;
    }
  }

  onSelectSubTreList() {
    this.showSubTre = true;
  }
  gotoListing() {
    this.router.navigate(['./stamp-processing/stamp-indent-preparation-sto-list']);
  }


  checkboxValueChange(item) {
    this.stampVal = this.treasuryIndentForm.controls.stamp.value;

    if (this.stampVal === '1') {
      this.onCheck = true;
    } else if (this.stampVal === '2') {
      this.onCheck2 = true;
    } else if (this.stampVal === '3') {
      this.onCheck3 = true;
    }
  }
  calcstockNet(): any {
    let sum = 0;
    this.onAdd2 ? this.dataSourceFinal2.data.forEach((element) => {sum = sum + Number(element.stock); }) : sum = sum;
    this.onAdd3 ? this.dataSourceFinal3.data.forEach((element) => {sum = sum + Number(element.stock); }) : sum = sum;

    // return sum !== 0 ? sum : '';
    return sum;
  }
  calcsupplyReceivedNet(): any {
    let sum = 0;
    this.onAdd2 ? this.dataSourceFinal2.data.forEach((element) => {sum = sum + Number(element.supply); }) : sum = sum;
    this.onAdd3 ? this.dataSourceFinal3.data.forEach((element) => {sum = sum + Number(element.supply); }) : sum = sum;

    // return sum !== 0 ? sum : '';
    return sum;
  }
  calcqtySoldNet(): any {
    let sum = 0;
    this.onAdd2 ? this.dataSourceFinal2.data.forEach((element) => {sum = sum + Number(element.qtySold); }) : sum = sum;
    this.onAdd3 ? this.dataSourceFinal3.data.forEach((element) => {sum = sum + Number(element.qtySold); }) : sum = sum;

    // return sum !== 0 ? sum : '';
    return sum;
  }
  calcclosingBalNet(): any {
    let sum = 0;
    this.onAdd2 ? this.dataSourceFinal2.data.forEach((element) => {sum = sum + Number(element.closeBal); }) : sum = sum;
    this.onAdd3 ? this.dataSourceFinal3.data.forEach((element) => {sum = sum + Number(element.closeBal); }) : sum = sum;

    // return sum !== 0 ? sum : '';
    return sum;
  }
  calcqtyDueNet(): any {
    let sum = 0;
    this.onAdd2 ? this.dataSourceFinal2.data.forEach((element) => {sum = sum + Number(element.qtyDue); }) : sum = sum;
    this.onAdd3 ? this.dataSourceFinal3.data.forEach((element) => {sum = sum + Number(element.qtyDue); }) : sum = sum;

    // return sum !== 0 ? sum : '';
    return sum;
  }
  calcqtyApprovedNet(): any {
    let sum = 0;
    this.onAdd2 ? this.dataSourceFinal2.data.forEach((element) => {sum = sum + Number(element.qtyApp); }) : sum = sum;
    this.onAdd3 ? this.dataSourceFinal3.data.forEach((element) => {sum = sum + Number(element.qtyApp); }) : sum = sum;

    // return sum !== 0 ? sum : '';
    return sum;
  }
  calcQtyReqNet(): any {
    let sum = 0;
    this.onAdd2 ? this.dataSourceFinal2.data.forEach((element) => {sum = sum + Number(element.qtyRequired); }) : sum = sum;
    this.onAdd3 ? this.dataSourceFinal3.data.forEach((element) => {sum = sum + Number(element.qtyRequired); }) : sum = sum;

    // return sum !== 0 ? sum : '';
    return sum;
  }
// Agreement
  stock2(): any {
    let sum = 0;
    this.dataSourceFinal2.data.forEach((element) => {sum = sum + Number(element.stock); });

    return sum !== 0 ? sum : '';
  }
  supplyReceived2(): any {
    let sum = 0;
    this.dataSourceFinal2.data.forEach((element) => {sum = sum + Number(element.supply); });

    return sum !== 0 ? sum : '';
  }
  qtySold2(): any {
    let sum = 0;
    this.dataSourceFinal2.data.forEach((element) => {sum = sum + Number(element.qtySold); });

    return sum !== 0 ? sum : '';
  }
  closingBal2(): any {
    let sum = 0;
    this.dataSourceFinal2.data.forEach((element) => {sum = sum + Number(element.closeBal); });

    return sum !== 0 ? sum : '';
  }
  qtyDue2(): any {
    let sum = 0;
    this.dataSourceFinal2.data.forEach((element) => {sum = sum + Number(element.qtyDue); });

    return sum !== 0 ? sum : '';
  }
  qtyApproved2(): any {
    let sum = 0;
    this.dataSourceFinal2.data.forEach((element) => {sum = sum + Number(element.qtyApp); });

    return sum !== 0 ? sum : '';
  }
  calcQtyReq2(): any {
    let sum = 0;
    this.dataSourceFinal2.data.forEach((element) => {sum = sum + Number(element.qtyRequired); });

    return sum !== 0 ? sum : '';
  }
  // Court Fee Label
  stock3(): any {
    let sum = 0;
    this.dataSourceFinal3.data.forEach((element) => {sum = sum + Number(element.stock); });

    return sum !== 0 ? sum : '';
  }
  supplyReceived3(): any {
    let sum = 0;
    this.dataSourceFinal3.data.forEach((element) => {sum = sum + Number(element.supply); });

    return sum !== 0 ? sum : '';
  }
  qtySold3(): any {
    let sum = 0;
    this.dataSourceFinal3.data.forEach((element) => {sum = sum + Number(element.qtySold); });

    return sum !== 0 ? sum : '';
  }
  closingBal3(): any {
    let sum = 0;
    this.dataSourceFinal3.data.forEach((element) => {sum = sum + Number(element.closeBal); });

    return sum !== 0 ? sum : '';
  }
  qtyDue3(): any {
    let sum = 0;
    this.dataSourceFinal3.data.forEach((element) => {sum = sum + Number(element.qtyDue); });

    return sum !== 0 ? sum : '';
  }
  qtyApproved3(): any {
    let sum = 0;
    this.dataSourceFinal3.data.forEach((element) => {sum = sum + Number(element.qtyApp); });

    return sum !== 0 ? sum : '';
  }
  calcQtyReq3(): any {
    let sum = 0;
    this.dataSourceFinal3.data.forEach((element) => {sum = sum + Number(element.qtyRequired); });

    return sum !== 0 ? sum : '';
  }


}
