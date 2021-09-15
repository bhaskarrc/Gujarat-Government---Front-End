import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource } from '@angular/material';
import { PseRegistrationListing } from 'src/app/model/bpe';

@Component({
  selector: 'app-pse-registration-listing',
  templateUrl: './pse-registration-listing.component.html',
  styleUrls: ['./pse-registration-listing.component.css']
})
export class PseRegistrationListingComponent implements OnInit {

  // formGroup
  pseRegistrationListingForm: FormGroup;

  // form control
  pseTypeCtrl: FormControl = new FormControl();
  registrationYearCtrl: FormControl = new FormControl();
  districtCtrl: FormControl = new FormControl();

  // variable
  todayDate = new Date();

  // List values
  pseTypeList: any[] = [
    { value: '1', viewValue: 'Government Company' },
    { value: '2', viewValue: 'Joint Sector Company' },
    { value: '3', viewValue: 'Statutory Corporation/Board' },
    { value: '4', viewValue: 'Government Authority' },
    { value: '5', viewValue: 'Society' },
    { value: '6', viewValue: 'Missions' },
    { value: '7', viewValue: 'Trust' },
    { value: '8', viewValue: 'Independent Bodies' }
  ];

  districtList: any[] = [
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

  registrationYearList: ListValue[] = [
    { value: '1', viewValue: '2018-19' },
    { value: '2', viewValue: '2019-20' },
    { value: '3', viewValue: '2020-21' },
    { value: '4', viewValue: '2021-22' },
  ];

  // table data
  displayedColumns: string[] = [
    'serialNo',
    'pseName',
    'pseType',
    'registrationNo',
    'registrationYear',
    'district',
    'village',
    'action',
  ];
  elementData: PseRegistrationListing[] = [
    {
      pseName: 'U.N. Mehta Institute of Cardiology & Research Centre',
      pseType: 'Trust',
      registrationNo: 'Trust Reg. No. F/2878/Ahmedabad',
      registrationYear: '1992',
      district: 'Ahmedabad',
      village: 'Ahmedabad'
    }
  ];
  dataSource = new MatTableDataSource<PseRegistrationListing>(this.elementData);

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.searchForm();
  }

  // reset form
  clearForm() {
    this.pseRegistrationListingForm.reset();
  }

  // search form
  searchForm() {
    this.pseRegistrationListingForm = this._fb.group({
      pseName: [''],
      pseType: [''],
      regNumber: [''],
      district: [''],
      city: [''],
      regYear: ['']
    });
  }
}
