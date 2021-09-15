import { element } from 'protractor';
import { Component, OnInit, ViewChild ,Inject} from '@angular/core';

import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';

const ELEMENT_DATA = [
  {
    gtrCode:'GTR-30',
    billTypeShortName:'Pay Bill',
    billTypeShortCode:'30'
  }
]
@Component({
  selector: 'app-bill-type',
  templateUrl: './bill-type.component.html',
  styleUrls: ['./bill-type.component.css']
})
export class BillTypeAuditComponent implements OnInit {

  isShown: boolean = false ; 
  billinwardform: FormGroup;
  billTypeDisplayedColumns: string[] = ['select','gtrCode','billTypeShortName','billTypeShortCode'];
  billTypeDataSource = new MatTableDataSource<any>(ELEMENT_DATA);

  constructor(private router: Router,public dialog: MatDialog,private fb: FormBuilder,public dialogRef: MatDialogRef<BillTypeAuditComponent>,) { }


  ngOnInit() {
    this.billinwardform = this.fb.group({
      billTypeCode:[''],  
      billTypeDescription:['']

    })
  }
  selection = new SelectionModel<any>(true, []);


  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.billTypeDataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.billTypeDataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  search(){
    this.isShown = true;

  }
  goToDashboard(): void {
    this.dialogRef.close('no');
}
}
