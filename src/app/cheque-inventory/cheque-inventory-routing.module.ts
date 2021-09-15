import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CtsAccountMappingComponent } from './cts-account-mapping/cts-account-mapping.component';
import { RegularIndentPreparationComponent } from './regular-indent-preparation/regular-indent-preparation.component';
import { YearlyIndentComponent } from './yearly-indent/yearly-indent.component';
import { IndentRequestComponent } from './regular-indent-preparation/indent-request/indent-request.component';
import { CtsChequeBookReceiptComponent } from './cts-cheque-book-receipt/cts-cheque-book-receipt.component';
import { IssueToDepartmentComponent } from './issue-to-department/issue-to-department.component';
import { RevertIssuedChequeBookComponent } from './revert-issued-cheque-book/revert-issued-cheque-book.component';
import { WorkflowDetailsCiComponent } from './workflow-details-ci/workflow-details-ci.component';
import { ChequeBookCancelComponent } from './cheque-book-cancel/cheque-book-cancel.component';
import { LedgerReportComponent } from './ledger-report/ledger-report.component';
import { CtsAccountMappingListingComponent } from './cts-account-mapping-listing/cts-account-mapping-listing.component';
import { YearlyIndentRequestListingComponent } from './yearly-indent-request-listing/yearly-indent-request-listing.component';
import { RegularIndentRequestComponent } from './regular-indent-request/regular-indent-request.component';
import { ChequeBookIssueToDepartmentComponent } from './cheque-book-issue-to-department/cheque-book-issue-to-department.component';
import { RevertIssuedChequeBookListingComponent } from './revert-issued-cheque-book-listing/revert-issued-cheque-book-listing.component';
import { CancelIssuedChequeBookListingComponent } from './cancel-issued-cheque-book-listing/cancel-issued-cheque-book-listing.component';
import { RevertedChequeRequestComponent } from './reverted-cheque-request/reverted-cheque-request.component';
import { SignatureVerificationComponent } from './signature-verification/signature-verification.component';

const routes: Routes = [
  {
    path: 'cts-account-mapping',
    component: CtsAccountMappingComponent
  },
  {
    path: 'cts-account-mapping-listing',
    component: CtsAccountMappingListingComponent
  },
  {
    path: 'regular-indent-preparation',
    component: RegularIndentPreparationComponent
  },
  {
    path: 'yearly-indent',
    component: YearlyIndentComponent
  },
  {
    path: 'yearly-indent-request-listing',
    component: YearlyIndentRequestListingComponent
  },
  {
    path: 'cts-cheque-book-receipt',
    component: CtsChequeBookReceiptComponent
  },
  {
    path: 'indent-request',
    component: IndentRequestComponent
  },
  {
    path: 'issue-to-department',
    component: IssueToDepartmentComponent
  },
  {
    path: 'revert-issued-cheque-book',
    component: RevertIssuedChequeBookComponent
  },
  {
    path: 'cheque-book-cancel',
    component: ChequeBookCancelComponent
  },
  {
    path: 'ledger-report',
    component: LedgerReportComponent
  },
  {
    path: 'workflow-details',
    component: WorkflowDetailsCiComponent
  },
  {
    path: 'regular-indent-request',
    component: RegularIndentRequestComponent
  },
  {
    path: 'cheque-book-issue-to-department',
    component: ChequeBookIssueToDepartmentComponent
  },
  {
    path: 'cancel-issued-cheque-book-listing',
    component: CancelIssuedChequeBookListingComponent
  },
  {
    path: 'revert-issued-cheque-book-listing',
    component: RevertIssuedChequeBookListingComponent
  },
  {
    path: 'reverted-cheque-request',
    component: RevertedChequeRequestComponent
  },
  {
    path: 'signature-verification',
    component: SignatureVerificationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChequeInventoryRoutingModule { }
