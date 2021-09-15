import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { CommonListing } from 'src/app/model/common-listing';
import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { WorkflowDetailsDppfNpsComponent } from '../workflow-details-dppf-nps/workflow-details-dppf-nps.component';
import { Attachment } from 'src/app/model/dppf-nps';

@Component({
  selector: 'app-nps-legacy-upload',
  templateUrl: './nps-legacy-upload.component.html',
  styleUrls: ['./nps-legacy-upload.component.css']
})
export class NpsLegacyUploadComponent implements OnInit {
  // List
  attachmentTypeCode: CommonListing[] = [
    { value: '01', viewValue: 'Supporting Document' },
    { value: '02', viewValue: 'Sanction Order' },
    { value: '03', viewValue: 'Others' }
  ];

  legacyUploadData: any[] = [
    { description: '', fileName: '' }
  ];

  legacyUploadDataColumn: string[] = [
    'select', 'description', 'fileName', 'action'
  ];
  // Variable
  selectedIndex: number;
  tabDisable: Boolean = true;
  // Date
  todayDate = new Date();
  // Form Group
  legacyUploadForm: FormGroup;
  selection = new SelectionModel<any>(true, []);
  // Form Control
  attachmentTypeCodeCtrl: FormControl = new FormControl();
  legacyUploadDataSource = new MatTableDataSource(this.legacyUploadData);
  // Directives
  directiveObj = new CommonDirective();

  constructor(private fb: FormBuilder, private el: ElementRef, private dialog: MatDialog) { }

  ngOnInit() {
    this.legacyUploadFormData();
  }

  legacyUploadFormData() {
    this.legacyUploadForm = this.fb.group({
    });
  }
  // Worl Flow
  workflowDetails(): void {
    const dialogRef = this.dialog.open(WorkflowDetailsDppfNpsComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  getTabIndex(tabIndex) {
    this.selectedIndex = tabIndex;
    const temp = this.selectedIndex;
  }
  // Move Tab
  goToNext() {
    this.tabDisable = false;
    this.selectedIndex = 1;
  }

}
