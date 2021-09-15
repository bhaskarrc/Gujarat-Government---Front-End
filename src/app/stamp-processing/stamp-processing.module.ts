

import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MaterialModule } from './../material-module';
import { CommonModule } from '@angular/common';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';


import { StampProcessingRoutingModule } from './stamp-processing-routing.module';
import { TreasuryIndentPreparationComponent } from './treasury-indent-preparation/treasury-indent-preparation.component';
import { CommonProtoModule } from '../common/common.module';
import { TreasuryIndentPreparationListComponent } from './treasury-indent-preparation/treasury-indent-preparation-list/treasury-indent-preparation-list.component';
import { CloseConfirmDialogComponent } from './treasury-indent-preparation/treasury-indent-preparation-list/close-confirm-dialog/close-confirm-dialog.component';
import { TreasuryIndentPreparationViewComponent } from './treasury-indent-preparation/treasury-indent-preparation-view/treasury-indent-preparation-view.component';
import { SubTreasuryIndentPreparationComponent } from './treasury-indent-preparation/sub-treasury-indent-preparation/sub-treasury-indent-preparation.component';
import { SubTreasuryIndentPreparationListComponent } from './treasury-indent-preparation/sub-treasury-indent-preparation-list/sub-treasury-indent-preparation-list.component';
import { SubTreasuryIndentPreparationViewComponent } from './treasury-indent-preparation/sub-treasury-indent-preparation-view/sub-treasury-indent-preparation-view.component';
import { OpeningBalanceAndPapersOfStampComponent } from './opening-balance-and-papers-of-stamp/opening-balance-and-papers-of-stamp.component';
import { OpeningBalanceAndPapersOfStampListComponent } from './opening-balance-and-papers-of-stamp/opening-balance-and-papers-of-stamp-list/opening-balance-and-papers-of-stamp-list.component';
import { OpeningBalanceAndPapersOfStampViewComponent } from './opening-balance-and-papers-of-stamp/opening-balance-and-papers-of-stamp-view/opening-balance-and-papers-of-stamp-view.component';
import { CloseConfirmCommonDialogComponent } from './close-confirm-common-dialog/close-confirm-common-dialog.component';
import { PrintingPressMasterComponent } from './printing-press-master/printing-press-master.component';
import { PrintingPressMasterListComponent } from './printing-press-master/printing-press-master-list/printing-press-master-list.component';
import { PrintingPressMasterViewComponent } from './printing-press-master/printing-press-master-view/printing-press-master-view.component';
import { SaveConfirmCommonDialogComponent } from './save-confirm-common-dialog/save-confirm-common-dialog.component';
import { StampDenominationMasterComponent } from './stamp-denomination-master/stamp-denomination-master.component';
import { StampDenominationMasterListComponent } from './stamp-denomination-master/stamp-denomination-master-list/stamp-denomination-master-list.component';
import { StampDenominationMasterViewComponent } from './stamp-denomination-master/stamp-denomination-master-view/stamp-denomination-master-view.component';
import { CategoryMasterComponent } from './category-master/category-master.component';
import { CategoryMasterListComponent } from './category-master/category-master-list/category-master-list.component';
import { CategoryMasterViewComponent } from './category-master/category-master-view/category-master-view.component';
import { VendorMasterComponent } from './vendor-master/vendor-master.component';
import { VendorMasterListComponent } from './vendor-master/vendor-master-list/vendor-master-list.component';
import { VendorMasterViewComponent } from './vendor-master/vendor-master-view/vendor-master-view.component';
import { SingleDoubleLockTofficeComponent } from './single-double-lock-toffice/single-double-lock-toffice.component';
import { SingleDoubleLockStofficeComponent } from './single-double-lock-stoffice/single-double-lock-stoffice.component';
import { SingleDoubleLockTofficeListComponent } from './single-double-lock-toffice/single-double-lock-toffice-list/single-double-lock-toffice-list.component';
import { SingleDoubleLockTofficeViewComponent } from './single-double-lock-toffice/single-double-lock-toffice-view/single-double-lock-toffice-view.component';
import { SingleDoubleLockStofficeViewComponent } from './single-double-lock-stoffice/single-double-lock-stoffice-view/single-double-lock-stoffice-view.component';
import { SingleDoubleLockStofficeListComponent } from './single-double-lock-stoffice/single-double-lock-stoffice-list/single-double-lock-stoffice-list.component';
import { DoubleSingleLockTofficeComponent } from './double-single-lock-toffice/double-single-lock-toffice.component';
import { DoubleSingleLockTofficeViewComponent } from './double-single-lock-toffice/double-single-lock-toffice-view/double-single-lock-toffice-view.component';
import { DoubleSingleLockTofficeListComponent } from './double-single-lock-toffice/double-single-lock-toffice-list/double-single-lock-toffice-list.component';
import { DoubleSingleLockStofficeComponent } from './double-single-lock-stoffice/double-single-lock-stoffice.component';
import { DoubleSingleLockStofficeListComponent } from './double-single-lock-stoffice/double-single-lock-stoffice-list/double-single-lock-stoffice-list.component';
import { DoubleSingleLockStofficeViewComponent } from './double-single-lock-stoffice/double-single-lock-stoffice-view/double-single-lock-stoffice-view.component';
import { SubmitConfirmCommonDialigComponent } from './submit-confirm-common-dialig/submit-confirm-common-dialig.component';
import { StampHelpMasterComponent } from './stamp-help-master/stamp-help-master.component';
import { StampHelpMasterListComponent } from './stamp-help-master/stamp-help-master-list/stamp-help-master-list.component';
import { StampHelpMasterViewComponent } from './stamp-help-master/stamp-help-master-view/stamp-help-master-view.component';

