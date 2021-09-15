import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-gtr-fourty-five',
  templateUrl: './report-gtr-fourty-five.component.html',
  styleUrls: ['./report-gtr-fourty-five.component.css']
})
export class ReportGtrFourtyFiveComponent implements OnInit {

  constructor() { }

  bill_no = 111111;
  bill_transit_sr_no = 111111;
  todayDate = Date.now();
  token_no = 14330;
  district = 57;
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
  sector = 'A-General Services';
  major_head = '2054 Treasury and Accounts Administration';
  sub_major_Head = '00';
  minor_head = '097 Treasury Establishment';
  sub_head = '01 Treasuries';
  detailed_head = '00';

  budget_grant = 7000;
  expenditure_including_bill = 6000;
  balance = this.budget_grant - this.expenditure_including_bill;


  edp_1300_officer = '1301(+)';
  edp_1300_officer_amount = 0.00;
  edp_2800 = '2801(+)';
  edp_2800_amount = 1000.00;
  edp_1400 = '1401(+)';
  edp_1400_amount = 0.00;
  edp_1500 = '1501(+)';
  edp_1500_amount = 0.00;
  edp_1600_publication = '1601(+)';
  edp_1600_publication_amount = 2000.00;
  edp_2600 = '2601(+)';
  edp_2600_amount = 0.00;
  edp_2000 = '2001(+)';
  edp_2000_amount = 0.00;
  edp_4100 = '4101(+)';
  edp_4100_amount = 3000.00;
  edp_5200_machinary = '5201(+)';
  edp_5200_machinary_amount = 0.00;
  edp_5200_tools = '5202(+)';
  edp_5200_tools_amount = 0.00;
  edp_5100_motor = '5101(+)';
  edp_5100_motor_amount = 0.00;
  edp_5100_maintenance = '5102(+)';
  edp_5100_maintenance_amount = 0.00;
  edp_5000_live = '5008(+)';
  edp_5000_live_amount = 0.00;
  edp_2300 = '2301(+)';
  edp_2300_amount = 0.00;
  edp_5000_other = '5006(+)';
  edp_5000_other_amount = 0.00;

  edp_1600_library = '1602(+)';
  edp_1600_library_amount = 0.00;
  edp_0114 = '0114(+)';
  edp_0114_amount = 0.00;
  edp_1300_fuel = '1306(+)';
  edp_1300_fuel_amount = 0.00;
  edp_1300_repair = '1307(+)';
  edp_1300_repair_amount = 0.00;
  edp_1300_electricity = '1304(+)';
  edp_1300_electricity_amount = 0.00;
  edp_1300_telephone = '1303(+)';
  edp_1300_telephone_amount = 0.00;
  gross_total_1 = this.edp_1300_officer_amount + this.edp_2800_amount + this.edp_1400_amount +
    this.edp_1500_amount + this.edp_1600_publication_amount + this.edp_2600_amount + this.edp_2000_amount + this.edp_4100_amount;

  grand_total_amount = 6000.0;

  budget_code = 1300;
  particulars = 'Post & Telegraph Expenses';
  amount = 100;
  amount_in_words = 'One Hundred Only';
  previous_bill_no = '111111111';
  previous_bill_date = Date.now();
  previous_bill_amount = 500;
  obtained_date = Date.now();
  cheque_to = 'test';
  admitted_rs = 100;
  objected_rs = 100;


  onPrint() {
    window.print();
  }
  ngOnInit() {
  }

}
