import { LetterOfCreditDirectives } from 'src/app/common/directive/letter-of-credit-directive';
import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { lcMessage } from 'src/app/common/error-message/common-message.constants';
import { ListValue, AdviceReceipt, LcAdviceReceiptEPayment, Deduction } from 'src/app/model/letter-of-credit';
import { MapEPaymentComponent, LcNumberDialogComponent } from '../lc-advice-received/lc-advice-received.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lc-advice-preparation-view',
  templateUrl: './lc-advice-preparation-view.component.html',
  styleUrls: ['./lc-advice-preparation-view.component.css']
})
export class LcAdvicePreparationViewComponent implements OnInit {

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
    { value: '2', viewValue: 'E-Payment' }
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
  LcAdviceReceiptEPaymentDATA: LcAdviceReceiptEPayment[] = [
    { partyName: 'ABC Ltd', bankAccountNumber: '32373007812', IFSCCode: 'SBIN002636', epaymentAmount: '5000.00' }
  ];

  // Table Column for Advice Receipt ePayment Table
  LcAdviceReceiptEPaymentDATAColumn: string[] = [
    'partyName', 'bankAccountNumber', 'IFSCCode', 'epaymentAmount', 'action'
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

  // List of Attachments
  attachmentTypeCode: any[] = [
    { type: 'stamp-view', attachmentType: 'Supporting Document' },
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
      lcNumber: 'LC57AFR0070001',
      search: '',
      fund3Disable: true
    }
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
  DeductionData: any[] = [
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
  typeOfEstimationCTRL: FormControl = new FormControl();
  selection = new SelectionModel<any>(true, []);
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
      month: [{ value: '' + (new Date().getMonth() + 1), disabled: true }],
      paymentType: [{ value: '2', disabled: true }],
      adviceType: [''],
      exemption: ['1'],
      ddoNumber: [{ value: '986', disabled: true }],
      classOfExpenditure: ['1'],
      fund: ['3'],
      typeOfExpenditure: ['1'],
      budgetType: ['1'],
      schemeNo: ['1'],
      demandNo: ['1'],
      majorHead: ['1'],
      subMajorHead: ['1'],
      minorHead: ['1'],
      subHead: ['1'],
      detailClass: ['1'],
      typeOfEstimation: ['1'],
      objectClass: ['2'],
      lcNumber: [''],
      chequeTypeCheck: [''],
      raiseObjectionCheckbox: [''],
      // chequeDate: new FormControl(new Date(2020,6,18)),
    });
  }

  showChequeEpayment() {
    if (this.lcAdviceReceivedForm.controls['paymentType'].value === '1') {
      this.showChequeTable = true;
      this.showEpaymentTable = false;
    } else {
      this.showChequeTable = false;
      this.showEpaymentTable = true;
    }
  }

  checkFund() {
    if (this.lcAdviceReceivedForm.controls['fund'].value == '5') {
      this.budgetTypeDisabled = true;
      this.lcAdviceReceivedForm.controls['budgetType'].setValue('');
      this.lcAdviceReceivedForm.controls['demandNo'].setValue('1');
      this.lcAdviceReceivedForm.controls['schemeNo'].setValue('');
    } else {
      this.budgetTypeDisabled = false;
      this.lcAdviceReceivedForm.controls['demandNo'].setValue('');
    }
  }

  checkEstimate() {
    if (this.lcAdviceReceivedForm.controls['typeOfEstimation'].value == '1') {
      this.itemNameDisabled = true;
    } else {
      this.itemNameDisabled = false;
    }
  }

  mapEPayment() {
    if (this.showEpaymentTable) {
      const dialogRef = this.dialog.open(MapEPaymentComponent, {
        width: '1000px'
      });
      dialogRef.afterClosed().subscribe(result => {
      });
    }
  }

  searchAuthorizeTreasury() {
    const dialogRef = this.dialog.open(LcNumberDialogComponent, {
      width: '1000px'
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  totalDeductionAmount() {
    let deductionAmount = 0;
    this.DeductionDataSource.data.forEach((element) => {
      deductionAmount = Number(element.professionlTax) + Number(element.laborClass) + Number(element.forAllMH) + Number(element.incomeTax) +
        Number(element.surcharge) + Number(element.gpfClassIV) + Number(element.rentOfBldg) + Number(element.govtInsuranceFund) +
        Number(element.insuranceFund) + Number(element.securityDeposit) + Number(element.establishmentCharges) + Number(element.machinaryCharges);
    });
    return deductionAmount;
  }

  lcBalance() {
    return this.openingBalance + this.newBalance;
  }

  resetForm() {
    this.lcAdviceReceivedForm.reset();
  }

}
