import { MatTableDataSource } from '@angular/material';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { eaMessage } from 'src/app/common/error-message/common-message.constants';

const ELEMENT_DATA = [{}];

@Component({
  selector: 'app-view-all-challan',
  templateUrl: './view-all-challan.component.html',
  styleUrls: ['./view-all-challan.component.css']
})
export class ViewAllChallanComponent implements OnInit {
  initiatiomdate = new Date((new Date()));
  isSubmitted = false;
  isDelete = false;
  errorMessages = eaMessage;
  maxDate = new Date();

  // FormGroup
  viewAllChallanForm: FormGroup;

  // FormControl
  challanTypeCtrl: FormControl = new FormControl();
  demandCtrl: FormControl = new FormControl();
  majorHeadCtrl: FormControl = new FormControl();
  insertMinorheadCtrl: FormControl = new FormControl();
  insertSubMajorheadCtrl: FormControl = new FormControl();
  insertSubHeadCtrl: FormControl = new FormControl();
  submajorHeadCtrl: FormControl = new FormControl();
  bankCtrl: FormControl = new FormControl();

  // List values
  challanType_list: any[] = [
    { value: '1', viewValue: 'Others' },
    { value: '2', viewValue: 'LC' },
    { value: '3', viewValue: 'MajorHead 8009 / 8011 / 8658 / 7610' },
    { value: '4', viewValue: 'NPS' },
    { value: '5', viewValue: 'Others' },
    { value: '6', viewValue: 'Professional Tax' },
    { value: '7', viewValue: 'RTO Tax' },
    { value: '8', viewValue: 'SalesTax' },
    { value: '9', viewValue: 'Stamp' },
    { value: '10', viewValue: 'Vat Tax' }
  ];

  subMajorHead_list: any[] = [
    { value: '1', viewValue: '00' }
  ];

  demand_list: any[] = [
    { value: '1', viewValue: '999' }
  ];


  majorHead_list: any[] = [
    { value: '1', viewValue: '2054 : Treasury and Accounts Administration' }
  ];


  minorHead_list: any[] = [
    { value: '1', viewValue: '097 : Pay and Accounts Offices ' },
  ];

  subHead_list: any[] = [
    { value: '1', viewValue: '01 : Pay and Accounts offices' }
  ];

  bank_list: any[] = [
    { value: '1', viewValue: 'Bank Of Baroda' },
    { value: '2', viewValue: 'State Bank Of India' }
  ];
  // Display Columns
  insertDisplayedColumns: string[] = ['srNo', 'insertSubMajorheads', 'insertMinorheads', 'insertSubHeads', 'insertAmount', 'action'];
  // Table Source
  insertDataSource = new MatTableDataSource<any>(ELEMENT_DATA);

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.viewAllChallanForm = this.fb.group({
      // FormGroup Fields
      bwMajorHeadTotal: ['0'],
      total: ['0'],
      receiptNo: [''],
      totalByUser: ['0'],
      receivedByBankDate: [''],
      scrollDate: [''],
      challanType: ['1'],
      branchCode: [''],
      bank: [''],
      branch: [''],
      demand: ['1'],
      majorHead: [''],
      partyName: [''],
      challanValue: [''],
      insertMinorhead: [''],
      insertSubMajorhead: [''],
      insertSubHead: [''],
      insertAmount: [''],
      submajorHead: [''],

    });
  }

  totalExpeAmount(): number {
    let amountExp = 0;
    this.insertDataSource.data.forEach((element) => {
      amountExp = amountExp + Number(element.insertAmount);
    });
    return amountExp;
  }
  // function to add row into table
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
  // function to delete row from table
  delete(index) {
    this.insertDataSource.data.splice(index, 1);
    this.insertDataSource = new MatTableDataSource(
      this.insertDataSource.data
    );
  }

  branchCode(inputBranchCode) {

    if (inputBranchCode === 1000) {
      this.viewAllChallanForm.patchValue({
        bank: '1',
        branch: 'Vidhansabha',
      });
    }

    if (inputBranchCode === 12000) {
      this.viewAllChallanForm.patchValue({
        bank: '2',
        branch: 'Medical Campus',
      });
    }
  }
  bankChange(inputBank) {
    if (inputBank.value === 1) {
      this.viewAllChallanForm.patchValue({
        branchCode: '1000',
        branch: 'Vidhansabha',
      });
    }

    if (inputBank.value === 2) {
      this.viewAllChallanForm.patchValue({
        branchCode: '12000',
        branch: 'Medical Campus',
      });
    }
  }

  onSave() {
    if (this.viewAllChallanForm.valid) {
      this.isSubmitted = false;
    } else {
      this.isSubmitted = true;
    }

  }


}
