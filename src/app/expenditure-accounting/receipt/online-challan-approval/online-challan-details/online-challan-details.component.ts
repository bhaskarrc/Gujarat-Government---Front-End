
import { MatTableDataSource } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-online-challan-details',
  templateUrl: './online-challan-details.component.html',
  styleUrls: ['./online-challan-details.component.css']
})
export class OnlineChallanDetailsComponent implements OnInit {
  // FormGroup
  postChallanDetailsForm: FormGroup;
  maxDate = new Date();
  // Display Element Data
  Element_Data: any[] = [
    {
      desc: 'Penalty',
      majorHead: '0040',
      subMajorHead: '00',
      minorHead: '110',
      subHead: '04',
      amount: '11.00',
    },
    {
      desc: 'Composition Money',
      majorHead: '0040',
      subMajorHead: '00',
      minorHead: '110',
      subHead: '04',
      amount: '11.00',
    },

    {
      desc: 'Interest',
      majorHead: '0040',
      subMajorHead: '00',
      minorHead: '110',
      subHead: '04',
      amount: '8.00',
    },


  ];
  // Table Source
  dataSource = new MatTableDataSource<any>(this.Element_Data);
  // Display Columns
  displayedColumns: any[] = ['desc', 'majorHead', 'subMajorHead', 'minorHead', 'subHead', 'amount'];
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.postChallanDetailsForm = this.fb.group({
      // FormGroup Fields
      cinNo: ['57000220000002554155035'],
      regiNo: ['24000000000'],
      bankDate: ['13/07/2016'],
      partyName: ['TEST FIRM'],
      challanValue: ['66.00'],
      acNo: [''],
      bank: ['Oriental Bank Of Commerce'],
      branch: ['Main Branch, Gandhinagar'],
      from: ['01/05/2016'],
      to: ['31/05/2016'],
    });

  }

  totaAmount(): number {
    let amt = 0;
    this.dataSource.data.forEach((element) => {
      amt = amt + Number(element.amount);
    });
    return amt;
  }

}
