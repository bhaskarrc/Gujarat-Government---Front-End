import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatDialog, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { MissingAccountWiseEntryListing } from 'src/app/model/dppfgpf';

@Component({
  selector: 'app-missing-account-wise-entry-listing',
  templateUrl: './missing-account-wise-entry-listing.component.html',
  styleUrls: ['./missing-account-wise-entry-listing.component.css']


})
export class MissingAccountWiseEntryListingComponent implements OnInit {
  // Form Group
  missingAccountWiseListForm: FormGroup;
  // Date
  todayDate = new Date();
  // Form Control
  typeOfCreditDebitCtrl: FormControl = new FormControl();
  // List
  classTypeOfCreditDebit: ListValue[] = [
    { value: '1', viewValue: 'Credit ' },
    { value: '2', viewValue: 'Debit' },


  ];
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }
  // Table Source
  Element_Data: MissingAccountWiseEntryListing[] = [
    {
      srno: '1',
      requestId: '32345/05/2019',
      gpfNo: '12/02/2020',
      name: 'Raj ',
      creditDebit: 'Credit',
      amount: '3000',
    }, {
      srno: '2',
      requestId: '12345/05/2019',
      gpfNo: '11/03/2020',
      name: 'Sushil ',
      creditDebit: 'Debit',
      amount: '2500',
    }, {
      srno: '3',
      requestId: '72345/05/2019',
      gpfNo: '22/01/2020',
      name: 'Tushar ',
      creditDebit: 'Credit',
      amount: '6700',
    },
  ];

  displayedColumns: any[] = [
    'srno',
    'requestId',
    'gpfNo',
    'name',
    'creditDebit',
    'amount',
    'action'
  ];

  dataSource = new MatTableDataSource<MissingAccountWiseEntryListing>(this.Element_Data);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.missingAccountWiseListForm = this.fb.group({
      requestId: '',
      gpfNo: undefined,
      name: '',
      creditDebit: '',
      amount: '',
    });
  }

  openrequestIdDialog() { }
  resetForm() {
    this.missingAccountWiseListForm.reset();
  }

  deleteRowRecovery(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource = new MatTableDataSource(
      this.dataSource.data
    );
  }

  searchBill() { }
  clearForm() {
    this.missingAccountWiseListForm.reset();

  }
}

