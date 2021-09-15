import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DppfRoutingModule } from './dppf-routing.module';
import { CommonProtoModule } from '../common/common.module';
import { MaterialModule } from '../material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatRadioModule } from '@angular/material/radio';
import { OnlinePensionCaseComponent } from './online-pension-case/online-pension-case.component';
import { SentPensionCaseComponent } from './sent-pension-case/sent-pension-case.component';
import { OutwardPensionCasesComponent } from './outward-pension-cases/outward-pension-cases.component';
import { OutwardedPensionCasesListComponent } from './outwarded-pension-cases-list/outwarded-pension-cases-list.component';
// tslint:disable-next-line: max-line-length
import { MasterRateUpdationScreenComponent, TiRateTypeDialogComponent } from './master-rate-updation-screen/master-rate-updation-screen.component';
import { ReceivedOnlinePensionCaseComponent } from './received-online-pension-case/received-online-pension-case.component';
import { InwardPensionCaseComponent } from './inward-pension-case/inward-pension-case.component';
import { InwardOutwardLetterScreenComponent } from './inward-outward-letter-screen/inward-outward-letter-screen.component';
import { InwardOutwardLetterScreenListComponent } from './inward-outward-letter-screen-list/inward-outward-letter-screen-list.component';
import { PensionCaseLetterComponent } from './pension-case-letter/pension-case-letter.component';
import {
  AuditorInwardDetailsComponent,
  PensionablePayDialog,
  SrDialog
} from './auditor-inward-details/auditor-inward-details.component';
import { AuditorSavedCasesComponent } from './auditor-saved-cases/auditor-saved-cases.component';
import { WorkflowDetailsDppfComponent } from './workflow-details-dppf/workflow-details-dppf.component';
import { OfficeSuperintendentSavedCasesComponent } from './office-superintendent-saved-cases/office-superintendent-saved-cases.component';
import { AccountOfficerSavedCasesComponent } from './account-officer-saved-cases/account-officer-saved-cases.component';
import { DyDirectorSavedCasesComponent } from './dy-director-saved-cases/dy-director-saved-cases.component';
import { DirectorSavedCasesComponent } from './director-saved-cases/director-saved-cases.component';
import { RtiVigilanceBranchComponent, RtiApplicationNo } from './rti-vigilance-branch/rti-vigilance-branch.component';
import { SavedOnlinePensionCaseComponent } from './saved-online-pension-case/saved-online-pension-case.component';
import { SentPensionCaseListingComponent } from './sent-pension-case-listing/sent-pension-case-listing.component';

import {
  CorrectionComponent,
  InwardOutwardDetailsComponent
} from './inward-outward-details/inward-outward-details.component';
import { SavedCasesPaComputerComponent } from './saved-cases-pa-computer/saved-cases-pa-computer.component';
import {
  RecievedOtherStatePensionCaseToPpoComponent
} from './recieved-other-state-pension-case-to-ppo/recieved-other-state-pension-case-to-ppo.component';
import {
  RecievedOtherStatePensionCaseComponent,
  InwardDetailsDialogComponent
} from './recieved-other-state-pension-case/recieved-other-state-pension-case.component';
import { CorrectionMemoPaComputerComponent } from './correction-memo-pa-computer/correction-memo-pa-computer.component';

import {
  InwardOutwardLetterScreenListInwardnoComponent
} from './inward-outward-letter-screen-list-inwardno/inward-outward-letter-screen-list-inwardno.component';

import {
  PensionCaseLetterSixthPayCommissionComponent
} from './pension-case-letter-sixth-pay-commission/pension-case-letter-sixth-pay-commission.component';
import { InternalAuditBranchComponent } from './internal-audit-branch/internal-audit-branch.component';
import { SavedCasesPaOneTwoComponent } from './saved-cases-pa-one-two/saved-cases-pa-one-two.component';
import {
  DeletePensionCaseComponent,
  DeleteConfirmModelComponent,
  OpenDelInwardDialogComponent
} from './delete-pension-case/delete-pension-case.component';
import { JrClerkPrBranchComponent, FwdJrClerkPrBranchDialogComponent } from './jr-clerk-pr-branch/jr-clerk-pr-branch.component';
import { ObjectionComponent } from './objection/objection.component';

