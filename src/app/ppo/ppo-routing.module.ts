import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReceiveCasesFromDppfComponent } from './receive-cases-from-dppf/receive-cases-from-dppf.component';
import { PensionerSeenDetailsComponent } from './pensioner-seen-details/pensioner-seen-details.component';
import { SavedPensionCasesComponent } from './saved-pension-cases/saved-pension-cases.component';
import { CardexCaseVerificationComponent } from './cardex-case-verification/cardex-case-verification.component';
import { VerifiedCasesComponent } from './verified-cases/verified-cases.component';
import { PensionDetailsComponent } from './pension-details/pension-details.component';
import { GenerateLifeCertificateComponent } from './generate-life-certificate/generate-life-certificate.component';
import { PensionerDetailsComponent } from './pensioner-details/pensioner-details.component';
import { SavedPensionBillsComponent } from './saved-pension-bills/saved-pension-bills.component';
import { AuditPensionBillsComponent } from './audit-pension-bills/audit-pension-bills.component';
import { PensionTransferCaseComponent } from './pension-transfer-case/pension-transfer-case.component';
import { ReceivePensionCaseComponent } from './receive-pension-case/receive-pension-case.component';
import { PensionBillComponent } from './pension-bill/pension-bill.component';
import { DcrgBillComponent } from './dcrg-bill/dcrg-bill.component';
import { CvpBillComponent } from './cvp-bill/cvp-bill.component';
import { AuditPensionCasesComponent } from './audit-pension-cases/audit-pension-cases.component';
import { ApproveRejectPensionBillsComponent } from './approve-reject-pension-bills/approve-reject-pension-bills.component';
import { AuditPensionCasesAtoToComponent } from './audit-pension-cases-ato-to/audit-pension-cases-ato-to.component';
import { AuditPensionCasesAuditorComponent } from './audit-pension-cases-auditor/audit-pension-cases-auditor.component';
import { CounterAllocationInwardPensionComponent } from './counter-allocation-inward-pension/counter-allocation-inward-pension.component';
import { CounterAllocationTokenPensionComponent } from './counter-allocation-token-pension/counter-allocation-token-pension.component';
import { RangeAllocationMasterPensionComponent } from './range-allocation-master-pension/range-allocation-master-pension.component';
import { TokenMasterPensionComponent } from './token-master-pension/token-master-pension.component';
import { MedicalAllowanceMasterComponent } from './medical-allowance-master/medical-allowance-master.component';
import { PensionerRecoveryDetailsComponent } from './pensioner-recovery-details/pensioner-recovery-details.component';
// tslint:disable-next-line:max-line-length
import { JeevanPramanPensionerSeenDetailsComponent } from './jeevan-praman-pensioner-seen-details/jeevan-praman-pensioner-seen-details.component';
import { InwardPensionBillComponent } from './inward-pension-bill/inward-pension-bill.component';
import { PensionLetterInwardComponent } from './pension-letter-inward/pension-letter-inward.component';
import { ItDeclarationComponent } from './it-declaration/it-declaration.component';
import { GrievanceRegistrationFormComponent } from './grievance-registration-form/grievance-registration-form.component';
import { GrievanceListingComponent } from './grievance-listing/grievance-listing.component';
import { GrievanceViewStatusComponent } from './grievance-view-status/grievance-view-status.component';
import { SendReminderComponent } from './send-reminder/send-reminder.component';
import { ViewReminderComponent } from './view-reminder/view-reminder.component';
import { PensionPaymentSlipComponent } from './pension-payment-slip/pension-payment-slip.component';
import { SubmitFeedbackComponent } from './submit-feedback/submit-feedback.component';
import { SupplementoryBillComponent } from './supplementory-bill/supplementory-bill.component';
import { ProvisionalPensionCasesComponent } from './provisional-pension-cases/provisional-pension-cases.component';
import { GenerateLtaBillComponent } from './generate-lta-bill/generate-lta-bill.component';
import { RevisedArrearCalculationComponent } from './revised-arrear-calculation/revised-arrear-calculation.component';
import { SupplementaryBillDcrgComponent } from './supplementary-bill-dcrg/supplementary-bill-dcrg.component';
import { SupplementaryBillCvpComponent } from './supplementary-bill-cvp/supplementary-bill-cvp.component';
import { SupplementaryBillPensionComponent } from './supplementary-bill-pension/supplementary-bill-pension.component';
import { RevisionAuthorityComponent } from './revision-authority/revision-authority.component';
import { DistributeCaseComponent } from './distribute-case/distribute-case.component';
import { AuditMrRequestComponent } from './audit-mr-request/audit-mr-request.component';
import { AuditorBankBranchMappingComponent } from './auditor-bank-branch-mapping/auditor-bank-branch-mapping.component';
import { SavedMrRequestComponent } from './saved-mr-request/saved-mr-request.component';
import { InwardMrRequestComponent } from './inward-mr-request/inward-mr-request.component';
import { UpdatePpoNumberComponent } from './update-ppo-number/update-ppo-number.component';
import { MonthlyPensionBillComponent } from './monthly-pension-bill/monthly-pension-bill.component';
import { ApprovedRejectedMrRequestsComponent } from './approved-rejected-mr-requests/approved-rejected-mr-requests.component';
import { VariationDetailsComponent } from './variation-details/variation-details.component';
import { PensionCaseBankTransferComponent } from './pension-case-bank-transfer/pension-case-bank-transfer.component';
import { LifeCertificateComponent } from './life-certificate/life-certificate.component';
// tslint:disable-next-line:max-line-length
import { AuditorSavedInwardDetailsScreenComponent } from './auditor-saved-inward-details-screen/auditor-saved-inward-details-screen.component';
import { MonthlyPensionBillDetailsComponent } from './monthly-pension-bill-details/monthly-pension-bill-details.component';
import { LifeCertificateReportComponent } from './life-certificate-report/life-certificate-report.component';
import { RevisionAuthorityViewComponent } from './revision-authority-view/revision-authority-view.component';
import { RecoveryDetailsListingComponent } from './recovery-details-listing/recovery-details-listing.component';
import { WorkflowDetailsPpoComponent } from './workflow-details-ppo/workflow-details-ppo.component';
import { SavedSupplementaryRequestComponent } from './saved-supplementary-request/saved-supplementary-request.component';
import { DistributePensionCaseComponent } from './distribute-pension-case/distribute-pension-case.component';
import { RecoveryDetailsComponent } from './recovery-details/recovery-details.component';
import { UpdateComponentDetailsComponent } from './update-component-details/update-component-details.component';
import { DaDifferenceListingComponent } from './da-difference-listing/da-difference-listing.component';
import { GrievanceViewFormComponent } from './grievance-view-form/grievance-view-form.component';
import { PensionerLetterInwardListingComponent } from './pensioner-letter-inward-listing/pensioner-letter-inward-listing.component';
import { DomesticHealthAllowanceMasterComponent } from './domestic-health-allowance-master/domestic-health-allowance-master.component';
import { AdminPensionCaseEntryComponent } from './admin-pension-case-entry/admin-pension-case-entry.component';
import { ApprovedFpCasesComponent } from './approved-fp-cases/approved-fp-cases.component';
import { UpdateComponentListingComponent } from './update-component-listing/update-component-listing.component';

