import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { CommonListing } from 'src/app/model/common-listing';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { SearchPpaDppfNpsComponent } from '../search-ppa-dppf-nps/search-ppa-dppf-nps.component';
import { DppfNpsMessage } from 'src/app/common/error-message/common-message.constants';
import { WorkflowDetailsDppfNpsComponent } from '../workflow-details-dppf-nps/workflow-details-dppf-nps.component';

@Component({
  selector: 'app-nps-account-status',
  templateUrl: './nps-account-status.component.html',
  styleUrls: ['./nps-account-status.component.css']
})
export class NpsAccountStatusComponent implements OnInit {
  // List
  yesNoList: CommonListing[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];

  reasonList: CommonListing[] = [
    { value: '1', viewValue: 'Transfer/Job Leaving' },
    { value: '2', viewValue: 'Retirement' },
    { value: '3', viewValue: 'Death' },
    { value: '4', viewValue: 'Transfer To Other State' },
    { value: '5', viewValue: 'Duplicate PPA Number' },
    { value: '6', viewValue: 'Non CPF Employee' }
  ];
  // Date
  todayDate = new Date();
  todaysDate = Date.now();
  // Variable
  errorMessages = DppfNpsMessage;
  inwardDetails = true;
  // FormGroup
  accountStatusForm: FormGroup;
  // FormControl
  reopenCTRL: FormControl = new FormControl();
  closeCTRL: FormControl = new FormControl();
  reasonCTRL: FormControl = new FormControl();
  // Directive
  directiveObj = new CommonDirective();
  constructor(private fb: FormBuilder, private dialog: MatDialog) { }

  ngOnInit() {
    this.accountStatusFormData();
  }

  accountStatusFormData() {
    this.accountStatusForm = this.fb.group({
      isReopen: [''],
      isClose: [''],
      ppaNo: [''],
      shortName: [''],
      firstName: [''],
      middleName: [''],
      lastName: [''],
      majorHead: [''],
      statusAsOnDate: [''],
      ndcStatus: ['ISSUE'],
      contributionOnDetails: [''],
      yearlyStatement: [''],
      reason: [''],
      date: [''],
      intrestStopRate: [''],
      openingBalance: [''],
      debitDuringYear: [''],
      employeeContribution: [''],
      intrestCalculated: [''],
      closingBalance: [''],
      noting: [''],
    });
  }
  // open ppan no dialog
  openDialogPPANumber() {
    const dialogRef = this.dialog.open(SearchPpaDppfNpsComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.inwardDetails = true;
        this.accountStatusForm.patchValue({
          ppaNo: result[0].ppaNo,
        });
      }
    });
  }

  // Open workFlow dialog
  workflowDetails(): void {
    const dialogRef = this.dialog.open(WorkflowDetailsDppfNpsComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


}
