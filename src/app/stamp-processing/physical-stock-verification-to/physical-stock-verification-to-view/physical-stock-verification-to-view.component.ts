
import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { SaveConfirmCommonDialogComponent } from '../../save-confirm-common-dialog/save-confirm-common-dialog.component';
import { CloseConfirmCommonDialogComponent } from '../../close-confirm-common-dialog/close-confirm-common-dialog.component';



@Component({
  selector: 'app-physical-stock-verification-to-view',
  templateUrl: './physical-stock-verification-to-view.component.html',
  styleUrls: ['./physical-stock-verification-to-view.component.css']
})
export class PhysicalStockVerificationToViewComponent implements OnInit {

  physicalStockToViewForm: FormGroup;
  date: any = new Date();

  treasury_List: CommonListing[] = [
    { value: '1', viewValue: 'Kalol Treasury Office' },
    { value: '2', viewValue: 'Kalol Treasury Office' },
  ];

  constructor(private fb: FormBuilder, private router: Router, public dialog: MatDialog, ) { }
  trofficeCtrl: FormControl = new FormControl();
  ngOnInit() {
    this.physicalStockToViewData();
  }

  physicalStockToViewData() {
    this.physicalStockToViewForm = this.fb.group({
      finYear: ['2019-2020'],
      toffice: ['District Treasury Office, Gandhinagar'],
      troffice: ['1'],
      visitDate: ['12-May-2020'],
      verificationoffice: ['Mr.A.B.Sharma'],
      desi: ['Account Officer'],
      remarks: ['Remark 1'],
    });
  }


  gotoListing() {
    this.router.navigate(['./stamp-processing/physical-stock-verification-to-list']);
  }
  closeConfirmationPopup() {
    const dialogRef = this.dialog.open(CloseConfirmCommonDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes') {
        this.router.navigate(['']);
      }
    });
  }

  sumbit() {
    // const dialogRef = this.dialog.open(SubmitConfirmCommonDialigComponent, {
    const dialogRef = this.dialog.open(CloseConfirmCommonDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes') {

      }
    });
  }

}
