
import { MatTableDataSource, MatDialog, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ListValue } from 'src/app/model/common-grant';
import { ciMessage } from 'src/app/common/error-message/common-message.constants';
import { IssueToDepartment } from 'src/app/model/issueToDepartment';
import { Router } from '@angular/router';
import { CommonDirective } from 'src/app/common/directive/validation.directive';

@Component({
  selector: 'app-issue-confiramation-dialog',
  templateUrl: './issue-confiramation-dialog.html',
})


export class IssueConfirmationDialogComponent {
  isYes = false;
  constructor(
    public dialogRef: MatDialogRef<IssueConfirmationDialogComponent>
  ) { }
  // closes dialog box
  cancel(): void {
    this.dialogRef.close();
  }
  // closes dialog box
  close(): void {
    this.dialogRef.close();
  }
  // sets value
  goTo() {
    this.isYes = true;
  }
}
@Component({
  selector: 'app-issue-to-department',
  templateUrl: './issue-to-department.component.html',
  styleUrls: ['./issue-to-department.component.css']
})
export class IssueToDepartmentComponent implements OnInit {
  // dates
  todayDate = Date.now();
  maxDate = new Date();

  // variable
  issueToDepartmentForm: FormGroup;
  isSubmitted = false;
  errorMessages = ciMessage;
  directiveObj = new CommonDirective(this.router);

  // form controls
  chequeTypeCtrl: FormControl = new FormControl();
  modeOfIssueCtrl: FormControl = new FormControl();
  indentNumberCtrl: FormControl = new FormControl();
  ctsAccountNumberCtrl: FormControl = new FormControl();
  // chequeType list
  chequeType_list: ListValue[] = [
    { value: '1', viewValue: 'LC' },
    { value: '2', viewValue: 'Deposit' },
    { value: '3', viewValue: 'Treasury' }
  ];

  // modeOfIssue list
  modeOfIssue_list: ListValue[] = [
    { value: '1', viewValue: 'By Hand' },
    { value: '2', viewValue: 'By Registered Post' },
  ];

  // indentNumber list
  indentNumber_list: ListValue[] = [
    { value: ' ', viewValue: ' ' },
  ];

  // ctsAccountNumber list
  ctsAccountNumber_list: ListValue[] = [
    { value: '1', viewValue: ' 6386' },
    { value: '2', viewValue: ' 455595419' },
  ];

  // table Data
  Element_Data: IssueToDepartment[] = [
    {
      chequeBookType: 'Deposit', revision: '200001009', startSeries: '534000', endSeries: '534100',
      numberOfCheque: '100', numberOfChequeInBook: '25', numberOfChequeBooks: '4'
    },
    {
      chequeBookType: 'Deposit', revision: '200001008', startSeries: '524000', endSeries: '524100',
      numberOfCheque: '150', numberOfChequeInBook: '25', numberOfChequeBooks: '6'
    }
  ];

  dataSource = new MatTableDataSource<any>(this.Element_Data);
  // tslint:disable-next-line: max-line-length
  displayedColumns: string[] = ['select', 'chequeBookType', 'revision', 'startSeries', 'endSeries', 'numberOfCheque', 'numberOfChequeInBook', 'numberOfChequeBooks', 'action'];

  constructor(private fb: FormBuilder, public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.issueToDepartmentForm = this.fb.group({
      issueDate: [''],
      accountNumber: [''],
      chequeType: [''],
      accountName: [''],
      modeOfIssue: [''],
      messengerName: [''],
      trackingNumber: [''],
      indentNumber: [''],
      orderNo: [''],
      indentRequestedQuantity: [''],
      issuedQuantity: [''],
      remainingBalance: [''],
      availableSeriesForCTSCheque: [''],
      ctsAccountNumber: ['1'],
      startSeries: [''],
      endSeries: [''],
      numberOfCheque: [''],
      numberOfChequeInBook: [''],
      numberOfChequeBooks: [''],
      availableChequeBook: [''],
      minimumChequeBook: [''],
      balanceChequeBook: ['']
    });
  }

  // clear form
  clearForm() {
    this.issueToDepartmentForm.reset();
  }

  // to delete row
  delete(element) {
    this.dataSource.data.splice(element, 1);
    this.dataSource = new MatTableDataSource(this.dataSource.data);
  }

  // edit row
  onEdit(element) {
    element.edit = !element.edit;
  }

  // to add row
  onAdd() {
    if (this.issueToDepartmentForm.valid) {
      this.isSubmitted = false;

      const chequeBookType = ' ';
      const revision = ' ';
      const startSeries = this.issueToDepartmentForm.get('startSeries').value;
      const endSeries = this.issueToDepartmentForm.get('endSeries').value;
      const numberOfCheque = this.issueToDepartmentForm.get('numberOfCheque').value;
      const numberOfChequeInBook = this.issueToDepartmentForm.get('numberOfChequeInBook').value;
      const numberOfChequeBooks = this.issueToDepartmentForm.get('numberOfChequeBooks').value;

      this.dataSource.data.push({
        chequeBookType: chequeBookType,
        revision: revision,
        startSeries: startSeries,
        endSeries: endSeries,
        numberOfCheque: numberOfCheque,
        numberOfChequeInBook: numberOfChequeInBook,
        numberOfChequeBooks: numberOfChequeBooks,
      });

      this.dataSource.data = this.dataSource.data;
      console.log(this.dataSource.data);

    } else {
      this.isSubmitted = true;
    }
  }

  // opens dialog confirmation
  issue() {
    const dialogRef = this.dialog.open(IssueConfirmationDialogComponent, {
      width: '450px',
      height: '200px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  // routing
  gotToListing() {
    this.router.navigate(['./ci/cheque-book-issue-to-department']);
  }

  reset() {
    this.issueToDepartmentForm.patchValue({
      issueDate: '',
      accountNumber: '',
      chequeType: '',
      accountName: '',
      modeOfIssue: '',
      messengerName: '',
      trackingNumber: '',
      indentNumber: '',
      orderNo: '',
      indentRequestedQuantity: '10',
      issuedQuantity: '10',
      remainingBalance: '30',
      availableSeriesForCTSCheque: '000101-000200',
      ctsAccountNumber: '1',
      startSeries: '534000',
      endSeries: '534010',
      numberOfCheque: '10',
      numberOfChequeInBook: '10',
      numberOfChequeBooks: '1',
      availableChequeBook: '40',
      minimumChequeBook: '15',
      balanceChequeBook: '30'
    });
  }
}
