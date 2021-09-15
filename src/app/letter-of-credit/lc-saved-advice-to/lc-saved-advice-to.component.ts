import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { LetterOfCreditDirectives } from 'src/app/common/directive/letter-of-credit-directive';
import { ListValue } from 'src/app/model/common-grant';
import { InwardOnlineAdvice } from 'src/app/model/letter-of-credit';

@Component({
  selector: 'app-lc-saved-advice-to',
  templateUrl: './lc-saved-advice-to.component.html',
  styleUrls: ['./lc-saved-advice-to.component.css']
})
export class LcSavedAdviceToComponent implements OnInit {

  // List of LC Branch
  LcBranchList: ListValue[] = [
    { value: '1', viewValue: 'Shri P P Pandya' },
    { value: '2', viewValue: 'Shri B M Solanki' }
  ];

  // List of Division Code
  DivisionCodeList: ListValue[] = [
    { value: '1', viewValue: 'AFR002' },
    { value: '2', viewValue: 'AFR003' },
    { value: '3', viewValue: 'AFR005' },
    { value: '4', viewValue: 'AFR007' },
  ];

  DivisionNameList: ListValue[] = [
    { value: '1', viewValue: 'Con. Of forest (Account) Gandhinagar' },
    { value: '2', viewValue: 'Dy. Con. Of Forest Publicity & Liaison, Gandhinagar' },
    { value: '3', viewValue: 'Dy. Con. Of Forest Training Centre, Gandhinagar' },
    { value: '4', viewValue: 'Dy. Conservator Of Forest Gandhinagar Division, Gandhinagar' },
  ];

  // List of Circle Names
  CircleNameList: ListValue[] = [
    { value: '1', viewValue: 'Dir. Parks & Garden, G. S. Gnr.' },
    { value: '2', viewValue: 'Pay & Accounts Officer, N.W.R. & W.S. Deptt. Gnr.' },
    { value: '3', viewValue: 'Supdt. Eng. Elect. Eng. R.& B. Circle, Gnr.' },
    { value: '4', viewValue: 'Supdt. Eng. State Road Project Circle, Gnr.' },
    { value: '5', viewValue: 'Supt. Engr.C.P.Circle, Gandhinagar' },
    // { value: '6', viewValue: 'Other' },
  ];

  CircleCodeList: ListValue[] = [
    { value: '1', viewValue: 'EE014' },
    { value: '2', viewValue: 'SE001' },
    { value: '3', viewValue: 'SE003' },
    { value: '4', viewValue: 'SE005' },
    { value: '5', viewValue: 'SE009' },
  ];

  // Table Data for Inward Online Advice
  LcSavedAdviceAdviceData: InwardOnlineAdvice[] = [
    {
      virtualTokenNo: '1',
      virtualTokenDate: '14-Apr-2020 12:30',
      adviceNo: 'ADV57AFR0070001',
      adviceDate: '14-Apr-2020 11:30',
      divisionCode: 'AFR007',
      divisionName: 'Dy. Con. Of Forest Training Centre, Gandhinagar',
      cardexNo: '986',
      ddoNO: '986',
      adviceAmount: '12000',
      totalDeduction: '1000',
      adviceNetAmount: '11000',
      lcBranchUser: '1',
      referenceNo: '',
    },
  ];

  // Table Column for Inward Online Advice
  LcSavedAdviceAdviceDATAColumn: string[] = ['select',
    'srno', 'virtualTokenNo', 'virtualTokenDate', 'adviceNo', 'adviceDate',
    'divisionCode', 'divisionName', 'cardexNo', 'ddoNO', 'adviceAmount',
    'totalDeduction', 'adviceNetAmount', 'lcBranchUser', 'action'
  ];
  workFlowData = 'fromLCSavedAdviceTO';
  lcSavedAdviceForm: FormGroup;
  LCBranchCtrl: FormControl = new FormControl();
  DivisionCodeCtrl: FormControl = new FormControl();
  CircleCodeCtrl: FormControl = new FormControl();
  DivisionNameCtrl: FormControl = new FormControl();
  CircleNameCtrl: FormControl = new FormControl();
  LcSavedAdviceDataSource = new MatTableDataSource<InwardOnlineAdvice>(this.LcSavedAdviceAdviceData);

  constructor(private fb: FormBuilder, private el: ElementRef, public dialog: MatDialog, private router: Router) { }

  // Create object to access Methods of Letter of Credit Directive
  directiveObject = new LetterOfCreditDirectives(this.router, this.dialog, this.el);

  ngOnInit() {
    this.lcSavedAdviceFormData();
  }

  lcSavedAdviceFormData() {
    this.lcSavedAdviceForm = this.fb.group({
      cardexNo: [''],
      ddoNo: [''],
      virtualTokenNo: [''],
      virtualTokenDate: [''],
      referenceNo: [''],
      adviceNumber: [''],
      adviceFromDate: [''],
      adviceToDate: [''],
      circleCode: [''],
      circleName: [''],
      divisionCode: [''],
      divisionName: [''],
      adviceGrossAmount: [''],
      adviceNetAmount: [''],
    });
  }

}
