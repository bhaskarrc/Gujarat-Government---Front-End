import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { CloseConfirmCommonDialogComponent } from '../close-confirm-common-dialog/close-confirm-common-dialog.component';
import { SubmitConfirmCommonDialigComponent } from '../submit-confirm-common-dialig/submit-confirm-common-dialig.component';
import { stampProcessMessage } from 'src/app/common/error-message/common-message.constants';
import { ElementDoubleSingleManual, ElementDoubleSingleManualFinal, ElementDoubleSingleTo } from 'src/app/model/stamp-processing';
import { StampProcessingDirectives } from 'src/app/common/directive/stamp-processing-directive';
import { HistoryDoubleSinglePopupComponent } from './history-double-single-popup/history-double-single-popup.component';

// Listing table 1 data
const ELEMENT_DATA: ElementDoubleSingleTo[] = [
  {
    denomination: '1',
    availQty: '10',
    authQty: '8',
    qtyTransfer: '0',
    from: '-',
    to: '-',
    stampType: 'Court Fee Label',
    unitVal: '1.180',
    labelSheet: '180',
    stampNo: '12',
    sheetNo: '20',
    isDisable: true,
  },
  {
    denomination: '2',
    availQty: '9',
    authQty: '7',
    qtyTransfer: '0',
    from: '-',
    to: '-',
    stampType: 'Court Fee Label',
    unitVal: '2.140',
    labelSheet: '140',
    stampNo: '12',
    sheetNo: '20',
    isDisable: true,
  },
  {
    denomination: '5',
    availQty: '11',
    authQty: '10',
    qtyTransfer: '0',
    from: '-',
    to: '-',
    stampType: 'Court Fee Label',
    unitVal: '5.80',
    labelSheet: '80',
    stampNo: '12',
    sheetNo: '20',
    isDisable: true,
  },
];
const ELEMENT_DATA_Challan_Paper: ElementDoubleSingleTo[] = [
  {
    denomination: '10',
    availQty: '10',
    authQty: '10',
    qtyTransfer: '0',
    from: 'D-000001',
    to: 'D-000100',
    stampType: 'Court Fee Paper',
    unitVal: '10',
    labelSheet: '1',
    stampNo: '12',
    sheetNo: '20',
    isDisable: true,
  },
  {
    denomination: '20',
    availQty: '9',
    authQty: '0',
    qtyTransfer: '0',
    from: 'E-000001',
    to: 'E-000100',
    stampType: 'Court Fee Paper',
    unitVal: '20',
    labelSheet: '1',
    stampNo: '12',
    sheetNo: '20',
    isDisable: true,
  }
];
// Listing table 2 data
const ELEMENT_DATA2: ElementDoubleSingleTo[] = [
  {
    denomination: '1',
    availQty: '10',
    authQty: '8',
    qtyTransfer: '0',
    from: '-',
    to: '-',
    stampType: 'Revenue',
    unitVal: '1.140',
    labelSheet: '140',
    stampNo: '12',
    sheetNo: '20',
    isDisable: true,
  },
  {
    denomination: '5',
    availQty: '9',
    authQty: '7',
    qtyTransfer: '0',
    from: '-',
    to: '-',
    stampType: 'Revenue',
    unitVal: '5.180',
    labelSheet: '180',
    stampNo: '12',
    sheetNo: '20',
    isDisable: true,
  },
];

// Manual Mode Data


const ELEMENT_DATA_MAN: ElementDoubleSingleManual[] = [
  {
    checkbox: false,
    denomination: '5',
    availQty: '10',
    qtyTransfer: '0',
    from: '',
    to: '',
    unitVal: '-',
    labelSheet: '10',
    stampNo: '',
    sheetNo: '',
    isDisable: false,
  },
];

const ELEMENT_DATA2_Man: ElementDoubleSingleManual[] = [
  {
    checkbox: false,
    denomination: '5',
    availQty: '10',
    qtyTransfer: '0',
    from: '',
    to: '',
    unitVal: '100',
    labelSheet: '10',
    stampNo: '',
    sheetNo: '',
    isDisable: false,
  }
];
const ELEMENT_DATA3_Man: ElementDoubleSingleManual[] = [
  {
    checkbox: false,
    denomination: '1',
    availQty: '10',
    qtyTransfer: '0',
    from: '',
    to: '',
    unitVal: '1.180',
    labelSheet: '180',
    stampNo: '',
    sheetNo: '',
    isDisable: false,
  },
  {
    checkbox: false,
    denomination: '5',
    availQty: '10',
    qtyTransfer: '0',
    from: '',
    to: '',
    unitVal: '5.140',
    labelSheet: '140',
    stampNo: '',
    sheetNo: '',
    isDisable: false,
  },
];
const ELEMENT_DATA4_Man: ElementDoubleSingleManual[] = [
  {
    checkbox: false,
    denomination: '100',
    availQty: '10',
    qtyTransfer: '0',
    from: 'A-000001',
    to: 'A-000100',
    unitVal: '50',
    labelSheet: '5',
    stampNo: '',
    sheetNo: '',
    isDisable: false,
  },
  {
    checkbox: false,
    denomination: '500',
    availQty: '10',
    qtyTransfer: '0',
    from: 'B-000001',
    to: 'B-000100',
    unitVal: '60',
    labelSheet: '5',
    stampNo: '',
    sheetNo: '',
    isDisable: false,
  },
  {
    checkbox: false,
    denomination: '1000',
    availQty: '10',
    qtyTransfer: '0',
    from: 'C-000001',
    to: 'C-000100',
    unitVal: '100',
    labelSheet: '5',
    stampNo: '',
    sheetNo: '',
    isDisable: false,
  },
]; const ELEMENT_DATA5_Man: ElementDoubleSingleManual[] = [
  {
    checkbox: false,
    denomination: '5',
    availQty: '10',
    qtyTransfer: '0',
    from: '',
    to: '',
    unitVal: '-',
    labelSheet: '10',
    stampNo: '',
    sheetNo: '',
    isDisable: false,
  }
]; const ELEMENT_DATA6_Man: ElementDoubleSingleManual[] = [
  {
    checkbox: false,
    denomination: '5',
    availQty: '10',
    qtyTransfer: '0',
    from: '',
    to: '',
    unitVal: '-',
    labelSheet: '10',
    stampNo: '',
    sheetNo: '',
    isDisable: false,
  },
  {
    checkbox: false,
    denomination: '5',
    availQty: '10',
    qtyTransfer: '0',
    from: '',
    to: '',
    unitVal: '1',
    labelSheet: '10',
    stampNo: '',
    sheetNo: '',
    isDisable: false,
  },
]; const ELEMENT_DATA7_Man: ElementDoubleSingleManual[] = [
  {
    checkbox: false,
    denomination: '5',
    availQty: '10',
    qtyTransfer: '0',
    from: '',
    to: '',
    unitVal: '-',
    labelSheet: '10',
    stampNo: '',
    sheetNo: '',
    isDisable: false,
  }
]; const ELEMENT_DATA8_Man: ElementDoubleSingleManual[] = [
  {
    checkbox: false,
    denomination: '5',
    availQty: '10',
    qtyTransfer: '0',
    from: 'A-000001',
    to: 'A-000100',
    unitVal: '20',
    labelSheet: '10',
    stampNo: '',
    sheetNo: '',
    isDisable: false,
  },
  {
    checkbox: false,
    denomination: '5',
    availQty: '10',
    qtyTransfer: '0',
    from: 'B-000001',
    to: 'B-000100',
    unitVal: '50',
    labelSheet: '10',
    stampNo: '',
    sheetNo: '',
    isDisable: false,
  },
  {
    checkbox: false,
    denomination: '5',
    availQty: '10',
    qtyTransfer: '0',
    from: 'C-000001',
    to: 'C-000100',
    unitVal: '100',
    labelSheet: '10',
    stampNo: '',
    sheetNo: '',
    isDisable: false,
  },
  {
    checkbox: false,
    denomination: '5',
    availQty: '10',
    qtyTransfer: '0',
    from: 'D-000001',
    to: 'D-000100',
    unitVal: '500',
    labelSheet: '10',
    stampNo: '',
    sheetNo: '',
    isDisable: false,
  },
  {
    checkbox: false,
    denomination: '5',
    availQty: '10',
    qtyTransfer: '0',
    from: 'E-000001',
    to: 'E-000100',
    unitVal: '1000',
    labelSheet: '10',
    stampNo: '',
    sheetNo: '',
    isDisable: false,
  },
  {
    checkbox: false,
    denomination: '5',
    availQty: '10',
    qtyTransfer: '0',
    from: 'F-000001',
    to: 'F-000100',
    unitVal: '5000',
    labelSheet: '10',
    stampNo: '',
    sheetNo: '',
    isDisable: false,
  },
  {
    checkbox: false,
    denomination: '5',
    availQty: '10',
    qtyTransfer: '0',
    from: 'G-000001',
    to: 'G-000100',
    unitVal: '10000',
    labelSheet: '10',
    stampNo: '',
    sheetNo: '',
    isDisable: false,
  },
  {
    checkbox: false,
    denomination: '5',
    availQty: '10',
    qtyTransfer: '0',
    from: 'H-000001',
    to: 'H-000100',
    unitVal: '15000',
    labelSheet: '10',
    stampNo: '',
    sheetNo: '',
    isDisable: false,
  },
  {
    checkbox: false,
    denomination: '5',
    availQty: '10',
    qtyTransfer: '0',
    from: 'I-000001',
    to: 'I-000100',
    unitVal: '20000',
    labelSheet: '10',
    stampNo: '',
    sheetNo: '',
    isDisable: false,
  },
  {
    checkbox: false,
    denomination: '5',
    availQty: '10',
    qtyTransfer: '0',
    from: 'J-000001',
    to: 'J-000100',
    unitVal: '25000',
    labelSheet: '10',
    stampNo: '',
    sheetNo: '',
    isDisable: false,
  },
]; const ELEMENT_DATA9_Man: ElementDoubleSingleManual[] = [
  {
    checkbox: false,
    denomination: '5',
    availQty: '10',
    qtyTransfer: '0',
    from: '-',
    to: '-',
    unitVal: '5',
    labelSheet: '10',
    stampNo: '',
    sheetNo: '',
    isDisable: false,
  }
]; const ELEMENT_DATA10_Man: ElementDoubleSingleManual[] = [
  {
    checkbox: false,
    denomination: '5',
    availQty: '10',
    qtyTransfer: '0',
    from: '-',
    to: '-',
    unitVal: '1',
    labelSheet: '10',
    stampNo: '',
    sheetNo: '',
    isDisable: false,
  },
  {
    checkbox: false,
    denomination: '5',
    availQty: '10',
    qtyTransfer: '0',
    from: '-',
    to: '-',
    unitVal: '5',
    labelSheet: '10',
    stampNo: '',
    sheetNo: '',
    isDisable: false,
  },
]; const ELEMENT_DATA11_Man: ElementDoubleSingleManual[] = [
  {
    checkbox: false,
    denomination: '5',
    availQty: '10',
    qtyTransfer: '0',
    from: '-',
    to: '-',
    unitVal: '-',
    labelSheet: '10',
    stampNo: '',
    sheetNo: '',
    isDisable: false,
  }
]; const ELEMENT_DATA12_Man: ElementDoubleSingleManual[] = [
  {
    checkbox: false,
    denomination: '5',
    availQty: '10',
    qtyTransfer: '0',
    from: '-',
    to: '-',
    unitVal: '5',
    labelSheet: '5',
    stampNo: '',
    sheetNo: '',
    isDisable: false,
  },
  {
    checkbox: false,
    denomination: '5',
    availQty: '10',
    qtyTransfer: '0',
    from: '-',
    to: '-',
    unitVal: '5',
    labelSheet: '5',
    stampNo: '',
    sheetNo: '',
    isDisable: false,
  },
  {
    checkbox: false,
    denomination: '5',
    availQty: '10',
    qtyTransfer: '0',
    from: '-',
    to: '-',
    unitVal: '5',
    labelSheet: '5',
    stampNo: '',
    sheetNo: '',
    isDisable: false,
  },
  {
    checkbox: false,
    denomination: '5',
    availQty: '10',
    qtyTransfer: '0',
    from: '-',
    to: '-',
    unitVal: '5',
    labelSheet: '5',
    stampNo: '',
    sheetNo: '',
    isDisable: false,
  },
  {
    checkbox: false,
    denomination: '5',
    availQty: '10',
    qtyTransfer: '0',
    from: '-',
    to: '-',
    unitVal: '5',
    labelSheet: '5',
    stampNo: '',
    sheetNo: '',
    isDisable: false,
  },
  {
    checkbox: false,
    denomination: '5',
    availQty: '10',
    qtyTransfer: '0',
    from: '-',
    to: '-',
    unitVal: '5',
    labelSheet: '5',
    stampNo: '',
    sheetNo: '',
    isDisable: false,
  },
  {
    checkbox: false,
    denomination: '5',
    availQty: '10',
    qtyTransfer: '0',
    from: '-',
    to: '-',
    unitVal: '5',
    labelSheet: '5',
    stampNo: '',
    sheetNo: '',
    isDisable: false,
  },
];

