import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-gtr-sr-office-order',
  templateUrl: './report-gtr-sr-office-order.component.html',
  styleUrls: ['./report-gtr-sr-office-order.component.css']
})
export class ReportGtrSrOfficeOrderComponent implements OnInit {

  todayDate = Date.now();
  srNo = 1;
  orgVoucherNo = 85;
  voucherDate = '18/01/2020';
  head = 2225;
  amount = 10000;
  noOfBeneficiary = 25;
  majorHead = 8658;
  nameOfBeneficiary = 'As Per Checklist';

  constructor() { }

  onPrint() { }

  ngOnInit() {
  }

}
