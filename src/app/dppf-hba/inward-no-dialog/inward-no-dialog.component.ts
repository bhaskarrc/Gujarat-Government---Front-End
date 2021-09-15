import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from 'src/app/model/emd';
import { Component, OnInit, Inject, ElementRef } from '@angular/core';
@Component({
  selector: 'app-inward-no-dialog',
  templateUrl: './inward-no-dialog.component.html',
  styleUrls: ['./inward-no-dialog.component.css']
})
export class InwardNoDialogComponent implements OnInit {

  Element_Data: any[] = [
    {
      srno: '1',
      inwardNo: '12345/05/2020',
      inwardDate: '12/04/2020',
      inwardType: 'Top Schedule',
      year: '2008',
      month: 'March',
      district: 'District Treasury Office,Gandhinagar ',
      hba: 'HBA',
      mca: '5465464653',
    },
    {
      srno: '2',
      inwardNo: '12345/05/2020',
      inwardDate: '12/04/2020',
      inwardType: 'Top Schedule',
      year: '2008',
      month: 'March',
      district: 'District Treasury Office,Gandhinagar ',
      hba: 'MCA',
      mca: '5465464653',

    },
  ];
  year_list: any[] = [
    { value: '1', viewValue: '2009' },
    { value: '2', viewValue: '2010' },
    { value: '3', viewValue: '2011' },
    { value: '4', viewValue: '2012' },
    { value: '5', viewValue: '2013' },
    { value: '6', viewValue: '2014' },
    { value: '7', viewValue: '2015' },
    { value: '8', viewValue: '2016' },
    { value: '9', viewValue: '2017' },
    { value: '10', viewValue: '2018' },
    { value: '11', viewValue: '2019' },
    { value: '12', viewValue: '2020' },
  ];
  month_list: any[] = [
    { value: '1', viewValue: 'Jan' },
    { value: '2', viewValue: 'Feb' },
    { value: '3', viewValue: 'Mar' },
    { value: '4', viewValue: 'Apr' },
    { value: '5', viewValue: 'May' },
    { value: '6', viewValue: 'Jun' },
    { value: '7', viewValue: 'Jul' },
    { value: '8', viewValue: 'Aug' },
    { value: '9', viewValue: 'Sep' },
    { value: '10', viewValue: 'Oct' },
    { value: '11', viewValue: 'Nov' },
    { value: '12', viewValue: 'Dec' },

  ];
  districtList: any[] = [
    { value: '1', viewValue: 'District Treasury Office,Gandhinagar' },
    { value: '2', viewValue: 'District Treasury Office,Ahmedabad' },
    { value: '3', viewValue: 'District Treasury Office,Rajkot' },
  ];
  inwarde_list: any[] = [
    { value: '1', viewValue: 'Top Schedule' },
    // { value: '2', viewValue: 'No Due Certificate' },
    // { value: '3', viewValue: 'Others' },
    // { value: '4', viewValue: 'Cheque / Demand Draft' },
    // { value: '5', viewValue: 'Request for Account Generation' },
    // { value: '6', viewValue: 'Demand for Interest Conformation Letter' },
    // { value: '7', viewValue: 'Demand for NDC' },
    // { value: '8', viewValue: 'Demand for refund order' },
    // { value: '9', viewValue: 'AGTE Misclassified Entry' },
    // { value: '10', viewValue: 'AGTE Clearance Entry(Sent by DPPF)' },
    // { value: '11', viewValue: 'Debit/Credit Correction Entry' },
    // { value: '12', viewValue: 'AG CA Figure' }
  ];
  hbaMca_list: any[] = [
    { value: '1', viewValue: 'HBA' },
    { value: '2', viewValue: 'MCA' },
  ];
  accountDetailsdialogForm: FormGroup;
  districtCtrl: FormControl = new FormControl();
  inwardTypeCtrl: FormControl = new FormControl();
  displayedColumns: any[] = [
    'srno',
    'inwardNo',
    'inwardDate',
    'inwardType',
    'month',
    'year',
    'district',
    'hba',
    // 'mca',

  ];

  dataSource = new MatTableDataSource<any>(this.Element_Data);


  constructor(public dialogRef: MatDialogRef<InwardNoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private fb: FormBuilder) { }
  // tslint:disable-next-line: use-life-cycle-interface
  ngOnInit() {
    this.accountDetailsdialogData();
  }

  accountDetailsdialogData() {
    this.accountDetailsdialogForm = this.fb.group({
      inwardNo: [''],
      inwardDate: [''],
      district: [''],
      year: [''],
      month: [''],
      inwardType: [''],
      hba: [''],
      mcano: ['']
    });
  }

  // on Close
  onNoClick(): void {
    this.dialogRef.close('no');
  }

  // on inward no
  openInwardNoDialog(element) {
    this.dialogRef.close(element);
  }
}
