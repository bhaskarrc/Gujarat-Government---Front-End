import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-certificate-report',
  templateUrl: './life-certificate-report.component.html',
  styleUrls: ['./life-certificate-report.component.css']
})
export class LifeCertificateReportComponent implements OnInit {
  // variables
  pensionersName = 'abc';
  ppoNo = 123456;
  bankBranchName = 'abc';
  bankAccountNo = 1234567891;
  panCardNo = 1234567890;
  ledgerNo = 1234567890;
  // dates
  todaDate = Date.now();
  pensionerBirthDate = Date.now();

  constructor() { }

  ngOnInit() {
  }

}
