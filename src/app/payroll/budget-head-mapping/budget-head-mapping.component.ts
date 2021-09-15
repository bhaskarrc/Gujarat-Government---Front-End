import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {
  MatDialog,
  MatOption,
  MatPaginator,
  MatTableDataSource,
} from '@angular/material';
import { Router } from '@angular/router';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { payrollMessage } from 'src/app/common/error-message/common-message.constants';

import { SubmitDialogComponent } from '../submit-dialog/submit-dialog.component';
import { CommonListing } from './../../model/common-listing';
import { BudgetHeadMapping } from './../../model/payroll';
import { SearchEmployeeComponent } from './../search-employee/search-employee.component';

@Component({
  selector: 'app-budget-head-mapping',
  templateUrl: './budget-head-mapping.component.html',
  styleUrls: ['./budget-head-mapping.component.css'],
})
export class BudgetHeadMappingComponent implements OnInit {
  private paginator: MatPaginator;
  budgetHeadMappingForm: FormGroup;

  payMonthCtrl: FormControl = new FormControl();
  finYearCtrl: FormControl = new FormControl();
  employeeClassCtrl: FormControl = new FormControl();
  designationCtrl: FormControl = new FormControl();
  financialYearCtrl: FormControl = new FormControl();
  employeeCategoryCtrl: FormControl = new FormControl();
  payrollTypeCtrl: FormControl = new FormControl();
  errorMessages;

  employeeCategory_list: CommonListing[] = [
    { value: '1', viewValue: 'All' },
    { value: '2', viewValue: 'GO' },
    { value: '3', viewValue: 'NGO' },
    { value: '4', viewValue: 'AIS' },
    { value: '5', viewValue: 'Fix Pay' },
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
    { value: '10', viewValue: 'October' },
    { value: '11', viewValue: 'November' },
    { value: '12', viewValue: 'Decmber' },
  ];

  finYearList: CommonListing[] = [
    { value: '1', viewValue: '2019-2020' },
    { value: '2', viewValue: '2020-2021' },
  ];

  payrollTypelist: any[] = [
    { value: '1', viewValue: 'Regular' },
    { value: '2', viewValue: 'Supplementary' },
  ];

