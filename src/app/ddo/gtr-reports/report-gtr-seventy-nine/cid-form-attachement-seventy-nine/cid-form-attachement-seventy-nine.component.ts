import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cid-form-attachement-seventy-nine',
  templateUrl: './cid-form-attachement-seventy-nine.component.html',
  styleUrls: ['./cid-form-attachement-seventy-nine.component.css']
})
export class CidFormAttachementSeventyNineComponent implements OnInit {

  treasury_name = 'District Treasury Officer,Gandhinagar';
  amountDataTable: any[] = [
    { bCode: '0000', particulars: 'For Mh 8009 & Other 8000 Mh', edpCode: '0000 (+)', amount: '1080.00' }];
  bill_no = '1111';
  bill_transit_sr_no = 240;
  todayDate = Date.now();
  treasury_month_year = '';
  token_no = '143';
  office_name = 'District Treasury Office, Gandhinagar';
  district = 61;
  major_head = '8011  Insurance and Pension Funds';
  sub_major_Head = '00';
  minor_head = '105  State Government Insurance Fund';
  sub_head = '00  State Government Insurance Fund';
  voucher_no = 46;
  cardex_no = 543;
  head_chargeble = '8011001050000';
  drawing_Officer = '593';
  class_of_expenditure = '1-Voted';
  fund = '5-Public Accounts';
  demand_no = '999';
  type_of_budget = '1-State';
  scheme_no = '000000';
  sector = 'I-Small Saving, Provident Funds etc';
  grandTotal = '1080.00';
  netAmount = '1080.00';
  amount_words = ' One Thousand Eighty Only';

  constructor() { }

  onPrint() {
    window.print();
  }

  ngOnInit() {
  }

}
