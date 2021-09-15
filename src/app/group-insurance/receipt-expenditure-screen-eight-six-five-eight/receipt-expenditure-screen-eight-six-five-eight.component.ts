import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receipt-expenditure-screen-eight-six-five-eight',
  templateUrl: './receipt-expenditure-screen-eight-six-five-eight.component.html',
  styleUrls: ['./receipt-expenditure-screen-eight-six-five-eight.component.css']
})
export class ReceiptExpenditureScreenEightSixFiveEightComponent implements OnInit {

  amount = '1,90,365';
  amountInWords = 'Rupees One Lakh Ninety Thousand Three Hundred Sixty Five Only';
  officeAddress = 'Accounts Office, Directorate of Accounts and Treasuries, Gujarat State, Gandhinagar';
  date = '  /07/2020';
  monthYear = 'Jun-2020';
  billNo = 'Bill No.70';
  dateForm = '09.06.2020';
  name = 'Shri Arvind Agarwal,IAS';
  constructor() { }

  ngOnInit() {
  }

}
