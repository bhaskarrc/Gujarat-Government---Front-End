import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { lcMessage } from 'src/app/common/error-message/common-message.constants';
import { ChequeCancellation } from 'src/app/model/letter-of-credit';
import { LetterOfCreditDirectives } from 'src/app/common/directive/letter-of-credit-directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cheque-cancelation-division-view',
  templateUrl: './cheque-cancelation-division-view.component.html',
  styleUrls: ['./cheque-cancelation-division-view.component.css']
})
export class ChequeCancelationDivisionViewComponent implements OnInit {

  //Table data for Cheque Cancellation
  ChequeCancellationData: ChequeCancellation[] = [
    {
      fund: '3-Consolidated', classOfExpenditure: '1-Voted', budgetType: '1-State', demandNo: '026', majorHead: '2406', subMajorHead: '01', minorHead: '001', subHead: '02',
      detailHead: '00', typeOfEstimate: 'Standing Charges', itemName: '', objectHead: 'C1', schemeNo: '000000', expenditureAmount: '100001.00', headwiseCancelChequeAmount: '1000.00'
    }
  ];

  //Table Columns for Cheque Cancellation table
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

  // Initialize form Fields
  chequeCancellationFormData() {
    this.chequeCancellationForm = this.fb.group({
      chequeNumber: ['AFR007-000001'],
      divisionCode: ['AFR007'],
      chequeAmount: ['1.07'],
      chequeDate: ['10/04/2019'],
      inFavourOf: ['W2'],
      adviceNo: ['5'],
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
      typeOfEstimate: [''],
      itemName: [''],
      objectHead: [''],
      expenditureAmount: [''],
      headwiseCancelChequeAmount: ['']
    });
  }
}
