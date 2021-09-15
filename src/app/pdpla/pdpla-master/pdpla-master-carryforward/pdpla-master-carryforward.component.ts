import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { CarryForwardPopupComponent } from '../carry-forward-popup/carry-forward-popup.component';
import { CreateAcListCArryForward } from 'src/app/model/pdpla';


@Component({
  selector: 'app-pdpla-master-carryforward',
  templateUrl: './pdpla-master-carryforward.component.html',
  styleUrls: ['./pdpla-master-carryforward.component.css']
})
export class PdplaMasterCarryforwardComponent implements OnInit {
  pdplaform: FormGroup;

  Element_Data: CreateAcListCArryForward[] = [
    {
      pdplazAcNo: '0449',
      pdplaOfcName: 'Legal',
      mjrHead: '8449',
      subMjrHead: '00',
      minrHead: '120',
      subHead: '01',
      acStartDate: '21-Aug-2020',
      acEndDate: '',
      curBal: '0.00',
      shareAc: '-',
      ddoNo: '543',
      cardexNo: '123',
    },

    {
      pdplazAcNo: '777',
      pdplaOfcName: 'xzxz',
      mjrHead: '8448',
      subMjrHead: '00',
      minrHead: '117',
      subHead: '00',
      acStartDate: '16-01-2020',
      acEndDate: '30-01-2020',
      curBal: '24000.00',
      shareAc: 'Yes',
      ddoNo: '234',
      cardexNo: '123',
    },
  ];
  dataSourceRefundProcess = new MatTableDataSource<CreateAcListCArryForward>(this.Element_Data);
  displayedColumnsrefundListing: any[] = [
    'position',
    'pdplazAcNo',
    'pdplaOfcName',
    'ddoNo',
    'cardexNo',
    'mjrHead',
    'subMjrHead',
    'minrHead',
    'subHead',
    'acStartDate',
    'acEndDate',
    'curBal',
    'shareAc',
    'action'
  ];

  constructor(private fb: FormBuilder, public dialog: MatDialog) {

  }



  ngOnInit() {
    this.pdplaform = this.fb.group({
    });
  }

  // opens carry forward dialog box
  carryForward(): void {
    const dialogRef = this.dialog.open(CarryForwardPopupComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
