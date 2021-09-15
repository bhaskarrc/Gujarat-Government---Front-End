import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { CommonListing } from 'src/app/model/common-listing';
import { LoanDetailsListing } from 'src/app/model/bpe';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-loan-details-listing',
  templateUrl: './loan-details-listing.component.html',
  styleUrls: ['./loan-details-listing.component.css']
})
export class LoanDetailsListingComponent implements OnInit {

  loanDetailsListingForm: FormGroup;
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
    'nameOfEnterprise',
    'purposeOfLoan',
    'action'
  ];
  elementData: LoanDetailsListing[] = [{

    referenceNo: 'PSU-908123',
    referenceDate: new Date('08/24/2016'),
    nameOfEnterprise: 'Gujarat State Land Development Corporation',
    purposeOfLoan: 'NA',
    financialYear: '2016-17',
  }];
  dataSource = new MatTableDataSource<LoanDetailsListing>(this.elementData);
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.searchForm();
  }

  // form data
  searchForm() {
    this.loanDetailsListingForm = this._fb.group({
      referenceNo: [''],
      referenceDate: [''],
      nameOfEnterprise: [''],
      purposeOfLoan: [''],
      financialYear: [''],
    });
  }

  // reset form
  clearForm() {
    this.loanDetailsListingForm.reset();
  }


}
