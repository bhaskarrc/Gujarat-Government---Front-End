import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { pdplaMessage } from 'src/app/common/error-message/common-message.constants';
import { SelectionModel } from '@angular/cdk/collections';
import { ChallanPostingView } from 'src/app/model/pdpla';

const ELEMENT_DATA: any[] = [
  {
    pdplaAcNo: 'P040',
    payiName: 'Mr.ABC',
    challanN0: '32123',
    challanDate: '12-Apr-2020',
    camt: '2000.00',
    transferType: 'Cash',
    intTc: 'No',
    pdplaAcNmae: 'Mr ABC'
  },
];
@Component({
  selector: 'app-challan-posting-view',
  templateUrl: './challan-posting-view.component.html',
  styleUrls: ['./challan-posting-view.component.css']
})
export class ChallanPostingViewComponent implements OnInit {
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
    public dialog: MatDialog
  ) { }

  cheque_View_data: ChallanPostingView[] = [
    {
      pdplaAcNo: 'GSRTC',
      payiName: 'Mr.ABC',
      challanNo: '32123',
      challanDate: '12-Apr-2020',
      camt: '2000.00',
      transferType: 'Cash',
      intTc: 'No',
      pdplaAcNmae: 'Mr ABC',
    },
  ];


  dataSourceChallanPostingView = new MatTableDataSource<ChallanPostingView>(
    this.cheque_View_data
  );
  // tABLE soURCE
  displayedColumnschallanView: any[] = [
    'position',
    'pdplaAcNo',
    'pdplaAcNmae',
    'payiName',
    'challanN0',
    'challanDate',
    'camt',
    'transferType',
    'intTc',
    'action'
  ];

  majorHead_list: any[] = [
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

  details_list: any[] = [
    { value: '1', viewValue: 'Select' },
    { value: '2', viewValue: 'Accepted' },
    { value: '3', viewValue: 'Rejected' },
  ];

  detailPosting: FormControl = new FormControl();

  transition_list: any[] = [
    { value: '1', viewValue: 'Cash' },
    { value: '2', viewValue: 'TC' },
    { value: '3', viewValue: 'Adjustment' }
  ];

  trandCtrl: FormControl = new FormControl();

  TC_list: any[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
  ];

  interTcCtrl: FormControl = new FormControl();

  dataSourcechallanView = new MatTableDataSource<any>(ELEMENT_DATA);
  ngOnInit() {
    this.pdplaform = this.fb.group({
      // formfields
      majorHead: [''],
      detailPosting: [''],
      transType: [''],
      interTc: [''],
      pdplaAccName: [''],
      amt: [''],
      challanDate: [''],
      challanNo: [''],
      payeeName: [''],
      pdplaAccNo: [''],
    });
  }

}
