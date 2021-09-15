import { Component, OnInit } from '@angular/core';
import { BudgetListValue } from 'src/app/model/budget-list';

@Component({
  selector: 'app-report-gtr-sixty-two-a',
  templateUrl: './report-gtr-sixty-two-a.component.html',
  styleUrls: ['./report-gtr-sixty-two-a.component.css']
})
export class ReportGtrSixtyTwoAComponent implements OnInit {

  budgetList: BudgetListValue[] = [
    { budgetCode: 3131, object: 'Pay of Officers', edpCode: '3101(+)', amount: 0 },
    { budgetCode: 3131, object: 'Pay of Establishment', edpCode: '3102(+)', amount: 0 },
    { budgetCode: 3131, object: 'Non Practice Allowance', edpCode: '3158(+)', amount: 0 },
    { budgetCode: 3131, object: 'Dearness Allowance', edpCode: '3103(+)', amount: 0 },
    { budgetCode: 3131, object: 'Other Allowance', edpCode: '3104(+)', amount: 0 },
    { budgetCode: 3131, object: 'Nursing Allowance', edpCode: '3159(+)', amount: 0 },
    { budgetCode: 3131, object: 'Tribal Allowance(Dang Allowance)', edpCode: '3160(+)', amount: 0 },
    { budgetCode: 3131, object: 'Uniform Allowance', edpCode: '3161(+)', amount: 0 },
    { budgetCode: 3131, object: 'Washing Allowance', edpCode: '3162(+)', amount: 0 },
    { budgetCode: 3131, object: 'Project Allowance', edpCode: '3163(+)', amount: 0 },
    { budgetCode: 3131, object: 'Charge Allowance', edpCode: '3164(+)', amount: 0 },
    { budgetCode: 3131, object: 'Orderly Allowance', edpCode: '3166(+)', amount: 0 },
    { budgetCode: 3131, object: 'Leave Travel Concessions', edpCode: '3105(+)', amount: 0 },
    { budgetCode: 3131, object: 'Reimbursement of Medical charges', edpCode: '3106(+)', amount: 0 },
    { budgetCode: 3131, object: 'Medical Allowance', edpCode: '3107(+)', amount: 0 },
    { budgetCode: 3131, object: 'Bonus', edpCode: '3108(+)', amount: 0 },
    { budgetCode: 3131, object: 'Leave Encashment', edpCode: '3109(+)', amount: 0 },
    { budgetCode: 3131, object: 'House Rent Allowance', edpCode: '3110(+)', amount: 0 },
    { budgetCode: 3131, object: 'Compensatory Local Allowance', edpCode: '3111(+)', amount: 0 },
    { budgetCode: 3131, object: 'Interim Relief', edpCode: '3112(+)', amount: 0 },
    { budgetCode: 3131, object: 'Permenent Travelling Allowance', edpCode: '3165(+)', amount: 0 },
    { budgetCode: 3131, object: 'Transport Allowance', edpCode: '3113(+)', amount: 0 },
    { budgetCode: 3131, object: 'Sumptuary Allowance', edpCode: '3114(+)', amount: 0 },
    { budgetCode: 3131, object: 'R.O.P Arrears (Gazetted)', edpCode: '3115(+)', amount: 0 },
    { budgetCode: 3131, object: 'R.O.P Arrears (Non Gazetted)', edpCode: '3116(+)', amount: 0 },
    { budgetCode: 3131, object: 'Festival Advance', edpCode: '3117(+)', amount: 0 },
    { budgetCode: 3131, object: 'Food Grain Advance', edpCode: '3118(+)', amount: 0 },
    { budgetCode: 3132, object: '(B) Other than Pay & Allowances', edpCode: '3132(+)', amount: 5555 },
    { budgetCode: 3241, object: '2. Contribution', edpCode: '3241(+)', amount: 0 },
    { budgetCode: 3351, object: '3. Subsidies', edpCode: '3351(+)', amount: 0 }
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

  ngOnInit() {
  }
  onPrint() {
    window.print();
  }
}
