import { CommonListing } from 'src/app/model/common-listing';
import { ScheduleEntryHbaListing } from './../../model/dppf-hba';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatTableDataSource } from '@angular/material';

const ELEMENT_Details: ScheduleEntryHbaListing[] = [
  {
    hbaMca: '48489',
    date: '24-Mar-2020',
    scheduleNo: 'HBA/10/2020/132',
    district: 'District Treasury Office,Gandhinagar',
    year: '2019',
    month: 'DEC',
    majorHead: '',
    majorHeadAmount: '2000.00',
    head: '',
    headAmount: '2500.00',
  }
];
@Component({
  selector: 'app-schedule-entry-hba-listing',
  templateUrl: './schedule-entry-hba-listing.component.html',
  styleUrls: ['./schedule-entry-hba-listing.component.css']
})
export class ScheduleEntryHbaListingComponent implements OnInit {
  // Date
  todayDate = Date.now();
  maxDate = new Date();
  // Variavle of Error message
  public errorMessages;
  // form Control
  districtCtrl: FormControl = new FormControl();
  typeOfTreasuryPaoCtrl: FormControl = new FormControl();
  // Form Group
  voucherForm: FormGroup;
  // List
  credit_list: CommonListing[] = [
    { value: '1', viewValue: 'Credit' },
    { value: '2', viewValue: 'Debit' }
  ];
  classTypeOfTreasuryPao: CommonListing[] = [
    { value: '1', viewValue: 'Treasury ' },
    { value: '2', viewValue: 'PAO' },

  ];

  voucher_list: CommonListing[] = [
    { value: '1', viewValue: '102375' },
    { value: '2', viewValue: 'De78587' }
  ];
  ctype_list: CommonListing[] = [
    { value: '1', viewValue: 'Detail Entry' },

  ];
  hbaMca_list: CommonListing[] = [
    { value: '1', viewValue: 'HBA' },
    { value: '2', viewValue: 'MCA' },
  ];

  year_list: CommonListing[] = [
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
  month_list: CommonListing[] = [
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
  districtList: CommonListing[] = [
    { value: '1', viewValue: 'District Treasury Office,Gandhinagar' },
    { value: '2', viewValue: 'District Treasury Office,Ahmedabad' },
    { value: '3', viewValue: 'District Treasury Office,Rajkot' },
  ];
  // Table Source
  isSubmitted;
  displayedColumns: string[] = ['srNo', 'hbaMca', 'date', 'scheduleNo', 'district',
    'year', 'month', 'head', 'headAmount', 'action'];
  dataSource = new MatTableDataSource<ScheduleEntryHbaListing>(ELEMENT_Details);


  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder) { }
  ngOnInit() {
    this.voucherData();

  }
  voucherData() {
    this.voucherForm = this.fb.group({
      scheduleNo: [''],
      inwardDate: [''],
      treasuryPao: [''],
      hbaMca: [''],
      tcChallanAMount: [''],
      tcAmount: [''],
      challanAmount: [''],
      voucherAmount: [''],
      amount: [''],
      credir: [''],
      year: [''],
      month: [''],
      total: [''],
      head: [''],

      headAmount: [''],
      groupHead: [''],
      ddo: [''],
      cursoron: [''],
      wiseTotal: [''],
      rowTotal: [''],
      hba: [''],
      district: ['']
    });
  }
  // routing
  navigate() {
    this.router.navigate(['./dppf-hba/schedule-entry']);
  }

}
