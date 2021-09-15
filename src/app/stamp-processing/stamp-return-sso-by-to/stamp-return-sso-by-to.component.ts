import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { CloseConfirmCommonDialogComponent } from '../close-confirm-common-dialog/close-confirm-common-dialog.component';
import { SubmitConfirmCommonDialigComponent } from '../submit-confirm-common-dialig/submit-confirm-common-dialig.component';
import { ToastrService } from 'ngx-toastr';
import { stampProcessMessage } from 'src/app/common/error-message/common-message.constants';
import { ElementReturnSsoTo, ElementReturnSsoToFinal } from 'src/app/model/stamp-processing';
import { StampProcessingDirectives } from 'src/app/common/directive/stamp-processing-directive';


// Entry Field Data stampwise
const ELEMENT_DATA: ElementReturnSsoTo[] = [
  {
    checkbox: false,
    unitVal: '5',
    deno: '-',
    stampSheet: '10',
    sheetNo: '',
    stampNo: '',
    fromSeries: '',
    toSeries: '',
    totAmt: '50',
    reason: '',
  }
];

const ELEMENT_DATA2: ElementReturnSsoTo[] = [
  {
    checkbox: false,
    unitVal: '5',
    deno: '100',
    stampSheet: '10',
    sheetNo: '',
    stampNo: '',
    fromSeries: '',
    toSeries: '',
    totAmt: '50',
    reason: '',
  }
]; const ELEMENT_DATA3: ElementReturnSsoTo[] = [
  {
    checkbox: false,
    unitVal: '1',
    deno: '1.180',
    stampSheet: '180',
    sheetNo: '',
    stampNo: '',
    fromSeries: '',
    toSeries: '',
    totAmt: '50',
    reason: '',
  },
  {
    checkbox: false,
    unitVal: '5',
    deno: '5.140',
    stampSheet: '140',
    sheetNo: '',
    stampNo: '',
    fromSeries: '',
    toSeries: '',
    totAmt: '50',
    reason: '',
  },
];
const ELEMENT_DATA4: ElementReturnSsoTo[] = [
  {
    checkbox: false,
    unitVal: '100',
    deno: '50',
    stampSheet: '10',
    sheetNo: '',
    stampNo: '',
    fromSeries: '',
    toSeries: '',
    totAmt: '50',
    reason: '',
  },
  {
    checkbox: false,
    unitVal: '500',
    deno: '60',
    stampSheet: '10',
    sheetNo: '',
    stampNo: '',
    fromSeries: '',
    toSeries: '',
    totAmt: '50',
    reason: '',
  },
  {
    checkbox: false,
    unitVal: '1000',
    deno: '1000',
    stampSheet: '10',
    sheetNo: '',
    stampNo: '',
    fromSeries: '',
    toSeries: '',
    totAmt: '50',
    reason: '',
  },
]; const ELEMENT_DATA5: ElementReturnSsoTo[] = [
  {
    checkbox: false,
    unitVal: '5',
    deno: '-',
    stampSheet: '10',
    sheetNo: '',
    stampNo: '',
    fromSeries: '',
    toSeries: '',
    totAmt: '50',
    reason: '',
  },
]; const ELEMENT_DATA6: ElementReturnSsoTo[] = [
  {
    checkbox: false,
    unitVal: '-',
    deno: '0',
    stampSheet: '10',
    sheetNo: '',
    stampNo: '',
    fromSeries: '',
    toSeries: '',
    totAmt: '50',
    reason: '',
  },
  {
    checkbox: false,
    unitVal: '-',
    deno: '0',
    stampSheet: '10',
    sheetNo: '',
    stampNo: '',
    fromSeries: '',
    toSeries: '',
    totAmt: '50',
    reason: '',
  },
]; const ELEMENT_DATA7: ElementReturnSsoTo[] = [
  {
    checkbox: false,
    unitVal: '-',
    deno: '0',
    stampSheet: '10',
    sheetNo: '',
    stampNo: '',
    fromSeries: '',
    toSeries: '',
    totAmt: '50',
    reason: '',
  },
]; const ELEMENT_DATA8: ElementReturnSsoTo[] = [
  {
    checkbox: false,
    unitVal: '5',
    deno: '20',
    stampSheet: '10',
    sheetNo: '',
    stampNo: '',
    fromSeries: '',
    toSeries: '',
    totAmt: '50',
    reason: '',
  },
  {
    checkbox: false,
    unitVal: '5',
    deno: '50',
    stampSheet: '10',
    sheetNo: '',
    stampNo: '',
    fromSeries: '',
    toSeries: '',
    totAmt: '50',
    reason: '',
  },
  {
    checkbox: false,
    unitVal: '5',
    deno: '100',
    stampSheet: '10',
    sheetNo: '',
    stampNo: '',
    fromSeries: '',
    toSeries: '',
    totAmt: '50',
    reason: '',
  },
  {
    checkbox: false,
    unitVal: '5',
    deno: '500',
    stampSheet: '10',
    sheetNo: '',
    stampNo: '',
    fromSeries: '',
    toSeries: '',
    totAmt: '50',
    reason: '',
  },
  {
    checkbox: false,
    unitVal: '5',
    deno: '1000',
    stampSheet: '10',
    sheetNo: '',
    stampNo: '',
    fromSeries: '',
    toSeries: '',
    totAmt: '50',
    reason: '',
  },
  {
    checkbox: false,
    unitVal: '5',
    deno: '5000',
    stampSheet: '10',
    sheetNo: '',
    stampNo: '',
    fromSeries: '',
    toSeries: '',
    totAmt: '50',
    reason: '',
  },
  {
    checkbox: false,
    unitVal: '5',
    deno: '10000',
    stampSheet: '10',
    sheetNo: '',
    stampNo: '',
    fromSeries: '',
    toSeries: '',
    totAmt: '50',
    reason: '',
  },
  {
    checkbox: false,
    unitVal: '5',
    deno: '15000',
    stampSheet: '10',
    sheetNo: '',
    stampNo: '',
    fromSeries: '',
    toSeries: '',
    totAmt: '50',
    reason: '',
  },
  {
    checkbox: false,
    unitVal: '5',
    deno: '20000',
    stampSheet: '10',
    sheetNo: '',
    stampNo: '',
    fromSeries: '',
    toSeries: '',
    totAmt: '50',
    reason: '',
  },
  {
    checkbox: false,
    unitVal: '5',
    deno: '250000',
    stampSheet: '10',
    sheetNo: '',
    stampNo: '',
    fromSeries: '',
    toSeries: '',
    totAmt: '50',
    reason: '',
  },
]; const ELEMENT_DATA9: ElementReturnSsoTo[] = [
  {
    checkbox: false,
    unitVal: '-',
    deno: '0',
    stampSheet: '10',
    sheetNo: '',
    stampNo: '',
    fromSeries: '',
    toSeries: '',
    totAmt: '50',
    reason: '',
  },
]; const ELEMENT_DATA10: ElementReturnSsoTo[] = [
  {
    checkbox: false,
    unitVal: '-',
    deno: '0',
    stampSheet: '10',
    sheetNo: '',
    stampNo: '',
    fromSeries: '',
    toSeries: '',
    totAmt: '50',
    reason: '',
  },
  {
    checkbox: false,
    unitVal: '-',
    deno: '0',
    stampSheet: '10',
    sheetNo: '',
    stampNo: '',
    fromSeries: '',
    toSeries: '',
    totAmt: '50',
    reason: '',
  },
]; const ELEMENT_DATA11: ElementReturnSsoTo[] = [
  {
    checkbox: false,
    unitVal: '-',
    deno: '0',
    stampSheet: '10',
    sheetNo: '',
    stampNo: '',
    fromSeries: '',
    toSeries: '',
    totAmt: '50',
    reason: '',
  },
]; const ELEMENT_DATA12: ElementReturnSsoTo[] = [
  {
    checkbox: false,
    unitVal: '-',
    deno: '0',
    stampSheet: '10',
    sheetNo: '',
    stampNo: '',
    fromSeries: '',
    toSeries: '',
    totAmt: '50',
    reason: '',
  },
  {
    checkbox: false,
    unitVal: '-',
    deno: '0',
    stampSheet: '10',
    sheetNo: '',
    stampNo: '',
    fromSeries: '',
    toSeries: '',
    totAmt: '50',
    reason: '',
  },
  {
    checkbox: false,
    unitVal: '-',
    deno: '0',
    stampSheet: '10',
    sheetNo: '',
    stampNo: '',
    fromSeries: '',
    toSeries: '',
    totAmt: '50',
    reason: '',
  },
  {
    checkbox: false,
    unitVal: '-',
    deno: '0',
    stampSheet: '10',
    sheetNo: '',
    stampNo: '',
    fromSeries: '',
    toSeries: '',
    totAmt: '50',
    reason: '',
  },
  {
    checkbox: false,
    unitVal: '-',
    deno: '0',
    stampSheet: '10',
    sheetNo: '',
    stampNo: '',
    fromSeries: '',
    toSeries: '',
    totAmt: '50',
    reason: '',
  },
  {
    checkbox: false,
    unitVal: '-',
    deno: '0',
    stampSheet: '10',
    sheetNo: '',
    stampNo: '',
    fromSeries: '',
    toSeries: '',
    totAmt: '50',
    reason: '',
  },
  {
    checkbox: false,
    unitVal: '-',
    deno: '0',
    stampSheet: '10',
    sheetNo: '',
    stampNo: '',
    fromSeries: '',
    toSeries: '',
    totAmt: '50',
    reason: '',
  },
];

