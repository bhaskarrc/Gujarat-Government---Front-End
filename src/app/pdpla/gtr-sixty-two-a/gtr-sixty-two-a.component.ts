import { Component, OnInit, ElementRef, Inject, ViewChild } from '@angular/core';
import { MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSort } from '@angular/material';
import { ListValue } from 'src/app/model/common-grant';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ddoMasage } from 'src/app/common/error-message/common-message.constants';
import { take } from 'rxjs/operators';
import { DialogData } from 'src/app/model/standing-charge';
import { SelectionModel } from '@angular/cdk/collections';
import {
  Expanditure, ReceiptDetails, RecoveryData, Checktype, GrantAddbillNo, PeriodicElement,
  Epaymenttype
} from 'src/app/model/pdpla';
import { PdplaDirectives } from 'src/app/common/directive/pdpla';

const checkList: Checktype[] = [
  {
    checkType: '0101',
    partyName: 'Pay of Officers',
    accountNo: '1254879',
    adress: '43, shiavam, gandhinagar',
    checkAmount: '0'
  }
];

const grant_add_bill: GrantAddbillNo[] = [
  {
    gpfAcno: '',
    amt: '5555.00'
  },
];

// Receipt Details

const ELEMENT_DATA1: any[] = [
  {
    vender: 'ABC Ltd',
    checkType: 'Contractor',
    accountNo: '3600178925',
    panNo: 'EOXPS8331P '
  },
  {
    vender: 'Tech mahindra',
    checkType: 'Contractor',
    accountNo: '3600178926',
    panNo: 'RTXPS8331P'
  }
];

const epaymentList: Epaymenttype[] = [];


@Component({
  selector: 'app-gtr-sixty-two-a',
  templateUrl: './gtr-sixty-two-a.component.html',
  styleUrls: ['./gtr-sixty-two-a.component.css']
})
export class GtrSixtyTwoAComponent implements OnInit {

  // EDP Details Table
  expenditureColumn: string[] = [
    'budgetCode',
    'description',
    'edpCode',
    'amountExp',
    'action'
  ];

  expenditureList: Expanditure[] = [
    {
      budgetCode: '3131',
      description: 'Pay Of Officers',
      edpCode: '3101',
      amountExp: '5555.00'
    },
    {
      budgetCode: '3131',
      description: 'Pay Of Establishment',
      edpCode: '3102',
      amountExp: '0.00'
    },
    {
      budgetCode: '3131',
      description: 'Dearness Allowances',
      edpCode: '3103',
      amountExp: '0.00'
    }
  ];

  expenditureDataSource = new MatTableDataSource(this.expenditureList);

  // Cheque Type table

  CheckColumn = [
    'checkType',
    'partyName',
    'address',
    'accountNo',
    'checkAmount',
    'action'
  ];

  checkList: any[] = [
    {
      partyName: '',
      checkType: '1',
      budgetCode: '0101',
      description: 'Pay of Officers',
      edpCode: '0101',
      checkAmount: '0.00'
    }
  ];

  checkDataSource = new MatTableDataSource(this.checkList);

  // epayment Type table

  epaymentColumn = ['payeeName', 'accountNo', 'ifscCode', 'amount', 'action'];

  epaymentDataSource = new MatTableDataSource(epaymentList);

  // gpf bill table

  grantinbillColumn: string[] = [
    'gpfAcno',
    'orDate',
    'sanctioBy',
    'grantInAdd',
    'amt'
  ];

  grantinbillDataSource = new MatTableDataSource(grant_add_bill);

  // Receipt Details
  receiptColumnWithoutPdplaAccNo = [
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
  receiptColumn = [
    'edpCode',
    'pdplaAccNo',
    'description',
    'dedType',
    'majorHead',
    'subMajorHead',
    'minerHead',
    'subHead',
    'amount',
    'action'
  ];

  receiptList: ReceiptDetails[] = [
    {
      edpCode: '9547',
      description: 'P.L.A of D.D.D',
      dedType: 'A',
      majorHead: '8448',
      subMajorHead: '00',
      minerHead: '109',
      subHead: '01',
      amount: '5555.00'
    },
  ];
  attachmentTypeCodeCtrl: FormControl = new FormControl();
  attachmentTypeCode: ListValue[] = [
    { value: '01', viewValue: 'Supporting Document' },
    { value: '02', viewValue: 'Sanction Order' },
    { value: '03', viewValue: 'Others' }
  ];
  receiptDataSource = new MatTableDataSource(this.receiptList);

  // Receipt-Data Summary

  summaryData = [
    'edpCode',
    'chlanDate',
    'pdAccount',
    'party',
    'amount',
    'action'
  ];

  summaryDataSource = new MatTableDataSource([]);

  // recovery data

  recoveryColumn = ['budgetCode', 'description', 'edpCode', 'amount', 'action'];

  recoveryList: RecoveryData[] = [

  ];

  recoveryDataSource = new MatTableDataSource(this.recoveryList);

  // recovery deduction
  deductionCol = ['expenditure', 'recovery', 'decuctionA', 'decuctionB'];

  deductionList: any[] = [
    { decuctionA: '5555.00', decuctionB: '0.00', expenditure: '5555.00', recovery: '0.00 ' }
  ];

  deductionDataSource = new MatTableDataSource(this.deductionList);



  emp_list: ListValue[] = [
    { value: '1', viewValue: 'Govet' },
    { value: '2', viewValue: 'Private' }
  ];

  Months_list: ListValue[] = [
    { value: '1', viewValue: 'Jan' },
    { value: '2', viewValue: 'Feb' },
    { value: '3', viewValue: 'Mar' },
    { value: '4', viewValue: 'Apr' },
    { value: '5', viewValue: 'May' },
    { value: '6', viewValue: 'June' },
    { value: '7', viewValue: 'July' },
    { value: '8', viewValue: 'August' },
    { value: '9', viewValue: 'September' },
    { value: '9', viewValue: 'October' },
    { value: '9', viewValue: 'November' },
    { value: '9', viewValue: 'Decmber' }
  ];

  Year_list: ListValue[] = [
    { value: '1', viewValue: '2015' },
    { value: '2', viewValue: '2016' },
    { value: '3', viewValue: '2017' },
    { value: '4', viewValue: '2018' },
    { value: '5', viewValue: '2019' },
    { value: '6', viewValue: '2020' }
  ];

  classType: any[] = [
    { value: '1', viewValue: ' 1-Voted' },
    { value: '2', viewValue: ' 2-Charged' }
  ];
  demand_list: ListValue[] = [{ value: '002', viewValue: '002: Agriculture' }];

  majorHead_list: ListValue[] = [
    { value: '2401', viewValue: '2401: Crop Husbandry' }
  ];
  subMajorHead_list: ListValue[] = [
    {
      value: '00',
      viewValue: '00'
    }
  ];
  minorHead_list: ListValue[] = [
    {
      value: '119',
      viewValue: '119:horticulture and vegetable crops'
    },
    { value: '096', viewValue: '096:Pay and Accounts Offices' },
    { value: '097', viewValue: '097:Treasury Establishment' }
  ];
  subHead_list: ListValue[] = [
    {
      value: '52',
      viewValue: '52:HRT- 12 National Medicinal Plant Mission'
    },

    {
      value: '01',
      viewValue: '01:Pay and Accounts offices '
    },

    {
      value: '01',
      viewValue: '01:Treasuries'
    }
  ];

  detailHead_list: ListValue[] = [
    {
      value: '00',
      viewValue: '00:HRT- 12 National Medicinal Plant Mission '
    },
    {
      value: '00',
      viewValue: '00:Pay and Accounts offices'
    },

    {
      value: '00',
      viewValue: '00:Treasuries'
    }
  ];

  objectClass_list: ListValue[] = [{ value: 'C4', viewValue: 'C4: Grant etc.' }];

  grossTotl: any[] = [
    { label: 'Gross Total', value: '5555.00' },
    { label: 'Recovery', value: '0.00' },
    { label: 'Deduction A', value: '5555.00' },
    { label: 'Deduction B', value: '0.00' },
    { label: 'Net Total', value: '0.00' },
    { label: 'Amount in Rs.', value: 'Zero Only' },
    { label: 'Appropriation For', value: '1000000.00' },
    { label: 'Expenditure including this bill', value: '9555.00' },
    { label: 'Balance', value: '990445.00' }
  ];

  exemptedType: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];

