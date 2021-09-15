import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { InfoCommonDialogComponent } from '../../info-common-dialog/info-common-dialog.component';
import { ElementPrepChaSto, ElementPrepChaFinalSto } from 'src/app/model/stamp-processing';
const ELEMENT_DATA3: ElementPrepChaSto[] = [
  {
    checkbox: true,
    deno: '1',
    disc: '0',
    unitVal: '5',
    stampSheet: '10',
    totAmt: '50',
    netAmt: '50',
  },
  {
    checkbox: true,
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
];

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
];

@Component({
  selector: 'app-preparation-of-challan-sto-view',
  templateUrl: './preparation-of-challan-sto-view.component.html',
  styleUrls: ['./preparation-of-challan-sto-view.component.css']
})
export class PreparationOfChallanStoViewComponent implements OnInit {

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
    dataSource3 = new MatTableDataSource(ELEMENT_DATA3);
    // Final Tables
    dataSourceFinal1 = new MatTableDataSource(ELEMENT_FINAL);
    dataSourceFinal2 = new MatTableDataSource(ELEMENT_FINAL2);
    dataSourceFinal3 = new MatTableDataSource(ELEMENT_FINAL3);
    dataSourceFinalHeading = [];

    displayedColumns: string[] = ['position', 'checkbox', 'deno', 'disc', 'unitVal',
    'stampNo', 'sheetNo', 'stampSheet', 'totAmt', 'netAmt', 'remarks'];

    displayFinal: string[] = ['position', 'typeOfStamp', 'deno', 'disc', 'unitVal',
    'stampNo', 'sheetNo', 'stampSheet', 'totAmt', 'netAmt', 'remarks', 'action'];
  stampCtrl: FormControl = new FormControl();
  venNameCodeCtrl: FormControl = new FormControl();

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
      venNameCode: ['B.S.Patel - 1005'],
      vendorAddress: [''],
      place: [''],
      contact: [''],
      email: [''],
      stamp: ['3'],
      temp1: [''],
    });
  }

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


  checkboxValueChange(item) {
    this.stampVal = this.challanSubForm.controls.stamp.value;

    if (this.stampVal === '1') {
      this.onCheck = true;
    } else if (this.stampVal === '2') {
      this.onCheck2 = true;
    } else if (this.stampVal === '3') {
      this.onCheck3 = true;
    }
  }

}
