import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatDialog, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { DppfgpfMessage } from 'src/app/common/error-message/common-message.constants';
import { VoucherScreen } from 'src/app/model/dppfgpf';


@Component({
  selector: 'app-top-schedule-entry-listing',
  templateUrl: './top-schedule-entry-listing.component.html',
  styleUrls: ['./top-schedule-entry-listing.component.css']
})
export class TopScheduleEntryListingComponent implements OnInit {
  // Date
  maxDate = new Date();
  todayDate = new Date();
  // Form Group
  topScheduleEntryListForm: FormGroup;
  // Form COntrol
  typeOfPaymentCtrl: FormControl = new FormControl();
  typeOfMonthCtrl: FormControl = new FormControl();
  typeOfYearCtrl: FormControl = new FormControl();
  typeOfTreasuryPaoCtrl: FormControl = new FormControl();
  // List
  classTypeOfYear: ListValue[] = [
    { value: '1', viewValue: '2020 ' },
    { value: '2', viewValue: '2021' },
    { value: '3', viewValue: '2022' },
    { value: '1', viewValue: '2023 ' },
    { value: '2', viewValue: '2024' },
    { value: '3', viewValue: '2025' },
  ];

  classTypeOfMonth: ListValue[] = [
    { value: '1', viewValue: 'January ' },
    { value: '2', viewValue: 'February' },
    { value: '3', viewValue: 'March' },
    { value: '4', viewValue: 'April' },
    { value: '5', viewValue: 'May' },
    { value: '6', viewValue: 'June' },
    { value: '7', viewValue: 'July' },
    { value: '8', viewValue: 'August' },
    { value: '9', viewValue: 'September' },
    { value: '10', viewValue: 'October' },
    { value: '11', viewValue: 'November' },
    { value: '12', viewValue: 'December' },

  ];


  classTypeOfPayment: ListValue[] = [
    { value: '1', viewValue: 'Credit ' },
    { value: '2', viewValue: 'Debit' },

  ];
  classTypeOfTreasuryPao: ListValue[] = [
    { value: '1', viewValue: 'District Treasury Office,Gandhinagar ' },
    { value: '2', viewValue: 'District Treasury Office,Gandhinagar' },

  ];
  errorMessage;

  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  // Table Source
  Element_Data: VoucherScreen[] = [
    {
      srno: '1',
      inwardNo: '12345/05/2020',
      dateInward: '22/02/2020',
      treasuryPao: 'District Treasury Office,Gandhinagar',
      year: '2020',
      month: '02/01/2020',
      paymentType: 'Credit',
    },

    {
      srno: '2',
      inwardNo: '42345/05/2019',
      dateInward: '12/01/2020',
      treasuryPao: 'District Treasury Office,Gandhinagar',
      year: '2020',
      month: '02/01/2020',
      paymentType: 'Debit',
    },

    {
      srno: '3',
      inwardNo: '32345/05/2019',
      dateInward: '02/01/2020',
      treasuryPao: 'District Treasury Office,Gandhinagar',
      year: '2020',
      month: '02/01/2020',
      paymentType: 'Credit',
    },

    {
      srno: '4',
      inwardNo: '62345/05/2019',
      dateInward: '19/01/2020',
      treasuryPao: 'District Treasury Office,Gandhinagar',
      year: '2020',
      month: '02/01/2020',
      paymentType: 'Debit',
    },


  ];

  displayedColumns: any[] = [
    'srno',
    'inwardNo',
    'dateInward',
    'treasuryPao',
    'year',
    'month',
    'paymentType',
    'action'

  ];

  dataSource = new MatTableDataSource<VoucherScreen>(this.Element_Data);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {

    this.errorMessage = DppfgpfMessage;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.topScheduleEntryListForm = this.fb.group({
      inwardNo: '',
      dateInward: undefined,
      treasuryPao: '',
      year: '',
      month: '',
      paymentType: '',
    });
  }

  clearForm() {
    this.topScheduleEntryListForm.reset();
  }

  openInwardNoDialog() { }
  workflowDetails() { }
  resetForm() {
    this.topScheduleEntryListForm.reset();
  }

  deleteRowRecovery(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource = new MatTableDataSource(
      this.dataSource.data
    );
  }

  searchBill() { }

}


