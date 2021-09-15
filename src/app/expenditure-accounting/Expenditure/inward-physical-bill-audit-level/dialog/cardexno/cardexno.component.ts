import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

const ELEMENT_DATA = [
  {
    cardexNo: '4',
    ddoNo: '12',
    ddoName: 'Under Secretary,GENERAL ADMINISTRATIVE DEPARTMENT (MINISTER), GANDHINAGAR, Gandhinagar'
  }
];
@Component({
  selector: 'app-cardexno',
  templateUrl: './cardexno.component.html',
  styleUrls: ['./cardexno.component.css']
})
export class CardexnoPaoAuditComponent implements OnInit {

  isShown = false;
  billinwardform: FormGroup;
  tokenStatusCtrl: FormControl = new FormControl();
  cardexDisplayedColumns: string[] = ['select', 'cardexNo', 'ddoNo', 'ddoName'];
  cardexDataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  selection = new SelectionModel<any>(true, []);

  constructor(public dialog: MatDialog, private fb: FormBuilder, public dialogRef: MatDialogRef<CardexnoPaoAuditComponent>) { }

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

    });
  }



  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.cardexDataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
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
