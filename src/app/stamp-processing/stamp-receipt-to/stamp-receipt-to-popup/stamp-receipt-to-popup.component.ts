import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatTableDataSource } from '@angular/material';
import { CommonListing } from 'src/app/model/common-listing';

const ELEMENT_DATA: any[] = [
  {
    denominationvalue: '',
    typeOfStamp: '',
    prevIndent: '',
    qtyprevIndent: '',
    reuseQty: '',
    qtyApp: '',
    denominationCode: '',
    stampSheet: '',
    actQtyRecTo: '',
    fromSeries: '',
    toSeries: '',
    reuseQtySub: '',
  }
];


@Component({
  selector: 'app-stamp-receipt-to-popup',
  templateUrl: './stamp-receipt-to-popup.component.html',
  styleUrls: ['./stamp-receipt-to-popup.component.css']
})
export class StampReceiptToPopupComponent implements OnInit {
  stamp_List: CommonListing[] = [
    { value: '1', viewValue: 'Agency License' },
    { value: '2', viewValue: 'Agreement' },
    { value: '3', viewValue: 'Court Fee Label' },
    { value: '4', viewValue: 'Court Fee Paper' },
    { value: '5', viewValue: 'Foreign bill' },
    { value: '6', viewValue: 'Hundi' },
    { value: '7', viewValue: 'Insurance' },
    { value: '8', viewValue: 'Non Judicial Paper' },
    { value: '9', viewValue: 'Notary' },
    { value: '10', viewValue: 'Revenue' },
    { value: '11', viewValue: 'Share transfer' },
    { value: '12', viewValue: 'Special Adhesive' },
  ];
  denoVal_list: CommonListing[] = [
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '2' },
    { value: '2', viewValue: '5' },
    { value: '2', viewValue: '10' },
    { value: '2', viewValue: '20' },
  ];

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  displayedColumns = ['typeOfStamp', 'deno', 'prevIndent', 'qtyprevIndent', 'reuseQty', 'qtyApp', 'actualQtyRec',
    'fromSeries', 'toSeries'];
  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<StampReceiptToPopupComponent>) { }
    // to add row
    onAddRow() {
      this.dataSource.data.push({
        denominationvalue: '',
        typeOfStamp: '',
        prevIndent: '',
        qtyprevIndent: '',
        reuseQty: '',
        qtyApp: '',
        denominationCode: '',
        stampSheet: '',
        actQtyRecTo: '',
        fromSeries: '',
        toSeries: '',
        reuseQtySub: '',
      });
      this.dataSource.data = this.dataSource.data;
    }
    onCancel() {
      this.dialogRef.close('close');
    }

    onSubmit() {
      this.dialogRef.close(this.dataSource.data);
    }

  ngOnInit() {
  }

}
