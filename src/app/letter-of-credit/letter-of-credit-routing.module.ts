import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LcVerificationComponent } from './lc-distribution/lc-verification/lc-verification.component';
import { LcAdviceReceivedComponent } from './lc-advice-received/lc-advice-received.component';
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
import { LcOpeningRequestAgComponent } from './lc-opening-request/lc-opening-request-ag/lc-opening-request-ag.component';
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
import { LcAuthorizationToViewComponent } from './lc-distribution/lc-authorization-to-view/lc-authorization-to-view.component';
import { LcVerificationToEditComponent } from './lc-distribution/lc-verification-to-edit/lc-verification-to-edit.component';
import { LcAuthorizationToEditComponent } from './lc-distribution/lc-authorization-to-edit/lc-authorization-to-edit.component';
import { LcAdvicePreparationViewComponent } from './lc-advice-preparation-view/lc-advice-preparation-view.component';
import { LcAdvicePreparationEditComponent } from './lc-advice-preparation-edit/lc-advice-preparation-edit.component';
import { LcAdviceAuthorizationEditComponent } from './lc-advice-authorization-edit/lc-advice-authorization-edit.component';
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

const routes: Routes = [
  {
    path: 'lc-distribution',
    component: LcVerificationComponent
  },
  {
    path: 'lc-advice-preparation',
    component: LcAdviceReceivedComponent
  },
  {
    path: 'lc-cheque-activate-inactivate-division',
    component: LcChequebookActivateInactivateComponent
  },
  {
    path: 'lc-cheque-activate-inactivate-to',
    component: LcChequebookActivateInactivateToComponent
  },
  {
    path: 'lc-cheque-cancelation-division',
    component: ChequeCancelationDivisionComponent
  },
  {
    path: 'lc-cheque-cancelation-to',
    component: ChequeCancelationToComponent
  },
  {
    path: 'lc-cheque-to-cheque-effect',
    component: ChequeToChequeEffectDivisionComponent
  },
  {
    path: 'lc-distribution-view',
    component: LcDistributionViewComponent
  },
  {
    path: 'lc-distribution-edit',
    component: LcDistributionEditComponent
  },
  {
    path: 'lc-form-a',
    component: LcFormAComponent
  },
  {
    path: 'lc-form-b',
    component: LcFormBComponent
  },
  {
    path: 'lc-inward-online-advice',
    component: InwardOnlineAdviceComponent
  },
  {
    path: 'lc-saved-advice',
    component: SavedAdviceComponent
  },
  {
    path: 'lc-advice-cardex-verification',
    component: AdviceCardexVerificationComponent
  },
  {
    path: 'lc-advice-verification',
    component: LcAdviceVerificationComponent
  },
  {
    path: 'lc-statement',
    component: LcStatementComponent
  },
  {
    path: 'lc-advice-authorization',
    component: LcAdviceAuthorizationComponent
  },
  {
    path: 'lc-advice-received-view',
    component: LcAdviceReceivedViewComponent
  },
  {
    path: 'lc-advice-information-for-authorization',
    component: LcAdviceInformationAuthorizationComponent
  },
  {
    path: 'lc-opening-request-create',
    component: LcOpeningRequestCreateComponent
  },
  {
    path: 'lc-opening-request-saved',
    component: LcOpeningRequestSavedComponent
  },
  // {
  //   path: 'create-lc-account-division-view',
  //   component: LcOpeningRequestCreateViewComponent
  // },
  {
    path: 'lc-opening-request-ag',
    component: LcOpeningRequestAgComponent
  },
  // {
  //   path: 'create-lc-account-ag-view',
  //   component: LcOpeningRequestViewComponent
  // },
  {
    path: 'lc-chequebook-listing',
    component: LcChequebookListingComponent
  },
  {
    path: 'lc-chequebook-listing-view',
    component: LcChequebookListingViewComponent
  },
  {
    path: 'lc-chequebook-listing-edit',
    component: LcChequebookListingEditComponent
  },
  {
    path: 'lc-chequebook-listing-to',
    component: LcChequebookListingToComponent
  },
  {
    path: 'lc-chequebook-listing-to-view',
    component: LcChequebookListingToViewComponent
  },
  {
    path: 'lc-chequebook-listing-to-edit',
    component: LcChequebookListingToEditComponent
  },
  // {
  //   path: 'create-lc-account-division-edit',
  //   component: LcOpeningRequestCreateEditComponent
  // },
  // {
  //   path: 'create-lc-account-ag-edit',
  //   component: LcOpeningRequestEditComponent
  // },
  {
    path: 'lc-opening-request-to',
    component: LcOpeningRequestToComponent
  },
  {
    path: 'lc-opening-request-to-view',
    component: LcOpeningRequestToViewComponent
  },
  {
    path: 'lc-opening-request-to-edit',
    component: LcOpeningRequestToEditComponent
  },
  {
    path: 'lc-closing-request-create',
    component: LcAccountClosingRequestCreateComponent
  },
  {
    path: 'lc-closing-request-saved',
    component: LcAccountClosingRequestSavedComponent
  },
  {
    path: 'lc-closing-request-saved-view',
    component: LcAccountClosingRequestSavedViewComponent
  },
  {
    path: 'lc-closing-request-saved-edit',
    component: LcAccountClosingRequestSavedEditComponent
  },
  {
    path: 'lc-closing-request-ag',
    component: LcAccountClosingRequestAgComponent
  },
  {
    path: 'lc-closing-request-ag-view',
    component: LcAccountClosingRequestAgViewComponent
  },
  {
    path: 'lc-closing-request-ag-edit',
    component: LcAccountClosingRequestAgEditComponent
  },
  {
    path: 'lc-closing-request-to',
    component: LcAccountClosingRequestToComponent
  },
  {
    path: 'lc-closing-request-to-view',
    component: LcAccountClosingRequestToViewComponent
  },
  {
    path: 'lc-closing-request-to-edit',
    component: LcAccountClosingRequestToEditComponent
  },
  {
    path: 'lc-distribution-circle',
    component: LcDistributionCircleComponent
  },
  {
    path: 'lc-distribution-circle-view',
    component: LcDistributionCircleViewComponent
  },
  {
    path: 'lc-distribution-division',
    component: LcDistributionDivisionComponent
  },
  {
    path: 'lc-distribution-division-view',
    component: LcDistributionDivisionViewComponent
  },
  {
    path: 'lc-verification-to',
    component: LcVerificationToComponent
  },
  {
    path: 'lc-verification-to-view',
    component: LcVerificationToViewComponent
  },
  {
    path: 'lc-authorization-to',
    component: LcAuthorizationToComponent
  },
  {
    path: 'lc-authorization-to-view',
    component: LcAuthorizationToViewComponent
  },
  {
    path: 'lc-verification-to-edit',
    component: LcVerificationToEditComponent
  },
  {
    path: 'lc-authorization-to-edit',
    component: LcAuthorizationToEditComponent
  },
  {
    path: 'lc-advice-preparation-view',
    component: LcAdvicePreparationViewComponent
  },
  {
    path: 'lc-advice-verification-edit',
    component: LcAdvicePreparationEditComponent
  },
  {
    path: 'lc-advice-authorization-edit',
    component: LcAdviceAuthorizationEditComponent
  },
  {
    path: 'lc-cheque-cancelation-division-listing',
    component: ChequeCancelationDivisionListingComponent
  },
  {
    path: 'lc-cheque-cancelation-to-listing',
    component: ChequeCancelationToListingComponent
  },
  {
    path: 'lc-cheque-cancelation-division-view',
    component: ChequeCancelationDivisionViewComponent
  },
  {
    path: 'lc-cheque-cancelation-division-edit',
    component: ChequeCancelationDivisionEditComponent
  },
  {
    path: 'lc-cheque-cancelation-to-view',
    component: ChequeCancelationToViewComponent
  },
  {
    path: 'lc-cheque-cancelation-to-edit',
    component: ChequeCancelationToEditComponent
  },
  {
    path: 'create-lc-account-division',
    component: CreateLcAccountDivisionComponent
  },
  {
    path: 'create-lc-account-listing-division',
    component: CreateLcAccountListingDivisionComponent
  },
  {
    path: 'create-lc-account-listing-ag',
    component: CreateLcAccountListingAgComponent
  },
  {
    path: 'create-lc-account-ag-view',
    component: CreateLcAccountAgViewComponent
  },
  {
    path: 'create-lc-account-ag-edit',
    component: CreateLcAccountAgEditComponent
  },
  {
    path: 'generate-authorization-letter',
    component: LcGenerateAuthorizationLetterComponent
  },
  {
    path: 'create-lc-account-division-edit',
    component: CreateLcAccountDivisionEditComponent
  },
  {
    path: 'create-lc-account-division-view',
    component: CreateLcAccountDivisionViewComponent
  },
  {
    path: 'lc-saved-advice-to',
    component: LcSavedAdviceToComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LetterOfCreditRoutingModule { }
