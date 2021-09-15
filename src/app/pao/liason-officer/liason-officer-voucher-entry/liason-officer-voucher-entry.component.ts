import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDatepickerInputEvent, MatDialog } from '@angular/material';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { paoMessage } from 'src/app/common/error-message/common-message.constants';
import { DdoGrantHeadLiasonComponent } from './ddo-grant-head/ddo-grant-head.component';
import { ListValue } from 'src/app/model/paoModel';



@Component({
  selector: 'app-liason-officer-voucher-entry',
  templateUrl: './liason-officer-voucher-entry.component.html',
  styleUrls: ['./liason-officer-voucher-entry.component.css']
})
export class LiasonOfficerVoucherEntryComponent implements OnInit {
  // Liason Office entry
  expenditureList: any[] = [
    { budgetCode: '2800', description: 'Payment Of Prof. & Special Services', edpCode: '2801', amountExp: '2000.00' },
  ];
  deductionList: any[] = [
    { decuctionA: '400.00', decuctionB: '0.00', expenditure: '2000.00', recovery: '0.00' }
  ];
  receiptList: any[] = [
    // tslint:disable-next-line: max-line-length
    { edpCode: '', dedType: 'A', majorHead: '8443', subMajorHead: '00', minerHead: '103', subHead: '00', amount: '' },
  ];
  recoveryList: any[] = [
    { budgetCode: '7058', description: 'Food Grains Advances', edpCode: '7058', amountExp: '400.00' }
  ];
  // Date
  maxDate = new Date();
  // Form Group
  liasonVoucherOfficeForm: FormGroup;
  // Form COntrol
  majorHeadCtrl: FormControl = new FormControl();
  ddonameCtrl: FormControl = new FormControl();
  billtypeCtrl: FormControl = new FormControl();
  partyNameCtrl: FormControl = new FormControl();
  billCatCtrl: FormControl = new FormControl();
  classOfExpenditureCtrl: FormControl = new FormControl();
  fundTypeCtrl: FormControl = new FormControl();
  detailHeadCtrl: FormControl = new FormControl();
  objClassCtrl: FormControl = new FormControl();
  subMajorHeadCtrl: FormControl = new FormControl();
  minorHeadCtrl: FormControl = new FormControl();
  subHeadCtrl: FormControl = new FormControl();
  typeCtrl: FormControl = new FormControl();
  // Table Source
  expenditureDataSource = new MatTableDataSource(this.expenditureList);
  recoveryDataSource = new MatTableDataSource(this.recoveryList);
  deductionDataSource = new MatTableDataSource(this.deductionList);
  receiptDataSource = new MatTableDataSource(this.receiptList);
  constructor(private router: Router, private fb: FormBuilder, public dialog: MatDialog,) { }
  expenditureColumn = ['edpCode', 'description', 'budgetCode', 'amountExp', 'action'];
  recoveryColumn = ['edpCode', 'description', 'budgetCode', 'amountExp', 'action'];
  deductionCol = ['decuctionA', 'decuctionB', 'expenditure', 'recovery', 'action'];
  receiptColumn = ['edpCode', 'dedType', 'majorHead', 'subMajorHead', 'minerHead', 'subHead', 'amount', 'action'];
  ddoname_list: any = [
    { value: '1', viewValue: ' District Treasury Office, Gandhinagar' },
  ];
  type_list: any[] = [
    { value: '1', viewValue: 'State' },
    { value: '2', viewValue: 'CSS' },
  ];
  billtype_list: ListValue[] = [
    { value: '1', viewValue: 'GTR-30 - Pay Bill' },
    { value: '2', viewValue: 'GTR-45 - TA Bill' },
    { value: '3', viewValue: 'GTR-40 - Grant In Bill' },
    { value: '4', viewValue: 'GTR-12 - Advance Bill' }
  ];

  party_list: ListValue[] = [{
    value: '1', viewValue: 'Mr. Abc'
  },
  ];



  majorHead_list: ListValue[] = [
    { value: '1', viewValue: '3451:Secretariat-Economic Services' },
    { value: '2', viewValue: '5475:Capital Outlay on other General Economics Services' },
    { value: '3', viewValue: '2401:Crop Husbandry' },
    { value: '4', viewValue: '2071:Pensions and Other Retirement Benefits' },
    { value: '5', viewValue: '2058:Stationery and Printing' },
  ];

