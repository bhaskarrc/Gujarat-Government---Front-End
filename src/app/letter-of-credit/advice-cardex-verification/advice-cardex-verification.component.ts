import { Router } from '@angular/router';
import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { ListValue, LcAdviceCardexVerification } from 'src/app/model/letter-of-credit';
import { LetterOfCreditDirectives } from 'src/app/common/directive/letter-of-credit-directive';


@Component({
  selector: 'app-advice-cardex-verification',
  templateUrl: './advice-cardex-verification.component.html',
  styleUrls: ['./advice-cardex-verification.component.css']
})
export class AdviceCardexVerificationComponent implements OnInit {

  // List of Employee to forward
  ForwardToList: ListValue[] = [
    { value: '', viewValue: '' }
  ];

  // Display Data for Advice Cardex Verificaiton Table
  LcAdviceCardexVerificationData: LcAdviceCardexVerification[] = [
    {
      virtualTokenNo: '1',
      virtualTokenDate: '14-Apr-2020 11:30',
      adviceNo: 'ADV57AFR0070001',
      adviceDate: '14-Apr-2020 11:30',
      divisionCode: 'AFR007',
      divisionName: 'Dy. Con. Of Forest Training Centre, Gandhinagar',
      cardexNo: '986',
      ddoNO: '986',
      adviceAmount: '12000',
      totalDeduction: '1000',
      adviceNetAmount: '11000',
      lcBranchUser: 'Shri P P Pandya',
      ddoApproverName: 'Shri DDO User One',
      signVerify: '1'
    }
  ];

  // Data Column for Advice Cardex Verificaiton Table
  LcAdviceCardexVerificationDATAColumn: string[] = [
    'select', 'srno', 'virtualTokenNo', 'virtualTokenDate', 'adviceNo',
    'adviceDate', 'divisionCode', 'divisionName', 'cardexNo', 'ddoNO', 'adviceAmount',
    'totalDeduction', 'adviceNetAmount', 'ddoApproverName', 'signVerify', 'sign', 'action'
  ];

  // List of LC Branch
  LcBranchList: ListValue[] = [
    { value: '', viewValue: '' }
  ];

  // List of Sign Verify
  SignVerifyList: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];

  // List of Division Code
  DivisionCodeList: ListValue[] = [
    { value: '1', viewValue: 'AFR002' },
    { value: '2', viewValue: 'AFR003' },
    { value: '3', viewValue: 'AFR005' },
    { value: '4', viewValue: 'AFR007' },
  ];

  // List of Division Names
  DivisionNameList: ListValue[] = [
    { value: '1', viewValue: 'Con Of forest (Account) Gandhinagar' },
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
    { value: '5', viewValue: 'Supt.Engr.C.P.Circle, Gandhinagar' },
  ];

  // List of Circle Code
  CircleCodeList: ListValue[] = [
    { value: '1', viewValue: 'SE005' },
    { value: '2', viewValue: 'SE001' },
    { value: '3', viewValue: 'EE014' },
    { value: '4', viewValue: 'SE003' },
    { value: '5', viewValue: 'SE009' },
  ];
  workFlowData = 'fromLCAdviceCardexVerification';
  todayDate = new Date();
  isSearch: boolean;
  lcAdviceCardexVerificationForm: FormGroup;
  DivisionCodeCtrl: FormControl = new FormControl();
  DivisionNameCtrl: FormControl = new FormControl();
  CircleCodeCtrl: FormControl = new FormControl();
  CircleNameCtrl: FormControl = new FormControl();
  ForwardToCtrl: FormControl = new FormControl();
  LCBranchCtrl: FormControl = new FormControl();
  SignVerifyCtrl: FormControl = new FormControl();
  LcAdviceCardexVerificationDataSource = new MatTableDataSource<LcAdviceCardexVerification>(this.LcAdviceCardexVerificationData);

  constructor(private fb: FormBuilder, private el: ElementRef, public dialog: MatDialog, private router: Router) { }

  // Create object to access Methods of Letter of Credit Directive
  directiveObject = new LetterOfCreditDirectives(this.router, this.dialog, this.el);

  ngOnInit() {
    this.lcAdviceCardexVerificationFormData();
  }

  // Form Fields Initialization
  lcAdviceCardexVerificationFormData() {
    this.lcAdviceCardexVerificationForm = this.fb.group({
      forwardTo: [''],
      cardexNo: [''],
      ddoNo: [''],
      referenceNo: [''],
      adviceNumber: [''],
      divisionCode: [''],
      divisionName: [''],
      circleCode: [''],
      circleName: [''],
      adviceFromDate: [''],
      adviceToDate: [''],
      adviceGrossAmount: [''],
      adviceNetAmount: [''],
      virtualTokenNo: [''],
      virtualTokenDate: new Date(),
    });
  }

}
