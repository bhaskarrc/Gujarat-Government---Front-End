import { Component, OnInit, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';

declare function SetGujarati();
declare function SetEnglish();
@Component({
  selector: 'app-object-master-dialog',
  templateUrl: './object-master-dialog.component.html',
  styleUrls: ['./object-master-dialog.component.css']
})
export class ObjectMasterDialogComponent implements OnInit {

  // variable
  hasFocusSet: number;
  isLangChange = false;
  currentLang = new BehaviorSubject<string>('Eng');
  // Form group
  ObjectionDialogForm: FormGroup;
  billtypeCtrl: FormControl = new FormControl();
  // List
  billtype_list: ListValue[] = [
    { value: '1', viewValue: 'GTR 30 Pay Bill' },
    { value: '2', viewValue: 'GTR 45 TA Bill' },
    { value: '3', viewValue: 'GTR 40 Grant In Bill' },
    { value: '4', viewValue: 'GTR 12 Advance Bill' }
  ];

  module_list: ListValue[] = [
    { value: '1', viewValue: 'Treasury Bill Processing' },
    { value: '2', viewValue: 'GPF' },
  ];


  constructor(
    private router: Router,
    private fb: FormBuilder,
    public dialog: MatDialog,
    private elem: ElementRef,
    public dialogRef: MatDialogRef<ObjectMasterDialogComponent>
  ) { }
  ngOnInit() {
    this.objectionDialogData();
  }

  vitocancel(): void {
    this.dialogRef.close();
  }

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
    // tslint:disable-next-line: triple-equals

    if (elements !== undefined) {
      if (this.currentLang.value === 'Guj') {
        SetEnglish();
        this.currentLang.next('Eng');
      } else {
        SetGujarati();
        this.currentLang.next('Guj');
      }
      elements.focus();
    }
  }
  checkGujarati(data) {
    this.ObjectionDialogForm.patchValue({
      workNameGuj: data
    });
  }

  objectionDialogData() {
    this.ObjectionDialogForm = this.fb.group({
      modulername: [''],
      object_desc: ['', Validators.required],
      billtype: [''],

    });
  }
  setGEnglishDefault() {

  }

}