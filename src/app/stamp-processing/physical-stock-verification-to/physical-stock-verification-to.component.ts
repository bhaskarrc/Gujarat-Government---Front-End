
import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';

import { Component, ElementRef, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { CloseConfirmCommonDialogComponent } from '../close-confirm-common-dialog/close-confirm-common-dialog.component';
import { SubmitConfirmCommonDialigComponent } from '../submit-confirm-common-dialig/submit-confirm-common-dialig.component';
import { stampProcessMessage } from 'src/app/common/error-message/common-message.constants';
import { StampProcessingDirectives } from 'src/app/common/directive/stamp-processing-directive';
import { BehaviorSubject } from 'rxjs';

declare function SetEnglish();
declare function SetGujarati();
@Component({
  selector: 'app-physical-stock-verification-to',
  templateUrl: './physical-stock-verification-to.component.html',
  styleUrls: ['./physical-stock-verification-to.component.css']
})
export class PhysicalStockVerificationToComponent implements OnInit {
  currentLang = new BehaviorSubject<string>('Eng');
  isLangChange = false;
  hasFocusSet: number;

  physicalStockToForm: FormGroup;
  date: any = new Date();
// Entry Field Details
  treasury_List: CommonListing[] = [
    { value: '1', viewValue: 'Sub Treasury Office, Dehgam' },
    { value: '2', viewValue: 'Sub Treasury Office, Kalol' },
    { value: '3', viewValue: 'Sub Treasury Office, Mansa' },
  ];

  attachmentType_list: CommonListing[] = [
    { value: '1', viewValue: 'Supporting document' },
    { value: '2', viewValue: 'Sanction Order' },
    { value: '3', viewValue: 'Others' },
  ];

  constructor(private fb: FormBuilder, private router: Router, public dialog: MatDialog,
    private el: ElementRef ) { }
  directiveObject = new StampProcessingDirectives(this.router, this.dialog);
  trofficeCtrl: FormControl = new FormControl();
  errorMessages = stampProcessMessage;
  ngOnInit() {
    this.physicalStockToData();
  }

  physicalStockToData() {
    this.physicalStockToForm = this.fb.group({
      finYear: ['2019-2020', Validators.required],
      toffice: ['Gandhinagar Treasury Office', Validators.required],
      troffice: ['', Validators.required],
      visitDate: ['', Validators.required],
      verificationoffice: ['Mr.A.B.Sharma', Validators.required],
      desi: ['Account Officer', Validators.required],
      remarks: ['', Validators.required],
    });
  }


  gotoListing() {
    this.router.navigate(['./stamp-processing/physical-stock-verification-to-list']);
  }
  // Eng Guj functions starts
    setEnglishOnFocusOut() {
      SetEnglish();
    }
    setGujaratiDefault() {
      if (!this.isLangChange) {
        SetGujarati();
        this.currentLang.next('Eng');
      }
    }
    toggleLanguage() {
      this.isLangChange = true;
      const elements = this.el.nativeElement.querySelectorAll('.hasfocus')[0];
      if (elements != undefined) {
        if (this.currentLang.value == 'Guj') {
          SetEnglish();
          this.currentLang.next('Eng');
        } else {
          SetGujarati();
          this.currentLang.next('Guj');
        }
        elements.focus();
      }
    }
}
