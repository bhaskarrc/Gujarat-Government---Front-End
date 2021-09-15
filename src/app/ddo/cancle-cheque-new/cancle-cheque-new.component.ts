import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material';
import { ChequeInfo } from 'src/app/model/ddo-forms';
import { ListValue } from 'src/app/model/common-grant';

const ELEMENT_DATA: ChequeInfo[] = [{
  chequeAmount: '1500.00',
  accountNo: '-',
  inFavourof: 'JANK',
  chequeNo: 'PAOGNR-436287',
  chequeType: 'PARTY',
}];

const CHEQUE_ELEMENT_DATA: ChequeInfo[] = [{
  chequeAmount: '1500.00',
  accountNo: 0,
  inFavourof: 'Under secretary , General Administrative',
  chequeNo: 'PAOGNR-436287',
  chequeType: 'PARTY',
}];

@Component({
  selector: 'app-cancle-cheque-new',
  templateUrl: './cancle-cheque-new.component.html',
  styleUrls: ['./cancle-cheque-new.component.css']
})
export class CancleChequeNewComponent implements OnInit {

  // variable
  isOthers = false;

  // form group
  cancelChequeForm: FormGroup;

  // form control
  reasonNameCtrl: FormControl = new FormControl();

  // cheque preparation
  newDisplayedColumns: string[] = ['srNo', 'chequeNo', 'chequeType', 'inFavourof', 'accountNo', 'chequeAmount'];
  newDataSource = new MatTableDataSource<ChequeInfo>(ELEMENT_DATA);

  // cheque information
  chequeDisplayedColumns: string[] = ['chequeType', 'inFavourof', 'accountNo', 'chequeAmount', 'action'];
  chequeDataSource = new MatTableDataSource<ChequeInfo>(CHEQUE_ELEMENT_DATA);

  // lists
  reasonNameList: ListValue[] = [
    { value: '1', viewValue: 'Due to wrong Bunching' },
    { value: '2', viewValue: 'Bill need to b rejected' },
    { value: '3', viewValue: 'Wrongly Written' },
    { value: '4', viewValue: 'Due to printer problem' },
    { value: '5', viewValue: 'Other' },
  ];

  chequeTypeList: ListValue[] = [
    { value: '1', viewValue: 'DC' },
    { value: '2', viewValue: 'Party' }
  ];
  // lists end

  // constructor
  constructor(public dialogRef: MatDialogRef<CancleChequeNewComponent>, private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.cancelChequeForm = this.fb.group({
      reasonOfCancelation: [''],
      reasonName: [''],
      chequeTypes: ['1'],
      inFavourof: [''],
      accountNo: [''],
      chequeAmount: ['']
    });
  }

  // on reason set the value of isOthers variable value
  onReason(event) {
    if (event.value === '5') {
      this.isOthers = true;
    } else {
      this.isOthers = false;
    }
  }

  // go to dashboard
  goToDashboard(): void {
    this.dialogRef.close('no');
  }

}
