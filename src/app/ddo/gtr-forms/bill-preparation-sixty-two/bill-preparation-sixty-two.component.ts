import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog, MatDialogRef, MatSort } from '@angular/material';
import {
  EdpDetails, RecoveryDetails, ReceiptDetails,
  ReceiptDataSummary, ReceiptSummaryDeduction, EPaymentDetails,
  ChequeDetails, DdoGrantHeadDialog, ChequeListTypeDialog2
} from 'src/app/model/ddo-forms';
import { ddoMasage } from 'src/app/common/error-message/common-message.constants';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { Router } from '@angular/router';
import { ListValue } from 'src/app/model/common-grant';
import { HeaderElement } from 'src/app/model/common-listing';


/** DdoGrantHeadComponent start */
@Component({
  selector: 'app-ddo-grant-head',
  templateUrl: 'ddo-grant-head-dialog.html'
})
export class DdoGrantHeadComponent {
  // constructor
  constructor(public dialogRef: MatDialogRef<DdoGrantHeadComponent>) { }

  elementData: DdoGrantHeadDialog[] = [
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
  dataSource = new MatTableDataSource<DdoGrantHeadDialog>(this.elementData);

  // closes dialog on click of close button
  onNoClick(): void {
    this.dialogRef.close();
  }

  selectBudgetHead(data): void {
    this.dialogRef.close(data);
  }

}
/** DdoGrantHeadComponent end */


/** ChequeListTypeDialogComponent start */
@Component({
  selector: 'app-cheque-list-type-dialog',
  templateUrl: 'cheque-list-type-dialog.html'
})
export class ChequeListTypeDialogComponent implements OnInit {
  elementData1: ChequeListTypeDialog2[] = [
    {
      venderDetails: ' ',
      vender: 'ABC Ltd',
      chequeType: 'Contractor',
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
      chequeType: 'Contractor',
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
      chequeType: 'Contractor',
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
      chequeType: 'Contractor',
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
      chequeType: 'Contractor',
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
      chequeType: 'Contractor',
      accountNo: '3600178922',
      ifscCode: 'SBIN002639',
      bankBranchName: 'sargasan',
      panNo: 'EOXPS8331U',
      rateOfIncomeTax: '10.00', mobileNo: '8825077504'
    },
    {
      venderDetails: ' ',
      vender: 'NETR Ltd',
      chequeType: 'Contractor',
      accountNo: '3600178921',
      ifscCode: 'SBIN002640',
      bankBranchName: 'Randesan',
      panNo: 'EOXPS8331V', rateOfIncomeTax: '10.00', mobileNo: '8825077704'
    },

  ];
  ifscSame: Boolean;
  filterElementData: ChequeListTypeDialog2[];
  smartSearch: FormGroup;
  dataSource = new MatTableDataSource<ChequeListTypeDialog2>(this.elementData1);
  directiveObj = new CommonDirective(this.route);
  displayedColumns: string[] = [
    'select',
    'vender',
    'chequeType',
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
  // constructor
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<ChequeListTypeDialogComponent>, private route: Router) { }
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

