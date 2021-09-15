import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { SaveConfirmCommonDialogComponent } from '../save-confirm-common-dialog/save-confirm-common-dialog.component';
import { MatDialog } from '@angular/material';
import { CloseConfirmCommonDialogComponent } from '../close-confirm-common-dialog/close-confirm-common-dialog.component';
import { CommonListing } from 'src/app/model/common-listing';
import { stampProcessMessage } from 'src/app/common/error-message/common-message.constants';
import { StampProcessingDirectives } from 'src/app/common/directive/stamp-processing-directive';

@Component({
  selector: 'app-printing-press-master',
  templateUrl: './printing-press-master.component.html',
  styleUrls: ['./printing-press-master.component.css']
})
export class PrintingPressMasterComponent implements OnInit {
  // Entry Field Details

  status_List: CommonListing[] = [
    { value: '1', viewValue: 'Active' },
    { value: '2', viewValue: 'Inactive' },
  ];

  statusCtrl: FormControl = new FormControl();
  errorMessages = stampProcessMessage;
  directiveObject = new StampProcessingDirectives(this.router, this.dialog);
  date = new Date();

  printPressForm: FormGroup;
  constructor(private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.printPressForm = this.fb.group({
      printPress: ['', Validators.required],
      status: ['', Validators.required],
    });
  }

  gotoListing() {
    this.router.navigate(['./stamp-processing/printing-press-master-list']);
  }


}
