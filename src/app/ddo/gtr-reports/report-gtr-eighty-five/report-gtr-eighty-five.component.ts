import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-gtr-eighty-five',
  templateUrl: './report-gtr-eighty-five.component.html',
  styleUrls: ['./report-gtr-eighty-five.component.css']
})
export class ReportGtrEightyFiveComponent implements OnInit {
  constructor() { }
  bill_no = 111111;
  bill_transit_sr_no = 111111;
  todayDate = Date.now();
  nextFinancialYear: Date = new Date();
  previousFinancialYear: Date = new Date();

  token_no = 14330;
  office_name = 'SubTreasury Office,Gandhinagar For the month Feb,2020';
  postage_stamp_month = Date.now();
  district = 57;
  treasury_name = 'Treasury Office';
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
  sector = 'B Social & Community Service';
  major_head = '2054 Treasury and Accounts Administration';
  sub_major_Head = '00';
  minor_head = 'Treasury Establishment ';
  sub_head = 'Treasuries';
  detailed_head = '00';

  budget_code_5000 = 5000;
  edp_5701 = '5701(+)';
  edp_5701_amount = 10.0;
  edp_5801 = '5801(+)';
  edp_5801_amount = 0.0;
  edp_5510 = '5510(+)';
  edp_5510_amount = 0.0;
  edp_5508 = '5508(+)';
  edp_5508_amount = 0.0;
  edp_5509 = '5509(+)';
  edp_5509_amount = 0.0;
  edp_5507 = '5507(+)';
  edp_5507_amount = 0;
  edp_5512 = '5512(+)';
  edp_5512_amount = 0;
  edp_5512_amount_pay_ls = 0;
  edp_0101 = '0101(+)';
  edp_0101_amount = 0;
  edp_0102 = '0102(+)';
  edp_0102_amount = 0;
  edp_0105 = '0105(+)';
  edp_0105_amount = 0;
  edp_1100 = '1101(+)';
  edp_1100_amount = 0;
  grand_total = 10;

  advance_total = '10.00';
  ngOnInit() {
    this.setFinacialYearLength();
  }
  setFinacialYearLength() {
    const tDate = new Date();
    if (tDate.getMonth() > 2) {
      this.previousFinancialYear = new Date(
        tDate.getFullYear(),
        tDate.getMonth(),
        tDate.getDate()
      );
      this.nextFinancialYear = new Date(
        tDate.getFullYear() + 1,
        tDate.getMonth(),
        tDate.getDate()
      );
    } else {
      this.previousFinancialYear = new Date(
        tDate.getFullYear() - 1,
        tDate.getMonth(),
        tDate.getDate()
      );
      this.nextFinancialYear = new Date(
        tDate.getFullYear(),
        tDate.getMonth(),
        tDate.getDate()
      );
    }
  }

  onPrint() {
    window.print();
  }
}
