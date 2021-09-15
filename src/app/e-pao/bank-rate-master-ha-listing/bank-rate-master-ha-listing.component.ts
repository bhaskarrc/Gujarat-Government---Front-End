import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { EPOAMessage } from 'src/app/common/error-message/common-message.constants';
const ELEMENT_DATA: any[] = [
  {
    status: 'Forwarded',
    penRated: '200.00',
    addRated: '550.00',
    bankRate: '952.00',
    effectivToDate: '12-Feb-20',
    effectivFromDate: '19-Dec-19',
  },
];
@Component({
  selector: 'app-bank-rate-master-ha-listing',
  templateUrl: './bank-rate-master-ha-listing.component.html',
  styleUrls: ['./bank-rate-master-ha-listing.component.css']
})
export class BankRateMasterHaListingComponent implements OnInit {
  listingShow = false;
  bankRateMasterForm: FormGroup;
  // maxDate = new Date();
  // todayDate = new Date();
  newdataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  newdisplayedColumns: string[] = ['srNo', 'effectivFromDate', 'effectivToDate', 'bankRate', 'addRated', 'penRated', 'status', 'newaction'];
  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder, ) { }
  public errorMessages;
  ngOnInit() {

    this.bankRateMasterData();

  }
  bankRateMasterData() {
    this.bankRateMasterForm = this.fb.group({
      addRate: [''],
      effecativeDate: [''],
      bankRate: [''],
      penRate: [''],
      referenceNumber: [''],
      refrenceDate: [''],
      status: ['']
    }
    );
  }
  listingData() {
    this.listingShow = true;
  }
}
