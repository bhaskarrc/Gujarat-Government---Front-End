import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { SaveConfirmCommonDialogComponent } from '../save-confirm-common-dialog/save-confirm-common-dialog.component';
import { CloseConfirmCommonDialogComponent } from '../close-confirm-common-dialog/close-confirm-common-dialog.component';
import { SubmitConfirmCommonDialigComponent } from '../submit-confirm-common-dialig/submit-confirm-common-dialig.component';
import { InfoCommonDialogComponent } from '../info-common-dialog/info-common-dialog.component';
import { stampProcessMessage } from 'src/app/common/error-message/common-message.constants';
import { ElementPrepChaSto, ElementPrepChaFinalSto } from 'src/app/model/stamp-processing';
import { StampProcessingDirectives } from 'src/app/common/directive/stamp-processing-directive';

// Entry table data
const ELEMENT_DATA: ElementPrepChaSto[] = [
  {
    checkbox: false,
    deno: '-',
    disc: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  }
];

const ELEMENT_DATA2: ElementPrepChaSto[] = [
  {
    checkbox: false,
    deno: '100',
    disc: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  }
]; const ELEMENT_DATA3: ElementPrepChaSto[] = [
  {
    checkbox: false,
    deno: '1',
    disc: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  },
  {
    checkbox: false,
    deno: '2',
    disc: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  },
  {
    checkbox: false,
    deno: '5',
    disc: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  },
  {
    checkbox: false,
    deno: '10',
    disc: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  },
  {
    checkbox: false,
    deno: '20',
    disc: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  },
]; const ELEMENT_DATA4: ElementPrepChaSto[] = [
  {
    checkbox: false,
    deno: '50',
    disc: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  },
  {
    checkbox: false,
    deno: '60',
    disc: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  },
  {
    checkbox: false,
    deno: '100',
    disc: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  },
  {
    checkbox: false,
    deno: '200',
    disc: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  },
  {
    checkbox: false,
    deno: '500',
    disc: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  },
  {
    checkbox: false,
    deno: '1000',
    disc: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  },
  {
    checkbox: false,
    deno: '3000',
    disc: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  },
  {
    checkbox: false,
    deno: '5000',
    disc: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  },
  {
    checkbox: false,
    deno: '25000',
    disc: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  },
]; const ELEMENT_DATA5: ElementPrepChaSto[] = [
  {
    checkbox: false,
    deno: '-',
    disc: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  }
]; const ELEMENT_DATA6: ElementPrepChaSto[] = [
  {
    checkbox: false,
    deno: '1',
    disc: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  },
  {
    checkbox: false,
    deno: '10',
    disc: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  },
]; const ELEMENT_DATA7: ElementPrepChaSto[] = [
  {
    checkbox: false,
    deno: '-',
    disc: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  }
]; const ELEMENT_DATA8: ElementPrepChaSto[] = [
  {
    checkbox: false,
    deno: '20',
    disc: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  },
  {
    checkbox: false,
    deno: '50',
    disc: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  },
  {
    checkbox: false,
    deno: '100',
    disc: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  },
  {
    checkbox: false,
    deno: '500',
    disc: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  },
  {
    checkbox: false,
    deno: '1000',
    disc: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  },
  {
    checkbox: false,
    deno: '5000',
    disc: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  },
  {
    checkbox: false,
    deno: '10000',
    disc: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  },
  {
    checkbox: false,
    deno: '15000',
    disc: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  },
  {
    checkbox: false,
    deno: '20000',
    disc: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  },
  {
    checkbox: false,
    deno: '25000',
    disc: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  },
]; const ELEMENT_DATA9: ElementPrepChaSto[] = [
  {
    checkbox: false,
    deno: '5',
    disc: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  }
]; const ELEMENT_DATA10: ElementPrepChaSto[] = [
  {
    checkbox: false,
    deno: '1',
    disc: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  },
  {
    checkbox: false,
    deno: '5',
    disc: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  },
]; const ELEMENT_DATA11: ElementPrepChaSto[] = [
  {
    checkbox: false,
    deno: '-',
    disc: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  }
]; const ELEMENT_DATA12: ElementPrepChaSto[] = [
  {
    checkbox: false,
    deno: '5',
    disc: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  },
  {
    checkbox: false,
    deno: '10',
    disc: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  },
  {
    checkbox: false,
    deno: '20',
    disc: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  },
  {
    checkbox: false,
    deno: '50',
    disc: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  },
  {
    checkbox: false,
    deno: '100',
    disc: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  },
  {
    checkbox: false,
    deno: '500',
    disc: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  },
  {
    checkbox: false,
    deno: '1000',
    disc: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  },
];

