
import { from } from 'rxjs';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonProtoModule } from '../common/common.module';
import { MaterialModule } from '../material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { EmdRoutingModule } from './emd-routing.module';
import { EmdMasterComponent } from './emd-master/emd-master.component';
import { EmdMasterListComponent, DeleteAction } from './emd-master-list/emd-master-list.component';
import { ReceiptListComponent } from './receipt-list/receipt-list.component';
import { EmdReceivedComponent } from './emd-received/emd-received.component';
import { ForwardAction } from './emd-master-list/emd-master-list.component';
import { PostedChallanListComponent } from './posted-challan-list/posted-challan-list.component';
import { PostedChallanListHAComponent } from './posted-challan-list-ha/posted-challan-list-ha.component';
import { EmdReceivedAddComponent } from './emd-received-add/emd-received-add.component';
import { AllPostedChallanComponent } from './all-posted-challan/all-posted-challan.component';
import { EmdRecordRoomComponent } from './emd-record-room/emd-record-room.component';
import { UnpostedVoucherListComponent } from './unposted-voucher-list/unposted-voucher-list.component';
import { VoucherPostingComponent } from './voucher-posting/voucher-posting.component';
import { EmdRefundEntryComponent } from './emd-refund-entry/emd-refund-entry.component';
import { PostedVoucherListComponent } from './posted-voucher-list/posted-voucher-list.component';
import { PostedVoucherListHaComponent } from './posted-voucher-list-ha/posted-voucher-list-ha.component';
import { BalanceTransferStoToToComponent } from './balance-transfer-sto-to-to/balance-transfer-sto-to-to.component';
import { BalanceTransferToToStoComponent } from './balance-transfer-to-to-sto/balance-transfer-to-to-sto.component';
import { BalanceTransferToToToComponent } from './balance-transfer-to-to-to/balance-transfer-to-to-to.component';
import { EmdRecordRoomAllPostedChallanComponent } from './emd-record-room-all-posted-challan/emd-record-room-all-posted-challan.component';
import { EmdDepositTransferComponent } from './emd-deposit-transfer/emd-deposit-transfer.component';
import { AcceptanceCriteriaComponent } from './acceptance-criteria/acceptance-criteria.component';
import { AuditBillsAuditorComponent } from './audit-bills-auditor/audit-bills-auditor.component';
import { EmdRefundPostedVoucherComponent } from './emd-refund-posted-voucher/emd-refund-posted-voucher.component';
import { UnpostedVoucherAddComponent } from './unposted-voucher-add/unposted-voucher-add.component';
import { EmdRefundVoucherDetailPostingComponent } from './emd-refund-voucher-detail-posting/emd-refund-voucher-detail-posting.component';
import { UploadBankScrollComponent } from './upload-bank-scroll/upload-bank-scroll.component';
import { AcceptChallanComponent } from './accept-challan/accept-challan.component';
import { ChallanDetailPostingComponent } from './challan-detail-posting/challan-detail-posting.component';
import { CloseConfirmCommonDialogComponent } from './close-confirm-common-dialog/close-confirm-common-dialog.component';
import { EmdMasterViewComponent } from './emd-master-list/emd-master-view/emd-master-view.component';
import { PostedEmdChallanUpdateComponent } from './posted-emd-challan-update/posted-emd-challan-update.component';
import { PostedEmdChallanViewComponent } from './posted-emd-challan-view/posted-emd-challan-view.component';
import { EmdChallanPostingViewComponent } from './emd-challan-posting-view/emd-challan-posting-view.component';
import { PostedEmdVoucherComponent } from './posted-emd-voucher/posted-emd-voucher.component';
import { ViewAllPostedVoucherComponent } from './view-all-posted-voucher/view-all-posted-voucher.component';
import { PostedChallanListUpdateComponent } from './posted-challan-list/posted-challan-list-update/posted-challan-list-update.component';
import { PostedChallanListViewComponent } from './posted-challan-list/posted-challan-list-view/posted-challan-list-view.component';
import { AllPostedChallanViewComponent } from './all-posted-challan/all-posted-challan-view/all-posted-challan-view.component';
import { RecordRoomAllPostedChallanComponent } from './record-room-all-posted-challan/record-room-all-posted-challan.component';
import { RecordRoomAllPostedChallanViewComponent } from './record-room-all-posted-challan/record-room-all-posted-challan-view/record-room-all-posted-challan-view.component';
import { EmdChallanPostingMasterComponent } from './emd-challan-posting-master/emd-challan-posting-master.component';
import { PostedChallanListHAViewComponent } from './posted-challan-list-ha/posted-challan-list-ha-view/posted-challan-list-ha-view.component';
import { UnpostedVoucherListViewComponent } from './unposted-voucher-list/unposted-voucher-list-view/unposted-voucher-list-view.component';
import { UnpostedVoucherListUpdateComponent } from './unposted-voucher-list/unposted-voucher-list-update/unposted-voucher-list-update.component';
import { EmdRefundPostedVoucherViewComponent } from './posted-voucher-list-ha/emd-refund-posted-voucher-view/emd-refund-posted-voucher-view.component';
import { PostedVoucherListUpdateComponent } from './posted-voucher-list/posted-voucher-list-update/posted-voucher-list-update.component';
import { PostedVoucherListViewComponent } from './posted-voucher-list/posted-voucher-list-view/posted-voucher-list-view.component';
import { ViewAllPostedVoucherListUpdateComponent } from './emd-refund-voucher-detail-posting/view-all-posted-voucher-list-update/view-all-posted-voucher-list-update.component';
import { ViewAllPostedVoucherListViewComponent } from './emd-refund-voucher-detail-posting/view-all-posted-voucher-list-view/view-all-posted-voucher-list-view.component';
import { EmdRecordRoomViewComponent } from './emd-record-room/emd-record-room-view/emd-record-room-view.component';
import { EmdDepositTransferListComponent } from './emd-deposit-transfer/emd-deposit-transfer-list/emd-deposit-transfer-list.component';

