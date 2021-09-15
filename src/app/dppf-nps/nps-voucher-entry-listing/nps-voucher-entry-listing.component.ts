import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatDialog, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { DppfgpfMessage } from 'src/app/common/error-message/common-message.constants';
import { SearchInwardNoDppfNpsComponent } from '../search-inward-no-dppf-nps/search-inward-no-dppf-nps.component';

export class VoucherScreen {
  srno: string;
  requestNo: string;
  inwardNo: string;
  inwardDate: string;
  creditDebit: string;
  majorHeadAmount: number;
}


@Component({
  selector: 'app-nps-voucher-entry-listing',
  templateUrl: './nps-voucher-entry-listing.component.html',
  styleUrls: ['./nps-voucher-entry-listing.component.css']
})
export class NpsVoucherEntryListingComponent implements OnInit {
  // Date
  todayDate = new Date();
  maxDate = new Date();
  // Variable
  inwardDetails = true;
  errorMessage;
  // Form Gorup
  voucherEntryListForm: FormGroup;
  // Form COntrol
  typeOfCreditDebitCtrl: FormControl = new FormControl();
  // Lists
  classTypeOfCreditDebit: ListValue[] = [
    { value: '1', viewValue: 'Credit ' },
    { value: '2', viewValue: 'Debit' },
  ];

  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  // Table Content Source
  Element_Data: VoucherScreen[] = [
    {
      srno: '1',
      requestNo: '173/25',
      inwardNo: '42345/05/2019',
      inwardDate: '02-JAN-2020',
      creditDebit: 'Credit',
      majorHeadAmount: 3700,
    },

    {
      srno: '2',
      requestNo: '623/51',
      inwardNo: '82345/06/2019',
      inwardDate: '13-JAN-2020',
      creditDebit: 'Debit',
      majorHeadAmount: 4300,
    },

    {
      srno: '3',
      requestNo: '223/55',
      inwardNo: '15345/04/2019',
      inwardDate: '12-JAN-2020',
      creditDebit: 'Credit',
      majorHeadAmount: 5600,
    },

    {
      srno: '4',
      requestNo: '123/75',
      inwardNo: '92345/02/2019',
      inwardDate: '22-JAN-2020',
      creditDebit: 'Debit',
      majorHeadAmount: 2700,
    },


  ];
  // Table Source
  displayedColumns: any[] = [
    'srno',
    'requestNo',
    'inwardNo',
    'inwardDate',
    'creditDebit',
    'majorHeadAmount',
    'action'

  ];

  dataSource = new MatTableDataSource<VoucherScreen>(this.Element_Data);

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
  // Clear Form
  clearForm() {
    this.voucherEntryListForm.reset();
  }
  // REset FOrm
  resetForm() {
    this.voucherEntryListForm.reset();
  }
  // Delete Row in Table
  deleteRowRecovery(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource = new MatTableDataSource(
      this.dataSource.data
    );
  }

  searchBill() { }
  // Search Inward No Dppf-Nps
  openDialogInwardNumber() {
    const dialogRef = this.dialog.open(SearchInwardNoDppfNpsComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.inwardDetails = true;
        this.voucherEntryListForm.patchValue({
          inwardNo: result[0].inwardNo,
          inwardDate: result[0].inwardDate,
        });
      }
    });
  }

}
