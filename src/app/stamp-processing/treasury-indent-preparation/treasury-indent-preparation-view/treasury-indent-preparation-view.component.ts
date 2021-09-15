import { CommonListing, HeaderElement } from 'src/app/model/common-listing';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { ElementStIndentView, ElementFinalStIndentView, ElementStIndentViewNew, ElementFinalStIndentViewNew } from 'src/app/model/stamp-processing';
import { DataService } from 'src/app/common/data.service';
import { HistoryIndentConsolidationPopupComponent } from '../../indent-consolidation/history-indent-consolidation-popup/history-indent-consolidation-popup.component';
import { StampProcessingDirectives } from 'src/app/common/directive/stamp-processing-directive';


const ELEMENT_DATA: ElementStIndentViewNew[] = [
  {
    checkbox: true,
    denominationValue: '-',
    stock: '5',
    denominationCode: '4',
    qtySold: '4',
    closeBal: '2',
    qtyDue: '2',
    qtyReq: '',
    qtyApp: '5',
    qtyRequired: '',
    qtyApprScr: '',
    stampInEachSheet: '1',
  }
];

const ELEMENT_DATA2: ElementStIndentViewNew[] = [
  {
    checkbox: true,
    denominationValue: '100',
    stock: '5',
    denominationCode: '4',
    qtySold: '4',
    closeBal: '2',
    qtyDue: '2',
    qtyReq: '',
    qtyApp: '5',
    qtyRequired: '',
    qtyApprScr: '',
    stampInEachSheet: '1',
  }
];
const ELEMENT_DATA3: ElementStIndentViewNew[] = [
  {
    checkbox: true,
    denominationValue: '1',
    stock: '0',
    denominationCode: '0',
    qtySold: '0',
    closeBal: '0',
    qtyDue: '0',
    qtyReq: '',
    qtyApp: '0',
    qtyRequired: '',
    qtyApprScr: '',
    stampInEachSheet: '1',
  },
  {
    checkbox: true,
    denominationValue: '2',
    stock: '4',
    denominationCode: '4',
    qtySold: '3',
    closeBal: '1',
    qtyDue: '1',
    qtyReq: '',
    qtyApp: '4',
    qtyRequired: '',
    qtyApprScr: '',
    stampInEachSheet: '2',
  },
  {
    checkbox: true,
    denominationValue: '5',
    stock: '6',
    denominationCode: '4',
    qtySold: '3',
    closeBal: '3',
    qtyDue: '0',
    qtyReq: '',
    qtyApp: '2',
    qtyRequired: '',
    qtyApprScr: '',
    stampInEachSheet: '4',
  },
  {
    checkbox: true,
    denominationValue: '10',
    stock: '0',
    denominationCode: '0',
    qtySold: '0',
    closeBal: '0',
    qtyDue: '0',
    qtyReq: '',
    qtyApp: '0',
    qtyRequired: '',
    qtyApprScr: '',
    stampInEachSheet: '10',
  },
  {
    checkbox: false,
    denominationValue: '20',
    stock: '5',
    denominationCode: '3',
    qtySold: '5',
    closeBal: '3',
    qtyDue: '2',
    qtyReq: '',
    qtyApp: '1',
    qtyRequired: '',
    qtyApprScr: '',
    stampInEachSheet: '20',
  }
];
// Final Table Sources
const ELEMENT_FINAL2: ElementFinalStIndentViewNew[] = [
  {
    typeOfStamp: 'Agreement', denominationValue: '100', stock: '5', denominationCode: '4', supply: '4', qtySold: '4',
    closeBal: '2', qtyDue: '2', qtyReq: '5', qtyApp: '5', qtyRequired: '3', qtyApprScr: '3', stampInEachSheet: '1',
  }
];
const ELEMENT_FINAL3: ElementFinalStIndentViewNew[] = [
  {
    typeOfStamp: 'Court Fee Label', denominationValue: '1', stock: '0', denominationCode: '0', supply: '4', qtySold: '0',
    closeBal: '0', qtyDue: '0', qtyReq: '7', qtyApp: '0', qtyRequired: '6', qtyApprScr: '6', stampInEachSheet: '1',
  },
  {
    typeOfStamp: 'Court Fee Label', denominationValue: '2', stock: '4', denominationCode: '4', supply: '4', qtySold: '3',
    closeBal: '1', qtyDue: '1', qtyReq: '8', qtyApp: '4', qtyRequired: '6', qtyApprScr: '6', stampInEachSheet: '2',
  },
  {
    typeOfStamp: 'Court Fee Label', denominationValue: '5', stock: '6', denominationCode: '4', supply: '4', qtySold: '3',
    closeBal: '3', qtyDue: '0', qtyReq: '6', qtyApp: '2', qtyRequired: '5', qtyApprScr: '5', stampInEachSheet: '4',
  },
  {
    typeOfStamp: 'Court Fee Label', denominationValue: '10', stock: '0', denominationCode: '0', supply: '4', qtySold: '0',
    closeBal: '0', qtyDue: '0', qtyReq: '6', qtyApp: '0', qtyRequired: '4', qtyApprScr: '4', stampInEachSheet: '10',
  },
];
@Component({
  selector: 'app-treasury-indent-preparation-view',
  templateUrl: './treasury-indent-preparation-view.component.html',
  styleUrls: ['./treasury-indent-preparation-view.component.css']
})
export class TreasuryIndentPreparationViewComponent implements OnInit {

