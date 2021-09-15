
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ReplaySubject, Subject, Observable } from 'rxjs';
import { takeUntil, startWith, map } from 'rxjs/operators';
import { SuspensionListModel } from 'src/app/model/suspension';
import { CommonListing } from 'src/app/model/common-listing';
import { yearsPerPage } from '@angular/material/datepicker/typings/multi-year-view';
import { SelectionModel } from '@angular/cdk/collections';
import { PartyDetailsComponent } from '../party-details/party-details.component';
import { WorkflowDetailsGrantComponent } from '../../workflow-details-grant/workflow-details-grant.component';
import { ListValue, PrintedCheque } from 'src/app/model/treasury-bill';
import { TreasuryBillDirectives } from 'src/app/common/directive/treasury-bill';
import { Router } from '@angular/router';

@Component({
  selector: 'app-printed-cheque',
  templateUrl: './printed-cheque.component.html',
  styleUrls: ['./printed-cheque.component.css']
})
export class PrintedChequeComponent implements OnInit {

  selection = new SelectionModel<any>(true, []);
  // Form Group
  printedChequeForm: FormGroup;
  searchListForm: FormGroup;
  // Form Control
  auditornameCtrl: FormControl = new FormControl();
  billtypeCtrl: FormControl = new FormControl();
  majorheadCtrl: FormControl = new FormControl();
  ddonameCtrl: FormControl = new FormControl();
  partyNameCtrl: FormControl = new FormControl();
  // Date
  todayDate = Date.now();
  // Variable
  stroy = new Subject<void>();

  private paginator: MatPaginator;
  private sort: MatSort;

  selectedAll: Boolean = false;
  valueRequired: Boolean = false;
  showTable: Boolean = false;
  // Lists
  custodianAuthority_list: ListValue[] = [
    { value: '1', viewValue: 'Mr. Pratik Shah [Head Accountant]' },
  ];
  Element_Data: PrintedCheque[] =
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
        billdate: '25-Feb-2019 10:00 AM',
        inwardDate: '25-Feb-2019 11:00 AM',
        ddoname: '	collector Office, Gandhinagar',
        billcat: 'Regular',
        billtype: 'Pay Bill',
        chequeno: 'TRY61-286971',
        paidAmount: '600.00'
      }, {
        refNo: '3',
        regNo: '542',
        tokenNo: '1113',
        party: 'CHANDRESHWAR VISHWANATH BHAGAT',
        majorHead: '271',
        ddoNo: '1154',
        cardexNo: '4',
        billAmount: '200.00',
        billGrossAmount: '200.00',
        cheque: '50.00',
        chequeePayment: 'Cheque',
        partyName: 'Mr. Abc',
        billdate: '25-Feb-2019 10:00 AM',
        inwardDate: '25-Feb-2019 11:00 AM',
        ddoname: '	collector Office, Gandhinagar',
        billcat: 'Regular',
        billtype: 'Pay Bill',
        chequeno: 'TRY61-286971',
        paidAmount: '600.00'
      },
    ];

  ddoname_list: ListValue[] = [
    { value: '1', viewValue: ' Collector Office, Gandhinagar' },
  ];
  party_list: ListValue[] = [{
    value: '1', viewValue: 'Mr. Abc'
  },
  ];
  auditor_list: ListValue[] = [{
    value: '1', viewValue: 'Shri. Pratik Shah'
  },
  ];

  billtype_list: ListValue[] = [
    { value: '1', viewValue: 'GTR-30 - Pay Bill' },
    { value: '2', viewValue: 'GTR-45 - TA Bill' },
    { value: '3', viewValue: 'GTR-40 - Grant In Bill' },
    { value: '4', viewValue: 'GTR-12 - Advance Bill' }
  ];


  billcategory_list: ListValue[] = [
    { value: '1', viewValue: 'Regular' },
    { value: '2', viewValue: 'TC' },
    { value: '3', viewValue: 'NIL' },
    { value: '4', viewValue: 'Regular/Challan' }
  ];


  major_list: ListValue[] = [
    { value: '1', viewValue: '3451:Secretariat-Economic Services' },
    {
      value: '2', viewValue: '5475:Capital Outlay on other General Economics Services'
    },
    { value: '3', viewValue: '2401:Crop Husbandry' },
    { value: '4', viewValue: '2071:Pensions and Other Retirement Benefits' },
    { value: '5', viewValue: '2058:Stationery and Printing' },
    { value: '6 : Secretariat-Social Services', viewValue: '2251 : Secretariat-Social Services' },
    { value: '7 : Interest Payments', viewValue: '2049 : Interest Payments' },
    { value: '8 : Water Supply and Sanitation', viewValue: '2215 : Water Supply and Sanitation' },
    { value: '9 : Ecology and Environment', viewValue: '3435 : Ecology and Environment' },
    { value: '10 : Capital Outlay on Urban Development', viewValue: '4217 : Capital Outlay on Urban Development' },
    { value: '11 : General Education', viewValue: '2202 : General Education' },
  ];


  displayedColumns: string[] = ['checkBox', 'refNo', 'regNo', 'tokenNo',
    'chequeno', 'partyName', 'cheque',
    'billdate', 'inwardDate',
    'ddoNo', 'cardexNo', 'ddoname', 'billtype', 'majorHead', 'billcat', 'billGrossAmount', 'billAmount', 'action'
  ];

  dataSource = new MatTableDataSource<any>(this.Element_Data);



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

  directiveObject = new TreasuryBillDirectives(this.router, this.dialog);
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
      regBill: [''],
      BillFromDate: [''],
    });
  }

  FromDate(event) {
    const fromdate = this.printedChequeForm.get('BillFromDate').value;
    if (fromdate != '') {
      this.valueRequired = true;
    }
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

}



