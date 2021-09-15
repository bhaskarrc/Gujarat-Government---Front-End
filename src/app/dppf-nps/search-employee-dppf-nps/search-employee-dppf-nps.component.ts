import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { MatDialogRef } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { SearchEmployeeDppfNps } from 'src/app/model/dppf-nps';

const ELEMENT_DATA: SearchEmployeeDppfNps[] = [
  {
    employeeNumber: 1200064595,
    employeeName: 'Jignesh Kuldeep Chauhan',
    firstName: 'Jignesh',
    middleName: 'Kuldeep',
    lastName: 'Chauhan',
    designation: 'Deputy Accountant',
    class: 'Class I',
    employeeType: 'GO',
    panNumber: 'PRYPP8459F',
    officeName: 'Office 1'
  }
];

@Component({
  selector: 'app-search-employee-dppf-nps',
  templateUrl: './search-employee-dppf-nps.component.html',
  styleUrls: ['./search-employee-dppf-nps.component.css']
})
export class SearchEmployeeDppfNpsComponent implements OnInit {

  displayedColumnsArray = new BehaviorSubject(['noData']);
  searchEmployeeNo: FormGroup;

  designationCtrl: FormControl = new FormControl();
  employeetypeCtrl: FormControl = new FormControl();
  classCtrl: FormControl = new FormControl();

  designation_list: any[] = [
    { value: '01', viewValue: 'Deputy Accountant' },
  ];
  employeetype_list: any[] = [
    { value: '01', viewValue: 'GO' },
    { value: '02', viewValue: 'NGO' },
    { value: '03', viewValue: 'AIS' },
  ];
  officeName_list: any[] = [
    { value: 'Ahemdabad', viewValue: 'Ahemdabad' },
    { value: 'Gandhinagar', viewValue: 'Gandhinagar' },
  ];
  classList: any[] = [
    { value: '1', viewValue: 'Class 1' },
    { value: '2', viewValue: 'Class 2' },
    { value: '3', viewValue: 'Class 3' },
  ];

  public listshow: Boolean = false;
  public autopopulated: Boolean = false;
  array: any = [];
  disabledEmpSearch = new BehaviorSubject<boolean>(true);
  dataSourceEmploSearch = new MatTableDataSource<SearchEmployeeDppfNps>(ELEMENT_DATA);

  displayedColumnsEmpSearch = [
    'employeeNumber',
    'employeeName',
    'designation',
    'class',
    'employeeType',
    'panNumber',
  ];

  constructor(public dialogRef: MatDialogRef<SearchEmployeeDppfNpsComponent>, private fb: FormBuilder) { }
  ngOnInit() {
    this.searchEmployeeNo = this.fb.group({
      employeeName: [''],
      designation: [''],
      firstName: [''],
      middleName: [''],
      lastName: [''],
      employeetype: [''],
      panNo: [''],
      retirementDate: [''],
      caseNo: [''],
      class: [''],

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
  saveEmployeeNumber(employeeNo) {

  }


  searchEmployee() {
    this.displayedColumnsArray.next(this.displayedColumnsEmpSearch);
    // tslint:disable-next-line: max-line-length
    if (this.searchEmployeeNo.controls.firstName.value !== '' || this.searchEmployeeNo.controls.middleName.value !== '' || this.searchEmployeeNo.controls.lastName.value !== '') {
      // tslint:disable-next-line: max-line-length
      this.dataSourceEmploSearch.data[0]['employeeName'] = this.searchEmployeeNo.controls.firstName.value + ' ' + this.searchEmployeeNo.controls.middleName.value + ' ' + this.searchEmployeeNo.controls.lastName.value;
      this.dataSourceEmploSearch.data[0]['firstName'] = this.searchEmployeeNo.controls.firstName.value;
      this.dataSourceEmploSearch.data[0]['middleName'] = this.searchEmployeeNo.controls.middleName.value;
      this.dataSourceEmploSearch.data[0]['lastName'] = this.searchEmployeeNo.controls.lastName.value;
    }
  }

  onClickEmpNo() {
    this.dialogRef.close(this.dataSourceEmploSearch.data);
  }

}
