import { CommonListing } from 'src/app/model/common-listing';
import { dppfHbaMessage } from './../../common/error-message/common-message.constants';
import { DialogData } from './../../model/change-of-scale';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { AcceptAccountInterface, AcceptAccountHeadData } from 'src/app/model/dppf-hba';
import { DPPFHbaDirectives } from 'src/app/common/directive/dppf-hba';
import { Router } from '@angular/router';



@Component({
  selector: 'app-accept-account-screen',
  templateUrl: './accept-account-screen.component.html',
  styleUrls: ['./accept-account-screen.component.css']
})
export class AcceptAccountScreenComponent implements OnInit {
  // Variable
  errorMessage;
  todayDate = Date.now();
  maxDate = new Date();
  isFatched = false;
  // Form Group
  acceptAccountScreenForm: FormGroup;
  // Form Controls
  typeOfYearCtrl: FormControl = new FormControl();
  typeOfMonthCtrl: FormControl = new FormControl();
  typeOfPaymentCtrl: FormControl = new FormControl();
  typeOfTreasuryPaoCtrl: FormControl = new FormControl();
  inwardTypeCtrl: FormControl = new FormControl();
  hbaMcaCtrl: FormControl = new FormControl();
  districtCtrl: FormControl = new FormControl();
  creditDebitCtrl: FormControl = new FormControl();

  // Lists
  creditDebit_list: CommonListing[] = [
    { value: '1', viewValue: 'Credit' },
    { value: '2', viewValue: 'Debit' },
  ];
  hbaMca_list: CommonListing[] = [
    { value: '1', viewValue: 'HBA' },
    { value: '2', viewValue: 'MCA' },
  ];
  districtList: CommonListing[] = [
    { value: '1', viewValue: 'District Treasury Office,Gandhinagar' },
    { value: '2', viewValue: 'District Treasury Office,Ahmedabad' },
    { value: '3', viewValue: 'District Treasury Office,Rajkot' },
  ];

  inwardType_list: CommonListing[] = [
    { value: '1', viewValue: 'Top Schedule' },
    // { value: '2', viewValue: 'No Due Certificate' },
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

  classTypeOfYear: CommonListing[] = [
    { value: '1', viewValue: '2020 ' },
    { value: '2', viewValue: '2021' },
    { value: '3', viewValue: '2022' },
    { value: '1', viewValue: '2023 ' },
    { value: '2', viewValue: '2024' },
    { value: '3', viewValue: '2025' },
  ];

  classTypeOfMonth: CommonListing[] = [
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

  classTypeOfPayment: CommonListing[] = [
    { value: '1', viewValue: 'Credit ' },
    { value: '2', viewValue: 'Debit' },
  ];

  classTypeOfTreasuryPao: CommonListing[] = [
    { value: '1', viewValue: 'District Treasury Office,Ahmedabad ' },
    { value: '2', viewValue: 'District Treasury Office,Gandhinagar ' },
  ];

  // Table Data
  ELEMENT_DATA: AcceptAccountInterface[] = [
    {
      select: '',
      majorHead: '2011',
      creditDebit: 'Credit',
      noOfDocuments: '4',
      amount: '3000',
      tcAmount: '1500',
      grossAmount: '4500',
    },
    {
      select: '',
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
    'creditDebit',
    'noOfDocuments',
    'amount',
    'tcAmount',
    'grossAmount',
    'action',
  ];

  dataSource = new MatTableDataSource<AcceptAccountInterface>(this.ELEMENT_DATA);
  selection = new SelectionModel<AcceptAccountHeadData>(true, []);


  constructor(private fb: FormBuilder, private router: Router, public dialog: MatDialog) { }
  directiveObject = new DPPFHbaDirectives(this.dialog);

  ngOnInit() {
    this.errorMessage = dppfHbaMessage;
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

  workflowDetails() { }

  // to delete row
  deleteRowRecovery(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource = new MatTableDataSource(
      this.dataSource.data
    );
  }

  // for dialogbox NotAcceptDialog
  onNonAccept() {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(NotAcceptDialog, {
      width: '400px',
      height: 'auto',
    }
    );
    dialogRef.afterClosed().subscribe(result => { });
  }

  // for dialogbox AcceptDialog
  onAccept() {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(AcceptDialog, {
      width: '400px',
      height: 'auto',
    }
    );
    dialogRef.afterClosed().subscribe(result => { });
  }

  // function used on save as draft to display table
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
  errorMessage = dppfHbaMessage;
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

  // on close
  okClick($event?) {
    this.dialogRef.close();
  }
  // on submit
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
  errorMessage = dppfHbaMessage;
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

  // on no
  onNo($event?) {
    this.dialogRef.close();
  }

  // on yes
  onYes() {
    this.isYes = !this.isYes;
  }

}
