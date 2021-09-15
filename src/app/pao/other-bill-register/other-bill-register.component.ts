import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource, MatSort, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ReplaySubject, Subject, Observable } from 'rxjs';
import { takeUntil, startWith, map } from 'rxjs/operators';
import { yearsPerPage } from '@angular/material/datepicker/typings/multi-year-view';
import { SelectionModel } from '@angular/cdk/collections';
import { Router } from '@angular/router';
import { paoMessage } from 'src/app/common/error-message/common-message.constants';
import { FlyLeafRegister } from 'src/app/model/paoModel';
@Component({
  selector: 'app-other-bill-register',
  templateUrl: './other-bill-register.component.html',
  styleUrls: ['./other-bill-register.component.css']
})
export class OtherBillRegisterComponent implements OnInit {
  // Date
  maxDate = new Date();
  isSubmitted: boolean = false;
  // Table Source
  ELEMENT_DATA: FlyLeafRegister[] =
    [
      {
        tokenNo: '4157',
        billDate: '03-03-2020',
        billRefNo: '5001',
        majorHead: '2054',
        billType: 'GTR 30 Pay Bill',
        cardexNo: '4',
        ddo: 'Collector Officer, Bhuj ',
        billInward: '03-03-2020',
        billAmount: '2564.00',
        category: 'Regular',
      },
    ];

  displayedColumns: string[] = ['checkBox', 'tokenNo', 'billDate', 'billRefNo', 'billInward', 'cardexNo', 'ddo', 'billType',
    'majorHead', 'category', 'billAmount', 'action'];
  date = new FormControl(new Date());
  otherBillRegisterEntry: FormGroup;
  todayDate = Date.now();

  _onDestroy = new Subject<void>();

  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);

  private sort: MatSort;

  showTable: Boolean = false;
  selection = new SelectionModel<any>(true, []);

  errorMessages = paoMessage;

  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder) { }

  ngOnInit() {
    this.otherBillRegisterEntry = this.fb.group({
      tokenNumber: [''],
      ddo: [''],
      bDate: [''],
      empNumber: [''],
      empName: [''],
      amount: [],
      remark: [],
      designation: [''],
      date: [''],

    });

    this.otherBillRegisterEntry.patchValue({
      empName: 'Mr.Sanket Modi',
      designation: 'Treasury Officer',
    });
  }

  onclickStatus(data) {
    if (data.active) {
      data.active = false;
    } else {
      data.active = true;
    }
    return data;
  }

  clearForm() {
    this.otherBillRegisterEntry.reset();
  }

  search() {
    this.showTable = true;
  }
  // tslint:disable-next-line:member-ordering
  expendCharges = false;
  // tslint:disable-next-line:member-ordering
  showSearch = false;

  add() {
    this.expendCharges = true;
  }

  clickSearch() {
    this.showSearch = true;
    if (this.otherBillRegisterEntry.valid) {
      this.isSubmitted = false;
    } else {
      this.isSubmitted = true;
    }
  }




}







