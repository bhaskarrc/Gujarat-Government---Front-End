
import { MatTableDataSource } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { receiptManagement } from 'src/app/common/error-message/common-message.constants';
import { Router } from '@angular/router';
import { ListValue } from 'src/app/model/common-grant';
import { ChallanPreparationAtCounter } from 'src/app/model/receipt-management';

@Component({
  selector: 'app-challan-preparation-at-counter',
  templateUrl: './challan-preparation-at-counter.component.html',
  styleUrls: ['./challan-preparation-at-counter.component.css']
})
export class ChallanPreparationAtCounterComponent implements OnInit {
  challanPreparationForm: FormGroup;
  // date
  maxDate = new Date();
  // variables
  isPaymentMode = false;
  isSubmitted = false;
  isPayment = true;
  showSubDeposit = false;
  errorMessages = receiptManagement;
  isSelectedDeposite = false;
  isSelectedReceipt = true;
  isSelected1 = true;
  isSelected2 = false;
  isInputEdpCode = true;
  isDelete = false;
  isSelectedCheque = false;
  isSelectedDD = false;
  isSelectedPostalOrder = false;
  // form controls
  challanTypeCtrl: FormControl = new FormControl();
  depositTypeCtrl: FormControl = new FormControl();
  minorHeadCtrl: FormControl = new FormControl();
  subHeadCtrl: FormControl = new FormControl();
  paymentModeCtrl: FormControl = new FormControl();
  purposeCtrl: FormControl = new FormControl();
  pCodeCtrl: FormControl = new FormControl();
  depositType1Ctrl: FormControl = new FormControl();
  subDepositTypeCtrl: FormControl = new FormControl();
  // lists
  minorHead_list: ListValue[] = [
    { value: '1', viewValue: '101' },
    { value: '2', viewValue: '102' }
  ];

  depositType_list: ListValue[] = [
    { value: '1', viewValue: 'Ready Built House' },
    { value: '2', viewValue: 'Construction' },
    { value: '3', viewValue: 'Loan Purchase And Construction' },
    { value: '4', viewValue: 'Construction' },
    { value: '5', viewValue: 'Others' },
  ];

  subHead_list: ListValue[] = [
    { value: '1', viewValue: '01' },
    { value: '2', viewValue: '02' }
  ];

  paymentMode_list: ListValue[] = [
    { value: '1', viewValue: 'Cash' },
    { value: '2', viewValue: 'Cheque' },
    { value: '3', viewValue: 'Postal Order' },
    { value: '4', viewValue: 'Demand Draft' }
  ];
  purpose_list: ListValue[] = [
    { value: '1', viewValue: 'Value Added Tax' },
    { value: '2', viewValue: 'Central Sales Tax' },
    { value: '3', viewValue: 'Entry Tax' },
  ];

  purpose: ListValue[] = [
    { value: '1', viewValue: 'Tax under rule 13' },
    { value: '2', viewValue: 'Penalty' },
    { value: '3', viewValue: 'Interest' },

  ];
  challanType_list: ListValue[] = [
    { value: '1', viewValue: 'Receipt' },
    { value: '2', viewValue: 'Deposit' },

  ];
  deposit1Type_list: ListValue[] = [
    { value: '1', viewValue: 'PD/PLA' },
    { value: '2', viewValue: 'EMD' },

  ];

  purposeForDeposit_list: ListValue[] = [
    { value: '1', viewValue: 'Security Deposit' }
  ];

