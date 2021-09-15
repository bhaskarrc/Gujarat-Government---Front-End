import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatOption, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { payrollMessage } from 'src/app/common/error-message/common-message.constants';
import { CommonListing } from 'src/app/model/common-listing';
import { EmpLoanDetail, ListView } from 'src/app/model/payroll';

import { SubmitDialogComponent } from '../submit-dialog/submit-dialog.component';

@Component({
  selector: 'app-employee-loan-details',
  templateUrl: './employee-loan-details.component.html',
  styleUrls: ['./employee-loan-details.component.css']
})
export class EmployeeLoanDetailsComponent implements OnInit {
  isSearch = false;

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

  // List of Loan Type
  loanType_list: ListView[] = [
    { value: '1', viewValue: 'HBA' },
    { value: '2', viewValue: 'MCA' },
    { value: '3', viewValue: 'GPF Advance' },
    { value: '4', viewValue: 'CPF Advance' },
  ];

  // List of Employee Type
  employeeClass_list: ListView[] = [
    { value: '1', viewValue: 'Class I' },
    { value: '2', viewValue: 'Class II' },
    { value: '3', viewValue: 'Class III' },
    { value: '4', viewValue: 'Class IV' }
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
    { value: '10', viewValue: 'Accountant' },
  ];
  subOfficeList: CommonListing[] = [
    { value: '1', viewValue: 'All' },
    { value: '2', viewValue: 'Sub Office 1' },
    { value: '2', viewValue: 'Sub Office 2' }
  ];
  // Table Data for Loan Detials
  loanDetailData: EmpLoanDetail[] = [
    {
      employeeId: '1000000001',
      employeeName: 'Piyush Patel',
      employeeClass: 'Class I',
      designation: 'Accountant',
      // emiFromDate: '01-Jan-2020',
      // emiToDate: '31-Jan-2020',
      emiStatus: 'Not Recovered',
      emiType: 'Interest',
      emiAmount: '200.00',
      includeInPayroll: true,
      emiDueDate: '31-Dec-2012',
      emiNo: '321321312-1/50',
      emiProcessDueDate: '31-Dec-2020',
      emiRecoveryDate: '31-Dec-2020',
      loanAccNo: '123123123',
      loanType: 'MCA Principal',
      reasonForExcl: '',
    },
    {
      employeeId: '1000000002',
      employeeName: 'Jayesh Shah',
      employeeClass: 'Class II',
      designation: 'Accountant',
      // emiFromDate: '01-May-2020',
      // emiToDate: '31-May-2020',
      emiStatus: 'Not Recovered',
      emiType: 'Principal',
      emiAmount: '5000.00',
      includeInPayroll: true,
      emiDueDate: '31-Dec-2012',
      emiNo: '321321314-1/40',
      emiProcessDueDate: '31-Dec-2020',
      emiRecoveryDate: '31-Dec-2020',
      loanAccNo: '123123124',
      loanType: 'MCA Principal',
      reasonForExcl: '',
    }
  ];

  // Table Columns for Loan Details Table
  loanDetailDataSourceColumns = [
    'srno', 'employeeId', 'employeeName', 'employeeClass', 'designation', 'loanAccNo', 'loanType',
    'emiNo', 'emiDueDate', 'emiProcessDueDate', 'emiRecoveryDate', 'emiType',
    'emiStatus', 'emiAmount', 'includeInPayroll', 'reasonForExcl'
  ];
  @ViewChild('allSelected') private allSelected: MatOption;

  errorMessages = payrollMessage;
  seachLoanDetailForm: FormGroup;
  financialYearCtrl: FormControl = new FormControl();
  designationTypeCtrl: FormControl = new FormControl();
  payrollTypeCtrl: FormControl = new FormControl();
  payMonthCtrl: FormControl = new FormControl();
  loanTypeCtrl: FormControl = new FormControl();
  employeeClassCtrl: FormControl = new FormControl();
  designationCtrl: FormControl = new FormControl();
  subOfficeCtrl: FormControl = new FormControl();
  directiveObj = new CommonDirective(this.router);
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
  loanDetailDataSource = new MatTableDataSource<any>([{ noData: 'No Data Available!' }]);
  displayedRows: any[] = ['noData'];

  constructor(private fb: FormBuilder, private router: Router, public dialog: MatDialog) { }

  // Initialize Form Fields
  ngOnInit() {
    this.seachLoanDetailForm = this.fb.group({
      district: ['Ahmedabad'],
      officeName: [{ value: 'Collector Office, Ahmedabad', disabled: true }],
      ddoNo: [{ value: '4265', disabled: true }],
      cardexNo: [{ value: '5622', disabled: true }],
      financialYear: [{ value: '2', disabled: true }],
      payrollType: [{ value: '1', disabled: true }],
      payMonth: [{ value: '1', disabled: true }],
      loanType: [{ value: '', disabled: false }],
      loanAccountNo: [{ value: '', disabled: false }],
      employeeClass: [{ value: '', disabled: false }],
      designation: [{ value: '', disabled: false }],
      employeeID: [{ value: '', disabled: false }],
      employeeName: [{ value: '', disabled: false }],
      subOfficeName: [{ value: '1', disabled: false }]
    });
  }

  setDataSourceAttributes() {
    this.loanDetailDataSource.paginator = this.paginator;
    this.loanDetailDataSource.sort = this.sort;
  }

  // resets form values
  resetForm() {
    this.isSearch = false;
    this.loanDetailDataSource = new MatTableDataSource<any>([{ noData: 'No Data Available!' }]);
    this.displayedRows = ['noData'];
    this.seachLoanDetailForm.patchValue({
      district: 'Ahmedabad',
      officeName: 'Collector Office, Ahmedabad',
      ddoNo: '4265',
      cardexNo: '5622',
      financialYear: '2',
      payrollType: '1',
      payMonth: '1',
      loanType: '',
      loanAccountNo: '',
      employeeClass: '',
      designation: '',
      employeeID: '',
      employeeName: '',
      subOfficeName: '1'
    });
    this.seachLoanDetailForm.controls['financialYear'].disable();
    this.seachLoanDetailForm.controls['payrollType'].disable();
    this.seachLoanDetailForm.controls['payMonth'].disable();
  }
  // on clicking change year type button
  onChangeYearType() {
    this.seachLoanDetailForm.controls['payrollType'].enable();
  }
  // on clicking change Payroll button
  onPayrollType(eventVal) {
    if (eventVal === '2') {
      this.seachLoanDetailForm.controls['financialYear'].enable();
      this.seachLoanDetailForm.controls['payMonth'].enable();
    } else {
      this.seachLoanDetailForm.controls['financialYear'].disable();
      this.seachLoanDetailForm.controls['payMonth'].disable();
      this.seachLoanDetailForm.controls['financialYear'].setValue('2');
      this.seachLoanDetailForm.controls['payMonth'].setValue('1');
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

  // shows table data only on click of search button
  search() {
    this.isSearch = true;
    this.loanDetailDataSource = new MatTableDataSource<EmpLoanDetail>(this.loanDetailData);
    this.displayedRows = this.loanDetailDataSourceColumns;

    // By default All Include Checked
    this.loanDetailDataSource.data.forEach(item => {
      this.directiveObj.selection.select(item);
    });
  }

}
