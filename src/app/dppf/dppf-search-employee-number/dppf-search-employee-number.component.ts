import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { MatDialogRef } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';

const ELEMENT_DATA: any[] = [
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
  selector: 'app-dppf-search-employee-number',
  templateUrl: './dppf-search-employee-number.component.html',
  styleUrls: ['./dppf-search-employee-number.component.css']
})
export class DppfSearchEmployeeNumberComponent implements OnInit {

  displayedColumnsArray = new BehaviorSubject(['noData']);
  searchEmployeeNo: FormGroup;

  designationCtrl: FormControl = new FormControl();
  employeetypeCtrl: FormControl = new FormControl();
  officeNameCtrl: FormControl = new FormControl();

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

  public listshow: Boolean = false;
  public autopopulated: Boolean = false;
  array: any = [];
  disabledEmpSearch = new BehaviorSubject<boolean>(true);
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

  constructor(public dialogRef: MatDialogRef<DppfSearchEmployeeNumberComponent>, private fb: FormBuilder) { }
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
  saveEmployeeNumber(employeeNo) {

  }


  searchEmployee() {
    this.displayedColumnsArray.next(this.displayedColumnsEmpSearch);
    if (this.searchEmployeeNo.controls.employeeName.value !== '') {
      this.dataSourceEmploSearch.data[0]['employeeName'] = this.searchEmployeeNo.controls.employeeName.value;
    }
  }

  onClickEmpNo() {
    this.dialogRef.close(this.dataSourceEmploSearch.data);
  }

}
