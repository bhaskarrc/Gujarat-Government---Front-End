import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { CreateAcListING, ListValue } from 'src/app/model/pdpla';

@Component({
  selector: 'app-create-account-listing',
  templateUrl: './create-account-listing.component.html',
  styleUrls: ['./create-account-listing.component.css']
})
export class CreateAccountListingComponent implements OnInit {
  pdplaform: FormGroup;
  // Element_Data
  Element_Data: CreateAcListING[] = [
    {
      reqNo: 'PDPLAAC 01190001',
      refDate: '1-May-2020',
      cardexNo: '574',
      ddoNo: '7751',
      officeName: 'Road and Transport',
      mjrHead: '8448',
      submjrHead: '00',
      minorHead: '101',
      subHead: '00',
      pendingWith: 'Mr. ABC (Account Officer)',
      status: 'Submitted to HOD',
      lyingWith: 'Mr. Patel'

    },
  ];
  dataSourceAcListing = new MatTableDataSource<CreateAcListING>(this.Element_Data);
  displayedColumnsAcListing: string[] = [
    'position',
    'reqNo',
    'refDate',
    'cardexNo',
    'ddoNo',
    'officeName',
    'mjrHead',
    'submjrHead',
    'minorHead',
    'subHead',
    'lyingWith',
    'action',
  ];

  constructor(private fb: FormBuilder, private router: Router) { }

  chequbook_list: ListValue[] = [
    { value: '1', viewValue: 'Yes ' },
    { value: '2', viewValue: 'No' },
  ];

  chequeCtrl: FormControl = new FormControl();

  ngOnInit() {
    this.pdplaform = this.fb.group({
      refNo: [''],
      refDate: [''],
      cardexNo: [''],
      lyingWith: [''],
      ddoNo: [''],

    });
  }

  // routing
  gotoParentPage() {
    this.router.navigate(['./pdpla/create-account']);

  }
}
