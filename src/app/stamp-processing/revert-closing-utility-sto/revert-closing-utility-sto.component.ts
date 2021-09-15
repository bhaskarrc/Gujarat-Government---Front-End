

import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { CloseConfirmCommonDialogComponent } from '../close-confirm-common-dialog/close-confirm-common-dialog.component';
import { SubmitConfirmCommonDialigComponent } from '../submit-confirm-common-dialig/submit-confirm-common-dialig.component';
import { stampProcessMessage } from 'src/app/common/error-message/common-message.constants';
import { StampProcessingDirectives } from 'src/app/common/directive/stamp-processing-directive';

@Component({
  selector: 'app-revert-closing-utility-sto',
  templateUrl: './revert-closing-utility-sto.component.html',
  styleUrls: ['./revert-closing-utility-sto.component.css']
})
export class RevertClosingUtilityStoComponent implements OnInit {

  RevertClosingStoForm: FormGroup;
  errorMessages = stampProcessMessage;
  date: any = new Date();
  constructor(private fb: FormBuilder, private router: Router, public dialog: MatDialog) { }
  directiveObject = new StampProcessingDirectives(this.router, this.dialog);

  ngOnInit() {
    this.revertClosingStoData();
  }

  revertClosingStoData() {
    this.RevertClosingStoForm = this.fb.group({
      finYear: [{ value: '2019-2020', disabled: true }],
      toffice: [{ value: 'Sub Treasury Office, Kalol', disabled: true }],
      dateName: [{ value: '', disabled: true }],
      stockDate: [''],
    });
  }

  // goto listing of this page
  gotoListing() {
    this.router.navigate(['./stamp-processing/revert-closing-utility-sto-list']);
  }
}

