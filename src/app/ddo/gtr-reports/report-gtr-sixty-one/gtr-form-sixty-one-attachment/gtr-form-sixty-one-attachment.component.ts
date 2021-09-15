import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gtr-form-sixty-one-attachment',
  templateUrl: './gtr-form-sixty-one-attachment.component.html',
  styleUrls: ['./gtr-form-sixty-one-attachment.component.css']
})
export class GtrFormSixtyOneAttachmentComponent implements OnInit {

  constructor() { }
  bill_no = 111111;
  emp_name = "Mr. Pankaj Gupta";
  desig = "Account Officer"
  bill_transit_sr_no = 111111;
  todayDate = Date.now();
  token_no = 14330;
  office_name = 'District Treasury Office, Gandhinagar';
  postage_stamp_month = Date.now();
  district = 61;
  treasury_name = 'Treasury Office';
  treasury_month_year = Date.now();
  voucher_no = 123456;
  cardex_no = 201;
  class_of_expenditure = '1-Voted';
  fund = '3-Consolidated';
  drawing_Officer = 416;
  demand_no = '999';
  type_of_budget = '1-State';
  scheme_no = '0000000';
  head_chargeble = '00550010101';
  sector = 'B-Non-tax Revenue';
  major_head = ' 0055  Police ';
  sub_major_Head = '00';
  minor_head = ' 101  Police Supplied to other Government';
  sub_head = ' 01  Contribution for Railway Police ';
  detailed_head = '00';
  bal = 0;
  amount = 1500.00;
  place = "Bhuj";
  ngOnInit() {
  }

}
