import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CommonListing } from 'src/app/model/common-listing';
import { ciMessage } from 'src/app/common/error-message/common-message.constants';
@Component({
  selector: 'app-receive-confirmation-dialog',
  templateUrl: './receive-confirmation-dialog.html',
})


export class ReceiveConfirmationDialogComponent {
  isYes = false;
  constructor(
    public dialogRef: MatDialogRef<ReceiveConfirmationDialogComponent>
  ) { }
  // closes the dialog
  cancel(): void {
    this.dialogRef.close();
  }

  // opens other dialog
  goTo() {
    this.isYes = !this.isYes;
  }
  // closes the dialog
  ok() {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-cts-cheque-book-receipt',
  templateUrl: './cts-cheque-book-receipt.component.html',
  styleUrls: ['./cts-cheque-book-receipt.component.css']
})
export class CtsChequeBookReceiptComponent implements OnInit {

  constructor(private fb: FormBuilder, public dialog: MatDialog) { }
  //  variables
  ctsChequeBankReceipt: FormGroup;
  errorMessages = ciMessage;
  isReceived = false;
  todayDate = Date.now();

  // form controls
  chequeTypeCtrl: FormControl = new FormControl();
  accountNoCtrl: FormControl = new FormControl();
  // chequeType list
  chequeType_list: CommonListing[] = [
    { value: '1', viewValue: 'LC' },
    { value: '2', viewValue: 'Deposit' },
    { value: '3', viewValue: 'Treasury' }
  ];
  // accountNo list
  accountNo_list: CommonListing[] = [
    { value: '1', viewValue: '6386' },
    { value: '2', viewValue: '455595419' },
    // { value: '3', viewValue: '3434' }
  ];
  ngOnInit() {
    this.ctsChequeBankReceipt = this.fb.group({
      chequeType: [''],
      accountNo: [''],
      accountShortName: ['PRATIK'],
      chequeBooks: [''],
      noOfCheque: [''],
      totalCheque: [''],
      fromSeries: [''],
      toSeries: ['']
    });
  }

  // opens dialog
  receive() {
    this.isReceived = true;
    const dialogRef = this.dialog.open(ReceiveConfirmationDialogComponent, {
      width: '450px',
      height: '200px'
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
