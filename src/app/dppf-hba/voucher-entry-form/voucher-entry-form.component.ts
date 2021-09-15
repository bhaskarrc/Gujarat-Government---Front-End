import { VoucherDetails, ChallanDetails } from './../../model/dppf-hba';
import { CommonListing } from 'src/app/model/common-listing';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { InwardNoDialogComponent } from '../inward-no-dialog/inward-no-dialog.component';
import { dppfHbaMessage } from 'src/app/common/error-message/common-message.constants';
import { InwardDetailsDialogComponent } from './inward-details-dialog/inward-details-dialog.component';
import { SelectionModel } from '@angular/cdk/collections';
import { ListingDialogComponent } from '../listing-dialog/listing-dialog.component';



@Component({
  selector: 'app-voucher-entry-form',
  templateUrl: './voucher-entry-form.component.html',
  styleUrls: ['./voucher-entry-form.component.css']
})
export class VoucherEntryFormComponent implements OnInit {
  // Form Group
  voucherForm: FormGroup;
  // VAriable
  isSubmitted;
  // Date
  todayDate = Date.now();
  maxDate = new Date();
  public errorMessages;
  // Control
  headCtrl: FormControl = new FormControl();
  // List
  head_list: CommonListing[] = [
    { value: '1', viewValue: '2009' },
    { value: '2', viewValue: '2010' },
    { value: '3', viewValue: '2011' },
    { value: '4', viewValue: '2012' },
    { value: '5', viewValue: '2013' },
    { value: '6', viewValue: '2014' },
    { value: '7', viewValue: '2015' },
    { value: '8', viewValue: '2016' },
    { value: '9', viewValue: '2017' },

  ];
  credit_list: CommonListing[] = [
    { value: '1', viewValue: 'Credit' },
    { value: '2', viewValue: 'Debit' }
  ];

