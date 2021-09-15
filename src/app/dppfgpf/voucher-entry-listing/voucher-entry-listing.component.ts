import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatDialog, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { DppfgpfMessage } from 'src/app/common/error-message/common-message.constants';
import { VoucherScreenListing } from 'src/app/model/dppfgpf';


@Component({
  selector: 'app-voucher-entry-listing',
  templateUrl: './voucher-entry-listing.component.html',
  styleUrls: ['./voucher-entry-listing.component.css']
})
export class VoucherEntryListingComponent implements OnInit {
  // Date
  maxDate = new Date();
  todayDate = new Date();
  // Form Group
  voucherEntryListForm: FormGroup;
  typeOfCreditDebitCtrl: FormControl = new FormControl();
  // List
  classTypeOfCreditDebit: ListValue[] = [
    { value: '1', viewValue: 'Credit ' },
    { value: '2', viewValue: 'Debit' },
  ];
  // Variable
  errorMessage;

  constructor(private fb: FormBuilder, public dialog: MatDialog) { }
  selection = new SelectionModel<VoucherScreenListing>(true, []);
  // Table Source

  Element_Data: VoucherScreenListing[] = [
    {
      srno: '1',
      requestNo: '173/25',
      inwardNo: '42345/05/2019',
      inwardDate: '02/01/2020',
      creditDebit: 'Credit',
      majorHeadAmount: '3700',
    },

    {
      srno: '2',
      requestNo: '623/51',
      inwardNo: '82345/06/2019',
      inwardDate: '13/01/2020',
      creditDebit: 'Debit',
      majorHeadAmount: '4300',
    },

    {
      srno: '3',
      requestNo: '223/55',
      inwardNo: '15345/04/2019',
      inwardDate: '12/01/2020',
      creditDebit: 'Credit',
      majorHeadAmount: '5600',
    },

    {
      srno: '4',
      requestNo: '123/75',
      inwardNo: '92345/02/2019',
      inwardDate: '22/01/2020',
      creditDebit: 'Debit',
      majorHeadAmount: '2700',
    },


  ];

  displayedColumns: any[] = [
    'srno',
    'requestNo',
    'inwardNo',
    'inwardDate',
    'creditDebit',
    'majorHeadAmount',
    'action'

  ];

  dataSource = new MatTableDataSource<VoucherScreenListing>(this.Element_Data);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {

    this.errorMessage = DppfgpfMessage;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.voucherEntryListForm = this.fb.group({
      requestNo: '',
      inwardNo: '',
      inwardDate: undefined,
      creditDebit: '',
      majorHeadAmount: '',
    });
  }

  clearForm() {
    this.voucherEntryListForm.reset();
  }
  openInwardNoDialog() { }
  openRequestNoDialog() { }
  workflowDetails() { }
  resetForm() {
    this.voucherEntryListForm.reset();
  }


  deleteRowRecovery(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource = new MatTableDataSource(
      this.dataSource.data
    );
  }

  searchBill() { }

}
