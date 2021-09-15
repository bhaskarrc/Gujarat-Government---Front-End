import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { payrollMessage } from 'src/app/common/error-message/common-message.constants';
import { ListView, SalaryComponents } from 'src/app/model/payroll';

import { SubmitDialogComponent } from '../submit-dialog/submit-dialog.component';
import { SearchEmployeeComponent } from './../search-employee/search-employee.component';

@Component({
  selector: 'app-salary-adjustment',
  templateUrl: './salary-adjustment.component.html',
  styleUrls: ['./salary-adjustment.component.css']
})
export class SalaryAdjustmentComponent implements OnInit {

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
    { value: '1', viewValue: 'All' },
    { value: '2', viewValue: '2 wheeler advance' },
    { value: '3', viewValue: '4 wheeler advance' },
    { value: '4', viewValue: 'Advance for natural calamity' },
    { value: '5', viewValue: 'Computer advance -with interest' },
    { value: '6', viewValue: 'Computer advance -without interest' },
    { value: '7', viewValue: 'Cycle advance' },
    { value: '8', viewValue: 'Festival advance' },
    { value: '9', viewValue: 'GPF advance' },
    { value: '10', viewValue: 'House building advance' },
    { value: '11', viewValue: 'Pay on transfer' },
    { value: '12', viewValue: 'Travel advance' },
    { value: '13', viewValue: 'Typewriter advance' },
    { value: '14', viewValue: 'Warm clothing advance' },
  ];

  // List of Employee Type
  employeeType_list: ListView[] = [
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
    { value: '10', viewValue: 'Accountant' }
  ];

  // List of Sub Offices
  subOfficeList: ListView[] = [
    { value: '1', viewValue: 'All' },
    { value: '2', viewValue: 'Sub Office 1' },
    { value: '3', viewValue: 'Sub Office 2' }
  ];

  action_list: ListView[] = [
    { value: '1', viewValue: 'Add' },
    { value: '2', viewValue: 'Deduct' }
  ];

  // Table data for Earning Component Table
  EarningComponentData: SalaryComponents[] = [
    { salaryComponent: 'Basic Pay', amount: '', action: '' },
    { salaryComponent: 'House Rent Allowance (HRA)', amount: '', action: '' },
    { salaryComponent: 'Dearness Allowance (DA)', amount: '', action: '' },
    { salaryComponent: 'Fix Pay', amount: '', action: '' },
    { salaryComponent: 'Transport Allowance (TA)', amount: '', action: '' },
    { salaryComponent: 'Leave Salary', amount: '', action: '' },
    { salaryComponent: 'Other Allowance', amount: '', action: '' },
    { salaryComponent: 'Medical Allowance', amount: '', action: '' },
    { salaryComponent: 'Compensatory Local Allowance', amount: '', action: '' },
    { salaryComponent: 'Dang Allowance', amount: '', action: '' },
    { salaryComponent: 'Tribal Allowance', amount: '', action: '' },
    { salaryComponent: 'Washing Allowance', amount: '', action: '' },
    { salaryComponent: 'Nursing Allowance', amount: '', action: '' },
    { salaryComponent: 'Pay of Suspension', amount: '', action: '' },
    { salaryComponent: 'Non Private Practice Allowance (NPPA)', amount: '', action: '' },
    { salaryComponent: 'Personal Pay', amount: '', action: '' },
    { salaryComponent: 'Permanent Travel Allowance (PTA)', amount: '', action: '' },
    { salaryComponent: 'Interim Relief', amount: '', action: '' },
    { salaryComponent: 'Special/Additional Pay', amount: '', action: '' },
    { salaryComponent: 'Special Allowance', amount: '', action: '' },
    { salaryComponent: 'Sumptuary Allowance', amount: '', action: '' },
    { salaryComponent: 'Petrol/Diesel Allowance', amount: '', action: '' },
    { salaryComponent: 'Book Allowance', amount: '', action: '' },
    { salaryComponent: 'Stipend Allowance', amount: '', action: '' },
  ];

  // Table Columns for Earnig Component Table
  EarningComponentDataColumn: string[] = [
    'srno', 'salaryComponent', 'amount', 'action'
  ];

  // Table data for Deduction Component Table
  DeductionComponentData: SalaryComponents[] = [
    { salaryComponent: 'Income Tax', amount: '', action: '' },
    { salaryComponent: 'Professional Tax', amount: '', action: '' },
    { salaryComponent: 'GPF', amount: '', action: '' },
    { salaryComponent: 'NPS', amount: '', action: '' },
    { salaryComponent: 'Quarter Rent', amount: '', action: '' },
    { salaryComponent: 'Jeep Car Rent', amount: '', action: '' },
    { salaryComponent: 'Miscellaneous Recovery', amount: '', action: '' },
    { salaryComponent: 'PTA Recovery', amount: '', action: '' },
    { salaryComponent: 'Recovery of Pay', amount: '', action: '' },
    { salaryComponent: 'Gov. Ins Scheme Fund & Saving', amount: '', action: '' },
  ];

  // Table Columns for Deduction Component Table
  DeductionComponentDataColumn: string[] = [
    'srno', 'salaryComponent', 'amount', 'action'
  ];

  // Table data for Recovery Component Table
  RecoveryComponentData: SalaryComponents[] = [
    { salaryComponent: 'HBA Principal', amount: '', action: '' },
    { salaryComponent: 'HBA Interest', amount: '', action: '' },
    { salaryComponent: 'MCA Principal', amount: '', action: '' },
    { salaryComponent: 'MCA Interet', amount: '', action: '' },
    { salaryComponent: 'GPF Advance', amount: '', action: '' },
    { salaryComponent: 'Food Grain Advance', amount: '', action: '' },
    { salaryComponent: 'Festival Advance', amount: '', action: '' },
    { salaryComponent: 'Pay L.S.L.E Advance', amount: '', action: '' },
  ];

  // Table Columns for Recovery Component Table
  RecoveryComponentDataColumn: string[] = [
    'srno', 'salaryComponent', 'amount', 'action'
  ];

  showAccordiondata = false;
  showEmployeeDetails = false;
  errorMessages = payrollMessage;
  salaryAdjustmentForm: FormGroup;
  financialYearCtrl: FormControl = new FormControl();
  finYearCtrl: FormControl = new FormControl();
  designationTypeCtrl: FormControl = new FormControl();
  payrollTypeCtrl: FormControl = new FormControl();
  payMonthCtrl: FormControl = new FormControl();
  loanTypeCtrl: FormControl = new FormControl();
  employeeTypeCtrl: FormControl = new FormControl();
  designationCtrl: FormControl = new FormControl();
  subOfficeCtrl: FormControl = new FormControl();
  actionCtrl: FormControl = new FormControl();
  EarningComponentDataSource = new MatTableDataSource<SalaryComponents>(this.EarningComponentData);
  DeductionComponentDataSource = new MatTableDataSource<SalaryComponents>(this.DeductionComponentData);
  RecoveryComponentDataSource = new MatTableDataSource<SalaryComponents>(this.RecoveryComponentData);

  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  directiveObj = new CommonDirective();

  ngOnInit() {
    this.salaryAdjustmentFormData();
  }

  // Initialize Form Fields
  salaryAdjustmentFormData() {
    this.salaryAdjustmentForm = this.fb.group({
      district: [{ value: 'Ahmedabad', disabled: true }],
      officeName: [{ value: 'Collector Office, Ahmedabad', disabled: true }],
      ddoNo: [{ value: '4265', disabled: true }],
      cardexNo: [{ value: '5622', disabled: true }],
      financialYear: [{ value: '2', disabled: true }],
      payrollType: [{ value: '1', disabled: true }],
      payMonth: [{ value: '1', disabled: true }],
      employeeClass: [{ value: '', disabled: true }],
      designation: [{ value: '', disabled: true }],
      employeeID:  [{ value: '', disabled: false }],
      employeeName: [{ value: '', disabled: true }],
      subOfficeName: [{ value: '1', disabled: false }]
    });
  }

  // Method to reset form
  resetForm() {
    this.salaryAdjustmentForm.patchValue({
      ddoNo: '4265',
      cardexNo: '5622',
      officeName: 'Collector Office, Ahmedabad',
      district: 'Ahmedabad',

      subOfficeName: '1',
      payrollType: '1',
      financialYear: '2',
      payMonth: '1',

      employeeClass: '',
      designation: '',
      employeeID: '',
      employeeName: '',
    });
    this.showEmployeeDetails = false;
    this.showAccordiondata = false;
    this.salaryAdjustmentForm.controls['financialYear'].disable();
    this.salaryAdjustmentForm.controls['payrollType'].disable();
    this.salaryAdjustmentForm.controls['payMonth'].disable();
  }

  // on clicking change year type button
  onChangeYearType() {
    this.salaryAdjustmentForm.controls['payrollType'].enable();
  }
