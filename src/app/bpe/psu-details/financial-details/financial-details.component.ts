
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';
import { bpeMessage } from 'src/app/common/error-message/common-message.constants';


@Component({
  selector: 'app-financial-details',
  templateUrl: './financial-details.component.html',
  styleUrls: ['./financial-details.component.css']
})
export class FinancialDetailsComponent implements OnInit {

  public diffTotalCostPurchase: any;
  public diffTotalRevenueOther: any;
  public diffTotalEbitda: any;
  public diffProfitLoss: any;
  public diffProfitLossCont: any;
  public totalOfShareHolder: any;
  public NonCurrent: any;
  public current: any;
  public totalFixedAssets: any;
  public NonCurrentAss: any;
  public totalCurrAssets: any;
  public finTotal: any;
  public capitalEmployed: any;
  public total: any;

  // errorMessages ts file
  errorMessages = bpeMessage;
  todayDate = Date.now();

  initiatiomdate = new Date((new Date()));
  maxDate = new Date();
  selection = new SelectionModel<any>(true, []);
  isSubmitted = false;
  public netWorth: any;
  public workingCapital: any;

  // FormGroup
  financialDetailsForm: FormGroup;

  // FormControl
  finYearPLCtrl: FormControl = new FormControl();
  finYearSsfCtrl: FormControl = new FormControl();
  finYearBsCtrl: FormControl = new FormControl();
  finYearFrCtrl: FormControl = new FormControl();
  finYearBaCtrl: FormControl = new FormControl();
  adminDeptNameCtrl: FormControl = new FormControl();
  finalizedYearCtrl: FormControl = new FormControl();
  auditCompletedYearCtrl: FormControl = new FormControl();
  // List values
  finYearPL_list: any[] = [
    { value: '1', viewValue: '2015-2016' },
    { value: '2', viewValue: '2016-2017' },
  ];

  finYearBs_list: any[] = [
    { value: '1', viewValue: '2015-2016' },
    { value: '2', viewValue: '2016-2017' },
  ];
  finYearFr_list: any[] = [
    { value: '1', viewValue: '2015-2016' },
    { value: '2', viewValue: '2016-2017' },
  ];


  finYearSsf_list: any[] = [
    { value: '1', viewValue: '2015-2016' },
    { value: '2', viewValue: '2016-2017' },
  ];

  finYearBa_list: any[] = [
    { value: '1', viewValue: '2015-2016' },
    { value: '2', viewValue: '2016-2017' },
  ];

  finalizedYear_list: any[] = [
    { value: '1', viewValue: '2015-2016' },
    { value: '2', viewValue: '2016-2017' },
  ];

  auditCompletedYear_list: any[] = [
    { value: '1', viewValue: '2015-2016' },
    { value: '2', viewValue: '2016-2017' },
  ];

  adminDeptName_list: any[] = [
    { value: '1', viewValue: 'Government Company' },
    { value: '2', viewValue: 'Joint Sector Company' },
    { value: '3', viewValue: 'Statutory Corporation/Board' },
    { value: '4', viewValue: 'Government Authority' },

  ];
  formBuilder: any;

  constructor(private fb: FormBuilder) { }


