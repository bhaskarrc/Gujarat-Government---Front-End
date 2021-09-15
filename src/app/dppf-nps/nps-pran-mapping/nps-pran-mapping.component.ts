import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { DppfNpsMessage } from 'src/app/common/error-message/common-message.constants';
import { Attachment } from 'src/app/model/dppf-nps';

@Component({
  selector: 'app-nps-pran-mapping',
  templateUrl: './nps-pran-mapping.component.html',
  styleUrls: ['./nps-pran-mapping.component.css']
})
export class NpsPranMappingComponent implements OnInit {
  // Date
  todayDate = new Date();
  // Variable
  errormsg = DppfNpsMessage;
  // Form Group
  pranMappingForm: FormGroup;
  // constructor
  constructor(private fb: FormBuilder, private el: ElementRef) { }

  ngOnInit() {
    this.pranMappingFormData();
  }

  pranMappingFormData() {
    this.pranMappingForm = this.fb.group({
      fromDate: [''],
      toDate: [''],
    });
  }

  search() { }

}
