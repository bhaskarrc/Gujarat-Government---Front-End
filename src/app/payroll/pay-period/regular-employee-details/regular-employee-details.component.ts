import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatOption, MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/common/data.service';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { CommonListing } from 'src/app/model/common-listing';
import { PayrollEmployee } from 'src/app/model/payroll';

import { payrollMessage } from './../../../common/error-message/common-message.constants';
import { SubmitDialogComponent } from './../../submit-dialog/submit-dialog.component';

@Component({
  selector: 'app-regular-employee-details',
  templateUrl: './regular-employee-details.component.html',
  styleUrls: ['./regular-employee-details.component.css']
})
export class RegularEmployeeDetailsComponent implements OnInit {

  regularEmployeeDetails: FormGroup;
  payMonthCtrl: FormControl = new FormControl();
  finYearCtrl: FormControl = new FormControl();
  payYearCtrl: FormControl = new FormControl();
  processForCtrl: FormControl = new FormControl();
  payrollTypeCtrl: FormControl = new FormControl();
  employeeClassCtrl: FormControl = new FormControl();
  designationCtrl: FormControl = new FormControl();
  payrolStatusCtrl: FormControl = new FormControl();
  includeStatusCtrl: FormControl = new FormControl();
  classWiseProcessingCtrl: FormControl = new FormControl();
  employeeCategoryCtrl: FormControl = new FormControl();
  districtCtrl: FormControl = new FormControl();
  subOfficeCtrl: FormControl = new FormControl();
  subscribeParams: Subscription;
  errorMessages;
  todayDate = new Date();
  payRolType = 'Regular';
  isVerified = false;
  isSubmit = false;
  data;
  selection = new SelectionModel<any>(true, []);


  districtList: CommonListing[] = [
    { value: '1', viewValue: 'Ahmedabad' },
    { value: '2', viewValue: 'Vadodara' }
  ];

