import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { DppfgpfMessage } from 'src/app/common/error-message/common-message.constants';
import { MissingAccountWiseEntryListing } from 'src/app/model/dppf-nps';


@Component({
  selector: 'app-nps-missing-account-wise-entry-listing',
  templateUrl: './nps-missing-account-wise-entry-listing.component.html',
  styleUrls: ['./nps-missing-account-wise-entry-listing.component.css']
})
export class NpsMissingAccountWiseEntryListingComponent implements OnInit {
  // Form Group
  missingAccountWiseListForm: FormGroup;
  // Date
  maxDate = new Date();
  todayDate = new Date();
  // Form COntrol
  typeOfAgcaAgacAmountCtrl: FormControl = new FormControl();
  typeOfCreditDebitCtrl: FormControl = new FormControl();
  // List
  classTypeOfAgcaAgacAmount: ListValue[] = [
    { value: '1', viewValue: 'AGCA ' },
    { value: '2', viewValue: 'AGAC ' },
  ];
  classTypeOfCreditDebit: ListValue[] = [
    { value: '1', viewValue: 'Credit ' },
    { value: '2', viewValue: 'Debit' },
  ];
  // Table Content
  Element_Data: MissingAccountWiseEntryListing[] = [
    {
      srno: '1',
      requestId: '32345/05/2019',
      gpfNo: '12/02/2020',
      name: 'Raj ',
      creditDebit: 'Credit',
      amount: 3000,
    },
    {
      srno: '2',
      requestId: '12345/05/2019',
      gpfNo: '11/03/2020',
      name: 'Sushil ',
      creditDebit: 'Debit',
      amount: 2500,
    },
    {
      srno: '3',
      requestId: '72345/05/2019',
      gpfNo: '22/01/2020',
      name: 'Tushar ',
      creditDebit: 'Credit',
      amount: 6700,
    },

  ];
  // Table Source
  displayedColumns: any[] = [
    'srno',
    'requestId',
    'gpfNo',
    'name',
    'creditDebit',
    'amount',
    'action',
  ];
  errorMessage: { INWARD_NUMBER: string; INWARD_DATE: string; };
  // Directive
  directiveObj = new CommonDirective();

  constructor(private fb: FormBuilder, public dialog: MatDialog) { }
  dataSource = new MatTableDataSource<MissingAccountWiseEntryListing>(this.Element_Data);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.errorMessage = DppfgpfMessage;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.missingAccountWiseListForm = this.fb.group({
      requestId: '',
      gpfNo: undefined,
      name: '',
      creditDebit: '',
      amount: '',
    });
  }
}
