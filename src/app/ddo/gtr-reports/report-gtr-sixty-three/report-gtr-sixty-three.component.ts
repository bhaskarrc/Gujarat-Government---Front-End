import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-gtr-sixty-three',
  templateUrl: './report-gtr-sixty-three.component.html',
  styleUrls: ['./report-gtr-sixty-three.component.css']
})
export class ReportGtrSixtyThreeComponent implements OnInit {

  constructor() { }

  bill_no = 111111;
  bill_transit_sr_no = 111111;
  todayDate = Date.now();
  token_no = 14330;
  office_name = 'District Treasury Office, Gandhinagar';
  district = 61;
  treasury_month_year = Date.now();
  voucher_no = 123456;
  cardex_no = 1;
  class_of_expenditure = '1-Voted';
  fund = '3-Consolidated';
  drawing_Officer = 416;
  demand_no = '017';
  type_of_budget = '1-State';
  scheme_no = '0000000';
  head_chargeble = '2054000970100';
  sector = 'A-General Services';
  major_head = '2054 Treasury and Accountants Administration';
  sub_major_Head = '00';
  minor_head = '097 Treasury Establishment';
  sub_head = '01 Treasuries';
  detailed_head = '00';

  budget_grant = 4500;
  expenditure_including_bill = 2500;
  balance = this.budget_grant - this.expenditure_including_bill;
  treasury_rs = '______________________';
  // treasury_rs_by_TC = '______________________';
  // treasury_total_rs = '______________________';



  ngOnInit() {
  }

  onPrint() {
    window.print();
  }

}
