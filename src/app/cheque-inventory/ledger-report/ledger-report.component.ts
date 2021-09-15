import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LedgerReport } from 'src/app/model/ledger-report';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { ciMessage } from 'src/app/common/error-message/common-message.constants';

@Component({
  selector: 'app-ledger-report',
  templateUrl: './ledger-report.component.html',
  styleUrls: ['./ledger-report.component.css']
})
export class LedgerReportComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  ledgerReport: FormGroup;
  errorMessages = ciMessage;
  todayDate = Date.now();

  // table data
  Element_Data: LedgerReport[] = [
    {
      bankBranch: 'SBIN0032214', treasuryReceivedDate: '10-Jan-2019', fromSeries: '534000	', toSeries: '534010	',
      treasuryOfficerSignature: '', issuedOfficeWithCode: '4', issueDate: '10-Jan-2019', modeOfIssue: 'Messenger	',
      messengerNameAndSignature: 'Mr. A.B Patel', letterNumberAndDate: 'NA', remarks: ''
    },
    {
      bankBranch: 'SBIN0039813', treasuryReceivedDate: '19-Nov-2019', fromSeries: '987000', toSeries: '987060',
      treasuryOfficerSignature: '', issuedOfficeWithCode: '4', issueDate: '19-Nov-2019', modeOfIssue: 'Registered Post	',
      messengerNameAndSignature: 'NA', letterNumberAndDate: 'EK403807171IN	', remarks: ''
    }
  ];
  dataSource = new MatTableDataSource<LedgerReport>(this.Element_Data);

  // table columnDef
  displayedColumns = [
    'position', 'bankBranch', 'treasuryReceivedDate', 'fromSeries', 'toSeries', 'treasuryOfficerSignature',
    'issuedOfficeWithCode', 'issueDate', 'modeOfIssue', 'messengerNameAndSignature', 'letterNumberAndDate', 'remarks'
  ];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.ledgerReport = this.fb.group({
      fromDate: new Date('01/05/2020'),
      toDate: new Date()
    });
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
