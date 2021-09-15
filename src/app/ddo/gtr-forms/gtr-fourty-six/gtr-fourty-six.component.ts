import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/model/standing-charge';
import { SelectionModel } from '@angular/cdk/collections';
import { Router } from '@angular/router';
import {
  HeadData,
  EdpDetails,
  ReceiptDetails,
  ReceiptDataSummary,
  ReceiptSummaryDeduction,
  ChequeDetails,
  RecoveryDetails,
  EPaymentDetails,
  GtrDetailsFourtyFive,
  GtrDetailsFourtyFiveList,
  ChallanList, ChequeListTypeDialog
} from 'src/app/model/ddo-forms';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { DdoDirective } from 'src/app/common/directive/ddo-directive';
import { HeaderElement } from 'src/app/model/common-listing';


/**  GtrFourtySixComponent start*/
@Component({
  selector: 'app-gtr-fourty-six',
  templateUrl: './gtr-fourty-six.component.html',
  styleUrls: ['./gtr-fourty-six.component.css']
})
export class GtrFourtySixComponent implements OnInit {

  // variables
  gtrfourtyFive = 'FORM GTR  46  - Detailed Bill of Contingent Charges of';
  refNuber = 'Reference Number:';
  refNuberDate = 'Reference Date:';
  home = 'Home';
  ddo = 'DDO';
  createBill = 'Create Online Bill';
  billPreForm = 'Bill Preparation Form';
  ddoInfo = 'DDO Information';
  budgetDetail = 'Budget Details';
  detailHeaderLable2 = 'Detailed Bill of Contingent Charges of';
  isInputEdpCode = true;
  isDelete = false;
  isInputEdpCode1 = true;
  DDoParty;
  todayDate = Date.now();
  date = new FormControl(new Date());
  tabDisable: Boolean = true;
  selectedIndex: number;
  paymentTypeDropDown = true;
  checkTable = false;
  epayment = true;
  isItemList = false;
  fileBrowseIndex: number;
  billpreprationformFourtyFour: FormGroup;
  maxDate = new Date();

  // lists
  grossTotl: HeaderElement[] = [
    { label: 'Gross Total', value: '5000.00' },
    { label: 'Recovery', value: '0.00' },
    { label: 'Deduction A', value: '0.00' },
    { label: 'Deduction B', value: '0.00' },
    { label: 'Net Total', value: '5000.00' },
    { label: 'Amount in Rs.', value: 'Five Thousand Only' },
    { label: 'Appropriation For', value: '80000.00' },
    { label: 'Expenditure including this bill', value: '10000.00' },
    { label: 'Balance', value: '70000.00' },
  ];

  financialYearList: ListValue[] = [
    { value: '1', viewValue: '2019' },
    { value: '2', viewValue: '2020' },
    { value: '3', viewValue: '2021' }
  ];

  monthList: ListValue[] = [
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

  classType: ListValue[] = [
    { value: '1', viewValue: '1-Voted' },
    { value: '2', viewValue: '2-Charged' }
  ];

  fundType: ListValue[] = [
    { value: '1', viewValue: '3-Consolidated' },
    { value: '2', viewValue: '4-Contingency' }
  ];

  schemeTypeList: ListValue[] = [
    { value: '1', viewValue: '1-State' },
    { value: '2', viewValue: '2-CSS' }
  ];

  demandList: ListValue[] = [
    { value: '1', viewValue: '017:Treasury and Accounts Administration' }
  ];

  majorHeadList: ListValue[] = [
    { value: '1', viewValue: '2054 : Treasury and Accounts Administration' }
  ];
  subMajorHeadList: ListValue[] = [
    { value: '1', viewValue: '00' }
  ];

  minorHeadLlist: ListValue[] = [
    { value: '1', viewValue: '095:Directorate of Accounts and Treasuries' },
    { value: '2', viewValue: '096:Pay and Accounts Offices' },
    { value: '3', viewValue: '097:Treasury Establishment' },
  ];

  subHeadList: ListValue[] = [
    { value: '1', viewValue: '01:GES-1 Directorate' },
    { value: '2', viewValue: '01:Pay and Accounts offices ' },
    { value: '3', viewValue: '01:Treasuries' },
  ];

  detailHeadList: ListValue[] = [
    { value: '1', viewValue: '00:GES-1 Directorate' },
    { value: '2', viewValue: '00:Pay and Accounts offices' },
    { value: '3', viewValue: '00:Treasuries' },
  ];

  objectClassList: ListValue[] = [
    { value: '2', viewValue: 'Object Class-2 (Administrative Expenses)' }
  ];
  exemptedType: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];

