import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

const ELEMENT_DATA = [
  {
    classSName: '  ',
    objectCode: '',
    subHeadDesc: ' '
  },

];

@Component({
  selector: 'app-object-class-heading',
  templateUrl: './object-class-heading.component.html',
  styleUrls: ['./object-class-heading.component.css']
})
export class ObjectClassHeadingPaoAuditComponent implements OnInit {
  objectDisplayedColumns: string[] = ['select', 'classSName', 'objectCode', 'subHeadDesc'];
  objectDataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  selection = new SelectionModel<any>(true, []);

  constructor(public dialogRef: MatDialogRef<ObjectClassHeadingPaoAuditComponent>) { }


  ngOnInit() {
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.objectDataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.objectDataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
  goToDashboard(): void {
    this.dialogRef.close('no');
  }

}
