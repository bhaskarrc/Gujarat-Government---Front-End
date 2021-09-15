import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ReplaySubject, Subject, Observable } from 'rxjs';
import { takeUntil, startWith, map } from 'rxjs/operators';
import { SuspensionListModel } from 'src/app/model/suspension';
import { CommonListing } from 'src/app/model/common-listing';
import { yearsPerPage } from '@angular/material/datepicker/typings/multi-year-view';
import { SelectionModel } from '@angular/cdk/collections';
import { Router } from '@angular/router';
import { PaoDirectives } from 'src/app/common/directive/pao';
import { ChequePrintingGenerate } from 'src/app/model/treasury-bill';
@Component({
  selector: 'app-cheque-printing-generate-cheque',
  templateUrl: './cheque-printing-generate-cheque.component.html',
  styleUrls: ['./cheque-printing-generate-cheque.component.css']
})
export class ChequePrintingGenerateChequeComponent implements OnInit {
  // Form Group
  searchListForm: FormGroup;
  chequePrintingGenerateChequeForm: FormGroup;
  // Variable
  selectedAll: Boolean = false;
  // Lists
  Element_Data: ChequePrintingGenerate[] =
    [
      {
        accountNumber: 'TRY61-286932',
        refNo: '6',
        tokenNo: '10117',
        party: 'CHANDRESHWAR VISHWANATH BHAGAT',
        ddoNo: '115',
        cardexNo: '4',
        majorHead: '2071',
        billAmount: '397790.00',
        chequeePayment: '397790.00',
        status: 'Pending'
      },


    ];
  ddoname_list: any = [
    { value: '1', viewValue: '	Collector Office, Gandhinagar' },
  ];

  major_list: any[] = [
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

  displayedColumns: string[] = ['checkBox', 'refNo', 'tokenNo', 'ddoNo',
    'cardexNo', 'majorHead', 'billAmount', 'accountNumber', 'party',
    'chequeePayment'];

  // Form Control
  ddonameCtrl: FormControl = new FormControl();
  auditornameCtrl: FormControl = new FormControl();
  // Date
  todayDate = Date.now();
  selection = new SelectionModel<any>(true, []);


  stroy = new Subject<void>();

  dataSource = new MatTableDataSource<any>(this.Element_Data);

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
    public dialog: MatDialog,
    private router: Router,
  ) { }

  directiveObject = new PaoDirectives(this.router, this.dialog);

  ngOnInit() {
    this.chequePrintingGenerateChequeFormData();
  }

  chequePrintingGenerateChequeFormData() {
    this.chequePrintingGenerateChequeForm = this.fb.group({
      Billrefernum: [''],
      tokenno: [''],
      majorhead: [''],
      chequeamount: [''],
      netamount: [''],
      ddoNo: [''],
      cardexno: [''],
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

}
