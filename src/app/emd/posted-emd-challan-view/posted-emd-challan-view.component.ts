
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-posted-emd-challan-view',
  templateUrl: './posted-emd-challan-view.component.html',
  styleUrls: ['./posted-emd-challan-view.component.css']
})
export class PostedEmdChallanViewComponent implements OnInit {
  // FormGroup
  postedChallanViewForm: FormGroup;
  maxDate = new Date();
  initiatiomdate = new Date();
  showTable: Boolean = false;
  searchListForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
  ) { }
  ngOnInit() {
    this.postedChallanViewData();
  }
  postedChallanViewData() {
    this.postedChallanViewForm = this.fb.group({
      // FormGroup Fields
      payeeName: ['Mr. A.B. Mishra'],
      challanNo: ['192000001'],
      chDate: ['12-Apr-2020'],
      mHead: ['8443'],
      amount: ['20000.00'],
      dept: ['Revenue Department'],
    });
  }

  // function to clear form
  clearForm() {
    this.searchListForm.reset();
  }
  // shows and hides table
  search() {
    this.showTable = true;
  }

}

