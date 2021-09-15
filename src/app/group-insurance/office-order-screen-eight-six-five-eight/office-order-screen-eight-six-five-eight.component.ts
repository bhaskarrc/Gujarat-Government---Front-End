import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-office-order-screen-eight-six-five-eight',
  templateUrl: './office-order-screen-eight-six-five-eight.component.html',
  styleUrls: ['./office-order-screen-eight-six-five-eight.component.css']
})
export class OfficeOrderScreenEightSixFiveEightComponent implements OnInit {

  monthYear = 'January-2020';
  amount = 'Rs. 36,920/-(Rupees Thirtysix Thousand Nine Hundred Twenty Only)';
  totalAmount = 'Rs. 36,920/-';
  date = '  /03/2020';
  serialNo = 'No.DAT/GIS/Table-1/AIS/01-2020';
  constructor() { }

  ngOnInit() {
  }

}
