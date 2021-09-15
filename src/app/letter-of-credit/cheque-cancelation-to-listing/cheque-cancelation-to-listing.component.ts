import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { ListValue, chequeCancellationTOListing } from 'src/app/model/letter-of-credit';
import { LetterOfCreditDirectives } from 'src/app/common/directive/letter-of-credit-directive';

@Component({
  selector: 'app-cheque-cancelation-to-listing',
  templateUrl: './cheque-cancelation-to-listing.component.html',
  styleUrls: ['./cheque-cancelation-to-listing.component.css']
})
export class ChequeCancelationToListingComponent implements OnInit {

  // List of Status
  StatusList: ListValue[] = [
    { value: '1', viewValue: 'Authorized' },
    { value: '2', viewValue: 'In Process' },
    { value: '3', viewValue: 'Returned' },
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
    { value: '1', viewValue: 'Dy Conservator Of Forest Gandhinagar Division, Gandhinagar' },
    { value: '2', viewValue: 'Con Of forest (Account) Gandhinagar' },
    { value: '3', viewValue: 'Dy Con Of Forest Publicity & Liaison, Gandhinagar' },
    { value: '4', viewValue: 'Dy. Con. Of Forest Training Centre, Gandhinagar' },
  ];

  // Table Data of Cheque Cancellation Table
  lcChequeCancelationData: chequeCancellationTOListing[] = [
    { referenceNo: '19-20/LC/CC/001', referenceDate: '16/04/2020 11:30:30', divisionCode: '', divisionName: '', cardexNo: '', ddoNo: '', chequeNo: 'AFR007-200101', chequeDate: '16/04/2020', chequeAmount: '20800', receivedFrom: 'ABC user', receivedDate: '16/04/2020 11:30:30', sentTo: 'MNOP user', sentDate: '16/04/2020 11:50:30', lyingWith: 'XYZ user', status: 'In process' },
    { referenceNo: '19-20/LC/CC/002', referenceDate: '16/04/2020 13:30:31', divisionCode: '', divisionName: '', cardexNo: '', ddoNo: '', chequeNo: 'AFR007-200170', chequeDate: '20/05/2020', chequeAmount: '1000', receivedFrom: 'ABC user', receivedDate: '16/04/2020 13:30:31', sentTo: 'MNOP user', sentDate: '16/04/2020 13:50:31', lyingWith: 'XYZ user', status: 'In process' },
    { referenceNo: '19-20/LC/CC/003', referenceDate: '16/04/2020 15:30:32', divisionCode: '', divisionName: '', cardexNo: '', ddoNo: '', chequeNo: 'AFR007-200178', chequeDate: '25/05/2020', chequeAmount: '12000', receivedFrom: 'PQR user', receivedDate: '16/04/2020 15:30:32', sentTo: 'MNOP user', sentDate: '16/04/2020 15:50:32', lyingWith: 'XYZ user', status: 'In process' }
  ];

  // Table Columns of LC Cheque Cancellation Table
  lcChequeCancelationDataColumn: string[] = [
    'srno', 'referenceNo', 'referenceDate', 'divisionCode', 'divisionName', 'cardexNo', 'ddoNo', 'chequeNo', 'chequeDate', 'chequeAmount', 'receivedFrom', 'receivedDate', 'sentTo', 'sentDate', 'lyingWith', 'status', 'action'
  ];

  valueBetweenError = false;
  todayDate = new Date();
  isSearch: boolean;
  lcChequeCancelationListingForm: FormGroup;
  StatusCtrl: FormControl = new FormControl();
  DivisionCodeCtrl: FormControl = new FormControl();
  DivisionNameCtrl: FormControl = new FormControl();
  lcChequeCancelationDataSource = new MatTableDataSource<chequeCancellationTOListing>(this.lcChequeCancelationData);

  constructor(private fb: FormBuilder, private el: ElementRef, public dialog: MatDialog, private router: Router) { }

  // Create object to access Methods of Letter of Credit Directive
  directiveObject = new LetterOfCreditDirectives(this.router, this.dialog, this.el);

  ngOnInit() {
    this.lcChequeCancelationListingFormData();
  }

  // Initialize Form Fields
  lcChequeCancelationListingFormData() {
    this.lcChequeCancelationListingForm = this.fb.group({
      referenceNo: [''],
      chequeNo: [''],
      cardexNo: [''],
      ddoNo: [''],
      divisionCode: [''],
      divisionName: [''],
      receivedFromDate: [''],
      receivedToDate: [''],
      lcAmountBetween: [''],
      and: [''],
      status: [''],
      lyingWith: [''],
    });
  }

  compareAmount() {
    if (this.lcChequeCancelationListingForm.controls['lcAmountBetween'].value > this.lcChequeCancelationListingForm.controls['and'].value) {
      this.valueBetweenError = true;
    } else {
      this.valueBetweenError = false;
    }
  }
}
