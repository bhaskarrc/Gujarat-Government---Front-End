import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-twelve',
  templateUrl: './form-twelve.component.html',
  styleUrls: ['./form-twelve.component.css']
})
export class FormTwelveComponent implements OnInit {

  orderNumber = '';
  date = '__/__/____';
  name = '_______________________';
  officeName = '______________';
  rupees = '_______________';
  amountGujarati = '____________________';
  amountB = '';
  amountA = '';
  amountC = '';
  amount1 = '';
  constructor() { }

  ngOnInit() {
  }

}
