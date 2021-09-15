
import { CommonListing, HeaderElement } from 'src/app/model/common-listing';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';

import { SaveConfirmCommonDialogComponent } from '../../save-confirm-common-dialog/save-confirm-common-dialog.component';
import { CloseConfirmCommonDialogComponent } from '../../close-confirm-common-dialog/close-confirm-common-dialog.component';
import { stampProcessMessage } from 'src/app/common/error-message/common-message.constants';
import { ElementIndCon } from 'src/app/model/stamp-processing';
import { StampProcessingDirectives } from 'src/app/common/directive/stamp-processing-directive';
import { HistoryButtonPopupComponent } from '../../history-button-popup/history-button-popup.component';
import { HistoryIndentConsolidationPopupComponent } from '../history-indent-consolidation-popup/history-indent-consolidation-popup.component';
import { DataService } from 'src/app/common/data.service';




const ELEMENT_DATA: ElementIndCon[] = [
  {

    denomination: '100',
    denominationCode: '1.200',
    lastIndentStock: '100',
    supplyPreviousIndent: '70',
    quantitySold: '50',
    currentClosingBalance: '50',
    dueQuantity: '120',
    quantityRequired: '60',
    qtyApprScr: '',
    quantityApproved: '45',
    amount: '',
  },
];

const ELEMENT_DATA1: ElementIndCon[] = [
  {

    denomination: '1',
    denominationCode: '1.200',
    lastIndentStock: '100',
    supplyPreviousIndent: '70',
    quantitySold: '50',
    currentClosingBalance: '50',
    dueQuantity: '120',
    quantityRequired: '60',
    qtyApprScr: '',
    quantityApproved: '45',
    amount: '',
  },
  {

    denomination: '10',
    denominationCode: '2.180',
    lastIndentStock: '1000',
    supplyPreviousIndent: '450',
    quantitySold: '566',
    currentClosingBalance: '450',
    dueQuantity: '200',
    quantityRequired: '789',
    qtyApprScr: '',
    quantityApproved: '756',
    amount: '',
  },
];

const ELEMENT_DATA2: ElementIndCon[] = [
  {

    denomination: '5',
    denominationCode: '1.200',
    lastIndentStock: '100',
    supplyPreviousIndent: '70',
    quantitySold: '50',
    currentClosingBalance: '50',
    dueQuantity: '120',
    quantityRequired: '60',
    qtyApprScr: '',
    quantityApproved: '45',
    amount: '',
  },
];
const ELEMENT_DATA3: ElementIndCon[] = [
  {

    denomination: '1',
    denominationCode: '1.200',
    lastIndentStock: '100',
    supplyPreviousIndent: '70',
    quantitySold: '50',
    currentClosingBalance: '50',
    dueQuantity: '120',
    quantityRequired: '60',
    qtyApprScr: '',
    quantityApproved: '45',
    amount: '',
  },
  {

    denomination: '5',
    denominationCode: '2.180',
    lastIndentStock: '1000',
    supplyPreviousIndent: '450',
    quantitySold: '566',
    currentClosingBalance: '450',
    dueQuantity: '200',
    quantityRequired: '789',
    qtyApprScr: '',
    quantityApproved: '756',
    amount: '',
  },
];




@Component({
  selector: 'app-indent-consolidated-view',
  templateUrl: './indent-consolidated-view.component.html',
  styleUrls: ['./indent-consolidated-view.component.css']
})
export class IndentConsolidatedViewComponent implements OnInit {
  // Info Section
  headerJson: HeaderElement[] = [
    { label: 'Financial Year', value: '2020-2021' },
    { label: 'Date of Indent Consolidation', value: '15-Oct-2018' },
    { label: 'Indent Number', value: '51/00057/072019/23' },
    { label: 'Indent Duration', value: '01-Jul-2019 to 31-Dec-2019' },
    { label: 'Type of Indent', value: 'Regular Indent' },
    { label: 'Date of Last Consoldiated Indent', value: '21-Mar-2019' },
    { label: 'Gross Total of Indent', value: 'Rs. 54000' },
  ];
  attachmentType_list: any[];

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  dataSource1 = new MatTableDataSource(ELEMENT_DATA1);
  dataSource2 = new MatTableDataSource(ELEMENT_DATA2);
  dataSource3 = new MatTableDataSource(ELEMENT_DATA3);

  displayedColumns: string[] = ['position', 'denomination', 'lastIndentStock',
    'supplyPreviousIndent', 'quantitySold', 'currentClosingBalance', 'dueQuantity', 'quantityRequired', 'qtyApprScr', 'amount'];

  errorMessages = stampProcessMessage;
  data;
  isView = false;
  stampMasterStoForm: FormGroup;
  date: any = new Date();
  tofficeVal = 'District Treasury Office, Ahmedabad';
  directiveObject = new StampProcessingDirectives(this.router, this.dialog);

  constructor(private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog,
    private dataService: DataService) {
    this.data = dataService.getOption();
  }

  ngOnInit() {
    if (this.data['fromIndentConsolidationList']) {
      if (this.data['fromIndentConsolidationList'] === 'viewMode') {
        this.isView = true;
        this.dataService.setOption('fromIndentConsolidationList', '');
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
  openHistory(): void {

    // const dialogData = new any();

    const dialogRef = this.dialog.open(HistoryIndentConsolidationPopupComponent, {
      maxWidth: '400px',
      // data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      console.log(dialogResult);
    });
  }
  calcQtyApprScr1(): any {
    let sum = 0;
    this.dataSource.data.forEach((element) => { sum = sum + Number(element.qtyApprScr); });

    return sum !== 0 ? sum : '';
  }
  calcQtyApprScr2(): any {
    let sum = 0;
    this.dataSource1.data.forEach((element) => { sum = sum + Number(element.qtyApprScr); });

    return sum !== 0 ? sum : '';
  }
  calcQtyApprScr3(): any {
    let sum = 0;
    this.dataSource2.data.forEach((element) => { sum = sum + Number(element.qtyApprScr); });

    return sum !== 0 ? sum : '';
  }
  calcQtyApprScr4(): any {
    let sum = 0;
    this.dataSource3.data.forEach((element) => { sum = sum + Number(element.qtyApprScr); });

    return sum !== 0 ? sum : '';
  }
  calcqtyApprScrNet() {
    let sum = 0;
    this.dataSource.data.forEach((element) => { sum = sum + Number(element.qtyApprScr); });
    this.dataSource1.data.forEach((element) => { sum = sum + Number(element.qtyApprScr); });
    this.dataSource2.data.forEach((element) => { sum = sum + Number(element.qtyApprScr); });
    this.dataSource3.data.forEach((element) => { sum = sum + Number(element.qtyApprScr); });
    return sum !== 0 ? sum : '';
  }

}