  subDeposit_list: ListValue[] = [
    { value: '1', viewValue: 'SD' },
    { value: '2', viewValue: 'RD' },
    { value: '3', viewValue: 'TD' },
    { value: '4', viewValue: 'WDPB' }
  ];
  subDepositDetial_list: ListValue[] = [
    { value: '1', viewValue: 'Security Deposit' },
    { value: '2', viewValue: 'Revenue Deposit' },
    { value: '3', viewValue: 'Tenancy Deposit' },
    { value: '4', viewValue: 'Work Done Public Body' }
  ];
  // table data
  Element_Data: ChallanPreparationAtCounter[] = [
    {
      pCode: '',
      pCode1: '',
      mjrHead: '000',
      subMjrHead: '000',
      mrHead: '00',
      subHead: '00',
      amt: '',
    },
  ];
  dataSourceClhallanPre = new MatTableDataSource<ChallanPreparationAtCounter>(this.Element_Data);
  displayedColumnschallnPreListing: string[] = [
    'pCode',
    'mjrHead',
    'subMjrHead',
    'mrHead',
    'subHead',
    'amt',
    'action',
  ];
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.challanPreparationForm = this.fb.group({
      purposeCode: [''],
      fromDate: [''],
      toDate: [''],
      cType: [''],
      role: [''],
      postalOrder: [''],
      userName: [''],
      payerName: [''],
      date: [''],
      email: [''],
      phone: [''],
      pdpla: [''],
      depositType: [''],
      minorHead: [''],
      subHead: [''],
      paymentMode: [''],
      order: [''],
      remarks: [''],
      mjrHead: [''],
      pCode: [''],
      pCode1: [''],
      chequeNo: [''],
      subMjrHead: [''],
      monorHead: [''],
      mrHead: [''],
      ddNo: [''],
      subDepositType: [''],
      purposeDescription: [''],
      depositType1: ['']
    });
  }

  // selects payment mode
  selectPaymentMode(type) {
    switch (type) {
      case '2':
        this.isSelectedPostalOrder = false;
        this.isSelectedCheque = true;
        this.isSelectedDD = false;
        break;
      case '3':
        this.isSelectedPostalOrder = true;
        this.isSelectedCheque = false;
        this.isSelectedDD = false;
        break;
      case '4':
        this.isSelectedPostalOrder = false;
        this.isSelectedCheque = false;
        this.isSelectedDD = true;
        break;
      default:
        this.isSelectedPostalOrder = false;
        this.isSelectedDD = false;
        this.isSelectedCheque = false;
    }

  }
  // clear form
  clearForm() {
    this.challanPreparationForm.reset();
  }

  // save form
  onSave() {
    if (this.challanPreparationForm.valid) {
      this.isSubmitted = false;
    } else {
      this.isSubmitted = true;
    }

  }

  // patches form value on selection of challan type
  selectChallan1(type) {
    if (type === 'Tax under rule 13') {
      this.challanPreparationForm.patchValue({
        mjrHead: '0040',
        subMjrHead: '00',
        mrHead: '101',
        subHead: '01',

      });
    } else if (type === 'Penalty') {
      this.challanPreparationForm.patchValue({

        mjrHead: '0040',
        subMjrHead: '00',
        mrHead: '101',
        subHead: '01',
      });
    } else if (type === 'Interest') {
      this.challanPreparationForm.patchValue({
        mjrHead: '0040',
        subMjrHead: '00',
        mrHead: '101',
        subHead: '02',
      });
    } else {
      this.challanPreparationForm.patchValue({
        mjrHead: '8043',
        subMjrHead: '00',
        mrHead: '101',
        subHead: '01',
      });
    }
  }

  // sets variable value
  selectChallanType(type) {
    if (type === '2') {
      this.isSelectedReceipt = false;
      this.isSelectedDeposite = true;
    } else if (type === '1') {
      this.isSelectedReceipt = true;
      this.isSelectedDeposite = false;
    }

  }

  // patches form value on selection of deposit type
  selectDepositType(type) {
    if (type === '1') {
      this.showSubDeposit = false;
      this.isSelected2 = true;
    } else if (type === '2') {
      this.showSubDeposit = true;
      this.isSelected2 = true;
    }
  }

  // selects sub deposit
  selectSubDeposit(type) {
    console.log(type);
    switch (type) {
      case '1': this.challanPreparationForm.patchValue({
        purposeDescription: '1',
        mjrHead: '8443',
        subMjrHead: '00',
        mrHead: '101',
        subHead: '01'
      }); break;
      case '2': this.challanPreparationForm.patchValue({
        purposeDescription: '2',
        mjrHead: '8443',
        subMjrHead: '00',
        mrHead: '101',
        subHead: '02'
      }); break;
      case '3': this.challanPreparationForm.patchValue({
        purposeDescription: '3',
        mjrHead: '8443',
        subMjrHead: '00',
        mrHead: '103',
        subHead: '00'
      }); break;
      case '4': this.challanPreparationForm.patchValue({
        purposeDescription: '4',
        mjrHead: '8443',
        subMjrHead: '00',
        mrHead: '117',
        subHead: '01'
      }); break;
    }
  }
  // patches form value on selection of challan type
  selectChallan(type) {
    if (type === 2 || type === 3) {
      this.isPayment = false;
      this.isPaymentMode = true;
    } else if (type === 1) {
      this.isPayment = true;
      this.isPaymentMode = false;
    }
  }

  // adds leave
  addLeave() {
    const p_data = this.dataSourceClhallanPre.data;
    this.isInputEdpCode = false;
    this.isDelete = true;
    p_data.push({
      pCode: '',
      pCode1: '',
      mjrHead: '000',
      subMjrHead: '00',
      mrHead: '00',
      subHead: '00',
      amt: '0.00'
    });
    this.dataSourceClhallanPre.data = p_data;
  }

  // deletes expenditure record
  deletExpenditureRow(index) {
    this.dataSourceClhallanPre.data.splice(index, 1);
    this.dataSourceClhallanPre = new MatTableDataSource(
      this.dataSourceClhallanPre.data
    );
  }
  // calculates total  exp amount
  totalExpeAmount(): number {
    let amountExp = 0;
    this.dataSourceClhallanPre.data.forEach((element) => {
      amountExp = amountExp + Number(element.amt);
    });
    return amountExp;
  }
  // sets amount in words
  totalExpeAmountWords(): string {
    const amountExp = 'Ten Thousand Only';

    return amountExp;
  }

  // routing
  gotoListing() {
    this.router.navigate(['./receipt-management/challan-preparation-at-counter-listing']);
  }

}

