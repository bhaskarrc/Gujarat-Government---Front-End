import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { MatDialogRef } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { SearchEmployee } from 'src/app/model/local-fund';


const ELEMENT_DATA: SearchEmployee[] = [
  {
    employeeNumber: 1200064595,
    employeeName: 'JigneshKumar Chauhan',
    designation: 'IAS',
    class: 'Class I',
    group: 'A',
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
  searchEmployeeNo: FormGroup;

  designationCtrl: FormControl = new FormControl();
  employeetypeCtrl: FormControl = new FormControl();
  officeNameCtrl: FormControl = new FormControl();
  groupCtrl: FormControl = new FormControl();

  designationList: any[] = [
    { value: '01', viewValue: 'IAS' },
  ];

  groupList: any[] = [
    { value: '01', viewValue: 'A' },
  ];

  employeetypeList: any[] = [
    { value: '01', viewValue: 'GO' },
    { value: '02', viewValue: 'NGO' },
    { value: '03', viewValue: 'AIS' },
  ];

  officeNameList: any[] = [
    { value: 'Ahemdabad', viewValue: 'Ahemdabad' },
    { value: 'Gandhinagar', viewValue: 'Gandhinagar' },
  ];

  public listshow: Boolean = false;
  public autopopulated: Boolean = false;
  array: any = [];
  disabledEmpSearch = new BehaviorSubject<boolean>(true);
  dataSourceEmploSearch = new MatTableDataSource<SearchEmployee>(ELEMENT_DATA);

  displayedColumnsEmpSearch = [
    'employeeNumber',
    'employeeName',
    'designation',
    'class',
    'group',
    'employeeType',
    'panNumber',
    'officeName'
  ];

  constructor(public dialogRef: MatDialogRef<SearchEmployeeComponent>, private fb: FormBuilder) { }

  ngOnInit() {
    this.searchEmployeeNo = this.fb.group({
      employeeName: [''],
      designation: [''],
      group: [''],
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

  // after submit form data
  saveEmployeeNumber(employeeNo) {

  }

  // on click on search button
  searchEmployee() {
    this.displayedColumnsArray.next(this.displayedColumnsEmpSearch);
    if (this.searchEmployeeNo.controls.employeeName.value !== '') {
      this.dataSourceEmploSearch.data[0]['employeeName'] = this.searchEmployeeNo.controls.employeeName.value;

    }
  }

  // on click on employee number value
  onClickEmpNo() {
    this.dialogRef.close(this.dataSourceEmploSearch.data);
  }
}
