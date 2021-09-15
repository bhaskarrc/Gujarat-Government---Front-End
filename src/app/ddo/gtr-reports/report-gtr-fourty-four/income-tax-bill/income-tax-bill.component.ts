import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-income-tax-bill',
  templateUrl: './income-tax-bill.component.html',
  styleUrls: ['./income-tax-bill.component.css']
})
export class IncomeTaxBillComponent implements OnInit {

  constructor() { }
  office_name = 'District Treasury Office, Gandhinagar';
  treasury_month_year = Date.now();
  income_tax_amount = 100.00;

  onPrint() { }

  resetForm() { }
  searchBill() { }

  ngOnInit() {
  }

}
