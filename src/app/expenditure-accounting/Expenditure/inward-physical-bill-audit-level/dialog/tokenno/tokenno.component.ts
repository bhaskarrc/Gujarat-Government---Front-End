import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material';

const ELEMENT_DATA = [
  {
    tokenNo: '4',
    tokenStatus: 'Available'
  }
];
@Component({
  selector: 'app-tokenno',
  templateUrl: './tokenno.component.html',
  styleUrls: ['./tokenno.component.css']
})
export class TokennoComponent implements OnInit {
  isShown = false;

  billinwardform: FormGroup;
  tokenStatusCtrl: FormControl = new FormControl();
  tokenDisplayedColumns: string[] = ['tokenNo', 'tokenStatus'];
  tokenDataSource = new MatTableDataSource<any>(ELEMENT_DATA);

  constructor(public dialog: MatDialog, private fb: FormBuilder,
    public dialogRef: MatDialogRef<TokennoComponent>
  ) { }

  tokenStatus_list: any[] = [
    { value: '1', viewValue: 'ALL' },
    { value: '2', viewValue: 'Available' },
    { value: '3', viewValue: 'Used' },
    { value: '4', viewValue: 'Lost' }
  ];

  ngOnInit() {
    this.billinwardform = this.fb.group({
      toTokenNo: [''],
      fromTokenNo: [''],
      tokenStatus: ['']

    });
  }

  search() {
    this.isShown = true;
  }
  goToDashboard(): void {
    this.dialogRef.close('no');
  }
}
