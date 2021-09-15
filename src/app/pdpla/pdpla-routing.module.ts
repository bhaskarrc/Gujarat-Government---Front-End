import { CreateAccountAgLevelComponent } from './create-account-ag-level/create-account-ag-level.component';
import { CreateAccountDatLevelComponent } from './create-account-dat-level/create-account-dat-level.component';
// tslint:disable-next-line:max-line-length
import { CreateAccountParentDepartmentLevelComponent } from './create-account-parent-department-level/create-account-parent-department-level.component';
import { CreateAccountHodLevelComponent } from './create-account-hod-level/create-account-hod-level.component';
import { CreateAccountDdoLevelComponent } from './create-account-ddo-level/create-account-ddo-level.component';
import { TreasuryReportForVerificationComponent } from './treasury-report-for-verification/treasury-report-for-verification.component';
import { FormAdviceComponent } from './form-advice/form-advice.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAccountComponent } from './account-creation/create-account/create-account.component';
import { CreateAccountListingComponent } from './account-creation/create-account-listing/create-account-listing.component';
import { AccountClosingRequestComponent } from './accout-closing/account-closing-request/account-closing-request.component';
// tslint:disable-next-line:max-line-length
import { AccountClosingRequestListingComponent } from './accout-closing/account-closing-request-listing/account-closing-request-listing.component';
import { RefundRequestComponent } from './refund-process/refund-request/refund-request.component';
import { RefundRequestListingComponent } from './refund-process/refund-request-listing/refund-request-listing.component';
import { SplitChallanComponent } from './Split-challan-process/split-challan/split-challan.component';
import { ChequePostingComponent } from './cheque-process/cheque-posting-receipt/cheque-posting.component';
import { ChallanPostingComponent } from './challan-process/challan-posting-receipt-listing/challan-posting.component';
import { ChallanPostingReceiptComponent } from './challan-process/challan-posting-receipt/challan-posting-receipt.component';
import { ChequePostingListingComponent } from './cheque-process/cheque-posting-listing/cheque-posting-listing.component';
import { PdplaMasterCarryforwardComponent } from './pdpla-master/pdpla-master-carryforward/pdpla-master-carryforward.component';
import { DdoCardexMappingComponent } from './ddo-cardex-mapping/ddo-cardex-mapping.component';
import { AdviceComponent } from './advice/advice.component';
import { ChequePostingViewComponent } from './cheque-process/cheque-posting-view/cheque-posting-view.component';
import { ChallanPostingViewComponent } from './challan-process/challan-posting-view/challan-posting-view.component';
import { InterestProcessComponent } from './interest-calculation-process/interest-process-input/interest-process.component';
// tslint:disable-next-line:max-line-length
import { InterestCalculationOutputComponent } from './interest-calculation-process/interest-calculation-output/interest-calculation-output.component';
import { DistrictTresuryOfcFormBComponent } from './district-tresury-ofc-form-b/district-tresury-ofc-form-b.component';
import { TresuryReportVerificationComponent } from './tresury-report-verification/tresury-report-verification.component';
import { AdviceForApprovalComponent } from './advice-for-approval/advice-for-approval.component';
import { InoperativeAccountComponent } from './inoperative-account/inoperative-account.component';
import { InoperativeAcAsOnDateComponent } from './inoperative-ac-as-on-date/inoperative-ac-as-on-date.component';
import { CreateAccountFdLevelComponent } from './create-account-fd-level/create-account-fd-level.component';
import { AccountClosingRequestDatComponent } from './accout-closing/account-closing-request-dat/account-closing-request-dat.component';
import { AccountClosingRequestToComponent } from './accout-closing/account-closing-request-to/account-closing-request-to.component';
// tslint:disable-next-line: max-line-length
import { AccountClosingRequestListingToComponent } from './accout-closing/account-closing-request-listing-to/account-closing-request-listing-to.component';
// tslint:disable-next-line: max-line-length
import { AccountClosingRequestListingDatComponent } from './accout-closing/account-closing-request-listing-dat/account-closing-request-listing-dat.component';
import { CreateAccountListingAgComponent } from './account-creation/create-account-listing-ag/create-account-listing-ag.component';
import { CreateAccountAgLevelApprovedComponent } from './create-account-ag-level-approved/create-account-ag-level-approved.component';
import { RefundRequestAdministratorComponent } from './refund-process/refund-request-administrator/refund-request-administrator.component';
import { RefundRequestTreasuryComponent } from './refund-process/refund-request-treasury/refund-request-treasury.component';
import { RefundRequestDatComponent } from './refund-process/refund-request-dat/refund-request-dat.component';
// tslint:disable-next-line: max-line-length
import { RefundRequestListingAdministratorComponent } from './refund-process/refund-request-listing-administrator/refund-request-listing-administrator.component';
// tslint:disable-next-line: max-line-length
import { RefundRequestListingTreasuryComponent } from './refund-process/refund-request-listing-treasury/refund-request-listing-treasury.component';
import { RefundRequestListingDatComponent } from './refund-process/refund-request-listing-dat/refund-request-listing-dat.component';
// tslint:disable-next-line: max-line-length
import { CreateAccountAgLevelApprovedListingComponent } from './create-account-ag-level-approved-listing/create-account-ag-level-approved-listing.component';
import { CreateAccountListingHodComponent } from './account-creation/create-account-listing-hod/create-account-listing-hod.component';
import { CreateAccountListingAdminComponent } from './account-creation/create-account-listing-admin/create-account-listing-admin.component';
import { CreateAccountListingDatComponent } from './account-creation/create-account-listing-dat/create-account-listing-dat.component';
import { CreateAccountListingFdComponent } from './account-creation/create-account-listing-fd/create-account-listing-fd.component';
import { InwardOnlineAdviceComponent } from './inward-online-advice/inward-online-advice.component';
import { SavedAdviceComponent } from './saved-advice/saved-advice.component';
import { AdviceCardexVerificationComponent } from './advice-cardex-verification/advice-cardex-verification.component';
import { ReceiveReceiptScrollDetailsComponent } from './receive-receipt-scroll-details/receive-receipt-scroll-details.component';
import { AcceptPaymentScrollFromBankComponent } from './accept-payment-scroll-from-bank/accept-payment-scroll-from-bank.component';
import { ReceivePaymentScrollDetailsComponent } from './receive-payment-scroll-details/receive-payment-scroll-details.component';
import { AcceptReceiptScrollFromBankComponent } from './accept-receipt-scroll-from-bank/accept-receipt-scroll-from-bank.component';
import { LedgerCumPassBookComponent } from './ledger-cum-pass-book/ledger-cum-pass-book.component';
import { GtrSixtyTwoAComponent } from './gtr-sixty-two-a/gtr-sixty-two-a.component';
import { AdviceGenerateListingComponent } from './advice-generate-listing/advice-generate-listing.component';
import { AdviceVerificationToComponent } from './advice-verification-to/advice-verification-to.component';
import { AdviceVerificationAuditorComponent } from './advice-verification-auditor/advice-verification-auditor.component';
import { AdviceToComponent } from './advice-to/advice-to.component';
import { AdviceAuditorComponent } from './advice-auditor/advice-auditor.component';
import { ChequePrintingComponent } from './cheque-printing/cheque-printing.component';
import { ChequesPrintingComponent } from './cheques-printing/cheques-printing.component';
import { ReconciliationComponent } from './reconciliation/reconciliation.component';
import { ReconciliationReportComponent } from './reconciliation-report/reconciliation-report.component';
import { ReconciliationProperComponent } from './reconciliation-proper/reconciliation-proper.component';
import { LedgerCumPassBookComparisonComponent } from './ledger-cum-pass-book-comparison/ledger-cum-pass-book-comparison.component';
import { ReconciliationModifiedComponent } from './reconciliation-modified/reconciliation-modified.component';

