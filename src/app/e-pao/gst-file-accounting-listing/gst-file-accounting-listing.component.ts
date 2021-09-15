import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { EPOAMessage } from 'src/app/common/error-message/common-message.constants';
import { Router } from '@angular/router';
import { MatDialog, MatTableDataSource } from '@angular/material';

import { GSTFileAccountingListing } from 'src/app/model/epaoModel';
const ELEMENT_DATA: GSTFileAccountingListing[] = [
  {
    fileName: 'CN87484165118421',
    noOfChallan: '500',
    amount: '10000.00',
    date: '2-Jul-2020'
  },
  {
    fileName: 'CN87484165118421',
    noOfChallan: '500',
    amount: '20000.00',
    date: '21-Jul-2020'
  },
  {
    fileName: 'CN87484165118421',
    noOfChallan: '500',
    amount: '30000.00',
    date: '3-Jul-2020'
  },

];
@Component({
  selector: 'app-gst-file-accounting-listing',
  templateUrl: './gst-file-accounting-listing.component.html',
  styleUrls: ['./gst-file-accounting-listing.component.css']
})
export class GstFileAccountingListingComponent implements OnInit {

  maxDate = new Date();
  // todayDate = new Date();
  gftFileAccountingForm: FormGroup;
  newdataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  newdisplayedColumns: string[] = ['srNo', 'date', 'fileName', 'noOfChallan', 'amount', 'newaction'];

  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder) { }
  public errorMessages;
  ngOnInit() {
    this.errorMessages = EPOAMessage;
    this.gftFileAccountingData();

  }
  gftFileAccountingData() {
    this.gftFileAccountingForm = this.fb.group({
      fileName: [''],
      fromDate: [''],
      toDate: [''],
      refNo: ['']
    });
  }




}
