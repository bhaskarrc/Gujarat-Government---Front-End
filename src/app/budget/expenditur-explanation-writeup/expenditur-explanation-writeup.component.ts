
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { CommonListing } from 'src/app/model/common-listing';
import { budgetMessage } from '../../common/error-message/common-message.constants';
import { validateVerticalPosition } from '@angular/cdk/overlay';
import { Router } from '@angular/router';

declare function SetEnglish();
declare function SetGujarati();

@Component({
  selector: 'app-expenditur-explanation-writeup',
  templateUrl: './expenditur-explanation-writeup.component.html',
  styleUrls: ['./expenditur-explanation-writeup.component.css']
})
export class ExpenditurExplanationWriteupComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  gujaratiType: Boolean = true;
  engAtiveClass: Boolean = false;
  gujAtiveClass: Boolean = false;
  expendCharges: boolean;
  public errorMessages;
// Entry field details
  filteredDisclaimerFinYear: CommonListing[] = [
    { value: '2019-2020', viewValue: '2019-2020' },
    { value: '2020-2021', viewValue: '2020-2021' },
  ];

  bpn_list: CommonListing[] = [
    {
      value: '1', viewValue: '02:Receipt under Consolidated Fund & Transaction under Contingency Fund & Public Accounts, etc'
    },
    {
      value: '2', viewValue: '03:Agriculture, Farmers Welfare & Co-Operation Department'
    },
    { value: '3', viewValue: '13:Industries and Mines Department' },

    { value: '4', viewValue: '22:Roads And Buildings Department' },
    { value: '5', viewValue: '24c: Tribal Development Department - Part III' },
    { value: '6', viewValue: '24b: Social Justice And Empowerment Department - Part II' },
    { value: '7', viewValue: '24d: Tribal Development Department - Part IV' },
  ];

  majorHead_list: CommonListing[] = [
    { value: '1', viewValue: '0020:Corporation Tax' },
    { value: '2', viewValue: '0021:Taxes on Income other than Corporation Tax' },
    { value: '3', viewValue: '0028:Other Taxes on Income and Expenditure' },
    { value: '4', viewValue: '0029:Land Revenue' },
    { value: '5', viewValue: '0030:Stamps and Registration Fees' },
  ];

  demand_list: CommonListing[] = [
    { value: '1', viewValue: '001:Agriculture and Co-operation Department' },
    { value: '2', viewValue: '002:Agriculture' },
    { value: '3', viewValue: '047:Industries and Mines Department' },
    { value: '4', viewValue: '048:Stationery and Printing' },
    { value: '5', viewValue: '049:Industries' },
    { value: '6', viewValue: '084:Non-Residential Buildings' },
    { value: '7', viewValue: '085:Residential Buildings' },
    { value: '8', viewValue: '093: Welfare of Scheduled Tribes' },
    { value: '9', viewValue: '095: Scheduled Castes Sub Plan' },
    { value: '10', viewValue: '096:Tribal Area Sub-Plan' },
  ];

  @ViewChild('codeInput') codeInput: ElementRef<HTMLInputElement>;

  expenditureform: FormGroup;
  disclaimerFinYearCtrl: FormControl = new FormControl();
  bpnCtrl: FormControl = new FormControl();
  majorHeadCtrl: FormControl = new FormControl();
  demandCodeCtrl: FormControl = new FormControl();

  @ViewChild('scrollChargeMe') private myScrollContainer: ElementRef;
  @ViewChild('parentGrids') private parentGrid: ElementRef;
  @ViewChild('codeGJ') codeGJ: ElementRef;

  constructor(
    private fb: FormBuilder,
    private el: ElementRef,
    private router: Router,
  ) { }

  date: any = new Date();

  ngOnInit() {
    this.createForm();
    this.errorMessages = budgetMessage;
  }

  createForm() {
    this.expenditureform = this.fb.group({
      disclaimerFinYear: ['', Validators.required],
      bpnCode: ['', Validators.required],
      majorHead: ['', Validators.required],
      demandCode: ['', Validators.required],
      disclaimerMessage: ['', Validators.required],
      writeUpGuj: ['', Validators.required],
      prefaceEng: ['', Validators.required],
      prefaceGuj: ['', Validators.required],
      receiptEng: ['', Validators.required],
      receiptGuj: ['', Validators.required],
    });
  }

  saveexpenditureform() {
    console.log(this.expenditureform.value);
  }
// Eng Guj Functions starts
  nomenclatureGJFocus() {
    if (this.gujaratiType) {
      SetGujarati();
      this.engAtiveClass = false;
      this.gujAtiveClass = true;
    }
  }
  nomenclatureGJFocusOut() {
    SetEnglish();
    this.gujaratiType = true;
    this.engAtiveClass = false;
    this.gujAtiveClass = false;
  }

  setgujarati() {
    this.gujaratiType = false;
    this.engAtiveClass = false;
    this.gujAtiveClass = true;
    SetGujarati();
    this.codeGJ.nativeElement.focus();
  }

  setenglish() {
    this.gujaratiType = false;
    this.engAtiveClass = true;
    this.gujAtiveClass = false;
    SetEnglish();
    this.codeGJ.nativeElement.focus();
  }


  checkGujarati(data) {
    this.expenditureform.patchValue({
      writeUpGuj: data
    });
  }
  // Eng Guj Functions Ends
  submitDetails() { }
  gotoListing() {
    this.router.navigate(['./budget/expenditur-explanation-writeup-listing']);
  }

}
