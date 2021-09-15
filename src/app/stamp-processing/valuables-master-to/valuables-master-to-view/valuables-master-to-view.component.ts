import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-valuables-master-to-view',
  templateUrl: './valuables-master-to-view.component.html',
  styleUrls: ['./valuables-master-to-view.component.css']
})
export class ValuablesMasterToViewComponent implements OnInit {
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

    valueForm: FormGroup;
    temp2Value = 'Treasury Office, Gandhinagar';

    constructor(private fb: FormBuilder,
      private router: Router,
      public dialog: MatDialog) {
    }

    ngOnInit() {
      this.createForm();
    }

    createForm() {
      this.valueForm = this.fb.group({
        catName: ['Cashbox'],
        catNameSecond: ['1'],
        subCatName: ['Sub Category'],
        temp1: ['Treasury Office, Gandhinagar'],
        status: ['1'],
        statusSecond: ['1'],
      });
    }

    gotoListing() {
      this.router.navigate(['./stamp-processing/strong-room-article-category-master-to-list']);
    }

}
