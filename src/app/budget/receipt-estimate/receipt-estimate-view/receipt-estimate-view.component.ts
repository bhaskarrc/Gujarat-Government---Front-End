import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { StandingChargeConsolidateHistoryComponent, ConfirmDialogModel } from '../../standing-charge-consolidation/standing-charge-consolidate-history/standing-charge-consolidate-history.component';

export interface ReceiptElement {
  majorHead: string | '';
  subMajorHead: string | '';
  minorHead: number | '';
  subHead: string | '';
  detailHead: string | '';
  beReceipt1: number | '';
  beDisbursement1: number | '';
  beReceipt2: number | '';
  beDisbursement2: number | '';
  beReceipt3: number | '';
  beDisbursement3: number | '';
  thirdLastYearReceipt: number | '';
  secondLastYearReceipt: number | '';
  lastYearReceipt: number | '';
  thirdLastYearDisbursement: number | '';
  secondLastYearDisbursement: number | '';
  lastYearDisbursement: number | '';
  beReceipt: number | '';
  beDisbursement: number | '';
  hodAmountReceipt: number | '';
  hodAmountDisbursement: number | '';
  remarks: string | '';
  deductRefundMapping: number | '';
}

export interface HeaderElement {
  label: string | '';
  value: string | '';
}

const ELEMENT_DATA: any[] = [
  {
    majorHead: '0020',
    submajortooltip: 'Secretariat-Economic Services',
    minortooltip: 'Secretariat',
    detailetooltip: 'AGR-15 Information & Technology',
    subtooltip: 'Agricultural and Co-operation Department',
    subMajorHead: '00',
    minorHead: 901,
    subHead: '00',
    detailHead: '00',
    beReceipt1: 200,
    beDisbursement1: 500,
    beReceipt2: 200,
    beDisbursement2: 360,
    beReceipt3: 100,
    beDisbursement3: 500,
    thirdLastYearReceipt: 457,
    secondLastYearReceipt: 789,
    lastYearReceipt: 475,
    thirdLastYearDisbursement: '',
    secondLastYearDisbursement: '',
    lastYearDisbursement: 452,
    beReceipt: 500.1,
    beDisbursement: 100.01,
    hodAmountReceipt: 120.11,
    hodAmountDisbursement: 145.25,
    remarks: '',
    deductRefundMapping: 120.1
  },
  {
    majorHead: '0020',
    submajortooltip: 'Secretariat-Economic Services',
    minortooltip: 'Secretariat',
    detailetooltip: 'AGR-15 Information & Technology',
    subtooltip: 'Agricultural and Co-operation Department',
    subMajorHead: '00',
    minorHead: 901,
    subHead: '90',
    detailHead: '00',
    beReceipt1: 200,
    beDisbursement1: 500,
    beReceipt2: 450,
    beDisbursement2: 380,
    beReceipt3: 100,
    beDisbursement3: 300,
    thirdLastYearReceipt: 457,
    secondLastYearReceipt: 789,
    lastYearReceipt: 475,
    thirdLastYearDisbursement: '',
    secondLastYearDisbursement: '',
    lastYearDisbursement: 452,
    beReceipt: 54.5,
    beDisbursement: 100.01,
    hodAmountReceipt: 120.11,
    hodAmountDisbursement: 145.25,
    remarks: '',
    deductRefundMapping: 120.1
  },
  {
    majorHead: '0020',
    submajortooltip: 'Secretariat-Economic Services',
    minortooltip: 'Secretariat',
    detailetooltip: 'AGR-15 Information & Technology',
    subtooltip: 'Agricultural and Co-operation Department',
    subMajorHead: '00',
    minorHead: 107,
    subHead: '01',
    detailHead: '00',
    beReceipt1: 200,
    beDisbursement1: 300,
    beReceipt2: 200,
    beDisbursement2: 460,
    beReceipt3: 150,
    beDisbursement3: 500,
    thirdLastYearReceipt: 457,
    secondLastYearReceipt: 789,
    lastYearReceipt: 475,
    thirdLastYearDisbursement: '',
    secondLastYearDisbursement: '',
    lastYearDisbursement: 452,
    beReceipt: 100.1,
    beDisbursement: 100.01,
    hodAmountReceipt: 120.11,
    hodAmountDisbursement: 145.25,
    remarks: '',
    deductRefundMapping: 120.1
  },
  {
    majorHead: '0020',
    submajortooltip: 'Secretariat-Economic Services',
    minortooltip: 'Secretariat',
    detailetooltip: 'AGR-15 Information & Technology',
    subtooltip: 'Agricultural and Co-operation Department',
    subMajorHead: '00',
    minorHead: 107,
    subHead: '02',
    detailHead: '00',
    beReceipt1: 200,
    beDisbursement1: 400,
    beReceipt2: 100,
    beDisbursement2: 650,
    beReceipt3: 200,
    beDisbursement3: 100,
    thirdLastYearReceipt: 457,
    secondLastYearReceipt: 789,
    lastYearReceipt: 475,
    thirdLastYearDisbursement: '',
    secondLastYearDisbursement: '',
    lastYearDisbursement: 452,
    beReceipt: 690.1,
    beDisbursement: 100.01,
    hodAmountReceipt: 120.11,
    hodAmountDisbursement: 145.25,
    remarks: '',
    deductRefundMapping: 120.1
  }
];