  billCodeList: ListValue[] = [
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
    { value: '4', viewValue: 'NIL' },
  ];

  paymentType: ListValue[] = [
    { value: '1', viewValue: 'Cheque' },
    { value: '2', viewValue: 'e-payment' }
  ];

  typeList: ListValue[] = [
    { value: '1', viewValue: 'Standing Charges' },
    { value: '2', viewValue: 'New Item' },
    { value: '3', viewValue: 'New Work' },
    { value: '4', viewValue: 'Item Continuous' },
    { value: '5', viewValue: 'Work-In-Progress' }
  ];

  checkType: ListValue[] = [
    { value: '1', viewValue: 'Beneficiary' },
    { value: '2', viewValue: 'Contractor' },
    { value: '3', viewValue: 'Grant In Aid' },
    { value: '4', viewValue: 'GST TDS' },
    { value: '5', viewValue: 'Scholarship' },
    { value: '6', viewValue: 'Service Provider' },
    { value: '7', viewValue: 'Supplier' },
  ];

  checklist: ListValue[] = [
    { value: '1', viewValue: 'Party Cheque' },
    { value: '2', viewValue: 'DDO Cheque' }
  ];

  itemNameList: ListValue[] = [
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

  attachmentTypeCode: ListValue[] = [
    { value: '01', viewValue: 'Supporting Document' },
    { value: '02', viewValue: 'Sanction Order' },
    { value: '03', viewValue: 'Others' }
  ];

  // edp details
  expenditureColumn: string[] = [
    'budgetCode',
    'description',
    'edpCode',
    'amount',
  ];
  expenditureList: EdpDetails[] = [
    { budgetCode: '1300', description: 'Office Expenses', edpCode: '1301', amount: '1000.00' },
    { budgetCode: '2800', description: 'Payment Of Prof. & Special Services', edpCode: '2801', amount: '1000.00' },
    { budgetCode: '1400', description: 'Rent, Rates & Taxes', edpCode: '1401', amount: '1000.00' },
    { budgetCode: '1500', description: 'Royalty', edpCode: '1501', amount: '1000.00' },
    { budgetCode: '1600', description: 'Publications', edpCode: '1601', amount: '1000.00' },
  ];
  expenditureDataSource = new MatTableDataSource<EdpDetails>(this.expenditureList);

  // receipt details
  receiptColumn: string[] = [
    'edpCode',
    'description',
    'dedType',
    'majorHead',
    'subMajorHead',
    'minerHead',
    'subHead',
    'amount',
  ];
  receiptList: ReceiptDetails[] = [
    {
      edpCode: '9510',
      description: 'Income Tax',
      dedType: 'A',
      majorHead: '8658',
      subMajorHead: '00',
      minerHead: '112', subHead: '00', amount: '0.00'
    },
    {
      edpCode: '9530',
      description: 'Postal Life Insurance',
      dedType: 'A',
      majorHead: '8658',
      subMajorHead: '00',
      minerHead: '103',
      subHead: '00', amount: '0.00'
    },
    {
      edpCode: '9531',
      description: 'G.P.F. Class IV ',
      dedType: 'A',
      majorHead: '8009',
      subMajorHead: '01',
      minerHead: '101',
      subHead: '02',
      amount: '0.00'
    },

    {
      edpCode: '9620',
      description: 'I.A.S Provident Fund',
      dedType: 'B',
      majorHead: '8009',
      subMajorHead: '01',
      minerHead: '104',
      subHead: '01', amount: '0.00'
    },
    {
      edpCode: '9670',
      description: 'G.P.F. Other Then Class IV ',
      dedType: 'B',
      majorHead: '8009',
      subMajorHead: '01',
      minerHead: '101',
      subHead: '01',
      amount: '0.00'
    },
    {
      edpCode: '9680',
      description: 'G.P.Fund-Divisional Accountant ',
      dedType: 'B',
      majorHead: '8009',
      subMajorHead: '01',
      minerHead: '101',
      subHead: '03',
      amount: '0.00'
    },
    {
      edpCode: '9690',
      description: 'Contributory Provident Fund ',
      dedType: 'B',
      majorHead: '8009',
      subMajorHead: '01',
      minerHead: '102',
      subHead: '01', amount: '0.00'
    },
    {
      edpCode: '9720',
      description: 'Fan Advance',
      dedType: 'B',
      majorHead: '7610',
      subMajorHead: '00',
      minerHead: '800',
      subHead: '01', amount: '0.00'
    },
  ];
  receiptDataSource = new MatTableDataSource<ReceiptDetails>(this.receiptList);

  // receipt data summary
  summaryData: string[] = [
    'edpCode',
    'chlanDate',
    'pdAccount',
    'party',
    'amount',
  ];
  summaryDataList: ReceiptDataSummary[] = [
  ];
  summaryDataSource = new MatTableDataSource<ReceiptDataSummary>(this.summaryDataList);

  // receipt deduction summary
  deductionCol: string[] = ['expenditure', 'recovery', 'decuctionA', 'decuctionB'];
  deductionList: ReceiptSummaryDeduction[] = [
    { decuctionA: '0.00', decuctionB: '0.00', expenditure: '5000.00', recovery: '0.00' }
  ];
  deductionDataSource = new MatTableDataSource<ReceiptSummaryDeduction>(this.deductionList);

  // cheque details
  chequeColumn: string[] = [
    'checkType', 'partyName', 'address', 'accountNo', 'chequeAmount', 'action'];

  checkList: ChequeDetails[] = [
    {
      chequeAmount: '0',
      chequeType: '',
      address: '',
      accountNo: '',
      partyName: ''
    }
  ];
  checkDataSource = new MatTableDataSource<ChequeDetails>(this.checkList);

  // epayment details
  epaymentColumn: string[] = ['payeeName', 'accountNo', 'ifscCode', 'amount'];
  epaymentList: EPaymentDetails[] = [
    { payeeName: 'ABC Ltd', accountNo: 5123698451, ifscCode: 'SBI8542641', amount: '100' }
  ];
  epaymentDataSource = new MatTableDataSource<EPaymentDetails>(this.epaymentList);

  // recovery details
  recoveryColumn: string[] = ['budgetCode', 'description', 'edpCode', 'amount'];
  recoveryList: RecoveryDetails[] = [
    { budgetCode: '0101', description: 'Pay of Officers', edpCode: '0101', amount: '100.00' },
    { budgetCode: '7057', description: 'Festival Advances', edpCode: '7057', amount: '300.00' },
    { budgetCode: '7058', description: 'Food Grains Advances', edpCode: '7058', amount: '400.00' }
  ];
  recoveryDataSource = new MatTableDataSource<RecoveryDetails>(this.recoveryList);

  // gtr-46 details
  gtr45DetailList: GtrDetailsFourtyFive[] = [
    {
      billNo: '12',
      billRegisterNo: '26',
      billDate: '12/03/2020',
      tokenNo: '1202', voucherNo: '15', voucherDate: '24/02/2020', grossAmount: '5000.00', netAmount: '5000.00'
    },
  ];
  gtr45DetailDataSource = new MatTableDataSource<GtrDetailsFourtyFive>(this.gtr45DetailList);
  gtr45TbableColumn: string[] = ['billNo', 'billRegisterNo', 'billDate', 'tokenNo', 'voucherNo', 'voucherDate', 'grossAmount', 'netAmount'];

  // gtr details
  gtrDetailList: GtrDetailsFourtyFiveList[] = [
    { subVoucher: '', description: '', amount: '0.00' },
  ];
  gtrDetailDataSource = new MatTableDataSource<GtrDetailsFourtyFiveList>(this.gtrDetailList);
  gtrTbableColumn: string[] = ['subVoucher', 'description', 'amount', 'action'];

  // challan details
  chalanTbableColumn: string[] = ['chalanNumber', 'chalanDate', 'party', 'amount', 'action'];
  chalanList: ChallanList[] = [
    { chalanNumber: '', chalanDate: '', party: '', amount: '0.00' },
  ];
  chalanDetailDataSource = new MatTableDataSource<ChallanList>(this.chalanList);

  // form control
  monthOfCtrl: FormControl = new FormControl();
  financialYearCtrl: FormControl = new FormControl();
  classCtrl: FormControl = new FormControl();
  fundTypeCtrl: FormControl = new FormControl();
  schemeTypeCtrl: FormControl = new FormControl();
  typeCtrl: FormControl = new FormControl();
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
  paymentTypeCtrl: FormControl = new FormControl();
  schemeNoCtrl: FormControl = new FormControl();
  checkTypeCtrl: FormControl = new FormControl();
  itemCtrl: FormControl = new FormControl();
  checkTypeTwoCtrl: FormControl = new FormControl();
  directiveObject = new DdoDirective(this.dialog);

  constructor(private fb: FormBuilder, public dialog: MatDialog, private el: ElementRef, private router: Router) {

  }
  ngOnInit() {
    this.billpreprationformFourtyFour = this.fb.group({
      monthOf: ['2'],
      financialYear: ['2'],
      classExp: ['1', Validators.required],
      fundType: ['1', Validators.required],
      type: ['1', Validators.required],
      schemeType: ['1', Validators.required],
      ddoGrantHead: [''],
      schemeNo: ['1'],
      demand: ['1', Validators.required],
      majorHead: ['1', Validators.required],
      subMajorHead: ['1', Validators.required],
      minorHead: ['1', Validators.required],
      subHead: ['1', Validators.required],
      detailHead: ['1', Validators.required],
      objectClass: ['2', Validators.required],
      itemName: ['', Validators.required],
      exempted: ['1'],
      headChargeable: ['', Validators.required],
      billCode: ['1', Validators.required],
      billCategory: ['1', Validators.required],
      previousBill: ['1'],
      paymentType: ['2', Validators.required],
      establishment: [''],
      billRigister: [''],
      BillTransit: [''],
      message: ['']
    });
  }

  // sets payment type dropdown value
  billValues(data) {
    if (data.value === '3' || data.value === '4') {
      this.paymentTypeDropDown = false;
    }
    if (data.value === '1' || data.value === '2') {
      this.paymentTypeDropDown = true;
    }
  }

  // get tab index
  getTabIndex(tabIndex) {
    this.selectedIndex = tabIndex;
  }

  // go to next
  goToNext() {
    this.tabDisable = false;
    this.selectedIndex = 1;
  }

  // sets payment type grid on basis of selection of payment type
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

  // selects item
  itemSelect(selectedValue) {
    if (selectedValue.value !== '1') {
      return (this.isItemList = true);
    }
    if (selectedValue.value === '1') {
      return (this.isItemList = false);
    }
  }

  // get total amount
  getTotalAmount(): number {
    let chequeAmount = 0;
    this.checkDataSource.data.forEach(element => {
      chequeAmount = chequeAmount + Number(element.chequeAmount);
    });
    return chequeAmount;
  }

  // total epay amount
  totalAmountEpay(): number {
    let amount = 0;
    this.epaymentDataSource.data.forEach(element => {
      amount = amount + Number(element.amount);
    });
    return amount;
  }

  // calculate total expenditure amount
  totalExpeAmount(): number {
    let amount = 0;
    this.expenditureDataSource.data.forEach((element) => {
      amount = amount + Number(element.amount);
    });
    return amount;
  }

  // calculate total recovery amount
  totalRecovery(): number {
    let amount = 0;
    this.recoveryDataSource.data.forEach((element) => {
      amount = amount + Number(element.amount);
    });
    return amount;
  }

  // calculate total summary amount
  totalSummary(): number {
    let amount = 0;
    this.summaryDataSource.data.forEach((element) => {
      amount = amount + Number(element.amount);
    });
    return amount;
  }

  // calculate receipt total
  reciptTotal(): number {
    let amount = 0;
    this.receiptDataSource.data.forEach((element) => {
      amount = amount + Number(element.amount);
    });
    return amount;
  }

  // calculate challan total
  chalanTotal(): number {
    let amount = 0;
    this.chalanDetailDataSource.data.forEach((element) => {
      amount = amount + Number(element.amount);
    });
    return amount;
  }

  // calculate voucher total
  voucherTotal(): number {
    let amount = 0;
    this.gtrDetailDataSource.data.forEach((element) => {
      amount = amount + Number(element.amount);
    });
    return amount;
  }

  // calculate gtr45 gross total
  gtr45GrossTotal(): number {
    let amount = 0;
    this.gtr45DetailDataSource.data.forEach((element) => {
      amount = amount + Number(element.grossAmount);
    });
    return amount;
  }

  // calculate gtr45 net total
  gtr45NetTotal(): number {
    let amount = 0;
    this.gtr45DetailDataSource.data.forEach((element) => {
      amount = amount + Number(element.netAmount);
    });
    return amount;
  }

  // add new row in chalan details
  addnewRowchalan() {
    const Col_Data = this.chalanDetailDataSource.data;
    Col_Data.push({
      chalanNumber: '',
      chalanDate: '',
      party: '',
      amount: '0.00',
    });
    this.chalanDetailDataSource.data = Col_Data;
  }

  // delete row in challan details
  removechalanRow(index) {
    this.chalanDetailDataSource.data.splice(index, 1);
    this.summaryDataSource.data = [];
    this.chalanDetailDataSource = new MatTableDataSource(
      this.chalanDetailDataSource.data
    );
  }

  // opens dialog box for ddo grant head
  openDialog(data?): void {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(GTR46Dialog, {
      width: '1000px'
    });

    dialogRef.afterClosed().subscribe(() => {
      this.billpreprationformFourtyFour.patchValue({
        // class: 'Class I',
        schemeNo: '000000',
        demand: '1',
        majorHead: '1',
        subMajorHead: '1',
        minorHead: '1',
        subHead: '1',
        detailHead: '1',
        objectClass: '2',
        headChargeable: '2054:00:095:01:00:C2 '
      });
    });
  }

  // opens GTR46DialogCheckList
  checkDialog(): void {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(GTR46DialogCheckList, {
      width: '1000px'
    });

    dialogRef.afterClosed().subscribe(() => {
      const p_data = this.epaymentDataSource.data;
      this.isInputEdpCode = false;
      this.isDelete = true;

      p_data.push({
        payeeName: 'ABC Ltd',
        accountNo: 32373007812,
        ifscCode: 'SBIN002636',
        amount: ' 5000.00'
      });
      this.epaymentDataSource.data = p_data;
    });
  }

  // add new row in cheque table for payment mode cheque
  addNewRow() {
    const p_data = this.checkDataSource.data;
    p_data.push({
      partyName: '',
      accountNo: '',
      chequeAmount: '',
      chequeType: '',
      address: ''
    });
    this.checkDataSource.data = p_data;
  }

  // fill edp description in receipt details datasource
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

  // delete row from cheque table for payment mode cheque
  addDeletecheckDataRow(index) {
    this.checkDataSource.data.splice(index, 1);
    this.checkDataSource = new MatTableDataSource(this.checkDataSource.data);
  }

  // sets ddoparty name on basis of cheque type oin payment mode cheque
  changeDDovalue(data) {
    if (data.value === '1') {
      this.DDoParty = '';

    }
    if (data.value === '2') {
      this.DDoParty = 'District Treasury Officer, District Treasury Office, Gandhinagar';
    }
  }

  // navigates to report
  goToReport() {
    this.router.navigate(['/ddo/report-gtr-46']);
  }

  // add roe in gtr details table
  addNewRowDetail() {
    const Col_Data = this.gtrDetailDataSource.data;
    Col_Data.push({
      subVoucher: '',
      description: '',
      amount: '0.00',
    });
    this.gtrDetailDataSource.data = Col_Data;
  }

  // delete row from gtr details table
  deleteDetail(index) {
    this.gtrDetailDataSource.data.splice(index, 1);
    this.gtrDetailDataSource = new MatTableDataSource(
      this.gtrDetailDataSource.data
    );
  }
}
/**  GtrFourtySixComponent end*/



/**  GTR46Dialog start */
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'gtr46-dialog',
  templateUrl: 'gtr46-dialog.html'
})
// tslint:disable-next-line: component-class-suffix
export class GTR46Dialog {

