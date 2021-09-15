import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatOption } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { payrollMessage } from 'src/app/common/error-message/common-message.constants';
import { CommonListing } from 'src/app/model/common-listing';
import { PeriodicElement } from 'src/app/model/payroll';

import { SubmitDialogComponent } from '../submit-dialog/submit-dialog.component';

@Component({
  selector: 'app-employee-quarter-allocation',
  templateUrl: './employee-quarter-allocation.component.html',
  styleUrls: ['./employee-quarter-allocation.component.css']
})

export class EmployeeQuarterAllocationComponent implements OnInit {
  isSearch = false;
  ELEMENT_DATA: PeriodicElement[] = [
    {
      srno: '1', id: 1000000001, name: 'Mihika Prasad', class: ' Class I', designation: 'Accountant',
      allocatedto: '1', isInSameHQ: '2', quartertype: '1',
      quarterrent: '1', rentamount: '1000.00', fd: '', tod: '', category: '1', district: '',
      address: '', basicPay: '20,000.00',
    },
    {
      srno: '2', id: 1000000002, name: 'Piyush Patel', class: 'Class I', designation: 'Accountant',
      allocatedto: '1', isInSameHQ: '2', quartertype: '2',
      quarterrent: '1', rentamount: '1000.00', fd: '', tod: '', category: '1', district: '',
      address: '', basicPay: '20,000.00'
    },
    {
      srno: '3', id: 1000000003, name: 'Rahul Patel', class: 'Class II', designation: 'Accountant',
      allocatedto: '1', isInSameHQ: '2', quartertype: '1',
      quarterrent: '1', rentamount: '1000.00', fd: '', tod: '', category: '1', district: '',
      address: '', basicPay: '20,000.00'
    },
    {
      srno: '4', id: 1000000004, name: 'Bhavik Patel', class: 'Class I', designation: 'Accountant',
      allocatedto: '1', isInSameHQ: '2', quartertype: '1',
      quarterrent: '1', rentamount: '1000.00', fd: '', tod: '', category: '1', district: '',
      address: '', basicPay: '20,000.00'
    },
    {
      srno: '5', id: 1000000005, name: 'Mihika Iyer', class: 'Class I', designation: 'Accountant',
      allocatedto: '', quartertype: '', isInSameHQ: '2',
      quarterrent: '', rentamount: '1000.00', fd: '', tod: '', category: '', district: '',
      address: '', basicPay: '20,000.00'
    },
    {
      srno: '6', id: 1000000006, name: 'Piyush Panchal', class: 'Class I', designation: 'Accountant',
      allocatedto: '1', isInSameHQ: '2', quartertype: '1',
      quarterrent: '1', rentamount: '1000.00', fd: '', tod: '', category: '1', district: '',
      address: '', basicPay: '20,000.00'
    },
    {
      srno: '7', id: 1000000007, name: 'Rahul Dravid', class: 'Class II', designation: 'Accountant',
      allocatedto: '1', isInSameHQ: '2', quartertype: '2',
      quarterrent: '1', rentamount: '1000.00', fd: '', tod: '', category: '1', district: '',
      address: '', basicPay: '20,000.00'
    },
    {
      srno: '8', id: 1000000008, name: 'Bhavik Shah', class: 'Class I', designation: 'Accountant',
      allocatedto: '2', isInSameHQ: '2', quartertype: '2',
      quarterrent: '1', rentamount: '1000.00', fd: '', tod: '', category: '1', district: '',
      address: '', basicPay: '20,000.00'
    },
    {
      srno: '9', id: 1000000009, name: 'Mihika Somaliya', class: 'Class I', designation: 'Account Controller',
      allocatedto: '2', isInSameHQ: '2', quartertype: '2',
      quarterrent: '1', rentamount: '1000.00', fd: '', tod: '', category: '1', district: '',
      address: '', basicPay: '20,000.00'
    },
    {
      srno: '10', id: 1000000010, name: 'Piyush Dabhi', class: 'Class I', designation: 'Account Controller',
      allocatedto: '2', isInSameHQ: '2', quartertype: '2',
      quarterrent: '1', rentamount: '1000.00', fd: '', tod: '', category: '1', district: '',
      address: '', basicPay: '20,000.00'
    },
    {
      srno: '11', id: 1000000011, name: 'Rahul Kharwa', class: 'Class II', designation: 'Account Controller',
      allocatedto: '2', isInSameHQ: '2', quartertype: '2', quarterrent:
        '1', rentamount: '1000.00', fd: '', tod: '', category: '1', district: '',
      address: '', basicPay: '20,000.00'
    },
    {
      srno: '12', id: 1000000012, name: 'Bhavik Upreti', class: 'Class I', designation: 'Account Controller',
      allocatedto: '2', isInSameHQ: '2', quartertype: '1',
      quarterrent: '1', rentamount: '1000.00', fd: '', tod: '', category: '1', district: '',
      address: '', basicPay: '20,000.00'
    },

  ];
  Financial_Year_list: any[] = [
    { value: '1', viewValue: '2019-2020' },
    { value: '2', viewValue: '2020-2021' }
  ];
  Payroll_Type_list: any[] = [{ value: '1', viewValue: 'Regular' },
  { value: '2', viewValue: 'Supplementary' }
  ];

