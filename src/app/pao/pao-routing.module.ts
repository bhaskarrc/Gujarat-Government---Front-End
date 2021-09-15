import { CancelAndNewChequeComponent } from './dispatch-from-counter/cancel-and-new-cheque/cancel-and-new-cheque.component';
import { ChequeRenameComponent } from './cheque/cheque-for-correction/cheque-rename-dialog/cheque-rename.component';
import { MlaDesignationListComponent } from './mla/mla-designation-list/mla-designation-list.component';
import { CounterEditingComponent } from './expenditure-accounting/counter-editing/counter-editing.component';
import { PostAuditComponent } from './audit/post-audit/post-audit.component';
import { from } from 'rxjs';
import { CommonModule } from '@angular/common';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { LiasonOfficerComponent } from './liason-officer/liason-officer/liason-officer.component';
import { SloDepartmentPostmasterComponent } from './slo-department-postmaster/slo-department-postmaster.component';
import { LiasonOfficeDataEntryComponent } from './liason-officer/liason-office-data-entry/liason-office-data-entry.component';
import { FlyLeafRegisterComponent } from './fly-leaf-register/fly-leaf-register.component';
import { LiasonOfficerVoucherEntryComponent } from './liason-officer/liason-officer-voucher-entry/liason-officer-voucher-entry.component';
import { LiasonOfficeListComponent } from './liason-officer/liason-office-list/liason-office-list.component';
import { CreateMlaComponent } from './mla/create-mla/create-mla.component';
import { UpdateMlaComponent } from './mla/update-mla/update-mla.component';
import { MlaArrearComponent } from './mla/mla-arrear/mla-arrear.component';
import { MlaSavedBillsComponent } from './mla/mla-saved-bills/mla-saved-bills.component';
import { PostedChallanListingComponent } from './challan-detail/posted-challan-listing/posted-challan-listing.component';
import { ChallanDetailPostingComponent } from './challan-detail/challan-detail-posting/challan-detail-posting.component';
import { TransferEntryComponent } from './transfer-entry/transfer-entry/transfer-entry.component';
import { TransferEntryListComponent } from './transfer-entry/transfer-entry-list/transfer-entry-list.component';
import { MlaAuthorityComponent } from './mla/mla-authority/mla-authority.component';
import { VoucherDistributionComponent } from './voucher/voucher-distribution/voucher-distribution.component';
import { InwardPhysicalBillAuditLevelComponent } from './audit/inward-physical-bill-audit-level/inward-physical-bill-audit-level.component';
import { OtherBillRegisterComponent } from './other-bill-register/other-bill-register.component';
import { VoucherDetailPostingComponent } from './voucher/voucher-detail-posting/voucher-detail-posting.component';
import { UpdateMlaTenureDetailsComponent } from './mla/update-mla-tenure-details/update-mla-tenure-details.component';
import { ChangeCaDaPrecentageComponent } from './mla/change-ca-da-precentage/change-ca-da-precentage.component';
import { EmployeeCreationComponent } from './employee-creation/employee-creation.component';
import { EmployeeCreationListComponent } from './employee-creation-list/employee-creation-list.component';
import { SloDetailsComponent } from './slo-details/slo-details.component';
import { RaoObjectionEntryComponent } from './rao-objection-entry/rao-objection-entry.component';


import { CreateDesignationNewMlaComponent } from './mla/create-designation-new-mla/create-designation-new-mla.component';
import { UpdateMlaDesignationComponent } from './mla/update-mla-designation/update-mla-designation.component';
import { PrintMlaBillComponent } from './mla/print-mla-bill/print-mla-bill.component';
import { BillCreationForMlaComponent } from './mla/bill-creation-for-mla/bill-creation-for-mla.component';
import { FreezAccountComponent } from './expenditure-accounting/freez-account/freez-account.component';
import { PaymentReceiptJottingComponent } from './receipt-aconting/payment-receipt-jotting/payment-receipt-jotting.component';
import { BankRbdEntryComponent } from './receipt-aconting/bank-rbd-entry/bank-rbd-entry.component';
import { EntitlementPayComponent } from './reports-pao/entitlement-pay/entitlement-pay.component';
import { ForwardCtcComponent } from './reports-pao/forward-ctc/forward-ctc.component';
import { GrantAnnualIncrementComponent } from './reports-pao/grant-annual-increment/grant-annual-increment.component';
import { CounterAllocationTokenComponent } from './inward/counter-allocation-token/counter-allocation-token.component';
import { AuditBillsATOComponent } from './audit/audit-bills-ato/audit-bills-ato.component';
import { AuditorMappingComponent } from './audit/auditor-mapping/auditor-mapping.component';
import { AuditBillsApprovedRejectComponent } from './audit/audit-bills-approved-reject/audit-bills-approved-reject.component';
import { AuditBillsAccountantComponent } from './audit/audit-bills-accountant/audit-bills-accountant.component';
import { CounterAllocationInwardComponent } from './inward/counter-allocation-inward/counter-allocation-inward.component';
import { PromotionOfPayComponent } from './reports-pao/promotion-of-pay/promotion-of-pay.component';
import { PayFixationGrantComponent } from './reports-pao/pay-fixation-grant/pay-fixation-grant.component';