import { ClosingUtilityToComponent } from './closing-utility-to/closing-utility-to.component';
import { ClosingUtilityToListComponent } from './closing-utility-to/closing-utility-to-list/closing-utility-to-list.component';
import { ClosingUtilityStoComponent } from './closing-utility-sto/closing-utility-sto.component';
import { ClosingUtilityStoListComponent } from './closing-utility-sto/closing-utility-sto-list/closing-utility-sto-list.component';
import { PhysicalStockVerificationDATComponent } from './physical-stock-verification-dat/physical-stock-verification-dat.component';
import { PhysicalStockVerificationToComponent } from './physical-stock-verification-to/physical-stock-verification-to.component';
import { PhysicalStockVerificationToListComponent } from './physical-stock-verification-to/physical-stock-verification-to-list/physical-stock-verification-to-list.component';
import { PhysicalStockVerificationToViewComponent } from './physical-stock-verification-to/physical-stock-verification-to-view/physical-stock-verification-to-view.component';
import { PhysicalStockVerificationDatListComponent } from './physical-stock-verification-dat/physical-stock-verification-dat-list/physical-stock-verification-dat-list.component';
import { PhysicalStockVerificationDatViewComponent } from './physical-stock-verification-dat/physical-stock-verification-dat-view/physical-stock-verification-dat-view.component';
import { OnlineRequestForDepositOfValuablesComponent, RequestForDepositWorkflowComponent } from './online-request-for-deposit-of-valuables/online-request-for-deposit-of-valuables.component';
import { OnlineRequestForDepositOfValuablesListComponent } from './online-request-for-deposit-of-valuables/online-request-for-deposit-of-valuables-list/online-request-for-deposit-of-valuables-list.component';
import { OnlineRequestForDepositOfValuablesViewComponent } from './online-request-for-deposit-of-valuables/online-request-for-deposit-of-valuables-view/online-request-for-deposit-of-valuables-view.component';
import { RevertClosingUtilityToComponent } from './revert-closing-utility-to/revert-closing-utility-to.component';
import { RevertClosingUtilityToListComponent } from './revert-closing-utility-to/revert-closing-utility-to-list/revert-closing-utility-to-list.component';
import { RevertClosingUtilityStoComponent } from './revert-closing-utility-sto/revert-closing-utility-sto.component';
import { RevertClosingUtilityStoListComponent } from './revert-closing-utility-sto/revert-closing-utility-sto-list/revert-closing-utility-sto-list.component';
import { StampSeriesMasterToComponent } from './stamp-series-master-to/stamp-series-master-to.component';
import { StampSeriesMasterStoComponent } from './stamp-series-master-sto/stamp-series-master-sto.component';
import { StampSeriesMasterStoListComponent } from './stamp-series-master-sto/stamp-series-master-sto-list/stamp-series-master-sto-list.component';
import { StampSeriesMasterToListComponent } from './stamp-series-master-to/stamp-series-master-to-list/stamp-series-master-to-list.component';
import { StampSeriesMasterStoViewComponent } from './stamp-series-master-sto/stamp-series-master-sto-view/stamp-series-master-sto-view.component';
import { StampSeriesMasterToViewComponent } from './stamp-series-master-to/stamp-series-master-to-view/stamp-series-master-to-view.component';
import { ValuablesMasterToComponent } from './valuables-master-to/valuables-master-to.component';
import { ValuablesMasterToListComponent } from './valuables-master-to/valuables-master-to-list/valuables-master-to-list.component';
import { ValuablesMasterToViewComponent } from './valuables-master-to/valuables-master-to-view/valuables-master-to-view.component';
import { ValuablesMasterStoComponent } from './valuables-master-sto/valuables-master-sto.component';
import { ValuablesMasterStoListComponent } from './valuables-master-sto/valuables-master-sto-list/valuables-master-sto-list.component';
import { ValuablesMasterStoViewComponent } from './valuables-master-sto/valuables-master-sto-view/valuables-master-sto-view.component';
import { StampIssueBySsoToToComponent, StampIssueSSoToToWorkflowComponent } from './stamp-issue-by-sso-to-to/stamp-issue-by-sso-to-to.component';
import { StampIssueBySsoToToListComponent } from './stamp-issue-by-sso-to-to/stamp-issue-by-sso-to-to-list/stamp-issue-by-sso-to-to-list.component';
import { StampIssueBySsoToToViewComponent } from './stamp-issue-by-sso-to-to/stamp-issue-by-sso-to-to-view/stamp-issue-by-sso-to-to-view.component';
import { OnlineRequestForWithdrawalOfValuablesComponent, RequestForWithdrawalWorkflowComponent } from './online-request-for-withdrawal-of-valuables/online-request-for-withdrawal-of-valuables.component';
import { OnlineRequestForWithdrawalOfValuablesListComponent } from './online-request-for-withdrawal-of-valuables/online-request-for-withdrawal-of-valuables-list/online-request-for-withdrawal-of-valuables-list.component';
import { OnlineRequestForWithdrawalOfValuablesViewComponent } from './online-request-for-withdrawal-of-valuables/online-request-for-withdrawal-of-valuables-view/online-request-for-withdrawal-of-valuables-view.component';
import { VendorDiscountMasterComponent } from './vendor-discount-master/vendor-discount-master.component';
import { VendorDiscountMasterListComponent } from './vendor-discount-master/vendor-discount-master-list/vendor-discount-master-list.component';
import { VendorDiscountMasterViewComponent } from './vendor-discount-master/vendor-discount-master-view/vendor-discount-master-view.component';
import { VendorDiscountMasterStoComponent } from './vendor-discount-master/vendor-discount-master-sto/vendor-discount-master-sto.component';
import { VendorDiscountMasterStoListComponent } from './vendor-discount-master/vendor-discount-master-sto-list/vendor-discount-master-sto-list.component';
import { VendorDiscountMasterStoViewComponent } from './vendor-discount-master/vendor-discount-master-sto-view/vendor-discount-master-sto-view.component';
import { SurpriseVerificationDatComponent } from './surprise-verification-dat/surprise-verification-dat.component';
import { SurpriseVerificationDatListComponent } from './surprise-verification-dat/surprise-verification-dat-list/surprise-verification-dat-list.component';
import { SurpriseVerificationDatViewComponent } from './surprise-verification-dat/surprise-verification-dat-view/surprise-verification-dat-view.component';
import { SurpriseVerificationToComponent } from './surprise-verification-to/surprise-verification-to.component';
import { SurpriseVerificationToListComponent } from './surprise-verification-to/surprise-verification-to-list/surprise-verification-to-list.component';
import { SurpriseVerificationToViewComponent } from './surprise-verification-to/surprise-verification-to-view/surprise-verification-to-view.component';

