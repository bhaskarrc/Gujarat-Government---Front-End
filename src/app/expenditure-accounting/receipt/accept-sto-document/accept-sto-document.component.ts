import { MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';
import { eaMessage } from 'src/app/common/error-message/common-message.constants';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { CloseDialogBoxComponent } from '../../close-dialog-box/close-dialog-box.component';
import { EaDirectives } from 'src/app/common/directive/ea-directive';

@Component({
  selector: 'app-retuen-dialog',
  templateUrl: './return-dialog.html',
})
// tslint:disable-next-line: component-class-suffix
export class ReturnDialog implements OnInit {
  errorMessage = eaMessage;
  notAcceptDialogForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<ReturnDialog>
  ) { }

  ngOnInit(): void {
    this.notAcceptDialogForm = this.fb.group({
      reason: [''],
    });
  }

  okClick($event?) {
    this.dialogRef.close();
  }
  onSubmit($event?) {
    if (this.notAcceptDialogForm.valid) {
      this.dialogRef.close();
    }
  }
}
@Component({
  selector: 'app-accept-sto-document',
  templateUrl: './accept-sto-document.component.html',
  styleUrls: ['./accept-sto-document.component.css']
})
export class AcceptStoDocumentComponent implements OnInit {
  directiveObject = new EaDirectives(this.dialog);
  initiatiomdate = new Date((new Date()));

  // FormGroup
  acceptStoDocumentForm: FormGroup;
  maxDate = new Date();
  selection = new SelectionModel<any>(true, []);
  errorMessages = eaMessage;
  // FormControl
  typeCtrl: FormControl = new FormControl();
  subTreasuryCtrl: FormControl = new FormControl();
  isSubmitted = false;
  isDelete = false;
  // List values
  type_list: any[] = [
    { value: '1', viewValue: 'Payments' },
    { value: '2', viewValue: 'Receipt' }
  ];

  subTreasury_list: any[] = [
    { value: '1', viewValue: 'Sub Treasury Office, Kalol, Gandhinagar' }
  ];
  // Display Element Data
  Element_Data: any[] = [
    {
      majorHead: '8782',
      voucherNo: '1',
      amount: '11406.00',
      tcAmount: '0.00',
      grossAmount: '11406.00',
    },
    {
      majorHead: '8443',
      voucherNo: '8',
      amount: '15000.00',
      tcAmount: '0.00',
      grossAmount: '15000.00',
    }

  ];
  // Table Source
  dataSource = new MatTableDataSource<any>(this.Element_Data);
  // Display Columns
  displayedColumns: any[] = ['srNo', 'majorHead', 'voucherNo', 'amount', 'tcAmount', 'grossAmount'];
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.acceptStoDocumentForm = this.fb.group({
      // FormGroup Fields
      fromDate: ['11/02/2019'],
      toDate: [''],
      type: ['2'],
      subTreasuryName: ['1'],
      remark: [''],
    });

  }
  // function to clear form
  clearForm() {
    this.acceptStoDocumentForm.reset();
  }
  add() {
    const p_data = this.dataSource.data;

    this.isDelete = true;
    p_data.push({
      majorHead: '8782',
      amountExp: '0.00'
    });
    this.dataSource.data = p_data;
  }


  delete(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource = new MatTableDataSource(
      this.dataSource.data
    );
  }

  totalExpeAmount(): number {
    let amountExp = 0;
    this.dataSource.data.forEach((element) => {
      amountExp = amountExp + Number(element.grossAmount);
    });
    return amountExp;
  }

  totaAmount(): number {
    let amt = 0;
    this.dataSource.data.forEach((element) => {
      amt = amt + Number(element.amount);
    });
    return amt;
  }

  totaTcAmount(): number {
    let amt = 0;
    this.dataSource.data.forEach((element) => {
      amt = amt + Number(element.tcAmount);
    });
    return amt;
  }

  totaVoucher(): number {
    let amt = 0;
    this.dataSource.data.forEach((element) => {
      amt = amt + Number(element.voucherNo);
    });
    return amt;
  }


  deleteEntry(element) {
    this.dataSource.data.splice(element, 1);
    this.dataSource = new MatTableDataSource(this.dataSource.data);

  }

  onSave() {
    if (this.acceptStoDocumentForm.valid) {
      this.isSubmitted = false;
    } else {
      this.isSubmitted = true;
    }

  }

  openDialogForReject() {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(ReturnDialog, {
      width: '1200px',
      height: 'auto',
    }
    );
    dialogRef.afterClosed().subscribe(result => { });
  }

}
