// tslint:disable-next-line: max-line-length
import { WorkflowDetailsGrantPaoComponent } from './cheque/cheque-for-correction/workflow-details-grant-pao/workflow-details-grant-pao.component';
import { from } from 'rxjs';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaoRoutingModule } from './pao-routing.module';
import { CommonProtoModule } from '../common/common.module';
import { MaterialModule } from '../material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { TransferEntryComponent } from './transfer-entry/transfer-entry/transfer-entry.component';
import { TransferEntryListComponent } from './transfer-entry/transfer-entry-list/transfer-entry-list.component';
// import { LiasonOfficerComponent } from './liason-officer/liason-officer/liason-officer.component';
// tslint:disable-next-line: max-line-length
import { SloDepartmentPostmasterComponent, DepartmentPostMasterComponent } from './slo-department-postmaster/slo-department-postmaster.component';
import { LiasonOfficeDataEntryComponent } from './liason-officer/liason-office-data-entry/liason-office-data-entry.component';
import { FlyLeafRegisterComponent } from './fly-leaf-register/fly-leaf-register.component';
import { OtherBillRegisterComponent } from './other-bill-register/other-bill-register.component';
import { ChallanDetailPostingComponent } from './challan-detail/challan-detail-posting/challan-detail-posting.component';
import { PostedChallanListingComponent } from './challan-detail/posted-challan-listing/posted-challan-listing.component';
import { LiasonOfficerVoucherEntryComponent } from './liason-officer/liason-officer-voucher-entry/liason-officer-voucher-entry.component';
import { LiasonOfficeListComponent } from './liason-officer/liason-office-list/liason-office-list.component';
import { CreateMlaComponent } from './mla/create-mla/create-mla.component';
import { BillFroMlaComponent } from './mla/bill-fro-mla/bill-fro-mla.component';
import { OldBankDetailsComponent } from './mla/create-mla/old-bank-details/old-bank-details.component';
import { UpdateMlaComponent } from './mla/update-mla/update-mla.component';
import { MlaArrearComponent } from './mla/mla-arrear/mla-arrear.component';
import { MlaAuthorityComponent } from './mla/mla-authority/mla-authority.component';
import { VoucherDistributionComponent } from './voucher/voucher-distribution/voucher-distribution.component';
import { InwardPhysicalBillAuditLevelComponent } from './audit/inward-physical-bill-audit-level/inward-physical-bill-audit-level.component';
import { SloDetailsComponent } from './slo-details/slo-details.component';
import { VoucherDetailPostingComponent } from './voucher/voucher-detail-posting/voucher-detail-posting.component';
import { UpdateMlaTenureDetailsComponent } from './mla/update-mla-tenure-details/update-mla-tenure-details.component';
import { CreateDesignationNewMlaComponent } from './mla/create-designation-new-mla/create-designation-new-mla.component';
import { ChangeCaDaPrecentageComponent } from './mla/change-ca-da-precentage/change-ca-da-precentage.component';
import { DdoGrantHeaddesComponent } from './mla/create-designation-new-mla/ddo-grant-head/ddo-grant-head.component';


import { EmployeeCreationComponent, EmployeeForwardDialogComponent } from './employee-creation/employee-creation.component';

import { EmployeeCreationListComponent } from './employee-creation-list/employee-creation-list.component';
import { PostAuditComponent } from './audit/post-audit/post-audit.component';
import { MlaSavedBillsComponent } from './mla/mla-saved-bills/mla-saved-bills.component';
import { RaoObjectionEntryComponent } from './rao-objection-entry/rao-objection-entry.component';

