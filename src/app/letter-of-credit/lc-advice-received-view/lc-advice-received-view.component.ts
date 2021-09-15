import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ListValue, AdviceReceipt, Deduction, LcAdviceReceiptEPayment } from 'src/app/model/letter-of-credit';
import { LetterOfCreditDirectives } from 'src/app/common/directive/letter-of-credit-directive';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { lcMessage } from 'src/app/common/error-message/common-message.constants';


@Component({
  selector: 'app-lc-advice-received-view',
  templateUrl: './lc-advice-received-view.component.html',
  styleUrls: ['./lc-advice-received-view.component.css']
})
export class LcAdviceReceivedViewComponent implements OnInit {

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
    { chequeDate: this.todayDate, chequeNo: '', partyName: '', chequeAmount: '', isGenerateChequeNo: false }
  ];

  // Table Column for Advice Receipt Table
  LcAdviceReceiptDATAColumn: string[] = [
    'select', 'partyName', 'chequeAmount', 'action'
  ];

  // Table Data for Advice Receipt ePayment Table
  LcAdviceReceiptEPaymentDATA: LcAdviceReceiptEPayment[] = [
    { partyName: '', bankAccountNumber: '', IFSCCode: '', epaymentAmount: '' }
  ];

  // Table Column for Advice Receipt ePayment Table
  LcAdviceReceiptEPaymentDATAColumn: string[] = [
    'select', 'partyName', 'bankAccountNumber', 'IFSCCode', 'epaymentAmount', 'action'
  ];

  // List of Advices
  AdviceTypeList: ListValue[] = [
    { value: '', viewValue: '' }
  ];

  // List of Exemptions
  ExemptionTypeList: ListValue[] = [
    { value: '', viewValue: '' }
  ];

  // List of Estimation Type
  DetailPostingData: any[] = [
    {
      classOfExpenditure: '', fund: '', typeOfExpenditure: '', budgetType: '', schemeNo: '', demandNo: '', majorHead: '', subMajorHead: '',
      minorHead: '', subHead: '', detailClass: '', objectClass: '', mapEpayment: '', expenditureAmount: '', headwiseAvailableAmount: '',
      lcNumber: '', search: ''
    }
  ];

  // Table Columns for Detail Posting Table
  DetailPostingColumn: string[] = [
    'select', 'classOfExpenditure', 'fund', 'typeOfExpenditure', 'budgetType', 'schemeNo', 'demandNo', 'majorHead', 'subMajorHead', 'minorHead',
    'subHead', 'detailClass', 'objectClass', 'mapEpayment', 'expenditureAmount', 'headwiseAvailableAmount', 'lcNumber', 'search', 'action'
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
    { value: '', viewValue: '' },
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

  // List of Detail Class
  DetailClassList: ListValue[] = [
    { value: '', viewValue: '' },
  ];

  // List of Object Classes
  ObjectClassList: ListValue[] = [
    { value: '', viewValue: '' },
  ];

  // List of Numbers
  LcNumberList: ListValue[] = [
    { value: '', viewValue: '' },
  ];

  // Table data for Deduction table
  DeductionData: Deduction[] = [
    {
      professionlTax: '', laborClass: '', forAllMH: '', incomeTax: '', surcharge: '', gpfClassIV: '', rentOfBldg: '', govtInsuranceFund: '',
      insuranceFund: '', securityDeposit: '', establishmentCharges: '', machinaryCharges: '',
    }
  ];

  // Table Columns for Deduction Table
  DeductionDataColumn: string[] = [
    'professionlTax', 'laborClass', 'forAllMH', 'incomeTax', 'surcharge', 'gpfClassIV', 'rentOfBldg', 'govtInsuranceFund', 'insuranceFund',
    'securityDeposit', 'establishmentCharges', 'machinaryCharges'
  ];

  openingBalance = 0;
  newBalance = 36500000;
  showChequeTable = true;
  showEpaymentTable = false;
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
  LcAdviceReceiptDataSource = new MatTableDataSource<any>(this.LcAdviceReceiptDATA);
  LcAdviceReceiptEPaymentDataSource = new MatTableDataSource<any>(this.LcAdviceReceiptEPaymentDATA);
  DetailPostingDataSource = new MatTableDataSource<any>(this.DetailPostingData);
  DeductionDataSource = new MatTableDataSource<any>(this.DeductionData);
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
      adviceNumber: [''],
      adviceDate: [''],
      divisionCode: [''],
      divisionName: [''],
      department: [''],
      district: [''],
      treasuryOffice: [''],
      divisionOffice: [''],
      drawingOfficer: [''],
      bank: [''],
      lcValidFrom: [''],
      month: [''],
      paymentType: ['1'],
      adviceType: [''],
      exemption: [''],
      ddoNumber: [''],
      classOfExpenditure: [''],
      fund: [''],
      typeOfExpenditure: [''],
      budgetType: [''],
      schemeNo: [''],
      demandNo: [''],
      majorHead: [''],
      subMajorHead: [''],
      minorHead: [''],
      subHead: [''],
      detailClass: [''],
      objectClass: [''],
      lcNumber: [''],
      raiseObjectionCheckbox: [''],
      objectionRemarks: ['']
    });
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

  // Method to show Objection Remarks Textarea
  errorRemarks: boolean;
  updateRemarks() {
    if (this.lcAdviceReceivedForm.controls['raiseObjectionCheckbox'].value) {
      this.errorRemarks = true;
    } else {
      this.errorRemarks = false;
    }
  }
}
