import { CommonListing } from './../../model/common-listing';
import { ListValue } from './../../model/common-grant';
import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource, MatDialog, MatDialogRef } from '@angular/material';
import { budgetMessage } from 'src/app/common/error-message/common-message.constants';
import { SchemeTypeMapping } from 'src/app/model/budget';

@Component({
  selector: 'app-scheme-type-mapping',
  templateUrl: './scheme-type-mapping.component.html',
  styleUrls: ['./scheme-type-mapping.component.css']
})
export class SchemeTypeMappingComponent implements OnInit {

  // Listing table data
    ELEMENT_DATA: SchemeTypeMapping[] = [
    {position: 1,  finYear: '2019-2020', bhNormal: 'Map', bhTasp: 'Map', bhScsp: 'Map', bhWorks: 'Map', bhEarthQuake: 'Map'
     , bhNormal1: '07:2251:101:01:00', bhTasp1: '07:2251:101:02:01',
     bhScsp1: '07:2251:101:03:02', bhWorks1: '07:2251:101:04:03', bhEarthQuake1: '07:2251:101:05:04'},
    {position: 2,  finYear: '2019-2020', bhNormal: 'Map', bhTasp: 'Map', bhScsp: 'Map', bhWorks: 'Map', bhEarthQuake: 'Map',
     bhNormal1: '07:2251:101:01:00', bhTasp1: '07:2251:101:02:01',
     bhScsp1: '07:2251:101:03:02', bhWorks1: '07:2251:101:04:03', bhEarthQuake1: '07:2251:101:05:04'}
  ];

  // Entry Field Details
  demand_list: CommonListing[] = [
    {value: '70 : Community Development', viewValue: '70 : Community Development'},
    {value: '71 : Rural Housing and Rural Development', viewValue: '71 : Rural Housing and Rural Development'},
    {value: '73 : Other Expenditure pertaining to Panchayats, Rural Housing and Rural Development Department',
     viewValue: '73 : Other Expenditure pertaining to Panchayats, Rural Housing and Rural Development Department'},
  ];

  fYear_list: CommonListing[] = [
    {value: '1', viewValue: '2019-2020'}
  ];

  mHead_list: CommonListing[] = [
    { value: '1', viewValue: '3451:Secretariat-Economic Services' },
  ];

  majorHead_list: CommonListing[] = [
    { value: '1', viewValue: '3451:Secretariat-Economic Services' },
    {
      value: '2',
      viewValue: '5475:Capital Outlay on other General Economics Services'
    },
    { value: '3', viewValue: '2401:Crop Husbandry' },
    { value: '4', viewValue: '2071:Pensions and Other Retirement Benefits' },
    { value: '5', viewValue: '2058:Stationery and Printing' }
  ];

  dept_list: CommonListing[] = [
    {
      value: '1', viewValue: 'Agriculture, Farmers Welfare and Co-operation Department'
    }
  ];
// Hide/Show Variables
showVal1 = false;
showVal2 = false;
showVal3 = false;
showVal4 = false;
showVal5 = false;
showVal6 = false;
showVal7 = false;
showVal8 = false;
showVal9 = false;
showVal10 = false;


  // Entry Table
  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
  displayedColumns: string[] = [ 'position',  'bhNormal', 'bhTasp', 'bhScsp', 'bhWorks', 'action'];
showTable: boolean;
  dialogRef: any;
  errorMessages = budgetMessage;

    constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    ) {
      this.showTable = false;
    }

  schemeForm: FormGroup;

  demandCtrl: FormControl = new FormControl();
  mHeadCtrl: FormControl = new FormControl();
  fYearCtrl: FormControl = new FormControl();
  deptCtrl: FormControl = new FormControl();

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.schemeForm = this.fb.group({
      demand: [''],
      mHead: [''],
      dept: [''],
      fYear: [''],

    });
  }

  clearForm() {
    this.schemeForm.reset();
  }
  afterSearch() {
    this.showTable = true;
  }

