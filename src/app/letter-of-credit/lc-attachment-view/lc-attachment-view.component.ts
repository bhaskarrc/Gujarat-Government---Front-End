import { Component, OnInit, ElementRef } from '@angular/core';
import { ListValue } from 'src/app/model/letter-of-credit';
import { FormControl, FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { LetterOfCreditDirectives } from 'src/app/common/directive/letter-of-credit-directive';

@Component({
  selector: 'app-lc-attachment-view',
  templateUrl: './lc-attachment-view.component.html',
  styleUrls: ['./lc-attachment-view.component.css']
})
export class LcAttachmentViewComponent implements OnInit {

  // Table Data for Attachment
  brwoseData: any[] = [
    {
      name: undefined,
      file: undefined,
      uploadedBy: ''
    }
  ];

  fileBrowseIndex: number;

  // Table Columns for Attachment Table
  displayedBrowseColumns = [
    'srno',
    'attachmentType',
    'fileName',
    'browse',
    'uploadedFileName',
    'uploadedBy',
    'action'
  ];

  // List of Attachment Types
  attachmentTypeCode: ListValue[] = [
    { value: '01', viewValue: 'Supporting Document' },
    { value: '02', viewValue: 'Sanction Order' },
    { value: '03', viewValue: 'Others' }
  ];

  attachmentTypeCodeCtrl: FormControl = new FormControl();
  dataSourceBrowse = new MatTableDataSource(this.brwoseData);

  constructor(private fb: FormBuilder, private el: ElementRef, public dialog: MatDialog, private router: Router) { }

  // Create object to access Methods of Letter of Credit Directive
  directiveObject = new LetterOfCreditDirectives(this.router, this.dialog, this.el);

  ngOnInit() {
  }

}
