import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { ListValue, LCRequest } from 'src/app/model/letter-of-credit';
import { LetterOfCreditDirectives } from 'src/app/common/directive/letter-of-credit-directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lc-account-closing-request-ag',
  templateUrl: './lc-account-closing-request-ag.component.html',
  styleUrls: ['./lc-account-closing-request-ag.component.css']
})
export class LcAccountClosingRequestAgComponent implements OnInit {

  // List of Status
  StatusList: ListValue[] = [
    { value: '1', viewValue: 'Created By Circle' }
  ];

  // Table Data for LC Closing Request
  LcOpeningRequestSavedData: LCRequest[] = [
    { requestNo: '22', ddoCode: '986', divisionName: 'Deputy  Conservator of Forest, Social Forestry Division, Godhra', status: 'Created by Circle' },
    { requestNo: '23', ddoCode: '986', divisionName: 'Deputy  Conservator of Forest, Social Forestry Division, Gandhinagar', status: 'Created by Circle' }
  ];

  // Table Columns for LC Closing Request
  LcOpeningRequestSavedDataColumn: string[] = [
    'srNo', 'requestNo', 'ddoCode', 'divisionName', 'status', 'action'
  ];

  todayDate = new Date();
  isSearch: boolean;
  lcOpeningRequestSavedForm: FormGroup;
  StatusCtrl: FormControl = new FormControl();
  LcOpeningRequestSavedDataSource = new MatTableDataSource<LCRequest>(this.LcOpeningRequestSavedData);
  accountClosingRequestForm: FormGroup;

  constructor(private fb: FormBuilder, private el: ElementRef, public dialog: MatDialog, private router: Router) { }

  // Create object to access Methods of Letter of Credit Directive
  directiveObject = new LetterOfCreditDirectives(this.router, this.dialog, this.el);

  ngOnInit() {
    this.accountClosingRequestFormData();
  }

  // Initialize the Form Fields
  accountClosingRequestFormData() {
    this.accountClosingRequestForm = this.fb.group({
      requestNumber: [''],
      ddoCode: [''],
      divisionName: [''],
      status: [''],
    });
  }

}