  headerJso: HeaderElement[] = [
    { label: 'Financial Year', value: '2020-2021' },
    { label: 'Type of Indent', value: 'Regular Indent' },
    { label: 'Gross Total of Indent', value: 'Rs. 54000' },
    { label: 'Name of Office', value: 'District Treasury Office, Gandhinagar' },
    { label: 'Duration of Indent', value: '4-May-2020 to 8-Nov-2020' },
    { label: 'Date of Indent', value: '3-Apr-2020' },
  ];
  attachmentType_list: any[];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  dataSource2 = new MatTableDataSource(ELEMENT_DATA2);
  dataSource3 = new MatTableDataSource(ELEMENT_DATA3);
  dataSourceFinal2 = new MatTableDataSource(ELEMENT_FINAL2);
  dataSourceFinal3 = new MatTableDataSource(ELEMENT_FINAL3);
  dataSourceFinalHeading = [];
  displayedColumns: string[] = ['position', 'checkbox', 'denominationValue', 'stock',
    'supplyReceived', 'qtySold', 'closingBal', 'qtyDue',
    'qtyRequired', 'qtyApprScr', 'amount'];
  displayFinal: string[] = ['position', 'typeOfStamp', 'denominationValue', 'stock',
    'supplyReceived', 'qtySold', 'closingBal', 'qtyDue',
    'qtyRequired', 'qtyApprScr', 'amount'];

  date: any = new Date();
  intendDate = '04-Apr-2020';
  intendNumber = '51/00057/072019/23';
  lastIntendDate = '04-Apr-2020';
  fromDateVal = '05-Apr-2020';
  toDateVal = '20-Apr-2020';
  treasuryVal: string;
  data;
  isView = false;
  stampVal: string;

  onAdd = false;
  onAdd2 = false;
  onAdd3 = false;
  onAdd4 = false;
  onAdd5 = false;
  onAdd6 = false;
  onAdd7 = false;
  onAdd8 = false;
  onAdd9 = false;
  onAdd10 = false;
  onAdd11 = false;
  onAdd12 = false;
  onCheck = false;
  onCheck2 = false;
  onCheck3 = false;
  showSubTre = false;

  directiveObject = new StampProcessingDirectives(this.router, this.dialog);
  constructor(private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog,
    private dataService: DataService) {
    this.data = dataService.getOption();
  }

