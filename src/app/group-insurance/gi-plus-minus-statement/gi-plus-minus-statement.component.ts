import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { GroupInsuranceMessage } from 'src/app/common/error-message/common-message.constants';
import { PlusMinusStatement, ReceiptData, ExpenditureData } from 'src/app/model/group-insurance';
import { CommonListing } from 'src/app/model/common-listing';
import { GroupInsuranceDirective } from 'src/app/common/directive/group-insurance-directive';

@Component({
  selector: 'app-gi-plus-minus-statement',
  templateUrl: './gi-plus-minus-statement.component.html',
  styleUrls: ['./gi-plus-minus-statement.component.css']
})
export class GiPlusMinusStatementComponent implements OnInit {

  // variables
  showTable = false;
  errorMessages = GroupInsuranceMessage;
  // date
  todayDate = new Date();
  // form group
  plusMinusForm: FormGroup;
  // form control
  districtCtrl: FormControl = new FormControl();
  monthCtrl: FormControl = new FormControl();
  yearCtrl: FormControl = new FormControl();
  headOfAccountCtrl: FormControl = new FormControl();
  treasuryOfficeAhmedabadCtrl: FormControl = new FormControl();
  treasuryOfficeGandhinagarCtrl: FormControl = new FormControl();

  // directive object for workflow dialog
  directiveObject = new GroupInsuranceDirective(this.dialog);

  // List of Years
  yearList: CommonListing[] = [
    { value: '1', viewValue: '2005' },
    { value: '2', viewValue: '2006' },
    { value: '3', viewValue: '2007' },
    { value: '4', viewValue: '2008' },
    { value: '5', viewValue: '2009' },
    { value: '6', viewValue: '2010' },
    { value: '7', viewValue: '2011' },
    { value: '8', viewValue: '2012' },
    { value: '9', viewValue: '2013' },
    { value: '10', viewValue: '2014' },
    { value: '11', viewValue: '2015' },
    { value: '12', viewValue: '2016' },
    { value: '13', viewValue: '2017' },
    { value: '14', viewValue: '2018' },
    { value: '15', viewValue: '2019' },
    { value: '16', viewValue: '2020' },
  ];

  // List of Months
  monthList: CommonListing[] = [
    { value: '1', viewValue: 'January' },
    { value: '2', viewValue: 'February' },
    { value: '3', viewValue: 'March' },
    { value: '4', viewValue: 'April' },
    { value: '5', viewValue: 'May' },
    { value: '6', viewValue: 'June' },
    { value: '7', viewValue: 'July' },
    { value: '8', viewValue: 'August' },
    { value: '9', viewValue: 'Sepetember' },
    { value: '10', viewValue: 'October' },
    { value: '11', viewValue: 'November' },
    { value: '12', viewValue: 'December' },
  ];

  // List of Account Head
  headOfAccountList: CommonListing[] = [
    { value: '1', viewValue: 'Insurance Fund' },
    { value: '2', viewValue: 'Saving Fund' }
  ];

  // Table Data for Insurance Saving
  insuranceSavingDetailsData: PlusMinusStatement[] = [
    {
      headOfAccount: '1',
      openingBalance: '99753289.50',
      receivedAmount: '795.00',
      total: '99754084.50',
      payment: '400000.00',
      adjustment: '0.00',
      closingBalance: '400000.00'
    },
    {
      headOfAccount: '2',
      openingBalance: '1792959845.00',
      receivedAmount: '1855.00',
      total: '1792961700.00',
      payment: '285492.00',
      adjustment: '0.00',
      closingBalance: '285492.00'
    },
  ];

  // Table Columns for Insurance Saving Details Table
  insuranceSavingDetailsDataColumn: string[] = [
    'headOfAccount', 'openingBalance', 'receivedAmount', 'total', 'payment', 'adjustment', 'closingBalance'
  ];

  // Table Data for Receipt Table
  receiptData: ReceiptData[] = [
    {
      totalNumberOfEmployee: '10',
      a: '5',
      b: '2',
      c: '2',
      d: '1'
    },
  ];

  // Table Columns for Receipt Table
  receiptDataColumn: string[] = [
    'totalNumberOfEmployee', 'a', 'b', 'c', 'd',
  ];

  // Table Columns for Receipt Table
  receiptDataColumnFooter: string[] = [
    'totalNumberOfEmployeeFooter', 'dFooter',
  ];

  // List of District
  districtList: CommonListing[] = [
    { value: '1', viewValue: 'Ahmedabad' },
    { value: '2', viewValue: 'Gandhinagar' },
    { value: '3', viewValue: 'Vadodara' },
    { value: '4', viewValue: 'Surat' },
    { value: '5', viewValue: 'Rajkot' },
    { value: '6', viewValue: 'Anand' },
    { value: '7', viewValue: 'Bharuch' },
    { value: '8', viewValue: 'Valsad' },
    { value: '9', viewValue: 'Navsari' },
    { value: '10', viewValue: 'Dang' },
  ];

  // List of Treasury Offices in Gandhinagar
  treasuryOfficeGandhinagarList: CommonListing[] = [
    { value: '1', viewValue: 'Treasury Office, Gandhinagar' },
    { value: '2', viewValue: 'PAO, Gandhinagar' },
  ];

