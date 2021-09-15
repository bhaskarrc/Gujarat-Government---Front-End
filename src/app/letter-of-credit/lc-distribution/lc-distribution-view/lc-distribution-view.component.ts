import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { ListValue, LcdistributionInput } from 'src/app/model/letter-of-credit';
import { LetterOfCreditDirectives } from 'src/app/common/directive/letter-of-credit-directive';


@Component({
  selector: 'app-lc-distribution-view',
  templateUrl: './lc-distribution-view.component.html',
  styleUrls: ['./lc-distribution-view.component.css']
})
export class LcDistributionViewComponent implements OnInit {

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

  // Table Data for LC Distribution
  LcdistributionInputDATA: LcdistributionInput[] = [
    {
      classOfExpenditure: '1-Voted', fundType: '3-Consolidated', budgetType: '1-State', demandNo: '026', majorHead: '2406', subMajorHead: '01', minorHead: '001',
      subHead: '02', detailHead: '00', TypeOfEstimate: 'New Work', itemName: 'Government Hostel', objectHead: 'C1', schemeNo: '000000', amount: 12900000
    },
    {
      classOfExpenditure: '1-Voted', fundType: '3-Consolidated', budgetType: '1-State', demandNo: '026', majorHead: '2406', subMajorHead: '01', minorHead: '001',
      subHead: '02', detailHead: '00', TypeOfEstimate: 'New Work', itemName: 'Government Hostel', objectHead: 'C2', schemeNo: '000000', amount: 2600000
    },
    {
      classOfExpenditure: '1-Voted', fundType: '3-Consolidated', budgetType: '1-State', demandNo: '026', majorHead: '2406', subMajorHead: '01', minorHead: '001',
      subHead: '02', detailHead: '00', TypeOfEstimate: 'New Work', itemName: 'Government Hostel', objectHead: 'C5', schemeNo: '000000', amount: 1500000
    },
    {
      classOfExpenditure: '1-Voted', fundType: '3-Consolidated', budgetType: '1-State', demandNo: '026', majorHead: '2406', subMajorHead: '01', minorHead: '001',
      subHead: '02', detailHead: '00', TypeOfEstimate: 'New Work', itemName: 'Government Hostel', objectHead: 'C6', schemeNo: '000000', amount: 500000
    },
  ];

  // Table Columns for LC Distribution Table
  LcdistributionInputDATAColumn: string[] = [
    'srno', 'classOfExpenditure', 'fundType', 'budgetType', 'demandNo', 'majorHead', 'subMajorHead', 'minorHead', 'subHead', 'detailHead', 'TypeOfEstimate', 'itemName', 'objectHead',
    'schemeNo', 'amount'
  ];

  todayDate = Date.now();
  errorRemarks = true;
  isSearch: boolean;
  lcDistributionInputForm: FormGroup;
  EntryTypeCtrl: FormControl = new FormControl();
  FundTypeCtrl: FormControl = new FormControl();
  BudgetTypeCtrl: FormControl = new FormControl();
  HeadCodeCtrl: FormControl = new FormControl();

  LcdistributionInputDataSource = new MatTableDataSource<LcdistributionInput>(this.LcdistributionInputDATA);

  constructor(private fb: FormBuilder, private el: ElementRef, public dialog: MatDialog, private router: Router) { }

  // Create object to access Methods of Letter of Credit Directive
  directiveObject = new LetterOfCreditDirectives(this.router, this.dialog, this.el);
  ngOnInit() {
    this.lcDistributionInputFormData();
  }

  // Initialize Form Fields
  lcDistributionInputFormData() {
    this.lcDistributionInputForm = this.fb.group({
      lcNumber: [''],
      divisionCode: [''],
      divisionName: [''],
      lcIssueDate: new FormControl(new Date()),
      entryType: ['1'],
      lcValidFrom: new FormControl(new Date(2020, 2, 1)),
      lcValidTo: new FormControl(new Date(2020, 2, 31)),
      inwardNo: [''],
      inwardDate: new FormControl(new Date(this.todayDate)),
      circleCode: [''],
      circleCodeDescription: [''],
      partyReferenceNumber: [''],
      partyReferenceDate: [''],
      grantOrderNumber: [''],
      grantOrderDate: new FormControl(new Date(2020, 0, 27)),
      newBalanceLcAmount: [''],
      balanceLcAmount: [''],
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
      console.log(this.lcDistributionInputForm.controls['raiseObjectionCheckbox'].value);
    } else {
      this.errorRemarks = false;
    }
  }

}
