

import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { CommonListing } from 'src/app/model/common-listing';
import { budgetMessage } from '../../common/error-message/common-message.constants';
import { validateVerticalPosition } from '@angular/cdk/overlay';
import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
declare function SetEnglish();
declare function SetGujarati();
@Component({
  selector: 'app-outcome-budget-introduction',
  templateUrl: './outcome-budget-introduction.component.html',
   styleUrls: ['./outcome-budget-introduction.component.css']
})
export class OutcomeBudgetIntroductionComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  gujaratiType: Boolean = true;
  engAtiveClass: Boolean = false;
  gujAtiveClass: Boolean = false;
  expendCharges: boolean;
  public errorMessages;

  // Entry Field Details
  filteredDisclaimerFinYear: CommonListing[] = [
    {value: '1', viewValue: '2021-2022'},
   {value: '2', viewValue: '2019-2020'},
   {value: '3', viewValue: '2020-2021'},
  ];
  pressList: CommonListing[] = [
    {value: '1', viewValue: 'Printing Press 1'},
    {value: '2', viewValue: 'Printing Press 2'},
    {value: '3', viewValue: 'Printing Press 3'},
  ];
  filteredDisclaimerDepartment: CommonListing[] = [
    {value: '00', viewValue: 'Agriculture, Famers welfare and Co-operation Department'},
    {value: '01', viewValue: 'Education Department'},
    {value: '02', viewValue: 'Energy & Petrochemicals Department'},
    {value: '03', viewValue: 'Finance Department'},
    {value: '04', viewValue: 'Food, Civil Supplies & Consumer Affairs Department'},
    {value: '05', viewValue: 'Forest & Environment Department'},
    {value: '06', viewValue: 'General Administration Department'},
    {value: '07', viewValue: 'Gujarat Legislature Secretariat Department'},
    {value: '08', viewValue: 'Health & Family Welfare Department'},
    {value: '09', viewValue: 'Home Department'},
    {value: '10', viewValue: 'Industries & Mines Department'},
    {value: '11', viewValue: 'Information & Broadcasting Department'},
    {value: '12', viewValue: 'Labour & Employment Department'},
    {value: '13', viewValue: 'Legal Department'},
    {value: '14', viewValue: 'Legislative & Parliamentary Affairs Department'},
    {value: '15', viewValue: 'Narmada, Water Resources, Water Supply & Kalpsar Department'},
    {value: '16', viewValue: 'Panchayat, Rural Housing & Rural Development Department'},
    {value: '17', viewValue: 'Ports & Transport Department'},
    {value: '18', viewValue: 'Revenue Department'},
    {value: '19', viewValue: 'Roads & Buildings Department'},
    {value: '20', viewValue: 'Science & Technology Department'},
    {value: '21', viewValue: 'Social Justice & Empowerment Department'},
    {value: '22', viewValue: 'Tribal Development Department'},
    {value: '23', viewValue: 'Sports, Youth & Cultural Activities Department'},
    {value: '24', viewValue: 'Urban Development & Urban Housing Department'},
    {value: '25', viewValue: 'Women & Child Development Department'},
    {value: '26', viewValue: 'Climate Change Department'},
  ];
  filteredOutcomeNumber: CommonListing[] = [
    {value: '1', viewValue: '56:Outcome budget'},
  ];
  budgetIntroductionForm: FormGroup;
  outcomeNumberCtrl: FormControl = new FormControl ();
  disclaimerFinYearCtrl: FormControl = new FormControl();
  printingPressCtrl: FormControl = new FormControl();
  disclaimerCtrl: FormControl = new FormControl ();

  @ViewChild('scrollChargeMe') private myScrollContainer: ElementRef;
  @ViewChild('parentGrids') private parentGrid: ElementRef;
  @ViewChild('codeGJ') codeGJ: ElementRef;

    constructor(
    private fb: FormBuilder,
    private el: ElementRef
  ) { }

  date: any = new Date();

  ngOnInit() {
    this.createForm();
    this.errorMessages = budgetMessage;
  }

  createForm() {
    this.budgetIntroductionForm = this.fb.group({
      disclaimerFinYear : ['1', Validators.required],
      budgetPublicationNumber : ['1'],
      writeUpGuj: ['', Validators.required],
      printingPress : ['', Validators.required],
      disclaimerMessage : ['', Validators.required],
      remark : [''],
    });
  }

  // submit
  submitDetails() {}

  // Eng/Guj Language Functions
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
    this.budgetIntroductionForm.patchValue({
      writeUpGuj: data
    });
  }

}
