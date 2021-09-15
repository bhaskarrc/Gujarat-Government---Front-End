import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdplaRoutingModule } from './pdpla-routing.module';
import { CommonProtoModule } from '../common/common.module';
import { MaterialModule } from '../material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { CreateAccountComponent } from './account-creation/create-account/create-account.component';
import { MatRadioModule } from '@angular/material';
import { CreateAccountListingComponent } from './account-creation/create-account-listing/create-account-listing.component';
import { AccountClosingRequestComponent } from './accout-closing/account-closing-request/account-closing-request.component';
// tslint:disable-next-line: max-line-length
import { AccountClosingRequestListingComponent } from './accout-closing/account-closing-request-listing/account-closing-request-listing.component';
import { RefundRequestComponent } from './refund-process/refund-request/refund-request.component';
import { RefundRequestListingComponent } from './refund-process/refund-request-listing/refund-request-listing.component';
import { WorkflowDetailsPdplaComponent } from './workflow-details-pdpla/workflow-details-pdpla.component';
import { SplitChallanComponent } from './Split-challan-process/split-challan/split-challan.component';
import { ChequePostingComponent } from './cheque-process/cheque-posting-receipt/cheque-posting.component';
import { ChallanPostingComponent } from './challan-process/challan-posting-receipt-listing/challan-posting.component';
import { ChallanPostingReceiptComponent } from './challan-process/challan-posting-receipt/challan-posting-receipt.component';
import { ChequePostingListingComponent } from './cheque-process/cheque-posting-listing/cheque-posting-listing.component';
import { PdplaMasterCarryforwardComponent } from './pdpla-master/pdpla-master-carryforward/pdpla-master-carryforward.component';
import { CarryForwardPopupComponent } from './pdpla-master/carry-forward-popup/carry-forward-popup.component';
import { DdoCardexMappingComponent } from './ddo-cardex-mapping/ddo-cardex-mapping.component';
import { AdviceComponent } from './advice/advice.component';
import { ChequePostingViewComponent } from './cheque-process/cheque-posting-view/cheque-posting-view.component';
import { ChallanPostingViewComponent } from './challan-process/challan-posting-view/challan-posting-view.component';
import { InterestProcessComponent } from './interest-calculation-process/interest-process-input/interest-process.component';
// tslint:disable-next-line: max-line-length
import { InterestCalculationOutputComponent } from './interest-calculation-process/interest-calculation-output/interest-calculation-output.component';
import { DistrictTresuryOfcFormBComponent } from './district-tresury-ofc-form-b/district-tresury-ofc-form-b.component';
import { TresuryReportVerificationComponent } from './tresury-report-verification/tresury-report-verification.component';
import { AdviceForApprovalComponent } from './advice-for-approval/advice-for-approval.component';
import { FormAdviceComponent } from './form-advice/form-advice.component';
import { InoperativeAccountComponent } from './inoperative-account/inoperative-account.component';
import { InoperativeAcAsOnDateComponent } from './inoperative-ac-as-on-date/inoperative-ac-as-on-date.component';
import { TreasuryReportForVerificationComponent } from './treasury-report-for-verification/treasury-report-for-verification.component';
import { CreateAccountDdoLevelComponent } from './create-account-ddo-level/create-account-ddo-level.component';
import { CreateAccountHodLevelComponent } from './create-account-hod-level/create-account-hod-level.component';
// tslint:disable-next-line: max-line-length
import { CreateAccountParentDepartmentLevelComponent } from './create-account-parent-department-level/create-account-parent-department-level.component';
import { CreateAccountFdLevelComponent } from './create-account-fd-level/create-account-fd-level.component';
import { CreateAccountDatLevelComponent } from './create-account-dat-level/create-account-dat-level.component';
import { CreateAccountAgLevelComponent } from './create-account-ag-level/create-account-ag-level.component';
import { AccountClosingRequestToComponent } from './accout-closing/account-closing-request-to/account-closing-request-to.component';
import { AccountClosingRequestDatComponent } from './accout-closing/account-closing-request-dat/account-closing-request-dat.component';
// tslint:disable-next-line: max-line-length
import { AccountClosingRequestListingToComponent } from './accout-closing/account-closing-request-listing-to/account-closing-request-listing-to.component';
// tslint:disable-next-line: max-line-length
import { AccountClosingRequestListingDatComponent } from './accout-closing/account-closing-request-listing-dat/account-closing-request-listing-dat.component';
import { CreateAccountListingAgComponent } from './account-creation/create-account-listing-ag/create-account-listing-ag.component';
import { CreateAccountAgLevelApprovedComponent } from './create-account-ag-level-approved/create-account-ag-level-approved.component';
import { RefundRequestAdministratorComponent } from './refund-process/refund-request-administrator/refund-request-administrator.component';
import { RefundRequestTreasuryComponent } from './refund-process/refund-request-treasury/refund-request-treasury.component';
import { RefundRequestDatComponent } from './refund-process/refund-request-dat/refund-request-dat.component';
import { RefundRequestListingDatComponent } from './refund-process/refund-request-listing-dat/refund-request-listing-dat.component';
// tslint:disable-next-line: max-line-length
import { RefundRequestListingTreasuryComponent } from './refund-process/refund-request-listing-treasury/refund-request-listing-treasury.component';
// tslint:disable-next-line: max-line-length
import { RefundRequestListingAdministratorComponent } from './refund-process/refund-request-listing-administrator/refund-request-listing-administrator.component';
import { CreateAccountListingHodComponent } from './account-creation/create-account-listing-hod/create-account-listing-hod.component';
import { CreateAccountListingAdminComponent } from './account-creation/create-account-listing-admin/create-account-listing-admin.component';
import { CreateAccountListingDatComponent } from './account-creation/create-account-listing-dat/create-account-listing-dat.component';
// tslint:disable-next-line: max-line-length
import { CreateAccountAgLevelApprovedListingComponent } from './create-account-ag-level-approved-listing/create-account-ag-level-approved-listing.component';
import { CreateAccountListingFdComponent } from './account-creation/create-account-listing-fd/create-account-listing-fd.component';
import { InwardOnlineAdviceComponent } from './inward-online-advice/inward-online-advice.component';
import { SavedAdviceComponent } from './saved-advice/saved-advice.component';
import { AdviceCardexVerificationComponent } from './advice-cardex-verification/advice-cardex-verification.component';
import { ReceiveReceiptScrollDetailsComponent } from './receive-receipt-scroll-details/receive-receipt-scroll-details.component';
import { ReceivePaymentScrollDetailsComponent } from './receive-payment-scroll-details/receive-payment-scroll-details.component';
import { AcceptPaymentScrollFromBankComponent } from './accept-payment-scroll-from-bank/accept-payment-scroll-from-bank.component';
import { AcceptReceiptScrollFromBankComponent } from './accept-receipt-scroll-from-bank/accept-receipt-scroll-from-bank.component';
import { LedgerCumPassBookComponent } from './ledger-cum-pass-book/ledger-cum-pass-book.component';
import { GtrSixtyTwoAComponent, GTR62ADialogCheckList, GrantHeadDialog } from './gtr-sixty-two-a/gtr-sixty-two-a.component';
import { AdviceGenerateListingComponent } from './advice-generate-listing/advice-generate-listing.component';
import { AdviceVerificationAuditorComponent } from './advice-verification-auditor/advice-verification-auditor.component';
import { AdviceVerificationToComponent } from './advice-verification-to/advice-verification-to.component';
import { AdviceToComponent } from './advice-to/advice-to.component';
import { AdviceAuditorComponent } from './advice-auditor/advice-auditor.component';
import { ChequePrintingComponent } from './cheque-printing/cheque-printing.component';
import { ChequesPrintingComponent } from './cheques-printing/cheques-printing.component';
import { ReconciliationComponent } from './reconciliation/reconciliation.component';
import { ReconciliationReportComponent } from './reconciliation-report/reconciliation-report.component';
import { ReconciliationProperComponent } from './reconciliation-proper/reconciliation-proper.component';
import { LedgerCumPassBookComparisonComponent } from './ledger-cum-pass-book-comparison/ledger-cum-pass-book-comparison.component';
import { ReconciliationModifiedComponent } from './reconciliation-modified/reconciliation-modified.component';



