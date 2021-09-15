import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatOption, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { payrollMessage } from 'src/app/common/error-message/common-message.constants';
import { CommonListing } from 'src/app/model/common-listing';
import { ReceiptElement } from 'src/app/model/payroll';

import { SubmitDialogComponent } from '../submit-dialog/submit-dialog.component';
import { SearchEmployeeComponent } from './../search-employee/search-employee.component';

const ELEMENT_DATA: ReceiptElement[] = [
  {
    srNo: 1, id: 1000000001, name: 'R.kumar', class: 'Class I', designation: 'Accountant', PreLeaveDate: '10-Oct-2020',
    PreLeaveTworomDate: '10-Oct-2020', leaveType: 'Child Adoption Leave', TodalLeave: 0, isSubmitted: false
  },
  {
    srNo: 2, id: 1000000002, name: 'Amit Shah', class: 'Class I', designation: 'Accountant', PreLeaveDate: '10-Oct-2020',
    PreLeaveTworomDate: '10-Oct-2020', leaveType: 'Commuted Leave', TodalLeave: 0, isSubmitted: false
  },
  {
    srNo: 3, id: 1000000003, name: 'Raju Chavda', class: 'Class IV', designation: 'Accountant', PreLeaveDate: '10-Oct-2020',
    PreLeaveTworomDate: '10-Oct-2020', leaveType: 'Earned Leave', TodalLeave: 0, isSubmitted: false
  },
  {
    srNo: 4, id: 1000000004, name: 'Rani Patel', class: 'Class III', designation: 'Accountant', PreLeaveDate: '10-Oct-2020',
    PreLeaveTworomDate: '12-Oct-2020', leaveType: 'Half Paid Leave', TodalLeave: 0, isSubmitted: false
  },
];

