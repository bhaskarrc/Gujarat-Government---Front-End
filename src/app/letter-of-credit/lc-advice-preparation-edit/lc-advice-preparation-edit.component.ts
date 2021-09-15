import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DialogData } from 'src/app/model/standing-charge';
import { lcMessage } from 'src/app/common/error-message/common-message.constants';
import { ListValue, AdviceReceipt, Deduction, DeductionLCAdvice } from 'src/app/model/letter-of-credit';
import { LetterOfCreditDirectives } from 'src/app/common/directive/letter-of-credit-directive';
import {
  LcNumberDialogComponent, MapEPaymentComponent, adviceReceiedDialogCheckList
} from '../lc-advice-received/lc-advice-received.component';
import { Router } from '@angular/router';
declare function SetGujarati();
declare function SetEnglish();
/* Select Verify Number */
@Component({
  selector: 'app-verify',
  templateUrl: 'verify.html',
  styleUrls: ['./lc-advice-preparation-edit.component.css']
})

export class verifyComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<verifyComponent>, private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-lc-advice-preparation-edit',
  templateUrl: './lc-advice-preparation-edit.component.html',
  styleUrls: ['./lc-advice-preparation-edit.component.css']
})
export class LcAdvicePreparationEditComponent implements OnInit {

  todayDate = new Date();

  // List of Months
  MonthList: ListValue[] = [
    { value: '1', viewValue: 'January' },
    { value: '2', viewValue: 'February' },
    { value: '3', viewValue: 'March' },
    { value: '4', viewValue: 'April' },
    { value: '5', viewValue: 'May' },
    { value: '6', viewValue: 'June' },
    { value: '7', viewValue: 'July' },
    { value: '8', viewValue: 'August' },
    { value: '9', viewValue: 'Sepetember' },
    { value: '10', viewValue: 'October' },
    { value: '11', viewValue: 'November' },
    { value: '12', viewValue: 'December' }
  ];

  // List of Payment Type
  PaymentTypeList: ListValue[] = [
    { value: '1', viewValue: 'Cheque' },
    { value: '2', viewValue: 'E-payment' }
  ];

  // Table data for Advice Receipt Table
  LcAdviceReceiptDATA: AdviceReceipt[] = [
    { chequeDate: this.todayDate, chequeNo: 'AFR007-100001', partyName: '', chequeAmount: '', isGenerateChequeNo: false }
  ];

  // Table Column for Advice Receipt Table
  LcAdviceReceiptDATAColumn: string[] = [
    'chequeDate', 'chequeNo', 'partyName', 'chequeAmount', 'action'
  ];

  // Table Data for Advice Receipt ePayment Table
  LcAdviceReceiptEPaymentDATA: any[] = [
    { partyName: 'ABC Ltd', bankAccountNumber: '32373007812', IFSCCode: 'SBIN002636', epaymentAmount: '0.00' },
  ];

  // Table Column for Advice Receipt ePayment Table
  LcAdviceReceiptEPaymentDATAColumn: string[] = [
    'partyName', 'bankAccountNumber', 'IFSCCode', 'epaymentAmount', 'action'
  ];

  // List of Advices
  AdviceTypeList: ListValue[] = [
    { value: '1', viewValue: '1.PAY ALLOW RETIREMENT BENEFITS I.E. LTC & LEAVE ENCAS. AT RETI.' },
    { value: '2', viewValue: '2.WIDOW RELIEF ASSITANCE TO AGEDHELPLESS' },
    { value: '3', viewValue: '3.BILLS OF SCARCITY' },
    { value: '4', viewValue: '4.BILLS OF DIET CHARGES OF HOSPITAL' },
    { value: '5', viewValue: '5.SCOLARSHIP/STIPEND BILLS' },
    { value: '6', viewValue: '6.RELIEF ON SALETAX LIEVED ON DIESEL OF FISHERMAN' },
    { value: '7', viewValue: '7.TELEPHONE LIGHT BILLS' },
    { value: '8', viewValue: '8.PETROL/DIESEL BILLS' },
    { value: '9', viewValue: '9.POSTAL STAMP EXPENDITURE FOR OFFICE USE' },
    { value: '10', viewValue: '10.EXP. UNDER MID DAY MEALS SCHEME' },
  ];

