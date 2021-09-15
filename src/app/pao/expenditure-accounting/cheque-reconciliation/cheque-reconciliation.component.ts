import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { expanditureAccounting } from 'src/app/common/error-message/common-message.constants';
import { MatTableDataSource } from '@angular/material/table';
import { ChequeReconciliation } from 'src/app/model/paoModel';

@Component({
  selector: 'app-cheque-reconciliation',
  templateUrl: './cheque-reconciliation.component.html',
  styleUrls: ['./cheque-reconciliation.component.css']
})
export class ChequeReconciliationComponent implements OnInit {

  chequeReconcilationColumns: string[] = [
    'adviceNo',
    'chkNo',
    'paidDate',
    'chkAmount',
    'action'

  ];
  // Table Source
  cheque_Data: ChequeReconciliation[] = [
    {
      adviceNo: '458787465',
      chkNo: '3451458',
      paidDate: '5/03.2020',
      chkAmount: '1000.00',

    },

  ];

  chequeReconcilationDataSource = new MatTableDataSource<any>(this.cheque_Data);

  // Form Group
  expanditureForm: FormGroup;
  // Date
  todayDate = Date.now();
  today = new Date();
  threemonths = new Date();
  // Variable
  numberShow = false;
  isSearchJotting = false;

  constructor(private fb: FormBuilder) {
    this.today.setDate(this.today.getDate());
    this.threemonths.setDate(this.threemonths.getDate() - 90);
  }

  errorMessages = expanditureAccounting;

  ngOnInit() {
    this.expanditureFormData();
  }

  expanditureFormData() {
    this.expanditureForm = this.fb.group({
      ChequeType: [''],
      accountName: [''],
      ChequeNo: [''],
      AdviceNo: [''],
      chkaMT: [''],

    });
  }

  checkNo() {
    this.numberShow = true;
  }

  search() {
    this.isSearchJotting = true;
  }

  clearForm() {
    this.expanditureForm.reset();
  }


}
