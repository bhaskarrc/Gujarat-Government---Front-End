
import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { CloseConfirmCommonDialogComponent } from '../close-confirm-common-dialog/close-confirm-common-dialog.component';
import { SubmitConfirmCommonDialigComponent } from '../submit-confirm-common-dialig/submit-confirm-common-dialig.component';
import { SelectionModel } from '@angular/cdk/collections';
import { stampProcessMessage } from 'src/app/common/error-message/common-message.constants';
import { StampProcessingDirectives } from 'src/app/common/directive/stamp-processing-directive';
import { ElementIndConEntry } from 'src/app/model/stamp-processing';


// Listing table data
const ELEMENT_DATA: ElementIndConEntry[] = [
  {
    treasuryOffice: 'Gadhinagar Treasury Office',
    indentNumber: '51/00057/072019/23',
    indentDate: '12-Aug-2019',
    indentType: 'Regular Indent',
    indentDuration: '01-Jul-2019 to 31-Dec-2019',

  },

  {
    treasuryOffice: 'Kalol Sub Treasury Office',
    indentNumber: '51/00057/082019/23',
    indentDate: '20-Jun-2018',
    indentType: 'Mid-term Indent',
    indentDuration: '-',

  },

];


@Component({
  selector: 'app-indent-consolidation',
  templateUrl: './indent-consolidation.component.html',
  styleUrls: ['./indent-consolidation.component.css']
})
export class IndentConsolidationComponent implements OnInit {

  dataSource = new MatTableDataSource(ELEMENT_DATA);
// Listing Table
  displayedColumns: string[] = ['checkBox', 'position', 'treasuryOffice', 'indentNumber',
    'indentDate', 'indentType', 'indentDuration'];

  indentConsolidationForm: FormGroup;
  errorMessages = stampProcessMessage;
  date: any = new Date();
  directiveObject = new StampProcessingDirectives(this.router, this.dialog);

  onAdd = false;
  selection = new SelectionModel<any>(true, []);
  constructor(private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog, ) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.indentConsolidationForm = this.fb.group({
      finYear: ['2019-2020', Validators.required],
      consolidationDate: ['30-Jun-2019', Validators.required],
      subTreasury: ['District Treasury Office, Gandhinagar', Validators.required],
      indentNumber: ['51/00057/072019/23', Validators.required],
    });
  }

// Add Button Click
  whenAddClick() {
    this.onAdd = true;
  }
  gotoListing() {
    this.router.navigate(['./stamp-processing/indent-consolidation-list']);
  }
  gotoconsolidate() {
    this.router.navigate(['./stamp-processing/indent-consolidated-view']);
  }
// Check Box Selection
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  // Check Box Selection
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
}
