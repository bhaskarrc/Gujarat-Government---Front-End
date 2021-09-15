import { SelectionModel } from '@angular/cdk/collections';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { paoMessage } from 'src/app/common/error-message/common-message.constants';
import { ListValue, BillCreationForMla } from 'src/app/model/paoModel';
import { PaoDirectives } from 'src/app/common/directive/pao';

@Component({
  selector: 'app-bill-creation-for-mla',
  templateUrl: './bill-creation-for-mla.component.html',
  styleUrls: ['./bill-creation-for-mla.component.css']
})

export class BillCreationForMlaComponent implements OnInit {
  ELEMENT_DATA: BillCreationForMla[] = [
    {

      mlaNo: '30',
      assemblyNo: '14',
      mlaName: 'Mr. Virendrasinh Jadeja',
      department: 'Gujarat Legislature Secretariat',
      designation: 'MLA',
      majorHead: '2011',
      deduction: '200.00',
      expinture: '124196.00',
      netamount: '123996.00',
    }
  ];
  // Form Group
  billCreationForm: FormGroup;
  // Variable
  errorMessages = paoMessage;
  isvisble = false;
  // Table Source
  displayedBrowseColumns = ['select', 'srNo', 'mlaNo', 'assemblyNo',
    'mlaName', 'designation', 'department', 'majorHead', 'expinture', 'deduction', 'netamount', 'action'];
  dataSourceBrowse = new MatTableDataSource(this.ELEMENT_DATA);

  // List
  toMonth_list: ListValue[] = [
    { value: '1', viewValue: ' April' },
    { value: '2', viewValue: ' May' },
  ];
  finaYear_list: ListValue[] = [
    { value: '1', viewValue: ' 2019-2020' },
    { value: '2', viewValue: ' 2020-2021' },
  ];
  constructor(private router: Router, private fb: FormBuilder, public dialog: MatDialog,) { }
  directiveObject = new PaoDirectives(this.router, this.dialog);

  ngOnInit() {
    this.arrearMLAeData();
  }
  arrearMLAeData() {
    this.billCreationForm = this.fb.group({
      financialYear: [''],
      paymentMonath: [''],
      financialYearaccounting: ['2']
    });
  }
  search() {
    this.isvisble = true;
  }
  billCreationData() {

  }

}
