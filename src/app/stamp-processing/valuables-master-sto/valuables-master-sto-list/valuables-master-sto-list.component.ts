import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { CloseConfirmCommonDialogComponent } from '../../close-confirm-common-dialog/close-confirm-common-dialog.component';
import { stampProcessMessage } from 'src/app/common/error-message/common-message.constants';
import { StampProcessingDirectives } from 'src/app/common/directive/stamp-processing-directive';
import { ValuablesMasterList } from 'src/app/model/stamp-processing';

// Listing table Data
const ELEMENT_DATA: ValuablesMasterList[] = [
  {
    fYear: '2019-2020',
    catName: 'Cashbox',
    subCatName: '-',
    status: 'Active',
   },
   {
    fYear: '2019-2020',
    catName: 'Election Article',
    subCatName: 'Postal Ballet',
    status: 'Inactive',
   },
   {
    fYear: '2019-2020',
    catName: 'Election Article',
    subCatName: 'Others',
    status: 'Active',
   }
];

@Component({
  selector: 'app-valuables-master-sto-list',
  templateUrl: './valuables-master-sto-list.component.html',
  styleUrls: ['./valuables-master-sto-list.component.css']
})
export class ValuablesMasterStoListComponent implements OnInit {
// Search Field Details

  status_List: CommonListing[] = [
    { value: '1', viewValue: 'Active'},
    { value: '2', viewValue: 'Inactive'},
  ];

  catName_List: CommonListing[] = [
    { value: '1', viewValue: 'Cashbox'},
    { value: '2', viewValue: 'Cheque Book / Roll'},
    { value: '3', viewValue: 'Election Article'},
    { value: '4', viewValue: 'Exam Article'},
    { value: '5', viewValue: 'Padlocks and Key'},
    { value: '6', viewValue: 'Sealed Packet'},
    { value: '7', viewValue: 'Valuables Article'},
    { value: '8', viewValue: 'Others'},
  ];

  subCatName_List: CommonListing[] = [
    { value: '1', viewValue: 'Ballet Unit'},
    { value: '2', viewValue: 'Control Unit'},
    { value: '3', viewValue: 'Postal Ballet'},
    { value: '4', viewValue: 'Others'},
  ];

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  // Listing Table
  displayedColumns: string[] = ['position', 'catName', 'subCatName', 'status', 'action'];

  statusCtrl: FormControl = new FormControl();
  catNameCtrl: FormControl = new FormControl();
  subCatNameCtrl: FormControl = new FormControl();
  errorMessages = stampProcessMessage;
  directiveObject = new StampProcessingDirectives(this.router, this.dialog);

  subValueForm: FormGroup;
  temp2Value = 'Sub-Treasury Office, Gandhinagar';

  constructor(private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.subValueForm = this.fb.group({
      catName: [''],
      subCatName: [''],
      temp1: [''],
      status: [''],
    });
  }

  clearForm() {
    this.subValueForm.reset();
  }
}
