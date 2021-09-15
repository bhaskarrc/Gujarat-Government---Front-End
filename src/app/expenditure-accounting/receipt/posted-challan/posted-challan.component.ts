
import { MatTableDataSource } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
@Component({
  selector: 'app-posted-challan',
  templateUrl: './posted-challan.component.html',
  styleUrls: ['./posted-challan.component.css']
})
export class PostedChallanComponent implements OnInit {
  initiatiomdate = new Date((new Date()));
  // FormGroup
  postChallanForm: FormGroup;
  maxDate = new Date();
  // Display Element Data
  Element_Data: any[] = [
    {
      branchCode: '140001',
      bank: 'State Bank of India',
      salesTextNo: '1234',
      bankDate: '09-Mar-2019',
      partyName: 'TEST',
      majorHead: '0059',
      amount: '100.00',
      revenue: 'Revenue',
      challanNo: '12122'
    }
  ];
  // List values
  challan_list: any = [
    { value: '1', viewValue: 'Sales Tax' },
    { value: '2', viewValue: 'RTO' },
  ];

  bank_list: any = [
    { value: '1', viewValue: 'State Bank Of India' },
    { value: '2', viewValue: 'Bank of Baroda' },
  ];
  // FormControl
  challanCtrl: FormControl = new FormControl();
  bankNameCtrl: FormControl = new FormControl();
  // Table Source
  dataSource = new MatTableDataSource<any>(this.Element_Data);
  // Display Columns
  displayedColumns: any[] = ['srNo', 'branchCode', 'bank', 'challanNo', 'salesTextNo', 'bankDate', 'partyName', 'majorHead',
    'amount', 'revenue', 'action'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.postChallanForm = this.fb.group({
      // FormGroup Fields
      branchCode: [''],
      challan: [''],
      bankDate: [''],
      partyName: [''],
      majorHead: [''],
      amount: [''],
      challanNo: [''],
      treasuryCode: [''],
      bank: ['']
    });
  }
  // function to clear form
  clearForm() {
    this.postChallanForm.reset();
  }


}
