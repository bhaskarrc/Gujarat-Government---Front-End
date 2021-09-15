import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  taskListForm: FormGroup;
  proceedAsCtrl: FormControl = new FormControl();
  proceedAs_List: any[] = [
    { value: '1', viewValue: 'Payroll Creater' }
  ];

  Element_Data: any[] = [
    {
      billNo: 'PB29327TRO1HOIMECRCG', billDate: '18-May-2020', billType: 'Regular',
      office: 'TO Ahmedabad', subOfficeType: 'Head Office', class: 'Class I', paymentMode: 'ECS', status: 'Pending with payroll creator'
    },
    {
      billNo: 'PB29327TRO1HOIMECRCH', billDate: '18-May-2020', billType: 'Regular',
      office: 'TO Ahmedabad', subOfficeType: 'Head Office', class: 'Class I', paymentMode: 'ECS', status: 'Pending with payroll creator'
    },
    {
      billNo: 'PB29327TRO1HOIMECRCI', billDate: '18-May-2020', billType: 'Regular',
      office: 'TO Ahmedabad', subOfficeType: 'Sub Office', class: 'Class I', paymentMode: 'ECS', status: 'Pending with payroll creator'
    }
  ];
  dataSource = new MatTableDataSource<any>(this.Element_Data);
  displayedColumns: string[] = ['position', 'billNo', 'billDate', 'billType', 'office', 'subOfficeType', 'class', 'paymentMode', 'status'];
  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.taskListForm = this.fb.group({
      proceedAs: ['1']
    });
  }

}
