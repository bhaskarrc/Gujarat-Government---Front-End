import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatDialog, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { FreezeUnfreezeScreen } from 'src/app/model/dppf-hba';

@Component({
  selector: 'app-freeze-unfreeze-schedule-listing',
  templateUrl: './freeze-unfreeze-schedule-listing.component.html',
  styleUrls: ['./freeze-unfreeze-schedule-listing.component.css']
})
export class FreezeUnfreezeScheduleListingComponent implements OnInit {
  // Form Group
  freezeUnfreezeListForm: FormGroup;
  // Date
  todayDate = Date.now();
  // Form COntrol
  typeOfDistrictCtrl: FormControl = new FormControl();
  typeOfYearCtrl: FormControl = new FormControl();
  typeOfMonthCtrl: FormControl = new FormControl();
  typeOfEmployeeClassCtrl: FormControl = new FormControl();
  typeOfLockedUnlockedCtrl: FormControl = new FormControl();

  // DropDown Starts
  classTypeOfYear: ListValue[] = [
    { value: '1', viewValue: '2020 ' },
    { value: '2', viewValue: '2021' },
    { value: '3', viewValue: '2022' },
    { value: '1', viewValue: '2023 ' },
    { value: '2', viewValue: '2024' },
    { value: '3', viewValue: '2025' },
  ];

  classTypeOfMonth: ListValue[] = [
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

  classTypeOfDistrict: ListValue[] = [
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

  classTypeOfLockedUnlocked: ListValue[] = [
    { value: '1', viewValue: 'Locked' },
    { value: '2', viewValue: 'Unlocked' },

  ];

  classTypeOfEmployeeClass: ListValue[] = [
    { value: '1', viewValue: 'Class IV ' },
    { value: '2', viewValue: 'Daily Wages' },
    { value: '3', viewValue: 'Work Charge' },
  ];

  // DropDown Ends


  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  // table Data starts
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
    'requestNo',
    'scheduleNo',
    'district',
    'year',
    'month',
    'employeeClass',
    'lockedUnlocked',
    'action',

  ];

  dataSource = new MatTableDataSource<FreezeUnfreezeScreen>(this.Element_Data);
  // Table Data ends

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
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

  clearForm() {
    this.freezeUnfreezeListForm.reset();
  }

  openRequestNoDialog() { }
  resetForm() {
    this.freezeUnfreezeListForm.reset();
  }

  deleteRowRecovery(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource = new MatTableDataSource(
      this.dataSource.data
    );
  }

  searchBill() { }

}

