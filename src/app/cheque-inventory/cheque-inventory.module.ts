import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChequeInventoryRoutingModule } from './cheque-inventory-routing.module';
import { CtsAccountMappingComponent } from './cts-account-mapping/cts-account-mapping.component';
import { CommonProtoModule } from '../common/common.module';
import { MaterialModule } from '../material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { YearlyIndentComponent, SuccessMessageDialogComponent } from './yearly-indent/yearly-indent.component';
import { RegularIndentPreparationComponent } from './regular-indent-preparation/regular-indent-preparation.component';
import { IndentRequestComponent } from './regular-indent-preparation/indent-request/indent-request.component';
import { CtsChequeBookReceiptComponent, ReceiveConfirmationDialogComponent } from './cts-cheque-book-receipt/cts-cheque-book-receipt.component';
import { IssueToDepartmentComponent, IssueConfirmationDialogComponent } from './issue-to-department/issue-to-department.component';
// tslint:disable-next-line: max-line-length
import { RevertIssuedChequeBookComponent, ConfirmationDialogComponent } from './revert-issued-cheque-book/revert-issued-cheque-book.component';
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

@NgModule({
  imports: [
    CommonModule,
    CommonProtoModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMatSelectSearchModule,
    ChequeInventoryRoutingModule,
  ],
  declarations: [
    CtsAccountMappingComponent,
    RegularIndentPreparationComponent,
    IndentRequestComponent,
    YearlyIndentComponent,
    CtsChequeBookReceiptComponent,
    IssueToDepartmentComponent,
    RevertIssuedChequeBookComponent,
    WorkflowDetailsCiComponent,
    ChequeBookCancelComponent,
    LedgerReportComponent,
    CtsAccountMappingListingComponent,
    YearlyIndentRequestListingComponent,
    RegularIndentRequestComponent,
    ChequeBookIssueToDepartmentComponent,
    RevertIssuedChequeBookListingComponent,
    CancelIssuedChequeBookListingComponent,
    RevertedChequeRequestComponent,
    ConfirmationDialogComponent,
    SuccessMessageDialogComponent,
    IssueConfirmationDialogComponent,
    ReceiveConfirmationDialogComponent,
    SignatureVerificationComponent
  ],
  entryComponents: [
    ConfirmationDialogComponent,
    SuccessMessageDialogComponent,
    IssueConfirmationDialogComponent,
    ReceiveConfirmationDialogComponent
  ]
})
export class ChequeInventoryModule { }
