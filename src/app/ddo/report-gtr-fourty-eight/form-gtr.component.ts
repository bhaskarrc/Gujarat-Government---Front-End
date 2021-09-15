import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-gtr',
  templateUrl: './form-gtr.component.html',
  styleUrls: ['./form-gtr.component.css']
})
export class FORMGTRComponent implements OnInit {

  constructor() { }

  bill_no = 111111;
  bill_transit_sr_no = 111111;
  todayDate = Date.now();
  token_no = 14330;
  office_name = 'District Treasury Office, Gandhinagar';
  postage_stamp_month = Date.now();
  district = 57;
  treasury_month_year = Date.now();
  voucher_no = 123456;
  cardex_no = 1;
  class_of_expenditure = '1-Voted';
  fund = '3-Consolidated';
  drawing_Officer = 416;
  demand_no = '017';
  type_of_budget = '1-State';
  scheme_no = '000000';
  head_chargeble = '2054000970100';
  sector = 'A-General Services';
  major_head = '2054 Treasury and Accountants Administration';
  sub_major_Head = '00';
  minor_head = '097 Treasury Establishment';
  sub_head = '01 Treasuries';
  detailed_head = '00';
  budget_code = 1300;
  particulars = 'Post & Telegraph Expenses';
  edp_code = '1302(+)';
  amount = 100;
  amount_in_words = 'One Hundred Only';
  previous_bill_no = '111111111';
  previous_bill_date = Date.now();
  previous_bill_amount = 500;
  obtained_date = Date.now();
  cheque_to = 'test user';
  admitted_rs = 100;
  objected_rs = 100;

  ngOnInit() {
  }

  // on clicking print button opens print option
  onPrint() {
    window.print();
  }
}
