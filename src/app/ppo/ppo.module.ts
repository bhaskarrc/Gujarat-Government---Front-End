import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonProtoModule } from '../common/common.module';
import { MaterialModule } from '../material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { PpoRoutingModule } from './ppo-routing.module';
import { MatRadioModule } from '@angular/material';
import { ReceiveCasesFromDppfComponent } from './receive-cases-from-dppf/receive-cases-from-dppf.component';
import { PensionerSeenDetailsComponent, EditDialogOpenComponent } from './pensioner-seen-details/pensioner-seen-details.component';
import { SavedPensionBillsComponent } from './saved-pension-bills/saved-pension-bills.component';
import { AuditPensionBillsComponent } from './audit-pension-bills/audit-pension-bills.component';
import { PensionBillComponent } from './pension-bill/pension-bill.component';
import { DcrgBillComponent } from './dcrg-bill/dcrg-bill.component';
import { CvpBillComponent } from './cvp-bill/cvp-bill.component';
import { SavedPensionCasesComponent } from './saved-pension-cases/saved-pension-cases.component';
import { CardexCaseVerificationComponent } from './cardex-case-verification/cardex-case-verification.component';
import { VerifiedCasesComponent } from './verified-cases/verified-cases.component';
import { PensionTransferCaseComponent } from './pension-transfer-case/pension-transfer-case.component';
import { ReceivePensionCaseComponent } from './receive-pension-case/receive-pension-case.component';
import {
  PensionDetailsComponent, RevisionDialogComponent, PensionCutComponent,
  OtherBenifitComponent, ArrearDetailComponent, SpecialCutComponent, DcrgAmountDialogComponent, CvpAmountDialogComponent, WithheldAmtComponent
} from './pension-details/pension-details.component';
import { CounterAllocationInwardPensionComponent } from './counter-allocation-inward-pension/counter-allocation-inward-pension.component';
import { CounterAllocationTokenPensionComponent } from './counter-allocation-token-pension/counter-allocation-token-pension.component';
import { RangeAllocationMasterPensionComponent } from './range-allocation-master-pension/range-allocation-master-pension.component';
import { TokenMasterPensionComponent } from './token-master-pension/token-master-pension.component';
import { MedicalAllowanceMasterComponent } from './medical-allowance-master/medical-allowance-master.component';

import { GenerateLifeCertificateComponent } from './generate-life-certificate/generate-life-certificate.component';
import { PensionerDetailsComponent } from './pensioner-details/pensioner-details.component';
// tslint:disable-next-line:max-line-length
import { JeevanPramanPensionerSeenDetailsComponent } from './jeevan-praman-pensioner-seen-details/jeevan-praman-pensioner-seen-details.component';
import { InwardPensionBillComponent } from './inward-pension-bill/inward-pension-bill.component';
import { AuditPensionCasesComponent } from './audit-pension-cases/audit-pension-cases.component';
import { ApproveRejectPensionBillsComponent } from './approve-reject-pension-bills/approve-reject-pension-bills.component';
import { AuditPensionCasesAuditorComponent } from './audit-pension-cases-auditor/audit-pension-cases-auditor.component';
import { AuditPensionCasesAtoToComponent } from './audit-pension-cases-ato-to/audit-pension-cases-ato-to.component';
import { GrievanceRegistrationFormComponent } from './grievance-registration-form/grievance-registration-form.component';
import { GrievanceListingComponent } from './grievance-listing/grievance-listing.component';
import { GrievanceViewStatusComponent } from './grievance-view-status/grievance-view-status.component';
import { SendReminderComponent } from './send-reminder/send-reminder.component';
import { ViewReminderComponent } from './view-reminder/view-reminder.component';
import { PensionPaymentSlipComponent } from './pension-payment-slip/pension-payment-slip.component';
import { SubmitFeedbackComponent } from './submit-feedback/submit-feedback.component';
import { PensionerRecoveryDetailsComponent } from './pensioner-recovery-details/pensioner-recovery-details.component';

import { PensionLetterInwardComponent } from './pension-letter-inward/pension-letter-inward.component';
import { ItDeclarationComponent } from './it-declaration/it-declaration.component';
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
import { MedicalReimbursementDetailsComponent } from './medical-reimbursement-details/medical-reimbursement-details.component';
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
import { PpoDialogBoxComponent } from './ppo-dialog-box/ppo-dialog-box.component';
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
import { FeedbackDialogComponent } from './feedback-dialog/feedback-dialog.component';
import { PensionerLetterInwardListingComponent } from './pensioner-letter-inward-listing/pensioner-letter-inward-listing.component';
import { DomesticHealthAllowanceMasterComponent } from './domestic-health-allowance-master/domestic-health-allowance-master.component';
import { ApprovedFpCasesComponent } from './approved-fp-cases/approved-fp-cases.component';
import { AdminPensionCaseEntryComponent } from './admin-pension-case-entry/admin-pension-case-entry.component';
import { UpdateComponentListingComponent } from './update-component-listing/update-component-listing.component';

