import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { GiSearchEmployeeComponent } from '../gi-search-employee/gi-search-employee.component';
import { GiEmployeeLedgerAis } from 'src/app/model/group-insurance';

@Component({
  selector: 'app-gi-employee-ledger-ais',
  templateUrl: './gi-employee-ledger-ais.component.html',
  styleUrls: ['./gi-employee-ledger-ais.component.css']
})
export class GiEmployeeLedgerAisComponent implements OnInit {

  // variables
  employeeNoDetails = '1000008764';
  employeeNameDetails = 'Mr. I K Zala';
  designation: 'IPS';
  enrollmentNoDetails = '123456789';
  enrollmentDateDetails = '1-Jan-2019';
  groupDetails = 'A';
  showTable = false;

  // date
  todayDate = new Date();

  // form group
  employeeLedgerForm: FormGroup;

  // Employee Ledger Table data
  employeeLedgerData: GiEmployeeLedgerAis[] = [
    {
      year1: '2019',
      month1: 'January',
      amountOfDeduction1: '120',
      interestFundAmount1: '38',
      savingFundAmount1: '84',
      tcCash1: 'TC',
      voucherChallanNo1: '12',
      voucherChallanDate1: '1-Jan-2019',
      total1: '120',
      ddoNo1: '127463',
      date1: '05/01/2019',
      rs1: '1200'
    },
    {
      year1: '2019',
      month1: 'February',
      amountOfDeduction1: '120',
      interestFundAmount1: '38',
      savingFundAmount1: '84',
      tcCash1: 'TC',
      voucherChallanNo1: '34',
      voucherChallanDate1: '1-Feb-2019',
      total1: '120',
      ddoNo1: '648567',
      date1: '05/02/2019',
      rs1: '1200'
    },
    {
      year1: '2019',
      month1: 'March',
      amountOfDeduction1: '120',
      interestFundAmount1: '38',
      savingFundAmount1: '84',
      tcCash1: 'TC',
      voucherChallanNo1: '54',
      voucherChallanDate1: '1-Mar-2019',
      total1: '120',
      ddoNo1: '936483',
      date1: '05/03/2019',
      rs1: '1200'
    },
    {
      year1: '2019',
      month1: 'April',
      amountOfDeduction1: '120',
      interestFundAmount1: '38',
      savingFundAmount1: '84',
      tcCash1: 'TC',
      voucherChallanNo1: '23',
      voucherChallanDate1: '1-Apr-2019',
      total1: '120',
      ddoNo1: '549364',
      date1: '05/04/2019',
      rs1: '1200'
    },
    {
      year1: '2019',
      month1: 'May',
      amountOfDeduction1: '120',
      interestFundAmount1: '38',
      savingFundAmount1: '84',
      tcCash1: 'TC',
      voucherChallanNo1: '16',
      voucherChallanDate1: '1-May-2019',
      total1: '120',
      ddoNo1: '263846',
      date1: '05/05/2019',
      rs1: '1200'
    },
    {
      year1: '2019',
      month1: 'June',
      amountOfDeduction1: '120',
      interestFundAmount1: '38',
      savingFundAmount1: '84',
      tcCash1: 'TC',
      voucherChallanNo1: '24',
      voucherChallanDate1: '1-Jun-2019',
      total1: '120',
      ddoNo1: '194638',
      date1: '05/06/2019',
      rs1: '1200'
    },
    {
      year1: '2019',
      month1: 'July',
      amountOfDeduction1: '120',
      interestFundAmount1: '38',
      savingFundAmount1: '84',
      tcCash1: 'TC',
      voucherChallanNo1: '65',
      voucherChallanDate1: '1-Jul-2019',
      total1: '120',
      ddoNo1: '119847',
      date1: '05/07/2019',
      rs1: '1200'
    },
    {
      year1: '2019',
      month1: 'August',
      amountOfDeduction1: '120',
      interestFundAmount1: '38',
      savingFundAmount1: '84',
      tcCash1: 'TC',
      voucherChallanNo1: '12',
      voucherChallanDate1: '1-Aug-2019',
      total1: '120',
      ddoNo1: '983748',
      date1: '05/08/2019',
      rs1: '1200'
    },
    {
      year1: '2019',
      month1: 'September',
      amountOfDeduction1: '120',
      interestFundAmount1: '38',
      savingFundAmount1: '84',
      tcCash1: 'Cash',
      voucherChallanNo1: '5367',
      voucherChallanDate1: '1-Sep-2019',
      total1: '120',
      ddoNo1: '289463',
      date1: '05/09/2019',
      rs1: '1200'
    },
    {
      year1: '2019',
      month1: 'October',
      amountOfDeduction1: '120',
      interestFundAmount1: '38',
      savingFundAmount1: '84',
      tcCash1: 'Cash',
      voucherChallanNo1: '8465',
      voucherChallanDate1: '1-Oct-2019',
      total1: '120',
      ddoNo1: '193875',
      date1: '05/10/2019',
      rs1: '1200'
    },
    {
      year1: '2019',
      month1: 'November',
      amountOfDeduction1: '120',
      interestFundAmount1: '38',
      savingFundAmount1: '84',
      tcCash1: 'Cash',
      voucherChallanNo1: '2877',
      voucherChallanDate1: '1-Nov-2019',
      total1: '120',
      ddoNo1: '367483',
      date1: '05/11/2019',
      rs1: '1200'
    },
    {
      year1: '2019',
      month1: 'December',
      amountOfDeduction1: '120',
      interestFundAmount1: '38',
      savingFundAmount1: '84',
      tcCash1: 'Cash',
      voucherChallanNo1: '934',
      voucherChallanDate1: '1-Dec-2019',
      total1: '120',
      ddoNo1: '649498',
      date1: '05/12/2019', rs1: '1200'
    },
  ];
  // header columns
  employeeLedgerDataSourceColumn: string[] = [
    'srno',
    'year',
    'month',
    'amountOfDeduction',
    'interestFundAmount',
    'savingFundAmount',
    'tcCash',
    'voucherChallanNo',
    'voucherChallanDate',
    'total',
    'subscription'
  ];
  employeeLedgerDataSourceColumn1: string[] = [
    'srno1',
    'year1',
    'month1',
    'amountOfDeduction1',
    'interestFundAmount1',
    'savingFundAmount1',
    'tcCash1',
    'voucherChallanNo1',
    'voucherChallanDate1',
    'total1',
    'ddoNo1',
    'date1',
    'rs1'
  ];
  employeeLedgerDataSource = new MatTableDataSource<GiEmployeeLedgerAis>(this.employeeLedgerData);
  // Employee Ledger Table data end

