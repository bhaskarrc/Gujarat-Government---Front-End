import { Router } from '@angular/router';
import { Component, OnInit, ElementRef } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { ListValue, LcSavedAdvice } from 'src/app/model/letter-of-credit';
import { LetterOfCreditDirectives } from 'src/app/common/directive/letter-of-credit-directive';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { HistoryDetailsDialogComponent } from '../history-details-dialog/history-details-dialog.component';

@Component({
  selector: 'app-saved-advice',
  templateUrl: './saved-advice.component.html',
  styleUrls: ['./saved-advice.component.css']
})
export class SavedAdviceComponent implements OnInit {

  LcSavedAdviceData: LcSavedAdvice[] = [
    {
      refNo: ' 19-20/LC/AR/001',
      virtualTokenNo: '1',
      virtualTokenDate: '14-Aug-2020 01:25',
      adviceNo: 'ADV57AFR0070001',
      adviceDate: '14-Apr-2020 05:55',
      adviceAmount: '12000.00',
      totalDeduction: '1000.00',
      adviceNetAmount: '11000.00',
      receivedFrom: 'ABC user',
      receivedDate: '02-Aug-2020 02:51',
      sentTo: 'MNOP user',
      sentDate: '02-Aug-2020 09:49',
      lyingWith: 'XYZ user',
      status: 'Authorized',
      workflowStatus: 'Authorized',
      authorizedDate: '02-Aug-2020 12:43',
      referenceNo: '',
      referenceDate: '',
      printDetails: ''
    }
  ];

  // Table Columns for Saved Advice table
  LcSavedAdviceDATAColumn: string[] = [
    'select', 'srno', 'refNo', 'virtualTokenNo', 'virtualTokenDate', 'adviceNo', 'adviceDate', 'adviceAmount',
    'totalDeduction', 'adviceNetAmount', 'receivedFrom', 'receivedDate', 'sentTo', 'sentDate',
    'lyingWith', 'status', 'workflowStatus', 'authorizedDate', 'action'
  ];

  // List of Division Code
  DivisionCodeList: ListValue[] = [
    { value: '1', viewValue: 'AFR002' },
    { value: '2', viewValue: 'AFR003' },
    { value: '3', viewValue: 'AFR005' },
    { value: '4', viewValue: 'AFR007' },
  ];

  // List of Division Name
  DivisionNameList: ListValue[] = [
    { value: '1', viewValue: 'Dy Conservator Of Forest Gandhinagar Division, Gandhinagar' },
    { value: '2', viewValue: 'Con Of forest (Account) Gandhinagar' },
    { value: '3', viewValue: 'Dy Con Of Forest Publicity & Liaison, Gandhinagar' },
    { value: '4', viewValue: 'Dy. Con. Of Forest Training Centre, Gandhinagar' },
  ];

  // List of Circle Code
  CircleCodeList: ListValue[] = [
    { value: '1', viewValue: '' },
  ];

  // List of Circle Name
  CircleNameList: ListValue[] = [
    { value: '1', viewValue: '' },
  ];

  // List of Status
  statusList: ListValue[] = [
    { value: '1', viewValue: 'Authorized' },
    { value: '2', viewValue: 'In Process' },
    { value: '3', viewValue: 'Returned' },
  ];
  workFlowData = 'fromLCSavedAdvice';
  todayDate = new Date();
  isSearch: boolean;
  ForwardToCtrl: FormControl = new FormControl();
  DivisionCodeCtrl: FormControl = new FormControl();
  DivisionNameCtrl: FormControl = new FormControl();
  CircleCodeCtrl: FormControl = new FormControl();
  CircleNameCtrl: FormControl = new FormControl();
  statusCtrl: FormControl = new FormControl();
  workflowStatusstatusCtrl: FormControl = new FormControl();
  lcSavedAdviceForm: FormGroup;
  LCBranchCtrl: FormControl = new FormControl();
  LcSavedAdviceDataSource = new MatTableDataSource<LcSavedAdvice>(this.LcSavedAdviceData);

  constructor(private fb: FormBuilder, private el: ElementRef, public dialog: MatDialog, private router: Router) { }

  // Create object to access Methods of Letter of Credit Directive
  directiveObject = new LetterOfCreditDirectives(this.router, this.dialog, this.el);

  ngOnInit() {
    this.lcSavedAdviceFormData();
  }

  // Initialize Form Fields
  lcSavedAdviceFormData() {
    this.lcSavedAdviceForm = this.fb.group({
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
      virtualTokenDate: [''],
      status: [''],
      workflowStatus: [''],
      receivedFromDate: [''],
      receivedToDate: [''],
      sentFromDate: [''],
      sentToDate: [''],
    });
  }

}
