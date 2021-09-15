import { datasource } from './../../budget/delegation/delegation.component';
import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { SaveConfirmCommonDialogComponent } from '../save-confirm-common-dialog/save-confirm-common-dialog.component';
import { CloseConfirmCommonDialogComponent } from '../close-confirm-common-dialog/close-confirm-common-dialog.component';
import { SubmitConfirmCommonDialigComponent } from '../submit-confirm-common-dialig/submit-confirm-common-dialig.component';
import { MatDialogRef } from '@angular/material/dialog';
import { InfoCommonDialogComponent } from '../info-common-dialog/info-common-dialog.component';
import { stampProcessMessage } from 'src/app/common/error-message/common-message.constants';
import { ElementPrepChaTo, ElementPrepChaFinalTo, ElementPrepChaToNew, ElementPrepChaFinalToNew } from 'src/app/model/stamp-processing';
import { StampProcessingDirectives } from 'src/app/common/directive/stamp-processing-directive';

// Entry Field Data stampwise
const ELEMENT_DATA: ElementPrepChaToNew[] = [
  {
    checkbox: false,
    deno: '-',
    disc: '0',
    discRs: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  }
];

const ELEMENT_DATA2: ElementPrepChaToNew[] = [
  {
    checkbox: false,
    deno: '100',
    disc: '0',
    discRs: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  }
]; const ELEMENT_DATA3: any[] = [
  {
    checkbox: false,
    deno: '1.180',
    disc: '3',
    discRs: '10',
    unitVal: '1',
    stampSheet: '180',
    stampNo: '',
    sheetNo: '',
    totAmt: '',
    netAmt: '',
  },
  {
    checkbox: false,
    deno: '5.140',
    disc: '3',
    discRs: '10',
    unitVal: '5',
    stampSheet: '140',
    stampNo: '',
    sheetNo: '',
    totAmt: '',
    netAmt: '',
  },
];
const ELEMENT_DATA4: any[] = [
  {
    checkbox: false,
    deno: '50',
    disc: '3',
    discRs: '10',
    unitVal: '100',
    stampSheet: '1',
    stampNo: '',
    sheetNo: '',
    totAmt: '',
    netAmt: '',
  },
  {
    checkbox: false,
    deno: '60',
    disc: '1',
    discRs: '10',
    unitVal: '500',
    stampSheet: '1',
    stampNo: '',
    sheetNo: '',
    totAmt: '',
    netAmt: '',
  },
  {
    checkbox: false,
    deno: '100',
    disc: '1',
    unitVal: '1000',
    stampSheet: '1',
    stampNo: '',
    sheetNo: '',
    totAmt: '',
    netAmt: '',
  },
]; const ELEMENT_DATA5: ElementPrepChaToNew[] = [
  {
    checkbox: false,
    deno: '-',
    disc: '0',
    discRs: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  }
]; const ELEMENT_DATA6: ElementPrepChaToNew[] = [
  {
    checkbox: false,
    deno: '1',
    disc: '0',
    discRs: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  },
  {
    checkbox: false,
    deno: '10',
    disc: '0',
    discRs: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  },
]; const ELEMENT_DATA7: ElementPrepChaToNew[] = [
  {
    checkbox: false,
    deno: '-',
    disc: '0',
    discRs: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  }
]; const ELEMENT_DATA8: ElementPrepChaToNew[] = [
  {
    checkbox: false,
    deno: '20',
    disc: '0',
    discRs: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  },
  {
    checkbox: false,
    deno: '50',
    disc: '0',
    discRs: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  },
  {
    checkbox: false,
    deno: '100',
    disc: '0',
    discRs: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  },
  {
    checkbox: false,
    deno: '500',
    disc: '0',
    discRs: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  },
  {
    checkbox: false,
    deno: '1000',
    disc: '0',
    discRs: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  },
  {
    checkbox: false,
    deno: '5000',
    disc: '0',
    discRs: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  },
  {
    checkbox: false,
    deno: '10000',
    disc: '0',
    discRs: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  },
  {
    checkbox: false,
    deno: '15000',
    disc: '0',
    discRs: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  },
  {
    checkbox: false,
    deno: '20000',
    disc: '0',
    discRs: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  },
  {
    checkbox: false,
    deno: '25000',
    disc: '0',
    discRs: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  },
]; const ELEMENT_DATA9: ElementPrepChaToNew[] = [
  {
    checkbox: false,
    deno: '5',
    disc: '0',
    discRs: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  }
]; const ELEMENT_DATA10: ElementPrepChaToNew[] = [
  {
    checkbox: false,
    deno: '1',
    disc: '0',
    discRs: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  },
  {
    checkbox: false,
    deno: '5',
    disc: '0',
    discRs: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  },
]; const ELEMENT_DATA11: ElementPrepChaToNew[] = [
  {
    checkbox: false,
    deno: '-',
    disc: '0',
    discRs: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  }
]; const ELEMENT_DATA12: ElementPrepChaToNew[] = [
  {
    checkbox: false,
    deno: '5',
    disc: '0',
    discRs: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  },
  {
    checkbox: false,
    deno: '10',
    disc: '0',
    discRs: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  },
  {
    checkbox: false,
    deno: '20',
    disc: '0',
    discRs: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  },
  {
    checkbox: false,
    deno: '50',
    disc: '0',
    discRs: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  },
  {
    checkbox: false,
    deno: '100',
    disc: '0',
    discRs: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  },
  {
    checkbox: false,
    deno: '500',
    disc: '0',
    discRs: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  },
  {
    checkbox: false,
    deno: '1000',
    disc: '0',
    discRs: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  },
];
// Listing table data
const ELEMENT_FINAL: ElementPrepChaFinalToNew[] = [
  {
    typeOfStamp: 'Agency License',
    deno: '-',
    disc: '0',
    discRs: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
    stampNo: '50',
    sheetNo: '50',
  }
];

