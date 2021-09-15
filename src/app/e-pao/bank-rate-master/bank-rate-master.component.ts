import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatTableDataSource, MatDialogRef } from '@angular/material';
import { EPOAMessage } from 'src/app/common/error-message/common-message.constants';

import { BankRateMaster, ListValue, BranchHamApping, BankRateDialog } from 'src/app/model/epaoModel';
import { EPaoDirectives } from 'src/app/common/directive/epao';

@Component({
  selector: 'app-bank-rate-master',
  templateUrl: './bank-rate-master.component.html',
  styleUrls: ['./bank-rate-master.component.css']
})
export class BankRateMasterComponent implements OnInit {
  ELEMENT_DATA: BankRateMaster[] = [
    {
      effectivFromDate: '28-JUN-2018',
      effectivToDate: '30-MAY-2019',
      bankRate: '5.25',
      addRated: '2.00',
      penRated: '7.25',
      status: 'Approved'
    },
    {
      effectivFromDate: '1-JUN-2019',
      effectivToDate: '',
      bankRate: '4.25',
      addRated: '2.00',
      penRated: '6.25',
      status: 'Created'

    },
  ];
  // formGroup
  bankRateMasterForm: FormGroup;
  // Date
  maxDate = new Date();
  todayDate = new Date();
  // Variable
  public disableTextbox = true;
  // Table Source
  newdataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
  newdisplayedColumns: string[] = ['srNo', 'effectivFromDate', 'effectivToDate', 'bankRate', 'addRated', 'penRated', 'status', 'newaction'];
  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder) { }
  directiveObject = new EPaoDirectives(this.router, this.dialog);
  // Error message
  public errorMessages;
  statusCtrl: FormControl = new FormControl();
  status_list: ListValue[] = [
    { value: '1', viewValue: 'Created' },
    { value: '2', viewValue: 'Forwarded' },
    { value: '3', viewValue: 'Approved' }
  ];
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
      bankRate: [],
      bankRated: [{ value: '0.00', disabled: true }],
      addRated: [{ value: '0.00', disabled: true }],
      penRated: [{ value: '0.00', disabled: true }],
    }
    );
  }

  // navigation
  navigate() {
    this.router.navigate(['./e-pao/bank-rate-master-listing']);
  }
  // View bank rate master dialog
  openView() {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(BankRateMasterDialogeComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  // edit bank rate master dialog
  openEdit() {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(BankRateMasterEditDialogeComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
const ELEMENT_DATA1: BranchHamApping[] = [
  {
    branchName: 'Receipt Branch 1',
    branch: 'HA'
  },

];
const ELEMENT_DATA2: BankRateDialog[] = [
  {
    refNo: '9-20/E-PAO/BRML/001',
    refDate: '8-Feb-2020',
    status: 'Forwarded',
    penRated: '6.5',
    addRated: '2.00',
    bankRate: '4.5',
    effectivToDate: new Date('12-Feb-20'),
    effectivFromDate: new Date('19-Dec-19'),
  },
];
// view bank rate master dialog
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'bank-rate-dialoge',
  templateUrl: 'bank-rate-dialoge.html',
})


export class BankRateMasterDialogeComponent {
  constructor(
    public dialog: MatDialog,
    private router: Router,
    public dialogRef: MatDialogRef<BankRateMasterDialogeComponent>
  ) { }
  directiveObject = new EPaoDirectives(this.router, this.dialog);
  newdataSource = new MatTableDataSource<any>(ELEMENT_DATA2);
  newdisplayedColumns: string[] = ['srNo', 'effectivFromDate',
    'effectivToDate', 'bankRate', 'addRated', 'penRated', 'status'];
  vitocancel(): void {
    this.dialogRef.close();
  }


}
// edit bank rate master dialog
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'bank-rate-edit-dialoge',
  templateUrl: 'bank-rate-edit-dialoge.html',
})


export class BankRateMasterEditDialogeComponent {
  constructor(
    public dialog: MatDialog,
    private router: Router,
    public dialogRef: MatDialogRef<BankRateMasterEditDialogeComponent>
  ) { }
  directiveObject = new EPaoDirectives(this.router, this.dialog);
  newdataSource = new MatTableDataSource<any>(ELEMENT_DATA2);
  newdisplayedColumns: string[] = ['srNo', 'effectivFromDate',
    'effectivToDate', 'bankRate', 'addRated', 'penRated', 'status'];
  vitocancel(): void {
    this.dialogRef.close();
  }



}

