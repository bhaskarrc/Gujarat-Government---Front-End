import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { TreasuryVerification } from 'src/app/model/pdpla';

@Component({
  selector: 'app-tresury-report-verification',
  templateUrl: './tresury-report-verification.component.html',
  styleUrls: ['./tresury-report-verification.component.css']
})
export class TresuryReportVerificationComponent implements OnInit {
  // Date
  todayDate = Date.now();
  initiatiomdate = new Date();
  // Varible
  selectedIndex: number;
  // Form Group
  pdplaform: FormGroup;



  aprile: TreasuryVerification[] = [
    {
      srNo: '192000001',
      advNo: '3',
      entryDate: '18-4-2020(18:45)',
      department: 'Forest Departmnet',
      bank: 'State Bank India',
      totalAmt: '10000.00',
      totalDed: '0.00',
      netAmt: '10000.00',
      aproved: 'No',
      aprovedDate: 'Approve',
      printDetails: 'Print Details'
    },

    {
      srNo: '192000001',
      advNo: '10',
      entryDate: '18-4-2020(18:45)',
      department: 'Forest Departmnet',
      bank: 'State Bank India',
      totalAmt: '210000.00',
      totalDed: '0.00',
      netAmt: '210000.00',
      aproved: 'No',
      aprovedDate: 'Approve',
      printDetails: 'Print Details'
    },
  ];
  dataSourceverification = new MatTableDataSource<any>(this.aprile);
  displayedColumnsVerification: string[] = [
    'srNo',
    'advNo',
    'entryDate',
    'department',
    'bank',
    'totalAmt',
    'totalDed',
    'netAmt',
    'aproved',
    'aprovedDate',
    'printDetails'
  ];



  constructor() { }

  ngOnInit() {
  }

  // calculates total amount verification
  TotalAmtVerification(): number {
    let calcCurrentAmt = 0;
    this.dataSourceverification.data.forEach(element => {
      calcCurrentAmt = calcCurrentAmt + Number(element.totalAmt);
    });
    return calcCurrentAmt;
  }

  // calculates total deduction
  TotalDeduction(): number {
    let calcDedAmt = 0;
    this.dataSourceverification.data.forEach(element => {
      calcDedAmt = calcDedAmt + Number(element.totalDed);
    });
    return calcDedAmt;
  }

  // calculates net amount
  TotalnetAmt(): number {
    let calcnetAmt = 0;
    this.dataSourceverification.data.forEach(element => {
      calcnetAmt = calcnetAmt + Number(element.netAmt);
    });
    return calcnetAmt;
  }

  netVertical(element) {
    let returnData = 0;
    if (
      element.totalAmt ||
      element.totalDed
    ) {
      returnData =
        Number(element.totalAmt) +
        Number(element.totalDed);
    }

    return returnData;
  }

}
