
import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { CloseConfirmCommonDialogComponent } from '../close-confirm-common-dialog/close-confirm-common-dialog.component';
import { SubmitConfirmCommonDialigComponent } from '../submit-confirm-common-dialig/submit-confirm-common-dialig.component';
import { StampProcessingDirectives } from 'src/app/common/directive/stamp-processing-directive';
import { CancelChallanAuth } from 'src/app/model/stamp-processing';

// Listing table data
const ELEMENT_DATA: CancelChallanAuth[] = [
  {
    cNumber: '51/00057/072019/23',
    cDate: '15-Apr-2020',
    cName: 'B S Patel (000123)',
    cAmount: '23500',
    cStatus: 'Approved',

    remarks: '',
  },

];


@Component({
  selector: 'app-cancel-challan-authorization-sto',
  templateUrl: './cancel-challan-authorization-sto.component.html',
  styleUrls: ['./cancel-challan-authorization-sto.component.css']
})
export class CancelChallanAuthorizationStoComponent implements OnInit {

// Entry Field Details
  challan_List: CommonListing[] = [
    { value: '1', viewValue: '51/00057/072019/23' },
    { value: '2', viewValue: '51/00057/072019/34' },
    { value: '3', viewValue: '51/00057/072019/56' },
    { value: '4', viewValue: '51/00057/072019/77' },
  ];


  dataSource = new MatTableDataSource(ELEMENT_DATA);
// Listing Table
  displayedColumns: string[] = ['position', 'cNumber', 'cDate',
    'cName', 'cAmount', 'cStatus', 'remarks'];

  indentCtrl: FormControl = new FormControl();

  cancelChallanStoForm: FormGroup;
  date: any = new Date();
  directiveObject = new StampProcessingDirectives(this.router, this.dialog);

  onAdd = false;

  constructor(private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog, ) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.cancelChallanStoForm = this.fb.group({
      finYear: ['2019-2020'],
      issueDate: [''],
      subTreasury: ['District Treasury Office, Gandhinagar'],
      challanNumber: [''],
    });
  }

// Add Button Click
  whenAddClick() {
    this.onAdd = true;
  }

  goToDashboard() {
    this.router.navigate(['']);
  }

  gotoListing() {
    this.router.navigate(['./stamp-processing/cancel-challan-authorization-sto-list']);
  }
}
