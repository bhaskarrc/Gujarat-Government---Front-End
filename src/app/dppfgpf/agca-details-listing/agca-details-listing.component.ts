import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatDialog, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { HeadDataAgcaListing, ListingInwardScreenListing } from 'src/app/model/dppfgpf';


@Component({
  selector: 'app-agca-details-listing',
  templateUrl: './agca-details-listing.component.html',
  styleUrls: ['./agca-details-listing.component.css']
})


export class AgcaDetailsListingComponent implements OnInit {
  // Date
  maxDate = new Date();
  todayDate = new Date();
  // Form Group
  agcaDetailListingForm: FormGroup;
  // Form COntrol
  typeOfAgcaAgacAmountCtrl: FormControl = new FormControl();
  typeOfCreditDebitCtrl: FormControl = new FormControl();
  typeOfYearCtrl: FormControl = new FormControl();
  typeOfMonthCtrl: FormControl = new FormControl();
  // List
  classTypeOfAgcaAgacAmount: ListValue[] = [
    { value: '1', viewValue: 'AGCA ' },
    { value: '2', viewValue: 'AGAC ' },
  ];

  classTypeOfCreditDebit: ListValue[] = [
    { value: '1', viewValue: 'Credit ' },
    { value: '2', viewValue: 'Debit' },
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

  classTypeOfYear: ListValue[] = [
    { value: '1', viewValue: '2020 ' },
    { value: '2', viewValue: '2021' },
    { value: '3', viewValue: '2022' },
    { value: '1', viewValue: '2023 ' },
    { value: '2', viewValue: '2024' },
    { value: '3', viewValue: '2025' },
  ];

  constructor(private fb: FormBuilder, public dialog: MatDialog) { }
  selection = new SelectionModel<HeadDataAgcaListing>(true, []);
  // Table Source
  Element_Data: ListingInwardScreenListing[] = [
    {
      srno: '1',
      inwardNo: '34567/02/2019',
      inwardDate: '11/02/2020',
      month: 'January',
      year: '2015',
      agcaAgac: 'AGAC',
      creditDebit: 'Debit',
    },
    {
      srno: '2',
      inwardNo: '45671/04/2019',
      inwardDate: '11/01/2020',
      month: 'February',
      year: '2014',
      agcaAgac: 'AGCA',
      creditDebit: 'Debit',
    },
    {
      srno: '3',
      inwardNo: '12345/05/2019',
      inwardDate: '03/01/2020',
      month: 'March',
      year: '2013',
      agcaAgac: 'AGAC',
      creditDebit: 'Debit',
    },
    {
      srno: '4',
      inwardNo: '12345/05/2019',
      inwardDate: '31/12/2019',
      month: 'April',
      year: '2012',
      agcaAgac: 'AGCA',
      creditDebit: 'Credit',
    },
  ];

  displayedColumns: any[] = [
    'srno',
    'inwardNo',
    'inwardDate',
    'month',
    'year',
    'agcaAgac',
    'creditDebit',
    'action',
  ];

  dataSource = new MatTableDataSource<ListingInwardScreenListing>(this.Element_Data);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.agcaDetailListingForm = this.fb.group({
      inwardNumber: '',
      inwardDate: undefined,
      month: '',
      year: '',
      agcaAgacAmount: '',
      creditDebit: '',
    });
  }

  resetForm() {
    this.agcaDetailListingForm.reset();
  }

  deleteRowRecovery(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource = new MatTableDataSource(
      this.dataSource.data
    );
  }

}

