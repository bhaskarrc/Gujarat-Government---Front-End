import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-gtr-fourty-six',
  templateUrl: './report-gtr-fourty-six.component.html',
  styleUrls: ['./report-gtr-fourty-six.component.css']
})
export class ReportGtrFourtySixComponent implements OnInit {

  constructor() { }

  bill_no = 111111;
  major_head = '2401 Crops Husbandry';
  sub_major_head = '00';
  minor_head = '110 Crops Insurance';
  sub_head = '04 ARG-11 Risk Management in Agriculture Sector';
  detailed_head = '00';
  object_head = '00';

  todayDate = Date.now();

  ngOnInit() {
  }

  onPrint(){
    window.print();
  }

}