  billCodeList: ListValue[] = [
    {
      value: '1',
      viewValue:
        '1 - Pay allow Retirement benefit i.e. ltc & leave encas. at reti'
    },
    { value: '2', viewValue: '2 - Widow Relief Assistance To Aged Helpless' },
    { value: '3', viewValue: '3 - Bills Of Scarcity' },
    { value: '4', viewValue: '4 - Bills Of Diet Charges Of Hospital' },
    { value: '5', viewValue: '5 - Scolarship / Stipend Bills' },
    {
      value: '6',
      viewValue: '6 - Relief On Salestax Levied On Diesel Of Fisherman'
    },
    { value: '6', viewValue: '7 - Telephone / Light Bills' },
    { value: '7', viewValue: '8 - Petrol / Diesel Bill' }

  ];
  billCodeRequiredList: ListValue[] = [
    { value: '1', viewValue: '1 - Pay allow Retirement benefit i.e. ltc & leave encas. at reti' },
    { value: '2', viewValue: '2 - Widow Relief Assistance To Aged Helpless' },
    { value: '3', viewValue: '3 - Bills Of Scarcity' },
    { value: '4', viewValue: '4 - Bills Of Diet Charges Of Hospital' },
    { value: '5', viewValue: '5 - Scolarship / Stipend Bills' },
    { value: '6', viewValue: '6 - Relief On Salestax Levied On Diesel Of Fisherman' },
    { value: '7', viewValue: '7 - Telephone / Light Bills' },
    { value: '8', viewValue: '8 - Petrol / Diesel Bill' }
  ];

  billCategoryList: ListValue[] = [
    { value: '1', viewValue: 'Regular' },
    { value: '2', viewValue: 'Regular/Challan' },
    { value: '3', viewValue: 'TC' },
    { value: '4', viewValue: 'NIL' }
  ];

