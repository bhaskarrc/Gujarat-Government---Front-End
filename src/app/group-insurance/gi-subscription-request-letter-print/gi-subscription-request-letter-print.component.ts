import { Component, OnInit } from '@angular/core';
import { GroupInsuranceMessage } from 'src/app/common/error-message/common-message.constants';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-gi-subscription-request-letter-print',
  templateUrl: './gi-subscription-request-letter-print.component.html',
  styleUrls: ['./gi-subscription-request-letter-print.component.css']
})
export class GiSubscriptionRequestLetterPrintComponent implements OnInit {

  // date
  todayDate = new Date();

  // constructor
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  // on click on print
  goToPrint() {
    window.print();
  }

  // open email id dialog box
  sendMail() {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(EmailIdDialogComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
    });

  }
}


/** EmailIdDialogComponent start*/
@Component({
  selector: 'app-email-id-dialog',
  templateUrl: './email-id-dialog.html',
})
// tslint:disable-next-line: component-class-suffix
export class EmailIdDialogComponent implements OnInit {
  // variable
  errorMessage = GroupInsuranceMessage;
  // form group
  emailIdDialogForm: FormGroup;

  // constructor
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EmailIdDialogComponent>
  ) { }

  ngOnInit(): void {
    this.emailIdDialogForm = this.fb.group({
      emailId: ['', Validators.email],
    });
  }

  // on close
  okClick($event?) {
    this.dialogRef.close();
  }
  // on submit
  onSubmit($event?) {
    if (this.emailIdDialogForm.valid) {
      this.dialogRef.close();
    }
  }
}
/** EmailIdDialogComponent end*/
