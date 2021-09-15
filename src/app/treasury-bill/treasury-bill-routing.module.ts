import { InwardBillDialougeComponent } from './inward-bill-tracking/inward-bill-dialouge/inward-bill-dialouge.component';
import { InwardBillTrackingComponent } from './inward-bill-tracking/inward-bill-tracking.component';
import { DispatchLevelTrackerComponent } from './dispatch-level-tracker/dispatch-level-tracker.component';
import { TransferDocumentComponent } from './cheque/transfer-document/transfer-document.component';

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TokenMasterComponent } from './master/token-master/token-master.component';
import { RangeAllocationMasterComponent } from './master/range-allocation-master/range-allocation-master.component';
import { CounterAllocationTokenComponent } from './inward/counter-allocation-token/counter-allocation-token.component';
import { CounterAllocationInwardComponent } from './inward/counter-allocation-inward/counter-allocation-inward.component';
import { InwardBillComponent } from './inward/inward-bill/inward-bill.component';
import { VitoReportComponent } from './inward/vito-report/vito-report.component';
import { SavedBillComponent } from './inward/saved-bill/saved-bill.component';
import { BillPreprationFormComponent } from './inward/saved-bill/bill-prepration-form/bill-prepration-form.component';
// import { CardexBillPreprationFormComponent } from './cardex/cardex-bill-prepration-form/cardex-bill-prepration-form.component';
import { CardexVerificationComponent } from './cardex/cardex-verification/cardex-verification.component';
import { ReprintTokenComponent } from './inward/reprint-token/reprint-token.component';
import { ToLevelComponent } from './cardex/mapping-process/to-level/to-level.component';
import { DdoLevelComponent } from './cardex/mapping-process/ddo-level/ddo-level.component';
import { DispatchFromCounterComponent } from './dispatch-from-counter/dispatch-from-counter.component';
import { EpaymentAuthorizeDdoComponent } from './authorization/epayment-authorize-ddo/epayment-authorize-ddo.component';
import { EpaymentAuthorizeToComponent } from './authorization/epayment-authorize-to/epayment-authorize-to.component';
// tslint:disable-next-line: no-unused-expression
import { ChequePreprationComponent } from './cheque/cheque-prepration/cheque-prepration.component';
import { ChequePreparationFirstLevelComponent } from './cheque/cheque-preparation-first-level/cheque-preparation-first-level.component';
import { ChequePrintingComponent } from './cheque/cheque-printing/cheque-printing.component';
import { WrittenChequeComponent } from './cheque/written-cheque/written-cheque.component';
import { ChequePrintingGenerateChequeComponent } from './cheque/cheque-printing-generate-cheque/cheque-printing-generate-cheque.component';
import { PrintedChequeComponent } from './cheque/printed-cheque/printed-cheque.component';
import { GenerateEpaymentComponent } from './cheque/generate-epayment/generate-epayment.component';
import { EpaymentInCustodyComponent } from './cheque/epayment-in-custody/epayment-in-custody.component';
import { ChequesPrintingComponent } from './cheque/cheques-printing/cheques-printing.component';


import { AuditBillsAuditorComponent } from './audit/audit-bills-auditor/audit-bills-auditor.component';
import { AuditBillsAccountantComponent } from './audit/audit-bills-accountant/audit-bills-accountant.component';
import { AuditBillsATOComponent } from './audit/audit-bills-ato/audit-bills-ato.component';
import { AuditBillsTOComponent } from './audit/audit-bills-to/audit-bills-to.component';
import { AuditBillsApprovedRejectComponent } from './audit/audit-bills-approved-reject/audit-bills-approved-reject.component';
import { AuditorMappingComponent } from './audit/auditor-mapping/auditor-mapping.component';
import { DdoLevelListComponent } from './cardex/mapping-process/ddo-level-list/ddo-level-list.component';
import { CounterAllocationOutwardComponent } from './outward/counter-allocation-outward/counter-allocation-outward.component';
import { ObjectionMasterComponent } from './master/objection-master/objection-master.component';
import { InwardChequeComponent } from './inward/inward-cheque/inward-cheque.component';
import { EpaymentAutorizeDdoDetailsComponent } from './authorization/epayment-autorize-ddo-details/epayment-autorize-ddo-details.component';
import { EpaymentAutorizeToDetailsComponent } from './authorization/epayment-autorize-to-details/epayment-autorize-to-details.component';
import { UpdateAdviceDateComponent } from './cheque/update-advice-date/update-advice-date.component';
import { InwardPhysicalBillComponent } from './inward/inward-physical-bill/inward-physical-bill.component';
import { ChequeReprintComponent } from './cheque/cheque-reprint/cheque-reprint.component';
import { ChequeForCorrectionComponent } from './cheque/cheque-for-correction/cheque-for-correction.component';
import { BillForCorrectionComponent } from './cheque/bill-for-correction/bill-for-correction.component';
import { SendToBookComponent } from './dispatch-from-counter/send-to-book/send-to-book.component';
import { PrintNewChequeComponent } from './cheque/print-new-cheque/print-new-cheque.component';
import { EpaymentCancellationToComponent } from './authorization/epayment-cancellation-to/epayment-cancellation-to.component';
import { AcceptanceCriteriaComponent } from './audit/audit-bills-auditor/acceptance-criteria/acceptance-criteria.component';
// tslint:disable-next-line: max-line-length
import { InwardPhysicalBillAuditLevelComponent } from './inward/inward-physical-bill-audit-level/inward-physical-bill-audit-level.component';
import { CancelAndNewChequeComponent } from './dispatch-from-counter/cancel-and-new-cheque/cancel-and-new-cheque.component';

