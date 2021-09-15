import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-cardex-search-dialog',
  templateUrl: './cardex-search-dialog.component.html',
  styleUrls: ['./cardex-search-dialog.component.css']
})
export class CardexSearchDialogComponent implements OnInit {
  cardexNoForm: FormGroup;
  Element_Data: any[] = [{ ddoNo: '1', cardexNo: '111', ddoName: 'abc' }];
  dataSource = new MatTableDataSource<any>(this.Element_Data);
  displayedColumns: string[] = ['srno', 'ddoNo', 'cardexNo', 'ddoName'];
  constructor(public fb: FormBuilder, public dialogRef: MatDialogRef<CardexSearchDialogComponent>) { }

  ngOnInit() {
    this.cardexNoForm = this.fb.group({
      ddoNo: [''],
      cardexNo: [''],
      ddoName: ['']
    });
  }
  onNoClick() {
    this.dialogRef.close('no');

  }
}