  onSearch() {
    const formVal = this.smartSearch.value;
    if (formVal.vendorName !== '' && formVal.vendorName != null) {
      this.filterElementData = this.elementData1.filter(
        searchByVendor => searchByVendor.vender.toLowerCase() === formVal.vendorName.toLowerCase());
      this.dataSource = new MatTableDataSource<ChequeListTypeDialog2>(this.filterElementData);
    }

    if (formVal.checkTypeName !== '' && formVal.checkTypeName != null) {
      if (formVal.checkTypeName === '1') {
        const checkTypeNameValue = 'Beneficary';
        this.filterElementData = this.elementData1.filter(
          searchByCheckType => searchByCheckType.chequeType.toLowerCase() === checkTypeNameValue.toLowerCase());
        this.dataSource = new MatTableDataSource<ChequeListTypeDialog2>(this.filterElementData);

      }
      if (formVal.checkTypeName === '2') {
        const checkTypeNameValue = 'Contractor';
        this.filterElementData = this.elementData1.filter(
          searchByCheckType => searchByCheckType.chequeType.toLowerCase() === checkTypeNameValue.toLowerCase());
        this.dataSource = new MatTableDataSource<ChequeListTypeDialog2>(this.filterElementData);

      }
      if (formVal.checkTypeName === '3') {
        const checkTypeNameValue = 'Grant In Aid';
        this.filterElementData = this.elementData1.filter(
          searchByCheckType => searchByCheckType.chequeType.toLowerCase() === checkTypeNameValue.toLowerCase());
        this.dataSource = new MatTableDataSource<ChequeListTypeDialog2>(this.filterElementData);

      }
      if (formVal.checkTypeName === '4') {
        const checkTypeNameValue = 'GST / TDS';
        this.filterElementData = this.elementData1.filter(
          searchByCheckType => searchByCheckType.chequeType.toLowerCase() === checkTypeNameValue.toLowerCase());
        this.dataSource = new MatTableDataSource<ChequeListTypeDialog2>(this.filterElementData);

      }
      if (formVal.checkTypeName === '5') {
        const checkTypeNameValue = 'Scholorship';
        this.filterElementData = this.elementData1.filter(
          searchByCheckType => searchByCheckType.chequeType.toLowerCase() === checkTypeNameValue.toLowerCase());
        this.dataSource = new MatTableDataSource<ChequeListTypeDialog2>(this.filterElementData);

      }
      if (formVal.checkTypeName === '6') {
        const checkTypeNameValue = 'Service Provider';
        this.filterElementData = this.elementData1.filter(
          searchByCheckType => searchByCheckType.chequeType.toLowerCase() === checkTypeNameValue.toLowerCase());
        this.dataSource = new MatTableDataSource<ChequeListTypeDialog2>(this.filterElementData);

      }
      if (formVal.checkTypeName === '7') {
        const checkTypeNameValue = 'Supplier';
        this.filterElementData = this.elementData1.filter(
          searchByCheckType => searchByCheckType.chequeType.toLowerCase() === checkTypeNameValue.toLowerCase());
        this.dataSource = new MatTableDataSource<ChequeListTypeDialog2>(this.filterElementData);

      }
    }

    if (formVal.accountNoName !== '' && formVal.accountNoName != null) {
      this.filterElementData = this.elementData1.filter(
        searchByAccount => searchByAccount.accountNo.toLowerCase() === formVal.accountNoName.toLowerCase());
      this.dataSource = new MatTableDataSource<ChequeListTypeDialog2>(this.filterElementData);
    }

    if (formVal.ifscCode !== '' && formVal.ifscCode != null) {
      this.filterElementData = this.elementData1.filter(
        searchByifscCode => searchByifscCode.ifscCode.toLowerCase() === formVal.ifscCode.toLowerCase());
      this.dataSource = new MatTableDataSource<ChequeListTypeDialog2>(this.filterElementData);
      if (this.filterElementData.length !== 0) {
        this.isIFSCValid = true;
      } else {
        this.isIFSCValid = false;
      }
    }


    if (formVal.branchName !== '' && formVal.branchName != null) {
      this.filterElementData = this.elementData1.filter(
        searchByBranch => searchByBranch.bankBranchName.toLowerCase() === formVal.branchName.toLowerCase());
      this.dataSource = new MatTableDataSource<ChequeListTypeDialog2>(this.filterElementData);

    }

    if (formVal.panNoName !== '' && formVal.panNoName != null) {
      this.filterElementData = this.elementData1.filter(
        searchByPan => searchByPan.panNo === formVal.panNoName);
      this.dataSource = new MatTableDataSource<ChequeListTypeDialog2>(this.filterElementData);
    }

    if (formVal.rateOfIncomeTax !== '' && formVal.rateOfIncomeTax != null) {
      this.filterElementData = this.elementData1.filter(
        searchByrateOfIncomeTax => searchByrateOfIncomeTax.rateOfIncomeTax.toLowerCase() === formVal.rateOfIncomeTax.toLowerCase());
      this.dataSource = new MatTableDataSource<ChequeListTypeDialog2>(this.filterElementData);
    }

    if (formVal.mobileNoName !== '' && formVal.mobileNoName != null) {
      this.filterElementData = this.elementData1.filter(
        searchByMobile => searchByMobile.mobileNo.toLowerCase() === formVal.mobileNoName.toLowerCase());
      this.dataSource = new MatTableDataSource<ChequeListTypeDialog2>(this.filterElementData);
    }


    if ((formVal.vendorName === '' || formVal.vendorName == null)
      && (formVal.checkTypeName === '' || formVal.checkTypeName == null)
      && (formVal.accountNoName === '' || formVal.accountNoName == null)
      && (formVal.panNoName === '' || formVal.panNoName == null)
      && (formVal.mobileNoName === '' || formVal.mobileNoName == null)
      && (formVal.branchName === '' || formVal.branchName == null)
      && (formVal.ifscCode === '' || formVal.ifscCode == null)) {
      this.dataSource = new MatTableDataSource<ChequeListTypeDialog2>(this.elementData1);
    }
  }