  Pay_month_list: any[] = [
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

  employee_Type_list: any[] = [
    { value: '1', viewValue: 'Class I' },
    { value: '2', viewValue: 'Class II' },
    { value: '3', viewValue: 'Class III' },
    { value: '4', viewValue: 'Class IV' },
  ];

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
    { value: '10', viewValue: 'Accountant' },
  ];
  allocated_list: any[] = [
    { value: '1', viewValue: 'Self' },
    { value: '2', viewValue: 'Spouse' },
    { value: '3', viewValue: 'Parents' },
  ];
  isInSameHQList: any[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
  ];
  quarterType_list: any[] = [
    { value: '1', viewValue: 'Normal' },
    { value: '2', viewValue: 'Standard' },
    { value: '3', viewValue: 'Economic' },
    { value: '4', viewValue: 'Market' }
  ];
  quarterRentCategory_list: any[] = [
    { value: '1', viewValue: 'Rent Payable' },
    { value: '2', viewValue: 'Rent Free' }
  ];
  quarterCategory_list: any[] = [
    { value: '1', viewValue: 'E1' },
    { value: '2', viewValue: 'K' },
    { value: '3', viewValue: 'KH' },
    { value: '4', viewValue: 'G' },
    { value: '5', viewValue: 'G-1' },
    { value: '6', viewValue: 'GH' },
    { value: '7', viewValue: 'GH-1' },
    { value: '8', viewValue: 'CH' },
    { value: '9', viewValue: 'CH-1' },
    { value: '10', viewValue: 'CHH' },
    { value: '11', viewValue: 'J' },
    { value: '12', viewValue: 'J-2' },
    { value: '13', viewValue: 'J-1' },
  ];
  subOfficeList: CommonListing[] = [
    { value: '1', viewValue: 'All' },
    { value: '2', viewValue: 'Sub Office 1' },
    { value: '2', viewValue: 'Sub Office 2' }
  ];
  districtList: CommonListing[] = [
    { value: '1', viewValue: 'Ahmedabad' },
    { value: '2', viewValue: 'Amreli' },
    { value: '3', viewValue: 'Anand' },
    { value: '4', viewValue: 'Arvalli' },
    { value: '5', viewValue: 'Bharuch' },
    { value: '6', viewValue: 'Bhavnagar' },
    { value: '7', viewValue: 'Bhuj' },
    { value: '8', viewValue: 'Botad' },
    { value: '9', viewValue: 'ChottaUdepur' },
    { value: '10', viewValue: 'Dahod' },
    { value: '11', viewValue: 'Dang (Ahwa)' },
    { value: '12', viewValue: 'Devbhumi Dwarka' },
    { value: '13', viewValue: 'Gandhinagar' },
    { value: '14', viewValue: 'GirSomnath' },
    { value: '15', viewValue: 'Godhara' },
    { value: '16', viewValue: 'Himmatnagar' },
    { value: '17', viewValue: 'Jamnagar' },
    { value: '18', viewValue: 'Junagadh' },
    { value: '19', viewValue: 'Mahisagar' },
    { value: '20', viewValue: 'Mahesana' },
    { value: '21', viewValue: 'Morbi' },
    { value: '22', viewValue: 'Nadiad' },
    { value: '23', viewValue: 'Narmada' },
    { value: '24', viewValue: 'Navsari' },
    { value: '25', viewValue: 'Palanpur' },
    { value: '26', viewValue: 'Patan' },
    { value: '27', viewValue: 'Porbandar' },
    { value: '28', viewValue: 'Rajkot' },
    { value: '29', viewValue: 'Surat' },
    { value: '30', viewValue: 'Surendranagar' },
    { value: '31', viewValue: 'Vadodara' },
    { value: '32', viewValue: 'Valsad' },
    { value: '33', viewValue: 'Vyara' },
  ];
  createpayrollForm: FormGroup;
  todayDate = new Date();
  errorMessages = payrollMessage;
  // employeeCategoryCtrl: FormControl = new FormControl();
  financialYearCtrl: FormControl = new FormControl();
  payrollTypeCtrl: FormControl = new FormControl();
  payMonthCtrl: FormControl = new FormControl();
  typeCtrl: FormControl = new FormControl();
  employeeTypeCtrl: FormControl = new FormControl();
  designationListCtrl: FormControl = new FormControl();
  subOfficeCtrl: FormControl = new FormControl();
  districtCtrl: FormControl = new FormControl();


