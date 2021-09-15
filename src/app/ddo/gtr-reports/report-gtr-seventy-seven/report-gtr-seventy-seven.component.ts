import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-gtr-seventy-seven',
  templateUrl: './report-gtr-seventy-seven.component.html',
  styleUrls: ['./report-gtr-seventy-seven.component.css']
})
export class ReportGtrSeventySevenComponent implements OnInit {

  constructor() { }
  bill_no = 'EDU-22';
  bill_transit_sr_no = 240;
  todayDate = Date.now();

  token_no = 224;
  office_name = 'District Treasury Office, Gandhinagar';
  postage_stamp_month = Date.now();
  district = 57;
  treasury_name = ' District Treasury Office, Gandhinagar';
  treasury_month_year = Date.now();
  voucher_no = 64;
  cardex_no = 543;

  class_of_expenditure = '1-Voted';
  fund = '3-Consolidated';
  drawing_Officer = 416;
  demand_no = '019';
  demand_no_word = 'Other Expenditure pertaining to Finance Department';
  type_of_budget = '1-State';
  scheme_no = '0000000';
  head_chargeble = '2235601050100';
  sector = 'B Social & Community Service';
  major_head = '2235 Social Security & Welfare';
  sub_major_Head = 'Other-Social Security & Welfare Programme';
  minor_head = 'Govt. Employees Insurance Scheme';
  sub_head = 'State Govt. Employees Insurance Scheme';
  detailed_head = '00';

  budget_code_5000 = 5000;
  edp_5006 = '5006(+)';
  edp_5006_amount = '1000.00';
  amount_word = 'One Thousand Rupees Only';
  edp_9660 = '9660(-)';
  edp_9670 = '9670(-)';
  station = 'Gandhinagar';
  ngOnInit() {
  }
  onPrint() {
    window.print();
  }
}
