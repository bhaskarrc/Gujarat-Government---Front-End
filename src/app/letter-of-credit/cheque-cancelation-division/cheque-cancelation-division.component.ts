import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { lcMessage } from 'src/app/common/error-message/common-message.constants';
import { Router } from '@angular/router';
import { ChequeCancellation } from 'src/app/model/letter-of-credit';
import { LetterOfCreditDirectives } from 'src/app/common/directive/letter-of-credit-directive';

@Component({
  selector: 'app-cheque-cancelation-division',
  templateUrl: './cheque-cancelation-division.component.html',
  styleUrls: ['./cheque-cancelation-division.component.css']
})
export class ChequeCancelationDivisionComponent implements OnInit {

  // Data for Table Cheque Calcellation Table
  ChequeCancellationData: ChequeCancellation[] = [
    {
      fund: '', classOfExpenditure: '', budgetType: '', demandNo: '', majorHead: '', subMajorHead: '', minorHead: '', subHead: '',
      detailHead: '', typeOfEstimate: '', itemName: '', objectHead: '', schemeNo: '', expenditureAmount: '', headwiseCancelChequeAmount: ''
    }
  ];

  // Table Column for Cheque Cancellation Table
  ChequeCancellationDataColumn: string[] = [
    'srno', 'fund', 'classOfExpenditure', 'budgetType', 'demandNo', 'majorHead', 'subMajorHead', 'minorHead', 'subHead', 'detailHead', 'typeOfEstimate', 'itemName',
    'objectHead', 'schemeNo', 'expenditureAmount', 'headwiseCancelChequeAmount'
  ];

  todayDate = new Date();
  errorChequeNumber = false;
  chequeCancellationForm: FormGroup;
  ChequeCancellationDataSource = new MatTableDataSource<ChequeCancellation>(this.ChequeCancellationData);
  errorMessage = lcMessage;

  constructor(private fb: FormBuilder, private el: ElementRef, public dialog: MatDialog, private router: Router) { }

  // Create object to access Methods of Letter of Credit Directive
  directiveObject = new LetterOfCreditDirectives(this.router, this.dialog, this.el);

  ngOnInit() {
    this.chequeCancellationFormData();
  }

  // Initialize Form Fields
  chequeCancellationFormData() {
    this.chequeCancellationForm = this.fb.group({
      chequeNumber: [''],
      divisionCode: [''],
      chequeAmount: [''],
      chequeDate: [''],
      inFavourOf: [''],
      adviceNo: [''],
      reason: [''],
      classOfExpenditure: [''],
      fund: [''],
      budgetType: [''],
      schemeNo: [''],
      demandNo: [''],
      majorHead: [''],
      subMajorHead: [''],
      minorHead: [''],
      subHead: [''],
      detailHead: [''],
      typeOfEstimate: [''],
      itemName: [''],
      objectHead: [''],
      expenditureAmount: [''],
      headwiseCancelChequeAmount: ['']
    });
  }

  // Method to Search Cheque Number
  searchChequeNumber() {
    if (this.chequeCancellationForm.controls['chequeNumber'].value != '') {
      this.chequeCancellationForm.patchValue({
        chequeNumber: this.chequeCancellationForm.controls['chequeNumber'].value,
        divisionCode: 'AFR007',
        chequeAmount: '1.07',
        chequeDate: '10/04/2019',
        inFavourOf: 'W2',
        adviceNo: '5',
        classOfExpenditure: '1-Voted',
        fund: '3-Consolidated',
        budgetType: '1-State',
        schemeNo: '000000',
        demandNo: '026',
        majorHead: '2406',
        subMajorHead: '01',
        minorHead: '001',
        subHead: '02',
        detailHead: '00',
        objectHead: 'C1',
        typeOfEstimate: 'Standing Charges',
        itemName: '',
        expenditureAmount: '100001.00',
      });
      this.errorChequeNumber = false;
    } else {
      this.errorChequeNumber = true;
    }
  }

  // Method to fill out the table data
  search() {
    event.preventDefault();
    if (this.chequeCancellationForm.controls['chequeNumber'].value != '') {
      this.chequeCancellationForm.patchValue({
        classOfExpenditure: '1-Voted',
        fund: '3-Consolidated',
        budgetType: '1-State',
        schemeNo: '000000',
        demandNo: '026',
        majorHead: '2406',
        subMajorHead: '01',
        minorHead: '001',
        subHead: '02',
        detailHead: '00',
        objectHead: 'C1',
        typeOfEstimate: 'Standing Charges',
        itemName: '',
        expenditureAmount: '100001.00',
      });
    }
  }
}