@Component({
  selector: 'app-receipt-estimate-view',
  templateUrl: './receipt-estimate-view.component.html',
  styleUrls: ['./receipt-estimate-view.component.css']
})
export class ReceiptEstimateViewComponent implements OnInit {
  date: any = new Date();
  headerJson: HeaderElement[] = [
    { label: 'Financial Year', value: '2020-2021' },
    { label: 'Department', value: 'Education Department' },
    { label: 'Branch Name', value: 'Budget' },
    { label: 'Estimation From', value: 'Director of Horticulture' },
    { label: 'Major Head', value: '0020 : Corporation Tax' },
    { label: 'Sector', value: 'A - Tax Revenue' },
    { label: 'Sub Sector', value: 'Taxes on Income and Expenditure' }
  ];

  selectedIndex: number;

  dataSource = new MatTableDataSource(ELEMENT_DATA);

  displayedColumns = [
    'majorHead',
    'subMajorHead',
    'minorHead',
    'subHead',
    'detailHead',

    'beReceipt1',
    'beDisbursement1',
    'beReceipt2',
    'beDisbursement2',
    'beReceipt3',
    'beDisbursement3',
    'beReceipt',
    'beDisbursement',
    'hodAmountReceipt',
    'hodAmountDisbursement',
    'remarks',
    'deductRefundMapping'
  ];

  // Attachments
  // tslint:disable-next-line:member-ordering
  brwoseData: any[] = [
    { attachmentType: 'Supporting Document', fileName: 'PAN.jpeg' },
    { attachmentType: 'Sanction Order', fileName: 'Sanction_Order.pdf' }
  ];
  // tslint:disable-next-line:member-ordering
  displayedBrowseColumns = ['position', 'attachmentType', 'fileName', 'action'];
  // tslint:disable-next-line:member-ordering
  dataSourceBrowse = new MatTableDataSource(this.brwoseData);



  constructor(private router: Router,
    public dialog: MatDialog ) { }


  ngOnInit() { }

  listing() {
    this.router.navigate(['/budget/receipt-estimate-list']);

  }
  openHistory(data) {
    data.isSelected = true;
    this.showHistoryDialog();
  }

  showHistoryDialog(): void {

    const dialogData = new ConfirmDialogModel();

    const dialogRef = this.dialog.open(StandingChargeConsolidateHistoryComponent, {
      maxWidth: '400px',
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      console.log(dialogResult);
    });
  }
  loadThirdLastYear() {
    const year: any[] = this.headerJson[0].value.split('-');
    return (
      (Number(year[0]) - 3).toString() + '-' + (Number(year[0]) - 2).toString()
    );
  }

