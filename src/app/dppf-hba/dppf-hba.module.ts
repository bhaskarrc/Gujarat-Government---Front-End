import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { CommonProtoModule } from '../common/common.module';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { DppfHbaRoutingModule } from './dppf-hba-routing.module';
import { SaveCasesComponent } from './save-cases/save-cases.component';
import { InwardDetailsComponent } from './inward-details/inward-details.component';
import { FieldCaseComponent } from './field-case/field-case.component';
import { SentCaseComponent } from './sent-case/sent-case.component';
import { TopScheduleEntryFormComponent } from './top-schedule-entry-form/top-schedule-entry-form.component';
import { VoucherEntryFormComponent } from './voucher-entry-form/voucher-entry-form.component';
import { AccountEntryWiseComponent } from './account-entry-wise/account-entry-wise.component';
import { AdjustmentAccountComponent } from './adjustment-account/adjustment-account.component';
import { OutwardCaseHbaComponent, OutwardCaseDialog } from './outward-case-hba/outward-case-hba.component';
import { OutwardDetailsHbaComponent } from './outward-details-hba/outward-details-hba.component';
import { RefundGenerationHbaComponent } from './refund-generation-hba/refund-generation-hba.component';
import { AccountStatusHbaComponent } from './account-status-hba/account-status-hba.component';
import { CashBookEntryHbaComponent } from './cash-book-entry-hba/cash-book-entry-hba.component';
import { InterestNdcDetailsHbaComponent } from './interest-ndc-details-hba/interest-ndc-details-hba.component';
import { WaiveOffDetailsHbaComponent } from './waive-off-details-hba/waive-off-details-hba.component';
import { AgcaDetailsHbaComponent } from './agca-details-hba/agca-details-hba.component';
import { YearEndProcessHbaComponent } from './year-end-process-hba/year-end-process-hba.component';
import { FreezeUnfreezScheduleHbaComponent, LockUnlockDialog } from './freeze-unfreez-schedule-hba/freeze-unfreez-schedule-hba.component';
import { AccountTransferHbaComponent } from './account-transfer-hba/account-transfer-hba.component';
import { AccountDetailsListingComponent } from './account-details-listing/account-details-listing.component';
import { AccountTransferHbaListingComponent } from './account-transfer-hba-listing/account-transfer-hba-listing.component';
import { AgcaDetailsHbaListingComponent } from './agca-details-hba-listing/agca-details-hba-listing.component';
import { CashBookEntryHbaListingComponent } from './cash-book-entry-hba-listing/cash-book-entry-hba-listing.component';
import { AdjustmentAccountListingComponent } from './adjustment-account-listing/adjustment-account-listing.component';
import { VoucherEntryFormListingComponent } from './voucher-entry-form-listing/voucher-entry-form-listing.component';
import { TopScheduleEntryListingHbaComponent } from './top-schedule-entry-listing-hba/top-schedule-entry-listing-hba.component';
// tslint:disable-next-line: max-line-length
import { FreezeUnfreezeScheduleHbaListingComponent } from './freeze-unfreeze-schedule-hba-listing/freeze-unfreeze-schedule-hba-listing.component';
import { OutwardDetailsListingHbaComponent } from './outward-details-listing-hba/outward-details-listing-hba.component';
import { WaiveOfferDetailsHbaDetailsComponent } from './waive-offer-details-hba-details/waive-offer-details-hba-details.component';
import { AccountWiseHbaListingComponent } from './account-wise-hba-listing/account-wise-hba-listing.component';
import { WorkflowDppfHbaComponent } from './workflow-dppf-hba/workflow-dppf-hba.component';
import { HbaDialogComponent } from './hba-dialog/hba-dialog.component';
import { InwardNoDialogComponent } from './inward-no-dialog/inward-no-dialog.component';
import { ScheduleEntryHbaComponent } from './schedule-entry-hba/schedule-entry-hba.component';
import { ScheduleEntryHbaListingComponent } from './schedule-entry-hba-listing/schedule-entry-hba-listing.component';
import { ObjectionReportComponent } from './objection-report/objection-report.component';
// tslint:disable-next-line: max-line-length
import { DemandOfInterestConformationLetterComponent } from './demand-of-interest-conformation-letter/demand-of-interest-conformation-letter.component';
import { InterestDialogComponent, PenaltySelect } from './demand-of-interest-conformation-letter/interest-dialog/interest-dialog.component';

