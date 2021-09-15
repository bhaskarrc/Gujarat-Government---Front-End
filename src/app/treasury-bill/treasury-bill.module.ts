import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreasuryBillRoutingModule } from './treasury-bill-routing.module';

import { TokenMasterComponent } from './master/token-master/token-master.component';
import { RangeAllocationMasterComponent } from './master/range-allocation-master/range-allocation-master.component';
import { CommonProtoModule } from '../common/common.module';
import { MaterialModule } from '../material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { CounterAllocationTokenComponent } from './inward/counter-allocation-token/counter-allocation-token.component';
import { CounterAllocationInwardComponent } from './inward/counter-allocation-inward/counter-allocation-inward.component';
import { InwardBillComponent, tokenrange, vitadialogComponent } from './inward/inward-bill/inward-bill.component';
import { VitoReportComponent } from './inward/vito-report/vito-report.component';
import { SavedBillComponent } from './inward/saved-bill/saved-bill.component';
import { BillPreprationFormComponent } from './inward/saved-bill/bill-prepration-form/bill-prepration-form.component';

import { CardexVerificationComponent, signatureDialog } from './cardex/cardex-verification/cardex-verification.component';
import { ReprintTokenComponent } from './inward/reprint-token/reprint-token.component';
import { DdoLevelComponent, siignaturedialogComponent } from './cardex/mapping-process/ddo-level/ddo-level.component';
import { ToLevelComponent, ToSignatureDialogComponent } from './cardex/mapping-process/to-level/to-level.component';
import { DispatchFromCounterComponent, tokenrangeDispatch } from './dispatch-from-counter/dispatch-from-counter.component';
import { EpaymentAuthorizeDdoComponent } from './authorization/epayment-authorize-ddo/epayment-authorize-ddo.component';
import { EpaymentAuthorizeToComponent } from './authorization/epayment-authorize-to/epayment-authorize-to.component';
import { AuditBillsAuditorComponent } from './audit/audit-bills-auditor/audit-bills-auditor.component';
import { ChequePreprationComponent } from './cheque/cheque-prepration/cheque-prepration.component';
import { ChequePreparationFirstLevelComponent } from './cheque/cheque-preparation-first-level/cheque-preparation-first-level.component';
import { WrittenChequeComponent } from './cheque/written-cheque/written-cheque.component';
import { AuditBillsAccountantComponent } from './audit/audit-bills-accountant/audit-bills-accountant.component';
import { AuditBillsATOComponent } from './audit/audit-bills-ato/audit-bills-ato.component';
import { AuditBillsTOComponent } from './audit/audit-bills-to/audit-bills-to.component';
import { AuditBillsApprovedRejectComponent } from './audit/audit-bills-approved-reject/audit-bills-approved-reject.component';
import { AuditorMappingComponent } from './audit/auditor-mapping/auditor-mapping.component';
import { ChequePrintingComponent } from './cheque/cheque-printing/cheque-printing.component';
import { ChequePrintingGenerateChequeComponent } from './cheque/cheque-printing-generate-cheque/cheque-printing-generate-cheque.component';
import { PrintedChequeComponent } from './cheque/printed-cheque/printed-cheque.component';
import { GenerateEpaymentComponent } from './cheque/generate-epayment/generate-epayment.component';
import { EpaymentInCustodyComponent } from './cheque/epayment-in-custody/epayment-in-custody.component';
import { DdoLevelListComponent, SignatureDialogComponent } from './cardex/mapping-process/ddo-level-list/ddo-level-list.component';
import { ChequesPrintingComponent } from './cheque/cheques-printing/cheques-printing.component';
import { TransferDocumentComponent } from './cheque/transfer-document/transfer-document.component';
import { ObjectionMasterComponent, objectiondialogComponent } from './master/objection-master/objection-master.component';
import { CounterAllocationOutwardComponent } from './outward/counter-allocation-outward/counter-allocation-outward.component';
import { InwardChequeComponent } from './inward/inward-cheque/inward-cheque.component';
import { PartyDetailsComponent } from './cheque/party-details/party-details.component';
import { WorkflowDetailsGrantComponent } from './workflow-details-grant/workflow-details-grant.component';
import { EpaymentAutorizeDdoDetailsComponent } from './authorization/epayment-autorize-ddo-details/epayment-autorize-ddo-details.component';
import { EpaymentAutorizeToDetailsComponent } from './authorization/epayment-autorize-to-details/epayment-autorize-to-details.component';

