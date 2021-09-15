

import { MatTableDataSource, MatDialog } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { eaMessage } from 'src/app/common/error-message/common-message.constants';
import { SaveDialogBoxComponent } from '../../save-dialog-box/save-dialog-box.component';

@Component({
  selector: 'app-ex-voucher-detail-posting-update',
  templateUrl: './ex-voucher-detail-posting-update.component.html',
  styleUrls: ['./ex-voucher-detail-posting-update.component.css']
})
export class ExVoucherDetailPostingUpdateComponent implements OnInit {
  // FormGroup
  refundAndStampUpdateForm: FormGroup;
  maxDate = new Date();
  initiatiomdate = new Date((new Date()));
  isSubmitted = false;
  isSubTreasuryName = false;
  errorMessages = eaMessage;

  // FormControl
  billTypeCtrl: FormControl = new FormControl();
  subTreasuryNameCtrl: FormControl = new FormControl();
  classOfExpenditureCtrl: FormControl = new FormControl();
  budgetTypeCodeCtrl: FormControl = new FormControl();
  typeOfExpenditureCtrl: FormControl = new FormControl();
  demandCtrl: FormControl = new FormControl();
  majorHeadCtrl: FormControl = new FormControl();
  subMajorHeadCtrl: FormControl = new FormControl();
  minorHeadCtrl: FormControl = new FormControl();
  subHeadCtrl: FormControl = new FormControl();
  detailHeadCtrl: FormControl = new FormControl();
  objectClassCtrl: FormControl = new FormControl();
  fundCtrl: FormControl = new FormControl();


  // List values
  billType_list: any[] = [
    { value: '1', viewValue: 'Pay Bill' },
    { value: '2', viewValue: 'Simple Receipt for Online Bill' },
    { value: '3', viewValue: 'Simple Receipt for Online Bill' }
  ];

  subTreasuryName_list: any[] = [

  ];

  class_list: any[] = [
    { value: '1', viewValue: ' Voted' },
    { value: '2', viewValue: ' Charged' }
  ];
  fund_list: object[] = [
    { value: '1', viewValue: 'Consolidate' },
    { value: '2', viewValue: 'Contingency' },
    { value: '3', viewValue: 'Public Accounts' },
  ];
  budgetTypeCode_list: object[] = [
    { value: '1', viewValue: 'State' },
    { value: '2', viewValue: 'Contingency' },
  ];
  typeOfExpenditure_list: object[] = [
    { value: '1', viewValue: 'Standing Charges' },
    { value: '2', viewValue: 'Development Charges' },
  ];
  demand_list: any[] = [
    { value: '1', viewValue: '017:Treasury and Accounts Administration' }
  ];
  majorHead_list: any[] = [
    { value: '1', viewValue: '2054' }
  ];

  subMajorHead_list: any[] = [
    { value: '1', viewValue: '00' },
  ];
  minorHead_list: any[] = [
    { value: '1', viewValue: '097' },
  ];
  subHead_list: any[] = [
    { value: '1', viewValue: '01' },
  ];

  detailHead_list: any[] = [
    {
      value: '00:Agricultural and Co-operation Department',
      viewValue: '00:Agricultural and Co-operation Department'
    },
    {
      value:
        '00:PLN-10 Planning Machinery in Agriculture.and Co-Operation  Development',
      viewValue:
        '00:PLN-10 Planning Machinery in Agriculture.and Co-Operation  Development'
    },

    {
      value: '00:AGR-15 Information & Technology',
      viewValue: '00:AGR-15 Information & Technology'
    },
  ];
  objectClass_list: any[] = [{
    value: '1', viewValue: 'C0'
  },
  { value: '2', viewValue: 'C1 ' },
  { value: '3', viewValue: 'C2' },
  { value: '4', viewValue: 'C3' },
  { value: '5', viewValue: 'C4' },
  { value: '6', viewValue: 'C5' },
  { value: '7', viewValue: 'C6' },
  { value: '8', viewValue: 'C7' },
  ];
  // Display Element Data
  expenditure_data: any[] = [{
    edpCode: '0101',
    description: 'Pay Of Officers',
    budgetCode: '0101',
    amount: '1106405'

  }];
  recoveryDetail_data: any[] = [{
    description: 'Pay Of Officers',
    budgetCode: '0101'

  }];

  receipt_data: any[] = [{
    edpCode: '9531',
    dedType: 'A',
    majorHead: '8009',
    subMajorHead: '01',
    minorHead: '101',
    subHead: '02',
    amount: '24530.00'
  }];

  amount_data: any[] = [{

  }];

  // Table Source
  expenditureDataSource = new MatTableDataSource<any>(this.expenditure_data);
  receiptDataSource = new MatTableDataSource<any>(this.receipt_data);
  recoveryDataSource = new MatTableDataSource<any>(this.recoveryDetail_data);
  amountDataSource = new MatTableDataSource<any>(this.amount_data);

  // Display Columns
  expenditureDisplayColumns: any[] = ['edpCode', 'description', 'budgetCode', 'amount'];
  recoveryDisplayColumns: any[] = ['edpCode', 'description', 'budgetCode', 'amount'];
  receiptDisplayColumns: any[] = ['edpCode', 'dedType', 'majorHead', 'subMajorHead', 'minorHead', 'subHead', 'amount'];
  amountDisplayColumns: any[] = ['deductionA', 'deductionB', 'expenditure', 'recovery'];


  constructor(private fb: FormBuilder, private _dialog: MatDialog) { }

  ngOnInit() {
    this.refundAndStampUpdateForm = this.fb.group({
      // FormGroup Fields
      voucherdate: [''],
      billType: ['1'],
      tokenNo: ['2254'],
      billContNo: ['416/51/1903765'],
      billdate: [''],
      cardexNo: [''],
      voucherNo: ['1'],
      ddoName: ['District Treasury Office, DISTRICT TREASURY OFFICE BHUJ, Bhuj , Kachchha'],

      grossAmount: ['1713135.00'],
      netAmount: ['1106405.00'],
      principalAmount: ['0.00'],
      grossInterest: ['0.00'],
      incomeTax: ['0.00'],
      headCharge: ['2054000970100C1'],
      pName: [''],
      classOfExpenditure: ['1'],
      fund: ['1'],
      budgetTypeCode: ['1'],
      typeOfExpenditure: [''],
      schemeNo: ['000000'],
      demand: ['017'],
      majorHead: ['1'],
      subMajorHead: ['1'],
      minorHead: ['1'],
      subHead: ['1'],
      detailHead: ['1'],
      objectClass: ['2'],



    });
  }

  // function to clear form
  clearForm() {
    this.refundAndStampUpdateForm.reset();
  }

  onSave() {
    if (this.refundAndStampUpdateForm.valid) {
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

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

}

