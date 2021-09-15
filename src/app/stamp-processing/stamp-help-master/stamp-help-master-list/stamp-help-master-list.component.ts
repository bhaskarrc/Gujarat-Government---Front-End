import { CommonListing } from './../../../model/common-listing';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { CloseConfirmCommonDialogComponent } from '../../close-confirm-common-dialog/close-confirm-common-dialog.component';
import { stampProcessMessage } from 'src/app/common/error-message/common-message.constants';
import { StampProcessingDirectives } from 'src/app/common/directive/stamp-processing-directive';
import { StampHelp } from 'src/app/model/stamp-processing';
// Listing table Data
const ELEMENT_DATA: StampHelp[] = [
  {
    question: 'Question1?',
    answer: 'answer1',
   }, {
    question: 'Question2?',
    answer: 'Answer2',
   },
];

@Component({
  selector: 'app-stamp-help-master-list',
  templateUrl: './stamp-help-master-list.component.html',
  styleUrls: ['./stamp-help-master-list.component.css']
})
export class StampHelpMasterListComponent implements OnInit {
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  // Listing Table
  displayedColumns: string[] = ['position', 'question', 'answer', 'action'];

  finYearCtrl: FormControl = new FormControl();
  errorMessages = stampProcessMessage;
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
      question: [''],
    });
  }

  clearForm() {
    this.stampHelpForm.reset();
  }
  // to delete row
  delete(index) {
    ELEMENT_DATA.splice(index, 1);
    this.dataSource.data = this.dataSource.data;
  }

}
