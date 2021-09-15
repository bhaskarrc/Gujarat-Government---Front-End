import { DocumentMasterComponent } from './jpa/document-master/document-master.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
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
import { DeadStockRegisterComponent } from './account-admin/dead-stock-register/dead-stock-register.component';
import { JpaLegalListingComponent } from './jpa-legal-listing/jpa-legal-listing.component';
import { ChequeRegisterComponent } from './account-admin/cheque-register/cheque-register.component';
import { BtrFiveComponent } from './account-admin/btr-five/btr-five.component';
import { ChallanRegisterComponent } from './account-admin/challan-register/challan-register.component';
import { JpaLegalEntryForRequestListingComponent } from './jpa-legal-entry-for-request-listing/jpa-legal-entry-for-request-listing.component';
import { JpaLegalEntryForRequestComponent } from './jpa-legal-entry-for-request/jpa-legal-entry-for-request.component';
import { ManagementExpenditureComponent } from './account-admin/management-expenditure/management-expenditure.component';
import { ChallanComponent } from './account-admin/challan/challan.component';
import { CashbookComponent } from './account-admin/cashbook/cashbook.component';
import { InwardListingComponent } from './inward/inward-listing/inward-listing.component';
import { OutwardListingComponent } from './outward/outward-listing/outward-listing.component';
import { InwardEntryComponent } from './inward/inward-entry/inward-entry.component';
import { OutwardEntryComponent } from './outward/outward-entry/outward-entry.component';
import { DbPolicyEntryComponent } from './db-policy-entry/db-policy-entry.component';
import { ClaimNoteComponent } from './jpa-report/claim-note/claim-note.component';
import { MemorandumComponent } from './jpa-report/memorandum/memorandum.component';
import { NoClaimComponent } from './jpa-report/no-claim/no-claim.component';
import { QueryGenerateComponent } from './jpa-report/query-generate/query-generate.component';
import { JpaClaimEntryViewComponent } from './jpa/jpa-claim-entry-view/jpa-claim-entry-view.component';

const routes: Routes = [
  {
    path: 'jpa/jpa-claim-entry',
    component: JpaClaimEntryComponent
  },
  {
    path: 'master-claim-entry',
    component: MasterClaimEntryComponent
  },
  {
    path: 'jpa/jpa-pending-approval-listing',
    component: JpaPendingApprovalListingComponent
  },
  {
    path: 'jpa/jpa-pending-application-listing',
    component: JpaPendingApplicationListingComponent
  },
  {
    path: 'jpa/jpa-received-application-listing',
    component: JpaApprovalListingComponent
  },
  {
    path: 'jpa/jpa-return-to-nodal-listing',
    component: JpaRejectionListingComponent
  }, {
    path: 'jpa/jpa-send-for-payment-listing',
    component: JpaSendForPaymentListingComponent
  },
  {
    path: 'jpa/jpa-claim-entry-view',
    component: JpaClaimEntryViewComponent
  }
  ,
  {
    path: 'jpa/jpa-master-from-bank-branch',
    component: JpaMasterFromBankBranchComponent
  }
  ,
  {
    path: 'jpa/jpa-master-policy',
    component: JpaMasterPolicyComponent
  },
  {
    path: 'hba/hba-proposal',
    component: HbaProposalComponent
  },
  {
    path: 'jpa-legal-entry',
    component: JpaLegalEntryComponent
  },
  {
    path: 'jpa-legal-entry-listing',
    component: JpaLegalListingComponent
  },
  {
    path: 'jpa/document-master',
    component: DocumentMasterComponent
  },
  { path: 'account-admin/dead-stock-register', component: DeadStockRegisterComponent },

  {
    path: 'account-admin/cheque-register',
    component: ChequeRegisterComponent
  }
  ,
  {
    path: 'account-admin/challan-register',
    component: ChallanRegisterComponent
  }
  ,
  {
    path: 'account-admin/btr-5',
    component: BtrFiveComponent
  },
  {
    path: 'jpa-legal-entry-for-request-listing',
    component: JpaLegalEntryForRequestListingComponent
  },
  {
    path: 'account-admin/challan',
    component: ChallanComponent
  },
  {
    path: 'account-admin/cashbook',
    component: CashbookComponent
  },
  {
    path: 'inward/inward-entry',
    component: InwardEntryComponent
  },
  {
    path: 'inward/inward-listing',
    component: InwardListingComponent
  },
  {
    path: 'outward/outward-entry',
    component: OutwardEntryComponent
  },
  {
    path: 'outward/outward-listing',
    component: OutwardListingComponent
  },
  {
    path: 'jpa-legal-entry-for-request',
    component: JpaLegalEntryForRequestComponent
  },
  {
    path: 'account-admin/management-expenditure',
    component: ManagementExpenditureComponent
  },
  {
    path: 'account-admin/challan',
    component: ChallanComponent
  },

  {
    path: 'account-admin/cashbook',
    component: CashbookComponent
  },
  {
    path: 'db-poicy-entry',
    component: DbPolicyEntryComponent
  },
  {
    path: 'jpa/claim-note',
    component: ClaimNoteComponent
  },
  {
    path: 'jpa/memorandum',
    component: MemorandumComponent
  },
  {
    path: 'jpa/no-claim',
    component: NoClaimComponent
  },
  {
    path: 'jpa/query-generate',
    component: QueryGenerateComponent
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class DoiRoutingModule { }
