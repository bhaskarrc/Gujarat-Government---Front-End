import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { paoMessage } from 'src/app/common/error-message/common-message.constants';
import { SelectionModel } from '@angular/cdk/collections';
import { PaoDirectives } from 'src/app/common/directive/pao';
import { CreateMLA, ListValue } from 'src/app/model/paoModel';

@Component({
  selector: 'app-mla-arrear',
  templateUrl: './mla-arrear.component.html',
  styleUrls: ['./mla-arrear.component.css']
})
export class MlaArrearComponent implements OnInit {
  // Table Source
  ELEMENT_DATA: CreateMLA[] = [
    {
      mlaNo: '30',
      assemblyNo: '251',
      mlaName: 'Mr. Virendrasinh Jadeja',
      department: 'Gujarat Legislature Secretariat',
      designation: 'MLA',
      majorHead: '2054',
      difference: '12907.00',
    }
  ];
  // Form Group
  arrearMLAForm: FormGroup;
  selection = new SelectionModel<any>(true, []);
  errorMessages = paoMessage;
  isvisible = false;
  // Table Source
  displayedBrowseColumns = ['select', 'srNo', 'mlaNo', 'assemblyNo', 'mlaName', 'designation', 'department', 'majorHead', 'difference'];
  dataSourceBrowse = new MatTableDataSource(this.ELEMENT_DATA);
  constructor(private router: Router, private fb: FormBuilder, public dialog: MatDialog,) { }
  directiveObject = new PaoDirectives(this.router, this.dialog);
  // List
  fromMonth_list: ListValue[] = [
    { value: '1', viewValue: ' January ' },
    { value: '2', viewValue: ' February ' },
    { value: '3', viewValue: ' March ' },
    { value: '4', viewValue: ' April' },
    { value: '5', viewValue: ' May' },
    { value: '6', viewValue: ' June' },
    { value: '7', viewValue: ' July' },
    { value: '8', viewValue: ' August' },
    { value: '9', viewValue: ' September' },
    { value: '10', viewValue: ' October' },
    { value: '11', viewValue: ' November' },
    { value: '12', viewValue: ' December' },
  ];
  fromYear_list: ListValue[] = [
    { value: '1', viewValue: ' 2019' },
    { value: '2', viewValue: ' 2020' },
  ];
  toMonth_list: ListValue[] = [
    { value: '1', viewValue: ' January ' },
    { value: '2', viewValue: ' February ' },
    { value: '3', viewValue: ' March ' },
    { value: '4', viewValue: ' April' },
    { value: '5', viewValue: ' May' },
    { value: '6', viewValue: ' June' },
    { value: '7', viewValue: ' July' },
    { value: '8', viewValue: ' August' },
    { value: '9', viewValue: ' September' },
    { value: '10', viewValue: ' October' },
    { value: '11', viewValue: ' November' },
    { value: '12', viewValue: ' December' },
  ];
  toYear_list: ListValue[] = [
    { value: '1', viewValue: ' 2019' },
    { value: '2', viewValue: ' 2020' },
  ];
  finaYear_list: ListValue[] = [
    { value: '1', viewValue: ' 2019-2020' },
    { value: '2', viewValue: ' 2020-2021' },
  ];
  ngOnInit() {
    this.arrearMLAeData();
  }
  arrearMLAeData() {
    this.arrearMLAForm = this.fb.group({
      fromMonth: [''],
      toMonth: [''],
      fromYear: [''],
      toYear: [''],
      current: [''],
      newcurrent: [''],
      financialYear: [''],
      paymentMonath: ['']
    });
  }
  calculate() {
    this.isvisible = true;
  }


}