  loadThirdLastYear1() {
    const year: any[] = this.headerJson[0].value.split('-');
    return (
      (Number(year[0]) - 4).toString() + '-' + (Number(year[0]) - 3).toString()
    );
  }

  loadSecondLastYear() {
    const year: any[] = this.headerJson[0].value.split('-');
    return (
      (Number(year[0]) - 2).toString() + '-' + (Number(year[0]) - 1).toString()
    );
  }

  loadLastYear() {
    const year: any[] = this.headerJson[0].value.split('-');
    return (
      (Number(year[0]) - 1).toString() + '-' + (Number(year[0]) - 0).toString()
    );
  }

  loadNextYear() {
    const year: any[] = this.headerJson[0].value.split('-');
    return (
      (Number(year[0]) - 0).toString() + '-' + (Number(year[0]) + 1).toString()
    );
  }

  loadNextYear1() {
    const year: any[] = this.headerJson[0].value.split('-');
    return (
      (Number(year[0]) - 1).toString() + '-' + (Number(year[0]) + 0).toString()
    );
  }

  loadCurrentYear() {
    return this.headerJson[0].value;
  }

  gotoListing() {
    this.router.navigate(['./budget/receipt-estimate-list']);
  }

  acc1617Recept(): number {
    let calcrecept201617 = 0;
    this.dataSource.data.forEach(element => {
      calcrecept201617 = calcrecept201617 + Number(element.beReceipt1);
    });
    return calcrecept201617;
  }

  acc1617Disbrusmnet(): number {
    let calcDEsbrustment201617 = 0;
    this.dataSource.data.forEach(element => {
      calcDEsbrustment201617 = calcDEsbrustment201617 + Number(element.beDisbursement1);
    });
    return calcDEsbrustment201617;
  }


  acc1718Recept(): number {
    let calcrecept201718 = 0;
    this.dataSource.data.forEach(element => {
      calcrecept201718 = calcrecept201718 + Number(element.beReceipt2);
    });
    return calcrecept201718;
  }

  acc1718Disbrusmnet(): number {
    let calcDEsbrustment201718 = 0;
    this.dataSource.data.forEach(element => {
      calcDEsbrustment201718 = calcDEsbrustment201718 + Number(element.beDisbursement2);
    });
    return calcDEsbrustment201718;
  }


  acc1819Recept(): number {
    let calcrecept201819 = 0;
    this.dataSource.data.forEach(element => {
      calcrecept201819 = calcrecept201819 + Number(element.beReceipt3);
    });
    return calcrecept201819;
  }

  acc1819Disbrusmnet(): number {
    let calcDEsbrustment201819 = 0;
    this.dataSource.data.forEach(element => {
      calcDEsbrustment201819 = calcDEsbrustment201819 + Number(element.beDisbursement3);
    });
    return calcDEsbrustment201819;
  }

  beRecept(): number {
    let calcreceptbe = 0;
    this.dataSource.data.forEach(element => {
      calcreceptbe = calcreceptbe + Number(element.beReceipt);
    });
    return calcreceptbe;
  }

  beDisbrusmnet(): number {
    let calcDEsbrustmentbe = 0;
    this.dataSource.data.forEach(element => {
      calcDEsbrustmentbe = calcDEsbrustmentbe + Number(element.beDisbursement);
    });
    return calcDEsbrustmentbe;
  }

  hodRecept(): number {
    let calcreceptbe = 0;
    this.dataSource.data.forEach(element => {
      calcreceptbe = calcreceptbe + Number(element.hodAmountReceipt);
    });
    return calcreceptbe;
  }

  hodDisbrusmnet(): number {
    let calcDEsbrustmenthod = 0;
    this.dataSource.data.forEach(element => {
      calcDEsbrustmenthod = calcDEsbrustmenthod + Number(element.hodAmountDisbursement);
    });
    return calcDEsbrustmenthod;
  }
}
