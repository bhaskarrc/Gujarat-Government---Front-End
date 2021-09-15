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
import { ElementReturnToSto } from 'src/app/model/stamp-processing';
import { StampProcessingDirectives } from 'src/app/common/directive/stamp-processing-directive';


// Listing table data
const ELEMENT_DATA: ElementReturnToSto[] = [
  {
    deno: '1',
    availFrom: 'A-000001',
    availTo: 'A-000100',
    unitQty: '30',
    stampSheet: '6',
    fromSeries: 'A-000025',
    toSeries: 'A-000035',
  },
  {
    deno: '2',
    availFrom: 'B-000001',
    availTo: 'B-000100',
    unitQty: '50',
    stampSheet: '2',
    fromSeries: 'B-000025',
    toSeries: 'B-000035',
  }, {
    deno: '5',
    availFrom: 'C-000001',
    availTo: 'C-000100',
    unitQty: '30',
    stampSheet: '6',
    fromSeries: 'C-000025',
    toSeries: 'C-000035',
  }, {
    deno: '10',
    availFrom: 'D-000001',
    availTo: 'D-000100',
    unitQty: '20',
    stampSheet: '1',
    fromSeries: 'D-000025',
    toSeries: 'D-000035',
  }, {
    deno: '20',
    availFrom: 'E-000001',
    availTo: 'E-000100',
    unitQty: '10',
    stampSheet: '2',
    fromSeries: 'E-000025',
    toSeries: 'E-000035',
  },
];


@Component({
  selector: 'app-stamp-return-to-by-sto',
  templateUrl: './stamp-return-to-by-sto.component.html',
  styleUrls: ['./stamp-return-to-by-sto.component.css']
})
export class StampReturnToByStoComponent implements OnInit {
// Entry Field Details
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
    denomination_List: CommonListing[] = [
      { value: '1', viewValue: '1' },
      { value: '2', viewValue: '2' },
      { value: '3', viewValue: '5' },
      { value: '4', viewValue: '10' },
      { value: '5', viewValue: '20' },
    ];
    reason_List: CommonListing[] = [
      { value: '1', viewValue: 'Damage Stock' },
      { value: '2', viewValue: 'Tear Stamp / Stamp Papers' },
      { value: '3', viewValue: 'Excess Stock / Label' },
    ];
    dataSource = new MatTableDataSource(ELEMENT_DATA);
    // Entry Table
    displayedColumns = ['position', 'deno', 'availFrom', 'availTo', 'unitQty', 'stampSheet', 'stampNo',
    'sheetNo', 'fromSeries', 'toSeries', 'reason'];
    indentNumberCtrl: FormControl = new FormControl;
    stampCtrl: FormControl = new FormControl;
    denominationCtrl: FormControl = new FormControl;
    errorMessages = stampProcessMessage;
    directiveObject = new StampProcessingDirectives(this.router, this.dialog);
    stampReturnTo: FormGroup;
  date: any = new Date();
  subTreOffVal = 'Sub Treausry Office, Mansa';
  indentToVal = 'District Treasury Office, Gandhinagar';
  indTypeVal = 'Regular Indent';
  indDateVal = '10-Apr-2020';
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
    this.stampReturnTo = this.fb.group({
      finYear: ['2019-2020', Validators.required],
      subTreOff: ['Sub Treausry Office, Mansa', Validators.required],
      retDate: [''],
      indentTo: ['District Treasury Office, Gandhinagar', Validators.required],
      indentNumber: ['', Validators.required],
      indType: ['Regular Indent', Validators.required],
      indDate: [''],
      stamp: ['', Validators.required],
      denomination: ['', Validators.required],
    });
  }
  whenAddClick() {
      this.onAdd = true;
  }
  gotoListing() {
    this.router.navigate(['./stamp-processing/stamp-return-to-by-sto-list']);
  }

}
