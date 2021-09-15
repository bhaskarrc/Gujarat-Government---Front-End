
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
  selector: 'app-closing-utility-to',
  templateUrl: './closing-utility-to.component.html',
  styleUrls: ['./closing-utility-to.component.css']
})
export class ClosingUtilityToComponent implements OnInit {

  closingUtilityToForm: FormGroup;
  errorMessages = stampProcessMessage;
  date: any = new Date();
  tofficeVal = 'Treasury Office, Ahmedabad';
  constructor(private fb: FormBuilder, private router: Router, public dialog: MatDialog, ) { }
  directiveObject = new StampProcessingDirectives(this.router, this.dialog);

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.closingUtilityToForm = this.fb.group({
      finYear: [{ value: '2019-2020', disabled: true }],
      toffice: [{ value: 'Treasury Office, Ahmedabad', disabled: true }],
      dateName: [{ value: 'date | date: "dd-MMM-yyyy"', disabled: true }],
      stockDate: ['', Validators.required],
    });
  }


  gotoListing() {
    this.router.navigate(['./stamp-processing/closing-utility-to-list']);
  }
}
