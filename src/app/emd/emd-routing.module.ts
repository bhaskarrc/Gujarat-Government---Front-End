import { BalanceTransferComponent } from './balance-transfer/balance-transfer.component';
import { EmdDepositTransferListComponent } from './emd-deposit-transfer/emd-deposit-transfer-list/emd-deposit-transfer-list.component';
import { EmdRecordRoomViewComponent } from './emd-record-room/emd-record-room-view/emd-record-room-view.component';
// tslint:disable-next-line: max-line-length
import { ViewAllPostedVoucherListViewComponent } from './emd-refund-voucher-detail-posting/view-all-posted-voucher-list-view/view-all-posted-voucher-list-view.component';
// tslint:disable-next-line: max-line-length
import { ViewAllPostedVoucherListUpdateComponent } from './emd-refund-voucher-detail-posting/view-all-posted-voucher-list-update/view-all-posted-voucher-list-update.component';
import { PostedVoucherListUpdateComponent } from './posted-voucher-list/posted-voucher-list-update/posted-voucher-list-update.component';
import { PostedVoucherListViewComponent } from './posted-voucher-list/posted-voucher-list-view/posted-voucher-list-view.component';
// tslint:disable-next-line: max-line-length
import { EmdRefundPostedVoucherViewComponent } from './posted-voucher-list-ha/emd-refund-posted-voucher-view/emd-refund-posted-voucher-view.component';
import { UnpostedVoucherListViewComponent } from './unposted-voucher-list/unposted-voucher-list-view/unposted-voucher-list-view.component';
// tslint:disable-next-line: max-line-length
import { PostedChallanListHAViewComponent } from './posted-challan-list-ha/posted-challan-list-ha-view/posted-challan-list-ha-view.component';
import { EmdChallanPostingMasterComponent } from './emd-challan-posting-master/emd-challan-posting-master.component';
// tslint:disable-next-line: max-line-length
import { RecordRoomAllPostedChallanViewComponent } from './record-room-all-posted-challan/record-room-all-posted-challan-view/record-room-all-posted-challan-view.component';
import { RecordRoomAllPostedChallanComponent } from './record-room-all-posted-challan/record-room-all-posted-challan.component';
import { AllPostedChallanViewComponent } from './all-posted-challan/all-posted-challan-view/all-posted-challan-view.component';
import { PostedChallanListUpdateComponent } from './posted-challan-list/posted-challan-list-update/posted-challan-list-update.component';
import { ViewAllPostedVoucherComponent } from './view-all-posted-voucher/view-all-posted-voucher.component';
import { PostedEmdVoucherComponent } from './posted-emd-voucher/posted-emd-voucher.component';
import { EmdChallanPostingViewComponent } from './emd-challan-posting-view/emd-challan-posting-view.component';
import { PostedEmdChallanViewComponent } from './posted-emd-challan-view/posted-emd-challan-view.component';
import { PostedEmdChallanUpdateComponent } from './posted-emd-challan-update/posted-emd-challan-update.component';
import { EmdMasterViewComponent } from './emd-master-list/emd-master-view/emd-master-view.component';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmdMasterComponent } from './emd-master/emd-master.component';
import { EmdMasterListComponent } from './emd-master-list/emd-master-list.component';
import { ReceiptListComponent } from './receipt-list/receipt-list.component';
import { EmdReceivedComponent } from './emd-received/emd-received.component';
import { PostedChallanListHAComponent } from './posted-challan-list-ha/posted-challan-list-ha.component';
import { AllPostedChallanComponent } from './all-posted-challan/all-posted-challan.component';
import { EmdRecordRoomComponent } from './emd-record-room/emd-record-room.component';
import { UnpostedVoucherListComponent } from './unposted-voucher-list/unposted-voucher-list.component';
import { VoucherPostingComponent } from './voucher-posting/voucher-posting.component';
import { EmdRefundEntryComponent } from './emd-refund-entry/emd-refund-entry.component';
import { PostedVoucherListComponent } from './posted-voucher-list/posted-voucher-list.component';
import { PostedVoucherListHaComponent } from './posted-voucher-list-ha/posted-voucher-list-ha.component';
import { EmdReceivedAddComponent } from './emd-received-add/emd-received-add.component';
import { PostedChallanListComponent } from './posted-challan-list/posted-challan-list.component';
import { BalanceTransferStoToToComponent } from './balance-transfer-sto-to-to/balance-transfer-sto-to-to.component';
import { BalanceTransferToToStoComponent } from './balance-transfer-to-to-sto/balance-transfer-to-to-sto.component';
import { BalanceTransferToToToComponent } from './balance-transfer-to-to-to/balance-transfer-to-to-to.component';
import { EmdDepositTransferComponent } from './emd-deposit-transfer/emd-deposit-transfer.component';
import { AuditBillsAuditorComponent } from './audit-bills-auditor/audit-bills-auditor.component';
import { EmdRefundPostedVoucherComponent } from './emd-refund-posted-voucher/emd-refund-posted-voucher.component';
import { UnpostedVoucherAddComponent } from './unposted-voucher-add/unposted-voucher-add.component';
import { EmdRefundVoucherDetailPostingComponent } from './emd-refund-voucher-detail-posting/emd-refund-voucher-detail-posting.component';
import { EmdRecordRoomAllPostedChallanComponent } from './emd-record-room-all-posted-challan/emd-record-room-all-posted-challan.component';
import { UploadBankScrollComponent } from './upload-bank-scroll/upload-bank-scroll.component';
import { AcceptChallanComponent } from './accept-challan/accept-challan.component';
import { ChallanDetailPostingComponent } from './challan-detail-posting/challan-detail-posting.component';
import { PostedChallanListViewComponent } from './posted-challan-list/posted-challan-list-view/posted-challan-list-view.component';
// tslint:disable-next-line: max-line-length
import { UnpostedVoucherListUpdateComponent } from './unposted-voucher-list/unposted-voucher-list-update/unposted-voucher-list-update.component';



