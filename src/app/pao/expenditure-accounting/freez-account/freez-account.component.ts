import { ListValue } from './../../../model/letter-of-credit';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { FreezAccount } from 'src/app/model/paoModel';
import { PaoDirectives } from 'src/app/common/directive/pao';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-freez-account',
  templateUrl: './freez-account.component.html',
  styleUrls: ['./freez-account.component.css']
})
export class FreezAccountComponent implements OnInit {
  lockdate = new FormControl(new Date());
  // dateDisabled = true;

  disableSelectpay = new FormControl(false);
  disableSelectrec = new FormControl(false);

  majorHeadPay = false;
  majorHeadRec = false;


  // Receipt
  majorheadrecColumns: string[] = [
    'select',
    'mjrHead',
    'descr',
    'lockDate',
  ];

  rec_Data: FreezAccount[] = [
    {
      mjrHead: '0005',
      descr: 'Central Goods and Services Tax(CGST)',
      lockDate: '',
    },

    {
      mjrHead: '0006',
      descr: 'State Goods and Services Tax(SGST)',
      lockDate: '',
    },

    {
      mjrHead: '0008',
      descr: 'Integrated Goods and Services Tax(IGST)',
      lockDate: '',
    },

    {
      mjrHead: '0020',
      descr: 'Corporation Tax',
      lockDate: '',
    },

    {
      mjrHead: '0021',
      descr: 'Taxes on Income other than Corporation Tax',
      lockDate: '',
    },

  ];

  majorHeadRecSource = new MatTableDataSource<any>(this.rec_Data);



  // Payment
  majorheadpayColumns: string[] = [
    'select',
    'mjrHead',
    'descr',
    'lockDate',
  ];

  pay_Data: FreezAccount[] = [
    {
      mjrHead: '2011',
      descr: 'State Legislature',
      lockDate: '',
    },

    {
      mjrHead: '2012',
      descr: 'Governor',
      lockDate: '',
    },

    {
      mjrHead: '2013',
      descr: 'Council of Ministers',
      lockDate: '',
    },

    {
      mjrHead: '2014',
      descr: 'Administration of Justice',
      lockDate: '',
    },

    {
      mjrHead: '2015',
      descr: 'Elections',
      lockDate: '',
    },

  ];

  majorHeadPaySource = new MatTableDataSource<any>(this.pay_Data);
  // FormGroup
  freexAcForm: FormGroup;
  // Date
  todayDate = Date.now();
  selection = new SelectionModel(true, []);

  constructor(
    private fb: FormBuilder,
    private router: Router, private dialog: MatDialog
  ) { }
  directiveObject = new PaoDirectives(this.router, this.dialog);
  accont_type_list: ListValue[] = [
    { value: '1', viewValue: 'Payment' },
    { value: '2', viewValue: 'Receipt' }
  ];


  majorHead_list: ListValue[] = [
    { value: '2251 : Secretariat-Social Services', viewValue: '2251 : Secretariat-Social Services' },
    { value: '2049 : Interest Payments', viewValue: '2049 : Interest Payments' },
    { value: '2215 : Water Supply and Sanitation', viewValue: '2215 : Water Supply and Sanitation' },
    { value: '3435 : Ecology and Environment', viewValue: '3435 : Ecology and Environment' },
    { value: '4217 : Capital Outlay on Urban Development', viewValue: '4217 : Capital Outlay on Urban Development' },
    { value: '2202 : General Education', viewValue: '2202 : General Education' },
  ];
  // Form Control
  freezeTypeCtrl: FormControl = new FormControl();
  majorHeadCodeCtrl: FormControl = new FormControl();


  ngOnInit() {
    this.freexAcFormData();
  }

  freexAcFormData() {
    this.freexAcForm = this.fb.group({
      FreezeType: [''],
      majorHeadCode: [''],
      lockdate: [''],
      disableSelectpay: [''],
      disableSelectrec: [''],
    });
  }

  type(majorHeadShow: { value: number; }) {
    if (majorHeadShow.value == 1) {
      this.majorHeadPay = true;
      this.majorHeadRec = false;

    } else if (majorHeadShow.value == 2) {
      this.majorHeadPay = false;
      this.majorHeadRec = true;
    }
  }


  onEdit(data, event): void {
    event.stopPropagation();
  }


  registerOnChange() { }

}