import { PrintStickerComponent } from './print-sticker/print-sticker.component';
import { CorrectionMemoInwardPopupComponent } from './correction-memo-inward-popup/correction-memo-inward-popup.component';
import { DppfDialogBoxComponent } from './dppf-dialog-box/dppf-dialog-box.component';
import { ReceivedCaseFromToPpoListingComponent } from './received-case-from-to-ppo-listing/received-case-from-to-ppo-listing.component';
import { ReceivedCloseCaseListingComponent } from './received-close-case-listing/received-close-case-listing.component';
import { DppfOnlinePensionCaseComponent } from './dppf-online-pension-case/dppf-online-pension-case.component';
import { DppfSearchEmployeeNumberComponent } from './dppf-search-employee-number/dppf-search-employee-number.component';
import { DppfOnlinePensionCasePrintComponent } from './dppf-online-pension-case-print/dppf-online-pension-case-print.component';
import { SearchInwardNoDppfComponent } from './search-inward-no-dppf/search-inward-no-dppf.component';
import { InwardOutwardListingComponent } from './inward-outward-listing/inward-outward-listing.component';
import { SearchReferenceNumberDppfComponent } from './search-reference-number-dppf/search-reference-number-dppf.component';
import { RtiVigilanceBranchListingComponent } from './rti-vigilance-branch/rti-vigilance-branch-listing/rti-vigilance-branch-listing.component';

@NgModule({
  imports: [
    CommonProtoModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMatSelectSearchModule,
    DppfRoutingModule,
    MatRadioModule
  ],
  declarations: [
    OnlinePensionCaseComponent,
    InwardPensionCaseComponent,
    InwardOutwardLetterScreenComponent,
    SentPensionCaseComponent,
    InwardOutwardLetterScreenListComponent,
    OnlinePensionCaseComponent,
    PensionCaseLetterComponent,
    OnlinePensionCaseComponent,
    AuditorInwardDetailsComponent,
    PensionablePayDialog,
    SrDialog,
    AuditorSavedCasesComponent,
    OutwardPensionCasesComponent,
    OutwardedPensionCasesListComponent,
    MasterRateUpdationScreenComponent,
    ReceivedOnlinePensionCaseComponent,
    WorkflowDetailsDppfComponent,
    InwardOutwardDetailsComponent,
    CorrectionComponent,
    OfficeSuperintendentSavedCasesComponent,
    AccountOfficerSavedCasesComponent,
    DyDirectorSavedCasesComponent,
    DirectorSavedCasesComponent,
    RtiVigilanceBranchComponent,
    SavedOnlinePensionCaseComponent,
    SentPensionCaseListingComponent,
    SavedCasesPaComputerComponent,
    RecievedOtherStatePensionCaseToPpoComponent,
    RecievedOtherStatePensionCaseComponent,
    InwardDetailsDialogComponent,
    CorrectionMemoPaComputerComponent,
    InwardOutwardLetterScreenListInwardnoComponent,
    PensionCaseLetterSixthPayCommissionComponent,
    InternalAuditBranchComponent,
    SavedCasesPaOneTwoComponent,
    DeletePensionCaseComponent,
    DeleteConfirmModelComponent,
    OpenDelInwardDialogComponent,
    JrClerkPrBranchComponent,
    FwdJrClerkPrBranchDialogComponent,
    ObjectionComponent,
    CorrectionMemoInwardPopupComponent,
    PrintStickerComponent,
    DppfDialogBoxComponent,
    ReceivedCaseFromToPpoListingComponent,
    ReceivedCloseCaseListingComponent,
    DppfOnlinePensionCaseComponent,
    DppfSearchEmployeeNumberComponent,
    DppfOnlinePensionCasePrintComponent,
    SearchInwardNoDppfComponent,
    RtiApplicationNo,
    InwardOutwardListingComponent,
    TiRateTypeDialogComponent,
    SearchReferenceNumberDppfComponent,
    RtiVigilanceBranchListingComponent,
  ],
  entryComponents: [
    PensionablePayDialog,
    AuditorInwardDetailsComponent,
    WorkflowDetailsDppfComponent,
    SrDialog,
    InwardPensionCaseComponent,
    CorrectionComponent,
    OnlinePensionCaseComponent,
    InwardDetailsDialogComponent,
    DeleteConfirmModelComponent,
    OpenDelInwardDialogComponent,
    FwdJrClerkPrBranchDialogComponent,
    CorrectionMemoInwardPopupComponent,
    DppfSearchEmployeeNumberComponent,
    SearchInwardNoDppfComponent,
    RtiApplicationNo,
    TiRateTypeDialogComponent,
    SearchReferenceNumberDppfComponent,
  ],
})
export class DppfModule { }
