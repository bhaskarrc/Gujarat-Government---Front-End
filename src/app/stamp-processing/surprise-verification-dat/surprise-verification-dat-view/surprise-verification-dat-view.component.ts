
import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';

import { SaveConfirmCommonDialogComponent } from '../../save-confirm-common-dialog/save-confirm-common-dialog.component';
import { CloseConfirmCommonDialogComponent } from '../../close-confirm-common-dialog/close-confirm-common-dialog.component';


@Component({
  selector: 'app-surprise-verification-dat-view',
  templateUrl: './surprise-verification-dat-view.component.html',
  styleUrls: ['./surprise-verification-dat-view.component.css']
})
export class SurpriseVerificationDatViewComponent implements OnInit {

  surpriseVerificationViewForm: FormGroup;
  date: any = new Date();

  treasury_List: CommonListing[] = [
    { value: '1', viewValue: 'Ahmedabad Treasury Office' },
    { value: '2', viewValue: 'Amreli Treasury Office' },
  ];
  treSubTre_List: CommonListing[] = [
    { value: '1', viewValue: 'Treasury Office' },
    { value: '2', viewValue: 'Sub Treasury Office' },
  ];
  veriType_List: CommonListing[] = [
    { value: '1', viewValue: 'Surprise Verification' },
    { value: '2', viewValue: 'Regular Verification' },
  ];
  attachmentObj: any[] = [
    {
      type: 'stamp-view',
      attachmentType: 'Surprise Verification Report',
    },
  ];

  constructor(private fb: FormBuilder, private router: Router, public dialog: MatDialog, ) { }
  trofficeCtrl: FormControl = new FormControl();
  veriTypeCtrl: FormControl = new FormControl();
  treSubTreCtrl: FormControl = new FormControl();
  ngOnInit() {
    this.surpriseVerificationViewData();
  }

  surpriseVerificationViewData() {
    this.surpriseVerificationViewForm = this.fb.group({
      finYear: ['2019-2020'],
      toffice: ['Directorate of Accounts & Treasuries'],
      troffice: ['1'],
      visitDate: ['12-Apr-2019'],
      verificationoffice: ['Mr.A.B.Sharma'],
      desi: ['Account Officer'],
      remarks: ['Remarks'],
      veriType: ['1'],
      treSubTre: ['1'],
    });
  }


  gotoListing() {
    this.router.navigate(['./stamp-processing/treasury-inspection-management-list']);
  }
}
