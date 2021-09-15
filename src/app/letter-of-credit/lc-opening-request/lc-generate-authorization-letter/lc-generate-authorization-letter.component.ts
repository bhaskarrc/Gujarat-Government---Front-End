import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lc-generate-authorization-letter',
  templateUrl: './lc-generate-authorization-letter.component.html',
  styleUrls: ['./lc-generate-authorization-letter.component.css']
})
export class LcGenerateAuthorizationLetterComponent implements OnInit {

  nameOfOffice = 'Director, Sardar Patel Zoological Park, Kevadia';
  addressOfOffice = 'At.PO.: Limadi (Kevadia), Ta.-Garudeshwar, Dist-Narmada AG';
  authorizationNo = 'DC-6 Delg of Power/2020-21, No.76';
  aurhorizationDate = '01/06/2020';
  grantNo = '000';
  majorHead = '8782';
  subMajorHead = '00';
  minorHead = '103';
  subHead = '02';
  detailedHead = '00';
  objectHead = '0';
  subObjectHead = '0';
  divisionName = 'Director, Sardar Patel Zoological Park, Kevadia Colony';
  underCode = 'SPZP01';
  codeName = 'Conservator of Forest, Wild Life Circle, Vadodara';
  todaysDate = Date.now();

  constructor() { }

  ngOnInit() {
  }

}
