import { Component, OnInit } from '@angular/core';
import { CommonListing } from 'src/app/model/common-listing';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { EmploymentDetailsListing } from 'src/app/model/bpe';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-independent-bodies-details-listing',
  templateUrl: './independent-bodies-details-listing.component.html',
  styleUrls: ['./independent-bodies-details-listing.component.css']
})
export class IndependentBodiesDetailsListingComponent implements OnInit {

  // form group
  independentBodiesDetailsListingForm: FormGroup;

  // form control
  financialYearCtrl: FormControl = new FormControl();

  // list
  financialYearList: CommonListing[] = [
    { value: '1', viewValue: '2016-2017' },
    { value: '2', viewValue: '2017-2018' },
  ];

  // table data
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
    this.independentBodiesDetailsListingForm = this._fb.group({
      referenceNo: [''],
      referenceDate: [''],
      psuName: [''],
      financialYear: [''],
    });
  }

  // reset form
  clearForm() {
    this.independentBodiesDetailsListingForm.reset();
  }

}