// Mapping Popup
  mappingFunc() {
    console.log('hello');

    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(SchemeTypeForwardDialogComponent, {
      width: '2700px',

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

  // Mapping Popup functions column wise
  mappingFunc1() {
    console.log('hello');

    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(SchemeTypeForwardDialogComponent, {
      width: '2700px',

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.showVal1 = true;
    });
  }
 mappingFunc2() {
    console.log('hello');

    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(SchemeTypeForwardDialogComponent, {
      width: '2700px',

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.showVal2 = true;
    });
  }
 mappingFunc3() {
    console.log('hello');

    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(SchemeTypeForwardDialogComponent, {
      width: '2700px',

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.showVal3 = true;
    });
  }
 mappingFunc4() {
    console.log('hello');

    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(SchemeTypeForwardDialogComponent, {
      width: '2700px',

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.showVal4 = true;
    });
  }
 mappingFunc5() {
    console.log('hello');

    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(SchemeTypeForwardDialogComponent, {
      width: '2700px',

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.showVal5 = true;
    });
  }
 mappingFunc6() {
    console.log('hello');

    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(SchemeTypeForwardDialogComponent, {
      width: '2700px',

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.showVal6 = true;
    });
  }
 mappingFunc7() {
    console.log('hello');

    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(SchemeTypeForwardDialogComponent, {
      width: '2700px',

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.showVal7 = true;
    });
  }
 mappingFunc8() {
    console.log('hello');

    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(SchemeTypeForwardDialogComponent, {
      width: '2700px',

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.showVal8 = true;
    });
  }
 mappingFunc9() {
    console.log('hello');

    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(SchemeTypeForwardDialogComponent, {
      width: '2700px',

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.showVal9 = true;
    });
  }
 mappingFunc10() {
    console.log('hello');

    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(SchemeTypeForwardDialogComponent, {
      width: '2700px',

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.showVal10 = true;
    });
  }
}

@Component({
  selector: 'app-scheme-type-forward-dialog',
  templateUrl: 'scheme-type-forward-dialog.html',
  styleUrls: ['./scheme-type-mapping.component.css']
})
export class SchemeTypeForwardDialogComponent implements OnInit {
  schemePopForm: FormGroup;
  schemePopFormEdit: FormGroup;
  errorMessages = budgetMessage;

  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<SchemeTypeForwardDialogComponent>
    ) { }

    // Popup Entry Details
  demand_list: ListValue[] = [
    {value: '70 : Community Development', viewValue: '70 : Community Development'},
  ];

  bpn_list: ListValue[] = [
    { value: '1', viewValue: '03:Agriculture, Farmers Welfare & Co-Operation Department' },
];
  majorHead_list: ListValue[] = [
    { value: '1', viewValue: '3451:Secretariat-Economic Services' },

  ];
  revenueCapital_list: ListValue[] = [
    { value: '1', viewValue: 'Revenue' },
  ];
  subMajorHead_list: ListValue[] = [
    {
      value: '1',
      viewValue: '00:Secretariat-Economic Services'
    },
  ];
  minorHead_list: ListValue[] = [
    {
      value: '1',
      viewValue: '090:Secretariat'
    },
  ];
  subHead_list: ListValue[] = [
    {
      value: '01:Agricultural and Co-operation Department',
      viewValue: '01:Agricultural and Co-operation Department'
    },
  ];
  detailHead_list: ListValue[] = [
    {
      value: '00:Agricultural and Co-operation Department',
      viewValue: '00:Agricultural and Co-operation Department'
    },
    {
      value: '00:PLN-10 Planning Machinery in Agriculture.and Co-Operation  Development',
      viewValue: '00:PLN-10 Planning Machinery in Agriculture.and Co-Operation  Development'
    },
  ];

  type_list: ListValue[] = [
      {value: '1', viewValue: 'TASP'},
      {value: '2', viewValue: 'SCSP'},
      {value: '3', viewValue: 'Works'},
      {value: '4', viewValue: 'EarthQuake'},

  ];

  demandCtrl: FormControl = new FormControl();
  bpnCodeCtrl: FormControl = new FormControl();
  majorHeadCodeCtrl: FormControl = new FormControl();
  revenueCapitalCtrl: FormControl = new FormControl();
  subMajorHeadCodeCtrl: FormControl = new FormControl();
  minorHeadCodeCtrl: FormControl = new FormControl();
  subHeadCodeCtrl: FormControl = new FormControl();
  detailHeadCodeCtrl: FormControl = new FormControl();
  typeCtrl: FormControl = new FormControl();

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.schemePopForm = this.fb.group({
      demand: ['', Validators.required],
      bpnCode: ['', Validators.required],
      majorHeadCode: ['', Validators.required],
      revenueCapital: [''],
      subMajorHeadCode: [''],
      minorHeadCode: [''],
      subHeadCode: [''],
      detailHeadCode: [''],

    });
    this.schemePopFormEdit = this.fb.group({
      type: ['', Validators.required]
    });
  }

  forwardConsolidate() {
    console.log('forwardConsolidate');

    if (this.demandCtrl.value === null) {
      this.dialogRef.close('');
    }

  }

}
