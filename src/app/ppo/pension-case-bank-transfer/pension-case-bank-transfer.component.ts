import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { CommonListing } from 'src/app/model/common-listing';
import { ppoMessage } from 'src/app/common/error-message/common-message.constants';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { PensionCaseBankTransfer } from 'src/app/model/ppo';

@Component({
  selector: 'app-pension-case-bank-transfer',
  templateUrl: './pension-case-bank-transfer.component.html',
  styleUrls: ['./pension-case-bank-transfer.component.css']
})
export class PensionCaseBankTransferComponent implements OnInit {
  // variables
  todayDate = Date.now();
  pensionCaseBankForm: FormGroup;
  pensionCaseBankTransferForm: FormGroup;
  directiveObj = new CommonDirective(this.router);
  errMsg = ppoMessage;
  // form controls
  bankCtrl: FormControl = new FormControl();
  branchCtrl: FormControl = new FormControl();
  auditorCtrl: FormControl = new FormControl();

  // lists
  auditor_list: CommonListing[] = [
    { value: '1', viewValue: 'M.P. Patel' },
  ];

  bank_list: CommonListing[] = [
    { value: '1', viewValue: 'State Bank of India' },
  ];

  branch_list: CommonListing[] = [
    { value: '1', viewValue: 'Kabir Chowk (Sabarmati)' },
    { value: '2', viewValue: 'Naranpura' },
    { value: '3', viewValue: 'Narayan Nagar' },
  ];
  // table data
  Element_Data: PensionCaseBankTransfer[] = [
    { ppoNo: 'ppo1', name: 'ABC', accountNo: '11112444545445' },
  ];
  dataSource = new MatTableDataSource<PensionCaseBankTransfer>(this.Element_Data);
  displayedColumns = [
    'checkbox', 'ppoNo', 'name', 'accountNo', 'action'
  ];

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.pensionCaseBankForm = this.fb.group({
      auditor: [''],
      branchCode: [''],
      bank: [''],
      branch: [''],
      branchCodeNew: [''],
      bankNew: [''],
      branchNew: [''],
      ifscCode: ['']
    });

    this.pensionCaseBankTransferFormData();
  }

  pensionCaseBankTransferFormData() {
    this.pensionCaseBankTransferForm = this.fb.group({
      branchCodeNew: [''],
      bankNew: [''],
      branchNew: [''],
      ifscCode: ['']
    });
  }

  workflowDetails() { }
  resetForm() { }
  goToSavedBillList() { }
  onSubmit() { }


}
