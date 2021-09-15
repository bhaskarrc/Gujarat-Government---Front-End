import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { GroupDetailsListing } from 'src/app/model/group-insurance';

@Component({
  selector: 'app-form-eleven-view',
  templateUrl: './form-eleven-view.component.html',
  styleUrls: ['./form-eleven-view.component.css']
})
export class FormElevenViewComponent implements OnInit {

  // form group
  formEleven: FormGroup;

  // date
  todayDate = new Date();

  // variables
  disableForm = true;

  // group detail table
  columns: string[] = [
    'srno',
    'group',
    'fromDate',
    'endDate',
    'groupUnit',
    'savingFund',
    'insuranceFund',
    'total'
  ];
  elementData: GroupDetailsListing[] = [
    {
      group: 'D',
      fromDate: new Date('4/1/1988'),
      endDate: new Date('3/31/1989'),
      groupUnit: '1',
      savingFund: '37528',
      insuranceFund: '0',
      total: '37528'
    },
    {
      group: 'C',
      fromDate: new Date('4/1/1988'),
      endDate: new Date('3/31/1989'),
      groupUnit: '1',
      savingFund: '35816',
      insuranceFund: '0',
      total: '35816'
    },
    {
      group: 'B',
      fromDate: new Date('4/1/2019'),
      endDate: new Date('8/31/2020'),
      groupUnit: '2',
      savingFund: '35816',
      insuranceFund: '0',
      total: '35816'
    },
  ];
  groupDetailDataSource = new MatTableDataSource<GroupDetailsListing>(this.elementData);
  // group detail table end

  // constructor
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formData();
  }

  // form data
  formData() {
    this.formEleven = this.fb.group({
      district: [{ value: 'Gandhinagar', disabled: true }],
      ddoNo: [{ value: '49', disabled: true }],
      cardexNo: [{ value: '132', disabled: true }],
      ddoOfficeName: [{ value: 'Directorate of Account & Treasury', disabled: true }],
      employeeNo: [{ value: '1000000000', disabled: true }],
      employeeName: [{ value: 'Mr. K H Rana', disabled: true }],
      schemeJoinDate: [{ value: '01-Apr-1988', disabled: true }],
      schemeJoinGroup: [{ value: 'D', disabled: true }],
      payScale: [{ value: '6400-12000', disabled: true }],
      retiredResignationDate: [{ value: new Date('31-Aug-2020'), disabled: true }],
    });
  }

  // calculate total for group detail table
  calculateTotal() {
    let amount = 0;
    this.groupDetailDataSource.data.forEach(element => {
      amount = Number(element.total) + amount;
    });
    return amount;
  }
}
