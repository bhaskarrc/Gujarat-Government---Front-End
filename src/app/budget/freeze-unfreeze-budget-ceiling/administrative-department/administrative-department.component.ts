import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SaveConfirmDialogComponent } from '../../save-confirm-dialog/save-confirm-dialog.component';
import { SaveConfirmDialogComponent1 } from './save-confirm-dialog/save-confirm-dialog.component';
import { MatDialog, MatTableDataSource, MatDialogRef } from '@angular/material';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-freeze-unfreeze-administrative-department',
  templateUrl: './administrative-department.component.html',
  styleUrls: ['./administrative-department.component.css']
})
export class AdministrativeDepartmentComponent implements OnInit {
  date: any = new Date();
  filteredFinYear: any[] = [{
    value: '2', viewValue: '2020-2021'
  },
  { value: '1', viewValue: '2019-2020' },
  { value: '3', viewValue: '2018-2019' },
  { value: '4', viewValue: '2017-2018' },
  { value: '5', viewValue: '2016-2017' },
  { value: '6', viewValue: '2015-2016' },
  { value: '7', viewValue: '2014-2015' },
  { value: '8', viewValue: '2013-2014' },
  { value: '9', viewValue: '2012-2013' },
  { value: '10', viewValue: '2011-2012' },
  { value: '10', viewValue: '2010-2011' },
  ];

  finYearCtrl: FormControl = new FormControl();

  adminDeptForm: FormGroup;

  // displayedColumns: string[] = [
  //   'srno', 'hodName', 'budgetCeilingRevenue', 'budgetCeilingCapital',
  //   'approvedBudgetEstimatesRevenue', 'approvedBudgetEstimatesCapital',
  //   'remainingCeilingRevenue', 'remainingCeilingCapital','action'
  // ];
  displayedColumns: string[] = [
    'srno', 'hodName', 'budgetCeilingRevenue', 'budgetCeilingCapital',
    'proposedRevenue', 'proposedCapital', 'action'
  ];


  displayedColumnsOwnDepartment: string[] = [
    'srno', 'formType', 'budgetCeilingRevenue', 'budgetCeilingCapital', 'proposedRevenue', 'proposedCapital',
    'approvedBudgetEstimatesRevenue', 'approvedBudgetEstimatesCapital',
    'remainingCeilingRevenue', 'remainingCeilingCapital', 'action1'
  ];

  datasource2: any[] = [{
    hodName: 'HOD 1',
    revenue: 100,
    capital: 100,
    proposedRevenue: 50,
    proposedCapital: 50,
    approvedRevenue: 50,
    approvedCapital: 60
  }, {
    hodName: 'HOD 2',
    revenue: 150,
    capital: 150,
    proposedRevenue: 50,
    proposedCapital: 50,
    approvedRevenue: 50,
    approvedCapital: 60
  }, {
    hodName: 'HOD 3',
    revenue: 200,
    capital: 200,
    proposedRevenue: 50,
    proposedCapital: 50,
    approvedRevenue: 50,
    approvedCapital: 60
  }, {
    hodName: 'Revenue Department',
    revenue: 50,
    capital: 50,
    proposedRevenue: 15,
    proposedCapital: 50,
    approvedRevenue: 50,
    approvedCapital: 20
  }];

  datasourceOwnDepartment: any[] = [
    {
      formType: 'Standing Charges Estimates - Form B & G-i-A',
      revenue: 100,
      capital: 100,
      proposedRevenue: 15,
      proposedCapital: 15,
      approvedRevenue: 15,
      approvedCapital: 15
    },
    {
      formType: 'New Item Estimates – Form C / F',
      revenue: 100,
      capital: 100,
      proposedRevenue: 15,
      proposedCapital: 15,
      approvedRevenue: 5,
      approvedCapital: 5
    },
    {
      formType: 'Item Continuous Estimates - Form E',
      revenue: 100,
      capital: 100,
      proposedRevenue: 15,
      proposedCapital: 15,
      approvedRevenue: 15,
      approvedCapital: 15
    },

    {
      formType: 'New Work Estimates - Form G / H',
      revenue: 100,
      capital: 100,
      proposedRevenue: 15,
      proposedCapital: 15,
      approvedRevenue: 5,
      approvedCapital: 5
    },
    {
      formType: 'Work in Progress – Form I',
      revenue: 100,
      capital: 100,
      proposedRevenue: 15,
      proposedCapital: 15,
      approvedRevenue: 5,
      approvedCapital: 5
    }
  ];


  constructor(
    private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog,
    private toaster: ToastrService
  ) {
  }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.adminDeptForm = this.fb.group({
      finYear: ['2'],

    });
  }

  saveConfirmationPopup() {
    const dialogRef = this.dialog.open(SaveConfirmDialogComponent1, {
      width: "400px"
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === "yes") {
        this.toaster.success('Ceiling allocated successfully');
      }
    });
  }

  calcuateTotalForAD(unit, datasource) {
    return datasource.reduce((summ, v) => summ += parseInt(v[unit]), 0);
  }

  validateRevenueForAD(unit, datasource, validatingFor) {
    if (validatingFor === 'admDepartment') {
      const totalRevenue = datasource.reduce((summ, v) => summ += parseInt(v[unit]), 0);
      return totalRevenue > 1000;
    } else {

      const totalRevenue = datasource.reduce((summ, v) => summ += parseInt(v[unit]), 0);
      return totalRevenue > this.getOwnDepartmentBudget().revenue;
    }
  }

  calcualteRemainRevenue(datasource) {
    const totalRevenue = datasource.reduce((summ, v) => summ += parseInt(v['revenue']), 0);
    const totalApprovedRevenue = datasource.reduce((summ, v) => summ += parseInt(v['approvedRevenue']), 0);
    const totalProposedRevenue = datasource.reduce((summ, v) => summ += parseInt(v['proposedRevenue']), 0);
    return totalRevenue - totalApprovedRevenue - totalProposedRevenue;
  }

  calcualteRemainCapital(datasource) {
    const totalCapital = datasource.reduce((summ, v) => summ += parseInt(v['capital']), 0);
    const totalApprovedCapital = datasource.reduce((summ, v) => summ += parseInt(v['approvedCapital']), 0);
    const totalProposedCapital = datasource.reduce((summ, v) => summ += parseInt(v['proposedCapital']), 0);
    return totalCapital - totalApprovedCapital - totalProposedCapital;
  }

  getOwnDepartmentBudget() {
    return this.datasource2.find((_d) => {
      return _d.hodName === 'Own Department';
    });
  }
  goto() {
    this.router.navigate(['./budget/freeze-unfreeze-budget-ceiling/head-of-department']);
  }
  openHistory() {
    const dialogRef = this.dialog.open(ViewHistryDiloagComponent2, {
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
export class ViewHistryDiloagComponent2 implements OnInit {
  historyDataSource = new MatTableDataSource(HISTORY_DATA);
  constructor(public dialogRef: MatDialogRef<ViewHistryDiloagComponent2>, ) {

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

