import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-valuables-master-sto-view',
  templateUrl: './valuables-master-sto-view.component.html',
  styleUrls: ['./valuables-master-sto-view.component.css']
})
export class ValuablesMasterStoViewComponent implements OnInit {
  // Entry Field Details

    status_List: CommonListing[] = [
      { value: '1', viewValue: 'Active'},
      { value: '2', viewValue: 'Inactive'},
    ];

    catNameSecond_List: CommonListing[] = [
      { value: '1', viewValue: 'Cashbox'},
      { value: '2', viewValue: 'Sealed Packet'},
      { value: '3', viewValue: 'Exam Article'},
      { value: '4', viewValue: 'Padlocks and Key'},
      { value: '5', viewValue: 'Others'},
    ];

    statusCtrl: FormControl = new FormControl();
    catNameSecondCtrl: FormControl = new FormControl();
    date: any = new Date();

    subValueForm: FormGroup;
    temp2Value = 'Sub-Treasury Office, Gandhinagar';

    constructor(private fb: FormBuilder,
      private router: Router,
      public dialog: MatDialog) {
    }

    ngOnInit() {
      this.createForm();
    }

    createForm() {
      this.subValueForm = this.fb.group({
        catName: ['Cashbox'],
        catNameSecond: ['1'],
        subCatName: ['Sub Category'],
        temp1: ['Sub-Treasury Office, Gandhinagar'],
        status: ['1'],
        statusSecond: ['1'],
      });
    }

    gotoListing() {
      this.router.navigate(['./stamp-processing/strong-room-article-category-master-sto-list']);
    }

}