const ELEMENT_DATA_ManFINAL: ElementDoubleSingleManualFinal[] = [
  {
    typeOfStamp: 'Agency License',
    denomination: '1',
    availQty: '10',
    qtyTransfer: '10',
    from: '-',
    to: '-',
    unitVal: '200.00',
    labelSheet: '5',
    stampNo: '50',
    sheetNo: '50',
  },
];

const ELEMENT_DATA_ManFINAL2: ElementDoubleSingleManualFinal[] = [
  {
    typeOfStamp: 'Agreement',
    denomination: '1',
    availQty: '10',
    qtyTransfer: '10',
    from: '-',
    to: '-',
    unitVal: '200.00',
    labelSheet: '5',
    stampNo: '50',
    sheetNo: '50',
  }
]; const ELEMENT_DATA_ManFINAL3: ElementDoubleSingleManualFinal[] = [
  {
    typeOfStamp: 'Court Fee Label',
    denomination: '1',
    availQty: '10',
    qtyTransfer: '10',
    from: '-',
    to: '-',
    unitVal: '200.00',
    labelSheet: '5',
    stampNo: '50',
    sheetNo: '50',
  },
  {
    typeOfStamp: 'Court Fee Label',
    denomination: '1',
    availQty: '10',
    qtyTransfer: '10',
    from: '-',
    to: '-',
    unitVal: '200.00',
    labelSheet: '5',
    stampNo: '50',
    sheetNo: '50',
  },
]; const ELEMENT_DATA_ManFINAL4: ElementDoubleSingleManualFinal[] = [
  {
    typeOfStamp: 'Court Fee Paper',
    denomination: '1',
    availQty: '10',
    qtyTransfer: '10',
    from: 'A-000001',
    to: 'A-000100',
    unitVal: '200.00',
    labelSheet: '5',
    stampNo: '50',
    sheetNo: '-',
  },
  {
    typeOfStamp: 'Court Fee Paper',
    denomination: '1',
    availQty: '10',
    qtyTransfer: '10',
    from: 'B-000001',
    to: 'B-000100',
    unitVal: '200.00',
    labelSheet: '5',
    stampNo: '50',
    sheetNo: '-',
  },
]; const ELEMENT_DATA_ManFINAL5: ElementDoubleSingleManualFinal[] = [
  {
    typeOfStamp: 'Foreign bill',
    denomination: '1',
    availQty: '10',
    qtyTransfer: '10',
    from: '-',
    to: '-',
    unitVal: '200.00',
    labelSheet: '5',
    stampNo: '50',
    sheetNo: '50',
  }
]; const ELEMENT_DATA_ManFINAL6: ElementDoubleSingleManualFinal[] = [
  {
    typeOfStamp: 'Hundi',
    denomination: '1',
    availQty: '10',
    qtyTransfer: '10',
    from: '-',
    to: '-',
    unitVal: '200.00',
    labelSheet: '5',
    stampNo: '50',
    sheetNo: '50',
  },
  {
    typeOfStamp: 'Hundi',
    denomination: '1',
    availQty: '10',
    qtyTransfer: '10',
    from: '-',
    to: '-',
    unitVal: '200.00',
    labelSheet: '5',
    stampNo: '50',
    sheetNo: '50',
  },
]; const ELEMENT_DATA_ManFINAL7: ElementDoubleSingleManualFinal[] = [
  {
    typeOfStamp: 'Insurance',
    denomination: '1',
    availQty: '10',
    qtyTransfer: '10',
    from: '-',
    to: '-',
    unitVal: '200.00',
    labelSheet: '5',
    stampNo: '50',
    sheetNo: '50',
  }
]; const ELEMENT_DATA_ManFINAL8: ElementDoubleSingleManualFinal[] = [
  {
    typeOfStamp: 'Non Judicial Paper',
    denomination: '1',
    availQty: '10',
    qtyTransfer: '10',
    from: 'A-000001',
    to: 'A-000100',
    unitVal: '200.00',
    labelSheet: '5',
    stampNo: '50',
    sheetNo: '-',
  },
  {
    typeOfStamp: 'Non Judicial Paper',
    denomination: '1',
    availQty: '10',
    qtyTransfer: '10',
    from: 'B-000001',
    to: 'B-000100',
    unitVal: '200.00',
    labelSheet: '5',
    stampNo: '50',
    sheetNo: '-',
  },
]; const ELEMENT_DATA_ManFINAL9: ElementDoubleSingleManualFinal[] = [
  {
    typeOfStamp: 'Notary',
    denomination: '1',
    availQty: '10',
    qtyTransfer: '10',
    from: '-',
    to: '-',
    unitVal: '200.00',
    labelSheet: '5',
    stampNo: '50',
    sheetNo: '50',
  }
]; const ELEMENT_DATA_ManFINAL10: ElementDoubleSingleManualFinal[] = [
  {
    typeOfStamp: 'Revenue',
    denomination: '1',
    availQty: '10',
    qtyTransfer: '10',
    from: '-',
    to: '-',
    unitVal: '200.00',
    labelSheet: '5',
    stampNo: '50',
    sheetNo: '50',
  },
  {
    typeOfStamp: 'Revenue',
    denomination: '1',
    availQty: '10',
    qtyTransfer: '10',
    from: '-',
    to: '-',
    unitVal: '200.00',
    labelSheet: '5',
    stampNo: '50',
    sheetNo: '50',
  },
]; const ELEMENT_DATA_ManFINAL11: ElementDoubleSingleManualFinal[] = [
  {
    typeOfStamp: 'Share transfer',
    denomination: '1',
    availQty: '10',
    qtyTransfer: '10',
    from: '-',
    to: '-',
    unitVal: '200.00',
    labelSheet: '5',
    stampNo: '50',
    sheetNo: '50',
  }
]; const ELEMENT_DATA_ManFINAL12: ElementDoubleSingleManualFinal[] = [
  {
    typeOfStamp: 'Special Adhesive',
    denomination: '1',
    availQty: '10',
    qtyTransfer: '10',
    from: '-',
    to: '-',
    unitVal: '200.00',
    labelSheet: '5',
    stampNo: '50',
    sheetNo: '50',
  },
  {
    typeOfStamp: 'Special Adhesive',
    denomination: '1',
    availQty: '10',
    qtyTransfer: '10',
    from: '-',
    to: '-',
    unitVal: '200.00',
    labelSheet: '5',
    stampNo: '50',
    sheetNo: '50',
  },
];
@Component({
  selector: 'app-double-single-lock-toffice',
  templateUrl: './double-single-lock-toffice.component.html',
  styleUrls: ['./double-single-lock-toffice.component.css']
})
export class DoubleSingleLockTofficeComponent implements OnInit {
  // Entry Field Details
  challan_List: CommonListing[] = [
    { value: '1', viewValue: '51/00057/072019/23' },
    { value: '2', viewValue: '51/00057/082019/23' },
  ];
  transferMode_List: CommonListing[] = [
    { value: '1', viewValue: 'Manual' },
    { value: '2', viewValue: 'Challan' },
  ];
  stamp_List: CommonListing[] = [
    { value: '1', viewValue: 'Agency License' },
    { value: '2', viewValue: 'Agreement' },
    { value: '3', viewValue: 'Court Fee Label' },
    { value: '4', viewValue: 'Court Fee Paper' },
    { value: '5', viewValue: 'Foreign bill' },
    { value: '6', viewValue: 'Hundi' },
    { value: '7', viewValue: 'Insurance' },
    { value: '8', viewValue: 'Non Judicial Paper' },
    { value: '9', viewValue: 'Notary' },
    { value: '10', viewValue: 'Revenue' },
    { value: '11', viewValue: 'Share transfer' },
    { value: '12', viewValue: 'Special Adhesive' },
  ];
  // Manual Mode
  dataSourceMan = new MatTableDataSource(ELEMENT_DATA_MAN);
  dataSourceMan2 = new MatTableDataSource(ELEMENT_DATA2_Man);
  dataSourceMan3 = new MatTableDataSource(ELEMENT_DATA3_Man);
  dataSourceMan4 = new MatTableDataSource(ELEMENT_DATA4_Man);
  dataSourceMan5 = new MatTableDataSource(ELEMENT_DATA5_Man);
  dataSourceMan6 = new MatTableDataSource(ELEMENT_DATA6_Man);
  dataSourceMan7 = new MatTableDataSource(ELEMENT_DATA7_Man);
  dataSourceMan8 = new MatTableDataSource(ELEMENT_DATA8_Man);
  dataSourceMan9 = new MatTableDataSource(ELEMENT_DATA9_Man);
  dataSourceMan10 = new MatTableDataSource(ELEMENT_DATA10_Man);
  dataSourceMan11 = new MatTableDataSource(ELEMENT_DATA11_Man);
  dataSourceMan12 = new MatTableDataSource(ELEMENT_DATA12_Man);
  // Final Tables
  dataSourceFinal1 = new MatTableDataSource(ELEMENT_DATA_ManFINAL);
  dataSourceFinal2 = new MatTableDataSource(ELEMENT_DATA_ManFINAL2);
  dataSourceFinal3 = new MatTableDataSource(ELEMENT_DATA_ManFINAL3);
  dataSourceFinal4 = new MatTableDataSource(ELEMENT_DATA_ManFINAL4);
  dataSourceFinal5 = new MatTableDataSource(ELEMENT_DATA_ManFINAL5);
  dataSourceFinal6 = new MatTableDataSource(ELEMENT_DATA_ManFINAL6);
  dataSourceFinal7 = new MatTableDataSource(ELEMENT_DATA_ManFINAL7);
  dataSourceFinal8 = new MatTableDataSource(ELEMENT_DATA_ManFINAL8);
  dataSourceFinal9 = new MatTableDataSource(ELEMENT_DATA_ManFINAL9);
  dataSourceFinal10 = new MatTableDataSource(ELEMENT_DATA_ManFINAL10);
  dataSourceFinal11 = new MatTableDataSource(ELEMENT_DATA_ManFINAL11);
  dataSourceFinal12 = new MatTableDataSource(ELEMENT_DATA_ManFINAL12);
  dataSourceFinalHeading = [];
  // Challan Mode
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  dataSourceChallanPaper = new MatTableDataSource(ELEMENT_DATA_Challan_Paper);
  dataSource2 = new MatTableDataSource(ELEMENT_DATA2);
  // Listing Table
  displayedColumns: string[] = ['position', 'stampType', 'denomination', 'unitVal', 'labelSheet',
    'sheetNo', 'stampNo', 'from', 'to', 'availQty', 'qtyTransfer'];
  // Mamual Mode
  displayedColumnsMan: string[] = ['position', 'checkbox', 'denomination', 'unitVal', 'labelSheet',
    'sheetNo', 'stampNo', 'from', 'to', 'availQty', 'qtyTransfer'];
  displayedColumnsManWithTotal: string[] = ['position', 'checkbox', 'denomination', 'unitVal', 'labelSheet',
    'sheetNo', 'stampNo', 'from', 'to', 'availQty', 'qtyTransfer'];
  displayedColumnsManNoTotal: string[] = ['position', 'checkbox', 'denomination', 'unitVal', 'labelSheet',
    'stampNo', 'from', 'to', 'availQty', 'qtyTransfer'];
  displayedColumnsFinal: string[] = ['position', 'stampType', 'denomination', 'unitVal', 'labelSheet',
    'sheetNo', 'stampNo', 'from', 'to', 'availQty', 'qtyTransfer', 'action'];
  challanCtrl: FormControl = new FormControl();
  transferModeCtrl: FormControl = new FormControl();
  stampCtrl: FormControl = new FormControl();
  errorMessages = stampProcessMessage;
  dataSourceStamp: any;
  stampName: string;

