import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatDialog, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { AccountWiseEntryList } from 'src/app/model/dppfgpf';


@Component({
  selector: 'app-account-adjustment-detail-listing',
  templateUrl: './account-adjustment-detail-listing.component.html',
  styleUrls: ['./account-adjustment-detail-listing.component.css']
})
export class AccountAdjustmentDetailListingComponent implements OnInit {

  maxDate = new Date();

  accountAdjustmentListForm: FormGroup;
  typeOfTreasuryPaoCtrl: FormControl = new FormControl();
  typeOfDistrictCtrl: FormControl = new FormControl();
  typeOfMonthCtrl: FormControl = new FormControl();
  typeOfYearCtrl: FormControl = new FormControl();

  classTypeOfTreasuryPao: ListValue[] = [
    { value: '1', viewValue: 'Treasury ' },
    { value: '2', viewValue: 'PAO' },
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

  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  // Table Data
  Element_Data: AccountWiseEntryList[] = [
    {
      srno: '1',
      gpfNo: 'PW/DAT/1237',
      district: 'Ahmedabad',
      month: 'March',
      year: '2020',
      treasuryPao: 'District Treasury Office,Ahmedabad',
      listingAmount: '3100',
    },
    {
      srno: '2',
      gpfNo: 'PW/DAT/2237',
      district: 'Gandhinagar',
      month: 'April',
      year: '2020',
      treasuryPao: 'District Treasury Office,Ahmedabad',
      listingAmount: '2700',
    },
    {
      srno: '3',
      gpfNo: 'PW/DAT/5237',
      district: 'Ahmedabad',
      month: 'May',
      year: '2020',
      treasuryPao: 'District Treasury Office,Gandhinagar',
      listingAmount: '3700',
    },
  ];

  displayedColumns: any[] = [
    'srno',
    'gpfNo',
    'district',
    'month',
    'year',
    'treasuryPao',
    'listingAmount',
    'action'
  ];

  dataSource = new MatTableDataSource<AccountWiseEntryList>(this.Element_Data);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
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

  clearForm() {
    this.accountAdjustmentListForm.reset();
  }

  // delete row
  deleteRowRecovery(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource = new MatTableDataSource(
      this.dataSource.data
    );
  }

  searchBill() { }


}


