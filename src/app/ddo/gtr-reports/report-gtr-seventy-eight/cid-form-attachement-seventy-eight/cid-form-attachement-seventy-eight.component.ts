import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cid-form-attachement-seventy-eight',
  templateUrl: './cid-form-attachement-seventy-eight.component.html',
  styleUrls: ['./cid-form-attachement-seventy-eight.component.css']
})
export class CidFormAttachementSeventyEightComponent implements OnInit {

  treasury_name = 'District Treasury Office,Gandhinagar';
  amountDataTable: any[] = [
    { bCode: '0000', particulars: 'For Mh 8009 & Other 8000 Mh', edpCode: '0000 (+)', amount: '317746.00' }];
  bill_no = 'EDU-22';
  bill_transit_sr_no = 240;
  todayDate = Date.now();
  treasury_month_year = '';
  token_no = 224;
  office_name = 'District Treasury Office, Gandhinagar';
  district = 57;
  voucher_no = 46;
  cardex_no = 543;
  head_chargeble = '8011001050000 ';
  drawing_Officer = '593';
  class_of_expenditure = '1-Voted';
  fund = '5-Public Accounts';
  demand_no = '999';
  type_of_budget = '1-State';
  scheme_no = '000000';
  sector = 'I-Small Saving, Provident Funds etc';
  grandTotal = '317746.00';
  netAmount = '317746.00';
  amount_words = 'Three Lac Seventeen Thousand Seven Hundred Forty Six Only';

  constructor() { }


  onPrint() {
    window.print();
  }
  ngOnInit() {
  }

}