  // List of Treasury Offices in Ahmedabad
  treasuryOfficeAhmedabadList: CommonListing[] = [
    { value: '1', viewValue: 'Treasury Office, Ahmedabad' },
    { value: '2', viewValue: 'PAO, Ahmedabad' },
  ];

  // Table Data for Expenditure Table
  expenditureData: ExpenditureData[] = [
    {
      totalNumberOfEmployee: '1',
      group: 'A',
      insuranceFund: '400000',
      savingFund: '140390',
      total: '540390',
    },
    {
      totalNumberOfEmployee: '2',
      group: 'B',
      insuranceFund: '0',
      savingFund: '95244',
      total: '95244',
    },
    {
      totalNumberOfEmployee: '1',
      group: 'C',
      insuranceFund: '0',
      savingFund: '49858',
      total: '49858',
    },
    {
      totalNumberOfEmployee: '0',
      group: 'D',
      insuranceFund: '0',
      savingFund: '0',
      total: '0',
    },
  ];

  // Table Columns for Expenditure Table
  expenditureDataColumn: string[] = [
    'totalNumberOfEmployee',
    'group',
    'insuranceFund',
    'savingFund',
    'total'
  ];

  // Table Columns for Expenditure Footer
  expenditureDataColumnFooter: string[] = [
    'totalNumberOfEmployee',
    'insuranceFund',
    'savingFund',
    'total'
  ];

  // datasource
  insuranceSavingDetailsDataSource = new MatTableDataSource<PlusMinusStatement>(this.insuranceSavingDetailsData);
  receiptDataSource = new MatTableDataSource<ReceiptData>(this.receiptData);
  expenditureDataSource = new MatTableDataSource<ExpenditureData>(this.expenditureData);

  // constructor
  constructor(private fb: FormBuilder, public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.plusMinusFormData();
  }

  // form data
  plusMinusFormData() {
    this.plusMinusForm = this.fb.group({
      district: [''],
      treasuryOffice: [''],
      month: [''],
      year: [''],
      districtLabel: ['Gandhinagar'],
      fromDateLabel: ['1/5/2019'],
      treasuryOfficeNameLabel: ['District Trasury Office, Gandhinagar'],
      endDateLabel: ['31/5/2019'],
      monthAndYearLabel: ['May-19'],
      treasuryOfficeAhmedabad: [''],
      treasuryOfficeGandhinagar: [''],
    });
  }

  // on click on search button show table
  showResult(e) {
    e.preventDefault();
    if (this.plusMinusForm.controls['district'].value !== '' || this.plusMinusForm.controls['month'].value !== ''
      || this.plusMinusForm.controls['year'].value !== '' || this.plusMinusForm.controls['treasuryOffice'].value !== '') {
      this.showTable = true;
    }
  }

  // reset form
  resetForm() {
    this.plusMinusForm.reset();
  }

  // go to listing
  goToListing() {
    this.router.navigate(['/gi/plus-minus-statement-listing']);
  }

  // calculate total opening balance
  totalOpeningBalance() {
    let amountExp = 0;
    this.insuranceSavingDetailsDataSource.data.forEach((element) => {
      amountExp = amountExp + Number(element.openingBalance);
    });
    return amountExp;
  }

  // calculate received amount
  totalReceicedAmount() {
    let amountExp = 0;
    this.insuranceSavingDetailsDataSource.data.forEach((element) => {
      amountExp = amountExp + Number(element.receivedAmount);
    });
    return amountExp;
  }

  // calculate total
  totalBalance() {
    let amountExp = 0;
    this.insuranceSavingDetailsDataSource.data.forEach((element) => {
      amountExp = amountExp + Number(element.total);
    });
    return amountExp;
  }

  // calculate total paid amount
  totalPaidAmount() {
    let amountExp = 0;
    this.insuranceSavingDetailsDataSource.data.forEach((element) => {
      amountExp = amountExp + Number(element.payment);
    });
    return amountExp;
  }

  // calculate total adjustment
  totalAdjustment() {
    let amountExp = 0;
    this.insuranceSavingDetailsDataSource.data.forEach((element) => {
      amountExp = amountExp + Number(element.adjustment);
    });
    return amountExp;
  }

  // calculate closing balance
  totalClosingBalance() {
    let amountExp = 0;
    this.insuranceSavingDetailsDataSource.data.forEach((element) => {
      amountExp = amountExp + Number(element.closingBalance);
    });
    return amountExp;
  }

  // calculate insurance fund
  expenditureInsuranceFundTotal() {
    let amountExp = 0;
    this.expenditureDataSource.data.forEach((element) => {
      amountExp = amountExp + Number(element.insuranceFund);
    });
    return amountExp;
  }

  // calculate saving fund
  expenditureSavingFund() {
    let amountExp = 0;
    this.expenditureDataSource.data.forEach((element) => {
      amountExp = amountExp + Number(element.savingFund);
    });
    return amountExp;
  }

  // calculate total
  expenditureTotal() {
    let amountExp = 0;
    this.expenditureDataSource.data.forEach((element) => {
      amountExp = amountExp + Number(element.total);
    });
    return amountExp;
  }

  // on basis of district update treasury office name
  updateOffice() {
    this.plusMinusForm.controls['treasuryOffice'].setValue('District Treasury Office, ' +
      this.districtList[this.plusMinusForm.controls['district'].value - 1].viewValue);
  }


}