@NgModule({

  imports: [
    CommonModule,
    PdplaRoutingModule,
    CommonProtoModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMatSelectSearchModule,
    MatRadioModule,

  ],

  declarations: [
    CreateAccountComponent,
    CreateAccountListingComponent,
    AccountClosingRequestComponent,
    AccountClosingRequestListingComponent,
    RefundRequestComponent,
    RefundRequestListingComponent,
    WorkflowDetailsPdplaComponent,
    SplitChallanComponent,
    ChallanPostingComponent,
    ChequePostingComponent,
    ChallanPostingReceiptComponent,
    ChequePostingListingComponent,
    PdplaMasterCarryforwardComponent,
    CarryForwardPopupComponent,
    DdoCardexMappingComponent,
    AdviceComponent,
    ChequePostingViewComponent,
    ChallanPostingViewComponent,
    InterestProcessComponent,
    InterestCalculationOutputComponent,
    DistrictTresuryOfcFormBComponent,
    TresuryReportVerificationComponent,
    AdviceForApprovalComponent,
    FormAdviceComponent,
    InoperativeAccountComponent,
    InoperativeAcAsOnDateComponent,
    TreasuryReportForVerificationComponent,
    CreateAccountDdoLevelComponent,
    CreateAccountHodLevelComponent,
    CreateAccountParentDepartmentLevelComponent,
    CreateAccountFdLevelComponent,
    CreateAccountDatLevelComponent,
    CreateAccountAgLevelComponent,
    AccountClosingRequestToComponent,
    AccountClosingRequestDatComponent,
    AccountClosingRequestListingToComponent,
    AccountClosingRequestListingDatComponent,
    CreateAccountListingAgComponent,
    CreateAccountAgLevelApprovedComponent,
    RefundRequestAdministratorComponent,
    RefundRequestTreasuryComponent,
    RefundRequestDatComponent,
    RefundRequestListingDatComponent,
    RefundRequestListingTreasuryComponent,
    RefundRequestListingAdministratorComponent,
    CreateAccountListingHodComponent,
    CreateAccountListingAdminComponent,
    CreateAccountListingDatComponent,
    CreateAccountAgLevelApprovedListingComponent,
    CreateAccountListingFdComponent,
    InwardOnlineAdviceComponent,
    SavedAdviceComponent,
    AdviceCardexVerificationComponent,
    ReceiveReceiptScrollDetailsComponent,
    ReceivePaymentScrollDetailsComponent,
    AcceptPaymentScrollFromBankComponent,
    AcceptReceiptScrollFromBankComponent,
    LedgerCumPassBookComponent,
    GtrSixtyTwoAComponent,
    GTR62ADialogCheckList,
    GrantHeadDialog,
    AdviceGenerateListingComponent,
    AdviceVerificationAuditorComponent,
    AdviceVerificationToComponent,
    AdviceToComponent,
    AdviceAuditorComponent,
    ChequePrintingComponent,
    ChequesPrintingComponent,
    ReconciliationComponent,
    ReconciliationReportComponent,
    ReconciliationProperComponent,
    LedgerCumPassBookComparisonComponent,
    ReconciliationModifiedComponent,
  ],

  entryComponents: [
    WorkflowDetailsPdplaComponent,
    CarryForwardPopupComponent,
    GTR62ADialogCheckList,
    GrantHeadDialog,
  ]
})
export class PdplaModule { }
