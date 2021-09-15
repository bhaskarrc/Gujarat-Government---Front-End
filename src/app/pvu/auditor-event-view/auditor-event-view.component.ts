import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HeaderElement, CommonListing } from 'src/app/model/common-listing';
import { MatTableDataSource } from '@angular/material';
import { pvuMessage } from 'src/app/common/error-message/common-message.constants';
@Component({
  selector: 'app-auditor-event-view',
  templateUrl: './auditor-event-view.component.html',
  styleUrls: ['./auditor-event-view.component.css']
})
export class AuditorEventViewComponent implements OnInit {
  eventsListJson: HeaderElement[] = [
    { label: 'Transaction No', value: '1879453849' },
    { label: 'Initiation Date', value: '8/9/2025' },
    { label: 'Office Name', value: 'Office 1' },
    { label: 'Pay Commission', value: '7th Pay Commission' },
    { label: 'Event Order Number', value: '8759718' },
    { label: 'Event Order Date', value: '5/8/2022' },
    { label: 'Event Effective Date', value: '12/11/2019' },
  ];
  currentDetailsJson: HeaderElement[] = [
    { label: 'Type', value: 'Change of Scale' },
    { label: 'Employee Number', value: '1879456384' },
    { label: 'Employee Name', value: 'Amit Pandey' },
    { label: 'Class', value: 'Class 1' },
    { label: 'Designation', value: 'Accountent' },
    { label: 'Office Name', value: 'Office 1' },
    { label: 'Pay Level', value: 'Level 1' },
    { label: 'Cell Id', value: '2' },
    { label: 'Basic Pay', value: '7800' },
    { label: 'Date of Joining', value: '12/8/2019' },
    { label: 'Next Increment Date', value: '5/4/2020' },
  ];
  postDetailsJson: HeaderElement[] = [
    { label: 'Pay Level', value: 'Level 1' },
    { label: 'Cell Id', value: '2' },
    { label: 'Basic Pay', value: '7800' },
    { label: 'Next Increment Date', value: '5/4/2020' },
  ];
  nationalPeriodDetailsJson: HeaderElement[] = [
    { label: 'From Date', value: '12/11/2019' },
    { label: 'To Date', value: '5/12/2020' },
    { label: 'Duration', value: '5 Years' },
  ];
  return_list: CommonListing[] = [
    { value: 1, viewValue: 'Authorization' },
    { value: 2, viewValue: 'Return' },
  ];
  reason_list: CommonListing[] = [
    { value: 1, viewValue: 'Reason 1' },
    { value: 2, viewValue: 'Reason 2' },
    { value: 3, viewValue: 'Reason 3' },
    { value: 4, viewValue: 'Others' },
  ];
  reasonChange: Boolean = false;
  errorMessage;
  recomendationForm: FormGroup;
  // authorizationCtrl: FormControl = new FormControl();
  returnCtrl: FormControl = new FormControl();
  reasonCtrl: FormControl = new FormControl();
  displayedBrowseColumns = ['attachmentType', 'fileName', 'uploadedFileName', 'uploadedBy', 'action'];
  brwoseData: any[] = [
    { attachmentType: 'Supporting Document', fileName: 'pan', uploadedFileName: 'pan.jpg', uploadedBy: 'Amit Pandey'},
  ];
  // tslint:disable-next-line:member-ordering
  dataSourceBrowse = new MatTableDataSource(this.brwoseData);
    constructor (private fb: FormBuilder) {
    }
    ngOnInit() {
      this.errorMessage = pvuMessage;
      this.recomendationForm = this.fb.group({
        // authorization: [''],
        return: [''],
        reason: [''],
        remarks: ['']
      });

    }
    reasonChangeSelection(event) {
      if(event.value === 4) {
        this.reasonChange = true;
      }
    }
    saveEstimate() {
    }

}

