import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { CloseConfirmCommonDialogComponent } from '../../close-confirm-common-dialog/close-confirm-common-dialog.component';
import { stampProcessMessage } from 'src/app/common/error-message/common-message.constants';
import { StampProcessingDirectives } from 'src/app/common/directive/stamp-processing-directive';
import { ElementCategoryMasterList } from 'src/app/model/stamp-processing';


// Listing table Data
const ELEMENT_DATA: ElementCategoryMasterList[] = [
  {
    catName: 'Agency License',
    majHead: '0030',
    majHeadToolTip: 'Stamps and Registration Fees',
    subMajHead: '02',
    subMajHeadToolTip: 'Stamp-Non-Judicial',
    minHead: '102',
    minHeadToolTip: 'Sale of Stamps',
    subHead: '00',
    subHeadToolTip: 'Sale of Stamps',
    purpose: 'Stamp - Non-Judicial',
    status: 'Active',
  },
  {
    catName: 'Agreement',
    majHead: '0030',
    majHeadToolTip: 'Stamps and Registration Fees',
    subMajHead: '02',
    subMajHeadToolTip: 'Stamp-Non-Judicial',
    minHead: '102',
    minHeadToolTip: 'Sale of Stamps',
    subHead: '00',
    subHeadToolTip: 'Sale of Stamps',
    purpose: 'Stamp - Non-Judicial',
    status: 'Inactive',
  },
  {
    catName: 'Foreign bill',
    majHead: '0030',
    majHeadToolTip: 'Stamps and Registration Fees',
    subMajHead: '02',
    subMajHeadToolTip: 'Stamp-Non-Judicial',
    minHead: '102',
    minHeadToolTip: 'Sale of Stamps',
    subHead: '00',
    subHeadToolTip: 'Sale of Stamps',
    purpose: 'Stamp - Non-Judicial',
    status: 'Active',
  },
  {
    catName: 'Hundi',
    majHead: '0030',
    majHeadToolTip: 'Stamps and Registration Fees',
    subMajHead: '02',
    subMajHeadToolTip: 'Stamp-Non-Judicial',
    minHead: '102',
    minHeadToolTip: 'Sale of Stamps',
    subHead: '00',
    subHeadToolTip: 'Sale of Stamps',
    purpose: 'Stamp - Non-Judicial',
    status: 'Active',
  },
  {
    catName: 'Insurance',
    majHead: '0030',
    majHeadToolTip: 'Stamps and Registration Fees',
    subMajHead: '02',
    subMajHeadToolTip: 'Stamp-Non-Judicial',
    minHead: '102',
    minHeadToolTip: 'Sale of Stamps',
    subHead: '00',
    subHeadToolTip: 'Sale of Stamps',
    purpose: 'Stamp - Non-Judicial',
    status: 'Active',
  },
  {
    catName: 'Non Judicial Paper',
    majHead: '0030',
    majHeadToolTip: 'Stamps and Registration Fees',
    subMajHead: '02',
    subMajHeadToolTip: 'Stamp-Non-Judicial',
    minHead: '102',
    minHeadToolTip: 'Sale of Stamps',
    subHead: '00',
    subHeadToolTip: 'Sale of Stamps',
    purpose: 'Stamp - Non-Judicial',
    status: 'Active',
  },
  {
    catName: 'Revenue',
    majHead: '0030',
    majHeadToolTip: 'Stamps and Registration Fees',
    subMajHead: '02',
    subMajHeadToolTip: 'Stamp-Non-Judicial',
    minHead: '102',
    minHeadToolTip: 'Sale of Stamps',
    subHead: '00',
    subHeadToolTip: 'Sale of Stamps',
    purpose: 'Stamp - Non-Judicial',
    status: 'Active',
  },
  {
    catName: 'Share transfer',
    majHead: '0030',
    majHeadToolTip: 'Stamps and Registration Fees',
    subMajHead: '02',
    subMajHeadToolTip: 'Stamp-Non-Judicial',
    minHead: '102',
    minHeadToolTip: 'Sale of Stamps',
    subHead: '00',
    subHeadToolTip: 'Sale of Stamps',
    purpose: 'Stamp - Non-Judicial',
    status: 'Active',
  },
  {
    catName: 'Special Adhesive',
    majHead: '0030',
    majHeadToolTip: 'Stamps and Registration Fees',
    subMajHead: '02',
    subMajHeadToolTip: 'Stamp-Non-Judicial',
    minHead: '102',
    minHeadToolTip: 'Sale of Stamps',
    subHead: '00',
    subHeadToolTip: 'Sale of Stamps',
    purpose: 'Stamp - Non-Judicial',
    status: 'Active',
  },
  {
    catName: 'Court Fee Label',
    majHead: '0030',
    majHeadToolTip: 'Stamps and Registration Fees',
    subMajHead: '01',
    subMajHeadToolTip: 'Stamps-Judicial',
    minHead: '101',
    minHeadToolTip: 'Court fees realised in stamp',
    subHead: '01',
    subHeadToolTip: 'Court fees realised in stamps',
    purpose: 'Stamp - Judicial',
    status: 'Active',
  },
  {
    catName: 'Court Fee Paper',
    majHead: '0030',
    majHeadToolTip: 'Stamps and Registration Fees',
    subMajHead: '01',
    subMajHeadToolTip: 'Stamps-Judicial',
    minHead: '101',
    minHeadToolTip: 'Court fees realised in stamp',
    subHead: '01',
    subHeadToolTip: 'Court fees realised in stamps',
    purpose: 'Stamp - Judicial',
    status: 'Active',
  },
  {
    catName: 'Notary',
    majHead: '0030',
    majHeadToolTip: 'Stamps and Registration Fees',
    subMajHead: '01',
    subMajHeadToolTip: 'Stamps-Judicial',
    minHead: '101',
    minHeadToolTip: 'Court fees realised in stamp',
    subHead: '01',
    subHeadToolTip: 'Court fees realised in stamps',
    purpose: 'Stamp - Judicial',
    status: 'Active',
  },
];

@Component({
  selector: 'app-category-master-list',
  templateUrl: './category-master-list.component.html',
  styleUrls: ['./category-master-list.component.css']
})
export class CategoryMasterListComponent implements OnInit {

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
  displayedColumns: string[] = ['position', 'catName', 'majHead', 'subMajHead', 'minHead', 'subHead', 'purpose', 'status', 'action'];

  finYearCtrl: FormControl = new FormControl();
  treSubTreCtrl: FormControl = new FormControl();
  categoryCtrl: FormControl = new FormControl();
  statusCtrl: FormControl = new FormControl();
  errorMessages = stampProcessMessage;
  directiveObject = new StampProcessingDirectives(this.router, this.dialog);

  catForm: FormGroup;


  constructor(private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.catForm = this.fb.group({
      finYear: ['10'],
      catName: [''],
      treSubTre: [''],
      category: [''],
      status: [''],
    });
  }

  clearForm() {
    this.catForm.reset();
  }

}