// on clicking change Payroll button
onPayrollType(eventVal) {
  if (eventVal === '2') {
    this.salaryAdjustmentForm.controls['financialYear'].enable();
    this.salaryAdjustmentForm.controls['payMonth'].enable();
  } else {
    this.salaryAdjustmentForm.controls['financialYear'].disable();
    this.salaryAdjustmentForm.controls['payMonth'].disable();
    this.salaryAdjustmentForm.controls['financialYear'].setValue('2');
    this.salaryAdjustmentForm.controls['payMonth'].setValue('1');
  }
}
  // Open Employee Search Dialog Box
  openDialogEmployeeNumber() {
    const dialogRef = this.dialog.open(SearchEmployeeComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.salaryAdjustmentForm.patchValue({
          employeeID: result[0].employeeNumber,
          employeeName: result[0].employeeName,
          employeeClass: result[0].class,
          designation: result[0].designation,
        });
        this.showEmployeeDetails = true;
      }
    });
  }

  // On Click of submit
  onClickSubmit() {
    const dialogRef = this.dialog.open(SubmitDialogComponent, {
      width: '250px',
      height: 'auto',
      data: ''
    }
    );
    dialogRef.afterClosed().subscribe(result => { });
  }

// On search to show Table
  showAccordion() {
    this.showAccordiondata = true;
  }

}
