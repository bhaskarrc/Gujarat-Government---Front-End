import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { ElementReturnSsoToView } from 'src/app/model/stamp-processing';

const ELEMENT_FINAL3: ElementReturnSsoToView[] = [
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
]; const ELEMENT_FINAL4: ElementReturnSsoToView[] = [
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
]; 

@Component({
  selector: 'app-stamp-return-sso-by-to-view',
  templateUrl: './stamp-return-sso-by-to-view.component.html',
  styleUrls: ['./stamp-return-sso-by-to-view.component.css']
})
export class StampReturnSsoByToViewComponent implements OnInit {

  indentNumber_List: CommonListing[] = [
    { value: '1', viewValue: '51/00057/072019/23'},
    { value: '2', viewValue: '51/00057/072019/32'},
    { value: '3', viewValue: '51/00057/072019/44'},
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
    reason_List: CommonListing[] = [
      { value: '1', viewValue: 'Damage Stock' },
      { value: '2', viewValue: 'Tear Stamp / Stamp Papers' },
      { value: '3', viewValue: 'Excess Stock' },
  ];


  dataSourceFinal3 = new MatTableDataSource(ELEMENT_FINAL3);
  dataSourceFinal4 = new MatTableDataSource(ELEMENT_FINAL4);
  displayFinal = ['position', 'typeOfStamp', 'unitVal', 'deno', 'stampSheet', 'sheetNo', 'stampNo',
  'fromSeries', 'toSeries', 'totAmt', 'reason'];
  dataSourceFinalHeading = [];
    indentNumberCtrl: FormControl = new FormControl;
    stampCtrl: FormControl = new FormControl;
    stampReturnSso: FormGroup;
  date: any = new Date();
  treOffVal = 'District Treasury Office, Gandhinagar';
  indentToVal = 'Superintendent of Stamps Office, Gandhinagar';
  indTypeVal = 'Regular Indent';
  indDateVal = '10-Apr-2020';
  stampVal: string;
  onAdd = false;
  selected: any;
  constructor(private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog,
    private toastr: ToastrService,
    private el: ElementRef) {
  }
  ngOnInit() {
    this.createForm();
    this.selected = this.reason_List[2].value;
  }
  createForm() {
    this.stampReturnSso = this.fb.group({
      finYear: ['2019-2020'],
      treOff: [''],
      retDate: [''],
      indentTo: [''],
      indentNumber: ['1'],
      indType: [''],
      indDate: [''],
      stamp: ['3'],
    });
  }
  gotoListing() {
    this.router.navigate(['./stamp-processing/stamp-return-sso-by-to-list']);
  }

}
