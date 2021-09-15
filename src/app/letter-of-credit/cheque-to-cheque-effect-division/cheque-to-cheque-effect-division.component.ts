import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { lcMessage } from 'src/app/common/error-message/common-message.constants';
import { ChequeToChequeEffect } from 'src/app/model/letter-of-credit';
import { LetterOfCreditDirectives } from 'src/app/common/directive/letter-of-credit-directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cheque-to-cheque-effect-division',
  templateUrl: './cheque-to-cheque-effect-division.component.html',
  styleUrls: ['./cheque-to-cheque-effect-division.component.css']
})
export class ChequeToChequeEffectDivisionComponent implements OnInit {

  // Table Data for Table Cheque To Cheque Effect
  ChequeToChequeEffectData: ChequeToChequeEffect[] = [
    { chequeDate: '', chequeNumber: '', chequeAmount: '', partyName: '' }
  ];

  // Table Columns for Table Cheque to cheque Effect
  ChequeToChequeEffectDataColumn: string[] = [
    'chequeDate', 'chequeNumber', 'chequeAmount', 'partyName', 'action'
  ];

  isDelete = false;
  todayDate = new Date();
  chequeToChequeEffectForm: FormGroup;
  ChequeToChequeEffectDataSource = new MatTableDataSource<ChequeToChequeEffect>(this.ChequeToChequeEffectData)
  errorMessage = lcMessage;

  constructor(private fb: FormBuilder, private el: ElementRef, public dialog: MatDialog, private router: Router) { }

  // Create object to access Methods of Letter of Credit Directive
  directiveObject = new LetterOfCreditDirectives(this.router, this.dialog, this.el);

  ngOnInit() {
    this.chequeToChequeEffectFormData();
  }

  // Initialize Form Fields
  chequeToChequeEffectFormData() {
    this.chequeToChequeEffectForm = this.fb.group({
      missingChequeNumber: [''],
      divisionCode: [''],
      chequeAmount: [''],
      chequeDate: [''],
      partyName: [''],
      adviceNo: [''],
      reason: [''],
      chequeDateTable: [''],
      chequeNumberTable: [''],
      chequeAmountTable: [''],
      partyNameTable: ['']
    });
  }

  // Method to Search cheque Number
  searchChequeNumber() {
    this.chequeToChequeEffectForm.patchValue({
      missingChequeNumber: this.chequeToChequeEffectForm.controls['missingChequeNumber'].value,
      divisionCode: 'AFR007',
      chequeAmount: '1.07',
      chequeDate: '10/04/2019',
      partyName: 'W2',
      adviceNo: '5',
    });
  }

  // Method to show table data on click on Search button
  search() {
    event.preventDefault();
    if (this.chequeToChequeEffectForm.controls['missingChequeNumber'].value != '') {
      this.chequeToChequeEffectForm.patchValue({
        chequeDateTable: new Date(2019, 4, 10),
        chequeNumberTable: 'AFR007-100098'
      });
    }
  }

  // Method to add Row in Table
  addRow() {
    const p_data = this.ChequeToChequeEffectDataSource.data;
    this.isDelete = true;
    p_data.push({
      partyName: '',
      chequeDate: '',
      chequeNumber: '',
      chequeAmount: '0.00'
    });
    this.ChequeToChequeEffectDataSource.data = p_data;
  }

  // Method to delete Row in Table
  deleteRow(index) {
    this.ChequeToChequeEffectDataSource.data.splice(index, 1);
    this.ChequeToChequeEffectDataSource = new MatTableDataSource(
      this.ChequeToChequeEffectDataSource.data
    );
  }
}
