import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatOption, MatPaginator, MatTableDataSource } from '@angular/material';
import { payrollMessage } from 'src/app/common/error-message/common-message.constants';
import { CommonListing } from 'src/app/model/common-listing';

import { SubmitDialogComponent } from '../submit-dialog/submit-dialog.component';
import { SocietyRecovery } from './../../model/payroll';

@Component({
  selector: 'app-society-recovery',
  templateUrl: './society-recovery.component.html',
  styleUrls: ['./society-recovery.component.css']
})
export class SocietyRecoveryComponent implements OnInit {

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

  // List of Society Name
  societyNameList: CommonListing[] = [
    { value: '1', viewValue: 'Society Name 1' },
    { value: '2', viewValue: 'Society Name 1' },
    { value: '3', viewValue: 'Society Name 3' },
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

  // Table Data for Loan Detials
  societyRecoveryData: SocietyRecovery[] = [
    {
      employeeNo: '1000000001',
      employeeName: 'Piyush Patel',
      employeeClass: 'Class I',
      designation: 'Accountant',
      societyName: 'Society Name 1',
      recoveryAmount: '1000.00',
      month: 'January',
      // fromDate: '01-Jan-2020',
      // toDate: '31-Jan-2020',
    },
  ];

  // Table Columns for Loan Details Table
  displayedColumnsArray: string[] = ['noData'];
  societyRecoveryDataSourceColumns = [
    'srno',
    'employeeNo',
    'employeeName',
    'employeeClass',
    'designation',
    'societyName',
    'recoveryAmount',
    'month',
    // 'fromDate',
    // 'toDate',
  ];
  uploadDataSourceColumns = [
    'downloadTemplate',
    'upload',
    'fileName',
  ];

  isSearch = false;
  private paginator: MatPaginator;
  errorMessages = payrollMessage;
  uplodedFileName = 'No File Uploaded';
  seachSocietyRecoveryForm: FormGroup;
  financialYearCtrl: FormControl = new FormControl();
  finYearCtrl: FormControl = new FormControl();
  designationTypeCtrl: FormControl = new FormControl();
  payrollTypeCtrl: FormControl = new FormControl();
  payMonthCtrl: FormControl = new FormControl();
  societyNameCtrl: FormControl = new FormControl();
  employeeClassCtrl: FormControl = new FormControl();
  designationCtrl: FormControl = new FormControl();
  subOfficeCtrl: FormControl = new FormControl();

  societyRecoveryDataSource = new MatTableDataSource<any>([{ noData: 'No Data Available!' }]);
  uploadDataSource = new MatTableDataSource<any>([{
    downloadTemplate: '',
    upload: '',
    fileName: 'No File Uploaded',
  }]);
  // societyRecoveryDataSource = new MatTableDataSource<SocietyRecovery>(this.societyRecoveryData);


  @ViewChild('allSelected') private allSelected: MatOption;

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }
  constructor(private fb: FormBuilder, private dialog: MatDialog, private el: ElementRef) { }

  // Initialize Form Fields
  ngOnInit() {
    this.seachSocietyRecoveryForm = this.fb.group({
      ddoNo: [{ value: '4265', disabled: true }],
      cardexNo: [{ value: '5622', disabled: true }],
      officeName: [{ value: 'Collector Office, Ahmedabad', disabled: true }],
      district: [{ value: 'Ahmedabad', disabled: true }],

      subOfficeName: [{ value: '1', disabled: false }],
      payrollType: [{ value: '1', disabled: true }],
      financialYear: [{ value: '2', disabled: true }],
      payMonth: [{ value: '1', disabled: true }],

      societyName: [{ value: '', disabled: false }],
      employeeClass: [{ value: '', disabled: false }],
      designation: [{ value: '', disabled: false }],
      employeeNo: [{ value: '', disabled: false }],
      employeeName: [{ value: '', disabled: false }],
    });
  }

  // search data
  search() {
    if (this.seachSocietyRecoveryForm.controls['societyName'].value !== '') {
      this.societyRecoveryDataSource = new MatTableDataSource<SocietyRecovery>(this.societyRecoveryData);
      this.displayedColumnsArray = this.societyRecoveryDataSourceColumns;
      this.isSearch = true;
    }
  }

  // for paginator
  setDataSourceAttributes() {
    this.societyRecoveryDataSource.paginator = this.paginator;
  }

  // on reset
  resetForm() {
    this.societyRecoveryDataSource = new MatTableDataSource<any>([{ noData: 'No Data Available!' }]);
    this.displayedColumnsArray = ['noData'];
    this.isSearch = false;
    this.seachSocietyRecoveryForm.patchValue({
      ddoNo: '4265',
      cardexNo: '5622',
      officeName: 'Collector Office, Ahmedabad',
      district: 'Ahmedabad',

      subOfficeName: '1',
      payrollType: '1',
      financialYear: '2',
      payMonth: '1',

      societyName: '',
      employeeClass: '',
      designation: '',
      employeeNo: '',
      employeeName: '',
    });
    this.seachSocietyRecoveryForm.controls['financialYear'].disable();
    this.seachSocietyRecoveryForm.controls['payrollType'].disable();
    this.seachSocietyRecoveryForm.controls['payMonth'].disable();
  }

  // on clicking change year type button
  onChangeYearType() {
    this.seachSocietyRecoveryForm.controls['payrollType'].enable();
  }
  // on clicking change Payroll button
  onPayrollType(eventVal) {
    if (eventVal === '2') {
      this.seachSocietyRecoveryForm.controls['financialYear'].enable();
      this.seachSocietyRecoveryForm.controls['payMonth'].enable();
    } else {
      this.seachSocietyRecoveryForm.controls['financialYear'].disable();
      this.seachSocietyRecoveryForm.controls['payMonth'].disable();
      this.seachSocietyRecoveryForm.controls['financialYear'].setValue('2');
      this.seachSocietyRecoveryForm.controls['payMonth'].setValue('1');
    }
  }
  // on submit
  onClickSubmit() {
    const dialogRef = this.dialog.open(SubmitDialogComponent, {
      width: '250px',
      height: 'auto',
      data: ''
    }
    );
    dialogRef.afterClosed().subscribe(result => { });
  }

  // On File Selector
  openFileSelector() {
    this.el.nativeElement.querySelector('#fileBrowse').click();
  }
  // On File Selection
  onFileSelection(fileSelected) {
    if (fileSelected.target && fileSelected.target.files) {
      this.uploadDataSource.data[0].fileName = fileSelected.target.files[0].name;
      this.uplodedFileName = fileSelected.target.files[0].name;
    }
  }
}
