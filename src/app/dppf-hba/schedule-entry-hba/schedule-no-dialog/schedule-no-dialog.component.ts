import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { CommonListing } from 'src/app/model/common-listing';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { DialogData } from 'src/app/model/standing-charge';
import { ScheduleNo } from 'src/app/model/dppf-hba';

@Component({
  selector: 'app-schedule-no-dialog',
  templateUrl: './schedule-no-dialog.component.html',
  styleUrls: ['./schedule-no-dialog.component.css']
})
export class ScheduleNoDialogComponent implements OnInit {
  scheduleNoForm: FormGroup;
  // form controls
  typeMonthCtrl: FormControl = new FormControl();
  typeOfYearCtrl: FormControl = new FormControl();

  // lists
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

  // table data
  Element_Data: ScheduleNo[] = [{ head: '7610', month: 'Jan', scheduleNo: 'HBA/10/2020/132', year: '2020' }];
  dataSource = new MatTableDataSource<ScheduleNo>(this.Element_Data);
  displayedColumn = [
    'srno', 'scheduleNo', 'year', 'month', 'head'];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(public dialogRef: MatDialogRef<ScheduleNoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private fb: FormBuilder) { }
  ngOnInit() {
    this.scheduleNoForm = this.fb.group({
      scheduleNo: [''],
      year: [''],
      month: [''],
      head: ['']
    });
  }
  // closes dialog
  onClose() {
    this.dialogRef.close();
  }
  async update(data?: string) {
    this.dialogRef.close(data);
  }
}