const ELEMENT_FINAL2: ElementPrepChaFinalToNew[] = [
  {
    typeOfStamp: 'Agreement',
    deno: '100',
    disc: '0',
    discRs: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
    stampNo: '50',
    sheetNo: '50',
  }
]; const ELEMENT_FINAL3: ElementPrepChaFinalToNew[] = [
  {
    typeOfStamp: 'Court Fee Label',
    deno: '1.180',
    disc: '3',
    discRs: '10',
    unitVal: '1',
    stampSheet: '180',
    stampNo: '9',
    sheetNo: '2',
    totAmt: '200',
    netAmt: '100',
  },
  {
    typeOfStamp: 'Court Fee Label',
    deno: '5.140',
    disc: '3',
    discRs: '10',
    unitVal: '5',
    stampSheet: '140',
    stampNo: '9',
    sheetNo: '2',
    totAmt: '200',
    netAmt: '200',
  },
]; const ELEMENT_FINAL4: ElementPrepChaFinalToNew[] = [
  {
    typeOfStamp: 'Court Fee Paper',
    deno: '50',
    disc: '10',
    discRs: '10',
    unitVal: '100',
    stampSheet: '1',
    stampNo: '',
    sheetNo: '-',
    totAmt: '',
    netAmt: '',
  },
  {
    typeOfStamp: 'Court Fee Paper',
    deno: '60',
    disc: '10',
    discRs: '10',
    unitVal: '500',
    stampSheet: '1',
    stampNo: '',
    sheetNo: '-',
    totAmt: '',
    netAmt: '',
  },
]; const ELEMENT_FINAL5: ElementPrepChaFinalToNew[] = [
  {
    typeOfStamp: 'Foreign bill',
    deno: '-',
    disc: '0',
    discRs: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
    stampNo: '50',
    sheetNo: '50',
  }
]; const ELEMENT_FINAL6: ElementPrepChaFinalToNew[] = [
  {
    typeOfStamp: 'Hundi',
    deno: '1',
    disc: '0',
    discRs: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
    stampNo: '50',
    sheetNo: '50',
  },
  {
    typeOfStamp: 'Hundi',
    deno: '10',
    disc: '0',
    discRs: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
    stampNo: '50',
    sheetNo: '50',
  },
]; const ELEMENT_FINAL7: ElementPrepChaFinalToNew[] = [
  {
    typeOfStamp: 'Insurance',
    deno: '-',
    disc: '0',
    discRs: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
    stampNo: '50',
    sheetNo: '50',
  }
]; const ELEMENT_FINAL8: ElementPrepChaFinalToNew[] = [
  {
    typeOfStamp: 'Non Judicial Paper',
    deno: '20',
    disc: '0',
    discRs: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
    stampNo: '50',
    sheetNo: '-',
  },
  {
    typeOfStamp: 'Non Judicial Paper',
    deno: '50',
    disc: '0',
    discRs: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
    stampNo: '50',
    sheetNo: '-',
  },
]; const ELEMENT_FINAL9: ElementPrepChaFinalToNew[] = [
  {
    typeOfStamp: 'Notary',
    deno: '5',
    disc: '0',
    discRs: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
    stampNo: '50',
    sheetNo: '50',
  }
]; const ELEMENT_FINAL10: ElementPrepChaFinalToNew[] = [
  {
    typeOfStamp: 'Revenue',
    deno: '1',
    disc: '0',
    discRs: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
    stampNo: '50',
    sheetNo: '50',
  },
  {
    typeOfStamp: 'Revenue',
    deno: '5',
    disc: '0',
    discRs: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
    stampNo: '50',
    sheetNo: '50',
  },
]; const ELEMENT_FINAL11: ElementPrepChaFinalToNew[] = [
  {
    typeOfStamp: 'Share transfer',
    deno: '-',
    disc: '0',
    discRs: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
    stampNo: '50',
    sheetNo: '50',
  }
]; const ELEMENT_FINAL12: ElementPrepChaFinalToNew[] = [
  {
    typeOfStamp: 'Special Adhesive',
    deno: '5',
    disc: '0',
    discRs: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
    stampNo: '50',
    sheetNo: '50',
  },
  {
    typeOfStamp: 'Special Adhesive',
    deno: '10',
    disc: '0',
    discRs: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
    stampNo: '50',
    sheetNo: '50',
  },
];

