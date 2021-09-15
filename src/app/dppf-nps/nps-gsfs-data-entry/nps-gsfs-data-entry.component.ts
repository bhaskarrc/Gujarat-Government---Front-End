import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { CommonListing } from 'src/app/model/common-listing';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { WorkflowDetailsDppfNpsComponent } from '../workflow-details-dppf-nps/workflow-details-dppf-nps.component';
import { MatDialog } from '@angular/material';
import { DppfNpsMessage } from 'src/app/common/error-message/common-message.constants';

@Component({
  selector: 'app-nps-gsfs-data-entry',
  templateUrl: './nps-gsfs-data-entry.component.html',
  styleUrls: ['./nps-gsfs-data-entry.component.css']
})
export class NpsGsfsDataEntryComponent implements OnInit {
  // List
  monthList: CommonListing[] = [
    { value: '1', viewValue: 'January' },
    { value: '2', viewValue: 'February' },
    { value: '3', viewValue: 'March' },
    { value: '4', viewValue: 'April' },
    { value: '5', viewValue: 'May' },
    { value: '6', viewValue: 'June' },
    { value: '7', viewValue: 'July' },
    { value: '8', viewValue: 'August' },
    { value: '9', viewValue: 'Sepetember' },
    { value: '10', viewValue: 'October' },
    { value: '11', viewValue: 'November' },
    { value: '12', viewValue: 'December' },
  ];

  yearList: CommonListing[] = [
    { value: '1', viewValue: '2005' },
    { value: '2', viewValue: '2006' },
    { value: '3', viewValue: '2007' },
    { value: '4', viewValue: '2008' },
    { value: '5', viewValue: '2009' },
    { value: '6', viewValue: '2010' },
    { value: '7', viewValue: '2011' },
    { value: '8', viewValue: '2012' },
    { value: '9', viewValue: '2013' },
    { value: '10', viewValue: '2014' },
    { value: '11', viewValue: '2015' },
    { value: '12', viewValue: '2016' },
    { value: '13', viewValue: '2017' },
    { value: '14', viewValue: '2018' },
    { value: '15', viewValue: '2019' },
    { value: '16', viewValue: '2020' },
  ];
  // Date
  todayDate = new Date();
  errormsg = DppfNpsMessage;
  // FormGroup
  gsfsDataEntryForm: FormGroup;
  // FormControl
  AccountMonthCTRL: FormControl = new FormControl();
  accountYearCTRL: FormControl = new FormControl();
  // Directive 
  directiveObj = new CommonDirective();

  constructor(private fb: FormBuilder, private dialog: MatDialog) { }

  ngOnInit() {
    this.gsfsDataEntryFormData();
  }

  gsfsDataEntryFormData() {
    this.gsfsDataEntryForm = this.fb.group({
      accountMonth: [''],
      accountYear: [''],
      employeeContribution: [''],
      employerContribution: [''],
      receiptNumber: [''],
      amount: [''],
      dateOfDeposit: [''],
      periodOfDeposit: [''],
      rateOfInterest: [''],
      dueDate: [''],
      netInterestAmount: [''],
      netMaturityAmount: [{ value: '', disabled: true }],
      withdrawalAmount: [''],
      reInvestment: [''],
      interestAmount: [''],
      principalAmount: [''],
      withdrawalAndTransferToNSDL: [''],
      interest: [''],
      principal: [''],
      withdrawalAndCreditInToGOVTAccount: [''],
    });
  }

  // Work Flow
  workflowDetails(): void {
    const dialogRef = this.dialog.open(WorkflowDetailsDppfNpsComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  netMaturityAmount() {
    // tslint:disable-next-line: max-line-length
    const data = Number(this.gsfsDataEntryForm.controls['amount'].value) + Number(this.gsfsDataEntryForm.controls['netInterestAmount'].value);
    const data2 = Number(data).toFixed(2);
    // this.gsfsDataEntryForm.controls['netMaturityAmount'].patchValue(data2);
    return data2;
  }


}