  billCategoryList: ListValue[] = [
    { value: '1', viewValue: 'Regular' },
    { value: '2', viewValue: 'TC' },
    { value: '3', viewValue: 'Nill' },
    { value: '4', viewValue: 'Regular / challns' },
  ];
  classType: ListValue[] = [
    { value: '1', viewValue: ' 1-Voted' },
    { value: '2', viewValue: ' 2-Charged' }
  ];
  subMajorHead_list: ListValue[] = [
    {
      value: '1', viewValue: '00 :'
    }
  ];
  fundType: ListValue[] = [
    { value: '1', viewValue: '3-Consolidated' },
    { value: '2', viewValue: '4-Contingency' },
    { value: '3', viewValue: '5-Public Account' }
  ];
  minorHead_list: ListValue[] = [
    { value: '1', viewValue: '095:Directorate of Accounts and Treasuries' },
    { value: '2', viewValue: '096:Pay and Accounts Offices' },
    { value: '3', viewValue: '097:Treasury Establishment' },
    { value: '4', viewValue: '098:Local Fund Audit' },
    { value: '5', viewValue: '800:Other Expenditure' }
  ];
  subHead_list: ListValue[] = [
    { value: '1', viewValue: '01:GES-1 Directorate' },
    { value: '2', viewValue: '01:Pay and Accounts offices' },
    { value: '3', viewValue: '01:Treasuries' },
    { value: '3', viewValue: '01:Examiners' },
    { value: '3', viewValue: '01:Directorate of Pension and Provident Fund' }
  ];
  detailHead_list: ListValue[] = [
    {
      value: '1',
      viewValue: '00:Agricultural and Co-operation Department'
    },
    {
      value: '2',
      viewValue: '00:PLN-10 Planning Machinery in Agriculture.and Co-Operation  Development'
    },
  ];
  objectClass_list: ListValue[] = [
    { value: '1', viewValue: 'C0' },
    { value: '2', viewValue: 'C1' },
    { value: '3', viewValue: 'C2' },
    { value: '4', viewValue: 'C3' },
    { value: '5', viewValue: 'C4' },
    { value: '6', viewValue: 'C5' },
    { value: '7', viewValue: 'C6' },
    { value: '8', viewValue: 'C7' }
  ];
  errorMessages = paoMessage;
  ngOnInit() {
    this.liasonVoucherOfficeData();
  }



  liasonVoucherOfficeData() {
    this.liasonVoucherOfficeForm = this.fb.group({
      voucherNo: [''],
      majorHead: [''],
      voucherDate: [''],
      ddoname: [''],
      cardexNo: [''],
      billGorssAmount: [''],
      billNetAmount: [''],
      billtype: [''],
      billCategory: [''],
      partyName: [''],
      classOfExpenditure: [''],
      subMajorHead: [''],
      minorHead: [''],
      subHead: [''],
      detailHead: [''],
      objectClass: [''],
      demand: [''],
      schemeCode: [''],
      fundType: [''],
      type: [''],
      headChargable: ['']
    });
  }

  decimalPoint(data, key) {
    if (data[key]) {
      data[key] = Number(data[key]).toFixed(2);
    }
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
  deductionadd() {
    this.deductionDataSource.data.push(['decuctionA', 'decuctionB', 'expenditure', 'recovery', 'action'])
    this.deductionDataSource = new MatTableDataSource(this.deductionDataSource.data);
  }
  expenditure() {
    this.expenditureDataSource.data.push(['edpCode', 'description', 'budgetCode', 'amountExp', 'action'])
    this.expenditureDataSource = new MatTableDataSource(this.expenditureDataSource.data);
  }
  recoveryadd() {
    this.recoveryDataSource.data.push(['edpCode', 'description', 'budgetCode', 'amountExp', 'action'])
    this.recoveryDataSource = new MatTableDataSource(this.recoveryDataSource.data);
  }
  receiptadd() {
    this.receiptDataSource.data.push(['edpCode', 'dedType', 'majorHead', 'subMajorHead', 'minerHead', 'subHead', 'amount', 'action'])
    this.receiptDataSource = new MatTableDataSource(this.receiptDataSource.data);
  }
  deleteRow(index) {
    this.deductionDataSource.data.splice(index, 1);
    this.deductionDataSource = new MatTableDataSource(this.deductionDataSource.data);
  }
  exdeleteRow(index) {
    this.expenditureDataSource.data.splice(index, 1);
    this.expenditureDataSource = new MatTableDataSource(this.expenditureDataSource.data);
  }
  recoverydeleteRow(index) {
    this.recoveryDataSource.data.splice(index, 1);
    this.recoveryDataSource = new MatTableDataSource(this.recoveryDataSource.data);
  }
  recdeleteRow(index) {
    this.receiptDataSource.data.splice(index, 1);
    this.receiptDataSource = new MatTableDataSource(this.receiptDataSource.data);
  }
  dddoGrant() {
    const dialogRef = this.dialog.open(DdoGrantHeadLiasonComponent, {
      width: '1000px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      let temp = result.split('-');
      console.log(temp);
      // 017:2054:00:097:01:00:C2	
      this.liasonVoucherOfficeForm.patchValue({
        // class: 'Class I',
        fundType: '1',
        type: '1',
        classOfExpenditure: '1',
        typeOfEstimate: '1',
        stateCss: '1',
        schemeCode: '0000',
        demand: '1',
        majorHead: '1',
        subMajorHead: '1',
        minorHead: '1',
        subHead: '1',
        detailHead: '00:Agricultural and Co-operation Department',
        objectClass: '3',
        headChargable: '017:2054:00:097:01:00:C2',
      });
    });
  }
  submitToNextLevel() {

  }

}
