import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { ListValue, LcAdviceVerification } from 'src/app/model/letter-of-credit';
import { LetterOfCreditDirectives } from 'src/app/common/directive/letter-of-credit-directive';
import { Router } from '@angular/router';
import { verifyComponent } from '../lc-advice-preparation-edit/lc-advice-preparation-edit.component';

@Component({
  selector: 'app-lc-advice-verification',
  templateUrl: './lc-advice-verification.component.html',
  styleUrls: ['./lc-advice-verification.component.css']
})
export class LcAdviceVerificationComponent implements OnInit {

  LcAdviceVerificationData: LcAdviceVerification[] = [
    {
      virtualTokenNo: '1',
      virtualTokenDate: '10-Apr-2020 02:55',
      adviceNo: '10ADV57AFR0070001',
      adviceDate: '14-Apr-2020 11:30',
      divisionCode: 'AFR007',
      divisionName: 'Dy. Con. Of Forest Training Centre, Gandhinagar',
      ddoApproverName: 'Shri DDO User One',
      adviceGrossAmount: '120000',
      totalDeduction: '1000',
      adviceNetAmount: '119000',
      receivedFrom: 'ABC user',
      receivedDate: '02-Aug-2020 05:11',
      sentTo: 'MNOP user',
      sentDate: '02-Aug-2020 12:44',
      lyingWith: 'XYZ user',
      status: 'Verified',
      workflowStatus: 'Verified',
      AuthorizedReturnedDate: '13-Apr-2020 11:30',
      total: ''
    },
  ];

  // Table Columns for Advice Verification Table
  LcAdviceVerificationDATAColumn: string[] = [
    'select', 'srno', 'virtualTokenNo',
    'adviceNo', 'adviceDate', 'divisionCode',
    'divisionName', 'ddoApproverName', 'adviceGrossAmount', 'totalDeduction',
    'adviceNetAmount', 'receivedFrom', 'receivedDate', 'sentTo', 'sentDate',
    'lyingWith', 'status', 'workflowStatus', 'AuthorizedReturnedDate', 'action'
  ];

  // List of division Code
  divisionCodeList: ListValue[] = [
    { value: '1', viewValue: 'AFR002' },
    { value: '2', viewValue: 'AFR003' },
    { value: '3', viewValue: 'AFR005' },
    { value: '4', viewValue: 'AFR007' },
    { value: '5', viewValue: 'AFR008' },
  ];

  // List of division name
  divisionNameList: ListValue[] = [
    { value: '1', viewValue: 'Con Of forest (Account) gnr' },
    { value: '2', viewValue: 'Dy Con Of Forest Publicity & Liaison, Gandhinagar' },
    { value: '3', viewValue: 'Dy Con. Of Forest Research, Gandhinagar' },
    { value: '4', viewValue: 'Dy. Con. Of Forest Training Centre, Gandhinagar' },
    { value: '5', viewValue: 'Gandhinagar Wild Life Circle' },
  ];

  // List of circle code
  circleCodeList: ListValue[] = [
    { value: '1', viewValue: 'EE001' },
    { value: '2', viewValue: 'EE002' },
    { value: '3', viewValue: 'EE003' },
    { value: '4', viewValue: 'EE005' },
    { value: '5', viewValue: 'EE009' },
  ];

  // List of circle name
  circleNameList: ListValue[] = [
    { value: '1', viewValue: 'Ex Eng C P Div No 1, Gandhinagar' },
    { value: '2', viewValue: 'Ex Eng C P Div No 2, Gandhinagar' },
    { value: '3', viewValue: 'Ex Eng C P Div No 3, Gandhinagar' },
    { value: '4', viewValue: 'Ex Eng C P Div No 5, Gandhinagar' },
    { value: '5', viewValue: 'Ex Eng C P Div No 9, Gandhinagar' },
  ];

  // List of status
  statusList: ListValue[] = [
    { value: '1', viewValue: 'Authorized' },
    { value: '2', viewValue: 'In Process' },
    { value: '3', viewValue: 'Returned' },
  ];
  workFlowData = 'fromLCAdviceVerification';
  todayDate = new Date();
  isSearch: boolean;
  ForwardToCtrl: FormControl = new FormControl();
  statusCtrl: FormControl = new FormControl();
  workflowStatusCtrl: FormControl = new FormControl();
  circleNameCtrl: FormControl = new FormControl();
  circleCodeCtrl: FormControl = new FormControl();
  divisionNameCtrl: FormControl = new FormControl();
  divisionCodeCtrl: FormControl = new FormControl();
  lcAdviceVerificationForm: FormGroup;
  LCBranchCtrl: FormControl = new FormControl();
  LcAdviceVerificationDataSource = new MatTableDataSource<LcAdviceVerification>(this.LcAdviceVerificationData);

  constructor(private fb: FormBuilder, private el: ElementRef, public dialog: MatDialog, private router: Router) { }

  // Create object to access Methods of Letter of Credit Directive
  directiveObject = new LetterOfCreditDirectives(this.router, this.dialog, this.el);

  ngOnInit() {
    this.lcAdviceVerificationFormData();
  }

  // Initialize Form Fields
  lcAdviceVerificationFormData() {
    this.lcAdviceVerificationForm = this.fb.group({
      forwardTo: [''],
      adviceNumber: [''],
      adviceFromDate: [''],
      adviceToDate: [''],
      divisionCode: [''],
      cardexNo: [''],
      ddoNo: [''],
      virtualTokenDate: [''],
      divisionName: [''],
      referenceNO: [''],
      circleCode: [''],
      circleName: [''],
      adviceNO: [''],
      adviceGrossAmount: [''],
      adviceNetAmount: [''],
      workflowStatus: [''],
      virtualTokenNo: [''],
      status: [''],
    });
  }

  openVerifyPopup() {
    const dialogRef = this.dialog.open(verifyComponent, {
      width: '800px',
      height: 'auto',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  // Method to Calculate Total of Advice Amount
  totalAdviceAmount() {
    let adviceAmount = 0;
    this.LcAdviceVerificationDataSource.data.forEach(element =>
      adviceAmount = adviceAmount + Number(element.adviceGrossAmount)
    );
    return adviceAmount;
  }

  // Method to Calculate Total of Deduction Amount
  totalDeductionAmount() {
    let totalDeduction = 0;
    this.LcAdviceVerificationDataSource.data.forEach(element =>
      totalDeduction = totalDeduction + Number(element.totalDeduction)
    );
    return totalDeduction;
  }

  // Method to Calculate Total Net Amount
  totalNetAmount() {
    let netAmount = 0;
    this.LcAdviceVerificationDataSource.data.forEach(element =>
      netAmount = netAmount + Number(element.adviceNetAmount)
    );
    return netAmount;
  }

}
