import { DppfgpfMessage } from './../../common/error-message/common-message.constants';
import { DialogData } from './../../model/change-of-scale';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource, MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { AcceptAccountInterface, HeadData } from 'src/app/model/dppfgpf';


@Component({
  selector: 'app-accept-account-screen',
  templateUrl: './accept-account-screen.component.html',
  styleUrls: ['./accept-account-screen.component.css']
})
export class AcceptAccountScreenComponent implements OnInit {
  // VAriable
  errorMessage;
  // Date
  todayDate = Date.now();
  maxDate = new Date();
  previousMonth = new Date().getMonth() - 1;
  // Form Group
  acceptAccountScreenForm: FormGroup;
  // Form COntrol
  typeOfYearCtrl: FormControl = new FormControl();
  typeOfMonthCtrl: FormControl = new FormControl();
  typeOfPaymentCtrl: FormControl = new FormControl();
  typeOfTreasuryPaoCtrl: FormControl = new FormControl();
  // Lists
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

  displayedColumns: any[] = [
    'select',
    'majorHead',
    'accountType',
    'noOfDocuments',
    'amount',
    'tcAmount',
    'grossAmount',
    'action',
  ];

  dataSource = new MatTableDataSource<AcceptAccountInterface>(this.Element_Data);
  selection = new SelectionModel<HeadData>(true, []);


  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.errorMessage = DppfgpfMessage;
    this.acceptAccountScreenForm = this.fb.group({
      year: '1',
      month: this.classTypeOfMonth[this.previousMonth].value,
      treasuryPao: '',
      paymentType: '',

    });
  }

  workflowDetails() { }

  // for checkbox

  masterToggle() {
    this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: HeadData): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} `;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  // to delete row
  deleteRowRecovery(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource = new MatTableDataSource(
      this.dataSource.data
    );
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

}

@Component({
  selector: 'app-not-accept-dialog',
  templateUrl: './not-accept-dialog.html',
})
// tslint:disable-next-line: component-class-suffix
export class NotAcceptDialog implements OnInit {
  errorMessage = DppfgpfMessage;
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

}

