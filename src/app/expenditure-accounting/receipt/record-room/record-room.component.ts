import { MatTableDataSource } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
@Component({
  selector: 'app-record-room',
  templateUrl: './record-room.component.html',
  styleUrls: ['./record-room.component.css']
})
export class RecordRoomComponent implements OnInit {
  initiatiomdate = new Date((new Date()));
  maxDate = new Date();
  // FormGroup
  recordRoomForm: FormGroup;
  // FormControl
  majorHeadCtrl: FormControl = new FormControl();
  challanCtrl: FormControl = new FormControl();
  bankNameCtrl: FormControl = new FormControl();

  // List values
  majorHead_list: any[] = [
    { value: '1', viewValue: '2054 : Treasury and Accounts Administration' }
  ];
  bank_list: any = [
    { value: '1', viewValue: 'State Bank Of India' },
    { value: '2', viewValue: 'Bank of Baroda' },
  ];
  challan_list: any = [
    { value: '1', viewValue: 'Sales Tax' },
    { value: '2', viewValue: 'RTO' },
  ];
  // Display Element Data
  Element_Data: any[] = [
    {
      branchCode: '110001',
      bank: 'State Bank of India',
      salesTextNo: '1234',
      bankDate: '31-Apr-2019',
      partyName: 'SBI, GNR',
      majorHead: '0028',
      amount: '566.00',
      challanNo: '12122'

    }
  ];
  // Table Source
  dataSource = new MatTableDataSource<any>(this.Element_Data);
  // Display Columns
  displayedColumns: any[] = ['srNo', 'branchCode', 'bank', 'challanNo', 'salesTextNo', 'bankDate',
    'partyName', 'majorHead', 'amount', 'action'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.recordRoomForm = this.fb.group({
      // FormGroup Fields
      branchCode: [''],
      challan: [''],
      bankDate: [''],
      partyName: [''],
      majorHead: [''],
      amount: [''],
      treasuryCode: [''],
      bank: ['']
    });
  }
  // function to clear form
  clearForm() {
    this.recordRoomForm.reset();
  }


}
