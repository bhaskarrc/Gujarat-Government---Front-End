import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forward-ctc',
  templateUrl: './forward-ctc.component.html',
  styleUrls: ['./forward-ctc.component.css']
})
export class ForwardCtcComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  onPrint() {
    window.print();
  }

}