@Component({
  selector: 'app-employee-leave-detail',
  templateUrl: './employee-leave-detail.component.html',
  styleUrls: ['./employee-leave-detail.component.css']
})
export class EmployeeLeaveDetailComponent implements OnInit {
  errorMessage = payrollMessage;
  todayDate = new Date();
  endDate: any = Date;
  startDate: any = Date;
  employeeLeaveDetail: FormGroup;
  isSearch = false;
  isSubmitted = false;
  displayRow = ['noData'];
  dataSource = new MatTableDataSource<any>([{ noData: 'No Data Available!' }]);
  finYearCtrl: FormControl = new FormControl();
  payrollCtrl: FormControl = new FormControl();
  payMonthCtrl: FormControl = new FormControl();
  leaveCtrl: FormControl = new FormControl();
  empCtrl: FormControl = new FormControl();
  subOfficeCtrl: FormControl = new FormControl();
  designationCtrl: FormControl = new FormControl();
  selection = new SelectionModel<any>(true, []);

  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.dataSource.paginator = mp;
  }
  @ViewChild('allSelected') private allSelected: MatOption;

  displayedColumnsArray: string[] = ['noData'];
  displayedColumns: string[] = ['srNo', 'id', 'name', 'class', 'designation', 'leaveType', 'FromDate',
    'TworomDate', 'FromDateC', 'TwoDateC', 'todalDay', 'action'];

  finYear_list: any[] = [
    { value: '1', viewValue: '2019-2020' },
    { value: '2', viewValue: '2020-2021' },
  ];

  PayrollTypeList: any[] = [
    { value: '1', viewValue: 'Regular' },
    { value: '2', viewValue: 'Supplementary' },
  ];
  PayMonthTypeList: any[] = [
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
    { value: '12', viewValue: 'December' }
  ];
  LeaveListTypeList: any[] = [
    { value: '1', viewValue: 'Child Adoption Leave' },
    { value: '2', viewValue: 'Child Care Leave' },
    { value: '3', viewValue: 'Commuted Leave' },
    { value: '4', viewValue: 'Earned Leave' },
    { value: '5', viewValue: 'Extraordinary Leave' },
    { value: '6', viewValue: 'Half Paid Leave' },
    { value: '7', viewValue: 'Hospital Leave' },
    { value: '8', viewValue: 'Leave not Due' },
    { value: '9', viewValue: 'Maternity Leave' },
    { value: '10', viewValue: 'Paternity Leave' },
    { value: '11', viewValue: 'Study Leave' }
  ];
  EmpTypeList: any = [
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
  subOfficeList: CommonListing[] = [
    { value: '1', viewValue: 'All' },
    { value: '2', viewValue: 'Sub Office 1' },
    { value: '2', viewValue: 'Sub Office 2' }
  ];
  private paginator: MatPaginator;
  private sort: MatSort;
  constructor(private fb: FormBuilder, private dialog: MatDialog) { }

  ngOnInit() {
    this.createForm();
  }

  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  createForm() {
    this.employeeLeaveDetail = this.fb.group({
      dDoOffice: [{ value: 'Collector Office, Ahmedabad', disabled: true }],
      dDoNo: [{ value: '4165', disabled: true }],
      cardexNo: [{ value: '5622', disabled: true }],
      finYear: [{ value: '2', disabled: true }],
      payrollType: [{ value: '1', disabled: true }],
      payMonth: [{ value: '2', disabled: true }],
      leaveType: ['', Validators.required],
      empType: [''],
      designation: [''],
      empId: [''],
      empName: [''],
      district: [{ value: 'Ahmedabad', disabled: true }],
      subOfficeName: [{ value: '1', disabled: false }]

    });
  }

  // calculates diff of dates
  diff(element) {
    const diffTime = Math.abs(element.endDate - element.startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays) {
      this.dataSource.data[element.srNo - 1].TodalLeave = diffDays + 1;
    } else {
      this.dataSource.data[element.srNo - 1].TodalLeave = 1;
    }
  }

  // on clicking change year type button
  onChangeYearType() {
    this.employeeLeaveDetail.controls['payrollType'].enable();
  }
  // on clicking change Payroll button
  onPayrollType(eventVal) {
    if (eventVal === '2') {
      this.employeeLeaveDetail.controls['finYear'].enable();
      this.employeeLeaveDetail.controls['payMonth'].enable();
    } else {
      this.employeeLeaveDetail.controls['finYear'].disable();
      this.employeeLeaveDetail.controls['payMonth'].disable();
      this.employeeLeaveDetail.controls['finYear'].setValue('2');
      this.employeeLeaveDetail.controls['payMonth'].setValue('1');
    }
  }
  // clears form
  clearForm() {
    this.displayRow = ['noData'];
    this.displayedColumnsArray = ['FromDate', 'TworomDate'];
    this.dataSource = new MatTableDataSource<any>([{ noData: 'No Data Available!' }]);
    this.displayedColumns = this.displayedColumnsArray;
    this.isSearch = false;
    this.employeeLeaveDetail.patchValue({
      dDoOffice: 'Collector Office, Ahmedabad',
      dDoNo: '4165',
      cardexNo: '5622',
      finYear: '2',
      payrollType: '1',
      payMonth: '2',
      leaveType: '',
      empType: '',
      designation: '',
      empId: '',
      empName: '',
      district: 'Ahmedabad',
      subOfficeName: '1'
    });
    this.employeeLeaveDetail.controls['finYear'].disable();
    this.employeeLeaveDetail.controls['payrollType'].disable();
    this.employeeLeaveDetail.controls['payMonth'].disable();
  }

  // search data
  search() {
    if (this.employeeLeaveDetail.controls['leaveType'].value !== '') {
      this.isSearch = true;
      this.dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
      this.displayRow = ['srNo', 'id', 'name', 'class', 'designation', 'leaveType', 'FromDate',
        'TworomDate', 'FromDateC', 'TwoDateC', 'todalDay', 'action'];
    }
  }

  // adds new record
  addLeave() {
    const limit = this.dataSource.data.length - 1;
    const p_data = this.dataSource.data;
    p_data.push({
      srNo: (Number(this.dataSource.data[limit].srNo) + 1),
      id: '',
      name: '',
      class: '',
      designation: '',
      PreLeaveDate: '',
      PreLeaveTworomDate: '',
      leaveType: '',
      TodalLeave: 0,
      isSubbmit: false,
    });
    this.dataSource.data = p_data;
  }

  delete(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource = new MatTableDataSource(this.dataSource.data);
  }

  onClickSubmit() {
    const dialogRef = this.dialog.open(SubmitDialogComponent, {
      width: '250px',
      height: 'auto',
      data: ''
    }
    );
    dialogRef.afterClosed().subscribe(result => {
      this.dataSource.data.forEach(item => {
        if (item.id &&
          item.name &&
          item.class &&
          item.designation &&
          item.PreLeaveDate &&
          item.PreLeaveTworomDate &&
          item.leaveType &&
          item.TodalLeave) {
          item.isSubmitted = true;
        } else {
          item.isSubmitted = false;
        }
      });
    });
  }

  // Open Employee Search Dialog Box
  openDialogEmployeeNumber(element) {
    const dialogRef = this.dialog.open(SearchEmployeeComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        element.id = result[0].employeeNumber,
          element.name = result[0].employeeName,
          element.class = result[0].class,
          element.designation = result[0].designation,
          element.leaveType = 'Study Leave',
          element.PreLeaveDate = '10-Oct-2020',
          element.PreLeaveTworomDate = '13-Oct-2020';
      }
    });
  }

}

