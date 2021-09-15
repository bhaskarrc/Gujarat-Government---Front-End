import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { GiSearchEmployeeComponent } from '../gi-search-employee/gi-search-employee.component';
import { GiEmployeeLedger } from 'src/app/model/group-insurance';
import { CommonListing } from 'src/app/model/common-listing';

@Component({
  selector: 'app-gi-employee-ledger',
  templateUrl: './gi-employee-ledger.component.html',
  styleUrls: ['./gi-employee-ledger.component.css']
})
export class GiEmployeeLedgerComponent implements OnInit {

  // variables
  districtDetails = 'Ahmedabad';
  treasuryOfficeDetails = 'District Trasury Office, Ahmedabad';
  employeeNoDetails = '1000008764';
  employeeNameDetails = 'Mr. I K Zala';
  giSchemeJoiningDateDetails = '16-Nov-1965';
  giSchemeJoiningGroupDetails = 'C';
  classDetails = 'Class 1';
  groupChangeDateDetails = '18-Oct-2005';
  currentGroupDetails = 'A';
  inwardDetails = true;
  showTable = false;

  // date
  todayDate = new Date();

  // form group
  employeeLedgerForm: FormGroup;

  // form control
  districtCtrl: FormControl = new FormControl();

  // List of District
  districtList: CommonListing[] = [
    { value: '1', viewValue: 'Ahmedabad' },
    { value: '2', viewValue: 'Gandhinagar' },
    { value: '3', viewValue: 'Vadodara' },
    { value: '4', viewValue: 'Surat' },
    { value: '5', viewValue: 'Bharuch' },
    { value: '6', viewValue: 'Anand' },
    { value: '7', viewValue: 'Valsad' },
    { value: '8', viewValue: 'Dang' },
    { value: '9', viewValue: 'Rajkot' },
    { value: '10', viewValue: 'Amreli' },
  ];

  // Employee Ledger Table data
  employeeLedgerData: GiEmployeeLedger[] = [
    {
      year: '2019',
      month: 'January',
      amountOfDeduction: '400',
      interestFundAmount: '120',
      savingFundAmount: '280',
      tcCash: 'TC',
      voucherNoChallanNo: '12',
      voucherChallanDate: 'NA',
      total: '400'
    },
    {
      year: '2019',
      month: 'February',
      amountOfDeduction: '400',
      interestFundAmount: '120',
      savingFundAmount: '280',
      tcCash: 'TC',
      voucherNoChallanNo: '13',
      voucherChallanDate: 'NA',
      total: '400'
    },
    {
      year: '2019',
      month: 'March',
      amountOfDeduction: '400',
      interestFundAmount: '120',
      savingFundAmount: '280',
      tcCash: 'TC',
      voucherNoChallanNo: '14',
      voucherChallanDate: 'NA',
      total: '400'
    },
    {
      year: '2019',
      month: 'April',
      amountOfDeduction: '400',
      interestFundAmount: '120',
      savingFundAmount: '280',
      tcCash: 'TC',
      voucherNoChallanNo: '15',
      voucherChallanDate: 'NA',
      total: '400'
    },
    {
      year: '2019',
      month: 'May',
      amountOfDeduction: '400',
      interestFundAmount: '120',
      savingFundAmount: '280',
      tcCash: 'TC',
      voucherNoChallanNo: '16',
      voucherChallanDate: 'NA',
      total: '400'
    },
    {
      year: '2019',
      month: 'June',
      amountOfDeduction: '400',
      interestFundAmount: '120',
      savingFundAmount: '280',
      tcCash: 'TC',
      voucherNoChallanNo: '17',
      voucherChallanDate: 'NA',
      total: '400'
    },
    {
      year: '2019',
      month: 'July',
      amountOfDeduction: '400',
      interestFundAmount: '120',
      savingFundAmount: '280',
      tcCash: 'TC',
      voucherNoChallanNo: '18',
      voucherChallanDate: 'NA',
      total: '400'
    },
    {
      year: '2019',
      month: 'August',
      amountOfDeduction: '400',
      interestFundAmount: '120',
      savingFundAmount: '280', tcCash: 'Cash',
      voucherNoChallanNo: '1764',
      voucherChallanDate: '5-Aug-2019',
      total: '400'
    },
    {
      year: '2019',
      month: 'September',
      amountOfDeduction: '400',
      interestFundAmount: '120',
      savingFundAmount: '280', tcCash: 'Cash',
      voucherNoChallanNo: '3456',
      voucherChallanDate: '5-Sep-2019',
      total: '400'
    },
    {
      year: '2019',
      month: 'October',
      amountOfDeduction: '400',
      interestFundAmount: '120',
      savingFundAmount: '280', tcCash: 'Cash',
      voucherNoChallanNo: '6457',
      voucherChallanDate: '5-Oct-2019',
      total: '400'
    },
    {
      year: '2019',
      month: 'November',
      amountOfDeduction: '400',
      interestFundAmount: '120',
      savingFundAmount: '280', tcCash: 'TC',
      voucherNoChallanNo: '56',
      voucherChallanDate: 'NA',
      total: '400'
    },
    {
      year: '2019',
      month: 'December',
      amountOfDeduction: '400',
      interestFundAmount: '120',
      savingFundAmount: '280', tcCash: 'TC',
      voucherNoChallanNo: '78',
      voucherChallanDate: 'NA',
      total: '400'
    },
  ];
  employeeLedgerDataSourceColumn: string[] = [
    'srno',
    'year',
    'month',
    'amountOfDeduction',
    'interestFundAmount',
    'savingFundAmount',
    'tcCash',
    'voucherNoChallanNo',
    'voucherChallanDate',
    'total'
  ];
  employeeLedgerDataSource = new MatTableDataSource<GiEmployeeLedger>(this.employeeLedgerData);
  // Employee Ledger Table data end