  ngOnInit() {

    this.financialDetailsForm = this.fb.group({
      // FormGroup Fields
      id: ['100001'],
      compName: ['U.N. Mehta Institute of Cardiology & Research Centre'],
      regiOfficeAddress: ['Civil Hospital Campus,Asarwa,Ahmedabad,380016'],
      adminOfficeAddress: [''],
      factoryAddress: [''],
      incorporationDate: [''],
      amalgamationDate: [''],
      cin: [''],
      panNo: [''],
      tanNo: ['', Validators.pattern(/^([A-Z]){5}([0-9]){4}([A-Z]){1}?$/)],
      gstIn: [''],
      phoneNo: [''],
      faxNo: [''],
      email: ['', Validators.email],
      mobile: [''],
      adminDeptName: [''],
      chairmanName: [''],
      managingDirector: [''],
      boardDirector: [''],
      numberOfEmp: [''],
      numberOfEmoluments: [''],
      finalizedYear: ['2'],
      auditCompletedYear: ['2'],
      contactDetails: [''],
      internalAuditorDetails: [''],
      presentActivities: [''],

      // profit & Loss
      finYearPL: [''],
      idPL: ['100001'],
      compNamePL: ['U.N. Mehta Institute of Cardiology & Research Centre'],
      revenueFromOperations: [''],
      otherIncome: [''],
      totalRevenueOther: [''],
      materialCost: [''],
      purchaseStock: [''],
      inventries: [''],
      empExp: [''],
      otherExp: [''],
      totalCostPurchase: [''],
      totalEbitda: [''],
      financeCost: [''],
      depriExpns: [''],
      totalPloss: [''],
      extraItems: [''],
      taxExpense: [''],
      totalPlossCon: [''],
      proposedDevident: [''],
      eps: [''],
      dilutedEarning: [''],
      equityShares: [''],
      faceShares: [''],
      shareCapital: [''],

      // Balance Sheet
      finYearBs: [''],
      idBs: ['100001'],
      compNameBs: ['U.N. Mehta Institute of Cardiology & Research Centre'],

      shareCapitalBs: [''],
      freeReverseBs: [''],
      otherReverseBs: [''],
      moneyRecvdBs: [''],
      totalShareHolderFund: [''],

      shareMoneyPendingBs: [''],

      longTermBorrowingBs: [''],
      deferredTaxBs: [''],
      otherLiabitiesBs: [''],
      longProvisionsBs: [''],
      totalNonCurrentLiabities: [''],

      shortTermBorrowingsBs: [''],
      tradePayablesBs: [''],
      otherCurrentLiabitiesBs: [''],
      shortTermProvisionsBs: [''],
      totalCurrentLiabities: [''],

      total1: [''],
      assets: [''],
      tangibleAssetsBs: [''],
      intangibleAssetsBs: [''],
      capitalWorkprogressBs: [''],
      intangibleDevelopmentBs: [''],
      totalFixedAssets: [''],

      nonCurrentInvstBs: [''],
      deferredTaxBs1: [''],
      longLoansBs: [''],
      otherAssetsBs: [''],
      totalNonCurrentAssets: [''],

      currentInvstBs: [''],
      inventriesBs: [''],
      tradeRecvBs: [''],
      cashBs: [''],
      shortTermLoansBs: [''],
      otherAssetsBs1: [''],
      currentAssets: [''],
      finalTotal: [''],


      // Financial Ratios
      finYearFr: [''],
      idFr: ['100001'],
      compNameFr: ['U.N. Mehta Institute of Cardiology & Research Centre'],
      installmentFr: [''],
      totalNetWorthFr: [''],
      totalWorkingCapitalFr: [''],
      totalCapitalEmployedFr: [''],
      totalGrossProfitMarginFr: [''],


      // Status of Statutory Filing
      finYearSsf: [''],
      idSsf: ['100001'],
      compNameSsf: ['U.N. Mehta Institute of Cardiology & Research Centre'],
      particularSsf: [''],
      annualReturnSsf: [''],
      finincialStatementSsf: [''],
      auditorsAppointmentSsf: [''],
      itrSsf: [''],
      chgSsf: [''],
      gstSsf: [''],
      tdsSsf: [''],
      caSsf: [''],
      agmSsf: [''],
      dirSsf: [''],
      incSsf: [''],
      unpaidDuesSsf: [''],
      litigationSsf: [''],
      itrNonSsf: [''],
      reportSsf: [''],

      // Status of project under implementation
      idSpi: ['100001'],
      compNameidSpi: ['U.N. Mehta Institute of Cardiology & Research Centre'],
      projectDetailsSpi: [''],
      approvedProjectSpi: [''],
      equitySpi: [''],
      debtSpi: [''],
      approvalDateSpi: [''],
      otherSpi: [''],
      finalProjectCostSpi: [''],
      finalEquitySpi: [''],
      finalDebtSpi: [''],
      finalOtherSpi: [''],
      finalApprovalDateSpi: [''],
      originalScheduledDateSpi: [''],
      revisedCommercialDateSpi: [''],
      actualCostProductSpi: [''],
      actualCostEquitySpi: [''],
      actualCostDebtSpi: [''],
      actualCostOtherSpi: [''],
      delayReasonSpi: [''],
      projectPercentSpi: [''],
      projectPercentScheduleSpi: [''],

      // Board/Nigam/Company Activity Details
      finYearBa: [''],
      idBa: ['100001'],
      compNameidBa: ['U.N. Mehta Institute of Cardiology & Research Centre'],
      compObjectivesBa: [''],
      particularBa: [''],
      planBa: [''],
      activity1Ba: [''],
      approvedBudgetPlanBa: [''],
      activity11Ba: [''],
      atualTargetPlanBa: [''],
      activity111Ba: [''],
      approvedBudgetForYearBa: [''],
      actualExpensesForYearBa: [''],
      currentRationBa: [''],
      fundAllocatedGogTotalIncBa: [''],
      incomeUtilizationBa: [''],
      resourcegenerationExpnBa: [''],
      resourcegenerationIncomeBa: [''],
      ratiosBa: [''],
      resourceGenerationRatioBa: [''],
      adminCostExpnBa: ['']
    });
  }
  // function to clear form
  clearForm() {
    this.financialDetailsForm.reset();
  }