import { WorkflowDetailsEmdComponent } from './workflow-details-emd/workflow-details-emd.component';
import { BalanceTransferComponent } from './balance-transfer/balance-transfer.component';
@NgModule({
  imports: [
    CommonModule,
    CommonProtoModule,
    MaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMatSelectSearchModule,
    EmdRoutingModule,


  ],
  declarations: [
    EmdMasterComponent,
    EmdMasterListComponent,
    ForwardAction,
    DeleteAction,
    ReceiptListComponent,
    EmdReceivedComponent,
    PostedChallanListComponent,
    PostedChallanListHAComponent,
    EmdReceivedAddComponent,
    AllPostedChallanComponent,
    EmdRecordRoomComponent,
    UnpostedVoucherListComponent,
    VoucherPostingComponent,
    EmdRefundEntryComponent,
    PostedVoucherListComponent,
    PostedVoucherListHaComponent,
    BalanceTransferStoToToComponent,
    BalanceTransferToToStoComponent,
    BalanceTransferToToToComponent,
    EmdRecordRoomAllPostedChallanComponent,
    EmdDepositTransferComponent,
    AcceptanceCriteriaComponent,
    AuditBillsAuditorComponent,
    EmdRefundPostedVoucherComponent,
    UnpostedVoucherAddComponent,
    EmdRefundVoucherDetailPostingComponent,
    UploadBankScrollComponent,
    AcceptChallanComponent,
    ChallanDetailPostingComponent,
    CloseConfirmCommonDialogComponent,
    EmdMasterViewComponent,
    PostedEmdChallanUpdateComponent,
    PostedEmdChallanViewComponent,
    EmdChallanPostingViewComponent,
    PostedEmdVoucherComponent,
    ViewAllPostedVoucherComponent,
    PostedChallanListUpdateComponent,
    PostedChallanListViewComponent,
    AllPostedChallanViewComponent,
    RecordRoomAllPostedChallanComponent,
    RecordRoomAllPostedChallanViewComponent,
    EmdChallanPostingMasterComponent,
    PostedChallanListHAViewComponent,
    UnpostedVoucherListViewComponent,
    UnpostedVoucherListUpdateComponent,
    EmdRefundPostedVoucherViewComponent,
    PostedVoucherListUpdateComponent,
    PostedVoucherListViewComponent,

    ViewAllPostedVoucherListUpdateComponent,
    ViewAllPostedVoucherListViewComponent,
    EmdRecordRoomViewComponent,
    EmdDepositTransferListComponent,
    WorkflowDetailsEmdComponent,
    BalanceTransferComponent
  ],

  entryComponents: [
    ForwardAction,
    DeleteAction,
    AcceptanceCriteriaComponent,
    CloseConfirmCommonDialogComponent,
    WorkflowDetailsEmdComponent
  ],

})


export class EmdModule { }