  // constructor
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.employeeLedgerFormData();
  }

  // form data
  employeeLedgerFormData() {
    this.employeeLedgerForm = this.fb.group({
      district: [''],
      treasuryOfficeName: [''],
      employeeNo: [''],
      employeeName: [''],
      giSchemeJoiningDate: [''],
      groupChangeDate: [''],
      fromDate: [''],
      toDate: [''],
      schemeJoinGroup: [''],
      currentGroup: [''],
      ddoName: [{ value: 'Directorate of Account & Treasury', disabled: true }]
    });
  }

  // on click on search button show table
  search() {
    if (this.employeeLedgerForm.controls['district'].value !== '' || this.employeeLedgerForm.controls['treasuryOfficeName'].value !== '' ||
      this.employeeLedgerForm.controls['employeeNo'].value !== '' || this.employeeLedgerForm.controls['employeeName'].value !== '' ||
      this.employeeLedgerForm.controls['giSchemeJoiningDate'].value !== '' ||
      this.employeeLedgerForm.controls['groupChangeDate'].value !== '' ||
      this.employeeLedgerForm.controls['fromDate'].value !== '' || this.employeeLedgerForm.controls['toDate'].value !== ''
      || this.employeeLedgerForm.controls['schemeJoinGroup'].value !== ''
      || this.employeeLedgerForm.controls['currentGroup'].value !== '') {
      this.showTable = true;
    }
  }

  // open employee number dialog box
  openDialogEmployeeNumber() {
    const dialogRef = this.dialog.open(GiSearchEmployeeComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.employeeLedgerForm.patchValue({
          employeeNo: result[0].employeeNumber,
          employeeName: result[0].employeeName,
          designation: '2',
          district: '2',
          treasuryOfficeName: result[0].treasuryOffice,
          group: '1',
          class: '1',
          schemeJoinDate: result[0].schemeJoinDate,
          schemeJoinGroup: result[0].group,
          currentGroup: result[0].currentGroup,
          groupChangeDate: result[0].groupChangeDate,
          amount: result[0].amount,
        });
      }
    });
  }

}


