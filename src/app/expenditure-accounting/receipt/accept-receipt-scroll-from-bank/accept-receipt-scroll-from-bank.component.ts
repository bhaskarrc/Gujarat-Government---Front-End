import { MatTableDataSource } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { eaMessage } from 'src/app/common/error-message/common-message.constants';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-accept-receipt-scroll-from-bank',
  templateUrl: './accept-receipt-scroll-from-bank.component.html',
  styleUrls: ['./accept-receipt-scroll-from-bank.component.css']
})
export class AcceptReceiptScrollFromBankComponent implements OnInit {
  initiatiomdate = new Date((new Date()));

  errorMessages = eaMessage;
  // FormGroup
  acceptScrollBankForm: FormGroup;
  maxDate = new Date();
  isSubmitted = false;
  // FormControl
  bankTypeCtrl: FormControl = new FormControl();
  challanTypeCtrl: FormControl = new FormControl();
  // Display Element Data
  Element_Data: any[] = [
    {
      bName: 'State Bank of India',
      branchCode: '1200',
      sDate: '14-June-2019',
      challan: '50',
      cType: 'RTO',
      amount: '31,568.00',
      details: 'Details',

    },
    {
      bName: 'State Bank of India',
      branchCode: '1200',
      sDate: '14-June-2019',
      challan: '40',
      cType: 'Others',
      amount: '78,589.00',
      details: 'Details',

    },
    {
      bName: 'State Bank of India',
      branchCode: '1200',
      sDate: '14-June-2019',
      challan: '25',
      cType: 'Others',
      amount: '12,345.00',
      details: 'Details',

    }
  ];
  // List values
  bankType_list: any[] = [
    { value: '1', viewValue: 'State Bank of India' },
    { value: '2', viewValue: 'State Bank of India' }
  ];
  challan_list: any[] = [
    { value: '1', viewValue: 'RTO' },
    { value: '2', viewValue: 'Others' }
  ];


  dataSource = new MatTableDataSource<any>(this.Element_Data);
  displayedColumns: any[] = ['srNo', 'bName', 'branchCode', 'sDate', 'challan', 'cType', 'amount', 'details'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.acceptScrollBankForm = this.fb.group({
      // FormGroup Fields
      scrollFromDate: [''],
      scrollToDate: [''],
      bankName: [''],
      challanType: [''],
    });

  }
  // function to clear form
  clearForm() {
    this.acceptScrollBankForm.reset();
  }
  // function to delete row from table
  deleteEntry(element) {
    this.dataSource.data.splice(element, 1);
    this.dataSource = new MatTableDataSource(this.dataSource.data);

  }
  onSave() {
    if (this.acceptScrollBankForm.valid) {
      this.isSubmitted = false;
    } else {
      this.isSubmitted = true;
    }

  }
}