// Listing table data
const ELEMENT_FINAL: ElementReturnSsoToFinal[] = [
  {
    typeOfStamp: 'Agency License',
    unitVal: '-',
    deno: '0',
    stampSheet: '10',
    sheetNo: '10',
    stampNo: '20',
    fromSeries: '-',
    toSeries: '-',
    totAmt: '50',
    reason: 'Excess Stock',
  }
];
const ELEMENT_FINAL2: ElementReturnSsoToFinal[] = [
  {
    typeOfStamp: 'Agreement',
    unitVal: '-',
    deno: '0',
    stampSheet: '10',
    sheetNo: '10',
    stampNo: '20',
    fromSeries: '-',
    toSeries: '-',
    totAmt: '50',
    reason: 'Excess Stock',
  }
]; const ELEMENT_FINAL3: ElementReturnSsoToFinal[] = [
  {
    typeOfStamp: 'Court Fee Label',
    unitVal: '-',
    deno: '0',
    stampSheet: '10',
    sheetNo: '10',
    stampNo: '20',
    fromSeries: '-',
    toSeries: '-',
    totAmt: '50',
    reason: 'Excess Stock',
  },
  {
    typeOfStamp: 'Court Fee Label',
    unitVal: '-',
    deno: '0',
    stampSheet: '10',
    sheetNo: '10',
    stampNo: '20',
    fromSeries: '-',
    toSeries: '-',
    totAmt: '50',
    reason: 'Excess Stock',
  },
]; const ELEMENT_FINAL4: ElementReturnSsoToFinal[] = [
  {
    typeOfStamp: 'Court Fee Paper',
    unitVal: '-',
    deno: '0',
    stampSheet: '10',
    sheetNo: '10',
    stampNo: '20',
    fromSeries: 'A-000100',
    toSeries: 'A-000001',
    totAmt: '50',
    reason: 'Excess Stock',
  },
  {
    typeOfStamp: 'Court Fee Paper',
    unitVal: '-',
    deno: '0',
    stampSheet: '10',
    sheetNo: '10',
    stampNo: '20',
    fromSeries: 'B-000100',
    toSeries: 'B-000001',
    totAmt: '50',
    reason: 'Excess Stock',
  },
]; const ELEMENT_FINAL5: ElementReturnSsoToFinal[] = [
  {
    typeOfStamp: 'Foreign bill',
    unitVal: '-',
    deno: '0',
    stampSheet: '10',
    sheetNo: '10',
    stampNo: '20',
    fromSeries: '-',
    toSeries: '-',
    totAmt: '50',
    reason: 'Excess Stock',
  }
]; const ELEMENT_FINAL6: ElementReturnSsoToFinal[] = [
  {
    typeOfStamp: 'Hundi',
    unitVal: '-',
    deno: '0',
    stampSheet: '10',
    sheetNo: '10',
    stampNo: '20',
    fromSeries: '-',
    toSeries: '-',
    totAmt: '50',
    reason: 'Excess Stock',
  },
  {
    typeOfStamp: 'Hundi',
    unitVal: '-',
    deno: '0',
    stampSheet: '10',
    sheetNo: '10',
    stampNo: '20',
    fromSeries: '-',
    toSeries: '-',
    totAmt: '50',
    reason: 'Excess Stock',
  },
]; const ELEMENT_FINAL7: ElementReturnSsoToFinal[] = [
  {
    typeOfStamp: 'Insurance',
    unitVal: '-',
    deno: '0',
    stampSheet: '10',
    sheetNo: '10',
    stampNo: '20',
    fromSeries: '-',
    toSeries: '-',
    totAmt: '50',
    reason: 'Excess Stock',
  }
]; const ELEMENT_FINAL8: ElementReturnSsoToFinal[] = [
  {
    typeOfStamp: 'Non Judicial Paper',
    unitVal: '-',
    deno: '0',
    stampSheet: '10',
    sheetNo: '10',
    stampNo: '20',
    fromSeries: 'A-000100',
    toSeries: 'A-000001',
    totAmt: '50',
    reason: 'Excess Stock',
  },
  {
    typeOfStamp: 'Non Judicial Paper',
    unitVal: '-',
    deno: '0',
    stampSheet: '10',
    sheetNo: '10',
    stampNo: '20',
    fromSeries: 'B-000100',
    toSeries: 'B-000001',
    totAmt: '50',
    reason: 'Excess Stock',
  },
]; const ELEMENT_FINAL9: ElementReturnSsoToFinal[] = [
  {
    typeOfStamp: 'Notary',
    unitVal: '-',
    deno: '0',
    stampSheet: '10',
    sheetNo: '10',
    stampNo: '20',
    fromSeries: '-',
    toSeries: '-',
    totAmt: '50',
    reason: 'Excess Stock',
  }
]; const ELEMENT_FINAL10: ElementReturnSsoToFinal[] = [
  {
    typeOfStamp: 'Revenue',
    unitVal: '-',
    deno: '0',
    stampSheet: '10',
    sheetNo: '10',
    stampNo: '20',
    fromSeries: '-',
    toSeries: '-',
    totAmt: '50',
    reason: 'Excess Stock',
  },
  {
    typeOfStamp: 'Revenue',
    unitVal: '-',
    deno: '0',
    stampSheet: '10',
    sheetNo: '10',
    stampNo: '20',
    fromSeries: '-',
    toSeries: '-',
    totAmt: '50',
    reason: 'Excess Stock',
  },
]; const ELEMENT_FINAL11: ElementReturnSsoToFinal[] = [
  {
    typeOfStamp: 'Share transfer',
    unitVal: '-',
    deno: '0',
    stampSheet: '10',
    sheetNo: '10',
    stampNo: '20',
    fromSeries: '-',
    toSeries: '-',
    totAmt: '50',
    reason: 'Excess Stock',
  }
]; const ELEMENT_FINAL12: ElementReturnSsoToFinal[] = [
  {
    typeOfStamp: 'Special Adhesive',
    unitVal: '-',
    deno: '0',
    stampSheet: '10',
    sheetNo: '10',
    stampNo: '20',
    fromSeries: '-',
    toSeries: '-',
    totAmt: '50',
    reason: 'Excess Stock',
  },
  {
    typeOfStamp: 'Special Adhesive',
    unitVal: '-',
    deno: '0',
    stampSheet: '10',
    sheetNo: '10',
    stampNo: '20',
    fromSeries: '-',
    toSeries: '-',
    totAmt: '50',
    reason: 'Excess Stock',
  },
];