  // List of Exemptions
  ExemptionTypeList: ListValue[] = [
    { value: '1', viewValue: 'Exempted' },
    { value: '2', viewValue: 'Non-Exempted' }
  ];

  // List of Estimation Type
  typeOfEstimationList: ListValue[] = [
    { value: '1', viewValue: 'Standing Charges' },
    { value: '2', viewValue: 'New Item' },
    { value: '3', viewValue: 'New Work' },
    { value: '4', viewValue: 'Item Continuous' },
    { value: '5', viewValue: 'Work-In-Progress' },
  ];

  // List of Item Name
  itemNameList: ListValue[] = [
    { value: '1', viewValue: 'Construction of Govt. Hostel' },
    { value: '2', viewValue: 'Maintance of Road' },
    { value: '3', viewValue: 'Maintance of Boys Hostel' },
  ];

  // Table data for Details Posting Table
  DetailPostingData: any[] = [
    {
      fund: '3',
      classOfExpenditure: '1',
      budgetType: '1',
      schemeNo: '000000',
      demandNo: '1',
      majorHead: '1',
      subMajorHead: '1',
      minorHead: '1',
      subHead: '1',
      detailClass: '1',
      typeOfEstimation: '1',
      itemName: '',
      objectClass: '2',
      mapEpayment: '',
      expenditureAmount: '5000.00',
      headwiseAvailableAmount: '5000.00',
      lcNumber: '',
      search: '',
      fund3Disable: false,
      itemDisable: true
    },
  ];

  // Table Columns for Detail Posting Table
  DetailPostingColumn: string[] = [
    'fund',
    'classOfExpenditure',
    'budgetType',
    'demandNo',
    'majorHead',
    'subMajorHead',
    'minorHead',
    'subHead',
    'detailClass',
    'typeOfEstimation',
    'itemName',
    'objectClass',
    'schemeNo',
    'mapEpayment',
    'expenditureAmount',
    'headwiseAvailableAmount',
    'lcNumber',
    'search',
    'action'
  ];

  // List of Expenditure Classes
  ClassOfExpenditureList: ListValue[] = [
    { value: '1', viewValue: 'Voted' },
    { value: '2', viewValue: 'Charged' }
  ];

  // List of Fund Type
  FundList: ListValue[] = [
    { value: '3', viewValue: 'Consolidated' },
    { value: '4', viewValue: 'Contingency' },
    { value: '5', viewValue: 'Public Account' }
  ];

  // List Expenditure type
  TypeOfExpenditureList: ListValue[] = [
    { value: '1', viewValue: 'Standing Charges' },
    { value: '2', viewValue: 'Development Charges' }
  ];

  // List of Budget Type
  BudgetTypeList: ListValue[] = [
    { value: '1', viewValue: 'State' },
    { value: '2', viewValue: 'CSS' }
  ];

  // List of Demand Number
  DemandNoList: ListValue[] = [
    { value: '1', viewValue: '026' },
    { value: '2', viewValue: '999' },
  ];

  // List of Major Head
  MajorHeadList: ListValue[] = [
    { value: '1', viewValue: '2406' },
    { value: '2', viewValue: '8009' },
  ];

  // List of Sub Major Head
  SubMajorHeadList: ListValue[] = [
    { value: '1', viewValue: '01' },
  ];

  // List of Minor Head
  MinorHeadList: ListValue[] = [
    { value: '1', viewValue: '001' },
    { value: '2', viewValue: '101' },
  ];

  // List of Sub Head
  SubHeadList: ListValue[] = [
    { value: '1', viewValue: '01' },
    { value: '2', viewValue: '02' },
  ];

  // List of Detail Class
  DetailClassList: ListValue[] = [
    { value: '1', viewValue: '00' },
  ];

