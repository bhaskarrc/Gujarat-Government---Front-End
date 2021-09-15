import { SavedCasesDdoSide, SavedCasesDdoSideInstallment } from './../../model/dppf-hba';
import { EmployeeDialogBoxComponent } from './../employee-dialog-box/employee-dialog-box.component';
import { DialogData } from './../../model/change-of-scale';
import { CardexSearchDialogComponent } from './../cardex-search-dialog/cardex-search-dialog.component';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog, MatTableDataSource, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { dppfHbaMessage } from 'src/app/common/error-message/common-message.constants';
import { WorkflowDppfHbaComponent } from '../workflow-dppf-hba/workflow-dppf-hba.component';
import { CommonListing } from 'src/app/model/common-listing';


const ELEMENT_DATA: SavedCasesDdoSide[] = [
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
@Component({
  selector: 'app-saved-case-ddo-side',
  templateUrl: './saved-case-ddo-side.component.html',
  styleUrls: ['./saved-case-ddo-side.component.css']
})
export class SavedCaseDdoSideComponent implements OnInit {
  // Form Group
  savedForm: FormGroup;
  authorityeDetails: FormGroup;
  instalmentsDetails: FormGroup;
  officeDetails: FormGroup;
  loanDetails: FormGroup;
  withdrwalDetails: FormGroup;
  // Date
  todayDate = Date.now();
  maxDate = new Date();
  // Variable
  errorMessages;
  isSelectedOtherPurpose = false;
  isSelectedInstallmentYes = false;
  instrumentDetails = false;
  fileBrowseIndex: number;
  isSubmitted = false;

  // Form Control
  employeClassCtrl: FormControl = new FormControl();
  designationCtrl: FormControl = new FormControl();
  loanFornCtrl: FormControl = new FormControl();
  districtCtrl: FormControl = new FormControl();
  departmentTypeCtrl: FormControl = new FormControl();
  classHodTypeCtrl: FormControl = new FormControl();
  EmployeeclassTypeCtrl: FormControl = new FormControl();
  empTypeCtrl: FormControl = new FormControl();
  purposeLoadCtrl: FormControl = new FormControl();
  ruleCtrl: FormControl = new FormControl();
  ddoNameCodeCtrl: FormControl = new FormControl();
  treaspaoCtrl: FormControl = new FormControl();
  hbaMcaCtrl: FormControl = new FormControl();
  // Table source
  displayedColumns: string[] = ['month', 'year', 'loanSanctionAmount', 'creditDebit',
    'noOfRecoveryInstallments', 'recoveryInstallmentAmount', 'Reason', 'action'];

  installmentColumns: string[] = ['srno', 'mileStone', 'installment', 'action'];
  dataSource = new MatTableDataSource<SavedCasesDdoSide>(ELEMENT_DATA);
  Installment_Data: SavedCasesDdoSideInstallment[] = [
    { mileStone: '', installment: '' }
  ];
  installmentDataSource = new MatTableDataSource<SavedCasesDdoSideInstallment>(this.Installment_Data);
  // List
  attachmentTypeCode: CommonListing[] = [
    { value: '01', viewValue: 'Supporting Document' },
    { value: '02', viewValue: 'Sanction Order' },
    { value: '03', viewValue: 'Others' },
  ];
  designation_List: CommonListing[] = [
    { value: '1', viewValue: 'Under Secretary,URBAN DEVLOPMENT $$ URBAN HOUSING DEPARTMENT, GANDHINAGAR, Gandhinagar ' },
  ];
  emplyeClass_List: CommonListing[] = [
    { value: '1', viewValue: 'Class 1 ' },
    { value: '2', viewValue: 'Class 1 ' },
    { value: '3 ', viewValue: 'Class 3' },
  ];
  load_list: CommonListing[] = [
    { value: '1', viewValue: 'HBA' },
    { value: '2', viewValue: 'MCA' },
  ];
  districtList: CommonListing[] = [
    { value: '1', viewValue: 'District Treasury Office,Gandhinagar' },
    { value: '2', viewValue: 'District Treasury Office,Ahmedabad' },
    { value: '3', viewValue: 'District Treasury Office,Rajkot' },
  ];
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
  hbaMcaList: CommonListing[] = [
    { value: '1', viewValue: 'HBA' },
    { value: '2', viewValue: 'MCA' }
  ];
  purpose_list: CommonListing[] = [
    { value: '1', viewValue: 'Ready Built House' },
    { value: '2', viewValue: 'Construction' },
    { value: '3', viewValue: 'Loan Purchase And Construction' },
    { value: '4', viewValue: 'Construction' },
    { value: '5', viewValue: 'Others' },
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
  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder) { }
  ngOnInit() {
    this.savedData();
    this.errorMessages = dppfHbaMessage;
  }
  // Form Submit data
  savedData() {
    this.savedForm = this.fb.group({
      inwardDate: [{ value: '', disabled: true }],
      employeNo: [''],
      shortName: [''],
      firstName: [''],
      middleName: [''],
      lastName: [''],
      dateOfBirth: [''],
      dateofJoining: [''],
      dateofRetirement: [''],
      gpfPpanNO: [''],
      hbaMca: [''],
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
  // deletes row
  deleteRow(index) {
    this.installmentDataSource.data.splice(index, 1);
    this.installmentDataSource = new MatTableDataSource(this.installmentDataSource.data);
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
  // deletes row
  deleteLoanRow(index) {
    this.dataSource.data.splice(index, 1);
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

  // WorkFlow Popup
  commentGrantDetails(): void {
    const dialogRef = this.dialog.open(WorkflowDppfHbaComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes') {
        // tslint:disable-next-line: no-use-before-declare
        const dialogRef2 = this.dialog.open(GenerateDialog, {
          width: '1200px',
        });
        dialogRef2.afterClosed().subscribe(result2 => { });
      }
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

  // opens cardex no search dialog box
  cardexSearch() {
    const dialogRef = this.dialog.open(CardexSearchDialogComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  // Navigation Route
  navigate() {
    this.router.navigate(['./dppf-hba/saved-process-listing']);
  }
  // open employee dialog box
  employeeNo(): void {
    const dialogRef = this.dialog.open(EmployeeDialogBoxComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}


@Component({
  selector: 'app-generate-dialog',
  templateUrl: './generate-dialog.html',
})
// tslint:disable-next-line: component-class-suffix
export class GenerateDialog implements OnInit {

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<GenerateDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit(): void { }
}
