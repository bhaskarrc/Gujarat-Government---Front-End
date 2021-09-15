import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { VoucherScreen } from 'src/app/model/dppf-hba';
import { dppfHbaMessage } from 'src/app/common/error-message/common-message.constants';
import { ListValue } from 'src/app/model/common-grant';



@Component({
  selector: 'app-voucher-entry-form-listing',
  templateUrl: './voucher-entry-form-listing.component.html',
  styleUrls: ['./voucher-entry-form-listing.component.css']
})
export class VoucherEntryFormListingComponent implements OnInit {

  // Date
  todayDate = Date.now();
  maxDate = new Date();
  inwardDetailsForm: FormGroup;
  hbaMcaCtrl: FormControl = new FormControl();
  districtCtrl: FormControl = new FormControl();
  mpnthCtrl: FormControl = new FormControl();
  yearCtrl: FormControl = new FormControl();
  credCtrl: FormControl = new FormControl();
  inwardTypeCtrl: FormControl = new FormControl();
  creditCtrl: FormControl = new FormControl();
  // List
  inwarde_list: ListValue[] = [
    { value: '1', viewValue: 'Top Schedule' },
  ];
  credit_list: ListValue[] = [
    { value: '1', viewValue: 'Credit' },
    { value: '2', viewValue: 'Debit' }
  ];

  year_list: ListValue[] = [
    { value: '1', viewValue: '2009' },
    { value: '2', viewValue: '2010' },
    { value: '3', viewValue: '2011' },
    { value: '4', viewValue: '2012' },
    { value: '5', viewValue: '2013' },
    { value: '6', viewValue: '2014' },
    { value: '7', viewValue: '2015' },
    { value: '8', viewValue: '2016' },
    { value: '9', viewValue: '2017' },
    { value: '10', viewValue: '2018' },
    { value: '11', viewValue: '2019' },
    { value: '12', viewValue: '2020' },
  ];
  month_list: ListValue[] = [
    { value: '1', viewValue: 'Jan' },
    { value: '2', viewValue: 'Feb' },
    { value: '3', viewValue: 'Mar' },
    { value: '4', viewValue: 'Apr' },
    { value: '5', viewValue: 'May' },
    { value: '6', viewValue: 'Jun' },
    { value: '7', viewValue: 'Jul' },
    { value: '8', viewValue: 'Aug' },
    { value: '9', viewValue: 'Sep' },
    { value: '10', viewValue: 'Oct' },
    { value: '11', viewValue: 'Nov' },
    { value: '12', viewValue: 'Dec' },

  ];
  load_list: ListValue[] = [
    { value: '1', viewValue: 'HBA' },
    { value: '2', viewValue: 'MCA' },
  ];
  districtList: ListValue[] = [
    { value: '1', viewValue: 'District Treasury Office,Gandhinagar' },
    { value: '2', viewValue: 'District Treasury Office,Ahmedabad' },
    { value: '3', viewValue: 'District Treasury Office,Rajkot' },
  ];
  // Table Source

  Element_Data: VoucherScreen[] = [
    {
      srno: '1',
      inwardNo: 'TSC/8/2020/1201',
      dateInward: '22-Feb-2016',
      treasuryPao: 'Treasury',
      year: '2020',
      month: 'Aug',
      paymentType: 'Credit',
      inwardType: 'Top Schedule',
    },

    {
      srno: '2',
      inwardNo: 'TSC/8/2020/1201',
      dateInward: '12-Feb-2016',
      treasuryPao: 'PAO',
      year: '2020',
      month: 'Aug',
      paymentType: 'Debit',
      inwardType: 'Top Schedule',
    },

    {
      srno: '3',
      inwardNo: 'TSC/8/2020/1201',
      dateInward: '02-Feb-2016',
      treasuryPao: 'Treasury',
      year: '2020',
      month: 'Aug',
      paymentType: 'Credit',
      inwardType: 'Top Schedule',
    },

    {
      srno: '4',
      inwardNo: 'TSC/8/2020/1201',
      dateInward: '22-Feb-2016',
      treasuryPao: 'PAO',
      year: '2020',
      month: 'Aug',
      paymentType: 'Debit',
      inwardType: 'Top Schedule',
    },


  ];

  displayedColumns: string[] = [
    'srno',
    'inwardNo',
    'inwardType',
    'dateInward',
    'treasuryPao',
    'year',
    'month',
    'action'

  ];
  public errorMessages;
  dataSource = new MatTableDataSource<VoucherScreen>(this.Element_Data);

  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder) { }

  ngOnInit() {
    this.errorMessages = dppfHbaMessage;
    this.inwardDetailsData();
  }
  inwardDetailsData() {
    this.inwardDetailsForm = this.fb.group({
      inwardType: [''],
      month: [''],
      year: [''],
      credir: [''],
      district: [''],
      hbaMczNo: [''],
      inwardNo: [''],
      inwardDate: [''],
      mcano: ['']
    });
  }
  // routing
  navigate() {
    this.router.navigate(['./dppf-hba/voucher-entry']);
  }
}
