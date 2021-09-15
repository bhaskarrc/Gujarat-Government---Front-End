import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';

import { MatTableDataSource, MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';


export class EventsList {
  adviceNo: number;
  chequeNo: string;
  tokenNo: number | '';
  billRefNo: number | '';
  auditor: string | '';
  partyName: string;
  billGrossAmount: number | string;
  chequeAmount: number | string;
  billAmount: number | string;
}
@Component({
  selector: 'app-cancel-and-new-cheque',
  templateUrl: './cancel-and-new-cheque.component.html',
  styleUrls: ['./cancel-and-new-cheque.component.css']
})
export class CancelAndNewChequeComponent implements OnInit {

  cancelAndNewChequeForm: FormGroup;
  billtypeCtrl: FormControl = new FormControl();
  ddonameCtrl: FormControl = new FormControl();
  dispatchFromCont: FormGroup;
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  ELEMENT_DATA: any[] =
    [
      {
        adviceNo1: '100002',
        adviceNo2: '100003',
        adviceNo3: '100004',
        chequeOrEPayment11: 'TRY61-287005',
        chequeOrEPayment12: 'TRY61-287006',
        chequeOrEPayment13: 'TRY61-287007',
        amount11: '20.00',
        amount12: '40.00',
        amount13: '10.00',
        party11: 'MR Ayan',
        party12: 'TEST MERGING',
        party13: 'Mrs Rohit',
        fromDate11: '14-MAR-2020',
        fromDate12: '14-MAR-2020',
        fromDate13: '14-MAR-2020',
        toDate11: '14-JUNE-2020',
        toDate12: '14-JUNE-2020',
        toDate13: '14-JUNE-2020',
        token: '10280',
        chequeOrEPayment21: 'TRY61-286992',
        chequeOrEPayment22: 'TRY61-286993',
        chequeOrEPayment23: 'TRY61-286994',
        amount21: '10.00',
        amount22: '20.00',
        amount23: '30.00',
        amount24: '10.00',
        party21: 'DIST. TREASURY OFFICER,BHUJ',
        party22: 'MR Ravi',
        party23: 'MR Joel',
        fromDate21: '14-MAR-2020',
        fromDate22: '14-MAR-2020',
        fromDate23: '14-MAR-2020',
        toDate21: '14-JUNE-2020',
        toDate22: '14-JUNE-2020',
        toDate23: '14-JUNE-2020',
      },
    ];
  billtype_list: any[] = [

    { value: '1', viewValue: 'GTR-30 - Pay Bill' },
    { value: '2', viewValue: 'GTR-45 - TA Bill' },
    { value: '3', viewValue: 'GTR-40 - Grant In Bill' },
    { value: '4', viewValue: 'GTR-12 - Advance Bill' }
  ];

  ddoname_list: any = [
    { value: '1', viewValue: '	District Treasury Office, Gandhinagar' },
  ];

  displayedColumns: string[] = ['checkBox', 'chequeForDispatch', 'token', 'chequeInward'];

  displayedColumns1: string[] = ['adviceNo', 'chequeOrEPayment', 'amount', 'party', 'fromDate', 'toDate',
    'chequeOrEPayment2', 'amount2', 'party2', 'fromDate2', 'toDate2'];

  displayedColumns2: string[] = ['checkBox', 'adviceNo', 'chequeOrEPayment', 'amount', 'party', 'fromDate', 'toDate', 'token',
    'chequeOrEPayment2', 'amount2', 'party2', 'fromDate2', 'toDate2'];

  dataSource = new MatTableDataSource<EventsList>(this.ELEMENT_DATA);
  selection = new SelectionModel<any>(true, []);
  constructor(private fb: FormBuilder, private router: Router, public dialog: MatDialog,) { }

  ngOnInit() {
    this.dispatchFromContData();
  }


  dispatchFromContData() {
    this.dispatchFromCont = this.fb.group({
      Billrefernum: [''],
      tokenno: [''],
      billtypes: [''],
      ddono: [''],
      cardexno: [''],
      ddoname: [''],
      adviceNo: [''],
    });
  }



  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));

  }

  checkboxLabel(row?: any): string {

    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;

  }
  gotopage() {
    this.router.navigate(['/pao/saved-bill/bill-prepration-fom']);
  }
  submitToNextLevel() {
  }

}
