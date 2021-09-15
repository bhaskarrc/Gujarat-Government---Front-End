import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource, MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';

export interface DDOMergedList {
  mCheckbox: Boolean;
  mDdoName: string;
  mItemCategory: string;
  mItemName: string;
  mDdoProposedAmt: number | '-';
  mDdoReferenceNo: string;
  mDdoTransactionDate: string;
  mStatus: string;
}

export interface ItemMergedDialog {
  maxWidth: string;
  data: string;
}


const MERGED_DATA: DDOMergedList[] = [
  {
    mCheckbox: false, mDdoName: 'DDO 11', mItemCategory: 'New Vehicle', mItemName: 'New Car Purchase',
    mDdoProposedAmt: 100.00, mDdoReferenceNo: '19-20/BUD/SCE/001', mDdoTransactionDate: '18-Sep-2019 11:48', mStatus: '-'
  },
  {
    mCheckbox: false, mDdoName: 'DDO 12', mItemCategory: 'New Vehicle', mItemName: 'New Car Purchase',
    mDdoProposedAmt: 100.00, mDdoReferenceNo: '19-20/BUD/SCE/002', mDdoTransactionDate: '25-Sep-2019 02:48', mStatus: '-'
  },
  {
    mCheckbox: false, mDdoName: 'DDO 13', mItemCategory: 'New Vehicle', mItemName: 'New Car Purchase',
    mDdoProposedAmt: 100.00, mDdoReferenceNo: '19-20/BUD/SCE/003', mDdoTransactionDate: '26-Sep-2019 15:48', mStatus: '-'
  },
];
@Component({
  selector: 'app-new-item-merged-items',
  templateUrl: './new-item-merged-items.component.html',
  styleUrls: ['./new-item-merged-items.component.css']
})
export class NewItemMergedItemsComponent implements OnInit {

  mergedDataSource = new MatTableDataSource(MERGED_DATA);
  mergedColumns: string[] = [
    'mCheckbox', 'mDdoName', 'mItemCategory', 'mItemName', 'mWriteUpEn', 'mDdoProposedAmt',
    'mDdoReferenceNo', 'mDdoTransactionDate', 'mStatus'
  ];

  mCheckbox: Boolean = false;
  isUnMergeEnable: Boolean = false;

  constructor(
    public dialogRef: MatDialogRef<NewItemMergedItemsComponent>,
    private _bottomSheet: MatBottomSheet,
    @Inject(MAT_DIALOG_DATA) public data: ItemMergedDialog) {
    // Update view with given values
    // this.title = data.title;
    // this.message = data.message;
  }

  ngOnInit() {
  }

  mergeRecord(){
    
  }
  onConfirm(): void {
    // Close the dialog, return true
    this.dialogRef.close(true);
  }

  onDismiss(): void {
    // Close the dialog, return false
    this.dialogRef.close(false);
  }

  checkboxMergeValueChange() {
    let cnt = 0;
    this.mergedDataSource.data.forEach((element, index) => {
      if (element['mCheckbox']) {
        cnt++;
      }
    });
    this.isUnMergeEnable = (cnt > 0) ? true : false;
  }

  selectMergedAll() {
    this.mergedDataSource.data.forEach(obj => {
      if (this.mCheckbox) {
        obj.mCheckbox = true;
      } else {
        obj.mCheckbox = false;
      }
    });
    this.isUnMergeEnable = this.mCheckbox;
  }

  openBottomSheet(): void {
    // tslint:disable-next-line: no-use-before-declare
    this._bottomSheet.open(BottomWriteUpComponent);
  }
}


@Component({
  selector: 'app-bottom-sheet-overview-example-sheet',
  templateUrl: 'bottom-sheet-overview-example-sheet.html',
})

export class BottomWriteUpComponent {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomWriteUpComponent>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