  // check ifsc
  checkIfsc() {
    const formVal = this.smartSearch.value;
    if (formVal.ifscCode !== '' && formVal.ifscCode != null) {
      this.filterElementData = this.elementData1.filter(
        searchByifscCode => searchByifscCode.ifscCode.toLowerCase() === formVal.ifscCode.toLowerCase());

      if (this.filterElementData.length !== 0) {
        this.isIFSCValid = true;
      } else {
        this.isIFSCValid = false;
      }
    }
  }

  // return formm controls
  get fc() {
    return this.smartSearch.controls;
  }

  clearForm() {
    this.smartSearch.reset();

  }

  // closes dialog on click of close button
  onNoClick(): void {
    this.dialogRef.close();
  }

  // add to bill
  addToBill() { }

  // reset form
  resetForm() {

  }
}
/** ChequeListTypeDialogComponent end */


/** BillPreparationSixtyTwoComponent start */
@Component({
  selector: 'app-bill-preparation-sixty-two',
  templateUrl: './bill-preparation-sixty-two.component.html',
  styleUrls: ['./bill-preparation-sixty-two.component.css']
})
export class BillPreparationSixtyTwoComponent implements OnInit {

  // edp detail table data start
  expenditureColumn: string[] = [
    'budgetCode',
    'description',
    'edpCode',
    'amount',
    'action'
  ];
  expenditureList: EdpDetails[] = [
    {
      budgetCode: '3131',
      description: 'Pay Of Officers',
      edpCode: '3101',
      amount: '5555.00'
    },
    {
      budgetCode: '3131',
      description: 'Pay Of Establishment',
      edpCode: '3102',
      amount: '0.00'
    },
    {
      budgetCode: '3131',
      description: 'Dearness Allowances',
      edpCode: '3103',
      amount: '0.00'
    }
  ];
  expenditureDataSource = new MatTableDataSource<EdpDetails>(this.expenditureList);
  // edp detail data ends

  // recovery details data start
  recoveryColumn: string[] = ['budgetCode', 'description', 'edpCode', 'amount', 'action'];
  recoveryList: RecoveryDetails[] = [];
  recoveryDataSource = new MatTableDataSource<RecoveryDetails>(this.recoveryList);
  // recovery details data end

