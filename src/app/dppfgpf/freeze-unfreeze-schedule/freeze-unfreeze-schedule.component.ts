import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { DppfgpfMessage } from 'src/app/common/error-message/common-message.constants';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { FreezeUnfreezeProcess, HeadDataFreezeUnfreezeProcess } from 'src/app/model/dppfgpf';



@Component({
  selector: 'app-freeze-unfreeze-schedule',
  templateUrl: './freeze-unfreeze-schedule.component.html',
  styleUrls: ['./freeze-unfreeze-schedule.component.css']
})
export class FreezeUnfreezeScheduleComponent implements OnInit {
  // Variable
  errorMessage;
  // Date
  todayDate = Date.now();
  isSearch;
  // Form Group
  freezeUnfreezeScheduleForm: FormGroup;
  // Form Control
  typeOfYearCtrl: FormControl = new FormControl();
  typeOfDistrictCtrl: FormControl = new FormControl();
  typeOfMonthCtrl: FormControl = new FormControl();
  typeOfEmployeeClassCtrl: FormControl = new FormControl();
  typeOfLockedUnlockedCtrl: FormControl = new FormControl();

  //  Table Data starts
  Element_Data: FreezeUnfreezeProcess[] = [
    {
      inwardNo: '123/45/6',
      inwardDate: '28-04-2020',
      treasuryName: 'District Treasury Office,Gandhinagar',
      schedule: '8000',
      accWiseEntryAmount: '8000',
      difference: '0',
      lockedUnlocked: 'Unlocked',
    },

  ];

  displayedColumns: any[] = [
    'select',
    'inwardNo',
    'inwardDate',
    'treasuryName',
    'schedule',
    'accWiseEntryAmount',
    'difference',
    'lockedUnlocked',


  ];
  dataSource = new MatTableDataSource<FreezeUnfreezeProcess>(this.Element_Data);
  // Table Data ends

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



  constructor(private fb: FormBuilder) { }
  selection = new SelectionModel(true, []);


  ngOnInit() {

    this.errorMessage = DppfgpfMessage;
    this.freezeUnfreezeScheduleForm = this.fb.group({

      scheduleNo: '',
      district: '',
      year: '',
      month: '',
      employeeClass: '',
      lockedUnlocked: '',
    });
  }

  checkboxLabel(row?: HeadDataFreezeUnfreezeProcess): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} `;
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  toggle() {
    const scNo = this.freezeUnfreezeScheduleForm.controls.scheduleNo.value.length;
    if (scNo > 0) {
      this.isSearch = true;
    }
  }

}
