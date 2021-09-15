import { AuditBillsAccountantDialogComponent } from './../audit/dialog/audit-bills-accountant-dialog/audit-bills-accountant-dialog.component';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatTableDataSource, MatDialog, MatDialogRef } from '@angular/material';
import { DispathOfCounter, ListValue } from 'src/app/model/treasury-bill';
import { TreasuryBillDirectives } from 'src/app/common/directive/treasury-bill';

export class EventsList {
  adviceNo: number;
  chequeNo: string;
  tokenNo: number | '';
  cheqNo: number | '';
  billRefNo: number | '';
  auditor: string | '';
  partyName: string;
  billGrossAmount: number | string;
  chequeAmount: number | string;
  billAmount: number | string;
}

@Component({
  selector: 'app-dispatch-from-counter',
  templateUrl: './dispatch-from-counter.component.html',
  styleUrls: ['./dispatch-from-counter.component.css']
})
export class DispatchFromCounterComponent implements OnInit {
  // Form COntrol
  billtypeCtrl: FormControl = new FormControl();
  ddonameCtrl: FormControl = new FormControl();
  // Formm Grup
  dispatchFromCont: FormGroup;
  dispatchFromCounterList: FormGroup;
  // Date
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  // Table data Content
  ELEMENT_DATA: DispathOfCounter[] =
    [
      {
        refNo: '2',
        regNo: '552',
        tokenNo: '10113',
        party: 'CHANDRESHWAR VISHWANATH BHAGAT',
        chequeno: 'TRY61-286971',
        majorHead: '2071',
        ddoNo: '115',
        cardexNo: '4',
        billAmount: '2000.00',
        billGrossAmount: '4000.00',
        cheque: '2000.00',
        chequeePayment: 'Cheque',
        partyName: 'Mr. Abc',
        billdate: '25-Feb-2019 10:00 AM',
        inwardDate: '25-Feb-2019 11:00 AM',
        ddoName: '	collector Office, Gandhinagar',
        billcat: 'Regular',
        billtype: 'Pay Bill',
        status: 'Pending'
      },



    ];
  // Table Source
  displayedColumns: string[] = ['checkBox', 'adviceNo', 'refNo', 'regNo', 'tokenNo', 'chequeno',
    'partyName',
    'cheque', 'billdate', 'inwardDate',
    'ddoNo', 'cardexNo', 'ddoName', 'billtype', 'majorHead', 'billcat', 'billGrossAmount', 'billAmount', 'action'
  ];
  dataSource = new MatTableDataSource<DispathOfCounter>(this.ELEMENT_DATA);
  // Listing
  billtype_list: ListValue[] = [

    { value: '1', viewValue: 'GTR-30 - Pay Bill' },
    { value: '2', viewValue: 'GTR-45 - TA Bill' },
    { value: '3', viewValue: 'GTR-40 - Grant In Bill' },
    { value: '4', viewValue: 'GTR-12 - Advance Bill' }
  ];

  ddoname_list: ListValue[] = [
    { value: '1', viewValue: '	District Treasury Office, Gandhinagar' },
  ];


  constructor(private fb: FormBuilder, private router: Router, public dialog: MatDialog,) { }
  directiveObject = new TreasuryBillDirectives(this.router, this.dialog);
  // tslint:disable-next-line: use-life-cycle-interface
  ngAfterViewInit() {
    setTimeout(() => {
      this.dialog.open(AuditBillsAccountantDialogComponent, {
        width: '1200px'
      });
    }, 100);
    setTimeout(() => {
      const dialogRef = this.dialog.open(tokenrangeDispatch, {
        width: '450px',
        height: '200px'
      });
    }, 200);
  }
  ngOnInit() {
    this.dispatchFromContData();
  }

  dispatchFromContData() {
    this.dispatchFromCont = this.fb.group({
      Billrefernum: [''],
      tokenno: [''],
      cheqNo: [''],
      billtypes: [''],
      ddono: [''],
      cardexno: [''],
      ddoname: [''],
      cheqAmount: ['']
    });
  }

  // Navigation
  gotopage() {
    this.router.navigate(['/treasury-bill/saved-bill/bill-prepration-fom']);
  }

}


// token-range-dialogbox
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'token-range-dialogbox',
  templateUrl: 'token-range-dialogbox.html',
})


export class tokenrangeDispatch {
  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<tokenrangeDispatch>
  ) { }
  vitocancel(): void {
    this.dialogRef.close();
  }

  goTo() {
    this.dialogRef.close();
    setTimeout(() => {
      this.router.navigate(['/treasury-bill/counter-allocation-token']);
    }, 0);
  }
}