
import { MatTableDataSource } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { ElementEmd } from 'src/app/model/emd';

// Display Element Data

const ELEMENT_DATA: ElementEmd[] = [
  {
    cNo: '100001',
    pName: 'Mr.A . B Mishra',
    dept: 'Home Department',
    cdate: '10-Apr-2020',
    amt: '10000.00'
  },
  {
    cNo: '100002',
    pName: 'Mr.P.T. Shah',
    dept: 'Food, Civil Supplies & Consumer Affairs Department',
    cdate: '10-Jun-2020',
    amt: '30000.00'
  },
  {
    cNo: '100003',
    pName: 'Mr. T.T. Sharma',
    dept: 'Education Department',
    cdate: '10-Dec-2020',
    amt: '5500.00'
  },
];

@Component({
  selector: 'app-view-all-posted-voucher-list-view',
  templateUrl: './view-all-posted-voucher-list-view.component.html',
  styleUrls: ['./view-all-posted-voucher-list-view.component.css']
})
export class ViewAllPostedVoucherListViewComponent implements OnInit {
  // FormGroup
  postedVoucherViewForm: FormGroup;

  // dates
  initiatiomdate = new Date();
  maxDate = new Date();
  date = new Date();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  // Table Source
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  // Display Columns
  displayedColumns: string[] = ['position', 'cNo', 'pName', 'dept', 'cdate', 'amt'];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.postedVoucherViewForm = this.fb.group({
      // FormGroup Fields
      passingDate: ['21/04/2019'],
      type: ['Cheques'],
      code: ['SD'],
      codeDescription: ['Security Deposit'],
      edpcode: ['0000'],
      edpcodeDescription: ['Mh 8009'],

      majorHead: ['8443'],
      majorHeadDecscription: ['Civil Deposits(Not Bearing Interest)'],
      subMajorHead: ['00'],
      subMajorHeadDecscription: [''],
      minorHead: ['103'],
      minorHeadDecscription: ['Security Deposit'],
      subHead: ['00'],
      subHeadDecscription: ['Security Deposit'],
      vNo: ['1'],
      srNo: ['192000001'],
      partyname: [''],
      department: ['1'],
      tokenNo: ['442'],
      tokenDate: ['09/04/2019'],
      chkNo: ['653423'],
      paidDate: ['15/04/2019'],
      amount: ['2000.00'],
      amountInWord: ['Two Thousands Only'],
      challanSrNo: [''],
      party: [''],
      voucherNo: ['58'],
      challanDate: [''],

    });
  }

}
