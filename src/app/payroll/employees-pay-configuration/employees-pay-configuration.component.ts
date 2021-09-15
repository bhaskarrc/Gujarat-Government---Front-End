import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatOption, MatPaginator, MatSort } from '@angular/material';
import { MatTableDataSource } from '@angular/material/table';
import { payrollMessage } from 'src/app/common/error-message/common-message.constants';
import { CommonListing } from 'src/app/model/common-listing';
import { EmployeePayConfiguration, ListView } from 'src/app/model/payroll';

import { SubmitDialogComponent } from '../submit-dialog/submit-dialog.component';

@Component({
  selector: 'app-employees-pay-configuration',
  templateUrl: './employees-pay-configuration.component.html',
  styleUrls: ['./employees-pay-configuration.component.css']
})


export class EmployeesPayConfigurationComponent implements OnInit {
  showSearchTable = false;
  // List of Financial Year
  financialYear_list: ListView[] = [
    { value: '1', viewValue: '2019-2020' },
    { value: '2', viewValue: '2020-2021' },
  ];

  // List of Payroll Type
  payrollType_list: ListView[] = [
    { value: '1', viewValue: 'Regular' },
    { value: '2', viewValue: 'Supplementary' },
  ];

  // List of pay Month
  payMonth_list: ListView[] = [
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

  // List of Pay Type
  payType_list: ListView[] = [
    { value: '1', viewValue: 'Earning' }
  ];

  // List of Component Head
  componentHead_list: ListView[] = [
    { value: '1', viewValue: 'Transport Allowance (TA)' },
    { value: '2', viewValue: 'Leave Salary' },
    { value: '3', viewValue: 'Other Allowance' },
    { value: '4', viewValue: 'Medical Allowance' },
    { value: '5', viewValue: 'Compensatory Local Allowance (CLA)' },
    { value: '6', viewValue: 'Dang Allowance' },
    { value: '7', viewValue: 'Tribal Allowance' },
    { value: '8', viewValue: 'Washing Allowance' },
    { value: '9', viewValue: 'Nursing Allowance' },
    { value: '10', viewValue: 'Suspension of Pay' },
    { value: '11', viewValue: 'Non Private Practice Allowance (NPPA)' },
    { value: '12', viewValue: 'Personal Pay' },
    { value: '13', viewValue: 'Pernamanent Travel Allowance (PTA)' },
    { value: '14', viewValue: 'Interim Relief' },
    { value: '15', viewValue: 'Special Additional Pay' },
    { value: '16', viewValue: 'Special Allowance' },
    { value: '17', viewValue: 'Sumptuary Allowance' },
    { value: '18', viewValue: 'Petrol/Diesel Allowance' },
    { value: '19', viewValue: 'Book Allowance' },
    { value: '20', viewValue: 'Stipend Allowance' },

  ];
  // List of Employee Type
  employeeClass_list: ListView[] = [
    { value: '1', viewValue: 'Class I' },
    { value: '2', viewValue: 'Class II' },
    { value: '3', viewValue: 'Class III' },
    { value: '4', viewValue: 'Class IV' },
  ];

  // List of Designation Type
  designationType_list: ListView[] = [
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


  // List of Component Head Yes/No
  yesNoList: ListView[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
  ];

  // Table Data for Employee Pay Configuration Table
  employeePayConfigurationData: EmployeePayConfiguration[] = [
    {
      id: 1000000001,
      name: 'Piyush Patel',
      class: 'Class I',
      designation: 'Accountant',
      transport: '2',
      availed: '2',
      component: '2',
      amount: 0,
      fromDate: '',
      toDate: '',
      category: 'GO',
      office: '2',
      leaveSalary: '2',
      otherAllowance: '2',
      medicalAllowance: '2',
      compensatoryLocalAllowance: '2',
      dangAllowance: '2',
      tribalAllowance: '2',
      washingAllowance: '2',
      nursingAllowance: '2',
      suspensionOfPay: '2',
      nonPrivatePracticeAllowance: '2',
      personalPay: '2',
      pernamanentTravelAllowance: '2',
      interimRelief: '2',
      specialAdditionalPay: '2',
      specialAllowance: '2',
      sumptuaryAllowance: '2',
      petrolDieselAllowance: '2',
      bookAllowance: '2',
      stipendAllowance: '2',
    },
    {
      id: 1000000002,
      name: 'Mr. Padmanaabh Singh',
      class: 'Class I',
      designation: 'Accountant',
      transport: '2',
      availed: '2',
      component: '2',
      amount: 0,
      fromDate: '',
      toDate: '',
      category: 'GO',
      office: '2',
      leaveSalary: '2',
      otherAllowance: '2',
      medicalAllowance: '2',
      compensatoryLocalAllowance: '2',
      dangAllowance: '2',
      tribalAllowance: '2',
      washingAllowance: '2',
      nursingAllowance: '2',
      suspensionOfPay: '2',
      nonPrivatePracticeAllowance: '2',
      personalPay: '2',
      pernamanentTravelAllowance: '2',
      interimRelief: '2',
      specialAdditionalPay: '2',
      specialAllowance: '2',
      sumptuaryAllowance: '2',
      petrolDieselAllowance: '2',
      bookAllowance: '2',
      stipendAllowance: '2',
    },
    {
      id: 1000000003,
      name: 'Mr. Harsh Kumar',
      class: 'Class I',
      designation: 'Accountant',
      transport: '2',
      availed: '2',
      component: '2',
      amount: 0,
      fromDate: '',
      toDate: '',
      category: 'GO',
      office: '2',
      leaveSalary: '2',
      otherAllowance: '2',
      medicalAllowance: '2',
      compensatoryLocalAllowance: '2',
      dangAllowance: '2',
      tribalAllowance: '2',
      washingAllowance: '2',
      nursingAllowance: '2',
      suspensionOfPay: '2',
      nonPrivatePracticeAllowance: '2',
      personalPay: '2',
      pernamanentTravelAllowance: '2',
      interimRelief: '2',
      specialAdditionalPay: '2',
      specialAllowance: '2',
      sumptuaryAllowance: '2',
      petrolDieselAllowance: '2',
      bookAllowance: '2',
      stipendAllowance: '2',
    },
    {
      id: 1000000004,
      name: 'Mr. Manoj Singh',
      class: 'Class I',
      designation: 'Accountant',
      transport: '2',
      availed: '2',
      component: '2',
      amount: 0,
      fromDate: '',
      toDate: '',
      category: 'GO',
      office: '2',
      leaveSalary: '2',
      otherAllowance: '2',
      medicalAllowance: '2',
      compensatoryLocalAllowance: '2',
      dangAllowance: '2',
      tribalAllowance: '2',
      washingAllowance: '2',
      nursingAllowance: '2',
      suspensionOfPay: '2',
      nonPrivatePracticeAllowance: '2',
      personalPay: '2',
      pernamanentTravelAllowance: '2',
      interimRelief: '2',
      specialAdditionalPay: '2',
      specialAllowance: '2',
      sumptuaryAllowance: '2',
      petrolDieselAllowance: '2',
      bookAllowance: '2',
      stipendAllowance: '2',
    },
    {
      id: 1000000005,
      name: 'Mr. Padmanaabh Singh',
      class: 'Class I',
      designation: 'Accountant',
      transport: '2',
      availed: '2',
      component: '2',
      amount: 0,
      fromDate: '',
      toDate: '',
      category: 'GO',
      office: '2',
      leaveSalary: '2',
      otherAllowance: '2',
      medicalAllowance: '2',
      compensatoryLocalAllowance: '2',
      dangAllowance: '2',
      tribalAllowance: '2',
      washingAllowance: '2',
      nursingAllowance: '2',
      suspensionOfPay: '2',
      nonPrivatePracticeAllowance: '2',
      personalPay: '2',
      pernamanentTravelAllowance: '2',
      interimRelief: '2',
      specialAdditionalPay: '2',
      specialAllowance: '2',
      sumptuaryAllowance: '2',
      petrolDieselAllowance: '2',
      bookAllowance: '2',
      stipendAllowance: '2',
    },
  ];

  subOfficeList: CommonListing[] = [
    { value: '1', viewValue: 'All' },
    { value: '2', viewValue: 'Sub Office 1' },
    { value: '2', viewValue: 'Sub Office 2' }
  ];
  // Table Columns for Employee Configuration Table
  displayedColumnsArray: string[] = ['noData'];


  employeePayConfigurationDataColumns: string[] = [
    'srno',
    'id',
    'name',
    'category',
    'class',
    'designation',
  ];
  noOfCol = this.employeePayConfigurationDataColumns.length;
  componentName = '';
  isSearch = false;
  errorMessages = payrollMessage;
  date: any = new Date();
  expendCharges: boolean;
  createpayrollForm: FormGroup;
  // districtCtrl: FormControl = new FormControl();
  employeeCategoryCtrl: FormControl = new FormControl();
  financialYearCtrl: FormControl = new FormControl();
  TypeCtrl: FormControl = new FormControl();
  ComponentHeadCtrl: FormControl = new FormControl();
  payrollTypeCtrl: FormControl = new FormControl();
  payMonthCtrl: FormControl = new FormControl();
  employeeClassCtrl: FormControl = new FormControl();
  designationTypeCtrl: FormControl = new FormControl();
  transportAllowanceCtrl: FormControl = new FormControl();
  transportAvailedCtrl: FormControl = new FormControl();
  componentHeadYesNoCtrl: FormControl = new FormControl();
  subOfficeCtrl: FormControl = new FormControl();

  employeePayConfigurationDataSource = new MatTableDataSource<any>([{ noData: 'No Data Available!' }]);
  private paginator: MatPaginator;
  private sort: MatSort;

  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }

  @ViewChild('allSelected') private allSelected: MatOption;

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }
  constructor(
    private fb: FormBuilder, public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.createForm();
  }
  setDataSourceAttributes() {
    this.employeePayConfigurationDataSource.paginator = this.paginator;
    this.employeePayConfigurationDataSource.sort = this.sort;
  }
  // Initialize Form Fields
  createForm() {
    this.createpayrollForm = this.fb.group({
      // ddoName: ['AHMEDABAD'],
      ddoOfficeName: [{ value: 'Collector Office, Ahmedabad', disabled: true }],
      ddoNo: [{ value: '4165', disabled: true }],
      cardexNo: [{ value: '5622', disabled: true }],
      financialYear: [{ value: '2', disabled: true }],
      payrollType: [{ value: '1', disabled: true }],
      payMonth: [{ value: '1', disabled: true }],
      type: ['1'],
      componentHead: [''],
      employeeClass: [''],
      designation: [{ value: '', disabled: false }],
      employeeID: [''],
      employeeName: [''],
      fromDate: [''],
      toDate: [''],
      district: [{ value: 'Ahmedabad', disabled: true }],
      subOfficeName: [{ value: '1', disabled: false }]

    });
  }
  defaultColumns = () => ['srno', 'id', 'name', 'category', 'class', 'designation'];
  resetForm() {
    this.employeePayConfigurationDataSource = new MatTableDataSource<any>([{ noData: 'No Data Available!' }]);
    this.employeePayConfigurationDataColumns = this.defaultColumns();
    this.displayedColumnsArray = ['noData'];
    this.noOfCol = this.employeePayConfigurationDataColumns.length;
    this.isSearch = false;
    this.createpayrollForm.patchValue({
      ddoOfficeName: 'Collector Office, Ahmedabad',
      ddoNo: '4165',
      cardexNo: '5622',
      financialYear: '2',
      payrollType: '1',
      payMonth: '1',
      type: '1',
      componentHead: '',
      employeeType: '1',
      designation: '',
      employeeID: '',
      employeeName: '',
      fromDate: '',
      toDate: '',
      district: 'Ahmedabad',
      subOfficeName: '1',
      employeeClass: ''
    });
    this.createpayrollForm.controls['financialYear'].disable();
    this.createpayrollForm.controls['payrollType'].disable();
    this.createpayrollForm.controls['payMonth'].disable();
  }

  search() {
    this.isSearch = true;
    this.employeePayConfigurationDataSource = new MatTableDataSource<EmployeePayConfiguration>(this.employeePayConfigurationData);
    this.displayedColumnsArray = this.employeePayConfigurationDataColumns;
    this.noOfCol = this.employeePayConfigurationDataColumns.length;
  }

  // selects component from form and change column name in table
  selectComponent(type) {
    this.employeePayConfigurationDataColumns = this.defaultColumns();
    type.forEach(item => {
      switch (item) {

        case 'Transport Allowance (TA)': this.employeePayConfigurationDataColumns.push('transport', 'availed', 'office');
          break;

        case 'Leave Salary': this.employeePayConfigurationDataColumns.push('leaveSalary');
          break;

        case 'Other Allowance': this.employeePayConfigurationDataColumns.push('otherAllowance');
          break;

        case 'Medical Allowance': this.employeePayConfigurationDataColumns.push('medicalAllowance');
          break;

        case 'Compensatory Local Allowance (CLA)': this.employeePayConfigurationDataColumns.push('compensatoryLocalAllowance');
          break;

        case 'Dang Allowance': this.employeePayConfigurationDataColumns.push('dangAllowance');
          break;

        case 'Tribal Allowance': this.employeePayConfigurationDataColumns.push('tribalAllowance');
          break;

        case 'Washing Allowance': this.employeePayConfigurationDataColumns.push('washingAllowance');
          break;

        case 'Nursing Allowance': this.employeePayConfigurationDataColumns.push('nursingAllowance');
          break;

        case 'Suspension of Pay': this.employeePayConfigurationDataColumns.push('suspensionOfPay');
          break;

        case 'Non Private Practice Allowance (NPPA)': this.employeePayConfigurationDataColumns.push('nonPrivatePracticeAllowance');
          break;

        case 'Personal Pay': this.employeePayConfigurationDataColumns.push('personalPay');
          break;

        case 'Pernamanent Travel Allowance (PTA)': this.employeePayConfigurationDataColumns.push('pernamanentTravelAllowance');
          break;

        case 'Interim Relief': this.employeePayConfigurationDataColumns.push('interimRelief');
          break;

        case 'Special Additional Pay': this.employeePayConfigurationDataColumns.push('specialAdditionalPay');
          break;

        case 'Special Allowance': this.employeePayConfigurationDataColumns.push('specialAllowance');
          break;

        case 'Sumptuary Allowance': this.employeePayConfigurationDataColumns.push('sumptuaryAllowance');
          break;

        case 'Petrol/Diesel Allowance': this.employeePayConfigurationDataColumns.push('petrolDieselAllowance');
          break;

        case 'Book Allowance': this.employeePayConfigurationDataColumns.push('bookAllowance');
          break;

        case 'Stipend Allowance': this.employeePayConfigurationDataColumns.push('stipendAllowance');
          break;


        default: this.employeePayConfigurationDataColumns = this.defaultColumns();
          break;
      }
      this.noOfCol = this.employeePayConfigurationDataColumns.length;


      if (this.isSearch) {
        this.displayedColumnsArray = this.employeePayConfigurationDataColumns;
      }
    });
  }

  // on clicking change year type button
  onChangeYearType() {
    this.createpayrollForm.controls['payrollType'].enable();
  }
  // on clicking change Payroll button
  onPayrollType(eventVal) {
    if (eventVal === '2') {
      this.createpayrollForm.controls['financialYear'].enable();
      this.createpayrollForm.controls['payMonth'].enable();
    } else {
      this.createpayrollForm.controls['financialYear'].disable();
      this.createpayrollForm.controls['payMonth'].disable();
      this.createpayrollForm.controls['financialYear'].setValue('2');
      this.createpayrollForm.controls['payMonth'].setValue('1');
    }
  }

  onClickSubmit() {
    const dialogRef = this.dialog.open(SubmitDialogComponent, {
      width: '250px',
      height: 'auto',
      data: ''
    }
    );
    dialogRef.afterClosed().subscribe(result => { });
  }

  // On change of transport eligible
  ontransportEligiible(element) {
    if (element.transport === '2') {
      element.availed = '2';
    }
  }
}

