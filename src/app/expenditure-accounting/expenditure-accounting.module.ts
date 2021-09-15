


import { from } from 'rxjs';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonProtoModule } from '../common/common.module';
import { MaterialModule } from '../material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';



import { ExpenditureAccountingRoutingModule } from './expenditure-accounting-routing.module';
import { SubTrsyChallanDetailPostingComponent } from './receipt/sub-trsy-challan-detail-posting/sub-trsy-challan-detail-posting.component';
import { PostedChallanComponent } from './receipt/posted-challan/posted-challan.component';
import { SubTreasuryPostedChallanComponent } from './receipt/sub-treasury-posted-challan/sub-treasury-posted-challan.component';
import { ViewAllChallanComponent } from './receipt/view-all-challan/view-all-challan.component';
import { RecordRoomComponent } from './receipt/record-room/record-room.component';
import { DistributeStoChallanComponent } from './receipt/distribute-sto-challan/distribute-sto-challan.component';
import { ReDistributeStoChallanComponent } from './receipt/re-distribute-sto-challan/re-distribute-sto-challan.component';
// tslint:disable-next-line: max-line-length
import { ExpenditureVoucherDistrubationComponent } from './Expenditure/expenditure-voucher-distrubation/expenditure-voucher-distrubation.component';
import { ExBankRbdEntryComponent } from './Expenditure/ex-bank-rbd-entry/ex-bank-rbd-entry.component';
import { ExPaymentReceiptJottingComponent } from './Expenditure/ex-payment-receipt-jotting/ex-payment-receipt-jotting.component';
import { ExChequeReconciliationComponent } from './Expenditure/ex-cheque-reconciliation/ex-cheque-reconciliation.component';
import { ExFreezAccountComponent } from './Expenditure/ex-freez-account/ex-freez-account.component';
import { ExBankScrollPaymentComponent } from './Expenditure/ex-bank-scroll-payment/ex-bank-scroll-payment.component';
import { ExVoucherDetailPostingComponent } from './Expenditure/ex-voucher-detail-posting/ex-voucher-detail-posting.component';
import { RevertDocumentsForCorrectionComponent } from './receipt/revert-documents-for-correction/revert-documents-for-correction.component';
import { PaymentReceiptJottingComponent } from './receipt/payment-receipt-jotting/payment-receipt-jotting.component';
import { ChallanReAssignmentComponent } from './receipt/challan-re-assignment/challan-re-assignment.component';
import { OnlineChallanApprovalComponent } from './receipt/online-challan-approval/online-challan-approval.component';
import { AcceptStoDocumentComponent } from './receipt/accept-sto-document/accept-sto-document.component';
import { OnlineChallanDetailsComponent } from './receipt/online-challan-approval/online-challan-details/online-challan-details.component';
import { ExPostedVouchersComponent } from './Expenditure/ex-posted-vouchers/ex-posted-vouchers.component';
import { ExReDistributionComponent } from './Expenditure/ex-re-distribution/ex-re-distribution.component';
import { VoucherNoReAssignmentComponent } from './Expenditure/voucher-no-re-assignment/voucher-no-re-assignment.component';
import { SubmitDocumentComponent } from './Expenditure/submit-document/submit-document.component';
import { ViewAllVouchersComponent } from './Expenditure/view-all-vouchers/view-all-vouchers.component';
import { ExRecordRoomComponent } from './Expenditure/ex-record-room/ex-record-room.component';
// tslint:disable-next-line: max-line-length
import { PaymentReceiptJottingListComponent } from './receipt/payment-receipt-jotting/payment-receipt-jotting-list/payment-receipt-jotting-list.component';
import { SubmitAccountComponent } from './receipt/submit-account/submit-account.component';
// tslint:disable-next-line: max-line-length
import { RefundAndStampCommissionVoucherDetailPostingComponent } from './Expenditure/refund-and-stamp-commission-voucher-detail-posting/refund-and-stamp-commission-voucher-detail-posting.component'; import { CounterEditingComponent } from './Expenditure/counter-editing/counter-editing.component';
// tslint:disable-next-line: max-line-length
import { InwardPhysicalBillAuditLevelComponent } from './Expenditure/inward-physical-bill-audit-level/inward-physical-bill-audit-level.component';
import { TokennoComponent } from './Expenditure/inward-physical-bill-audit-level/dialog/tokenno/tokenno.component';
// tslint:disable-next-line: max-line-length
import { ObjectClassHeadingPaoAuditComponent } from './Expenditure/inward-physical-bill-audit-level/dialog/object-class-heading/object-class-heading.component';
import { DdoGrantHeadPaoComponent } from './Expenditure/inward-physical-bill-audit-level/dialog/ddo-grant-head/ddo-grant-head.component';
import { CardexnoPaoAuditComponent } from './Expenditure/inward-physical-bill-audit-level/dialog/cardexno/cardexno.component';
import { BillTypeAuditComponent } from './Expenditure/inward-physical-bill-audit-level/dialog/bill-type/bill-type.component';
// tslint:disable-next-line: max-line-length
import { AcceptanceCriteriaComponent } from './Expenditure/inward-physical-bill-audit-level/dialog/acceptance-criteria/acceptance-criteria.component';
// tslint:disable-next-line: max-line-length
import { BillHistoryPaoBillComponent } from './Expenditure/inward-physical-bill-audit-level/dialog/acceptance-criteria/bill-history/bill-history.component';
import { UpdateAuditorNameMajorHeadComponent } from './Expenditure/update-auditor-name-major-head/update-auditor-name-major-head.component';
import { OtherChequeIssueComponent } from './Expenditure/other-cheque-issue/other-cheque-issue.component';
import { ExDistributeStoVoucherComponent } from './Expenditure/ex-distribute-sto-voucher/ex-distribute-sto-voucher.component';
import { ExReDistributeStoVoucherComponent } from './Expenditure/ex-re-distribute-sto-voucher/ex-re-distribute-sto-voucher.component';
import { GrantDetailsPaoAuditComponent } from './Expenditure/inward-physical-bill-audit-level/dialog/grant-details/grant-details.component';
import { SubmitAccountToDppfComponent } from './Expenditure/submit-account-to-dppf/submit-account-to-dppf.component';
import { BookTransferRegisterComponent } from './Expenditure/book-transfer-register/book-transfer-register.component';
import { AcceptReceiptScrollFromBankComponent } from './receipt/accept-receipt-scroll-from-bank/accept-receipt-scroll-from-bank.component';
import { ReceiveReceiptScrollDetailsComponent } from './receipt/receive-receipt-scroll-details/receive-receipt-scroll-details.component';
import {
  BankConfigurationMasterComponent, SaveDialogBoxBankConfigurationMasterComponent
} from './Expenditure/bank-configuration-master/bank-configuration-master.component';
import {
  AcceptPaymentScrollFromBankComponent
} from './Expenditure/accept-payment-scroll-from-bank/accept-payment-scroll-from-bank.component';
import {
  ReceivePaymentScrollDetailsComponent
} from './Expenditure/receive-payment-scroll-details/receive-payment-scroll-details.component';