// Listing table data
const ELEMENT_FINAL: ElementPrepChaFinalSto[] = [
  {
    typeOfStamp: 'Agency License',
    deno: '-',
    disc: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
    stampNo: '50',
    sheetNo: '50',
  }
];

const ELEMENT_FINAL2: ElementPrepChaFinalSto[] = [
  {
    typeOfStamp: 'Agreement',
    deno: '100',
    disc: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
    stampNo: '50',
    sheetNo: '50',
  }
]; const ELEMENT_FINAL3: ElementPrepChaFinalSto[] = [
  {
    typeOfStamp: 'Court Fee Label',
    deno: '1',
    disc: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
    stampNo: '50',
    sheetNo: '50',
  },
  {
    typeOfStamp: 'Court Fee Label',
    deno: '2',
    disc: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
    stampNo: '50',
    sheetNo: '50',
  },
  {
    typeOfStamp: 'Court Fee Label',
    deno: '5',
    disc: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
    stampNo: '50',
    sheetNo: '50',
  },
]; const ELEMENT_FINAL4: ElementPrepChaFinalSto[] = [
  {
    typeOfStamp: 'Court Fee Paper',
    deno: '50',
    disc: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
    stampNo: '50',
    sheetNo: '50',
  },
  {
    typeOfStamp: 'Court Fee Paper',
    deno: '60',
    disc: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
    stampNo: '50',
    sheetNo: '50',
  },
]; const ELEMENT_FINAL5: ElementPrepChaFinalSto[] = [
  {
    typeOfStamp: 'Foreign bill',
    deno: '-',
    disc: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
    stampNo: '50',
    sheetNo: '50',
  }
]; const ELEMENT_FINAL6: ElementPrepChaFinalSto[] = [
  {
    typeOfStamp: 'Hundi',
    deno: '1',
    disc: '0',
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
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
    stampNo: '50',
    sheetNo: '50',
  },
]; const ELEMENT_FINAL7: ElementPrepChaFinalSto[] = [
  {
    typeOfStamp: 'Insurance',
    deno: '-',
    disc: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
    stampNo: '50',
    sheetNo: '50',
  }
]; const ELEMENT_FINAL8: ElementPrepChaFinalSto[] = [
  {
    typeOfStamp: 'Non Judicial Paper',
    deno: '20',
    disc: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
    stampNo: '50',
    sheetNo: '50',
  },
  {
    typeOfStamp: 'Non Judicial Paper',
    deno: '50',
    disc: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
    stampNo: '50',
    sheetNo: '50',
  },
]; const ELEMENT_FINAL9: ElementPrepChaFinalSto[] = [
  {
    typeOfStamp: 'Notary',
    deno: '5',
    disc: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
    stampNo: '50',
    sheetNo: '50',
  }
]; const ELEMENT_FINAL10: ElementPrepChaFinalSto[] = [
  {
    typeOfStamp: 'Revenue',
    deno: '1',
    disc: '0',
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
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
    stampNo: '50',
    sheetNo: '50',
  },
]; const ELEMENT_FINAL11: ElementPrepChaFinalSto[] = [
  {
    typeOfStamp: 'Share transfer',
    deno: '-',
    disc: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
    stampNo: '50',
    sheetNo: '50',
  }
]; const ELEMENT_FINAL12: ElementPrepChaFinalSto[] = [
  {
    typeOfStamp: 'Special Adhesive',
    deno: '5',
    disc: '0',
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
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
    stampNo: '50',
    sheetNo: '50',
  },
];