  lockForm: FormGroup;
  date: any = new Date();
  tofficeVal = 'Ahmedabad Treasury Office';
  venNameVal = 'B S Patel (000123)';
  issueVal = 'Single Lock';
  stampVal: string;
  modeVal: string;
  directiveObject = new StampProcessingDirectives(this.router, this.dialog);

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
  onAddChallan = false;
  // Stampwise variables for Check Box
  onCheck = false;
  onCheck2 = false;
  onCheck3 = false;
  onCheck4 = false;
  onCheck5 = false;
  onCheck6 = false;
  onCheck7 = false;
  onCheck8 = false;
  onCheck9 = false;
  onCheck10 = false;
  onCheck11 = false;
  onCheck12 = false;

  constructor(private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.lockForm = this.fb.group({
      finYear: ['2019-2020', Validators.required],
      toffice: ['Ahmedabad Treasury Office', Validators.required],
      dateName: ['date | date: "dd-MMM-yyyy"', Validators.required],
      issue: ['Single Lock', Validators.required],
      challan: ['', Validators.required],
      transferMode: ['', Validators.required],
      stamp: ['', Validators.required],
    });
  }
  // Change data source on stamp value change
  changeStamp() {
    const stampNumber = this.lockForm.controls.stamp.value;
    if (stampNumber === '1') {
      this.stampName = 'Agency License';
      this.dataSourceStamp = this.dataSourceMan;
      this.displayedColumnsMan = this.displayedColumnsManWithTotal;
    } else if (stampNumber === '2') {
      this.stampName = 'Agreement';
      this.dataSourceStamp = this.dataSourceMan2;
      this.displayedColumnsMan = this.displayedColumnsManWithTotal;
    } else if (stampNumber === '3') {
      this.stampName = 'Court Fee Label';
      this.dataSourceStamp = this.dataSourceMan3;
      this.displayedColumnsMan = this.displayedColumnsManWithTotal;
    } else if (stampNumber === '4') {
      this.stampName = 'Court Fee Paper';
      this.dataSourceStamp = this.dataSourceMan4;
      this.displayedColumnsMan = this.displayedColumnsManNoTotal;
    } else if (stampNumber === '5') {
      this.stampName = 'Foreign bill';
      this.dataSourceStamp = this.dataSourceMan5;
      this.displayedColumnsMan = this.displayedColumnsManWithTotal;
    } else if (stampNumber === '6') {
      this.stampName = 'Hundi';
      this.dataSourceStamp = this.dataSourceMan6;
      this.displayedColumnsMan = this.displayedColumnsManWithTotal;
    } else if (stampNumber === '7') {
      this.stampName = 'Insurance';
      this.dataSourceStamp = this.dataSourceMan7;
      this.displayedColumnsMan = this.displayedColumnsManWithTotal;
    } else if (stampNumber === '8') {
      this.stampName = 'Non Judicial Paper';
      this.dataSourceStamp = this.dataSourceMan8;
      this.displayedColumnsMan = this.displayedColumnsManNoTotal;
    } else if (stampNumber === '9') {
      this.stampName = 'Notary';
      this.dataSourceStamp = this.dataSourceMan9;
      this.displayedColumnsMan = this.displayedColumnsManWithTotal;
    } else if (stampNumber === '10') {
      this.stampName = 'Revenue';
      this.dataSourceStamp = this.dataSourceMan10;
      this.displayedColumnsMan = this.displayedColumnsManWithTotal;
    } else if (stampNumber === '11') {
      this.stampName = 'Share transfer';
      this.dataSourceStamp = this.dataSourceMan11;
      this.displayedColumnsMan = this.displayedColumnsManWithTotal;
    } else if (stampNumber === '12') {
      this.stampName = 'Special Adhesive';
      this.dataSourceStamp = this.dataSourceMan12;
      this.displayedColumnsMan = this.displayedColumnsManWithTotal;
    }
  }

