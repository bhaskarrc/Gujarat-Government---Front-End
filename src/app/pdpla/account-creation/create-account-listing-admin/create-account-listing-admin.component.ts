import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { CreateAcListC, ListValue } from 'src/app/model/pdpla';

@Component({
  selector: 'app-create-account-listing-admin',
  templateUrl: './create-account-listing-admin.component.html',
  styleUrls: ['./create-account-listing-admin.component.css']
})
export class CreateAccountListingAdminComponent implements OnInit {
  // Form Group
  pdplaform: FormGroup;
  // Form Control
  chequeCtrl: FormControl = new FormControl();
  pdplaCtrl: FormControl = new FormControl();
  Element_Data: CreateAcListC[] = [
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
      status: 'Submitted to Finance Department',
      lyingWith: 'Mr. Patel',
      pdplaType: 'PLA',
    },
  ];
  dataSourceAcListing = new MatTableDataSource<CreateAcListC>(this.Element_Data);
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
  pdplaType_list: ListValue[] = [
    { value: '1', viewValue: 'PD ' },
    { value: '2', viewValue: 'PLA' },
  ];
  chequbook_list: ListValue[] = [
    { value: '1', viewValue: 'Yes ' },
    { value: '2', viewValue: 'No' },
  ];

  constructor(private fb: FormBuilder, private router: Router) { }




  ngOnInit() {
    this.pdplaform = this.fb.group({
      // Formfields
      refNo: [''],
      refdDate: [''],
      cardexNo: [''],
      lyingWith: [''],
      ddoNo: [''],
      district: [''],
      pdplaType: [''],
    });
  }

  // routing
  gotoParentPage() {
    this.router.navigate(['./pdpla/create-account-parent-department-level']);
  }

}
