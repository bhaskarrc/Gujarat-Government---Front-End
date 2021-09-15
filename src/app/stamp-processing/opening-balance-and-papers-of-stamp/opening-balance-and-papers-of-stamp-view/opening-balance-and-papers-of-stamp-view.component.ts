import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { ElementOpenBalanceView, ElementOpenBalance1Final, ElementOpenBalance1 } from 'src/app/model/stamp-processing';

const ELEMENT_DATA: ElementOpenBalance1[] = [
  {
    checkbox: true,
    deno: '1',
    fromSeries: 'A-000001',
    toSeries: 'A-000100',

    unitVal: '1.180',
    stampEachSheet: 180,
    labelPerSheet: '180',
    qtyRequired: 0,
    totalSheet: '20',
    label: '30',
    amount: 0,
    displayedColumns: '',
  },
  {
    checkbox: true,
    deno: '1',
    fromSeries: 'A-000001',
    toSeries: 'A-000100',

    unitVal: '2.220',
    stampEachSheet: 0,
    labelPerSheet: '220',
    qtyRequired: 0,
    totalSheet: '20',
    label: '30',
    amount: 0,
    displayedColumns: '',
  },
  {
    checkbox: true,
    deno: '2',
    fromSeries: 'A-000001',
    toSeries: 'A-000100',

    unitVal: '5.120',
    stampEachSheet: 0,
    labelPerSheet: '120',
    qtyRequired: 0,
    totalSheet: '20',
    label: '30',
    amount: 0,
    displayedColumns: '',
  },
  {
    checkbox: false,
    deno: '5',
    fromSeries: 'A-000001',
    toSeries: 'A-000100',

    unitVal: '10.140',
    stampEachSheet: 0,
    labelPerSheet: '140',
    qtyRequired: 0,
    totalSheet: '',
    label: '',
    amount: 0,
    displayedColumns: '',
  },
];

const ELEMENT_DATA2: ElementOpenBalance1[] = [
  {
    checkbox: false,
    deno: '1',
    fromSeries: 'A-000001',
    toSeries: 'A-000100',

    unitVal: '1.180',
    stampEachSheet: 180,
    labelPerSheet: '180',
    qtyRequired: 0,
    totalSheet: '',
    label: '',
    amount: 0,
    displayedColumns: '',
  },
  {
    checkbox: false,
    deno: '1',
    fromSeries: 'A-000001',
    toSeries: 'A-000100',

    unitVal: '2.220',
    stampEachSheet: 0,
    labelPerSheet: '220',
    qtyRequired: 0,
    totalSheet: '',
    label: '',
    amount: 0,
    displayedColumns: '',
  },
  {
    checkbox: false,
    deno: '2',
    fromSeries: 'A-000001',
    toSeries: 'A-000100',

    unitVal: '5.120',
    stampEachSheet: 0,
    labelPerSheet: '120',
    qtyRequired: 0,
    totalSheet: '',
    label: '',
    amount: 0,
    displayedColumns: '',
  },
  {
    checkbox: false,
    deno: '5',
    fromSeries: 'A-000001',
    toSeries: 'A-000100',

    unitVal: '10.140',
    stampEachSheet: 0,
    labelPerSheet: '140',
    qtyRequired: 0,
    totalSheet: '',
    label: '',
    amount: 0,
    displayedColumns: '',
  },
];

// Final Table Data
const ELEMENT_FINAL: ElementOpenBalance1Final[] = [
  {
    deno: '1',
    stampType: 'Agency License',
    fromSeries: 'A-000001',
    toSeries: 'A-000100',

    unitVal: '1.180',
    stampEachSheet: 180,
    labelPerSheet: '180',
    qtyRequired: 0,
    totalSheet: '20',
    label: '30',
    amount: 0,
    displayedColumns: '',
  },
  {
    deno: '1',
    stampType: 'Agency License',
    fromSeries: 'A-000001',
    toSeries: 'A-000100',

    unitVal: '2.220',
    stampEachSheet: 0,
    labelPerSheet: '220',
    qtyRequired: 0,
    totalSheet: '20',
    label: '30',
    amount: 0,
    displayedColumns: '',
  },
  {
    deno: '2',
    stampType: 'Agency License',
    fromSeries: 'A-000001',
    toSeries: 'A-000100',

    unitVal: '5.120',
    stampEachSheet: 0,
    labelPerSheet: '120',
    qtyRequired: 0,
    totalSheet: '20',
    label: '30',
    amount: 0,
    displayedColumns: '',
  },
];

const ELEMENT_FINAL2: ElementOpenBalance1Final[] = [
  {
    deno: '1',
    stampType: 'Agreement',
    fromSeries: 'A-000001',
    toSeries: 'A-000100',

    unitVal: '1.180',
    stampEachSheet: 180,
    labelPerSheet: '180',
    qtyRequired: 0,
    totalSheet: '20',
    label: '10',
    amount: 0,
    displayedColumns: '',
  },
  {
    deno: '1',
    stampType: 'Agreement',
    fromSeries: 'A-000001',
    toSeries: 'A-000100',

    unitVal: '2.220',
    stampEachSheet: 0,
    labelPerSheet: '220',
    qtyRequired: 0,
    totalSheet: '20',
    label: '10',
    amount: 0,
    displayedColumns: '',
  },
  {
    deno: '2',
    stampType: 'Agreement',
    fromSeries: 'A-000001',
    toSeries: 'A-000100',

    unitVal: '5.120',
    stampEachSheet: 0,
    labelPerSheet: '120',
    qtyRequired: 0,
    totalSheet: '20',
    label: '10',
    amount: 0,
    displayedColumns: '',
  },
];