  // List of Object Classes
  ObjectClassList: ListValue[] = [
    { value: '1', viewValue: 'C0' },
    { value: '2', viewValue: 'C1' },
    { value: '3', viewValue: 'C2' },
    { value: '4', viewValue: 'C3' },
    { value: '5', viewValue: 'C4' },
    { value: '6', viewValue: 'C5' },
    { value: '7', viewValue: 'C6' },
    { value: '8', viewValue: 'C7' },
  ];

  // List of Numbers
  LcNumberList: ListValue[] = [
    { value: '', viewValue: '' },
  ];

  // Table data for Deduction table
  DeductionData: DeductionLCAdvice[] = [
    {
      professionlTax: '0.00', laborClass: '0.00', forAllMH: '0.00', incomeTax: '0.00',
      surcharge: '0.00', gpfClassIV: '0.00', rentOfBldg: '0.00', govtInsuranceFund: '0.00', cpf: '0.00',
      insuranceFund: '0.00', securityDeposit: '0.00', establishmentCharges: '0.00', machinaryCharges: '0.00',
    }
  ];

  // Table Columns for Deduction Table
  DeductionDataColumn: string[] = [
    'professionlTax', 'laborClass', 'forAllMH', 'incomeTax', 'surcharge', 'gpfClassIV', 'cpf',
    'rentOfBldg', 'govtInsuranceFund', 'insuranceFund',
    'securityDeposit', 'establishmentCharges', 'machinaryCharges'
  ];

  // List of Cheyque type
  checkType: ListValue[] = [
    { value: '1', viewValue: 'Beneficiary' },
    { value: '2', viewValue: 'Contractor' },
    { value: '3', viewValue: 'Grant In Aid' },
    { value: '4', viewValue: 'GST TDS' },
    { value: '5', viewValue: 'Scholarship' },
    { value: '6', viewValue: 'Service Provider' },
    { value: '7', viewValue: 'Supplier' },
  ];


  // List of Attachments
  attachmentTypeCode: any[] = [
    { value: '01', viewValue: 'Supporting Document' },
    { value: '02', viewValue: 'Sanction Order' },
    { value: '03', viewValue: 'Others' },
  ];

  currentLang = 'Guj';
  errorRemarks: boolean;
  isDelete = false;
  divisionNameTooltip = 'Dy. Con. Of Forest Training Centre, Gandhinagar';
  departmentTooltip = 'Forest Department';
  treasuryOfficeTooltip = 'District Treasury Office, Gandhinagar';
  divisionOfficeTooltip = 'Dy. Con. Of Forest Training Centre, Gandhinagar';
  drawingOfficerTooltip = 'Deputy Conservator,  Dy. Con. Of Forest Training Centre, Gandhinagar';
  budgetTypeDisabled = false;
  itemNameDisabled = false;
  chequeNo = 100001;
  openingBalance = 0;
  newBalance = 36500000;
  showChequeTable = false;
  showEpaymentTable = true;
  isSearch: boolean;
  lcAdviceReceivedForm: FormGroup;
  MonthCtrl: FormControl = new FormControl();
  PaymentTypeCtrl: FormControl = new FormControl();
  AdviceTypeCtrl: FormControl = new FormControl();
  ExemptionTypeCtrl: FormControl = new FormControl();
  ClassOFExpenditureCTRL: FormControl = new FormControl();
  FundCTRL: FormControl = new FormControl();
  TypeOfExpenditureCTRL: FormControl = new FormControl();
  BudgetTypeCTRL: FormControl = new FormControl();
  DemandNoCTRL: FormControl = new FormControl();
  MajorHeadCTRL: FormControl = new FormControl();
  SubMajorHeadCTRL: FormControl = new FormControl();
  MinorHeadCTRL: FormControl = new FormControl();
  SubHeadCTRL: FormControl = new FormControl();
  DetailClassCTRL: FormControl = new FormControl();
  ObjectClassCTRL: FormControl = new FormControl();
  LcNumberCTRL: FormControl = new FormControl();
  checkTypeCtrl: FormControl = new FormControl();
  itemNameCtrl: FormControl = new FormControl();
  typeOfEstimationCTRL: FormControl = new FormControl();
  LcAdviceReceiptDataSource = new MatTableDataSource<AdviceReceipt>(this.LcAdviceReceiptDATA);
  LcAdviceReceiptEPaymentDataSource = new MatTableDataSource<any>(this.LcAdviceReceiptEPaymentDATA);
  DetailPostingDataSource = new MatTableDataSource<any>(this.DetailPostingData);
  DeductionDataSource = new MatTableDataSource<Deduction>(this.DeductionData);
  errors = lcMessage;

