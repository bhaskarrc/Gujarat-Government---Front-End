import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { pdplaMessage } from 'src/app/common/error-message/common-message.constants';
import { SelectionModel } from '@angular/cdk/collections';
import { CreateasplitListCheque, ListValue } from 'src/app/model/pdpla';



@Component({
  selector: 'app-cheque-posting-listing',
  templateUrl: './cheque-posting-listing.component.html',
  styleUrls: ['./cheque-posting-listing.component.css']
})
export class ChequePostingListingComponent implements OnInit {
  // date
  todayDate = Date.now();
  initiatiomdate = new Date();
  // Variable
  selection = new SelectionModel<any>(true, []);
  errorMessages = pdplaMessage;
  selectedIndex: number;
  // Form COntrol
  pdplaform: FormGroup;

  constructor(private fb: FormBuilder, public dialog: MatDialog) {

  }

  Element_Data: CreateasplitListCheque[] = [
    {
      srNo: '192000001',
      pdplaAc: 'GSRTC',
      pdplaAcNmae: 'Mr ABC',
      payiName: 'Mr AB',
      majHead: '8443',
      checkNo: '584672',
      chequDate: '08-May-2015',
      camt: '50000.00',
      tc: '0.00',
    },
  ];
  dataSourcechequeListing = new MatTableDataSource<CreateasplitListCheque>(this.Element_Data);
  displayedColumnchequeList: any[] = [
    'srNo',
    'pdplaAc',
    'pdplaAcNmae',
    'payiName',
    'checkNo',
    'chequDate',
    'majHead',
    'camt',
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

  details_list: ListValue[] = [
    { value: '1', viewValue: 'Select' },
    { value: '2', viewValue: 'Accepted' },
    { value: '3', viewValue: 'Rejected' },
  ];

  detailPosting: FormControl = new FormControl();


  ngOnInit() {
    this.pdplaform = this.fb.group({
      // formfields
      majorHead: [''],
      detailPosting: [''],
      payeeName: [''],
      chequeNo: [''],
      pdplaAccNo: [''],
      pdplaName: [''],
      chequeDate: [''],
      amt: [''],
    });
  }
}
