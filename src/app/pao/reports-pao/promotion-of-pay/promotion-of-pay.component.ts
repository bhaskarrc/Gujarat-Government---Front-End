import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promotion-of-pay',
  templateUrl: './promotion-of-pay.component.html',
  styleUrls: ['./promotion-of-pay.component.css']
})
export class PromotionOfPayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onPrint() {
    window.print();
  }
}
