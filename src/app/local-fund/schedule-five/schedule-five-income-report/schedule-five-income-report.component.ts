import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { lfMessage } from 'src/app/common/error-message/common-message.constants';
import { WorkflowDetailsLfComponent } from '../../workflow-details-lf/workflow-details-lf.component';
import { ScheduleFive } from 'src/app/model/local-fund';
import { LocalFundDirective } from 'src/app/common/directive/local-fund-directive';


@Component({
  selector: 'app-schedule-five-income-report',
  templateUrl: './schedule-five-income-report.component.html',
  styleUrls: ['./schedule-five-income-report.component.css']
})
export class ScheduleFiveIncomeReportComponent implements OnInit {

  directiveObject = new LocalFundDirective(this.dialog);
  referenceNumber = 'Reference Number:';
  referenceNumberDate = 'Reference Date:';
  todayDate = Date.now();
  scheduleFive: FormGroup;
  openingBalanceValue = '';
  incomeValue = '';
  districtName = 'Rajkot';
  totalIncomeValue = 0;
  closingBalanceValue = '';
  errorMessages = lfMessage;
  isSubmitted = false;
  isEditClicked = false;
  indexValue = null;
  isDataUpdated = false;
  financialYearCtrl: FormControl = new FormControl();
  majorHeadCtrl: FormControl = new FormControl();

  financialYearList: ListValue[] = [
    { value: '0', viewValue: '2013-14' },
    { value: '1', viewValue: '2014-15' },
    { value: '2', viewValue: '2015-16' },
    { value: '3', viewValue: '2016-17' },
    { value: '4', viewValue: '2017-18' },
    { value: '5', viewValue: '2018-19' },
    { value: '6', viewValue: '2019-20' },
    { value: '7', viewValue: '2020-21' },
  ];

  majorHeadList: ListValue[] = [
    { value: '0', viewValue: '2059 Public construction' },
    { value: '1', viewValue: '2210 Medical public health' },
    { value: '2', viewValue: '2216 Housing' },
    { value: '3', viewValue: '2236 Nutrition diet' },
    { value: '4', viewValue: '2245 Natural calamity' },
  ];

  // listing data
  ElementData: ScheduleFive[] = [
    {
      financialYear: '2013-14',
      district: 'Rajkot',
      majorHead: '2059 Public construction',
      openingBalance: '11207560',
      income: '21606',
      totalIncome: 11229166,
      amountDeposited: 13022,
      closingBalance: '11216144',
      remarks: 'NA'
    },
    {
      financialYear: '2013-14',
      district: 'Rajkot',
      majorHead: '2210 Medical public health',
      openingBalance: '20433',
      income: '0',
      totalIncome: 20433,
      amountDeposited: 0,
      closingBalance: '20433',
      remarks: 'NA'
    },
    {
      financialYear: '2013-14',
      district: 'Rajkot',
      majorHead: '2216 Housing',
      openingBalance: '6467',
      income: '0',
      totalIncome: 6467,
      amountDeposited: 0,
      closingBalance: '6467',
      remarks: 'NA'
    },
    {
      financialYear: '2013-14',
      district: 'Rajkot',
      majorHead: '2236 Nutrition diet',
      openingBalance: '-300',
      income: '0',
      totalIncome: -300,
      amountDeposited: 0,
      closingBalance: '-300',
      remarks: 'NA'
    },
    {
      financialYear: '2013-14',
      district: 'Rajkot',
      majorHead: '2245 Natural calamity',
      openingBalance: '196486',
      income: '0',
      totalIncome: 196486,
      amountDeposited: 0,
      closingBalance: '196486',
      remarks: 'NA'
    }
  ];

  // listing datasource
  dataSource = new MatTableDataSource<ScheduleFive>(this.ElementData);

  // listing column
  displayedColumns: any[] = [
    'serialNo',
    'financialYear',
    'district',
    'majorHead',
    'openingBalance',
    'income',
    'totalIncome',
    'amountDeposited',
    'closingBalance',
    'remarks',
    'action'
  ];

  // total column
  displayedColumnsTotal: any[] = [
    'footer1',
    'openingBalance',
    'income',
    'totalIncome',
    'amountDeposited',
    'closingBalance',
    'remarks',
    'action'

  ];

  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.submitFormData();
  }

  // form data
  submitFormData() {
    this.scheduleFive = this.fb.group({
      financialYear: [''],
      majorHead: [''],
      districtName: [''],
      openingBalance: [''],
      income: [''],
      totalIncome: [''],
      amountDeposited: [''],
      closingBalance: [''],
    });
  }

  // add form data into table
  add() {
    if (this.scheduleFive.valid) {
      this.isSubmitted = false;
      const financialYearValue = this.scheduleFive.value.financialYear;
      const majorHeadValue = this.scheduleFive.value.majorHead;

      // changes table data at respective row of data is edited
      if (this.isEditClicked) {
        this.ElementData.splice(this.indexValue, 1, {
          financialYear: this.financialYearList[financialYearValue].viewValue,
          district: this.districtName,
          majorHead: this.majorHeadList[majorHeadValue].viewValue,
          openingBalance: this.openingBalanceValue,
          income: this.incomeValue,
          totalIncome: this.totalIncomeValue,
          amountDeposited: this.scheduleFive.value.amountDeposited,
          closingBalance: this.closingBalanceValue,
          remarks: 'NA'
        });

        this.dataSource = new MatTableDataSource<ScheduleFive>(this.ElementData);

        this.isEditClicked = false;

        // patches default values into form
        this.scheduleFive.patchValue({
          financialYear: [''],
          majorHead: [''],
          districtName: ['Rajkot'],
          openingBalance: [''],
          income: [''],
          totalIncome: [''],
          amountDeposited: [''],
          closingBalance: [''],
        });
      } else {

        // adds new table entry
        this.ElementData.push({
          financialYear: this.financialYearList[financialYearValue].viewValue,
          district: this.districtName,
          majorHead: this.majorHeadList[majorHeadValue].viewValue,
          openingBalance: this.openingBalanceValue,
          income: this.incomeValue,
          totalIncome: this.totalIncomeValue,
          amountDeposited: this.scheduleFive.value.amountDeposited,
          closingBalance: this.closingBalanceValue,
          remarks: 'NA'
        });

        this.dataSource.data = this.dataSource.data;

      }
    } else {
      this.isSubmitted = true;
    }

  }

  // reset form
  resetForm() {
    this.scheduleFive.reset();
  }

  // show respective row data into form for enabling editing
  editDetails(index) {
    this.isEditClicked = true;
    this.indexValue = index;
    const financialYearValue = this.ElementData[index].financialYear;
    const majorHeadValue = this.ElementData[index].majorHead;
    const length = Object.keys(this.financialYearList).length;
    const length2 = Object.keys(this.majorHeadList).length;
    let financialYear;
    let majorHead;

    for (let i = 0; i < length; i++) {
      if (financialYearValue === this.financialYearList[i].viewValue) {
        financialYear = this.financialYearList[i].value;
      }
    }
    for (let i = 0; i < length2; i++) {
      if (majorHeadValue === this.majorHeadList[i].viewValue) {
        majorHead = this.majorHeadList[i].value;
      }
    }


    if (majorHead === '0') {
      this.openingBalanceValue = '11207560';
      this.incomeValue = '21606';

    }
    if (majorHead === '1') {
      this.openingBalanceValue = '20433';
      this.incomeValue = '0';

    }
    if (majorHead === '2') {
      this.openingBalanceValue = '6467';
      this.incomeValue = '0';

    }
    if (majorHead === '3') {
      this.openingBalanceValue = '-300';
      this.incomeValue = '0';

    }
    if (majorHead === '4') {
      this.openingBalanceValue = '196486';
      this.incomeValue = '0';

    }


    this.scheduleFive.patchValue({

      financialYear: financialYear,
      majorHead: majorHead,
      districtName: 'Rajkot',
      openingBalance: this.openingBalanceValue,
      income: this.incomeValue,
      totalIncome: this.totalIncomeValue,
      amountDeposited: this.ElementData[index].amountDeposited,
      closingBalance: this.ElementData[index].closingBalance,
    });
  }

  // calculate opening balance
  calculateOpeningBalance() {
    let openingBalance = 0;
    this.dataSource.data.forEach((element1) => {
      openingBalance = Number(openingBalance) + Number(element1.openingBalance);
    });

    return openingBalance;
  }

  // calculate income
  calculateIncome() {
    let income = 0;
    this.dataSource.data.forEach((element1) => {
      income = Number(income) + Number(element1.income);
    });

    return income;
  }

  // calculate total income
  calculateTotalIncome() {
    let totalIncome = 0;
    this.dataSource.data.forEach((element1) => {
      totalIncome = Number(totalIncome) + Number(element1.totalIncome);
    });

    return totalIncome;
  }

  // calculate amount deposited
  calculateAmountDeposited() {
    let amountDeposited = 0;
    this.dataSource.data.forEach((element1) => {
      amountDeposited = Number(amountDeposited) + Number(element1.amountDeposited);
    });

    return amountDeposited;
  }

  // calculate closing balance
  calculateClosingBalance() {
    let closingBalance = 0;
    this.dataSource.data.forEach((element1) => {
      closingBalance = Number(closingBalance) + Number(element1.closingBalance);
    });

    return closingBalance;
  }

  // calculate total income value
  calculateTotalIncomeValue() {
    this.totalIncomeValue = Number(this.openingBalanceValue) + Number(this.incomeValue);
    return this.totalIncomeValue;
  }

  // calculate closing balance
  calculateClosingBalanceValue() {
    let closingBalanceValue = 0;
    if (this.totalIncomeValue !== null && this.scheduleFive.value.amountDeposited !== '') {
      closingBalanceValue = Number(this.totalIncomeValue) - Number(this.scheduleFive.value.amountDeposited);
      this.closingBalanceValue = (String)(closingBalanceValue);
    }
    return closingBalanceValue;
  }

  // change income on basis of major head
  changeIncome() {
    const majorHeadValue = this.scheduleFive.value.majorHead;

    if (majorHeadValue === '0') {
      this.openingBalanceValue = '11207560';
      this.incomeValue = '21606';

    }
    if (majorHeadValue === '1') {
      this.openingBalanceValue = '20433';
      this.incomeValue = '0';

    }
    if (majorHeadValue === '2') {
      this.openingBalanceValue = '6467';
      this.incomeValue = '0';

    }
    if (majorHeadValue === '3') {
      this.openingBalanceValue = '-300';
      this.incomeValue = '0';

    }
    if (majorHeadValue === '4') {
      this.openingBalanceValue = '196486';
      this.incomeValue = '0';

    }
  }

  // reest common button
  reset() { }
}
