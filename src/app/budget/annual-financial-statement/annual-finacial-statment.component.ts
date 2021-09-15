import { Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ReplaySubject, Observable, Subject, BehaviorSubject, from } from 'rxjs';
import { CommonListing } from 'src/app/model/common-listing';
import { budgetMessage } from 'src/app/common/error-message/common-message.constants';
import { Router } from '@angular/router';

declare function SetGujarati();
declare function SetEnglish();

@Component({
  selector: 'app-annual-finacial-statment',
  templateUrl: './annual-finacial-statment.component.html',
  styleUrls: ['./annual-finacial-statment.component.css']
})
export class AnnualFinacialStatmentComponent implements OnInit {

  budgetAdminRemarks: FormGroup;
  hasFocusSet: number;
  errorMessages = budgetMessage;

  currentLang = new BehaviorSubject<string>('Eng');
  workNameGuj = '';

  constructor(private fb: FormBuilder,
    private router: Router, ) { }
  date: any = new Date();

  ngOnInit() {
    this.budgetAdminRemarks = this.fb.group({
      financialYear: ['2020-2021'],
      bpnCode: ['01:Green Book'],
      workNameEng: ['', Validators.required],
      workNameGuj: ['', Validators.required],
      workNameEng2: ['', Validators.required],
      workNameGuj2: ['', Validators.required],
      workNameEng3: ['', Validators.required],
      workNameGuj3: ['', Validators.required],
      workNameEng4: ['', Validators.required],
      workNameGuj4: ['', Validators.required],
    });
  }

  // Eng / Guj Functions
  setGujaratiDefault() {
    SetGujarati();
      this.currentLang.next('Guj');

  }
  setEnglishOnFocusOut() {
    SetEnglish();
  }s
  saveRemarks() { }
  goToDashboard() {
    this.router.navigate(['']);
  }
  gotoListing() {
    this.router.navigate(['./budget/annual-finacial-statement-listing']);
  }
  partASaveRemark() {}
}
