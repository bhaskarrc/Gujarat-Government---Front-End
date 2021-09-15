import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { ListValue } from 'src/app/model/common-grant';
import { GtrFortyEightList } from 'src/app/model/ddo-forms';


@Component({
  selector: 'app-gtr-forty-eight-list',
  templateUrl: './gtr-forty-eight-list.component.html',
  styleUrls: ['./gtr-forty-eight-list.component.css']
})
export class GtrFortyEightListComponent implements OnInit {

  // Date
  maxDate = new Date();

  // Form Group
  gtrFormFortyEight: FormGroup;

  // form control
  billTypeCtrl: FormControl = new FormControl();
  billCategoryCtrl: FormControl = new FormControl();
  majorHeadCtrl: FormControl = new FormControl();
  ddoNameCtrl: FormControl = new FormControl();
  statusCtrl: FormControl = new FormControl();
  typeBillCtrl: FormControl = new FormControl();


  // lists start
  billTypeList: ListValue[] = [
    { value: '1', viewValue: 'Services Postage Stamps' },
  ];

  billList: ListValue[] = [
    { value: '1', viewValue: 'Regular' },
  ];

  majorHeadList: ListValue[] = [
    { value: '1', viewValue: '0020 : Corporation Tax' },
    { value: '2', viewValue: '0021: Taxes on Income other than Corporation Tax' },
    { value: '3', viewValue: '0028 : Other Taxes on Income and Expenditure' },
    { value: '4', viewValue: '0029 : Land Revenue' },
    { value: '5', viewValue: '0030 : Stamps and Registration Fees' },
  ];

  ddoList: ListValue[] = [
    { value: '01', viewValue: 'District Treasury Officer, District Treasury Office, Gandhinagar' },
  ];

  statusList: ListValue[] = [
    { value: '1', viewValue: 'Created' },
    { value: '2', viewValue: 'Pending' },
    { value: '3', viewValue: 'Approve' }
  ];

  typeBillList: ListValue[] = [
    { value: '1', viewValue: 'Regular Bill' },
  ];
  // lists end


  // table data start
  grantOrderDisplayColumn = [
    'srNo', 'billReq', 'billdate', 'billType', 'billCategary', 'majorHead', 'Amount',
    'ddoNo', 'ddoName', 'billStatus', 'TypeOfbill', 'action'
  ];
  grantOrderList: GtrFortyEightList[] = [
    {
      billReq: '111111', billdate: '02-Feb-2020', billType: 'Services Postage Stamps',
      billCategary: 'Regular',
      majorHead: '2054', Amount: '50000', ddoNo: ' 416', ddoName: 'District Treasury Officer, District Treasury Office, Gandhinagar',
      billStatus: 'Created', TypeOfbill: 'Regular Bill',
    }
  ];
  grantOrderDataSource = new MatTableDataSource<GtrFortyEightList>(this.grantOrderList);
  // table data end

  // constructor
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.gtrFormFortyEight = this.fb.group({
      billReqNo: [''],
      billType: [''],
      billReq: [''],
      billCategory: [''],
      majorHead: [''],
      ddoNo: [''],
      ddoName: [''],
      typeBill: [''],
      status: ['']
    });
  }

  // reset form
  searchGtrFormFortyEight() {
    this.gtrFormFortyEight.reset();
  }
}