@NgModule({
  imports: [
    CommonModule,
    CommonProtoModule,
    MaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMatSelectSearchModule,
    PpoRoutingModule,
    CommonProtoModule,
    MatRadioModule
  ],
  declarations: [
    ReceiveCasesFromDppfComponent,
    PensionerSeenDetailsComponent,
    SavedPensionCasesComponent,
    CardexCaseVerificationComponent,
    VerifiedCasesComponent,
    PensionDetailsComponent,
    GenerateLifeCertificateComponent,
    PensionerDetailsComponent,
    SavedPensionBillsComponent,
    AuditPensionBillsComponent,
    PensionBillComponent,
    DcrgBillComponent,
    CvpBillComponent,
    SavedPensionCasesComponent,
    CardexCaseVerificationComponent,
    VerifiedCasesComponent,
    PensionTransferCaseComponent,
    ReceivePensionCaseComponent,
    AuditPensionCasesComponent,
    ApproveRejectPensionBillsComponent,
    AuditPensionCasesAuditorComponent,
    AuditPensionCasesAtoToComponent,
    CounterAllocationInwardPensionComponent,
    CounterAllocationTokenPensionComponent,
    RangeAllocationMasterPensionComponent,
    TokenMasterPensionComponent,
    MedicalAllowanceMasterComponent,
    PensionerRecoveryDetailsComponent,
    JeevanPramanPensionerSeenDetailsComponent,
    InwardPensionBillComponent,
    PensionLetterInwardComponent,
    ItDeclarationComponent,
    GrievanceRegistrationFormComponent,
    GrievanceListingComponent,
    GrievanceViewStatusComponent,
    SendReminderComponent,
    ViewReminderComponent,
    PensionPaymentSlipComponent,
    SubmitFeedbackComponent,
    SupplementoryBillComponent,
    ProvisionalPensionCasesComponent,
    RevisedArrearCalculationComponent,
    SupplementaryBillDcrgComponent,
    SupplementaryBillCvpComponent,
    SupplementaryBillPensionComponent,
    RevisionAuthorityComponent,
    RevisionDialogComponent,
    PensionCutComponent,
    FeedbackDialogComponent,
    OtherBenifitComponent,
    ArrearDetailComponent,
    SpecialCutComponent,
    EditDialogOpenComponent,
    PpoDialogBoxComponent,
    DistributeCaseComponent,
    AuditMrRequestComponent,
    MedicalReimbursementDetailsComponent,
    ApprovedFpCasesComponent,
    GenerateLtaBillComponent,
    DistributeCaseComponent,
    AuditorBankBranchMappingComponent,
    SavedMrRequestComponent,
    InwardMrRequestComponent,
    UpdatePpoNumberComponent,
    MonthlyPensionBillComponent,
    ApprovedRejectedMrRequestsComponent,
    AdminPensionCaseEntryComponent,
    VariationDetailsComponent,
    PensionCaseBankTransferComponent,
    LifeCertificateComponent,
    AuditorSavedInwardDetailsScreenComponent,
    CvpAmountDialogComponent,
    DcrgAmountDialogComponent,
    WithheldAmtComponent,
    MonthlyPensionBillDetailsComponent,
    LifeCertificateReportComponent,
    RevisionAuthorityViewComponent,
    RecoveryDetailsListingComponent,
    WorkflowDetailsPpoComponent,
    SavedSupplementaryRequestComponent,
    DistributePensionCaseComponent,
    RecoveryDetailsComponent,
    UpdateComponentDetailsComponent,
    DaDifferenceListingComponent,
    GrievanceViewFormComponent,
    FeedbackDialogComponent,
    PensionerLetterInwardListingComponent,
    DomesticHealthAllowanceMasterComponent,
    ApprovedFpCasesComponent,
    AdminPensionCaseEntryComponent,
    UpdateComponentListingComponent,
  ],
  entryComponents: [
    RevisionDialogComponent,
    PensionCutComponent,
    OtherBenifitComponent,
    ArrearDetailComponent,
    SpecialCutComponent,
    EditDialogOpenComponent,
    PpoDialogBoxComponent,
    MedicalReimbursementDetailsComponent,
    CvpAmountDialogComponent,
    DcrgAmountDialogComponent,
    WithheldAmtComponent,
    FeedbackDialogComponent
  ],

})
export class PpoModule { }
