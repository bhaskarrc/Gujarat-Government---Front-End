import { paoMessage } from './../../../common/error-message/common-message.constants';
import { MatTableDataSource } from '@angular/material';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ListValue, ChallanDetails } from 'src/app/model/paoModel';




const ELEMENT_DATA: ChallanDetails[] = [
  {
    insertSubMajorhead: '',
    insertMajorhead: '',
    insertSubHead: '',
    amount: '',
  }
];

@Component({
  selector: 'app-challan-detail-posting',
  templateUrl: './challan-detail-posting.component.html',
  styleUrls: ['./challan-detail-posting.component.css']
})
export class ChallanDetailPostingComponent implements OnInit {
  // Variable
  isSubmitted: boolean = false;
  errorMessages = paoMessage;
  // Form Group
  challanDetailForm: FormGroup;
  // Form COntrol
  challanTypeCtrl: FormControl = new FormControl();
  demandCtrl: FormControl = new FormControl();
  majorHeadCtrl: FormControl = new FormControl();
  insertMinorheadCtrl: FormControl = new FormControl();
  insertSubMajorheadCtrl: FormControl = new FormControl();
  insertSubHeadCtrl: FormControl = new FormControl();
  submajorHeadCtrl: FormControl = new FormControl();
  bankCtrl: FormControl = new FormControl();
  // Date
  maxDate = new Date();
  // List
  challanType_list: ListValue[] = [
    { value: '1', viewValue: 'LC' },
    { value: '1', viewValue: 'MajorHead 8009 / 8011 / 8658 / 7610' },
    { value: '1', viewValue: 'NPS' },
    { value: '1', viewValue: 'Others' },
    { value: '1', viewValue: 'Professional Tax' },
    { value: '1', viewValue: 'RTO Tax' },
    { value: '1', viewValue: 'SalesTax' },
    { value: '1', viewValue: 'Stamp' },
    { value: '1', viewValue: 'Vat Tax' }
  ];

  subMajorHead_list: ListValue[] = [
    { value: '1', viewValue: '00' }
  ];

  demand_list: ListValue[] = [
    { value: '1', viewValue: '017:Treasury and Accounts Administration' }
  ];


  majorHead_list: ListValue[] = [
    { value: '1', viewValue: '3451:Secretariat-Economic Services' },
    {
      value: '2', viewValue: '5475:Capital Outlay on other General Economics Services'
    },
    { value: '3', viewValue: '2401:Crop Husbandry' },
    { value: '4', viewValue: '2071:Pensions and Other Retirement Benefits' },
    { value: '5', viewValue: '2058:Stationery and Printing' },
    { value: '6 : Secretariat-Social Services', viewValue: '2251 : Secretariat-Social Services' },
    { value: '7 : Interest Payments', viewValue: '2049 : Interest Payments' },
    { value: '8 : Water Supply and Sanitation', viewValue: '2215 : Water Supply and Sanitation' },
    { value: '9 : Ecology and Environment', viewValue: '3435 : Ecology and Environment' },
    { value: '10 : Capital Outlay on Urban Development', viewValue: '4217 : Capital Outlay on Urban Development' },
    { value: '11 : General Education', viewValue: '2202 : General Education' },
  ];


  minorHead_list: ListValue[] = [
    { value: '1', viewValue: '097 : Pay and Accounts Offices ' },
  ];

  subHead_list: ListValue[] = [
    { value: '1', viewValue: '01 : Pay and Accounts offices' }
  ];

  bank_list: ListValue[] = [
    { value: '1', viewValue: 'Bank Of Baroda' },
    { value: '2', viewValue: 'State Bank Of India' }
  ];
  // able Source
  insertDisplayedColumns: string[] = ['srNo', 'insertSubMajorheads', 'insertMinorheads', 'insertSubHeads', 'insertAmount', 'action'];
  insertDataSource = new MatTableDataSource<any>(ELEMENT_DATA);

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.challanDetailForm = this.fb.group({
      bwMajorHeadTotal: [''],
      total: [''],
      receiptNo: [''],
      totalByUser: [''],
      receivedByBankDate: [''],
      scrollDate: [''],
      challanType: [''],
      branchCode: [''],
      bank: [''],
      branch: [''],
      demand: [''],
      majorHead: [''],
      partyName: [''],
      challanValue: [''],
      insertMinorhead: [''],
      insertSubMajorhead: [''],
      insertSubHead: [''],
      insertAmount: [''],
      submajorHead: [''],
      cardex: [''],
    });
  }

  decimalKeyPress(event: any) {
    const pattern = /^\d+(\.\d{0,2})?$/;
    const inputChar = String.fromCharCode(
      !event.charCode ? event.which : event.charCode
    );
    let tempstr = event.target.value;
    tempstr += inputChar;
    if (!pattern.test(tempstr)) {
      event.preventDefault();
      return false;
    }
  }


  totalExpeAmount(): number {
    let amountExp = 0;
    this.insertDataSource.data.forEach((element) => {
      amountExp = amountExp + Number(element.insertAmount);
    });
    return amountExp;
  }

  isDelete = false;
  add() {
    const p_data = this.insertDataSource.data;

    this.isDelete = true;
    p_data.push({
      budgetCode: '',
      description: '',
      edpCode: '',
      amountExp: '0.00'
    });
    this.insertDataSource.data = p_data;
  }

  delete(index) {
    this.insertDataSource.data.splice(index, 1);
    this.insertDataSource = new MatTableDataSource(
      this.insertDataSource.data
    );
  }
  goToDashboard() {

  }
  branchCode(inputBranchCode) {

    if (inputBranchCode == 1000) {
      this.challanDetailForm.patchValue({
        bank: '1',
        branch: 'Vidhansabha',
      });
    }

    if (inputBranchCode == 12000) {
      this.challanDetailForm.patchValue({
        bank: '2',
        branch: 'Medical Campus',
      });
    }
  }
  bankChange(inputBank) {
    if (inputBank.value == 1) {
      this.challanDetailForm.patchValue({
        branchCode: '1000',
        branch: 'Vidhansabha',
      });
    }

    if (inputBank.value == 2) {
      this.challanDetailForm.patchValue({
        branchCode: '12000',
        branch: 'Medical Campus',
      });
    }
  }

  onSave() {
    if (this.challanDetailForm.valid) {
      this.isSubmitted = false;
    }
    else {
      this.isSubmitted = true;
    }

  }


}
