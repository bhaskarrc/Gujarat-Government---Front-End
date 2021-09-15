import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatOption, MatTableDataSource } from '@angular/material';
import { MatDialogRef } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';

import { CommonListing } from './../../model/common-listing';

const ELEMENT_DATA: any[] = [
  {
    employeeNumber: 1000000011,
    employeeName: 'JigneshKumar Chauhan',
    designation: 'GRD1',
    class: 'Class I',
    employeeType: 'GO',
    panNumber: 'PRYPP8459F',
    officeName: 'Office 1'
  },
];
@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})

export class SearchEmployeeComponent implements OnInit {
  displayedColumnsArray = new BehaviorSubject(['noData']);
  searchEmployeeNo: FormGroup;

  designationCtrl: FormControl = new FormControl();
  employeetypeCtrl: FormControl = new FormControl();
  officeNameCtrl: FormControl = new FormControl();

  designationList: CommonListing[] = [
    { value: '1', viewValue: 'GRD1' },
    { value: '2', viewValue: '2nd Additional Senior Civil Judge' },
    { value: '3', viewValue: 'A.D.C. To H.E. Governor ' },
    { value: '4', viewValue: 'Account Assistant' },
    { value: '5', viewValue: 'Account Clerk' },
    { value: '6', viewValue: 'Account Controller' },
    { value: '7', viewValue: 'Account Cum - Administrator Officer' },
    { value: '8', viewValue: 'Account Officer-Class I' },
    { value: '9', viewValue: 'Account Officer-Class II' },
    { value: '10', viewValue: 'Accountant' },
  ];

  employeetype_list: CommonListing[] = [
    { value: '1', viewValue: 'All' },
    { value: '2', viewValue: 'GO' },
    { value: '3', viewValue: 'NGO' },
    { value: '4', viewValue: 'AIS' },
    { value: '5', viewValue: 'Fix Pay' }
  ];
  officeName_list: CommonListing[] = [
    { value: '1', viewValue: 'Collector Office, Ahmedabad' },
  ];

  public listshow: Boolean = false;
  public autopopulated: Boolean = false;
  array: any = [];
  disabledEmpSearch = new BehaviorSubject<boolean>(true);
  dataSourceEmploSearch = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild('allSelected') private allSelected: MatOption;

  displayedColumnsEmpSearch = ['employeeNumber', 'employeeName', 'designation', 'class', 'employeeType', 'panNumber', 'officeName'];

  constructor(public dialogRef: MatDialogRef<SearchEmployeeComponent>, private fb: FormBuilder) { }
  ngOnInit() {
    this.searchEmployeeNo = this.fb.group({
      employeeName: [''],
      designation: [''],
      employeetype: [''],
      panNo: [''],
      ppanGpfCpfNo: [''],
      retirementDate: [''],
      caseNo: [''],
      officeName: ['']
    });

    this.searchEmployeeNo.valueChanges.subscribe(val => {
      this.disabledEmpSearch.next(true);
      for (const key in this.searchEmployeeNo.value) {
        if (this.searchEmployeeNo.value[key] !== '') {
          this.disabledEmpSearch.next(false);
        }
      }
    });
  }

  // on Search click
  searchEmployee() {
    this.displayedColumnsArray.next(this.displayedColumnsEmpSearch);
    if (this.searchEmployeeNo.controls.employeeName.value !== '') {
      this.dataSourceEmploSearch.data[0]['employeeName'] = this.searchEmployeeNo.controls.employeeName.value;
    }
  }

  // on Hyper link of employree no.
  onClickEmpNo() {
    this.dialogRef.close(this.dataSourceEmploSearch.data);
  }


  // --------- to select all options while selection all in designation-------------
  ddOneSelection() {
    if (this.allSelected.selected) {
      this.allSelected.deselect();
      return false;
    }
    if (this.searchEmployeeNo.controls.designation.value.length === this.designationList.length) {
      this.allSelected.select();
    }
  }

  ddAllSelection() {
    if (this.allSelected.selected) {
      this.searchEmployeeNo.controls.designation.patchValue([...this.designationList.map(item => item.value), 0]);
    } else {
      this.searchEmployeeNo.controls.designation.patchValue([]);
    }
  }
  // -------------------------------------------------------------------------------


}

