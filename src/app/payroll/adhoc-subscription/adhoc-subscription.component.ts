import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatOption, MatPaginator, MatTableDataSource } from '@angular/material';
import { payrollMessage } from 'src/app/common/error-message/common-message.constants';
import { CommonListing } from 'src/app/model/common-listing';

import { SubmitDialogComponent } from '../submit-dialog/submit-dialog.component';
import { AdhocSubscription } from './../../model/payroll';

@Component({
  selector: 'app-adhoc-subscription',
  templateUrl: './adhoc-subscription.component.html',
  styleUrls: ['./adhoc-subscription.component.css']
})
export class AdhocSubscriptionComponent implements OnInit {
  isSearch = false;
  @ViewChild('allSelected') private allSelected: MatOption;

  // List of Financial Year
  financialYearList: CommonListing[] = [
    { value: '1', viewValue: '2019-2020' },
    { value: '2', viewValue: '2020-2021' },
  ];

  // List of Payroll Type
  payrollTypeList: CommonListing[] = [
    { value: '1', viewValue: 'Regular' },
    { value: '2', viewValue: 'Supplementary' },
  ];

  // List of pay Month
  payMonthList: CommonListing[] = [
    { value: '1', viewValue: 'January' },
    { value: '2', viewValue: 'February' },
    { value: '3', viewValue: 'March' },
    { value: '4', viewValue: 'April' },
    { value: '5', viewValue: 'May' },
    { value: '6', viewValue: 'June' },
    { value: '7', viewValue: 'July' },
    { value: '8', viewValue: 'August' },
    { value: '9', viewValue: 'September' },
    { value: '10', viewValue: 'October' },
    { value: '11', viewValue: 'November' },
    { value: '12', viewValue: 'December' },
  ];

  // List of Employee Type
  employeeClassList: CommonListing[] = [
    { value: '1', viewValue: 'Class I' },
    { value: '2', viewValue: 'Class II' },
    { value: '3', viewValue: 'Class III' },
    { value: '4', viewValue: 'Class IV' }
  ];

  // List of Designation Type
  designationTypeList: CommonListing[] = [
    { value: '1', viewValue: 'GRD1' },
    { value: '2', viewValue: '2nd Additional Senior Civil Judge' },
    { value: '3', viewValue: 'A.D.C. To H.E. Governor ' },
    { value: '4', viewValue: 'Account Assistant' },
    { value: '5', viewValue: 'Account Clerk' },
    { value: '6', viewValue: 'Account Controller' },
    { value: '7', viewValue: 'Account Cum - Administrator Officer' },
    { value: '8', viewValue: 'Account Officer-Class I' },
    { value: '9', viewValue: 'Account Officer-Class II' },
    { value: '10', viewValue: 'Accountant' }
  ];

  subOfficeList: CommonListing[] = [
    { value: '1', viewValue: 'All' },
    { value: '2', viewValue: 'Sub Office 1' },
    { value: '2', viewValue: 'Sub Office 2' }
  ];

  adhocTypeList: CommonListing[] = [
    { value: '1', viewValue: 'Adhoc Earning' },
    { value: '2', viewValue: 'Adhoc Deduction' },
  ];

  componentCalculationList: CommonListing[] = [
    { value: '1', viewValue: 'Amount' },
    { value: '2', viewValue: 'Percentage' },
  ];

  calculateOnList: CommonListing[] = [
    { value: '1', viewValue: 'Basic Salary' },
    { value: '2', viewValue: 'Gross Salary' },
  ];

  // List of Component Head
  adhocNameForEarningList: CommonListing[] = [
    { value: '1', viewValue: 'Adhoc Earning 1' },
    { value: '2', viewValue: 'Adhoc Earning 2' },
    { value: '3', viewValue: 'Adhoc Earning 3' }
  ];
  adhocNameForDeductionList: CommonListing[] = [
    { value: '1', viewValue: 'Adhoc Deduction 1' },
    { value: '2', viewValue: 'Adhoc Deduction 2' },
    { value: '3', viewValue: 'Adhoc Deduction 3' }
  ];

