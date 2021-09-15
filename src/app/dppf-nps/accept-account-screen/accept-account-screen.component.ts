import { Router } from '@angular/router';
import { CommonDirective } from './../../common/directive/validation.directive';
import { DppfNpsMessage } from './../../common/error-message/common-message.constants';
import { DialogData } from './../../model/change-of-scale';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource, MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { AcceptAccountInterface } from 'src/app/model/dppf-nps';

@Component({
  selector: 'app-accept-account-screen',
  templateUrl: './accept-account-screen.component.html',
  styleUrls: ['./accept-account-screen.component.css']
})
export class AcceptAccountScreenComponent implements OnInit {
  // Variable 
  errorMessage;
  isFatched = false;
  //Date
  todayDate = Date.now();
  maxDate = new Date();
  // Form Group
  acceptAccountScreenForm: FormGroup;
  // Form COntrol
  typeOfYearCtrl: FormControl = new FormControl();
  typeOfMonthCtrl: FormControl = new FormControl();
  typeOfPaymentCtrl: FormControl = new FormControl();
  typeOfTreasuryPaoCtrl: FormControl = new FormControl();
  inwardTypeCtrl: FormControl = new FormControl();
  hbaMcaCtrl: FormControl = new FormControl();
  districtCtrl: FormControl = new FormControl();
  creditDebitCtrl: FormControl = new FormControl();

  //Lists
  creditDebit_list: ListValue[] = [
    { value: '1', viewValue: 'Credit' },
    { value: '2', viewValue: 'Debit' },
  ];
  hbaMca_list: ListValue[] = [
    { value: '1', viewValue: 'HBA' },
    { value: '2', viewValue: 'MCA' },
  ];
  districtList: ListValue[] = [
    { value: '1', viewValue: 'District Treasury Office,Gandhinagar' },
    { value: '2', viewValue: 'District Treasury Office,Ahmedabad' },
    { value: '3', viewValue: 'District Treasury Office,Rajkot' },
  ];

  inwardType_list: ListValue[] = [
    { value: '1', viewValue: 'Top Schedule' },
    { value: '2', viewValue: 'No Due Certificate' },
    { value: '3', viewValue: 'Others' },
    { value: '4', viewValue: 'Cheque / Demand Draft' },
    { value: '5', viewValue: 'Request for Account Generation' },
    { value: '6', viewValue: 'Demand for Interest Conformation Letter' },
    { value: '7', viewValue: 'Demand for NDC' },
    { value: '8', viewValue: 'Demand for refund order' },
    { value: '9', viewValue: 'AGTE Misclassified Entry' },
    { value: '10', viewValue: 'AGTE Clearance Entry(Sent by DPPF)' },
    { value: '11', viewValue: 'Debit/Credit Correction Entry' },
    { value: '12', viewValue: 'AG CA Figure' }

  ];

  classTypeOfYear: ListValue[] = [
    { value: '1', viewValue: '2020 ' },
    { value: '2', viewValue: '2021' },
    { value: '3', viewValue: '2022' },
    { value: '1', viewValue: '2023 ' },
    { value: '2', viewValue: '2024' },
    { value: '3', viewValue: '2025' },
  ];

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

  classTypeOfPayment: ListValue[] = [
    { value: '1', viewValue: 'Credit ' },
    { value: '2', viewValue: 'Debit' },
  ];

  classTypeOfTreasuryPao: ListValue[] = [
    { value: '1', viewValue: 'District Treasury Office,Ahmedabad ' },
    { value: '2', viewValue: 'District Treasury Office,Gandhinagar ' },
  ];

  // Table Data
  Element_Data: AcceptAccountInterface[] = [
    {
      majorHead: '2030',
      creditDebit: 'Credit',
      noOfDocuments: '4',
      amount: '3000',
      tcAmount: '1500',
      grossAmount: '4500',
    },
    {
      majorHead: '2012',
      creditDebit: 'Debit',
      noOfDocuments: '8',
      amount: '3000',
      tcAmount: '2200',
      grossAmount: '5200',
    },
  ];

  displayedColumns: any[] = [
    'select',
    'majorHead',
    'noOfDocuments',
    'amount',
    'tcAmount',
    'grossAmount',
    'action',
  ];
  // Table Source
  dataSource = new MatTableDataSource<AcceptAccountInterface>(this.Element_Data);
  directiveObj = new CommonDirective(this.router);

  constructor(private fb: FormBuilder, public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.errorMessage = DppfNpsMessage;
    this.acceptAccountScreenForm = this.fb.group({
      inwardType: '',
      hbaMcz: '',
      district: '',
      year: '',
      month: '',
      creditDebit: '',
      treasuryPao: '',
      paymentType: '',

    });
  }

  onNonAccept() {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(NotAcceptDialog, {
      width: '1200px',
      height: 'auto',
    }
    );
    dialogRef.afterClosed().subscribe(result => { });
  }

  onAccept() {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(AcceptDialog, {
      width: '1200px',
      height: 'auto',
    }
    );
    dialogRef.afterClosed().subscribe(result => { });
  }

  onFatchData() {
    this.isFatched = true;
  }
}

@Component({
  selector: 'app-not-accept-dialog',
  templateUrl: './not-accept-dialog.html',
})
// tslint:disable-next-line: component-class-suffix
export class NotAcceptDialog implements OnInit {
  errorMessage = DppfNpsMessage;
  notAcceptDialogForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<NotAcceptDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit(): void {
    this.notAcceptDialogForm = this.fb.group({
      reason: [''],
    });
  }

  okClick($event?) {
    this.dialogRef.close();
  }
  onSubmit($event?) {
    if (this.notAcceptDialogForm.valid) {
      this.dialogRef.close();
    }
  }
}

@Component({
  selector: 'app-accept-dialog',
  templateUrl: './accept-dialog.html',
})
// tslint:disable-next-line: component-class-suffix
export class AcceptDialog implements OnInit {
  errorMessage = DppfNpsMessage;
  acceptDialogForm: FormGroup;
  isYes = false;

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<AcceptDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit(): void {
    this.acceptDialogForm = this.fb.group({

    });
  }

  onNo($event?) {
    this.dialogRef.close();
  }
  onYes() {
    this.isYes = !this.isYes;
  }
  onSubmit($event?) {
    if (this.acceptDialogForm.valid) {
      this.dialogRef.close();
    }
  }
}