  // receipt details table daat start
  receiptColumn: string[] = [
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
  receiptDataSource = new MatTableDataSource<ReceiptDetails>(this.receiptList);
  // receipt details table data end

  // receipt-data summary table start
  summaryData: string[] = [
    'edpCode',
    'challanDate',
    'pdAccount',
    'party',
    'amount',
    'action'
  ];
  receiptSummaryData: ReceiptDataSummary[] = [];
  summaryDataSource = new MatTableDataSource<ReceiptDataSummary>(this.receiptSummaryData);
  // receipt-data summary table ends

  // recovery deduction table data start
  deductionCol: string[] = ['expenditure', 'recovery', 'decuctionA', 'decuctionB'];
  deductionList: ReceiptSummaryDeduction[] = [
    { decuctionA: '5555.00', decuctionB: '0.00', expenditure: '5555.00', recovery: '0.00 ' }
  ];
  deductionDataSource = new MatTableDataSource<ReceiptSummaryDeduction>(this.deductionList);
  // recovery deduction table data end

  // epayment details table start
  epaymentColumn: string[] = ['payeeName', 'accountNo', 'ifscCode', 'amount', 'action'];
  epaymentList: EPaymentDetails[] = [];
  epaymentDataSource = new MatTableDataSource(this.epaymentList);
  // e-payment details table end

  // Cheque Type table data start
  CheckColumn: string[] = [
    'chequeType',
    'partyName',
    'address',
    'accountNo',
    'chequeAmount',
    'action'
  ];
  checkList: ChequeDetails[] = [
    {
      partyName: '',
      chequeType: '1',
      address: '',
      accountNo: '',
      chequeAmount: '0.00'
    }
  ];
  chequeDataSource = new MatTableDataSource<ChequeDetails>(this.checkList);
  // cheque type table data end

  classExpenditureList: ListValue[] = [
    { value: '1', viewValue: ' 1-Voted' },
    { value: '2', viewValue: ' 2-Charged' }
  ];

  fundTypeList: ListValue[] = [
    { value: '1', viewValue: '3-Consolidated' },
    { value: '2', viewValue: '4-Contingency' }
  ];

  stateCssList: ListValue[] = [
    { value: '1', viewValue: '1-State' },
    { value: '2', viewValue: '2-CSS' }
  ];

  demandList: ListValue[] = [{ value: '002', viewValue: '002: Agriculture' }];

  majorHeadList: ListValue[] = [
    { value: '2401', viewValue: '2401: Crop Husbandry' }
  ];
  subMajorHeadList: ListValue[] = [
    {
      value: '00',
      viewValue: '00'
    }
  ];

  minorHeadList: ListValue[] = [
    {
      value: '119',
      viewValue: '119:horticulture and vegetable crops'
    },
    { value: '096', viewValue: '096:Pay and Accounts Offices' },
    { value: '097', viewValue: '097:Treasury Establishment' }
  ];
  subHeadList: ListValue[] = [
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

  detailedHeadList: ListValue[] = [
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

  objectClassList: ListValue[] = [{ value: 'C4', viewValue: 'C4: Grant etc.' }];

  typeOfEstimateList: ListValue[] = [
    { value: '1', viewValue: 'Standing Charges' },
    { value: '2', viewValue: 'New Item' },
    { value: '3', viewValue: 'New Work' },
    { value: '4', viewValue: 'Item Continuous' },
    { value: '5', viewValue: 'Work-In-Progress' }
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

  exemptedTypeList: ListValue[] = [
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

  checklist: ListValue[] = [
    { value: '1', viewValue: 'Party Cheque' },
    { value: '2', viewValue: 'DDO Cheque' }
  ];

  billCategoryList: ListValue[] = [
    { value: '1', viewValue: 'Regular' },
    { value: '2', viewValue: 'Regular/Challan' },
    { value: '3', viewValue: 'TC' },
    { value: '4', viewValue: 'NIL' }
  ];

  paymentTypeList: ListValue[] = [
    { value: '1', viewValue: 'Cheque' },
    { value: '2', viewValue: 'e-payment' }
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

  financialYearList: ListValue[] = [
    { value: '1', viewValue: '2019' },
    { value: '2', viewValue: '2020' },
    { value: '3', viewValue: '2021' }
  ];

  grossTotl: HeaderElement[] = [
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

  chequeTypeList: ListValue[] = [
    { value: '1', viewValue: 'Beneficiary' },
    { value: '2', viewValue: 'Contractor' },
    { value: '3', viewValue: 'Grant In Aid' },
    { value: '4', viewValue: 'GST TDS' },
    { value: '5', viewValue: 'Scholarship' },
    { value: '6', viewValue: 'Service Provider' },
    { value: '7', viewValue: 'Supplier' }
  ];

  // form controls
  classExpenditureCtrl: FormControl = new FormControl();
  fundTypeCtrl: FormControl = new FormControl();
  schemeTypeCtrl: FormControl = new FormControl();
  demandCtrl: FormControl = new FormControl();
  majorHeadCtrl: FormControl = new FormControl();
  subMajorHeadCtrl: FormControl = new FormControl();
  minorHeadCtrl: FormControl = new FormControl();
  subHeadCtrl: FormControl = new FormControl();
  detailHeadCtrl: FormControl = new FormControl();
  typeOfEstimateCtrl: FormControl = new FormControl();
  itemCtrl: FormControl = new FormControl();
  objectClassCtrl: FormControl = new FormControl();
  exemptedCtrl: FormControl = new FormControl();
  billCodeCtrl: FormControl = new FormControl();
  billCodeRequiredCtrl: FormControl = new FormControl();
  billCategoryCtrl: FormControl = new FormControl();
  paymentTypeCtrl: FormControl = new FormControl();
  monthOfCtrl: FormControl = new FormControl();
  financialYearCtrl: FormControl = new FormControl();
  checkTypeCtrl: FormControl = new FormControl();

  // form group
  formsixtytwo: FormGroup;

  // variables
  majorHeadVal = '';
  subMajorHeadVal = '';
  minorHeadVal = '';
  subHeadVal = '';
  detailHeadVal = '';
  objectClassVal = '';
  headChargeableVal;
  tabDisable: Boolean = true;
  selectedIndex: number;
  isInputEdpCode1 = true;
  isInputEdpCode = true;
  isDelete = false;
  isItemList = false;
  chequeTable = false;
  epayment = true;
  paymentTypeDropDown = true;
  DDoParty: boolean;
  errorMessage;

  // Date
  maxDate = new Date();

  // constructor
  constructor(private _fb: FormBuilder, private _dialog: MatDialog) { }

  ngOnInit() {
    this.errorMessage = ddoMasage;
    this.formsixtytwoformData();
  }

  // function for gtr-62 form
  formsixtytwoformData() {
    this.formsixtytwo = this._fb.group({
      ddoNo: [{ value: '52', disabled: true }],
      cardexNo: [{ value: '51', disabled: true }],
      ddoName: [{ value: 'D C DAVE', disabled: true }],
      designation: [{ value: 'District Treasury Officer', disabled: true }],
      officeName: [{ value: 'District Treasury Officer, District Treasury Office, Gandhinagar', disabled: true }],
      districtCode: [{ value: '71', disabled: true }],
      billCreator: [{ value: '', disabled: true }],
      billApprover: [{ value: '', disabled: true }],
      ddoGrantHead: [''],
      classExpenditure: ['1', Validators.required],
      fundType: ['1', Validators.required],
      demand: ['', Validators.required],
      majorHead: ['', Validators.required],
      subMajorHead: ['', Validators.required],
      minorHead: ['', Validators.required],
      subHead: ['', Validators.required],
      detailHead: ['', Validators.required],
      typeOfEstimate: ['1', Validators.required],
      objectClass: ['', Validators.required],
      headChargeable: ['', Validators.required],
      itemName: ['', Validators.required],
      schemeNo: ['', Validators.required],
      exempted: [{ value: '2', disabled: true }, Validators.required],
      billCode: ['', Validators.required],
      billCodeRequired: ['', Validators.required],
      billCategory: ['1', Validators.required],
      previousBill: [''],
      paymentType: ['2', Validators.required],
      establishment: [{ value: 'District Treasury Officer, District Treasury Office, Gandhinagar', disabled: true }],
      monthOf: ['2'],
      financialYear: ['2'],
      stateCss: ['1', Validators.required],
      billRegisterNo: [''],
      billTransitNo: [''],
      nameOfMessenger: ['']
    });
  }

  // if major head is selected
  majorHeadChange(data) {
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
      typeOfEstimate: '1',
      objectClass: '',
      headChargeable: '',
      schemeNo: ''
    });
  }

  // if sub major head is selected
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
      typeOfEstimate: '1',
      objectClass: '',
      headChargeable: '',
      schemeNo: ''
    });
  }

  // if minor head is selected
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
      typeOfEstimate: '1',
      objectClass: '',
      headChargeable: '',
      schemeNo: ''
    });
  }

