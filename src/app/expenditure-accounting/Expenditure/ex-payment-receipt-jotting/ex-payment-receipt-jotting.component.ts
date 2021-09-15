import { eaMessage } from './../../../common/error-message/common-message.constants';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatSort, MatDialog } from '@angular/material';
import { SaveDialogBoxComponent } from '../../save-dialog-box/save-dialog-box.component';
@Component({
  selector: 'app-ex-payment-receipt-jotting',
  templateUrl: './ex-payment-receipt-jotting.component.html',
  styleUrls: ['./ex-payment-receipt-jotting.component.css']
})
export class ExPaymentReceiptJottingComponent implements OnInit {

  // Display Columns
  jottongColumns: string[] = [
    'srNo',
    'scrollDate',
    'mjrHead',
    'amt',
    'tcAmt',
    'pageNo',
    'noDoc',
    'action'

  ];
  // Display Element Data
  jotting_Data: any[] = [
    {
      scrollDate: '04-Mar-2020',
      mjrHead: '3451',
      amt: '500.00',
      tcAmt: '1000.00',
      pageNo: '20',
      noDoc: '5'
    },

  ];
  // Table Source
  jottingDataSource = new MatTableDataSource<any>(this.jotting_Data);
  initiatiomdate = new Date((new Date()));
  // FormGroup
  paymentRceiptForm: FormGroup;

  isSearchJotting: Boolean = false;
  isSubmitted = false;
  isYes = true;
  @Input() max: any;
  today = new Date();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private fb: FormBuilder, private _dialog: MatDialog
  ) {
    this.today.setDate(this.today.getDate());
  }

  errorMessages = eaMessage;
  // List values
  jottingType_list: any = [
    { value: '1', viewValue: 'Payment' },
    { value: '2', viewValue: 'Receipt' }
  ];

  bank_list: any[] = [
    { value: '1', viewValue: 'Bank Of Baroda' },
    { value: '2', viewValue: 'State Bank Of India' }
  ];

  subTreasury_list: any[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];

  subTreasuryName_list: any[];

  // FormControl
  jottingCtrl: FormControl = new FormControl();
  banckCTRL: FormControl = new FormControl();
  subTreasuryCtrl: FormControl = new FormControl();
  subTreasuryNameCtrl: FormControl = new FormControl();

  ngOnInit() {
    this.paymentRceiptFormData();
  }

  paymentRceiptFormData() {

    this.jottingDataSource.paginator = this.paginator;
    this.jottingDataSource.sort = this.sort;
    this.paymentRceiptForm = this.fb.group({
      // FormGroup Fields
      jottingType: [''],
      baneName: [''],
      banvkBranch: [{ value: 'Sachivalay', disabled: true }],
      pageNo: [''],
      majorHead: [''],
      amunt: [''],
      tc: [''],
      noDoc: [''],
      branchCode: [''],
      scrollDate: [''],
      subTreasury: [''],
      subTreasuryName: [''],
      branchName: [''],
      branchCodeSearch: [''],
      scrollDateSearch: [''],
      jottingTypeSearch: ['']
    });
  }

  search() {
    this.isSearchJotting = true;
    // if (this.paymentRceiptForm.valid) {
    //   this.isSubmitted = false;
    // } else {
    //   this.isSubmitted = true;
    // }
  }
  clearForm() {

  }

  onSave() {
    if (this.paymentRceiptForm.valid) {
      console.log('hi');
      this.isSubmitted = false;
      const dialogRef = this._dialog.open(SaveDialogBoxComponent, {
        width: '500px'
      });

      dialogRef.afterClosed().subscribe(data => {
        console.log('sdsds');
      });
    } else {
      console.log('false');
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
