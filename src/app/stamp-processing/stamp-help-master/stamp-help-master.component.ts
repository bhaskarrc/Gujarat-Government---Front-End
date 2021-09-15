import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { SaveConfirmCommonDialogComponent } from '../save-confirm-common-dialog/save-confirm-common-dialog.component';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { CloseConfirmCommonDialogComponent } from '../close-confirm-common-dialog/close-confirm-common-dialog.component';
import { stampProcessMessage } from 'src/app/common/error-message/common-message.constants';
import { StampProcessingDirectives } from 'src/app/common/directive/stamp-processing-directive';
import { StampHelp } from 'src/app/model/stamp-processing';
import { BehaviorSubject } from 'rxjs';
// Listing table Data
const ELEMENT_DATA: StampHelp[] = [
  {
    question: 'Question1?',
    answer: 'answer1',
   },
];

@Component({
  selector: 'app-stamp-help-master',
  templateUrl: './stamp-help-master.component.html',
  styleUrls: ['./stamp-help-master.component.css']
})
export class StampHelpMasterComponent implements OnInit {
  currentLang = new BehaviorSubject<string>('Eng');
// Entry Field Details
  finYear_list: CommonListing[] = [
    { value: '1', viewValue: '2011-2012' },
    { value: '2', viewValue: '2012-2013' },
    { value: '3', viewValue: '2013-2014' },
    { value: '4', viewValue: '2014-2015' },
    { value: '5', viewValue: '2015-2016' },
    { value: '6', viewValue: '2016-2017' },
    { value: '7', viewValue: '2017-2018' },
    { value: '8', viewValue: '2018-2019' },
    { value: '9', viewValue: '2019-2020' },
    { value: '10', viewValue: '2020-2021' },
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  // Listing Table
  displayedColumns: string[] = ['position', 'question', 'answer', 'action'];

  finYearCtrl: FormControl = new FormControl();
  errorMessages = stampProcessMessage;
  date: any = new Date();
  directiveObject = new StampProcessingDirectives(this.router, this.dialog);

  stampHelpForm: FormGroup;
  constructor(private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.stampHelpForm = this.fb.group({
    });
  }
  gotoListing() {
    this.router.navigate(['./stamp-processing/stamp-help-master-list']);
  }

  // add delete
  addRow(dataSource, index) {
    this.dataSource.data.push({
      question: '',
      answer: '',
    });
    this.dataSource.data = this.dataSource.data;
  }



}
