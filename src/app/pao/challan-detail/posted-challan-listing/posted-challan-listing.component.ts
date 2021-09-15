import { MatTableDataSource } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ListValue, PostedChallanList } from 'src/app/model/paoModel';


@Component({
  selector: 'app-posted-challan-listing',
  templateUrl: './posted-challan-listing.component.html',
  styleUrls: ['./posted-challan-listing.component.css']
})
export class PostedChallanListingComponent implements OnInit {
  // Form Group
  postChallanListingForm: FormGroup;
  // Date
  maxDate = new Date();
  // Form Control
  majorHeadCtrl: FormControl = new FormControl();
  // List
  majorHead_list: ListValue[] = [
    { value: '1', viewValue: '3451:Secretariat-Economic Services' },
    {
      value: '2', viewValue: '5475:Capital Outlay on other General Economics Services'
    },
    { value: '3', viewValue: '2401:Crop Husbandry' },
    { value: '4', viewValue: '2071:Pensions and Other Retirement Benefits' },
    { value: '5', viewValue: '2058:Stationery and Printing' },
    { value: '6 : Secretariat-Social Services', viewValue: '2251 : Secretariat-Social Services' },
    { value: '7 : Interest Payments', viewValue: '2049 : Interest Payments' },
    { value: '8 : Water Supply and Sanitation', viewValue: '2215 : Water Supply and Sanitation' },
    { value: '9 : Ecology and Environment', viewValue: '3435 : Ecology and Environment' },
    { value: '10 : Capital Outlay on Urban Development', viewValue: '4217 : Capital Outlay on Urban Development' },
    { value: '11 : General Education', viewValue: '2202 : General Education' },
  ];
  // Table SOurce
  Element_Data: PostedChallanList[] = [
    {
      branchCode: '12001',
      salesTextNo: '24575500471',
      bankDate: '20/04/2008',
      partyName: 'SHREE AUTOCARE',
      majorHead: '0040',
      amount: '713',
      revenue: 'revenue',

    }
  ];
  dataSource = new MatTableDataSource<PostedChallanList>(this.Element_Data);
  displayedColumns: any[] = ['position', 'branchCode', 'salesTextNo', 'bankDate', 'partyName', 'majorHead', 'amount', 'action'];
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.postChallanListingForm = this.fb.group({
      branchCode: [''],
      salesTaxNo: [''],
      bankDate: [''],
      partyName: [''],
      majorHead: [''],
      amount: [''],
      challanNo: [''],
      treasuryCode: [''],
    });

  }

  clearForm() {
    this.postChallanListingForm.reset();
  }

}
