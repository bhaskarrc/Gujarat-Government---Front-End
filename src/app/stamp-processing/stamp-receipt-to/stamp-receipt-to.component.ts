import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { CloseConfirmCommonDialogComponent } from '../close-confirm-common-dialog/close-confirm-common-dialog.component';
import { SubmitConfirmCommonDialigComponent } from '../submit-confirm-common-dialig/submit-confirm-common-dialig.component';
import { ToastrService } from 'ngx-toastr';
import { StampDetailsCommonPopupComponent } from '../stamp-details-common-popup/stamp-details-common-popup.component';
import { stampProcessMessage } from 'src/app/common/error-message/common-message.constants';
import { ElementRecTo } from 'src/app/model/stamp-processing';
import { StampProcessingDirectives } from 'src/app/common/directive/stamp-processing-directive';
import { StampReceiptToPopupComponent } from './stamp-receipt-to-popup/stamp-receipt-to-popup.component';
import { trigger, state, style, transition, animate } from '@angular/animations';

// Listing table data

const ELEMENT_DATA: ElementRecTo[] = [
  {
    deno: '1',
    position: '1',
    typeOfStamp: 'Court Fee Label',
    prevIndent: '20',
    qtyprevIndent: '3',
    reuseQty: '5',
    qtyApp: '10',
    denominationCode: '1.120',
    stampSheet: '120',
    actQtyRecTo: '',
    fromSeries: '-',
    toSeries: '-',
    reuseQtySub: '1.80',
    isDisable: true,
    isNew: false,
    innerDataSource: new MatTableDataSource([]),
    rowStyleClass: '',
  },
  {
    deno: '2',
    position: '2',
    typeOfStamp: 'Court Fee Label',
    prevIndent: '20',
    qtyprevIndent: '4',
    reuseQty: '5',
    qtyApp: '10',
    denominationCode: '2.140',
    stampSheet: '140',
    actQtyRecTo: '',
    fromSeries: '-',
    toSeries: '-',
    reuseQtySub: '2.50',
    isDisable: true,
    isNew: false,
    innerDataSource: new MatTableDataSource([]),
    rowStyleClass: '',
  }, {
    deno: '5',
    position: '3',
    typeOfStamp: 'Court Fee Label',
    prevIndent: '20',
    qtyprevIndent: '6',
    reuseQty: '5',
    qtyApp: '10',
    denominationCode: '5.180',
    stampSheet: '180',
    actQtyRecTo: '',
    fromSeries: '-',
    toSeries: '-',
    reuseQtySub: '5.40',
    isDisable: true,
    isNew: false,
    innerDataSource: new MatTableDataSource([]),
    rowStyleClass: '',
  },
  {
    deno: '10',
    position: '4',
    typeOfStamp: 'Court Fee Paper',
    prevIndent: '20',
    qtyprevIndent: '3',
    reuseQty: '5',
    qtyApp: '10',
    denominationCode: '10',
    stampSheet: '1',
    actQtyRecTo: '',
    fromSeries: 'A-000035',
    toSeries: 'A-000100',
    reuseQtySub: '10',
    isDisable: true,
    isNew: false,
    innerDataSource: new MatTableDataSource([]),
    rowStyleClass: '',
  },
  {
    deno: '20',
    position: '5',
    typeOfStamp: 'Court Fee Paper',
    prevIndent: '20',
    qtyprevIndent: '4',
    reuseQty: '5',
    qtyApp: '10',
    denominationCode: '20',
    stampSheet: '1',
    actQtyRecTo: '',
    fromSeries: 'B-000100',
    toSeries: 'B-000200',
    reuseQtySub: '5',
    isDisable: true,
    isNew: false,
    innerDataSource: new MatTableDataSource([]),
    rowStyleClass: '',
  }, {
    deno: '50',
    position: '6',
    typeOfStamp: 'Court Fee Paper',
    prevIndent: '20',
    qtyprevIndent: '6',
    reuseQty: '5',
    qtyApp: '10',
    denominationCode: '50',
    stampSheet: '1',
    actQtyRecTo: '',
    fromSeries: 'C-000032',
    toSeries: 'C-000125',
    reuseQtySub: '10',
    isDisable: true,
    isNew: false,
    innerDataSource: new MatTableDataSource([]),
    rowStyleClass: '',
  },
];


@Component({
  selector: 'app-stamp-receipt-to',
  templateUrl: './stamp-receipt-to.component.html',
  styleUrls: ['./stamp-receipt-to.component.css'],
  animations: [
    trigger('expandRow', [
      state('collapsed, void', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
      transition('expanded <=> void', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ]),
  ]
})
export class StampReceiptToComponent implements OnInit {
  // Entry Field Details
  modeReceipt_List: CommonListing[] = [
    { value: '1', viewValue: 'Against Indent' },
    { value: '2', viewValue: 'From Sub Treasury Office' },
  ];
  denoVal_list: CommonListing[] = [
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '2' },
    { value: '2', viewValue: '5' },
    { value: '2', viewValue: '10' },
    { value: '2', viewValue: '20' },
  ];
  denoCode_list: CommonListing[] = [
    { value: '1', viewValue: '10' },
    { value: '2', viewValue: '20' },
    { value: '2', viewValue: '30' },
    { value: '2', viewValue: '50' },
  ];

  indentNumber_List: CommonListing[] = [
    { value: '1', viewValue: '51/00057/072019/23' },
    { value: '2', viewValue: '51/00057/072019/32' },
    { value: '3', viewValue: '51/00057/072019/44' },
  ];

  subTreOff_List: CommonListing[] = [
    { value: '1', viewValue: 'Sub Treasury Office, Mansa' },
    { value: '2', viewValue: 'Sub Treasury Office, Kalol' },
    { value: '3', viewValue: 'Sub Treasury Office, Dehgam' },
  ];


  dataSource = new MatTableDataSource(ELEMENT_DATA);
  // Entry Table
  displayedColumns = ['position', 'typeOfStamp', 'deno', 'prevIndent',
    'qtyprevIndent', 'reuseQty', 'qtyApp', 'actualQtyRec',
    'fromSeries', 'toSeries', 'action'];
  modeReceiptCtrl: FormControl = new FormControl;
  subTreOffCtrl: FormControl = new FormControl;
  indentNumberCtrl: FormControl = new FormControl;
  errorMessages = stampProcessMessage;
  directiveObject = new StampProcessingDirectives(this.router, this.dialog);

  stampReceipt: FormGroup;
  date: any = new Date();
  treOffVal = 'District Treasury Office, Gandhinagar';
  stampVal: string;
  onAdd = false;

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
    this.stampReceipt = this.fb.group({
      finYear: ['2019-2020', Validators.required],
      treOff: [''],
      recDate: [''],
      modeReceipt: ['', Validators.required],
      indentTo: ['Superintendent of Stamps Office, Gandhinagar'],
      subTreOff: ['', Validators.required],
      venParty: ['', Validators.required],
      indentNumber: ['', Validators.required],
    });
  }
  // Display columns as per mode of Receipt field
  updateColumns() {
    if (this.stampReceipt.controls.modeReceipt.value === '1') {
      this.displayedColumns = ['position', 'typeOfStamp', 'deno',
        'prevIndent', 'qtyprevIndent', 'reuseQty', 'qtyApp', 'actualQtyRec',
        'fromSeries', 'toSeries', 'action'];
    } else {
      this.displayedColumns = ['position', 'typeOfStamp', 'deno', 'prevIndent', 'qtyprevIndent',
        'reuseQtySub', 'actQtyRecTo', 'fromSeries', 'toSeries', 'action'];
    }
  }
  // Add Button Click
  whenAddClick() {
    this.onAdd = true;
  }

  gotoListing() {
    this.router.navigate(['./stamp-processing/stamp-receipt-to-list']);
  }

  // to open entry popup
  openAddDetails(element) {
    const dialogRef = this.dialog.open(StampReceiptToPopupComponent, {
      maxWidth: '1200px',
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult === 'close') {
        console.log(dialogResult);
      } else {
        element.innerDataSource.data.push({
          deno: dialogResult[0].denominationvalue,
          typeOfStamp: dialogResult[0].typeOfStamp,
          prevIndent: dialogResult[0].prevIndent,
          qtyprevIndent: dialogResult[0].qtyprevIndent,
          reuseQty: dialogResult[0].reuseQty,
          qtyApp: dialogResult[0].qtyApp,
          denominationCode: dialogResult[0].denominationCode,
          stampSheet: dialogResult[0].stampSheet,
          actQtyRecTo: dialogResult[0].actQtyRecTo,
          fromSeries: dialogResult[0].fromSeries,
          toSeries: dialogResult[0].toSeries,
          reuseQtySub: dialogResult[0].reuseQtySub,
        });
        element.innerDataSource.data = element.innerDataSource.data;
        element.rowStyleClass = 'classForBackground pointerCursor';
      }
    });
  }
  // to delete expanded row
  deleteRow(element, index) {
    element.innerDataSource.data.splice(index, 1);
    element.innerDataSource.data = element.innerDataSource.data;
    if (element.innerDataSource.data.length > 0) {
      element.rowStyleClass = 'classForBackground pointerCursor';
    } else {
      element.rowStyleClass = '';
    }
  }

}