import { DeleteConfirmCommonDialogComponent } from './delete-confirm-common-dialog/delete-confirm-common-dialog.component';
import { IndentConsolidationComponent } from './indent-consolidation/indent-consolidation.component';
import { IndentConsolidationListComponent } from './indent-consolidation/indent-consolidation-list/indent-consolidation-list.component';
import { IndentConsolidationViewComponent } from './indent-consolidation/indent-consolidation-view/indent-consolidation-view.component';
import { PreparationOfChallanToComponent } from './preparation-of-challan-to/preparation-of-challan-to.component';
import { PreparationOfChallanToListComponent } from './preparation-of-challan-to/preparation-of-challan-to-list/preparation-of-challan-to-list.component';
import { PreparationOfChallanToViewComponent } from './preparation-of-challan-to/preparation-of-challan-to-view/preparation-of-challan-to-view.component';
import { PreparationOfChallanStoComponent } from './preparation-of-challan-sto/preparation-of-challan-sto.component';
import { PreparationOfChallanStoListComponent } from './preparation-of-challan-sto/preparation-of-challan-sto-list/preparation-of-challan-sto-list.component';
import { PreparationOfChallanStoViewComponent } from './preparation-of-challan-sto/preparation-of-challan-sto-view/preparation-of-challan-sto-view.component';
import { AuthorizationOfChallanToComponent } from './authorization-of-challan-to/authorization-of-challan-to.component';
import { AuthorizationOfChallanToListComponent } from './authorization-of-challan-to/authorization-of-challan-to-list/authorization-of-challan-to-list.component';
import { AuthorizationOfChallanToViewComponent } from './authorization-of-challan-to/authorization-of-challan-to-view/authorization-of-challan-to-view.component';
import { AuthorizationOfChallanStoComponent } from './authorization-of-challan-sto/authorization-of-challan-sto.component';
import { AuthorizationOfChallanStoListComponent } from './authorization-of-challan-sto/authorization-of-challan-sto-list/authorization-of-challan-sto-list.component';
import { AuthorizationOfChallanStoViewComponent } from './authorization-of-challan-sto/authorization-of-challan-sto-view/authorization-of-challan-sto-view.component';
import { AuthorizeConfirmCommonDialogComponent } from './authorize-confirm-common-dialog/authorize-confirm-common-dialog.component';
import { InfoCommonDialogComponent } from './info-common-dialog/info-common-dialog.component';
import { StampIssueToComponent } from './stamp-issue-to/stamp-issue-to.component';
import { StampIssueToListComponent } from './stamp-issue-to/stamp-issue-to-list/stamp-issue-to-list.component';
import { StampIssueToViewComponent } from './stamp-issue-to/stamp-issue-to-view/stamp-issue-to-view.component';
import { StampIssueStoComponent } from './stamp-issue-sto/stamp-issue-sto.component';
import { StampIssueStoListComponent } from './stamp-issue-sto/stamp-issue-sto-list/stamp-issue-sto-list.component';
import { StampIssueStoViewComponent } from './stamp-issue-sto/stamp-issue-sto-view/stamp-issue-sto-view.component';
import { StampDetailsCommonPopupComponent } from './stamp-details-common-popup/stamp-details-common-popup.component';
import { RevertStampIssueToComponent } from './revert-stamp-issue-to/revert-stamp-issue-to.component';
import { RevertStampIssueToListComponent } from './revert-stamp-issue-to/revert-stamp-issue-to-list/revert-stamp-issue-to-list.component';
import { RevertStampIssueToViewComponent } from './revert-stamp-issue-to/revert-stamp-issue-to-view/revert-stamp-issue-to-view.component';
import { RevertStampIssueStoComponent } from './revert-stamp-issue-sto/revert-stamp-issue-sto.component';
import { RevertStampIssueStoListComponent } from './revert-stamp-issue-sto/revert-stamp-issue-sto-list/revert-stamp-issue-sto-list.component';
import { RevertStampIssueStoViewComponent } from './revert-stamp-issue-sto/revert-stamp-issue-sto-view/revert-stamp-issue-sto-view.component';
import { ChallanCancellationToComponent } from './challan-cancellation-to/challan-cancellation-to.component';
import { ChallanCancellationToViewComponent } from './challan-cancellation-to/challan-cancellation-to-view/challan-cancellation-to-view.component';
import { ChallanCancellationToListComponent } from './challan-cancellation-to/challan-cancellation-to-list/challan-cancellation-to-list.component';
import { ChallanCancellationStoComponent } from './challan-cancellation-sto/challan-cancellation-sto.component';
import { ChallanCancellationStoListComponent } from './challan-cancellation-sto/challan-cancellation-sto-list/challan-cancellation-sto-list.component';
import { ChallanCancellationStoViewComponent } from './challan-cancellation-sto/challan-cancellation-sto-view/challan-cancellation-sto-view.component';
import { CancelChallanAuthorizationToComponent } from './cancel-challan-authorization-to/cancel-challan-authorization-to.component';
import { CancelChallanAuthorizationToListComponent } from './cancel-challan-authorization-to/cancel-challan-authorization-to-list/cancel-challan-authorization-to-list.component';
import { CancelChallanAuthorizationToViewComponent } from './cancel-challan-authorization-to/cancel-challan-authorization-to-view/cancel-challan-authorization-to-view.component';
import { CancelChallanAuthorizationStoComponent } from './cancel-challan-authorization-sto/cancel-challan-authorization-sto.component';
import { CancelChallanAuthorizationStoViewComponent } from './cancel-challan-authorization-sto/cancel-challan-authorization-sto-view/cancel-challan-authorization-sto-view.component';
import { CancelChallanAuthorizationStoListComponent } from './cancel-challan-authorization-sto/cancel-challan-authorization-sto-list/cancel-challan-authorization-sto-list.component';
import { MonthlyDiscountMemoComponent } from './monthly-discount-memo/monthly-discount-memo.component';
import { MonthlyDiscountMemoListComponent } from './monthly-discount-memo/monthly-discount-memo-list/monthly-discount-memo-list.component';
import { MonthlyDiscountMemoViewComponent } from './monthly-discount-memo/monthly-discount-memo-view/monthly-discount-memo-view.component';
import { IndentConsolidatedViewComponent } from './indent-consolidation/indent-consolidated-view/indent-consolidated-view.component';
import { StampReceiptToComponent } from './stamp-receipt-to/stamp-receipt-to.component';
import { StampReceiptToListComponent } from './stamp-receipt-to/stamp-receipt-to-list/stamp-receipt-to-list.component';
import { StampReceiptToViewComponent } from './stamp-receipt-to/stamp-receipt-to-view/stamp-receipt-to-view.component';
import { StampReceiptStoComponent } from './stamp-receipt-sto/stamp-receipt-sto.component';
import { StampReceiptStoListComponent } from './stamp-receipt-sto/stamp-receipt-sto-list/stamp-receipt-sto-list.component';
import { StampReceiptStoViewComponent } from './stamp-receipt-sto/stamp-receipt-sto-view/stamp-receipt-sto-view.component';
import { StampReturnSsoByToComponent } from './stamp-return-sso-by-to/stamp-return-sso-by-to.component';
import { StampReturnSsoByToListComponent } from './stamp-return-sso-by-to/stamp-return-sso-by-to-list/stamp-return-sso-by-to-list.component';
import { StampReturnSsoByToViewComponent } from './stamp-return-sso-by-to/stamp-return-sso-by-to-view/stamp-return-sso-by-to-view.component';
import { StampReturnToByStoComponent } from './stamp-return-to-by-sto/stamp-return-to-by-sto.component';
import { StampReturnToByStoListComponent } from './stamp-return-to-by-sto/stamp-return-to-by-sto-list/stamp-return-to-by-sto-list.component';
import { StampReturnToByStoViewComponent } from './stamp-return-to-by-sto/stamp-return-to-by-sto-view/stamp-return-to-by-sto-view.component';
import { IndentConsolidationViewonlyComponent } from './indent-consolidation/indent-consolidation-viewonly/indent-consolidation-viewonly.component';
import { StampDenominationMasterTcComponent } from './stamp-denomination-master-tc/stamp-denomination-master-tc.component';
import { StampDenominationMasterTcListComponent } from './stamp-denomination-master-tc/stamp-denomination-master-tc-list/stamp-denomination-master-tc-list.component';
import { IndentNumberViewComponent } from './indent-consolidation/indent-number-view/indent-number-view.component';
import { HistoryDetailsCommonDialogComponent } from './history-details-common-dialog/history-details-common-dialog.component';
import { StampIndentPreparationWorkflowComponent } from './treasury-indent-preparation/stamp-indent-preparation-workflow/stamp-indent-preparation-workflow.component';
import { IndentNumberListComponent } from './indent-consolidation/indent-number-list/indent-number-list.component';
import { StampIndentPreparationPrintComponent } from './treasury-indent-preparation/stamp-indent-preparation-print/stamp-indent-preparation-print.component';
import { HistoryButtonPopupComponent } from './history-button-popup/history-button-popup.component';
import { HistoryIndentConsolidationPopupComponent } from './indent-consolidation/history-indent-consolidation-popup/history-indent-consolidation-popup.component';
import { SubmitPromptDialogComponent } from './submit-prompt-dialog/submit-prompt-dialog.component';
import { IndentConsolidationWorkflowComponent } from './indent-consolidation/indent-consolidation-workflow/indent-consolidation-workflow.component';
import { StampIssueSsoToToPopupComponent } from './stamp-issue-by-sso-to-to/stamp-issue-sso-to-to-popup/stamp-issue-sso-to-to-popup.component';
import { HistoryPrepChallanPopupComponent } from './preparation-of-challan-to/history-prep-challan-popup/history-prep-challan-popup.component';
import { HistoryPrepChallanTotsheetPopupComponent } from './preparation-of-challan-to/history-prep-challan-totsheet-popup/history-prep-challan-totsheet-popup.component';
import { StampReceiptToPopupComponent } from './stamp-receipt-to/stamp-receipt-to-popup/stamp-receipt-to-popup.component';
import { HistoryDoubleSinglePopupComponent } from './double-single-lock-toffice/history-double-single-popup/history-double-single-popup.component';
import { HistorySingleDoublePopupComponent } from './single-double-lock-toffice/history-single-double-popup/history-single-double-popup.component';
import { StampIssueToPopupComponent } from './stamp-issue-to/stamp-issue-to-popup/stamp-issue-to-popup.component';
import { RevertStampIssueToPopupComponent } from './revert-stamp-issue-to/revert-stamp-issue-to-popup/revert-stamp-issue-to-popup.component';
import { SubmitConfirmCommonChallanDialigComponent } from './submit-confirm-common-dialigchallan/submit-confirm-common-dialigchallan.component';