  ngOnInit() {
    if (this.data['fromStampIndentPreparationView']) {
      if (this.data['fromStampIndentPreparationView'] === 'viewMode') {
        this.isView = true;
        this.dataService.setOption('fromStampIndentPreparationView', '');
        this.attachmentType_list = [{
          type: 'stamp-view',
          attachmentType: 'Supporting document',
        }];
      } else {
        this.attachmentType_list = [
          { value: '1', viewValue: 'Supporting document' },
          { value: '2', viewValue: 'Sanction Order' },
          { value: '3', viewValue: 'Others' },
        ];
        this.isView = false;
      }
    } else {
      this.attachmentType_list = [
        { value: '1', viewValue: 'Supporting document' },
        { value: '2', viewValue: 'Sanction Order' },
        { value: '3', viewValue: 'Others' },
      ];
      this.isView = false;
    }
  }
  gotoListing() {
    this.router.navigate(['./stamp-processing/stamp-indent-preparation-list']);
  }
  calcstockNet(): any {
    let sum = 0
    this.onAdd2 ? this.dataSourceFinal2.data.forEach((element) => { sum = sum + Number(element.stock); }) : sum = sum;
    this.onAdd3 ? this.dataSourceFinal3.data.forEach((element) => { sum = sum + Number(element.stock); }) : sum = sum;

    // return sum !== 0 ? sum : '';
    return sum;
  }
  calcsupplyReceivedNet(): any {
    let sum = 0;
    this.onAdd2 ? this.dataSourceFinal2.data.forEach((element) => { sum = sum + Number(element.supply); }) : sum = sum;
    this.onAdd3 ? this.dataSourceFinal3.data.forEach((element) => { sum = sum + Number(element.supply); }) : sum = sum;

    // return sum !== 0 ? sum : '';
    return sum;
  }
  calcqtySoldNet(): any {
    let sum = 0;
    this.onAdd2 ? this.dataSourceFinal2.data.forEach((element) => { sum = sum + Number(element.qtySold); }) : sum = sum;
    this.onAdd3 ? this.dataSourceFinal3.data.forEach((element) => { sum = sum + Number(element.qtySold); }) : sum = sum;

    // return sum !== 0 ? sum : '';
    return sum;
  }
  calcclosingBalNet(): any {
    let sum = 0;
    this.onAdd2 ? this.dataSourceFinal2.data.forEach((element) => { sum = sum + Number(element.closeBal); }) : sum = sum;
    this.onAdd3 ? this.dataSourceFinal3.data.forEach((element) => { sum = sum + Number(element.closeBal); }) : sum = sum;

    // return sum !== 0 ? sum : '';
    return sum;
  }
  calcqtyDueNet(): any {
    let sum = 0;
    this.onAdd2 ? this.dataSourceFinal2.data.forEach((element) => { sum = sum + Number(element.qtyDue); }) : sum = sum;
    this.onAdd3 ? this.dataSourceFinal3.data.forEach((element) => { sum = sum + Number(element.qtyDue); }) : sum = sum;

    // return sum !== 0 ? sum : '';
    return sum;
  }
  calcqtyApprovedNet(): any {
    let sum = 0;
    this.onAdd2 ? this.dataSourceFinal2.data.forEach((element) => { sum = sum + Number(element.qtyApp); }) : sum = sum;
    this.onAdd3 ? this.dataSourceFinal3.data.forEach((element) => { sum = sum + Number(element.qtyApp); }) : sum = sum;

    // return sum !== 0 ? sum : '';
    return sum;
  }
  calcQtyReqNet(): any {
    let sum = 0;
    this.onAdd2 ? this.dataSourceFinal2.data.forEach((element) => { sum = sum + Number(element.qtyRequired); }) : sum = sum;
    this.onAdd3 ? this.dataSourceFinal3.data.forEach((element) => { sum = sum + Number(element.qtyRequired); }) : sum = sum;

    // return sum !== 0 ? sum : '';
    return sum;
  }
  calcQtyApprScrNet(): any {
    let sum = 0;
    this.onAdd2 ? this.dataSourceFinal2.data.forEach((element) => { sum = sum + Number(element.qtyApprScr); }) : sum = sum;
    this.onAdd3 ? this.dataSourceFinal3.data.forEach((element) => { sum = sum + Number(element.qtyApprScr); }) : sum = sum;

    // return sum !== 0 ? sum : '';
    return sum;
  }
  // Agreement
  stock2(): any {
    let sum = 0;
    this.dataSourceFinal2.data.forEach((element) => { sum = sum + Number(element.stock); });

    return sum !== 0 ? sum : '';
  }
  supplyReceived2(): any {
    let sum = 0;
    this.dataSourceFinal2.data.forEach((element) => { sum = sum + Number(element.supply); });

    return sum !== 0 ? sum : '';
  }
  qtySold2(): any {
    let sum = 0;
    this.dataSourceFinal2.data.forEach((element) => { sum = sum + Number(element.qtySold); });

    return sum !== 0 ? sum : '';
  }
  closingBal2(): any {
    let sum = 0;
    this.dataSourceFinal2.data.forEach((element) => { sum = sum + Number(element.closeBal); });

    return sum !== 0 ? sum : '';
  }
  qtyDue2(): any {
    let sum = 0;
    this.dataSourceFinal2.data.forEach((element) => { sum = sum + Number(element.qtyDue); });

    return sum !== 0 ? sum : '';
  }
  qtyApproved2(): any {
    let sum = 0;
    this.dataSourceFinal2.data.forEach((element) => { sum = sum + Number(element.qtyApp); });

    return sum !== 0 ? sum : '';
  }
  calcQtyReq2(): any {
    let sum = 0;
    this.dataSourceFinal2.data.forEach((element) => { sum = sum + Number(element.qtyRequired); });

    return sum !== 0 ? sum : '';
  }
  calcQtyApprScr2(): any {
    let sum = 0;
    this.dataSourceFinal2.data.forEach((element) => { sum = sum + Number(element.qtyApprScr); });

    return sum !== 0 ? sum : '';
  }
  // Court Fee Label
  stock3(): any {
    let sum = 0;
    this.dataSourceFinal3.data.forEach((element) => { sum = sum + Number(element.stock); });

    return sum !== 0 ? sum : '';
  }
  supplyReceived3(): any {
    let sum = 0;
    this.dataSourceFinal3.data.forEach((element) => { sum = sum + Number(element.supply); });

    return sum !== 0 ? sum : '';
  }
  qtySold3(): any {
    let sum = 0;
    this.dataSourceFinal3.data.forEach((element) => { sum = sum + Number(element.qtySold); });

    return sum !== 0 ? sum : '';
  }
  closingBal3(): any {
    let sum = 0;
    this.dataSourceFinal3.data.forEach((element) => { sum = sum + Number(element.closeBal); });

    return sum !== 0 ? sum : '';
  }
  qtyDue3(): any {
    let sum = 0;
    this.dataSourceFinal3.data.forEach((element) => { sum = sum + Number(element.qtyDue); });

    return sum !== 0 ? sum : '';
  }
  qtyApproved3(): any {
    let sum = 0;
    this.dataSourceFinal3.data.forEach((element) => { sum = sum + Number(element.qtyApp); });

    return sum !== 0 ? sum : '';
  }
  calcQtyReq3(): any {
    let sum = 0;
    this.dataSourceFinal3.data.forEach((element) => { sum = sum + Number(element.qtyRequired); });

    return sum !== 0 ? sum : '';
  }
  calcQtyApprScr3(): any {
    let sum = 0;
    this.dataSourceFinal3.data.forEach((element) => { sum = sum + Number(element.qtyApprScr); });

    return sum !== 0 ? sum : '';
  }
  openHistory(): void {

    const dialogRef = this.dialog.open(HistoryIndentConsolidationPopupComponent, {
      maxWidth: '400px',
      // data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      console.log(dialogResult);
    });
  }
}
