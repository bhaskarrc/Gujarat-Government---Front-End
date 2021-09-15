import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { GroupInsuranceMessage } from 'src/app/common/error-message/common-message.constants';
import { GiExpenditureStatement } from 'src/app/model/group-insurance';
import { CommonListing } from 'src/app/model/common-listing';

@Component({
  selector: 'app-gi-expenditure-statement',
  templateUrl: './gi-expenditure-statement.component.html',
  styleUrls: ['./gi-expenditure-statement.component.css']
})
export class GiExpenditureStatementComponent implements OnInit {

  // variables
  showTable = false;
  errorMessages = GroupInsuranceMessage;

  // date
  todayDate = new Date();
  // form group
  expenditureStatementForm: FormGroup;
  // form control
  districtCtrl: FormControl = new FormControl();
  monthCtrl: FormControl = new FormControl();
  yearCtrl: FormControl = new FormControl();
  treasuryOfficeAhmedabadCtrl: FormControl = new FormControl();
  treasuryOfficeGandhinagarCtrl: FormControl = new FormControl();


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

  // List of Month
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

  // List of Treasury Office Gandhinagar
  treasuryOfficeGandhinagarList: CommonListing[] = [
    { value: '1', viewValue: 'Treasury Office, Gandhinagar' },
    { value: '2', viewValue: 'PAO, Gandhinagar' },
  ];

  // List of Treasury Office Ahmedabad
  treasuryOfficeAhmedabadList: CommonListing[] = [
    { value: '1', viewValue: 'Treasury Office, Ahmedabad' },
    { value: '2', viewValue: 'PAO, Ahmedabad' },
  ];

  // Table Data for Expenditure Statement Table
  expenditureStatementData: GiExpenditureStatement[] = [
    {
      date: '', employeeNo: '', employeeName: '', ddoName: '', expiredInsuranceA: '', expiredInsuranceB: '',
      expiredInsuranceC: '', expiredInsuranceD: '', expiredSavingA: '', expiredSavingB: '',
      expiredSavingC: '', expiredSavingD: '', retrivedSavingA: '', retrivedSavingB: '',
      retrivedSavingC: '', retrivedSavingD: '', total: ''
    }
  ];
  expenditureStatementDataColumn: string[] = [
    'srno', 'date', 'employeeNo', 'employeeName', 'ddoName', 'expiredInsuranceA', 'expiredInsuranceB',
    'expiredInsuranceC', 'expiredInsuranceD', 'expiredSavingA', 'expiredSavingB', 'expiredSavingC',
    'expiredSavingD', 'retrivedSavingA', 'retrivedSavingB', 'retrivedSavingC', 'retrivedSavingD', 'total'
  ];
  expenditureStatementDataSource = new MatTableDataSource<GiExpenditureStatement>(this.expenditureStatementData);
  // Table Data for Expenditure Statement end

  // constructor
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.expenditureStatementFormData();
  }

  // form data
  expenditureStatementFormData() {
    this.expenditureStatementForm = this.fb.group({
      treasuryOffice: [''],
      district: [''],
      month: [''],
      year: [''],
      treasuryOfficeAhmedabad: [''],
      treasuryOfficeGandhinagar: ['']
    });
  }

  // sets treasury office on basis of district
  updateOffice() {
    this.expenditureStatementForm.controls['treasuryOffice'].setValue('District Treasury Office, ' +
      this.districtList[this.expenditureStatementForm.controls['district'].value - 1].viewValue);
  }

  // on click on search button
  showResult(e) {
    e.preventDefault();
    if (
      this.expenditureStatementForm.controls['treasuryOffice'].value !== '' ||
      this.expenditureStatementForm.controls['district'].value !== '' || this.expenditureStatementForm.controls['year'].value !== '' ||
      this.expenditureStatementForm.controls['month'].value !== '' ||
      this.expenditureStatementForm.controls['treasuryOfficeGandhinagar'].value !== '' ||
      this.expenditureStatementForm.controls['treasuryOfficeAhmedabad'].value !== ''
    ) {
      this.showTable = true;
    }
  }

  // calculate total expired insurance A
  totalExpiredInsuranceA(): number {
    let total = 0;
    this.expenditureStatementDataSource.data.forEach((element) => {
      total = total + Number(element.expiredInsuranceA);
    });
    return total;
  }

  // calculate total expired insurance B
  totalExpiredInsuranceB(): number {
    let total = 0;
    this.expenditureStatementDataSource.data.forEach((element) => {
      total = total + Number(element.expiredInsuranceB);
    });
    return total;
  }

  // calculate total expired insurance C
  totalExpiredInsuranceC(): number {
    let total = 0;
    this.expenditureStatementDataSource.data.forEach((element) => {
      total = total + Number(element.expiredInsuranceC);
    });
    return total;
  }

  // calculate total expired insurance D
  totalExpiredInsuranceD(): number {
    let total = 0;
    this.expenditureStatementDataSource.data.forEach((element) => {
      total = total + Number(element.expiredInsuranceD);
    });
    return total;
  }

  // calculate total expired saving A
  totalExpiredSavingA(): number {
    let total = 0;
    this.expenditureStatementDataSource.data.forEach((element) => {
      total = total + Number(element.expiredSavingA);
    });
    return total;
  }

  // calculate total expired saving B
  totalExpiredSavingB(): number {
    let total = 0;
    this.expenditureStatementDataSource.data.forEach((element) => {
      total = total + Number(element.expiredSavingB);
    });
    return total;
  }

  // calculate total expired saving C
  totalExpiredSavingC(): number {
    let total = 0;
    this.expenditureStatementDataSource.data.forEach((element) => {
      total = total + Number(element.expiredSavingC);
    });
    return total;
  }

  // calculate total expired saving D
  totalExpiredSavingD(): number {
    let total = 0;
    this.expenditureStatementDataSource.data.forEach((element) => {
      total = total + Number(element.expiredSavingD);
    });
    return total;
  }

  // calculate total retrived saving A
  totalRetrivedSavingA(): number {
    let total = 0;
    this.expenditureStatementDataSource.data.forEach((element) => {
      total = total + Number(element.retrivedSavingA);
    });
    return total;
  }

  // calculate total retrived saving B
  totalRetrivedSavingB(): number {
    let total = 0;
    this.expenditureStatementDataSource.data.forEach((element) => {
      total = total + Number(element.retrivedSavingB);
    });
    return total;
  }

  // calculate total retrived saving C
  totalRetrivedSavingC(): number {
    let total = 0;
    this.expenditureStatementDataSource.data.forEach((element) => {
      total = total + Number(element.retrivedSavingC);
    });
    return total;
  }

  // calculate total retrived saving D
  totalRetrivedSavingD(): number {
    let total = 0;
    this.expenditureStatementDataSource.data.forEach((element) => {
      total = total + Number(element.retrivedSavingD);
    });
    return total;
  }

}
