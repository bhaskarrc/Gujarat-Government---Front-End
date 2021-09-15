import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatOption, MatPaginator, MatSort } from '@angular/material';
import { MatTableDataSource } from '@angular/material/table';
import { CommonListing } from 'src/app/model/common-listing';
import { EmployeeSubscription } from 'src/app/model/payroll';
import { payrollMessage } from 'src/app/common/error-message/common-message.constants';

import { SubmitDialogComponent } from '../submit-dialog/submit-dialog.component';

@Component({
  selector: 'app-employee-subscription',
  templateUrl: './employee-subscription.component.html',
  styleUrls: ['./employee-subscription.component.css']
})
export class EmployeeSubscriptionComponent implements OnInit {
  isSearch = false;

  // List of Financial Year
  financialYear_list: any[] = [
    { value: '1', viewValue: '2019-2020' },
    { value: '2', viewValue: '2020-2021' },
  ];

  // List of Payroll Type
  payrollType_list: any[] = [
    { value: '1', viewValue: 'Regular' },
    { value: '2', viewValue: 'Supplementary' },
  ];

  // List of pay Month
  payMonth_list: any[] = [
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
  payType_list: any[] = [
    { value: '1', viewValue: 'Earning' },
    { value: '2', viewValue: 'Deduction' },
  ];

  // List of Component Head
  componentHead_list: any[] = [
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
    { value: '20', viewValue: 'Stipend Allowance' }
  ];
  componentHeadForDeduction_list: any[] = [
    { value: '1', viewValue: 'Income Tax' },
    { value: '2', viewValue: 'Professional Tax' },
    { value: '3', viewValue: 'GPF' },
    { value: '4', viewValue: 'NPS' },
    { value: '5', viewValue: 'Quarter License Fee' },
    { value: '6', viewValue: 'Jeep Car Rent' },
    { value: '7', viewValue: 'Govt. Insurance Scheme Fund & Saving' },
    { value: '8', viewValue: 'HBA Principal' },
    { value: '9', viewValue: 'HBA Interest' },
    { value: '10', viewValue: 'MCA Principal' },
    { value: '11', viewValue: 'MCA Interest' },
    { value: '12', viewValue: 'GPF Advance Recovery' },
    { value: '13', viewValue: 'Miscellaneous Recovery' },
    { value: '14', viewValue: 'PTA Recovery' },
    { value: '15', viewValue: 'Recovery of Pay' },
    { value: '16', viewValue: 'Food Grain Advance Recovery' },
    { value: '17', viewValue: 'Festival Advance Recovery' },
    { value: '18', viewValue: 'Pay L.S.L.E Advance Recovery' },
  ];
  // List of Employee Type
  employeeClass_list: any[] = [
    { value: '1', viewValue: 'Class I' },
    { value: '2', viewValue: 'Class II' },
    { value: '3', viewValue: 'Class III' },
    { value: '4', viewValue: 'Class IV' }
  ];

  // List of Designation Type
  designationType_list: any[] = [
    { value: '1', viewValue: 'GRD1' },
    { value: '2', viewValue: '2nd Additional Senior Civil Judge' },
    { value: '3', viewValue: 'A.D.C. To H.E. Governor ' },
    { value: '4', viewValue: 'Account Assistant' },
    { value: '5', viewValue: 'Account Clerk' },
    { value: '6', viewValue: 'Account Controller' },
    { value: '7', viewValue: 'Account Cum - Administrator Officer' },
    { value: '8', viewValue: 'Account Officer-Class I' },
    { value: '9', viewValue: 'Account Officer-Class II' },
    { value: '10', viewValue: 'Accountant' }];

  // Table Data for Employee Subscription Data
  employeeSubscriptionData: EmployeeSubscription[] = [
    {
      id: 1000000001, name: 'Piyush Patel', class: 'Class I', designation: 'Accountant', componentHead: 'Other Allowance',
      amount: '0.00', fromDate: '', toDate: '', transport: '', category: 'GO', availed: '', component: ''
    }
  ];

  subOfficeList: CommonListing[] = [
    { value: '1', viewValue: 'All' },
    { value: '2', viewValue: 'Sub Office 1' },
    { value: '2', viewValue: 'Sub Office 2' }
  ];
  // Table Columns for Employee Subscription Data
  employeeSubscriptionDataColumn: string[] = [
    'srno', 'id', 'name', 'category', 'class', 'designation', 'componentHead', 'amount', 'fromDate', 'toDate'
  ];
  errorMessages = payrollMessage;
  date: any = new Date();
  expendCharges: boolean;
  employeeSubscriptionForm: FormGroup;
  enableAmount = true;
  financialYearCtrl: FormControl = new FormControl();
  TypeCtrl: FormControl = new FormControl();
  ComponentHeadCtrl: FormControl = new FormControl();
  payrollTypeCtrl: FormControl = new FormControl();
  payMonthCtrl: FormControl = new FormControl();
  employeeClassCtrl: FormControl = new FormControl();
  designationTypeCtrl: FormControl = new FormControl();
  subOfficeCtrl: FormControl = new FormControl();
  employeeSubscriptionDataSource = new MatTableDataSource<any>([{ noData: 'No Data Available!' }]); // Add For Search
  displayedRows: any[] = ['noData']; // Add For Search
  @ViewChild('allSelected') private allSelected: MatOption;

  private paginator: MatPaginator;
  private sort: MatSort;
  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }
  constructor(
    private fb: FormBuilder, public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.employeeSubscriptionFormDate();
  }
  setDataSourceAttributes() {
    this.employeeSubscriptionDataSource.paginator = this.paginator;
    this.employeeSubscriptionDataSource.sort = this.sort;
  }

