import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { lcMessage } from 'src/app/common/error-message/common-message.constants';
import { ListValue, LcdistributionInput } from 'src/app/model/letter-of-credit';
import { LetterOfCreditDirectives } from 'src/app/common/directive/letter-of-credit-directive';
import { BehaviorSubject } from 'rxjs';
declare function SetGujarati();
declare function SetEnglish();

@Component({
  selector: 'app-lc-verification-to-edit',
  templateUrl: './lc-verification-to-edit.component.html',
  styleUrls: ['./lc-verification-to-edit.component.css']
})
export class LcVerificationToEditComponent implements OnInit {

  // List of entry Type
  EntryTypeList: ListValue[] = [
    { value: '1', viewValue: 'Distribution' },
    { value: '2', viewValue: 'Withdrawal' },
  ];

  // List of Fund Type
  FundTypeList: ListValue[] = [
    { value: '1', viewValue: '' },
    { value: '2', viewValue: '' },
  ];

  // List of Budget Type
  BudgetTypeList: ListValue[] = [
    { value: '1', viewValue: '' },
    { value: '2', viewValue: '' },
  ];

  // List of Head Code
  HeadCodeList: ListValue[] = [
    { value: '1', viewValue: '' },
    { value: '2', viewValue: '' },
  ];
  // List of Attachments
  attachmentTypeCode: any[] = [
    { value: '01', viewValue: 'Supporting Document' },
    { value: '02', viewValue: 'Sanction Order' },
    { value: '03', viewValue: 'Others' },
  ];

  // Table Data for LC Distribution
  LcdistributionInputDATA: LcdistributionInput[] = [
    {
      classOfExpenditure: 'Voted', fundType: 'Consolidated',
      budgetType: 'State', demandNo: '026', majorHead: '2406', subMajorHead: '01', minorHead: '001',
      subHead: '02', detailHead: '00', TypeOfEstimate: 'New Work', itemName: 'Government Hostel',
      objectHead: 'C1', schemeNo: '000000', amount: 12900000
    },
    {
      classOfExpenditure: 'Voted', fundType: 'Consolidated',
      budgetType: 'State', demandNo: '026', majorHead: '2406', subMajorHead: '01', minorHead: '001',
      subHead: '02', detailHead: '00', TypeOfEstimate: 'New Work', itemName: 'Government Hostel',
      objectHead: 'C2', schemeNo: '000000', amount: 2600000
    },
    {
      classOfExpenditure: 'Voted', fundType: 'Consolidated',
      budgetType: 'State', demandNo: '026', majorHead: '2406', subMajorHead: '01', minorHead: '001',
      subHead: '02', detailHead: '00', TypeOfEstimate: 'New Work', itemName: 'Government Hostel',
      objectHead: 'C5', schemeNo: '000000', amount: 1500000
    },
    {
      classOfExpenditure: 'Voted', fundType: 'Consolidated',
      budgetType: 'State', demandNo: '026', majorHead: '2406', subMajorHead: '01', minorHead: '001',
      subHead: '02', detailHead: '00', TypeOfEstimate: 'New Work', itemName: 'Government Hostel',
      objectHead: 'C6', schemeNo: '000000', amount: 500000
    },
  ];

  // Table Columns for LC Distribution Table
  LcdistributionInputDATAColumn: string[] = [
    'srno', 'fundType', 'classOfExpenditure', 'budgetType',
    'demandNo', 'majorHead', 'subMajorHead', 'minorHead',
    'subHead', 'detailHead', 'TypeOfEstimate', 'itemName', 'objectHead',
    'schemeNo', 'amount'
  ];

  workFlowData = 'fromLCVerificationToEdit';
  currentLang = 'Guj';
  divisionNameTooltip = 'Dy. Con. Of Forest Training Centre, Gandhinagar';
  circleNameTooltip = 'PRINCIPAL CHEF CONSERVATOR FOREST, GUJARAAT STATE';
  todayDate = Date.now();
  errorRemarks = false;
  isSearch: boolean;
  lcDistributionInputForm: FormGroup;
  EntryTypeCtrl: FormControl = new FormControl();
  FundTypeCtrl: FormControl = new FormControl();
  BudgetTypeCtrl: FormControl = new FormControl();
  HeadCodeCtrl: FormControl = new FormControl();
  errors = lcMessage;
  LcdistributionInputDataSource = new MatTableDataSource<any>(this.LcdistributionInputDATA);

  constructor(private fb: FormBuilder, private el: ElementRef, public dialog: MatDialog, private router: Router) { }

  // Create object to access Methods of Letter of Credit Directive
  directiveObject = new LetterOfCreditDirectives(this.router, this.dialog, this.el);

  ngOnInit() {
    this.lcDistributionInputFormData();
  }

  // Initialize Form Fields
  lcDistributionInputFormData() {
    this.lcDistributionInputForm = this.fb.group({
      lcNumber: [{ value: 'LC57SE001EE0010001', disabled: true }],
      divisionCode: [{ value: 'AFR007', disabled: true }],
      divisionName: [{ value: '', disabled: true }],
      lcIssueDate: [{ value: new Date(), disabled: true }],
      entryType: [{ value: '1', disabled: true }],
      lcValidFrom: [{ value: new Date(2020, 2, 1), disabled: true }],
      lcValidTo: [{ value: new Date(2020, 2, 31), disabled: true }],
      inwardNo: [''],
      inwardDate: [''],
      circleCode: [{ value: 'CFRST', disabled: true }],
      circleCodeDescription: [{ value: '', disabled: true }],
      partyReferenceNumber: [''],
      partyReferenceDate: [''],
      grantOrderNumber: [{ value: 'test', disabled: true }],
      grantOrderDate: [{ value: new Date(2020, 0, 27), disabled: true }],
      newBalanceLcAmount: [{ value: '58977360.00', disabled: true }],
      balanceLcAmount: [{ value: '41477360.00', disabled: true }],
      progressiveLcAmount: [''],
      fundType: [''],
      headCode: [''],
      budgetType: [''],
      demandNo: [''],
      majorHead: [''],
      subMajorHead: [''],
      minorHead: [''],
      subHead: [''],
      schemeNo: [''],
      amount: [''],
      raiseObjectionCheckbox: [''],
      objectionRemarks: ['']
    });
  }

  // Method to update Remarks
  updateRemarks() {
    if (this.lcDistributionInputForm.controls['raiseObjectionCheckbox'].value) {
      this.errorRemarks = true;
    } else {
      this.errorRemarks = false;
    }
  }

  // ----------------Toggle Eng Guj---------------------
  setEnglishOnFocusOut() {
    SetEnglish();
  }
  setLang() {
    if (this.currentLang === 'Guj') {
      SetEnglish();
    } else {
      SetGujarati();
    }
  }

  toggleLanguage() {
    // this.currentLang = this.currentLang === 'Guj' ? 'Eng' : 'Guj';
    if (this.currentLang === 'Guj') {
      this.currentLang = 'Eng';
    } else {
      this.currentLang = 'Guj';
    }
  }
  // ---------------------------------------------------
}
