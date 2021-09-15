
import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { CloseConfirmCommonDialogComponent } from '../close-confirm-common-dialog/close-confirm-common-dialog.component';
import { SubmitConfirmCommonDialigComponent } from '../submit-confirm-common-dialig/submit-confirm-common-dialig.component';
import { ElementChallanCan } from 'src/app/model/stamp-processing';
import { StampProcessingDirectives } from 'src/app/common/directive/stamp-processing-directive';

// Listing table data
const ELEMENT_DATA: ElementChallanCan[] = [
  {
    cNumber: '51/00057/072019/23',
    cDate: '15-Apr-2020',
    cName: 'B S Patel (000123)',
    cAmount: '23500',
    bankNo: 'TO/GNR/2020-21/37',
    bankAmount: '23500',
    cStatus: 'Pending',

    remarks: '',
  },

];



@Component({
  selector: 'app-challan-cancellation-sto',
  templateUrl: './challan-cancellation-sto.component.html',
  styleUrls: ['./challan-cancellation-sto.component.css']
})
export class ChallanCancellationStoComponent implements OnInit {

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
    'cName', 'cAmount', 'bankNo', 'bankAmount', 'cStatus', 'remarks'];

  indentCtrl: FormControl = new FormControl();
  challanCancellationStoForm: FormGroup;
  directiveObject = new StampProcessingDirectives(this.router, this.dialog);
  date: any = new Date();

  onAdd = false;

  constructor(private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog, ) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.challanCancellationStoForm = this.fb.group({
      finYear: ['2019-2020', Validators.required],

      issueDate: ['14-Apr-2020', Validators.required],

      subTreasury: ['Sub Treasury Office, Mansa', Validators.required],
      challanNumber: ['', Validators.required],

    });
  }

// Add Button Click
  whenAddClick() {
    this.onAdd = true;
  }

  gotoListing() {
    this.router.navigate(['./stamp-processing/challan-cancellation-sto-list']);
  }
}