@NgModule({
  imports: [
    CommonModule,
    StampProcessingRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    NgxMatSelectSearchModule,
    CommonProtoModule,

  ],
  declarations: [TreasuryIndentPreparationComponent, TreasuryIndentPreparationListComponent, CloseConfirmDialogComponent, TreasuryIndentPreparationViewComponent,
    TreasuryIndentPreparationViewComponent,
    SubTreasuryIndentPreparationComponent,
    SubTreasuryIndentPreparationListComponent,
    SubTreasuryIndentPreparationViewComponent,
    OpeningBalanceAndPapersOfStampComponent,
    OpeningBalanceAndPapersOfStampListComponent,
    OpeningBalanceAndPapersOfStampViewComponent,
    CloseConfirmCommonDialogComponent,
    CloseConfirmCommonDialogComponent,
    PrintingPressMasterComponent,
    PrintingPressMasterListComponent,
    PrintingPressMasterViewComponent,
    SaveConfirmCommonDialogComponent,
    StampDenominationMasterComponent,
    StampDenominationMasterListComponent,
    StampDenominationMasterViewComponent,
    CategoryMasterComponent,
    CategoryMasterListComponent,
    CategoryMasterViewComponent,
    VendorMasterComponent,
    VendorMasterListComponent,
    VendorMasterViewComponent,
    SingleDoubleLockTofficeComponent,
    SingleDoubleLockStofficeComponent,
    SingleDoubleLockTofficeListComponent,
    SingleDoubleLockTofficeViewComponent,
    SingleDoubleLockStofficeViewComponent,
    SingleDoubleLockStofficeListComponent,
    DoubleSingleLockTofficeComponent,
    DoubleSingleLockTofficeViewComponent,
    DoubleSingleLockTofficeListComponent,
    DoubleSingleLockStofficeComponent,
    DoubleSingleLockStofficeListComponent,
    DoubleSingleLockStofficeViewComponent,
    SubmitConfirmCommonDialigComponent,
    StampHelpMasterComponent,
    StampHelpMasterListComponent,
    StampHelpMasterViewComponent,

    ClosingUtilityToComponent,

    ClosingUtilityToListComponent,

    ClosingUtilityStoComponent,

    ClosingUtilityStoListComponent,

    PhysicalStockVerificationDATComponent,
    PhysicalStockVerificationDatListComponent,
    PhysicalStockVerificationDatViewComponent,

    PhysicalStockVerificationToComponent,
    PhysicalStockVerificationToListComponent,
    PhysicalStockVerificationToViewComponent,

    OnlineRequestForDepositOfValuablesComponent,

    OnlineRequestForDepositOfValuablesListComponent,

    OnlineRequestForDepositOfValuablesViewComponent,

    RevertClosingUtilityToComponent,

    RevertClosingUtilityToListComponent,

    RevertClosingUtilityStoComponent,

    RevertClosingUtilityStoListComponent,

    StampSeriesMasterToComponent,

    StampSeriesMasterStoComponent,

    StampSeriesMasterStoListComponent,

    StampSeriesMasterToListComponent,

    StampSeriesMasterStoViewComponent,

    StampSeriesMasterToViewComponent,
    ValuablesMasterToComponent,

    ValuablesMasterToListComponent,

    ValuablesMasterToViewComponent,

    ValuablesMasterStoComponent,

    ValuablesMasterStoListComponent,

    ValuablesMasterStoViewComponent,

    StampIssueBySsoToToComponent,

    StampIssueBySsoToToListComponent,

    StampIssueBySsoToToViewComponent,
    OnlineRequestForWithdrawalOfValuablesComponent,

    OnlineRequestForWithdrawalOfValuablesListComponent,

    OnlineRequestForWithdrawalOfValuablesViewComponent,

    VendorDiscountMasterComponent,

    VendorDiscountMasterListComponent,

    VendorDiscountMasterViewComponent,

    VendorDiscountMasterStoComponent,

    VendorDiscountMasterStoListComponent,

    VendorDiscountMasterStoViewComponent,

    SurpriseVerificationDatComponent,

    SurpriseVerificationDatListComponent,

    SurpriseVerificationDatViewComponent,

    SurpriseVerificationToComponent,

    SurpriseVerificationToListComponent,

    SurpriseVerificationToViewComponent,

    DeleteConfirmCommonDialogComponent,

    PreparationOfChallanToComponent,

    DeleteConfirmCommonDialogComponent,



    IndentConsolidationComponent,



    IndentConsolidationListComponent,



    IndentConsolidationViewComponent,
    PreparationOfChallanToListComponent,

    PreparationOfChallanToViewComponent,

    PreparationOfChallanStoComponent,

    PreparationOfChallanStoListComponent,

    PreparationOfChallanStoViewComponent,

    AuthorizationOfChallanToComponent,

    AuthorizationOfChallanToListComponent,

    AuthorizationOfChallanToViewComponent,

    AuthorizationOfChallanStoComponent,

    AuthorizationOfChallanStoListComponent,

    AuthorizationOfChallanStoViewComponent,

    AuthorizeConfirmCommonDialogComponent,

    InfoCommonDialogComponent,

    StampIssueToComponent,

    StampIssueToListComponent,

    StampIssueToViewComponent,

    StampIssueStoComponent,

    StampIssueStoListComponent,

    StampIssueStoViewComponent,

    StampDetailsCommonPopupComponent,

    RevertStampIssueToComponent,

    RevertStampIssueToListComponent,

    RevertStampIssueToViewComponent,

    RevertStampIssueStoComponent,

    RevertStampIssueStoListComponent,

    RevertStampIssueStoViewComponent,

    ChallanCancellationToComponent,

    ChallanCancellationToViewComponent,

    ChallanCancellationToListComponent,

    ChallanCancellationStoComponent,

    ChallanCancellationStoListComponent,

    ChallanCancellationStoViewComponent,

    CancelChallanAuthorizationToComponent,

    CancelChallanAuthorizationToListComponent,

    CancelChallanAuthorizationToViewComponent,

    CancelChallanAuthorizationStoComponent,

    CancelChallanAuthorizationStoViewComponent,

    CancelChallanAuthorizationStoListComponent,

    MonthlyDiscountMemoComponent,

    MonthlyDiscountMemoListComponent,

    MonthlyDiscountMemoViewComponent,

    IndentConsolidatedViewComponent,
    StampReceiptToComponent,

    StampReceiptToListComponent,

    StampReceiptToViewComponent,

    StampReceiptStoComponent,

    StampReceiptStoListComponent,

    StampReceiptStoViewComponent,

    StampReturnSsoByToComponent,

    StampReturnSsoByToListComponent,

    StampReturnSsoByToViewComponent,

    StampReturnToByStoComponent,

    StampReturnToByStoListComponent,

    StampReturnToByStoViewComponent,

    IndentConsolidationViewonlyComponent,

    StampDenominationMasterTcComponent,

    StampDenominationMasterTcListComponent,

    IndentNumberViewComponent,

    HistoryDetailsCommonDialogComponent,

    StampIndentPreparationWorkflowComponent,

    IndentNumberListComponent,

    StampIndentPreparationPrintComponent,

    HistoryButtonPopupComponent,

    HistoryIndentConsolidationPopupComponent,

    SubmitPromptDialogComponent,

    IndentConsolidationWorkflowComponent,
    RequestForDepositWorkflowComponent,
    RequestForWithdrawalWorkflowComponent,
    StampIssueSSoToToWorkflowComponent,
    StampIssueSsoToToPopupComponent,
    HistoryPrepChallanPopupComponent,
    HistoryPrepChallanTotsheetPopupComponent,
    StampReceiptToPopupComponent,
    HistoryDoubleSinglePopupComponent,
    HistorySingleDoublePopupComponent,
    StampIssueToPopupComponent,
    RevertStampIssueToPopupComponent,
    SubmitConfirmCommonChallanDialigComponent
  ],

  entryComponents: [
    CloseConfirmDialogComponent,
    CloseConfirmCommonDialogComponent,
    SaveConfirmCommonDialogComponent,
    SubmitConfirmCommonDialigComponent,
    DeleteConfirmCommonDialogComponent,
    AuthorizeConfirmCommonDialogComponent,
    InfoCommonDialogComponent,
    StampDetailsCommonPopupComponent,
    HistoryDetailsCommonDialogComponent,
    StampIndentPreparationWorkflowComponent,
    HistoryButtonPopupComponent,
    HistoryIndentConsolidationPopupComponent,
    SubmitPromptDialogComponent,
    IndentConsolidationWorkflowComponent,
    RequestForDepositWorkflowComponent,
    RequestForWithdrawalWorkflowComponent,
    StampIssueSSoToToWorkflowComponent,
    StampIssueSsoToToPopupComponent,
    HistoryPrepChallanPopupComponent,
    HistoryPrepChallanTotsheetPopupComponent,
    StampReceiptToPopupComponent,
    HistoryDoubleSinglePopupComponent,
    HistorySingleDoublePopupComponent,
    StampIssueToPopupComponent,
    RevertStampIssueToPopupComponent,
    SubmitConfirmCommonChallanDialigComponent
  ]
})
export class StampProcessingModule { }
