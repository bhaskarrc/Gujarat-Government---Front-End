import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { CommonListing } from 'src/app/model/common-listing';
import { bpeMessage } from 'src/app/common/error-message/common-message.constants';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.css']
})
export class LoanDetailsComponent implements OnInit {

  // form groups
  annexureOneForm: FormGroup;
  patrakOneForm: FormGroup;
  patrakSecondForm: FormGroup;
  formatAForm: FormGroup;
  formatBForm: FormGroup;
  formatCForm: FormGroup;
  formatDForm: FormGroup;

  // form control
  financialYearCtrl: FormControl = new FormControl();
  isAsPerRulesCtrl: FormControl = new FormControl();
  financialYearPatrakOneCtrl: FormControl = new FormControl();
  financialYearPatrakTwoCtrl: FormControl = new FormControl();
  financialYearFormatACtrl: FormControl = new FormControl();
  financialYearFormatBCtrl: FormControl = new FormControl();
  financialYearFormatCCtrl: FormControl = new FormControl();
  sanctionYearCtrl: FormControl = new FormControl();
  financialYearFormatDCtrl: FormControl = new FormControl();

  // variables
  tabDisable: Boolean = true;
  selectedIndex: number;
  maxDate = new Date();
  todayDate = new Date();
  errorMessages = bpeMessage;

  // lists
  financialYearList: CommonListing[] = [
    { value: '1', viewValue: '2017-18' },
    { value: '2', viewValue: '2018-19' },
    { value: '3', viewValue: '2019-20' },
    { value: '4', viewValue: '2020-21' }
  ];

  isAsPerRulesList: CommonListing[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
  ];

  sanctionYearList: CommonListing[] = [
    { value: '1', viewValue: '2017-18' },
    { value: '2', viewValue: '2018-19' },
    { value: '3', viewValue: '2019-20' },
    { value: '4', viewValue: '2020-21' }
  ];

  attachmentTypeCode: any[] = [
    { value: '01', viewValue: 'Supporting Document' },
    { value: '02', viewValue: 'Sanction Order' },
    { value: '03', viewValue: 'Others' },
  ];

  constructor(private _fb: FormBuilder, private el: ElementRef) { }

  ngOnInit() {

    // annexure1 form
    this.annexureOneForm = this._fb.group({
      financialYear: [''],
      nameOfEnterprise: [''],
      address: [''],
      phoneNo: [''],
      detailsOfLoan: [''],
      loanPurpose: [''],
      isAsPerRules: [''],
      details: [''],
      planningForControl: [''],
      uploadFile: [''],
      mainSourceIncome: [''],
      remarks: [''],
    });

    // Patrak 1 form
    this.patrakOneForm = this._fb.group({
      financialYear: [''],
      nameOfEnterprise: [''],
      address: [''],
      adminstrativeDepartment: [''],
      sanctionOrderNo: [''],
      sanctionOrderDate: [''],
      amount: [''],
      budgetHead: [''],
      treasuryName: [''],
      withdrawalDate: [''],
      voucherNo: [''],
      amountOne: [''],
      remarks: [''],
      adminstrativeBranch: ['']
    });

    // Patrak 2 form
    this.patrakSecondForm = this._fb.group({
      financialYear: [''],
      nameOfDepartment: [''],
      nameOfEnterprise: [''],
      loanAmount: [''],
      interestRate: [''],
      loanOrderNumber: [''],
      sanctionOrderDatePartak: [''],
      outstandingAmount: [''],
      loanSanctionAmount: [''],
      total: [''],
      loanAmountDuringYear: [''],
      yearEndOustandingAmount: [''],
      interestReceivedByDept: [''],
      unpaidOutstandingAmount: [''],
      remarks: [''],
    });

    // Format A form
    this.formatAForm = this._fb.group({
      financialYear: [''],
      loaneeName: [''],
      loanDisbursed: [''],
      principalRate: [''],
      arrearsAmount: [''],
      arrearsInterest: [''],
      arrearsPeriod: [''],
      reason: [''],
    });

    // Format B form
    this.formatBForm = this._fb.group({
      financialYear: [''],
      loaneeEntity: [''],
      arrearsAmount: [''],
      arrearsInterest: [''],
      total: [''],
      arrearsPeriod: [''],
      totalOutstanding: [''],
    });

    // Format C form
    this.formatCForm = this._fb.group({
      financialYear: [''],
      srNo: [''],
      sanctionYear: [''],
      arrearsInterest: [''],
      sanctionOrderNo: [''],
      amount: [''],
      rateOfInterest: [''],
    });

    // Format D form
    this.formatDForm = this._fb.group({
      financialYear: [''],
      majorHead: [''],
      minorHead: [''],
      balanceAmount: [''],
      detailedInformation: [''],
      remarks: [''],
    });
  }

  // get tab index
  getTabIndex(tabIndex) {
    this.selectedIndex = tabIndex;
  }

  // go to next
  goToNext() {
    this.tabDisable = false;
    this.selectedIndex = 1;
  }

  // open file selector
  openFileSelectorInputField() {
    this.el.nativeElement.querySelector('#fileBrowse').click();
  }

  // after file selection patches file name into input field
  onFileSelectionInputField(fileSelected) {
    this.annexureOneForm.patchValue({
      uploadFile: fileSelected.target.files[0].name
    });
  }

  // in selecting financial year in Annexure 1 form
  onSelectingFinancialYear(event) {
    if (event) {
      this.annexureOneForm.patchValue({
        nameOfEnterprise: 'Gujarat State Land Development Corporation',
        address: 'Balram Bhavan, Sector-10A, Gandhinagar',
        phoneNo: '23259903'
      });
    }
  }

  // on selecting financial Year in Patrak 1 form
  onSelectingFinancialYearPatrakOne(event) {
    if (event) {
      this.patrakOneForm.patchValue({
        nameOfEnterprise: 'Gujarat State Land Development Corporation',
        address: 'Balram Bhavan, Sector-10A, Gandhinagar',
        adminstrativeDepartment: 'Agriculture & Cooperation Department',
        adminstrativeBranch: 'Agriculture '
      });
    }

  }

  // on selecting Financial Year in Patrak 2 form
  onSelectingFinancialYearPatrakTwo(event) {
    if (event) {
      this.patrakSecondForm.patchValue({
        nameOfDepartment: 'Agriculture & Cooperation Department',
        nameOfEnterprise: 'Gujarat State Land Development Corporation'
      });
    }
  }

  // calculate total in Patrak 2 form
  calculateTotal() {
    let amount = 0;
    amount = Number(this.patrakSecondForm.value.outstandingAmount) + Number(this.patrakSecondForm.value.loanSanctionAmount);
    return amount;
  }

  // calculate total in Format B form
  calculateTotalFormatB() {
    let amount = 0;
    amount = Number(this.formatBForm.value.arrearsAmount) + Number(this.formatBForm.value.arrearsInterest);
    return amount;
  }

}