  previousBillType: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];

  PaymentType: ListValue[] = [
    { value: '1', viewValue: 'Cheque' },
    { value: '2', viewValue: 'e-payment' }
  ];

  checkType: ListValue[] = [
    { value: '1', viewValue: 'Beneficiary' },
    { value: '2', viewValue: 'Contractor' },
    { value: '3', viewValue: 'Grant In Aid' },
    { value: '4', viewValue: 'GST TDS' },
    { value: '5', viewValue: 'Scholarship' },
    { value: '6', viewValue: 'Service Provider' },
    { value: '7', viewValue: 'Supplier' }
  ];

  gpdbill_list: ListValue[] = [
    { value: '1', viewValue: 'Advances' },
    { value: '2', viewValue: 'Withdrawls' },
    { value: '3', viewValue: 'Final Withdrawal' }
  ];

  financialYear_list: any[] = [
    { value: '1', viewValue: '2019' },
    { value: '2', viewValue: '2020' },
    { value: '3', viewValue: '2021' }
  ];

  monthList: any[] = [
    { value: '1', viewValue: 'January' },
    { value: '2', viewValue: 'February' },
    { value: '3', viewValue: 'March' },
    { value: '4', viewValue: 'April' },
    { value: '5', viewValue: 'May' },
    { value: '6', viewValue: 'June' },
    { value: '7', viewValue: 'July' },
    { value: '8', viewValue: 'August' },
    { value: '9', viewValue: 'September' },
    { value: '10', viewValue: 'October' },
    { value: '11', viewValue: 'November' },
    { value: '12', viewValue: 'December' }
  ];

  attachment = [
    {
      fileName: 'Attachment 1',
      fileType: 'image',
      filePath: '../../../assets/sample-attachments/image-sample.jpg',
      imgStatus: false
    },
    {
      fileName: 'Attachment 2',
      fileType: 'pdf',
      filePath: '../../../assets/sample-attachments/pdf-sample.pdf',
      pdfStatus: false
    }
  ];

  fundType: ListValue[] = [
    { value: '1', viewValue: '3-Consolidated' },
    { value: '2', viewValue: '4-Contingency' }
  ];

  schemeType_list: ListValue[] = [
    { value: '1', viewValue: '1-State' },
    { value: '2', viewValue: '2-CSS' }
  ];

  type_list: ListValue[] = [
    { value: '1', viewValue: 'Standing Charges' },
    { value: '2', viewValue: 'New Item' },
    { value: '3', viewValue: 'New Work' },
    { value: '4', viewValue: 'Item Continuous' },
    { value: '5', viewValue: 'Work-In-Progress' }
  ];

  checklist: ListValue[] = [
    { value: '1', viewValue: 'Party Cheque' },
    { value: '2', viewValue: 'DDO Cheque' }
  ];

  itemName_list: ListValue[] = [
    {
      value: '1',
      viewValue: 'Purchase of new car for Director of Agriculture'
    },
    { value: '2', viewValue: 'Purchase of Furniture for the Director Office' },
    { value: '3', viewValue: 'Purchase Furniture for record room of Office' },
    {
      value: '4',
      viewValue: 'Purchase of new Furniture for the Joint Director Office'
    },
    {
      value: '5',
      viewValue: 'Purchase of new Furniture for the Deputy Director'
    }
  ];

  checkUTCList: any[] = [
    { checkUTC: '', remarks: '' },
  ];
  checkUTCColumn: string[] = [
    'checkUTC', 'remarks'
  ];
  pdplaAccNoCtrl: FormControl = new FormControl();
  pdplaAccNo_list: ListValue[] = [{
    value: '1', viewValue: 'DDO'
  }];
  empTypeCtrl: FormControl = new FormControl();
  monthsCTRL: FormControl = new FormControl();
  yearCtrl: FormControl = new FormControl();
  classCtrl: FormControl = new FormControl();
  fundTypeCtrl: FormControl = new FormControl();
  schemeTypeCtrl: FormControl = new FormControl();
  schemeNoCtrl: FormControl = new FormControl();
  demandCtrl: FormControl = new FormControl();
  majorHeadCtrl: FormControl = new FormControl();
  subMajorHeadCtrl: FormControl = new FormControl();
  minorHeadCtrl: FormControl = new FormControl();
  subHeadCtrl: FormControl = new FormControl();
  detailHeadCtrl: FormControl = new FormControl();
  objClassCtrl: FormControl = new FormControl();
  exemptedCtrl: FormControl = new FormControl();
  billCodeCtrl: FormControl = new FormControl();
  billCatCtrl: FormControl = new FormControl();
  previousBillCtrl: FormControl = new FormControl();
  paymentTypeCtrl: FormControl = new FormControl();
  checkTypeCtrl: FormControl = new FormControl();
  gpfbillCtrl: FormControl = new FormControl();
  monthOfCtrl: FormControl = new FormControl();
  financialYearCtrl: FormControl = new FormControl();
  typeCtrl: FormControl = new FormControl();
  itemCtrl: FormControl = new FormControl();
  checkTypeTwoCtrl: FormControl = new FormControl();
  billCodeRequiredCtrl: FormControl = new FormControl();

  // checkUTCDataSource = new MatTableDataSource(this.checkUTCList);


  billRegisterCtrl: FormControl = new FormControl('', Validators.required);
  nameOfMessenger: FormControl = new FormControl('', Validators.required);
  billTransitNo: FormControl = new FormControl('', Validators.required);

  errorMessages = {
    class_exp: 'Please select Class of Expenditure',
    fund_type: 'Please select Fund Type',
    schem_type: 'Please select Scheme Type',
    Demand_error: 'Please Enter Demand',
    major_head: 'Please Enter Major Head'
  };

  isSelectedTc = false;
  fileBrowseIndex: number;
  selectedIndex: number;
  showAction: Boolean = true;
  show = false;
  formsixtytwo: FormGroup;
  todayDate = Date.now();
  subObjectId: Array<any> = [];
  checkTable = false;
  epayment = true;
  tabDisable: Boolean = true;
  isItemList = false;
  isInputEdpCode = true;
  isDelete = false;
  paymentTypeDropDown = true;
  isInputEdpCode1 = true;
  DDoParty: boolean;
  date = new FormControl(new Date());
  _ngZone: any;
  autosize: any;
  billRigister;
  BillTransit;
  message;
  majorHeadVal = '';
  subMajorHeadVal = '';
  minorHeadVal = '';
  subHeadVal = '';
  detailHeadVal = '';
  objectClassVal = '';
  headChargeableVal;


  constructor(
    private fb: FormBuilder,
    private el: ElementRef,
    public dialog: MatDialog,
    private router: Router
  ) { }
  directiveObject = new PdplaDirectives(this.router, this.dialog);

  errorMessage;

  ngOnInit() {
    this.errorMessage = ddoMasage;
    this.formsixtytwoformData();

  }

  formsixtytwoformData() {
    this.formsixtytwo = this.fb.group({// Formfields
      empType: [''],
      establishment: [''],
      month: [''],
      year: [''],
      subMajorHead: ['', Validators.required],
      minorHead: ['', Validators.required],
      subHead: ['', Validators.required],
      detailHead: ['', Validators.required],
      objectClass: ['', Validators.required],
      exempted: ['2', Validators.required],
      headChargeable: ['', Validators.required],
      billCode: ['', Validators.required],
      billCodeRequired: ['', Validators.required],
      billCategory: ['1', Validators.required],
      previousBill: [''],
      scheduleNo: [''],
      paymentType: ['2', Validators.required],
      ddoGrantHead: [''],
      monthOf: ['2'],
      financialYear: ['2'],
      classExp: ['1', Validators.required],
      fundType: ['1', Validators.required],
      schemeType: ['1', Validators.required],
      demand: ['', Validators.required],
      majorHead: ['', Validators.required],
      type: ['1', Validators.required],
      itemName: ['', Validators.required],
      schemeNo: ['', Validators.required],
      utcRemarks: [''],
      UTCCheckbox: ['true']
    });
  }

  // patches form value on major head change
  majorHeadChange(data) {
    console.log(data.viewValue);
    this.majorHeadVal = data.value;
    this.headChargeableVal = this.majorHeadVal
      + ':'
      + this.subMajorHeadVal
      + ':'
      + this.minorHeadVal
      + ':'
      + this.subHeadVal
      + ':'
      + this.detailHeadVal
      + ':'
      + this.objectClassVal;
    this.formsixtytwo.patchValue({
      subMajorHead: '',
      subHead: '',
      minorHead: '',
      detailHead: '',
      type: '1',
      objectClass: '',
      headChargeable: '',
      schemeNo: ''
    });
  }

  // patches form value on sub major head change
  subMajorHeadChange(data) {
    this.subMajorHeadVal = data.value;
    this.headChargeableVal = this.majorHeadVal
      + ':'
      + this.subMajorHeadVal
      + ':'
      + this.minorHeadVal
      + ':'
      + this.subHeadVal
      + ':'
      + this.detailHeadVal
      + ':'
      + this.objectClassVal;
    this.formsixtytwo.patchValue({
      subHead: '',
      minorHead: '',
      detailHead: '',
      type: '1',
      objectClass: '',
      headChargeable: '',
      schemeNo: ''
    });
  }

  // patches form value on minor head change
  minorHeadChange(data) {
    this.minorHeadVal = data.value;
    this.headChargeableVal = this.majorHeadVal
      + ':'
      + this.subMajorHeadVal
      + ':'
      + this.minorHeadVal
      + ':'
      + this.subHeadVal
      + ':'
      + this.detailHeadVal
      + ':'
      + this.objectClassVal;
    this.formsixtytwo.patchValue({
      subHead: '',
      detailHead: '',
      type: '1',
      objectClass: '',
      headChargeable: '',
      schemeNo: ''
    });
  }

  // patches form value on sub head change
  subHeadChange(data) {
    this.subHeadVal = data.value;
    this.headChargeableVal = this.majorHeadVal
      + ':'
      + this.subMajorHeadVal
      + ':'
      + this.minorHeadVal
      + ':'
      + this.subHeadVal
      + ':'
      + this.detailHeadVal
      + ':'
      + this.objectClassVal;
    this.formsixtytwo.patchValue({
      detailHead: '',
      type: '1',
      objectClass: '',
      headChargeable: '',
      schemeNo: ''
    });
  }

  // patches form value on detail head change
  detailHeadChange(data) {
    this.detailHeadVal = data.value;
    this.headChargeableVal = this.majorHeadVal
      + ':'
      + this.subMajorHeadVal
      + ':'
      + this.minorHeadVal
      + ':'
      + this.subHeadVal
      + ':'
      + this.detailHeadVal
      + ':'
      + this.objectClassVal;
    this.formsixtytwo.patchValue({
      type: '1',
      objectClass: '',
      headChargeable: '',
      schemeNo: ''
    });
  }

  // patches form value on object change
  objectChange(data) {
    this.objectClassVal = data.value;
    this.headChargeableVal = this.majorHeadVal
      + ':'
      + this.subMajorHeadVal
      + ':'
      + this.minorHeadVal
      + ':'
      + this.subHeadVal
      + ':'
      + this.detailHeadVal
      + ':'
      + this.objectClassVal;
    this.formsixtytwo.patchValue({
      headChargeable: this.headChargeableVal,
      schemeNo: '000000'
    });
  }

  // patched value on demand change
  demandChange(data) {
    console.log(data.value);
    if (data.value === '017') {

      this.formsixtytwo.patchValue({
        majorHead: undefined,
        subMajorHead: '',
        subHead: '',
        minorHead: '',
        detailHead: '',
        objectClass: '',
        headChargeable: '',
      });
    }
  }

  // patched value on item change
  itemChange(data) {
    this.headChargeableVal = this.majorHeadVal
      + ':'
      + this.subMajorHeadVal
      + ':'
      + this.minorHeadVal
      + ':'
      + this.subHeadVal
      + ':'
      + this.detailHeadVal
      + ':'
      + this.objectClassVal;
    this.formsixtytwo.patchValue({
      objectClass: '',
      headChargeable: '',
      schemeNo: ''
    });
  }

  // patched value on type change
  typeChange(data) {
    console.log(data.value);
    if (data.value !== 1) {
      this.headChargeableVal = this.majorHeadVal
        + ':'
        + this.subMajorHeadVal
        + ':'
        + this.minorHeadVal
        + ':'
        + this.subHeadVal
        + ':'
        + this.detailHeadVal
        + ':'
        + this.objectClassVal;
      this.formsixtytwo.patchValue({
        itemName: '',
        objectClass: '',
        headChargeable: '',
        schemeNo: ''
      });
    } else {
      this.headChargeableVal = this.majorHeadVal
        + ':'
        + this.subMajorHeadVal
        + ':'
        + this.minorHeadVal
        + ':'
        + this.subHeadVal
        + ':'
        + this.detailHeadVal
        + ':'
        + this.objectClassVal;
      this.formsixtytwo.patchValue({
        itemName: '',
        objectClass: '',
        headChargeable: '',
        schemeNo: ''
      });
    }
  }


  getTabIndex(event?) { }

  resetForm() { }

  // sets tab index
  goToNext() {
    this.tabDisable = false;
    this.selectedIndex = 1;
  }

  checkDisplayFile(data) {
    for (let i = 0; i < this.attachment.length; i++) {
      if (data.fileType === 'image') {
        if ((this.showAction = true)) {
          this.showAction = false;
        }
        if (this.attachment[i].fileName === data.fileName) {
          this.attachment[i].imgStatus = !this.attachment[i].imgStatus;
          this.show = this.attachment[i].imgStatus ? true : false;
        } else {
          this.attachment[i].imgStatus = false;
        }
      } else if (data.fileType === 'pdf') {
        if ((this.showAction = true)) {
          this.showAction = false;
        }
        if (this.attachment[i].fileName === data.fileName) {
          this.attachment[i].pdfStatus = !this.attachment[i].pdfStatus;
          this.show = this.attachment[i].pdfStatus ? true : false;
        } else {
          this.attachment[i].pdfStatus = false;
        }
      } else {
      }
      if (this.show === false) {
        this.showAction = true;
        if (this.attachment[i].fileType === 'image') {
          this.attachment[i].imgStatus = false;
        } else if (this.attachment[i].fileType === 'pdf') {
          this.attachment[i].pdfStatus = false;
        }
      }
    }
  }

  // attachment related methods
  // onFileSelection(fileSelected) {
  //   if (fileSelected.target && fileSelected.target.files) {
  //     this.dataSourceBrowse.data[this.fileBrowseIndex].file =
  //       fileSelected.target.files[0];
  //   }
  // }

  // openFileSelector(index) {
  //   this.el.nativeElement.querySelector('#fileBrowse').click();
  //   this.fileBrowseIndex = index;
  // }

  // addBrowse() {
  //   if (this.dataSourceBrowse) {
  //     const data = this.dataSourceBrowse.data[
  //       this.dataSourceBrowse.data.length - 1
  //     ];
  //     if (data && data.file) {
  //       const p_data = this.dataSourceBrowse.data;
  //       p_data.push({
  //         dropDown: undefined,
  //         name: undefined,
  //         file: undefined
  //       });
  //       this.dataSourceBrowse.data = p_data;
  //     } else {
  //     }
  //   }
  // }

  // deleteBrowse(index) {
  //   this.dataSourceBrowse.data.splice(index, 1);
  //   this.dataSourceBrowse = new MatTableDataSource(this.dataSourceBrowse.data);
  // }

  // adds leave
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

  // fills data
  fillData() {
    const p_data = this.expenditureDataSource.data;
    p_data.push({
      budgetCode: '1600',
      description: 'Publications',
      edpCode: '1601',
      amountExp: '0.00'
    });
    p_data.splice(this.expenditureDataSource.data.length - 2, 1);
    this.expenditureDataSource.data = p_data;
  }

  // adds new row
  addNewRow() {
    const p_data = this.checkDataSource.data;
    p_data.push({
      checkType: '1',
      partyName: '',
      accountNo: '',
      checkAmount: '0.00'
    });
    this.checkDataSource.data = p_data;
  }

  // deletes record
  addDeletecheckDataRow(index) {
    this.checkDataSource.data.splice(index, 1);
    this.checkDataSource = new MatTableDataSource(this.checkDataSource.data);
  }

  // calculates total amount
  getTotalAmount(): number {
    let checkAmount = 0;
    this.checkDataSource.data.forEach(element => {
      checkAmount = checkAmount + Number(element.checkAmount);
    });
    return checkAmount;
  }

  // adds new receipt entry row
  addnewRowreceipt(data) {
    const Col_Data = this.summaryDataSource.data;
    Col_Data.push({
      edpCode: '9547',
      amount: '5555.00'
    });
    this.summaryDataSource.data = Col_Data;
  }

  // calculates total exp amount
  totalExpeAmount(): number {
    let amountExp = 0;
    this.expenditureDataSource.data.forEach(element => {
      amountExp = amountExp + Number(element.amountExp);
    });
    return amountExp;
  }

  // deletes expenditure record
  deletExpenditureRow(index) {
    this.expenditureDataSource.data.splice(index, 1);
    this.expenditureDataSource = new MatTableDataSource(
      this.expenditureDataSource.data
    );
  }

  // deletes object head record
  deleteObjectHeadRow(objIndex) {
    const p_data = this.expenditureDataSource.data;
    this.subObjectId.splice(objIndex, 1);
    p_data.splice(objIndex, 1);
    this.expenditureDataSource.data = p_data;
  }

  // calculates total recovery
  totalRecovery(): number {
    let amount = 0;
    this.recoveryDataSource.data.forEach(element => {
      amount = amount + Number(element.amount);
    });
    return amount;
  }

  // calculates total summary
  totalSummary(): number {
    let amount = 0;
    this.summaryDataSource.data.forEach(element => {
      amount = amount + Number(element.amount);
    });
    return amount;
  }

  // calculates total deduction A
  totaldecuctionA(): number {
    let decuctionA = 0;
    this.deductionDataSource.data.forEach(element => {
      decuctionA = decuctionA + Number(element.decuctionA);
    });
    return decuctionA;
  }

  // calculates total deduction B
  totaldecuctionB(): number {
    let decuctionB = 0;
    this.deductionDataSource.data.forEach(element => {
      decuctionB = decuctionB + Number(element.decuctionB);
    });
    return decuctionB;
  }

  // calculates receipt total
  reciptTotal(): number {
    let amount = 0;
    this.receiptDataSource.data.forEach(element => {
      amount = amount + Number(element.amount);
    });
    return amount;
  }

  // sets values on selection of payment type
  payment(data) {
    if (data.value === '1') {
      this.epayment = false;
      this.checkTable = true;
    }
    if (data.value === '2') {
      this.checkTable = false;
      this.epayment = true;
    }
  }

  // calculates total check amount
  totalcheckAmount(): number {
    let calcCheckAmount = 0;
    this.checkDataSource.data.forEach(element => {
      calcCheckAmount = calcCheckAmount + Number(element.checkAmount);
    });
    return calcCheckAmount;
  }

  // opens grant head dialog box
  openDialoggranthead(data?): void {
    console.log(data);
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(GrantHeadDialog, {
      width: '1900px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.majorHeadVal = this.majorHead_list[0].value;
      this.subMajorHeadVal = this.subMajorHead_list[0].value;
      this.minorHeadVal = this.minorHead_list[0].value;
      this.subHeadVal = this.subHead_list[0].value;
      this.detailHeadVal = this.detailHead_list[0].value;
      this.objectClassVal = this.objectClass_list[0].value;
      let headcharge;
      if (result == null) {
        headcharge = this.majorHead_list[0].value
          + ':'
          + this.subMajorHead_list[0].value
          + ':'
          + this.minorHead_list[0].value
          + ':'
          + this.subHead_list[0].value
          + ':'
          + this.detailHead_list[0].value
          + ':'
          + this.objectClass_list[0].value;
      } else {
        headcharge = result;
      }
      this.formsixtytwo.patchValue({
        schemeNo: '000000',
        subMajorHead: this.subMajorHead_list[0].value,
        minorHead: this.minorHead_list[0].value,
        subHead: this.subHead_list[0].value,
        detailHead: this.detailHead_list[0].value,
        type: this.type_list[0].value,
        objectClass: this.objectClass_list[0].value,
        billCategory: this.billCategoryList[0].value,
        majorHead: this.majorHead_list[0].value,
        demand: this.demand_list[0].value,
        headChargeable: headcharge,
      });
    });
  }

  // adds new edp row
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

  // fills edp description
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

  // rempves record
  removeRow(index) {
    this.receiptDataSource.data.splice(index, 1);
    this.summaryDataSource.data = [];
    this.receiptDataSource = new MatTableDataSource(
      this.receiptDataSource.data
    );
  }

  // removes summary row
  removeRowsummary(index) {
    this.summaryDataSource.data.splice(index, 1);
    this.summaryDataSource = new MatTableDataSource(
      this.summaryDataSource.data
    );
  }

  // adds new receipt entry row
  addrowReceptNext() {
    const Col_Data = this.summaryDataSource.data;
    Col_Data.push({
      edpCode: '9720',
      chlanDate: '2/feb/2020',
      pdAccount: '225628475',
      party: 'R K Sharma',
      amount: '200'
    });
    this.summaryDataSource.data = Col_Data;
  }

  // adds entry checklist
  addRowCheckList() {
    if (this.checkDataSource) {
      this.checkDataSource = new MatTableDataSource(checkList);
      const p_data = this.checkDataSource.data;

      p_data.push({
        checkType: '0101',
        partyName: 'Pay of Officers',
        accountNo: '1254879',
        adress: '43, shiavam, gandhinagar',
        checkAmount: '0'
      });
      this.checkDataSource.data = p_data;
    }
  }

  // deletes checklist record
  deleteCheckLisw(objIndex) {
    const p_data = this.checkDataSource.data;
    this.subObjectId.splice(objIndex, 1);
    p_data.splice(objIndex, 1);
    this.checkDataSource.data = p_data;
  }

  // selects item
  itemSelect(selectedValue) {
    console.log(selectedValue);
    if (selectedValue.value !== '1') {
      return (this.isItemList = true);
    }
    if (selectedValue.value === '1') {
      return (this.isItemList = false);
    }
  }

  // sets value on selection of bill
  billValues(data) {
    if (data.value === '3' || data.value === '4') {
      this.paymentTypeDropDown = false;
    }
    if (data.value === '1' || data.value === '2') {
      this.paymentTypeDropDown = true;
    }
    if (data.value === '3') {
      this.isSelectedTc = true;
    } else {
      this.isSelectedTc = false;
    }
  }

  addRecovery() {
    const Col_Data = this.recoveryDataSource.data;
    Col_Data.push({
      budgetCode: '',
      description: '',
      edpCode: '',
      amount: ''
    });
    this.recoveryDataSource.data = Col_Data;
  }

  recoveryData() {
    const Col_Data = this.recoveryDataSource.data;
    Col_Data.push({
      budgetCode: '3133',
      description: 'Pay Of Officers',
      edpCode: '3119',
      amount: '0.00'
    });
    Col_Data.splice(this.recoveryDataSource.data.length - 2, 1);
    this.recoveryDataSource.data = Col_Data;
  }

  // deletes recovery record
  deleteRowRecovery(index) {
    this.recoveryDataSource.data.splice(index, 1);
    this.recoveryDataSource = new MatTableDataSource(
      this.recoveryDataSource.data
    );
  }


  changeDDovalue(data, i) {
    if (data.value === '1') {
      this.DDoParty = false;
      this.checkList.splice(i, 1, {
        checkType: '1',
        partyName: '',
        address: '',
        accountNo: '',
        checkAmount: '0.00',
      });
      this.checkDataSource = new MatTableDataSource(this.checkList);
    }
    if (data.value === '2') {
      this.DDoParty = false;
      this.checkList.splice(i, 1, {
        checkType: '2',
        partyName: 'District Treasury Officer, District Treasury Office, Gandhinagar',
        address: '',
        accountNo: '',
        checkAmount: '0.00',
      });
      this.checkDataSource = new MatTableDataSource(this.checkList);
      this.DDoParty = true;

    }
  }

  // calculates total payment amount
  totalepayamount(): number {
    let calcEpayAmount = 0;
    this.epaymentDataSource.data.forEach(element => {
      calcEpayAmount = calcEpayAmount + Number(element.amount);
    });
    return calcEpayAmount;
  }

  // sets decimal point
  decimalPoint(data, key) {
    if (data[key]) {
      data[key] = Number(data[key]).toFixed(2);
    }
  }

  // formats decimal number
  decimalKeyPress(event: any) {
    const pattern = /^\d+(\\d{0,0})?$/;
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

  // opens GTR 62A dialog box
  checkDialog(): void {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(GTR62ADialogCheckList, {
      width: '1000px'
    });

    dialogRef.afterClosed().subscribe(result => {
      const p_data = this.epaymentDataSource.data;
      this.isInputEdpCode = false;
      this.isDelete = true;

      p_data.push({
        payeeName: 'ABC Ltd',
        accountNo: 32373007812,
        ifscCode: 'SBIN002636',
        amount: '0.00'
      });
      this.epaymentDataSource.data = p_data;
    });
  }

  // calculates total epay amount
  totalAmountEpay(): number {
    let amount = 0;
    this.epaymentDataSource.data.forEach(element => {
      amount = amount + Number(element.amount);
    });
    return amount;
  }

  // routing
  gotoCheckList() {
    this.router.navigate(['/ddo/cheque-list']);
  }

  // routing
  goToReport() {
    this.router.navigate(['/ddo/report-gtr-62a']);
  }

  // allows only alphabets, space and dot in input
  onlyAlphabetSpaceDot(event: any) {
    const pattern = /^[a-zA-Z.\s]+$/;
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

  // allows only alphabets in input
  onlyAlphabet(event: any) {
    const pattern = /^[a-zA-Z]+$/;
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

  // allows only numbers and dot in input
  amountInRs(event: any) {

    const pattern = /^[0-9.]+$/;
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

  // allows only numbers in input
  onlyNumbers(event: any) {
    const pattern = /^[0-9]+$/;
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

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1))
      .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  // deletes payment record
  deletepaymentRow(index) {
    this.epaymentDataSource.data.splice(index, 1);
    this.epaymentDataSource = new MatTableDataSource(
      this.epaymentDataSource.data
    );
  }

}

export interface HeadData {
  fundType: string;
  voted: string;
  stateCss: string;
  bSubHeadSt: string;
  subHeadDes: string;
  expenditure: string;
  itemName: string;
  schemeNo: string;
}

const head_diaLog: any[] = [
  {
    fundType: 'Consolidated',
    voted: 'Voted',
    stateCss: 'State',
    bSubHeadSt: '2401:00:119:52:00:C4 ',
    subHeadDes: '52:HRT- 12 National Medicinal Plant Mission',
    expenditure: 'Standing Charges',
    itemName: '-',
    schemeNo: '000000',
    grantRecievedTillDate: '1000',
    GrantUsedBills: '0',
    Balance: '1000',
    GrantUsedSaved: '2500',
    MoreGrant: '1500'
  },
  {
    fundType: 'Consolidated',
    voted: 'Voted',
    stateCss: 'State',
    bSubHeadSt: '2401:00:119:52:00:C4 ',
    subHeadDes: '52:HRT- 12 National Medicinal Plant Mission ',
    expenditure: 'Standing Charges',
    itemName: '-',
    schemeNo: '000000',
    grantRecievedTillDate: '1000',
    GrantUsedBills: '100',
    Balance: '900',
    GrantUsedSaved: '2400',
    MoreGrant: '1500'
  },
  {
    fundType: 'Consolidated',
    voted: 'Voted',
    stateCss: 'State',
    bSubHeadSt: '2401:00:119:52:00:C4 ',
    subHeadDes: '52:HRT- 12 National Medicinal Plant Mission ',
    expenditure: 'Standing Charges',
    itemName: '-',
    schemeNo: '000000',
    grantRecievedTillDate: '1000',
    GrantUsedBills: '900',
    Balance: '100',
    GrantUsedSaved: '1600',
    MoreGrant: '1500'
  },
  {
    fundType: 'Consolidated',
    voted: 'Voted',
    stateCss: 'State',
    bSubHeadSt: '2401:00:119:52:00:C4 ',
    subHeadDes: '52:HRT- 12 National Medicinal Plant Mission ',
    expenditure: 'New Item',
    itemName: 'Purchase of new car for Director of Agriculture',
    schemeNo: '000000',
    grantRecievedTillDate: '3000',
    GrantUsedBills: '1700',
    Balance: '1300',
    GrantUsedSaved: '800',
    MoreGrant: '-'
  }
];

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'grant-head-dialog',
  templateUrl: 'grant-head-dialog.html'
})
// tslint:disable-next-line: component-class-suffix
export class GrantHeadDialog {
  constructor(
    public dialogRef: MatDialogRef<GrantHeadDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }
  displayedColumns: string[] = [
    'fundType',
    'voted',
    'stateCss',
    'bSubHeadSt',
    'subHeadDes',
    'expenditure',
    'itemName',
    'schemeNo',
    'grantRecievedTillDate',
    'GrantUsedBills',
    'Balance',
    'GrantUsedSaved',
    'MoreGrant'
  ];
  dataSource = new MatTableDataSource(head_diaLog);