import { EpaymentAuthorizeDdoComponent } from './authorization/epayment-authorize-ddo/epayment-authorize-ddo.component';
import { EpaymentAuthorizeToComponent } from './authorization/epayment-authorize-to/epayment-authorize-to.component';
import { EpaymentAutorizeDdoDetailsComponent } from './authorization/epayment-autorize-ddo-details/epayment-autorize-ddo-details.component';
import { EpaymentAutorizeToDetailsComponent } from './authorization/epayment-autorize-to-details/epayment-autorize-to-details.component';
import { EpaymentCancellationToComponent } from './authorization/epayment-cancellation-to/epayment-cancellation-to.component';
import { InwardBillComponent } from './inward/inward-bill/inward-bill.component';
import { InwardChequeComponent } from './inward/inward-cheque/inward-cheque.component';
import { InwardPhysicalBillComponent } from './inward/inward-physical-bill/inward-physical-bill.component';
import { ReprintTokenComponent } from './inward/reprint-token/reprint-token.component';
import { SavedBillComponent } from './inward/saved-bill/saved-bill.component';
import { VitoReportComponent } from './inward/vito-report/vito-report.component';
import { CounterAllocationOutwardComponent } from './outward/counter-allocation-outward/counter-allocation-outward.component';
import { CardexVerificationComponent } from './cardex/cardex-verification/cardex-verification.component';
import { DdoLevelComponent } from './cardex/mapping-process/ddo-level/ddo-level.component';
import { ToLevelComponent } from './cardex/mapping-process/to-level/to-level.component';
import { DdoLevelListComponent } from './cardex/mapping-process/ddo-level-list/ddo-level-list.component';
import { DispatchFromCounterComponent } from './dispatch-from-counter/dispatch-from-counter.component';
import { SendToBookComponent } from './dispatch-from-counter/send-to-book/send-to-book.component';
import { BillPreprationFormComponent } from './inward/saved-bill/bill-prepration-form/bill-prepration-form.component';
import { RangeAllocationMasterComponent } from './master/range-allocation-master/range-allocation-master.component';
import { TokenMasterComponent } from './master/token-master/token-master.component';
import { ObjectionMasterComponent } from './master/objection-master/objection-master.component';
import { BillForCorrectionComponent } from './cheque/bill-for-correction/bill-for-correction.component';
import { ChequePreparationFirstLevelComponent } from './cheque/cheque-preparation-first-level/cheque-preparation-first-level.component';
import { PrintedChequeComponent } from './cheque/printed-cheque/printed-cheque.component';
import { GenerateEpaymentComponent } from './cheque/generate-epayment/generate-epayment.component';
import { EpaymentInCustodyComponent } from './cheque/epayment-in-custody/epayment-in-custody.component';
import { TransferDocumentComponent } from './cheque/transfer-document/transfer-document.component';
import { ChequePreprationComponent } from './cheque/cheque-prepration/cheque-prepration.component';
import { ChequePrintingComponent } from './cheque/cheque-printing/cheque-printing.component';
import { ChequePrintingGenerateChequeComponent } from './cheque/cheque-printing-generate-cheque/cheque-printing-generate-cheque.component';
import { ChequeReprintComponent } from './cheque/cheque-reprint/cheque-reprint.component';
import { ChequesPrintingComponent } from './cheque/cheques-printing/cheques-printing.component';
import { PrintNewChequeComponent } from './cheque/print-new-cheque/print-new-cheque.component';
import { UpdateAdviceDateComponent } from './cheque/update-advice-date/update-advice-date.component';
import { WrittenChequeComponent } from './cheque/written-cheque/written-cheque.component';
import { BankScrollPaymentComponent } from './bank-scroll-payment/bank-scroll-payment.component';
import { VoucherListComponent } from './voucher/voucher-list/voucher-list.component';
import { ChequeReconciliationComponent } from './expenditure-accounting/cheque-reconciliation/cheque-reconciliation.component';
import { NewMlaListComponent } from './mla/new-mla-list/new-mla-list.component';
import { ChequeForCorrectionComponent } from './cheque/cheque-for-correction/cheque-for-correction.component';
import { ChequeDuplicateComponent } from './cheque/cheque-for-correction/cheque-duplicate-dialog/cheque-duplicate.component';
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
import { CardexMappingNewComponent } from './cardex-mapping-new/cardex-mapping-new.component';

