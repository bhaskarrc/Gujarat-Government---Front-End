import { EmployeeDialog } from './../../model/dppf-hba';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';

import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CommonListing } from 'src/app/model/common-listing';
import { BehaviorSubject } from 'rxjs';
import { EmployeeAutoFillTable } from 'src/app/model/ppo';

const ELEMENT_DATA: EmployeeDialog[] = [
  {
    employeeNumber: '1200064595',
    employeeName: 'Vipulbhai Sankarbhai  Patel',
    designation: 'Deputy Accountant',
    class: 'Class I',
    panNo: 'PRYPP8459F',
    officeName: 'District Treasury Office,Gandhinagar'
  },
];

@Component({
  selector: 'app-employee-dialog-box',
  templateUrl: './employee-dialog-box.component.html',
  styleUrls: ['./employee-dialog-box.component.css']
})
export class EmployeeDialogBoxComponent implements OnInit {

  designation_list: CommonListing[] = [
    { value: '', viewValue: '' }
  ];

  displayColumnArray = new BehaviorSubject(['noData']);

  displayedColumn = [
    'employeeNumber', 'employeeName', 'caseNumber', 'designation', 'class', 'panNo', 'officeName'
  ];
  dataSource = new MatTableDataSource<EmployeeDialog>(ELEMENT_DATA);

  employeeNumber;
  smartSearch: FormGroup;
  designationCtrl: FormControl = new FormControl();
  sort: MatSort;
  paginator: MatPaginator;
  filterElement_Data: EmployeeAutoFillTable[];


  constructor(public dialogRef: MatDialogRef<EmployeeDialogBoxComponent>, private fb: FormBuilder, private dailogRef: MatDialog) { }

  ngOnInit() {
    this.smartSearch = this.fb.group({
      firstName: [''],
      middleName: [''],
      lastName: [''],
      designation: [''],
      panNumber: [''],
      caseNumber: [''],
      ppanNumber: [''],
      retirementDate: [''],
    });
  }


  onSearch() {
    this.displayColumnArray.next(this.displayedColumn);
  }

  resetForm() {
    this.smartSearch.reset();
  }

  onClose() {
    this.dialogRef.close();
  }
  onEmployee() {
    this.dialogRef.close('1200064595');
  }

}
