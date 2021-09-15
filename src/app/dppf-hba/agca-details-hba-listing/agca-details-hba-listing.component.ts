import { AgcaDetailsHbaListingListingInwardScreen } from './../../model/dppf-hba';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatDialog, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agca-details-hba-listing',
  templateUrl: './agca-details-hba-listing.component.html',
  styleUrls: ['./agca-details-hba-listing.component.css']
})
export class AgcaDetailsHbaListingComponent implements OnInit {

  // Date
  todayDate = Date.now();
  maxDate = new Date();

  // Form Group
  agcaDetailListingForm: FormGroup;

  // Form Control
  typeOfAgcaAgacAmountCtrl: FormControl = new FormControl();
  typeOfCreditDebitCtrl: FormControl = new FormControl();
  typeOfYearCtrl: FormControl = new FormControl();
  typeOfMonthCtrl: FormControl = new FormControl();
  hbMcaCtrl: FormControl = new FormControl();

  // Lists
  classTypeOfAgcaAgacAmount: ListValue[] = [
    { value: '1', viewValue: 'AGCA ' },
    { value: '2', viewValue: 'AGAC ' },
  ];

  classTypeOfCreditDebit: ListValue[] = [
    { value: '1', viewValue: 'Credit ' },
    { value: '2', viewValue: 'Debit' },
  ];
  hbaMcaList: ListValue[] = [
    { value: '1', viewValue: 'HBA'},
    { value: '2', viewValue: 'MCA' },
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

  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder) { }

  // Table Source
  Element_Data: AgcaDetailsHbaListingListingInwardScreen[] = [
    {
      srno: '1',
      inwardNo: '34567/02/2019',
      inwardDate: '20-Jan-2016',
      month: 'January',
      year: '2015',
      agcaAgac: 'AGAC',
      creditDebit: 'Debit',
      hbaMca:'HBA',
    },
    {
      srno: '2',
      inwardNo: '45671/04/2019',
      inwardDate: '20-Jan-2016',
      month: 'February',
      year: '2014',
      agcaAgac: 'AGCA',
      creditDebit: 'Debit',
      hbaMca:'HBA',
    },
    {
      srno: '3',
      inwardNo: '12345/05/2019',
      inwardDate: '03-Jan-2016',
      month: 'March',
      year: '2013',
      agcaAgac: 'AGAC',
      creditDebit: 'Debit',
      hbaMca:'MCA',
    },

    {
      srno: '4',
      inwardNo: '12345/05/2019',
      inwardDate: '31-Jan-2016',
      month: 'April',
      year: '2012',
      agcaAgac: 'AGCA',
      creditDebit: 'Credit',
      hbaMca:'MCA',
    },
  ];

  displayedColumns: any[] = [
    'srno',
    'inwardNo',
    'inwardDate',
    'month',
    'year',
    'agcaAgac',
    'hbaMca',
    'action',
  ];

  dataSource = new MatTableDataSource<AgcaDetailsHbaListingListingInwardScreen>(this.Element_Data);

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
      hbaMca: '',
    });
  }

  clearForm() { }


  // for date
  onlyDecimalSlash(event: any) {
    const pattern = /^[0-9/]+$/;
    const inputChar = String.fromCharCode(
      !event.charCode ? event.which : event.charCode
    );
    let tempstr = event.target.value;
    tempstr += inputChar;
    if (!pattern.test(tempstr)) {
      event.preventDefault();
      return false;
    }

  }


  openInwardNoDialog(event) { }


  // navigation Route
  navigate() {
    this.router.navigate(['./dppf-hba/agca-details']);
  }
}
