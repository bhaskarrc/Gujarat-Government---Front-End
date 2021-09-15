import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource, MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatTable, MatSort } from '@angular/material';
import { DialogData } from 'src/app/model/standing-charge';
import { lcMessage } from 'src/app/common/error-message/common-message.constants';
import { ListValue, DetailPosting, Deduction, DetailPostingAuthorize, AdviceReceiptAuth } from 'src/app/model/letter-of-credit';
import { LetterOfCreditDirectives } from 'src/app/common/directive/letter-of-credit-directive';
import {
  LcNumberDialogComponent,
  MapEPaymentComponent,
  adviceReceiedDialogCheckList
} from '../lc-advice-received/lc-advice-received.component';
import { Router } from '@angular/router';
declare function SetGujarati();
declare function SetEnglish();


/* Select authorize Number */

@Component({
  selector: 'app-authorize',
  templateUrl: 'authorize.html',
  styleUrls: ['./lc-advice-authorization-edit.component.css']
})

export class autohrizationComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<autohrizationComponent>,
    private el: ElementRef, private fb: FormBuilder, public dialog: MatDialog, public router: Router,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  DetailPostingData: DetailPostingAuthorize[] = [
    {
      fund: 'Consolidated',
      classOfExpenditure: 'Voted',
      typeOfExpenditure: '',
      budgetType: 'State',
      schemeNo: '000000',
      demandNo: '026',
      majorHead: '2406',
      subMajorHead: '01',
      minorHead: '001',
      subHead: '01',
      detailClass: '00',
      typeOfEstimation: 'New Work',
      itemName: 'Construction og Govt. Hostel',
      objectClass: 'C6',
      expenditureAmount: '10000.00',
      headwiseAvailableAmount: '19000000.00',
    }
  ];

  // Table columns for Detail posting Table
  DetailPostingColumn: string[] = [
    'fund', 'classOfExpenditure', 'budgetType', 'demandNo',
    'majorHead', 'subMajorHead', 'minorHead', 'subHead', 'detailClass', 'typeOfEstimation',
    'itemName', 'objectClass', 'schemeNo', 'expenditureAmount', 'headwiseAvailableAmount'
  ];

  DetailPostingDataSource = new MatTableDataSource<DetailPostingAuthorize>(this.DetailPostingData);

  // Create object to access Methods of Letter of Credit Directive
  directiveObject = new LetterOfCreditDirectives(this.router, this.dialog, this.el);

  lcAdviceReceivedForm: FormGroup;
  openingBalance = 0;
  newBalance = 36500000;

  lcBalance() {
    return this.openingBalance + this.newBalance;
  }

  ngOnInit(): void {
    this.lcAdviceReceivedFormData();
  }

  // Initialize Form Fields
  lcAdviceReceivedFormData() {
    this.lcAdviceReceivedForm = this.fb.group({
      expenditureAmount: [''],
      deduction: [''],
      netTotal: [''],
    });
  }

  // Method to close the Dialog Box
  onNoClick(): void {
    this.dialogRef.close();
  }

  decimalPoint(data) {
    const newNum = Number(this.lcAdviceReceivedForm.controls[data].value).toFixed(2);
    this.lcAdviceReceivedForm.controls[data].setValue(newNum);
  }

}

@Component({
  selector: 'app-lc-advice-authorization-edit',
  templateUrl: './lc-advice-authorization-edit.component.html',
  styleUrls: ['./lc-advice-authorization-edit.component.css']
})
export class LcAdviceAuthorizationEditComponent implements OnInit {

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

  // able Data for Advice Receipt
  LcAdviceReceiptDATA: AdviceReceiptAuth[] = [
    { chequeDate: this.todayDate, chequeNo: 'AFR007-100001', partyName: '', chequeAmount: '' }
  ];

  // Table columns for Advice Receipt Table
  LcAdviceReceiptDATAColumn: string[] = [
    'chequeDate', 'chequeNo', 'partyName', 'chequeAmount', 'action'
  ];

  // Table Data for LC Advice Reveipt Epayment
  LcAdviceReceiptEPaymentDATA: any[] = [
    { partyName: 'ABC Ltd', bankAccountNumber: '32373007812', IFSCCode: 'SBIN002636', epaymentAmount: '0.00' },
  ];

  // Table Columns for Advice Receipt ePayment Table
  LcAdviceReceiptEPaymentDATAColumn: string[] = [
    'partyName', 'bankAccountNumber', 'IFSCCode', 'epaymentAmount', 'action'
  ];

  // List of advive type
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

  // List of exemption type
  ExemptionTypeList: ListValue[] = [
    { value: '1', viewValue: 'Exempted' },
    { value: '2', viewValue: 'Non-Exempted' }
  ];

