import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-gtr-seventy-five',
  templateUrl: './report-gtr-seventy-five.component.html',
  styleUrls: ['./report-gtr-seventy-five.component.css']
})
export class ReportGtrSeventyFiveComponent implements OnInit {

  bill_no = 34;
  bill_transit_sr_no = 111111;
  todayDate = Date.now();
  token_no = 649;
  office_name = 'District Treasury Office, Gandhinagar';
  district = 57;

  voucher_no = 123456;
  cardex_no = 23;

  constructor() { }

  ngOnInit() {
  }

  onPrint() {
    window.print();
  }
}