  // Initialize Form Fields
  employeeSubscriptionFormDate() {
    this.employeeSubscriptionForm = this.fb.group({
      ddoOfficeName: [{ value: 'Collector Office, Ahmedabad', disabled: true }],
      ddoNo: [{ value: '4265', disabled: true }],
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

  // resets form values
  resetForm() {
    this.isSearch = false; // Add For Search
    this.employeeSubscriptionDataSource = new MatTableDataSource<any>([{ noData: 'No Data Available!' }]); // Add For Search
    this.displayedRows = ['noData']; // Add For Search
    this.employeeSubscriptionForm.patchValue({
      ddoOfficeName: 'Collector Office, Ahmedabad',
      ddoNo: '4265',
      cardexNo: '5622',
      financialYear: '2',
      payrollType: '1',
      payMonth: '1',
      type: '1',
      componentHead: '',
      employeeClass: '',
      designation: '',
      employeeID: '',
      employeeName: '',
      fromDate: '',
      toDate: '',
      district: 'Ahmedabad',
      subOfficeName: '1'
    });
    this.employeeSubscriptionForm.controls['financialYear'].disable();
    this.employeeSubscriptionForm.controls['payrollType'].disable();
    this.employeeSubscriptionForm.controls['payMonth'].disable();
  }

  // shows table data only when search button is clicked
  search() {
    this.isSearch = true;
    this.employeeSubscriptionDataSource = new MatTableDataSource<EmployeeSubscription>(this.employeeSubscriptionData);
    this.displayedRows = this.employeeSubscriptionDataColumn;
  }
  // on clicking change year type button
  onChangeYearType() {
    this.employeeSubscriptionForm.controls['payrollType'].enable();
  }
  // on clicking change Payroll button
  onPayrollType(eventVal) {
    if (eventVal === '2') {
      this.employeeSubscriptionForm.controls['financialYear'].enable();
      this.employeeSubscriptionForm.controls['payMonth'].enable();
    } else {
      this.employeeSubscriptionForm.controls['financialYear'].disable();
      this.employeeSubscriptionForm.controls['payMonth'].disable();
      this.employeeSubscriptionForm.controls['financialYear'].setValue('2');
      this.employeeSubscriptionForm.controls['payMonth'].setValue('1');
    }
  }
  // opens pop up
  onClickSubmit() {
    const dialogRef = this.dialog.open(SubmitDialogComponent, {
      width: '250px',
      height: 'auto',
      data: ''
    }
    );
    dialogRef.afterClosed().subscribe(result => { });
  }

  // filters from date
  dateFilterFrom = (d: Date) => {
    const date = new Date(d);
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


}
