import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { StampDetailsCommonPopupComponent } from '../../stamp-details-common-popup/stamp-details-common-popup.component';
import { ElementIssueSTo } from 'src/app/model/stamp-processing';
import { StampProcessingDirectives } from 'src/app/common/directive/stamp-processing-directive';


const ELEMENT_DATA: ElementIssueSTo[] = [
  {
    deno: '1',
    reuseQty: '5',
    unitQty: '30',
    stampSheet: '6',
    fromSeries: 'A-000001',
    toSeries: 'A-000100',
    reuseQtySub: '5',
    reuseQtyVen: '5',
  },
  {
    deno: '2',
    reuseQty: '5',
    unitQty: '50',
    stampSheet: '2',
    fromSeries: 'B-000001',
    toSeries: 'B-000100',
    reuseQtySub: '5',
    reuseQtyVen: '5',
  }, {
    deno: '5',
    reuseQty: '5',
    unitQty: '30',
    stampSheet: '6',
    fromSeries: 'C-000001',
    toSeries: 'C-000100',
    reuseQtySub: '6',
    reuseQtyVen: '6',
  }, {
    deno: '10',
    reuseQty: '5',
    unitQty: '20',
    stampSheet: '1',
    fromSeries: 'D-000001',
    toSeries: 'D-000100',
    reuseQtySub: '10',
    reuseQtyVen: '10',
  }, {
    deno: '20',
    reuseQty: '5',
    unitQty: '10',
    stampSheet: '2',
    fromSeries: 'E-000001',
    toSeries: 'E-000100',
    reuseQtySub: '11',
    reuseQtyVen: '11',
  },
];

@Component({
  selector: 'app-stamp-issue-sto-view',
  templateUrl: './stamp-issue-sto-view.component.html',
  styleUrls: ['./stamp-issue-sto-view.component.css']
})
export class StampIssueStoViewComponent implements OnInit {

  stIssue_List: CommonListing[] = [
    { value: '1', viewValue: 'Vendor / Party'},
    ];

    venParty_List: CommonListing[] = [
      { value: '1', viewValue: 'B.S.Patel (000123)'},
      { value: '2', viewValue: 'S.K.Singh (000124)'},
      { value: '3', viewValue: 'D.B.Patel (000125)'},
      { value: '4', viewValue: 'P.D.Kapadia (000126)'}
    ];

    challanNumber_List: CommonListing[] = [
    { value: '1', viewValue: '51/00057/072019/23'},
    { value: '2', viewValue: '51/00057/072019/24'},
    ];


    dataSource = new MatTableDataSource(ELEMENT_DATA);
    displayedColumns = ['position', 'deno', 'reuseQtyVen', 'unitQty',
    'stampSheet', 'fromSeries', 'toSeries', 'remark', 'action'];
    stIssueCtrl: FormControl = new FormControl;
    venPartyCtrl: FormControl = new FormControl;
    challanNumberCtrl: FormControl = new FormControl;

    stampIssueSub: FormGroup;
  date: any = new Date();
  dateOfIndentTreVal = '14-Apr-2020';
  stampVal: string;
  onAdd = false;
  directiveObject = new StampProcessingDirectives(this.router, this.dialog);

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
    this.stampIssueSub = this.fb.group({
      finYear: ['2019-2020'],
      stIssue: ['1'],
      venParty: ['B.S.Patel (000123)'],
      challanNumber: ['1'],
      dateOfIndentTre: [''],
    });
  }

  gotoListing() {
    this.router.navigate(['./stamp-processing/stamp-issue-sto-list']);
  }

}