const routes: Routes = [
  {
    path: 'emd-master',
    component: EmdMasterComponent
  },
  {
    path: 'emd-master-view',
    component: EmdMasterViewComponent
  },
  {
    path: 'emd-master-list',
    component: EmdMasterListComponent
  },
  {
    path: 'receipt-list',
    component: ReceiptListComponent
  },
  {
    path: 'emd-received',
    component: EmdReceivedComponent
  },
  {
    path: 'emd-received-add',
    component: EmdReceivedAddComponent
  },

  {
    path: 'posted-challan-list',
    component: PostedChallanListComponent
  },

  {
    path: 'posted-challan-list-update',
    component: PostedChallanListUpdateComponent
  },
  {
    path: 'posted-challan-list-view',
    component: PostedChallanListViewComponent
  },
  {
    path: 'posted-challan-list-HA',
    component: PostedChallanListHAComponent
  },
  {
    path: 'posted-challan-list-ha-view',
    component: PostedChallanListHAViewComponent
  },
  {
    path: 'all-posted-challan',
    component: AllPostedChallanComponent
  },
  {
    path: 'all-posted-challan-view',
    component: AllPostedChallanViewComponent
  },
  {
    path: 'emd-record-room',
    component: EmdRecordRoomComponent
  },
  {
    path: 'emd-record-room-view',
    component: EmdRecordRoomViewComponent
  },
  {
    path: 'unposted-voucher-list',
    component: UnpostedVoucherListComponent
  },
  {
    path: 'unposted-voucher-list-view',
    component: UnpostedVoucherListViewComponent
  },
  {
    path: 'unposted-voucher-list-update',
    component: UnpostedVoucherListUpdateComponent
  },
  {
    path: 'voucher-posting',
    component: VoucherPostingComponent
  },
  {
    path: 'emd-refund-entry',
    component: EmdRefundEntryComponent
  },
  {
    path: 'posted-voucher-list',
    component: PostedVoucherListComponent
  },
  {
    path: 'posted-voucher-list-view',
    component: PostedVoucherListViewComponent
  },
  {
    path: 'posted-voucher-list-update',
    component: PostedVoucherListUpdateComponent
  },
  {
    path: 'posted-voucher-list-ha',
    component: PostedVoucherListHaComponent
  },
  {
    path: 'emd-refund-posted-voucher-view',
    component: EmdRefundPostedVoucherViewComponent
  },
  {
    path: 'emd-record-room-all-posted-challan',
    component: EmdRecordRoomAllPostedChallanComponent
  },
  {
    path: 'balance-transfer-sto-to-to',
    component: BalanceTransferStoToToComponent
  },
  {
    path: 'balance-transfer-to-to-sto',
    component: BalanceTransferToToStoComponent
  },
  {
    path: 'balance-transfer-to-to-to',
    component: BalanceTransferToToToComponent
  },
  {
    path: 'emd-deposit-transfer',
    component: EmdDepositTransferComponent
  },
  {
    path: 'emd-deposit-transfer-list',
    component: EmdDepositTransferListComponent
  },

  {
    path: 'audit-bills-auditor',
    component: AuditBillsAuditorComponent
  },
  {
    path: 'emd-refund-posted-voucher',
    component: EmdRefundPostedVoucherComponent
  },
  {
    path: 'unposted-voucher-add',
    component: UnpostedVoucherAddComponent
  },
  {
    path: 'emd-refund-voucher-detail-posting',
    component: EmdRefundVoucherDetailPostingComponent
  },
  {
    path: 'view-all-posted-voucher-list',
    component: ViewAllPostedVoucherListUpdateComponent
  },
  {
    path: 'view-all-posted-voucher-list-view',
    component: ViewAllPostedVoucherListViewComponent
  },

  {
    path: 'upload-bank-scroll',
    component: UploadBankScrollComponent
  },
  {
    path: 'accept-challan',
    component: AcceptChallanComponent
  },
  {
    path: 'challan-detail-posting',
    component: ChallanDetailPostingComponent
  },
  {
    path: 'posted-emd-challan-update',
    component: PostedEmdChallanUpdateComponent
  },
  {
    path: 'posted-emd-challan-view',
    component: PostedEmdChallanViewComponent
  },
  {
    path: 'emd-challan-posting-view',
    component: EmdChallanPostingViewComponent
  },
  {
    path: 'posted-emd-voucher',
    component: PostedEmdVoucherComponent
  },
  {
    path: 'view-all-posted-voucher',
    component: ViewAllPostedVoucherComponent
  },
  {
    path: 'record-room-all-posted-challan',
    component: RecordRoomAllPostedChallanComponent
  },
  {
    path: 'record-room-all-posted-challan-view',
    component: RecordRoomAllPostedChallanViewComponent
  },
  {
    path: 'emd-challan-posting-master',
    component: EmdChallanPostingMasterComponent
  },
  {
    path: 'balance-transfer',
    component: BalanceTransferComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmdRoutingModule { }
