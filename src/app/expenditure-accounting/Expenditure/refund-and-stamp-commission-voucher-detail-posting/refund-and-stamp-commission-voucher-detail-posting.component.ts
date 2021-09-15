
import { MatTableDataSource } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { eaMessage } from 'src/app/common/error-message/common-message.constants';


@Component({
  selector: 'app-refund-and-stamp-commission-voucher-detail-posting',
  templateUrl: './refund-and-stamp-commission-voucher-detail-posting.component.html',
  styleUrls: ['./refund-and-stamp-commission-voucher-detail-posting.component.css']
})
export class RefundAndStampCommissionVoucherDetailPostingComponent implements OnInit {
  initiatiomdate = new Date((new Date()));
  // FormGroup
  refundAndStampForm: FormGroup;
  maxDate = new Date();
  // FormControl
  subTreasuryCtrl: FormControl = new FormControl();
  subTreasuryNameCtrl: FormControl = new FormControl();
  gongoCtrl: FormControl = new FormControl();
  billCategoryCtrl: FormControl = new FormControl();
  billTypeCtrl: FormControl = new FormControl();
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
  isSubmitted = false;
  isSubTreasuryName = false;
  errorMessages = eaMessage;

  // List values
  subTreasury_list: any[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];

  subTreasuryName_list: any[] = [
    { value: '1', viewValue: 'Sub Treasury Office, Bhuj' },
    { value: '2', viewValue: 'Sub Treasury Office, Kalol' }
  ];

  billCategory_list: any[] = [
    { value: '1', viewValue: 'TC' },
    { value: '2', viewValue: 'Regular' },
    { value: '3', viewValue: 'Nil' },
    { value: '4', viewValue: 'Regular / Challan' },
  ];
  billType_list: any[] = [
    {
      value: '1',
      viewValue: 'GTR 30 Pay Bill'
    },
    {
      value: '2',
      viewValue: 'GTR 45 TA Bill'
    },
    {
      value: '3',
      viewValue: 'GTR 40 Grant In Bill'
    },
    {
      value: '4',
      viewValue: 'GTR 12 Advance Bill'
    }

  ];

  gongo_list: any[] = [
    { value: '1', viewValue: 'GO' },
    { value: '2', viewValue: 'NGO' },
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
    { value: '1', viewValue: '2054 : Treasury and Accounts Administration' }
  ];

  subMajorHead_list: any[] = [
    { value: '1', viewValue: '00' },
  ];
  minorHead_list: any[] = [
    { value: '1', viewValue: '097 : Pay and Accounts Offices ' },
  ];
  subHead_list: any[] = [
    { value: '1', viewValue: '01 : Pay and Accounts offices' },
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
    description: 'Pay Of Officers',
    budgetCode: '0101'
  }];
  recoveryDetail_data: any[] = [{
    description: 'Pay Of Officers',
    budgetCode: '0101'

  }];
  receipt_data: any[] = [{
    dedType: 'A',
    majorHead: '8009',
    subMajorHead: '01',
    minorHead: '101',
    subHead: '02',

  }];
  amount_data: any[] = [{

  }];

  // Table Source
  receiptDataSource = new MatTableDataSource<any>(this.receipt_data);
  expenditureDataSource = new MatTableDataSource<any>(this.expenditure_data);
  recoveryDataSource = new MatTableDataSource<any>(this.recoveryDetail_data);
  amountDataSource = new MatTableDataSource<any>(this.amount_data);

  // Display Columns
  expenditureDisplayColumns: any[] = ['edpCode', 'description', 'budgetCode', 'amount'];
  recoveryDisplayColumns: any[] = ['edpCode', 'description', 'budgetCode', 'amount'];
  receiptDisplayColumns: any[] = ['edpCode', 'dedType', 'majorHead', 'subMajorHead', 'minorHead', 'subHead', 'amount'];
  amountDisplayColumns: any[] = ['deductionA', 'deductionB', 'expenditure', 'recovery'];


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.refundAndStampForm = this.fb.group({
      // FormGroup Fields
      subTreasury: [''],
      subTreasuryName: [''],
      cardexNo: [''],
      voucherNo: [''],
      ddoName: [''],
      voucherDate: [''],
      grossAmount: [''],
      netAmount: [''],
      principalAmount: [''],
      incomeTax: [''],
      gongo: [''],
      billCategory: ['2'],
      billType: [''],
      headCode: [''],
      partyName: [''],
      classOfExpenditure: [''],
      fund: [''],
      budgetTypeCode: [''],
      typeOfExpenditure: [''],
      schemeNo: [''],
      demand: [''],
      majorHead: [''],
      subMajorHead: [''],
      minorHead: [''],
      subHead: [''],
      detailHead: [''],
      objectClass: [''],



    });
  }
  onSubTreasury(event) {

    if (event.value !== '1') {
      return (this.isSubTreasuryName = false);
    }
    if (event.value === '1') {
      return (this.isSubTreasuryName = true);
    }
  }
  // function to clear form
  clearForm() {
    this.refundAndStampForm.reset();
  }

  onSave() {
    if (this.refundAndStampForm.valid) {
      this.isSubmitted = false;
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
