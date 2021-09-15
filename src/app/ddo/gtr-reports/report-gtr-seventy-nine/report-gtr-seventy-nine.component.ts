import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-gtr-seventy-nine',
  templateUrl: './report-gtr-seventy-nine.component.html',
  styleUrls: ['./report-gtr-seventy-nine.component.css']
})
export class ReportGtrSeventyNineComponent implements OnInit {

  constructor() { }
  signature = '_________________';
  bill_no = 1111;
  bill_transit_sr_no = '________';
  todayDate = '15/02/2020';
  date = '________';
  token_no = '143';
  voucher_no = '______';
  postage_stamp_month = Date.now();
  treasury_name = 'A';
  datenow = new Date();
  NoAndDateOfSanc = '12-09-1100 ' + this.datenow.toDateString();
  amount_in_words = 'One Thousand Eighty Only';
  cardex_no = 543;
  station = 'Gandhinagar';
  amount = '1080.00';
  underline = '________________________';

  onPrint() {

  }

  ngOnInit() {
  }

}