import { UpdateAdviceDateComponent } from './cheque/update-advice-date/update-advice-date.component';
import { InwardPhysicalBillComponent, } from './inward/inward-physical-bill/inward-physical-bill.component';
import { DdoGrantHeadComponent } from './inward/inward-physical-bill/dialog/ddo-grant-head/ddo-grant-head.component';
import { CardexnoComponent } from './inward/inward-physical-bill/dialog/cardexno/cardexno.component';
import { ObjectClassHeadingComponent } from './inward/inward-physical-bill/dialog/object-class-heading/object-class-heading.component';
import { GrantDetailsComponent } from './inward/inward-physical-bill/dialog/grant-details/grant-details.component';
import { BillTypeComponent } from './inward/inward-physical-bill/dialog/bill-type/bill-type.component';
import { ChequeReprintComponent } from './cheque/cheque-reprint/cheque-reprint.component';
import { ChequeForCorrectionComponent } from './cheque/cheque-for-correction/cheque-for-correction.component';
import { BillForCorrectionComponent } from './cheque/bill-for-correction/bill-for-correction.component';
import { SendToBookComponent } from './dispatch-from-counter/send-to-book/send-to-book.component';
import { CancleChequeComponent } from './cheque/cheque-for-correction/cancle-cheque/cancle-cheque.component';
import { PrintNewChequeComponent } from './cheque/print-new-cheque/print-new-cheque.component';
import { EpaymentCancellationToComponent } from './authorization/epayment-cancellation-to/epayment-cancellation-to.component';
import { AcceptanceCriteriaComponent } from './audit/audit-bills-auditor/acceptance-criteria/acceptance-criteria.component';
import { BillHistoryComponent } from './audit/audit-bills-auditor/acceptance-criteria/bill-history/bill-history.component';
// tslint:disable-next-line: max-line-length
import { InwardPhysicalBillAuditLevelComponent } from './inward/inward-physical-bill-audit-level/inward-physical-bill-audit-level.component';
import { AuditBillsAccountantDialogComponent } from './audit/dialog/audit-bills-accountant-dialog/audit-bills-accountant-dialog.component';
import { DispatchLevelTrackerComponent } from './dispatch-level-tracker/dispatch-level-tracker.component';
import { InwardBillTrackingComponent } from './inward-bill-tracking/inward-bill-tracking.component';
import { InwardBillDialougeComponent } from './inward-bill-tracking/inward-bill-dialouge/inward-bill-dialouge.component';
import { TokenSearchDialogComponent } from './token-search-dialog/token-search-dialog.component';
import { VerifypopupdialogComponent } from './verifypopupdialog/verifypopupdialog.component';
import { CancelAndNewChequeComponent } from './dispatch-from-counter/cancel-and-new-cheque/cancel-and-new-cheque.component';




@NgModule({
  imports: [
    CommonModule,
    CommonProtoModule,
    MaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMatSelectSearchModule,
    TreasuryBillRoutingModule,
  ],
  declarations: [
    TokenMasterComponent,
    RangeAllocationMasterComponent,
    CounterAllocationTokenComponent,
    CounterAllocationInwardComponent,
    InwardBillComponent,
    VitoReportComponent,
    vitadialogComponent,
    SavedBillComponent,
    tokenrange,
    BillPreprationFormComponent,
    CardexVerificationComponent,
    ReprintTokenComponent,
    DdoLevelComponent,
    ToLevelComponent,
    DispatchFromCounterComponent,
    EpaymentAuthorizeDdoComponent,
    EpaymentAuthorizeToComponent,
    AuditBillsAuditorComponent,
    ChequePreprationComponent,
    ChequePreparationFirstLevelComponent,
    WrittenChequeComponent,
    AuditBillsAccountantComponent,
    AuditBillsATOComponent,
    AuditBillsTOComponent,
    AuditBillsApprovedRejectComponent,
    AuditorMappingComponent,
    ChequePrintingComponent,
    ChequePrintingGenerateChequeComponent,
    PrintedChequeComponent,
    GenerateEpaymentComponent,
    EpaymentInCustodyComponent,
    DdoLevelListComponent,
    SignatureDialogComponent,
    ChequesPrintingComponent,
    TransferDocumentComponent,
    ObjectionMasterComponent,
    CounterAllocationOutwardComponent,
    objectiondialogComponent,
    InwardChequeComponent,
    signatureDialog,
    PartyDetailsComponent,
    WorkflowDetailsGrantComponent,
    siignaturedialogComponent,
    EpaymentAutorizeDdoDetailsComponent,
    EpaymentAutorizeToDetailsComponent,
    UpdateAdviceDateComponent,
    InwardPhysicalBillComponent,
    CardexnoComponent,
    DdoGrantHeadComponent,
    ObjectClassHeadingComponent,
    GrantDetailsComponent,
    BillTypeComponent,
    ChequeReprintComponent,
    ChequeForCorrectionComponent,
    BillForCorrectionComponent,
    SendToBookComponent,
    CancleChequeComponent,
    PrintNewChequeComponent,
    EpaymentCancellationToComponent,
    AcceptanceCriteriaComponent,
    BillHistoryComponent,
    InwardPhysicalBillAuditLevelComponent,
    AuditBillsAccountantDialogComponent,
    ToSignatureDialogComponent,
    DispatchLevelTrackerComponent,
    InwardBillTrackingComponent,
    InwardBillDialougeComponent,
    TokenSearchDialogComponent,
    VerifypopupdialogComponent,
    tokenrangeDispatch,
    CancelAndNewChequeComponent


  ],
  entryComponents: [
    vitadialogComponent,
    tokenrange,
    SignatureDialogComponent,
    objectiondialogComponent,
    signatureDialog,
    PartyDetailsComponent,
    WorkflowDetailsGrantComponent,
    siignaturedialogComponent,
    CardexnoComponent,
    DdoGrantHeadComponent,
    ObjectClassHeadingComponent,
    GrantDetailsComponent,
    BillTypeComponent,
    CancleChequeComponent,
    BillHistoryComponent,
    AcceptanceCriteriaComponent,
    AuditBillsAccountantDialogComponent,
    InwardBillDialougeComponent,
    TokenSearchDialogComponent,
    VerifypopupdialogComponent,
    tokenrangeDispatch,
    CancelAndNewChequeComponent
  ],



})
export class TreasuryBillModule { }
