import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { ElementDoubleSingleTo } from 'src/app/model/stamp-processing';
import { StampProcessingDirectives } from 'src/app/common/directive/stamp-processing-directive';

// Listing table 1 data
const ELEMENT_DATA: ElementDoubleSingleTo[] = [
  {
    denomination: '1',
    availQty: '10',
    authQty: '8',
    qtyTransfer: '0',
    from: '-',
    to: '-',
    stampType: 'Court Fee Label',
    unitVal: '1.180',
    labelSheet: '180',
    stampNo: '12',
    sheetNo: '20',
    isDisable: true,
  },
  {
    denomination: '2',
    availQty: '9',
    authQty: '7',
    qtyTransfer: '0',
    from: '-',
    to: '-',
    stampType: 'Court Fee Label',
    unitVal: '2.140',
    labelSheet: '140',
    stampNo: '12',
    sheetNo: '20',
    isDisable: true,
  },
  {
    denomination: '5',
    availQty: '11',
    authQty: '10',
    qtyTransfer: '0',
    from: '-',
    to: '-',
    stampType: 'Court Fee Label',
    unitVal: '5.80',
    labelSheet: '80',
    stampNo: '12',
    sheetNo: '20',
    isDisable: true,
  },
];
const ELEMENT_DATA_Challan_Paper: ElementDoubleSingleTo[] = [
  {
    denomination: '10',
    availQty: '10',
    authQty: '10',
    qtyTransfer: '0',
    from: 'D-000001',
    to: 'D-000100',
    stampType: 'Court Fee Paper',
    unitVal: '10',
    labelSheet: '1',
    stampNo: '12',
    sheetNo: '20',
    isDisable: true,
  },
  {
    denomination: '20',
    availQty: '9',
    authQty: '0',
    qtyTransfer: '0',
    from: 'E-000001',
    to: 'E-000100',
    stampType: 'Court Fee Paper',
    unitVal: '20',
    labelSheet: '1',
    stampNo: '12',
    sheetNo: '20',
    isDisable: true,
  }
];
// Listing table 2 data
const ELEMENT_DATA2: ElementDoubleSingleTo[] = [
  {
    denomination: '1',
    availQty: '10',
    authQty: '8',
    qtyTransfer: '0',
    from: '-',
    to: '-',
    stampType: 'Revenue',
    unitVal: '1.140',
    labelSheet: '140',
    stampNo: '12',
    sheetNo: '20',
    isDisable: true,
  },
  {
    denomination: '5',
    availQty: '9',
    authQty: '7',
    qtyTransfer: '0',
    from: '-',
    to: '-',
    stampType: 'Revenue',
    unitVal: '5.180',
    labelSheet: '180',
    stampNo: '12',
    sheetNo: '20',
    isDisable: true,
  },
];


@Component({
  selector: 'app-double-single-lock-toffice-view',
  templateUrl: './double-single-lock-toffice-view.component.html',
  styleUrls: ['./double-single-lock-toffice-view.component.css']
})
export class DoubleSingleLockTofficeViewComponent implements OnInit {

  challan_List: CommonListing[] = [
    { value: '1', viewValue: '51/00057/072019/23'},
    { value: '2', viewValue: '51/00057/082019/23'},
    ];
    transferMode_List: CommonListing[] = [
    { value: '1', viewValue: 'Manual'},
    { value: '2', viewValue: 'Challan'},
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

// Challan Mode
dataSource = new MatTableDataSource(ELEMENT_DATA);
dataSourceChallanPaper = new MatTableDataSource(ELEMENT_DATA_Challan_Paper);
dataSource2 = new MatTableDataSource(ELEMENT_DATA2);
  dataSourceFinalHeading = [];
// Listing Table
displayedColumns: string[] = ['position', 'stampType', 'denomination', 'unitVal', 'labelSheet',
'sheetNo', 'stampNo', 'from', 'to', 'availQty', 'qtyTransfer'];
    challanCtrl: FormControl = new FormControl();
    transferModeCtrl: FormControl = new FormControl();
    stampCtrl: FormControl = new FormControl();

    lockForm: FormGroup;
  date: any = new Date();
  tofficeVal = 'Treasury Office, Ahmedabad';
  venNameVal = 'B S Patel (000123)';
  issueVal = 'Single Lock';
  stampVal: string;
  directiveObject = new StampProcessingDirectives(this.router, this.dialog);

  onAdd = true;

  constructor(private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.lockForm = this.fb.group({
      finYear: ['2019-2020'],
      toffice: [''],
      dateName: [''],
      issue: [''],
      transferMode: ['2'],
      challan: ['1'],
      stamp: ['3'],
    });
  }

  gotoListing() {
    this.router.navigate(['./stamp-processing/double-single-lock-toffice-list']);
  }

}