import { BillCreationForMlaComponent } from './mla/bill-creation-for-mla/bill-creation-for-mla.component';
import { UpdateMlaDesignationComponent } from './mla/update-mla-designation/update-mla-designation.component';
import { PrintMlaBillComponent } from './mla/print-mla-bill/print-mla-bill.component';
import { DdoGrantHeaddeupdateComponent } from './mla/update-mla-designation/ddo-grant-head/ddo-grant-head.component';
import { ChequeReconciliationComponent } from './expenditure-accounting/cheque-reconciliation/cheque-reconciliation.component';
import { FreezAccountComponent } from './expenditure-accounting/freez-account/freez-account.component';
import { PaymentReceiptJottingComponent } from './receipt-aconting/payment-receipt-jotting/payment-receipt-jotting.component';
import { BankRbdEntryComponent } from './receipt-aconting/bank-rbd-entry/bank-rbd-entry.component';
import { EntitlementPayComponent } from './reports-pao/entitlement-pay/entitlement-pay.component';
import { ForwardCtcComponent } from './reports-pao/forward-ctc/forward-ctc.component';
import { GrantAnnualIncrementComponent } from './reports-pao/grant-annual-increment/grant-annual-increment.component';
import { TokennoPaoComponent } from './inward/inward-physical-bill/dialog/tokenno/tokenno.component';
import { CardexnoPaoComponent } from './inward/inward-physical-bill/dialog/cardexno/cardexno.component';
// tslint:disable-next-line: max-line-length
import { ObjectClassHeadingPaoAuditComponent } from './audit/inward-physical-bill-audit-level/dialog/object-class-heading/object-class-heading.component';
import { GrantDetailsPaoComponentent } from './inward/inward-physical-bill/dialog/grant-details/grant-details.component';
import { BillTypePaoComponent } from './inward/inward-physical-bill/dialog/bill-type/bill-type.component';
import { CounterAllocationTokenComponent } from './inward/counter-allocation-token/counter-allocation-token.component';
import { CounterAllocationInwardComponent } from './inward/counter-allocation-inward/counter-allocation-inward.component';
import { PartyDetailsComponent } from './party-details/party-details.component';
// import { WorkflowDetailsGrantComponent } from './workflow-details-grant/workflow-details-grant.component';
import { AuditBillsAccountantComponent } from './audit/audit-bills-accountant/audit-bills-accountant.component';
import { AuditBillsApprovedRejectComponent } from './audit/audit-bills-approved-reject/audit-bills-approved-reject.component';
import { AuditBillsATOComponent } from './audit/audit-bills-ato/audit-bills-ato.component';
import { AuditorMappingComponent } from './audit/auditor-mapping/auditor-mapping.component';
import { EpaymentAuthorizeDdoComponent } from './authorization/epayment-authorize-ddo/epayment-authorize-ddo.component';
import { EpaymentAuthorizeToComponent } from './authorization/epayment-authorize-to/epayment-authorize-to.component';
import { EpaymentAutorizeDdoDetailsComponent } from './authorization/epayment-autorize-ddo-details/epayment-autorize-ddo-details.component';
import { EpaymentAutorizeToDetailsComponent } from './authorization/epayment-autorize-to-details/epayment-autorize-to-details.component';
import { EpaymentCancellationToComponent } from './authorization/epayment-cancellation-to/epayment-cancellation-to.component';
import { InwardBillComponent, tokenrange, vitadialogComponent } from './inward/inward-bill/inward-bill.component';

