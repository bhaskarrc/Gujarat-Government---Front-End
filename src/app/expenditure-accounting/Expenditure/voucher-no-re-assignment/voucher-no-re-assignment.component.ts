
import { MatTableDataSource, MatDialog } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { eaMessage } from 'src/app/common/error-message/common-message.constants';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { SaveDialogBoxComponent } from '../../save-dialog-box/save-dialog-box.component';
import { CloseDialogBoxComponent } from '../../close-dialog-box/close-dialog-box.component';
import { EaDirectives } from 'src/app/common/directive/ea-directive';
@Component({
  selector: 'app-voucher-no-re-assignment',
  templateUrl: './voucher-no-re-assignment.component.html',
  styleUrls: ['./voucher-no-re-assignment.component.css']
})
export class VoucherNoReAssignmentComponent implements OnInit {
  directiveObject = new EaDirectives(this._dialog);
  isSelectedHead = false;
  initiatiomdate = new Date((new Date()));
  // FormGroup
  voucherNoReAssigForm: FormGroup;
  maxDate = new Date();
  // FormControl
  majorHeadCtrl: FormControl = new FormControl();
  subMajorHeadCtrl: FormControl = new FormControl();
  minorHeadCtrl: FormControl = new FormControl();
  subHeadCtrl: FormControl = new FormControl();
  distributeToCtrl: FormControl = new FormControl();
  subTreasuryCtrl: FormControl = new FormControl();

  isSubmitted = false;
  errorMessages = eaMessage;
  // List values
  subTreasury_list: any[] = [
    { value: '1', viewValue: 'Sub Treasury Office 1' },
    { value: '2', viewValue: 'Sub Treasury Office 2' }
  ];

  distribute_list: any[] = [
    { value: '1', viewValue: 'Pratik K Shah' },
    { value: '2', viewValue: 'Mr. YOGIRAJ KISHORSINGH JADEJA' }
  ];

  majorHead_list: any[] = [
    { value: '1', viewValue: '8009 : State Provident Funds' },
    { value: '2', viewValue: '2054 : Treasury and Accounts Administration' }
  ];

  subMajorHead_list: any[] = [
    { value: '1', viewValue: '00' }
  ];

  minorHead_list: any[] = [
    { value: '1', viewValue: '097 : Pay and Accounts Offices ' }
  ];

  subHead_list: any[] = [
    { value: '1', viewValue: '01 : Pay and Accounts offices' }
  ];
  // Display Element Data
  Element_Data: any[] = [
    {
      billType: 'Bill of widthdrawal of final/other(other Than Class-4)',
      grossAmmount: '15000.00',
      netAmount: '15000.00',
      voucherDate: '21-Aug-2019',
      newVoucherNo: '3',
      majorHead: '8009',
      voucehrNo: '1001',
      amount: '200.00',
      distribute: 'Pratik K Shah',
      distributeTo: ''
    },
  ];
  // Table Source
  dataSource = new MatTableDataSource<any>(this.Element_Data);
  // Display Columns
  displayedColumns: any[] = ['srNo', 'voucehrNo', 'billType', 'grossAmmount', 'netAmount', 'voucherDate', 'majorHead', 'newVoucherNo'];
  constructor(private fb: FormBuilder, private _dialog: MatDialog) { }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.voucherNoReAssigForm = this.fb.group({
      // FormGroup Fields
      fromDate: [''],
      toDate: [''],
      subTreasury: [''],
      treasuryCode: [''],
      distributeTo: ['1'],
      majorHead: [''],
      subMajorHead: [''],
      minorHead: [''],
      subHead: [''],
      totalVouchers: ['1'],
      totalGrossAmmount: ['150000.00'],
      totalNetAmount: ['150000.00'],
      lastVoucherNumberUsed: ['2']
    });

  }
  // function to select major head
  selectHead(type) {
    if (type === 1) {
      this.isSelectedHead = true;
    } else {
      this.isSelectedHead = false;
    }
  }

  // function to clear form
  clearForm() {
    this.voucherNoReAssigForm.reset();
  }
  // function to delete row from table
  deleteEntry(element) {
    this.dataSource.data.splice(element, 1);
    this.dataSource = new MatTableDataSource(this.dataSource.data);

  }

  onSave() {
    if (this.voucherNoReAssigForm.valid) {
      this.isSubmitted = false;
      this.isSubmitted = false;
      const dialogRef = this._dialog.open(SaveDialogBoxComponent, {
        width: '500px'
      });

      dialogRef.afterClosed().subscribe(data => {

      });
    } else {
      this.isSubmitted = true;
    }
  }
}
