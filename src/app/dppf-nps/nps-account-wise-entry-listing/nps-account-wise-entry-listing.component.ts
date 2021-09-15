import { NpsAccountWiseEntryListing } from './../../model/dppf-nps';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatDialog, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { DppfgpfMessage } from 'src/app/common/error-message/common-message.constants';
import { SearchInwardNoDppfNpsComponent } from '../search-inward-no-dppf-nps/search-inward-no-dppf-nps.component';


@Component({
  selector: 'app-nps-account-wise-entry-listing',
  templateUrl: './nps-account-wise-entry-listing.component.html',
  styleUrls: ['./nps-account-wise-entry-listing.component.css']
})
export class NpsAccountWiseEntryListingComponent implements OnInit {
  // Variable
  accountWiseEntryForm;
  inwardDetails = true;
  // Date
  todayDate = new Date();
  maxDate = new Date();
  // Form Gorup
  accountWiseEntryListForm: FormGroup;
  // Form Group
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
  errorMessage;
  directiveObj = new CommonDirective();
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }
  // Table Content
  Element_Data: NpsAccountWiseEntryListing[] = [
    {
      srno: '1',
      requestNo: '173/25',
      inwardNo: '42345/05/2019',
      dateInward: '02-Jan-2020',
      treasuryPao: 'Treasury',
      creditDebit: 'Credit',
      majorHead: '3700',
      voucherNo: '12345',
      voucherAmount: 5600,
    },

    {
      srno: '2',
      requestNo: '273/25',
      inwardNo: '42345/05/2019',
      dateInward: '02-Jan-2020',
      treasuryPao: 'PAO',
      creditDebit: 'Debit',
      majorHead: '1700',
      voucherNo: '62345',
      voucherAmount: 2600,
    },

    {
      srno: '3',
      requestNo: '173/25',
      inwardNo: '45345/05/2018',
      dateInward: '02-Jan-2020',
      treasuryPao: 'Treasury',
      creditDebit: 'Credit',
      majorHead: '3700',
      voucherNo: '22345',
      voucherAmount: 5600,
    },

  ];
  // Table Source
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

  dataSource = new MatTableDataSource<NpsAccountWiseEntryListing>(this.Element_Data);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {

    this.errorMessage = DppfgpfMessage;
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


  // Dialog Search Inward No Dppf-Nps
  openDialogInwardNumber() {
    const dialogRef = this.dialog.open(SearchInwardNoDppfNpsComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.inwardDetails = true;
        this.accountWiseEntryListForm.patchValue({
          inwardNo: result[0].inwardNo,
          inwardDate: result[0].inwardDate,
        });
      }
    });
  }

}
