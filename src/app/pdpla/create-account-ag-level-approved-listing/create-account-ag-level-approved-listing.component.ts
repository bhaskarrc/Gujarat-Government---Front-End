import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { ListValue, CreateAcListAccount } from 'src/app/model/pdpla';

@Component({
  selector: 'app-create-account-ag-level-approved-listing',
  templateUrl: './create-account-ag-level-approved-listing.component.html',
  styleUrls: ['./create-account-ag-level-approved-listing.component.css']
})
export class CreateAccountAgLevelApprovedListingComponent implements OnInit {
  // Form Group
  pdplaform: FormGroup;
  // List
  pdplaType_list: ListValue[] = [
    { value: '1', viewValue: 'PD ' },
    { value: '2', viewValue: 'PLA' },
  ];

  pdplaCtrl: FormControl = new FormControl();
  Element_Data: CreateAcListAccount[] = [
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
      status: 'Request Approved',
      lyingWith: 'Mr. Patel',
      pdplaType: 'PLA',

    },
  ];
  dataSourceAcListing = new MatTableDataSource<CreateAcListAccount>(this.Element_Data);
  displayedColumnsAcListing: any[] = [
    'position',
    'reqNo',
    'refDate',
    'cardexNo',
    'ddoNo',
    'pdplaType',
    'officeName',
    'pdacNo',
    'pdacName',
    'mjrHead',
    'submjrHead',
    'minorHead',
    'subHead',
    'disName',
    'status',
    'lyingWith',
    'action',
  ];

  constructor(private fb: FormBuilder, public router: Router) { }

  chequbook_list: any[] = [
    { value: '1', viewValue: 'Yes ' },
    { value: '2', viewValue: 'No' },
  ];

  chequeCtrl: FormControl = new FormControl();

  ngOnInit() {
    this.pdplaform = this.fb.group({
      // Formfields
      pdplaType: [''],
      refNo: [''],
      refdDate: [''],
      pdplaAccNo: [''],
      cardexNo: [''],
      lyingWith: [''],
      accStartDate: [''],
      ddoNo: [''],
      district: [''],

    });
  }

  // routing
  gotoParentPage() {
    this.router.navigate(['./pdpla/create-account-ag-level-approved']);

  }
}
