import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-gtr-seventy-six',
  templateUrl: './report-gtr-seventy-six.component.html',
  styleUrls: ['./report-gtr-seventy-six.component.css']
})
export class ReportGtrSeventySixComponent implements OnInit {

  bill_no = 34;

  bill_transit_sr_no = 364;
  todayDate = Date.now();

  token_no = 42;
  office_name = 'District Treasury Office, Gandhinagar';
  district = 61;

  voucher_no = 123456;

  cardex_no = 117;
  constructor() { }

  ngOnInit() {
  }

  onPrint() {
    window.print();
  }

}
