import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { delay } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { EmployeeAutoFillTable } from 'src/app/model/ppo';

export let Element_DataInDailog: EmployeeAutoFillTable[] = [
  {
    employeeNumber: '1', employeeName: '', designation: '', class: '', panNo: '', officeName: ''
  },
  {
    employeeNumber: '2', employeeName: '', designation: '', class: '', panNo: '', officeName: ''
  },
  {
    employeeNumber: '3', employeeName: '', designation: '', class: '', panNo: '', officeName: ''
  },
  {
    employeeNumber: '4', employeeName: '', designation: '', class: '', panNo: '', officeName: ''
  },
  {
    employeeNumber: '5', employeeName: '', designation: '', class: '', panNo: '', officeName: ''
  },
];

@Component({
  selector: 'app-dppf-dialog-box',
  templateUrl: './dppf-dialog-box.component.html',
  styleUrls: ['./dppf-dialog-box.component.css']
})
export class DppfDialogBoxComponent implements OnInit {

  designation_list: any[] = [
    // { value: '1', viewValue: 'd1' },
    // { value: '2', viewValue: 'd2' },
    // { value: '3', viewValue: 'd3' },
    // { value: '4', viewValue: 'a3' },
    // { value: '5', viewValue: 'a2' },
  ];

  dataSourceData: any[] = [
    {
      employeeNumber: '1', employeeName: '', caseNumber: '', designation: '', class: '', panNo: '', officeName: ''
    },
    {
      employeeNumber: '2', employeeName: '', caseNumber: '', designation: '', class: '', panNo: '', officeName: ''
    },
    {
      employeeNumber: '3', employeeName: '', caseNumber: '', designation: '', class: '', panNo: '', officeName: ''
    },
    {
      employeeNumber: '4', employeeName: '', caseNumber: '', designation: '', class: '', panNo: '', officeName: ''
    },
    {
      employeeNumber: '5', employeeName: '', caseNumber: '', designation: '', class: '', panNo: '', officeName: ''
    },
  ];
  displayColumnArray = new BehaviorSubject(['noData']);

  displayedColumn = [
    'employeeNumber', 'employeeName', 'caseNumber', 'designation', 'class', 'panNo', 'officeName'
  ];

  employeeNumber;
  smartSearch: FormGroup;
  designationCtrl: FormControl = new FormControl();
  sort: MatSort;
  paginator: MatPaginator;
  filterElement_Data: EmployeeAutoFillTable[];
  Element_Data: EmployeeAutoFillTable[];
  isDataAvailable = false;
  dataSource = new MatTableDataSource<any>(this.dataSourceData);

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.onSearch();

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.Element_Data = Element_DataInDailog;
    this.dataSource = new MatTableDataSource<EmployeeAutoFillTable>(this.dataSourceData);

    if (this.employeeNumber === 'Please Provide Employee No.') {
      this.dataSource = new MatTableDataSource<EmployeeAutoFillTable>(this.dataSourceData);
    } else {
      this.filterByPPO_No();
      if (this.filterElement_Data.length === 1) {
        this.isDataAvailable = true;
        this.update();
      }
    }
  }

  filterByPPO_No() {
    this.filterElement_Data = this.Element_Data.filter(searchPPO_No => searchPPO_No.employeeNumber === this.employeeNumber);
    this.dataSource = new MatTableDataSource<EmployeeAutoFillTable>(this.filterElement_Data);
  }

  async update(data?: string) {
    await delay(2000);
    if (!data) {
      this.isDataAvailable = false;
    } else {
      this.isDataAvailable = false;
      this.filterElement_Data = this.Element_Data.filter(searchPPO_No => searchPPO_No.employeeNumber === data);
      this.dataSource = new MatTableDataSource<EmployeeAutoFillTable>(this.filterElement_Data);
    }
  }

  onSearch() {
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
  onClick() {
    this.displayColumnArray.next(this.displayedColumn);
  }

  resetForm() {
    this.smartSearch.reset();
  }

}
