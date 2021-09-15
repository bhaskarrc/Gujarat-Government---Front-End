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
import { ElementRevertStampToNew } from 'src/app/model/stamp-processing';
import { StampProcessingDirectives } from 'src/app/common/directive/stamp-processing-directive';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { RevertStampIssueToPopupComponent } from './revert-stamp-issue-to-popup/revert-stamp-issue-to-popup.component';

// Listing table data


const ELEMENT_FINAL1: ElementRevertStampToNew[] = [
  {
    position: '1',
    typeOfStamp: 'Court Fee Label',
    deno: '1.180',
    disc: '3',
    discRs: '10',
    unitVal: '1',
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
    qtyAppred: '',
    innerDataSource: new MatTableDataSource([]),
    rowStyleClass: '',
  },
];
const ELEMENT_FINAL2: ElementRevertStampToNew[] = [
  {
    position: '3',
    typeOfStamp: 'Court Fee Paper',
    deno: '50',
    disc: '10',
    discRs: '10',
    unitVal: '100',
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
    qtyAppred: '',
    innerDataSource: new MatTableDataSource([]),
    rowStyleClass: '',
  },
];

@Component({
  selector: 'app-revert-stamp-issue-to',
  templateUrl: './revert-stamp-issue-to.component.html',
  styleUrls: ['./revert-stamp-issue-to.component.css'],
  animations: [
    trigger('expandRow', [
      state('collapsed, void', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
      transition('expanded <=> void', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ]),
  ]
})
export class RevertStampIssueToComponent implements OnInit {
  // Entry Field Details
  chNo_List: CommonListing[] = [
    { value: '1', viewValue: '51/00057/072019/23' },
    { value: '2', viewValue: '51/00057/072019/45' },
    { value: '3', viewValue: '51/00057/072019/99' },
    { value: '4', viewValue: '51/00057/072019/101' },
  ];
  chNoCtrl: FormControl = new FormControl;
  errorMessages = stampProcessMessage;
  directiveObject = new StampProcessingDirectives(this.router, this.dialog);

  revertStamp: FormGroup;
  date: any = new Date();
  treVal = 'District Treasury Office, Gandhinagar';
  venValue = 'B.S.Patel (000123)';
  fileBrowseIndex: number;
  onAdd = false;

  dataSourceFinal1 = new MatTableDataSource(ELEMENT_FINAL1);
  dataSourceFinal2 = new MatTableDataSource(ELEMENT_FINAL2);
  displayFinal = ['position', 'typeOfStamp', 'unitVal', 'deno',
  'stampSheet', 'sheetNo', 'stampNo', 'fromSeries', 'toSeries',
  'stmpIssueVen', 'totAmt', 'discRs', 'netAmt', 'action'];


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
    this.revertStamp = this.fb.group({
      finYear: ['2019-2020', Validators.required],
      tre: ['District Treasury Office, Gandhinagar', Validators.required],
      chNo: ['', Validators.required],
      revertDate: ['10-Oct-2020', Validators.required],
    });
  }

  whenAddClick() {
    this.onAdd = true;
  }
  // to open entry popup
  openAddDetails(element) {
    const dialogRef = this.dialog.open(RevertStampIssueToPopupComponent, {
      maxWidth: '1200px',
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
          fromSeries: dialogResult[0].fromSeries,
          toSeries: dialogResult[0].toSeries,
          totAmt: dialogResult[0].totAmt,
          discRs: dialogResult[0].discRs,
          netAmt: dialogResult[0].netAmt,
          stmpIssueTre: dialogResult[0].stmpIssueTre,
          stmpIssueSub: dialogResult[0].stmpIssueSub,
          stmpIssueVen: dialogResult[0].stmpIssueVen,
          qtyAppred: dialogResult[0].qtyAppred,
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


  gotoListing() {
    this.router.navigate(['./stamp-processing/revert-stamp-issue-to-list']);
  }


}
