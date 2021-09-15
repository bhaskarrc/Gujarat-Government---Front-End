import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { ListValue } from 'src/app/model/common-grant';
import { RtiAppealRegister } from 'src/app/model/local-fund';

@Component({
  selector: 'app-rti-appeal-register-listing',
  templateUrl: './rti-appeal-register-listing.component.html',
  styleUrls: ['./rti-appeal-register-listing.component.css']
})
export class RtiAppealRegisterListingComponent implements OnInit {
  maxDate = new Date();
  rtiAppealRegisterListingForm: FormGroup;
  isSubmitted = false;
  monthCtrl: FormControl = new FormControl();
  yearCtrl: FormControl = new FormControl();

  monthList: ListValue[] = [
    { value: '1', viewValue: 'January' },
    { value: '2', viewValue: 'February' },
    { value: '3', viewValue: 'March' },
    { value: '4', viewValue: 'April' },
    { value: '5', viewValue: 'May' },
    { value: '6', viewValue: 'June' },
    { value: '7', viewValue: 'July' },
    { value: '8', viewValue: 'August' },
    { value: '9', viewValue: 'September' },
    { value: '10', viewValue: 'October' },
    { value: '11', viewValue: 'November' },
    { value: '12', viewValue: 'December' },
  ];
  yearList: ListValue[] = [
    { value: '0', viewValue: '2017' },
    { value: '1', viewValue: '2018' },
    { value: '2', viewValue: '2019' },
    { value: '3', viewValue: '2020' },
    { value: '4', viewValue: '2021' },
    { value: '5', viewValue: '2022' },
  ];

  // table data
  elementData: RtiAppealRegister[] = [
    {
      appealNo: '12044',
      appealDate: new Date('11/16/2019'),
      nameOfAppellantAddress: 'K P Shah - Sector 16, Plot No, 121/2 Gandhinagar',
      dateOfReceipt: new Date('11/25/2019'),
      nameDesignationOfPio: 'S N Shukla -APIO- 12044/2-26/11/2019',
      decisionByFirst: 'Approved',
      whetherSecond: 'No',
      anyOtherInformation: 'NA',
      edit: true
    },
    {
      appealNo: '134',
      appealDate: new Date('11/20/2019'),
      nameOfAppellantAddress: 'M M Prajapati - Shriji Apartment, Sabarmati, Ahmedabad',
      dateOfReceipt: new Date('11/28/2019'),
      nameDesignationOfPio: 'P M Munjani-PIO-134/1-29/11/2019',
      decisionByFirst: 'Approved',
      whetherSecond: 'No',
      anyOtherInformation: 'NA',
      edit: true
    },
    {
      appealNo: '256',
      appealDate: new Date('11/23/2019'),
      nameOfAppellantAddress: 'S S Haidar - Haidar Pol, Lal Darvwaja Ahmedabad',
      dateOfReceipt: new Date('11/30/2019'),
      nameDesignationOfPio: 'S N Shukla -APIO- 256/2/2-01/12/2019',
      decisionByFirst: 'Rejected',
      whetherSecond: 'No',
      anyOtherInformation: 'NA',
      edit: true
    },
    {
      appealNo: '1101',
      appealDate: new Date('11/30/2019'),
      nameOfAppellantAddress: 'K P Kabra - Sukan Tenament, Naranpura, Ahmedabad',
      dateOfReceipt: new Date('11/15/2019'),
      nameDesignationOfPio: 'S P Patel - APIO- 1101/2-17/11/2019',
      decisionByFirst: 'Approved',
      whetherSecond: 'No',
      anyOtherInformation: 'NA',
      edit: true
    },
  ];
  displayedColumns: string[] = [
    'serialNo',
    'appealNo',
    'appealDate',
    'nameOfAppellantAddress',
    'dateOfReceipt',
    'nameDesignationOfPio',
    'decisionByFirst',
    'whetherSecond',
    'anyOtherInformation',
    'action',
  ];
  dataSource = new MatTableDataSource<RtiAppealRegister>(this.elementData);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.rtiAppealRegisterListingForm = this.fb.group({
      appealDate: [''],
      month: [''],
      year: [''],
      appellantName: [''],
    });
  }

  // reset form
  reset() {
    this.rtiAppealRegisterListingForm.reset();
  }


}
