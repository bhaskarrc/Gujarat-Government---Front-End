import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { CreateAcListAccount, ListValue } from 'src/app/model/pdpla';

@Component({
  selector: 'app-create-account-listing-hod',
  templateUrl: './create-account-listing-hod.component.html',
  styleUrls: ['./create-account-listing-hod.component.css']
})
export class CreateAccountListingHodComponent implements OnInit {
  // Form Group
  pdplaform: FormGroup;
  // Form Control
  chequeCtrl: FormControl = new FormControl();
  pdplaCtrl: FormControl = new FormControl();
  // List
  pdplaType_list: ListValue[] = [
    { value: '1', viewValue: 'PD ' },
    { value: '2', viewValue: 'PLA' },
  ];

  chequbook_list: ListValue[] = [
    { value: '1', viewValue: 'Yes ' },
    { value: '2', viewValue: 'No' },
  ];
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
      status: 'Submitted to Admin',
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
    'mjrHead',
    'submjrHead',
    'minorHead',
    'subHead',
    'disName',
    'status',
    'lyingWith',
    'action',
  ];

  constructor(private fb: FormBuilder, private router: Router) { }



  ngOnInit() {
    this.pdplaform = this.fb.group({
      // Formfields
      pdplaType: [''],
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
    this.router.navigate(['./pdpla/create-account-hod-level']);
  }
}
