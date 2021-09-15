import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BehaviorSubject } from 'rxjs';
import { budgetMessage } from 'src/app/common/error-message/common-message.constants';

declare function SetEnglish();
declare function SetGujarati();

@Component({
  selector: 'app-remarks-popup',
  templateUrl: './remarks-popup.component.html',
  styleUrls: ['./remarks-popup.component.css']
})
export class RemarksPopupComponent implements OnInit {

  remarksForm: FormGroup;
  currentLang = new BehaviorSubject<string>('Eng');
  isLangChange = false;
  hasFocusSet: number;
  errorMessages = budgetMessage;
  constructor(
    private fb: FormBuilder,
    private elem: ElementRef,
    public dialogRef: MatDialogRef<RemarksPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit() {
    if (this.data === 'disable') {
      this.createFormRemarksDisable();
    } else {
      this.createFormRemarks();
    }
  }
  createFormRemarks() {
    this.remarksForm = this.fb.group({
      remarksEng: [{ value: '', disabled: false }, Validators.required],
      remarksGuj: [{ value: '', disabled: false }, Validators.required],
    });
  }
  createFormRemarksDisable() {
    this.remarksForm = this.fb.group({
      remarksEng: [{ value: '', disabled: true }],
      remarksGuj: [{ value: '', disabled: true }],
    });
  }
  // Gujarati English Language Functions
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
      const elements = this.elem.nativeElement.querySelectorAll('.hasfocus')[0];
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
    onNoClick(): void {
      this.dialogRef.close('no');
    }
  

}