import { PensionVoucherListComponent } from './Expenditure/pension-voucher-list/pension-voucher-list.component';
import {
  ExVoucherDetailPostingUpdateComponent
} from './Expenditure/ex-voucher-detail-posting-update/ex-voucher-detail-posting-update.component';
import {
  BankConfigurationMasterListComponent
} from './Expenditure/bank-configuration-master/bank-configuration-master-list/bank-configuration-master-list.component';
import { OtherChequeIssueListComponent } from './Expenditure/other-cheque-issue/other-cheque-issue-list/other-cheque-issue-list.component';
import { WorkflowDetailsEaComponent } from './workflow-details-ea/workflow-details-ea.component';
import { McaComponent } from './Expenditure/submit-account-of-hba/mca/mca.component';
import { SubmitAccountToNpsComponent } from './Expenditure/submit-account-to-nps/submit-account-to-nps.component';
import {
  SubmitAccountOfGroupInsuranceComponent
} from './Expenditure/submit-account-of-group-insurance/submit-account-of-group-insurance.component';
import { SubmitAccountToDoiComponent } from './Expenditure/submit-account-to-doi/submit-account-to-doi.component';
import { AnnexureIIIComponent } from './Expenditure/annexure-iii/annexure-iii.component';
import { TransferRegisterComponent } from './Expenditure/transfer-register/transfer-register.component';
import { UploadBankScrollPaymentComponent } from './Expenditure/upload-bank-scroll-payment/upload-bank-scroll-payment.component';
import { UploadBankScrollReceiptComponent } from './receipt/upload-bank-scroll-receipt/upload-bank-scroll-receipt.component';

