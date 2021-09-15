import { CommonListing } from 'src/app/model/common-listing';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { WorkflowDppfHbaComponent } from '../workflow-dppf-hba/workflow-dppf-hba.component';
import { InwardNoDialogComponent } from '../inward-no-dialog/inward-no-dialog.component';
import { dppfHbaMessage } from 'src/app/common/error-message/common-message.constants';
import { DPPFHbaDirectives } from 'src/app/common/directive/dppf-hba';
@Component({
  selector: 'app-account-status-hba',
  templateUrl: './account-status-hba.component.html',
  styleUrls: ['./account-status-hba.component.css']
})
export class AccountStatusHbaComponent implements OnInit {
  // Form Group
  accountStatusForm: FormGroup;
  // Variable
  public toggleButton = true;
  public errorMessages;
  isSubmitted;
  // Date
  todayDate = Date.now();
  maxDate = new Date();
  directiveObject = new DPPFHbaDirectives(this.dialog);
  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder) { }
  // LIsts
  status_list: CommonListing[] = [
    { value: '1', viewValue: 'Reopen' },
    { value: '2', viewValue: 'Close' },
  ];
  ngOnInit() {
    this.errorMessages = dppfHbaMessage;
    this.accountStatusData();
  }
  accountStatusData() {
    this.accountStatusForm = this.fb.group({
      status: [''],
      hbaMcaNo: [''],
      firstName: [''],
      middleName: [''],
      lastName: [''],
      majorHead: [''],
      statusOnDate: [''],
      nothing: [''],
      ncStatus: [''],
      sanction: [''],
      loanHoldse: [''],
      interest: [''],
      cashBook: ['']
    });
  }


  // Inward no Popup
  inwardNo(): void {
    const dialogRef = this.dialog.open(InwardNoDialogComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