@Component({
  selector: 'app-stamp-return-sso-by-to',
  templateUrl: './stamp-return-sso-by-to.component.html',
  styleUrls: ['./stamp-return-sso-by-to.component.css']
})
export class StampReturnSsoByToComponent implements OnInit {
  // Entry Field Details
  indentNumber_List: CommonListing[] = [
    { value: '1', viewValue: '51/00057/072019/23' },
    { value: '2', viewValue: '51/00057/072019/32' },
    { value: '3', viewValue: '51/00057/072019/44' },
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

  denomination_List: CommonListing[] = [
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '2' },
    { value: '3', viewValue: '5' },
    { value: '4', viewValue: '10' },
    { value: '5', viewValue: '20' },
  ];

  reason_List: CommonListing[] = [
    { value: '1', viewValue: 'Damage Stock' },
    { value: '2', viewValue: 'Tear Stamp Label/ Stamp Papers' },
    { value: '3', viewValue: 'Excess Stock' },
  ];



  // Entry Table
  displayedColumns = ['position', 'checkbox', 'unitVal', 'deno', 'stampSheet', 'sheetNo', 'stampNo',
    'fromSeries', 'toSeries', 'totAmt', 'reason'];
    displayFinal = ['position', 'typeOfStamp', 'unitVal', 'deno', 'stampSheet', 'sheetNo', 'stampNo',
    'fromSeries', 'toSeries', 'totAmt', 'reason', 'action'];
  indentNumberCtrl: FormControl = new FormControl;
  stampCtrl: FormControl = new FormControl;
  errorMessages = stampProcessMessage;
  directiveObject = new StampProcessingDirectives(this.router, this.dialog);

