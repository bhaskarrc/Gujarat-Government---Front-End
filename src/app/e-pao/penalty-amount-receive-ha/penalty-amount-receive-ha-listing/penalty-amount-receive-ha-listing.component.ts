

import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

import { SelectionModel } from '@angular/cdk/collections';

import { Component, OnInit, ViewChild } from '@angular/core';
import { EPOAMessage } from 'src/app/common/error-message/common-message.constants';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
const ELEMENT_DATA: any[] = [
  {
    fDate: '15-Apr-2018',
    tDate: '15-Apr-2019',
    bank: 'Bank Of Baroda, Baroda',
    pAmt: '2000.00',
    rAmt: '2000.00',
    rMonth: 'April',
    rYear: '2018-2019',
    remAmt: '0.00',
  },

  {
    fDate: '15-Apr-2018',
    tDate: '15-Apr-2019',
    bank: 'Bank Of Baroda, Baroda',
    pAmt: '4000.00',
    rAmt: '4000.00',
    rMonth: 'April',
    rYear: '2018-2019',
    remAmt: '0.00',
  },

];
@Component({
  selector: 'app-penalty-amount-receive-ha-listing',
  templateUrl: './penalty-amount-receive-ha-listing.component.html',
  styleUrls: ['./penalty-amount-receive-ha-listing.component.css']
})
export class PenaltyAmountReceiveHaListingComponent implements OnInit {
  todayDate = Date.now();
  initiatiomdate = new Date((new Date()));
  maxDate = new Date();

  errorMessages = EPOAMessage;
  isSubmitted: boolean = false;
  penaltyAmountHaListForm: FormGroup;


  bankTypeCtrl: FormControl = new FormControl();
  rMonthCtrl: FormControl = new FormControl();
  rYearCtrl: FormControl = new FormControl();

  bankType_list: any[] = [
    { value: '1', viewValue: 'Bank Of Baroda, Baroda' },
    { value: '2', viewValue: 'Bank Of Baroda, Baroda' },

  ];
  rMonth_list: any[] = [
    { value: '1', viewValue: 'January' },
    { value: '2', viewValue: 'March' },
    { value: '3', viewValue: 'April' },
  ];
  year_list: any[] = [
    { value: '1', viewValue: '2018-2019' },
    { value: '2', viewValue: '2019-2020' },
  ];

  selection = new SelectionModel<any>(true, []);

  displayedColumns = ['checkBox', 'fDate', 'tDate', 'bank', 'pAmt', 'rAmt',
    'rMonth', 'rYear', 'remAmt', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private router: Router, private fb: FormBuilder, public dialog: MatDialog, ) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.penaltyAmountHaListForm = this.fb.group({
      fdate: [''],
      tdate: [''],
      bankType: [''],
      bank: [''],
      penaltyAmount: [''],
      recoveredAmount: [''],
      rMonth: [''],
      rYear: [''],
      amt: [''],
    });
  }




  onSave() {
    if (this.penaltyAmountHaListForm.valid) {
      this.isSubmitted = false;
    } else {
      this.isSubmitted = true;
    }

  }

  clearForm() {
    this.penaltyAmountHaListForm.reset();
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