export const routesPdpla: Routes = [
  {
    path: 'create-account',
    component: CreateAccountComponent
  },
  {
    path: 'create-account-listing',
    component: CreateAccountListingComponent
  },
  {
    path: 'create-account-listing-ag',
    component: CreateAccountListingAgComponent
  },
  {
    path: 'create-account-closing-request',
    component: AccountClosingRequestComponent
  },
  {
    path: 'create-account-closing-request-to',
    component: AccountClosingRequestToComponent
  },
  {
    path: 'create-account-closing-request-dat',
    component: AccountClosingRequestDatComponent
  },
  {
    path: 'create-account-closing-request-listing',
    component: AccountClosingRequestListingComponent
  },
  {
    path: 'create-account-closing-request-listing-to',
    component: AccountClosingRequestListingToComponent
  },
  {
    path: 'create-account-closing-request-listing-dat',
    component: AccountClosingRequestListingDatComponent
  },
  {
    path: 'refund-request',
    component: RefundRequestComponent
  },
  {
    path: 'refund-request-administrator',
    component: RefundRequestAdministratorComponent
  },
  {
    path: 'refund-request-treasury',
    component: RefundRequestTreasuryComponent
  },
  {
    path: 'refund-request-dat',
    component: RefundRequestDatComponent
  },
  {
    path: 'refund-request-listing',
    component: RefundRequestListingComponent
  },
  {
    path: 'refund-request-listing-administrator',
    component: RefundRequestListingAdministratorComponent
  },
  {
    path: 'refund-request-listing-treasury',
    component: RefundRequestListingTreasuryComponent
  },
  {
    path: 'refund-request-listing-dat',
    component: RefundRequestListingDatComponent
  },
  {
    path: 'split-challan-search',
    component: SplitChallanComponent,
  },
  {
    path: 'challan-posting',
    component: ChallanPostingReceiptComponent,
  },
  {
    path: 'challan-posting-listing',
    component: ChallanPostingComponent,
  },
  {
    path: 'challan-posting-view',
    component: ChallanPostingViewComponent,
  },
  {
    path: 'cheque-posting',
    component: ChequePostingComponent,
  },
  {
    path: 'cheque-posting-listing',
    component: ChequePostingListingComponent,
  },
  {
    path: 'cheque-posting-view',
    component: ChequePostingViewComponent
  },
  {
    path: 'pdpla-master',
    component: PdplaMasterCarryforwardComponent,
  },
  {
    path: 'ddo-cardex-mapping',
    component: DdoCardexMappingComponent,
  },
  {
    path: 'advice-generation',
    component: AdviceComponent,
  },
  {
    path: 'advice-generate-listing',
    component: AdviceGenerateListingComponent
  },
  {
    path: 'interest-calculation-input',
    component: InterestProcessComponent,
  },
  {
    path: 'interest-calculation-output',
    component: InterestCalculationOutputComponent,
  },
  {
    path: 'form-b',
    component: DistrictTresuryOfcFormBComponent,
  },
  {
    path: 'treasury-report-verification',
    component: TresuryReportVerificationComponent,
  },
  {
    path: 'advice-for-approval',
    component: AdviceForApprovalComponent
  },
  {
    path: 'form-advice',
    component: FormAdviceComponent
  },
  {
    path: 'inoperative-ac',
    component: InoperativeAccountComponent
  },
  {
    path: 'inoperative-ac-ondate',
    component: InoperativeAcAsOnDateComponent
  },
  {
    path: 'treasury-report-for-verification',
    component: TreasuryReportForVerificationComponent
  },
  {
    path: 'create-account-ddo-level',
    component: CreateAccountDdoLevelComponent
  },
  {
    path: 'create-account-hod-level',
    component: CreateAccountHodLevelComponent
  },
  {
    path: 'create-account-parent-department-level',
    component: CreateAccountParentDepartmentLevelComponent
  },
  {
    path: 'create-account-fd-level',
    component: CreateAccountFdLevelComponent
  },
  {
    path: 'create-account-dat-level',
    component: CreateAccountDatLevelComponent
  },
  {
    path: 'create-account-ag-level',
    component: CreateAccountAgLevelComponent
  },
  {
    path: 'create-account-ag-level-approved',
    component: CreateAccountAgLevelApprovedComponent
  },
  {
    path: 'create-account-ag-level-approved-listing',
    component: CreateAccountAgLevelApprovedListingComponent
  },
  {
    path: 'create-account-listing-hod',
    component: CreateAccountListingHodComponent
  },
  {
    path: 'create-account-listing-dat',
    component: CreateAccountListingDatComponent
  },
  {
    path: 'create-account-listing-admin',
    component: CreateAccountListingAdminComponent
  },
  {
    path: 'create-account-listing-fd',
    component: CreateAccountListingFdComponent
  },
  {
    path: 'inward-online-advice',
    component: InwardOnlineAdviceComponent
  },
  {
    path: 'saved-advice',
    component: SavedAdviceComponent
  },
  {
    path: 'advice-cardex-verification',
    component: AdviceCardexVerificationComponent
  },
  {
    path: 'receive-receipt-scroll-details',
    component: ReceiveReceiptScrollDetailsComponent
  },
  {
    path: 'accept-payment-scroll-from-bank',
    component: AcceptPaymentScrollFromBankComponent
  },
  {
    path: 'receive-payment-scroll-details',
    component: ReceivePaymentScrollDetailsComponent
  },
  {
    path: 'accept-receipt-scroll-from-bank',
    component: AcceptReceiptScrollFromBankComponent
  },
  {
    path: 'ledger-cum-pass-book',
    component: LedgerCumPassBookComponent
  },
  {
    path: 'gtr-sixty-two-a',
    component: GtrSixtyTwoAComponent
  },
  {
    path: 'advice-verification-auditor',
    component: AdviceVerificationAuditorComponent
  },
  {
    path: 'advice-verification-to',
    component: AdviceVerificationToComponent
  },
  {
    path: 'advice-to',
    component: AdviceToComponent
  },
  {
    path: 'advice-auditor',
    component: AdviceAuditorComponent
  },
  {
    path: 'cheque-printing',
    component: ChequePrintingComponent
  },
  {
    path: 'cheques-printing',
    component: ChequesPrintingComponent
  },
  {
    path: 'reconciliation',
    component: ReconciliationComponent
  },
  {
    path: 'reconciliation-report',
    component: ReconciliationReportComponent
  },
  {
    path: 'reconciliation-proper/:type',
    component: ReconciliationProperComponent
  },
  {
    path: 'ledger-cum-pass-book-comparison',
    component: LedgerCumPassBookComparisonComponent
  },
  {
    path: 'reconciliation-modified',
    component: ReconciliationModifiedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routesPdpla)],
  exports: [RouterModule]
})
export class PdplaRoutingModule { }
