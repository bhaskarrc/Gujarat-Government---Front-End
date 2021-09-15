import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { CloseConfirmCommonDialogComponent } from '../../close-confirm-common-dialog/close-confirm-common-dialog.component';
import { CommonListing } from 'src/app/model/common-listing';
import { stampProcessMessage } from 'src/app/common/error-message/common-message.constants';
import { StampProcessingDirectives } from 'src/app/common/directive/stamp-processing-directive';
import { ElementPrintMasterList } from 'src/app/model/stamp-processing';

// Listing table Data
const ELEMENT_DATA: ElementPrintMasterList[] = [
  {
    fYear: '2019-2020',
    press: 'Press',
    status: 'Active',
  },
  {
    fYear: '2019-2020',
    press: 'Press',
    status: 'Inactive',
  },
  {
    fYear: '2019-2020',
    press: 'Press',
    status: 'Active',
  }
];
@Component({
  selector: 'app-printing-press-master-list',
  templateUrl: './printing-press-master-list.component.html',
  styleUrls: ['./printing-press-master-list.component.css']
})
export class PrintingPressMasterListComponent implements OnInit {

  status_List: CommonListing[] = [
    { value: '1', viewValue: 'Active' },
    { value: '2', viewValue: 'Inactive' },
  ];


  dataSource = new MatTableDataSource(ELEMENT_DATA);
  // Listing Table
  displayedColumns: string[] = ['position', 'press', 'status', 'action'];

  statusCtrl: FormControl = new FormControl();
  errorMessages = stampProcessMessage;
  directiveObject = new StampProcessingDirectives(this.router, this.dialog);

  printPressForm: FormGroup;
  constructor(private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.printPressForm = this.fb.group({
      printPress: [''],
      status: [''],
    });
  }

  clearForm() {
    this.printPressForm.reset();
  }

}
