import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grant-annual-increment',
  templateUrl: './grant-annual-increment.component.html',
  styleUrls: ['./grant-annual-increment.component.css']
})
export class GrantAnnualIncrementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  onPrint() {
    window.print();
  }

}
