import { CommonListing } from 'src/app/model/common-listing';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { dppfHbaMessage } from 'src/app/common/error-message/common-message.constants';
import { Attachment } from 'src/app/model/dppf-hba';
import { DPPFHbaDirectives } from 'src/app/common/directive/dppf-hba';
@Component({
  selector: 'app-waive-off-details-hba',
  templateUrl: './waive-off-details-hba.component.html',
  styleUrls: ['./waive-off-details-hba.component.css']
})
export class WaiveOffDetailsHbaComponent implements OnInit {
  fileBrowseIndex: number;
  // Form Group
  waiveDetailsForm: FormGroup;
  attachmentTypeCodeCtrl = new FormControl();
  // Date
  todayDate = Date.now();
  maxDate = new Date();
  // List
  attachmentTypeCode: CommonListing[] = [
    { value: '1', viewValue: 'Supporting Document' },
    { value: '2', viewValue: 'Sanction Order' },
    { value: '3', viewValue: 'Others' }
  ];
  // Table SourceWaive Off Details
  brwoseData: Attachment[] = [{
    attachmentType: '',
    fileName: '',
    browse: '',
    uploadedFileName: '',
    uploadedBy: '',
  }];
  dataSourceBrowse = new MatTableDataSource(this.brwoseData);
  displayedBrowseColumns = ['srno', 'attachmentType', 'fileName', 'browse', 'uploadedFileName', 'action'];
  // Variable
  errorMessages;
  isSubmitted;
  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder) { }
  directiveObject = new DPPFHbaDirectives(this.dialog);
  ngOnInit() {
    this.errorMessages = dppfHbaMessage;
    this.waiveDetailsData();
  }
  waiveDetailsData() {
    this.waiveDetailsForm = this.fb.group({
      hbaNo: [''],
      name: [''],
      deathDate: [''],
      gpfNo: [''],
      deathDetails: [''],
      remark: [''],
    });
  }

  // Navigation Route

  navigate() {
    this.router.navigate(['./dppf-hba/waive-offer-details-listing']);
  }
}
