
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-fd-to-administrative-department-list',
  templateUrl: './fd-to-administrative-department-list.component.html',
  styleUrls: ['./fd-to-administrative-department-list.component.css']
})
export class FdToAdministrativeDepartmentListComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  searchGrantOrder: FormGroup;

  // Search Section - Dropdown Fields
  finYear_list: any[] = [
    { value: '1', viewValue: '2020-2021' }
  ];

  revenueCapital_list: any[] = [
    { value: '1', viewValue: 'Revenue' },
    { value: '2', viewValue: 'Capital' }
  ];
  status_list: any[] = [
    { value: '01', viewValue: 'Approevd' },
    { value: '02', viewValue: 'Cancelled' },
    { value: '03', viewValue: 'Draft' },
    { value: '04', viewValue: 'Rejected' },
    { value: '05', viewValue: 'Pending' }
  ];

  // Grant Release Display Column Data
  grantOrderList: any[] = [{
    grantOrderId: '14785498',
    grantOrderNo: 'GR/JKL/2457',
    grantReleaseFor: 'April - June',
    orderReleaseDate: '23-Jan-2020',
    revenueCapital: 'Capital',
    status: 'Pending',
    lyingWith: 'Rj kumar'
  },
  {
    grantOrderId: '14785499',
    grantOrderNo: 'GR/JKL/2458',
    grantReleaseFor: 'April - June',
    orderReleaseDate: '23-Jan-2020',
    revenueCapital: 'Revenue',
    status: 'approved',
    lyingWith: ' - '
  },
  {
    grantOrderId: '14785497',
    grantOrderNo: 'GR/JKL/2478',
    grantReleaseFor: 'April - June',
    orderReleaseDate: '23-Jan-2020',
    revenueCapital: 'Revenue',
    status: 'Draft',
    lyingWith: 'Aj Mehta'
  },
  {
    grantOrderId: '14785499',
    grantOrderNo: 'GR/JKL/2458',
    grantReleaseFor: 'April - June',
    orderReleaseDate: '23-Jan-2020',
    revenueCapital: 'Revenue',
    status: 'Rejected',
    lyingWith: ' - '
  },
  {
    grantOrderId: '14785497',
    grantOrderNo: 'GR/JKL/2478',
    grantReleaseFor: 'April - June',
    orderReleaseDate: '23-Jan-2020',
    revenueCapital: 'Revenue',
    status: 'Cancelled',
    lyingWith: 'Aj Mehta'
  }

  ];
  grantReleaseDisplayColumn: string[] = [
    'srNo', 'grantOrderId', 'grantOrderNo', 'grantReleaseFor', 'orderReleaseDate', 'revenueCapital', 'lyingWith', 'status', 'action'
  ];
  grantOrderDataSource = new MatTableDataSource(this.grantOrderList);
  revenueCapitalCtrl: FormControl = new FormControl();
  finYearCtrl: FormControl = new FormControl();
  statusCtrl: FormControl = new FormControl();

  ngOnInit() {
    this.searchGrantOrder = this.fb.group({
      finYear: ['2'],
      revenueCapital: [''],
      status: ['']
    });
  }

  applyFilter(data) {

  }

  searchGrantOrderDetails() {

  }
}