  // After clicking the checkbox
  checkboxValueChange(item) {
    this.stampVal = this.lockForm.controls.stamp.value;

    if (this.stampVal === '1') {
      this.onCheck = true;
    } else if (this.stampVal === '2') {
      this.onCheck2 = true;
    } else if (this.stampVal === '3') {
      this.onCheck3 = true;
    } else if (this.stampVal === '4') {
      this.onCheck4 = true;
    } else if (this.stampVal === '5') {
      this.onCheck5 = true;
    } else if (this.stampVal === '6') {
      this.onCheck6 = true;
    } else if (this.stampVal === '7') {
      this.onCheck7 = true;
    } else if (this.stampVal === '8') {
      this.onCheck8 = true;
    } else if (this.stampVal === '9') {
      this.onCheck9 = true;
    } else if (this.stampVal === '10') {
      this.onCheck10 = true;
    } else if (this.stampVal === '11') {
      this.onCheck11 = true;
    } else if (this.stampVal === '12') {
      this.onCheck12 = true;
    }
  }

  // Add Button Click
  whenAddClick() {
    this.stampVal = this.lockForm.controls.stamp.value;
    this.modeVal = this.lockForm.controls.transferMode.value;

    // For Manual Mode
    if (this.stampVal === '1') {
      this.onAdd = true;
    } else if (this.stampVal === '2') {
      this.onAdd2 = true;
    } else if (this.stampVal === '3') {
      this.onAdd3 = true;
    } else if (this.stampVal === '4') {
      this.onAdd4 = true;
    } else if (this.stampVal === '5') {
      this.onAdd5 = true;
    } else if (this.stampVal === '6') {
      this.onAdd6 = true;
    } else if (this.stampVal === '7') {
      this.onAdd7 = true;
    } else if (this.stampVal === '8') {
      this.onAdd8 = true;
    } else if (this.stampVal === '9') {
      this.onAdd9 = true;
    } else if (this.stampVal === '10') {
      this.onAdd10 = true;
    } else if (this.stampVal === '11') {
      this.onAdd11 = true;
    } else if (this.stampVal === '12') {
      this.onAdd12 = true;
    }
    // For Challan Mode
    if (this.modeVal === '2') {
      this.onAddChallan = true;
    } else {
      this.onAddChallan = false;
    }
  }
  // Delete from Listing Table Stamp wise
  deleteFinalTab1(index) {
    this.dataSourceFinal1.data.splice(index, 1);
    this.dataSourceFinal1 = new MatTableDataSource(this.dataSourceFinal1.data);
  }
  deleteFinalTab2(index) {
    this.dataSourceFinal2.data.splice(index, 1);
    this.dataSourceFinal2 = new MatTableDataSource(this.dataSourceFinal2.data);
  }
  deleteFinalTab3(index) {
    this.dataSourceFinal3.data.splice(index, 1);
    this.dataSourceFinal3 = new MatTableDataSource(this.dataSourceFinal3.data);
  }
  deleteFinalTab4(index) {
    this.dataSourceFinal4.data.splice(index, 1);
    this.dataSourceFinal4 = new MatTableDataSource(this.dataSourceFinal4.data);
  }
  deleteFinalTab5(index) {
    this.dataSourceFinal5.data.splice(index, 1);
    this.dataSourceFinal5 = new MatTableDataSource(this.dataSourceFinal5.data);
  }
  deleteFinalTab6(index) {
    this.dataSourceFinal6.data.splice(index, 1);
    this.dataSourceFinal6 = new MatTableDataSource(this.dataSourceFinal6.data);
  }
  deleteFinalTab7(index) {
    this.dataSourceFinal7.data.splice(index, 1);
    this.dataSourceFinal7 = new MatTableDataSource(this.dataSourceFinal7.data);
  }
  deleteFinalTab8(index) {
    this.dataSourceFinal8.data.splice(index, 1);
    this.dataSourceFinal8 = new MatTableDataSource(this.dataSourceFinal8.data);
  }
  deleteFinalTab9(index) {
    this.dataSourceFinal9.data.splice(index, 1);
    this.dataSourceFinal9 = new MatTableDataSource(this.dataSourceFinal9.data);
  }
  deleteFinalTab10(index) {
    this.dataSourceFinal10.data.splice(index, 1);
    this.dataSourceFinal10 = new MatTableDataSource(this.dataSourceFinal10.data);
  }
  deleteFinalTab11(index) {
    this.dataSourceFinal11.data.splice(index, 1);
    this.dataSourceFinal11 = new MatTableDataSource(this.dataSourceFinal11.data);
  }
  deleteFinalTab12(index) {
    this.dataSourceFinal12.data.splice(index, 1);
    this.dataSourceFinal12 = new MatTableDataSource(this.dataSourceFinal12.data);
  }
  updateAdd() {
    if (this.lockForm.controls.transferMode.value === '2') {
      this.onAdd = false;
    }
  }

  gotoListing() {
    this.router.navigate(['./stamp-processing/double-single-lock-toffice-list']);
  }
}
