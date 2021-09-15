import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

const ELEMENT_DATA: any[] = [
  {
    subMajorHead: '00', minoeHead: '090', subHead: '01', detaileHead: '00', objecthead: '0431',
    subMajorHeadToolTip: '00:Secretariat-Economic Services', minoeHeadToolTip: '090:Secretariat',
     subHeadToolTip: '01:Agricultural and Co-operation Department',
    detaileHeadToolTip: '00:AGR-15 Information & Technology', objectheadToolTip: '0431:National Mission on Oil seeds and Oil Palm (NMOOP)',
    accountReceipt: '200.00', accountReceipt1: '250.00', accountReceipt2: '251.00', accountDisbursement1: '356.00', accountDisbursement2: '457.00',
    accountDisbursement: '789.00', bReceipt: '21.00', bDisbursement: '25.00',
    pReceipt: '452.00', pDisbursement: '0.00', remarks: '', deduct: '500.00'
  },
  {
    subMajorHead: '00', minoeHead: '01', subHead: '01', detaileHead: '00', objecthead: '0331',
    subMajorHeadToolTip: '00:Crop Husbandry', minoeHeadToolTip: '01:IND-48 Government Presses',
    subHeadToolTip: '01:Direcorate of Agriculture',
     detaileHeadToolTip: '00:AGR-Renovation Of The Department', objectheadToolTip: '0331:National Mission for Sustainable',
    accountReceipt: '20.00', accountReceipt1: '25.00',
    accountReceipt2: '251.00', accountDisbursement1: '346.00', accountDisbursement2: '447.00',
    accountDisbursement: '749.00', bReceipt: '20.00', bDisbursement: '30.00',
    pReceipt: '442.00', pDisbursement: '0.00', remarks: '', deduct: '500.00'
  },
];

export interface HeaderElement {
  label: string | '';
  value: string | '';
}

@Component({
  selector: 'app-receipt-consolidate-view',
  templateUrl: './receipt-consolidate-view.component.html',
  styleUrls: ['./receipt-consolidate-view.component.css']
})
export class ReceiptConsolidateViewComponent implements OnInit {

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  displayedColumns = ['seno', 'subMajorHead', 'minoeHead', 'subHead', 'detaileHead', 'objecthead', 'accountReceipt', 'accountReceipt1',
    'accountReceipt2', 'accountDisbursement', 'accountDisbursement1', 'accountDisbursement2',
    'bReceipt', 'bDisbursement', 'pReceipt', 'pDisbursement', 'pReceiptfd', 'pDisbursementfd', 'deduct'];

  // Attachments
  // tslint:disable-next-line:member-ordering
  brwoseData: any[] = [
    { attachmentType: 'Supporting Document', fileName: 'PAN.jpeg' },
    { attachmentType: 'Sanction Order', fileName: 'Sanction Order.pdf' },
    // { attachmentType: 'Establishment', fileName: 'Establishment.pdf' },
    // { attachmentType: 'Rojmdar & Work charge', fileName: 'Rojmdar & Work charge.pdf' },
    // { attachmentType: 'Outsource', fileName: 'Outsource.pdf' },
    // { attachmentType: 'Leave Encashment', fileName: 'Leave Encashment.pdf' },
    { attachmentType: 'Other', fileName: 'Budget.pdf' },
  ];
  // tslint:disable-next-line:member-ordering
  displayedBrowseColumns = ['position', 'attachmentType', 'fileName', 'action'];
  // tslint:disable-next-line:member-ordering
  dataSourceBrowse = new MatTableDataSource(this.brwoseData);
  headerJson: HeaderElement[] = [
    { label: 'Name of Department', value: 'Agriculture , Famers welfare and Co-operation Department' },
    { label: 'Financial Year', value: '2019-2020' },
    { label: 'Major Head', value: '2205: Art and Culture' },
    { label: 'Sector', value: 'A-General Services' },
    { label: 'Sub Sector', value: '(a) Organs of State' },
    { label: 'Major Head Receipt Amount', value: '5000' },
    { label: 'Major Head Disbursement Amount', value: '1000' },
  ];
  date: any = new Date();
  constructor(private router:Router) {}

  ngOnInit() {
  }

  goToListing()
  {
    this.router.navigate(['./budget/receipt-consolidate-list'])
  }
  calcAccountReceipt() {
    let sum = 0;
      this.dataSource.data.forEach((element, index) => {
          sum =
          sum + Number(element.accountReceipt);
      });
      return  sum;
  }
  calcAccountReceipt1() {
    let sum = 0;
      this.dataSource.data.forEach((element, index) => {
          sum =
          sum + Number(element.accountReceipt1);
      });
      return  sum;
  }
  calcAccountReceipt2() {
    let sum = 0;
      this.dataSource.data.forEach((element, index) => {
          sum =
          sum + Number(element.accountReceipt2);
      });
      return  sum;
  }
  calcAccountDisbursement() {
    let sum = 0;
      this.dataSource.data.forEach((element, index) => {
          sum =
          sum + Number(element.accountDisbursement);
      });
      return  sum;
  }
  calcAccountDisbursement1() {
    let sum = 0;
      this.dataSource.data.forEach((element, index) => {
          sum =
          sum + Number(element.accountDisbursement1);
      });
      return  sum;
  }
  calcAccountDisbursement2() {
    let sum = 0;
      this.dataSource.data.forEach((element, index) => {
          sum =
          sum + Number(element.accountDisbursement2);
      });
      return  sum;
  }
  calcbReceipt() {
    let sum = 0;
      this.dataSource.data.forEach((element, index) => {
          sum =
          sum + Number(element.bReceipt);
      });
      return  sum;
  }
  calcbDisbursement() {
    let sum = 0;
      this.dataSource.data.forEach((element, index) => {
          sum =
          sum + Number(element.bDisbursement);
      });
      return  sum;
  }
  calcpReceipt() {
    let sum = 0;
      this.dataSource.data.forEach((element, index) => {
          sum =
          sum + Number(element.pReceipt);
      });
      return  sum;
  }
  calcpDisbursement() {
    let sum = 0;
      this.dataSource.data.forEach((element, index) => {
          sum =
          sum + Number(element.pDisbursement);
      });
      return  sum;
  }
  calcDeduct() {
    let sum = 0;
      this.dataSource.data.forEach((element, index) => {
          sum =
          sum + Number(element.deduct);
      });
      return  sum;
  }


}
