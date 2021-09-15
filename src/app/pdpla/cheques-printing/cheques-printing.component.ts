import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { ListValue, ChequePrint } from 'src/app/model/pdpla';
@Component({
  selector: 'app-cheques-printing',
  templateUrl: './cheques-printing.component.html',
  styleUrls: ['./cheques-printing.component.css']
})
export class ChequesPrintingComponent implements OnInit {
  // form group
  chequePrintingForm: FormGroup;
  // List

  ELEMENT_DATA: ChequePrint[] =
    [{
      accountNumber: '',
      refNo: '6',
      tokenNo: '10117',
      party: 'CHANDRESHWAR VISHWANATH BHAGAT',
      cardexNo: '4',
      majorHead: '2071',
      billAmount: '397790.00',
      chequeePayment: '397790.00',
      status: 'Pending'
    }, {
      accountNumber: '',
      refNo: '6',
      tokenNo: '2171',
      party: 'DIST. TREASURY OFFICER ,BHUJ',
      cardexNo: '4',
      majorHead: '2071',
      billAmount: '397790.00',
      chequeePayment: '397790.00',
      status: 'Pending'
    }, {
      accountNumber: '',
      refNo: '6',
      tokenNo: '551',
      party: 'Mr. Pratik Shah',
      cardexNo: '4',
      majorHead: '2054',
      billAmount: '100.00',
      chequeePayment: '100.00',
      status: 'Pending'
    }, {
      accountNumber: '',
      refNo: '6',
      tokenNo: '10117',
      party: 'CHANDRESHWAR VISHWANATH BHAGAT',
      cardexNo: '4',
      majorHead: '2071',
      billAmount: '397790.00',
      chequeePayment: '397790.00',
      status: 'Pending'
    }];


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
  // table source

  displayedColumns: string[] = ['checkBox', 'accountNumber', 'refNo', 'tokenNo', 'party', 'cardexNo', 'majorHead', 'billAmount',
    'chequeePayment'];
  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
  // form group
  searchListForm: FormGroup;
  // Form Control
  ddonameCtrl: FormControl = new FormControl();
  auditornameCtrl: FormControl = new FormControl();
  // date
  todayDate = Date.now();


  stroy = new Subject<void>();

  // Variable operator
  private paginator: MatPaginator;
  private sort: MatSort;
  selectedAll = false;
  showTable = false;

  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }

  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.chequePrintingFormData();
  }

  chequePrintingFormData() {
    this.chequePrintingForm = this.fb.group({
      // Formfields
      totalCheque: [''],
      currentPage: ['']
    });
  }

  // sets datasource attributes
  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // clears form
  clearForm() {
    this.searchListForm.reset();
  }

  search() {
    this.showTable = true;
  }

}
