import { MatDialog } from '@angular/material/dialog';
// tslint:disable-next-line: max-line-length
import { CurrentBalanceDialogComponent } from './../demand-of-interest-conformation-letter/current-balance-dialog/current-balance-dialog.component';

import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource } from '@angular/material';
import { DialogData } from 'src/app/model/emd';
import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { HbaDialog } from 'src/app/model/dppf-hba';
@Component({
  selector: 'app-hba-dialog',
  templateUrl: './hba-dialog.component.html',
  styleUrls: ['./hba-dialog.component.css']
})
export class HbaDialogComponent implements OnInit {
  todayDate = Date.now();
  maxDate = new Date();
  headerJso: any[] = [
    { label: 'HBA/MCA Account No', value: '2641773 ' },
    { label: 'Name', value: 'A T MHETA  ' },
    { label: 'Office Name', value: 'Deputy Executive Engineer,PANCHAYAT ROAD and BUILDING CIRCLE, Rajkot' },
    { label: 'File No', value: ' ' },
    { label: 'Loan Amount', value: '20000.00' },
    { label: 'Interest Amount', value: '11820.00' },
    { label: 'Office Letter No', value: '1116.00' },
    { label: 'Total Amount', value: '31820.00' },
    { label: 'Loan Sanction Authoraty', value: 'Deputy Executive Engineer,PANCHAYAT ROAD and BUILDING CIRCLE, Rajkot' },
  ];

  // table data
  Element_Data: HbaDialog[] = [
    {
      statusName: 'Loan',
      asPerDepartment: '0',
      asPerDppf: '0',
      missingPlusMinus: '0',
      remarks: '',
      difference: '',
    },
    {
      statusName: 'Interest',
      asPerDepartment: '0',
      asPerDppf: '0',
      missingPlusMinus: '0',
      remarks: '',
      difference: '',
    },
    {
      statusName: 'Total',
      asPerDepartment: '0',
      asPerDppf: '0',
      missingPlusMinus: '0',
      remarks: '',
      difference: '',
    },
    {
      statusName: 'As Per + and - Grant',
      asPerDepartment: '0',
      asPerDppf: '0',
      missingPlusMinus: '0',
      remarks: '',
      difference: '',
    },
    {
      statusName: 'Year : 1999-2000',
      asPerDepartment: '0',
      asPerDppf: '0',
      missingPlusMinus: '0',
      remarks: '',
      difference: '',
    },
    {
      statusName: 'Year : 2000-2001',
      asPerDepartment: '0',
      asPerDppf: '0',
      missingPlusMinus: '0',
      remarks: '',
      difference: '',
    },
    {
      statusName: 'Year : 2001-2002',
      asPerDepartment: '0',
      asPerDppf: '0',
      missingPlusMinus: '0',
      remarks: '',
      difference: '',
    },
    {
      statusName: 'Year : 2002-2003',
      asPerDepartment: '0',
      asPerDppf: '0',
      missingPlusMinus: '0',
      remarks: '',
      difference: '',
    },
    {
      statusName: 'Year : 2003-2004',
      asPerDepartment: '0',
      asPerDppf: '0',
      missingPlusMinus: '0',
      remarks: '',
      difference: '',
    },
    {
      statusName: 'Year : 2004-2005',
      asPerDepartment: '0',
      asPerDppf: '0',
      missingPlusMinus: '0',
      remarks: '',
      difference: '',
    },
    {
      statusName: 'Year : 2005-2006',
      asPerDepartment: '0',
      asPerDppf: '0',
      missingPlusMinus: '0',
      remarks: '',
      difference: '',
    },
    {
      statusName: 'Year : 2006-2007',
      asPerDepartment: '0',
      asPerDppf: '0',
      missingPlusMinus: '0',
      remarks: '',
      difference: '',
    },
    {
      statusName: 'Year : 2007-2008',
      asPerDepartment: '0',
      asPerDppf: '0',
      missingPlusMinus: '0',
      remarks: '',
      difference: '',
    },
    {
      statusName: 'Year : 2008-2009',
      asPerDepartment: '0',
      asPerDppf: '0',
      missingPlusMinus: '0',
      remarks: '',
      difference: '',
    },
    {
      statusName: 'Year : 2009-2010',
      asPerDepartment: '0',
      asPerDppf: '0',
      missingPlusMinus: '0',
      remarks: '',
      difference: '',
    },
  ];

  dataSource = new MatTableDataSource<HbaDialog>(this.Element_Data);
  displayedColumns: any[] = ['statusName', 'asPerDepartment', 'asPerDppf', 'missingPlusMinus', 'remarks', 'difference'];

  constructor(public dialogRef: MatDialogRef<HbaDialogComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private el: ElementRef) { }

  ngOnInit() {
  }
  // On Close
  onNoClick(): void {
    this.dialogRef.close('no');
  }

  // To Calculate Difference
  diff(element) {
    let difference = 0;
    difference = (Number(element['asPerDepartment']) - Number(element['asPerDppf'])) - Number(element['missingPlusMinus']);
    return difference;
  }

  // Current Balance
  currentBalance(): void {
    const dialogRef = this.dialog.open(CurrentBalanceDialogComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