const routes: Routes = [

  {
    path: 'range-allocation-master',
    component: RangeAllocationMasterComponent
  },

  {
    path: 'token-master',
    component: TokenMasterComponent
  },
  {
    path: 'counter-allocation-inward',
    component: CounterAllocationInwardComponent
  },

  {
    path: 'counter-allocation-token',
    component: CounterAllocationTokenComponent
  },
  {
    path: 'inward-bill',
    component: InwardBillComponent
  },
  {
    path: 'vitoReport',
    component: VitoReportComponent
  },
  {
    path: 'saved-bill',
    component: SavedBillComponent
  },
  {
    path: 'saved-bill/bill-prepration-fom',
    component: BillPreprationFormComponent
  },

  {
    path: 'cardex',
    component: CardexVerificationComponent
  },
  {
    path: 'token-print',
    component: ReprintTokenComponent
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
    path: 'cheque-preparation',
    component: ChequePreprationComponent
  },
  {
    path: 'cheque-preparation-1st-level',
    component: ChequePreparationFirstLevelComponent
  },
  {
    path: 'written-cheque',
    component: WrittenChequeComponent
  },
  {
    path: 'cheque-printing',
    component: ChequePrintingComponent
  },
  {
    path: 'cheques-printing',
    component: ChequesPrintingComponent
  },


  {
    path: 'cheque-printing-generate-cheque',
    component: ChequePrintingGenerateChequeComponent
  },

  {
    path: 'printed-cheque',
    component: PrintedChequeComponent
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
    path: 'auditbills-auditor',
    component: AuditBillsAuditorComponent
  },
  {
    path: 'auditbills-accountant',
    component: AuditBillsAccountantComponent
  },
  {
    path: 'auditbills-ato',
    component: AuditBillsATOComponent
  },
  {
    path: 'auditbills-to',
    component: AuditBillsTOComponent
  },
  {
    path: 'auditbills-approve-reject',
    component: AuditBillsApprovedRejectComponent
  },
  {
    path: 'auditor-mapping',
    component: AuditorMappingComponent
  },
  {
    path: 'dispatch-from-counter',
    component: DispatchFromCounterComponent
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
    path: 'ddo-level-list',
    component: DdoLevelListComponent
  },
  {
    path: 'objection-master',
    component: ObjectionMasterComponent
  },
  {
    path: 'counter-allocation-outward',
    component: CounterAllocationOutwardComponent
  },
  {
    path: 'inward-cheque',
    component: InwardChequeComponent
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
    path: 'cheque-update-advice-date',
    component: UpdateAdviceDateComponent
  },
  {
    path: 'inward-physical-bill',
    component: InwardPhysicalBillComponent
  },
  {
    path: 'cheque-reprint',
    component: ChequeReprintComponent

  },
  {
    path: 'Cheque-For-Correction',
    component: ChequeForCorrectionComponent
  },
  {
    path: 'Bill-For-Correction',
    component: BillForCorrectionComponent
  },
  {
    path: 'send-to-book',
    component: SendToBookComponent
  },

  {
    path: 'print-New-Cheques',
    component: PrintNewChequeComponent
  },
  {
    path: 'authorization/epayment-cancel-to',
    component: EpaymentCancellationToComponent
  },
  {
    path: 'inward-physical-bill-audit-level',
    component: InwardPhysicalBillAuditLevelComponent
  },
  {
    path: 'dispatch-level-tracker',
    component: DispatchLevelTrackerComponent
  },
  {
    path: 'inward-bill-tracking',
    component: InwardBillTrackingComponent
  },
  {
    path: 'inward-bill-dialouge',
    component: InwardBillDialougeComponent
  },
  {
    path: 'cancel-and-new-cheque',
    component: CancelAndNewChequeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TreasuryBillRoutingModule { }
