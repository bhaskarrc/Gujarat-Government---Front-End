import { element } from 'protractor';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';

import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';

const ELEMENT_DATA = [
  {
    tokenNo: '4',
    tokenStatus: 'Available'
  }
]
@Component({
  selector: 'app-tokenno',
  templateUrl: './tokenno.component.html',
  styleUrls: ['./tokenno.component.css']
})
export class TokennoPaoComponent implements OnInit {
  isShown: boolean = false;

  billinwardform: FormGroup;
  tokenStatusCtrl: FormControl = new FormControl();
  tokenDisplayedColumns: string[] = ['tokenNo', 'tokenStatus'];
  tokenDataSource = new MatTableDataSource<any>(ELEMENT_DATA);

  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder,
    public dialogRef: MatDialogRef<TokennoPaoComponent>,
  ) { }

  tokenStatus_list: any[] = [
    { value: '1', viewValue: 'ALL' },
    { value: '2', viewValue: 'Available' },
    { value: '3', viewValue: 'Used' },
    { value: '4', viewValue: 'Lost' }
  ];

  ngOnInit() {
    this.billinwardform = this.fb.group({
      toTokenNo: [''],
      fromTokenNo: [''],
      tokenStatus: ['']

    })
  }
  selection = new SelectionModel<any>(true, []);


  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.tokenDataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.tokenDataSource.data.forEach(row => this.selection.select(row));
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
