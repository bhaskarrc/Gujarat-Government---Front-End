import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-gtr-sr',
  templateUrl: './report-gtr-sr.component.html',
  styleUrls: ['./report-gtr-sr.component.css']
})
export class ReportGtrSrComponent implements OnInit {

  bill_no = 321;
  token_no = 14330;
  office_name = '_________________________';
  postage_stamp_month = Date.now();
  district = 57;
  treasury_name = 'Pay and Accounts Office, Gandhinagar';
  treasury_month_year = Date.now();
  todayDate = Date.now();
  voucher_no = 123456;
  cardex_no = 51;
  place = 'Gandhinagar';

  class_of_expenditure = '1-Voted';
  fund = '3-Consolidated';
  drawing_Officer = 52;
  demand_no = '999';
  type_of_budget = '1-State';
  scheme_no = '0000000';
  head_chargeble = '0075001010000';
  sector = 'B-Non-tax Revenue';

  major_head = '0075 Miscellaneous General Services';
  sub_major_Head = '00';
  minor_head = 'Unclaimed Deposit';
  sub_head = 'Unclaimed Deposit';
  amount_in_words = 'Hundred Rupees Only';

  amountDataTable: any[] = [
    {
      bCode: '0101',
      particulars: 'Pay of Officer',
      edpCode: '0101(+)',
      amount: 100
    }
  ];
  grandTotal = 100;
  netAmount = 100;
  budgetAmount = 0.0;
  availBalance = -1500;

  constructor() { }

  onPrint() { }

  ngOnInit() { }

}
