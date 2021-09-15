
import { MatTableDataSource, MatDialog } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { emdMessage } from 'src/app/common/error-message/common-message.constants';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { ElementEmd } from 'src/app/model/emd';
import { EmdDirectives } from 'src/app/common/directive/emd-directive';
import { Router } from '@angular/router';

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
  selector: 'app-unposted-voucher-add',
  templateUrl: './unposted-voucher-add.component.html',
  styleUrls: ['./unposted-voucher-add.component.css']
})
export class UnpostedVoucherAddComponent implements OnInit {
  directiveObject = new EmdDirectives(this.router, this.dialog);
  isSubmitted = false;
  // FormGroup
  unpostedVoucherAddForm: FormGroup;
  errorMessages = emdMessage;
  // dates
  maxDate = new Date();
  date = new Date();
  initiatiomdate = new Date();

  // Table Source
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  // Display Columns
  displayedColumns: string[] = ['position', 'cNo', 'pName', 'dept', 'cdate', 'amt'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private fb: FormBuilder, private router: Router, public dialog: MatDialog) { }
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.unpostedVoucherAddForm = this.fb.group({
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
      brNo: [''],
      tNo: [''],

      billType: [''],
      cardexNo: [''],
      voucherNumber: [''],

      mHead: [''],
      netamount: [''],

    });
  }

}
