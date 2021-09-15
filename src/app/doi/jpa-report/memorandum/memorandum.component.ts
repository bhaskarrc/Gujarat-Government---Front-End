import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memorandum',
  templateUrl: './memorandum.component.html',
  styleUrls: ['./memorandum.component.css']
})
export class MemorandumComponent implements OnInit {
  // Report table details
  reportDetails: any[] = [
    { entry: 'Applicant/Account Holders Name', value: 'PRAJAPATI GITABEN CHANDUBHAI'},
    { entry: 'Account Number', value: '24670100011267'},
    { entry: 'Bank Name', value: 'BANK OF BARODA'},
    { entry: 'Bank Branch', value: 'BOB MEU'},
    { entry: 'IFSC', value: 'BARB0MEUXXX'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
