import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { CommonListing } from 'src/app/model/common-listing';
import { StampHelp } from 'src/app/model/stamp-processing';
// Listing table Data
const ELEMENT_DATA: StampHelp[] = [
  {
    question: 'Question1?',
    answer: 'answer1',
   },
  {
    question: 'Question2?',
    answer: 'answer2',
   },
];

@Component({
  selector: 'app-stamp-help-master-view',
  templateUrl: './stamp-help-master-view.component.html',
  styleUrls: ['./stamp-help-master-view.component.css']
})
export class StampHelpMasterViewComponent implements OnInit {

  stampHelpForm: FormGroup;
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  // Listing Table
  displayedColumns: string[] = ['position', 'question', 'answer'];
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

}
