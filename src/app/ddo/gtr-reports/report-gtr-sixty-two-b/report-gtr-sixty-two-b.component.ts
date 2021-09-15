import { Component, OnInit } from '@angular/core';
import { BudgetListValue } from 'src/app/model/budget-list';

@Component({
  selector: 'app-report-gtr-sixty-two-b',
  templateUrl: './report-gtr-sixty-two-b.component.html',
  styleUrls: ['./report-gtr-sixty-two-b.component.css']
})
export class ReportGtrSixtyTwoBComponent implements OnInit {

  budgetList: BudgetListValue[] = [
    { budgetCode: 3133, object: 'Pay of Officers', edpCode: '3119(+)', amount: 0 },
    { budgetCode: 3133, object: 'Pay of Establishment', edpCode: '3120(+)', amount: 0 },
    { budgetCode: 3133, object: 'Non Practice Allowance', edpCode: '3158(+)', amount: 0 },
    { budgetCode: 3133, object: 'Dearness Allowance', edpCode: '3121(+)', amount: 0 },
    { budgetCode: 3133, object: 'Other Allowance', edpCode: '3122(+)', amount: 0 },
    { budgetCode: 3133, object: 'Nursing Allowance', edpCode: '3159(+)', amount: 0 },
    { budgetCode: 3133, object: 'Tribal Allowance(Dang Allowance)', edpCode: '3160(+)', amount: 0 },
    { budgetCode: 3133, object: 'Uniform Allowance', edpCode: '3161(+)', amount: 0 },
    { budgetCode: 3133, object: 'Washing Allowance', edpCode: '3162(+)', amount: 0 },
    { budgetCode: 3133, object: 'Project Allowance', edpCode: '3163(+)', amount: 0 },
    { budgetCode: 3133, object: 'Charge Allowance', edpCode: '3164(+)', amount: 0 },
    { budgetCode: 3133, object: 'Orderly Allowance', edpCode: '3166(+)', amount: 0 },
    { budgetCode: 3133, object: 'Leave Travel Concessions', edpCode: '3123(+)', amount: 0 },
    { budgetCode: 3133, object: 'Reimbursement of Medical charges', edpCode: '3124(+)', amount: 0 },
    { budgetCode: 3133, object: 'Medical Allowance', edpCode: '3125(+)', amount: 0 },
    { budgetCode: 3133, object: 'Bonus', edpCode: '3126(+)', amount: 0 },
    { budgetCode: 3133, object: 'Leave Encashment', edpCode: '3127(+)', amount: 0 },
    { budgetCode: 3133, object: 'House Rent Allowance', edpCode: '3128(+)', amount: 0 },
    { budgetCode: 3133, object: 'Compensatory Local Allowance', edpCode: '3129(+)', amount: 0 },
    { budgetCode: 3133, object: 'Interim Relief', edpCode: '3130(+)', amount: 0 },
    { budgetCode: 3133, object: 'Permenent Travelling Allowance', edpCode: '3165(+)', amount: 0 },
    { budgetCode: 3133, object: 'Transport Allowance', edpCode: '3133(+)', amount: 0 },
    { budgetCode: 3133, object: 'Sumptuary Allowance', edpCode: '3134(+)', amount: 0 },
    { budgetCode: 3133, object: 'R.O.P Arrears (Gazetted)', edpCode: '3136(+)', amount: 0 },
    { budgetCode: 3133, object: 'R.O.P Arrears (Non Gazetted)', edpCode: '3137(+)', amount: 0 },
    { budgetCode: 3133, object: 'Festival Advance', edpCode: '3138(+)', amount: 0 },
    { budgetCode: 3133, object: 'Food Grain Advance', edpCode: '3139(+)', amount: 0 },
    { budgetCode: 3133, object: '(B) Other than Pay & Allowances', edpCode: '3133(+)', amount: 5555 },
    { budgetCode: 3243, object: '2. Contribution', edpCode: '3243(+)', amount: 0 },
    { budgetCode: 3353, object: '3. Subsidies', edpCode: '3353(+)', amount: 0 }
  ];

  grossTotal = 0;
  netAmount = 0;
  deductions = 25;

  constructor() {

    for (let index = 0; index < this.budgetList.length; index++) {
      this.grossTotal = this.grossTotal + this.budgetList[index].amount;
    }

    this.netAmount = this.grossTotal - this.deductions;
  }

  bill_no = 34;
  bill_transit_sr_no = 111111;
  todayDate = Date.now();
  token_no = 14330;
  office_name = 'District Treasury Office, Gandhinagar';
  district = 61;

  voucher_no = 123456;
  cardex_no = 4;
  class_of_expenditure = '1-Voted';
  fund = '3-Consolidated';
  drawing_Officer = 416;
  demand_no = '002 Agriculture';
  type_of_budget = '1-State';
  scheme_no = '110011';
  head_chargeble = '2401001100400';
  sector = 'C-Economic Services';
  major_head = '2401 Crops Husbandry';
  sub_major_Head = '00';
  minor_head = '110 Crops Insurance';
  sub_head = '04 ARG-11 Risk Management in Agriculture Sector';
  detailed_head = '00';


  allotment_amount = 100000.00;
  expenditure_amount = 50000.00;
  balance = this.allotment_amount - this.expenditure_amount;
  totalDeduction() {

  }

  onPrint() {

  }

  ngOnInit() {
  }

}
