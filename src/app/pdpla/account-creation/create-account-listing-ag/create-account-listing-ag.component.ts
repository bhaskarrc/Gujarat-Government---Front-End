import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { CreateAcListAccountAg, ListValue } from 'src/app/model/pdpla';


@Component({
  selector: 'app-create-account-listing-ag',
  templateUrl: './create-account-listing-ag.component.html',
  styleUrls: ['./create-account-listing-ag.component.css']
})
export class CreateAccountListingAgComponent implements OnInit {
  pdplaform: FormGroup;
  departmentCtrl: FormControl = new FormControl();
  department_list: ListValue[] = [
    { value: '1', viewValue: 'Agriculture Department' },
    { value: '2', viewValue: 'Education Department' },
    { value: '3', viewValue: 'Finance Department' },
    { value: '4', viewValue: 'Road and Building Department' }
  ];
  districtCtrl: FormControl = new FormControl();
  district_list: ListValue[] = [
    { value: '1', viewValue: 'Ahmedabad' },
    { value: '2', viewValue: 'Amreli' },
    { value: '3', viewValue: 'Anand' },
    { value: '4', viewValue: 'Banaskantha' },
    { value: '5', viewValue: 'Bharuch' },
    { value: '6', viewValue: 'Bhavnagar' },
    { value: '7', viewValue: 'Dahod' },
    { value: '8', viewValue: 'Dang' },
    { value: '9', viewValue: 'Gandhinagar' },
  ];
  pdplaType_list: any[] = [
    { value: '1', viewValue: 'PD ' },
    { value: '2', viewValue: 'PLA' },
  ];

  pdplaCtrl: FormControl = new FormControl();
  Element_Data: CreateAcListAccountAg[] = [
    {
      reqNo: 'PDPLAAC 01190001',
      refDate: '26-May-2020',
      officeName: 'Road and Transport',
      pdacNo: 'GSRTC',
      pdacName: 'GSRTC-1',
      mjrHead: '8448',
      submjrHead: '00',
      minorHead: '101',
      subHead: '00',
      cardexNo: '123',
      ddoNo: '543',
      disName: 'Ahmedabad',
      pendingWith: 'Mr. ABC (Account Officer)',
      status: 'Pending',
      lyingWith: 'Mr. Patel',
      department: 'Finance Department',
      pdplaType: 'PLA',

    },
  ];
  dataSourceAcListing = new MatTableDataSource<CreateAcListAccountAg>(this.Element_Data);
  displayedColumnsAcListing: any[] = [
    'position',
    'reqNo',
    'refDate',
    'cardexNo',
    'ddoNo',
    'pdplaType',
    'officeName',
    'mjrHead',
    'submjrHead',
    'minorHead',
    'subHead',
    'department',
    'disName',
    'status',
    'lyingWith',
    'action',
  ];

  constructor(private fb: FormBuilder, private router: Router) { }

  chequbook_list: any[] = [
    { value: '1', viewValue: 'Yes ' },
    { value: '2', viewValue: 'No' },
  ];
  // FormControl
  chequeCtrl: FormControl = new FormControl();

  ngOnInit() {
    this.pdplaform = this.fb.group({
      pdplaType: [''],
      department: [''],
      refNo: [''],
      refdDate: [''],
      cardexNo: [''],
      lyingWith: [''],
      ddoNo: [''],
      district: [''],

    });
  }

  // routing
  gotoParentPage() {
    this.router.navigate(['./pdpla/create-account-ag-level']);
  }


}
