import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pay-fixation-grant',
  templateUrl: './pay-fixation-grant.component.html',
  styleUrls: ['./pay-fixation-grant.component.css']
})
export class PayFixationGrantComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onPrint() {
    window.print();
  }

}
