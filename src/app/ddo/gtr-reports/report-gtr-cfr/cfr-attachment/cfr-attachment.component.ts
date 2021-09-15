import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cfr-attachment',
  templateUrl: './cfr-attachment.component.html',
  styleUrls: ['./cfr-attachment.component.css']
})
export class CfrAttachmentComponent implements OnInit {

  constructor() { }
  name = 'test';
  netAmount = 1500;

  onPrint() { }
  ngOnInit() {
  }

}
