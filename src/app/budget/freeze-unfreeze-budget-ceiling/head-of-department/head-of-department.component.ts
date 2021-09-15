import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-head-of-department',
  templateUrl: './head-of-department.component.html',
  styleUrls: ['./head-of-department.component.css']
})
export class HeadOfDepartmentComponent implements OnInit {
  headOfDepartMentForm: FormGroup;
  date: any = new Date();
  // displayedColumns: string[] = [
  //   'srno', 'formType', 'budgetCeilingRevenue', 'budgetCeilingCapital',
  //   'approvedBudgetEstimatesRevenue', 'approvedBudgetEstimatesCapital',
  //   'remainingCeilingRevenue', 'remainingCeilingCapital','action'
  // ];
  isVissible = false;
  displayedColumns: string[] = [
    'srno', 'HOD', 'budgetCeilingRevenue', 'budgetCeilingCapital',
    'approvedBudgetEstimatesRevenue', 'approvedBudgetEstimatesCapital',

  ];

  datasource: any[] = [{
    HOD: 'HOD 1 ',
    revenue: 25,
    capital: 25,
    approvedRevenue: 15,
    approvedCapital: 15
  }];

  finance_list: any[] = [
    { value: '1', viewValue: '2010-2011' },
    { value: '2', viewValue: '2011-2012' },
    { value: '3', viewValue: '2012-2013' },
    { value: '4', viewValue: '2013-2014' },
    { value: '5', viewValue: '2014-2015' },
    { value: '6', viewValue: '2015-2016' },
    { value: '7', viewValue: '2016-2017' },
    { value: '8', viewValue: '2017-2018' },
    { value: '9', viewValue: '2018-2019' },
    { value: '10', viewValue: '2019-2020' },
    { value: '11', viewValue: '2020-2021' },
  ];

  constructor(public dialog: MatDialog, private fb: FormBuilder, ) {
  }

  ngOnInit() {
    this.headOfDepartMentData();
  }
  headOfDepartMentData() {
    this.headOfDepartMentForm = this.fb.group({
      financeYear: ['11'],
    });
  }
  show() {
    this.isVissible = true;
  }
  submitDetails() { }
  calculation(unit) {
    return this.datasource.reduce((summ, v) => summ += parseInt(v[unit]), 0);
  }

  calcualteRemainRevenue() {
    const totalRevenue = this.datasource.reduce((summ, v) => summ += parseInt(v['revenue']), 0);
    const totalApprovedRevenue = this.datasource.reduce((summ, v) => summ += parseInt(v['approvedRevenue']), 0);
    return totalRevenue - totalApprovedRevenue;
  }

  calcualteRemainCapital() {
    let totalCapital = this.datasource.reduce((summ, v) => summ += parseInt(v['capital']), 0);
    let totalApprovedCapital = this.datasource.reduce((summ, v) => summ += parseInt(v['approvedCapital']), 0);
    return totalCapital - totalApprovedCapital;
  }

  validateRevenue(unit) {
    const totalRevenue = this.datasource.reduce((summ, v) => summ += parseInt(v[unit]), 0);
    return totalRevenue > 100;
  }
  openHistory() {
    const dialogRef = this.dialog.open(ViewHistryDiloagComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
const HISTORY_DATA: any[] = [
  {
    nameOfUser: 'Shri Pratik Shah',
    DateTime: '24-Feb-2020 10:30',
    CellingAmount: '8000',
  }
];
@Component({
  selector: 'view-history-Dialog',
  templateUrl: './view-history-Dialog.html',
})
export class ViewHistryDiloagComponent implements OnInit {
  historyDataSource = new MatTableDataSource(HISTORY_DATA);
  constructor(public dialogRef: MatDialogRef<ViewHistryDiloagComponent>, ) {

  }
  historyColumns: string[] = [
    'srNo', 'nameOfUser', 'DateTime', 'CellingAmount'
  ];
  ngOnInit() {

  }
  goToDashboard() {
    this.dialogRef.close('yes');
  }
}
