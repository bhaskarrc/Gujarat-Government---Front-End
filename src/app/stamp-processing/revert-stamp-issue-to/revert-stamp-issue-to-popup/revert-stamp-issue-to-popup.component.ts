import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatTableDataSource, MAT_DIALOG_DATA } from '@angular/material';
import { CommonListing } from 'src/app/model/common-listing';
import { ElementSsoToToNew } from 'src/app/model/stamp-processing';
import { HistoryIndentConsolidationPopupComponent } from '../../indent-consolidation/history-indent-consolidation-popup/history-indent-consolidation-popup.component';

// Listing table data
const ELEMENT_DATA: any[] = [
  {
    position: '',
    typeOfStamp: '',
    unitVal: '',
    deno: '',
    disc: '',
    stampSheet: '',
    sheetNo: '',
    stampNo: '',
    fromSeries: '',
    toSeries: '',
    totAmt: '',
    discRs: '',
    netAmt: '',
    stmpIssueTre: '',
    stmpIssueSub: '',
    stmpIssueVen: '',
    qtyAppred: '',
  },
];

@Component({
  selector: 'app-revert-stamp-issue-to-popup',
  templateUrl: './revert-stamp-issue-to-popup.component.html',
  styleUrls: ['./revert-stamp-issue-to-popup.component.css']
})
export class RevertStampIssueToPopupComponent implements OnInit {
  stamp_List: any[] = [
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
  denoCode_list: CommonListing[] = [
    { value: '1', viewValue: '10' },
    { value: '2', viewValue: '20' },
    { value: '2', viewValue: '30' },
    { value: '2', viewValue: '50' },
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  displayFinal: string[] = ['typeOfStamp', 'unitVal', 'deno',
  'stampSheet', 'sheetNo', 'stampNo', 'fromSeries', 'toSeries',
  'stmpIssueVen', 'totAmt', 'discRs', 'netAmt'];
  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<RevertStampIssueToPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit() {
  }
  // to add row
  onAddRow() {
    this.dataSource.data.push({
      typeOfStamp: '',
      denominationvalue: '',
      availQty: '',
      authQty: '',
      requestedQuantity: '',
      qtyApprScr: '',
      qtyapproved: '',
      denominationCode: '',
      stampSheet: '',
      from: '',
      to: '',
      remarks: '',
      isDisable: false,
      show: true,
    });
    this.dataSource.data = this.dataSource.data;
  }
  onCancel() {
    this.dialogRef.close('close');
  }

  onSubmit() {
    this.dialogRef.close(this.dataSource.data);
  }

}
