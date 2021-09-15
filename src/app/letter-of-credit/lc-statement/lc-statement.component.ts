import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lc-statement',
  templateUrl: './lc-statement.component.html',
  styleUrls: ['./lc-statement.component.css']
})
export class LcStatementComponent implements OnInit {

  adviceNO = '5';
  adviceDate = new Date(2020, 3, 3);
  department = 'Forest Department';
  district = 'Gandhinagar';
  divisionCode = 'AFR007';
  divisionName = 'Dy. Con. of Forest training Center, Gandhinagar';
  todayDate = new Date();
  lcAmount = '450000000';
  lcAmountInWords = 'Fourty Five Crore';
  lcValidFrom = new Date(2020, 2, 1);
  lcValidTo = new Date(2020, 2, 31);
  month = 'March';
  openingLcBalance = '0.00';
  newLC = '450000000.00';
  bank = 'State Bank Of India';

  constructor() { }

  ngOnInit() {
  }

}
