import { ChequesRecievedListing } from './../../model/dppf-hba';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { dppfHbaMessage } from 'src/app/common/error-message/common-message.constants';
const Element_Data: ChequesRecievedListing[] = [
  {
    inwardNo: '5646541',
    inwardDate: '12-Aug-2018',
    chequeNo: '7841651AD',
    chequeAmount: '7840.00',
    ddo: 'DDO 1',
    challanNo: '455445',
    clearanceDate: '12/10/2018',
    challanDate: '12-Jul-2018',
    remarks: '-',
    action: '',
  }
];
@Component({
  selector: 'app-cash-book-entry-hba-listing',
  templateUrl: './cash-book-entry-hba-listing.component.html',
  styleUrls: ['./cash-book-entry-hba-listing.component.css']
})
export class CashBookEntryHbaListingComponent implements OnInit {
  // Form Group
  cashBookForm: FormGroup;
  // Date
  todayDate = Date.now();
  maxDate = new Date();
  // Table Source
  displayedColumns: any[] = [
    'srNo',
    'inwardNo',
    'inwardDate',
    'chequeNo',
    'chequeAmount',
    'ddo',
    'challanNo',
    'clearanceDate',
    'challanDate',
    'remarks',
    'action',


  ];
  dataSource = new MatTableDataSource<ChequesRecievedListing>(Element_Data);
  // Variable
  errorMessages;
  isSubmitted;

  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder) { }
  ngOnInit() {
    this.cashBookData();
  }

  cashBookData() {
    this.errorMessages = dppfHbaMessage;
    this.cashBookForm = this.fb.group({
      inwardNo: [''],
      inwardDate: [''],
      demandNo: [''],
      chequeNo: [''],
      ddo: [''],
      clearanceDate: [''],
      challanNo: [''],
      challanDate: [''],
      remarks: [''],
      total: ['']
    });
  }
  // Navigate Route
  navigate() {
    this.router.navigate(['./dppf-hba/cash-book-entry']);
  }


}