  employeeClassList: CommonListing[] = [
    { value: '1', viewValue: 'Class I' },
    { value: '2', viewValue: 'Class II' },
    { value: '3', viewValue: 'Class III' },
    { value: '4', viewValue: 'Class IV' },
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

  demandList: CommonListing[] = [{ value: '1', viewValue: '017' }];
  majorHeadList: CommonListing[] = [{ value: '1', viewValue: '2054' }];
  subMajorHeadList: CommonListing[] = [{ value: '1', viewValue: '00' }];
  minorHeadList: CommonListing[] = [{ value: '1', viewValue: '097' }];
  subHeadList: CommonListing[] = [{ value: '1', viewValue: '01' }];
  detailHeadList: CommonListing[] = [{ value: '1', viewValue: '00' }];
  objectClassList: CommonListing[] = [{ value: '1', viewValue: 'C1' }];

  // table data
  Element_Data: BudgetHeadMapping[] = [
    {
      srNo: '1',
      employeeNo: '1000000001',
      employeeName: 'JigneshKumar Chauhan',
      designation: 'GRD1',
      employeeClass: 'Class I',
      employeeCat: 'GO',
      demand: '',
      majorHead: '',
      subMajorHead: '',
      minorHead: '',
      subHead: '',
      detailHead: '',
      objectClass: '',
      isSubmitted: false,
    },
  ];

  dataSource = new MatTableDataSource<any>([{ noData: 'No Data Available!' }]);
  displayedRows: any[] = ['noData'];
  displayedColumns: any[] = [
    'srNo',
    'employeeNo',
    'employeeName',
    'designation',
    'employeeClass',
    'employeeCat',
    'demand',
    'majorHead',
    'subMajorHead',
    'minorHead',
    'subHead',
    'detailHead',
    'objectClass',
    'action',
  ];
  colCount = this.displayedColumns.length;
  directiveObj = new CommonDirective(this.router);

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }
  @ViewChild('allSelected') private allSelected: MatOption;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.errorMessages = payrollMessage;
    this.budgetHeadMappingForm = this.fb.group({
      ddoNo: [{ value: '4265', disabled: true }],
      cardexNo: [{ value: '5622', disabled: true }],
      officeName: [{ value: 'Collector Office, Ahmedabad', disabled: true }],
      district: [{ value: 'Ahmedabad', disabled: true }],

      payrollType: [{ value: '1', disabled: true }],
      financialYear: [{ value: '2', disabled: true }],
      payMonth: [{ value: '1', disabled: true }],

      employeeCategory: [{ value: '1', disabled: false }],
      employeeClass: [{ value: '', disabled: false }],
      designation: [{ value: '', disabled: false }],
      employeeNo: [{ value: '', disabled: false }],
      employeeName: [{ value: '', disabled: false }],
    });
  }

  // on clicking change year type button
  onChangeYearType() {
    this.budgetHeadMappingForm.controls['payrollType'].enable();
  }
  // on clicking change Payroll button
  onPayrollType(eventVal) {
    if (eventVal === '2') {
      this.budgetHeadMappingForm.controls['financialYear'].enable();
      this.budgetHeadMappingForm.controls['payMonth'].enable();
    } else {
      this.budgetHeadMappingForm.controls['financialYear'].disable();
      this.budgetHeadMappingForm.controls['payMonth'].disable();
      this.budgetHeadMappingForm.controls['financialYear'].setValue('2');
      this.budgetHeadMappingForm.controls['payMonth'].setValue('1');
    }
  }
  // shows table data only when clicked on search button
  search() {
    this.dataSource = new MatTableDataSource<any>(this.Element_Data);
    this.displayedRows = this.displayedColumns;
  }
  add() {
    this.dataSource.data.push({
      srNo:
        Number(this.dataSource.data[this.dataSource.data.length - 1].srNo) + 1,
      employeeNo: '',
      employeeName: '',
      designation: '',
      employeeClass: '',
      employeeCat: '',
      demand: '',
      majorHead: '',
      subMajorHead: '',
      minorHead: '',
      subHead: '',
      detailHead: '',
      objectClass: '',
      isSubmitted: false,
    });
    this.dataSource.data = this.dataSource.data;
  }
  // to set paginator
  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
  }

  // On Submit
  onSubmit() {
    const dialogRef = this.dialog.open(SubmitDialogComponent, {
      width: '250px',
      height: 'auto',
      data: '',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'Ok') {
        this.dataSource.data.forEach((item) => {
          if (
            item.employeeNo &&
            item.employeeName &&
            item.designation &&
            item.employeeClass &&
            item.employeeCat &&
            item.demand &&
            item.majorHead &&
            item.subMajorHead &&
            item.minorHead &&
            item.subHead &&
            item.detailHead &&
            item.objectClass
          ) {
            item.isSubmitted = true;
          } else {
            item.isSubmitted = false;
          }
        });
      }
    });
  }

  // on reset form
  resetForm() {
    this.dataSource = new MatTableDataSource<any>([
      { noData: 'No Data Available!' },
    ]);
    this.displayedRows = ['noData'];
    this.directiveObj.selection.clear();
    this.budgetHeadMappingForm.patchValue({
      ddoNo: '4265',
      cardexNo: '5622',
      officeName: 'Collector Office, Ahmedabad',
      district: 'Ahmedabad',
      payrollType: '1',
      financialYear: '2',
      payMonth: '1',
      employeeCategory: '1',
      employeeClass: '',
      designation: '',
      employeeNo: '',
      employeeName: '',
    });
    this.budgetHeadMappingForm.controls['payrollType'].disable();
    this.budgetHeadMappingForm.controls['financialYear'].disable();
    this.budgetHeadMappingForm.controls['payMonth'].disable();
  }

  // Open Employee Search Dialog Box
  openDialogEmployeeNumber(element) {
    const dialogRef = this.dialog.open(SearchEmployeeComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        element.employeeNo = result[0].employeeNumber;
        element.employeeName = result[0].employeeName;
        element.designation = result[0].designation;
        element.employeeClass = result[0].class;
        element.employeeCat = 'GO';
      }
    });
  }

  // Smart copy for copying row
  smartCopy(element) {
    const length = this.dataSource.data.length - 1;
    if (
      this.dataSource.data[length].srNo &&
      this.dataSource.data[length].employeeNo &&
      this.dataSource.data[length].employeeName &&
      this.dataSource.data[length].designation &&
      this.dataSource.data[length].employeeClass &&
      this.dataSource.data[length].employeeCat &&
      this.dataSource.data[length].demand &&
      this.dataSource.data[length].majorHead &&
      this.dataSource.data[length].subMajorHead &&
      this.dataSource.data[length].minorHead &&
      this.dataSource.data[length].subHead &&
      this.dataSource.data[length].detailHead &&
      this.dataSource.data[length].objectClass
    ) {
      this.dataSource.data.push({
        srNo:
          Number(this.dataSource.data[this.dataSource.data.length - 1].srNo) +
          1,
        employeeNo: element.employeeNo,
        employeeName: element.employeeName,
        designation: element.designation,
        employeeClass: element.employeeClass,
        employeeCat: element.employeeCat,
        demand: element.demand,
        majorHead: element.majorHead,
        subMajorHead: element.subMajorHead,
        minorHead: element.minorHead,
        subHead: element.subHead,
        detailHead: element.detailHead,
        objectClass: element.objectClass,
        isSubmitted: false,
      });
      this.dataSource.data = this.dataSource.data;
    } else {
      this.dataSource.data[length].employeeNo = element.employeeNo;
      this.dataSource.data[length].employeeName = element.employeeName;
      this.dataSource.data[length].designation = element.designation;
      this.dataSource.data[length].employeeClass = element.employeeClass;
      this.dataSource.data[length].employeeCat = element.employeeCat;
      this.dataSource.data[length].demand = element.demand;
      this.dataSource.data[length].majorHead = element.majorHead;
      this.dataSource.data[length].subMajorHead = element.subMajorHead;
      this.dataSource.data[length].minorHead = element.minorHead;
      this.dataSource.data[length].subHead = element.subHead;
      this.dataSource.data[length].detailHead = element.detailHead;
      this.dataSource.data[length].objectClass = element.objectClass;
    }
  }
}