import { InwardPhysicalBillComponent } from './inward/inward-physical-bill/inward-physical-bill.component';
import { ReprintTokenComponent } from './inward/reprint-token/reprint-token.component';
import { SavedBillComponent } from './inward/saved-bill/saved-bill.component';
import { CounterAllocationOutwardComponent } from './outward/counter-allocation-outward/counter-allocation-outward.component';
import { VitoReportComponent } from './inward/vito-report/vito-report.component';
import { CardexVerificationComponent, signatureDialog } from './cardex/cardex-verification/cardex-verification.component';
import { DdoLevelComponent, siignaturedialogPaoComponent } from './cardex/mapping-process/ddo-level/ddo-level.component';
import { ToLevelComponent, tosignaturedialogComponent } from './cardex/mapping-process/to-level/to-level.component';
import { DdoLevelListComponent, siignaturedialogPaoListComponent } from './cardex/mapping-process/ddo-level-list/ddo-level-list.component';
import { DispatchFromCounterComponent } from './dispatch-from-counter/dispatch-from-counter.component';
import { SendToBookComponent } from './dispatch-from-counter/send-to-book/send-to-book.component';
import { BillPreprationFormComponent } from './inward/saved-bill/bill-prepration-form/bill-prepration-form.component';
import { ObjectionMasterComponent } from './master/objection-master/objection-master.component';
import { TokenMasterComponent } from './master/token-master/token-master.component';
import { RangeAllocationMasterComponent } from './master/range-allocation-master/range-allocation-master.component';
import { BillForCorrectionComponent } from './cheque/bill-for-correction/bill-for-correction.component';
import { ChequeForCorrectionComponent } from './cheque/cheque-for-correction/cheque-for-correction.component';
import { CancleChequeComponent } from './cheque/cheque-for-correction/cancle-cheque/cancle-cheque.component';
import { ChequePreparationFirstLevelComponent } from './cheque/cheque-preparation-first-level/cheque-preparation-first-level.component';
import { ChequePreprationComponent } from './cheque/cheque-prepration/cheque-prepration.component';
import { ChequePrintingComponent } from './cheque/cheque-printing/cheque-printing.component';
import { ChequePrintingGenerateChequeComponent } from './cheque/cheque-printing-generate-cheque/cheque-printing-generate-cheque.component';
import { ChequeReprintComponent } from './cheque/cheque-reprint/cheque-reprint.component';
import { ChequesPrintingComponent } from './cheque/cheques-printing/cheques-printing.component';
import { EpaymentInCustodyComponent } from './cheque/epayment-in-custody/epayment-in-custody.component';
import { TransferDocumentComponent } from './cheque/transfer-document/transfer-document.component';
import { GenerateEpaymentComponent } from './cheque/generate-epayment/generate-epayment.component';
import { PrintedChequeComponent } from './cheque/printed-cheque/printed-cheque.component';
import { PrintNewChequeComponent } from './cheque/print-new-cheque/print-new-cheque.component';
import { UpdateAdviceDateComponent } from './cheque/update-advice-date/update-advice-date.component';
import { WrittenChequeComponent } from './cheque/written-cheque/written-cheque.component';
import { BankScrollPaymentComponent } from './bank-scroll-payment/bank-scroll-payment.component';
import { PromotionOfPayComponent } from './reports-pao/promotion-of-pay/promotion-of-pay.component';
import { PayFixationGrantComponent } from './reports-pao/pay-fixation-grant/pay-fixation-grant.component';
import { CounterEditingComponent } from './expenditure-accounting/counter-editing/counter-editing.component';
import { InwardChequeComponent } from './inward/inward-cheque/inward-cheque.component';
import { AcceptanceCriteriaComponent } from './audit/audit-bills-auditor/acceptance-criteria/acceptance-criteria.component';
import { VoucherListComponent } from './voucher/voucher-list/voucher-list.component';

import { NewMlaListComponent } from './mla/new-mla-list/new-mla-list.component';
import { MlaDesignationListComponent } from './mla/mla-designation-list/mla-designation-list.component';
import { DdoGrantHeadPaoComponent } from './audit/inward-physical-bill-audit-level/dialog/ddo-grant-head/ddo-grant-head.component';
import { DdoGrantHeadLiasonComponent } from './liason-officer/liason-officer-voucher-entry/ddo-grant-head/ddo-grant-head.component';
import { ObjectClassHeadingPaoComponent } from './inward/inward-physical-bill/dialog/object-class-heading/object-class-heading.component';
import { BillHistoryPaoBillComponent } from './audit/audit-bills-auditor/acceptance-criteria/bill-history/bill-history.component';
import { CardexnoPaoAuditComponent } from './audit/inward-physical-bill-audit-level/dialog/cardexno/cardexno.component';
import { DdoGrantHeadInwardComponent } from './inward/inward-physical-bill/dialog/ddo-grant-head/ddo-grant-head.component';
import { AuditBillsAuditorPaoComponent } from './audit/audit-bills-auditor/audit-bills-auditor.component';
import { BillTypeAuditComponent } from './audit/inward-physical-bill-audit-level/dialog/bill-type/bill-type.component';
import { GrantDetailsPaoAuditComponent } from './audit/inward-physical-bill-audit-level/dialog/grant-details/grant-details.component';
import { TokennoComponent } from './audit/inward-physical-bill-audit-level/dialog/tokenno/tokenno.component';
import { ChequeRenameComponent } from './cheque/cheque-for-correction/cheque-rename-dialog/cheque-rename.component';
import { ChequeDuplicateComponent } from './cheque/cheque-for-correction/cheque-duplicate-dialog/cheque-duplicate.component';
import { CancelAndNewChequeComponent } from './dispatch-from-counter/cancel-and-new-cheque/cancel-and-new-cheque.component';
import { AnnualIncrementComponent } from './reports-pao/annual-increment/annual-increment.component';
import { EntitlementOfPayComponent } from './reports-pao/entitlement-of-pay/entitlement-of-pay.component';
import { PayFixationComponent } from './reports-pao/pay-fixation/pay-fixation.component';
import { PromotionEntOfPayComponent } from './reports-pao/promotion-ent-of-pay/promotion-ent-of-pay.component';
import { CtcComponent } from './ctc/ctc.component';
import { TransferEntryPaymentComponent } from './transfer-entry-payment/transfer-entry-payment.component';
import { TransferEntryPaymentListingComponent } from './transfer-entry-payment-listing/transfer-entry-payment-listing.component';
import { EntitlementOfHraComponent } from './entitlement-of-hra/entitlement-of-hra.component';
import { GrantOfHraComponent } from './grant-of-hra/grant-of-hra.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { BookTransferRegisterComponent } from './book-transfer-register/book-transfer-register.component';
import { ScheduleOfHbaInterestDeductionComponent } from './schedule-of-hba-interest-deduction/schedule-of-hba-interest-deduction.component';
import { TokenSearchDialogComponent } from './token-search-dialog/token-search-dialog.component';
import { CardexMappingNewComponent } from './cardex-mapping-new/cardex-mapping-new.component';
import { CardexnoComponent } from './cardexno/cardexno.component';
import { AuditBillsAccountantDialogComponent } from './audit-bills-accountant-dialog/audit-bills-accountant-dialog.component';
import { DdoGrantHeadComponent } from './ddo-grant-head/ddo-grant-head.component';
import { VerifypopupdialogComponent } from './verifypopupdialog/verifypopupdialog.component';
import { ObjectMasterDialogComponent } from './object-master-dialog/object-master-dialog.component';







