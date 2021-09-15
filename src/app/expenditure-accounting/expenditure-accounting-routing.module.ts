import { UploadBankScrollReceiptListComponent } from './receipt/upload-bank-scroll-receipt-list/upload-bank-scroll-receipt-list.component';
import { UploadBankScrollReceiptComponent } from './receipt/upload-bank-scroll-receipt/upload-bank-scroll-receipt.component';
import { UploadBankScrollPaymentComponent } from './Expenditure/upload-bank-scroll-payment/upload-bank-scroll-payment.component';
import { TransferRegisterComponent } from './Expenditure/transfer-register/transfer-register.component';
import { SubmitAccountToNpsComponent } from './Expenditure/submit-account-to-nps/submit-account-to-nps.component';
import { McaComponent } from './Expenditure/submit-account-of-hba/mca/mca.component';
import { OtherChequeIssueListComponent } from './Expenditure/other-cheque-issue/other-cheque-issue-list/other-cheque-issue-list.component';
// tslint:disable-next-line: max-line-length
import { BankConfigurationMasterListComponent } from './Expenditure/bank-configuration-master/bank-configuration-master-list/bank-configuration-master-list.component';
// tslint:disable-next-line: max-line-length
import { ExVoucherDetailPostingUpdateComponent } from './Expenditure/ex-voucher-detail-posting-update/ex-voucher-detail-posting-update.component';
// tslint:disable-next-line: max-line-length
import { ReceivePaymentScrollDetailsComponent } from './Expenditure/receive-payment-scroll-details/receive-payment-scroll-details.component';
// tslint:disable-next-line: max-line-length
import { AcceptPaymentScrollFromBankComponent } from './Expenditure/accept-payment-scroll-from-bank/accept-payment-scroll-from-bank.component';
import { ReceiveReceiptScrollDetailsComponent } from './receipt/receive-receipt-scroll-details/receive-receipt-scroll-details.component';
import { AcceptReceiptScrollFromBankComponent } from './receipt/accept-receipt-scroll-from-bank/accept-receipt-scroll-from-bank.component';
import { BookTransferRegisterComponent } from './Expenditure/book-transfer-register/book-transfer-register.component';
import { SubmitAccountToDppfComponent } from './Expenditure/submit-account-to-dppf/submit-account-to-dppf.component';
import { OtherChequeIssueComponent } from './Expenditure/other-cheque-issue/other-cheque-issue.component';
import { UpdateAuditorNameMajorHeadComponent } from './Expenditure/update-auditor-name-major-head/update-auditor-name-major-head.component';
// tslint:disable-next-line: max-line-length
import { InwardPhysicalBillAuditLevelComponent } from './Expenditure/inward-physical-bill-audit-level/inward-physical-bill-audit-level.component';
import { CounterEditingComponent } from './Expenditure/counter-editing/counter-editing.component';
import { SubmitAccountComponent } from './receipt/submit-account/submit-account.component';
// tslint:disable-next-line: max-line-length
import { PaymentReceiptJottingListComponent } from './receipt/payment-receipt-jotting/payment-receipt-jotting-list/payment-receipt-jotting-list.component';
import { OnlineChallanDetailsComponent } from './receipt/online-challan-approval/online-challan-details/online-challan-details.component';
import { AcceptStoDocumentComponent } from './receipt/accept-sto-document/accept-sto-document.component';
import { OnlineChallanApprovalComponent } from './receipt/online-challan-approval/online-challan-approval.component';
import { ChallanReAssignmentComponent } from './receipt/challan-re-assignment/challan-re-assignment.component';
import { RevertDocumentsForCorrectionComponent } from './receipt/revert-documents-for-correction/revert-documents-for-correction.component';
import { ReDistributeStoChallanComponent } from './receipt/re-distribute-sto-challan/re-distribute-sto-challan.component';
import { DistributeStoChallanComponent } from './receipt/distribute-sto-challan/distribute-sto-challan.component';
import { RecordRoomComponent } from './receipt/record-room/record-room.component';
import { ViewAllChallanComponent } from './receipt/view-all-challan/view-all-challan.component';

