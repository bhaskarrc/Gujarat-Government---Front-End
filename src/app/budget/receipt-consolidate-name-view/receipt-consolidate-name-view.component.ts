import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';

import { Router, ActivatedRoute } from '@angular/router';
import { StandingChargeViewCommentsComponent, StadingChargeConfirmDialogComponent } from '../standing-charge/standalone-charge/standalone-charge.component';
import { ReceiptEstimateViewCommentsComponent, ReceiptEstimateConfirmDialogComponent } from '../receipt-estimate/receipt-estimates/receipt-estimates.component';


export interface StandingChargeElement {
  objecthead: string | '';
  thirdlastyear: number | '';
  secondlastyear: number | '';
  lastyear: number | '';
  currentyear: number | '';
  last8month: number | '';
  first4month: number | '';
  totalof8and4month: number | '';
  col6: number | '';
  col7: number | '';
  amountproposedbyHOD: number | '';
  hodProposedAmt: number | '';
  remarks: string | '';
  isBreakup: Boolean;
}

export interface StandingChargeElementRev {
  objecthead: string | '';
  thirdlastyear: number | '';
  secondlastyear: number | '';
  lastyear: number | '';
  currentyear: number | '';
  last8month: number | '';
  first4month: number | '';
  totalof8and4month: number | '';
  col6: number | '';
  col7: number | '';
  // amountproposedbyHOD: number | '';
  amountproposedbyDDO: number | '';
  hodProposedAmt: number | '';
  remarks: string | '';

}

export interface ObjectHeadBreakupElement {
  objecthead: string | '';
  thirdlastyear: number | '';
  secondlastyear: number | '';
  lastyear: number | '';
  currentyear: number | '';
  last8month: number | '';
  first4month: number | '';
  totalof8and4month: number | '';
  col6: number | '';
  col7: number | '';
  amountproposedbyHOD: number | '';
  remarks: string | '';
}
export interface DistrictElement {
  id: number;
  districtName: string;
  expendature: number;
  talukaexpendature: number;
  gramexpendature: number;
}

export interface DistrictElement1 {
  id: number;
  districtName: string;
  expendature: number | '';
  propsedAmount: number | '';


}


export interface HeaderElement {
  label: string | '';
  value: string | '';
}