  // if sub head is selected
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
      typeOfEstimate: '1',
      objectClass: '',
      headChargeable: '',
      schemeNo: ''
    });
  }

  // if detailed head is selected
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
      typeOfEstimate: '1',
      objectClass: '',
      headChargeable: '',
      schemeNo: ''
    });
  }

  // if object class  is selected
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

  // if demand value is changed
  demandChange(data) {
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

  // if item name/ work name is changed
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

  // if type of estimate value is changed
  typeChange(data) {
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

  // open ddo grant head dialog pop up
  openDdoGrantHeadDialog(data?): void {
    const dialogRef = this._dialog.open(DdoGrantHeadComponent, {
      width: '1900px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.majorHeadVal = this.majorHeadList[0].value;
      this.subMajorHeadVal = this.subMajorHeadList[0].value;
      this.minorHeadVal = this.minorHeadList[0].value;
      this.subHeadVal = this.subHeadList[0].value;
      this.detailHeadVal = this.detailedHeadList[0].value;
      this.objectClassVal = this.objectClassList[0].value;
      let headcharge;
      if (result == null) {
        headcharge = this.majorHeadList[0].value
          + ':'
          + this.subMajorHeadList[0].value
          + ':'
          + this.minorHeadList[0].value
          + ':'
          + this.subHeadList[0].value
          + ':'
          + this.detailedHeadList[0].value
          + ':'
          + this.objectClassList[0].value;
      } else {
        headcharge = result;
      }
      this.formsixtytwo.patchValue({
        schemeNo: '000000',
        subMajorHead: this.subMajorHeadList[0].value,
        minorHead: this.minorHeadList[0].value,
        subHead: this.subHeadList[0].value,
        detailHead: this.detailedHeadList[0].value,
        typeOfEstimate: this.typeOfEstimateList[0].value,
        objectClass: this.objectClassList[0].value,
        billCategory: this.billCategoryList[0].value,
        majorHead: this.majorHeadList[0].value,
        demand: this.demandList[0].value,
        headChargeable: headcharge,
      });
    });
  }

  // opens cheque list type pop up
  checkDialog(): void {
    const dialogRef = this._dialog.open(ChequeListTypeDialogComponent, {
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

  //  calculate total epay amount
  totalAmountEpay(): number {
    let amount = 0;
    this.epaymentDataSource.data.forEach(element => {
      amount = amount + Number(element.amount);
    });
    return amount;
  }

  // delete row in e-payment details table
  deletepaymentRow(index) {
    this.epaymentDataSource.data.splice(index, 1);
    this.epaymentDataSource = new MatTableDataSource(
      this.epaymentDataSource.data
    );
  }

  // fill details
  fillData() {
    const p_data = this.expenditureDataSource.data;
    p_data.push({
      budgetCode: '1600',
      description: 'Publications',
      edpCode: '1601',
      amount: '0.00'
    });
    p_data.splice(this.expenditureDataSource.data.length - 2, 1);
    this.expenditureDataSource.data = p_data;
  }

  // calculate total expenditure details amount
  totalExpeAmount(): number {
    let amount = 0;
    this.expenditureDataSource.data.forEach(element => {
      amount = amount + Number(element.amount);
    });
    return amount;
  }

  // add row in expenditure details
  addExpenditureRow() {
    const p_data = this.expenditureDataSource.data;
    this.isInputEdpCode = false;
    this.isDelete = true;
    p_data.push({
      budgetCode: '',
      description: '',
      edpCode: '',
      amount: '0.00'
    });
    this.expenditureDataSource.data = p_data;
  }

  // delete row in expenditure details
  deletExpenditureRow(index) {
    this.expenditureDataSource.data.splice(index, 1);
    this.expenditureDataSource = new MatTableDataSource(
      this.expenditureDataSource.data
    );
  }

  // add row in recovery details
  addRecoveryRow() {
    const Col_Data = this.recoveryDataSource.data;
    Col_Data.push({
      budgetCode: '',
      description: '',
      edpCode: '',
      amount: ''
    });
    this.recoveryDataSource.data = Col_Data;
  }

  // add data in recovery details
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

  // calculate total recovery amount
  totalRecovery(): number {
    let amount = 0;
    this.recoveryDataSource.data.forEach(element => {
      amount = amount + Number(element.amount);
    });
    return amount;
  }

  // delete row from recovery details
  deleteRowRecovery(index) {
    this.recoveryDataSource.data.splice(index, 1);
    this.recoveryDataSource = new MatTableDataSource(
      this.recoveryDataSource.data
    );
  }

  // fill receipt description
  fillReceiptDescription() {
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

  // calculate total of receipt amount
  receiptTotal(): number {
    let amount = 0;
    this.receiptDataSource.data.forEach(element => {
      amount = amount + Number(element.amount);
    });
    return amount;
  }

  // add row in receipt details
  addReceiptRow(data) {
    const Col_Data = this.summaryDataSource.data;
    Col_Data.push({
      edpCode: '9547',
      amount: '5555.00',
      challanDate: '',
      pdAccount: '',
      party: '',
    });
    this.summaryDataSource.data = Col_Data;
  }

  // delete row from receipt details table
  deleteReceiptRow(index) {
    this.receiptDataSource.data.splice(index, 1);
    this.summaryDataSource.data = [];
    this.receiptDataSource = new MatTableDataSource(
      this.receiptDataSource.data
    );
  }

  // calculate total amount in receipt data summary
  totalSummaryAmount(): number {
    let amount = 0;
    this.summaryDataSource.data.forEach(element => {
      amount = amount + Number(element.amount);
    });
    return amount;
  }

  // remove row in receipt data summary
  removeSummaryRow(index) {
    this.summaryDataSource.data.splice(index, 1);
    this.summaryDataSource = new MatTableDataSource(
      this.summaryDataSource.data
    );
  }

  // calculate total cheque amount
  totalChequeAmount(): number {
    let chequeAmount = 0;
    this.chequeDataSource.data.forEach(element => {
      chequeAmount = chequeAmount + Number(element.chequeAmount);
    });
    return chequeAmount;
  }

  // add new row in cheque details table
  addChequeRow() {
    const p_data = this.chequeDataSource.data;
    p_data.push({
      chequeType: '1',
      partyName: '',
      accountNo: '',
      chequeAmount: '0.00',
      address: ''
    });
    this.chequeDataSource.data = p_data;
  }

  // delete row from cheque details
  delteChequeRow(index) {
    this.chequeDataSource.data.splice(index, 1);
    this.chequeDataSource = new MatTableDataSource(this.chequeDataSource.data);
  }

  // add new row in receipt detials table on click on add row button
  addReceiptRowButton() {
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

  // change value of ddo party name on basis of cheque type
  changeDDovalue(data, i) {
    if (data.value === '1') {
      this.DDoParty = false;
      this.checkList.splice(i, 1, {
        chequeType: '1',
        partyName: '',
        address: '',
        accountNo: '',
        chequeAmount: '0.00',
      });
      this.chequeDataSource = new MatTableDataSource(this.checkList);
    }
    if (data.value === '2') {
      this.DDoParty = false;
      this.checkList.splice(i, 1, {
        chequeType: '2',
        partyName: 'District Treasury Officer, District Treasury Office, Gandhinagar',
        address: '',
        accountNo: '',
        chequeAmount: '0.00',
      });
      this.chequeDataSource = new MatTableDataSource(this.checkList);
      this.DDoParty = true;

    }
  }

  // show item name/work name field on basis of type of estimate value
  itemSelect(selectedValue) {
    if (selectedValue.value !== '1') {
      return (this.isItemList = true);
    }
    if (selectedValue.value === '1') {
      return (this.isItemList = false);
    }
  }

  // selects which details to render (e-payment or cheque) on basis of value of payment type value
  payment(data) {
    if (data.value === '1') {
      this.epayment = false;
      this.chequeTable = true;
    }
    if (data.value === '2') {
      this.chequeTable = false;
      this.epayment = true;
    }
  }

  // selects to display payment type field on basis of bill category field value
  billValues(data) {
    if (data.value === '3' || data.value === '4') {
      this.paymentTypeDropDown = false;
    }
    if (data.value === '1' || data.value === '2') {
      this.paymentTypeDropDown = true;
    }
  }
}
/** BillPreparationSixtyTwoComponent end */