  // List of type of estimation
  typeOfEstimationList: ListValue[] = [
    { value: '1', viewValue: 'Standing Charges' },
    { value: '2', viewValue: 'New Item' },
    { value: '3', viewValue: 'New Work' },
    { value: '4', viewValue: 'Item Continuous' },
    { value: '5', viewValue: 'Work-In-Progress' },
  ];


  // Table data for detial posting
  DetailPostingData: DetailPosting[] = [
    {
      classOfExpenditure: '1', fund: '3', budgetType: '1', schemeNo: '000000', demandNo: '2',
      majorHead: '1', subMajorHead: '1', minorHead: '1', subHead: '1', detailClass: '1',
      typeOfEstimation: '3', itemName: 'Construction og Govt. Hostel', objectClass: '7',
      mapEpayment: '', expenditureAmount: '10000.00',
      headwiseAvailableAmount: '19000000.00', lcNumber: '', search: ''
    }
  ];

  // Table Column for Details Posting Table
  DetailPostingColumn: string[] = [
    'classOfExpenditure', 'fund', 'budgetType', 'schemeNo', 'demandNo', 'majorHead',
    'subMajorHead', 'minorHead', 'subHead', 'detailClass', 'typeOfEstimation', 'itemName',
    'objectClass', 'mapEpayment', 'expenditureAmount', 'headwiseAvailableAmount', 'lcNumber',
    'search', 'action'
  ];

  // List of Class of Expenditure
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

  // List of Expenditure Type
  TypeOfExpenditureList: ListValue[] = [
    { value: '1', viewValue: 'Standing Charges' },
    { value: '2', viewValue: 'Development Charges' }
  ];

  // List of Budget Type
  BudgetTypeList: ListValue[] = [
    { value: '1', viewValue: 'State' },
    { value: '2', viewValue: 'CSS' }
  ];

  // List of Demand
  DemandNoList: ListValue[] = [
    { value: '1', viewValue: '999' },
  ];

  // List of Major Head
  MajorHeadList: ListValue[] = [
    { value: '', viewValue: '' },
  ];

  // List of Sub Major Head
  SubMajorHeadList: ListValue[] = [
    { value: '', viewValue: '' },
  ];

  // List of Minor Head
  MinorHeadList: ListValue[] = [
    { value: '', viewValue: '' },
  ];

  // List of Sub Head
  SubHeadList: ListValue[] = [
    { value: '', viewValue: '' },
  ];

  // List of Detial Class
  DetailClassList: ListValue[] = [
    { value: '', viewValue: '' },
  ];

  // List of Object Class
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

  // List of Number
  LcNumberList: ListValue[] = [
    { value: '', viewValue: '' },
  ];

  // Table Data for Deduction Table
  DeductionData: Deduction[] = [
    {
      professionlTax: '0.00', laborClass: '0.00', forAllMH: '0.00', incomeTax: '0.00',
      surcharge: '0.00', gpfClassIV: '0.00', rentOfBldg: '0.00', govtInsuranceFund: '0.00',
      insuranceFund: '0.00', securityDeposit: '0.00', establishmentCharges: '0.00', machinaryCharges: '0.00',
    }
  ];

  // Table Column for Deduction Table
  DeductionDataColumn: string[] = [
    'professionlTax', 'laborClass', 'forAllMH', 'incomeTax', 'surcharge', 'gpfClassIV', 'cpf',
    'rentOfBldg', 'govtInsuranceFund', 'insuranceFund', 'securityDeposit', 'establishmentCharges', 'machinaryCharges'
  ];

