import { MatDialog } from '@angular/material';
import { FormControl, FormBuilder } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';
import { ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { WorkflowDetailsEmdComponent } from 'src/app/emd/workflow-details-emd/workflow-details-emd.component';
export class EmdDirectives {
  selection = new SelectionModel<any>(true, []);

  constructor(private router: Router, private dialog: MatDialog) { }
  // Methods for Checkbox Selection Starts
  masterToggle(dataSourceData) {
    this.isAllSelected(dataSourceData)
      ? this.selection.clear()
      : dataSourceData.forEach(row =>
        this.selection.select(row)
      );
  }

  isAllSelected(dataSourceData) {
    const numSelected = this.selection.selected.length;
    const numRows = dataSourceData.length;
    return numSelected === numRows;
  }

  checkboxLabel(dataSourceData, row?: any): string {
    if (!row) {
      return `${this.isAllSelected(dataSourceData) ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'
      } row ${row.position + 1}`;
  }
  // Common Workflow Popup
  workflowDetails() {
    const dialogRef = this.dialog.open(WorkflowDetailsEmdComponent, {
      width: '1200px'
    });
  }


}
