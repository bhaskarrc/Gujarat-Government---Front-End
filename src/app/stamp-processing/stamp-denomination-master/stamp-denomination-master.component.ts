import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { SaveConfirmCommonDialogComponent } from '../save-confirm-common-dialog/save-confirm-common-dialog.component';
import { CloseConfirmCommonDialogComponent } from '../close-confirm-common-dialog/close-confirm-common-dialog.component';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { stampProcessMessage } from 'src/app/common/error-message/common-message.constants';
import { StampProcessingDirectives } from 'src/app/common/directive/stamp-processing-directive';
import { ElementStampDenoMaster } from 'src/app/model/stamp-processing';
// Listing table Data
const ELEMENT_DATA: ElementStampDenoMaster[] = [
  {
    stamp: 'Non Judicial Paper',
    denoVal: '100',
    disc: '3%',
    effectDate: '1-Jan-2020',
  },
  {
    stamp: 'Court Fee Paper',
    denoVal: '20',
    disc: '1%',
    effectDate: '1-Mar-2020',
  },
  {
    stamp: 'Non Judicial Paper',
    denoVal: '100',
    disc: '5%',
    effectDate: '6-Jan-2020',
  },
  {
    stamp: 'Judicial Paper',
    denoVal: '500',
    disc: '3%',
    effectDate: '1-Dec-2020',
  },
];
@Component({
  selector: 'app-stamp-denomination-master',
  templateUrl: './stamp-denomination-master.component.html',
  styleUrls: ['./stamp-denomination-master.component.css']
})
export class StampDenominationMasterComponent implements OnInit {
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
  ]; deno_List: CommonListing[] = [
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '2' },
    { value: '3', viewValue: '5' },
    { value: '4', viewValue: '10' },
    { value: '5', viewValue: '100' },
    { value: '6', viewValue: '200' }
  ];
  denoCtrl: FormControl = new FormControl();
  categoryCtrl: FormControl = new FormControl();
  errorMessages = stampProcessMessage;
  date: any = new Date();
  showTable = false;
  directiveObject = new StampProcessingDirectives(this.router, this.dialog);

  stampForm: FormGroup;
  temp2Value = 'Treasury Office, Gandhinagar';
  denominationCode = '';

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  // Listing Table
  displayedColumns: string[] = ['position', 'stamp', 'denoVal', 'disc', 'effectDate', 'action'];

  constructor(private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog) {
  }

  ngOnInit() {
    this.createForm();
    this.stampForm.valueChanges.subscribe(res => {

      console.log(res.category.value);

      (this.stampForm.get('category').value === '4' || this.stampForm.get('category').value === '8') ?
        // this.denominationCode = this.stampForm.get('deno').value + '.' + this.stampForm.get('stampInEachSheet').value :
        this.denominationCode = this.stampForm.get('deno').value:
        this.denominationCode = this.stampForm.get('deno').value + '.' + this.stampForm.get('label').value;
      return this.denominationCode;
    });
  }
  whenAddClick() {
    this.showTable = true;
  }

  createForm() {
    this.stampForm = this.fb.group({
      finYear: ['10', Validators.required],
      category: ['', Validators.required],
      category1: ['', Validators.required],
      label: ['', Validators.required],
      safetyStock: ['', Validators.required],
      deno: ['', Validators.required],
      deno1: ['', Validators.required],
      discount: ['', Validators.required],
      fromDate: ['', Validators.required],
      denoCode: [{ value: '10.180', disabled: true }],
      stampInEachSheet: [{ value: '1', disabled: true }],
    });
  }

  gotoListing() {
    this.router.navigate(['./stamp-processing/stamp-denomination-master-list']);
  }

}
