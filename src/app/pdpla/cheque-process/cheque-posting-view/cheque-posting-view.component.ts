import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { pdplaMessage } from 'src/app/common/error-message/common-message.constants';
import { SelectionModel } from '@angular/cdk/collections';
import { ChequeView, ListValue } from 'src/app/model/pdpla';

@Component({
  selector: 'app-cheque-posting-view',
  templateUrl: './cheque-posting-view.component.html',
  styleUrls: ['./cheque-posting-view.component.css'],
})
export class ChequePostingViewComponent implements OnInit {
  // Date
  todayDate = Date.now();
  initiatiomdate = new Date(new Date());
  // Variable
  selectedIndex: number;
  selection = new SelectionModel<any>(true, []);
  errorMessages = pdplaMessage;
  // Form Group
  pdplaform: FormGroup;

  constructor(
    private fb: FormBuilder,
    private el: ElementRef,
    private router: Router,
    public dialog: MatDialog
  ) { }

  cheque_View_data: ChequeView[] = [
    {
      payiName: 'Mr AB',
      checkNo: '584672',
      pdplaAc: 'GSRTC',
      pdplaAcName: 'Mr ABC',
      chequDate: '08-May-2015',
      camt: '50000.00',
      transferType: 'Adjustment',
      intTc: 'No',
    },

    {
      payiName: 'Mr xyz',
      checkNo: 'nps-584672',
      pdplaAc: 'GSRTC',
      pdplaAcName: 'Mr ABC',
      chequDate: '16-Nov-2019',
      camt: '2000.00',
      transferType: 'Cash',
      intTc: 'No',
    },
  ];


  dataSourcechequeView = new MatTableDataSource<ChequeView>(
    this.cheque_View_data
  );

  displayedColumnschequeView: any[] = [
    'position',
    'pdplaAc',
    'pdplaAcNmae',
    'payiName',
    'checkNo',
    'chequDate',
    'camt',
    'transferType',
    'intTc',
    'action'
  ];

  majorHead_list: ListValue[] = [
    {
      value: '2251 : Secretariat-Social Services',
      viewValue: '2251 : Secretariat-Social Services',
    },
    {
      value: '2049 : Interest Payments',
      viewValue: '2049 : Interest Payments',
    },
    {
      value: '2215 : Water Supply and Sanitation',
      viewValue: '2215 : Water Supply and Sanitation',
    },
    {
      value: '3435 : Ecology and Environment',
      viewValue: '3435 : Ecology and Environment',
    },
    {
      value: '4217 : Capital Outlay on Urban Development',
      viewValue: '4217 : Capital Outlay on Urban Development',
    },
    {
      value: '2202 : General Education',
      viewValue: '2202 : General Education',
    },
  ];

  majorCtrl: FormControl = new FormControl();

  details_list: ListValue[] = [
    { value: '1', viewValue: 'Select' },
    { value: '2', viewValue: 'Accepted' },
    { value: '3', viewValue: 'Rejected' },
  ];

  detailPosting: FormControl = new FormControl();

  transition_list: ListValue[] = [
    { value: '1', viewValue: 'Cash' },
    { value: '2', viewValue: 'TC' },
    { value: '3', viewValue: 'Adjustment' }
  ];

  trandCtrl: FormControl = new FormControl();

  TC_list: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
  ];

  interTcCtrl: FormControl = new FormControl();

  ngOnInit() {
    this.pdplaform = this.fb.group({
      // formfields
      majorHead: [''],
      detailPosting: [''],
      transType: [''],
      interTc: [''],
      amt: [''],
      paymentDate: [''],
      chequeNo: [''],
      payeeName: [''],
      pdplaAccNo: [''],

    });
  }

  // deletes record
  deleteEntry(index) {
    this.dataSourcechequeView.data.splice(index, 1);
    this.dataSourcechequeView = new MatTableDataSource(this.dataSourcechequeView.data);
  }

}
