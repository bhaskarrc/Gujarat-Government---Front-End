import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { CreateAcListAccountDAte, ListValue } from 'src/app/model/pdpla';

@Component({
  selector: 'app-account-closing-request-listing',
  templateUrl: './account-closing-request-listing.component.html',
  styleUrls: ['./account-closing-request-listing.component.css']
})
export class AccountClosingRequestListingComponent implements OnInit {
  // From Group
  pdplaform: FormGroup;
  // Form COntrol
  subMajorCtrl: FormControl = new FormControl();
  majorCtrl: FormControl = new FormControl();
  minorHeadCtrl: FormControl = new FormControl();
  subHeadCtrl: FormControl = new FormControl();
  // List
  majorHead_list: ListValue[] = [
    { value: '1', viewValue: '8448: Deposits of Local Funds(Bearing Interest)' },
    { value: '2', viewValue: '8342: Deposits of Local Funds(Bearing Interest)' },

  ];


  subMajorHead_list: ListValue[] = [
    { value: '1', viewValue: '01' },
    { value: '2', viewValue: '00' },
  ];

  minorHead_list: ListValue[] = [
    {
      value: '1',
      viewValue: '101 : National Mineral Exploration Trust Deposite'
    },
    {
      value: '117 : Defined Contribution Pension Scheme for Government Employees',
      viewValue: '117 : Defined Contribution Pension Scheme for Government Employees'
    },

  ];



  subHead_list: ListValue[] = [
    { value: '1', viewValue: '00' },
    { value: '2', viewValue: '01' },
    { value: '3', viewValue: '02' },
  ];

  status_list: ListValue[] = [
    { value: '1', viewValue: 'Draft ' },
    { value: '2', viewValue: 'Pending' },
    { value: '3', viewValue: 'Approved' },
    { value: '4', viewValue: 'Cancelled' },
  ];

  Element_Data: CreateAcListAccountDAte[] = [
    {
      reqNo: 'PDPLARC0515001',
      refDate: '26-May-2020',
      pdplaOfcName: 'GSRTC',
      pdacNo: 'GSRTC',
      pdacName: 'GSRTC-1',
      lastTranDate: '01-Apr-2016',
      closBal: '0.00',
      carNo: '123',
      ddoNo: '543',
      disName: 'Ahmedabad',
      toName: 'District Treasury Office Ahmedabad',
      pendingWith: 'Mr. ABC (Account Officer)',
      status: 'Pending',
      headChargeable: '8448:01:101:00'
    },
  ];
  dataSourceCloseAc = new MatTableDataSource<CreateAcListAccountDAte>(this.Element_Data);
  displayedColumnscloseAcListing: string[] = [
    'position',
    'reqNo',
    'refDate',
    'carNo',
    'ddoNo',
    'pdplaOfcName',
    'pdacNo',
    'pdacName',
    'headChargeable',
    'lastTranDate',
    'closBal',
    'disName',
    'toName',
    'status',
    'pendingWith',
    'action',
  ];

  constructor(private fb: FormBuilder) { }


  statusCtrl: FormControl = new FormControl();

  ngOnInit() {
    this.pdplaform = this.fb.group({
      // formfields
      pdplaAccNo: [''],
      pdplaName: [''],
      status: [''],
      pendingWith: [''],
      cardexNo: [''],
      ddoNo: [''],

    });
  }
}
