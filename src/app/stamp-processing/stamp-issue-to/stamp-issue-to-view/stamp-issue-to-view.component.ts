import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { StampDetailsCommonPopupComponent } from '../../stamp-details-common-popup/stamp-details-common-popup.component';
import { ElementIssueToView } from 'src/app/model/stamp-processing';
import { StampProcessingDirectives } from 'src/app/common/directive/stamp-processing-directive';


// Listing table data

const ELEMENT_FINAL1: ElementIssueToView[] = [
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
    qtyAppred: '100',
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
    qtyAppred: '100',
    innerDataSource: new MatTableDataSource([]),
    rowStyleClass: '',
  },
];
const ELEMENT_FINAL2: ElementIssueToView[] = [
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
    qtyAppred: '100',
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
    qtyAppred: '100',
    innerDataSource: new MatTableDataSource([]),
    rowStyleClass: '',
  },
];

@Component({
  selector: 'app-stamp-issue-to-view',
  templateUrl: './stamp-issue-to-view.component.html',
  styleUrls: ['./stamp-issue-to-view.component.css']
})
export class StampIssueToViewComponent implements OnInit {

  stIssue_List: CommonListing[] = [
    { value: '1', viewValue: 'Treasury'},
    { value: '2', viewValue: 'Sub Treasury'},
    { value: '3', viewValue: 'Vendor / Party'},
    ];


    treOff_List: CommonListing[] = [
    { value: '1', viewValue: 'Ahmedabad Treasury Office'},
    { value: '2', viewValue: 'Amreli Treasury Office'},
    { value: '3', viewValue: 'Anand Treasury Office'},
    ];


    subTreOff_List: CommonListing[] = [
    { value: '1', viewValue: 'Sub Treasury Office, Mansa'},
    { value: '2', viewValue: 'Sub Treasury Office, Kalol'},
    { value: '3', viewValue: 'Sub Treasury Office, Dehgam'},
    ];

    venParty_List: CommonListing[] = [
      { value: '1', viewValue: 'B.S.Patel (000123)'},
      { value: '2', viewValue: 'S.K.Singh (000124)'},
      { value: '3', viewValue: 'D.B.Patel (000125)'},
      { value: '4', viewValue: 'P.D.Kapadia (000126)'},
    ];

    indentNumber_List: CommonListing[] = [
    { value: '1', viewValue: '51/00057/072019/23'},
    { value: '2', viewValue: '51/00057/072019/24'},
    ];


    challanNumber_List: CommonListing[] = [
    { value: '1', viewValue: '51/00057/072019/23'},
    { value: '2', viewValue: '51/00057/072019/24'},
    ];

    stIssueCtrl: FormControl = new FormControl;
    treOffCtrl: FormControl = new FormControl;
    subTreOffCtrl: FormControl = new FormControl;
    venPartyCtrl: FormControl = new FormControl;
    indentNumberCtrl: FormControl = new FormControl;
    challanNumberCtrl: FormControl = new FormControl;

    dataSourceFinal1 = new MatTableDataSource(ELEMENT_FINAL1);
    dataSourceFinal2 = new MatTableDataSource(ELEMENT_FINAL2);
    dataSourceFinalHeading = [];
    displayFinal = ['position', 'typeOfStamp', 'unitVal', 'deno', 'disc',
    'stampSheet', 'sheetNo', 'stampNo', 'fromSeries', 'toSeries', 'totAmt', 'discRs', 'netAmt',
     'stmpIssueVen', 'qtyAppred'];
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
      finYear: ['2019-2020'],
      stIssue: ['3'],
      treOff: ['1'],
      subTreOff: [''],
      venParty: ['B.S.Patel (000123)'],
      indentNumber: ['1'],
      challanNumber: ['1'],
      dateOfIndentTre: [''],
      indentType: [''],
    });
  }

  gotoListing() {
    this.router.navigate(['./stamp-processing/stamp-issue-to-list']);
  }

}