  constructor(private fb: FormBuilder, private el: ElementRef, public dialog: MatDialog, private router: Router) { }

  // Create object to access Methods of Letter of Credit Directive
  directiveObject = new LetterOfCreditDirectives(this.router, this.dialog, this.el);

  ngOnInit() {
    this.lcAdviceReceivedFormData();
  }

  // Initialize Form Fields
  lcAdviceReceivedFormData() {
    this.lcAdviceReceivedForm = this.fb.group({
      adviceNumber: [{ value: 'ADV57AFR0070001', disabled: true }],
      adviceDate: [{ value: (new Date(2020, 5, 17)), disabled: true }],
      divisionCode: [{ value: 'AFR007', disabled: true }],
      divisionName: [{ value: 'Dy. Con. Of Forest Training Centre, Gandhinagar', disabled: true }],
      department: [{ value: 'Forest Department', disabled: true }],
      district: [{ value: 'Gandhinagar', disabled: true }],
      treasuryOffice: [{ value: 'District Treasury Office, Gandhinagar', disabled: true }],
      divisionOffice: [{ value: 'Dy. Con. Of Forest Training Centre, Gandhinagar', disabled: true }],
      drawingOfficer: [{ value: 'Deputy Conservator,  Dy. Con. Of Forest Training Centre, Gandhinagar', disabled: true }],
      bank: [{ value: 'State Bank Of India', disabled: true }],
      lcValidFrom: [{ value: (new Date(2020, 6, 1)), disabled: true }],
      month: [{ value: (new Date().getMonth() + 1).toString(), disabled: true }],
      paymentType: [{ value: '2', disabled: true }],
      adviceType: [{ value: '', disabled: true }],
      exemption: [{ value: '2', disabled: true }],
      ddoNumber: [{ value: '986', disabled: true }],
      chequeTypeCheck: [{ value: '', disabled: true }],
      raiseObjectionCheckbox: [''],
      objectionRemarks: [''],
    });
  }

  // Method executed on fund change
  onFund(element, event) {

    if (event.value === '5') {
      element.fund3Disable = true;
      element.demandNo = '2';
      element.classOfExpenditure = '';
      element.budgetType = '';
      element.majorHead = '';
      element.subMajorHead = '';
      element.minorHead = '';
      element.subHead = '';
      element.detailClass = '';
      element.typeOfEstimation = '';
      element.itemName = '';
      element.objectClass = '';
      element.schemeNo = '';
    } else {

      element.fund3Disable = false;
      element.classOfExpenditure = '';
      element.budgetType = '';
      element.demandNo = '';
      element.majorHead = '';
      element.subMajorHead = '';
      element.minorHead = '';
      element.subHead = '';
      element.detailClass = '';
      element.typeOfEstimation = '';
      element.itemName = '';
      element.objectClass = '';
      element.schemeNo = '';
    }

  }

  // Method executed on class change
  onClass(element) {
    element.budgetType = '';
    element.demandNo = '';
    element.majorHead = '';
    element.subMajorHead = '';
    element.minorHead = '';
    element.subHead = '';
    element.detailClass = '';
    element.typeOfEstimation = '';
    element.itemName = '';
    element.objectClass = '';
    element.schemeNo = '000000';
  }

  // Method executed on Budget change
  onBudget(element) {
    element.demandNo = '';
    element.majorHead = '';
    element.subMajorHead = '';
    element.minorHead = '';
    element.subHead = '';
    element.detailClass = '';
    element.typeOfEstimation = '';
    element.itemName = '';
    element.objectClass = '';
    element.schemeNo = '000000';
  }

