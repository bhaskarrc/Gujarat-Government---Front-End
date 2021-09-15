import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDatepickerInputEvent, MatDialog, MatDialogRef } from '@angular/material';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-old-bank-details',
  templateUrl: './old-bank-details.component.html',
  styleUrls: ['./old-bank-details.component.css']
})
export class OldBankDetailsComponent implements OnInit {
  oldBankDataSourceList: any[] = [
    {
      bankName: 'STATE BANK OF INDIA' , bankAccount: '20427330288', endDate: '19-Feb-2018',
    }
  ];
  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<OldBankDetailsComponent>, ) { }
  oldBankDataSource = new MatTableDataSource(this.oldBankDataSourceList);
  oldBankColumn = ['srno', 'bankName', 'bankAccount', 'endDate'];
  ngOnInit() {
  }
  goToDashboard(): void {
    this.dialogRef.close('no');
  }

}
