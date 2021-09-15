import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-freeze-unfreeze-budget-ceiling',
  templateUrl: './freeze-unfreeze-budget-ceiling.component.html',
  styleUrls: ['./freeze-unfreeze-budget-ceiling.component.css']
})
export class FreezeUnfreezeBudgetCeilingComponent implements OnInit {

  displayedColumns: string[] = ['srno', 'departmentName', 'budgetCeilingRevenue', 'budgetCeilingCapital', 'approvedBudgetEstimatesRevenue', 'approvedBudgetEstimatesCapital', 'remainingCeilingRevenue', 'remainingCeilingCapital'];
  displayedColumns2: string[] = ['srno', 'hodName', 'budgetCeilingRevenue', 'budgetCeilingCapital', 'remainingCeilingRevenue', 'remainingCeilingCapital'];
  displayedColumns3: string[] = ['srno', 'formType', 'budgetCeilingRevenue', 'budgetCeilingCapital', 'remainingCeilingRevenue', 'remainingCeilingCapital'];

  datasource: any[] = [{
    departmentName: 'Department 1',
    revenue: 1000,
    capital: 2000,
    approvedRevenue: 500,
    approvedCapital: 600
  }, {
    departmentName: 'Department 2',
    revenue: 2000,
    capital: 5000,
    approvedRevenue: 700,
    approvedCapital: 500
  }, {
    departmentName: 'Department 3',
    revenue: 3000,
    capital: 8000,
    approvedRevenue: 1100,
    approvedCapital: 3000
  }];

  datasource2: any[] = [{
    hodName: 'HOD 1',
    revenue: 100,
    capital: 100,
    remainingRevenue: 50,
    remainingCapital: 50
  }, {
    hodName: 'HOD 2',
    revenue: 150,
    capital: 150,
    remainingRevenue: 50,
    remainingCapital: 50
  }, {
    hodName: 'HOD 3',
    revenue: 200,
    capital: 200,
    remainingRevenue: 100,
    remainingCapital: 100
  }, {
    hodName: 'Own Department',
    revenue: 50,
    capital: 50,
    remainingRevenue: 25,
    remainingCapital: 25
  }];

  datasource3: any[] = [{
    formType: 'Item Continuous (Form E)',
    revenue: 25,
    capital: 25,
    remainingRevenue: 10,
    remainingCapital: 15
  }, {
    formType: 'New Item (Form C & F)',
    revenue: 15,
    capital: 15,
    remainingRevenue: 10,
    remainingCapital: 5
  }, {
    formType: 'New Work / Work in Progress (Form G & H)',
    revenue: 10,
    capital: 10,
    remainingRevenue: 5,
    remainingCapital: 5
  }];

  constructor() {
  }

  ngOnInit() {
  }

  calculation(unit) {
    return this.datasource.reduce((summ, v) => summ += parseInt(v[unit]), 0);
  }

  calcuateTotalForAD(unit) {
    return this.datasource2.reduce((summ, v) => summ += parseInt(v[unit]), 0);
  }

  calcuateTotalForHOD(unit) {
    return this.datasource3.reduce((summ, v) => summ += parseInt(v[unit]), 0);
  }

  calcualteRemainRevenue() {
    let totalRevenue = this.datasource.reduce((summ, v) => summ += parseInt(v['revenue']), 0);
    let totalApprovedRevenue = this.datasource.reduce((summ, v) => summ += parseInt(v['approvedRevenue']), 0);
    return totalRevenue - totalApprovedRevenue;
  }

  calcualteRemainCapital() {
    let totalCapital = this.datasource.reduce((summ, v) => summ += parseInt(v['capital']), 0);
    let totalApprovedCapital = this.datasource.reduce((summ, v) => summ += parseInt(v['approvedCapital']), 0);
    return totalCapital - totalApprovedCapital;
  }

  validateRevenueForAD(unit) {
    let totalRevenue =  this.datasource2.reduce((summ, v) => summ += parseInt(v[unit]), 0);
    return totalRevenue > this.datasource[0][unit];
  }

  validateRevenueForHOD(unit) {
    let totalRevenue =  this.datasource3.reduce((summ, v) => summ += parseInt(v[unit]), 0);
    return totalRevenue > this.datasource[2][unit];
  }

}
