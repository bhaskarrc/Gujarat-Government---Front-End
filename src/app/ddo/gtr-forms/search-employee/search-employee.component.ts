import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { MatDialogRef } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { ListValue } from 'src/app/model/common-grant';
import { SearchEmployee } from 'src/app/model/ddo-forms';

const ELEMENT_DATA: SearchEmployee[] = [
  {
    employeeNumber: 1200064595,
    employeeName: 'JigneshKumar Chauhan',
    designation: 'Deputy Accountant',
    class: 'Class I',
    employeeType: 'GO',
    panNumber: 'PRYPP8459F',
    officeName: 'Office 1'
  }
];
@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})

export class SearchEmployeeComponent implements OnInit {
  displayedColumnsArray = new BehaviorSubject(['noData']);

  // form group
  searchEmployeeNo: FormGroup;

  // date
  maxDate = new Date();

  // form control
  designationCtrl: FormControl = new FormControl();
  employeetypeCtrl: FormControl = new FormControl();
  officeNameCtrl: FormControl = new FormControl();

  // list
  designationList: ListValue[] = [
    { value: '01', viewValue: 'Deputy Accountant' },
  ];
  employeeTypeList: ListValue[] = [
    { value: '01', viewValue: 'GO' },
    { value: '02', viewValue: 'NGO' },
    { value: '03', viewValue: 'AIS' },
  ];
  officeNameList: ListValue[] = [
    { value: 'Ahemdabad', viewValue: 'Ahemdabad' },
    { value: 'Gandhinagar', viewValue: 'Gandhinagar' },
  ];
  // lists end

  disabledEmpSearch = new BehaviorSubject<boolean>(true);

  // table data
  dataSourceEmploSearch = new MatTableDataSource(ELEMENT_DATA);
  displayedColumnsEmpSearch = [
    'employeeNumber',
    'employeeName',
    'designation',
    'class',
    'employeeType',
    'panNumber',
    'officeName'
  ];
  // table data end

  // constructor
  constructor(public dialogRef: MatDialogRef<SearchEmployeeComponent>, private fb: FormBuilder) { }
  ngOnInit() {
    this.searchEmployeeNo = this.fb.group({
      employeeName: [''],
      designation: [''],
      employeetype: [''],
      panNo: [''],
      ppanGpfCpfNo: [''],
      retirementDate: [''],
      officeName: ['']
    });

    this.searchEmployeeNo.valueChanges.subscribe(() => {
      this.disabledEmpSearch.next(true);
      for (const key in this.searchEmployeeNo.value) {
        if (this.searchEmployeeNo.value[key] !== '') {
          this.disabledEmpSearch.next(false);
        }
      }
    });
  }

  // save employee number
  saveEmployeeNumber(employee) {

  }

  // search employee
  searchEmployee() {
    this.displayedColumnsArray.next(this.displayedColumnsEmpSearch);
    if (this.searchEmployeeNo.controls.employeeName.value !== '') {
      this.dataSourceEmploSearch.data[0]['employeeName'] = this.searchEmployeeNo.controls.employeeName.value;
    }
  }

  // close the dialog box
  onClickEmpNo() {
    this.dialogRef.close(this.dataSourceEmploSearch.data);
  }
}

