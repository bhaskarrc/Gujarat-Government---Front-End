
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ReplaySubject, Subject, Observable } from 'rxjs';
import { takeUntil, startWith, map } from 'rxjs/operators';
import { SuspensionListModel } from 'src/app/model/suspension';
import { CommonListing } from 'src/app/model/common-listing';
import { yearsPerPage } from '@angular/material/datepicker/typings/multi-year-view';
import { SelectionModel } from '@angular/cdk/collections';
import { WorkflowDetailsGrantComponent } from '../../../grant/workflow-details-grant/workflow-details-grant.component';
// import { WorkflowDetailsGrantComponent } from '../../workflow-details-grant/workflow-details-grant.component';
import { PartyDetailsComponent } from '../../party-details/party-details.component';
import { PaoDirectives } from 'src/app/common/directive/pao';
import { Router } from '@angular/router';
import { ListValue } from 'src/app/model/paoModel';
import { ChequePrinting } from 'src/app/model/treasury-bill';

@Component({
  selector: 'app-cheque-printing',
  templateUrl: './cheque-printing.component.html',
  styleUrls: ['./cheque-printing.component.css']
})
export class ChequePrintingComponent implements OnInit {
  valueRequired: Boolean = false;
  // Form Group
  chequePrintinglistForm: FormGroup;
  chequePrintingForm: FormGroup;
  searchListForm: FormGroup;
  // Form Control
  ddonameCtrl: FormControl = new FormControl();
  auditornameCtrl: FormControl = new FormControl();
  billtypeCtrl: FormControl = new FormControl();
  majorheadCtrl: FormControl = new FormControl();
  chequeCtrl: FormControl = new FormControl();
  // Lists
  Element_Data: ChequePrinting[] =
    [
      {
        chequeNo: 'TRY61-286971',
        refNo: '2',
        refNoy: '5',
        regNo: '552',
        tokenNo: '10113',
        tokenNot: '10113',
        party: 'CHANDRESHWAR VISHWANATH BHAGAT',
        majorHead: '2071',
        majorHeadt: '2081',
        ddoNo: '115',
        cardexNo: '4',
        cardexNot: '4',
        billAmount: '200.00',
        billAmountt: '400.00',
        billGrossAmount: '500.00',
        cheque: '200.00',
        chequeePayment: 'Cheque',
        partyName: 'Mr. Abc',
        billdate: '25-Feb-2019 10:00 AM',
        inwardDate: '25-Feb-2019 11:00 PM',
        ddoname: '	collector Office, Gandhinagar',
        billcat: 'Regular',
        billtype: 'Pay Bill',
        status: 'Pending'
      },



    ];
  ddoname_list: ListValue[] = [
    { value: '1', viewValue: '	District Treasury Office, Gandhinagar' },
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

  // Variable

  selectedAll: Boolean = false;
  // DAte
  todayDate = Date.now();

  startingCheque_list: ListValue[] = [
    { value: '1', viewValue: 'TRY61-286971' },
  ];

  format_list: ListValue[] = [
    { value: '1', viewValue: 'CTS2010' },
    { value: '2', viewValue: 'Regular' },

  ];

  // Table source

  displayedColumns: string[] = ['checkBox', 'srno', 'chequeNo', 'refNo', 'regNo', 'tokenNo', 'billdate', 'inwardDate',
    'ddoNo', 'cardexNo', 'ddoname', 'billtype', 'majorHead', 'billcat', 'billGrossAmount', 'billAmount', 'partyName',
    'cheque', 'action'];


  dataSource = new MatTableDataSource<any>(this.Element_Data);

  stroy = new Subject<void>();


  private paginator: MatPaginator;
  private sort: MatSort;

  showTable: Boolean = false;
  selection = new SelectionModel<any>(true, []);

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
    this.chequePrintingFormData();
  }

  chequePrintingFormData() {
    this.chequePrintingForm = this.fb.group({
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
    this.chequePrintinglistForm = this.fb.group({
      startingCheque: ['1'],
      format: ['1'],
    })
  }

  FromDate(event) {
    const fromdate = this.chequePrintingForm.get('BillFromDate').value;
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

  search() {
    this.showTable = true;
  }

}
