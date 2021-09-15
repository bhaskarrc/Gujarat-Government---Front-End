import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-nssf-loan-received',
  templateUrl: './nssf-loan-received.component.html',
  styleUrls: ['./nssf-loan-received.component.css']
})
export class NssfLoanReceivedComponent implements OnInit {


  nssfLoanReceivedForm: FormGroup;
  isDetails = false;
  maxDate = new Date();
  todayDate = Date.now();

  // table data
  Element_Data: any[] = [
    {
      memoNo: '1',
      adviceNo: '1',
      dpDate: '01-Apr-2015',
      adviceDate: '01-Apr-2015',
      adviceBy: 'NAGALAND',
      transactionDescription: 'Other IGA Transaction',
      creditAmount: '50000.00',
      addDetails: 'Done',
    },
    {
      memoNo: '2',
      adviceNo: '2',
      dpDate: '04-Jan-2017',
      adviceDate: '04-Jan-2017',
      adviceBy: 'ASSAM',
      transactionDescription: 'GIA',
      creditAmount: '10000.00',
      addDetails: 'Add Details',
    },
    {
      memoNo: '2',
      adviceNo: '2',
      dpDate: '07-Jan-2017',
      adviceDate: '07-Jan-2017',
      adviceBy: 'NAGALAND',
      transactionDescription: 'GIA',
      creditAmount: '1000000.00',
      addDetails: 'Add Details',
    },
    {
      memoNo: '28',
      adviceNo: '108',
      dpDate: '11-Dec-2018',
      adviceDate: '11-Dec-2018',
      adviceBy: 'RAJASTHAN',
      transactionDescription: '9.50% NSSF Loan',
      creditAmount: '1000000.00',
      addDetails: 'Done',
    },

  ];

  dataSource = new MatTableDataSource<any>(this.Element_Data);

  displayedColumns: any[] = [
    'position',
    'memoNo',
    'adviceNo',
    'dpDate',
    'adviceDate',
    'adviceBy',
    'transactionDescription',
    'creditAmount',
    'addDetails',
  ];

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.nssfLoanReceivedForm = this.fb.group({
      fromDate: [''],
      toDate: [''],
    });
  }

  getDetails() {
    this.isDetails = true;
  }
  onAddDetails() {
    this.router.navigate(['./dmo/nssf-loan-received/add-details']);
  }
}
