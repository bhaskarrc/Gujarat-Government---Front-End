import { AccountDetailsWithdrawlDetails, AccountDetailsLoanDetails, AccountDetailsInstallmentData } from './../../model/dppf-hba';
import { CommonListing } from 'src/app/model/common-listing';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { WorkflowDppfHbaComponent } from '../workflow-dppf-hba/workflow-dppf-hba.component';
import { InwardNoDialogComponent } from '../inward-no-dialog/inward-no-dialog.component';
import { dppfHbaMessage } from 'src/app/common/error-message/common-message.constants';
import { CardexSearchDialogComponent } from '../cardex-search-dialog/cardex-search-dialog.component';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { DPPFHbaDirectives } from 'src/app/common/directive/dppf-hba';

const ELEMENT_DATA: AccountDetailsLoanDetails[] = [
  {
    month: '',
    year: '',
    loanSanctionAmount: '',
    creditDebit: '',
    noOfRecoveryInstallments: '',
    recoveryInstallmentAmount: '',
    Reason: '',
  }
];
const ELEMENT_Details2: AccountDetailsWithdrawlDetails[] = [
  {
    amount: '',
    date: '',
    district: '',
    cardexNo: '',
    noOfRecoveryInstallments: '',
    recoveryInstallmentAmount: '',
    Reason: ''
  }
];

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {
  // Date
  todayDate = Date.now();
  maxDate = new Date();
  isSelectedOtherPurpose = false;
  // List
  departmentType_list: CommonListing[] = [
    { value: '1', viewValue: 'Education Department' },
    { value: '2', viewValue: 'Finance Department' },
    { value: '3', viewValue: 'Home Department' },
    { value: '4', viewValue: 'Legal Department' },
    { value: '5', viewValue: 'Revenue Department' },
    { value: '6', viewValue: ' Ports and Fisheries Department' }
  ];

  classHodType: CommonListing[] = [
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '2' },
  ];

  gender_list: CommonListing[] = [
    { value: '1', viewValue: 'Male' },
    { value: '2', viewValue: 'Female' },
  ];
  employeeClass_list: CommonListing[] = [
    { value: '1', viewValue: 'Class-I' },
    { value: '2', viewValue: 'Class-II' },
    { value: '3', viewValue: 'Class-III' },
    { value: '4', viewValue: 'Class-IV' },
    { value: '5', viewValue: 'Other' },
  ];
  emp_list: CommonListing[] = [
    { value: '1', viewValue: 'IAS' },
    { value: '2', viewValue: 'IPS' },
    { value: '2', viewValue: 'IFS' },
    { value: '2', viewValue: 'GAS' },
    { value: '2', viewValue: 'OTHER' }
  ];
  loanDisInstallment_list: CommonListing[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];
  year_list: CommonListing[] = [
    { value: '1', viewValue: '2009' },
    { value: '2', viewValue: '2010' },
    { value: '3', viewValue: '2011' },
    { value: '4', viewValue: '2012' },
    { value: '5', viewValue: '2013' },
    { value: '6', viewValue: '2014' },
    { value: '7', viewValue: '2015' },
    { value: '8', viewValue: '2016' },
    { value: '9', viewValue: '2017' },
    { value: '10', viewValue: '2018' },
    { value: '11', viewValue: '2019' },
    { value: '12', viewValue: '2020' },
  ];
  month_list: CommonListing[] = [
    { value: '1', viewValue: 'Jan' },
    { value: '2', viewValue: 'Feb' },
    { value: '3', viewValue: 'Mar' },
    { value: '4', viewValue: 'Apr' },
    { value: '5', viewValue: 'May' },
    { value: '6', viewValue: 'Jun' },
    { value: '7', viewValue: 'Jul' },
    { value: '8', viewValue: 'Aug' },
    { value: '9', viewValue: 'Sep' },
    { value: '10', viewValue: 'Oct' },
    { value: '11', viewValue: 'Nov' },
    { value: '12', viewValue: 'Dec' },

  ];
  credit_list: CommonListing[] = [
    { value: '1', viewValue: 'Credit' },
    { value: '2', viewValue: 'Debit' }
  ];
  rule_list: CommonListing[] = [
    { value: '1', viewValue: 'State' },
    { value: '2', viewValue: 'Central' }
  ];
  purpose_list: CommonListing[] = [
    { value: '1', viewValue: 'Ready Built House' },
    { value: '2', viewValue: 'Construction' },
    { value: '3', viewValue: 'Society' },
    { value: '4', viewValue: 'Loan Purchase And Construction' },
    { value: '5', viewValue: 'Others' },
  ];
  districtList: CommonListing[] = [
    { value: '1', viewValue: 'District Treasury Office,Gandhinagar' },
    { value: '2', viewValue: 'District Treasury Office,Ahmedabad' },
    { value: '3', viewValue: 'District Treasury Office,Rajkot' },
  ];

  DDO_Name_list: CommonListing[] = [
    { value: '1', viewValue: 'Shri Arun Mahesh Babu MS' },
    { value: '2', viewValue: 'Shri C.M. Padalia' },
    { value: '3', viewValue: 'Shri Amit Prakash Yadav' },
  ];
  TESPAO_list: CommonListing[] = [
    { value: '1', viewValue: '202154641' },
    { value: '2', viewValue: '2021545456' },
    { value: '3', viewValue: '202154' },
  ];
  designation_list: CommonListing[] = [
    { value: '1', viewValue: 'Deputy Accountant' }
  ];
  instrumentDetails = false;
  // FormControl
  designationCtrl: FormControl = new FormControl();
  accountDetailsForm: FormGroup;
  authorityeDetails: FormGroup;
  instalmentsDetails: FormGroup;
  officeDetails: FormGroup;
  loanDetails: FormGroup;
  withdrwalDetails: FormGroup;
  departmentTypeCtrl: FormControl = new FormControl();
  classHodTypeCtrl: FormControl = new FormControl();
  EmployeeclassTypeCtrl: FormControl = new FormControl();
  empTypeCtrl: FormControl = new FormControl();
  districtCtrl: FormControl = new FormControl();
  purposeLoadCtrl: FormControl = new FormControl();
  ruleCtrl: FormControl = new FormControl();
  ddoNameCodeCtrl: FormControl = new FormControl();
  treaspaoCtrl: FormControl = new FormControl();
  districtDDCtrl: FormControl = new FormControl();
  // Table source
  displayedColumns: string[] = ['month', 'year', 'loanSanctionAmount', 'creditDebit',
    'noOfRecoveryInstallments', 'recoveryInstallmentAmount', 'Reason', 'action'];
  displayedColumnsDetails: string[] = ['amount', 'date', 'voucher', 'district', 'cardexNo',
    'ddo', 'treasury', 'action'];
  installmentColumns: string[] = ['srno', 'mileStone', 'installment', 'action'];
  dataSource = new MatTableDataSource<AccountDetailsLoanDetails>(ELEMENT_DATA);
  dataSourceDetails = new MatTableDataSource<AccountDetailsWithdrawlDetails>(ELEMENT_Details2);
  Installment_Data: AccountDetailsInstallmentData[] = [
    { mileStone: '', installment: '' }
  ];
  installmentDataSource = new MatTableDataSource<AccountDetailsInstallmentData>(this.Installment_Data);
  // variable
  public errorMessages;
  isSubmitted;
  isSelectedInstallmentYes = false;
  directiveObj = new CommonDirective(this.router);
  directiveObject = new DPPFHbaDirectives(this.dialog);
  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder) { }

  ngOnInit() {
    this.errorMessages = dppfHbaMessage;
    this.accountDetailsData();
  }

  accountDetailsData() {
    this.accountDetailsForm = this.fb.group({
      inwardNo: [''],
      hbaNo: [''],
      hbaAccountNo: [''],
      inwardDate: [''],
      shortName: [''],
      empId: [''],
      firstName: [''],
      middleName: [''],
      lastName: [''],
      dateOfBirth: [''],
      gpfNo: ['']
    });

    this.officeDetails = this.fb.group({
      departmentType: [''],
      hod: [''],
      gender: [''],
      designation: [''],
      employeeClass: [''],
      officeName: [''],
      officeAdd: [''],
      empType: [''],
      district: [''],
      basicPay: ['']
    });

    this.authorityeDetails = this.fb.group({
      orderNo: [''],
      majorHead: [''],
      authorityName: [''],
      authorityoffice: [''],
      snactionDate: [''],
      authitorDesignation: [''],

    });
    this.loanDetails = this.fb.group({
      rule: [''],
      purposeLoad: [''],
      totalLoanAmount: [''],
      probableRecovery: [''],
      interstedIssue: [''],
      nothing: [''],
      rateOfInterst: [''],
      otherPurpose: ['']

    });
    this.withdrwalDetails = this.fb.group({
      loanDisInstallment: ['']
    });
    this.instalmentsDetails = this.fb.group({
      loanDisInstallment: ['']
    });

  }


  // adds row in the installment table
  addRow() {
    this.installmentDataSource.data.push({ mileStone: '', installment: '' });
    this.installmentDataSource = new MatTableDataSource(this.installmentDataSource.data);
  }
  // adds row in the WithdrwalDetails table
  addWithdrwalDetailsRow() {
    this.dataSourceDetails.data.push({
      amount: '',
      date: '',
      district: '',
      cardexNo: '',
      noOfRecoveryInstallments: '',
      recoveryInstallmentAmount: '',
      Reason: ''
    });
    this.dataSourceDetails = new MatTableDataSource(this.dataSourceDetails.data);
  }

  // adds row in loan table
  addLoanRow() {
    this.dataSource.data.push({
      month: '',
      year: '',
      loanSanctionAmount: '',
      creditDebit: '',
      noOfRecoveryInstallments: '',
      recoveryInstallmentAmount: '',
      Reason: '',
    });
    this.dataSource = new MatTableDataSource(this.dataSource.data);
  }

  // sets value on selection of installment type
  selectInstallment(option) {
    if (option === '1') {
      this.isSelectedInstallmentYes = true;
    } else {
      this.isSelectedInstallmentYes = false;
    }
  }

  // opens cardex no search dialog box
  cardexSearch() {
    const dialogRef = this.dialog.open(CardexSearchDialogComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  // sets value on selection of purpose
  selectPurpose(type) {
    if (type === '5') {
      this.isSelectedOtherPurpose = true;
    } else {
      this.isSelectedOtherPurpose = false;
    }
  }



  // opens inward no dialog box
  inwardNo(): void {
    const dialogRef = this.dialog.open(InwardNoDialogComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  // navigation Route
  navigate() {
    this.router.navigate(['./dppf-hba/account-details-generation-listing']);
  }

}
