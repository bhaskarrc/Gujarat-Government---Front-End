import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { ListValue, LCRequest } from 'src/app/model/letter-of-credit';
import { LetterOfCreditDirectives } from 'src/app/common/directive/letter-of-credit-directive';

@Component({
  selector: 'app-lc-account-closing-request-to',
  templateUrl: './lc-account-closing-request-to.component.html',
  styleUrls: ['./lc-account-closing-request-to.component.css']
})
export class LcAccountClosingRequestToComponent implements OnInit {

  // Table Data for LC Closing Request Table
  LcOpeningRequestSavedData: LCRequest[] = [
    { requestNo: '22', ddoCode: '986', divisionName: 'Deputy  Conservator of Forest, Social Forestry Division, Godhra', status: 'Created by Circle' },
    { requestNo: '23', ddoCode: '986', divisionName: 'Deputy  Conservator of Forest, Social Forestry Division, Gandhinagar', status: 'Created by Circle' }
  ];

  // Table Columns for LC Closing Request
  LcOpeningRequestSavedDataColumn: string[] = [
    'srNo', 'requestNo', 'ddoCode', 'divisionName', 'status', 'action'
  ];

  // List of Status
  StatusList: ListValue[] = [
    { value: '1', viewValue: 'Created By Circle' }
  ];

  todayDate = new Date();
  isSearch: boolean;
  // selection = new SelectionModel<any>(true, []);
  accountClosingRequestForm: FormGroup;
  StatusCtrl: FormControl = new FormControl();
  LcOpeningRequestSavedDataSource = new MatTableDataSource<LCRequest>(this.LcOpeningRequestSavedData)

  constructor(private fb: FormBuilder, private el: ElementRef, public dialog: MatDialog, private router: Router) { }

  // Create object to access Methods of Letter of Credit Directive
  directiveObject = new LetterOfCreditDirectives(this.router, this.dialog, this.el);

  ngOnInit() {
    this.accountClosingRequestFormData();
  }

  // Initialize Form Fields
  accountClosingRequestFormData() {
    this.accountClosingRequestForm = this.fb.group({
      requestNumber: [''],
      ddoCode: [''],
      divisionName: [''],
      status: [''],
    });
  }
}
