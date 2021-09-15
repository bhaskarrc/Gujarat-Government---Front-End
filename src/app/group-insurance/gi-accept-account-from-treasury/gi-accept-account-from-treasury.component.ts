import { Component, OnInit } from '@angular/core';
import { GroupInsuranceMessage } from 'src/app/common/error-message/common-message.constants';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatDialogRef, MatDialog, MatTableDataSource } from '@angular/material';
import { ListValue } from 'src/app/model/common-grant';
import { AcceptAccountFromTreasury } from 'src/app/model/group-insurance';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { Router } from '@angular/router';


/**  GiAcceptAccountFromTreasuryComponent starts */
@Component({
  selector: 'app-gi-accept-account-from-treasury',
  templateUrl: './gi-accept-account-from-treasury.component.html',
  styleUrls: ['./gi-accept-account-from-treasury.component.css']
})
export class GiAcceptAccountFromTreasuryComponent implements OnInit {

  // date
  todayDate = Date.now();
  maxDate = new Date();
  previousMonth = new Date().getMonth() - 1;

  // form group
  acceptAccountScreenForm: FormGroup;

  // variable
  errorMessage;

  // form control
  typeOfYearCtrl: FormControl = new FormControl();
  typeOfMonthCtrl: FormControl = new FormControl();
  typeOfPaymentCtrl: FormControl = new FormControl();
  employeeTypeCtrl: FormControl = new FormControl();
  districtCtrl: FormControl = new FormControl();
  treasuryOfficeCtrl: FormControl = new FormControl();

  // directive object for checkbox
  directiveObj = new CommonDirective(this.route);

  // List of Treasury Office Names
  treasuryOfficeNameList = [];

  // List of Class Type of Year
  classTypeOfYear: ListValue[] = [
    { value: '1', viewValue: '2020 ' },
    { value: '2', viewValue: '2021' },
    { value: '3', viewValue: '2022' },
    { value: '1', viewValue: '2023 ' },
    { value: '2', viewValue: '2024' },
    { value: '3', viewValue: '2025' },
  ];

  // List of Class Type of Month
  classTypeOfMonth: ListValue[] = [
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

  // List of Class Type of Payment
  classTypeOfPayment: ListValue[] = [
    { value: '1', viewValue: 'Credit ' },
    { value: '2', viewValue: 'Debit' },
  ];

  // List of class type of Treasury PAO
  classTypeOfTreasuryPao: ListValue[] = [
    { value: '1', viewValue: 'District Treasury Office,Ahmedabad ' },
    { value: '2', viewValue: 'District Treasury Office,Gandhinagar ' },
  ];

  // List of Employee Type
  employeeTypeList: ListValue[] = [
    { value: '1', viewValue: 'State Employee' },
    { value: '2', viewValue: 'AIS Employee' },
  ];

  // List of District
  districtList: ListValue[] = [
    { value: '1', viewValue: 'Ahmedabad' },
    { value: '2', viewValue: 'Gandhinagar' },
    { value: '3', viewValue: 'Vadodara' },
    { value: '4', viewValue: 'Surat' },
    { value: '5', viewValue: 'Bharuch' },
    { value: '6', viewValue: 'Anand' },
    { value: '7', viewValue: 'Valsad' },
    { value: '8', viewValue: 'Dang' },
  ];

  // table data entry
  elementData: AcceptAccountFromTreasury[] = [
    {
      select: '',
      majorHead: '2014',
      accountType: 'Credit',
      noOfDocuments: '4',
      amount: '3000',
      tcAmount: '1500',
      grossAmount: '4500',
    },
    {
      select: '',
      majorHead: '2054',
      accountType: 'Credit',
      noOfDocuments: '8',
      amount: '3000',
      tcAmount: '2200',
      grossAmount: '5200',
    },
  ];
  displayedColumns: String[] = [
    'select',
    'majorHead',
    'accountType',
    'noOfDocuments',
    'amount',
    'tcAmount',
    'grossAmount',
    'action',
  ];
  dataSource = new MatTableDataSource<AcceptAccountFromTreasury>(this.elementData);
  // table data end

  // constructor
  constructor(private fb: FormBuilder, public dialog: MatDialog, private route: Router) { }

  ngOnInit() {
    this.errorMessage = GroupInsuranceMessage;
    this.acceptAccountScreenForm = this.fb.group({
      year: ['1'],
      month: this.classTypeOfMonth[this.previousMonth].value,
      paymentType: [''],
      employeeType: [''],
      district: [''],
      treasuryOffice: [''],
      treasuryOfficeOther: [''],

    });
  }

  // open dialog box on click on not aceept button
  onNonAccept() {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(NotAcceptDialog, {
      width: '1200px',
      height: 'auto',
    }
    );
    dialogRef.afterClosed().subscribe(result => { });
  }

  // on basis of selecting district show treasury office name field
  onSelectingDistrict(event) {


    if (event.value === '1') {
      const treasuryList = [];
      treasuryList.push({
        value: '1', viewValue: 'Treasury Office, '
          + this.districtList[this.acceptAccountScreenForm.controls['district'].value - 1].viewValue
      },
        { value: '2', viewValue: 'PAO, ' + this.districtList[this.acceptAccountScreenForm.controls['district'].value - 1].viewValue });

      this.treasuryOfficeNameList = treasuryList;
    }
    if (event.value === '2') {
      const treasuryList = [];
      treasuryList.push({
        value: '1', viewValue: 'Treasury Office, '
          + this.districtList[this.acceptAccountScreenForm.controls['district'].value - 1].viewValue
      },
        { value: '2', viewValue: 'PAO, ' + this.districtList[this.acceptAccountScreenForm.controls['district'].value - 1].viewValue },

      );

      this.treasuryOfficeNameList = treasuryList;
    }
    if (event.value !== '2' && event.value !== '1') {
      this.acceptAccountScreenForm.controls['treasuryOfficeOther'].setValue('District Treasury Office, ' +
        this.districtList[this.acceptAccountScreenForm.controls['district'].value - 1].viewValue);
    }
  }

}
/**  GiAcceptAccountFromTreasuryComponent ends */



/**  NotAcceptDialog start */
@Component({
  selector: 'app-not-accept-dialog',
  templateUrl: './not-accept-dialog.html',
})
// tslint:disable-next-line: component-class-suffix
export class NotAcceptDialog implements OnInit {

  // variable
  errorMessage = GroupInsuranceMessage;

  // form group
  notAcceptDialogForm: FormGroup;

  // constructor
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<NotAcceptDialog>
  ) { }

  ngOnInit(): void {
    this.notAcceptDialogForm = this.fb.group({
      reason: [''],
    });
  }

  // on click on close
  okClick($event?) {
    this.dialogRef.close();
  }
  /**  NotAcceptDialog end */

}
