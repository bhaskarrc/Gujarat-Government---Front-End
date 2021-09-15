import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { FileSummary } from 'src/app/model/epaoModel';


@Component({
  selector: 'app-file-summary',
  templateUrl: './file-summary.component.html',
  styleUrls: ['./file-summary.component.css']
})
export class FileSummaryComponent implements OnInit {

  ELEMENT_DATA: FileSummary[] = [
    {
      fileDate: '',
      fileType: '',
      totalRecords: '',
      totalFiles: '',
      sgstAmt: '',
      igstAmt: '',
      chstAmt: '',
      cessAmt: '',
      totalAmt: ''
    },

  ];

  // date
  maxDate = new Date();
  todayDate = new Date();
  isSubmitted = false;
  // form group
  fileSummaryForm: FormGroup;
  displayedColumns = ['srNo', 'fileDate', 'fileType', 'totalRecords', 'totalFiles', 'sgstAmt', 'igstAmt',
    'chstAmt', 'cessAmt', 'totalAmt'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  constructor(public dialog: MatDialog, private fb: FormBuilder) { }
  ngOnInit() {

    this.fileSummaryData();

  }
  fileSummaryData() {
    this.fileSummaryForm = this.fb.group({
      addRate: [''],
      fromDate: ['']
    }
    );
  }


}
