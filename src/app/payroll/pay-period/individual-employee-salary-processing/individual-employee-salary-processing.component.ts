import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { CommonListing } from 'src/app/model/common-listing';

import { DataService } from './../../../common/data.service';
import {
  IndividualEmployeeDeductions,
  IndividualEmployeeDeductionsSplit,
  IndividualEmployeeEarning,
  IndividualEmployeeEarningSplit,
} from './../../../model/payroll';

@Component({
  selector: 'app-individual-employee-salary-processing',
  templateUrl: './individual-employee-salary-processing.component.html',
  styleUrls: ['./individual-employee-salary-processing.component.css']
})
export class IndividualEmployeeSalaryProcessingComponent implements OnInit {

  isShowSplit = false;
  individualEmployeeSalaryProcessingForm: FormGroup;
  // table data
  earningData: IndividualEmployeeEarning[] = [
    {
      earning: '7th Basic Pay',
      amount: '61300.00',
    },
    {
      earning: 'Dearness Allowance',
      amount: '10421.00',
    },
    {
      earning: 'House Rent Allowance',
      amount: '12260.00',
    },
    {
      earning: 'Transport Allowance',
      amount: '1600.00',
    },
    {
      earning: 'Medical Allowance',
      amount: '300.00',
    },
    {
      earning: 'Compensatory Local Allowance',
      amount: '240.00',
    },
  ];

  splitEarningData: IndividualEmployeeEarningSplit[] = [
    {
      earning: '7th Basic Pay',
      amount: '61300.00',
      fromDate: '1-Jan-2020',
      toDate: '31-Jan-2020'
    },
    {
      earning: 'Dearness Allowance',
      amount: '10421.00',
      fromDate: '1-Jan-2020',
      toDate: '31-Jan-2020'
    },
  ];
  earningDataSource;
  earningDisplayedColumns: any[] = [
    'earning',
    'amount',
  ];
  splitEarningDataSource;
  splitEarningDisplayedColumns: any[] = [
    'earning',
    'amount',
    'fromDate',
    'toDate'
  ];
  // table data
  splitDeductionsData: IndividualEmployeeDeductionsSplit[] = [
    {
      deductions: 'Govt. Ins Scheme Fund',
      amount: '120.00',
      fromDate: '1-Jan-2020',
      toDate: '31-Jan-2020'
    },
    {
      deductions: 'Govt. Ins Scheme Saving',
      amount: '280.00',
      fromDate: '1-Jan-2020',
      toDate: '31-Jan-2020'
    },
    {
      deductions: 'NPS',
      amount: '7172.00',
      fromDate: '1-Jan-2020',
      toDate: '31-Jan-2020'
    },
    {
      deductions: 'Professional Tax',
      amount: '200.00',
      fromDate: '1-Jan-2020',
      toDate: '31-Jan-2020'
    },
    {
      deductions: 'Income Tax',
      amount: '5000.00',
      fromDate: '1-Jan-2020',
      toDate: '31-Jan-2020'
    }
  ];
  deductionsData: IndividualEmployeeDeductions[] = [
    {
      deductions: 'Govt. Ins Scheme Fund',
      amount: '120.00',
    },
    {
      deductions: 'Govt. Ins Scheme Saving',
      amount: '280.00',
    },
    {
      deductions: 'NPS',
      amount: '7172.00',
    },
    {
      deductions: 'Professional Tax',
      amount: '200.00',
    },
    {
      deductions: 'Income Tax',
      amount: '5000.00',
    },
    {
      deductions: '',
      amount: '',
    },
  ];
  boolean_list: CommonListing[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];
  splitCtrl: FormControl = new FormControl();
  deductionsDataSource;
  deductionsDisplayedColumns: any[] = [
    'deductions',
    'amount',

  ];
  splitDeductionsDataSource;
  splitDeductionsDisplayedColumns: any[] = [
    'deductions',
    'amount',
    'fromDate',
    'toDate'
  ];
  splitDeductionsRows: any[];
  data;
  payRolType = 'Regular';
  directiveObj = new CommonDirective(this.router);
  constructor(private fb: FormBuilder, private router: Router, private dataService: DataService) { this.data = dataService.getOption(); }

  ngOnInit() {
    this.individualEmployeeSalaryProcessingForm = this.fb.group({
      employeeNumber: [{ value: '1000000001', disabled: true }],
      employeeName: [{ value: 'Mr. Neeraj Gautam', disabled: true }],
      officeName: [{ value: 'Collector Office, Ahmedabad', disabled: true }],
      designation: [{ value: 'Assistant Professor', disabled: true }],
      class: [{ value: 'Class I', disabled: true }],
      category: [{ value: 'GO', disabled: true }],
      ddoNo: [{ value: '4265', disabled: true }],
      cardexNo: [{ value: '5622', disabled: true }],
      district: [{ value: 'Ahmedabad', disabled: true }],
      payrollType: [{ value: 'Regular', disabled: true }],
      payYear: [{ value: '2021', disabled: true }],
      payMonth: [{ value: 'January', disabled: true }],
      showSplit: [{ value: '2', disabled: false }]
    });
    if (this.data['payRolType']) {
      this.payRolType = this.data['payRolType'];
    } else {
      this.payRolType = 'Regular';
    }
    this.individualEmployeeSalaryProcessingForm.controls['payrollType'].patchValue([this.payRolType]);
    console.log(this.payRolType);

    // If Payroll type is DA-Arrear then data will be as below
    if (this.payRolType === 'DA-Arrear') {
      console.log(this.payRolType);
      this.earningDataSource = new MatTableDataSource<IndividualEmployeeEarning>([
        {
          earning: 'Dearness Allowance',
          amount: '10000.00',
        },
      ]);
      this.splitEarningDataSource = new MatTableDataSource<IndividualEmployeeEarningSplit>([{
        earning: 'Dearness Allowance',
        amount: '2500.00',
        fromDate: '1-Sep-2020',
        toDate: '30-Sep-2020'
      },
      {
        earning: 'Dearness Allowance',
        amount: '2500.00',
        fromDate: '1-Oct-2020',
        toDate: '31-Oct-2020'
      },
      {
        earning: 'Dearness Allowance',
        amount: '2500.00',
        fromDate: '1-Nov-2020',
        toDate: '30-Nov-2020'
      },
      {
        earning: 'Dearness Allowance',
        amount: '2500.00',
        fromDate: '1-Dec-2020',
        toDate: '31-Dec-2020'
      },
      ]);
      this.deductionsDataSource = new MatTableDataSource<IndividualEmployeeDeductions>(
        [
          {
            deductions: 'NPS',
            amount: '1000.00',
          },
        ]);
      this.splitDeductionsDataSource = new MatTableDataSource<any>([{ noData: 'No Split Deductions available.' }]);
      this.splitDeductionsRows = ['noData'];


    } else {
      this.earningDataSource = new MatTableDataSource<IndividualEmployeeEarning>(this.earningData);
      this.splitEarningDataSource = new MatTableDataSource<IndividualEmployeeEarningSplit>(this.splitEarningData);
      this.deductionsDataSource = new MatTableDataSource<IndividualEmployeeDeductions>(this.deductionsData);
      this.splitDeductionsDataSource = new MatTableDataSource<IndividualEmployeeDeductionsSplit>(this.splitDeductionsData);
      this.splitDeductionsRows = this.splitDeductionsDisplayedColumns;
    }
  }

  // On change of split dropdown
  showSplit(type) {
    if (type === '1') {
      this.isShowSplit = true;
    } else {
      this.isShowSplit = false;
    }
  }
}
