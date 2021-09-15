import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { ListValue, NotActivateInLC, ActivatedChequeInLC, InactivatedChequeInLC } from 'src/app/model/letter-of-credit';
import { LetterOfCreditDirectives } from 'src/app/common/directive/letter-of-credit-directive';

@Component({
  selector: 'app-lc-chequebook-activate-inactivate',
  templateUrl: './lc-chequebook-activate-inactivate.component.html',
  styleUrls: ['./lc-chequebook-activate-inactivate.component.css']
})
export class LcChequebookActivateInactivateComponent implements OnInit {

  // List of Cheque Type
  ChequeTypeList: ListValue[] = [
    { value: '1', viewValue: 'CTS 2010' },
    { value: '2', viewValue: 'Normal' }
  ];

  // List of Request Type
  RequestTypeList: ListValue[] = [
    { value: '1', viewValue: 'Activate' },
    { value: '2', viewValue: 'Inactivate' }
  ];

  // Display Data for Not Activated In LC Table
  NotActivateInLCData: NotActivateInLC[] = [
    { issueDate: '26-MAR-2017', startingChequeSeries: 'EE002-420301', endingChequeSeries: 'EE002-420400' },
    { issueDate: '26-MAR-2017', startingChequeSeries: 'EE002-420401', endingChequeSeries: 'EE002-420500' }
  ];

  // Data Column for Not Activated In LC Table
  NotActivateInLCDataColumn: string[] = [
    'select', 'srno', 'issueDate', 'startingChequeSeries', 'endingChequeSeries'
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
    { activatedDate: '25-MAR-2017', inactivateDate: '26-MAR-2017',
     startingChequeSeries: 'EE002-420101', endingChequeSeries: 'EE002-420200' },
    { activatedDate: '25-MAR-2017', inactivateDate: '26-MAR-2017',
     startingChequeSeries: 'EE002-420201', endingChequeSeries: 'EE002-420300' }
  ];

  // Data Column for Inactivated In LC Table
  InactivatedChequeInLCDataColumn: string[] = [
    'select', 'srno', 'inactivateDate', 'activatedDate', 'startingChequeSeries', 'endingChequeSeries'
  ];
  workFlowData = 'fromLcChequebookActivateInactivate';
  todayDate = Date.now();
  divisionCodeValue = 'AFR007';
  divisionName = 'Dy. Con. Of Forest Training Center, Gandhinagar';
  bankName = 'State Bank Of India, Main Branch, Gandhinagar';
  bankAccountNo = '12345678912340';
  showTableVar = false;
  optionActivated = true;
  optionInactivated = false;
  isSearch: boolean;
  lcChequeBookActivateInactivateForm: FormGroup;
  ChequeTypeCTRL: FormControl = new FormControl();
  RequestTypeCTRL: FormControl = new FormControl();
  NotActivateInLCDataSource = new MatTableDataSource<NotActivateInLC>(this.NotActivateInLCData);
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
      chequeType: ['1'],
      requestType: ['1'],
      lcRemarks: ['']
    });
  }

  // Method for Search
  showTable() {
    if (this.lcChequeBookActivateInactivateForm.controls['requestType'].value === '1') {
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

  // Method to go to listing page
  ListForm() {
    this.router.navigate(['/lc/lc-chequebook-listing']);
  }
}
