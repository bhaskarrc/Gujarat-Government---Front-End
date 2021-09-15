import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { ppoMessage } from 'src/app/common/error-message/common-message.constants';
import { PpoDialogBoxComponent, Element_DataInDailog } from '../ppo-dialog-box/ppo-dialog-box.component';
import { PpnoListInterface, PpoAutoFill, Deduction, GenerateLTA } from 'src/app/model/ppo';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { ListValue } from '../../model/treasury-bill';

@Component({
  selector: 'app-generate-lta-bill',
  templateUrl: './generate-lta-bill.component.html',
  styleUrls: ['./generate-lta-bill.component.css']
})
export class GenerateLtaBillComponent implements OnInit {
  // variables
  ppoData;
  todayDate = new Date();
  tabDisable: Boolean = true;
  generateLTAForm: FormGroup;
  errorMessage = ppoMessage;
  optionCtrl = true;
  ppoNoVal: string;
  ppoNo_list: PpnoListInterface[] = [];
  filteredppoNo: Observable<PpnoListInterface[]>;
  dataFromDailogComponent: PpoAutoFill[];
  isInputEdpCode = true;
  isDelete = false;
  isInputEdpCode1 = true;

  // form controls
  paymentModeCtrl: FormControl = new FormControl();
  classOfExpenditureCtrl: FormControl = new FormControl();
  fundCtrl: FormControl = new FormControl();
  budgetTypeCtrl: FormControl = new FormControl();
  typeOfExpenditureCtrl: FormControl = new FormControl();
  billCategoryCtrl: FormControl = new FormControl();
  ppoNoCtrl: FormControl = new FormControl();

  // lists
  paymentMode_list: ListValue[] = [
    { value: '1', viewValue: 'Bank Payment' },
    { value: '2', viewValue: 'Party Payment' },
  ];

  classOfExpenditure_list: ListValue[] = [
    { value: '1', viewValue: '1-Voted' },
    { value: '2', viewValue: '5-Public' },
  ];

  fund_list: ListValue[] = [
    { value: '1', viewValue: 'Consolidated' },
    { value: '2', viewValue: '' },
  ];

  budgetType_list: ListValue[] = [
    { value: '1', viewValue: 'State' },
    { value: '2', viewValue: 'CSS' },
  ];

  typeOfExpenditure_list: ListValue[] = [
    { value: '1', viewValue: 'Standing Charges' },
    { value: '2', viewValue: '' },
  ];

  billCategory_list: ListValue[] = [
    { value: '1', viewValue: 'Regular' },
    { value: '2', viewValue: '' },
  ];

  // table data
  expenditureList: any[] = [
  ];

  expenditureColumn = [
    'edpCode',
    'description',
    'budgetCode',
    'amountExp',
    'action'
  ];

  receiptList: any[] = [
  ];

  receiptColumn = [
    'edpCode',
    'description',
    'dedType',
    'majorHead',
    'subMajorHead',
    'minerHead',
    'subHead',
    'amount',
    'action'
  ];

  deductionList: Deduction[] = [
    { decuctionA: '0.00', decuctionB: '0.00', expenditure: '0.00', recovery: '0.00' }
  ];

  deductionCol = ['expenditure', 'recovery', 'decuctionA', 'decuctionB'];

  ELEMENT_DATA: GenerateLTA[] = [
    { chequeType: 'EP Cheque', partyName: 'K S Trivedi', accountNo: 12345654, ifscCode: 'ICIC0000165', chequeAmount: 100 }
  ];

  displayedColumns: string[] = ['serialNo', 'chequeType', 'partyName', 'accountNo', 'ifscCode', 'chequeAmount'];

  expenditureDataSource = new MatTableDataSource(this.expenditureList);
  receiptDataSource = new MatTableDataSource(this.receiptList);
  deductionDataSource = new MatTableDataSource(this.deductionList);
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.generateLTAFormData();

