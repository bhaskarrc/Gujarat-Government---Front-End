import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-gtr-cfr',
  templateUrl: './report-gtr-cfr.component.html',
  styleUrls: ['./report-gtr-cfr.component.css']
})
export class ReportGtrCfrComponent implements OnInit {


  token_no = 14330;
  office_name = '_________________________';
  postage_stamp_month = Date.now();
  district = 57;
  treasury_name = 'Pay And Accounts Office Gandhinagar';
  treasury_month_year = Date.now();
  todayDate = Date.now();
  voucher_no = 123456;
  cardexNo = 51;

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
  minor_head = '101 Unclaimed Deposit';
  sub_head = '00 Unclaimed Deposit';

  bill_no = 143;
  amountDataTable: any[] = [
    { bCode: 5000, particulars: 'Pmt Out Of Disc. Grants For High Dignitary', edpCode: '5001(+)', amount: 1500 }
  ];
  grandTotal = 1500;
  netAmount = 1500;
  budgetAmount = 0.00;
  availBalance = -1500;
  constructor() { }

  onPrint() { }
  ngOnInit() {
  }

}
