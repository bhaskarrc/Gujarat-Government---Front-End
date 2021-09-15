import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog, MatTableDataSource } from '@angular/material';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from 'src/app/model/emd';
import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { CardexNoDialog } from 'src/app/model/dppf-hba';
@Component({
  selector: 'app-cardex-no-dialog',
  templateUrl: './cardex-no-dialog.component.html',
  styleUrls: ['./cardex-no-dialog.component.css']
})
export class CardexNoDialogComponent implements OnInit {
  Element_Data: CardexNoDialog[] = [
    {
      ddoNo: '12345',
      cardexNo: '4',
      ddoName: 'Collector Office, Gandhinagar',
    },
  ];

  accountDetailsdialogForm: FormGroup;
  districtCtrl: FormControl = new FormControl();
  inwardTypeCtrl: FormControl = new FormControl();
  displayedColumns: any[] = [
    'select',
    'ddoNo',
    'cardexNo',
    'ddoName',

  ];

  dataSource = new MatTableDataSource<CardexNoDialog>(this.Element_Data);
  selection = new SelectionModel<CardexNoDialog>(true, []);

  constructor(public dialogRef: MatDialogRef<CardexNoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private router: Router,
    private fb: FormBuilder,
    private el: ElementRef) { }

  ngOnInit() {
    this.accountDetailsdialogData();
  }

  accountDetailsdialogData() {
    this.accountDetailsdialogForm = this.fb.group({
      ddoNo: [''],
      cardeNo: [''],
      ddoName: [''],
    });
  }

  // On Close
  onNoClick(): void {
    this.dialogRef.close('no');
  }

  // On Submit
  onYesClick(): void {
    this.dialogRef.close('yes');
  }
}
