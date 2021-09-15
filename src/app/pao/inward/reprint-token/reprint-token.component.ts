
import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';

import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { CommonListing } from 'src/app/model/common-listing';
// import { WorkflowDetailsGrantComponent } from '../../workflow-details-grant/workflow-details-grant.component';

import { WorkflowDetailsGrantComponent } from '../../../grant/workflow-details-grant/workflow-details-grant.component';
import { ListValue } from 'src/app/model/paoModel';
import { PaoDirectives } from 'src/app/common/directive/pao';
import { ReprintToken } from 'src/app/model/treasury-bill';


@Component({
  selector: 'app-reprint-token',
  templateUrl: './reprint-token.component.html',
  styleUrls: ['./reprint-token.component.css']
})

export class ReprintTokenComponent implements OnInit {
  Element_Data: ReprintToken[] = [
    {
      billControl: '416/61/1804/368',
      billRefNo: '368',
      lastUsedToken: '558',
      cardexNo: '4',
      billRegNo: '331',
      tokenNo: '10237',
      billGrossAmount: '11000.00',
      billAmount: '10000.00',
      billType: 'Pay Bill',
      billDate: '25/Feb/2019 01:00 PM',
      ddoNo: '4',
      ddoName: 'Collector Office, Gandhinagar ',
      mhead: '2054',
      billCat: 'Regular',
      authiorName: '',
      partyName: 'Mr. Abc',
    }
  ];
  // Form Group
  reprintForm: FormGroup;
  // Variable
  isBDelete = false;
  public toggleButton = true;
  // Table Source
  newdisplayedColumns: string[] = ['select', 'billRefNo', 'billRegNo', 'tokenNo',
    'billDate', 'ddoNo', 'cardexNo', 'ddoName', 'billType', 'mhead',
    'billCat', 'billGrossAmount', 'billAmount', 'partyName', 'authiorName', 'action'];
  newDataSource = new MatTableDataSource<any>(this.Element_Data);
  selection = new SelectionModel<any>(true, []);

  billcategoryCtrl: FormControl = new FormControl();
  auditornameCtrl: FormControl = new FormControl();
  ddonameCtrl: FormControl = new FormControl();
  majorheadctrl: FormControl = new FormControl();
  billtypeCtrl: FormControl = new FormControl();
  // Lists
  auditor_list: ListValue[] = [
    { value: '1', viewValue: 'Shri. Pratik Shah' },
  ];

  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder,) { }
  directiveObject = new PaoDirectives(this.router, this.dialog);
  ngOnInit() {
    this.reprintData();
  }
  reprintData() {
    this.reprintForm = this.fb.group({
      tokennumber: [''],
      inwardDate: [''],
      refNo: [''],
      ddoNo: [''],
      officeName: [''],
      auditorctrl: ['1'],

    });
  }

  // Token add content
  addToken() {
    const p_data = this.newDataSource.data;
    this.isBDelete = true;
    p_data.push({
      billControl: '',
      billRefNo: '',
      lastUsedToken: '',
      cardexNo: '',
      billRegNo: '',
      tokenNo: '',
      billGrossAmount: '',
      billAmount: '',
      billType: '',
      billDate: '',
      ddoNo: '',
      ddoName: '',
      mhead: '',
      billCat: '',
      partyName: ''
    });
    this.newDataSource.data = p_data;
  }
  // Delet token
  deletTokenRow(index) {
    this.newDataSource.data.splice(index, 1);
    this.newDataSource = new MatTableDataSource(
      this.newDataSource.data
    );
  }
  // Clear Form
  clearForm() {
    this.reprintForm.reset();
  }
}


