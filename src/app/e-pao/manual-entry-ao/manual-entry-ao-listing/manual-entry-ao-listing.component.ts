

import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

import { SelectionModel } from '@angular/cdk/collections';

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatDialog, MatSort, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';

const ELEMENT_DATA: any[] = [
  {
    tNo: '100000023',
    cIn: '565689783354899',
    amt: '2000.00',
    eDate: '15-May-2018',
    vDate: '15-May-2019',
    type: 'AD',
  },

  {
    tNo: '100000024',
    cIn: '565689783354888',
    amt: '3000.00',
    eDate: '16-May-2018',
    vDate: '16-May-2019',
    type: 'SD',
  },

];

@Component({
  selector: 'app-manual-entry-ao-listing',
  templateUrl: './manual-entry-ao-listing.component.html',
  styleUrls: ['./manual-entry-ao-listing.component.css']
})
export class ManualEntryAoListingComponent implements OnInit {
  todayDate = Date.now();
  initiatiomdate = new Date((new Date()));
  maxDate = new Date();

  isSubmitted: boolean = false;
  entryMasterAoListForm: FormGroup;

  selection = new SelectionModel<any>(true, []);

  displayedColumns = ['checkBox', 'tNo', 'cIn', 'amt', 'eDate', 'vDate', 'type', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private router: Router, private fb: FormBuilder, public dialog: MatDialog, ) { }



  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.entryMasterAoListForm = this.fb.group({
      refNo: [''],
      cinNo: [''],
      amt: [''],
      eDate: [''],
      vDate: [''],
      type: [''],


    });
  }

  clearForm() {
    this.entryMasterAoListForm.reset();
  }

  onSave() {
    if (this.entryMasterAoListForm.valid) {
      this.isSubmitted = false;
    } else {
      this.isSubmitted = true;
    }

  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
  delete(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource = new MatTableDataSource(this.dataSource.data);
  }

}



