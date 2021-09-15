import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Router } from '@angular/router';
import { WorkflowDetailsGrantComponent } from '../../workflow-details-grant/workflow-details-grant.component';
import { ListValue, EpaymentAuthorize } from 'src/app/model/treasury-bill';
import { TreasuryBillDirectives } from 'src/app/common/directive/treasury-bill';



@Component({
  selector: 'app-epayment-authorize-to',
  templateUrl: './epayment-authorize-to.component.html',
  styleUrls: ['./epayment-authorize-to.component.css']
})
export class EpaymentAuthorizeToComponent implements OnInit {
  // Date
  todayDate = new Date();
  // Form Group
  epaymentAuthorized: FormGroup;
  // Form Control
  ddonameCtrl: FormControl = new FormControl();
  majorheadCtrl: FormControl = new FormControl();
  billTypeCtrl: FormControl = new FormControl();
  // Lists
  ddoname_list: ListValue[] = [
    { value: '1', viewValue: ' Collector Office, Gandhinagar' },
  ];

  major_list: ListValue[] = [{ value: '1', viewValue: '3451:Secretariat-Economic Services' },
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

  ELEMENT_DATA: EpaymentAuthorize[] = [
    {
      ePaymentCode: 1000000001,
      tokenNo: 551,
      billTypes: 'GTR 45 TA Bill',
      totalBills: 1,
      totalPayment: 77,
      grantTotalTrans: 1,
      grantTotalPayment: 77.00,
      payByBank: 'Reserve bank of India',
      cardexno: '4',
      refNo: '4',
      billregno: '331',
      tokenno: '10237',
      billgrossamount: '11000.00',
      billrefno: '4',
      billamount: '10000.00',
      billdate: '25/Feb/2019 01:00 PM',
      ddono: '4',
      ddoName: 'Collector Office, Gandhinagar ',
      mhead: '2014',
      paybyDate: '2-Feb-2020 01:30 PM',
      payBy: 'Reserve Bank of India'
    },


  ];


  billtype_list: ListValue[] = [
    { value: '1', viewValue: 'GTR-30 - Pay Bill' },
    { value: '2', viewValue: 'GTR-45 - TA Bill' },
    { value: '3', viewValue: 'GTR-40 - Grant In Bill' },
    { value: '4', viewValue: 'GTR-12 - Advance Bill' }
  ];

  // Table Source
  displayedColumns: string[] = ['select', 'billrefno', 'billregno', 'tokenNo',
    'billdate', 'ddono', 'cardexno', 'ddoName', 'billTypes', 'mhead', 'ePaymentCode',
    'paybyDate', 'grantTotalTrans', 'billgrossamount', 'billamount', 'payBy', 'action'];


  dataSource = new MatTableDataSource<EpaymentAuthorize>(this.ELEMENT_DATA);
  constructor(private router: Router, private fb: FormBuilder, public dialog: MatDialog,) { }
  directiveObject = new TreasuryBillDirectives(this.router, this.dialog);
  // Variable
  private paginator: MatPaginator;
  private sort: MatSort;
  selection = new SelectionModel<any>(true, []);

  ngOnInit() {
    this.epaymentAuthorizedData();
  }



  epaymentAuthorizedData() {
    this.epaymentAuthorized = this.fb.group({
      refNo: [''],
      enterToken: [''],
      billtype: [''],
      billType: [''],
      epaymentCode: [''],
      ddoNo: [''],
      cardexNo: [''],
      ddoName: [''],
      majorhead: [''],
      netamount: [''],
      grossamount: [''],
      from: [''],
      to: [''],
      picker2: [''],
      picker: [''],
    });
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
  epaymentAuthorizedFormData() {

  }

  // Navigation
  gotopage() {
    this.router.navigate(['/treasury-bill/saved-bill/bill-prepration-fom']);
  }
  clickEventHandler() {
    this.router.navigate(['/treasury-bill/authorization/epayment-authorize-to-details']);

  }

}
