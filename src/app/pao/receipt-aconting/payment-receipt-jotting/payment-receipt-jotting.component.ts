import { ListValue } from './../../../model/letter-of-credit';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { receptAccounting } from 'src/app/common/error-message/common-message.constants';
import { JottingData } from 'src/app/model/paoModel';

@Component({
  selector: 'app-payment-receipt-jotting',
  templateUrl: './payment-receipt-jotting.component.html',
  styleUrls: ['./payment-receipt-jotting.component.css']
})
export class PaymentReceiptJottingComponent implements OnInit {
  // table source
  jottongColumns: string[] = [
    'scrollDate',
    'mjrHead',
    'amt',
    'tcAmt',
    'pageNo',
    'noDoc',
    'action'

  ];

  jotting_Data: JottingData[] = [
    {
      scrollDate: '04-MAR-2020',
      mjrHead: '3451',
      amt: '500.00',
      tcAmt: '1000.00',
      pageNo: '20',
      noDoc: '5'
    },

  ];

  jottingDataSource = new MatTableDataSource<any>(this.jotting_Data);
  // Form Group
  paymentRceiptForm: FormGroup;
  // DAte
  todayDate = Date.now();
  today = new Date();
  // Variable
  isSearchJotting: Boolean = false;
  @Input() max: any;

  constructor(
    private fb: FormBuilder,
  ) {
    this.today.setDate(this.today.getDate());
  }

  errorMessages = receptAccounting;

  jottingType_list: ListValue[] = [
    { value: '1', viewValue: 'Payment' },
    { value: '2', viewValue: 'Receipt' }
  ];

  bank_list: ListValue[] = [
    { value: '1', viewValue: 'Bank Of Baroda' },
    { value: '2', viewValue: 'State Bank Of India' }
  ];
  // Form Control
  jottingCtrl: FormControl = new FormControl();
  banckCTRL: FormControl = new FormControl();

  ngOnInit() {
    this.paymentRceiptFormData();
  }

  paymentRceiptFormData() {
    this.paymentRceiptForm = this.fb.group({
      jottingType: [''],
      baneName: [''],
      banvkBranch: [''],
      pageNo: [''],
      majorHead: [''],
      amunt: [''],
      tc: [''],
      noDoc: [''],
      branchCode: ['']
    });
  }

  search() {
    this.isSearchJotting = true;
  }
  clearForm() {

  }
}