  // errormsg shows on click submit button
  onSave() {
    if (this.financialDetailsForm.valid) {
      this.isSubmitted = false;
    } else {
      this.isSubmitted = true;
    }

  }

  // totalRevenueOther value calculatiuon (Profit & Loss)
  totalRevenueOtherTotal() {
    const p = +this.financialDetailsForm.get('revenueFromOperations').value;
    const r = +this.financialDetailsForm.get('otherIncome').value;
    this.diffTotalRevenueOther = parseFloat('' + (p + r)).toFixed(2);
    return this.diffTotalRevenueOther;
  }

  // totalCostPurchase value calculatiuon (Profit & Loss)
  totalCostPurchaseTotal() {
    const m = +this.financialDetailsForm.get('materialCost').value;
    const p = +this.financialDetailsForm.get('purchaseStock').value;
    const i = +this.financialDetailsForm.get('inventries').value;
    const e = +this.financialDetailsForm.get('empExp').value;
    const o = +this.financialDetailsForm.get('otherExp').value;
    this.diffTotalCostPurchase = parseFloat('' + (m + p + i + e + o)).toFixed(2);
    return this.diffTotalCostPurchase;
  }


  // calcualte ebit total (Profit & Loss)
  totalEbitdaTotal() {
    this.diffTotalEbitda = parseFloat('' + (this.diffTotalRevenueOther - this.diffTotalCostPurchase)).toFixed(2);

    return this.diffTotalEbitda;
  }

  // calcualte profit / loss (Profit & Loss)
  totalProfitLoss() {
    const fc = +this.financialDetailsForm.get('financeCost').value;
    const de = +this.financialDetailsForm.get('depriExpns').value;
    this.diffProfitLoss = parseFloat('' + (this.diffTotalEbitda - fc - de)).toFixed(2);
    return this.diffProfitLoss;
  }

  // calculate profit/loss from continuing operations (Profit & Loss)
  totalProfitLossContinue() {
    const ei = +this.financialDetailsForm.get('extraItems').value;
    const te = +this.financialDetailsForm.get('taxExpense').value;
    this.diffProfitLossCont = parseFloat('' + (this.diffProfitLoss - ei - te)).toFixed(2);

    return this.diffProfitLossCont;
  }

  //  shareholders fund (balance sheet)
  totalOfShareHolderFund() {
    let amount;
    const sc = +this.financialDetailsForm.get('shareCapitalBs').value;
    const fr = +this.financialDetailsForm.get('freeReverseBs').value;
    const or = +this.financialDetailsForm.get('otherReverseBs').value;
    const mr = +this.financialDetailsForm.get('moneyRecvdBs').value;

    this.totalOfShareHolder = (sc + fr + or + mr);
    amount = parseFloat('' + this.totalOfShareHolder).toFixed(2);
    return amount;
  }

  // non current liabilities (balance sheet)
  totalOfNonCurrentLiabities() {
    let amount;
    const lb = +this.financialDetailsForm.get('longTermBorrowingBs').value;
    const dt = +this.financialDetailsForm.get('deferredTaxBs').value;
    const ol = +this.financialDetailsForm.get('otherLiabitiesBs').value;
    const lp = +this.financialDetailsForm.get('longProvisionsBs').value;

    this.NonCurrent = (lb + dt + ol + lp);
    amount = parseFloat('' + this.NonCurrent).toFixed(2);
    return amount;
  }

