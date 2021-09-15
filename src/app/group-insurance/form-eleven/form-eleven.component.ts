import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-eleven',
  templateUrl: './form-eleven.component.html',
  styleUrls: ['./form-eleven.component.css']
})
export class FormElevenComponent implements OnInit {

  orderNumber = '';
  date = '__/__/____';
  name = '_______________________';
  officeName = '______________';
  rupees = '_______________';
  amountGujarati = '____________________';
  amountB = '';
  amountA = '';
  amountC = '';
  constructor() { }

  ngOnInit() {
  }

}
