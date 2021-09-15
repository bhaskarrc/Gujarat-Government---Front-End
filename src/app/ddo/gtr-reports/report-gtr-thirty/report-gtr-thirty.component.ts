import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-gtr-thirty',
  templateUrl: './report-gtr-thirty.component.html',
  styleUrls: ['./report-gtr-thirty.component.css']
})
export class ReportGtrThirtyComponent implements OnInit {

  constructor() { }
  establishment = 'Chandkheda, GNR';
  treasury = 'District Treasury Office, Gandhinagar';
  bill_no = 3468;
  controlling_officer = '417';
  bill_transit_sr_no = 4646;
  todayDate = Date.now();
  sixPreviousDate = '18/02/2020';
  fourPreviousDate = '20/02/2020';
  token_no = 935;
  office_name = 'District Treasury Office, Gandhinagar';
  postage_stamp_month = Date.now();
  district = 57;
  treasury_name = 'Treasury Office';
  treasury_month_year = Date.now();
  voucher_no = '__________';
  cardex_no = 23;
  class_of_expenditure = '1-Voted';
  fund = '3-Consolidated';
  drawing_Officer = 509;
  demand_no = '043';
  type_of_budget = '1-State';
  scheme_no = '114506';
  head_chargeble = '2055001090200';
  sector = 'A-General Services';
  major_head = '2055 Police';
  sub_major_Head = '00';
  minor_head = 'District Police';
  sub_head = 'MEP-7 State Reserve Police force';
  detailed_head = '00';
  station = 'Gandhinagar';
  budget_allotment = ' 544714000.00';
  budget_grant = 4500;
  expenditure = '540347334.00';
  expenditure_including_bill = 2500;
  remaining_balance = ' 4366666.00';
  balance = this.budget_grant - this.expenditure_including_bill;
  treasury_rs = '______________________';
  treasury_rs_by_TC = '______________________';
  treasury_total_rs = '______________________';

  edp_0200 = '0201(+)';
  edp_0200_amount = 0.00;
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
  gross_total_1 = this.edp_0200_amount + this.edp_1300_officer_amount + this.edp_2800_amount + this.edp_1400_amount +
    this.edp_1500_amount + this.edp_1600_publication_amount + this.edp_2600_amount + this.edp_2000_amount + this.edp_4100_amount;
  gross_total_2 = this.edp_5200_machinary_amount + this.edp_5200_tools_amount + this.edp_5100_motor_amount +
    this.edp_5100_maintenance_amount + this.edp_5000_live_amount + this.edp_2300_amount + this.edp_5000_other_amount;
  gross_total_3 = this.edp_1600_library_amount + this.edp_0114_amount + this.edp_1300_fuel_amount + this.edp_1300_repair_amount +
    this.edp_1300_electricity_amount + this.edp_1300_telephone_amount;
  gross_total = this.gross_total_1 + this.gross_total_2 + this.gross_total_3;

  income_tax_edp_code = '9510(-)';
  income_tax_amount = 100.00;
  surcharge_on_income_tax_edp_code = '9520(-)';
  surcharge_on_income_tax = 100.00;
  security_deposite_edp_code = '9600(-)';
  security_deposite = 100;
  total_A_amount = this.income_tax_amount + this.surcharge_on_income_tax + this.security_deposite;
  miscellaneous_edp_code = '9910(-)';
  miscellaneous_amount = 100;
  total_deduction_amount = this.total_A_amount + this.miscellaneous_amount;
  net_amount = this.gross_total - this.total_deduction_amount;

  total_amount = 16909;
  budget_code = 1300;
  particulars = 'Post & Telegraph Expenses';
  amount = 17209;
  amount_in_words = 'Seventeen Thousand Two Hundred Nine Only.';
  previous_bill_no = '111111111';
  previous_bill_date = Date.now();
  previous_bill_amount = 500;
  obtained_date = Date.now();
  cheque_to = 'test';
  admitted_rs = 100;
  objected_rs = 100;

  onPrint() {

  }

  ngOnInit() {
  }

}
