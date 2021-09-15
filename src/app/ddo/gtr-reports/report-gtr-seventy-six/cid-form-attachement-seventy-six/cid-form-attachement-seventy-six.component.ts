import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cid-form-attachement-seventy-six',
  templateUrl: './cid-form-attachement-seventy-six.component.html',
  styleUrls: ['./cid-form-attachement-seventy-six.component.css']
})
export class CidFormAttachementSeventySixComponent implements OnInit {

  treasury_name = 'District Treasury Office,Gandhinagar';
  amountDataTable: any[] = [
    { bCode: '0000', particulars: 'For Mh 8009 & Other 8000 Mh', edpCode: '0000 (+)', amount: '150000.00' }];
  bill_no = '123';
  bill_transit_sr_no = 364;
  todayDate = Date.now();
  treasury_month_year = '';
  token_no = 42;
  office_name = 'District Treasury Office, Gandhinagar';
  district = 57;
  voucher_no = 123456;
  cardex_no = 117;
  head_chargeble = '8009601030400';
  drawing_Officer = '904';
  class_of_expenditure = '1-Voted';
  fund = '5-Public Accounts';
  demand_no = '999';
  type_of_budget = '1-State';
  scheme_no = '000000';
  sector = 'I-Small Saving, Provident Funds etc';
  grandTotal = '150000.00';
  netAmount = '150000.00';
  amount_words = ' One Lac Fifty Thousand Only';

  constructor() { }

  onPrint() {
    window.print();
  }
  ngOnInit() {
  }

}
