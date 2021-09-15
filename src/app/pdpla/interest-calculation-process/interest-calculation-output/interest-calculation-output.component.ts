import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Aarile } from 'src/app/model/pdpla';

@Component({
  selector: 'app-interest-calculation-output',
  templateUrl: './interest-calculation-output.component.html',
  styleUrls: ['./interest-calculation-output.component.css']
})
export class InterestCalculationOutputComponent implements OnInit {
  // Date
  todayDate = Date.now();
  initiatiomdate = new Date();
  // Variable
  selectedIndex: number;
  // FormGroup
  pdplaform: FormGroup;

  aprile: Aarile[] = [
    {
      srNo: '192000001',
      date: '12-April-2020',
      oppBal: '16000.00',
      recDep: '8000.00',
      total: '24000.00',
      with: '2000.00',
      cloBal: '22000.00',
      proBal: '22000.00',
    },
  ];
  dataSourceinterestaprile = new MatTableDataSource<any>(this.aprile);
  displayedColumnsintrestAprile: any[] = [
    'srNo',
    'date',
    'oppBal',
    'recDep',
    'total',
    'with',
    'cloBal',
    'proBal'
  ];


  may: Aarile[] = [
    {
      srNo: '192000001',
      date: '12-May-2020',
      oppBal: '22000.00',
      recDep: '8000.00',
      total: '30000.00',
      with: '0.00',
      cloBal: '30000.00',
      proBal: '30000.00',
    },
  ];
  dataSourceinterestmay = new MatTableDataSource<any>(this.may);
  displayedColumnsintrestMay: any[] = [
    'srNo',
    'date',
    'oppBal',
    'recDep',
    'total',
    'with',
    'cloBal',
    'proBal'
  ];



  constructor() { }

  ngOnInit() {
  }


}
