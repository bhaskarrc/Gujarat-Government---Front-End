import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CloseConfirmCommonDialogComponent } from '../../close-confirm-common-dialog/close-confirm-common-dialog.component';
import { MatDialog } from '@angular/material';
import { CommonListing } from 'src/app/model/common-listing';
@Component({
  selector: 'app-stamp-denomination-master-view',
  templateUrl: './stamp-denomination-master-view.component.html',
  styleUrls: ['./stamp-denomination-master-view.component.css']
})
export class StampDenominationMasterViewComponent implements OnInit {

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
  deno_List: CommonListing[] = [
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '2' },
    { value: '3', viewValue: '5' },
    { value: '4', viewValue: '10' },
    { value: '5', viewValue: '100' },
    { value: '6', viewValue: '200' }
  ];
  finYearCtrl: FormControl = new FormControl();
  stampCtrl: FormControl = new FormControl();
  denoCtrl: FormControl = new FormControl();

  stampForm: FormGroup;


  constructor(private fb: FormBuilder,
    private router: Router, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.stampForm = this.fb.group({
      stamp: [{ value: '1', disabled: true }],
      label: [{ value: '32', disabled: true }],
      safetyStock: [{ value: '50', disabled: true }],
      deno: [{ value: '4', disabled: true }],
      denoCode: [{ value: '10.32', disabled: true }],
      stamp1: [{ value: '1', disabled: true }],
      deno1: [{ value: '4', disabled: true }],
      discount: [{ value: '3', disabled: true }],
      fromDate: [{ value: '1-Oct-2020', disabled: true }],
    });
  }

  gotoListing() {
    this.router.navigate(['./stamp-processing/stamp-denomination-master-list']);
  }


}
