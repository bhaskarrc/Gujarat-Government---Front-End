
import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';

import { SaveConfirmCommonDialogComponent } from '../../save-confirm-common-dialog/save-confirm-common-dialog.component';
import { CloseConfirmCommonDialogComponent } from '../../close-confirm-common-dialog/close-confirm-common-dialog.component';

import { SelectionModel } from '@angular/cdk/collections';
import { ElementIndConEntry } from 'src/app/model/stamp-processing';
import { StampProcessingDirectives } from 'src/app/common/directive/stamp-processing-directive';



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
    indentDuration: '',

  },

];


@Component({
  selector: 'app-indent-consolidation-viewonly',
  templateUrl: './indent-consolidation-viewonly.component.html',
  styleUrls: ['./indent-consolidation-viewonly.component.css']
})
export class IndentConsolidationViewonlyComponent implements OnInit {

  dataSource = new MatTableDataSource(ELEMENT_DATA);

  displayedColumns: string[] = ['checkBox', 'position', 'treasuryOffice', 'indentNumber',
    'indentDate', 'indentType', 'indentDuration'];

  indentConsolidationViewForm: FormGroup;
  directiveObject = new StampProcessingDirectives(this.router, this.dialog);
  date: any = new Date();
  constructor(private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog, ) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.indentConsolidationViewForm = this.fb.group({
      finYear: ['2019-2020'],
      consolidationDate: ['30-Jun-2019'],
      subTreasury: ['District Treasury Office, Gandhinagar'],
      indentNumber: ['51/00057/072019/23'],
    });
  }



  goToDashboard() {
    this.router.navigate(['']);
  }

  gotoListing() {
    this.router.navigate(['./stamp-processing/indent-consolidation-list']);
  }
  gotoconsolidate() {
    this.router.navigate(['./stamp-processing/indent-consolidated-view']);
  }
}
