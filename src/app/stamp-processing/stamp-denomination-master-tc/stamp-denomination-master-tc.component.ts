import { Component, OnInit } from '@angular/core';
import { CommonListing } from 'src/app/model/common-listing';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { stampProcessMessage } from 'src/app/common/error-message/common-message.constants';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { SaveConfirmCommonDialogComponent } from '../save-confirm-common-dialog/save-confirm-common-dialog.component';
import { CloseConfirmCommonDialogComponent } from 'src/app/emd/close-confirm-common-dialog/close-confirm-common-dialog.component';
import { StampProcessingDirectives } from 'src/app/common/directive/stamp-processing-directive';

@Component({
  selector: 'app-stamp-denomination-master-tc',
  templateUrl: './stamp-denomination-master-tc.component.html',
  styleUrls: ['./stamp-denomination-master-tc.component.css']
})
export class StampDenominationMasterTcComponent implements OnInit {
  // Entry Field Details
  category_List: CommonListing[] = [
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

  status_List: CommonListing[] = [
    { value: '1', viewValue: 'Active' },
    { value: '2', viewValue: 'Inactive' },
  ];
  categoryCtrl: FormControl = new FormControl();
  statusCtrl: FormControl = new FormControl();
  errorMessages = stampProcessMessage;
  date: any = new Date();
  stampForm: FormGroup;
  directiveObject = new StampProcessingDirectives(this.router, this.dialog);


  constructor(private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.stampForm = this.fb.group({
      category: ['', Validators.required],
      deno: ['', Validators.required],
      status: ['', Validators.required],
    });
  }

  gotoListing() {
    this.router.navigate(['./stamp-processing/stamp-denomination-value-master-list']);
  }

}