  constructor(
    public dialogRef: MatDialogRef<GTR46Dialog>,
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
    'schemeNo'
  ];

  elementData: HeadData[] = [
    {
      fundType: 'Consolidated',
      voted: 'Voted',
      stateCss: 'State',
      bSubHeadSt: '017:2054:00:095:01:00:C2 ',
      subHeadDes: 'Treasuries',
      expenditure: 'Standing Charges',
      itemName: '-',
      schemeNo: '000000'
    },
    {
      fundType: 'Consolidated',
      voted: 'Voted',
      stateCss: 'State',
      bSubHeadSt: '017:2054:00:095:01:00:C2 ',
      subHeadDes: 'Treasuries',
      expenditure: 'New Item',
      itemName: 'Purchase of new car for Director of Agriculture',
      schemeNo: '000000'
    }
  ];
  dataSource = new MatTableDataSource<HeadData>(this.elementData);

  // closes dialog on click of close button
  onNoClick(): void {
    this.dialogRef.close();
  }

  // close the dialog box on click on budget head
  selectBudgetHead(): void {
    this.dialogRef.close();
  }
}
/**  GTR46Dialog end*/



/**  GTR46DialogCheckList start*/
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'gtr-46dialog-CheckList-dialog',
  templateUrl: 'gtr-46-dialog-Check-List.html'
})
// tslint:disable-next-line: component-class-suffix
export class GTR46DialogCheckList {

  elementData: ChequeListTypeDialog[] = [
    { vender: 'ABC Ltd', checkType: 'Contractor', accountNo: '3600178925', panNo: 'EOXPS8331P ' },
  ];
  constructor(
    public dialogRef: MatDialogRef<GTR46DialogCheckList>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private route: Router) { }
  displayedColumns: string[] = ['select', 'vender', 'checkType', 'accountNo', 'panNo'];

  dataSource = new MatTableDataSource<ChequeListTypeDialog>(this.elementData);
  directiveObj = new CommonDirective(this.route);
  selection = new SelectionModel<ChequeListTypeDialog>(true, []);

  // closes dialog on click of close button
  onNoClick(): void {
    this.dialogRef.close();
  }

  // add to bill
  addToBill() { }
}
/**  GTR46DialogCheckList end*/
