import { CommonListing } from './../../../model/common-listing';
import { Component, OnInit, AfterViewInit, ViewChild, Inject, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ReplaySubject, Subject, Observable } from 'rxjs';
import { takeUntil, startWith, map, flatMap } from 'rxjs/operators';
import { element } from '@angular/core/src/render3/instructions';
import * as cloneDeep from 'lodash/cloneDeep';

// import { DialogData } from '../../standing-charge/standalone-charge-listing/standalone-charge-listing.component';
import { SelectionModel } from '@angular/cdk/collections';
import { ToastrService } from 'ngx-toastr';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
// tslint:disable-next-line:max-line-length
import { StandingChargeForwardDialogComponent, StadingChargeConfirmDialogComponent } from '../../standing-charge/standalone-charge/standalone-charge.component';
export interface HeaderElement {
  label: string | '';
  value: string | '';
}

@Component({
  selector: 'app-work-in-progress-consolidate-view',
  templateUrl: './work-in-progress-consolidate-view.component.html',
  styleUrls: ['./work-in-progress-consolidate-view.component.css']
})
export class WorkInProgressConsolidateViewComponent implements OnInit {


  animal: string;
  name: string;
  isBreakupVisible: Boolean = false;
  isAttachmentSelected: Boolean = false;
  selectedIndex: number;
  returnData : number;

  table1 = true;
  table2 = false;
  grantInAid: Boolean;


  headerJson: HeaderElement[] = [
    {label: 'Financial Year', value: '2019-2020'},
    {label: 'Demand', value: '010: Other expenditure pertaining to Education Department'},
    {label: 'Book Publication No.', value: '04: Education Department'},
    {label: 'Revenue/Capital', value: 'Revenue'},
    {label: 'Major Head', value: '2205: Art and Culture'},
    {label: 'Sector', value: 'B0: B-Social Service'},
    {label: 'Sub Sector', value: 'a0: (A) Education, Sports, Art and Culture'},
    {label: 'Sub Major Head', value: '00: '},
    {label: 'Minor Head', value: '101: Fine Arts Education'},
    {label: 'Sub Head', value: '01: Grants to Sangeet Natya Bharati'},
    {label: 'Detailed Head', value: '00: Grants to Sangeet Natya Bharati'},
    {label: 'Charged/Voted', value: 'Voted'},
    {label: 'Item Name', value: 'Organic Farming Cell Staff'},
    {label: 'Object Head', value: '5100:Motor Vehicles'},
  ];


  paginationSize: number[] = [5, 10, 20, 50, 100, 200];

  @ViewChild('schemeListPaginator') schemeListPaginator: MatPaginator;
  @ViewChild('ddoListPaginator') ddoListPaginator: MatPaginator;

  @ViewChild('schemeListSort') schemeListSort: MatSort;
  @ViewChild('ddoListSort') ddoListSort: MatSort;


  // isProcessed: Boolean = false;

  percentage;
  detailHead;

  brwoseData: any[] = [
    { attachmentType: 'Others', fileName: 'PAN.jpeg' },
  ];
  displayedBrowseColumns = ['position', 'attachmentType', 'fileName', 'action'];
  dataSourceBrowse = new MatTableDataSource(this.brwoseData);

  wipDataSource: any[] = [this.createWIPData()];
  wipDataSource1: any[] = [this.createWIPData1()];
  dataSourceWorkInProgress = new MatTableDataSource(this.wipDataSource);
  dataSourceWorkInProgress1 = new MatTableDataSource(this.wipDataSource1);
  displayedAttachmentColumns: string[] = [
    'districtId', 'districtName', 'workId', 'workNo', 'workName',
    'val1', 'val2', 'val3', 'val4', 'val5', 'val6', 'val7', 'total', 'remarks', 'action'
  ];
  displayedAttachmentColumns1: string[] = [
    'districtId', 'districtName', 'workId', 'workNo', 'workName',
    'val1', 'val2', 'val3', 'val4', 'val5', 'val6', 'val7', 'total', 'remarks', 'css', 'action'
  ];

  fileBrowseIndex: number;

  date: any = new Date();


  attachmentType_list: any[] = [
    {value: '1', viewValue: 'Supporting Document'},
    {value: '2', viewValue: 'Sanction Order'},
    {value: '3', viewValue: 'Establishment'},
    {value: '4', viewValue: 'Rojmdar & Work charge'},
    {value: '5', viewValue: 'Outsource'},
    {value: '6', viewValue: 'Leave Encashment'},
    {value: '7', viewValue: 'Other'},
  ];

  attachmentTypeCodeCtrl: FormControl = new FormControl();
  filteredAttachmentTypeCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  _onDestroy = new Subject<void>();

