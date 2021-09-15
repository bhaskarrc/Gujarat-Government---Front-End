import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { ElementSingleDoubleSTo } from 'src/app/model/stamp-processing';


const ELEMENT_DATA: ElementSingleDoubleSTo[] = [
  {
    denomination: '1',
    availQty: '10',
    authQty: '8',
    qtyTransfer: '0',
    from: 'A-000001',
    to: 'A-000100',
  },
  {
    denomination: '2',
    availQty: '9',
    authQty: '7',
    qtyTransfer: '0',
    from: 'B-000001',
    to: 'B-000100',
  },
  {
    denomination: '5',
    availQty: '11',
    authQty: '10',
    qtyTransfer: '0',
    from: 'C-000001',
    to: 'C-000100',
  },
  {
    denomination: '10',
    availQty: '10',
    authQty: '10',
    qtyTransfer: '0',
    from: 'D-000001',
    to: 'D-000100',
  },
  {
    denomination: '20',
    availQty: '9',
    authQty: '0',
    qtyTransfer: '0',
    from: 'E-000001',
    to: 'E-000100',
  }
];

const ELEMENT_DATA2: any[] = [
  {
    denomination: '1',
    availQty: '10',
    authQty: '8',
    qtyTransfer: '0',
    from: 'A-000001',
    to: 'A-000100',
  },
  {
    denomination: '5',
    availQty: '9',
    authQty: '7',
    qtyTransfer: '0',
    from: 'B-000001',
    to: 'B-000100',
  },
];
@Component({
  selector: 'app-single-double-lock-stoffice-view',
  templateUrl: './single-double-lock-stoffice-view.component.html',
  styleUrls: ['./single-double-lock-stoffice-view.component.css']
})
export class SingleDoubleLockStofficeViewComponent implements OnInit {

  challan_List: CommonListing[] = [
    { value: '1', viewValue: '51/00057/072019/23'},
    { value: '2', viewValue: '51/00057/082019/23'},
    ];

    dataSource = new MatTableDataSource(ELEMENT_DATA);
    dataSource2 = new MatTableDataSource(ELEMENT_DATA2);

    displayedColumns: string[] = ['position', 'denomination', 'availQty', 'authQty', 'qtyTransfer', 'from', 'to'];
    challanCtrl: FormControl = new FormControl();

    sdlockForm: FormGroup;
  date: any = new Date();
  stofficeVal = 'Sub-Treasury Office';
  venNameVal = 'Vendor';
  issueVal = 'Single Lock';
  stampVal: string;

  onAdd = true;

  constructor(private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.sdlockForm = this.fb.group({
      finYear: ['2019-2020'],
      stoffice: [''],
      dateName: [''],
      issue: [''],
      challan: ['1'],
      availQty: [''],
      pending: [''],
    });
  }

  gotoListing() {
    this.router.navigate(['./stamp-processing/single-double-lock-stoffice-list']);
  }

}
