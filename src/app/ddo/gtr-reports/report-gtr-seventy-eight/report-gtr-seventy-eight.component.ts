import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-gtr-seventy-eight',
  templateUrl: './report-gtr-seventy-eight.component.html',
  styleUrls: ['./report-gtr-seventy-eight.component.css']
})
export class ReportGtrSeventyEightComponent implements OnInit {

  constructor() { }

  bill_no = 'EDU-22';
  bill_transit_sr_no = 240;
  todayDate = Date.now();
  token_no = 224;
  postage_stamp_month = Date.now();
  voucher_no = 64;
  cardex_no = 543;
  under_group = 'B';
  signature = '________________';
  station = 'Gandhinagar';
  amount_words = 'Three Lac Seventeen Thousand Seven Hundred Forty Six Only';
  ngOnInit() {
  }

  onPrint() {
    window.print();
  }

}