const routes: Routes = [
  {
    path: 'liason-office-data-entry',
    component: LiasonOfficeDataEntryComponent
  },
  {
    path: 'transfer-entry-list',
    component: TransferEntryListComponent
  },
  {
    path: 'transfer-entry',
    component: TransferEntryComponent
  },
  {
    path: 'challan-detail-posting',
    component: ChallanDetailPostingComponent
  },
  {
    path: 'liason-office-voucher-entry',
    component: LiasonOfficerVoucherEntryComponent
  },
  {
    path: 'liason-office-data-list',
    component: LiasonOfficeListComponent
  },
  {
    path: 'create-MLA',
    component: CreateMlaComponent
  },
  {
    path: 'update-MLA',
    component: UpdateMlaComponent
  },
  {
    path: 'MLA-arrear',
    component: MlaArrearComponent
  },
  {
    path: 'mla-authority',
    component: MlaAuthorityComponent
  },

  {
    path: 'fly-leaf-register',
    component: FlyLeafRegisterComponent
  },
  {
    path: 'other-bill-register',
    component: OtherBillRegisterComponent
  },

  {
    path: 'voucher-distribution',
    component: VoucherDistributionComponent
  },
  {
    path: 'voucher-detail-posting',
    component: VoucherDetailPostingComponent
  },

  {
    path: 'slo-department-postmaster',
    component: SloDepartmentPostmasterComponent
  },
  {
    path: 'posted-challan-listing',
    component: PostedChallanListingComponent
  },

  {
    path: 'employee-creation',
    component: EmployeeCreationComponent
  },
  {
    path: 'employee-creation/:index',
    component: EmployeeCreationComponent
  },
  {
    path: 'employee-creation-list',
    component: EmployeeCreationListComponent
  },
  {
    path: 'inward-physical-bill-audit-level',
    component: InwardPhysicalBillAuditLevelComponent
  },
  {
    path: 'slo-details',
    component: SloDetailsComponent
  },
  {
    path: 'post-audit',
    component: PostAuditComponent
  },
  {
    path: 'create-new-designation-MLA',
    component: CreateDesignationNewMlaComponent
  },
  {
    path: 'update-tenure-mla',
    component: UpdateMlaTenureDetailsComponent
  },

  {
    path: 'change-ca-da-percentage',
    component: ChangeCaDaPrecentageComponent
  },
  {
    path: 'rao-objection-entry',
    component: RaoObjectionEntryComponent
  },
  {
    path: 'change-ca-da-percentage',
    component: ChangeCaDaPrecentageComponent
  },
  {
    path: 'update-mla-designation',
    component: UpdateMlaDesignationComponent
  },

  {
    path: 'print-mla-bill',
    component: PrintMlaBillComponent
  },
  {
    path: 'change-ca-da-percentage',
    component: ChangeCaDaPrecentageComponent
  },

  {

    path: 'bill-creation-for-mla',
    component: BillCreationForMlaComponent
  },
  {
    path: 'mla-saved-bills',
    component: MlaSavedBillsComponent
  },
  {
    path: 'counter-allocation-token',
    component: CounterAllocationTokenComponent
  },
  {
    path: 'counter-allocation-inward',
    component: CounterAllocationInwardComponent
  },

  {
    path: 'auditbills-accountant',
    component: AuditBillsAccountantComponent
  },
  {
    path: 'auditbills-approve-reject',
    component: AuditBillsApprovedRejectComponent
  },

  {
    path: 'auditbills-ato',
    component: AuditBillsATOComponent
  },
  {
    path: 'auditor-mapping',
    component: AuditorMappingComponent
  },
  {
    path: 'authorization/epayment-authorize-ddo',
    component: EpaymentAuthorizeDdoComponent
  },
  {
    path: 'authorization/epayment-authorize-to',
    component: EpaymentAuthorizeToComponent
  },
  {
    path: 'authorization/epayment-authorize-ddo-details',
    component: EpaymentAutorizeDdoDetailsComponent,

  },
  {
    path: 'authorization/epayment-authorize-to-details',
    component: EpaymentAutorizeToDetailsComponent
  },
  {
    path: 'authorization/epayment-cancel-to',
    component: EpaymentCancellationToComponent
  },
  {
    path: 'inward-bill',
    component: InwardBillComponent
  },
  {
    path: 'inward-cheque',
    component: InwardChequeComponent
  },
  {
    path: 'inward-physical-bill',
    component: InwardPhysicalBillComponent
  },
  {
    path: 'token-print',
    component: ReprintTokenComponent
  },
  {
    path: 'saved-bill',
    component: SavedBillComponent
  },
  {
    path: 'vitoReport',
    component: VitoReportComponent
  },
  {
    path: 'counter-allocation-outward',
    component: CounterAllocationOutwardComponent
  },
  {
    path: 'cardex',
    component: CardexVerificationComponent
  },
  {
    path: 'ddo-level',
    component: DdoLevelComponent,
  },
  {
    path: 'to-level',
    component: ToLevelComponent,
  },
  {
    path: 'ddo-level-list',
    component: DdoLevelListComponent
  },
  {
    path: 'dispatch-from-counter',
    component: DispatchFromCounterComponent
  },
  {
    path: 'send-to-book',
    component: SendToBookComponent
  },
  {
    path: 'saved-bill/bill-prepration-fom',
    component: BillPreprationFormComponent
  },
  {
    path: 'range-allocation-master',
    component: RangeAllocationMasterComponent
  },

  {
    path: 'token-master',
    component: TokenMasterComponent
  },
  {
    path: 'objection-master',
    component: ObjectionMasterComponent
  },
  {
    path: 'cheque-for-correction',
    component: ChequeForCorrectionComponent
  },
  {
    path: 'Bill-For-Correction',
    component: BillForCorrectionComponent
  },
  {
    path: 'cheque-preparation-1st-level',
    component: ChequePreparationFirstLevelComponent,
  },
  {
    path: 'cheque-preparation',
    component: ChequePreprationComponent
  },
  {
    path: 'cheque-printing',
    component: ChequePrintingComponent
  },
  {
    path: 'cheque-printing-generate-cheque',
    component: ChequePrintingGenerateChequeComponent
  },
  {
    path: 'cheque-reprint',
    component: ChequeReprintComponent

  },
  {
    path: 'cheques-printing',
    component: ChequesPrintingComponent
  },
  {
    path: 'printed-cheque',
    component: PrintedChequeComponent
  },
  {
    path: 'report-grant-annual-increment',
    component: GrantAnnualIncrementComponent
  },

  {
    path: 'report-promotion-pay',
    component: PromotionOfPayComponent
  },

  {
    path: 'report-pay-fixation-grant',
    component: PayFixationGrantComponent
  },

  {
    path: 'generate-epayment',
    component: GenerateEpaymentComponent
  },
  {
    path: 'epayment-in-custody',
    component: EpaymentInCustodyComponent
  },
  {
    path: 'transfer-document',
    component: TransferDocumentComponent
  },
  {
    path: 'print-New-Cheques',
    component: PrintNewChequeComponent
  },

  {
    path: 'cheque-update-advice-date',
    component: UpdateAdviceDateComponent
  },
  {
    path: 'written-cheque',
    component: WrittenChequeComponent
  },
  {
    path: 'bank-scroll-payment',
    component: BankScrollPaymentComponent
  },
  {
    path: 'voucher-list',
    component: VoucherListComponent
  },
  {
    path: 'counter-editing',
    component: CounterEditingComponent
  },
  {
    path: 'freez-account',
    component: FreezAccountComponent
  },
  {
    path: 'payment-receipt-jotting',
    component: PaymentReceiptJottingComponent
  },
  {
    path: 'cheque-reconciliation',
    component: ChequeReconciliationComponent,

  },

  {
    path: 'bank-rbd-entry',
    component: BankRbdEntryComponent
  },

  {
    path: 'report-Entitlement',
    component: EntitlementPayComponent
  },

  {
    path: 'report-forward-ctc',
    component: ForwardCtcComponent
  },

  {
    path: 'counter-editing',
    component: CounterEditingComponent
  },

  {
    path: 'new-mla-list',
    component: NewMlaListComponent
  },
  {
    path: 'mla-designation-list',
    component: MlaDesignationListComponent
  },

  {
    path: 'cancel-and-new-cheque',
    component: CancelAndNewChequeComponent
  },
  {
    path: 'annual-increment',
    component: AnnualIncrementComponent
  },
  {
    path: 'entitlement-of-pay',
    component: EntitlementOfPayComponent
  },
  {
    path: 'pay-fixation',
    component: PayFixationComponent
  },
  {
    path: 'promotion-ent-pay',
    component: PromotionEntOfPayComponent
  },
  {
    path: 'ctc',
    component: CtcComponent
  },
  {
    path: 'transfer-entry-payment',
    component: TransferEntryPaymentComponent
  },
  {
    path: 'transfer-entry-payment-listing',
    component: TransferEntryPaymentListingComponent
  },
  {
    path: 'entitlement-of-hra',
    component: EntitlementOfHraComponent
  },
  {
    path: 'grant-of-hra',
    component: GrantOfHraComponent
  },
  {
    path: 'employee-details',
    component: EmployeeDetailsComponent
  },
  {
    path: 'book-transfer-register',
    component: BookTransferRegisterComponent
  },
  {
    path: 'schedule-of-hba-interest-deduction',
    component: ScheduleOfHbaInterestDeductionComponent
  },
  {
    path: 'cardex-mapping-new',
    component: CardexMappingNewComponent
  },
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PaoRoutingModule { }