export const ppoRoute: Routes = [
  {
    path: 'saved-pension-bills',
    component: SavedPensionBillsComponent
  },
  {
    path: 'audit-pension-bills',
    component: AuditPensionBillsComponent
  },
  {
    path: 'saved-pension-cases',
    component: SavedPensionCasesComponent
  },
  {
    path: 'cardex-case-verification',
    component: CardexCaseVerificationComponent
  },
  {
    path: 'verified-cases',
    component: VerifiedCasesComponent
  },
  {
    path: 'pension-detail',
    component: PensionDetailsComponent
  },
  {
    path: 'receive-cases-from-authority',
    component: ReceiveCasesFromDppfComponent
  },
  {
    path: 'pensioner-seen-details',
    component: PensionerSeenDetailsComponent
  },
  {
    path: 'generate-life-certificate',
    component: GenerateLifeCertificateComponent
  },
  {
    path: 'pensioner-details',
    component: PensionerDetailsComponent
  },
  {
    path: 'pension-transfer-case',
    component: PensionTransferCaseComponent
  },
  {
    path: 'receive-pension-case',
    component: ReceivePensionCaseComponent
  },
  {
    path: 'pension-detail/pension-bill',
    component: PensionBillComponent
  },
  {
    path: 'pension-detail/dcrg-bill',
    component: DcrgBillComponent
  },
  {
    path: 'pension-detail/cvp-bill',
    component: CvpBillComponent
  },
  {
    path: 'audit-pension-cases',
    component: AuditPensionCasesComponent
  },
  {
    path: 'approve-reject-pension-bills',
    component: ApproveRejectPensionBillsComponent
  },
  {
    path: 'audit-pension-cases-ato-to',
    component: AuditPensionCasesAtoToComponent
  },
  {
    path: 'audit-pension-cases-auditor',
    component: AuditPensionCasesAuditorComponent
  },
  {
    path: 'counter-allocation-inward-pension',
    component: CounterAllocationInwardPensionComponent
  },
  {
    path: 'counter-allocation-token-pension',
    component: CounterAllocationTokenPensionComponent
  },
  {
    path: 'range-allocation-master-pension',
    component: RangeAllocationMasterPensionComponent
  },
  {
    path: 'token-master-pension',
    component: TokenMasterPensionComponent
  },
  {
    path: 'medical-allowance-master',
    component: MedicalAllowanceMasterComponent
  },
  {
    path: 'pensioner-recovery-details',
    component: PensionerRecoveryDetailsComponent
  },
  {
    path: 'jeevan-praman-pensioner-seen-details',
    component: JeevanPramanPensionerSeenDetailsComponent
  },
  {
    path: 'inward-pension-bill',
    component: InwardPensionBillComponent
  },
  {
    path: 'pensioner-letter-inward',
    component: PensionLetterInwardComponent
  },
  {
    path: 'it-declaration',
    component: ItDeclarationComponent
  },
  {
    path: 'grievance-registration-form',
    component: GrievanceRegistrationFormComponent
  },
  {
    path: 'grievance-listing',
    component: GrievanceListingComponent
  },
  {
    path: 'grievance-view-status',
    component: GrievanceViewStatusComponent
  },
  {
    path: 'send-reminder',
    component: SendReminderComponent
  },
  {
    path: 'view-reminder',
    component: ViewReminderComponent
  },
  {
    path: 'pension-payment-slip',
    component: PensionPaymentSlipComponent
  },
  {
    path: 'submit-feedback',
    component: SubmitFeedbackComponent
  },
  {
    path: 'pension-detail/supplementary-bill',
    component: SupplementoryBillComponent
  },
  {
    path: 'provisional-pension-cases',
    component: ProvisionalPensionCasesComponent
  },
  {
    path: 'generate-lta-bill',
    component: GenerateLtaBillComponent
  },
  {
    path: 'pension-detail/revised-arrear-calculation',
    component: RevisedArrearCalculationComponent
  },
  {
    path: 'pension-detail/supplementary-bill/supplementary-bill-dcrg',
    component: SupplementaryBillDcrgComponent
  },
  {
    path: 'pension-detail/supplementary-bill/supplementary-bill-cvp',
    component: SupplementaryBillCvpComponent
  },
  {
    path: 'pension-detail/supplementary-bill/supplementary-bill-pension',
    component: SupplementaryBillPensionComponent
  },
  {
    path: 'revision-authority',
    component: RevisionAuthorityComponent
  },
  {
    path: 'distribute-case',
    component: DistributeCaseComponent
  },
  {
    path: 'audit-mr-request',
    component: AuditMrRequestComponent
  },
  {
    path: 'auditor-bank-branch-mapping',
    component: AuditorBankBranchMappingComponent
  },
  {
    path: 'saved-mr-request',
    component: SavedMrRequestComponent
  },
  {
    path: 'inward-mr-request',
    component: InwardMrRequestComponent
  },
  {
    path: 'update-ppo-number',
    component: UpdatePpoNumberComponent
  },
  {
    path: 'monthly-pension-bill',
    component: MonthlyPensionBillComponent
  },
  {
    path: 'approved-rejected-mr-requests',
    component: ApprovedRejectedMrRequestsComponent
  },
  {
    path: 'variation-details',
    component: VariationDetailsComponent
  },
  {
    path: 'pension-case-bank-transfer',
    component: PensionCaseBankTransferComponent
  },
  {
    path: 'life-certificate',
    component: LifeCertificateComponent
  },
  {
    path: 'auditor-saved-inward-details-screen',
    component: AuditorSavedInwardDetailsScreenComponent
  },
  {
    path: 'monthly-pension-bill-details',
    component: MonthlyPensionBillDetailsComponent
  },
  {
    path: 'life-certificate-report',
    component: LifeCertificateReportComponent
  },
  {
    path: 'revision-authority-view',
    component: RevisionAuthorityViewComponent
  },
  {
    path: 'recovery-details-listing',
    component: RecoveryDetailsListingComponent
  },
  {
    path: 'workflow-details-ppo',
    component: WorkflowDetailsPpoComponent
  },
  {
    path: 'saved-supplementary-requests',
    component: SavedSupplementaryRequestComponent
  },
  {
    path: 'distribute-pension-case',
    component: DistributePensionCaseComponent
  },
  {
    path: 'recovery-details',
    component: RecoveryDetailsComponent
  },
  {
    path: 'update-component-details',
    component: UpdateComponentDetailsComponent
  },
  {
    path: 'da-difference-listing',
    component: DaDifferenceListingComponent
  },
  { path: 'grievance-view-form', component: GrievanceViewFormComponent },
  { path: 'pensioner-letter-inward-listing', component: PensionerLetterInwardListingComponent },
  { path: 'domestic-health-allowance-master', component: DomesticHealthAllowanceMasterComponent },
  { path: 'approved-fp-cases', component: ApprovedFpCasesComponent },
  { path: 'admin-pension-case-entry', component: AdminPensionCaseEntryComponent },
  // duplicate link
  { path: 'pension-details', component: PensionDetailsComponent },
  { path: 'update-component-listing', component: UpdateComponentListingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(ppoRoute)],
  exports: [RouterModule],
  declarations: []
})

export class PpoRoutingModule { }


