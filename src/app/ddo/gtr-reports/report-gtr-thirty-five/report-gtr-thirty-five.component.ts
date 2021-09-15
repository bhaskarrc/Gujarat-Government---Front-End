import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-gtr-thirty-five',
  templateUrl: './report-gtr-thirty-five.component.html',
  styleUrls: ['./report-gtr-thirty-five.component.css']
})
export class ReportGtrThirtyFiveComponent implements OnInit {

  constructor() { }

  bill_no = 111111;
  bill_transit_sr_no = 111111;
  todayDate = Date.now();
  token_no = 14330;
  office_name = 'District Treasury Office, Gandhinagar';
  postage_stamp_month = Date.now();
  district = 57;
  treasury_name = 'Treasury Office';
  treasury_month_year = Date.now();
  voucher_no = 123456;
  cardex_no = 1;
  class_of_expenditure = '1-Voted';
  fund = '3-Consolidated';
  drawing_Officer = 416;
  demand_no = '017 Treasury and Accounts Administration';
  type_of_budget = '1-State';
  scheme_no = '0000000';
  head_chargeble = '2054000970100';
  sector = 'A-General Services';
  major_head = '2054 Treasury and Accounts Administration';
  sub_major_Head = '00';
  minor_head = '097 Treasury Establishment';
  sub_head = '01 Treasuries';
  detailed_head = '00';
  total = 105.00;
  allotment_amount = 200000.00;
  expenditure_amount = 100000.00;
  balance = this.allotment_amount - this.expenditure_amount;

  onPrint() {

  }

  ngOnInit() {
  }

}
