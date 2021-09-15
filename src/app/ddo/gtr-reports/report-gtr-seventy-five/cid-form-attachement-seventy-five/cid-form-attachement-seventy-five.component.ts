import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cid-form-attachement-seventy-five',
  templateUrl: './cid-form-attachement-seventy-five.component.html',
  styleUrls: ['./cid-form-attachement-seventy-five.component.css']
})
export class CidFormAttachementSeventyFiveComponent implements OnInit {

  treasury_name = 'District Treasury Office,Gandhinagar';
  amountDataTable: any[] = [
    { bCode: '0000', particulars: 'For Mh 8009 & Other 8000 Mh', edpCode: '0000 (+)', amount: '300000.00' }];
  bill_no = '123';
  bill_transit_sr_no = 111111;
  todayDate = Date.now();
  treasury_month_year = '';
  token_no = 649;
  office_name = 'District Treasury Office, Gandhinagar';
  district = 57;
  major_head = '8009 State Provident Funds';
  sub_major_Head = '01 Civil';
  minor_head = '101  General Provident Funds';
  sub_head = '01   For other than class IV Government Servants';
  voucher_no = '';
  cardex_no = 23;
  head_chargeble = '8009011010100';
  drawing_Officer = '578';
  class_of_expenditure = '1-Voted';
  fund = '5-Public Accounts';
  demand_no = '999';
  type_of_budget = '1-State';
  scheme_no = '000000';
  sector = 'I-Small Saving, Provident Funds etc';
  grandTotal = '300000.00';
  netAmount = '300000.00';
  amount_words = 'Three Lac Only';
  constructor() { }

  onPrint() {
    window.print();
  }
  ngOnInit() {
  }

}