import { from } from 'rxjs';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubTrsyChallanDetailPostingComponent } from './receipt/sub-trsy-challan-detail-posting/sub-trsy-challan-detail-posting.component';
import { PostedChallanComponent } from './receipt/posted-challan/posted-challan.component';
import { SubTreasuryPostedChallanComponent } from './receipt/sub-treasury-posted-challan/sub-treasury-posted-challan.component';
// tslint:disable-next-line: max-line-length
import { ExpenditureVoucherDistrubationComponent } from './Expenditure/expenditure-voucher-distrubation/expenditure-voucher-distrubation.component';
import { ExBankRbdEntryComponent } from './Expenditure/ex-bank-rbd-entry/ex-bank-rbd-entry.component';
import { ExPaymentReceiptJottingComponent } from './Expenditure/ex-payment-receipt-jotting/ex-payment-receipt-jotting.component';
import { ExChequeReconciliationComponent } from './Expenditure/ex-cheque-reconciliation/ex-cheque-reconciliation.component';
import { ExFreezAccountComponent } from './Expenditure/ex-freez-account/ex-freez-account.component';
import { ExBankScrollPaymentComponent } from './Expenditure/ex-bank-scroll-payment/ex-bank-scroll-payment.component';
import { ExVoucherDetailPostingComponent } from './Expenditure/ex-voucher-detail-posting/ex-voucher-detail-posting.component';
import { PaymentReceiptJottingComponent } from './receipt/payment-receipt-jotting/payment-receipt-jotting.component';
import { ExPostedVouchersComponent } from './Expenditure/ex-posted-vouchers/ex-posted-vouchers.component';
import { ExReDistributionComponent } from './Expenditure/ex-re-distribution/ex-re-distribution.component';
import { VoucherNoReAssignmentComponent } from './Expenditure/voucher-no-re-assignment/voucher-no-re-assignment.component';
import { SubmitDocumentComponent } from './Expenditure/submit-document/submit-document.component';
import { ViewAllVouchersComponent } from './Expenditure/view-all-vouchers/view-all-vouchers.component';
import { ExRecordRoomComponent } from './Expenditure/ex-record-room/ex-record-room.component';
// tslint:disable-next-line: max-line-length
import { RefundAndStampCommissionVoucherDetailPostingComponent } from './Expenditure/refund-and-stamp-commission-voucher-detail-posting/refund-and-stamp-commission-voucher-detail-posting.component';
import { ExDistributeStoVoucherComponent } from './Expenditure/ex-distribute-sto-voucher/ex-distribute-sto-voucher.component';
import { ExReDistributeStoVoucherComponent } from './Expenditure/ex-re-distribute-sto-voucher/ex-re-distribute-sto-voucher.component';
import { BankConfigurationMasterComponent } from './Expenditure/bank-configuration-master/bank-configuration-master.component';
import { PensionVoucherListComponent } from './Expenditure/pension-voucher-list/pension-voucher-list.component';
import { SubmitAccountOfGroupInsuranceComponent } from './Expenditure/submit-account-of-group-insurance/submit-account-of-group-insurance.component';
import { SubmitAccountToDoiComponent } from './Expenditure/submit-account-to-doi/submit-account-to-doi.component';
import { AnnexureIIIComponent } from './Expenditure/annexure-iii/annexure-iii.component';
import { UploadBankScrollPaymentListComponent } from './Expenditure/upload-bank-scroll-payment-list/upload-bank-scroll-payment-list.component';
import { StampCommissionComponent } from './Expenditure/stamp-commission/stamp-commission.component';
import { VoucherAndStampCommissionComponent } from './Expenditure/voucher-and-stamp-commission/voucher-and-stamp-commission.component';


