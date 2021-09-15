import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-gtr-sixty-one',
  templateUrl: './report-gtr-sixty-one.component.html',
  styleUrls: ['./report-gtr-sixty-one.component.css']
})
export class ReportGtrSixtyOneComponent implements OnInit {


  constructor() { }
  name = 'Ganpat';
  amount = 1500.00;
  todayDate = new Date();
  ngOnInit() {
  }

  onPrint() {
    window.print();
  }
}
