import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { CommonDirective } from 'src/app/common/directive/validation.directive';

import { DataService } from './../../../common/data.service';
import { ClassWiseRegularSalaryView } from './../../../model/payroll';

@Component({
  selector: 'app-class-wise-regular-salary-view',
  templateUrl: './class-wise-regular-salary-view.component.html',
  styleUrls: ['./class-wise-regular-salary-view.component.css']
})
export class ClassWiseRegularSalaryViewComponent implements OnInit {

  private paginator: MatPaginator;
  data;
  // table data
  Element_Data: ClassWiseRegularSalaryView[] = [
    {
      srNo: '1',
      employeeNumber: '1000000001',
      employeeName: 'Miss. Rinani',
      designation: 'Assistant Professor',
      basicPay: '216600.00',
      gradePay: '0.00',
      daArrear: '6000.00',
      totalEarnings: '298882.00',
      nps: '600.00',
      totalDeductions: '25942.00',
      netSalary: '272940.00',
    },
    {
      srNo: '2',
      employeeNumber: '1000000002',
      employeeName: 'Mr. Neeraj Gautam',
      designation: 'Assistant Professor',
      basicPay: '61300.00',
      gradePay: '6600.00',
      daArrear: '7000.00',
      totalEarnings: '86121.00',
      nps: '700.00',
      totalDeductions: '12772.00',
      netSalary: '73349.00',
    },
    {
      srNo: '3',
      employeeNumber: '1000000003',
      employeeName: 'Mr. Shruthi',
      designation: 'Assistant Professor',
      basicPay: '250000.00',
      gradePay: '0.00',
      daArrear: '8000.00',
      totalEarnings: '344640.00',
      nps: '800.00',
      totalDeductions: '29850.00',
      netSalary: '314790.00',
    },
  ];
  dataSource = new MatTableDataSource<ClassWiseRegularSalaryView>(this.Element_Data);
  displayedColumns: any[] = [
    'srNo',
    'employeeNumber',
    'employeeName',
    'designation',
    'basicPay',
    'gradePay',
    'totalEarnings',
    'totalDeductions',
    'netSalary',
  ];

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.dataSource.paginator = this.paginator;
  }
  directiveObj = new CommonDirective(this.router);

  constructor(private router: Router, private dataService: DataService) {
    this.data = dataService.getOption();
  }

  ngOnInit() {
    if (this.data['payRolType'] === 'DA-Arrear') {
      this.displayedColumns = [
        'srNo',
        'employeeNumber',
        'employeeName',
        'designation',
        'basicPay',
        'gradePay',
        'daArrear',
        'totalEarnings',
        'nps',
        'totalDeductions',
        'netSalary',
      ];
    }
  }

}
