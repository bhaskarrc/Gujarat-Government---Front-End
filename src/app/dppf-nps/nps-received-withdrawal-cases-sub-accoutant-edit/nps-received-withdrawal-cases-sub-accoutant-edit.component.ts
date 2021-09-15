import { CommonListing } from './../../model/common-listing';
import { Component, OnInit, ElementRef } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchInwardNoDppfNpsComponent } from '../search-inward-no-dppf-nps/search-inward-no-dppf-nps.component';
import { SearchPpaDppfNpsComponent } from '../search-ppa-dppf-nps/search-ppa-dppf-nps.component';
import { SearchCardexDppfNpsComponent } from '../search-cardex-dppf-nps/search-cardex-dppf-nps.component';
import { SearchEmployeeDppfNpsComponent } from '../search-employee-dppf-nps/search-employee-dppf-nps.component';
import { WorkflowDetailsDppfNpsComponent } from '../workflow-details-dppf-nps/workflow-details-dppf-nps.component';
import { DppfNpsMessage } from 'src/app/common/error-message/common-message.constants';
import { Attachment } from 'src/app/model/dppf-nps';

@Component({
  selector: 'app-nps-received-withdrawal-cases-sub-accoutant-edit',
  templateUrl: './nps-received-withdrawal-cases-sub-accoutant-edit.component.html',
  styleUrls: ['./nps-received-withdrawal-cases-sub-accoutant-edit.component.css']
})
export class NpsReceivedWithdrawalCasesSubAccoutantEditComponent implements OnInit {
  // List
  attachmentTypeCode: CommonListing[] = [
    { value: '01', viewValue: 'Supporting Document' },
    { value: '02', viewValue: 'Sanction Order' },
    { value: '03', viewValue: 'Others' }
  ];

  withdrawalList: CommonListing[] = [
    { value: '1', viewValue: 'Partial' },
    { value: '2', viewValue: 'Final' },
  ];

  finalList: CommonListing[] = [
    { value: '1', viewValue: 'Superannuation' },
    { value: '2', viewValue: 'Registration' },
    { value: '3', viewValue: 'Death' },
  ];
  purposeList: CommonListing[] = [
    { value: '1', viewValue: ' ' },
  ];

  designationList: CommonListing[] = [
    { value: '1', viewValue: 'Agriculture, Famers welfare and Co-operation Department' },
    { value: '2', viewValue: 'Climate Change Department' },
    { value: '3', viewValue: 'Education Department' },
    { value: '4', viewValue: 'Energy & Petrochemicals Department' },
    { value: '5', viewValue: 'Finance Department' },
    { value: '6', viewValue: 'Food, Civil Supplies & Consumer Affairs Department' },
    { value: '7', viewValue: 'Forest & Environment Department' },
    { value: '8', viewValue: 'General Administration Department' },
    { value: '9', viewValue: 'Gujarat Legislature Secretariat Department' },
    { value: '10', viewValue: 'Health & Family Welfare Department' },
  ];
  // Date
  todayDate = new Date();
  maxDate = new Date();
  // Variable
  selectedIndex: number;
  tabDisable: Boolean = true;
  errormsg = DppfNpsMessage;
  empdetails = true;
  inwardDetails = true;
  // Form Group
  ddoSideWithdrawalForm: FormGroup;
  // FormControl
  attachmentTypeCodeCtrl: FormControl = new FormControl();
  withdrawalCTRL: FormControl = new FormControl();
  finalCTRL: FormControl = new FormControl();
  designationCTRL: FormControl = new FormControl();
  purposeCTRL: FormControl = new FormControl();
  constructor(private fb: FormBuilder, private el: ElementRef, public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.ddoSideWithdrawalFormData();
  }

  ddoSideWithdrawalFormData() {
    this.ddoSideWithdrawalForm = this.fb.group({
      employeeNumber: [''],
      receivedDate: [''],
      orderNo: [''],
      ppaNo: [''],
      pranNo: [''],
      firstName: [''],
      middleName: [''],
      lastName: [''],
      designation: [''],
      withdrawal: [''],
      final: [''],
      claimID: [''],
      purpose: [''],
      percentage: [''],
      officeName: [''],
      nsdlAcknowledgementNo: [''],
      ddoRegistrationNo: [''],
    });
  }

  resetForm() {
    this.ddoSideWithdrawalForm.reset();
  }
  // Workflow Details DppfNp 
  workflowDetails(): void {
    const dialogRef = this.dialog.open(WorkflowDetailsDppfNpsComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  // Routing
  goToListing() {
    this.router.navigate(['/dppf-nps/nps-received-withdrawal-cases-sub-accountant']);
  }


  onReceive() {
    this.ddoSideWithdrawalForm.patchValue({
      receivedDate: ['' + this.maxDate.getDate() + '/' + (this.maxDate.getMonth() + 1) + '/' + this.maxDate.getFullYear()],
    });
  }

  getTabIndex(tabIndex) {
    this.selectedIndex = tabIndex;
    const temp = this.selectedIndex;
  }

  goToNext() {
    this.tabDisable = false;
    this.selectedIndex = 1;
  }
  // Search Inwar dNo DppfNps 
  openDialogInwardNumber() {
    const dialogRef = this.dialog.open(SearchInwardNoDppfNpsComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.inwardDetails = true;
        this.ddoSideWithdrawalForm.patchValue({
          inwardNo: result[0].inwardNo,
          inwardDate: result[0].inwardDate,
        });
      }
    });
  }
  // Search Cardex DppfNps
  openDialogCardexNumber() {
    const dialogRef = this.dialog.open(SearchCardexDppfNpsComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.inwardDetails = true;
        this.ddoSideWithdrawalForm.patchValue({
          cardexNo: result[0].cardexNo,
          ddoName: result[0].ddoName,
        });
      }
    });
  }
  // Search Ppa DppfNps 
  openDialogPPANumber() {
    const dialogRef = this.dialog.open(SearchPpaDppfNpsComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.inwardDetails = true;
        this.ddoSideWithdrawalForm.patchValue({
          ppaNo: result[0].ppaNo,
        });
      }
    });
  }
  // Search Employee DppfNps 
  openDialogEmployeeNumber() {
    const dialogRef = this.dialog.open(SearchEmployeeDppfNpsComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.empdetails = true;
        this.ddoSideWithdrawalForm.patchValue({
          payFixationEmployeeNumber: result[0].employeeNumber,
          employeeName: result[0].employeeName,
          designation: result[0].designation,
        });
      }
    });
  }

}