@Component({
  selector: 'app-opening-balance-and-papers-of-stamp-view',
  templateUrl: './opening-balance-and-papers-of-stamp-view.component.html',
  styleUrls: ['./opening-balance-and-papers-of-stamp-view.component.css']
})
export class OpeningBalanceAndPapersOfStampViewComponent implements OnInit {
  // Entry Field Details
  finYear_list: CommonListing[] = [
    { value: '1', viewValue: '2011-2012' },
    { value: '2', viewValue: '2012-2013' },
    { value: '3', viewValue: '2013-2014' },
    { value: '4', viewValue: '2014-2015' },
    { value: '5', viewValue: '2015-2016' },
    { value: '6', viewValue: '2016-2017' },
    { value: '7', viewValue: '2017-2018' },
    { value: '8', viewValue: '2018-2019' },
    { value: '9', viewValue: '2019-2020' },
    { value: '10', viewValue: '2020-2021' },
  ];
  stamp_List: CommonListing[] = [
    { value: '1', viewValue: 'Agency License' },
    { value: '2', viewValue: 'Agreement' },
    { value: '3', viewValue: 'Court Fee Label' },
    { value: '4', viewValue: 'Court Fee Paper' },
    { value: '5', viewValue: 'Foreign bill' },
    { value: '6', viewValue: 'Hundi' },
    { value: '7', viewValue: 'Insurance' },
    { value: '8', viewValue: 'Non Judicial Paper' },
    { value: '9', viewValue: 'Notary' },
    { value: '10', viewValue: 'Revenue' },
    { value: '11', viewValue: 'Share transfer' },
    { value: '12', viewValue: 'Special Adhesive' },
  ];

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  dataSource2 = new MatTableDataSource(ELEMENT_DATA2);
  // Final Tables
  // Agency License
  dataSourceFinal1 = new MatTableDataSource(ELEMENT_FINAL);
  // Agreement
  dataSourceFinal2 = new MatTableDataSource(ELEMENT_FINAL2);

  // For Court Fee Paper and Non Judicial Paper

  displayedColumnsNew: string[] = ['position', 'stampType', 'denomination', 'unitVal',
    'labelPerSheet', 'totalSheet', 'label', 'fromSeries', 'toSeries', 'qtyRequired', 'amount'];

  displayedColumnsFinal: any[] = [];

  finYearCtrl: FormControl = new FormControl();
  stampCtrl: FormControl = new FormControl();
  date: any = new Date();
  stampForm: FormGroup;


  stampVal: string;

  // Agency License
  onAdd = false;
  // Agreement
  onAdd2 = false;

  // Agency License
  onCheck = false;
  // Agreement
  onCheck2 = false;
  showSubTre = false;

  // Table
  tables: any[] = [];
  dataSourceStamp: any;
  stampName: string;
  dataSourceFinalHeading = [];


  constructor(private fb: FormBuilder,
    private router: Router) {
  }

  ngOnInit() {
    this.createForm();
    this.changeStamp();
  }

  createForm() {
    this.stampForm = this.fb.group({
      finYear: ['2020-2021'],
      openingStk: ['14-Apr-2020'],
      stamp: ['1'],
      openQty: [''],
      deno: ['25000'],
      temp1: ['Treasury Office, Gandhinagar'],
    });
  }
  // Change data source on stamp value change
  changeStamp() {
    const stampNumber = this.stampForm.controls.stamp.value;
    if (stampNumber === '1') {
      this.stampName = 'Agency License';
      this.dataSourceStamp = this.dataSource;
      this.displayedColumnsFinal = this.displayedColumnsNew;
    } else if (stampNumber === '2') {
      this.stampName = 'Agreement';
      this.dataSourceStamp = this.dataSource2;
      this.displayedColumnsFinal = this.displayedColumnsNew;
    }
  }

  gotoListing() {
    this.router.navigate(['./stamp-processing/opening-balance-and-papers-of-stamp-list']);
  }

  getAmount(element) {
    let amount = 0;
    amount = (
      ((Number(element['labelPerSheet']) * Number(element['totalSheet']))
        +
        (Number(element['label']))) * Number(element['deno'])
    );
    return amount;
  }

  // calculates amt for Courst Fee Paper and Non Judicial Paper Table
  getAmountForCourtFeeAndNonJudicial(element) {
    let amount = 0;
    amount = (
      (Number(element['deno']) * ((Number(element['stampEachSheet']) * Number(element['totalSheet'])) + Number(element['label'])))
    );
    return amount;
  }

  // calculates opening quantity
  getOpeningQuantity(element) {
    let amount = 0;
    amount = (
      (Number(element['labelPerSheet']) * Number(element['totalSheet']) + Number(element['label']))
    );
    // return amount;
    return amount !== 0 ? amount : '';
  }

  // calculates opening quantity Court paper and Nin Judic
  getOpeningQuantityCourtNonJudicPaper(element) {
    let amount = 0;
    amount = (
      ((Number(element['stampEachSheet']) * Number(element['totalSheet'])) + Number(element['label']))
    );
    // return amount;
    return amount !== 0 ? amount : '';
  }

}
