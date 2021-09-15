
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { GrantReleaseFromList } from 'src/app/model/grant-release-from-administrative-department';
import { ListValue } from 'src/app/model/common-grant';

@Component({
  selector: 'app-grant-release-from-ad-list',
  templateUrl: './grant-release-from-ad-list.component.html',
  styleUrls: ['./grant-release-from-ad-list.component.css']
})
export class GrantReleaseFromAdListComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  searchGrantOrder: FormGroup;

  finYear: ListValue[] = [
    { value: '1', viewValue: '2020-2021' }
  ];

  revenueCapital: ListValue[] = [
    { value: '1', viewValue: 'Revenue' },
    { value: '2', viewValue: 'Capital' }
  ];
  fundType: ListValue[] = [
    { value: '1', viewValue: 'Consolidated' },
    { value: '2', viewValue: 'Contingency' }
  ];
  status_list: ListValue[] = [
    { value: '01', viewValue: 'Approevd' },
    { value: '02', viewValue: 'Cancelled' },
    { value: '03', viewValue: 'Draft' },
    { value: '04', viewValue: 'Rejected' },
    { value: '05', viewValue: 'Pending' }
  ];
  grantOrderDisplayColumn: string[] = [
    'srNo', 'grantOrderId', 'orderNo', 'grantRelease', 'revenueCapital', 'fundType', 'orderCreateDate', 'lyingWith', 'status', 'action'
  ];

  grantOrderList: GrantReleaseFromList[] = [
    {
      grantOrderId: '14785498', orderNo: 'GR/JKL/2457', grantRelease: 'April - June', revenueCapital: 'Revenue', fundType: ' Consolidated', orderCreateDate: '01-Jun-2020',
      status: 'Pending', lyingWith: 'Rj kumar'
    },
    {
      grantOrderId: '14785499', orderNo: 'GR/JKL/2458', grantRelease: 'April - June', revenueCapital: 'Revenue', fundType: 'Contingency', orderCreateDate: '01-Jun-2020',
      status: 'Approevd', lyingWith: '-'
    },
    {
      grantOrderId: '14745479', orderNo: 'GR/JKL/8512', grantRelease: 'April - June', revenueCapital: 'Revenue', fundType: 'Contingency', orderCreateDate: '01-Jun-2020',
      status: 'Cancelled', lyingWith: 'Umesh Jain'
    },
    {
      grantOrderId: '14785419', orderNo: 'GR/JKL/2458', grantRelease: 'April - June', revenueCapital: 'Revenue', fundType: 'Contingency', orderCreateDate: '01-Jun-2020',
      status: 'Draft', lyingWith: '-'
    },
    {
      grantOrderId: '14745495', orderNo: 'GR/JKL/8512', grantRelease: 'April - June', revenueCapital: 'Revenue', fundType: 'Contingency', orderCreateDate: '01-Jun-2020',
      status: 'Rejected', lyingWith: 'Rakesh Mehta'
    },


  ];
  grantOrderDataSource = new MatTableDataSource(this.grantOrderList);
  finYearCtrl: FormControl = new FormControl();
  revenueCapitalCtrl: FormControl = new FormControl();
  fundTypeCtrl: FormControl = new FormControl();
  statusCtrl: FormControl = new FormControl();
  ngOnInit() {
    this.searchGrantOrder = this.fb.group({
      finYear: [''],
      revenueCapital: [''],
      fundType: [''],
      grantOrderId: [''],
      grantOrderNo: [''],
      status: [''],
      lyingWith: ['']
    });
  }

  applyFilter(data) {

  }

  searchGrantOrderDetails() {

  }
}

