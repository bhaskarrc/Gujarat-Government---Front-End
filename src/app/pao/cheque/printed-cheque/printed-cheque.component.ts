
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ReplaySubject, Subject, Observable } from 'rxjs';
import { takeUntil, startWith, map } from 'rxjs/operators';
import { SuspensionListModel } from 'src/app/model/suspension';
import { CommonListing } from 'src/app/model/common-listing';
import { yearsPerPage } from '@angular/material/datepicker/typings/multi-year-view';
import { SelectionModel } from '@angular/cdk/collections';
import { PartyDetailsComponent } from '../../party-details/party-details.component';

@Component({
  selector: 'app-printed-cheque',
  templateUrl: './printed-cheque.component.html',
  styleUrls: ['./printed-cheque.component.css']
})
export class PrintedChequeComponent implements OnInit {

  selection = new SelectionModel<any>(true, []);
  printedChequeForm: FormGroup;
  auditornameCtrl: FormControl = new FormControl();
  billtypeCtrl: FormControl = new FormControl();
  majorheadCtrl: FormControl = new FormControl();
  todayDate = Date.now();

  custodianAuthority_list: any[] = [
    { value: '1', viewValue: 'Mr. Pratik Shah [Head Accountant]' },
  ];



  stroy = new Subject<void>();



  private paginator: MatPaginator;
  private sort: MatSort;

  showTable: Boolean = false;
  ELEMENT_DATA: any[] =
    [
      {
        refNo: '2',
        regNo: '552',
        tokenNo: '10113',
        party: 'CHANDRESHWAR VISHWANATH BHAGAT',
        majorHead: '2071',
        ddoNo: '115',
        cardexNo: '4',
        billAmount: '200.00',
        billGrossAmount: '200.00',
        cheque: '50.00',
        chequeePayment: 'Cheque',
        partyName: 'Mr. Abc',
        billdate: '25-Feb-2019',
        inwardDate: '25-Feb-2019',
        ddoname: '	collector Office, Gandhinagar',
        billcat: 'Regular',
        billtype: 'Pay Bill',
        chequeno: 'TRY61-286971',
        paidAmount: '600.00'
      },
    ];


  ddoname_list: any = [
    { value: '1', viewValue: ' Collector Office, Gandhinagar' },
  ];

  ddonameCtrl: FormControl = new FormControl();
  partyNameCtrl: FormControl = new FormControl();
  party_list: any[] = [
    { value: '1', viewValue: 'Mr. Abc' },
  ];
  auditor_list: any[] = [{
    value: '1', viewValue: 'Shri. Pratik Shah'
  },
  ];

  billtype_list: any[] = [
    { value: '1', viewValue: 'GTR 30 Pay Bill' },
    { value: '2', viewValue: 'GTR 45 TA Bill' },
    { value: '3', viewValue: 'GTR 40 Grant In Bill' },
    { value: '4', viewValue: 'GTR 12 Advance Bill' }
  ];


  billcategory_list: any[] = [
    { value: '1', viewValue: 'Regular' },
    { value: '2', viewValue: 'TC' },
    { value: '3', viewValue: 'NIL' },
    { value: '4', viewValue: 'Regular/Challan' }
  ];


  major_list: any[] = [{
    value: '1',
    viewValue: '2011'
  },
  {
    value: '2',
    viewValue: '2012'
  },
  {
    value: '3',
    viewValue: '2014'
  },
  {
    value: '3',
    viewValue: '2029'
  },
  {
    value: '3',
    viewValue: '2030'
  },
  {
    value: '3',
    viewValue: '2039'
  },
  {
    value: '3',
    viewValue: '2040'
  },
  {
    value: '4',
    viewValue: '2015'
  }
  ];




  displayedColumns: string[] = ['checkBox', 'refNo', 'regNo', 'tokenNo', 'billdate', 'inwardDate',
    'ddoNo', 'cardexNo', 'ddoname', 'billtype', 'majorHead', 'billcat', 'billGrossAmount', 'billAmount', 'partyName',
    'chequeno', 'cheque'];
  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);

  searchListForm: FormGroup;


  commentGrantDetails(): void {
    const dialogRef = this.dialog.open(PartyDetailsComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }



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
    public dialog: MatDialog,
  ) { }


  ngOnInit() {
    this.printedChequeFormData();
  }

  printedChequeFormData() {
    this.printedChequeForm = this.fb.group({
      Billrefernum: [''],
      tokenno: [''],
      majorhead: [''],
      chequeamount: [''],
      billamount: [''],
      netamount: [''],
      partyName: [''],
      auditorname: [''],
      billcategory: [''],
      billtypes: [''],
      ddono: [''],
      cardexno: [''],
      ddoname: [''],
      billate: [''],
      Tokenno: [''],
      regBill: ['']
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



  selectedAll: Boolean = false;

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


  submitDetails() {
  }

}



