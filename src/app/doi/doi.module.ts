import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { CommonProtoModule } from '../common/common.module';
import { DoiRoutingModule } from './doi-routing.module';
import { JpaClaimEntryComponent } from './jpa/jpa-claim-entry/jpa-claim-entry.component';
import { MasterClaimEntryComponent } from './jpa/master-claim-entry/master-claim-entry.component';
import { JpaPendingApprovalListingComponent } from './jpa/jpa-pending-approval-listing/jpa-pending-approval-listing.component';

import { JpaMasterFromBankBranchComponent } from './jpa/jpa-master-from-bank-branch/jpa-master-from-bank-branch.component';
import { JpaMasterPolicyComponent } from './jpa/jpa-master-policy/jpa-master-policy.component';
import { JpaApprovalListingComponent } from './jpa/jpa-approval-listing/jpa-approval-listing.component';
import { JpaRejectionListingComponent } from './jpa/jpa-rejection-listing/jpa-rejection-listing.component';
import { HbaProposalComponent } from './hba/hba-proposal/hba-proposal.component';
import { JpaSendForPaymentListingComponent } from './jpa/jpa-send-for-payment-listing/jpa-send-for-payment-listing.component';
import { JpaPendingApplicationListingComponent } from './jpa/jpa-pending-application-listing/jpa-pending-application-listing.component';
import { JpaLegalEntryComponent } from './jpa-legal-entry/jpa-legal-entry.component';
import { DocumentMasterComponent } from './jpa/document-master/document-master.component';
import { JpaLegalListingComponent } from './jpa-legal-listing/jpa-legal-listing.component';
import { DeadStockRegisterComponent } from './account-admin/dead-stock-register/dead-stock-register.component';
import { ChallanRegisterComponent } from './account-admin/challan-register/challan-register.component';
import { BtrFiveComponent } from './account-admin/btr-five/btr-five.component';
import { ChequeRegisterComponent } from './account-admin/cheque-register/cheque-register.component';
import { JpaLegalEntryForRequestListingComponent } from './jpa-legal-entry-for-request-listing/jpa-legal-entry-for-request-listing.component';
import { JpaLegalEntryForRequestComponent } from './jpa-legal-entry-for-request/jpa-legal-entry-for-request.component';
import { InwardEntryComponent } from './inward/inward-entry/inward-entry.component';
import { InwardListingComponent } from './inward/inward-listing/inward-listing.component';
import { OutwardEntryComponent } from './outward/outward-entry/outward-entry.component';
import { OutwardListingComponent } from './outward/outward-listing/outward-listing.component';
import { ManagementExpenditureComponent } from './account-admin/management-expenditure/management-expenditure.component';
import { ChallanComponent } from './account-admin/challan/challan.component';
import { CashbookComponent } from './account-admin/cashbook/cashbook.component';
import { DbPolicyEntryComponent } from './db-policy-entry/db-policy-entry.component';
import { ClaimNoteComponent } from './jpa-report/claim-note/claim-note.component';
import { MemorandumComponent } from './jpa-report/memorandum/memorandum.component';
import { NoClaimComponent } from './jpa-report/no-claim/no-claim.component';
import { QueryGenerateComponent } from './jpa-report/query-generate/query-generate.component';
import { WorkflowDoiComponent } from './workflow-doi/workflow-doi.component';
import { JpaQueryDialogComponent } from './jpa-query-dialog/jpa-query-dialog.component';
import { JpaRejectionQueryDialogComponent } from './jpa-rejection-query-dialog/jpa-rejection-query-dialog.component';
import { JpaClaimEntryViewComponent } from './jpa/jpa-claim-entry-view/jpa-claim-entry-view.component';
import { InwardService } from './inward/inward.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMatSelectSearchModule,
    CommonProtoModule,
    DoiRoutingModule,

  ],
  declarations: [
    JpaClaimEntryComponent,
    MasterClaimEntryComponent,
    JpaPendingApprovalListingComponent,
    JpaClaimEntryViewComponent,
    JpaMasterFromBankBranchComponent,
    JpaMasterPolicyComponent,
    JpaApprovalListingComponent,
    JpaRejectionListingComponent,
    HbaProposalComponent,
    JpaSendForPaymentListingComponent,
    JpaPendingApplicationListingComponent,
    JpaLegalEntryComponent,
    DocumentMasterComponent,
    JpaLegalListingComponent,
    DeadStockRegisterComponent,
    ChallanRegisterComponent,
    BtrFiveComponent,
    ChequeRegisterComponent,
    JpaLegalEntryForRequestListingComponent,
    JpaLegalEntryForRequestComponent,
    InwardEntryComponent,
    InwardListingComponent,
    OutwardEntryComponent,
    OutwardListingComponent,
    ManagementExpenditureComponent,
    ChallanComponent,
    CashbookComponent,
    DbPolicyEntryComponent,

    ClaimNoteComponent,
    MemorandumComponent,
    NoClaimComponent,
    QueryGenerateComponent,

    WorkflowDoiComponent,
    JpaQueryDialogComponent,
    JpaRejectionQueryDialogComponent,

  ],

  providers:[InwardService],
  entryComponents: [


    JpaQueryDialogComponent,
    JpaRejectionQueryDialogComponent,
    WorkflowDoiComponent,]
})
export class DoiModule { }
