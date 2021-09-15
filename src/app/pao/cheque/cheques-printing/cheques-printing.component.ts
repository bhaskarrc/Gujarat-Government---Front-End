

import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ReplaySubject, Subject, Observable } from 'rxjs';
import { takeUntil, startWith, map } from 'rxjs/operators';
import { SuspensionListModel } from 'src/app/model/suspension';
import { CommonListing } from 'src/app/model/common-listing';
import { yearsPerPage } from '@angular/material/datepicker/typings/multi-year-view';
import { PaoDirectives } from 'src/app/common/directive/pao';
import { Router } from '@angular/router';
import { ListValue } from 'src/app/model/paoModel';
import { ChequePrintingBill } from 'src/app/model/treasury-bill';

@Component({
  selector: 'app-cheques-printing',
  templateUrl: './cheques-printing.component.html',
  styleUrls: ['./cheques-printing.component.css']
})
export class ChequesPrintingComponent implements OnInit {
  // Form Group
  chequePrintingForm: FormGroup;
  // Lists
  ELEMENT_DATA: ChequePrintingBill[] =
    [
      {
        accountNumber: '',
        refNo: '6',
        tokenNo: '10117',
        party: 'CHANDRESHWAR VISHWANATH BHAGAT',
        cardexNo: '4',
        majorHead: '2071',
        billAmount: '397790.00',
        chequeePayment: '397790.00',
        status: 'Pending'
      },
      {
        accountNumber: '',
        refNo: '6',
        tokenNo: '2171',
        party: 'DIST. TREASURY OFFICER ,BHUJ',
        cardexNo: '4',
        majorHead: '2071',
        billAmount: '397790.00',
        chequeePayment: '397790.00',
        status: 'Pending'
      },
      {
        accountNumber: '',
        refNo: '6',
        tokenNo: '551',
        party: 'Mr. Pratik Shah',
        cardexNo: '4',
        majorHead: '2054',
        billAmount: '100.00',
        chequeePayment: '100.00',
        status: 'Pending'
      },
      {
        accountNumber: '',
        refNo: '6',
        tokenNo: '10117',
        party: 'CHANDRESHWAR VISHWANATH BHAGAT',
        cardexNo: '4',
        majorHead: '2071',
        billAmount: '397790.00',
        chequeePayment: '397790.00',
        status: 'Pending'
      },
    ];
  ddoname_list: ListValue[] = [
    { value: '1', viewValue: '	District Treasury Office, Gandhinagar' },
  ];


  major_list: ListValue[] = [
    { value: '1', viewValue: '2011' },
    { value: '2', viewValue: '2012' },
    { value: '3', viewValue: '2014' },
    { value: '3', viewValue: '2029' },
    { value: '3', viewValue: '2030' },
    { value: '3', viewValue: '2039' },
    { value: '3', viewValue: '2040' },
    { value: '4', viewValue: '2015' }
  ];

  // Table Source
  displayedColumns: string[] = ['checkBox', 'accountNumber', 'refNo', 'tokenNo', 'party', 'cardexNo', 'majorHead', 'billAmount',
    'chequeePayment'];
  // Form Group

  searchListForm: FormGroup;
  // Form Control
  ddonameCtrl: FormControl = new FormControl();
  auditornameCtrl: FormControl = new FormControl();
  // Date
  todayDate = Date.now();

  // Variable
  stroy = new Subject<void>();
  selectedAll: Boolean = false;
  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);

  private paginator: MatPaginator;
  private sort: MatSort;

  showTable: Boolean = false;

  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog, private router: Router,
  ) { }
  directiveObject = new PaoDirectives(this.router, this.dialog);


  ngOnInit() {
    this.chequePrintingFormData();
  }

  chequePrintingFormData() {
    this.chequePrintingForm = this.fb.group({
      totalCheque: [''],
      currentPage: [''],

    });
  }

  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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
    this.searchListForm.reset();
  }

  search() {
    this.showTable = true;
  }




  selectAll() {
    this.dataSource.data.forEach(_d => {
      _d.selected = this.selectedAll;
    });
    this.dataSource = new MatTableDataSource(this.dataSource.data);
  }

  checkIfAllSelected() {
    this.selectedAll = this.dataSource.data.every((item) => {
      return item.selected === true;
    });
  }



}
