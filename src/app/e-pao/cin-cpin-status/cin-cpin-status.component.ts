import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatTableDataSource, MatDialogRef } from '@angular/material';
import { CInCpinStatus } from 'src/app/model/epaoModel';


@Component({
  selector: 'app-cin-cpin-status',
  templateUrl: './cin-cpin-status.component.html',
  styleUrls: ['./cin-cpin-status.component.css']
})
export class CinCpinStatusComponent implements OnInit {
  ELEMENT_DATA: CInCpinStatus[] = [
    {
      cpin: '',
      cin: '',
      status: '',
      cpIn: '',
      fileNo: '',
      amountGovt: '',
      fileDate: '',
      creditDate: '',
      transStatus: '',
    },

  ];
  // form group
  cinStatusrForm: FormGroup;
  // form control
  recordTypeCtrl: FormControl = new FormControl();
  // record type
  recordType_list: any[] = [{
    value: '1', viewValue: 'CPIN'
  },
  { value: '2', viewValue: 'CIN' },

  ];
  // date
  maxDate = new Date();
  todayDate = new Date();
  displayedColumns = ['srNo', 'cpin', 'cin', 'status', 'fileNo', 'fileDate', 'amountGovt', 'creditDate', 'transStatus'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder) { }
  ngOnInit() {

    this.cinStatusData();

  }
  cinStatusData() {
    this.cinStatusrForm = this.fb.group({
      addRate: [''],
      effecativeDate: [''],
      bankRate: [''],
      recordTypeCtrl: [''],
      details: ['']
    }
    );
  }
}
