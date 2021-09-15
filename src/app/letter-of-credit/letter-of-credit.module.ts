import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LetterOfCreditRoutingModule } from './letter-of-credit-routing.module';
import { MaterialModule } from '../material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { LcVerificationComponent } from './lc-distribution/lc-verification/lc-verification.component';
import { CommonProtoModule } from '../common/common.module';
// tslint:disable-next-line: max-line-length
import { LcAdviceReceivedComponent, LcNumberDialogComponent, MapEPaymentComponent, adviceReceiedDialogCheckList, AdviceReceivedEmployeeDialog, PrintChequeDialog, GenerateChequeNoDialog } from './lc-advice-received/lc-advice-received.component';
// tslint:disable-next-line: max-line-length
import { LcChequebookActivateInactivateComponent } from './cheque-book-activate-inactivate/lc-chequebook-activate-inactivate/lc-chequebook-activate-inactivate.component';
// tslint:disable-next-line: max-line-length
import { LcChequebookActivateInactivateToComponent } from './cheque-book-activate-inactivate/lc-chequebook-activate-inactivate-to/lc-chequebook-activate-inactivate-to.component';
import { ChequeCancelationDivisionComponent } from './cheque-cancelation-division/cheque-cancelation-division.component';
import { ChequeCancelationToComponent } from './cheque-cancelation-to/cheque-cancelation-to.component';
import { ChequeToChequeEffectDivisionComponent } from './cheque-to-cheque-effect-division/cheque-to-cheque-effect-division.component';
import { LcDistributionViewComponent } from './lc-distribution/lc-distribution-view/lc-distribution-view.component';
import { LcDistributionEditComponent } from './lc-distribution/lc-distribution-edit/lc-distribution-edit.component';
import { LcFormAComponent } from './lc-distribution/lc-form-a/lc-form-a.component';
import { LcFormBComponent } from './lc-distribution/lc-form-b/lc-form-b.component';
import { InwardOnlineAdviceComponent } from './inward-online-advice/inward-online-advice.component';
import { SavedAdviceComponent } from './saved-advice/saved-advice.component';
import { AdviceCardexVerificationComponent } from './advice-cardex-verification/advice-cardex-verification.component';
import { LcAdviceVerificationComponent } from './lc-advice-verification/lc-advice-verification.component';
import { LcStatementComponent } from './lc-statement/lc-statement.component';
import { LcAdviceAuthorizationComponent } from './lc-advice-authorization/lc-advice-authorization.component';
import { LcAdviceReceivedViewComponent } from './lc-advice-received-view/lc-advice-received-view.component';
// tslint:disable-next-line: max-line-length
import { LcAdviceInformationAuthorizationComponent } from './lc-advice-information-authorization/lc-advice-information-authorization.component';
import { LcOpeningRequestCreateComponent } from './lc-opening-request/lc-opening-request-create/lc-opening-request-create.component';
import { LcOpeningRequestSavedComponent } from './lc-opening-request/lc-opening-request-saved/lc-opening-request-saved.component';
// tslint:disable-next-line: max-line-length
import { LcOpeningRequestCreateViewComponent } from './lc-opening-request/lc-opening-request-create-view/lc-opening-request-create-view.component';
import { LcOpeningRequestAgComponent } from './lc-opening-request/lc-opening-request-ag/lc-opening-request-ag.component';
import { LcOpeningRequestViewComponent } from './lc-opening-request/lc-opening-request-view/lc-opening-request-view.component';
import { LcChequebookListingComponent } from './cheque-book-activate-inactivate/lc-chequebook-listing/lc-chequebook-listing.component';
// tslint:disable-next-line: max-line-length
import { LcChequebookListingViewComponent } from './cheque-book-activate-inactivate/lc-chequebook-listing-view/lc-chequebook-listing-view.component';
// tslint:disable-next-line: max-line-length
import { LcChequebookListingEditComponent } from './cheque-book-activate-inactivate/lc-chequebook-listing-edit/lc-chequebook-listing-edit.component';
// tslint:disable-next-line: max-line-length
import { LcChequebookListingToComponent } from './cheque-book-activate-inactivate/lc-chequebook-listing-to/lc-chequebook-listing-to.component';
// tslint:disable-next-line: max-line-length
import { LcChequebookListingToViewComponent } from './cheque-book-activate-inactivate/lc-chequebook-listing-to-view/lc-chequebook-listing-to-view.component';
// tslint:disable-next-line: max-line-length
import { LcChequebookListingToEditComponent } from './cheque-book-activate-inactivate/lc-chequebook-listing-to-edit/lc-chequebook-listing-to-edit.component';
// tslint:disable-next-line: max-line-length
import { LcOpeningRequestCreateEditComponent } from './lc-opening-request/lc-opening-request-create-edit/lc-opening-request-create-edit.component';
import { LcOpeningRequestEditComponent } from './lc-opening-request/lc-opening-request-edit/lc-opening-request-edit.component';
import { LcOpeningRequestToComponent } from './lc-opening-request/lc-opening-request-to/lc-opening-request-to.component';
import { LcOpeningRequestToViewComponent } from './lc-opening-request/lc-opening-request-to-view/lc-opening-request-to-view.component';
import { LcOpeningRequestToEditComponent } from './lc-opening-request/lc-opening-request-to-edit/lc-opening-request-to-edit.component';
// tslint:disable-next-line: max-line-length
import { LcAccountClosingRequestCreateComponent } from './lc-closing-request/lc-account-closing-request-create/lc-account-closing-request-create.component';
// tslint:disable-next-line: max-line-length
import { LcAccountClosingRequestSavedComponent } from './lc-closing-request/lc-account-closing-request-saved/lc-account-closing-request-saved.component';
// tslint:disable-next-line: max-line-length
import { LcAccountClosingRequestSavedViewComponent } from './lc-closing-request/lc-account-closing-request-saved-view/lc-account-closing-request-saved-view.component';
// tslint:disable-next-line: max-line-length
import { LcAccountClosingRequestSavedEditComponent } from './lc-closing-request/lc-account-closing-request-saved-edit/lc-account-closing-request-saved-edit.component';
// tslint:disable-next-line: max-line-length
import { LcAccountClosingRequestAgComponent } from './lc-closing-request/lc-account-closing-request-ag/lc-account-closing-request-ag.component';
// tslint:disable-next-line: max-line-length
import { LcAccountClosingRequestAgViewComponent } from './lc-closing-request/lc-account-closing-request-ag-view/lc-account-closing-request-ag-view.component';
// tslint:disable-next-line: max-line-length
import { LcAccountClosingRequestAgEditComponent } from './lc-closing-request/lc-account-closing-request-ag-edit/lc-account-closing-request-ag-edit.component';
// tslint:disable-next-line: max-line-length
import { LcAccountClosingRequestToComponent } from './lc-closing-request/lc-account-closing-request-to/lc-account-closing-request-to.component';
// tslint:disable-next-line: max-line-length
import { LcAccountClosingRequestToViewComponent } from './lc-closing-request/lc-account-closing-request-to-view/lc-account-closing-request-to-view.component';
// tslint:disable-next-line: max-line-length
import { LcAccountClosingRequestToEditComponent } from './lc-closing-request/lc-account-closing-request-to-edit/lc-account-closing-request-to-edit.component';
import { LcDistributionCircleComponent } from './lc-distribution/lc-distribution-circle/lc-distribution-circle.component';
import { LcDistributionCircleViewComponent } from './lc-distribution/lc-distribution-circle-view/lc-distribution-circle-view.component';
import { LcDistributionDivisionComponent } from './lc-distribution/lc-distribution-division/lc-distribution-division.component';
// tslint:disable-next-line: max-line-length
import { LcDistributionDivisionViewComponent } from './lc-distribution/lc-distribution-division-view/lc-distribution-division-view.component';
import { LcVerificationToComponent } from './lc-distribution/lc-verification-to/lc-verification-to.component';
import { LcVerificationToViewComponent } from './lc-distribution/lc-verification-to-view/lc-verification-to-view.component';
import { LcAuthorizationToComponent } from './lc-distribution/lc-authorization-to/lc-authorization-to.component';
// tslint:disable-next-line: max-line-length
import { LcAuthorizationToViewComponent, LcSanctionedAmountComponent } from './lc-distribution/lc-authorization-to-view/lc-authorization-to-view.component';
import { WorkflowDetailsLetterOfCreditComponent } from './workflow-details-letter-of-credit/workflow-details-letter-of-credit.component';
import { LcVerificationToEditComponent } from './lc-distribution/lc-verification-to-edit/lc-verification-to-edit.component';
import { LcAuthorizationToEditComponent } from './lc-distribution/lc-authorization-to-edit/lc-authorization-to-edit.component';
import { LcAdvicePreparationViewComponent } from './lc-advice-preparation-view/lc-advice-preparation-view.component';
import { LcAdvicePreparationEditComponent, verifyComponent } from './lc-advice-preparation-edit/lc-advice-preparation-edit.component';
// tslint:disable-next-line: max-line-length
import { LcAdviceAuthorizationEditComponent, autohrizationComponent } from './lc-advice-authorization-edit/lc-advice-authorization-edit.component';
// tslint:disable-next-line: max-line-length
import { ChequeCancelationDivisionListingComponent } from './cheque-cancelation-division-listing/cheque-cancelation-division-listing.component';
import { ChequeCancelationToListingComponent } from './cheque-cancelation-to-listing/cheque-cancelation-to-listing.component';
import { ChequeCancelationDivisionViewComponent } from './cheque-cancelation-division-view/cheque-cancelation-division-view.component';
import { ChequeCancelationDivisionEditComponent } from './cheque-cancelation-division-edit/cheque-cancelation-division-edit.component';
import { ChequeCancelationToViewComponent } from './cheque-cancelation-to-view/cheque-cancelation-to-view.component';
import { ChequeCancelationToEditComponent } from './cheque-cancelation-to-edit/cheque-cancelation-to-edit.component';
import { CreateLcAccountDivisionComponent } from './lc-opening-request/create-lc-account-division/create-lc-account-division.component';
// tslint:disable-next-line: max-line-length
import { CreateLcAccountListingDivisionComponent } from './lc-opening-request/create-lc-account-listing-division/create-lc-account-listing-division.component';
// tslint:disable-next-line: max-line-length
import { CreateLcAccountListingAgComponent } from './lc-opening-request/create-lc-account-listing-ag/create-lc-account-listing-ag.component';
import { CreateLcAccountAgViewComponent } from './lc-opening-request/create-lc-account-ag-view/create-lc-account-ag-view.component';
import { CreateLcAccountAgEditComponent } from './lc-opening-request/create-lc-account-ag-edit/create-lc-account-ag-edit.component';
// tslint:disable-next-line: max-line-length
import { LcGenerateAuthorizationLetterComponent } from './lc-opening-request/lc-generate-authorization-letter/lc-generate-authorization-letter.component';
// tslint:disable-next-line: max-line-length
import { CreateLcAccountDivisionEditComponent } from './lc-opening-request/create-lc-account-division-edit/create-lc-account-division-edit.component';
// tslint:disable-next-line: max-line-length
import { CreateLcAccountDivisionViewComponent } from './lc-opening-request/create-lc-account-division-view/create-lc-account-division-view.component';
import { LcSavedAdviceToComponent } from './lc-saved-advice-to/lc-saved-advice-to.component';
import { LcAttachmentEditComponent } from './lc-attachment-edit/lc-attachment-edit.component';
import { LcAttachmentViewComponent } from './lc-attachment-view/lc-attachment-view.component';
import { HistoryDetailsDialogComponent } from './history-details-dialog/history-details-dialog.component';
import { HistoryDialogComponent } from './history-dialog/history-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    LetterOfCreditRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMatSelectSearchModule,
    CommonProtoModule
  ],
  declarations: [
    LcVerificationComponent,
    LcAdviceReceivedComponent,
    LcNumberDialogComponent,
    MapEPaymentComponent,
    adviceReceiedDialogCheckList,
    LcChequebookActivateInactivateComponent,
    LcChequebookActivateInactivateToComponent,
    ChequeCancelationDivisionComponent,
    ChequeCancelationToComponent,
    ChequeToChequeEffectDivisionComponent,
    LcDistributionViewComponent,
    LcDistributionEditComponent,
    LcFormAComponent,
    LcFormBComponent,
    InwardOnlineAdviceComponent,
    SavedAdviceComponent,
    AdviceCardexVerificationComponent,
    LcAdviceVerificationComponent,
    // LcAdviceDetailsComponent,
    LcStatementComponent,
    LcAdviceAuthorizationComponent,
    LcAdviceReceivedViewComponent,
    LcAdviceInformationAuthorizationComponent,
    LcOpeningRequestCreateComponent,
    LcOpeningRequestSavedComponent,
    LcOpeningRequestCreateViewComponent,
    LcOpeningRequestAgComponent,
    LcOpeningRequestViewComponent,
    LcChequebookListingComponent,
    LcChequebookListingViewComponent,
    LcChequebookListingEditComponent,
    LcChequebookListingToComponent,
    LcChequebookListingToViewComponent,
    LcChequebookListingToEditComponent,
    LcOpeningRequestCreateEditComponent,
    LcOpeningRequestEditComponent,
    LcOpeningRequestToComponent,
    LcOpeningRequestToViewComponent,
    LcOpeningRequestToEditComponent,
    LcAccountClosingRequestCreateComponent,
    LcAccountClosingRequestSavedComponent,
    LcAccountClosingRequestSavedViewComponent,
    LcAccountClosingRequestSavedEditComponent,
    LcAccountClosingRequestAgComponent,
    LcAccountClosingRequestAgViewComponent,
    LcAccountClosingRequestAgEditComponent,
    LcAccountClosingRequestToComponent,
    LcAccountClosingRequestToViewComponent,
    LcAccountClosingRequestToEditComponent,
    LcDistributionCircleComponent,
    LcDistributionCircleViewComponent,
    LcDistributionDivisionComponent,
    LcDistributionDivisionViewComponent,
    LcVerificationToComponent,
    LcVerificationToViewComponent,
    LcAuthorizationToComponent,
    LcAuthorizationToViewComponent,
    LcSanctionedAmountComponent,
    WorkflowDetailsLetterOfCreditComponent,
    LcVerificationToEditComponent,
    LcAuthorizationToEditComponent,
    LcAdvicePreparationViewComponent,
    LcAdvicePreparationEditComponent,
    verifyComponent,
    LcAdviceAuthorizationEditComponent,
    autohrizationComponent,
    ChequeCancelationDivisionListingComponent,
    ChequeCancelationToListingComponent,
    ChequeCancelationDivisionViewComponent,
    ChequeCancelationDivisionEditComponent,
    ChequeCancelationToViewComponent,
    ChequeCancelationToEditComponent,
    CreateLcAccountDivisionComponent,
    CreateLcAccountListingDivisionComponent,
    CreateLcAccountListingAgComponent,
    CreateLcAccountAgViewComponent,
    CreateLcAccountAgEditComponent,
    LcGenerateAuthorizationLetterComponent,
    CreateLcAccountDivisionEditComponent,
    CreateLcAccountDivisionViewComponent,
    LcSavedAdviceToComponent,
    LcAttachmentEditComponent,
    LcAttachmentViewComponent,
    HistoryDetailsDialogComponent,
    AdviceReceivedEmployeeDialog,
    HistoryDialogComponent,
    PrintChequeDialog,
    GenerateChequeNoDialog,
  ],
  entryComponents: [
    LcNumberDialogComponent,
    MapEPaymentComponent,
    adviceReceiedDialogCheckList,
    // LcAdviceDetailsComponent,
    LcSanctionedAmountComponent,
    WorkflowDetailsLetterOfCreditComponent,
    verifyComponent,
    autohrizationComponent,
    HistoryDetailsDialogComponent,
    AdviceReceivedEmployeeDialog,
    HistoryDialogComponent,
    PrintChequeDialog,
    GenerateChequeNoDialog,
  ]
})
export class LetterOfCreditModule { }
