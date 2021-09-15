
import { MatTableDataSource } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { eaMessage } from 'src/app/common/error-message/common-message.constants';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
@Component({
  selector: 'app-ex-re-distribute-sto-voucher',
  templateUrl: './ex-re-distribute-sto-voucher.component.html',
  styleUrls: ['./ex-re-distribute-sto-voucher.component.css']
})
export class ExReDistributeStoVoucherComponent implements OnInit {
  initiatiomdate = new Date((new Date()));
  maxDate = new Date();

  // FormGroup
  reDistributeStoVoucherForm: FormGroup;
  // FormControl
  distributeToCtrl: FormControl = new FormControl();
  subTreasuryCtrl: FormControl = new FormControl();
  isSubmitted = false;
  errorMessages = eaMessage;
  // List values
  subTreasury_list: any[] = [
    { value: '1', viewValue: 'Sub Treasury Office 1' },
    { value: '2', viewValue: 'Sub Treasury Office 2' }
  ];

  distribute_list: any[] = [
    { value: '1', viewValue: 'Pratik K Shah' },
    { value: '2', viewValue: 'Mr. YOGIRAJ KISHORSINGH JADEJA' }
  ];
  // Display Element Data
  Element_Data: any[] = [
    {
      vDate: '10-May-2019',
      majorHead: '8009',
      challanNo: '1',
      amount: '200.00',
      distribute: 'Pratik K Shah',
      distributeTo: ''
    },

  ];
  // Table Source
  dataSource = new MatTableDataSource<any>(this.Element_Data);
  // Display Columns
  displayedColumns: any[] = ['srNo', 'vDate', 'majorHead', 'challanNo', 'amount', 'distribute', 'distributeTo'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.reDistributeStoVoucherForm = this.fb.group({
      // FormGroup Fields
      fromDate: [''],
      toDate: [''],
      subTreasury: [''],
      treasuryCode: [''],
      distributeTo: ['1'],
    });
  }
  // function to clear form
  clearForm() {
    this.reDistributeStoVoucherForm.reset();
  }


  onSave() {
    if (this.reDistributeStoVoucherForm.valid) {
      this.isSubmitted = false;
    } else {
      this.isSubmitted = true;
    }
  }

}