  year_list: CommonListing[] = [
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
  month_list: CommonListing[] = [
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

  Element_Data: [VoucherDetails] = [
    {
      voucherNo: '',
      cardexNo: '',
      ddo: '',
      amount: '',
    },
  ];

  Element_Data2: ChallanDetails[] = [

  ];

  voucherNoDisabled = false;
  recoveryColumn = ['voucherNo', 'cardexNo', 'ddo', 'amount', 'select', 'action'];
  recoveryDataSource = new MatTableDataSource(this.Element_Data);
  recoveryColumnChallan = ['voucherNo', 'challanNo', 'challanAmount', 'remainingAmount', 'amount', 'action'];
  recoveryDataSourceChallan = new MatTableDataSource(this.Element_Data2);
  totalRemainingAmount = null;
  selection = new SelectionModel<any>(true, []);

  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder) { }
  ngOnInit() {
    this.errorMessages = dppfHbaMessage;
    this.voucherData();
  }
  voucherData() {
    this.voucherForm = this.fb.group({
      inwardNo: [''],
      inwardDate: [{ value: '', disabled: true }],
      treasuryPao: [{ value: '', disabled: true }],
      hbaMca: [{ value: '', disabled: true }],
      tcChallanAMount: [{ value: '', disabled: true }],
      tcAmount: [{ value: '', disabled: true }],
      challanAmount: [{ value: '', disabled: true }],
      voucherAmount: [{ value: '', disabled: true }],
      amount: [{ value: '', disabled: true }],
      credir: [{ value: '', disabled: true }],
      year: [{ value: '', disabled: true }],
      month: [{ value: '', disabled: true }],
      total: [{ value: '', disabled: true }],
      majorHeadAmount: [{ value: '', disabled: true }],
      majorHead: [{ value: '', disabled: true }],
      head: [''],
      headAmount: [{ value: '', disabled: true }],
    });
  }
  // cardex no
  cardexNo() {
    const dialogRef = this.dialog.open(InwardDetailsDialogComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  // inward no Popup
  inwardNo(): void {
    const dialogRef = this.dialog.open(InwardNoDialogComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.voucherForm.patchValue({

        inwardNo: '11/02230/3456',
        inwardDate: '05-JUL-2020',
        treasuryPao: 'District Treasury Office, Gandhinagar',
        year: '2009',
        month: 'Jan',
        credir: 'Debit',
        tcChallanAMount: 'Voucher',
        majorHead: '8009',
        majorHeadAmount: '200000',
        head: '1',
        headAmount: '200000',
        hbaMca: 'HBA'
      });

    });
  }
  onClickListing() {
    const dialogRef = this.dialog.open(ListingDialogComponent, {
      width: '300px',
      height: 'auto',
      data: ''
    }
    );
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result === 'No') {
        this.navigate();
      }
    });
  }
  // navigate route
  navigate() {
    this.router.navigate(['./dppf-hba/voucher-entry-listing']);
  }

  enterInwardNo() {
    this.voucherForm.patchValue({

      inwardNo: '11/02230/3456',
      inwardDate: new Date('05/07/2020'),
      treasuryPao: 'District Treasury Office, Gandhinagar',
      year: '2009',
      month: 'Jan',
      credir: 'Debit',
      tcChallanAMount: 'Voucher',
      majorHead: '8009',
      majorHeadAmount: '200000',
      head: '1',
      headAmount: '200000',
      hbaMca: 'HBA'
    });

  }

  recoveryData() {
    const Col_Data = this.recoveryDataSource.data,
      self = this;
    Col_Data.push({

      voucherNo: '',
      cardexNo: '',
      ddo: '',
      amount: '',
    });
    Col_Data.splice(this.recoveryDataSource.data.length - 2, 1);
    this.recoveryDataSource.data = Col_Data;
    setTimeout(() => { document.getElementById('amount-' + Col_Data.length).focus(); }, 0);
  }

  enterDdoName(element, index) {
    this.Element_Data[index].ddo = 'District Treasury Officer,DISTRICT TREASURY OFFICE Ahmedabad';
    this.recoveryDataSource = new MatTableDataSource(this.Element_Data);
  }

  totalRecovery(): number {
    let amount = 0;
    this.recoveryDataSource.data.forEach((element) => {
      amount = amount + Number(element.amount);
    });
    return amount;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.recoveryDataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.recoveryDataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: any): string {

    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  addRecoveryDetailRow() {
    const push_data = this.recoveryDataSource.data;
    push_data.push({
      voucherNo: '',
      cardexNo: '',
      ddo: '',
      amount: '',

    });
    this.recoveryDataSource.data = push_data;
  }

  deleteRowRecovery(index) {
    this.recoveryDataSource.data.splice(index, 1);
    this.recoveryDataSource = new MatTableDataSource(
      this.recoveryDataSource.data
    );
  }

  recoveryDataChallan() {
    const Col_Data = this.recoveryDataSourceChallan.data,
      self = this;
    Col_Data.push({

      voucherNo: '',
      challanNo: '',
      challanAmount: '',
      remainingAmount: '',
      amount: '',
    });
    Col_Data.splice(this.recoveryDataSourceChallan.data.length - 2, 1);
    this.recoveryDataSourceChallan.data = Col_Data;
    setTimeout(() => { document.getElementById('amount-' + Col_Data.length).focus(); }, 0);
  }

  calculateRemainingAMount(element): number {

    let remainingAmount = null;

    if (element.amount !== '' && element.challanAmount !== '' && (element.amount >= element.challanAmount)) {

      remainingAmount = Number(element.amount) - Number(element.challanAmount);
    }

    let amount = 0;
    this.recoveryDataSourceChallan.data.forEach(() => {
      amount = amount + remainingAmount;
    });
    this.totalRemainingAmount = amount;
    return remainingAmount;
  }

  totalRemainingAmountValue(): number {
    return this.totalRemainingAmount;
  }


  totalChallanAmount(): number {
    let amount = 0;
    this.recoveryDataSourceChallan.data.forEach((element) => {
      amount = amount + Number(element.challanAmount);
    });
    return amount;
  }

  totalRecoveryChallan(): number {
    let amount = 0;
    this.recoveryDataSourceChallan.data.forEach((element) => {
      amount = amount + Number(element.amount);
    });
    return amount;
  }

  addRecoveryDetailRowChallan(index) {
    const push_data = this.recoveryDataSourceChallan.data;
    push_data.push({
      voucherNo: this.recoveryDataSourceChallan.data[this.recoveryDataSourceChallan.data.length - 1].voucherNo,
      challanNo: '',
      challanAmount: '',
      remainingAmount: '',
      amount: '',

    });
    this.recoveryDataSourceChallan.data = push_data;
  }

  deleteRowRecoveryChallan(index) {
    this.recoveryDataSourceChallan.data.splice(index, 1);
    this.recoveryDataSourceChallan = new MatTableDataSource(
      this.recoveryDataSourceChallan.data
    );
  }


  onCheck(event, element, index) {

    console.log(index);
    console.log(element);

    if (element.voucherNo) {
      if (event.checked && element.voucherNo) {
        this.Element_Data2.splice(index, 1, {
          voucherNo: element.voucherNo,
          challanNo: '',
          challanAmount: '',
          remainingAmount: '',
          amount: element.amount,
        });
        this.recoveryDataSourceChallan = new MatTableDataSource(this.Element_Data2);

      } else {
        this.Element_Data2.splice(index, 1, {
          voucherNo: '',
          challanNo: '',
          challanAmount: '',
          remainingAmount: '',
          amount: '',
        });

        this.recoveryDataSourceChallan = new MatTableDataSource(this.Element_Data2);
      }
    }

  }

  voucherNoHidden(element) {
    if (element.voucherNo) {
      element.voucherNoDisabled = true;
    }
  }
}
