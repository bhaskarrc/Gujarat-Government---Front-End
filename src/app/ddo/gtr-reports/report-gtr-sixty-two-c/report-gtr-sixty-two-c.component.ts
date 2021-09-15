import { Component, OnInit } from '@angular/core';
import { BudgetListValue } from 'src/app/model/budget-list';

@Component({
  selector: 'app-report-gtr-sixty-two-c',
  templateUrl: './report-gtr-sixty-two-c.component.html',
  styleUrls: ['./report-gtr-sixty-two-c.component.css']
})
export class ReportGtrSixtyTwoCComponent implements OnInit {

  budgetListToAdd: BudgetListValue[] = [
    { budgetCode: 3135, object: 'Pay of Officers', edpCode: '3140(+)', amount: 0 },
    { budgetCode: 3135, object: 'Pay of Establishment', edpCode: '3141(+)', amount: 0 },
    { budgetCode: 3135, object: 'Dearness Allowance', edpCode: '3142(+)', amount: 0 },
    { budgetCode: 3135, object: 'Other Allowance', edpCode: '3143(+)', amount: 0 },
    { budgetCode: 3135, object: 'Leave Travel Concessions', edpCode: '3144(+)', amount: 0 },
    { budgetCode: 3135, object: 'Reimbursement of Medical charges', edpCode: '3145(+)', amount: 0 },
    { budgetCode: 3135, object: 'Medical Allowance', edpCode: '3146(+)', amount: 0 },
    { budgetCode: 3135, object: 'Bonus', edpCode: '3147(+)', amount: 0 },
    { budgetCode: 3135, object: 'Leave Encashment', edpCode: '3148(+)', amount: 0 },
    { budgetCode: 3135, object: 'House Rent Allowance', edpCode: '3149(+)', amount: 0 },
    { budgetCode: 3135, object: 'Compensatory Local Allowance', edpCode: '3150(+)', amount: 0 },
    { budgetCode: 3135, object: 'Interim Relief', edpCode: '3151(+)', amount: 0 },
    { budgetCode: 3135, object: 'Transport Allowance', edpCode: '3152(+)', amount: 0 },
    { budgetCode: 3135, object: 'Sumptuary Allowance', edpCode: '3153(+)', amount: 0 },
    { budgetCode: 3135, object: 'R.O.P Arrears (Gazetted)', edpCode: '3154(+)', amount: 0 },
    { budgetCode: 3135, object: 'R.O.P Arrears (Non Gazetted)', edpCode: '3155(+)', amount: 0 },
    { budgetCode: 3135, object: 'Festival Advance', edpCode: '3156(+)', amount: 0 },
    { budgetCode: 3135, object: 'Food Grain Advance', edpCode: '3157(+)', amount: 0 },
    { budgetCode: 3135, object: 'Other Than Pay & Allow(For Others)', edpCode: '3135(+)', amount: 0 },
    { budgetCode: 3245, object: 'Contribution To Others', edpCode: '3245(+)', amount: 0 },
    { budgetCode: 3355, object: 'Subsidies To Others', edpCode: '3355(+)', amount: 0 },
  ];

  budgetListToDeduct: BudgetListValue[] = [
    { budgetCode: 0, object: '1. General Provident Fund 8336-P.F. P.F.of Secondary School Teachers', edpCode: '9536(-)', amount: 0 },
    { budgetCode: 0, object: '2. General Provident Fund 8336-P.F. Teachers Non-Government Colleges', edpCode: '9685(-)', amount: 0 },
    {
      budgetCode: 0,
      object: '3. General Provident Fund 8336-P.F. Teachers Non-Government Engineering Colleges and Politechnics',
      edpCode: '9686(-)', amount: 0
    },
    { budgetCode: 0, object: '4. Professional Tax', edpCode: '9570(-)', amount: 0 },
    { budgetCode: 0, object: '5. Income Tax', edpCode: '9510(-)', amount: 0 },
    { budgetCode: 0, object: '6. Surcharge on Income Tax', edpCode: '9520(-)', amount: 0 },
    { budgetCode: 0, object: '7. Festival Advance', edpCode: '9701(-)', amount: 0 },
    { budgetCode: 0, object: '8. Food Grain Advance', edpCode: '9711(-)', amount: 1000 },
    { budgetCode: 0, object: '9. H.B.A', edpCode: '9593(-)', amount: 0 },
    { budgetCode: 0, object: '10. Other Conveyance Advance', edpCode: '9701(-)', amount: 0 },
    { budgetCode: 0, object: '11. Fan Advance', edpCode: '9721(-)', amount: 0 },
    {
      budgetCode: 0,
      object: '12. Miscellaneous recoveries (Details of codes below should be filled in by Treasury',
      edpCode: '9910(-)', amount: 0
    }

  ];

  grossTotal = 0;
  netAmount = 0.00;
  totaldeductions = 0;

  constructor() {

    for (let index = 0; index < this.budgetListToAdd.length; index++) {
      this.grossTotal = this.grossTotal + this.budgetListToAdd[index].amount;
    }

    for (let index = 0; index < this.budgetListToDeduct.length; index++) {
      this.totaldeductions = this.totaldeductions + this.budgetListToDeduct[index].amount;
    }
  }

  d = new Date();
  previousDate = this.d.setFullYear(this.d.getFullYear() - 1);
  bill_no = 1123;
  bill_transit_sr_no = 27;
  todayDate = '18/02/2020';
  token_no = 1918;
  office_name = 'District Treasury Office, Gandhinagar';
  district = 61;

  voucher_no = 123456;
  cardex_no = 830;
  class_of_expenditure = '1-Voted';
  fund = '3-Consolidated';
  drawing_Officer = 80;
  demand_no = '043 Police';
  type_of_budget = '1-State';
  scheme_no = '000000';
  head_chargeble = '2055008000700';
  sector = 'A-General Services';
  major_head = '2055 Police';
  sub_major_Head = '00';
  minor_head = '800 Other Expenditure';
  sub_head = '07 Gujrat Road Safety Fund';
  detailed_head = '00';


  allotment_amount = 100000.00;
  expenditure_amount = 50000.00;
  balance = this.allotment_amount - this.expenditure_amount;

  ngOnInit() {
  }

  onPrint() {
    window.print();
  }

}