  // List of Cheque Type
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
  isDelete = false;
  errorRemarks: boolean;
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
  typeOfEstimationCTRL: FormControl = new FormControl();
  selection = new SelectionModel<any>(true, []);
  LcAdviceReceiptDataSource = new MatTableDataSource<AdviceReceiptAuth>(this.LcAdviceReceiptDATA);
  LcAdviceReceiptEPaymentDataSource = new MatTableDataSource<any>(this.LcAdviceReceiptEPaymentDATA);
  DetailPostingDataSource = new MatTableDataSource<DetailPosting>(this.DetailPostingData);
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
      exemption: [{ value: '1', disabled: true }],
      ddoNumber: [{ value: '986', disabled: true }],
      classOfExpenditure: [{ value: '1', disabled: true }],
      fund: [{ value: '3', disabled: true }],
      typeOfExpenditure: [{ value: '1', disabled: true }],
      budgetType: [{ value: '1', disabled: true }],
      schemeNo: [{ value: '', disabled: true }],
      demandNo: [{ value: '2', disabled: true }],
      majorHead: [{ value: '1', disabled: true }],
      subMajorHead: [{ value: '1', disabled: true }],
      minorHead: [{ value: '1', disabled: true }],
      subHead: [{ value: '1', disabled: true }],
      detailClass: [{ value: '1', disabled: true }],
      typeOfEstimation: [{ value: '3', disabled: true }],
      objectClass: [{ value: '7', disabled: true }],
      lcNumber: [{ value: '', disabled: true }],
      chequeTypeCheck: [{ value: '', disabled: true }],
      raiseObjectionCheckbox: [{ value: '', disabled: false }],
      objectionRemarks: [{ value: '', disabled: false }],
    });
  }

  updateRemarks() {
    if (this.lcAdviceReceivedForm.controls['raiseObjectionCheckbox'].value) {
      this.errorRemarks = true;
    } else {
      this.errorRemarks = false;
    }
  }

  // Method To set values based upon Fund
  checkFund() {
    if (this.lcAdviceReceivedForm.controls['fund'].value === '5') {
      this.budgetTypeDisabled = true;
      this.lcAdviceReceivedForm.controls['budgetType'].setValue('');
      this.lcAdviceReceivedForm.controls['demandNo'].setValue('1');
      this.lcAdviceReceivedForm.controls['schemeNo'].setValue('');
    } else {
      this.budgetTypeDisabled = false;
      this.lcAdviceReceivedForm.controls['demandNo'].setValue('');
    }
  }

  // Method to set values based upon Type of Estimate
  checkEstimate() {
    if (this.lcAdviceReceivedForm.controls['typeOfEstimation'].value === '1') {
      this.itemNameDisabled = true;
    } else {
      this.itemNameDisabled = false;
    }
  }

  // Method to set values based upon Payment Type
  showChequeEpayment() {
    if (this.lcAdviceReceivedForm.controls['paymentType'].value === '1') {
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
      chequeAmount: '0.00'
    });
    ++this.chequeNo;
    this.LcAdviceReceiptDataSource.data = p_data;
  }

  // Method to delete row from Advice Receipt Table
  deleteRow(index) {
    this.LcAdviceReceiptDataSource.data.splice(index, 1);
    this.LcAdviceReceiptDataSource = new MatTableDataSource(
      this.LcAdviceReceiptDataSource.data
    );
  }

  // Method to add row in Empayment Table
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

  // Method to add row in Detail posting Table
  addDetailsPostingRow() {
    const p_data = this.DetailPostingDataSource.data;
    this.isDelete = true;
    p_data.push({
      classOfExpenditure: '',
      fund: '',
      budgetType: '',
      schemeNo: '',
      demandNo: '',
      majorHead: '',
      subMajorHead: '',
      minorHead: '',
      subHead: '',
      detailClass: '',
      typeOfEstimation: '',
      itemName: '',
      objectClass: '',
      mapEpayment: '',
      lcNumber: '',
      search: '',
      expenditureAmount: '0.00',
      headwiseAvailableAmount: '0.00',
    });
    this.DetailPostingDataSource.data = p_data;
  }

  // Method to delete row from Detail posting table
  deleteDetailsPostingRow(index) {
    this.DetailPostingDataSource.data.splice(index, 1);
    this.DetailPostingDataSource = new MatTableDataSource(this.DetailPostingDataSource.data);
  }

  // Method to open ePayment dialog box
  mapEPayment() {
    if (this.showEpaymentTable) {
      const dialogRef = this.dialog.open(MapEPaymentComponent, {
        width: '1000px'
      });
      dialogRef.afterClosed().subscribe(result => {
      });
    }
  }

  // Method to open Authorize Treasury search dialog box
  searchAuthorizeTreasury() {
    const dialogRef = this.dialog.open(LcNumberDialogComponent, {
      width: '1000px'
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  // Method to calculate of Deductions
  totalDeductionAmount() {
    let deductionAmount = 0;
    this.DeductionDataSource.data.forEach((element) => {
      deductionAmount = Number(element.professionlTax) + Number(element.laborClass) + Number(element.forAllMH) + Number(element.incomeTax) +
        Number(element.surcharge) + Number(element.gpfClassIV) + Number(element.rentOfBldg) + Number(element.govtInsuranceFund) +
        Number(element.insuranceFund) + Number(element.securityDeposit) + Number(element.establishmentCharges) +
        Number(element.machinaryCharges);
    });
    return deductionAmount;
  }

  // Method to show total of Opening balance and New balance
  lcBalance() {
    return this.openingBalance + this.newBalance;
  }

  // Method to open Advice Received Dialog box
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

  verify(): void {
    const dialogRef = this.dialog.open(autohrizationComponent, {

      height: '100vw',
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
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