@NgModule({
  imports: [
    CommonModule,
    CommonProtoModule,
    MaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMatSelectSearchModule,
    PaoRoutingModule,

  ],
  declarations: [
    TransferEntryComponent,
    TransferEntryListComponent,
    LiasonOfficeDataEntryComponent,
    LiasonOfficerVoucherEntryComponent,
    DdoGrantHeadPaoComponent,
    OtherBillRegisterComponent,
    FlyLeafRegisterComponent,
    LiasonOfficeListComponent,
    CreateMlaComponent,
    BillFroMlaComponent,
    OldBankDetailsComponent,
    UpdateMlaComponent,
    MlaArrearComponent,
    MlaAuthorityComponent,
    VoucherDistributionComponent,
    SloDepartmentPostmasterComponent,
    DepartmentPostMasterComponent,
    ChallanDetailPostingComponent,
    PostedChallanListingComponent,
    VoucherDetailPostingComponent,
    UpdateMlaTenureDetailsComponent,
    CreateDesignationNewMlaComponent,
    ChangeCaDaPrecentageComponent,
    DdoGrantHeaddesComponent,
    EmployeeCreationComponent,
    EmployeeCreationListComponent,
    EmployeeForwardDialogComponent,
    TokennoPaoComponent,
    CardexnoPaoComponent,
    GrantDetailsPaoComponentent,
    BillTypeAuditComponent,
    InwardPhysicalBillAuditLevelComponent,
    SloDetailsComponent,
    VoucherDetailPostingComponent,
    PostAuditComponent,
    MlaSavedBillsComponent,
    RaoObjectionEntryComponent,
    BillCreationForMlaComponent,
    UpdateMlaDesignationComponent,
    PrintMlaBillComponent,
    DdoGrantHeaddeupdateComponent,
    ChequeReconciliationComponent,
    FreezAccountComponent,
    PaymentReceiptJottingComponent,
    BankRbdEntryComponent,
    EntitlementPayComponent,
    ForwardCtcComponent,
    GrantAnnualIncrementComponent,
    CounterAllocationTokenComponent,
    CounterAllocationInwardComponent,
    PartyDetailsComponent,
    // WorkflowDetailsGrantComponent,
    WorkflowDetailsGrantPaoComponent,
    VerifypopupdialogComponent,
    AuditBillsAccountantComponent,
    AuditBillsApprovedRejectComponent,
    AuditBillsATOComponent,
    AuditorMappingComponent,
    EpaymentAuthorizeDdoComponent,
    EpaymentAuthorizeToComponent,
    EpaymentAutorizeDdoDetailsComponent,
    EpaymentAutorizeToDetailsComponent,
    EpaymentCancellationToComponent,
    InwardBillComponent,
    tokenrange,
    vitadialogComponent,
    TokenSearchDialogComponent,
    InwardPhysicalBillComponent,
    ObjectClassHeadingPaoComponent,
    ReprintTokenComponent,
    GrantDetailsPaoComponentent,
    SavedBillComponent,
    CounterAllocationOutwardComponent,
    VitoReportComponent,
    CardexVerificationComponent,
    signatureDialog,
    DdoLevelComponent,
    ToLevelComponent,
    DdoLevelListComponent,
    tosignaturedialogComponent,
    DispatchFromCounterComponent,
    SendToBookComponent,
    BillPreprationFormComponent,
    ObjectionMasterComponent,
    TokenMasterComponent,
    RangeAllocationMasterComponent,
    BillForCorrectionComponent,
    ChequeForCorrectionComponent,
    CancleChequeComponent,
    ChequePreparationFirstLevelComponent,
    ChequePreprationComponent,
    ChequePrintingComponent,
    ChequePrintingGenerateChequeComponent,
    ChequeReprintComponent,
    ChequesPrintingComponent,
    EpaymentInCustodyComponent,
    TransferDocumentComponent,
    GenerateEpaymentComponent,
    PrintedChequeComponent,
    PrintNewChequeComponent,
    UpdateAdviceDateComponent,
    WrittenChequeComponent,
    BankScrollPaymentComponent,
    PromotionOfPayComponent,
    PayFixationGrantComponent,
    CounterEditingComponent,
    InwardChequeComponent,
    AcceptanceCriteriaComponent,
    VoucherListComponent,
    NewMlaListComponent,
    MlaDesignationListComponent,
    ChequeRenameComponent,
    ChequeDuplicateComponent,
    CancelAndNewChequeComponent,
    DdoGrantHeadLiasonComponent,
    ObjectClassHeadingPaoAuditComponent,
    BillHistoryPaoBillComponent,
    CardexnoPaoAuditComponent,
    DdoGrantHeadInwardComponent,
    siignaturedialogPaoComponent,
    siignaturedialogPaoListComponent,
    AuditBillsAuditorPaoComponent,
    BillTypePaoComponent,
    GrantDetailsPaoAuditComponent,
    TokennoComponent,
    AnnualIncrementComponent,
    EntitlementOfPayComponent,
    PayFixationComponent,
    PromotionEntOfPayComponent,
    CtcComponent,
    TransferEntryPaymentComponent,
    TransferEntryPaymentListingComponent,
    EntitlementOfHraComponent,
    GrantOfHraComponent,
    EmployeeDetailsComponent,
    BookTransferRegisterComponent,
    ScheduleOfHbaInterestDeductionComponent,
    TokenSearchDialogComponent,
    CardexMappingNewComponent,
    CardexnoComponent,
    VerifypopupdialogComponent,
    AuditBillsAccountantDialogComponent,
    DdoGrantHeadComponent,
    ObjectMasterDialogComponent


  ],
  entryComponents: [
    OldBankDetailsComponent,
    signatureDialog,
    DepartmentPostMasterComponent,
    DdoGrantHeaddesComponent,
    EmployeeForwardDialogComponent,
    DdoGrantHeaddeupdateComponent,
    PartyDetailsComponent,
    WorkflowDetailsGrantPaoComponent,
    VerifypopupdialogComponent,
    InwardBillComponent,
    tokenrange,
    vitadialogComponent,
    TokennoPaoComponent,
    DdoGrantHeadPaoComponent,
    CardexnoPaoComponent,
    ObjectClassHeadingPaoComponent,
    GrantDetailsPaoComponentent,
    tosignaturedialogComponent,
    CancleChequeComponent,
    ChequeRenameComponent,
    ChequeDuplicateComponent,
    AcceptanceCriteriaComponent,
    DdoGrantHeadLiasonComponent,
    ObjectClassHeadingPaoAuditComponent,
    BillHistoryPaoBillComponent,
    CardexnoPaoAuditComponent,
    DdoGrantHeadInwardComponent,
    siignaturedialogPaoComponent,
    siignaturedialogPaoListComponent,
    AuditBillsAuditorPaoComponent,
    BillTypePaoComponent,
    GrantDetailsPaoAuditComponent,
    TokennoComponent,
    ChequeRenameComponent,
    ChequeDuplicateComponent,
    TokenSearchDialogComponent,
    CardexnoComponent,
    VerifypopupdialogComponent,
    AuditBillsAccountantDialogComponent,
    DdoGrantHeadComponent,
    ObjectMasterDialogComponent
  ]
})
export class PaoModule { }
