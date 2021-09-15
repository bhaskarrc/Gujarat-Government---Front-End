import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { PartyDetailsComponent } from '../party-details/party-details.component';
// import { WorkflowDetailsGrantComponent } from '../workflow-details-grant/workflow-details-grant.component';
import { WorkflowDetailsGrantComponent } from '../../grant/workflow-details-grant/workflow-details-grant.component';
import { PaoDirectives } from 'src/app/common/directive/pao';
import { ListValue } from 'src/app/model/common-grant';
import { DispathOfCounter } from 'src/app/model/treasury-bill';


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
  directiveObject = new PaoDirectives(this.router, this.dialog);

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
      ddoName: [''],
      cheqAmount: ['']
    });
  }
  gotopage() {
    this.router.navigate(['/pao/saved-bill/bill-prepration-fom']);
  }


}
