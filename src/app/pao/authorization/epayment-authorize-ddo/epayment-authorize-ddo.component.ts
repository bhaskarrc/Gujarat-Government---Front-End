import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Router } from '@angular/router';
import { PaoDirectives } from 'src/app/common/directive/pao';
import { EpaymentAuthorizeDDo } from 'src/app/model/treasury-bill';
import { ListValue } from 'src/app/model/paoModel';

@Component({
  selector: 'app-epayment-authorize-ddo',
  templateUrl: './epayment-authorize-ddo.component.html',
  styleUrls: ['./epayment-authorize-ddo.component.css']
})
export class EpaymentAuthorizeDdoComponent implements OnInit {
  // Form Group
  epaymentAuthorized: FormGroup;
  epaymentAuthorizedList: FormGroup;
  // Form Control
  majorheadCtrl: FormControl = new FormControl();
  billTypeCtrl: FormControl = new FormControl();
  // Date
  todayDate = new Date();
  // Lists
  ELEMENT_DATA: EpaymentAuthorizeDDo[] = [
    {
      ePaymentCode: 1000000001,
      tokenNo: 551,
      billTypes: 'GTR 45 TA Bill',
      totalBills: 1,
      totalPayment: 77,
      grantTotalTrans: 1,
      grantTotalPayment: 77.00,
      billRegNo: '331',
      mhead: '2054',
      paybyDate: '27-Feb-2020 11:00 AM',
      billrefno: '368',
      billDate: '25/Feb/2019 01:00 PM',
      billGrossAmount: '11000.00',
      billAmount: '10000.00',
      epaymentcode: '100020',
    },
    {
      ePaymentCode: 1000000002,
      tokenNo: 552,
      billTypes: 'GTR 40 Grant In Bill',
      totalBills: 1,
      totalPayment: 78,
      grantTotalTrans: 1,
      grantTotalPayment: 78.00,
      billRegNo: '331',
      mhead: '2054',
      paybyDate: '27-Feb-2020 02:00 PM',
      billrefno: '368',
      billDate: '25/Feb/2019 11:10 AM',
      billGrossAmount: '11000.00',
      billAmount: '10000.00',
      epaymentcode: '100025',
    },
    {
      ePaymentCode: 1000000003,
      tokenNo: 553,
      billTypes: 'GTR 30 Pay Bill',
      totalBills: 1,
      totalPayment: 80,
      grantTotalTrans: 1,
      grantTotalPayment: 80.00,
      billRegNo: '331',
      mhead: '2054',
      paybyDate: '27-Feb-2020 05:00 PM',
      billrefno: '368',
      billDate: '25/Feb/2019 04:00 PM',
      billGrossAmount: '11000.00',
      billAmount: '10000.00',
      epaymentcode: '100022',
    },
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
  billtype_list: ListValue[] = [
    { value: '1', viewValue: 'GTR-30 - Pay Bill' },
    { value: '2', viewValue: 'GTR-45 - TA Bill' },
    { value: '3', viewValue: 'GTR-40 - Grant In Bill' },
    { value: '4', viewValue: 'GTR-12 - Advance Bill' }
  ];

  // Table Source
  displayedColumns: string[] = ['select', 'billrefno', 'billRegNo', 'tokenNo',
    'billDate', 'billTypes', 'mhead', 'epaymentcode', 'paybyDate', 'grantTotalTrans',
    'billGrossAmount', 'billAmount', 'action'];

  dataSource = new MatTableDataSource<EpaymentAuthorizeDDo>(this.ELEMENT_DATA);
  constructor(private router: Router, private fb: FormBuilder, private dialog: MatDialog) { }
  directiveObject = new PaoDirectives(this.router, this.dialog);

  private paginator: MatPaginator;
  private sort: MatSort;
  selection = new SelectionModel<any>(true, []);




  ngOnInit() {
    this.epaymentAuthorizedFormData();
  }

  epaymentAuthorizedFormData() {
    this.epaymentAuthorized = this.fb.group({
      enterToken: [''],
      billtype: [''],
      billType: [''],
      epaymentCode: [''],
      refNo: [''],
      majorhead: [''],
      netamount: [''],
      grossamount: ['']
    });

    this.epaymentAuthorizedList = this.fb.group({});

  }
  epaymentAuthorizedData() {

  }

  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }

  // Navigation

  gotopage() {
    this.router.navigate(['/pao/saved-bill/bill-prepration-fom']);
  }
  clickEventHandler() {
    this.router.navigate(['/pao/authorization/epayment-authorize-ddo-details']);
  }
}
