import { eaMessage } from './../../../common/error-message/common-message.constants';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatSort, MatDialog } from '@angular/material';
import { SaveDialogBoxComponent } from '../../save-dialog-box/save-dialog-box.component';


@Component({
  selector: 'app-ex-bank-rbd-entry',
  templateUrl: './ex-bank-rbd-entry.component.html',
  styleUrls: ['./ex-bank-rbd-entry.component.css']
})
export class ExBankRbdEntryComponent implements OnInit {

  model = {
    payment: '0.00',
    receipt: '0.00',
  };
  // Display Table Columns
  bankDetailsColumns: string[] = [
    'srno',
    'bankName',
    'receipt',
    'payment',
    'rdb',
    'desc',
    'action'

  ];
  // Display Element Data
  bankdetails_Data: any[] = [
    {
      srno: '1',
      bankName: 'State Bank Of India',
      receipt: '10000.00',
      payment: '2000.00',
      rdb: '8000.00',
      desc: 'Nothing'
    },

  ];
  // Table Source
  bankDetailsDataSource = new MatTableDataSource<any>(this.bankdetails_Data);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  isSubmitted = false;
  paymentRceiptForm: FormGroup;
  todayDate = Date.now();
  isSearchJotting: Boolean = false;
  today = new Date();
  billTypeCtrl: FormControl = new FormControl();
  initiatiomdate = new Date((new Date()));

  constructor(private fb: FormBuilder, private _dialog: MatDialog) { this.today.setDate(this.today.getDate()); }
  // List values
  bank_list: any = [
    { value: '1', viewValue: 'State Bank Of India' },
    { value: '2', viewValue: 'Bank of Baroda' },
  ];
  bank1_list: any = [
    { value: '1', viewValue: 'State Bank Of India' },
    { value: '2', viewValue: 'Bank of Baroda' },
  ];

  subTreasury_list: any[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];

  subTreasuryName_list: any[];
  bankNameCtrl: FormControl = new FormControl();
  bankName1Ctrl: FormControl = new FormControl();
  subTreasuryCtrl: FormControl = new FormControl();
  subTreasuryNameCtrl: FormControl = new FormControl();
  isYes = true;
  errorMessages = eaMessage;

  ngOnInit() {

    this.bankDetailsDataSource.paginator = this.paginator;
    this.bankDetailsDataSource.sort = this.sort;

    this.paymentRceiptForm = this.fb.group({
      // FormGroup Fields
      bankName1: ['1'],
      bankName: ['1'],
      banvkBranch: [''],
      receipt: [''],
      payment: [''],
      rbdDate: [''],
      desc: [''],
      rbd: [''],
      date: [''],
      subTreasury: [''],
      subTreasuryName: ['']
    });
  }

  // RBD value calculatiuon
  diff() {
    const p = +this.paymentRceiptForm.get('payment').value;
    const r = +this.paymentRceiptForm.get('receipt').value;
    let difference = '0.00';
    difference = parseFloat('' + (r - p)).toFixed(2);
    return difference;
  }

  search() {
    this.isSearchJotting = true;
  }
  clearForm() {

  }
  onSave() {
    if (this.paymentRceiptForm.valid) {
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

  subTreasuryValue() {
    if (this.paymentRceiptForm.value.subTreasury === '1') {
      this.isYes = false;
      this.subTreasuryName_list = [
        { value: '1', viewValue: 'Sub Treasury Office,Anjar,Bhuj' },
        { value: '2', viewValue: 'Sub Treasury Office,Bhachau,Bhuj' },
        { value: '3', viewValue: 'Sub Treasury Office,Rachpar,Bhuj' },
        { value: '4', viewValue: 'Sub Treasury Office,Mundra,Bhuj' },
        { value: '5', viewValue: 'Sub Treasury Office,Mandvi,Bhuj' },
        { value: '6', viewValue: 'Sub Treasury Office,Nalia,Bhuj' },
        { value: '7', viewValue: 'Sub Treasury Office,Dayapar,Bhuj' },
        { value: '8', viewValue: 'Sub Treasury Office,Nakhtrana,Bhuj' },
        { value: '9', viewValue: 'Sub Treasury Office,Khavaad,Bhuj' },
        { value: '10', viewValue: 'Sub Treasury Office,Gandhidham,Bhuj' }
      ];
    }
    if (this.paymentRceiptForm.value.subTreasury === '2') {
      this.isYes = true;
      this.subTreasuryName_list = [
        { value: '1', viewValue: '' },
        { value: '2', viewValue: '' },
        { value: '3', viewValue: '' },
        { value: '4', viewValue: '' },
        { value: '5', viewValue: '' },
        { value: '6', viewValue: '' },
        { value: '7', viewValue: '' },
        { value: '8', viewValue: '' },
        { value: '9', viewValue: '' },
        { value: '10', viewValue: '' }
      ];
    }
  }

}
