

import { MatTableDataSource, MatDialog } from '@angular/material';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AcceptanceCriteriaComponent } from '../acceptance-criteria/acceptance-criteria.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { EmdDirectives } from 'src/app/common/directive/emd-directive';
import { AuditBillsOne, AuditBillsAuditor } from 'src/app/model/emd';
import { ListValue } from 'src/app/model/common-grant';
import { CommonDirective } from 'src/app/common/directive/validation.directive';


@Component({
  selector: 'app-audit-bills-auditor',
  templateUrl: './audit-bills-auditor.component.html',
  styleUrls: ['./audit-bills-auditor.component.css']
})
export class AuditBillsAuditorComponent implements OnInit {
  // ELEMENT DATA
  ELEMENT_DATA1: AuditBillsOne[] = [
    {
      position: '',
      coded: 'SD',
      srNo: '19200001',
      challanAmount: '50000.00',
      party: 'Mr. A.B. Mishra',
    },
  ];
  ELEMENT_DATA: AuditBillsAuditor[] = [
    {
      coded: 'SD',
      challanNo: '19200001',
      refNo: '10113',
      majorHead: '2071',
      party: 'Mr. A.B. Mishra',
      department: 'Finance Department',
      challandate: '08-May-2015',
      challanAmount: '50000.00',
      paidAmount: '10000.00',
      remainingAmount: '40000.00',
      tNo: '10300',
      mHead: '75',
      billType: 'Refund of Lapse Deposit',
      cardex: '4',
      ddo: '1234',
      bDate: '08-May-2018',
      bAmount: '10000',
    },

  ];
  selectedAll = false;
  directiveObject = new EmdDirectives(this.router, this.dialog);
  directiveObj = new CommonDirective();
  // FormGroup
  auditAuditorChallanForm: FormGroup;
  acceptanceCriteriaForm: FormGroup;
  initiatiomdate = new Date();

  // FormControl
  noOfChallanCtrl: FormControl = new FormControl();
  deptCtrl: FormControl = new FormControl();
  codeCtrl: FormControl = new FormControl();

  // Table Source
  dataSource = new MatTableDataSource<AuditBillsAuditor>(this.ELEMENT_DATA);
  dataSource1 = new MatTableDataSource<AuditBillsOne>(this.ELEMENT_DATA1);

  // Display Columns Audit Bills
  displayedColumns: string[] = ['checkBox', 'srNo', 'coded', 'challanNo', 'refNo', 'majorHead', 'party',
    'department', 'challandate', 'challanAmount', 'paidAmount', 'remainingAmount', 'action'];
  // Display Columns To be Round Off Challan
  displayedColumns1: string[] = ['checkBox', 'increment', 'coded', 'srNo', 'challanAmount', 'party', 'action'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private fb: FormBuilder, private router: Router, public dialog: MatDialog) { }


  // List values
  noOfChallan_list: ListValue[] = [{
    value: '1', viewValue: 'Single'
  },
  { value: '2', viewValue: 'Multiple' },
  ];
  dept_list: ListValue[] = [{
    value: '1', viewValue: 'Home Department'
  },
  { value: '2', viewValue: 'Food, Civil Supplies & Consumer Affairs Department' },
  { value: '3', viewValue: 'Education Department' },
  ];
  code_list: ListValue[] = [{
    value: '1', viewValue: 'RD'
  },
  { value: '2', viewValue: 'SD' },
  { value: '3', viewValue: 'TD' },
  ];

  ngOnInit() {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.acceptanceCriteriaData();
    this.auditAuditorChallanForm = this.fb.group({
      // FormGroup Fields
      increment: [''],
      challanamount: [''],
      amounttoa: [''],
      entries: ['']
    });
  }
  acceptanceCriteriaData() {
    this.acceptanceCriteriaForm = this.fb.group({
      // FormGroup Fields
      partyName: [''],
      increment: [''],
      challanNo: [''],
      chNo: [''],
      challanno: [''],
      amount: ['1000.00'],
      srNo: [''],
      position: [''],
      srno: [''],
      code: [''],
      noOfChallan: ['1'],
      department: [''],
      subHead: ['01'],
      minorHead: ['101'],
      subMajorHead: ['00'],
      mHead: ['8443']
    });
  }


  show_data() {
    this.selectedAll = true;
  }

  // funtion to delete row
  delete(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource = new MatTableDataSource(this.dataSource.data);
  }
  // Bill History PopUp
  search() {
    const dialogRef = this.dialog.open(AcceptanceCriteriaComponent, {
      width: '1200px',
      height: '350px'
    });
  }


}

