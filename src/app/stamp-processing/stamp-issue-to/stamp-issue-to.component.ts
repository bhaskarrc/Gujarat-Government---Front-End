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
import { ElementIssueTo } from 'src/app/model/stamp-processing';
import { StampProcessingDirectives } from 'src/app/common/directive/stamp-processing-directive';
import { StampIssueToPopupComponent } from './stamp-issue-to-popup/stamp-issue-to-popup.component';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { HistoryIndentConsolidationPopupComponent } from '../indent-consolidation/history-indent-consolidation-popup/history-indent-consolidation-popup.component';


// Listing table data

 const ELEMENT_FINAL1: ElementIssueTo[] = [
  {
    position: '1',
    typeOfStamp: 'Court Fee Label',
    deno: '1.180',
    disc: '3',
    discRs: '10',
    unitVal: '1',
    availQty: '10',
    authQty: '8',
    requestedQuantity: '5',
    requestedQuantitySub: '5',
    stampSheet: '180',
    stampNo: '9',
    sheetNo: '2',
    fromSeries: '-',
    toSeries: '-',
    totAmt: '200',
    netAmt: '100',
    stmpIssueTre: '100',
    stmpIssueSub: '100',
    stmpIssueVen: '100',
    qtyApprScr: '',
    amt: '',
    qtyAppred: '',
    innerDataSource: new MatTableDataSource([]),
    rowStyleClass: '',
  },
  {
    position: '2',
    typeOfStamp: 'Court Fee Label',
    deno: '5.140',
    disc: '3',
    discRs: '10',
    unitVal: '5',
    availQty: '9',
    authQty: '7',
    requestedQuantity: '10',
    requestedQuantitySub: '10',
    stampSheet: '140',
    stampNo: '9',
    sheetNo: '2',
    fromSeries: '-',
    toSeries: '-',
    totAmt: '200',
    netAmt: '200',
    stmpIssueTre: '100',
    stmpIssueSub: '100',
    stmpIssueVen: '100',
    qtyApprScr: '',
    amt: '',
    qtyAppred: '',
    innerDataSource: new MatTableDataSource([]),
    rowStyleClass: '',
  },
];
const ELEMENT_FINAL2: ElementIssueTo[] = [
  {
    position: '3',
    typeOfStamp: 'Court Fee Paper',
    deno: '50',
    disc: '10',
    discRs: '10',
    unitVal: '100',
    availQty: '11',
    authQty: '10',
    requestedQuantity: '15',
    requestedQuantitySub: '15',
    stampSheet: '1',
    stampNo: '',
    sheetNo: '-',
    fromSeries: 'A-000001',
    toSeries: 'A-000100',
    totAmt: '100',
    netAmt: '100',
    stmpIssueTre: '100',
    stmpIssueSub: '100',
    stmpIssueVen: '100',
    qtyApprScr: '',
    amt: '',
    qtyAppred: '',
    innerDataSource: new MatTableDataSource([]),
    rowStyleClass: '',
  },
  {
    position: '4',
    typeOfStamp: 'Court Fee Paper',
    deno: '60',
    disc: '10',
    discRs: '10',
    unitVal: '500',
    availQty: '10',
    authQty: '10',
    requestedQuantity: '30',
    requestedQuantitySub: '30',
    stampSheet: '1',
    stampNo: '',
    sheetNo: '-',
    fromSeries: 'B-000001',
    toSeries: 'B-000100',
    totAmt: '100',
    netAmt: '100',
    stmpIssueTre: '100',
    stmpIssueSub: '100',
    stmpIssueVen: '100',
    qtyApprScr: '',
    amt: '',
    qtyAppred: '',
    innerDataSource: new MatTableDataSource([]),
    rowStyleClass: '',
  },
];

@Component({
  selector: 'app-stamp-issue-to',
  templateUrl: './stamp-issue-to.component.html',
  styleUrls: ['./stamp-issue-to.component.css'],
  animations: [
    trigger('expandRow', [
      state('collapsed, void', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
      transition('expanded <=> void', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ]),
  ]
})
export class StampIssueToComponent implements OnInit {
  // Entry Field Details
  stIssue_List: CommonListing[] = [
    { value: '1', viewValue: 'Treasury' },
    { value: '2', viewValue: 'Sub Treasury' },
    { value: '3', viewValue: 'Vendor / Party' },
  ];


  treOff_List: CommonListing[] = [
    { value: '1', viewValue: 'Ahmedabad Treasury Office' },
    { value: '2', viewValue: 'Amreli Treasury Office' },
    { value: '3', viewValue: 'Anand Treasury Office' },
  ];


  subTreOff_List: CommonListing[] = [
    { value: '1', viewValue: 'Sub Treasury Office, Mansa' },
    { value: '2', viewValue: 'Sub Treasury Office, Kalol' },
    { value: '3', viewValue: 'Sub Treasury Office, Dehgam' },
  ];

  venParty_List: CommonListing[] = [
    { value: '1', viewValue: 'B.S.Patel (000123)' },
    { value: '2', viewValue: 'S.K.Singh (000124)' },
    { value: '3', viewValue: 'D.B.Patel (000125)' },
    { value: '4', viewValue: 'P.D.Kapadia (000126)' },
  ];

  indentNumber_List: CommonListing[] = [
    { value: '1', viewValue: '51/00057/072019/23' },
    { value: '2', viewValue: '51/00057/072019/24' },
  ];

  challanNumber_List: CommonListing[] = [
    { value: '1', viewValue: '51/00057/072019/23' },
    { value: '2', viewValue: '51/00057/072019/24' },
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

  dataSourceFinal1 = new MatTableDataSource(ELEMENT_FINAL1);
  dataSourceFinal2 = new MatTableDataSource(ELEMENT_FINAL2);
  // Entry Table
  displayFinal = [];
  displayedColumns = ['position', 'typeOfStamp', 'unitVal',
  'availQty', 'authQty', 'requestedQuantity', 'stmpIssueTre', 'fromSeries', 'toSeries', 'qtyApprScr',
  'amt', 'action'];
  displayedColumns2 = ['position', 'typeOfStamp', 'unitVal',
  'availQty', 'authQty', 'requestedQuantitySub', 'stmpIssueSub', 'fromSeries', 'toSeries', 'qtyApprScr',
  'amt', 'action'];
  displayedColumns3 = ['position', 'typeOfStamp', 'unitVal', 'deno', 'disc',
  'stampSheet', 'sheetNo', 'stampNo', 'fromSeries', 'toSeries', 'totAmt', 'discRs', 'netAmt',
   'stmpIssueVen', 'qtyAppred', 'action'];
  stIssueCtrl: FormControl = new FormControl;
  treOffCtrl: FormControl = new FormControl;
  subTreOffCtrl: FormControl = new FormControl;
  venPartyCtrl: FormControl = new FormControl;
  indentNumberCtrl: FormControl = new FormControl;
  challanNumberCtrl: FormControl = new FormControl;
  errorMessages = stampProcessMessage;
  spanVal: number;

  directiveObject = new StampProcessingDirectives(this.router, this.dialog);
  stampIssue: FormGroup;
  date: any = new Date();
  dateOfIndentTreVal = '14-Apr-2020';
  indentTypeVal = 'Regular Indent';
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
    this.stampIssue = this.fb.group({
      finYear: ['2019-2020', Validators.required],
      stIssue: ['', Validators.required],
      treOff: ['', Validators.required],
      subTreOff: ['', Validators.required],
      venParty: ['', Validators.required],
      indentNumber: ['', Validators.required],
      challanNumber: ['', Validators.required],
      dateOfIndentTre: [''],
      indentType: [''],
    });
  }

  whenAddClick() {
    this.onAdd = true;
  }

  gotoListing() {
    this.router.navigate(['./stamp-processing/stamp-issue-to-list']);
  }
  // Display columns as per mode of Receipt field
  updateColumns() {
    if (this.stampIssue.controls.stIssue.value === '1') {
      this.displayFinal = this.displayedColumns;
      this.spanVal = 13;
    } else if (this.stampIssue.controls.stIssue.value === '2') {
      this.displayFinal = this.displayedColumns2;
      this.spanVal = 13;
    } else {
      this.displayFinal = this.displayedColumns3;
      this.spanVal = 16;
    }
  }

  // To Open History Pppoup
  openHistory() {
    const dialogRef = this.dialog.open(HistoryIndentConsolidationPopupComponent, {
      maxWidth: '1200px',
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      console.log(dialogResult);
    });
  }
  // to open entry popup
  openAddDetails(element) {
    const dialogRef = this.dialog.open(StampIssueToPopupComponent, {
      maxWidth: '1200px', data: this.stampIssue.controls.stIssue.value
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult === 'close') {
        console.log(dialogResult);
      } else {
        element.innerDataSource.data.push({
          typeOfStamp: dialogResult[0].typeOfStamp,
          unitVal: dialogResult[0].unitVal,
          deno: dialogResult[0].deno,
          disc: dialogResult[0].disc,
          stampSheet: dialogResult[0].stampSheet,
          sheetNo: dialogResult[0].sheetNo,
          stampNo: dialogResult[0].stampNo,
          availQty: dialogResult[0].availQty,
          authQty: dialogResult[0].authQty,
          requestedQuantity: dialogResult[0].requestedQuantity,
          requestedQuantitySub: dialogResult[0].requestedQuantitySub,
          fromSeries: dialogResult[0].fromSeries,
          toSeries: dialogResult[0].toSeries,
          totAmt: dialogResult[0].totAmt,
          discRs: dialogResult[0].discRs,
          netAmt: dialogResult[0].netAmt,
          stmpIssueTre: dialogResult[0].stmpIssueTre,
          stmpIssueSub: dialogResult[0].stmpIssueSub,
          stmpIssueVen: dialogResult[0].stmpIssueVen,
          qtyAppred: dialogResult[0].qtyAppred,
          qtyApprScr: dialogResult[0].qtyApprScr,
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
