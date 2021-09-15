import { Component, OnInit, ViewChild } from '@angular/core';
import { eaMessage } from 'src/app/common/error-message/common-message.constants';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ListValue, AcceptElementDate } from 'src/app/model/pdpla';

@Component({
  selector: 'app-accept-receipt-scroll-from-bank',
  templateUrl: './accept-receipt-scroll-from-bank.component.html',
  styleUrls: ['./accept-receipt-scroll-from-bank.component.css']
})
export class AcceptReceiptScrollFromBankComponent implements OnInit {
  // Date
  todayDate = Date.now();
  initiatiomdate = new Date();
  maxDate = new Date();
  // Variable
  errorMessages = eaMessage;
  isSubmitted = false;
  // Form Group
  acceptScrollBankForm: FormGroup;
  // Form Control
  bankTypeCtrl: FormControl = new FormControl();
  challanTypeCtrl: FormControl = new FormControl();
  // List
  Element_Data: AcceptElementDate[] = [
    {
      bName: 'State Bank of India',
      branchCode: '1200',
      sDate: '14-Jun-2019',
      challan: '50',
      cType: 'PLA',
      amount: '31,568.00',
      details: 'Details',

    }
  ];

  bankType_list: ListValue[] = [
    { value: '1', viewValue: 'State Bank of India' },
    { value: '2', viewValue: 'State Bank of India' }
  ];
  challan_list: ListValue[] = [
    { value: '1', viewValue: 'PLA' }
  ];

  // Table Source
  dataSource = new MatTableDataSource<any>(this.Element_Data);
  displayedColumns: any[] = ['srNo', 'bName', 'branchCode', 'sDate', 'challan', 'cType', 'amount', 'details'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.acceptScrollBankForm = this.fb.group({
      // Formfields

      scrollFromDate: [''],
      scrollToDate: [''],
      bankName: [''],
      challanType: [''],
    });

  }

  // clears form
  clearForm() {
    this.acceptScrollBankForm.reset();
  }

  // deletes record
  deleteEntry(element) {
    this.dataSource.data.splice(element, 1);
    this.dataSource = new MatTableDataSource(this.dataSource.data);

  }

  // saves data
  onSave() {
    if (this.acceptScrollBankForm.valid) {
      this.isSubmitted = false;
    } else {
      this.isSubmitted = true;
    }

  }
}

