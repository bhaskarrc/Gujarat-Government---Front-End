import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entitlement-pay',
  templateUrl: './entitlement-pay.component.html',
  styleUrls: ['./entitlement-pay.component.css']
})
export class EntitlementPayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onPrint() {
    window.print();
  }

}
