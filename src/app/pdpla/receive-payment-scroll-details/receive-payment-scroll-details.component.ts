import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { RecievedPayment } from 'src/app/model/pdpla';
import { PdplaDirectives } from 'src/app/common/directive/pdpla';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receive-payment-scroll-details',
  templateUrl: './receive-payment-scroll-details.component.html',
  styleUrls: ['./receive-payment-scroll-details.component.css']
})
export class ReceivePaymentScrollDetailsComponent implements OnInit {
  // VAriable
  isSubmitted = false;
  // Form Group
  scrollPaymentDetailsForm: FormGroup;
  // List
  Element_Data: RecievedPayment[] = [
    {
      sDate: '14-May-2019',
      cNo: '124689',
      amt: '12,500.00',
      pName: 'ABC',
      cDate: '12-May-2019',
      advNo: '100002',
      paidDate: '14-May-2019',
      pdplaAccNo: '12213221',
      officeName: 'District Panchayat, Gandhinagar'

    },

    {
      sDate: '14-May-2019',
      cNo: '124690',
      amt: '1500.00',
      pName: 'TEST',
      cDate: '12-May-2019',
      advNo: '100002',
      paidDate: '14-May-2019',
      pdplaAccNo: '12213221',
      officeName: 'District Panchayat, Gandhinagar'


    },

    {
      sDate: '14-May-2019',
      cNo: '124691',
      amt: '12,700.00',
      pName: 'XYZ',
      cDate: '12-May-2019',
      advNo: '100002',
      paidDate: '14-May-2019',
      pdplaAccNo: '12213221',
      officeName: 'District Panchayat, Gandhinagar'


    },

    {
      sDate: '14-May-2019',
      cNo: '124692',
      amt: '12,500.00',
      pName: 'PQR',
      cDate: '12-May-2019',
      advNo: '100002',
      paidDate: '14-May-2019',
      pdplaAccNo: '12213221',
      officeName: 'District Panchayat, Gandhinagar'
    },

  ];
  // Table SOurce

  displayedColumns: any[] = ['select', 'sDate', 'pdplaAccNo', 'officeName', 'cNo', 'amt', 'pName', 'cDate', 'advNo', 'paidDate',
  ];


  dataSource = new MatTableDataSource<any>(this.Element_Data);
  selection = new SelectionModel<any>(true, []);


  constructor(private fb: FormBuilder, private router: Router, private dialog: MatDialog) { }
  directiveObject = new PdplaDirectives(this.router, this.dialog);

  ngOnInit() {
    this.scrollPaymentDetailsForm = this.fb.group({

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

