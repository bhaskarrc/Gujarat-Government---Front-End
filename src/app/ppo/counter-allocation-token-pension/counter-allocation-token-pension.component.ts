import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

const ELEMENT_DATA: any[] = [
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
const ELEMENT_DATAnew: any[] = [
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
  selector: 'app-counter-allocation-token-pension',
  templateUrl: './counter-allocation-token-pension.component.html',
  styleUrls: ['./counter-allocation-token-pension.component.css']
})
export class CounterAllocationTokenPensionComponent implements OnInit {
  // variables
  todayDate = new Date();
  isShown = false;
  counterallocatiobinwardForm: FormGroup;

  // table data
  displayedColumns: string[] = ['srno', 'counter', 'range', 'counter_h'];
  dataSource = ELEMENT_DATA;
  newdisplayedColumns: string[] = ['srno', 'counter', 'range', 'counter_h'];
  newdataSource = ELEMENT_DATAnew;
  // show data
  datamore() {
    this.isShown = !this.isShown;
  }
  constructor() { }

  ngOnInit() {
  }
}
