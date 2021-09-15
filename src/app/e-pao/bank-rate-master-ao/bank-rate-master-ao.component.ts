import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { EPOAMessage } from 'src/app/common/error-message/common-message.constants';
import { WorkFlowEPaoComponent } from '../work-flow-e-pao/work-flow-e-pao.component';
const ELEMENT_DATA: any[] = [
  {
    status: 'Forwarded',
  },
  {
    status: 'Rejected',
  },
  {
    status: 'Pending',
  }
];
@Component({
  selector: 'app-bank-rate-master-ao',
  templateUrl: './bank-rate-master-ao.component.html',
  styleUrls: ['./bank-rate-master-ao.component.css']
})
export class BankRateMasterAoComponent implements OnInit {

  bankRateMasterForm: FormGroup;
  maxDate = new Date();
  todayDate = new Date();
  public disableTextbox = true;
  newdataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  newdisplayedColumns: string[] = ['srNo', 'effectivFromDate', 'effectivToDate', 'bankRate', 'addRated', 'penRated', 'status', 'newaction'];
  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder, ) { }
  public errorMessages;
  ngOnInit() {
    this.errorMessages = EPOAMessage;
    this.bankRateMasterData();

  }
  bankRateMasterData() {
    this.bankRateMasterForm = this.fb.group({
      addRate: [''],
      effecativeDate: [''],
      effecativeToDate: [{ value: '12-Mar-2020', disabled: true }],
      effecativeFromDate: [{ value: '12-Mar-2020', disabled: true }],
      bankRate: [{ value: '0.00', disabled: true }],
      addRated: [{ value: '0.00', disabled: true }],
      penRated: [{ value: '0.00', disabled: true }],
    }
    )
  }
  commentEpaoDetails(): void {
    const dialogRef = this.dialog.open(WorkFlowEPaoComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  navigate() {
    this.router.navigate(['./e-pao/bank-rate-master-ao-listing']);
  }
}
