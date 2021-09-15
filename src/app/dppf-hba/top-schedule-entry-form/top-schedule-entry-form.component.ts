import { CommonListing } from 'src/app/model/common-listing';
import { HeadAmount } from './../../model/dppf-hba';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { InwardNoDialogComponent } from '../inward-no-dialog/inward-no-dialog.component';
import { dppfHbaMessage } from 'src/app/common/error-message/common-message.constants';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { ListingDialogComponent } from '../listing-dialog/listing-dialog.component';

const ELEMENT_Details: HeadAmount[] = [
  {
    head: '',
    amount: '',
  }
];

@Component({
  selector: 'app-top-schedule-entry-form',
  templateUrl: './top-schedule-entry-form.component.html',
  styleUrls: ['./top-schedule-entry-form.component.css']
})
export class TopScheduleEntryFormComponent implements OnInit {
  // Form Group
  topScheduleForm: FormGroup;
  // Variable
  isSubmitted;
  public errorMessages;
  // Date
  todayDate = Date.now();
  maxDate = new Date();
  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder) { }
  // List
  credit_list: CommonListing[] = [
    { value: '1', viewValue: 'Credit' },
    { value: '2', viewValue: 'Debit' }
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
  // Table Source
  displayedColumns: string[] = ['head', 'amount', 'action'];
  dataSource = new MatTableDataSource<HeadAmount>(ELEMENT_Details);
  directiveObj = new CommonDirective();
  ngOnInit() {
    this.errorMessages = dppfHbaMessage;
    this.topScheduleData();
  }
  topScheduleData() {
    this.topScheduleForm = this.fb.group({
      inwardNo: [{ value: '', disabled: false }],
      inwardDate: [{ value: '', disabled: true }],
      treasuryPao: [{ value: '', disabled: true }],
      hbaMca: [{ value: '', disabled: true }],
      tcChallanAMount: [{ value: '', disabled: true }],
      tcAmount: [{ value: '', disabled: true }],
      challanAmount: [{ value: '', disabled: true }],
      voucherAmount: [{ value: '', disabled: true }],
      amount: [{ value: '', disabled: true }],
      credir: [{ value: 'Credit', disabled: true }],
      year: [{ value: '', disabled: true }],
      month: [{ value: '', disabled: true }],
    });
  }

  // adds / delete row in the table
  addRow() {
    this.dataSource.data.push({
      head: '',
      amount: '',
    });
    this.dataSource = new MatTableDataSource(this.dataSource.data);
  }
  // routing
  deleteRow(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource = new MatTableDataSource(this.dataSource.data);
  }
  // Inward o dialog
  inwardNo(): void {
    const dialogRef = this.dialog.open(InwardNoDialogComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.inwardNo === '12345/05/2020') {
        this.topScheduleForm.patchValue({
          inwardNo: '12345/05/2020',
          inwardDate: new Date('15-Aug-2020'),
          treasuryPao: 'District Treasury Office,Gandhinagar',
          hbaMca: 'HBA',
          tcChallanAMount: '20000',
          tcAmount: '10000',
          challanAmount: '10000',
          voucherAmount: '0',
          amount: '20000',
          credir: 'Credit',
          year: '2020',
          month: 'Jul',
        });
      }
      console.log('The dialog was closed');
    });
  }
  // opens dialog
  onClickListing() {
    const dialogRef = this.dialog.open(ListingDialogComponent, {
      width: '300px',
      height: 'auto',
      data: ''
    }
    );
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result === 'No') {
        this.navigate();
      }
    });
  }

  // Navigate route
  navigate() {
    this.router.navigate(['./dppf-hba/top-Schedule-entry-listing']);
  }
}
