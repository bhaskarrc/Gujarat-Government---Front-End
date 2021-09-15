import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { CommonListing } from 'src/app/model/common-listing';
import { Component, OnInit, ElementRef } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchInwardNoDppfNpsComponent } from '../search-inward-no-dppf-nps/search-inward-no-dppf-nps.component';
import { SearchPpaDppfNpsComponent } from '../search-ppa-dppf-nps/search-ppa-dppf-nps.component';
import { SearchCardexDppfNpsComponent } from '../search-cardex-dppf-nps/search-cardex-dppf-nps.component';
import { SearchEmployeeDppfNpsComponent } from '../search-employee-dppf-nps/search-employee-dppf-nps.component';
import { WorkflowDetailsDppfNpsComponent } from '../workflow-details-dppf-nps/workflow-details-dppf-nps.component';
import { DppfNpsMessage } from 'src/app/common/error-message/common-message.constants';

@Component({
  selector: 'app-nps-ddo-side-withdrawal',
  templateUrl: './nps-ddo-side-withdrawal.component.html',
  styleUrls: ['./nps-ddo-side-withdrawal.component.css']
})
export class NpsDdoSideWithdrawalComponent implements OnInit {
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
    { value: '1', viewValue: 'Higher Education of Children' },
    { value: '2', viewValue: 'Children Marriage' },
    { value: '3', viewValue: 'Home Construction' },
    { value: '4', viewValue: 'Critical illness' },
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

  todayDate = new Date();
  errormsg = DppfNpsMessage;
  empdetails = true;
  inwardDetails = true;
  selectedIndex: number;
  tabDisable: Boolean = true;
  ddoSideWithdrawalForm: FormGroup;
  attachmentTypeCodeCtrl: FormControl = new FormControl();
  withdrawalCTRL: FormControl = new FormControl();
  finalCTRL: FormControl = new FormControl();
  purposeCTRL: FormControl = new FormControl();
  designationCTRL: FormControl = new FormControl();
  directiveObj = new CommonDirective(this.router);

  constructor(private fb: FormBuilder, private el: ElementRef, public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.ddoSideWithdrawalFormData();
  }

  ddoSideWithdrawalFormData() {
    this.ddoSideWithdrawalForm = this.fb.group({
      employeeNumber: [''],
      orderNo: [''],
      ppaNo: [''],
      pranNo: [''],
      withdrawal: [''],
      final: [''],
      firstName: [''],
      middleName: [''],
      lastName: [''],
      designation: [''],
      claimID: [''],
      purpose: [''],
      officeName: [''],
      officeAdd: [''],
      percentage: ['', [Validators.max(25), Validators.min(1)]],
      nsdlAcknowledgementNo: [''],
      ddoRegistrationNo: [''],
    });
  }

  // workflow Dialog
  workflowDetails(): void {
    const dialogRef = this.dialog.open(WorkflowDetailsDppfNpsComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
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

  openDialogEmployeeNumber() {
    const dialogRef = this.dialog.open(SearchEmployeeDppfNpsComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.empdetails = true;
        this.ddoSideWithdrawalForm.patchValue({
          employeeNumber: result[0].employeeNumber,
          firstName: result[0].firstName,
          middleName: result[0].middleName,
          lastName: result[0].lastName,
        });
      }
    });
  }
}
