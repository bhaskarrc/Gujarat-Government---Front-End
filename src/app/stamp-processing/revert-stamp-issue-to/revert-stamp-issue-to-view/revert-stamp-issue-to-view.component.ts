import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { ElementRevertStampTo } from 'src/app/model/stamp-processing';

// Listing table data


const ELEMENT_FINAL1: ElementRevertStampTo[] = [
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
const ELEMENT_FINAL2: ElementRevertStampTo[] = [
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
  selector: 'app-revert-stamp-issue-to-view',
  templateUrl: './revert-stamp-issue-to-view.component.html',
  styleUrls: ['./revert-stamp-issue-to-view.component.css']
})
export class RevertStampIssueToViewComponent implements OnInit {

  chNo_List: CommonListing[] = [
    { value: '1', viewValue: '51/00057/072019/23'},
    { value: '2', viewValue: '51/00057/072019/45'},
    { value: '3', viewValue: '51/00057/072019/99'},
    { value: '4', viewValue: '51/00057/072019/101'},
    ];


    dataSourceFinal1 = new MatTableDataSource(ELEMENT_FINAL1);
    dataSourceFinal2 = new MatTableDataSource(ELEMENT_FINAL2);
    dataSourceFinalHeading = [];
    displayFinal = ['position', 'typeOfStamp', 'unitVal', 'deno',
    'stampSheet', 'sheetNo', 'stampNo', 'fromSeries', 'toSeries',
    'stmpIssueVen', 'totAmt', 'discRs', 'netAmt'];

    chNoCtrl: FormControl = new FormControl;

    revertStamp: FormGroup;
  date: any = new Date();
  treVal = ' District Treasury Office, Gandhinagar';
  venValue = 'B.S.Patel (000123)';
  revertDateVal = '14-Apr-2020';
  fileBrowseIndex: number;

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
      finYear: ['2019-2020'],
      tre: [''],
      chNo: ['1'],
      revertDate: [''],
    });
  }

  gotoListing() {
    this.router.navigate(['./stamp-processing/revert-stamp-issue-to-list']);
  }

}
