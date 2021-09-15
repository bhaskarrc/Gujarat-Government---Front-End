import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { DppfgpfMessage } from 'src/app/common/error-message/common-message.constants';
import { AccountWiseEntryList } from 'src/app/model/dppf-nps';


@Component({
  selector: 'app-nps-account-adjustment-detail-listing',
  templateUrl: './nps-account-adjustment-detail-listing.component.html',
  styleUrls: ['./nps-account-adjustment-detail-listing.component.css']
})
export class NpsAccountAdjustmentDetailListingComponent implements OnInit {
  // Variable
  errorMessage;
  // Date
  maxDate = new Date();
  todayDate = new Date();
  // Form Gorup
  accountAdjustmentListForm: FormGroup;
  // Form COntrol
  typeOfTreasuryPaoCtrl: FormControl = new FormControl();
  typeOfPaymentCtrl: FormControl = new FormControl();
  typeOfDistrictCtrl: FormControl = new FormControl();
  typeOfMonthCtrl: FormControl = new FormControl();
  typeOfYearCtrl: FormControl = new FormControl();
  // List
  classTypeOfTreasuryPao: ListValue[] = [
    { value: '1', viewValue: 'Treasury ' },
    { value: '2', viewValue: 'PAO' },

  ];

  classTypeOfPayment: ListValue[] = [
    { value: '1', viewValue: 'Credit ' },
    { value: '2', viewValue: 'Debit' },

  ];


  classTypeOfDistrict: ListValue[] = [
    { value: '1', viewValue: 'Ahmedabad' },
    { value: '2', viewValue: 'Gandhinagar' },
    { value: '3', viewValue: 'Vadodara' },
    { value: '4', viewValue: 'Surat' },
    { value: '5', viewValue: 'Rajkot' },
    { value: '6', viewValue: 'Anand' },
    { value: '7', viewValue: 'Bharuch' },
    { value: '8', viewValue: 'Valsad' },
    { value: '9', viewValue: 'Navsari' },
    { value: '10', viewValue: 'Dang' },
  ];


  classTypeOfYear: ListValue[] = [
    { value: '1', viewValue: '2005' },
    { value: '2', viewValue: '2006' },
    { value: '3', viewValue: '2007' },
    { value: '4', viewValue: '2008' },
    { value: '5', viewValue: '2009' },
    { value: '6', viewValue: '2010' },
    { value: '7', viewValue: '2011' },
    { value: '8', viewValue: '2012' },
    { value: '9', viewValue: '2013' },
    { value: '10', viewValue: '2014' },
    { value: '11', viewValue: '2015' },
    { value: '12', viewValue: '2016' },
    { value: '13', viewValue: '2017' },
    { value: '14', viewValue: '2018' },
    { value: '15', viewValue: '2019' },
    { value: '16', viewValue: '2020' },
  ];

  classTypeOfMonth: ListValue[] = [
    { value: '1', viewValue: 'January' },
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



  // Table Content Source
  Element_Data: AccountWiseEntryList[] = [
    {
      srno: '1',
      gpfNo: 'PW/DAT/1237',
      district: 'Ahmedabad',
      month: 'March',
      year: '2020',
      treasuryPao: 'Treasury',
      listingAmount: 3100,
    },
    {
      srno: '2',
      gpfNo: 'PW/DAT/2237',
      district: 'Gandhinagar',
      month: 'April',
      year: '2020',
      treasuryPao: 'Treasury',
      listingAmount: 2700,
    },
    {
      srno: '3',
      gpfNo: 'PW/DAT/5237',
      district: 'Ahmedabad',
      month: 'May',
      year: '2020',
      treasuryPao: 'Treasury',
      listingAmount: 3700,
    },
  ];

  displayedColumns: string[] = [
    'srno',
    'gpfNo',
    'district',
    'month',
    'year',
    'treasuryPao',
    'listingAmount',
    'action'

  ];
  // Table Source
  dataSource = new MatTableDataSource<AccountWiseEntryList>(this.Element_Data);
  // Directive Objects
  directiveObj = new CommonDirective();
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.errorMessage = DppfgpfMessage;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.accountAdjustmentListForm = this.fb.group({
      gpfNo: '',
      listingAmount: '',
      treasuryPao: '',
      district: '',
      month: '',
      year: '',
    });
  }

}
