import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { CloseConfirmCommonDialogComponent } from '../close-confirm-common-dialog/close-confirm-common-dialog.component';
import { SubmitConfirmCommonDialigComponent } from '../submit-confirm-common-dialig/submit-confirm-common-dialig.component';
import { AuthorizeConfirmCommonDialogComponent } from '../authorize-confirm-common-dialog/authorize-confirm-common-dialog.component';
import { ToastrService } from 'ngx-toastr';
import { stampProcessMessage } from 'src/app/common/error-message/common-message.constants';
import { ElementAuthTo } from 'src/app/model/stamp-processing';
import { StampProcessingDirectives } from 'src/app/common/directive/stamp-processing-directive';



// Listing table data
const ELEMENT_DATA: ElementAuthTo[] = [
  {
    chNo: '51/00057/072019/23',
    dateCh: '10-Apr-2020',
    venName: 'B S Patel (000123)',
    chAmt: 'Rs. 24500/-',
    refNo: 'TO/GNR/2020-21/37',
    srlAmt: 'Rs. 22500/-',
    chStatus: 'Posted',
    payStatus: 'Paid',
  },
];

@Component({
  selector: 'app-authorization-of-challan-to',
  templateUrl: './authorization-of-challan-to.component.html',
  styleUrls: ['./authorization-of-challan-to.component.css']
})
export class AuthorizationOfChallanToComponent implements OnInit {
  // Entry Field Details
  chNo_List: CommonListing[] = [
    { value: '1', viewValue: '51/00057/072019/23' },
    { value: '2', viewValue: '51/00057/072019/34' },
    { value: '3', viewValue: '51/00057/072019/56' },
    { value: '4', viewValue: '51/00057/072019/77' },
  ];
  challanMode_List: CommonListing[] = [
    { value: '1', viewValue: 'Online (Receipt Management Portal)' },
    { value: '2', viewValue: 'Over the counter' },
  ];
  // Listing Table
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  displayedColumns = ['position', 'chNo', 'dateCh', 'venName', 'chAmt', 'refNo', 'srlAmt', 'chStatus'];
  displayedColumnsOverTheCounter = ['position', 'chNo', 'dateCh', 'venName', 'chAmt', 'refNo', 'srlAmt', 'chStatus'];
  chNoCtrl: FormControl = new FormControl;
  challanModeCtrl: FormControl = new FormControl;
  errorMessages = stampProcessMessage;
  directiveObject = new StampProcessingDirectives(this.router, this.dialog);

  authForm: FormGroup;
  date: any = new Date();
  deptVal = ' District Treasury Office, Gandhinagar';
  fileBrowseIndex: number;

  constructor(private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog,
    private toastr: ToastrService,
    private el: ElementRef) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.authForm = this.fb.group({
      finYear: ['2019-2020', Validators.required],
      dept: ['District Treasury Office, Gandhinagar', Validators.required],
      chNo: ['', Validators.required],
      challanMode: ['', Validators.required],
      bankScrollRefNo: ['']
    });
  }

  gotoListing() {
    this.router.navigate(['./stamp-processing/authorization-of-challan-to-list']);
  }

}