  // Method execute on demand change
  onDemand(element) {
    element.majorHead = '';
    element.subMajorHead = '';
    element.minorHead = '';
    element.subHead = '';
    element.detailClass = '';
    element.typeOfEstimation = '';
    element.itemName = '';
    element.objectClass = '';
    element.schemeNo = '000000';
  }

  // Method executed on major head change
  onMajor(element) {
    element.subMajorHead = '';
    element.minorHead = '';
    element.subHead = '';
    element.detailClass = '';
    element.typeOfEstimation = '';
    element.itemName = '';
    element.objectClass = '';
    element.schemeNo = '000000';
  }

  // Method executed on Sub Major head change
  onSubMajor(element) {
    element.minorHead = '';
    element.subHead = '';
    element.detailClass = '';
    element.typeOfEstimation = '';
    element.itemName = '';
    element.objectClass = '';
    element.schemeNo = '000000';
  }

  // Method executed on Minor head change
  onMinor(element) {
    element.subHead = '';
    element.detailClass = '';
    element.typeOfEstimation = '';
    element.itemName = '';
    element.objectClass = '';
    element.schemeNo = '000000';
  }

  // Method executed on Sub head change
  onSub(element) {
    element.detailClass = '';
    element.typeOfEstimation = '';
    element.itemName = '';
    element.objectClass = '';
    element.schemeNo = '000000';
  }

  // Method executed on Detail head change
  onDetail(element) {
    element.typeOfEstimation = '';
    element.itemName = '';
    element.objectClass = '';
    element.schemeNo = '000000';
  }

  // Method executed on Estimation type change
  onTypeEstimate(element) {
    if (element.typeOfEstimation === '1') {
      element.itemDisable = true;
      element.itemName = '';
      element.objectClass = '';
      element.schemeNo = '000000';
    } else {

      element.itemDisable = false;
      element.itemName = '';
      element.objectClass = '';
      element.schemeNo = '000000';
    }

  }

  // Method executed on Item Name change
  onItemName(element) {
    element.objectClass = '';
    element.schemeNo = '000000';
  }

  // Method executed on Object class change
  onObjectClass(element) {
    element.schemeNo = '000000';
  }

  // Method to Show Cheque Table or Empayment Table
  showChequeEpayment() {
    if (this.lcAdviceReceivedForm.controls['paymentType'].value == '1') {
      this.showChequeTable = true;
      this.showEpaymentTable = false;
    } else {
      this.showChequeTable = false;
      this.showEpaymentTable = true;
    }
  }

  // Method to add row in Advice Receipt Table
  addRow() {
    const p_data = this.LcAdviceReceiptDataSource.data;
    this.isDelete = true;
    p_data.push({
      chequeDate: this.todayDate,
      chequeNo: 'AFR007-' + (this.chequeNo + 1),
      partyName: '',
      chequeAmount: '0.00',
      isGenerateChequeNo: false
    });
    ++this.chequeNo;
    this.LcAdviceReceiptDataSource.data = p_data;
  }

  // Method to delete row in Advice Receipt Table
  deleteRow(index) {
    this.LcAdviceReceiptDataSource.data.splice(index, 1);
    this.LcAdviceReceiptDataSource = new MatTableDataSource(
      this.LcAdviceReceiptDataSource.data
    );
  }

  // Method to add row in ePayment Table
  addEPaymentRow() {
    const p_data = this.LcAdviceReceiptEPaymentDataSource.data;
    this.isDelete = true;
    p_data.push({
      partyName: '',
      bankAccountNumber: '',
      IFSCCode: '',
      epaymentAmount: '0.00',
    });
    this.LcAdviceReceiptEPaymentDataSource.data = p_data;
  }

