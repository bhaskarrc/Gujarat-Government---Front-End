import { ListValue } from './../../../model/common-grant';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { pdplaMessage } from 'src/app/common/error-message/common-message.constants';
import { SelectionModel } from '@angular/cdk/collections';
import { CreateasplitListChallan } from 'src/app/model/pdpla';



@Component({
  selector: 'app-challan-posting',
  templateUrl: './challan-posting.component.html',
  styleUrls: ['./challan-posting.component.css']
})
export class ChallanPostingComponent implements OnInit {
  // Date
  todayDate = Date.now();
  initiatiomdate = new Date();
  // Variable
  selectedIndex: number;
  selection = new SelectionModel<any>(true, []);
  errorMessages = pdplaMessage;
  // Form Group
  pdplaform: FormGroup;

  constructor(private fb: FormBuilder, public dialog: MatDialog) {

  }

  Element_Data: CreateasplitListChallan[] = [
    {

      srNo: '192000001',
      payiName: 'Mr AB',
      majHead: '8448',
      pdplaAc: 'GSRTC',
      pdplaAcNmae: 'Mr ABC',
      challanNO: '584672',
      challanDate: '08-May-2015',
      challanAmt: '50000.00',
      tc: '0.00',

    },
  ];
  dataSourcesplitProcess = new MatTableDataSource<CreateasplitListChallan>(this.Element_Data);
  displayedColumnssplitisting: any[] = [
    'srNo',
    'pdplaAc',
    'pdplaAcNmae',
    'payiName',
    'challanNO',
    'challanDate',
    'majHead',
    'challanAmt',
    'tc',
    'action',
  ];

  majorHead_list: ListValue[] = [
    { value: '2251 : Secretariat-Social Services', viewValue: '2251 : Secretariat-Social Services' },
    { value: '2049 : Interest Payments', viewValue: '2049 : Interest Payments' },
    { value: '2215 : Water Supply and Sanitation', viewValue: '2215 : Water Supply and Sanitation' },
    { value: '3435 : Ecology and Environment', viewValue: '3435 : Ecology and Environment' },
    { value: '4217 : Capital Outlay on Urban Development', viewValue: '4217 : Capital Outlay on Urban Development' },
    { value: '2202 : General Education', viewValue: '2202 : General Education' },
  ];

  majorCtrl: FormControl = new FormControl();

  ngOnInit() {
    this.pdplaform = this.fb.group({
      // formfields
      majorHead: [''],
      challanDate: [''],
      challanNo: [''],
      payeeName: [''],
      pdplaAccName: [''],
      pdplaAccNo: [''],
      tcAmt: [''],
      amt: [''],

    });
  }
}
