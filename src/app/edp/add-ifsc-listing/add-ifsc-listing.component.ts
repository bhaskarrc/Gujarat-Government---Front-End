import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import {  MatPaginator, MatSort, } from '@angular/material';
import { Observable } from 'rxjs';


export interface PeriodicElement {
  bankname: string;
  position: number;
  ifscCode: string;
  bankadd: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  // tslint:disable-next-line: max-line-length
  { position: 1, bankname: 'Bank of Baroda', ifscCode: 'BARBOAHMED', bankadd: 'Near Udhyog Bhavan, G Rd, Sector 11, Gandhinagar, Gujarat 382011' },
];



@Component({
  selector: 'app-add-ifsc-listing',
  templateUrl: './add-ifsc-listing.component.html',
  styleUrls: ['./add-ifsc-listing.component.css']
})




export class AddIfscListingComponent implements OnInit {
  displayedColumns: string[] = ['position', 'bankname', 'ifscCode', 'bankadd', 'action'];
  addIfsc = ELEMENT_DATA;

  isSearch = true;
  ifscForm: FormGroup;
  todayDate = Date.now();
  dataSourcePayHead: any;
  filterObjValue: any;
  _onDestroy: Observable<any>;

  

  constructor(
    private fb: FormBuilder,

  ) { }

  bankNameList: any[] = [
    { value: '1', viewValue: 'Bank of Baroda' },
    { value: '2', viewValue: 'State Bank of India' },
];

bankctr: FormControl = new FormControl();

  ngOnInit() {
    this.ifscFormData();

  }

  search() {
    this.isSearch = false;
  }

  ifscFormData() {
    this.ifscForm = this.fb.group({
      bankName: [''],
      bankAddress: ['']
    });
  }



}
