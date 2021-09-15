import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { MatDialogRef } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { CommonListing } from 'src/app/model/common-listing';
import { SearchEmployee } from 'src/app/model/group-insurance';

// Table Data for Employee Search Popup
const ELEMENT_DATA: SearchEmployee[] = [
  {
    employeeNumber: 1200064595,
    employeeName: 'JigneshKumar Chauhan',
    district: 'Gandhinagar',
    treasuryOffice: 'District Treasury Office Gandhinagar',
    class: 'Class 2',
    schemeJoinDate: new Date(1960, 9, 18),
    group: 'B',
    groupChangeDate: new Date(2007, 9, 10),
    currentGroup: 'A',
    amount: '400',
  }
];

@Component({
  selector: 'app-gi-search-employee',
  templateUrl: './gi-search-employee.component.html',
  styleUrls: ['./gi-search-employee.component.css']
})

export class GiSearchEmployeeComponent implements OnInit {

  displayedColumnsArray = new BehaviorSubject(['noData']);
  // form group
  searchEmployeeNo: FormGroup;
  // form control
  designationCtrl: FormControl = new FormControl();
  groupCtrl: FormControl = new FormControl();
  districtCtrl: FormControl = new FormControl();
  treasuryCtrl: FormControl = new FormControl();
  classCtrl: FormControl = new FormControl();
  currentGroupCtrl: FormControl = new FormControl();

  // List of Designation
  designationList: CommonListing[] = [
    { value: '1', viewValue: 'IAS' },
    { value: '2', viewValue: 'IPS' },
    { value: '3', viewValue: 'IFS' },
  ];

  // List of Group
  groupList: CommonListing[] = [
    { value: '1', viewValue: 'A' },
    { value: '2', viewValue: 'B' },
    { value: '3', viewValue: 'C' },
    { value: '4', viewValue: 'D' },
  ];

  // List of District
  districtList: CommonListing[] = [
    { value: '1', viewValue: 'Ahmedabad' },
    { value: '2', viewValue: 'Gandhinagar' },
    { value: '3', viewValue: 'Vadodara' },
    { value: '4', viewValue: 'Surat' },
    { value: '5', viewValue: 'Bharuch' },
    { value: '6', viewValue: 'Anand' },
    { value: '7', viewValue: 'Valsad' },
    { value: '8', viewValue: 'Dang' },
  ];

  // List of Treasury
  treasuryList: CommonListing[] = [
    { value: '1', viewValue: 'District Treasury Office, Ahmedabad' },
    { value: '2', viewValue: 'District Treasury Office, Gandhinagar' },
    { value: '3', viewValue: 'District Treasury Office, Vadodara' },
    { value: '4', viewValue: 'District Treasury Office, Surat' },
    { value: '5', viewValue: 'District Treasury Office, Bharuch' },
    { value: '6', viewValue: 'District Treasury Office, Anand' },
    { value: '7', viewValue: 'District Treasury Office, Valsad' },
    { value: '8', viewValue: 'District Treasury Office, Dang' },
  ];

  // List of Class
  classList: CommonListing[] = [
    { value: '1', viewValue: 'Class 1' },
    { value: '2', viewValue: 'Class 2' },
    { value: '3', viewValue: 'Class 3' },
    { value: '4', viewValue: 'Class 4' },
  ];

  public listshow: Boolean = false;
  public autopopulated: Boolean = false;
  disabledEmpSearch = new BehaviorSubject<boolean>(true);
  dataSourceEmploSearch = new MatTableDataSource(ELEMENT_DATA);

  // Table Columns for Employee Search Table
  displayedColumnsEmpSearch = [
    'employeeNumber',
    'employeeName',
    'district',
    'treasuryOffice',
    'class',
    'schemeJoinDate',
    'group',
    'groupChangeDate',
    'currentGroup',
    'amount',
  ];

  // constructor
  constructor(public dialogRef: MatDialogRef<GiSearchEmployeeComponent>, private fb: FormBuilder) { }

  ngOnInit() {
    this.searchEmployeeNo = this.fb.group({
      employeeNo: [''],
      employeeName: [''],
      district: [''],
      designation: [''],
      treasuryOffice: [''],
      class: [''],
      schemeJoinDate: [''],
      group: [''],
      currentGroup: [''],
      groupChangeDate: [''],
      amount: [''],
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

  // save employee no
  saveEmployeeNumber(employeeNo) {

  }

  // on search of employee number
  searchEmployee() {
    this.displayedColumnsArray.next(this.displayedColumnsEmpSearch);
    if (this.searchEmployeeNo.controls.employeeName.value !== '') {
      this.dataSourceEmploSearch.data[0]['employeeName'] = this.searchEmployeeNo.controls.employeeName.value;

    }
  }

  // on click emp no
  onClickEmpNo() {
    this.dialogRef.close(this.dataSourceEmploSearch.data);
  }

}
