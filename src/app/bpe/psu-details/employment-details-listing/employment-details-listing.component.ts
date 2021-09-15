import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { CommonListing } from 'src/app/model/common-listing';
import { EmploymentDetailsListing } from 'src/app/model/bpe';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-employment-details-listing',
  templateUrl: './employment-details-listing.component.html',
  styleUrls: ['./employment-details-listing.component.css']
})
export class EmploymentDetailsListingComponent implements OnInit {

  employmentDetailsListingForm: FormGroup;
  financialYearCtrl: FormControl = new FormControl();

  financialYearList: CommonListing[] = [
    { value: '1', viewValue: '2016-2017' },
    { value: '2', viewValue: '2017-2018' },
  ];

  displayedColumns: string[] = [
    'serialNo',
    'referenceNo',
    'referenceDate',
    'financialYear',
    'psuName',
    'action'
  ];
  elementData: EmploymentDetailsListing[] = [{

    referenceNo: 'PSU-908123',
    referenceDate: new Date('08/24/2016'),
    psuName: 'Gujarat State Land Development Corporation',
    financialYear: '2016-17',
  }];
  dataSource = new MatTableDataSource<EmploymentDetailsListing>(this.elementData);
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.searchForm();
  }

  // form data
  searchForm() {
    this.employmentDetailsListingForm = this._fb.group({
      referenceNo: [''],
      referenceDate: [''],
      psuName: [''],
      financialYear: [''],
    });
  }

  // reset form
  clearForm() {
    this.employmentDetailsListingForm.reset();
  }

}
