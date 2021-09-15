import { AccountAdjustmentListHeadData } from './../../model/dppf-hba';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { DppfgpfMessage } from 'src/app/common/error-message/common-message.constants';
import { Router } from '@angular/router';
import { AccountAdjustmentList } from 'src/app/model/dppf-hba';

@Component({
  selector: 'app-adjustment-account-listing',
  templateUrl: './adjustment-account-listing.component.html',
  styleUrls: ['./adjustment-account-listing.component.css']
})
export class AdjustmentAccountListingComponent implements OnInit {
  // Date
  todayDate = Date.now();
  maxDate = new Date();
  // Form Foup
  accountAdjustmentListForm: FormGroup;
  // Form Control
  typeOfTreasuryPaoCtrl: FormControl = new FormControl();
  typeOfPaymentCtrl: FormControl = new FormControl();
  typeOfDistrictCtrl: FormControl = new FormControl();
  typeOfMonthCtrl: FormControl = new FormControl();
  hbaCtrl: FormControl = new FormControl();
  typeOfYearCtrl: FormControl = new FormControl();
  // List
  classTypeOfTreasuryPao: ListValue[] = [
    { value: '1', viewValue: 'Treasury ' },
    { value: '2', viewValue: 'PAO' },

  ];

  hbaMca_list: ListValue[] = [
    { value: '1', viewValue: 'HBA' },
    { value: '2', viewValue: 'MCA' },
  ];
  classTypeOfPayment: ListValue[] = [
    { value: '1', viewValue: 'Credit ' },
    { value: '2', viewValue: 'Debit' },

  ];


  classTypeOfDistrict: ListValue[] = [
    { value: '1', viewValue: 'Ahmedabad ' },
    { value: '2', viewValue: 'Gandhinagar' },
    { value: '3', viewValue: 'Vadodra' },

  ];


  classTypeOfYear: ListValue[] = [
    { value: '1', viewValue: '2020 ' },
    { value: '2', viewValue: '2021' },
    { value: '3', viewValue: '2022' },
    { value: '1', viewValue: '2023 ' },
    { value: '2', viewValue: '2024' },
    { value: '3', viewValue: '2025' },

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
  errorMessage;


  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder) { }

  selection = new SelectionModel<AccountAdjustmentListHeadData>(true, []);

  // Table Source
  Element_Data: AccountAdjustmentList[] = [
    {
      srno: '1',
      hbaNo: '5645',
      district: 'Ahmedabad',
      month: 'March',
      year: '2020',
      treasuryPao: 'Treasury',
      listingAmount: '3100',

    },

    {
      srno: '2',
      hbaNo: '5645',
      district: 'Gandhinagar',
      month: 'April',
      year: '2020',
      treasuryPao: 'Treasury',
      listingAmount: '2700',

    },

    {
      srno: '3',
      hbaNo: '5645',
      district: 'Ahmedabad',
      month: 'May',
      year: '2020',
      treasuryPao: 'Treasury',
      listingAmount: '3700',

    },

  ];

  displayedColumns: any[] = [
    'srno',
    'hbaNo',
    'district',
    'treasuryPao',
    'month',
    'year',
    'action'

  ];

  dataSource = new MatTableDataSource<AccountAdjustmentList>(this.Element_Data);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {

    this.errorMessage = DppfgpfMessage;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.accountAdjustmentListForm = this.fb.group({
      listingAmount: '',
      treasuryPao: '',
      district: '',
      month: '',
      year: '',
      hba: ''

    });
  }

  // to reset form
  resetForm() {
    this.accountAdjustmentListForm.reset();
  }

  // on Search
  searchBill() { }

  // Navigate Route
  navigate() {
    this.router.navigate(['./dppf-hba/account-adustment']);
  }
}
