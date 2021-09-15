import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { lcMessage } from 'src/app/common/error-message/common-message.constants';
import { chequeCancellationTO } from 'src/app/model/letter-of-credit';
import { LetterOfCreditDirectives } from 'src/app/common/directive/letter-of-credit-directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cheque-cancelation-to-view',
  templateUrl: './cheque-cancelation-to-view.component.html',
  styleUrls: ['./cheque-cancelation-to-view.component.css']
})
export class ChequeCancelationToViewComponent implements OnInit {

  // Table Data for Cheque Cancellation Table
  ChequeCancellationData: chequeCancellationTO[] = [
    {
      classOfExpenditure: '1-Voted', fund: '3-Consolidated', budgetType: '1-State', schemeNo: '000000', demandNo: '026', majorHead: '2406', subMajorHead: '01', minorHead: '001', subHead: '02',
      detailHead: '00', objectHead: 'C1', expenditureAmount: '100001.00', headwiseCancelChequeAmount: '1000.00'
    }
  ];

  // Table Column for Table Cheque Cancellation Table
  ChequeCancellationDataColumn: string[] = [
    'srno', 'classOfExpenditure', 'fund', 'budgetType', 'schemeNo', 'demandNo', 'majorHead', 'subMajorHead', 'minorHead', 'subHead', 'detailHead',
    'objectHead', 'expenditureAmount', 'headwiseCancelChequeAmount'
  ];

  todayDate = new Date();
  errorChequeNumber = false;
  chequeCancellationForm: FormGroup;
  ChequeCancellationDataSource = new MatTableDataSource<chequeCancellationTO>(this.ChequeCancellationData);
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
      chequeNumber: ['AFR007-000001'],
      divisionCode: ['AFR007'],
      chequeAmount: ['1.07'],
      chequeDate: ['10/04/2019'],
      inFavourOf: ['W2'],
      adviceNo: ['5'],
      balanceLcAmount: ['1000.00'],
      newBalanceLcAmount: ['1005.00'],
      reason: ['NA'],
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
      objectHead: [''],
      expenditureAmount: [''],
      headwiseCancelChequeAmount: ['']
    });
  }
}
