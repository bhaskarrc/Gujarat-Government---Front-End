import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { ListValue } from 'src/app/model/common-grant';

import { SubmitDialogComponent } from '../submit-dialog/submit-dialog.component';

@Component({
  selector: 'app-society-master',
  templateUrl: './society-master.component.html',
  styleUrls: ['./society-master.component.css']
})
export class SocietyMasterComponent implements OnInit {
  societyMasterForm: FormGroup;
  bank_list: ListValue[] = [
    { value: '1', viewValue: ' State Bank Of India', }];

  ifscCode_list: ListValue[] = [
    { value: '1', viewValue: 'SBIN002636' },
    { value: '2', viewValue: 'SBIN002637' }
  ];
  Element_Data: any[] = [
    {
      name: 'Housing Society', bankName: '1', ifscCode: '1',
      micrNo: '456001123', accNo: '**************', confirmAccNo: '1234567890123',
      bankAddr: 'Ahmedabad', rowStatus: false, isSubmitted: false
    },
    {
      name: 'Test Society', bankName: '1', ifscCode: '2',
      micrNo: '456001321', accNo: '**************', confirmAccNo: '3210987654321',
      bankAddr: 'Ahmedabad', rowStatus: false, isSubmitted: false
    }
  ];
  bankCtrl: FormControl = new FormControl();
  ifscCodeCtrl: FormControl = new FormControl();
  dataSource = new MatTableDataSource<any>(this.Element_Data);
  displayedColumns: string[] = ['position', 'name', 'bankName', 'ifscCode', 'micrNo', 'accNo', 'confirmAccNo', 'bankAddr', 'action'];
  constructor(public fb: FormBuilder, public dialog: MatDialog) { }

  // On Account No Key press
  onKey(event) {
    const str = event.target.value;
    console.log(str);

    const length = str.length;
    let asterisks = '';
    for (let i = 0; i < length; i++) {
      asterisks = asterisks + '*';
    }
    event.target.value = asterisks;
  }

  ngOnInit() {
    this.societyMasterForm = this.fb.group({
      district: ['Ahmedabad'],
      officeName: ['Collector Office, Ahmedabad'],
      ddoNo: ['4265'],
      cardexNo: ['5622'],
    });
  }

  // Delete row
  delete(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource = new MatTableDataSource(this.dataSource.data);
  }
  // enables and disables rows and action icon
  onSubmit() {
    const dialogRef = this.dialog.open(SubmitDialogComponent, {
      width: '250px',
      height: 'auto',
      data: ''
    }
    );
    dialogRef.afterClosed().subscribe(result => {
      this.dataSource.data.forEach(item => {
        if (item.name && item.bankName && item.ifscCode &&
          item.micrNo && item.accNo && item.confirmAccNo &&
          item.bankAddr) {
          item.rowStatus = true;
          item.isSubmitted = true;
        } else {
          item.rowStatus = false;
          item.isSubmitted = false;
        }
      });
    });

  }
  // Adds row
  add() {
    const data = this.dataSource.data;
    this.dataSource.data.push({
      name: '',
      bankName: '',
      ifscCode: '',
      micrNo: '',
      accNo: '',
      confirmAccNo: '',
      bankAddr: '',
      rowStatus: false,
      isSubmitted: false
    });
    this.dataSource.data = data;
  }

  // On Reset
  reset() {
    if (this.dataSource.data[this.dataSource.data.length - 1].rowStatus
      && this.dataSource.data[this.dataSource.data.length - 1].isSubmitted) {

    } else {
      this.dataSource.data[this.dataSource.data.length - 1].name = '';
      this.dataSource.data[this.dataSource.data.length - 1].bankName = '';
      this.dataSource.data[this.dataSource.data.length - 1].ifscCode = '';
      this.dataSource.data[this.dataSource.data.length - 1].micrNo = '';
      this.dataSource.data[this.dataSource.data.length - 1].accNo = '';
      this.dataSource.data[this.dataSource.data.length - 1].confirmAccNo = '';
      this.dataSource.data[this.dataSource.data.length - 1].bankAddr = '';
      this.dataSource.data[this.dataSource.data.length - 1].rowStatus = false;
      this.dataSource.data[this.dataSource.data.length - 1].isSubmitted = false;
    }
  }
}
