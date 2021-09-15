import { MatTableDataSource } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { receiptManagement } from 'src/app/common/error-message/common-message.constants';
import { ListValue } from 'src/app/model/common-grant';
@Component({
  selector: 'app-challan-preparation-at-counter-listing',
  templateUrl: './challan-preparation-at-counter-listing.component.html',
  styleUrls: ['./challan-preparation-at-counter-listing.component.css']
})
export class ChallanPreparationAtCounterListingComponent implements OnInit {
  counterListingForm: FormGroup;
  // variables
  errorMessages = receiptManagement;
  // form control
  taxPurposeCtrl: FormControl = new FormControl();
  // list
  taxPurpose_list: ListValue[] = [
    { value: '1', viewValue: 'Value Added Tax' },
    { value: '2', viewValue: 'Central Sales Tax' },
    { value: '3', viewValue: 'Entry Tax' }
  ];
  // table data
  Element_Data: any[] = [
    {
      pCode: 'Value Added tax',
      mHead: '8043',
      subMajorHead: '00',
      minorHead: '001',
      subHead: '01',
      mode: 'Cash',

    }
  ];
  dataSource = new MatTableDataSource<any>(this.Element_Data);
  displayedColumns: any[] = ['srNo', 'pCode', 'mHead', 'subMajorHead', 'minorHead', 'subHead', 'mode', 'action'];



  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.counterListingForm = this.fb.group({
      mHead: [''],
      subMajorHead: [''],
      minorHead: [''],
      subHead: [''],
      mode: [''],
      taxPurpose: ['']
    });
  }

  // clear form
  clearForm() {
    this.counterListingForm.reset();
  }

}