@Component({
  selector: 'app-preparation-of-challan-sto',
  templateUrl: './preparation-of-challan-sto.component.html',
  styleUrls: ['./preparation-of-challan-sto.component.css']
})
export class PreparationOfChallanStoComponent implements OnInit {
  // Entry Field Details
  venNameCode_List: CommonListing[] = [
    { value: '1', viewValue: 'B.S.Patel - 1005'},
    { value: '2', viewValue: 'S.K.Singh - 1004'},
    { value: '3', viewValue: 'D.B.Patel - 1002'},
    { value: '4', viewValue: 'P.D.Kapadia - 1010'},
  ];
  stamp_List: CommonListing[] = [
    { value: '1', viewValue: 'Agency License'},
    { value: '2', viewValue: 'Agreement'},
    { value: '3', viewValue: 'Court Fee Label'},
    { value: '4', viewValue: 'Court Fee Paper'},
    { value: '5', viewValue: 'Foreign bill'},
    { value: '6', viewValue: 'Hundi'},
    { value: '7', viewValue: 'Insurance'},
    { value: '8', viewValue: 'Non Judicial Paper'},
    { value: '9', viewValue: 'Notary'},
    { value: '10', viewValue: 'Revenue'},
    { value: '11', viewValue: 'Share transfer'},
    { value: '12', viewValue: 'Special Adhesive'},
    ];
// Data Sources Stamp Wise as in stamp_List
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
    displayedColumns: string[] = ['position', 'checkbox', 'deno', 'disc', 'unitVal',
    'stampNo', 'sheetNo', 'stampSheet', 'totAmt', 'netAmt', 'remarks'];
// Listing Table
    displayFinal: string[] = ['position', 'typeOfStamp', 'deno', 'disc', 'unitVal',
    'stampNo', 'sheetNo', 'stampSheet', 'totAmt', 'netAmt', 'remarks', 'action'];
  stampCtrl: FormControl = new FormControl();
  venNameCodeCtrl: FormControl = new FormControl();
  errorMessages = stampProcessMessage;
  directiveObject = new StampProcessingDirectives(this.router, this.dialog);

  challanSubForm: FormGroup;

  temp1Value = 'Sub Treasury Office, Mansa';
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

  // Stampwise variables for Checkbox
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

  dataSourceStamp: any;
  stampName: string;

  constructor(private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.challanSubForm = this.fb.group({
      finYear: ['10'],
      challan: [''],
      chDate: [''],
      venNameCode: [''],
      vendorAddress: [''],
      place: [''],
      contact: [''],
      email: [''],
      stamp: ['', Validators.required],
      temp1: [''],
    });
  }
  // Change data source on stamp value change
  changeStamp() {
    const stampNumber = this.challanSubForm.controls.stamp.value;
    if (stampNumber === '1') {
      this.stampName = 'Agency License';
      this.dataSourceStamp = this.dataSource;
    } else if (stampNumber === '2') {
      this.stampName = 'Agreement';
      this.dataSourceStamp = this.dataSource2;
    } else if (stampNumber === '3') {
      this.stampName = 'Court Fee Label';
      this.dataSourceStamp = this .dataSource3;
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

// Add Button Click
  whenAddClick() {
    this.stampVal = this.challanSubForm.controls.stamp.value;

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
    this.router.navigate(['./stamp-processing/preparation-of-challan-sto-list']);
  }

  goToInfo() {
    const dialogRef = this.dialog.open(InfoCommonDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes') {
      }
    });
  }

// After clickung the checkbox
  checkboxValueChange(item) {
    this.stampVal = this.challanSubForm.controls.stamp.value;

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

}
