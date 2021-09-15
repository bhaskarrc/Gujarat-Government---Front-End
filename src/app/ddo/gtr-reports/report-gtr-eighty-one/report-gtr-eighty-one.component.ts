import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-gtr-eighty-one',
  templateUrl: './report-gtr-eighty-one.component.html',
  styleUrls: ['./report-gtr-eighty-one.component.css']
})
export class ReportGtrEightyOneComponent implements OnInit {

  constructor() { }
  treasury_name = 'Treasury Office';
  voucher_no = 123456;
  todayDate = Date();

  onPrint() { }

  ngOnInit() {
  }

}