  isExtendedRow = (index, item) => item.extend;

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  /** The label for the checkbox on the passed row */

  // @Input() someProperty: number;
  // @Output() dataChanged = new EventEmitter<string>();


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    public dialog: MatDialog,
    private el: ElementRef,
    private toastr: ToastrService,
  ) {
    // this.dataChanged = new EventEmitter();
   }

  ngOnInit() {
    // this.clicked(this.returnData);



    this.filteredAttachmentTypeCode.next(this.attachmentType_list.slice());
    this.attachmentTypeCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.attachmentType_list, this.attachmentTypeCodeCtrl.value, this.filteredAttachmentTypeCode);
    });
  }

  createWIPData() {
    return {
      districtId: 1,
      districtName: 'Ahmedabad',
      workId: 123,
      workNo: 123,
      workName: 'Test',
      val1: 0.00,
      val2: 0.00,
      val3: 0.00,
      val4: 0.00,
      val5: 0.00,
      val6: 0.00,
      val7: 0.00,
      total: 0.00,
      remarks: '',
      css: ''
    };
  }
  createWIPData1() {
    return {
      districtId: 1,
      districtName: 'Ahmedabad',
      workId: 123,
      workNo: 123,
      workName: 'Test',
      val1: 0.00,
      val2: 0.00,
      val3: 0.00,
      val4: 0.00,
      val5: 0.00,
      val6: 0.00,
      val7: 0.00,
      total: 0.00,
      remarks: '',
      css: ''
    };
  }

  filterObjValue(arrValue, searchValue, filteredValue) {
    if (!arrValue) {
      return;
    }
    // get the search keyword
    let search = searchValue;
    if (!search) {
      filteredValue.next(arrValue.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the values
   filteredValue.next(
      arrValue.filter(item => item.viewValue.toLowerCase().indexOf(search) > -1)
    );
  }


calcAmtSanc() {
  let calcAmtSanc = 0;
  this.dataSourceWorkInProgress.data.forEach((element, index) => {
    calcAmtSanc = calcAmtSanc + Number(element.val1);
  });

  return calcAmtSanc != 0 ? calcAmtSanc : '';
}
calcActExpen() {
  let calcActExpen = 0;
  this.dataSourceWorkInProgress.data.forEach((element, index) => {
    calcActExpen = calcActExpen + Number(element.val2);
  });

  return calcActExpen != 0 ? calcActExpen : '';
}
calcTotProg() {
  let calcTotProg = 0;
  this.dataSourceWorkInProgress.data.forEach((element, index) => {
    calcTotProg = calcTotProg + Number(element.val3);
  });

  return calcTotProg != 0 ? calcTotProg : '';
}
calcBudEst() {
  let calcBudEst = 0;
  this.dataSourceWorkInProgress.data.forEach((element, index) => {
    calcBudEst = calcBudEst + Number(element.val4);
  });

  return calcBudEst != 0 ? calcBudEst : '';
}
calcActFourMon() {
  let calcActFourMon = 0;
  this.dataSourceWorkInProgress.data.forEach((element, index) => {
    calcActFourMon = calcActFourMon + Number(element.val5);
  });

  return calcActFourMon != 0 ? calcActFourMon : '';
}
calcExpEightMonth() {
  let calcExpEightMonth = 0;
  this.dataSourceWorkInProgress.data.forEach((element, index) => {
    calcExpEightMonth = calcExpEightMonth + Number(element.val6);
  });

  return calcExpEightMonth != 0 ? calcExpEightMonth : '';
}
calcTotFourEight() {
  let calcTotFourEight = 0;
  this.dataSourceWorkInProgress.data.forEach((element, index) => {
    calcTotFourEight = calcTotFourEight + Number(element.val5) + Number(element.val6) ;
  });

  return calcTotFourEight != 0 ? calcTotFourEight : '';
}
calcTotal() {
  let calcTotal = 0;
  this.dataSourceWorkInProgress.data.forEach((element, index) => {
    calcTotal = calcTotal + Number(element.total);
  });

  return calcTotal != 0 ? calcTotal : '';
}
calcAmtSancCss() {
  let calcAmtSanc = 0;
  this.dataSourceWorkInProgress1.data.forEach((element, index) => {
    calcAmtSanc = calcAmtSanc + Number(element.val1);
  });

  return calcAmtSanc != 0 ? calcAmtSanc : '';
}
calcActExpenCss() {
  let calcActExpen = 0;
  this.dataSourceWorkInProgress1.data.forEach((element, index) => {
    calcActExpen = calcActExpen + Number(element.val2);
  });

  return calcActExpen != 0 ? calcActExpen : '';
}
calcTotProgCss() {
  let calcTotProg = 0;
  this.dataSourceWorkInProgress1.data.forEach((element, index) => {
    calcTotProg = calcTotProg + Number(element.val3);
  });

  return calcTotProg != 0 ? calcTotProg : '';
}
calcBudEstCss() {
  let calcBudEst = 0;
  this.dataSourceWorkInProgress1.data.forEach((element, index) => {
    calcBudEst = calcBudEst + Number(element.val4);
  });

  return calcBudEst != 0 ? calcBudEst : '';
}
calcActFourMonCss() {
  let calcActFourMon = 0;
  this.dataSourceWorkInProgress1.data.forEach((element, index) => {
    calcActFourMon = calcActFourMon + Number(element.val5);
  });

  return calcActFourMon != 0 ? calcActFourMon : '';
}
calcExpEightMonthCss() {
  let calcExpEightMonth = 0;
  this.dataSourceWorkInProgress1.data.forEach((element, index) => {
    calcExpEightMonth = calcExpEightMonth + Number(element.val6);
  });

  return calcExpEightMonth != 0 ? calcExpEightMonth : '';
}
calcTotFourEightCss() {
  let calcTotFourEight = 0;
  this.dataSourceWorkInProgress1.data.forEach((element, index) => {
    calcTotFourEight = calcTotFourEight + Number(element.val5) + Number(element.val6) ;
  });

  return calcTotFourEight != 0 ? calcTotFourEight : '';
}
calcTotalCss() {
  let calcTotal = 0;
  this.dataSourceWorkInProgress1.data.forEach((element, index) => {
    calcTotal = calcTotal + Number(element.total);
  });

  return calcTotal != 0 ? calcTotal : '';
}


  getTabIndex (tabIndex) {
    this.selectedIndex = tabIndex;
  }

  gotoListing() {
    this.router.navigate(['./budget/work-in-progress-consolidate-list']);
  }

  decimalKeyPress(event: any) {
    const pattern = /^\d+(\.\d{0,2})?$/;
    const inputChar = String.fromCharCode(!event.charCode ? event.which : event.charCode);

    let tempstr = event.target.value;
    tempstr += inputChar;

    if (!pattern.test(tempstr)) {
      // invalid character, prevent input
      event.preventDefault();
      return false;
    }
    // if(this.amount.value < event.element.amountproposedbyHOD.value) {

    // }

  }

  integerKeyPress(event: any) {
    const pattern = /^\d{0,5}?$/;
    const inputChar = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    // If the key is backspace, tab, left, right or delete
    const keystobepassedout = '$Backspace$Delete$Home$Tab$ArrowLeft$ArrowRight$ArrowUp$ArrowDown$End$';
    if (keystobepassedout.indexOf('$' + event.key + '$') !== -1) {
      return true;
    }
    if (event.target.value.length > 5) {
      event.preventDefault();
      return false;
    }

    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
      return false;
    }
    return true;
  }

  decimalPoint(data, key) {
    if (data[key]) {
      data[key] = Number(data[key]).toFixed(2);
    }
  }


  addRecord(): void {
    const p_data = this.dataSourceWorkInProgress.data;
    p_data.push(this.createWIPData());
    this.dataSourceWorkInProgress.data = p_data;
  }

  deleteRecord(index): void {
    this.dataSourceWorkInProgress.data.splice(index, 1);
    this.dataSourceWorkInProgress = new MatTableDataSource(this.dataSourceWorkInProgress.data);
  }

  addRecord1(): void {
    const p_data = this.dataSourceWorkInProgress1.data;
    p_data.push(this.createWIPData());
    this.dataSourceWorkInProgress1.data = p_data;
  }

  deleteRecord1(index): void {
    this.dataSourceWorkInProgress1.data.splice(index, 1);
    this.dataSourceWorkInProgress1 = new MatTableDataSource(this.dataSourceWorkInProgress1.data);
  }
  // tslint:disable-next-line: member-ordering
  hodeApprodData: string;
  // tslint:disable-next-line: member-ordering
  values = [
    { 'name': 'Proposed Amount in Percentage', ID: 'D1', 'checked': false },
    { 'name': 'Proposed Amount in Value', ID: 'D2', 'checked': false}
];

submitToNextLevel(): void {
  const dialogRef = this.dialog.open(StandingChargeForwardDialogComponent, {
    width: '2700px',
    height: '600px'
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result === 'no') {
    } else if (result === 'yes') {
      this.showConfirmationPopup();
    }
  });
}
showConfirmationPopup() {
  const dialogRef = this.dialog.open(StadingChargeConfirmDialogComponent, {
    width: '400px'
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result === 'no') {
    } else if (result === 'save') {
    }
  });
}
backCharge() {
  this.router.navigate(['./budget/work-in-progress-consolidate-list']);
}

}
