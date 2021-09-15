import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { ListValue } from 'src/app/model/common-grant';

@Component({
  selector: 'app-transfer-entry-payment-listing',
  templateUrl: './transfer-entry-payment-listing.component.html',
  styleUrls: ['./transfer-entry-payment-listing.component.css']
})
export class TransferEntryPaymentListingComponent implements OnInit {
  // Form Group
  transferEntryPaymentListingForm: FormGroup;
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
  constructor(private fb: FormBuilder) { }
  Element_Data: any[] = [{
    challanNo: '123111',
    challanDate: '21-May-2020',
    challanAmount: '1000.00',
    cardexNo: '123',
    ddoNo: '543',
    majorHead: '2054'
  },
  {
    challanNo: '123110',
    challanDate: '22-May-2020',
    challanAmount: '1000.00',
    cardexNo: '113',
    ddoNo: '523',
    majorHead: '2054'
  }];
  dataSource = new MatTableDataSource<any>(this.Element_Data);
  displayedColumns: any[] = ['position', 'challanNo', 'challanDate', 'challanAmount', 'cardexNo', 'ddoNo', 'majorHead', 'action'];
  ngOnInit() {
    this.transferEntryPaymentListingForm = this.fb.group({
      challanNo: [''],
      challanDate: [''],
      challanAmount: [''],
      cardexNo: [''],
      ddoNo: [''],
      majorHead: ['']
    });
  }
  clearForm() {
    this.transferEntryPaymentListingForm.reset();
  }

}
