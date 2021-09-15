import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { FinancialDetailsListing } from 'src/app/model/bpe';
import { CommonListing } from 'src/app/model/common-listing';

@Component({
  selector: 'app-financial-details-listing',
  templateUrl: './financial-details-listing.component.html',
  styleUrls: ['./financial-details-listing.component.css']
})
export class FinancialDetailsListingComponent implements OnInit {

  financialDetailsListingForm: FormGroup;
  districtCtrl: FormControl = new FormControl();
  financialYearCtrl: FormControl = new FormControl();

  financialYearList: CommonListing[] = [
    { value: '1', viewValue: '2016-2017' },
    { value: '2', viewValue: '2017-2018' },
  ];
  districtList: CommonListing[] = [
    { value: '0', viewValue: 'Ahmedabad' },
    { value: '1', viewValue: 'Amreli' },
    { value: '2', viewValue: 'Anand' },
    { value: '3', viewValue: 'Aravalli' },
    { value: '4', viewValue: 'Banaskantha' },
    { value: '5', viewValue: 'Bharuch' },
    { value: '6', viewValue: 'Bhavnagar' },
    { value: '7', viewValue: 'Botad' },
    { value: '8', viewValue: 'Chhota Udaipur' },
    { value: '9', viewValue: 'Dahod' },
    { value: '10', viewValue: 'Dang' },
    { value: '11', viewValue: 'Devbhoomi Dwarka' },
    { value: '12', viewValue: 'Gandhinagar' },
  ];

  displayedColumns: string[] = [
    'serialNo',
    'referenceNo',
    'referenceDate',
    'nameOfCompany',
    'district',
    'financialYear',
    'action'
  ];
  elementData: FinancialDetailsListing[] = [{

    referenceNo: 'PSU-908123',
    referenceDate: new Date('08/24/2016'),
    nameOfCompany: 'U.N. Mehta Institute of Cardiology & Research Centre',
    district: 'Ahmedabad',
    financialYear: '2016-17',
  }];
  dataSource = new MatTableDataSource<FinancialDetailsListing>(this.elementData);
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.searchForm();
  }

  // form data
  searchForm() {
    this.financialDetailsListingForm = this._fb.group({
      referenceNo: [''],
      referenceDate: [''],
      nameOfCompany: [''],
      district: [''],
      financialYear: [''],
    });
  }

  // reset form
  clearForm() {
    this.financialDetailsListingForm.reset();
  }



}
