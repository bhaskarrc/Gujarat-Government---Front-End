import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { eaMessage } from 'src/app/common/error-message/common-message.constants';
import { ListValue } from 'src/app/model/common-grant';
import { ChequeDetails } from 'src/app/model/ddo-forms';

@Component({
  selector: 'app-voucher-and-stamp-commission',
  templateUrl: './voucher-and-stamp-commission.component.html',
  styleUrls: ['./voucher-and-stamp-commission.component.css']
})
export class VoucherAndStampCommissionComponent implements OnInit {

  // date
  todayDate = new Date();
  maxDate = new Date();

  // FormGroup
  voucherStampComission: FormGroup;

  // FormControl
  demandCtrl: FormControl = new FormControl();
  majorHeadCtrl: FormControl = new FormControl();
  subMajorHeadCtrl: FormControl = new FormControl();
  minorHeadCtrl: FormControl = new FormControl();
  subHeadCtrl: FormControl = new FormControl();
  detailHeadCtrl: FormControl = new FormControl();
  isSubmitted = false;
  errorMessages = eaMessage;

  // List values
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

  // Display Element Data
  expenditure_data: any[] = [{
    edpCode: '',
    description: 'Pay Of Officers',
    budgetCode: '0101',
    amount: '44073.00'
  }];
  recoveryDetail_data: any[] = [{
    description: 'Pay Of Officers',
    budgetCode: '0101',
    amount: '44073.00'

  }];
  receipt_data: any[] = [{
    dedType: 'A',
    majorHead: '0030',
    subMajorHead: '02',
    minorHead: '102',
    subHead: '00',
    amount: '44073.00'

  }];
  amount_data: any[] = [{

  }];
  chequeTypeList: any[] = [{
    value: '1', viewValue: 'C0'
  }
  ];
  chequeList: ListValue[] = [
    { value: '1', viewValue: 'Party Cheque' },
    { value: '2', viewValue: 'DDO Cheque' }
  ];

  // Table Source
  receiptDataSource = new MatTableDataSource<any>(this.receipt_data);
  expenditureDataSource = new MatTableDataSource<any>(this.expenditure_data);
  recoveryDataSource = new MatTableDataSource<any>(this.recoveryDetail_data);
  amountDataSource = new MatTableDataSource<any>(this.amount_data);

  // Display Columns
  expenditureDisplayColumns: string[] = ['edpCode', 'description', 'budgetCode', 'amount'];
  recoveryDisplayColumns: string[] = ['edpCode', 'description', 'budgetCode', 'amount'];
  receiptDisplayColumns: string[] = ['edpCode', 'dedType', 'majorHead', 'subMajorHead', 'minorHead', 'subHead', 'amount'];
  amountDisplayColumns: string[] = ['deductionA', 'deductionB', 'expenditure', 'recovery'];
  checkColumn: string[] = ['chequeType', 'chequeAmount', 'action'];
  checkList: any[] = [
    {
      chequeType: 'Vendor Name',
      chequeAmount: '0.00',
    }
  ];
  checkDataSource = new MatTableDataSource<any>(this.checkList);


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.voucherStampComission = this.fb.group({
      // FormGroup Fields
      cardexNo: [{ value: '1', disabled: true }],
      voucherNo: [''],
      ddoName: [{ value: 'District Treasury Office,Gandhinagar', disabled: true }],
      voucherDate: [''],
      grossAmount: [{ value: '44073.00', disabled: true }],
      netAmount: [{ value: '0.00', disabled: true }],
      typeOfStamp: [{ value: 'Non Judicial Stamp', disabled: true }],
      demand: [{ value: '999', disabled: true }],
      majorHead: [{ value: '0030', disabled: true }],
      subMajorHead: [{ value: '02', disabled: true }],
      minorHead: [{ value: '102', disabled: true }],
      subHead: [{ value: '00', disabled: true }],
      detailHead: [{ value: '00', disabled: true }],
      expenditureMajorHead: [{ value: '2030', disabled: true }],
    });
  }

  // function to clear form
  clearForm() {
    this.voucherStampComission.reset();
  }

  onSave() {
    if (this.voucherStampComission.valid) {
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

  // get total amount
  getTotalAmount(): number {
    let chequeAmount = 0;
    this.checkDataSource.data.forEach(element1 => {
      chequeAmount = chequeAmount + Number(element1.chequeAmount);
    });
    return chequeAmount;
  }

  // add new row in payment type cheque
  addNewRow() {
    const p_data = this.checkDataSource.data;
    p_data.push({
      chequeType: 'Vendor Name',
      chequeAmount: '0.00',
    });
    this.checkDataSource.data = p_data;
  }

  // remove row from cheque details and gtr-details
  addDeleteChequekDataRow(index) {
    this.checkDataSource.data.splice(index, 1);
    this.checkDataSource = new MatTableDataSource(this.checkDataSource.data);
  }

}
