import { Component, OnInit, ViewChild } from '@angular/core';
import { RevertIssuedChequeBook } from 'src/app/model/revert-issued-cheque-book';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-reverted-cheque-request',
  templateUrl: './reverted-cheque-request.component.html',
  styleUrls: ['./reverted-cheque-request.component.css']
})
export class RevertedChequeRequestComponent implements OnInit {
  todayDate = Date.now();
  // table data
  Element_Data: RevertIssuedChequeBook[] = [
    {
      revisionNo: '4386', fromSeries: '181', toSeries: '251', issueDate: new Date('05/19/2020'),
      chequeType: 'LC', accountNo: '20000222', accountName: 'Executive Engineer, Road and Building Department', remarks: ''
    },

  ];
  dataSource = new MatTableDataSource<RevertIssuedChequeBook>(this.Element_Data);
  displayedColumns: string[] = ['position', 'revisionType', 'fromSeries', 'toSeries', 'revisionDate', 'chequeType',
    'accountNo', 'accountName', 'remarks', 'action'];
  @ViewChild(MatSort) Sort: MatSort;
  @ViewChild(MatPaginator) Paginator: MatPaginator;
  constructor() { }

  ngOnInit() {
    this.dataSource.sort = this.Sort;
    this.dataSource.paginator = this.Paginator;
  }
  // delete row
  delete(element) {
    this.dataSource.data.splice(element, 1);
    this.dataSource = new MatTableDataSource(this.dataSource.data);
  }

  // edit row
  onEdit(element) {
    element.edit = !element.edit;
  }
}
