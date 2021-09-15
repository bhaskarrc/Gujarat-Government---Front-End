import { CommonListing } from 'src/app/model/common-listing';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { Component, OnInit, ElementRef } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { SearchInwardNoDppfNpsComponent } from '../search-inward-no-dppf-nps/search-inward-no-dppf-nps.component';
import { SearchCardexDppfNpsComponent } from '../search-cardex-dppf-nps/search-cardex-dppf-nps.component';
import { SearchPpaDppfNpsComponent } from '../search-ppa-dppf-nps/search-ppa-dppf-nps.component';
import { WorkflowDetailsDppfNpsComponent } from '../workflow-details-dppf-nps/workflow-details-dppf-nps.component';
import { DppfNpsMessage } from 'src/app/common/error-message/common-message.constants';
import { Attachment } from 'src/app/model/dppf-nps';

@Component({
  selector: 'app-nps-inward-details',
  templateUrl: './nps-inward-details.component.html',
  styleUrls: ['./nps-inward-details.component.css']
})
export class NpsInwardDetailsComponent implements OnInit {
  // List
  attachmentTypeCode: CommonListing[] = [
    { value: '01', viewValue: 'Supporting Document' },
    { value: '02', viewValue: 'Sanction Order' },
    { value: '03', viewValue: 'Others' }
  ];

  typeOnInwardList: CommonListing[] = [
    { value: '1', viewValue: 'Top Schedule' },
    { value: '2', viewValue: 'AGTE Misclassified Entry' },
    { value: '3', viewValue: 'Request for Account Generation' },
    { value: '4', viewValue: 'Other' },
    { value: '5', viewValue: 'Debit/Credit Correction Entry' },
    { value: '6', viewValue: 'AGTE Clearance Entry' },
    { value: '7', viewValue: 'Request for account details Modification' },
    { value: '8', viewValue: 'E-mail' },
    { value: '9', viewValue: 'Final Withdrawal' },
    { value: '10', viewValue: 'Partial Withdrawal' },
    { value: '11', viewValue: 'Miss Match' },
  ];

  referenceByList: CommonListing[] = [
    { value: '1', viewValue: 'VIP Reference' },
    { value: '2', viewValue: 'MP Reference' },
    { value: '3', viewValue: 'Minister Reference' },
    { value: '4', viewValue: 'Vigilance Reference' },
    { value: '5', viewValue: 'Court Case' },
    { value: '6', viewValue: 'RTI' },
    { value: '7', viewValue: 'Grievance' },
  ];

  district_list: CommonListing[] = [
    { value: '1', viewValue: 'Ahmedabad' },
    { value: '2', viewValue: 'Gandhinagar' },
    { value: '3', viewValue: 'Vadodara' },
    { value: '4', viewValue: 'Surat' },
    { value: '5', viewValue: 'Rajkot' },
    { value: '6', viewValue: 'Anand' },
    { value: '7', viewValue: 'Bharuch' },
    { value: '8', viewValue: 'Valsad' },
    { value: '9', viewValue: 'Navsari' },
    { value: '10', viewValue: 'Dang' },
  ];

  treasutyPAO_list: CommonListing[] = [
    { value: '1', viewValue: 'District Treasury Office, Ahmedabad' },
    { value: '2', viewValue: 'District Treasury Office, Gandhinagar' },
    { value: '3', viewValue: 'District Treasury Office, Vadodara' },
    { value: '4', viewValue: 'District Treasury Office, Surat' },
    { value: '5', viewValue: 'District Treasury Office, Rajkot' },
    { value: '6', viewValue: 'District Treasury Office, Anand' },
    { value: '7', viewValue: 'District Treasury Office, Bharuch' },
    { value: '8', viewValue: 'District Treasury Office, Valsad' },
    { value: '9', viewValue: 'District Treasury Office, Navsari' },
    { value: '10', viewValue: 'District Treasury Office, Dang' },
  ];

  debitCreditList: CommonListing[] = [
    { value: '1', viewValue: 'Debit' },
    { value: '2', viewValue: 'Credit' }
  ];

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

  tcChallanList: CommonListing[] = [
    { value: '1', viewValue: 'TC' },
    { value: '2', viewValue: 'Challan' }
  ];
  // Date
  todayDate = new Date();
  // Variable
  selectedIndex: number;
  tabDisable: Boolean = true;
  errorMessages = DppfNpsMessage;
  inwardDetails = true;
  // Form Gorup
  inwardDetailsForm: FormGroup;
  // Form Control
  attachmentTypeCodeCtrl: FormControl = new FormControl();
  typeOfInwardCTRL: FormControl = new FormControl();
  referenceByCTRL: FormControl = new FormControl();
  districtCTRL: FormControl = new FormControl();
  treasutyCTRL: FormControl = new FormControl();
  debitCreditCTRL: FormControl = new FormControl();
  monthCTRL: FormControl = new FormControl();
  yearCTRL: FormControl = new FormControl();
  tcChallanCTRL: FormControl = new FormControl();
  // Directive
  directiveObj = new CommonDirective(this.router);
  // Constructor
  constructor(private fb: FormBuilder, private el: ElementRef, public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.inwardDetailsFormData();
  }

  inwardDetailsFormData() {
    this.inwardDetailsForm = this.fb.group({
      inwardNo: [''],
      inwardDate: [''],
      letterNo: [''],
      letterDate: [''],
      typeOfInward: [''],
      referenceBy: [''],
      other: [''],
      district: [''],
      cardexNo: [''],
      address: [''],
      contactNumber: [''],
      treasuryPAO: [''],
      ddoName: [''],
      remarks: [''],
      mobileNo: [''],
      debitCredit: [''],
      challanAmount: [''],
      grossAmount: [''],
      month: [''],
      year: [''],
      tcChallan: [''],
      tcAmount: [''],
      agAccountAmount: [''],
      agCaAmount: [''],
      ppaNo: [''],
      loanHolderName: [''],
    });
  }
  // Dialog Work Flow Dppf NPS
  workflowDetails(): void {
    const dialogRef = this.dialog.open(WorkflowDetailsDppfNpsComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  // Select Index
  getTabIndex(tabIndex) {
    this.selectedIndex = tabIndex;
    const temp = this.selectedIndex;
  }
  // Move Tab
  goToNext() {
    this.tabDisable = false;
    this.selectedIndex = 1;
  }
  // Dialog Search Inward No DppfNps
  openDialogInwardNumber() {
    const dialogRef = this.dialog.open(SearchInwardNoDppfNpsComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.inwardDetails = true;
        this.inwardDetailsForm.patchValue({
          inwardNo: result[0].inwardNo,
          inwardDate: result[0].inwardDate,
        });
      }
    });
  }
  // Dialog Search Cardex DppfNps
  openDialogCardexNumber() {
    const dialogRef = this.dialog.open(SearchCardexDppfNpsComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.inwardDetails = true;
        this.inwardDetailsForm.patchValue({
          cardexNo: result[0].cardexNo,
          ddoName: result[0].ddoName,
        });
      }
    });
  }
  // Dialog Search Ppa DppfNps
  openDialogPPANumber() {
    const dialogRef = this.dialog.open(SearchPpaDppfNpsComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.inwardDetails = true;
        this.inwardDetailsForm.patchValue({
          ppaNo: result[0].ppaNo,
        });
      }
    });
  }

}
