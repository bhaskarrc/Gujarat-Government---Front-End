import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { lcMessage } from 'src/app/common/error-message/common-message.constants';
import { DetailPostingAuthorize } from 'src/app/model/letter-of-credit';
import { LetterOfCreditDirectives } from 'src/app/common/directive/letter-of-credit-directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lc-advice-information-authorization',
  templateUrl: './lc-advice-information-authorization.component.html',
  styleUrls: ['./lc-advice-information-authorization.component.css']
})
export class LcAdviceInformationAuthorizationComponent implements OnInit {

  // Table Data for Detail Posting Table
  DetailPostingData: DetailPostingAuthorize[] = [
    {
      classOfExpenditure: '1-Voted', fund: '3-Consolidated', typeOfExpenditure: 'Standing Charges', budgetType: '1-State', schemeNo: '000000',
      demandNo: '026', majorHead: '2406', subMajorHead: '01', minorHead: '001', subHead: '02', detailClass: '00', objectClass: 'C1',
      expenditureAmount: '100000', headwiseAvailableAmount: '399899999', typeOfEstimation: '', itemName: ''
    }
  ];

  // Table Columns for Detail Posting table
  DetailPostingColumn: string[] = [
    'select', 'srno', 'classOfExpenditure', 'fund', 'typeOfExpenditure', 'budgetType', 'schemeNo', 'demandNo', 'majorHead', 'subMajorHead', 'minorHead',
    'subHead', 'detailClass', 'objectClass', 'expenditureAmount', 'headwiseAvailableAmount'
  ];

  todayDate = new Date();
  divisionCode = "AFR007";
  divisionName = "Dy. Con. of Forest training Center, Gandhinagar";
  adviceNo = "10"
  openingBalance = 4498999999;
  newBalance = 0;
  expenditureAmountValue = 0.00;
  isSearch: boolean;
  lcAdviceInformationAuthorizationForm: FormGroup;
  DetailPostingDataSource = new MatTableDataSource<DetailPostingAuthorize>(this.DetailPostingData);
  errorMessage = lcMessage;

  constructor(private fb: FormBuilder, private el: ElementRef, public dialog: MatDialog, private router: Router) { }

  // Create object to access Methods of Letter of Credit Directive
  directiveObject = new LetterOfCreditDirectives(this.router, this.dialog, this.el);

  ngOnInit() {
    this.lcAdviceInformationAuthorizationFormData();
  }

  // Initialize Form Fields
  lcAdviceInformationAuthorizationFormData() {
    this.lcAdviceInformationAuthorizationForm = this.fb.group({
      divisionCode: [''],
      adviceNo: [''],
      expenditureAmount: [''],
      deductionAmount: [''],
      netTotal: ['']
    });
  }

  lcBalance() {
    return this.openingBalance + this.newBalance;
  }

}
