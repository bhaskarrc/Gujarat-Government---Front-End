import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { ListValue, chequeCancellationDivision } from 'src/app/model/letter-of-credit';
import { LetterOfCreditDirectives } from 'src/app/common/directive/letter-of-credit-directive';

@Component({
  selector: 'app-cheque-cancelation-division-listing',
  templateUrl: './cheque-cancelation-division-listing.component.html',
  styleUrls: ['./cheque-cancelation-division-listing.component.css']
})
export class ChequeCancelationDivisionListingComponent implements OnInit {

  //List data for Status
  StatusList: ListValue[] = [
    { value: '1', viewValue: 'Authorized' },
    { value: '2', viewValue: 'In Process' },
    { value: '3', viewValue: 'Returned' },
  ];

  //Table Data for LC Cheque Cancellation
  lcChequeCancelationData: chequeCancellationDivision[] = [
    { referenceNo: '19-20/LC/CC/001', referenceDate: '16/04/2020 11:30:30', chequeNo: 'AFR007-200101', chequeDate: '16/04/2020', chequeAmount: '20800', receivedFrom: 'ABC user', receivedDate: '16/04/2020 11:30:30', sentTo: 'MNOP user', sentDate: '16/04/2020 11:50:30', lyingWith: 'XYZ user', status: 'In process' },
    { referenceNo: '19-20/LC/CC/002', referenceDate: '16/04/2020 13:30:31', chequeNo: 'AFR007-200170', chequeDate: '20/05/2020', chequeAmount: '1000', receivedFrom: 'ABC user', receivedDate: '16/04/2020 13:30:31', sentTo: 'MNOP user', sentDate: '16/04/2020 13:50:31', lyingWith: 'XYZ user', status: 'In process' },
    { referenceNo: '19-20/LC/CC/003', referenceDate: '16/04/2020 15:30:32', chequeNo: 'AFR007-200178', chequeDate: '25/05/2020', chequeAmount: '12000', receivedFrom: 'PQR user', receivedDate: '16/04/2020 15:30:32', sentTo: 'MNOP user', sentDate: '16/04/2020 15:50:32', lyingWith: 'XYZ user', status: 'In process' }
  ];

  //Table Column for LC Cheque Cancelation
  lcChequeCancelationDataColumn: string[] = [
    'srno', 'referenceNo', 'referenceDate', 'chequeNo', 'chequeDate', 'chequeAmount', 'receivedFrom', 'receivedDate', 'sentTo', 'sentDate', 'lyingWith', 'status', 'action'
  ];

  valueBetweenError = false;
  todayDate = new Date();
  isSearch: boolean;
  lcChequeCancelationListingForm: FormGroup;
  StatusCtrl: FormControl = new FormControl();
  // selection = new SelectionModel<any>(true, []);
  lcChequeCancelationDataSource = new MatTableDataSource<chequeCancellationDivision>(this.lcChequeCancelationData);

  constructor(private fb: FormBuilder, private el: ElementRef, public dialog: MatDialog, private router: Router) { }

  // Create object to access Methods of Letter of Credit Directive
  directiveObject = new LetterOfCreditDirectives(this.router, this.dialog, this.el);

  ngOnInit() {
    this.lcChequeCancelationListingFormData();
  }

  // Initialize Form Field
  lcChequeCancelationListingFormData() {
    this.lcChequeCancelationListingForm = this.fb.group({
      referenceNo: [''],
      chequeNo: [''],
      referenceFromDate: [''],
      referenceToDate: [''],
      lcAmountBetween: [''],
      and: [''],
      status: [''],
      lcNumber: [''],
      lyingWith: [''],
    });
  }

  // Method executed on click of Search button
  search() {
    this.isSearch = false;
  }

  // Method for comparing LC Amount
  compareAmount() {
    if (this.lcChequeCancelationListingForm.controls['lcAmountBetween'].value > this.lcChequeCancelationListingForm.controls['and'].value) {
      this.valueBetweenError = true;
    } else {
      this.valueBetweenError = false;
    }
  }
}
