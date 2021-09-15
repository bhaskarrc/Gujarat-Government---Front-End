import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LetterOfCreditDirectives } from 'src/app/common/directive/letter-of-credit-directive';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { ListValue } from 'src/app/model/common-grant';

@Component({
  selector: 'app-lc-attachment-edit',
  templateUrl: './lc-attachment-edit.component.html',
  styleUrls: ['./lc-attachment-edit.component.css']
})
export class LcAttachmentEditComponent implements OnInit {

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

  // File Selection Methods start
  deleteBrowse(index) {
    this.directiveObject.removeRow(index, this.dataSourceBrowse);
    this.dataSourceBrowse = new MatTableDataSource(this.dataSourceBrowse.data);
  }
  // File Selection Methods Ends

}
