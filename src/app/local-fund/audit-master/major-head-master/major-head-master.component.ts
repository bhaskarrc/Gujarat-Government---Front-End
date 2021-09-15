import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { MajorHeadMaster } from 'src/app/model/local-fund';



@Component({
  selector: 'app-major-head-master',
  templateUrl: './major-head-master.component.html',
  styleUrls: ['./major-head-master.component.css']
})
export class MajorHeadMasterComponent implements OnInit {
  referenceNumber = 'Reference Number:';
  referenceNumberDate = 'Reference Date:';
  todayDate = Date.now();
  searchForm: FormGroup;
  filterElementData: any[];

  // table data
  elementData: MajorHeadMaster[] = [
    {
      departmentName: 'Agriculture Department',
      majorHead: '4415',
      majorHeadDescription: '02-4415-01-04-07',
      status: 'Active',

    },
    {
      departmentName: 'R & B Department',
      majorHead: '3054',
      majorHeadDescription: '95-3054-04-337-01',
      status: 'Inactive',

    },
  ];

  majorHeadCtrl: FormControl = new FormControl();

  // table datasource
  dataSource = new MatTableDataSource<MajorHeadMaster>(this.elementData);

  // table columns
  displayedColumns: any[] = [
    'serialNo',
    'departmentName',
    'majorHead',
    'majorHeadDescription',
    'status',
    'action'
  ];

  majorHeadList: ListValue[] = [
    { value: '4415', viewValue: '4415' },
    { value: '3054', viewValue: '3054' },
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.searchFormData();
  }

  // form data
  searchFormData() {
    this.searchForm = this.fb.group({
      majorHead: ['']
    });
  }

  // reset form
  clearForm() {
    this.searchForm.reset();
  }

  // search data on basis of search fields
  onSearch() {
    const formVal = this.searchForm.value;

    if (formVal.majorHead !== '' && formVal.majorHead != null) {

      this.filterElementData = this.elementData.filter(
        searchBy => searchBy.majorHead.toLowerCase() === formVal.majorHead.toLowerCase());
      this.dataSource = new MatTableDataSource<any>(this.filterElementData);
      console.log(this.filterElementData);
    }
    if (formVal.majorHead === '' || formVal.majorHead == null) {
      this.dataSource = new MatTableDataSource<any>(this.elementData);
    }
  }

  // inactive button
  inActive() { }

  // active button
  active() { }
}
