import { AccountTransferHbaListingInwardScreen, AccountTransferHbaHeadData } from './../../model/dppf-hba';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatDialog, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { DppfgpfMessage } from 'src/app/common/error-message/common-message.constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-transfer-hba-listing',
  templateUrl: './account-transfer-hba-listing.component.html',
  styleUrls: ['./account-transfer-hba-listing.component.css']
})
export class AccountTransferHbaListingComponent implements OnInit {

  // DAte
  todayDate = Date.now();
  maxDate = new Date();
  // Form Group
  agcaDetailListingForm: FormGroup;
  // Form Control
  typeOfAgcaAgacAmountCtrl: FormControl = new FormControl();
  typeOfCreditDebitCtrl: FormControl = new FormControl();
  typeOfYearCtrl: FormControl = new FormControl();
  typeOfMonthCtrl: FormControl = new FormControl();
  // Lists
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

  status_list: ListValue[] = [
    { value: '1', viewValue: 'New(From 2004) ' },
    { value: '2', viewValue: 'Old(Before 2004)  ' },
  ];

  Element_Data: AccountTransferHbaListingInwardScreen[] = [
    {
      srno: '1',
      inwardNo: '34567/02/2019',
      month: 'January',
      name: 'R K mehta',
      year: '2015',
      creditDebit: 'New(From 2004) ',
      status: 'Old(Before 2004) ',
      hbaNo: '564565',
    },
    {
      srno: '2',
      hbaNo: '4646',
      inwardNo: '45671/04/2019',
      month: 'February',
      year: '2014',
      status: 'Old(Before 2004) ',
      creditDebit: 'Debit',
      name: 'A B Patel',
    },
  ];
  // Variable Message
  errorMessage: { INWARD_NUMBER: string; INWARD_DATE: string; };
  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder) { }
  selection = new SelectionModel<AccountTransferHbaHeadData>(true, []);
  // Table Source
  displayedColumns: any[] = ['srno', 'hbaNo', 'name', 'month', 'year', 'status', 'action'];
  dataSource = new MatTableDataSource<AccountTransferHbaListingInwardScreen>(this.Element_Data);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngOnInit() {
    this.errorMessage = DppfgpfMessage;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.agcaDetailListingForm = this.fb.group({
      mcano: [''],
      month: [''],
      year: [''],
      status: [''],
      name: [''],
    });
  }

  // to rest form
  clearForm() { this.agcaDetailListingForm.reset(); }

  openInwardNoDialog(event) { }

  // Navigation Route
  navigate() {
    this.router.navigate(['./dppf-hba/account-transfer']);
  }
}
