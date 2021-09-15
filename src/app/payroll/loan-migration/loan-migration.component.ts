import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatOption, MatPaginator, MatTableDataSource } from '@angular/material';
import { payrollMessage } from 'src/app/common/error-message/common-message.constants';
import { ListView } from 'src/app/model/payroll';

import { SubmitDialogComponent } from '../submit-dialog/submit-dialog.component';

@Component({
  selector: 'app-loan-migration',
  templateUrl: './loan-migration.component.html',
  styleUrls: ['./loan-migration.component.css']
})
export class LoanMigrationComponent implements OnInit {

  advanceTypeList: ListView[] = [
    { value: '1', viewValue: 'House Building Advance (HBA)' },
    { value: '2', viewValue: 'Motor Car Advance (MCA)' },
    { value: '3', viewValue: 'GPF Advance' },
  ];

  employeeCategoryList: ListView[] = [
    { value: '1', viewValue: 'All' },
    { value: '2', viewValue: 'GO' },
    { value: '3', viewValue: 'NGO' },
    { value: '4', viewValue: 'AIS' },
    { value: '5', viewValue: 'Fix Pay' }
  ];

  employeeClassList: ListView[] = [
    { value: '1', viewValue: 'Class I ' },
    { value: '2', viewValue: 'Class II' },
    { value: '3', viewValue: 'Class III ' },
    { value: '4', viewValue: 'Class IV' },
  ];

  DesignationList: any = [
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

  displayRow = ['noData'];
  dataSource = new MatTableDataSource<any>([{ noData: 'No Data Available!' }]);

  dataSourceData: any[] = [
    {
      srNo: 1,
      employeeNumber: 1000000001,
      employeeName: 'R.kumar',
      employeeClass: 'Class I',
      employeeDesignation: 'Accountant',
      sanctionedAmountPrincipal: '50000.00',
      totalNumberOfEMIPrincipal: 10,
      numberOfOutstandingEMIPrincipal: 7,
      emiPerMonthPrincipal: '',
      interstAmountInterest: '5000.00',
      totalNumberOfEMIInterest: 10,
      numberOfOutstandingEMIInterest: 10,
      emiPerMonthInterest: '',
      emiStartDate: '',
      requestNo: '',
    },
    {
      srNo: 2,
      employeeNumber: 1000000002,
      employeeName: 'Pratik Kumar',
      employeeClass: 'Class I',
      employeeDesignation: 'Account Assistant',
      sanctionedAmountPrincipal: '',
      totalNumberOfEMIPrincipal: '',
      numberOfOutstandingEMIPrincipal: '',
      emiPerMonthPrincipal: '',
      interstAmountInterest: '',
      totalNumberOfEMIInterest: '',
      numberOfOutstandingEMIInterest: '',
      emiPerMonthInterest: '',
      emiStartDate: '',
      requestNo: '',
    }
  ];

  isSubmit = false;
  isSearch = false;
  loanMigrationForm: FormGroup;
  advanceTypeCtrl: FormControl = new FormControl();
  employeeCategoryCtrl: FormControl = new FormControl();
  employeeClassCtrl: FormControl = new FormControl();
  designationCtrl: FormControl = new FormControl();
  errorMessages = payrollMessage;

  displayedColumnsArray: string[] = ['noData'];
  displayedColumns: string[] = [
    'srNo',
    'employeeNumber',
    'employeeName',
    'employeeClass',
    'employeeDesignation',
    'sanctionedAmountPrincipal',
    'totalNumberOfEMIPrincipal',
    'numberOfOutstandingEMIPrincipal',
    'emiPerMonthPrincipal',
    'interstAmountInterest',
    'totalNumberOfEMIInterest',
    'numberOfOutstandingEMIInterest',
    'emiPerMonthInterest',
    'emiStartDate',
    'requestNo',
    'action'
  ];

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.dataSource.paginator = mp;
  }

  @ViewChild('allSelected') private allSelected: MatOption;

  constructor(private fb: FormBuilder, private dialog: MatDialog) { }

  ngOnInit() {
    this.loanMigrationFormData();
  }

  loanMigrationFormData() {
    this.loanMigrationForm = this.fb.group({
      ddoOffice: [{ value: 'Collector Office, Ahmedabad', disabled: true }],
      ddoNo: [{ value: '4165', disabled: true }],
      cardexNo: [{ value: '5622', disabled: true }],
      district: [{ value: 'Ahmedabad', disabled: true }],
      advanceType: [''],
      employeeCategory: ['1'],
      employeeClass: [''],
      designation: [''],
      employeeNumber: [''],
      employeeName: [''],
    });
  }

  // search data
  search() {
    if (this.loanMigrationForm.controls['advanceType'].value) {
      this.isSearch = true;
      this.dataSource = new MatTableDataSource<any>(this.dataSourceData);
      this.displayRow = [
        'srNo',
        'employeeNumber',
        'employeeName',
        'employeeClass',
        'employeeDesignation',
        'sanctionedAmountPrincipal',
        'totalNumberOfEMIPrincipal',
        'numberOfOutstandingEMIPrincipal',
        'emiPerMonthPrincipal',
        'interstAmountInterest',
        'totalNumberOfEMIInterest',
        'numberOfOutstandingEMIInterest',
        'emiPerMonthInterest',
        'emiStartDate',
        'requestNo',
        'action'
      ];
    } else {
      this.isSubmit = true;
    }

  }

  // Method to Reset form
  resetForm() {
    this.displayRow = ['noData'];
    this.displayedColumnsArray = [
      'sanctionedAmountPrincipal',
      'totalNumberOfEMIPrincipal',
      'numberOfOutstandingEMIPrincipal',
      'emiPerMonthPrincipal',
      'interstAmountInterest',
      'totalNumberOfEMIInterest',
      'numberOfOutstandingEMIInterest',
      'emiPerMonthInterest'
    ];
    this.dataSource = new MatTableDataSource<any>([{ noData: 'No Data Available!' }]);
    this.displayedColumns = this.displayedColumnsArray;
    this.isSearch = false;
    this.loanMigrationForm.patchValue({
      dDoOffice: 'Collector Office, Ahmedabad',
      dDoNo: '4165',
      cardexNo: '5622',
      district: 'Ahmedabad',
      advanceType: '',
      employeeCategory: '1',
      employeeClass: '',
      designation: '',
      employeeNumber: '',
      employeeName: '',
    });
  }

  // On Submit
  onClickSubmit() {
    const dialogRef = this.dialog.open(SubmitDialogComponent, {
      width: '250px',
      height: 'auto',
      data: ''
    }
    );
    dialogRef.afterClosed().subscribe(result => {
      this.dataSource.data.forEach(item => {
        if (item.sanctionedAmountPrincipal && item.totalNumberOfEMIPrincipal && item.numberOfOutstandingEMIPrincipal
          && item.interstAmountInterest && item.totalNumberOfEMIInterest && item.numberOfOutstandingEMIInterest) {
          item.requestNo = 'Auto Generated';
        }
      });
    });
  }

  // to clear row on clear button
  clearRow(element) {
    element.sanctionedAmountPrincipal = '';
    element.totalNumberOfEMIPrincipal = '';
    element.numberOfOutstandingEMIPrincipal = '';
    element.emiPerMonthPrincipal = '';
    element.interstAmountInterest = '';
    element.totalNumberOfEMIInterest = '';
    element.numberOfOutstandingEMIInterest = '';
    element.emiPerMonthInterest = '';
    element.emiStartDate = '';
  }

}
