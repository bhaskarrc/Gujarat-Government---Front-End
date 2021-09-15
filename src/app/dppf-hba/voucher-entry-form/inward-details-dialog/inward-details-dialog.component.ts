import { InwardDetailsDialog } from './../../../model/dppf-hba';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from 'src/app/model/emd';
import { Component, OnInit, Inject } from '@angular/core';
@Component({
  selector: 'app-inward-details-dialog',
  templateUrl: './inward-details-dialog.component.html',
  styleUrls: ['./inward-details-dialog.component.css']
})
export class InwardDetailsDialogComponent implements OnInit {
  Element_Data: InwardDetailsDialog[] = [
    {
      ddoNo: '12345',
      cardexNo: '4',
      ddoName: 'Collector Office, Gandhinagar',
    },
  ];

  accountDetailsdialogForm: FormGroup;
  districtCtrl: FormControl = new FormControl();
  inwardTypeCtrl: FormControl = new FormControl();
  displayedColumns: string[] = [
    'select',
    'ddoNo',
    'cardexNo',
    'ddoName',
  ];

  dataSource = new MatTableDataSource<InwardDetailsDialog>(this.Element_Data);

  constructor(public dialogRef: MatDialogRef<InwardDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private fb: FormBuilder) { }
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

  // closes dialog
  onNoClick(): void {
    this.dialogRef.close('no');
  }
}
