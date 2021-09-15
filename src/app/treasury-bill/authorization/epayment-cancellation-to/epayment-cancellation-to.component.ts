import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { EPaymentAuthorized } from 'src/app/model/treasury-bill';
import { TreasuryBillDirectives } from 'src/app/common/directive/treasury-bill';


// tslint:disable-next-line: class-name

@Component({
  selector: 'app-epayment-cancellation-to',
  templateUrl: './epayment-cancellation-to.component.html',
  styleUrls: ['./epayment-cancellation-to.component.css']
})
export class EpaymentCancellationToComponent implements OnInit {
  // Form Group
  epaymentAuthorized: FormGroup;
  // Date
  todayDate = new Date();
  //List data source
  ELEMENT_DATA: EPaymentAuthorized[] = [
    {
      ePaymentCode: 1000000001,
      partyName: 'Mr. Abc',
      tokenNo: 551, billTypes: 'GTR 45 TA Bill',
      totalBills: 1, totalPayment: 77, grantTotalTrans: 1,
      grantTotalPayment: 77.00, payByBank: 'Reserve bank of India',
    },
  ];

  // table data source  
  displayedColumns: string[] = ['select', 'ePaymentCode', 'partyName',
    'tokenNo', 'billTypes', 'totalBills', 'totalPayment', 'grantTotalTrans', 'grantTotalPayment', 'action'];

  dataSource = new MatTableDataSource<EPaymentAuthorized>(this.ELEMENT_DATA);
  constructor(private router: Router, private fb: FormBuilder, public dialog: MatDialog) { }
  // Directive Objects
  directiveObject = new TreasuryBillDirectives(this.router, this.dialog);
  // Page Navigate
  private paginator: MatPaginator;
  private sort: MatSort;



  ngOnInit() {
    this.epaymentAuthorizedData();
  }

  epaymentAuthorizedData() {
    this.epaymentAuthorized = this.fb.group({
      enterToken: [''],
      epaymentCode: [''],
      partyName: [''],

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
  // navigation
  gotopage() {
    this.router.navigate(['/treasury-bill/saved-bill/bill-prepration-fom']);
  }
  clickEventHandler() {
    this.router.navigate(['/treasury-bill/authorization/epayment-authorize-to-details']);

  }
  epaymentAuthorizedFormData() {

  }

}