const routes: Routes = [
  {
    path: 'receipt/sub-trsy-challan-detail-posting',
    component: SubTrsyChallanDetailPostingComponent
  },
  {
    path: 'receipt/posted-challan',
    component: PostedChallanComponent
  },
  {
    path: 'receipt/sub-treasury-posted-challan',
    component: SubTreasuryPostedChallanComponent
  },
  {
    path: 'receipt/view-all-challan',
    component: ViewAllChallanComponent
  },
  {
    path: 'receipt/record-room',
    component: RecordRoomComponent
  },
  {
    path: 'receipt/distribute-sto-challan',
    component: DistributeStoChallanComponent
  },
  {
    path: 'receipt/re-distribute-sto-challan',
    component: ReDistributeStoChallanComponent
  },
  {
    path: 'expenditure/ex-voucher-distrubation',
    component: ExpenditureVoucherDistrubationComponent
  },
  {
    path: 'expenditure/ex-bank-rbd-entryy',
    component: ExBankRbdEntryComponent
  },
  {
    path: 'expenditure/ex-payment-receipt-jotting',
    component: ExPaymentReceiptJottingComponent
  },
  {
    path: 'expenditure/ex-cheque-reconciliation',
    component: ExChequeReconciliationComponent
  },
  {
    path: 'expenditure/ex-freez-account',
    component: ExFreezAccountComponent
  },
  {
    path: 'expenditure/ex-bank-scroll-payment',
    component: ExBankScrollPaymentComponent
  },
  {
    path: 'expenditure/ex-voucher-detail-posting',
    component: ExVoucherDetailPostingComponent
  },
  {
    path: 'receipt/revert-documents-for-correction',
    component: RevertDocumentsForCorrectionComponent
  },
  {
    path: 'receipt/payment-receipt-jotting',
    component: PaymentReceiptJottingComponent
  },
  {
    path: 'receipt/challan-re-assignment',
    component: ChallanReAssignmentComponent
  },
  {
    path: 'receipt/online-challan-approval',
    component: OnlineChallanApprovalComponent
  },
  {
    path: 'receipt/accept-sto-document',
    component: AcceptStoDocumentComponent
  },
  {
    path: 'receipt/online-challan-details',
    component: OnlineChallanDetailsComponent
  },
  {
    path: 'expenditure/ex-posted-vouchers',
    component: ExPostedVouchersComponent
  },
  {
    path: 'expenditure/ex-re-distribution',
    component: ExReDistributionComponent
  },
  {
    path: 'expenditure/voucher-no-re-assignment',
    component: VoucherNoReAssignmentComponent
  },
  {
    path: 'expenditure/submit-doucment',
    component: SubmitDocumentComponent
  },
  {
    path: 'expenditure/view-all-vouchers',
    component: ViewAllVouchersComponent
  },
  {
    path: 'expenditure/ex-record-room',
    component: ExRecordRoomComponent
  },
  {
    path: 'receipt/payment-receipt-jotting-list',
    component: PaymentReceiptJottingListComponent
  },
  {
    path: 'receipt/submit-account',
    component: SubmitAccountComponent
  },
  {
    path: 'expenditure/refund-and-stamp',
    component: RefundAndStampCommissionVoucherDetailPostingComponent
  },
  {
    path: 'expenditure/distribute-sto-voucher',
    component: ExDistributeStoVoucherComponent
  },
  {
    path: 'expenditure/re-distribute-sto-voucher',
    component: ExReDistributeStoVoucherComponent
  },
  {
    path: 'expenditure/counter-editing',
    component: CounterEditingComponent
  },
  {
    path: 'inward-physical-bill-audit-level',
    component: InwardPhysicalBillAuditLevelComponent
  },
  {
    path: 'expenditure/bank-configuration-master',
    component: BankConfigurationMasterComponent
  },
  {
    path: 'expenditure/update-auditor-name-major-head',
    component: UpdateAuditorNameMajorHeadComponent
  },
  {
    path: 'expenditure/other-cheque-issue',
    component: OtherChequeIssueComponent
  },
  {
    path: 'expenditure/pension-voucher-list',
    component: PensionVoucherListComponent
  },
  {
    path: 'expenditure/submit-account-to-dppf',
    component: SubmitAccountToDppfComponent
  },
  {
    path: 'expenditure/book-transfer-register',
    component: BookTransferRegisterComponent
  },
  {
    path: 'receipt/accept-receipt-scroll-from-bank',
    component: AcceptReceiptScrollFromBankComponent
  },
  {
    path: 'receipt/receive-receipt-scroll-details',
    component: ReceiveReceiptScrollDetailsComponent
  },
  {
    path: 'expenditure/accept-payment-scroll-from-bank',
    component: AcceptPaymentScrollFromBankComponent
  },
  {
    path: 'expenditure/receive-payment-scroll-details',
    component: ReceivePaymentScrollDetailsComponent
  },
  {
    path: 'expenditure/ex-voucher-detail-posting-update',
    component: ExVoucherDetailPostingUpdateComponent
  },
  {
    path: 'expenditure/bank-configuration-master-list',
    component: BankConfigurationMasterListComponent
  },
  {
    path: 'expenditure/other-cheque-issue-list',
    component: OtherChequeIssueListComponent
  },
  {
    path: 'expenditure/submit-account-of-hba-mca',
    component: McaComponent
  },
  {
    path: 'expenditure/submit-account-to-nps',
    component: SubmitAccountToNpsComponent
  },
  {
    path: 'expenditure/submit-account-of-group-insurance',
    component: SubmitAccountOfGroupInsuranceComponent
  },
  {
    path: 'expenditure/submit-account-to-doi',
    component: SubmitAccountToDoiComponent
  },
  {
    path: 'expenditure/annexure-III',
    component: AnnexureIIIComponent
  },
  {
    path: 'expenditure/transfer-register',
    component: TransferRegisterComponent
  },
  {
    path: 'expenditure/upload-bank-scroll-payment',
    component: UploadBankScrollPaymentComponent
  },
  {
    path: 'receipt/upload-bank-scroll-receipt',
    component: UploadBankScrollReceiptComponent

  },
  {
    path: 'receipt/upload-bank-scroll-receipt-list',
    component: UploadBankScrollReceiptListComponent
  },
  {
    path: 'expenditure/upload-bank-scroll-payment-list',
    component: UploadBankScrollPaymentListComponent
  },
  {
    path: 'expenditure/stamp-commission',
    component: StampCommissionComponent
  },
  {
    path: 'expenditure/voucher-stamp-commission',
    component: VoucherAndStampCommissionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpenditureAccountingRoutingModule { }
