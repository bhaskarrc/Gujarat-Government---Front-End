import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { ElementRevertStampSto } from 'src/app/model/stamp-processing';



const ELEMENT_DATA: ElementRevertStampSto[] = [
  {
    deno: '0',
    issueQtyVen: '10',
    unitQty: '30.00',
    stampSheet: '11',
    fromSeries: 'A-000001',
    toSeries: 'A-000100',
  },
];

const ELEMENT_DATA2: ElementRevertStampSto[] = [
  {
    deno: '100',
    issueQtyVen: '20',
    unitQty: '20.00',
    stampSheet: '20',
    fromSeries: 'A-000001',
    toSeries: 'A-000100',
  }
]; const ELEMENT_DATA3: ElementRevertStampSto[] = [
  {
    deno: '1',
    issueQtyVen: '10',
    unitQty: '10.00',
    stampSheet: '22',
    fromSeries: 'A-000001',
    toSeries: 'A-000100',
  },
  {
    deno: '2',
    issueQtyVen: '20',
    unitQty: '10.00',
    stampSheet: '30',
    fromSeries: 'B-000001',
    toSeries: 'B-000100',
  },
  {
    deno: '5',
    issueQtyVen: '30',
    unitQty: '20.00',
    stampSheet: '20',
    fromSeries: 'C-000001',
    toSeries: 'C-000100',
  },
  {
    deno: '10',
    issueQtyVen: '50',
    unitQty: '10.00',
    stampSheet: '10',
    fromSeries: 'D-000001',
    toSeries: 'D-000100',
  },
  {
    deno: '20',
    issueQtyVen: '10',
    unitQty: '20.00',
    stampSheet: '10',
    fromSeries: 'E-000001',
    toSeries: 'E-000100',
  },
];
@Component({
  selector: 'app-revert-stamp-issue-sto-view',
  templateUrl: './revert-stamp-issue-sto-view.component.html',
  styleUrls: ['./revert-stamp-issue-sto-view.component.css']
})
export class RevertStampIssueStoViewComponent implements OnInit {

  chNo_List: CommonListing[] = [
    { value: '1', viewValue: '51/00057/072019/23'},
    { value: '2', viewValue: '51/00057/072019/45'},
    { value: '3', viewValue: '51/00057/072019/99'},
    { value: '4', viewValue: '51/00057/072019/101'},
    ];


    dataSource = new MatTableDataSource(ELEMENT_DATA);
    dataSource2 = new MatTableDataSource(ELEMENT_DATA2);
    dataSource3 = new MatTableDataSource(ELEMENT_DATA3);
    displayedColumns = ['check', 'position', 'deno', 'issueQtyVen', 'unitQty', 'stampSheet', 'fromSeries', 'toSeries'];
    chNoCtrl: FormControl = new FormControl;

    revertSubStamp: FormGroup;
  date: any = new Date();
  subtreVal = 'Sub Treasury Office, Mansa';
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
    this.revertSubStamp = this.fb.group({
      finYear: ['2019-2020'],
      subtre: [''],
      chNo: ['1'],
      revertDate: [''],
    });
  }

  gotoListing() {
    this.router.navigate(['./stamp-processing/revert-stamp-issue-sto-list']);
  }
}
