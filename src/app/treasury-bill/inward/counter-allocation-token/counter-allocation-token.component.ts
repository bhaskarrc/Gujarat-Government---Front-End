import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { CommonListing } from 'src/app/model/common-listing';
import { CounterAllocation } from 'src/app/model/treasury-bill';

const ELEMENT_DATA: CounterAllocation[] = [
  {
    counter: 'R1',
    range: '1-3000',
    counter_h: 'Select Counter'
  },
  {
    counter: 'R2',
    range: '3001-5999',
    counter_h: 'Select Counter'
  },
  {
    counter: 'R3',
    range: '6000-7001',
    counter_h: 'Select Counter'
  },
  {
    counter: 'Pratik',
    range: '7000-100000',
    counter_h: 'Select Counter'
  },
  {
    counter: 'T10',
    range: '100001-200000',
    counter_h: 'Select Counter'
  }
];
const ELEMENT_DATAnew: CounterAllocation[] = [
  {
    counter: 'R1',
    range: '1-3000',
    counter_h: 'Release Counter'
  },
  {
    counter: 'R2',
    range: '3001-5999',
    counter_h: '-'
  },
  {
    counter: 'R3',
    range: '6000-7001',
    counter_h: '-'
  },
  {
    counter: 'Pratik',
    range: '7000-100000',
    counter_h: '-'
  },
  {
    counter: 'T10',
    range: '1000001-200000',
    counter_h: '-'
  }
];

@Component({
  selector: 'app-counter-allocation-token',
  templateUrl: './counter-allocation-token.component.html',
  styleUrls: ['./counter-allocation-token.component.css']
})
export class CounterAllocationTokenComponent implements OnInit {
  // Variable
  isShown = false;
  // Form Group
  counterallocatiobinwardForm: FormGroup;
  displayedColumns: string[] = ['srno', 'counter', 'range', 'counter_h'];
  dataSource = ELEMENT_DATA;
  newdisplayedColumns: string[] = ['srno', 'counter', 'range', 'counter_h'];
  newdataSource = ELEMENT_DATAnew;
  datamore() {
    this.isShown = !this.isShown;
  }
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.counterallocatiobinwardForm = this.fb.group({
    });
  }
}
