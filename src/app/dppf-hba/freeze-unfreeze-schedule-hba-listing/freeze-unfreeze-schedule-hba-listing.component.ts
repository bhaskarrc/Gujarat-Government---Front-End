import { CommonListing } from 'src/app/model/common-listing';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MatDialog, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { DppfgpfMessage } from 'src/app/common/error-message/common-message.constants';
import { Router } from '@angular/router';
import { FreezeUnfreezeScreen } from 'src/app/model/dppf-hba';


@Component({
  selector: 'app-freeze-unfreeze-schedule-hba-listing',
  templateUrl: './freeze-unfreeze-schedule-hba-listing.component.html',
  styleUrls: ['./freeze-unfreeze-schedule-hba-listing.component.css']
})
export class FreezeUnfreezeScheduleHbaListingComponent implements OnInit {

  // Form Group
  freezeUnfreezeListForm: FormGroup;
  // Date
  todayDate = Date.now();
  maxDate = new Date();
  // Form Controlfreeze-unfreeze-schedule-listing
  typeOfDistrictCtrl: FormControl = new FormControl();
  typeOfYearCtrl: FormControl = new FormControl();
  typeOfMonthCtrl: FormControl = new FormControl();
  typeOfEmployeeClassCtrl: FormControl = new FormControl();
  typeOfLockedUnlockedCtrl: FormControl = new FormControl();
  // List
  classTypeOfYear: CommonListing[] = [
    { value: '1', viewValue: '2020 ' },
    { value: '2', viewValue: '2021' },
    { value: '3', viewValue: '2022' },
    { value: '1', viewValue: '2023 ' },
    { value: '2', viewValue: '2024' },
    { value: '3', viewValue: '2025' },
  ];

  classTypeOfMonth: CommonListing[] = [
    { value: '1', viewValue: 'January ' },
    { value: '2', viewValue: 'February ' },
    { value: '3', viewValue: 'March ' },
    { value: '4', viewValue: 'April ' },
    { value: '5', viewValue: 'May ' },
    { value: '6', viewValue: 'June ' },
    { value: '7', viewValue: 'July ' },
    { value: '8', viewValue: 'August ' },
    { value: '9', viewValue: 'September ' },
    { value: '10', viewValue: 'October ' },
    { value: '11', viewValue: 'November ' },
    { value: '12', viewValue: 'December ' },
  ];

  classTypeOfDistrict: CommonListing[] = [
    { value: '1', viewValue: 'Ahmedabad ' },
    { value: '2', viewValue: 'Amreli' },
    { value: '3', viewValue: 'Anand ' },
    { value: '4', viewValue: 'Assam' },
    { value: '5', viewValue: 'Bharuch ' },
    { value: '6', viewValue: 'Chandigarh' },
    { value: '7', viewValue: 'Bhavnagar ' },
    { value: '8', viewValue: 'Gandhinagar' },
    { value: '9', viewValue: 'Kheda ' },
  ];

  classTypeOfLockedUnlocked: CommonListing[] = [
    { value: '1', viewValue: 'Locked' },
    { value: '2', viewValue: 'Unlocked' },
  ];

  classTypeOfEmployeeClass: CommonListing[] = [
    { value: '1', viewValue: 'Class IV ' },
    { value: '2', viewValue: 'Daily Wages' },
    { value: '3', viewValue: 'Work Charge' },
  ];
  // Error Message
  errorMessage: { INWARD_NUMBER: string; INWARD_DATE: string; };

  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder) { }

  // Table Source
  Element_Data: FreezeUnfreezeScreen[] = [
    {
      srno: '1',
      requestNo: '123/55',
      scheduleNo: '123/55/678',
      district: 'Amreli',
      year: '2020',
      month: 'January',
      employeeClass: 'Work Charge',
      lockedUnlocked: 'UnLocked',
    },
    {
      srno: '2',
      requestNo: '131/52',
      scheduleNo: '123/55/678',
      district: 'Ahmedabad',
      year: '2020',
      month: 'January',
      employeeClass: 'Daily Wages',
      lockedUnlocked: 'Locked',
    },
    {
      srno: '3',
      requestNo: '111/22',
      scheduleNo: '123/55/678',
      district: 'Bharuch',
      year: '2019',
      month: 'January',
      employeeClass: 'Work Charge',
      lockedUnlocked: 'UnLocked',
    },
    {
      srno: '4',
      requestNo: '173/45',
      scheduleNo: '123/55/678',
      district: 'Ahmedabad',
      year: '2019',
      month: 'Februaury',
      employeeClass: 'Daily Wages',
      lockedUnlocked: 'Locked',
    },
  ];

  displayedColumns: any[] = [
    'srno',
    'scheduleNo',
    'district',
    'year',
    'month',
    'lockedUnlocked',
    'action',

  ];

  dataSource = new MatTableDataSource<FreezeUnfreezeScreen>(this.Element_Data);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {

    this.errorMessage = DppfgpfMessage;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.freezeUnfreezeListForm = this.fb.group({
      requestNo: '',
      scheduleNo: '',
      district: '',
      year: '',
      month: '',
      employeeClass: '',
      lockedUnlocked: '',

    });
  }

  resetForm() {
    this.freezeUnfreezeListForm.reset();
  }

  // navigation Route
  navigate() {
    this.router.navigate(['./dppf-hba/freeze-unfreeze-schedule']);
  }
}