  displayedColumns: string[] = ['srNo', 'id', 'name', 'class', 'designation', 'basicPay', 'allocatedto',
    'isInSameHQ', 'district', 'quarterCategory', 'quartertype',
    'quarterrent', 'address', 'rentamount', 'fd', 'tod'];
  dataSource = new MatTableDataSource<any>([{ noData: 'No Data Available!' }]);
  displayedRows: any[] = ['noData'];

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
  @ViewChild('allSelected') private allSelected: MatOption;

  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.createpayrollForm = this.fb.group({
      ddoofcName: [{ value: 'Collector Office, Ahmedabad', disabled: true }],
      ddono: [{ value: '4265', disabled: true }],
      cardexNo: [{ value: '5622', disabled: true }],
      financialYear: [{ value: '2', disabled: true }],
      payrollType: [{ value: '1', disabled: true }],
      payMonth: [{ value: '1', disabled: true }],
      employeeType: [''],
      designation: [{ value: '', disabled: false }],
      employeeId: [''],
      employeeName: [''],
      // employeeCategory: ['1'],
      district: [{ value: 'Ahmedabad', disabled: true }],
      subOfficeName: [{ value: '1', disabled: false }]
    });
  }
  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // shows table data only when clicked on search button
  search() {
    this.isSearch = true;
    this.dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
    this.displayedRows = this.displayedColumns;
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

  // resets form values
  resetForm() {
    this.isSearch = false;
    this.dataSource = new MatTableDataSource<any>([{ noData: 'No Data Available!' }]);
    this.displayedRows = ['noData'];
    this.createpayrollForm.patchValue({
      ddoofcName: 'Collector Office, Ahmedabad',
      ddono: '4265',
      cardexNo: '5622',
      financialYear: '2',
      payrollType: '1',
      payMonth: '1',
      employeeType: '',
      designation: '',
      employeeId: '',
      employeeName: '',
      // employeeCategory: '1',
      district: 'Ahmedabad',
      subOfficeName: '1',
    });
    this.createpayrollForm.controls['financialYear'].disable();
    this.createpayrollForm.controls['payrollType'].disable();
    this.createpayrollForm.controls['payMonth'].disable();
  }

  // calculates rent amount as quarter category and quarter type is selected
  getRentAmt(element) {
    switch (element.quartertype) {
      case '1':
        switch (element.category) {
          case '1': element.rentamount = '5000.00'; break;
          case '2': element.rentamount = '1040.00'; break;
          case '3': element.rentamount = '1040.00'; break;
          case '4': element.rentamount = '800.00'; break;
          case '5': element.rentamount = '600.00'; break;
          case '6': element.rentamount = '480.00'; break;
          case '7': element.rentamount = '400.00'; break;
          case '8': element.rentamount = '300.00'; break;
          case '9': element.rentamount = '300.00'; break;
          case '10': element.rentamount = '200.00'; break;
          case '11': element.rentamount = '140.00'; break;
          case '12': element.rentamount = '80.00'; break;
          case '13': element.rentamount = '80.00'; break;
        }
        break;
      case '2':
        switch (element.category) {
          case '1': element.rentamount = '10000.00'; break;
          case '2': element.rentamount = '2400.00'; break;
          case '3': element.rentamount = '2400.00'; break;
          case '4': element.rentamount = '2400.00'; break;
          case '5': element.rentamount = '2400.00'; break;
          case '6': element.rentamount = '1440.00'; break;
          case '7': element.rentamount = '1440.00'; break;
          case '8': element.rentamount = '1440.00'; break;
          case '9': element.rentamount = '1440.00'; break;
          case '10': element.rentamount = '600.00'; break;
          case '11': element.rentamount = '600.00'; break;
          case '12': element.rentamount = '600.00'; break;
          case '13': element.rentamount = '600.00'; break;
        }
        break;
      case '3':
        switch (element.category) {
          case '1': element.rentamount = '15000.00'; break;
          case '2': element.rentamount = '4800.00'; break;
          case '3': element.rentamount = '4800.00'; break;
          case '4': element.rentamount = '4800.00'; break;
          case '5': element.rentamount = '4800.00'; break;
          case '6': element.rentamount = '2880.00'; break;
          case '7': element.rentamount = '2880.00'; break;
          case '8': element.rentamount = '2880.00'; break;
          case '9': element.rentamount = '2880.00'; break;
          case '10': element.rentamount = '1200.00'; break;
          case '11': element.rentamount = '1200.00'; break;
          case '12': element.rentamount = '1200.00'; break;
          case '13': element.rentamount = '1200.00'; break;
        }
        break;
      case '4':
        switch (element.category) {
          case '1': element.rentamount = '20000.00'; break;
          case '2': element.rentamount = '42000.00'; break;
          case '3': element.rentamount = '42000.00'; break;
          case '4': element.rentamount = '36000.00'; break;
          case '5': element.rentamount = '30000.00'; break;
          case '6': element.rentamount = '11520.00'; break;
          case '7': element.rentamount = '11520.00'; break;
          case '8': element.rentamount = '11520.00'; break;
          case '9': element.rentamount = '11520.00'; break;
          case '10': element.rentamount = '4800.00'; break;
          case '11': element.rentamount = '4800.00'; break;
          case '12': element.rentamount = '4800.00'; break;
          case '13': element.rentamount = '4800.00'; break;
        }
        break;
    }

  }

  // method for Allocated to
  onAllocatedTo(element) {
    console.log('allocatedto' + element.allocatedto);
    if (element.allocatedto === undefined || element.allocatedto === '') {
      element.category = '';
      element.quartertype = '';
      element.quarterrent = '';
    } else if (element.allocatedto === '1') {
      element.isInSameHQ = '2';
    }
  }
  onisInSameHQ(element) {
    if (element.isInSameHQ === undefined || element.isInSameHQ === '1') {
      element.category = '';
      element.quartertype = '';
      element.quarterrent = '';
      element.fd = '';
      element.tod = '';
    }
  }

}