  // constructor
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.employeeLedgerFormData();
  }

  // form data
  employeeLedgerFormData() {
    this.employeeLedgerForm = this.fb.group({
      designation: [{ value: 'IPS', disabled: true }],
      employeeNo: [''],
      employeeName: [''],
      enrollmentNo: [''],
      enrollmentDate: [{ value: '', disabled: true }],
      group: [{ value: 'A', disabled: true }],
      fromDate: [''],
      toDate: [''],
    });
  }

  // on click on search button
  search() {
    if (this.employeeLedgerForm.controls['designation'].value !== '' || this.employeeLedgerForm.controls['employeeNo'].value !== ''
      || this.employeeLedgerForm.controls['employeeName'].value !== '' || this.employeeLedgerForm.controls['enrollmentNo'].value !== ''
      || this.employeeLedgerForm.controls['enrollmentDate'].value !== '' || this.employeeLedgerForm.controls['group'].value !== ''
      || this.employeeLedgerForm.controls['fromDate'].value !== ''
      || this.employeeLedgerForm.controls['toDate'].value !== '') { this.showTable = true; }
  }

  // open employee number
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
          group: '1',
        });
      }
    });
  }

  // enter enrollment date
  enterEnrollmentDate() {
    this.employeeLedgerForm.controls['enrollmentDate'].setValue(new Date('01/01/2019'));
  }

}
