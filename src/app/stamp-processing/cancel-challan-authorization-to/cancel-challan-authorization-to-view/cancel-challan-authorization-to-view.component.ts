import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';
import { Component, ElementRef, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { StampProcessingDirectives } from 'src/app/common/directive/stamp-processing-directive';
import { CancelChallanAuth } from 'src/app/model/stamp-processing';
import { BehaviorSubject } from 'rxjs';
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

const ELEMENT_DATA1: CancelChallanAuth[] = [
  {
    cNumber: '51/00057/072019/24',
    cDate: '16-Apr-2020',
    cName: 'B S Patel (000123)',
    cAmount: '11500',
    cStatus: 'Approved',

    remarks: '',
  },

];

const ELEMENT_DATA2: CancelChallanAuth[] = [
  {
    cNumber: '51/00057/072019/25',
    cDate: '17-Apr-2020',
    cName: 'B S Patel (000123)',
    cAmount: '23500',
    cStatus: 'Pending',

    remarks: '',
  },

];


@Component({
  selector: 'app-cancel-challan-authorization-to-view',
  templateUrl: './cancel-challan-authorization-to-view.component.html',
  styleUrls: ['./cancel-challan-authorization-to-view.component.css']
})
export class CancelChallanAuthorizationToViewComponent implements OnInit {
  currentLang = new BehaviorSubject<string>('Eng');
  isLangChange = false;
  hasFocusSet: number;
  isTokentable = false;
  isTokentable2 = false;
  // Entry Field Details
  challan_List: CommonListing[] = [
    { value: '1', viewValue: '51/00057/072019/23' },
    { value: '2', viewValue: '51/00057/072019/24' },
    { value: '3', viewValue: '51/00057/072019/25' },
    { value: '5', viewValue: '51/00057/072019/34' },
    { value: '6', viewValue: '51/00057/072019/56' },
    { value: '7', viewValue: '51/00057/072019/77' },
  ];


  dataSource = new MatTableDataSource(ELEMENT_DATA);
  // Listing Table
  displayedColumns: string[] = ['position', 'cNumber', 'cDate',
    'cName', 'cAmount', 'cStatus'];

  indentCtrl: FormControl = new FormControl();

  cancelChallanToForm: FormGroup;
  date: any = new Date();
  directiveObject = new StampProcessingDirectives(this.router, this.dialog);

  onAdd = false;

  constructor(private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog, private el: ElementRef) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.cancelChallanToForm = this.fb.group({
      finYear: ['2019-2020'],

      issueDate: [''],

      subTreasury: ['District Treasury Office, Gandhinagar'],
      challanNumber: ['1'],
      remarks: ['']

    });
  }

  gotoListing() {
    this.router.navigate(['./stamp-processing/cancel-challan-authorization-to-list']);
  }
}
