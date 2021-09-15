

import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EmdRecordRoomAllPosted } from 'src/app/model/emd';
@Component({
  selector: 'app-emd-record-room-all-posted-challan',
  templateUrl: './emd-record-room-all-posted-challan.component.html',
  styleUrls: ['./emd-record-room-all-posted-challan.component.css']
})
export class EmdRecordRoomAllPostedChallanComponent implements OnInit {
  // variables
  showTable: Boolean = false;
  searchListForm: FormGroup;

  // FormGroup
  emdAllpostedChallanListForm: FormGroup;
  // dates
  maxDate = new Date();
  initiatiomdate = new Date();

  // Display Element Data
  ELEMENT_DATA: EmdRecordRoomAllPosted[] =
    [
      {
        srNo: '192000001',
        code: 'RD',
        pName: 'Mr. A.B. Mishra',
        depart: 'Revenue Department',
        edate: '10-Apr-2019',
        majorHead: '8443',
        amount: '20000.00',
      },

      {
        srNo: '192000001',
        code: 'RD',
        pName: 'Mr. A.B. Mishra',
        depart: 'Revenue Department',
        edate: '10-Apr-2019',
        majorHead: '8443',
        amount: '20000.00',
      },
      {
        srNo: '192000001',
        code: 'RD',
        pName: 'Mr. A.B. Mishra',
        depart: 'Revenue Department',
        edate: '10-Apr-2019',
        majorHead: '8443',
        amount: '20000.00',
      },
      {
        srNo: '192000001',
        code: 'RD',
        pName: 'Mr. A.B. Mishra',
        depart: 'Revenue Department',
        edate: '10-Apr-2019',
        majorHead: '8443',
        amount: '20000.00',
      },

    ];
  // Display Columns
  displayedColumns: string[] = ['srNo', 'code', 'pName', 'depart', 'edate', 'majorHead',
    'amount', 'action'];
  // Table Source
  dataSource = new MatTableDataSource<EmdRecordRoomAllPosted>(this.ELEMENT_DATA);
  private paginator: MatPaginator;
  private sort: MatSort;
  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }
  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }
  constructor(private router: Router,
    private fb: FormBuilder,
    public dialog: MatDialog,
  ) { }
  ngOnInit() {
    this.emdAllpostedChallanListFormFormData();
  }
  emdAllpostedChallanListFormFormData() {
    this.emdAllpostedChallanListForm = this.fb.group({
      // FormGroup Fields
      srNo: [''],
      code: [''],
      payeeName: [''],
      department: [''],
      majorHead: [''],

      amount: [''],

    });
  }
  // sets paginator and sort variables
  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  // function to clear form
  clearForm() {
    this.searchListForm.reset();
  }
  // shows and hides table
  search() {
    this.showTable = true;
  }


}

