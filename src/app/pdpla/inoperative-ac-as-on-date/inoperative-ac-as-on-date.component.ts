import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { PDPLAInoperative } from 'src/app/model/pdpla';

@Component({
  selector: 'app-inoperative-ac-as-on-date',
  templateUrl: './inoperative-ac-as-on-date.component.html',
  styleUrls: ['./inoperative-ac-as-on-date.component.css']
})
export class InoperativeAcAsOnDateComponent implements OnInit {
  // Date
  todayDate = Date.now();
  initiatiomdate = new Date();
  // Variable
  selectedIndex: number;
  // Form Group
  pdplaform: FormGroup;



  Inoprative: PDPLAInoperative[] = [
    {
      srNo: '192000001',
      pdplaAc: 'PFD DED BHUJ',
      desc: 'District Eduction Officer Bhuj',
      lastTrans: '24-Aug-2006',
      lastBal: '10000.00',
      req: 'Generate Request'
    },

    {
      srNo: '192000001',
      pdplaAc: 'PFD GDA',
      desc: 'Secratory, Gandhinagar DEVP.Autho.Adipur',
      lastTrans: '03-May-2006',
      lastBal: '12000.00',
      req: 'Generate Request'
    },
  ];
  dataSourceinoprativeAc = new MatTableDataSource<any>(this.Inoprative);
  displayedColumnsinoprativeac: any[] = [
    'srNo',
    'pdplaAc',
    'desc',
    'lastTrans',
    'lastBal',
    'req'
  ];

  constructor() { }

  ngOnInit() {
  }


}