  stampReturnSso: FormGroup;
  date: any = new Date();
  treOffVal = 'District Treasury Office, Gandhinagar';
  indentToVal = 'Superintendent of Stamps Office, Gandhinagar';
  indTypeVal = 'Regular Indent';
  indDateVal = '10-Apr-2020';
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
  dataSourceStamp: any;
  stampName: string;

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  dataSource2 = new MatTableDataSource(ELEMENT_DATA2);
  dataSource3 = new MatTableDataSource(ELEMENT_DATA3);
  dataSource4 = new MatTableDataSource(ELEMENT_DATA4);
  dataSource5 = new MatTableDataSource(ELEMENT_DATA5);
  dataSource6 = new MatTableDataSource(ELEMENT_DATA6);
  dataSource7 = new MatTableDataSource(ELEMENT_DATA7);
  dataSource8 = new MatTableDataSource(ELEMENT_DATA8);
  dataSource9 = new MatTableDataSource(ELEMENT_DATA9);
  dataSource10 = new MatTableDataSource(ELEMENT_DATA10);
  dataSource11 = new MatTableDataSource(ELEMENT_DATA11);
  dataSource12 = new MatTableDataSource(ELEMENT_DATA12);
  // Final Tables
  dataSourceFinal1 = new MatTableDataSource(ELEMENT_FINAL);
  dataSourceFinal2 = new MatTableDataSource(ELEMENT_FINAL2);
  dataSourceFinal3 = new MatTableDataSource(ELEMENT_FINAL3);
  dataSourceFinal4 = new MatTableDataSource(ELEMENT_FINAL4);
  dataSourceFinal5 = new MatTableDataSource(ELEMENT_FINAL5);
  dataSourceFinal6 = new MatTableDataSource(ELEMENT_FINAL6);
  dataSourceFinal7 = new MatTableDataSource(ELEMENT_FINAL7);
  dataSourceFinal8 = new MatTableDataSource(ELEMENT_FINAL8);
  dataSourceFinal9 = new MatTableDataSource(ELEMENT_FINAL9);
  dataSourceFinal10 = new MatTableDataSource(ELEMENT_FINAL10);
  dataSourceFinal11 = new MatTableDataSource(ELEMENT_FINAL11);
  dataSourceFinal12 = new MatTableDataSource(ELEMENT_FINAL12);
  dataSourceFinalHeading = [];
  constructor(private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog,
    private toastr: ToastrService,
    private el: ElementRef) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.stampReturnSso = this.fb.group({
      finYear: ['2019-2020', Validators.required],
      treOff: ['District Treasury Office, Gandhinagar', Validators.required],
      retDate: [''],
      indentTo: ['Superintendent of Stamps Office, Gandhinagar', Validators.required],
      indentNumber: ['', Validators.required],
      indType: ['Regular Indent', Validators.required],
      indDate: [''],
      stamp: ['', Validators.required],
    });
  }
  // Add Button Click
  whenAddClick() {
    this.stampVal = this.stampReturnSso.controls.stamp.value;

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
  }
  // Change data source on stamp value change
  changeStamp() {
    const stampNumber = this.stampReturnSso.controls.stamp.value;
    if (stampNumber === '1') {
      this.stampName = 'Agency License';
      this.dataSourceStamp = this.dataSource;
    } else if (stampNumber === '2') {
      this.stampName = 'Agreement';
      this.dataSourceStamp = this.dataSource2;
    } else if (stampNumber === '3') {
      this.stampName = 'Court Fee Label';
      this.dataSourceStamp = this.dataSource3;
    } else if (stampNumber === '4') {
      this.stampName = 'Court Fee Paper';
      this.dataSourceStamp = this.dataSource4;
    } else if (stampNumber === '5') {
      this.stampName = 'Foreign bill';
      this.dataSourceStamp = this.dataSource5;
    } else if (stampNumber === '6') {
      this.stampName = 'Hundi';
      this.dataSourceStamp = this.dataSource6;
    } else if (stampNumber === '7') {
      this.stampName = 'Insurance';
      this.dataSourceStamp = this.dataSource7;
    } else if (stampNumber === '8') {
      this.stampName = 'Non Judicial Paper';
      this.dataSourceStamp = this.dataSource8;
    } else if (stampNumber === '9') {
      this.stampName = 'Notary';
      this.dataSourceStamp = this.dataSource9;
    } else if (stampNumber === '10') {
      this.stampName = 'Revenue';
      this.dataSourceStamp = this.dataSource10;
    } else if (stampNumber === '11') {
      this.stampName = 'Share transfer';
      this.dataSourceStamp = this.dataSource11;
    } else if (stampNumber === '12') {
      this.stampName = 'Special Adhesive';
      this.dataSourceStamp = this.dataSource12;
    }
  }

  // After clicking the checkbox
  checkboxValueChange(item) {
    this.stampVal = this.stampReturnSso.controls.stamp.value;

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

  gotoListing() {
    this.router.navigate(['./stamp-processing/stamp-return-sso-by-to-list']);
  }

}