const ELEMENT_DATA: any[] = [
  {
    subMajorHead: '00', minoeHead: '090', subHead: '01', detaileHead: '00', objecthead: '0431',
    subMajorHeadToolTip: '00:Secretariat-Economic Services', minoeHeadToolTip: '090:Secretariat',
     subHeadToolTip: '01:Agricultural and Co-operation Department',
    detaileHeadToolTip: '00:AGR-15 Information & Technology', objectheadToolTip: '0431:National Mission on Oil seeds and Oil Palm (NMOOP)',
    accountReceipt: '200.00', accountReceipt1: '250.00', accountReceipt2: '251.00',
     accountDisbursement1: '356.00', accountDisbursement2: '457.00',
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




@Component({
  selector: 'app-receipt-consolidate-name-view',
  templateUrl: './receipt-consolidate-name-view.component.html',
  styleUrls: ['./receipt-consolidate-name-view.component.css']
})
export class ReceiptConsolidateNameViewComponent implements OnInit {


  isBreakupVisible: Boolean = false;
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  displayedColumns = ['subMajorHead', 'minoeHead', 'subHead', 'detaileHead', 'objecthead', 'accountReceipt', 'accountReceipt1',
    'accountReceipt2', 'accountDisbursement', 'accountDisbursement1', 'accountDisbursement2',
    'bReceipt', 'bDisbursement', 'pReceipt', 'pDisbursement', 'remarks', 'deduct'];
  headerJson: HeaderElement[] = [
    { label: 'Financial Year', value: '2019-2020' },
    { label: 'HoD / CO Name', value: 'Registrar of Co-operative Societies' },
    { label: 'Major Head', value: '2205: Art and Culture' },
    { label: 'Sector', value: 'A-General Services' },
    { label: 'Sub Sector', value: '(a) Organs of State' },
    { label: 'Major Head Receipt Amount', value: '5000' },
    { label: 'Major Head Disbursement Amount', value: '1000' },
  ];


  attachmentSubTable = [
    {
      data: 'No of Post for Class 1',
      val1: '2',
      val1Edit: true,
      val2: '100.00',
      val2Edit: true,
      val3: 'No of Post for Class 1',
      val3Edit: false,
      val4: '3',
      val4Edit: true,
      val5: '300.00',
      val5Edit: true,
      extend: false
    },
    {
      data: 'No of Post for Class 2',
      val1: '1',
      val1Edit: true,
      val2: '100.00',
      val2Edit: true,
      val3: 'No of Post for Class 2',
      val3Edit: false,
      val4: '1',
      val4Edit: true,
      val5: '100.00',
      val5Edit: true,
      extend: false
    },
    {
      data: 'No of Post for Class 3',
      val1: '5',
      val1Edit: true,
      val2: '500.00',
      val2Edit: true,
      val3: 'No of Post for Class 3',
      val3Edit: false,
      val4: '5',
      val4Edit: true,
      val5: '500.00',
      val5Edit: true,
      extend: false
    },
    {
      data: 'No of Post for Class 4',
      val1: '6',
      val1Edit: true,
      val2: '600.00',
      val2Edit: true,
      val3: 'No of Post for Class 4',
      val3Edit: false,
      val4: '6',
      val4Edit: true,
      val5: '600.00',
      val5Edit: true,
      extend: false
    },
    {
      data: 'Fix Pay',
      val1: '8',
      val1Edit: true,
      val2: '800.00',
      val2Edit: true,
      val3: 'Fix Pay',
      val3Edit: false,
      val4: '8',
      val4Edit: true,
      val5: '800.00',
      val5Edit: true,
      extend: false
    },
    {
      data: 'Total',
      val1: '',
      val1Edit: false,
      val2: '',
      val2Edit: false,
      val3: 'Total',
      val3Edit: false,
      val4: '',
      val4Edit: false,
      val5: '',
      val5Edit: false,
      extend: false
    }
  ];

  stateColumns = [
    'position',
    'district',
    'propsedAmount',
  ];



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

  // tslint:disable-next-line:member-ordering
  date: any = new Date();
  // tslint:disable-next-line:member-ordering
  readOnlyDetailDataSource: any;

  table1 = true;
  table2 = false;
  grantInAid: Boolean;




  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.route.params.subscribe(resRoute => {
      if (resRoute.percentage) {
        this.dataSource.data.forEach(obj => {
          obj.hodProposedAmt = ((Number(obj.amountproposedbyHOD) * resRoute.percentage) / 100);
        });
      }
      if (resRoute.amount) {
        this.dataSource.data.forEach(obj => {
          obj.hodProposedAmt = ((Number(obj.amountproposedbyHOD) + (Number(resRoute.amount) / Number((obj.amountproposedbyHOD)))));
          // element.amountproposedbyHOD =  ((Number(element.amountproposedbyDDO) - Number(-Number (totalValue))));
        });
      }
    });


    this.calculateSubAttachmentValue();

  }


  calculateSubAttachmentValue() {
    this.attachmentSubTable[5].val1 = (
      Number(this.attachmentSubTable[0].val1) +
      Number(this.attachmentSubTable[1].val1) +
      Number(this.attachmentSubTable[2].val1) +
      Number(this.attachmentSubTable[3].val1) +
      Number(this.attachmentSubTable[4].val1)
    ).toString();
    this.attachmentSubTable[5].val2 = (
      Number(this.attachmentSubTable[0].val2) +
      Number(this.attachmentSubTable[1].val2) +
      Number(this.attachmentSubTable[2].val2) +
      Number(this.attachmentSubTable[3].val2) +
      Number(this.attachmentSubTable[4].val2)
    ).toFixed(2);
    this.attachmentSubTable[5].val4 = (
      Number(this.attachmentSubTable[0].val4) +
      Number(this.attachmentSubTable[1].val4) +
      Number(this.attachmentSubTable[2].val4) +
      Number(this.attachmentSubTable[3].val4) +
      Number(this.attachmentSubTable[4].val4)
    ).toString();
    this.attachmentSubTable[5].val5 = (
      Number(this.attachmentSubTable[0].val5) +
      Number(this.attachmentSubTable[1].val5) +
      Number(this.attachmentSubTable[2].val5) +
      Number(this.attachmentSubTable[3].val5) +
      Number(this.attachmentSubTable[4].val5)
    ).toFixed(2);
  }

  viewComments(): void {
    const dialogRef = this.dialog.open(ReceiptEstimateViewCommentsComponent, {
      width: '2700px',
      height: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'no') {
        console.log('The dialog was closed', result);
      } else if (result === 'yes') {
        console.log('The dialog was closed', result);
        this.showConfirmationPopup();
      }
    });
  }

  showConfirmationPopup() {
    const dialogRef = this.dialog.open(ReceiptEstimateConfirmDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'no') {
        console.log(result);
      } else if (result === 'save') {
        console.log(result);
      }
    });
  }

  goToListing() {
    this.router.navigate(['./budget/receipt-consolidate-list']);
  }

  goToHodCoList() {
    this.router.navigate(['./budget/hod-co-list']);
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
