import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { ListValue, NotActivateInLCTO, ActivatedChequeInLC, InactivatedChequeInLC } from 'src/app/model/letter-of-credit';
import { LetterOfCreditDirectives } from 'src/app/common/directive/letter-of-credit-directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lc-chequebook-activate-inactivate-to',
  templateUrl: './lc-chequebook-activate-inactivate-to.component.html',
  styleUrls: ['./lc-chequebook-activate-inactivate-to.component.css']
})
export class LcChequebookActivateInactivateToComponent implements OnInit {

  // List of Division Code
  DivisionCodeList: ListValue[] = [
    { value: '1', viewValue: 'AFR007' },
    { value: '2', viewValue: 'AFR002' },
    { value: '3', viewValue: 'AFR003' },
    { value: '4', viewValue: 'AFR005' }
  ];

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

  // Display Data for Not Activated In LC Table
  NotActivateInLCData: NotActivateInLCTO[] = [
    { issueDate: '26-MAR-2017', startingChequeSeries: 'EE002-420301', endingChequeSeries: 'EE002-420400', chequeRequestReceivedDate: '04-APR-2018' },
    { issueDate: '26-MAR-2017', startingChequeSeries: 'EE002-420301', endingChequeSeries: 'EE002-420400', chequeRequestReceivedDate: '04-APR-2018' }
  ];

  // Data Column for Not Activated In LC Table
  NotActivateInLCDataColumn: string[] = [
    'select', 'srno', 'issueDate', 'startingChequeSeries', 'endingChequeSeries', 'chequeRequestReceivedDate'
  ];

  // Display Data for Activated Cheque In LC Table
  ActivatedChequeInLCData: ActivatedChequeInLC[] = [
    { activatedDate: '28-FEB-2018', startingChequeSeries: 'EE002-420401', endingChequeSeries: 'EE002-420500' },
    { activatedDate: '12-OCT-2017', startingChequeSeries: 'EE002-420201', endingChequeSeries: 'EE002-420300' },
    { activatedDate: '26-MAR-2017', startingChequeSeries: 'EE002-420001', endingChequeSeries: 'EE002-420100' }
  ];

  // Data Column for Activated In LC Table
  ActivatedChequeInLCDataColumn: string[] = [
    'select', 'srno', 'activatedDate', 'startingChequeSeries', 'endingChequeSeries'
  ];

  // Display Data for Inactivated Cheque In LC Table
  InactivatedChequeInLCData: InactivatedChequeInLC[] = [
    { activatedDate: '25-APR-2019', inactivateDate: '26-MAR-2017', startingChequeSeries: 'EE002-420101', endingChequeSeries: 'EE002-420200' },
    { activatedDate: '25-APR-2019', inactivateDate: '26-MAR-2017', startingChequeSeries: 'EE002-420101', endingChequeSeries: 'EE002-420200' }
  ];

  // Data Column for Inactivated In LC Table
  InactivatedChequeInLCDataColumn: string[] = [
    'select', 'srno', 'inactivateDate', 'activatedDate', 'startingChequeSeries', 'endingChequeSeries'
  ];

  todayDate = Date.now();
  divisionCode = "AFR007"
  divisionName = "Dy. Con. Of Forest Training Center, Gandhinagar";
  bankName = "State Bank Of India, Main Branch, Gandhinagar";
  bankAccountNo = "12345678912340";
  showTableVar = false;
  optionActivated = true;
  optionInactivated = false;
  isSearch: boolean;
  lcChequeBookActivateInactivateForm: FormGroup;
  ChequeTypeCTRL: FormControl = new FormControl();
  RequestTypeCTRL: FormControl = new FormControl();
  StatusCTRL: FormControl = new FormControl();
  DivisionCodeCTRL: FormControl = new FormControl();
  NotActivateInLCDataSource = new MatTableDataSource<NotActivateInLCTO>(this.NotActivateInLCData);
  ActivatedChequeInLCDataSource = new MatTableDataSource<ActivatedChequeInLC>(this.ActivatedChequeInLCData);
  InactivatedChequeInLCDataSource = new MatTableDataSource<InactivatedChequeInLC>(this.InactivatedChequeInLCData);

  constructor(private fb: FormBuilder, private el: ElementRef, public dialog: MatDialog, private router: Router) { }

  // Create object to access Methods of Letter of Credit Directive
  directiveObject = new LetterOfCreditDirectives(this.router, this.dialog, this.el);

  ngOnInit() {
    this.lcChequeBookActivateInactivateFormData();
  }

  // Form Fields Initialization
  lcChequeBookActivateInactivateFormData() {
    this.lcChequeBookActivateInactivateForm = this.fb.group({
      divisionCode: [''],
      chequeType: ['2'],
      requestType: ['1'],
      receivedFromDate: [''],
      receivedToDate: [''],
      lyingWith: [''],
      status: ['']
    });
  }

  // Method to show Table Data
  showTable(event) {
    if (this.lcChequeBookActivateInactivateForm.controls['requestType'].value == '1') {
      this.showTableVar = true;
      this.optionActivated = true;
      this.optionInactivated = false;
    } else {
      this.showTableVar = true;
      this.optionActivated = false;
      this.optionInactivated = true;
    }
    event.preventDefault();
  }
}
