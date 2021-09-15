import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lc-form-b',
  templateUrl: './lc-form-b.component.html',
  styleUrls: ['./lc-form-b.component.css']
})
export class LcFormBComponent implements OnInit {

  lcNumber = "TRY/GNR/LC/0001";
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