  // Method to delete row from ePayment Table
  deleteEPaymentRow(index) {
    this.LcAdviceReceiptEPaymentDataSource.data.splice(index, 1);
    this.LcAdviceReceiptEPaymentDataSource = new MatTableDataSource(
      this.LcAdviceReceiptEPaymentDataSource.data
    );
  }

  // Method to add row in Details Posting Table
  addDetailsPostingRow() {
    const p_data = this.DetailPostingDataSource.data;
    this.isDelete = true;
    p_data.push({
      fund: '3',
      classOfExpenditure: '1',
      budgetType: '1',
      expenditureAmount: '0.00',
      headwiseAvailableAmount: '0.00',
    });
    this.DetailPostingDataSource.data = p_data;
  }

  // Method to delete row from Detail Posting Table
  deleteDetailsPostingRow(index) {
    this.DetailPostingDataSource.data.splice(index, 1);
    this.DetailPostingDataSource = new MatTableDataSource(this.DetailPostingDataSource.data);
  }

  // Method to open map e-Payment dialog box
  mapEPayment() {
    if (this.showEpaymentTable) {
      const dialogRef = this.dialog.open(MapEPaymentComponent, {
        width: '1000px'
      });
      dialogRef.afterClosed().subscribe(result => {
      });
    }
  }

  // Method to open Search Authorize Treasury dialog Box
  searchAuthorizeTreasury(element) {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(LcNumberDialogComponent, {
      width: '1000px'
    });
    dialogRef.afterClosed().subscribe(result => {

      element.lcNumber = result[0].lcOrderNo;
      element.headwiseAvailableAmount = result[0].amount;

    });
  }

  // Method to Calculate Total Deduction Amount
  totalDeductionAmount() {
    let deductionAmount = 0;
    this.DeductionDataSource.data.forEach((element) => {
      deductionAmount = Number(element.professionlTax) + Number(element.laborClass) + Number(element.forAllMH) + Number(element.incomeTax) +
        Number(element.surcharge) + Number(element.gpfClassIV) + Number(element.rentOfBldg) + Number(element.govtInsuranceFund) +
        Number(element.insuranceFund) + Number(element.securityDeposit) + Number(element.establishmentCharges) + Number(element.machinaryCharges);
    });
    return deductionAmount;
  }

  // Method to Calculate total of Opening Balance and New Balance
  lcBalance() {
    return this.openingBalance + this.newBalance;
  }

  // Method to open Dialgbox of Advice Received
  checkDialog(event?: boolean): void {
    if (event) {
      // tslint:disable-next-line: no-use-before-declare
      const dialogRef = this.dialog.open(adviceReceiedDialogCheckList, {
        width: '1000px'
      });

      dialogRef.afterClosed().subscribe(result => {
        const p_data = this.LcAdviceReceiptEPaymentDataSource.data;
        this.isDelete = true;

        p_data.push({
          checkType: 'Supplier',
          designation: 'Pay of Officers',
          partyName: 'ABC Ltd',
          bankAccountNumber: 32373007812,
          IFSCCode: 'SBIN002636',
          epaymentAmount: '5000.00'
        });
        this.LcAdviceReceiptEPaymentDataSource.data = p_data;
      });
    }
  }

  // Method to open Verify Dialog box
  verify(): void {
    const dialogRef = this.dialog.open(verifyComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  // Method to show Raise Objection Remarks Textbox
  updateRemarks() {
    if (this.lcAdviceReceivedForm.controls['raiseObjectionCheckbox'].value) {
      this.errorRemarks = true;
    } else {
      this.errorRemarks = false;
    }
  }
  // ----------------Toggle Eng Guj---------------------
  setEnglishOnFocusOut() {
    SetEnglish();
  }
  setLang() {
    if (this.currentLang === 'Guj') {
      SetEnglish();
    } else {
      SetGujarati();
    }
  }

  toggleLanguage() {
    // this.currentLang = this.currentLang === 'Guj' ? 'Eng' : 'Guj';
    if (this.currentLang === 'Guj') {
      this.currentLang = 'Eng';
    } else {
      this.currentLang = 'Guj';
    }
  }
  // ---------------------------------------------------
}
