import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { CommonDirective } from 'src/app/common/directive/validation.directive';

import { DataService } from './../../common/data.service';
import { CommonListing } from './../../model/common-listing';
import { PayDetails } from './../../model/payroll';


@Component({
  selector: 'app-pay-period',
  templateUrl: './pay-period.component.html',
  styleUrls: ['./pay-period.component.css']
})
export class PayPeriodComponent implements OnInit {

  payPeriodForm: FormGroup;
  finYearCtrl: FormControl = new FormControl();
  payrollTypeCtrl: FormControl = new FormControl();
  payMonthCtrl: FormControl = new FormControl();
  categoryWiseProcessingCtrl: FormControl = new FormControl();
  payRollType = 'Regular';
  isCreate = false;

  finYearList: CommonListing[] = [
    { value: '1', viewValue: '2019-2020' },
    { value: '2', viewValue: '2020-2021' },
  ];

  categoryWiseProcessingList: CommonListing[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '1', viewValue: 'No' },
  ];

  payRollTypeList: CommonListing[] = [
    { value: '1', viewValue: 'Regular' },
    { value: '2', viewValue: 'Supplementary' },
    { value: '3', viewValue: 'DA-Arrear' },
    { value: '4', viewValue: 'Bonus' },
  ];

  monthList: CommonListing[] = [
    { value: '4', viewValue: 'April' },
    { value: '5', viewValue: 'May' },
    { value: '6', viewValue: 'June' },
    { value: '7', viewValue: 'July' },
    { value: '8', viewValue: 'August' },
    { value: '9', viewValue: 'September' },
    { value: '10', viewValue: 'October' },
    { value: '11', viewValue: 'November' },
    { value: '12', viewValue: 'December' },
    { value: '1', viewValue: 'January' },
    { value: '2', viewValue: 'February' },
    { value: '3', viewValue: 'March' },
  ];

  payMonthList: CommonListing[] = this.monthList;

  // table data
  Element_Data: PayDetails[] = [
    {
      payMonthYear: 'Apr-20',
      payYear: '2020',
      payMonth: 'April',
      type: 'Regular',
      payPeriodStatus: 'Inactive',
      status: 'Closed',
      categoryWiseProcessing: '1',
      isCategory: false,
      isProcess: false,
      isOpen: false,
      isViewDetail: true,
    },
    {
      payMonthYear: 'May-20',
      payYear: '2020',
      payMonth: 'May',
      type: 'Regular',
      payPeriodStatus: 'Inactive',
      status: 'Closed',
      categoryWiseProcessing: '1',
      isCategory: false,
      isProcess: false,
      isOpen: false,
      isViewDetail: true,
    },
    {
      payMonthYear: 'Jun-20',
      payYear: '2020',
      payMonth: 'June',
      type: 'Regular',
      payPeriodStatus: 'Inactive',
      status: 'Closed',
      categoryWiseProcessing: '1',
      isCategory: false,
      isProcess: false,
      isOpen: false,
      isViewDetail: true,
    },
    {
      payMonthYear: 'Jul-20',
      payYear: '2020',
      payMonth: 'July',
      type: 'Regular',
      payPeriodStatus: 'Inactive',
      status: 'Closed',
      categoryWiseProcessing: '1',
      isCategory: false,
      isProcess: false,
      isOpen: false,
      isViewDetail: true,
    },
    {
      payMonthYear: 'Aug-20',
      payYear: '2020',
      payMonth: 'August',
      type: 'Regular',
      payPeriodStatus: 'Inactive',
      status: 'Closed',
      categoryWiseProcessing: '1',
      isCategory: false,
      isProcess: false,
      isOpen: false,
      isViewDetail: true,
    },
    {
      payMonthYear: 'Sep-20',
      payYear: '2020',
      payMonth: 'September',
      type: 'Regular',
      payPeriodStatus: 'Inactive',
      status: 'Closed',
      categoryWiseProcessing: '1',
      isCategory: false,
      isProcess: false,
      isOpen: false,
      isViewDetail: true,
    },
    {
      payMonthYear: 'Oct-20',
      payYear: '2020',
      payMonth: 'October',
      type: 'Regular',
      payPeriodStatus: 'Inactive',
      status: 'Closed',
      categoryWiseProcessing: '1',
      isCategory: false,
      isProcess: false,
      isOpen: false,
      isViewDetail: true,
    },
    {
      payMonthYear: 'Nov-20',
      payYear: '2020',
      payMonth: 'November',
      type: 'Regular',
      payPeriodStatus: 'Inactive',
      status: 'Closed',
      categoryWiseProcessing: '1',
      isCategory: false,
      isProcess: false,
      isOpen: false,
      isViewDetail: true,
    },
    {
      payMonthYear: 'Dec-20',
      payYear: '2020',
      payMonth: 'December',
      type: 'Regular',
      payPeriodStatus: 'Inactive',
      status: 'Closed',
      categoryWiseProcessing: '1',
      isCategory: false,
      isProcess: false,
      isOpen: false,
      isViewDetail: true,
    },
    {
      payMonthYear: 'Jan-21',
      payYear: '2021',
      payMonth: 'January',
      type: 'Regular',
      payPeriodStatus: 'Active',
      status: 'Initiated',
      categoryWiseProcessing: '1',
      isCategory: true,
      isProcess: true,
      isOpen: true,
      isViewDetail: false,
    },
    {
      payMonthYear: 'Feb-21',
      payYear: '2021',
      payMonth: 'February',
      type: 'Regular',
      payPeriodStatus: 'Inactive',
      status: 'Closed',
      categoryWiseProcessing: '1',
      isCategory: true,
      isProcess: false,
      isOpen: false,
      isViewDetail: false,
    },
    {
      payMonthYear: 'Mar-21',
      payYear: '2021',
      payMonth: 'March',
      type: 'Regular',
      payPeriodStatus: 'Inactive',
      status: 'Closed',
      categoryWiseProcessing: '1',
      isCategory: true,
      isProcess: false,
      isOpen: false,
      isViewDetail: false,
    },
  ];

  dataSource = new MatTableDataSource<any>(this.Element_Data);
  displayedColumns: any[] = [
    'payMonthYear',
    'payYear',
    'payMonth',
    'type',
    'payPeriodStatus',
    'status',
    'action',
  ];

  displayedRows: any[] = this.displayedColumns;
  directiveObj = new CommonDirective(this.router);
  constructor(private fb: FormBuilder, private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.payPeriodForm = this.fb.group({
      ddoNo: [{ value: '4265', disabled: true }],
      cardexNo: [{ value: '5622', disabled: true }],
      officeName: [{ value: 'Collector Office, Ahmedabad', disabled: true }],
      district: [{ value: 'Ahmedabad', disabled: true }],

      finYear: [{ value: '2', disabled: true }],
      payrollType: [{ value: '1', disabled: true }],
      payMonth: [{ value: '1', disabled: true }],
    });
  }

  // On Change of payrolType
  onPayrollType(event) {
    this.payRollType = this.directiveObj.getViewValue(this.payRollTypeList, event.value);


    switch (event.value) {

      case '1':
        this.isCreate = false;
        this.dataSource = new MatTableDataSource<any>(this.Element_Data);
        this.displayedRows = this.displayedColumns;
        this.dataSource.data.forEach(item => {
          item.type = this.payRollType;
        });
        this.dataSource.data = this.dataSource.data;
        this.payMonthList = this.monthList;
        this.payPeriodForm.controls['finYear'].setValue('2');
        break;

      case '2': this.isCreate = true;
        this.dataSource = new MatTableDataSource<any>([{ noData: 'No Data Available' }]);
        this.displayedRows = ['noData'];
        this.payMonthList = this.monthList;
        this.payPeriodForm.controls['finYear'].setValue('2');
        break;

      case '3': this.isCreate = true;
        this.dataSource = new MatTableDataSource<any>([{ noData: 'No Data Available' }]);
        this.displayedRows = ['noData'];
        this.payMonthList = [{ value: '1', viewValue: 'September\'2020 - December\'2020' }];
        this.payPeriodForm.controls['finYear'].setValue('2');
        break;
      case '4': this.isCreate = false;
        this.dataSource = new MatTableDataSource<any>([
          {
            payMonthYear: 'Jan-21',
            payYear: '2021',
            payMonth: 'January',
            type: 'Regular',
            payPeriodStatus: 'Active',
            status: 'Open',
            categoryWiseProcessing: '1',
            isCategory: true,
            isProcess: true,
            isOpen: true,
            isViewDetail: false,
          }
        ]);
        this.displayedRows = this.displayedColumns;
        this.payMonthList = this.monthList;
        this.payPeriodForm.controls['finYear'].setValue('2');
        break;

      default: this.isCreate = false;
        this.dataSource = new MatTableDataSource<any>(this.Element_Data);
        this.displayedRows = this.displayedColumns;
        this.payMonthList = this.monthList;
        this.payPeriodForm.controls['finYear'].setValue('2');
        break;
    }

  }

  // On click of create button
  onCreate() {
    this.isCreate = false;
    this.dataSource = new MatTableDataSource<any>([
      {
        payMonthYear: 'Jan-21',
        payYear: '2021',
        payMonth: 'January',
        type: this.payRollType,
        payPeriodStatus: 'Inactive',
        status: 'Closed',
        isCategory: false,
        categoryWiseProcessing: '1',
        isProcess: false,
        isOpen: false,
        isViewDetail: true,
      },
      {
        payMonthYear: 'Jan-21',
        payYear: '2021',
        payMonth: 'January',
        type: this.payRollType,
        payPeriodStatus: 'Active',
        status: 'Open',
        isCategory: true,
        categoryWiseProcessing: '1',
        isProcess: true,
        isOpen: true,
        isViewDetail: false,
      },
    ]);
    this.displayedRows = this.displayedColumns;
  }

  // go to employee details
  onOpen(value) {
    if (value === 'Open' || value === 'isViewDetail') {
      this.dataService.setOption('payRolType', this.dataSource.data[this.dataSource.data.length - 1].type);
      this.router.navigate(['./payroll/regular-employee-details']);
    } else if (value === 'Process') {
      this.dataService.setOption('payRolType', this.dataSource.data[this.dataSource.data.length - 1].type);
      this.router.navigate(['./payroll/payroll-process']);
    }
  }

  // on clicking change year type button
  onChangeYearType() {
    this.payPeriodForm.controls['finYear'].enable();
    this.payPeriodForm.controls['payMonth'].enable();
    this.payPeriodForm.controls['payrollType'].enable();
  }

  // on changing year or month
  onPayYearChange() {
    const value = this.payPeriodForm.controls['finYear'].value;
    if (this.payRollType === 'DA-Arrear') {
      if (value === '1') {
        this.dataSource.data[0].payMonth = 'January';
        this.dataSource.data[0].payYear = '2020';
        this.dataSource.data[0].payMonthYear = 'Jan-20';
        this.dataSource.data[1].payMonth = 'January';
        this.dataSource.data[1].payYear = '2020';
        this.dataSource.data[1].payMonthYear = 'Jan-20';
        this.payMonthList = [{ value: '1', viewValue: 'September\'2019 - December\'2019' }];

      } else if (value === '2') {
        this.dataSource.data[0].payMonth = 'January';
        this.dataSource.data[0].payYear = '2021';
        this.dataSource.data[0].payMonthYear = 'Jan-21';
        this.dataSource.data[1].payMonth = 'January';
        this.dataSource.data[1].payYear = '2021';
        this.dataSource.data[1].payMonthYear = 'Jan-21';
        this.payMonthList = [{ value: '1', viewValue: 'September\'2020 - December\'2020' }];
      }

    } else if (this.payRollType === 'Supplementary') {
      if (value === '1') {
        this.dataSource.data[0].payMonth = 'January';
        this.dataSource.data[0].payYear = '2020';
        this.dataSource.data[0].payMonthYear = 'Jan-20';
        this.dataSource.data[1].payMonth = 'January';
        this.dataSource.data[1].payYear = '2020';
        this.dataSource.data[1].payMonthYear = 'Jan-20';
      } else if (value === '2') {
        this.dataSource.data[0].payMonth = 'January';
        this.dataSource.data[0].payYear = '2021';
        this.dataSource.data[0].payMonthYear = 'Jan-21';
        this.dataSource.data[1].payMonth = 'January';
        this.dataSource.data[1].payYear = '2021';
        this.dataSource.data[1].payMonthYear = 'Jan-21';
      }

    } else if (this.payRollType === 'Regular') {

      this.dataSource.data.forEach(item => {

        item.payYear = this.directiveObj.getViewValue(this.finYearList, this.payPeriodForm.controls.finYear.value).slice(0, 4);

        if (
          this.directiveObj.getValue(this.monthList, item.payMonth) > 0
          &&
          this.directiveObj.getValue(this.monthList, item.payMonth) < 4
        ) {
          item.payYear = '' + (Number(item.payYear) + 1);
        }
        item.payMonthYear = item.payMonth.slice(0, 3) + '-' + (item.payYear.slice(2, 4));
      });

    } else if (this.payRollType === 'Bonus') {
      this.dataSource.data[0].payMonth = this.directiveObj.getViewValue(this.payMonthList, this.payPeriodForm.controls.payMonth.value);
      this.dataSource.data[0].payMonth = this.directiveObj.getViewValue(this.payMonthList, this.payPeriodForm.controls.payMonth.value);
      // tslint:disable-next-line: max-line-length
      this.dataSource.data[0].payYear = this.directiveObj.getViewValue(this.finYearList, this.payPeriodForm.controls.finYear.value).slice(0, 4);

      if (this.payPeriodForm.controls.payMonth.value > 0 && this.payPeriodForm.controls.payMonth.value < 4) {
        this.dataSource.data[0].payYear = '' + (Number(this.dataSource.data[0].payYear) + 1);
      }
      // tslint:disable-next-line: max-line-length
      this.dataSource.data[0].payMonthYear = this.dataSource.data[0].payMonth.slice(0, 3) + '-' + (this.dataSource.data[0].payYear.slice(2, 4));
    }

  }


}