  onNoClick(): void {
    this.dialogRef.close();
  }
}




@Component({
  // tslint:disable-next-line: component-selector
  selector: 'gtr-dialog-CheckList-dialog',
  templateUrl: 'gtr-dialog-Check-List.html'
})
// tslint:disable-next-line: component-class-suffix
export class GTR62ADialogCheckList implements OnInit {
  ELEMENT_DATA1: any[] = [
    {
      venderDetails: ' ',
      vender: 'ABC Ltd',
      checkType: 'Contractor',
      accountNo: '3600178925',
      ifscCode: 'SBIN002636',
      bankBranchName: 'sargasan',
      panNo: 'EOXPS8331P',
      rateOfIncomeTax: '10.00',
      mobileNo: '8825077304'
    },
    {
      venderDetails: ' ',
      vender: 'XAT Ltd',
      checkType: 'Contractor',
      accountNo: '3600178926',
      ifscCode: 'SBIN002636',
      bankBranchName: 'Kudasan',
      panNo: 'EOXPS8331Q',
      rateOfIncomeTax: '10.00',
      mobileNo: '8825077604'
    },
    {
      venderDetails: ' ',
      vender: 'YAB Ltd',
      checkType: 'Contractor',
      accountNo: '3600178927',
      ifscCode: 'SBIN002636',
      bankBranchName: 'sargasan',
      panNo: 'EOXPS8331R',
      rateOfIncomeTax: '10.00',
      mobileNo: '8825077604'
    },
    {
      venderDetails: ' ',
      vender: 'ZCCB Ltd',
      checkType: 'Contractor',
      accountNo: '3600178985',
      ifscCode: 'SBIN002636',
      bankBranchName: 'Kudasan',
      panNo: 'EOXPS8331S',
      rateOfIncomeTax: '10.00',
      mobileNo: '8825077904'
    },
    {
      venderDetails: ' ',
      vender: 'CAXD Ltd',
      checkType: 'Contractor',
      accountNo: '3600178929',
      ifscCode: 'SBIN002638',
      bankBranchName: 'Randesan',
      panNo: 'EOXPS8331T',
      rateOfIncomeTax: '10.00',
      mobileNo: '8825077104'
    },
    {
      venderDetails: ' ',
      vender: 'VET Ltd',
      checkType: 'Contractor',
      accountNo: '3600178922',
      ifscCode: 'SBIN002639',
      bankBranchName: 'sargasan',
      panNo: 'EOXPS8331U',
      rateOfIncomeTax: '10.00', mobileNo: '8825077504'
    },
    {
      venderDetails: ' ',
      vender: 'NETR Ltd',
      checkType: 'Contractor',
      accountNo: '3600178921',
      ifscCode: 'SBIN002640',
      bankBranchName: 'Randesan',
      panNo: 'EOXPS8331V', rateOfIncomeTax: '10.00', mobileNo: '8825077704'
    },

  ];
  ifscSame: Boolean;
  filterElement_Data: any[];
  smartSearch: FormGroup;
  dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA1);
  selection = new SelectionModel<PeriodicElement>(true, []);
  displayedColumns: string[] = [
    'select',
    'vender',
    'checkType',
    'accountNo',
    'ifscCode',
    'bankBranchName',
    'panNo',
    'rateOfIncomeTax',
    'mobileNo'];
  checkTypeNameCtrl: FormControl = new FormControl();
  @ViewChild(MatSort) sort: MatSort;
  checkTypeNameList: ListValue[] = [
    { value: '1', viewValue: 'Beneficary' },
    { value: '2', viewValue: 'Contractor' },
    { value: '3', viewValue: 'Grant In Aid' },
    { value: '4', viewValue: 'GST / TDS' },
    { value: '5', viewValue: 'Scholorship' },
    { value: '6', viewValue: 'Service Provider' },
    { value: '7', viewValue: 'Supplier ' },
  ];
  error_message = 'Please enter valid format of PAN No. in format Like :  AAAAA1111A';
  isIFSCValid;
  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<GTR62ADialogCheckList>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }
  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.smartSearch = this.fb.group({

      vendorName: [''],
      checkTypeName: [''],
      accountNoName: [''],
      ifscCode: [''],
      branchName: [''],
      panNoName: ['', Validators.pattern(/^([A-Z]){5}([0-9]){4}([A-Z]){1}?$/)],
      rateOfIncomeTax: [''],
      mobileNoName: ['']
    });
  }

  // search method
  onSearch() {
    const formVal = this.smartSearch.value;
    if (formVal.vendorName !== '' && formVal.vendorName != null) {
      this.filterElement_Data = this.ELEMENT_DATA1.filter(
        searchByVendor => searchByVendor.vender.toLowerCase() === formVal.vendorName.toLowerCase());
      this.dataSource = new MatTableDataSource<any>(this.filterElement_Data);
    }

    if (formVal.checkTypeName !== '' && formVal.checkTypeName != null) {
      if (formVal.checkTypeName === '1') {
        const checkTypeNameValue = 'Beneficary';
        this.filterElement_Data = this.ELEMENT_DATA1.filter(
          searchByCheckType => searchByCheckType.checkType.toLowerCase() === checkTypeNameValue.toLowerCase());
        this.dataSource = new MatTableDataSource<any>(this.filterElement_Data);
        console.log(this.filterElement_Data);
      }
      if (formVal.checkTypeName === '2') {
        const checkTypeNameValue = 'Contractor';
        this.filterElement_Data = this.ELEMENT_DATA1.filter(
          searchByCheckType => searchByCheckType.checkType.toLowerCase() === checkTypeNameValue.toLowerCase());
        this.dataSource = new MatTableDataSource<any>(this.filterElement_Data);
        console.log(this.filterElement_Data);
      }
      if (formVal.checkTypeName === '3') {
        const checkTypeNameValue = 'Grant In Aid';
        this.filterElement_Data = this.ELEMENT_DATA1.filter(
          searchByCheckType => searchByCheckType.checkType.toLowerCase() === checkTypeNameValue.toLowerCase());
        this.dataSource = new MatTableDataSource<any>(this.filterElement_Data);
        console.log(this.filterElement_Data);
      }
      if (formVal.checkTypeName === '4') {
        const checkTypeNameValue = 'GST / TDS';
        this.filterElement_Data = this.ELEMENT_DATA1.filter(
          searchByCheckType => searchByCheckType.checkType.toLowerCase() === checkTypeNameValue.toLowerCase());
        this.dataSource = new MatTableDataSource<any>(this.filterElement_Data);
        console.log(this.filterElement_Data);
      }
      if (formVal.checkTypeName === '5') {
        const checkTypeNameValue = 'Scholorship';
        this.filterElement_Data = this.ELEMENT_DATA1.filter(
          searchByCheckType => searchByCheckType.checkType.toLowerCase() === checkTypeNameValue.toLowerCase());
        this.dataSource = new MatTableDataSource<any>(this.filterElement_Data);
        console.log(this.filterElement_Data);
      }
      if (formVal.checkTypeName === '6') {
        const checkTypeNameValue = 'Service Provider';
        this.filterElement_Data = this.ELEMENT_DATA1.filter(
          searchByCheckType => searchByCheckType.checkType.toLowerCase() === checkTypeNameValue.toLowerCase());
        this.dataSource = new MatTableDataSource<any>(this.filterElement_Data);
        console.log(this.filterElement_Data);
      }
      if (formVal.checkTypeName === '7') {
        const checkTypeNameValue = 'Supplier';
        this.filterElement_Data = this.ELEMENT_DATA1.filter(
          searchByCheckType => searchByCheckType.checkType.toLowerCase() === checkTypeNameValue.toLowerCase());
        this.dataSource = new MatTableDataSource<any>(this.filterElement_Data);
        console.log(this.filterElement_Data);
      }
    }

    if (formVal.accountNoName !== '' && formVal.accountNoName != null) {
      this.filterElement_Data = this.ELEMENT_DATA1.filter(
        searchByAccount => searchByAccount.accountNo.toLowerCase() === formVal.accountNoName.toLowerCase());
      this.dataSource = new MatTableDataSource<any>(this.filterElement_Data);
    }

    if (formVal.ifscCode !== '' && formVal.ifscCode != null) {
      this.filterElement_Data = this.ELEMENT_DATA1.filter(
        searchByifscCode => searchByifscCode.ifscCode.toLowerCase() === formVal.ifscCode.toLowerCase());
      this.dataSource = new MatTableDataSource<any>(this.filterElement_Data);
      if (this.filterElement_Data.length !== 0) {
        this.isIFSCValid = true;
      } else {
        this.isIFSCValid = false;
      }
    }


    if (formVal.branchName !== '' && formVal.branchName != null) {
      this.filterElement_Data = this.ELEMENT_DATA1.filter(
        searchByBranch => searchByBranch.bankBranchName.toLowerCase() === formVal.branchName.toLowerCase());
      this.dataSource = new MatTableDataSource<any>(this.filterElement_Data);

    }

    if (formVal.panNoName !== '' && formVal.panNoName != null) {
      this.filterElement_Data = this.ELEMENT_DATA1.filter(
        searchByPan => searchByPan.panNo === formVal.panNoName);
      this.dataSource = new MatTableDataSource<any>(this.filterElement_Data);
    }

    if (formVal.rateOfIncomeTax !== '' && formVal.rateOfIncomeTax != null) {
      this.filterElement_Data = this.ELEMENT_DATA1.filter(
        searchByrateOfIncomeTax => searchByrateOfIncomeTax.rateOfIncomeTax.toLowerCase() === formVal.rateOfIncomeTax.toLowerCase());
      this.dataSource = new MatTableDataSource<any>(this.filterElement_Data);
    }

    if (formVal.mobileNoName !== '' && formVal.mobileNoName != null) {
      this.filterElement_Data = this.ELEMENT_DATA1.filter(
        searchByMobile => searchByMobile.mobileNo.toLowerCase() === formVal.mobileNoName.toLowerCase());
      this.dataSource = new MatTableDataSource<any>(this.filterElement_Data);
    }


    if ((formVal.vendorName === '' || formVal.vendorName == null)
      && (formVal.checkTypeName === '' || formVal.checkTypeName == null)
      && (formVal.accountNoName === '' || formVal.accountNoName == null)
      && (formVal.panNoName === '' || formVal.panNoName == null)
      && (formVal.mobileNoName === '' || formVal.mobileNoName == null)
      && (formVal.branchName === '' || formVal.branchName == null)
      && (formVal.ifscCode === '' || formVal.ifscCode == null)) {
      this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA1);
    }
  }


  checkIfsc() {
    const formVal = this.smartSearch.value;
    if (formVal.ifscCode !== '' && formVal.ifscCode != null) {
      this.filterElement_Data = this.ELEMENT_DATA1.filter(
        searchByifscCode => searchByifscCode.ifscCode.toLowerCase() === formVal.ifscCode.toLowerCase());

      if (this.filterElement_Data.length !== 0) {
        this.isIFSCValid = true;
      } else {
        this.isIFSCValid = false;
      }
    }
  }

  get fc() {
    return this.smartSearch.controls;
  }

  // clears form
  clearForm() {
    this.smartSearch.reset();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  addToBill() { }

  getTabIndex($event) { }

  resetForm() { }


}
