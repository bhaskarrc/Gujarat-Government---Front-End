import { Component, OnInit } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { InterestNdcDetailsHba } from 'src/app/model/dppf-hba';
import { Router } from '@angular/router';
import { DPPFHbaDirectives } from 'src/app/common/directive/dppf-hba';
const ELEMENT_Details: InterestNdcDetailsHba[] = [
  {
    hbaMca: '',
    name: '',
    interest: '',
    accountCloseDate: '',
  }
];
@Component({
  selector: 'app-interest-ndc-details-hba',
  templateUrl: './interest-ndc-details-hba.component.html',
  styleUrls: ['./interest-ndc-details-hba.component.css']
})
export class InterestNdcDetailsHbaComponent implements OnInit {
  directiveObject = new DPPFHbaDirectives(this.dialog);

  // Date
  todayDate = Date.now();
  maxDate = new Date();
  // Table Source
  displayedColumns: string[] = ['hbaMca', 'name', 'interest', 'accountCloseDate', 'action'];
  dataSource = new MatTableDataSource<InterestNdcDetailsHba>(ELEMENT_Details);
  constructor(public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
  }
  // Add Row in table
  addRow() {
    this.dataSource.data.push({
      hbaMca: '',
      name: '',
      interest: '',
      accountCloseDate: '',
    });
    this.dataSource = new MatTableDataSource(this.dataSource.data);
  }
  delete(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource = new MatTableDataSource(this.dataSource.data);
  }

}
