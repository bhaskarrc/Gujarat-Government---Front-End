import { CommonListing } from 'src/app/model/common-listing';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { DppfNpsMessage } from 'src/app/common/error-message/common-message.constants';

@Component({
  selector: 'app-nps-generate-contribution-file',
  templateUrl: './nps-generate-contribution-file.component.html',
  styleUrls: ['./nps-generate-contribution-file.component.css']
})
export class NpsGenerateContributionFileComponent implements OnInit {
  // List
  methodList: CommonListing[] = [
    { value: '1', viewValue: 'FILE_TEXT' },
    { value: '2', viewValue: 'BUFFER_TEXT' },
    { value: '3', viewValue: 'DEFAULT' },
    { value: '4', viewValue: 'BUFFER' },
    { value: '5', viewValue: 'FILE' }
  ];
  // Date
  todayDate = new Date();
  // VAriable
  errormsg = DppfNpsMessage;
  // FormGroup
  generateContributionFileForm: FormGroup;
  // Form COntrol
  methodCTRL: FormControl = new FormControl();
  // constructor
  constructor(private fb: FormBuilder, private dialog: MatDialog) { }

  ngOnInit() {
    this.generateContributionFileFormData();
  }
  // Form COntrol Name Pass
  generateContributionFileFormData() {
    this.generateContributionFileForm = this.fb.group({
      fromDate: [''],
      toDate: [''],
      method: [''],
    });
  }
}
