import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { SaveConfirmCommonDialogComponent } from '../../save-confirm-common-dialog/save-confirm-common-dialog.component';
import { CloseConfirmCommonDialogComponent } from '../../close-confirm-common-dialog/close-confirm-common-dialog.component';
import { CommonListing } from 'src/app/model/common-listing';
import { stampProcessMessage } from 'src/app/common/error-message/common-message.constants';
import { StampProcessingDirectives } from 'src/app/common/directive/stamp-processing-directive';
import { ElementStampDenoMasterList } from 'src/app/model/stamp-processing';


// Listing table Data
const ELEMENT_DATA: ElementStampDenoMasterList[] = [
  {
    fYear: '2019-2020',
    stamp: 'Non Judicial Paper',
    denoVal: '20',
    disc: '3%',
    effectDate: '1-Jan-2020',
    denoCode: '20',
  },
  {
    fYear: '2019-2020',
    stamp: 'Notary',
    denoVal: '5',
    disc: '9%',
    effectDate: '1-Mar-2020',
    denoCode: '5.120',
  },
  {
    fYear: '2019-2020',
    stamp: 'Non Judicial Paper',
    denoVal: '50',
    disc: '3%',
    effectDate: '1-Jan-2020',
    denoCode: '50',
  },
  {
    fYear: '2019-2020',
    stamp: 'Hundi',
    denoVal: '10',
    disc: '3%',
    effectDate: '1-Dec-2020',
    denoCode: '10.120',
  }
];

@Component({
  selector: 'app-stamp-denomination-master-list',
  templateUrl: './stamp-denomination-master-list.component.html',
  styleUrls: ['./stamp-denomination-master-list.component.css']
})
export class StampDenominationMasterListComponent implements OnInit {
  // Search Field Details
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

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  // Listing Table
  displayedColumns: string[] = ['position', 'stamp', 'denoVal', 'denoCode', 'disc', 'effectDate', 'action'];
  categoryCtrl: FormControl = new FormControl();
  errorMessages = stampProcessMessage;
  directiveObject = new StampProcessingDirectives(this.router, this.dialog);

  denoForm: FormGroup;


  constructor(private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.denoForm = this.fb.group({
      category: [''],
    });
  }
  clearForm() {
    this.denoForm.reset();
  }
}
