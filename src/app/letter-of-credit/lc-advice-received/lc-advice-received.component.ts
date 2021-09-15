import { Router } from '@angular/router';
import { LetterOfCreditDirectives } from 'src/app/common/directive/letter-of-credit-directive';
import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource, MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatSort } from '@angular/material';
import { DialogData } from 'src/app/model/standing-charge';
import { lcMessage } from 'src/app/common/error-message/common-message.constants';
import { ListValue, AdviceReceipt, Deduction, DeductionLCAdvice } from 'src/app/model/letter-of-credit';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { log } from 'console';

@Component({
  selector: 'app-lc-advice-received',
  templateUrl: './lc-advice-received.component.html',
  styleUrls: ['./lc-advice-received.component.css'],
  animations: [
    trigger('expandRow', [
      state('collapsed, void', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
      transition('expanded <=> void', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ]),
  ]
})
export class LcAdviceReceivedComponent implements OnInit {

  todayDate = new Date();

  // List of Month
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
    'srno', 'chequeDate', 'chequeNo', 'partyName', 'chequeAmount', 'action'
  ];

  // Table Data for Advice Receipt ePayment Table
  LcAdviceReceiptEPaymentDATA: any[] = [
  ];

  // Table Column for Advice Receipt ePayment Table
  LcAdviceReceiptEPaymentDATAColumn: string[] = [
    'srno', 'partyName', 'bankAccountNumber', 'IFSCCode', 'epaymentAmount', 'action'
  ];

  // List of Advices
  AdviceTypeList: ListValue[] = [
    { value: '1', viewValue: '1. PAY ALLOW RETIREMENT BENEFITS I.E. LTC & LEAVE ENCAS. AT RETI.' },
    { value: '2', viewValue: '2.WIDOW RELIEF ASSITANCE TO AGEDHELPLESS' },
    { value: '3', viewValue: '3.BILLS OF SCARCITY' },
    { value: '4', viewValue: '4.BILLS OF DIET CHARGES OF HOSPITAL' },
    { value: '5', viewValue: '5. SCOLARSHIP/STIPEND BILLS' },
    { value: '6', viewValue: '6.RELIEF ON SALETAX LIEVED ON DIESEL OF FISHERMAN' },
    { value: '7', viewValue: '7. TELEPHONE LIGHT BILLS' },
    { value: '8', viewValue: '8. PETROL/DIESEL BILLS' },
    { value: '9', viewValue: '9.POSTAL STAMP EXPENDITURE FOR OFFICE USE' },
    { value: '10', viewValue: '10. EXP. UNDER MID DAY MEALS SCHEME' },
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
      index: 0,
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
      expenditureAmount: '0.00',
      headwiseAvailableAmount: '0.00',
      lcNumber: '',
      search: '',
      fund3Disable: false,
      itemDisable: true
    },
    {
      index: 1,
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
      expenditureAmount: '0.00',
      headwiseAvailableAmount: '0.00',
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

  // List of Attachments
  attachmentTypeCode: any[] = [
    { value: '01', viewValue: 'Supporting Document' },
    { value: '02', viewValue: 'Sanction Order' },
    { value: '03', viewValue: 'Others' },
  ];

  // List of Numbers
  LcNumberList: ListValue[] = [
    { value: '', viewValue: '' },
  ];

  // Table data for Deduction table
  DeductionData: DeductionLCAdvice[] = [
    {
      professionlTax: '0.00',
      laborClass: '0.00',
      forAllMH: '0.00',
      incomeTax: '0.00',
      surcharge: '0.00',
      gpfClassIV: '0.00',
      cpf: '0.00',
      rentOfBldg: '0.00',
      govtInsuranceFund: '0.00',
      insuranceFund: '0.00',
      securityDeposit: '0.00',
      establishmentCharges: '0.00',
      machinaryCharges: '0.00',
    }
  ];

  // Table Columns for Deduction Table
  DeductionDataColumn: string[] = [
    'professionlTax', 'laborClass', 'forAllMH', 'incomeTax', 'surcharge', 'gpfClassIV',
    'cpf', 'rentOfBldg', 'govtInsuranceFund', 'insuranceFund',
    'securityDeposit', 'establishmentCharges', 'machinaryCharges'
  ];

  // Table data for Expand row table
  expandData: any[] = [
    { partyName: 'ABC Ltd', bankAccountNumber: '32373007812', IFSCCode: 'SBIN002636', epaymentAmount: '0.00' },
    { partyName: 'DEF Ltd', bankAccountNumber: '32373007813', IFSCCode: 'SBIN002636', epaymentAmount: '0.00' },
    { partyName: 'GHI Ltd', bankAccountNumber: '32373007814', IFSCCode: 'SBIN002636', epaymentAmount: '0.00' },
    { partyName: 'XYZ Ltd', bankAccountNumber: '32373007815', IFSCCode: 'SBIN002636', epaymentAmount: '0.00' },
  ];

  // Table Columns for Expanded Row Table
  expandDataColumn: string[] = [
    'partyName',
    'bankAccountNumber',
    'IFSCCode',
    'epaymentAmount',
  ];

  // List of Cheyque type
  checkType: ListValue[] = [
    { value: '1', viewValue: 'Beneficiary' },
    { value: '2', viewValue: 'Contractor' },
    { value: '3', viewValue: 'Employee' },
    { value: '4', viewValue: 'Grant In Aid' },
    { value: '5', viewValue: 'GST TDS' },
    { value: '6', viewValue: 'Scholarship' },
    { value: '7', viewValue: 'Service Provider' },
    { value: '8', viewValue: 'Supplier' },
  ];

  divisionNameTooltip = 'Dy. Con. Of Forest Training Centre, Gandhinagar';
  departmentTooltip = 'Forest Department';
  treasuryOfficeTooltip = 'District Treasury Office, Gandhinagar';
  divisionOfficeTooltip = 'Dy. Con. Of Forest Training Centre, Gandhinagar';
  drawingOfficerTooltip = 'Deputy Conservator,  Dy. Con. Of Forest Training Centre, Gandhinagar';
  budgetTypeDisabled = false;
  demandDisabled = false;
  isInputEdpCode = true;
  isDelete = false;
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
  itemNameCTRL: FormControl = new FormControl();
  typeOfEstimationCTRL: FormControl = new FormControl();
  workFlowData = 'fromLcAdvicePreparation';
  LcAdviceReceiptDataSource = new MatTableDataSource<AdviceReceipt>(this.LcAdviceReceiptDATA);
  LcAdviceReceiptEPaymentDataSource = new MatTableDataSource<any>(this.LcAdviceReceiptEPaymentDATA);
  DetailPostingDataSource = new MatTableDataSource<any>(this.DetailPostingData);
  DeductionDataSource = new MatTableDataSource<Deduction>(this.DeductionData);
  expandDataSource = new MatTableDataSource<Deduction>(this.expandData);
  errors = lcMessage;
  expandedElement = null;
  tempData;
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
      adviceDate: [{ value: new Date(2020, 5, 17), disabled: true }],
      divisionCode: [{ value: 'AFR007', disabled: true }],
      divisionName: [{ value: 'Dy. Con. Of Forest Training Centre, Gandhinagar', disabled: true }],
      department: [{ value: 'Forest Department', disabled: true }],
      district: [{ value: 'Gandhinagar', disabled: true }],
      treasuryOffice: [{ value: 'District Treasury Office, Gandhinagar', disabled: true }],
      divisionOffice: [{ value: 'Dy. Con. Of Forest Training Centre, Gandhinagar', disabled: true }],
      drawingOfficer: [{ value: 'Deputy Conservator,  Dy. Con. Of Forest Training Centre, Gandhinagar', disabled: true }],
      bank: [{ value: 'State Bank Of India', disabled: true }],
      lcValidFrom: [{ value: new Date(2020, 6, 1), disabled: true }],

      month: [(new Date().getMonth() + 1).toString()],
      paymentType: ['2'],
      adviceType: [''],
      exemption: ['2'],
      ddoNumber: ['986'],
      classOfExpenditure: ['1'],
      fund: ['3'],
      typeOfExpenditure: ['1'],
      budgetType: ['1'],
      schemeNo: [''],
      demandNo: [''],
      majorHead: [''],
      subMajorHead: [''],
      minorHead: [''],
      subHead: [''],
      detailClass: [''],
      typeOfEstimation: ['1'],
      objectClass: [''],
      lcNumber: [''],
      chequeTypeCheck: [''],
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
    if (element.fund === '5') {
      element.demandNo = '2';
    }
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
    if (element.fund === '5') {
      element.demandNo = '2';
    }
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
    if (this.lcAdviceReceivedForm.controls['paymentType'].value === '1') {
      this.showChequeTable = true;
      this.showEpaymentTable = false;
      this.expandedElement = null;
    } else {
      this.expandDataSource = new MatTableDataSource<Deduction>(this.LcAdviceReceiptEPaymentDataSource.data);
      this.showChequeTable = false;
      this.showEpaymentTable = true;
    }
  }

  // Method to add row in Advice Receipt Table
  addRow() {
    const p_data = this.LcAdviceReceiptDataSource.data;
    this.isInputEdpCode = false;
    this.isDelete = true;
    p_data.push({
      chequeDate: this.todayDate,
      chequeNo: 'AFR007-' + (this.chequeNo + 1),
      partyName: '',
      chequeAmount: '0.00',
      isGenerateChequeNo: false,
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
    this.isInputEdpCode = false;
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
    this.isInputEdpCode = false;
    this.isDelete = true;
    p_data.push({
      index: (this.DetailPostingDataSource.data[this.DetailPostingDataSource.data.length - 1].index + 1),
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
    let i = 0;
    this.DetailPostingDataSource.data.splice(index, 1);
    this.DetailPostingDataSource.data.forEach(item => {
      item.index = i++;
    });
    this.DetailPostingDataSource = new MatTableDataSource(this.DetailPostingDataSource.data);

  }

  // Method to open map e-Payment dialog box
  mapEPayment() {
    if (this.showEpaymentTable) {

      // // tslint:disable-next-line: no-use-before-declare
      // const dialogRef = this.dialog.open(MapEPaymentComponent, {
      //   width: '1000px'
      // });
      // dialogRef.afterClosed().subscribe(result => {
      // });
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
        // tslint:disable-next-line: max-line-length
        Number(element.insuranceFund) + Number(element.securityDeposit) + Number(element.establishmentCharges) + Number(element.machinaryCharges);
    });
    return deductionAmount;
  }

  // Method to Calculate total of Opening Balance and New Balance
  lcBalance() {
    return this.openingBalance + this.newBalance;
  }

  onlyNumber(event: any, limit?) {
    if (limit) {

      const pattern = new RegExp('^[0-9]{0,' + limit + '}$', 'g');
      const inputChar = String.fromCharCode(
        !event.charCode ? event.which : event.charCode
      );
      let tempstr = event.target.value;
      tempstr += inputChar;
      if (!pattern.test(tempstr)) {
        event.preventDefault();
        return false;
      }
    } else {
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
  }

  // Method to open Dialgbox of Advice Received
  checkDialog(event?: boolean): void {
    if (event) {
      // tslint:disable-next-line: no-use-before-declare
      const dialogRef = this.dialog.open(adviceReceiedDialogCheckList, {
        width: '1000px'
      });

      dialogRef.afterClosed().subscribe(result => {

        if (result) {
          const p_data = this.LcAdviceReceiptEPaymentDataSource.data;
          this.isInputEdpCode = false;
          this.isDelete = true;
          result.forEach(item => {
            p_data.push(item);
          });
          this.LcAdviceReceiptEPaymentDataSource.data = p_data;
          this.tempData = this.LcAdviceReceiptEPaymentDataSource.data;
          this.expandDataSource = new MatTableDataSource<Deduction>(this.tempData);
        }
      });
    } else {
      // tslint:disable-next-line: no-use-before-declare
      const dialogRef = this.dialog.open(AdviceReceivedEmployeeDialog, {
        width: '1000px'
      });

      dialogRef.afterClosed().subscribe(result => {
        const p_data = this.LcAdviceReceiptEPaymentDataSource.data;
        this.isInputEdpCode = false;
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
  // Method to Open Print Cheque Dialog
  onPrintCheque(): void {

    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(PrintChequeDialog, {
      width: '1000px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Print Cheque Dialog Closed');
    });
  }
  // generate cheque no.
  onGenerateChequeNo() {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(GenerateChequeNoDialog, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'generateChequeNo') {
        this.LcAdviceReceiptDataSource.data.forEach(item => {
          item.isGenerateChequeNo = true;
          console.log(item.chequeNo + '-' + item.isGenerateChequeNo);
        });
        this.LcAdviceReceiptDataSource.data = this.LcAdviceReceiptDataSource.data;
      } else {

      }
    });
  }


}

/* Select LC Number */
@Component({
  selector: 'app-lc-number-dialog',
  templateUrl: 'lc-number-dialog.html',
  styleUrls: ['./lc-advice-received.component.css']
})

export class LcNumberDialogComponent implements OnInit {

  // Table Data for LC Number Table
  LcNumberData: any[] = [
    { lcOrderNo: 'LC57AFR0070001', demandNo: '026', majorHead: '2406', amount: '30000000.00' },
    { lcOrderNo: 'LC57AFR0070002', demandNo: '026', majorHead: '2406', amount: '30000000.00' }
  ];

  // Table Columns for LC Number Table
  LcNumberDataCoumn: string[] = [
    'lcOrderNo', 'demandNo', 'majorHead', 'amount'
  ];
  dialogData: any[] = [];

  dialogDataSource = new MatTableDataSource<any>(this.dialogData);

  isSearch: boolean;
  lcNumberForm: FormGroup;
  LcNumberDataSource = new MatTableDataSource<any>(this.LcNumberData);

  constructor(
    public dialogRef: MatDialogRef<LcNumberDialogComponent>, private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit(): void {
    this.lcNumberFormData();
  }

  // Initialize Form Field
  lcNumberFormData() {
    this.lcNumberForm = this.fb.group({
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onClickLCNo() {
    this.dialogRef.close(this.LcNumberDataSource.data);
  }
  onLcOrderNo(e) {
    this.dialogDataSource.data.push({
      lcOrderNo: e.lcOrderNo,
      amount: e.amount,
    });
    this.dialogRef.close(this.dialogDataSource.data);
  }
}

/* MAP Empayment Details Number */
@Component({
  selector: 'app-map-epayment-dialog',
  templateUrl: 'map-epayment-dialog.html',
  styleUrls: ['./lc-advice-received.component.css']
})

export class MapEPaymentComponent implements OnInit {

  // Table Data for MAP LC Advice Receipt ePayment Table
  MapLcAdviceReceiptEPaymentDATA: any[] = [
    { partyName: 'ABC Ltd', bankAccountNumber: '32373007812', IFSCCode: 'SBIN002636', epaymentAmount: '5050' },
    { partyName: 'DEF Ltd', bankAccountNumber: '32373007813', IFSCCode: 'SBIN002636', epaymentAmount: '4582' },
    { partyName: 'GHI Ltd', bankAccountNumber: '32373007814', IFSCCode: 'SBIN002636', epaymentAmount: '8246' },
    { partyName: 'XYZ Ltd', bankAccountNumber: '32373007815', IFSCCode: 'SBIN002636', epaymentAmount: '7214' },
  ];

  // Table Coulmn for MAP LC Advice Receipt ePayment Table
  MapLcAdviceReceiptEPaymentDATAColumn: string[] = [
    'select', 'partyName', 'bankAccountNumber', 'IFSCCode', 'epaymentAmount',
  ];

  // Table Data for UnMap Advice Receipt ePayment Table
  UnmapLcAdviceReceiptEPaymentDATA: any[] = [];

  // Table Column for UnMap Advice Receipt ePayment Table
  UnmapLcAdviceReceiptEPaymentDATAColumn: string[] = [
    'select', 'partyName', 'bankAccountNumber', 'IFSCCode', 'epaymentAmount',
  ];

  mapEpaymentForm: FormGroup;
  isSearch: boolean;
  MapLcAdviceReceiptEPaymentDataSource = new MatTableDataSource<any>(this.MapLcAdviceReceiptEPaymentDATA);
  UnmapLcAdviceReceiptEPaymentDataSource = new MatTableDataSource<any>(this.UnmapLcAdviceReceiptEPaymentDATA);
  selectionMap = new SelectionModel<any>(true, []);
  selectionUnmap = new SelectionModel<any>(true, []);

  constructor(
    public dialogRef: MatDialogRef<MapEPaymentComponent>,
    private el: ElementRef, private fb: FormBuilder, public dialog: MatDialog, public router: Router,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  // Create object to access Methods of Letter of Credit Directive
  directiveObject = new LetterOfCreditDirectives(this.router, this.dialog, this.el);

  ngOnInit(): void {
  }

  // Initialize Form Fields
  mapEpaymentFormData() {
    this.mapEpaymentForm = this.fb.group({
    });
  }

  // Method for Checkbox starts
  masterToggle() {
    this.isAllSelected()
      ? this.selectionMap.clear()
      : this.MapLcAdviceReceiptEPaymentDataSource.data.forEach(row =>
        this.selectionMap.select(row)
      );
  }

  isAllSelected() {
    const numSelected = this.selectionMap.selected.length;
    const numRows = this.MapLcAdviceReceiptEPaymentDataSource.data.length;
    return numSelected === numRows;
  }

  masterUnmapToggle() {
    this.isAllUnmapSelected()
      ? this.selectionUnmap.clear()
      : this.UnmapLcAdviceReceiptEPaymentDataSource.data.forEach(row =>
        this.selectionUnmap.select(row)
      );
  }

  isAllUnmapSelected() {
    const numSelected = this.selectionUnmap.selected.length;
    const numRows = this.UnmapLcAdviceReceiptEPaymentDataSource.data.length;
    return numSelected === numRows;
  }

  checkboxLabelMap(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selectionMap.isSelected(row) ? 'deselect' : 'select'
      } row ${row.position + 1}`;
  }

  checkboxLabelUnmap(row?: any): string {
    if (!row) {
      return `${this.isAllUnmapSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selectionUnmap.isSelected(row) ? 'deselect' : 'select'
      } row ${row.position + 1}`;
  }
  // Method for Checkbox Ends

  onNoClick(): void {
    this.dialogRef.close();
  }

  // Method to Map ePayment Details with Head Structure
  onMapClick() {
    this.selectionMap.selected.forEach(item => {
      const index: number = this.MapLcAdviceReceiptEPaymentDataSource.data.findIndex(d => d === item);

      this.UnmapLcAdviceReceiptEPaymentDATA.push(this.MapLcAdviceReceiptEPaymentDATA[index]);

      this.MapLcAdviceReceiptEPaymentDATA.splice(index, 1);

      console.log(this.UnmapLcAdviceReceiptEPaymentDATA);

      this.MapLcAdviceReceiptEPaymentDataSource = new MatTableDataSource<any>(this.MapLcAdviceReceiptEPaymentDATA);
      this.UnmapLcAdviceReceiptEPaymentDataSource = new MatTableDataSource<any>(this.UnmapLcAdviceReceiptEPaymentDATA);
    });
    this.selectionMap = new SelectionModel<any>(true, []);
  }

  // Method to UnMap ePayment Details with Head Structure
  onUnmapClick() {

    this.selectionUnmap.selected.forEach(item => {
      const index: number = this.UnmapLcAdviceReceiptEPaymentDataSource.data.findIndex(d => d === item);

      this.MapLcAdviceReceiptEPaymentDATA.push(this.UnmapLcAdviceReceiptEPaymentDATA[index]);

      this.UnmapLcAdviceReceiptEPaymentDATA.splice(index, 1);

      this.MapLcAdviceReceiptEPaymentDataSource = new MatTableDataSource<any>(this.MapLcAdviceReceiptEPaymentDATA);
      this.UnmapLcAdviceReceiptEPaymentDataSource = new MatTableDataSource<any>(this.UnmapLcAdviceReceiptEPaymentDATA);
    });
    this.selectionUnmap = new SelectionModel<any>(true, []);
  }

}

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-adviceReceivedDialogCheckList',
  templateUrl: 'adviceReceivedDialogCheckList.html',
  styleUrls: ['./lc-advice-received.component.css']
})
// tslint:disable-next-line: component-class-suffix
export class adviceReceiedDialogCheckList {

  // Table Data for For finding Cheque Details
  ELEMENT_DATA2: any[] = [
    {
      partyName: 'ABC Ltd',
      checkType: 'Contractor',
      bankAccountNumber: '32373007812',
      IFSCCode: 'SBIN002636',
      bankBranchName: 'Sargasan',
      panNo: 'EOXPS8331P',
      rateOfIncomeTax: '10.00',
      mobileNo: '8825077304',
      epaymentAmount: '0.00',

    },
    {
      partyName: 'DEF Ltd',
      checkType: 'Contractor',
      bankAccountNumber: '32373007813',
      IFSCCode: 'SBIN002636',
      bankBranchName: 'Sargasan',
      panNo: 'EOXPS8331P',
      rateOfIncomeTax: '10.00',
      mobileNo: '8825077304',
      epaymentAmount: '0.00',
    },
    {
      partyName: 'GHI Ltd',
      checkType: 'Contractor',
      bankAccountNumber: '32373007814',
      IFSCCode: 'SBIN002636',
      bankBranchName: 'Sargasan',
      panNo: 'EOXPS8331P',
      rateOfIncomeTax: '10.00',
      mobileNo: '8825077304',
      epaymentAmount: '0.00',
    },
    {
      partyName: 'XYZ Ltd',
      checkType: 'Contractor',
      bankAccountNumber: '32373007815',
      IFSCCode: 'SBIN002636',
      bankBranchName: 'Sargasan',
      panNo: 'EOXPS8331P',
      rateOfIncomeTax: '10.00',
      mobileNo: '8825077304',
      epaymentAmount: '0.00',
    },
  ];
  ifscSame: Boolean;
  selectedParty = [];
  filterElement_Data: any[];
  smartSearch: FormGroup;
  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA2);
  checkTypeNameCtrl: FormControl = new FormControl();
  @ViewChild(MatSort) sort: MatSort;

  // List of Check Type
  checkTypeNameList: any[] = [
    { value: '1', viewValue: 'Beneficary' },
    { value: '2', viewValue: 'Contractor' },
    { value: '3', viewValue: 'Grant In Aid' },
    { value: '4', viewValue: 'GST / TDS' },
    { value: '5', viewValue: 'Scholorship' },
    { value: '6', viewValue: 'Service Provider' },
    { value: '7', viewValue: 'Supplier ' },
  ];

  error_message = 'Please enter valid format of PAN No. in format Like :  AAAAA1111A';
  isIFSCValid: boolean;
  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    public router: Router,
    private el: ElementRef,
    public dialogRef: MatDialogRef<adviceReceiedDialogCheckList>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  // Create object to access Methods of Letter of Credit Directive
  directiveObject = new LetterOfCreditDirectives(this.router, this.dialog, this.el);

  // Table Colums for Finding Cheque Details Table
  displayedColumns: string[] = [
    'select',
    'partyName',
    'checkType',
    'bankAccountNumber',
    'IFSCCode',
    'bankBranchName',
    'panNo',
    'rateOfIncomeTax',
    'mobileNo'];

  // tslint:disable-next-line: use-life-cycle-interface
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

  // Method to be executed on Search button click
  onSearch() {
    const formVal = this.smartSearch.value;
    if (formVal.vendorName !== '' && formVal.vendorName != null) {
      this.filterElement_Data = this.ELEMENT_DATA2.filter(
        searchByVendor => searchByVendor.vender.toLowerCase() === formVal.vendorName.toLowerCase());
      this.dataSource = new MatTableDataSource<any>(this.filterElement_Data);
    }

    if (formVal.checkTypeName !== '' && formVal.checkTypeName != null) {
      if (formVal.checkTypeName === '1') {
        const checkTypeNameValue = 'Beneficary';
        this.filterElement_Data = this.ELEMENT_DATA2.filter(
          searchByCheckType => searchByCheckType.checkType.toLowerCase() === checkTypeNameValue.toLowerCase());
        this.dataSource = new MatTableDataSource<any>(this.filterElement_Data);
      }
      if (formVal.checkTypeName === '2') {
        const checkTypeNameValue = 'Contractor';
        this.filterElement_Data = this.ELEMENT_DATA2.filter(
          searchByCheckType => searchByCheckType.checkType.toLowerCase() === checkTypeNameValue.toLowerCase());
        this.dataSource = new MatTableDataSource<any>(this.filterElement_Data);

      }
      if (formVal.checkTypeName === '3') {
        const checkTypeNameValue = 'Grant In Aid';
        this.filterElement_Data = this.ELEMENT_DATA2.filter(
          searchByCheckType => searchByCheckType.checkType.toLowerCase() === checkTypeNameValue.toLowerCase());
        this.dataSource = new MatTableDataSource<any>(this.filterElement_Data);
      }
      if (formVal.checkTypeName === '4') {
        const checkTypeNameValue = 'GST / TDS';
        this.filterElement_Data = this.ELEMENT_DATA2.filter(
          searchByCheckType => searchByCheckType.checkType.toLowerCase() === checkTypeNameValue.toLowerCase());
        this.dataSource = new MatTableDataSource<any>(this.filterElement_Data);
      }
      if (formVal.checkTypeName === '5') {
        const checkTypeNameValue = 'Scholorship';
        this.filterElement_Data = this.ELEMENT_DATA2.filter(
          searchByCheckType => searchByCheckType.checkType.toLowerCase() === checkTypeNameValue.toLowerCase());
        this.dataSource = new MatTableDataSource<any>(this.filterElement_Data);

      }
      if (formVal.checkTypeName === '6') {
        const checkTypeNameValue = 'Service Provider';
        this.filterElement_Data = this.ELEMENT_DATA2.filter(
          searchByCheckType => searchByCheckType.checkType.toLowerCase() === checkTypeNameValue.toLowerCase());
        this.dataSource = new MatTableDataSource<any>(this.filterElement_Data);
      }
      if (formVal.checkTypeName === '7') {
        const checkTypeNameValue = 'Supplier';
        this.filterElement_Data = this.ELEMENT_DATA2.filter(
          searchByCheckType => searchByCheckType.checkType.toLowerCase() === checkTypeNameValue.toLowerCase());
        this.dataSource = new MatTableDataSource<any>(this.filterElement_Data);
      }
    }

    if (formVal.accountNoName !== '' && formVal.accountNoName != null) {
      this.filterElement_Data = this.ELEMENT_DATA2.filter(
        searchByAccount => searchByAccount.accountNo.toLowerCase() === formVal.accountNoName.toLowerCase());
      this.dataSource = new MatTableDataSource<any>(this.filterElement_Data);
    }

    if (formVal.ifscCode !== '' && formVal.ifscCode != null) {
      this.filterElement_Data = this.ELEMENT_DATA2.filter(
        searchByifscCode => searchByifscCode.ifscCode.toLowerCase() === formVal.ifscCode.toLowerCase());
      this.dataSource = new MatTableDataSource<any>(this.filterElement_Data);
      if (this.filterElement_Data.length !== 0) {
        this.isIFSCValid = true;
      } else {
        this.isIFSCValid = false;
      }
    }

    if (formVal.branchName !== '' && formVal.branchName != null) {
      this.filterElement_Data = this.ELEMENT_DATA2.filter(
        searchByBranch => searchByBranch.bankBranchName.toLowerCase() === formVal.branchName.toLowerCase());
      this.dataSource = new MatTableDataSource<any>(this.filterElement_Data);

    }

    if (formVal.panNoName !== '' && formVal.panNoName != null) {
      this.filterElement_Data = this.ELEMENT_DATA2.filter(
        searchByPan => searchByPan.panNo === formVal.panNoName);
      this.dataSource = new MatTableDataSource<any>(this.filterElement_Data);
    }

    if (formVal.rateOfIncomeTax !== '' && formVal.rateOfIncomeTax != null) {
      this.filterElement_Data = this.ELEMENT_DATA2.filter(
        searchByrateOfIncomeTax => searchByrateOfIncomeTax.rateOfIncomeTax.toLowerCase() === formVal.rateOfIncomeTax.toLowerCase());
      this.dataSource = new MatTableDataSource<any>(this.filterElement_Data);
    }

    if (formVal.mobileNoName !== '' && formVal.mobileNoName != null) {
      this.filterElement_Data = this.ELEMENT_DATA2.filter(
        searchByMobile => searchByMobile.mobileNo.toLowerCase() === formVal.mobileNoName.toLowerCase());
      this.dataSource = new MatTableDataSource<any>(this.filterElement_Data);
    }

    if ((formVal.vendorName === '' || formVal.vendorName == null)
      && (formVal.checkTypeName === '' || formVal.checkTypeName == null) &&
      (formVal.accountNoName === '' || formVal.accountNoName == null) &&
      (formVal.panNoName === '' || formVal.panNoName == null) &&
      (formVal.mobileNoName === '' || formVal.mobileNoName == null) &&
      (formVal.branchName === '' || formVal.branchName == null) &&
      (formVal.ifscCode === '' || formVal.ifscCode == null)) {
      this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA2);
    }
  }

  checkIfsc() {
    const formVal = this.smartSearch.value;
    if (formVal.ifscCode !== '' && formVal.ifscCode != null) {
      this.filterElement_Data = this.ELEMENT_DATA2.filter(
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

  clearForm() {
    this.smartSearch.reset();
  }

  onAddAdvice(): void {
    this.dataSource.data.forEach(item => {
      if (this.directiveObject.selection.isSelected(item)) {
        this.selectedParty.push(item);
      }
    });

    this.dialogRef.close(this.selectedParty);
  }
  onClose(): void {
    this.dialogRef.close();
  }
}


/** AdviceReceivedEmployeeDialog start */
@Component({
  // tslint:disable-next-line: component-selector
  templateUrl: 'advice-received-employee-dialog.html'
})
// tslint:disable-next-line: component-class-suffix
export class AdviceReceivedEmployeeDialog implements OnInit {
  directiveObj = new CommonDirective(this.route);
  selectionData: any[] = [];
  employeeTypeList: ListValue[] = [
    { value: '1', viewValue: 'GO' },
    { value: '2', viewValue: 'NGO' },
    { value: '3', viewValue: 'MLA' },
    { value: '4', viewValue: 'IAS/IPS/IFS' },

  ];
  designationList: ListValue[] = [
    { value: '1', viewValue: 'Section Officer' },
    { value: '2', viewValue: 'Deputy Section Officer' }
  ]
    ;
  elementData: any[] = [
    {
      employeeNumber: '1234567891',
      gpfNumber: 'MEDL/4323',
      employeeName: 'ABC Employee',
      designation: 'Section Officer',
      employeeType: 'NGO',
      bankAccountNo: '3600178925',
      ifscCode: 'SBI000001',
      bankBranchName: 'Sargasan'
    },
    {
      employeeNumber: '1234567892',
      gpfNumber: 'MEDL/4231',
      employeeName: 'EFG Employee',
      designation: 'Deputy Section Officer',
      employeeType: 'MLA',
      bankAccountNo: '3600178926',
      ifscCode: 'SBI000003',
      bankBranchName: 'Kudasan'
    },
    {
      employeeNumber: '1234567893',
      gpfNumber: 'MEDL/4325',
      employeeName: 'HIJ Employee',
      designation: 'Section Officer',
      employeeType: 'IPS',
      bankAccountNo: '3600178928',
      ifscCode: 'SBI000001',
      bankBranchName: 'Sargasan'
    }
  ];

  isIfscCodeValid: boolean;
  filterElementData: any[];
  smartSearch: FormGroup;
  dataSource = new MatTableDataSource<any>(this.elementData);
  selection = new SelectionModel<any>(true, []);
  displayedColumns: string[] = [
    'select',
    'employeeNumber',
    'gpfNumber',
    'employeeName',
    'designation',
    'employeeType',
    'bankAccountNo',
    'ifscCode',
    'bankBranchName'];
  employeeTypeCtrl: FormControl = new FormControl();
  designationCtrl: FormControl = new FormControl();
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AdviceReceivedEmployeeDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private route: Router) { }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.smartSearch = this.fb.group({

      employeeNumber: [''],
      gpfNumber: [''],
      employeeName: [''],
      designation: [''],
      employeeType: [''],
      accountNo: [''],
      ifscCode: [''],
      branchName: ['']
    });
  }

  // on checking the checkbox
  onCheck(event, row) {
    if (event.checked) {
      if (this.selectionData.filter(e => e['accountNo'] === row
      ['accountNo']).length === 0) {
        this.selectionData.push(row);

      }
    } else {
      this.selectionData.splice(this.selectionData.findIndex(e => e['accountNo'] === row
      ['accountNo'], 1));
    }
  }

  // search the table on basis of search fields
  onSearch() {
    const formVal = this.smartSearch.value;
    if (formVal.employeeNumber !== '' && formVal.employeeNumber != null) {
      this.filterElementData = this.elementData.filter(
        searchByemployee => searchByemployee.employeeNumber === formVal.employeeNumber);
      this.dataSource = new MatTableDataSource<any>(this.filterElementData);
    }

    if (formVal.gpfNumber !== '' && formVal.gpfNumber != null) {
      this.filterElementData = this.elementData.filter(
        searchByGPFNumber => searchByGPFNumber.gpfNumber.toLowerCase() === formVal.gpfNumber.toLowerCase());
      this.dataSource = new MatTableDataSource<any>(this.filterElementData);
    }

    if (formVal.employeeName !== '' && formVal.employeeName != null) {
      this.filterElementData = this.elementData.filter(
        searchByemployeeName => searchByemployeeName.employeeName.toLowerCase() === formVal.employeeName.toLowerCase());
      this.dataSource = new MatTableDataSource<any>(this.filterElementData);
    }

    if (formVal.designation !== '' && formVal.designation != null) {

      if (formVal.designation === '1') {
        const designationValue = 'Section Officer';
        this.filterElementData = this.elementData.filter(
          searchBydesignationType => searchBydesignationType.designation.toLowerCase() === designationValue.toLowerCase());
        this.dataSource = new MatTableDataSource<any>(this.filterElementData);
      }
      if (formVal.designation === '2') {
        const designationValue = 'Deputy Section Officer';
        this.filterElementData = this.elementData.filter(
          searchBydesignationType => searchBydesignationType.designation.toLowerCase() === designationValue.toLowerCase());
        this.dataSource = new MatTableDataSource<any>(this.filterElementData);
      }
    }

    if (formVal.employeeType !== '' && formVal.employeeType != null) {

      if (formVal.employeeType === '1') {
        const employeeTypeValue = 'GO';
        this.filterElementData = this.elementData.filter(
          searchByemployeeType => searchByemployeeType.employeeType.toLowerCase() === employeeTypeValue.toLowerCase());
        this.dataSource = new MatTableDataSource<any>(this.filterElementData);
      }
      if (formVal.employeeType === '2') {
        const employeeTypeValue = 'NGO';
        this.filterElementData = this.elementData.filter(
          searchByemployeeType => searchByemployeeType.employeeType.toLowerCase() === employeeTypeValue.toLowerCase());
        this.dataSource = new MatTableDataSource<any>(this.filterElementData);
      }
      if (formVal.employeeType === '3') {
        const employeeTypeValue = 'MLA';
        this.filterElementData = this.elementData.filter(
          searchByemployeeType => searchByemployeeType.employeeType.toLowerCase() === employeeTypeValue.toLowerCase());
        this.dataSource = new MatTableDataSource<any>(this.filterElementData);
      }
      if (formVal.employeeType === '4') {
        const employeeTypeValue = 'IAS/IPS/IFS';
        this.filterElementData = this.elementData.filter(
          searchByemployeeType => searchByemployeeType.employeeType.toLowerCase() === employeeTypeValue.toLowerCase());
        this.dataSource = new MatTableDataSource<any>(this.filterElementData);
      }
    }



    if (formVal.accountNo !== '' && formVal.accountNo != null) {
      this.filterElementData = this.elementData.filter(
        searchByMobile => searchByMobile.bankAccountNo.toLowerCase() === formVal.accountNo.toLowerCase());
      this.dataSource = new MatTableDataSource<any>(this.filterElementData);
    }

    if (formVal.ifscCode !== '' && formVal.ifscCode != null) {
      this.filterElementData = this.elementData.filter(
        searchByIfscCode => searchByIfscCode.ifscCode.toLowerCase() === formVal.ifscCode.toLowerCase());
      if (this.filterElementData.length !== 0) {
        this.isIfscCodeValid = true;
      } else {
        this.isIfscCodeValid = false;
      }
      this.dataSource = new MatTableDataSource<any>(this.filterElementData);
    }

    if (formVal.branchName !== '' && formVal.branchName != null) {
      this.filterElementData = this.elementData.filter(
        searchByBranch => searchByBranch.bankBranchName.toLowerCase() === formVal.branchName.toLowerCase());
      this.dataSource = new MatTableDataSource<any>(this.filterElementData);

    }

    if ((formVal.employeeNumber === '' || formVal.employeeNumber == null)
      && (formVal.gpfNumber === '' || formVal.gpfNumber == null)
      && (formVal.employeeName === '' || formVal.employeeName == null)
      && (formVal.designation === '' || formVal.designation == null)
      && (formVal.employeeType === '' || formVal.employeeType == null)
      && (formVal.accountNo === '' || formVal.accountNo == null)
      && (formVal.ifscCode === '' || formVal.ifscCode == null)
      && (formVal.branchName === '' || formVal.branchName == null)) {
      this.dataSource = new MatTableDataSource<any>(this.elementData);
    }

  }

  // check is ifsc valid
  checkIfsc() {
    const formVal = this.smartSearch.value;
    if (formVal.ifscCode !== '' && formVal.ifscCode != null) {
      this.filterElementData = this.elementData.filter(
        searchByifscCode => searchByifscCode.ifscCode.toLowerCase() === formVal.ifscCode.toLowerCase());

      if (this.filterElementData.length !== 0) {
        this.isIfscCodeValid = true;
      } else {
        this.isIfscCodeValid = false;
      }
    }
  }

  // return control
  get fc() {
    return this.smartSearch.controls;
  }

  // reet the form
  clearForm() {
    this.smartSearch.reset();
  }

  // close the pop-up
  onNoClick(): void {
    this.dialogRef.close(this.selectionData);
  }

  // add to bill
  addToAdvice() {
    this.dialogRef.close(this.selectionData);
  }

}
/** AdviceReceivedEmployeeDialog end */

// Print Cheque Dialog Starts
@Component({
  templateUrl: './print-cheque-dialog.html',
})
// tslint:disable-next-line: component-class-suffix
export class PrintChequeDialog implements OnInit {

  // Table Data for printCheque
  printChequeData: any[] = [
    {
      chequeDate: '02-Oct-2020',
      chequeNo: 'AFR007-100001',
      partyName: 'ABC Ltd',
      chequeAmount: '3000.00',
    },
    {
      chequeDate: '02-Oct-2020',
      chequeNo: 'AFR007-100001',
      partyName: 'DEF Ltd',
      chequeAmount: '0.00',
    },
    {
      chequeDate: '02-Oct-2020',
      chequeNo: 'AFR007-100001',
      partyName: 'GHI Ltd',
      chequeAmount: '2000.00',
    },
    {
      chequeDate: '02-Oct-2020',
      chequeNo: 'AFR007-100001',
      partyName: 'XYZ Ltd',
      chequeAmount: '10000.00',
    },
  ];

  // Table Coulmn for printCheque
  printChequeColumn: string[] = [
    'select', 'chequeDate', 'chequeNo', 'partyName', 'chequeAmount',
  ];

  printChequeDataSource = new MatTableDataSource<any>(this.printChequeData);
  // Directive
  directiveObj = new CommonDirective();

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<PrintChequeDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit(): void { }

  // on no
  onClose() {
    this.dialogRef.close();
  }

}
// Print Cheque Dialog Ends

// Generate Cheque No Starts
@Component({
  templateUrl: './generate-cheque-no-dialog.html',
})
// tslint:disable-next-line: component-class-suffix
export class GenerateChequeNoDialog implements OnInit {
  generateChequeNoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<GenerateChequeNoDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit(): void {
    this.generateChequeNoForm = this.fb.group({});
  }

  // on no
  onNo() {
    this.dialogRef.close('No');
  }

  // on yes
  onYes() {
    this.dialogRef.close('generateChequeNo');
  }
}
// Generate Cheque No Ends
