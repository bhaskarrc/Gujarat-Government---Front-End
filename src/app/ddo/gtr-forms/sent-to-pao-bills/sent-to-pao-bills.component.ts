import { SentToPaoBills } from './../../../model/sent-to-pao-bills';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CommonListing } from './../../../model/common-listing';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonDirective } from 'src/app/common/directive/validation.directive';

@Component({
  selector: 'app-sent-to-pao-bills',
  templateUrl: './sent-to-pao-bills.component.html',
  styleUrls: ['./sent-to-pao-bills.component.css']
})
export class SentToPaoBillsComponent implements OnInit {

  // variable
  billNetValueToAmt;
  billGrossAmtTo;
  billNetValueFromAmt;
  billGrossAmt;

  // date
  maxDate = new Date();

  // form group
  BillsForApprovalForm: FormGroup;

  // form control
  billTypeCtrl: FormControl = new FormControl();
  billCategoryCtrl: FormControl = new FormControl();
  directiveObj = new CommonDirective(this.router);


  // list start
  billTypeList: CommonListing[] = [
    { value: 1, viewValue: 'Abstract Bill for Contingent Changes' },
    { value: 2, viewValue: 'Advance Bill' },
    { value: 3, viewValue: 'Bill for Withdrawal of Final/DAV/Other Gpf (Class - IV)' },
    { value: 4, viewValue: 'Bill for Withdrawal of Final/DAV/Other Gpf (Other than Class - IV)' },
    { value: 5, viewValue: 'Court Fee Refund' },
    { value: 6, viewValue: 'Detailed Bill for Contingent Changes' },
    { value: 7, viewValue: 'G I S Insu & Savings Fund OnOnce Demise' },
    { value: 8, viewValue: 'G I S Savings Fund On Ones Retirement & Resi' },
    { value: 9, viewValue: 'Grant in Aid Bill' },
    { value: 10, viewValue: 'Grant in Aid Local Bodies' },
    { value: 11, viewValue: 'Grant in Aid Others' },
    { value: 12, viewValue: 'Grant in Aid Panchayat' },
    { value: 13, viewValue: 'Group Insu Scheme' },
    { value: 14, viewValue: 'Medical Bill' },
    { value: 15, viewValue: 'Pay Bill' },
    { value: 16, viewValue: 'Refund of Deposit' },
    { value: 17, viewValue: 'Refund of Lapsed Deposit' },
    { value: 18, viewValue: 'Refund of Revenue' },
    { value: 19, viewValue: 'Scholarship/Stipend' },
    { value: 19, viewValue: 'Services Postage Stamp' },
    { value: 19, viewValue: 'Simple Receipt for Online Bill' },
    { value: 19, viewValue: 'T A Bill' },
  ];
  billCategoryList: CommonListing[] = [
    { value: 1, viewValue: 'Nil' },
    { value: 2, viewValue: 'Regular' },
    { value: 3, viewValue: 'Regular/Challan' },
    { value: 4, viewValue: 'TC' },
  ];
  // list end

  // table data
   elementData: SentToPaoBills[] = [
    {
      checkbox: false, tokenNo: '26', billRegNo: '331-', date: '04-Feb-2020', billType: 'Services Postage Stamp', billCategory: 'Regular',
      majorHead: '2054', billNetValue: '1246.00', ddoNo: '416',
      ddoName: 'District Treasury Officer,DISTRICT TREASURY OFFICE, Gandhinagar ', TypeBill: 'Regular Bill', status: 'Pending'
    },

    {
      checkbox: false, tokenNo: '24', billRegNo: '75-', date: '10-Feb-2020', billType: 'Pay Bill', billCategory: 'Regular',
      majorHead: '2054', billNetValue: '334.00', ddoNo: '416',
      ddoName: 'District Treasury Officer,DISTRICT TREASURY OFFICE, Gandhinagar ', TypeBill: 'Regular Bill', status: 'Pending'
    },

    {
      checkbox: false, tokenNo: '29', billRegNo: '83-', date: '11-Feb-2020',
      billType: 'Detailed Bill For Contingent Charges', billCategory: 'Nil',
      majorHead: '2054', billNetValue: '7448.00', ddoNo: '416',
      ddoName: 'District Treasury Officer,DISTRICT TREASURY OFFICE, Gandhinagar ', TypeBill: 'Regular Bill', status: 'Pending'
    },

    {
      checkbox: false, tokenNo: '12', billRegNo: '44-', date: '13-Feb-2020',
      billType: 'Bill For Withdrawal Of Final/Dav/Other Gpf (Other Than Class-Iv)', billCategory: 'Regular',
      majorHead: '8009', billNetValue: '159.00', ddoNo: '416',
      ddoName: 'District Treasury Officer,DISTRICT TREASURY OFFICE, Gandhinagar ', TypeBill: 'Regular Bill', status: 'Pending'
    },

    {
      checkbox: false, tokenNo: '36', billRegNo: '17-', date: '13-Feb-2020',
      billType: 'Bill For Withdrawal Of Final/Dav/Other Gpf (Other Than Class-Iv)', billCategory: 'Regular',
      majorHead: '8009', billNetValue: '365.00', ddoNo: '416',
      ddoName: 'District Treasury Officer,DISTRICT TREASURY OFFICE, Gandhinagar ', TypeBill: 'Regular Bill', status: 'Pending'
    },

  ];
  dataSource = new MatTableDataSource<SentToPaoBills>(this.elementData);
  displayedColumns: string[] = [
    'checkbox',
    'billRegNo',
    'tokenNo',
    'date',
    'billType',
    'billCategory',
    'majorHead',
    'billGrossVal',
    'billNetValue',
    'ddoNo',
    'ddoName',
    'typeOfBill',
    'action'
  ];
  // table end

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  // constructor
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.BillsForApprovalForm = this.fb.group({
      billRegNo: [''],
      billCreatedFrom: [''],
      billCreatedTo: [''],
      billType: [''],
      billCategory: [''],
      majorHead: [''],
      billNetValueFrom: [''],
      billNetValue: [''],
      ddoNo: [''],
      ddoName: [''],
      billGrossAmtTo: [''],
      billGrossAmt: [''],
      billNetValueTo: [''],
    });
  }

  // clears form
  clearForm() {
    this.BillsForApprovalForm.reset();
  }

  // search bill
  searchBill() { }

  // sets bill Net Value To Amt
  decimalPointTo(data) {
    this.billNetValueToAmt = data;
  }


  // sets bill Net Value From Amt
  decimalPointFrom(data) {
    this.billNetValueFromAmt = data;
  }


  // sets  bill Gross Amt
  decimalGross(data) {
    this.billGrossAmt = data;
  }


  // sets decimal Gross To
  decimalGrossTo(data) {
    this.billGrossAmtTo = data;
  }


}
