import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material';
import { CommonListing } from 'src/app/model/common-listing';


export interface Element {
  deno: string | '';
  unitQty: string | '';
  stampSheet: string | '';
  fromSeries: string | '';
  toSeries: string | '';
}

// Listing table data
const ELEMENT_DATA: Element[] = [
  {
    deno: '1',
    unitQty: '30',
    stampSheet: '6',
    fromSeries: 'A-000001',
    toSeries: 'A-000100',
  },
  {
    deno: '2',
    unitQty: '50',
    stampSheet: '2',
    fromSeries: 'B-000001',
    toSeries: 'B-000100',
  }, {
    deno: '5',
    unitQty: '30',
    stampSheet: '6',
    fromSeries: 'C-000001',
    toSeries: 'C-000100',
  }, {
    deno: '10',
    unitQty: '20',
    stampSheet: '1',
    fromSeries: 'D-000001',
    toSeries: 'D-000100',
  }, {
    deno: '20',
    unitQty: '10',
    stampSheet: '2',
    fromSeries: 'E-000001',
    toSeries: 'E-000100',
  },
];

@Component({
  selector: 'app-stamp-details-common-popup',
  templateUrl: './stamp-details-common-popup.component.html',
  styleUrls: ['./stamp-details-common-popup.component.css']
})
export class StampDetailsCommonPopupComponent implements OnInit {
// Entry Field Details
  stamp_List: CommonListing[] = [
    { value: '1', viewValue: 'Agency License'},
    { value: '2', viewValue: 'Agreement'},
    { value: '3', viewValue: 'Court Fee Label'},
    { value: '4', viewValue: 'Court Fee Paper'},
    { value: '5', viewValue: 'Foreign bill'},
    { value: '6', viewValue: 'Hundi'},
    { value: '7', viewValue: 'Insurance'},
    { value: '8', viewValue: 'Non Judicial Paper'},
    { value: '9', viewValue: 'Notary'},
    { value: '10', viewValue: 'Revenue'},
    { value: '11', viewValue: 'Share transfer'},
    { value: '12', viewValue: 'Special Adhesive'},
    ];

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  // Table
  displayedColumns = ['position', 'deno', 'unitQty', 'stampSheet', 'fromSeries', 'toSeries'];

  stampCtrl: FormControl = new FormControl;

  stampDetails: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<StampDetailsCommonPopupComponent>,
    private fb: FormBuilder,
  ) { }

  selectedIndex: number;

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.stampDetails = this.fb.group({
      stamp: ['', Validators.required],
    });
  }

  onCancel() {
    this.closeDialog('no');
  }

  onyes() {
    this.closeDialog('yes');
  }

  closeDialog(popup: 'no' | 'yes') {
    this.dialogRef.close(popup);
  }

}
