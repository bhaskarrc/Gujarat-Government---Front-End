import { Router } from '@angular/router';

import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

import { SelectionModel } from '@angular/cdk/collections';

import { Component, OnInit, ViewChild } from '@angular/core';
import { EPOAMessage } from 'src/app/common/error-message/common-message.constants';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
const ELEMENT_DATA: any[] = [
  {
    cIn: '565689783354899',
    tNo: '100000023',
    eDate: '15-May-2018',
    debitHead: '101',
    headAmt: '2000.00',
    totalAmt: '2000.00',
    creditHead: '102',
    creditHeadAmt: '2000.00',
    creditTotalAmt: '2000.00',
  },
  {
    cIn: '565689783354856',
    tNo: '100000024',
    eDate: '15-May-2018',
    debitHead: '102',
    headAmt: '2000.00',
    totalAmt: '4000.00',
    creditHead: '1032',
    creditHeadAmt: '2000.00',
    creditTotalAmt: '4000.00',
  },
];
@Component({
  selector: 'app-manual-entry-ha-link-listing',
  templateUrl: './manual-entry-ha-link-listing.component.html',
  styleUrls: ['./manual-entry-ha-link-listing.component.css']
})
export class ManualEntryHaLinkListingComponent implements OnInit {
  todayDate = Date.now();
  initiatiomdate = new Date((new Date()));
  maxDate = new Date();

  errorMessages = EPOAMessage;
  isSubmitted: boolean = false;
  entryMasterHaLinkListForm: FormGroup;


  forwardCtrl: FormControl = new FormControl();

  forwardCtrl_list: any[] = [
    { value: '1', viewValue: 'SA' },
    { value: '2', viewValue: 'DA' },
    { value: '3', viewValue: 'AO' },

  ];


  selection = new SelectionModel<any>(true, []);

  displayedColumns = ['checkBox', 'cIn', 'tNo', 'eDate', 'debitHead', 'headAmt', 'totalAmt',
    'creditHead', 'creditHeadAmt', 'creditTotalAmt', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private router: Router, private fb: FormBuilder, public dialog: MatDialog, ) { }


  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.entryMasterHaLinkListForm = this.fb.group({
      refNo: [''],
      eDate: [''],
      debitHead: [''],
      cinNo: [''],
      type: [''],
      headAmt: [''],
      totalAmt: [''],
      creditHead: [''],
      totalHeadAmt: [''],
      remark: [''],

    });
  }

  clearForm() {
    this.entryMasterHaLinkListForm.reset();
  }

  onSave() {
    if (this.entryMasterHaLinkListForm.valid) {
      this.isSubmitted = false;
    } else {
      this.isSubmitted = true;
    }

  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
  delete(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource = new MatTableDataSource(this.dataSource.data);
  }

}