  employeeCategory_list: CommonListing[] = [
    { value: '1', viewValue: 'All' },
    { value: '2', viewValue: 'GO' },
    { value: '3', viewValue: 'NGO' },
    { value: '4', viewValue: 'AIS' },
    { value: '5', viewValue: 'Fix Pay' }
  ];

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
    { value: '9', viewValue: 'October' },
    { value: '9', viewValue: 'November' },
    { value: '9', viewValue: 'Decmber' }
  ];

  payYearList: CommonListing[] = [
    { value: '2019', viewValue: '2019' },
    { value: '2020', viewValue: '2020' },
    { value: '2021', viewValue: '2021' },
    { value: '2022', viewValue: '2022' },
    { value: '2023', viewValue: '2023' },
    { value: '2024', viewValue: '2024' },
  ];

  finYearList: CommonListing[] = [
    { value: '1', viewValue: '2020-2021' },
  ];

  classWiseProcessingList: CommonListing[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
  ];

  payRollType: CommonListing[] = [
    { value: '1', viewValue: 'REGULAR' },
  ];

  processForList: CommonListing[];

  employeeClassList: CommonListing[] = [
    { value: '1', viewValue: 'Class I' },
    { value: '2', viewValue: 'Class II' },
    { value: '3', viewValue: 'Class III' },
    { value: '4', viewValue: 'Class IV' }
  ];

  designationList: CommonListing[] = [
    { value: '1', viewValue: 'GRD1' },
    { value: '2', viewValue: '2nd Additional Senior Civil Judge' },
    { value: '3', viewValue: 'A.D.C. To H.E. Governor ' },
    { value: '4', viewValue: 'Account Assistant' },
    { value: '5', viewValue: 'Account Clerk' },
    { value: '6', viewValue: 'Account Controller' },
    { value: '7', viewValue: 'Account Cum - Administrator Officer' },
    { value: '8', viewValue: 'Account Officer-Class I' },
    { value: '9', viewValue: 'Account Officer-Class II' },
    { value: '10', viewValue: 'Accountant' },
  ];

  payrolStatusList: CommonListing[] = [
    { value: '1', viewValue: 'All' },
    { value: '2', viewValue: 'Payroll Created' },
    { value: '3', viewValue: 'Payroll Initiated' },
    { value: '4', viewValue: 'Payroll Processed' },
    { value: '5', viewValue: 'Payroll Terminated' },
  ];

  includeStatusList: CommonListing[] = [
    { value: '1', viewValue: 'All' },
    { value: '2', viewValue: 'Include' },
    { value: '3', viewValue: 'Exclude' },
  ];

  subOfficeList: CommonListing[] = [
    { value: '1', viewValue: 'Office 1' },
    { value: '2', viewValue: 'Office 2' },
    { value: '3', viewValue: 'Office 3' },
  ];


  // table data
  Element_Data: PayrollEmployee[] = [
    {
      srNo: '1',
      employeeNo: '1000000001',
      employeeName: 'Mr. Padmanaabh Singh',
      employeeOfficeName: 'Collector Office, Ahmedabad',
      employeeClass: 'Class IV',
      designation: 'GRD1',
      payLevel: '9', employeeCategory: 'GO',
      cellId: '17',
      sevenThPayCpcBasic: '85100',
      payBand: '(15600-39100)PB-3',
      payBandValue: '25520',
      gradePay: '6600',
      sixthBasicPay: '18920',
      employeeStatus: 'Substanative',
      dateOfJoining: '18-Apr-2000',
      dateOfRetirement: '20-Mar-2028',
      include: '',
      fixBasicPay: '16224',
      class: '',
    },
    {
      srNo: '2',
      employeeNo: '1000000002',
      employeeName: 'Mr. Harsh Kumar',
      employeeOfficeName: 'Collector Office, Ahmedabad',
      employeeClass: 'Class III',
      designation: '2nd Additional Senior Civil Judge',
      payLevel: '9', employeeCategory: 'GO',
      cellId: '17',
      sevenThPayCpcBasic: '85100',
      payBand: '(15600-39100)PB-3',
      payBandValue: '23730',
      gradePay: '5400',
      sixthBasicPay: '18330',
      employeeStatus: 'Substanative',
      dateOfJoining: '22-Dec-2011',
      dateOfRetirement: '30-Apr-2040',
      include: '',
      fixBasicPay: '19950',
      class: 'error',
    },
    {
      srNo: '3',
      employeeNo: '1000000003',
      employeeName: 'Mr. Manoj Singh',
      employeeOfficeName: 'Collector Office, Ahmedabad',
      employeeClass: 'Class III',
      designation: 'Account Assistant',
      payLevel: '9', employeeCategory: 'NGO',
      cellId: '17',
      sevenThPayCpcBasic: '85100',
      payBand: '(37400-67000)PB-3',
      payBandValue: '38460',
      gradePay: '8700',
      sixthBasicPay: '29760',
      employeeStatus: 'Officiating',
      dateOfJoining: '01-Feb-2016',
      dateOfRetirement: '31-Jan-2047',
      include: '',
      fixBasicPay: '31340',
      class: '',
    },
    {
      srNo: '4',
      employeeNo: '1000000004',
      employeeName: 'Mr. Padmanaabh Singh',
      employeeOfficeName: 'Collector Office, Ahmedabad',
      employeeClass: 'Class IV',
      designation: 'GRD1',
      payLevel: '9', employeeCategory: 'NGO',
      cellId: '17',
      sevenThPayCpcBasic: '85100',
      payBand: '(15600-39100)PB-3',
      payBandValue: '25520',
      gradePay: '6600',
      sixthBasicPay: '18920',
      employeeStatus: 'Substanative',
      dateOfJoining: '18-Apr-2000',
      dateOfRetirement: '20-Mar-2028',
      include: '',
      fixBasicPay: '16224',
      class: '',
    },
    {
      srNo: '5',
      employeeNo: '1000000005',
      employeeName: 'Mr. Harsh Kumar',
      employeeOfficeName: 'Collector Office, Ahmedabad',
      employeeClass: 'Class III',
      designation: '2nd Additional Senior Civil Judge',
      payLevel: '9', employeeCategory: 'Fix Pay',
      cellId: '17',
      sevenThPayCpcBasic: '85100',
      payBand: '(15600-39100)PB-3',
      payBandValue: '23730',
      gradePay: '5400',
      sixthBasicPay: '18330',
      employeeStatus: 'Substanative',
      dateOfJoining: '22-Dec-2011',
      dateOfRetirement: '30-Apr-2040',
      include: '',
      fixBasicPay: '19950',
      class: '',
    },
    {
      srNo: '6',
      employeeNo: '1000000006',
      employeeName: 'Mr. Manoj Singh',
      employeeOfficeName: 'Collector Office, Ahmedabad',
      employeeClass: 'Class III',
      designation: 'Account Assistant',
      payLevel: '9', employeeCategory: 'AIS',
      cellId: '17',
      sevenThPayCpcBasic: '85100',
      payBand: '(37400-67000)PB-3',
      payBandValue: '38460',
      gradePay: '8700',
      sixthBasicPay: '29760',
      employeeStatus: 'Officiating',
      dateOfJoining: '01-Feb-2016',
      dateOfRetirement: '31-Jan-2047',
      include: '',
      fixBasicPay: '31340',
      class: '',
    },
    {
      srNo: '7',
      employeeNo: '1000000007',
      employeeName: 'Mr. Padmanaabh Singh',
      employeeOfficeName: 'Collector Office, Ahmedabad',
      employeeClass: 'Class IV',
      designation: 'GRD1',
      payLevel: '9', employeeCategory: 'AIS',
      cellId: '17',
      sevenThPayCpcBasic: '85100',
      payBand: '(15600-39100)PB-3',
      payBandValue: '25520',
      gradePay: '6600',
      sixthBasicPay: '18920',
      employeeStatus: 'Substanative',
      dateOfJoining: '18-Apr-2000',
      dateOfRetirement: '20-Mar-2028',
      include: '',
      fixBasicPay: '16224',
      class: '',
    },
    {
      srNo: '8',
      employeeNo: '1000000008',
      employeeName: 'Mr. Harsh Kumar',
      employeeOfficeName: 'Collector Office, Ahmedabad',
      employeeClass: 'Class III',
      designation: '2nd Additional Senior Civil Judge',
      payLevel: '9', employeeCategory: 'Fix Pay',
      cellId: '17',
      sevenThPayCpcBasic: '85100',
      payBand: '(15600-39100)PB-3',
      payBandValue: '23730',
      gradePay: '5400',
      sixthBasicPay: '18330',
      employeeStatus: 'Substanative',
      dateOfJoining: '22-Dec-2011',
      dateOfRetirement: '30-Apr-2040',
      include: '',
      fixBasicPay: '19950',
      class: '',
    },
    {
      srNo: '9',
      employeeNo: '1000000009',
      employeeName: 'Mr. Manoj Singh',
      employeeOfficeName: 'Collector Office, Ahmedabad',
      employeeClass: 'Class III',
      designation: 'Account Assistant',
      payLevel: '9', employeeCategory: 'GO',
      cellId: '17',
      sevenThPayCpcBasic: '85100',
      payBand: '(37400-67000)PB-3',
      payBandValue: '38460',
      gradePay: '8700',
      sixthBasicPay: '29760',
      employeeStatus: 'Officiating',
      dateOfJoining: '01-Feb-2016',
      dateOfRetirement: '31-Jan-2047',
      include: '',
      fixBasicPay: '31340',
      class: '',
    },
    {
      srNo: '10',
      employeeNo: '1000000010',
      employeeName: 'Mr. Padmanaabh Singh',
      employeeOfficeName: 'Collector Office, Ahmedabad',
      employeeClass: 'Class IV',
      designation: 'GRD1',
      payLevel: '9', employeeCategory: 'Fix Pay',
      cellId: '17',
      sevenThPayCpcBasic: '85100',
      payBand: '(15600-39100)PB-3',
      payBandValue: '25520',
      gradePay: '6600',
      sixthBasicPay: '18920',
      employeeStatus: 'Substanative',
      dateOfJoining: '18-Apr-2000',
      dateOfRetirement: '20-Mar-2028',
      include: '',
      fixBasicPay: '16224',
      class: '',
    },
    {
      srNo: '11',
      employeeNo: '1000000011',
      employeeName: 'Mr. Harsh Kumar',
      employeeOfficeName: 'Collector Office, Ahmedabad',
      employeeClass: 'Class III',
      designation: '2nd Additional Senior Civil Judge',
      payLevel: '9', employeeCategory: 'NGO',
      cellId: '17',
      sevenThPayCpcBasic: '85100',
      payBand: '(15600-39100)PB-3',
      payBandValue: '23730',
      gradePay: '5400',
      sixthBasicPay: '18330',
      employeeStatus: 'Substanative',
      dateOfJoining: '22-Dec-2011',
      dateOfRetirement: '30-Apr-2040',
      include: '',
      fixBasicPay: '19950',
      class: '',
    },
    {
      srNo: '12',
      employeeNo: '1000000012',
      employeeName: 'Mr. Manoj Singh',
      employeeOfficeName: 'Collector Office, Ahmedabad',
      employeeClass: 'Class III',
      designation: 'Account Assistant',
      payLevel: '9', employeeCategory: 'GO',
      cellId: '17',
      sevenThPayCpcBasic: '85100',
      payBand: '(37400-67000)PB-3',
      payBandValue: '38460',
      gradePay: '8700',
      sixthBasicPay: '29760',
      employeeStatus: 'Officiating',
      dateOfJoining: '01-Feb-2016',
      dateOfRetirement: '31-Jan-2047',
      include: '',
      fixBasicPay: '31340',
      class: '',
    },
    {
      srNo: '13',
      employeeNo: '1000000013',
      employeeName: 'Mr. Padmanaabh Singh',
      employeeOfficeName: 'Collector Office, Ahmedabad',
      employeeClass: 'Class IV',
      designation: 'GRD1',
      payLevel: '9', employeeCategory: 'Fix Pay',
      cellId: '17',
      sevenThPayCpcBasic: '85100',
      payBand: '(15600-39100)PB-3',
      payBandValue: '25520',
      gradePay: '6600',
      sixthBasicPay: '18920',
      employeeStatus: 'Substanative',
      dateOfJoining: '18-Apr-2000',
      dateOfRetirement: '20-Mar-2028',
      include: '',
      fixBasicPay: '16224',
      class: '',
    },
    {
      srNo: '14',
      employeeNo: '1000000014',
      employeeName: 'Mr. Harsh Kumar',
      employeeOfficeName: 'Collector Office, Ahmedabad',
      employeeClass: 'Class III',
      designation: '2nd Additional Senior Civil Judge',
      payLevel: '9', employeeCategory: 'NGO',
      cellId: '17',
      sevenThPayCpcBasic: '85100',
      payBand: '(15600-39100)PB-3',
      payBandValue: '23730',
      gradePay: '5400',
      sixthBasicPay: '18330',
      employeeStatus: 'Substanative',
      dateOfJoining: '22-Dec-2011',
      dateOfRetirement: '30-Apr-2040',
      include: '',
      fixBasicPay: '19950',
      class: '',
    },
    {
      srNo: '15',
      employeeNo: '1000000015',
      employeeName: 'Mr. Manoj Singh',
      employeeOfficeName: 'Collector Office, Ahmedabad',
      employeeClass: 'Class III',
      designation: 'Account Assistant',
      payLevel: '9', employeeCategory: 'Fix Pay',
      cellId: '17',
      sevenThPayCpcBasic: '85100',
      payBand: '(37400-67000)PB-3',
      payBandValue: '38460',
      gradePay: '8700',
      sixthBasicPay: '29760',
      employeeStatus: 'Officiating',
      dateOfJoining: '01-Feb-2016',
      dateOfRetirement: '31-Jan-2047',
      include: '',
      fixBasicPay: '31340',
      class: '',
    },
    {
      srNo: '16',
      employeeNo: '1000000016',
      employeeName: 'Mr. Padmanaabh Singh',
      employeeOfficeName: 'Collector Office, Ahmedabad',
      employeeClass: 'Class IV',
      designation: 'GRD1',
      payLevel: '9', employeeCategory: 'AIS',
      cellId: '17',
      sevenThPayCpcBasic: '85100',
      payBand: '(15600-39100)PB-3',
      payBandValue: '25520',
      gradePay: '6600',
      sixthBasicPay: '18920',
      employeeStatus: 'Substanative',
      dateOfJoining: '18-Apr-2000',
      dateOfRetirement: '20-Mar-2028',
      include: '',
      fixBasicPay: '16224',
      class: '',
    },
    {
      srNo: '17',
      employeeNo: '1000000017',
      employeeName: 'Mr. Harsh Kumar',
      employeeOfficeName: 'Collector Office, Ahmedabad',
      employeeClass: 'Class III',
      designation: '2nd Additional Senior Civil Judge',
      payLevel: '9', employeeCategory: 'AIS',
      cellId: '17',
      sevenThPayCpcBasic: '85100',
      payBand: '(15600-39100)PB-3',
      payBandValue: '23730',
      gradePay: '5400',
      sixthBasicPay: '18330',
      employeeStatus: 'Substanative',
      dateOfJoining: '22-Dec-2011',
      dateOfRetirement: '30-Apr-2040',
      include: '',
      fixBasicPay: '19950',
      class: '',
    },
    {
      srNo: '18',
      employeeNo: '1000000018',
      employeeName: 'Mr. Manoj Singh',
      employeeOfficeName: 'Collector Office, Ahmedabad',
      employeeClass: 'Class III',
      designation: 'Account Assistant',
      payLevel: '9', employeeCategory: 'NGO',
      cellId: '17',
      sevenThPayCpcBasic: '85100',
      payBand: '(37400-67000)PB-3',
      payBandValue: '38460',
      gradePay: '8700',
      sixthBasicPay: '29760',
      employeeStatus: 'Officiating',
      dateOfJoining: '01-Feb-2016',
      dateOfRetirement: '31-Jan-2047',
      include: '',
      fixBasicPay: '31340',
      class: '',
    },
    {
      srNo: '19',
      employeeNo: '1000000019',
      employeeName: 'Mr. Padmanaabh Singh',
      employeeOfficeName: 'Collector Office, Ahmedabad',
      employeeClass: 'Class IV',
      designation: 'GRD1',
      payLevel: '9', employeeCategory: 'Fix Pay',
      cellId: '17',
      sevenThPayCpcBasic: '85100',
      payBand: '(15600-39100)PB-3',
      payBandValue: '25520',
      gradePay: '6600',
      sixthBasicPay: '18920',
      employeeStatus: 'Substanative',
      dateOfJoining: '18-Apr-2000',
      dateOfRetirement: '20-Mar-2028',
      include: '',
      fixBasicPay: '16224',
      class: '',
    },
    {
      srNo: '20',
      employeeNo: '1000000020',
      employeeName: 'Mr. Harsh Kumar',
      employeeOfficeName: 'Collector Office, Ahmedabad',
      employeeClass: 'Class III',
      designation: '2nd Additional Senior Civil Judge',
      payLevel: '9', employeeCategory: 'NGO',
      cellId: '17',
      sevenThPayCpcBasic: '85100',
      payBand: '(15600-39100)PB-3',
      payBandValue: '23730',
      gradePay: '5400',
      sixthBasicPay: '18330',
      employeeStatus: 'Substanative',
      dateOfJoining: '22-Dec-2011',
      dateOfRetirement: '30-Apr-2040',
      include: '',
      fixBasicPay: '19950',
      class: '',
    }
  ];
  Element_Data_Count: any[] = [{
    srno: '1', groupName: 'GO', includeCount: '2', excludeCount: '2', totalCount: '4',
    finalizedCount: '0'
  },
  {
    srno: '2', groupName: 'NGO', includeCount: '0', excludeCount: '6', totalCount: '6',
    finalizedCount: '0'
  },
  {
    srno: '3', groupName: 'AIS', includeCount: '0', excludeCount: '4', totalCount: '4 ',
    finalizedCount: '0'
  },
  {
    srno: '4', groupName: 'Fix Pay', includeCount: '0', excludeCount: '6', totalCount: '6',
    finalizedCount: '0'
  }];
  dataSource = new MatTableDataSource<any>(this.Element_Data);

  displayedColumns: any[] = [
    'srNo',
    'employeeNo',
    'employeeName',
    'employeeOfficeName',
    'employeeCategory',
    'employeeClass',
    'designation',
    'payLevel',
    'cellId',
    'sevenThPayCpcBasic',
    'employeeStatus',
    'dateOfJoining',
    'dateOfRetirement',
    'include',
  ];
  colCount = this.displayedColumns.length;
  directiveObj = new CommonDirective(this.router);
  dataSourceCount = new MatTableDataSource<any>(this.Element_Data_Count);
  displayedColumnsCount: string[] = ['srno', 'groupName', 'includeCount', 'excludeCount', 'totalCount', 'finalizedCount'];
  @ViewChild('datasourcePaginator') datasourcePaginator: MatPaginator;
  @ViewChild('allSelected') private allSelected: MatOption;
  @ViewChild('allSubOfficeSelected') private allSubOfficeSelected: MatOption;

  constructor(private fb: FormBuilder, private router: Router, public dialog: MatDialog, private dataService: DataService) {
    this.data = dataService.getOption();
  }


  ngOnInit() {
    this.dataSource.paginator = this.datasourcePaginator;
    this.errorMessages = payrollMessage;
    this.regularEmployeeDetails = this.fb.group({
      payPeriod: [{ value: 'Jan-21', disabled: true }],
      finYear: [{ value: '2020-2021', disabled: true }],
      payYear: [{ value: '2021', disabled: true }],
      payMonth: [{ value: 'January', disabled: true }],

      ddoNo: [{ value: '4265', disabled: true }],
      cardexNo: [{ value: '5622', disabled: true }],
      officeName: [{ value: 'Collector Office, Ahmedabad', disabled: true }],
      district: [{ value: 'Ahmedabad', disabled: true }],

      payrollType: [{ value: 'Regular', disabled: true }],

      sanctionPost: [{ value: '300', disabled: true }],
      filledPost: [{ value: '250', disabled: true }],
      vacantPost: [{ value: '50', disabled: true }],
      processFor: [{ value: '2', disabled: false }, Validators.required],

      employeeCategory: [{ value: '1', disabled: false }],
      employeeClass: [{ value: '', disabled: false }],
      payrolStatus: [{ value: '1', disabled: false }],
      includeStatus: [{ value: '1', disabled: false }],

      subOffice: [{ value: '', disabled: false }],
      designation: [{ value: '', disabled: false }],
      employeeNo: [{ value: '', disabled: false }],
      employeeName: [{ value: '', disabled: false }],

      verify: [{ value: '', disabled: false }],
    });

    if (this.data['payRolType']) {
      this.payRolType = this.data['payRolType'];
    } else {
      this.payRolType = 'Regular';
    }
    this.regularEmployeeDetails.controls['payrollType'].patchValue([this.payRolType]);

    // If payroll type is da-arrear then process for should not have Fix pay
    if (this.payRolType === 'DA-Arrear') {
      this.processForList = [
        { value: '2', viewValue: '7th Pay Commission' },
        { value: '1', viewValue: '6th Pay Commission' },
      ];
    } else {
      this.processForList = [
        { value: '2', viewValue: '7th Pay Commission' },
        { value: '1', viewValue: '6th Pay Commission' },
        { value: '3', viewValue: 'Fix Pay' }
      ];
    }

    // to include fist and second row by default
    this.dataSource.data.forEach(item => {
      if (item.srNo === '1' || item.srNo === '2') {
        this.selection.select(item);
      }
    });
  }

  // On checking verify checkbox
  onVerify() {
    this.isVerified = !this.isVerified;
  }

  // On Submit
  onSubmit() {
    const dialogRef = this.dialog.open(SubmitDialogComponent, {
      width: '250px',
      height: 'auto',
      data: 'Only included employee salary will be processed irrespective of class and category.'
    }
    );
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'Ok') {
        this.dataSourceCount.data.forEach(item => {
          item.includeCount = 0;
          item.excludeCount = item.totalCount;
        });

        this.dataSource.data.forEach(item => {
          if (this.selection.isSelected(item)) {
            if (item.employeeCategory === 'GO') {
              this.dataSourceCount.data[0].includeCount = '' + (Number(this.dataSourceCount.data[0].includeCount) + 1);
              this.dataSourceCount.data[0].excludeCount = '' + (Number(this.dataSourceCount.data[0].excludeCount) - 1);
            }
            if (item.employeeCategory === 'NGO') {
              this.dataSourceCount.data[1].includeCount = '' + (Number(this.dataSourceCount.data[1].includeCount) + 1);
              this.dataSourceCount.data[1].excludeCount = '' + (Number(this.dataSourceCount.data[1].excludeCount) - 1);
            }
            if (item.employeeCategory === 'AIS') {
              this.dataSourceCount.data[2].includeCount = '' + (Number(this.dataSourceCount.data[2].includeCount) + 1);
              this.dataSourceCount.data[2].excludeCount = '' + (Number(this.dataSourceCount.data[2].excludeCount) - 1);
            }
            if (item.employeeCategory === 'Fix Pay') {
              this.dataSourceCount.data[3].includeCount = '' + (Number(this.dataSourceCount.data[3].includeCount) + 1);
              this.dataSourceCount.data[3].excludeCount = '' + (Number(this.dataSourceCount.data[3].excludeCount) - 1);
            }
          }
        });
        console.log('Dialog closed!');
      }
    });
  }

  // --------- to select all options while selection all in designation-------------
  ddOneSelection(field) {
    if (field === 'subOffice') {
      if (this.allSubOfficeSelected.selected) {
        this.allSubOfficeSelected.deselect();
        return false;
      }
      if (this.regularEmployeeDetails.controls.subOffice.value.length === this.subOfficeList.length) {
        this.allSubOfficeSelected.select();
      }
    }
  }

  ddAllSelection(field) {

    if (field === 'subOffice') {
      if (this.allSubOfficeSelected.selected) {
        this.regularEmployeeDetails.controls.subOffice.patchValue([...this.subOfficeList.map(item => item.value), 0]);
      } else {
        this.regularEmployeeDetails.controls.subOffice.patchValue([]);
      }
    }
  }
  // -------------------------------------------------------------------------------

  // on change of process for table colums changes
  onProcessFor(type) {
    if (type === '1') {
      this.displayedColumns = [
        'srNo',
        'employeeNo',
        'employeeName',
        'employeeOfficeName',
        'employeeCategory',
        'employeeClass',
        'designation',
        'payBand',
        'payBandValue',
        'gradePay',
        'sixthBasicPay',
        'employeeStatus',
        'dateOfJoining',
        'dateOfRetirement',
        'include'
      ];
      this.colCount = this.displayedColumns.length;
    } else if (type === '2') {
      this.displayedColumns = [
        'srNo',
        'employeeNo',
        'employeeName',
        'employeeOfficeName',
        'employeeCategory',
        'employeeClass',
        'designation',
        'payLevel',
        'cellId',
        'sevenThPayCpcBasic',
        'employeeStatus',
        'dateOfJoining',
        'dateOfRetirement',
        'include'
      ];
      this.colCount = this.displayedColumns.length;

    } else if (type === '3') {
      this.displayedColumns = [
        'srNo',
        'employeeNo',
        'employeeName',
        'employeeOfficeName',
        'employeeCategory',
        'employeeClass',
        'designation',
        'fixBasicPay',
        'employeeStatus',
        'dateOfJoining',
        'dateOfRetirement',
        'include'
      ];
      this.colCount = this.displayedColumns.length;

    } else {
      this.displayedColumns = [
        'srNo',
        'employeeNo',
        'employeeName',
        'employeeOfficeName',
        'employeeCategory',
        'employeeClass',
        'designation',
        'payLevel',
        'cellId',
        'sevenThPayCpcBasic',
        'employeeStatus',
        'dateOfJoining',
        'dateOfRetirement',
        'include'
      ];
      this.colCount = this.displayedColumns.length;

    }
  }

  // on reset form
  resetForm() {
    this.directiveObj.selection.clear();
    this.isVerified = false;
    this.regularEmployeeDetails.patchValue({
      payPeriod: 'Jan-21',
      finYear: '2020-2021',
      payYear: '2021',
      payMonth: 'January',

      ddoNo: '4165',
      cardexNo: '5622',
      officeName: 'Ahmedabad',
      district: 'Ahmedabad',

      sanctionPost: '300',
      filledPost: '250',
      vacantPost: '50',
      processFor: '1',

      employeeCategory: '1',
      employeeClass: '',
      payrolStatus: '1',
      includeStatus: '1',

      subOffice: '',
      designation: '',
      employeeNo: '',
      employeeName: '',

      verify: '',
    });
  }

  // ↓↓↓↓↓↓↓↓↓↓↓↓ MESSAGE FOR PROTYPETEAM -> It's custom checkbox so don't replace these methods with common methods. ↓↓↓↓↓↓↓↓↓↓↓↓
  // --------------Check box functions first 2 rows are checked by default ---------------
  masterToggle(dataSource) {
    this.isAllSelected(dataSource)
      ? this.inToggle(dataSource)
      : dataSource.data.forEach(row =>
        this.selection.select(row)
      );
  }
  inToggle(dataSource) {
    dataSource.data.forEach(row => {
      if (row.srNo === '1' || row.srNo === '2') {
        this.selection.select(row);
      } else {
        this.selection.deselect(row);
      }
    });
  }

  isAllSelected(dataSource) {
    const numSelected = this.selection.selected.length;
    const numRows = dataSource.data.length;
    return numSelected === numRows;
  }

  checkboxLabel(dataSource, row?: any): string {
    if (!row) {
      return `${this.isAllSelected(dataSource) ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'
      } row ${row.position + 1}`;
  }
  // ------------------------------------------------------------------------------------
}
