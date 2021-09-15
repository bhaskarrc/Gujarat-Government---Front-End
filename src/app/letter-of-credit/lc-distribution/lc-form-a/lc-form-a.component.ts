import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lc-form-a',
  templateUrl: './lc-form-a.component.html',
  styleUrls: ['./lc-form-a.component.css']
})
export class LcFormAComponent implements OnInit {

  divisionCode = "AFR007";
  divisionName = "Dy. Con. of Forest training Center, Gandhinagar";
  todayDate = new Date();
  lcAmount = "450000000";
  lcAmountInWords = "Fourty Five Crore";
  lcValidFrom = new Date(2020, 2, 1);
  lcValidTo = new Date(2020, 2, 31);

  constructor() { }

  ngOnInit() {
  }

}