  // currrent liabilities (balance sheet)
  totalOfCurrentLiabities() {
    let amount;
    const sb = +this.financialDetailsForm.get('shortTermBorrowingsBs').value;
    const tp = +this.financialDetailsForm.get('tradePayablesBs').value;
    const oc = +this.financialDetailsForm.get('otherCurrentLiabitiesBs').value;
    const st = +this.financialDetailsForm.get('shortTermProvisionsBs').value;

    this.current = (sb + tp + oc + st);
    amount = parseFloat('' + this.current).toFixed(2);
    return amount;
  }

  // total ( shareholders fund + non current liabilities + currrent liabilities + share application money pending allotment )
  totalOfOne() {
    let amount;
    const e = +this.financialDetailsForm.get('shareMoneyPendingBs').value;
    this.total = this.totalOfShareHolder + e + this.NonCurrent + this.current;
    amount = parseFloat('' + this.total).toFixed(2);
    return amount;
  }

  // fixed assets (tangibleAssets + intangibleAssets +  capitalWorkprogress +  intangibleDevelopment )
  totalOfFixedAssets() {
    let amount;
    const ta = +this.financialDetailsForm.get('tangibleAssetsBs').value;
    const ia = +this.financialDetailsForm.get('intangibleAssetsBs').value;
    const cw = +this.financialDetailsForm.get('capitalWorkprogressBs').value;
    const id = +this.financialDetailsForm.get('intangibleDevelopmentBs').value;
    this.totalFixedAssets = (ta + ia + cw + id);
    amount = parseFloat('' + this.totalFixedAssets).toFixed(2);
    return amount;
  }

  // non-current assets (fixed asset + non current investment+ deffered tax assets + long-term loans and advances + other non-current asset)
  totalOfNonCurrentAssets() {
    let amount;
    const nc = +this.financialDetailsForm.get('nonCurrentInvstBs').value;
    const da = +this.financialDetailsForm.get('deferredTaxBs1').value;
    const ll = +this.financialDetailsForm.get('longLoansBs').value;
    const os = +this.financialDetailsForm.get('otherAssetsBs').value;

    this.NonCurrentAss = (this.totalFixedAssets + nc + da + ll + os);
    amount = parseFloat('' + this.NonCurrentAss).toFixed(2);
    return amount;
  }

  // Current assets( current investment + trade receivables + cash and cash equivalents + short-term loans & advances + other current-asset)
  totalOfCurrentAssets() {
    let amount;
    const ci = +this.financialDetailsForm.get('currentInvstBs').value;
    const ib = +this.financialDetailsForm.get('inventriesBs').value;
    const tr = +this.financialDetailsForm.get('tradeRecvBs').value;
    const cb = +this.financialDetailsForm.get('cashBs').value;
    const st = +this.financialDetailsForm.get('shortTermLoansBs').value;
    const oa = +this.financialDetailsForm.get('otherAssetsBs1').value;

    this.totalCurrAssets = (ci + ib + tr + cb + st + oa);
    amount = parseFloat('' + this.totalCurrAssets).toFixed(2);
    return amount;
  }

  // total ( non-current assets + Current assets)
  total2() {

    this.finTotal = (this.NonCurrentAss + this.totalCurrAssets);
    const amount = parseFloat('' + this.finTotal).toFixed(2);

    return amount;
  }

  // calculate net worth( non-current asset + current asset  - (non current liabilities + current -liabilities))
  totalOfNetWorth() {
    this.netWorth = (this.NonCurrentAss + this.totalCurrAssets -
      (this.NonCurrent + this.current));
    const amount = parseFloat('' + this.netWorth).toFixed(2);
    return amount;
  }

  // total working capital ( current-asset - current liabilities)
  totalOfWorkingCapital() {
    this.workingCapital = (this.totalCurrAssets - (this.current));
    const amount = parseFloat('' + this.workingCapital).toFixed(2);

    return amount;
  }

  // calculate total capital employed (non-current asset + current asset - current liabilities)
  totalOfCapitalEmployed() {
    this.capitalEmployed = (this.NonCurrentAss + this.totalCurrAssets - (this.current));
    const amount = parseFloat('' + this.capitalEmployed).toFixed(2);
    return amount;
  }
}
