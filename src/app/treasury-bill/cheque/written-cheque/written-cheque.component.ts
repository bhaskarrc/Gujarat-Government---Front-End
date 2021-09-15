
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
import { Router } from '@angular/router';
import { TreasuryBillDirectives } from 'src/app/common/directive/treasury-bill';
import { ListValue, WrittenCheque } from 'src/app/model/treasury-bill';

@Component({
  selector: 'app-written-cheque',
  templateUrl: './written-cheque.component.html',
  styleUrls: ['./written-cheque.component.css']
})
export class WrittenChequeComponent implements OnInit {
  // Form Control
  auditornameCtrl: FormControl = new FormControl();
  billtypeCtrl: FormControl = new FormControl();
  ddonameCtrl: FormControl = new FormControl();
  // Form Group
  searchListForm: FormGroup;
  InwardOnlineBillForm: FormGroup;
  // Variable
  selectedAll: Boolean = false;
  valueRequired: Boolean = false;
  // Lists
  Element_Data: WrittenCheque[] =
    [
      {
        refNo: '2',
        refNot: '5',
        regNo: '552',
        tokenNo: '10113',
        tokenNot: '10114',
        party: 'CHANDRESHWAR VISHWANATH BHAGAT',
        majorHead: '2071',
        majorHeadt: '2071',
        ddoNo: '115',
        cardexNo: '4',
        cardexNot: '4',
        billAmount: '2000.00',
        billAmountt: '4000.00',
        billGrossAmount: '4000.00',
        cheque: '2000.00',
        chequeePayment: 'Cheque',
        partyName: 'Mr. Abc',
        billdate: '25-Feb-2019 11:00 AM',
        inwardDate: '25-Feb-2019 10:00 AM',
        ddoname: '	collector Office, Gandhinagar',
        billcat: 'Regular',
        billtype: 'Pay Bill',
        status: 'Pending'
      },
    ];
  ddoname_list: ListValue[] = [
    { value: '1', viewValue: '	District Treasury Office, Gandhinagar' },
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
  // Table Source
  dataSource = new MatTableDataSource<any>(this.Element_Data);
  displayedColumns: string[] = ['checkBox', 'refNo', 'regNo', 'tokenNo', 'billdate', 'inwardDate',
    'ddoNo', 'cardexNo', 'ddoname', 'billtype', 'majorHead', 'billcat', 'billGrossAmount', 'billAmount', 'partyName',
    'cheque', 'action'];
  // Date
  todayDate = Date.now();
  // Variable
  selection = new SelectionModel<any>(true, []);
  _onDestroy = new Subject<void>();
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
  directiveObject = new TreasuryBillDirectives(this.router, this.dialog);
  ngOnInit() {
    this.InwardOnlineBillFormData();
  }
  InwardOnlineBillFormData() {
    this.InwardOnlineBillForm = this.fb.group({
      Billrefernum: [''],
      tokenno: [''],
      majorhead: [''],
      chequeamount: [''],
      billamount: [''],
      netamount: [''],
      partyName: [''],
      auditorname: [''],
      billtypes: [''],
      ddono: [''],
      cardexno: [''],
      ddoname: [''],
      billate: [''],
      Tokenno: [''],
      regBill: [''],
      BillFromDate: [''],
      billcategory: [''],
    });
  }

  FromDate(event) {
    const fromdate = this.InwardOnlineBillForm.get('BillFromDate').value;
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
