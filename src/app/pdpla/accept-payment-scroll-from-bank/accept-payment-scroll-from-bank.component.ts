import { Component, OnInit, ViewChild } from '@angular/core';
import { eaMessage } from 'src/app/common/error-message/common-message.constants';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { ListValue, AcceptElementDate } from 'src/app/model/pdpla';
import { PdplaDirectives } from 'src/app/common/directive/pdpla';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accept-payment-scroll-from-bank',
  templateUrl: './accept-payment-scroll-from-bank.component.html',
  styleUrls: ['./accept-payment-scroll-from-bank.component.css']
})
export class AcceptPaymentScrollFromBankComponent implements OnInit {



  // Date
  todayDate = Date.now();
  initiatiomdate = new Date();
  maxDate = new Date();
  // Variable
  errorMessages = eaMessage;
  isSubmitted = false;
  // Form Group
  acceptPaymentScrollBankForm: FormGroup;
  selection = new SelectionModel<any>(true, []);
  // Form COntrol
  bankTypeCtrl: FormControl = new FormControl();
  chequeTypeCtrl: FormControl = new FormControl();
  // Lists
  Element_Data: AcceptElementDate[] = [
    {
      bName: 'State Bank of India',
      branchCode: '1200',
      sDate: '14-Jun-2019',
      challan: '50',
      cType: 'Treasury',
      amount: '10,500.00',
      details: 'Details',

    },
    {
      bName: 'State Bank of India',
      branchCode: '1200',
      sDate: '14-Jun-2019',
      challan: '40',
      cType: 'LC',
      amount: '31,568.00',
      details: 'Details',

    },
    {
      bName: 'State Bank of India',
      branchCode: '1200',
      sDate: '14-Jun-2019',
      challan: '25',
      cType: 'PLA',
      amount: '78,589.00',
      details: 'Details',

    },
    {
      bName: 'State Bank of India',
      branchCode: '1200',
      sDate: '14-Jun-2019',
      challan: '5',
      cType: 'GST Refund',
      amount: '12,345.00',
      details: 'Details',

    }
  ];

  bankType_list: ListValue[] = [
    { value: '1', viewValue: 'State Bank of India' },
    { value: '2', viewValue: 'State Bank of India' }
  ];
  cheque_list: ListValue[] = [
    { value: '1', viewValue: 'Treasury' },
    { value: '2', viewValue: 'LC' },
    { value: '1', viewValue: 'PLA' },
    { value: '2', viewValue: 'GST Refund' }
  ];

  // Table Source
  dataSource = new MatTableDataSource<AcceptElementDate>(this.Element_Data);
  displayedColumns: any[] = ['checkBox', 'bName', 'branchCode', 'sDate', 'challan', 'cType', 'amount', 'details'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private fb: FormBuilder, private router: Router,
    private dialog: MatDialog) { }

  directiveObject = new PdplaDirectives(this.router, this.dialog);


  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.acceptPaymentScrollBankForm = this.fb.group({
      // Formfields
      scrollFromDate: [''],
      scrollToDate: [''],
      bankName: [''],
      chequeType: [''],
    });

  }

  // clears form
  clearForm() {
    this.acceptPaymentScrollBankForm.reset();
  }

  // deleted record
  deleteEntry(element) {
    this.dataSource.data.splice(element, 1);
    this.dataSource = new MatTableDataSource(this.dataSource.data);

  }

  // saves form
  onSave() {
    if (this.acceptPaymentScrollBankForm.valid) {
      this.isSubmitted = false;
    } else {
      this.isSubmitted = true;
    }

  }


}