import { ReturnDialog } from './receipt/accept-sto-document/accept-sto-document.component';
import { UploadBankScrollReceiptListComponent } from './receipt/upload-bank-scroll-receipt-list/upload-bank-scroll-receipt-list.component';
import {
  UploadBankScrollPaymentListComponent
} from './Expenditure/upload-bank-scroll-payment-list/upload-bank-scroll-payment-list.component';
import { SaveDialogBoxComponent } from './save-dialog-box/save-dialog-box.component';
import { CloseDialogBoxComponent } from './close-dialog-box/close-dialog-box.component';
import { DeleteDialogBoxComponent } from './delete-dialog-box/delete-dialog-box.component';
import { AcceptDialogComponent, StampCommissionComponent } from './Expenditure/stamp-commission/stamp-commission.component';
import { VoucherAndStampCommissionComponent } from './Expenditure/voucher-and-stamp-commission/voucher-and-stamp-commission.component';
@NgModule({
  imports: [
    CommonModule,
    CommonProtoModule,
    MaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMatSelectSearchModule,
    ExpenditureAccountingRoutingModule
  ],
  declarations:
    [
      SubTrsyChallanDetailPostingComponent,
      PostedChallanComponent,
      SubTreasuryPostedChallanComponent,
      ViewAllChallanComponent,
      RecordRoomComponent,
      DistributeStoChallanComponent,
      ReDistributeStoChallanComponent,
      ExpenditureVoucherDistrubationComponent,
      ExBankRbdEntryComponent,
      ExPaymentReceiptJottingComponent,
      ExChequeReconciliationComponent,
      ExFreezAccountComponent,
      ExBankScrollPaymentComponent,
      ExVoucherDetailPostingComponent,
      RevertDocumentsForCorrectionComponent,
      PaymentReceiptJottingComponent,
      ChallanReAssignmentComponent,
      OnlineChallanApprovalComponent,
      AcceptStoDocumentComponent,
      OnlineChallanDetailsComponent,
      ExPostedVouchersComponent,
      ExReDistributionComponent,
      VoucherNoReAssignmentComponent,
      SubmitDocumentComponent,
      ViewAllVouchersComponent,
      ExRecordRoomComponent,
      VoucherNoReAssignmentComponent,
      PaymentReceiptJottingListComponent,
      SubmitAccountComponent,
      InwardPhysicalBillAuditLevelComponent,
      TokennoComponent,
      ObjectClassHeadingPaoAuditComponent,
      DdoGrantHeadPaoComponent,
      CardexnoPaoAuditComponent,
      CounterEditingComponent,
      GrantDetailsPaoAuditComponent,
      BillTypeAuditComponent,
      AcceptanceCriteriaComponent,
      BillHistoryPaoBillComponent,
      UpdateAuditorNameMajorHeadComponent,
      OtherChequeIssueComponent,
      ExDistributeStoVoucherComponent,
      ExReDistributeStoVoucherComponent,
      RefundAndStampCommissionVoucherDetailPostingComponent,
      SubmitAccountToDppfComponent,
      BookTransferRegisterComponent,
      AcceptReceiptScrollFromBankComponent,
      ReceiveReceiptScrollDetailsComponent,
      BankConfigurationMasterComponent,
      AcceptPaymentScrollFromBankComponent,
      ReceivePaymentScrollDetailsComponent,
      PensionVoucherListComponent,
      ExVoucherDetailPostingUpdateComponent,
      BankConfigurationMasterListComponent,
      OtherChequeIssueListComponent,
      WorkflowDetailsEaComponent,
      McaComponent,
      SubmitAccountToNpsComponent,
      SubmitAccountOfGroupInsuranceComponent,
      SubmitAccountToDoiComponent,
      AnnexureIIIComponent,
      TransferRegisterComponent,
      UploadBankScrollPaymentComponent,
      UploadBankScrollReceiptComponent,
      ReturnDialog,
      UploadBankScrollReceiptListComponent,
      UploadBankScrollPaymentListComponent,
      SaveDialogBoxComponent,
      CloseDialogBoxComponent,
      SaveDialogBoxBankConfigurationMasterComponent,
      DeleteDialogBoxComponent,
      StampCommissionComponent,
      AcceptDialogComponent,
      VoucherAndStampCommissionComponent

    ],
  entryComponents: [
    ObjectClassHeadingPaoAuditComponent,
    DdoGrantHeadPaoComponent,
    AcceptanceCriteriaComponent,
    BillHistoryPaoBillComponent,
    TokennoComponent,
    CardexnoPaoAuditComponent,
    WorkflowDetailsEaComponent,
    ReturnDialog,
    SaveDialogBoxComponent,
    CloseDialogBoxComponent,
    SaveDialogBoxBankConfigurationMasterComponent,
    DeleteDialogBoxComponent,
    AcceptDialogComponent

  ]
})
export class ExpenditureAccountingModule { }