  // Table Data for Loan Detials
  adhocSubscriptionData: AdhocSubscription[] = [
    {
      employeeNo: '1000000001',
      employeeName: 'Piyush Patel',
      employeeClass: 'Class I',
      designation: 'Accountant',
      basicSalary: '20000.00',
      grossSalary: '31000.00',
      adhocType: 'Adhoc Earning',
      adhocName: 'Adhoc Earning 1',
      per: '0.00',
      amt: '0.00',
      fromDate: new Date(''),
      toDate: new Date(''),
    },
  ];

  // Table Columns for Loan Details Table
  adhocSubscriptionDataSourceColumns = [
    'srno',
    'employeeNo',
    'employeeName',
    'employeeClass',
    'designation',
    'basicSalary',
    'adhocType',
    'adhocName',
    'amt',
    'fromDate',
    'toDate',
  ];

  private paginator: MatPaginator;
  errorMessages = payrollMessage;
  adhocSubscriptionForm: FormGroup;
  financialYearCtrl: FormControl = new FormControl();
  designationTypeCtrl: FormControl = new FormControl();
  payrollTypeCtrl: FormControl = new FormControl();
  payMonthCtrl: FormControl = new FormControl();
  adhocTypeCtrl: FormControl = new FormControl();
  adhocNameCtrl: FormControl = new FormControl();
  employeeClassCtrl: FormControl = new FormControl();
  designationCtrl: FormControl = new FormControl();
  subOfficeCtrl: FormControl = new FormControl();
  componentCalculationCtrl: FormControl = new FormControl();
  calculateOnCtrl: FormControl = new FormControl();
  salCompCtrl: FormControl = new FormControl();
  adhocSubscriptionDataSource = new MatTableDataSource<any>([{ noData: 'No Data Available!' }]);
  displayedRows: any[] = ['noData'];


  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  // Initialize Form Fields
  ngOnInit() {
    this.adhocSubscriptionForm = this.fb.group({
      ddoNo: [{ value: '4265', disabled: true }],
      cardexNo: [{ value: '5622', disabled: true }],
      officeName: [{ value: 'Collector Office, Ahmedabad', disabled: true }],
      district: [{ value: 'Ahmedabad', disabled: true }],

      subOfficeName: [{ value: '1', disabled: false }],
      payrollType: [{ value: '1', disabled: true }],
      financialYear: [{ value: '2', disabled: true }],
      payMonth: [{ value: '1', disabled: true }],

      adhocType: [{ value: '', disabled: false }],
      adhocName: [{ value: '', disabled: false }],
      employeeClass: [{ value: '', disabled: false }],
      designation: [{ value: '', disabled: false }],
      employeeNo: [{ value: '', disabled: false }],
      employeeName: [{ value: '', disabled: false }],

      componentCalculation: [{ value: '', disabled: false }],
      calculateOn: [{ value: '', disabled: false }],
      amount: [{ value: '0.00', disabled: false }],
      percentage: [{ value: '0.00', disabled: false }],
      fromDate: [{ value: '', disabled: false }],
      toDate: [{ value: '', disabled: false }],

    });
  }


  setDataSourceAttributes() {
    this.adhocSubscriptionDataSource.paginator = this.paginator;
  }

  resetForm() {
    this.isSearch = false;
    this.adhocSubscriptionDataSource = new MatTableDataSource<any>([{ noData: 'No Data Available!' }]);
    this.displayedRows = ['noData'];
    this.adhocSubscriptionDataSourceColumns = [
      'srno',
      'employeeNo',
      'employeeName',
      'employeeClass',
      'designation',
      'basicSalary',
      'adhocType',
      'adhocName',
      'amt',
      'fromDate',
      'toDate',
    ];
    this.adhocSubscriptionForm.patchValue({
      ddoNo: '4265',
      cardexNo: '5622',
      officeName: 'Collector Office, Ahmedabad',
      district: 'Ahmedabad',

      subOfficeName: '1',
      payrollType: '1',
      financialYear: '2',
      payMonth: '1',

      adhocType: '',
      adhocName: '',
      employeeClass: '',
      designation: '',
      employeeNo: '',
      employeeName: '',
    });
    this.adhocSubscriptionForm.controls['financialYear'].disable();
    this.adhocSubscriptionForm.controls['payrollType'].disable();
    this.adhocSubscriptionForm.controls['payMonth'].disable();
  }

  // on clicking change year type button
  onChangeYearType() {
    this.adhocSubscriptionForm.controls['payrollType'].enable();
  }
  // on clicking change Payroll button
  onPayrollType(eventVal) {
    if (eventVal === '2') {
      this.adhocSubscriptionForm.controls['financialYear'].enable();
      this.adhocSubscriptionForm.controls['payMonth'].enable();
    } else {
      this.adhocSubscriptionForm.controls['financialYear'].disable();
      this.adhocSubscriptionForm.controls['payMonth'].disable();
      this.adhocSubscriptionForm.controls['financialYear'].setValue('2');
      this.adhocSubscriptionForm.controls['payMonth'].setValue('1');
    }
  }
  // opens pop up
  onSubmit() {

    const dialogRef = this.dialog.open(SubmitDialogComponent, {
      width: '250px',
      height: 'auto',
      data: ''
    }
    );
    dialogRef.afterClosed().subscribe(result => { });

  }
  // shows table data only when search button is clicked
  search() {
    this.isSearch = true;
    this.adhocSubscriptionDataSource = new MatTableDataSource<AdhocSubscription>(this.adhocSubscriptionData);
    this.displayedRows = this.adhocSubscriptionDataSourceColumns;
  }

  // filters from date
  dateFilterFrom = (d: Date) => {
    const date = new Date(d);
    // console.log(date.getMonth());
    if (date.getMonth() === 0 || date.getMonth() === 2 || date.getMonth() === 4 || date.getMonth() === 6
      || date.getMonth() === 7 || date.getMonth() === 9 || date.getMonth() === 11) {
      return [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31].indexOf(+date.getDate()) === -1;
    } else if (date.getMonth() === 3 || date.getMonth() === 5 || date.getMonth() === 8 || date.getMonth() === 10) {
      return [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30].indexOf(+date.getDate()) === -1;
    } else if (date.getMonth() === 1) {
      return [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25, 26, 27, 28, 29].indexOf(+date.getDate()) === -1;
    }
  }

  // filters to date
  dateFilterTo = (d: Date) => {
    const date = new Date(d);
    if (date.getMonth() === 0 || date.getMonth() === 2 || date.getMonth() === 4 || date.getMonth() === 6
      || date.getMonth() === 7 || date.getMonth() === 9 || date.getMonth() === 11) {
      return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30].indexOf(+date.getDate()) === -1;
    } else if (date.getMonth() === 3 || date.getMonth() === 5 || date.getMonth() === 8 || date.getMonth() === 10) {
      return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25, 26, 27, 28, 29].indexOf(+date.getDate()) === -1;
    } else if (date.getMonth() === 1) {
      return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25, 26, 27, 28].indexOf(+date.getDate()) === -1;
    }

  }

  // On click of Calculate
  onCalculate() {
    if (this.adhocSubscriptionForm.valid) {
      if (this.adhocSubscriptionForm.controls.componentCalculation.value !== undefined
        && this.adhocSubscriptionForm.controls.componentCalculation.value === '1') {
        const amount = this.adhocSubscriptionForm.controls.amount.value;
        const fromDate = this.adhocSubscriptionForm.controls.fromDate.value;
        const toDate = this.adhocSubscriptionForm.controls.toDate.value;
        this.adhocSubscriptionDataSourceColumns = [
          'srno',
          'employeeNo',
          'employeeName',
          'employeeClass',
          'designation',
          'basicSalary',
          'adhocType',
          'adhocName',
          'amt',
          'fromDate',
          'toDate',
        ];
        this.displayedRows = this.adhocSubscriptionDataSourceColumns;
        this.adhocSubscriptionDataSource.data.forEach(item => {
          item.amt = parseFloat(amount).toFixed(2);
          item.fromDate = fromDate;
          item.toDate = toDate;
        });
        this.adhocSubscriptionDataSource.data = this.adhocSubscriptionDataSource.data;
      } else if (this.adhocSubscriptionForm.controls.componentCalculation.value !== undefined
        && this.adhocSubscriptionForm.controls.componentCalculation.value === '2') {

        const percentage = this.adhocSubscriptionForm.controls.percentage.value;
        const fromDate = this.adhocSubscriptionForm.controls.fromDate.value;
        const toDate = this.adhocSubscriptionForm.controls.toDate.value;
        if (this.adhocSubscriptionForm.controls.calculateOn.value === '2') {
          this.adhocSubscriptionDataSourceColumns = [
            'srno',
            'employeeNo',
            'employeeName',
            'employeeClass',
            'designation',
            'grossSalary',
            'adhocType',
            'adhocName',
            'per',
            'amt',
            'fromDate',
            'toDate',
          ];
          this.adhocSubscriptionDataSource.data.forEach(item => {
            item.amt = '' + (((Number(item.grossSalary) * Number(percentage)) / 100)).toFixed(2);
            item.per = percentage;
            item.fromDate = fromDate;
            item.toDate = toDate;
          });
          this.displayedRows = this.adhocSubscriptionDataSourceColumns;
          this.adhocSubscriptionDataSource.data = this.adhocSubscriptionDataSource.data;
        } else {
          this.adhocSubscriptionDataSourceColumns = [
            'srno',
            'employeeNo',
            'employeeName',
            'employeeClass',
            'designation',
            'basicSalary',
            'adhocType',
            'adhocName',
            'per',
            'amt',
            'fromDate',
            'toDate',
          ];
          this.adhocSubscriptionDataSource.data.forEach(item => {
            item.amt = '' + (((Number(item.basicSalary) * Number(percentage)) / 100)).toFixed(2);
            item.per = percentage;
            item.fromDate = fromDate;
            item.toDate = toDate;
          });
          this.displayedRows = this.adhocSubscriptionDataSourceColumns;
          this.adhocSubscriptionDataSource.data = this.adhocSubscriptionDataSource.data;
        }

      }

    }
  }

  // Calculate amount on bases of percentage
  onPer(element) {
    if (element.per) {
      if (this.adhocSubscriptionForm.controls.componentCalculation.value !== undefined
        && this.adhocSubscriptionForm.controls.componentCalculation.value === '2') {
        if (this.adhocSubscriptionForm.controls.calculateOn.value === '2') {
          element.amt = ((Number(element.grossSalary) * Number(element.per)) / 100).toFixed(2);
        } else {
          element.amt = ((Number(element.basicSalary) * Number(element.per)) / 100).toFixed(2);
        }
      }
    }
  }
  // Calculate percentage on bases of percentage
  onAmt(element) {
    if (element.amt) {
      if (this.adhocSubscriptionForm.controls.componentCalculation.value !== undefined
        && this.adhocSubscriptionForm.controls.componentCalculation.value === '2') {
        if (this.adhocSubscriptionForm.controls.calculateOn.value === '2') {
          element.per = ((Number(element.amt) * 100) / (Number(element.basicSalary))).toFixed(2);

        } else {
          element.per = ((Number(element.amt) * 100) / (Number(element.basicSalary))).toFixed(2);

        }
      }
      element.per = ((Number(element.amt) * 100) / (Number(element.basicSalary))).toFixed(2);
    }
  }
}
