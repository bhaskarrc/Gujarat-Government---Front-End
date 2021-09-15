import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ChequeList } from '../../model/cheque-list';

@Component({
  selector: 'app-cheque-list',
  templateUrl: './cheque-list.component.html',
  styleUrls: ['./cheque-list.component.css']
})
export class ChequeListComponent implements OnInit {

  // variables
  private paginator: MatPaginator;
  private sort: MatSort;

  // table data
  elementData: ChequeList[] = [
    { chequeType: 'EP Cheque', partyName: 'ABC Ltd', accountNo: 3600178925, chequeAmount: 5000 },
    { chequeType: 'EP Cheque', partyName: 'VET Ltd', accountNo: 3600178922, chequeAmount: 1700 },
    { chequeType: 'EP Cheque', partyName: 'NETR Ltd', accountNo: 3600178921, chequeAmount: 2200 },
    { chequeType: 'EP Cheque', partyName: 'XAT Ltd', accountNo: 3600178926, chequeAmount: 1300 }
  ];
  displayedColumns: string[] = ['serialNo', 'chequeType', 'partyName', 'accountNo', 'chequeAmount'];
  dataSource = new MatTableDataSource<ChequeList>(this.elementData);
  // table data end

  // set data source attributes named paginator,sort
  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }

  // constructor
  constructor() { }

  ngOnInit() {

  }

  // calculate total expenditure amount
  totalExpeAmount(): number {
    let chequeAmount = 0;
    this.dataSource.data.forEach((element1) => {
      chequeAmount = chequeAmount + Number(element1.chequeAmount);
    });
    return chequeAmount;
  }

  // go to dashboard
  goToDashboard() {

  }

}