@Component({
  selector: 'app-preparation-of-challan-to',
  templateUrl: './preparation-of-challan-to.component.html',
  styleUrls: ['./preparation-of-challan-to.component.css']
})
export class PreparationOfChallanToComponent implements OnInit {
  venNameCode_List: CommonListing[] = [
    { value: '1', viewValue: 'B.S.Patel - 1005' },
    { value: '2', viewValue: 'S.K.Singh - 1004' },
    { value: '3', viewValue: 'D.B.Patel - 1002' },
    { value: '4', viewValue: 'P.D.Kapadia - 1010' },
  ];
  venPartyCode_List: CommonListing[] = [
    { value: '1', viewValue: 'Vendor' },
    { value: '2', viewValue: 'Party' },
  ];
  challanMode_List: CommonListing[] = [
    { value: '1', viewValue: 'Online Payment (Receipt Management Portal)' },
    { value: '2', viewValue: 'Over the Counter' },
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
  attachmentType_list: CommonListing[] = [
    { value: '1', viewValue: 'Supporting document' },
    { value: '2', viewValue: 'Sanction Order' },
    { value: '3', viewValue: 'Others' },
  ];
  // Datasource Stampwise as in stamp_List
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

  // Entry Table
    displayedColumns: string[] = ['position', 'checkbox', 'unitVal', 'deno', 'disc',
    'stampSheet', 'sheetNo', 'stampNo', 'totAmt', 'discRs', 'netAmt'];

    displayColumnOriginal = ['position', 'checkbox', 'unitVal', 'deno', 'disc',
    'stampSheet', 'sheetNo', 'stampNo', 'totAmt', 'discRs', 'netAmt'];
    displayColumnCondition = ['position', 'checkbox', 'unitVal', 'deno', 'disc',
    'stampSheet', 'stampNo', 'totAmt', 'discRs', 'netAmt'];

  // Listing Table
  displayFinal: string[] = ['position', 'typeOfStamp', 'unitVal', 'deno', 'disc',
    'stampSheet', 'sheetNo', 'stampNo', 'totAmt', 'discRs', 'netAmt', 'action'];
  stampCtrl: FormControl = new FormControl();
  venNameCodeCtrl: FormControl = new FormControl();
  venPartyCtrl: FormControl = new FormControl();
  challanModeCtrl: FormControl = new FormControl();
  errorMessages = stampProcessMessage;
  directiveObject = new StampProcessingDirectives(this.router, this.dialog);

  challanForm: FormGroup;
  dataSourceStamp: any;
  stampName: string;

  temp1Value = 'District Treasury Office, Gandhinagar';
  challanValue = '51/00057/072019/23';
  date: any = new Date();
  finYearValue = '2019-2020';
  vCode = '123456';
  venAddVal = 'Ahmedabad';
  placeVal = 'Ahmedabad';
  contVal = '9952314578';
  emailVal = 'bspatel@gmail.com';

  stampVal: string;

  // Stampwise variables for Add button
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
  showSubTre = false;

  constructor(private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.challanForm = this.fb.group({
      finYear: ['10'],
      challan: [''],
      chDate: [''],
      venNameCode: ['', Validators.required],
      vendorAddress: [''],
      place: [''],
      contact: [''],
      email: [''],
      stamp: ['', Validators.required],
      temp1: [''],
      venParty: ['', Validators.required],
      partyName: ['', Validators.required],
      partyadd: ['', Validators.required],
      partyMobile: [''],
      partyEmail: [''],
      challanMode: ['', Validators.required],
      netAmt: ['', Validators.required],
      majorHead: [{ value: '0030', disabled: true }],
      subMajorHead: [{ value: '', disabled: true }],
      minorHead: [{ value: '', disabled: true }],
      subHeadCode: [{ value: '', disabled: true }],
    });
  }
  // Change columns on click of vendor/party dropdown
  updateColumns() {
    if (this.challanForm.controls.venParty.value === '2') {
      // For court fee paper and non judicial paper
      if (this.challanForm.controls.stamp.value === '4' || this.challanForm.controls.stamp.value === '8') {
        this.displayedColumns = ['position', 'checkbox', 'unitVal', 'deno',
          'stampSheet', 'stampNo', 'totAmt', 'netAmt'];
      } else {
        this.displayedColumns = ['position', 'checkbox', 'unitVal', 'deno',
          'stampSheet', 'sheetNo', 'stampNo', 'totAmt', 'netAmt'];
      }
      this.displayFinal = ['position', 'typeOfStamp', 'unitVal', 'deno',
        'stampSheet', 'sheetNo', 'stampNo', 'totAmt', 'netAmt', 'action'];
    } else {
      // For court fee paper and non judicial paper
      if (this.challanForm.controls.stamp.value === '4' || this.challanForm.controls.stamp.value === '8') {
        this.displayedColumns = ['position', 'checkbox', 'unitVal', 'deno', 'disc',
          'stampSheet', 'stampNo', 'totAmt', 'discRs', 'netAmt'];
      } else {
        this.displayedColumns = ['position', 'checkbox', 'unitVal', 'deno', 'disc',
          'stampSheet', 'sheetNo', 'stampNo', 'totAmt', 'discRs', 'netAmt'];
      }
      this.displayFinal = ['position', 'typeOfStamp', 'unitVal', 'deno', 'disc',
        'stampSheet', 'sheetNo', 'stampNo', 'totAmt', 'discRs', 'netAmt', 'action'];
    }
  }
  // Add Button Click
  whenAddClick() {
    this.stampVal = this.challanForm.controls.stamp.value;

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
  gotoListing() {
    this.router.navigate(['./stamp-processing/preparation-of-challan-to-list']);
  }
  // Change data source on stamp value change
  changeStamp() {
    const stampNumber = this.challanForm.controls.stamp.value;
    if (stampNumber === '1') {
      this.stampName = 'Agency License';
      this.dataSourceStamp = this.dataSource;
      this.displayedColumns = this.displayColumnOriginal;
      // For checking Vendor/party columns
      this.updateColumns();
      // NO Values
      this.challanForm.controls.subMajorHead.setValue('');
      this.challanForm.controls.minorHead.setValue('');
      this.challanForm.controls.subHeadCode.setValue('');
    } else if (stampNumber === '2') {
      this.stampName = 'Agreement';
      this.dataSourceStamp = this.dataSource2;
      this.displayedColumns = this.displayColumnOriginal;
      // For checking Vendor/party columns
      this.updateColumns();
      this.challanForm.controls.subMajorHead.setValue('02');
      this.challanForm.controls.minorHead.setValue('102');
      this.challanForm.controls.subHeadCode.setValue('00');
    } else if (stampNumber === '3') {
      this.stampName = 'Court Fee Label';
      this.dataSourceStamp = this.dataSource3;
      this.displayedColumns = this.displayColumnOriginal;
      // For checking Vendor/party columns
      this.updateColumns();
      this.challanForm.controls.subMajorHead.setValue('01');
      this.challanForm.controls.minorHead.setValue('101');
      this.challanForm.controls.subHeadCode.setValue('01');
    } else if (stampNumber === '4') {
      this.stampName = 'Court Fee Paper';
      this.dataSourceStamp = this.dataSource4;
      this.displayedColumns = this.displayColumnCondition;
      // For checking Vendor/party columns
      this.updateColumns();
      this.challanForm.controls.subMajorHead.setValue('01');
      this.challanForm.controls.minorHead.setValue('101');
      this.challanForm.controls.subHeadCode.setValue('01');
    } else if (stampNumber === '5') {
      this.stampName = 'Foreign bill';
      this.dataSourceStamp = this.dataSource5;
      this.displayedColumns = this.displayColumnOriginal;
      // For checking Vendor/party columns
      this.updateColumns();
      // NO Values
      this.challanForm.controls.subMajorHead.setValue('');
      this.challanForm.controls.minorHead.setValue('');
      this.challanForm.controls.subHeadCode.setValue('');
    } else if (stampNumber === '6') {
      this.stampName = 'Hundi';
      this.dataSourceStamp = this.dataSource6;
      this.displayedColumns = this.displayColumnOriginal;
      // For checking Vendor/party columns
      this.updateColumns();
      // NO Values
      this.challanForm.controls.subMajorHead.setValue('');
      this.challanForm.controls.minorHead.setValue('');
      this.challanForm.controls.subHeadCode.setValue('');
    } else if (stampNumber === '7') {
      this.stampName = 'Insurance';
      this.dataSourceStamp = this.dataSource7;
      this.displayedColumns = this.displayColumnOriginal;
      // For checking Vendor/party columns
      this.updateColumns();
      // NO Values
      this.challanForm.controls.subMajorHead.setValue('');
      this.challanForm.controls.minorHead.setValue('');
      this.challanForm.controls.subHeadCode.setValue('');
    } else if (stampNumber === '8') {
      this.stampName = 'Non Judicial Paper';
      this.dataSourceStamp = this.dataSource8;
      this.displayedColumns = this.displayColumnCondition;
      // For checking Vendor/party columns
      this.updateColumns();
      this.challanForm.controls.subMajorHead.setValue('02');
      this.challanForm.controls.minorHead.setValue('102');
      this.challanForm.controls.subHeadCode.setValue('00');
    } else if (stampNumber === '9') {
      this.stampName = 'Notary';
      this.dataSourceStamp = this.dataSource9;
      this.displayedColumns = this.displayColumnOriginal;
      // For checking Vendor/party columns
      this.updateColumns();
      this.challanForm.controls.subMajorHead.setValue('01');
      this.challanForm.controls.minorHead.setValue('101');
      this.challanForm.controls.subHeadCode.setValue('01');
    } else if (stampNumber === '10') {
      this.stampName = 'Revenue';
      this.dataSourceStamp = this.dataSource10;
      this.displayedColumns = this.displayColumnOriginal;
      // For checking Vendor/party columns
      this.updateColumns();
      this.challanForm.controls.subMajorHead.setValue('02');
      this.challanForm.controls.minorHead.setValue('102');
      this.challanForm.controls.subHeadCode.setValue('00');
    } else if (stampNumber === '11') {
      this.stampName = 'Share transfer';
      this.dataSourceStamp = this.dataSource11;
      this.displayedColumns = this.displayColumnOriginal;
      // For checking Vendor/party columns
      this.updateColumns();
      // NO Values
      this.challanForm.controls.subMajorHead.setValue('');
      this.challanForm.controls.minorHead.setValue('');
      this.challanForm.controls.subHeadCode.setValue('');
    } else if (stampNumber === '12') {
      this.stampName = 'Special Adhesive';
      this.dataSourceStamp = this.dataSource12;
      this.displayedColumns = this.displayColumnOriginal;
      // For checking Vendor/party columns
      this.updateColumns();
      this.challanForm.controls.subMajorHead.setValue('02');
      this.challanForm.controls.minorHead.setValue('102');
      this.challanForm.controls.subHeadCode.setValue('00');
    }
  }

  // After clicking the checkbox
  checkboxValueChange(item) {
    this.stampVal = this.challanForm.controls.stamp.value;

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

  calculate(element) {
    element.sheetNo = Number(element.stampNo) / Number(element.stampSheet);
    element.totAmt = Number(element.stampNo) * Number(element.unitVal);
    element.netAmt = Number(element.totAmt) - ((Number(element.totAmt) * Number(element.disc)) / 100);

    console.log(element.sheetNo);
    console.log(element.totAmt);
    console.log(element.netAmt);

  }

}



