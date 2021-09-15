import { Component, OnInit } from '@angular/core';
import { CloseConfirmCommonDialogComponent } from 'src/app/emd/close-confirm-common-dialog/close-confirm-common-dialog.component';
import { CommonListing } from 'src/app/model/common-listing';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { stampProcessMessage } from 'src/app/common/error-message/common-message.constants';
import { Router } from '@angular/router';
import { StampProcessingDirectives } from 'src/app/common/directive/stamp-processing-directive';
import { ElementStampDenoMasterTcList } from 'src/app/model/stamp-processing';

// Listing table Data
const ELEMENT_DATA: ElementStampDenoMasterTcList[] = [
  {
    deno: '20',
    stamp: 'Non Judicial Paper',
    disc: '3%',
  },
  {
    deno: '5',
    stamp: 'Notary',
    disc: '-',
  },
  {
    deno: '25000',
    stamp: 'Court Fee Paper',
    disc: '1%',
  },
  {
    deno: '10',
    stamp: 'Court Fee Label',
    disc: '3%',
  }
];

@Component({
  selector: 'app-stamp-denomination-master-tc-list',
  templateUrl: './stamp-denomination-master-tc-list.component.html',
  styleUrls: ['./stamp-denomination-master-tc-list.component.css']
})
export class StampDenominationMasterTcListComponent implements OnInit {
  // Search Field Details
  category_List: CommonListing[] = [
    { value: '1', viewValue: 'Agency License' },
    { value: '2', viewValue: 'Agreement' },
    { value: '3', viewValue: 'Court Fee Label' },
    { value: '4', viewValue: 'Court Fee Paper' },
    { value: '5', viewValue: 'Foreign bill' },
    { value: '6', viewValue: 'Hundi' },
    { value: '7', viewValue: 'Insurance' },
    { value: '8', viewValue: 'Non Judicial Paper' },
    { value: '9', viewValue: 'Notary' },
    { value: '10', viewValue: 'Revenue' },
    { value: '11', viewValue: 'Share transfer' },
    { value: '12', viewValue: 'Special Adhesive' },
  ];

  status_List: CommonListing[] = [
    { value: '1', viewValue: 'Active' },
    { value: '2', viewValue: 'Inactive' },
  ];

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  // Listing Table
  displayedColumns: string[] = ['position', 'stamp', 'deno', 'action'];
  categoryCtrl: FormControl = new FormControl();
  treSubTreCtrl: FormControl = new FormControl();
  statusCtrl: FormControl = new FormControl();
  errorMessages = stampProcessMessage;
  directiveObject = new StampProcessingDirectives(this.router, this.dialog);

  denoForm: FormGroup;



  constructor(private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.denoForm = this.fb.group({
      category: [''],
      status: [''],
    });
  }

  clearForm() {
    this.denoForm.reset();
  }

}