    this.optionCtrl = true;
    this.ppoNoVal = 'PPO No.';
    this.dataFromDailogComponent = Element_DataInDailog;
    for (let i = 0; i < this.dataFromDailogComponent.length; i++) {
      this.ppoNo_list.push({ ppoNo: this.dataFromDailogComponent[i].ppoNo });
    }
    this.filteredppoNo = this.ppoNoCtrl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value),
        map(ppoNo => ppoNo ? this._filter(ppoNo) : this.ppoNo_list.slice())
      );
  }

  generateLTAFormData() {
    this.generateLTAForm = this.fb.group({
      paymentMode: ['2'],
      ppoNo: [''],
      tokenNo: [''],
      nameOfPensioner: [''],
      employeeName: [''],
      designation: [''],
      forTheEstablishmentOf: [''],
      employeeType: [''],
      classOfExpenditure: ['1'],
      fund: ['1'],
      budgetType: ['1'],
      typeOfExpenditure: ['1'],
      billCategory: ['1'],
      schemeNo: [''],
      demand: [''],
      majorHead: [''],
      subMajorHead: [''],
      minorHead: [''],
      subHead: [''],
      detailedHead: [''],
      objectHeadClass: [''],
      headChargeable: ['']
    });
    this.optionCtrl = true;
  }

  // calculates total exp amt
  totalExpeAmount(): number {
    let amountExp = 0;
    this.expenditureDataSource.data.forEach((element) => {
      amountExp = amountExp + Number(element.amountExp);
    });
    return amountExp;
  }
  // adds new row
  addLeave() {
    const p_data = this.expenditureDataSource.data;
    this.isInputEdpCode = false;
    this.isDelete = true;
    p_data.push({
      budgetCode: '',
      description: '',
      edpCode: '',
      amountExp: '0.00'
    });
    this.expenditureDataSource.data = p_data;
  }
  // deletes expenditure row
  deletExpenditureRow(index) {
    this.expenditureDataSource.data.splice(index, 1);
    this.expenditureDataSource = new MatTableDataSource(
      this.expenditureDataSource.data
    );
  }

  // adds new row
  AddnewEdpRow() {
    const Col_Data = this.receiptDataSource.data;
    Col_Data.push({
      edpCode: '',
      description: '',
      dedType: '',
      majorHead: '',
      subMajorHead: '',
      minerHead: '',
      subHead: '',
      amount: '0.00'
    });
    this.receiptDataSource.data = Col_Data;
    this.isInputEdpCode1 = false;
  }

  // patched values in form
  fillEdpDSescription() {
    const Col_Data = this.receiptDataSource.data;
    Col_Data.push({
      edpCode: '9520',
      description: 'Surcharge On Income Tax',
      dedType: 'A',
      majorHead: '8658',
      subMajorHead: '00',
      minerHead: '112',
      subHead: '00',
      amount: '0.00'
    });
    Col_Data.splice(this.receiptDataSource.data.length - 2, 1);
    this.receiptDataSource.data = Col_Data;
  }

  // calculates receipt total
  reciptTotal(): number {
    let amount = 0;
    this.receiptDataSource.data.forEach((element) => {
      amount = amount + Number(element.amount);
    });
    return amount;
  }

  // deletes record
  removeRow(index) {
    this.receiptDataSource.data.splice(index, 1);
    this.receiptDataSource = new MatTableDataSource(
      this.receiptDataSource.data
    );

  }
  // opens dialog and selects ppo no
  openPPODialog() {
    this.optionCtrl = false;
    if (this.ppoData == null || this.ppoData === undefined || this.ppoData === '') {
      this.ppoData = 'Please Provide PPO No.';
    }
    const dailogRef = this.dialog.open(PpoDialogBoxComponent,
      {
        width: '1000px',
        height: '500px',
        data: this.ppoData
      });

    dailogRef.afterClosed().subscribe(result => {
      const dataArray = result;
      this.optionCtrl = true;

    });
  }

  // ppo no related methods
  private _filter(ppoNo: string): PpnoListInterface[] {
    const filterValue = ppoNo;
    return this.ppoNo_list.filter(option => option.ppoNo.includes(filterValue));
  }
  displayFn(ppoNo_list: PpnoListInterface): string {
    return ppoNo_list && ppoNo_list.ppoNo ? ppoNo_list.ppoNo : '';
  }
  sendPPOData(data) {
    this.ppoData = data;
  }
  reset() {
    this.generateLTAForm.patchValue({
      paymentMode: '2',
      ppoNo: 'DPP/P/106465',
      tokenNo: '',
      nameOfPensioner: 'K S Trivedi',
      employeeName: 'Pratik K Shah',
      designation: 'District Treasury Officer',
      forTheEstablishmentOf: 'District Treasury Office, Gandhinagar',
      employeeType: '',
      classOfExpenditure: '1',
      fund: '1',
      budgetType: '1',
      typeOfExpenditure: '1',
      billCategory: '1',
      schemeNo: '000000',
      demand: '01B',
      majorHead: '2071',
      subMajorHead: '01',
      minorHead: '101',
      subHead: '01',
      detailedHead: '00',
      objectHeadClass: 'C1',
      headChargeable: '20710110101'
    });
  }
}
