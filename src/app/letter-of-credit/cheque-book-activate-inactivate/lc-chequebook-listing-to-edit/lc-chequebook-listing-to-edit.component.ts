import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ListValue, NotActivateInLC, ActivatedChequeInLC, InactivatedChequeInLC } from 'src/app/model/letter-of-credit';
import { LetterOfCreditDirectives } from 'src/app/common/directive/letter-of-credit-directive';
import { MatTableDataSource, MatDialog } from '@angular/material';

@Component({
  selector: 'app-lc-chequebook-listing-to-edit',
  templateUrl: './lc-chequebook-listing-to-edit.component.html',
  styleUrls: ['./lc-chequebook-listing-to-edit.component.css']
})
export class LcChequebookListingToEditComponent implements OnInit {

  // List of Cheque Type
  ChequeTypeList: ListValue[] = [
    { value: '1', viewValue: 'Normal' },
    { value: '2', viewValue: 'CTS 2010' }
  ];

  // List of Request Type
  RequestTypeList: ListValue[] = [
    { value: '1', viewValue: 'Activate' },
    { value: '2', viewValue: 'Inactivate' }
  ];

  // List of Status Type
  StatusTypeList: ListValue[] = [
    { value: '1', viewValue: 'In Processes' },
    { value: '2', viewValue: 'Authorized' },
    { value: '3', viewValue: 'Returned' }
  ];

  // Table data for Not Activate in LC Table
  NotActivateInLCData: NotActivateInLC[] = [
    { issueDate: '26-MAR-2017', startingChequeSeries: 'EE002-420301', endingChequeSeries: 'EE002-420400' }
  ];

  // Columns of Not Activated in LC Table
  NotActivateInLCDataColumn: string[] = [
    'srno', 'issueDate', 'startingChequeSeries', 'endingChequeSeries'
  ];

  // Table data for Activated Cheque in LC Table
  ActivatedChequeInLCData: ActivatedChequeInLC[] = [
    { activatedDate: '28-FEB-2018', startingChequeSeries: 'EE002-420401', endingChequeSeries: 'EE002-420500' }
  ];

  // Columns of Activated Cheque in LC Table
  ActivatedChequeInLCDataColumn: string[] = [
    'srno', 'activatedDate', 'startingChequeSeries', 'endingChequeSeries'
  ];

  // Table data for Inactivated Cheque in LC Table
  InactivatedChequeInLCData: InactivatedChequeInLC[] = [
    { activatedDate: '25-APR-2019', inactivateDate: '26-MAR-2017', startingChequeSeries: 'EE002-420101', endingChequeSeries: 'EE002-420200' }
  ];

  // Columns of Inactivated Cheque in LC Data Table
  InactivatedChequeInLCDataColumn: string[] = [
    'srno', 'inactivateDate', 'activatedDate', 'startingChequeSeries', 'endingChequeSeries'
  ];
  workFlowData = 'fromLcChequebookActivateInactivate';

  todayDate = Date.now();
  divisionCode = "AFR007"
  divisionName = "Dy. Con. Of Forest Training Center, Gandhinagar";
  bankName = "State Bank Of India, Main Branch, Gandhinagar";
  bankAccountNo = "12345678912340";
  optionActivated = true;
  optionInactivated = false;
  isSearch: boolean;
  lcChequeBookActivateInactivateEditForm: FormGroup;
  ChequeTypeCTRL: FormControl = new FormControl();
  RequestTypeCTRL: FormControl = new FormControl();
  StatusCTRL: FormControl = new FormControl();
  DivisionCodeCTRL: FormControl = new FormControl();
  DivisionNameCTRL: FormControl = new FormControl();
  NotActivateInLCDataSource = new MatTableDataSource<NotActivateInLC>(this.NotActivateInLCData);
  ActivatedChequeInLCDataSource = new MatTableDataSource<ActivatedChequeInLC>(this.ActivatedChequeInLCData);
  InactivatedChequeInLCDataSource = new MatTableDataSource<InactivatedChequeInLC>(this.InactivatedChequeInLCData);

  constructor(private fb: FormBuilder, private el: ElementRef, public dialog: MatDialog, private router: Router) { }

  // Create object to access Methods of Letter of Credit Directive
  directiveObject = new LetterOfCreditDirectives(this.router, this.dialog, this.el);

  ngOnInit() {
    this.lcChequeBookActivateInactivateEditFormData();
  }

  // Initialize the Form Fields
  lcChequeBookActivateInactivateEditFormData() {
    this.lcChequeBookActivateInactivateEditForm = this.fb.group({
      chequeType: ['2'],
      requestType: ['1'],
      receivedFromDate: [''],
      receivedToDate: [''],
      lyingWith: [''],
      status: ['1'],
      divisionCode: ['1'],
      divisionName: ['1']
    });
  }

  // Method to show results
  showTable() {
    if (this.lcChequeBookActivateInactivateEditForm.controls['requestType'].value == '1') {
      this.optionActivated = true;
      this.optionInactivated = false;
    } else {
      this.optionActivated = false;
      this.optionInactivated = true;
    }
  }
}
