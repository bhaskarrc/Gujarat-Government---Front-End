import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { ReceiveReciept } from 'src/app/model/pdpla';
import { Router } from '@angular/router';
import { PdplaDirectives } from 'src/app/common/directive/pdpla';

@Component({
  selector: 'app-receive-receipt-scroll-details',
  templateUrl: './receive-receipt-scroll-details.component.html',
  styleUrls: ['./receive-receipt-scroll-details.component.css']
})
export class ReceiveReceiptScrollDetailsComponent implements OnInit {
  // Variable
  isSubmitted = false;
  // Form Group
  scrollDetailsForm: FormGroup;
  // Table Source
  Element_Data: ReceiveReciept[] = [
    {
      cinNo: '587388899845665',
      tDate: '14-Mar-2019',
      sDate: '14-Mar-2018',
      pName: 'TEST',
      mHead: '8443',
      smHead: '00',
      minorHead: '00',
      sHead: '101',
      cType: 'PLA',
      amt: '3000.00',
      bCode: '12000',
      bankName: 'State Bank of India',
      branchCode: '1200',
      pdplaAccNo: '12121222',
      officeName: 'District Panchayat, Gandhinagar'

    },
    {
      cinNo: '587388899845665',
      tDate: '14-Mar-2019',
      sDate: '14-Mar-2018',
      pName: 'TEST',
      mHead: '8443',
      smHead: '00',
      minorHead: '00',
      sHead: '101',
      cType: 'PLA',
      amt: '3000.00',
      bCode: '12000',
      bankName: 'State Bank of India',
      branchCode: '1200',
      pdplaAccNo: '12121222',
      officeName: 'District Panchayat, Gandhinagar'

    },
    {
      cinNo: '587388899845665',
      tDate: '14-Mar-2019',
      sDate: '14-Mar-2018',
      pName: 'TEST',
      mHead: '8443',
      smHead: '00',
      minorHead: '00',
      sHead: '101',
      cType: 'PLA',
      amt: '3000.00',
      bCode: '10001',
      bankName: 'State Bank of India',
      branchCode: '1200',
      pdplaAccNo: '12121222',
      officeName: 'District Panchayat, Gandhinagar'

    },
  ];

  displayedColumns: any[] = ['select', 'cinNo', 'tDate', 'sDate', 'pName', 'pdplaAccNo', 'officeName', 'mHead', 'smHead',
    'minorHead', 'sHead', 'cType', 'amt', 'bCode', 'bankName', 'branchCode'];

  dataSource = new MatTableDataSource<any>(this.Element_Data);
  selection = new SelectionModel<any>(true, []);
  constructor(private fb: FormBuilder, private router: Router, private dialog: MatDialog) { }
  directiveObject = new PdplaDirectives(this.router, this.dialog);

  ngOnInit() {
    this.scrollDetailsForm = this.fb.group({
    });
  }

  // deletes record
  deleteRowRecovery(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource = new MatTableDataSource(
      this.dataSource.data
    );
  }
}

