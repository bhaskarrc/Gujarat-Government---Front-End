import { element } from 'protractor';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';

import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';

const ELEMENT_DATA = [
  {
    cardexNo: '4',
    ddoNo: '12',
    ddoName: 'Under Secretary,GENERAL ADMINISTRATIVE DEPARTMENT (MINISTER), GANDHINAGAR, Gandhinagar'
  },
  {
    cardexNo: '5',
    ddoNo: '122',
    ddoName: 'Under Secretary,GENERAL ADMINISTRATIVE DEPARTMENT (MINISTER), GANDHINAGAR, Gandhinagar'
  }
]
@Component({
  selector: 'app-cardexno',
  templateUrl: './cardexno.component.html',
  styleUrls: ['./cardexno.component.css']
})
export class CardexnoComponent implements OnInit {

  isShown: boolean = false;
  AddShow: boolean = false;
  billinwardform: FormGroup;
  tokenStatusCtrl: FormControl = new FormControl();
  cardexDisplayedColumns: string[] = ['select', 'cardexNo', 'ddoNo', 'ddoName'];
  cardexDataSource = new MatTableDataSource<any>(ELEMENT_DATA);

  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder, public dialogRef: MatDialogRef<CardexnoComponent>,) { }

  tokenStatus_list: any[] = [
    { value: '1', viewValue: 'ALL' },
    { value: '2', viewValue: 'Available' },
    { value: '3', viewValue: 'Used' },
    { value: '4', viewValue: 'Lost' }

  ];

  ngOnInit() {
    this.billinwardform = this.fb.group({
      cardexNo: [''],
      officeName: [''],
      ddoNo: ['']

    })
  }
  selection = new SelectionModel<any>(true, []);


  isAllSelected() {
    if (this.selection.selected.length === 1) {
      this.AddShow = true;
    } else if (this.selection.selected.length === 2) {
      this.AddShow = true;
    } else if (this.selection.selected.length === 0) {
      this.AddShow = false;
    } else {
      this.AddShow = false;
    }
    const numSelected = this.selection.selected.length;
    const numRows = this.cardexDataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    if (this.selection.selected.length === 1) {
      this.AddShow = true;
    } else if (this.selection.selected.length === 2) {
      this.AddShow = true;
    } else if (this.selection.selected.length === 0) {
      this.AddShow = false;
    } else {
      this.AddShow = false;
    }
    this.isAllSelected() ?
      this.selection.clear() :
      this.cardexDataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
  search() {
    this.isShown = true;

  }
  goToDashboard(): void {
    this.dialogRef.close('no');
  }


}
