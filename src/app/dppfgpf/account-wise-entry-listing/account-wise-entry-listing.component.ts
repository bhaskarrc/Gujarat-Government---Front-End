import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatDialog, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { AccountWiseEntryListing } from 'src/app/model/dppfgpf';

@Component({
  selector: 'app-account-wise-entry-listing',
  templateUrl: './account-wise-entry-listing.component.html',
  styleUrls: ['./account-wise-entry-listing.component.css']
})
export class AccountWiseEntryListingComponent implements OnInit {
  // Date
  maxDate = new Date();
  todayDate = new Date();
  // Form Group
  accountWiseEntryListForm: FormGroup;
  typeOfTreasuryPaoCtrl: FormControl = new FormControl();
  typeOfPaymentCtrl: FormControl = new FormControl();
  // List
  classTypeOfTreasuryPao: ListValue[] = [
    { value: '1', viewValue: 'Treasury ' },
    { value: '2', viewValue: 'PAO' },

  ];

  classTypeOfPayment: ListValue[] = [
    { value: '1', viewValue: 'Credit ' },
    { value: '2', viewValue: 'Debit' },

  ];

  constructor(private fb: FormBuilder, public dialog: MatDialog) { }
  // Table Source
  Element_Data: AccountWiseEntryListing[] = [
    {
      srno: '1',
      requestNo: '173/25',
      inwardNo: '42345/05/2019',
      dateInward: '02/01/2020',
      treasuryPao: 'District Treasury Office,Ahmedabad',
      creditDebit: 'Credit',
      majorHead: '3700',
      voucherNo: '12345',
      voucherAmount: '5600',
    },

    {
      srno: '2',
      requestNo: '273/25',
      inwardNo: '42345/05/2019',
      dateInward: '02/01/2020',
      treasuryPao: 'District Treasury Office,Ahmedabad',
      creditDebit: 'Debit',
      majorHead: '1700',
      voucherNo: '62345',
      voucherAmount: '2600',
    },

    {
      srno: '3',
      requestNo: '173/25',
      inwardNo: '45345/05/2018',
      dateInward: '02/01/2020',
      treasuryPao: 'District Treasury Office,Ahmedabad',
      creditDebit: 'Credit',
      majorHead: '3700',
      voucherNo: '22345',
      voucherAmount: '5600',
    },

  ];

  displayedColumns: any[] = [
    'srno',
    'requestNo',
    'inwardNo',
    'dateInward',
    'treasuryPao',
    'creditDebit',
    'majorHead',
    'voucherNo',
    'voucherAmount',
    'action'

  ];

  dataSource = new MatTableDataSource<AccountWiseEntryListing>(this.Element_Data);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.accountWiseEntryListForm = this.fb.group({
      requestNo: '',
      inwardNo: '',
      dateInward: undefined,
      paymentType: '',
      majorHead: '',
      treasuryPao: '',
      voucherNo: '',
      voucherAmount: '',
    });
  }

  clearForm() {
    this.accountWiseEntryListForm.reset();
  }

  openInwardNoDialog() { }
  openRequestNoDialog() { }
  workflowDetails() { }
  resetForm() {
    this.accountWiseEntryListForm.reset();
  }

  deleteRowRecovery(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource = new MatTableDataSource(
      this.dataSource.data
    );
  }


  searchBill() { }

}