import { NdcReportComponent } from './ndc-report/ndc-report.component';
import { NdcNoteComponent } from './ndc-note/ndc-note.component';
import { DemandForNdcComponent } from './demand-for-ndc/demand-for-ndc.component';
// tslint:disable-next-line: max-line-length
import { CurrentBalanceDialogComponent } from './demand-of-interest-conformation-letter/current-balance-dialog/current-balance-dialog.component';
import { NdcRequestCaseComponent } from './ndc-request-case/ndc-request-case.component';
import { InterestConformationCaseComponent } from './interest-conformation-case/interest-conformation-case.component';
import { SavedCaseDdoSideComponent, GenerateDialog } from './saved-case-ddo-side/saved-case-ddo-side.component';
// tslint:disable-next-line: max-line-length
import { InterestCalculationSheetConformationComponent } from './interest-conformation-case/interest-calculation-sheet-conformation/interest-calculation-sheet-conformation.component';
import { InterestCalculationSheetComponent } from './interest-calculation-sheet/interest-calculation-sheet.component';
// tslint:disable-next-line: max-line-length
import { InterestConformationCaseListingComponent } from './interest-conformation-case-listing/interest-conformation-case-listing.component';
import { NdcReqListingComponent } from './ndc-req-listing/ndc-req-listing.component';
import { SavedprocessListingComponent } from './savedprocess-listing/savedprocess-listing.component';
import { HbaMcaNoDialogComponent } from './hba-mca-no-dialog/hba-mca-no-dialog.component';
import { CardexSearchDialogComponent } from './cardex-search-dialog/cardex-search-dialog.component';
import { InwardDetailsDialogComponent } from './voucher-entry-form/inward-details-dialog/inward-details-dialog.component';
import { AccountWiseHbaComponent } from './account-entry-wise/account-wise-hba/account-wise-hba.component';
import { InwardDetailsListingComponent } from './inward-details-listing/inward-details-listing.component';
import { CardexNoDialogComponent } from './inward-details/cardex-no-dialog/cardex-no-dialog.component';
import { AcceptAccountScreenComponent, NotAcceptDialog, AcceptDialog } from './accept-account-screen/accept-account-screen.component';
import { BookTransferRegisterComponent } from './accept-account-screen/book-transfer-register/book-transfer-register.component';
import { ScheduleOfHbaComponent } from './accept-account-screen/schedule-of-hba/schedule-of-hba.component';
import { GoDialogComponent } from './year-end-process-hba/go-dialog/go-dialog.component';
import { EmployeeDialogBoxComponent } from './employee-dialog-box/employee-dialog-box.component';
import { ListingDialogComponent } from './listing-dialog/listing-dialog.component';
import { ScheduleNoDialogComponent } from './schedule-entry-hba/schedule-no-dialog/schedule-no-dialog.component';







@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMatSelectSearchModule,
    CommonProtoModule,
    DppfHbaRoutingModule,
  ],
  declarations: [
    AccountDetailsComponent,
    SaveCasesComponent,
    InwardDetailsComponent,
    FieldCaseComponent,
    SentCaseComponent,
    TopScheduleEntryFormComponent,
    VoucherEntryFormComponent,
    AccountEntryWiseComponent,
    AdjustmentAccountComponent,
    OutwardCaseHbaComponent,
    OutwardDetailsHbaComponent,
    RefundGenerationHbaComponent,
    AccountStatusHbaComponent,
    CashBookEntryHbaComponent,
    InterestNdcDetailsHbaComponent,
    WaiveOffDetailsHbaComponent,
    AgcaDetailsHbaComponent,
    YearEndProcessHbaComponent,
    FreezeUnfreezScheduleHbaComponent,
    AccountTransferHbaComponent,
    OutwardCaseHbaComponent,
    OutwardCaseDialog,
    AccountDetailsListingComponent,
    AccountTransferHbaListingComponent,
    AgcaDetailsHbaListingComponent,
    CashBookEntryHbaListingComponent,
    AdjustmentAccountListingComponent,
    VoucherEntryFormListingComponent,
    TopScheduleEntryListingHbaComponent,
    FreezeUnfreezeScheduleHbaListingComponent,
    OutwardDetailsListingHbaComponent,
    WaiveOfferDetailsHbaDetailsComponent,
    AccountWiseHbaListingComponent,
    WorkflowDppfHbaComponent,
    HbaDialogComponent,
    InwardNoDialogComponent,
    ScheduleEntryHbaComponent,
    ScheduleEntryHbaListingComponent,
    ObjectionReportComponent,
    DemandOfInterestConformationLetterComponent,
    InterestDialogComponent,
    NdcReportComponent,
    NdcNoteComponent,
    CurrentBalanceDialogComponent,
    NdcRequestCaseComponent,
    InterestConformationCaseComponent,
    SavedCaseDdoSideComponent,
    DemandForNdcComponent,
    InterestCalculationSheetConformationComponent,
    InterestCalculationSheetComponent,
    InterestConformationCaseListingComponent,
    NdcReqListingComponent,
    SavedprocessListingComponent,
    HbaMcaNoDialogComponent,
    CardexSearchDialogComponent,
    InwardDetailsDialogComponent,
    AccountWiseHbaComponent,
    InwardDetailsListingComponent,
    CardexNoDialogComponent,
    AcceptAccountScreenComponent,
    NotAcceptDialog,
    BookTransferRegisterComponent,
    AcceptDialog,
    ScheduleOfHbaComponent,
    GoDialogComponent,
    GenerateDialog,
    PenaltySelect,
    EmployeeDialogBoxComponent,
    LockUnlockDialog,
    ListingDialogComponent,
    ScheduleNoDialogComponent,
  ],
  entryComponents: [
    OutwardCaseDialog,
    WorkflowDppfHbaComponent,
    InterestDialogComponent,
    HbaDialogComponent,
    InwardNoDialogComponent,
    HbaMcaNoDialogComponent,
    CardexSearchDialogComponent,
    InwardDetailsDialogComponent,
    DemandOfInterestConformationLetterComponent,
    AccountWiseHbaComponent,
    CardexNoDialogComponent,
    NotAcceptDialog,
    AcceptDialog,
    CurrentBalanceDialogComponent,
    GoDialogComponent,
    GenerateDialog,
    PenaltySelect,
    EmployeeDialogBoxComponent,
    LockUnlockDialog,
    ListingDialogComponent,
    ScheduleNoDialogComponent
  ]
})
export class DppfHbaModule { }
