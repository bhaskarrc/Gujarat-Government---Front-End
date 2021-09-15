
import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';

import { SaveConfirmCommonDialogComponent } from '../../save-confirm-common-dialog/save-confirm-common-dialog.component';
import { CloseConfirmCommonDialogComponent } from '../../close-confirm-common-dialog/close-confirm-common-dialog.component';


@Component({
  selector: 'app-surprise-verification-to-view',
  templateUrl: './surprise-verification-to-view.component.html',
  styleUrls: ['./surprise-verification-to-view.component.css']
})
export class SurpriseVerificationToViewComponent implements OnInit {

  surpriseVerificationToViewForm: FormGroup;
  date: any = new Date();
  veriType_List: CommonListing[] = [
    { value: '1', viewValue: 'Surprise Inspection' },
    { value: '2', viewValue: 'Regular Inspection' },
    { value: '3', viewValue: 'Physical Stock Verification (Self)' },
  ];
  attachmentObj: any[] = [
    {
      type: 'stamp-view',
      attachmentType: 'Surprise Verification Report',
    },
  ];

  constructor(private fb: FormBuilder, private router: Router, public dialog: MatDialog, ) { }
  veriTypeCtrl: FormControl = new FormControl();
  ngOnInit() {
    this.surpriseVerificationViewToData();
  }

  surpriseVerificationViewToData() {
    this.surpriseVerificationToViewForm = this.fb.group({
      finYear: ['2019-2020'],
      offName: ['District Treasury Office, Ahmedabad'],
      toffice: ['Ahmedabad Treasury Office'],
      visitDate: ['12-Apr-2019'],
      verificationoffice: ['Mr.A.B.Sharma'],
      desi: ['Account Officer'],
      remarks: ['Remarks'],
      veriType: ['3'],
    });
  }


  gotoListing() {
    this.router.navigate(['./stamp-processing/surprise-verification-to-list']);
  }
}

