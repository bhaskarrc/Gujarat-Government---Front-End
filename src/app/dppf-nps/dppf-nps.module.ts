import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DppfNpsRoutingModule } from './dppf-nps-routing.module';
import { MaterialModule } from '../material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { CommonProtoModule } from '../common/common.module';
import { AnnexureOneComponent } from './annexure-one/annexure-one.component';
import { SearchEmployeeDppfNpsComponent } from './search-employee-dppf-nps/search-employee-dppf-nps.component';
import { SavedAnnexureOneComponent } from './saved-annexure-one/saved-annexure-one.component';
import { PrintAnnexureOneComponent } from './print-annexure-one/print-annexure-one.component';
import { ForwardedAnnexureOneComponent } from './forwarded-annexure-one/forwarded-annexure-one.component';
import { SavedAnnexureTwoComponent } from './saved-annexure-two/saved-annexure-two.component';
import { AnnexureTwoComponent } from './annexure-two/annexure-two.component';
import { ForwardedAnnexureTwoComponent } from './forwarded-annexure-two/forwarded-annexure-two.component';
import { SavedAnnexureTwoKComponent } from './saved-annexure-two-k/saved-annexure-two-k.component';
import { AnnexureTwoKComponent } from './annexure-two-k/annexure-two-k.component';
import { ForwardedAnnexureTwoKComponent } from './forwarded-annexure-two-k/forwarded-annexure-two-k.component';
import { PrintAnnexureTwoComponent } from './print-annexure-two/print-annexure-two.component';
import { PrintAnnexureTwoKComponent } from './print-annexure-two-k/print-annexure-two-k.component';
import { AccountGenerationComponent } from './account-generation/account-generation.component';
import { ReceivedAnnexureTwoKComponent } from './received-annexure-two-k/received-annexure-two-k.component';
import { AnnexureTwoKNpsComponent } from './annexure-two-k-nps/annexure-two-k-nps.component';
import { NpsInwardDetailsComponent } from './nps-inward-details/nps-inward-details.component';
import { SearchInwardNoDppfNpsComponent } from './search-inward-no-dppf-nps/search-inward-no-dppf-nps.component';
import { SearchPpaDppfNpsComponent } from './search-ppa-dppf-nps/search-ppa-dppf-nps.component';
import { SearchCardexDppfNpsComponent } from './search-cardex-dppf-nps/search-cardex-dppf-nps.component';
import { NpsOutwardDetailsComponent } from './nps-outward-details/nps-outward-details.component';
import { NpsReceivedTwoKListingComponent } from './nps-received-two-k-listing/nps-received-two-k-listing.component';
import { NpsScheduleEntryComponent } from './nps-schedule-entry/nps-schedule-entry.component';
import { NpsInwardTopScheduleComponent } from './nps-inward-top-schedule/nps-inward-top-schedule.component';
import { NpsVoucherEntryComponent } from './nps-voucher-entry/nps-voucher-entry.component';
import { NpsAccountWiseEntryComponent } from './nps-account-wise-entry/nps-account-wise-entry.component';
import { UpClearAccountWisePostingComponent } from './up-clear-account-wise-posting/up-clear-account-wise-posting.component';
import { NpsAccountTransferComponent } from './nps-account-transfer/nps-account-transfer.component';
import { NpsAccountWiseRemovalComponent } from './nps-account-wise-removal/nps-account-wise-removal.component';
import { NpsAccountStatusComponent } from './nps-account-status/nps-account-status.component';
import { NpsPranMappingComponent } from './nps-pran-mapping/nps-pran-mapping.component';
import { NpsGsfsDataEntryComponent } from './nps-gsfs-data-entry/nps-gsfs-data-entry.component';
import { NpsPranUploadComponent } from './nps-pran-upload/nps-pran-upload.component';
import { NpsGenerateContributionFileComponent } from './nps-generate-contribution-file/nps-generate-contribution-file.component';
import { NpsTransactionIdMappingComponent } from './nps-transaction-id-mapping/nps-transaction-id-mapping.component';
import { NpsLegacyUploadComponent } from './nps-legacy-upload/nps-legacy-upload.component';
import { NpsYearEndProcessComponent } from './nps-year-end-process/nps-year-end-process.component';
import { NpsDdoSideWithdrawalComponent } from './nps-ddo-side-withdrawal/nps-ddo-side-withdrawal.component';
import { NpsSavedWithdrawalCasesComponent } from './nps-saved-withdrawal-cases/nps-saved-withdrawal-cases.component';
import { NpsSentWithdrawalCasesComponent } from './nps-sent-withdrawal-cases/nps-sent-withdrawal-cases.component';
import { NpsReceivedWithdrawalCasesSubAccoutantComponent } from './nps-received-withdrawal-cases-sub-accoutant/nps-received-withdrawal-cases-sub-accoutant.component';
import { NpsReceivedWithdrawalCasesSubAccoutantEditComponent } from './nps-received-withdrawal-cases-sub-accoutant-edit/nps-received-withdrawal-cases-sub-accoutant-edit.component';
import { NpsSentWithdrawalCasesSubAccoutantComponent } from './nps-sent-withdrawal-cases-sub-accoutant/nps-sent-withdrawal-cases-sub-accoutant.component';
import { NpsReceivedWithdrawalCasesAccoutantComponent } from './nps-received-withdrawal-cases-accoutant/nps-received-withdrawal-cases-accoutant.component';
import { NpsReceivedWithdrawalCasesAccoutantEditComponent } from './nps-received-withdrawal-cases-accoutant-edit/nps-received-withdrawal-cases-accoutant-edit.component';
import { NpsSentWithdrawalCasesAccoutantComponent } from './nps-sent-withdrawal-cases-accoutant/nps-sent-withdrawal-cases-accoutant.component';
import { NpsReceivedWithdrawalCasesAccoutOfficerComponent } from './nps-received-withdrawal-cases-accout-officer/nps-received-withdrawal-cases-accout-officer.component';
import { NpsSentWithdrawalCasesAccoutOfficerComponent } from './nps-sent-withdrawal-cases-accout-officer/nps-sent-withdrawal-cases-accout-officer.component';
import { NpsInwardDetailsListingComponent } from './nps-inward-details-listing/nps-inward-details-listing.component';
import { NpsMissingAccountWiseEntryListingComponent } from './nps-missing-account-wise-entry-listing/nps-missing-account-wise-entry-listing.component';
import { NpsAccountGenerationDetailsListingComponent } from './nps-account-generation-details-listing/nps-account-generation-details-listing.component';
import { NpsAccountWiseEntryListingComponent } from './nps-account-wise-entry-listing/nps-account-wise-entry-listing.component';
import { NpsOutwardDetailsListingComponent } from './nps-outward-details-listing/nps-outward-details-listing.component';
import { NpsTopScheduleEntryListingComponent } from './nps-top-schedule-entry-listing/nps-top-schedule-entry-listing.component';
import { NpsVoucherEntryListingComponent } from './nps-voucher-entry-listing/nps-voucher-entry-listing.component';
import { NpsAccountAdjustmentDetailListingComponent } from './nps-account-adjustment-detail-listing/nps-account-adjustment-detail-listing.component';
import { NpsAcceptAccountScreenComponent } from './nps-accept-account-screen/nps-accept-account-screen.component';
import { NpsOutwardCasesListingComponent } from './nps-outward-cases-listing/nps-outward-cases-listing.component';
import { WorkflowDetailsDppfNpsComponent } from './workflow-details-dppf-nps/workflow-details-dppf-nps.component';
import { NpsDdoSideWithdrawalPrintComponent } from './nps-ddo-side-withdrawal/nps-ddo-side-withdrawal-print/nps-ddo-side-withdrawal-print.component';
import { AnnexureThreeScheduleComponent } from './annexure-three-schedule/annexure-three-schedule.component';
import { AcceptAccountScreenComponent, NotAcceptDialog, AcceptDialog } from './accept-account-screen/accept-account-screen.component';
import { BookTransferRegisterComponent } from './accept-account-screen/book-transfer-register/book-transfer-register.component';
import { PrintForwardingAnnexureTwoComponent } from './annexure-two/print-forwarding-annexure-two/print-forwarding-annexure-two.component';
import { PrintForwardingAnnexureTwoKComponent } from './annexure-two-k/print-forwarding-annexure-two-k/print-forwarding-annexure-two-k.component';
import { GoDialogNpsComponent } from './nps-year-end-process/go-dialog-nps/go-dialog-nps.component';
import { NewLegacyUploadTrancationComponent } from './new-legacy-upload-trancation/new-legacy-upload-trancation.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMatSelectSearchModule,
    CommonProtoModule,
    DppfNpsRoutingModule
  ],
  declarations: [
    AnnexureOneComponent,
    SearchEmployeeDppfNpsComponent,
    SavedAnnexureOneComponent,
    PrintAnnexureOneComponent,
    ForwardedAnnexureOneComponent,
    SavedAnnexureTwoComponent,
    AnnexureTwoComponent,
    ForwardedAnnexureTwoComponent,
    SavedAnnexureTwoKComponent,
    AnnexureTwoKComponent,
    ForwardedAnnexureTwoKComponent,
    PrintAnnexureTwoComponent,
    PrintAnnexureTwoKComponent,
    AccountGenerationComponent,
    ReceivedAnnexureTwoKComponent,
    AnnexureTwoKNpsComponent,
    NpsInwardDetailsComponent,
    SearchInwardNoDppfNpsComponent,
    SearchPpaDppfNpsComponent,
    SearchCardexDppfNpsComponent,
    NpsOutwardDetailsComponent,
    NpsReceivedTwoKListingComponent,
    NpsScheduleEntryComponent,
    NpsInwardTopScheduleComponent,
    NpsVoucherEntryComponent,
    NpsAccountWiseEntryComponent,
    UpClearAccountWisePostingComponent,
    NpsAccountTransferComponent,
    NpsAccountWiseRemovalComponent,
    NpsAccountStatusComponent,
    NpsPranMappingComponent,
    NpsGsfsDataEntryComponent,
    NpsPranUploadComponent,
    NpsGenerateContributionFileComponent,
    NpsTransactionIdMappingComponent,
    NpsLegacyUploadComponent,
    NpsYearEndProcessComponent,
    NpsDdoSideWithdrawalComponent,
    NpsSavedWithdrawalCasesComponent,
    NpsSentWithdrawalCasesComponent,
    NpsReceivedWithdrawalCasesSubAccoutantComponent,
    NpsReceivedWithdrawalCasesSubAccoutantEditComponent,
    NpsSentWithdrawalCasesSubAccoutantComponent,
    NpsReceivedWithdrawalCasesAccoutantComponent,
    NpsReceivedWithdrawalCasesAccoutantEditComponent,
    NpsSentWithdrawalCasesAccoutantComponent,
    NpsReceivedWithdrawalCasesAccoutOfficerComponent,
    NpsSentWithdrawalCasesAccoutOfficerComponent,
    NpsInwardDetailsListingComponent,
    NpsMissingAccountWiseEntryListingComponent,
    NpsAccountGenerationDetailsListingComponent,
    NpsAccountWiseEntryListingComponent,
    NpsOutwardDetailsListingComponent,
    NpsTopScheduleEntryListingComponent,
    NpsVoucherEntryListingComponent,
    NpsAccountAdjustmentDetailListingComponent,
    NpsAcceptAccountScreenComponent,
    NpsOutwardCasesListingComponent,
    WorkflowDetailsDppfNpsComponent,
    NpsDdoSideWithdrawalPrintComponent,
    AnnexureThreeScheduleComponent,
    AcceptAccountScreenComponent,
    NotAcceptDialog,
    AcceptDialog,
    BookTransferRegisterComponent,
    PrintForwardingAnnexureTwoComponent,
    PrintForwardingAnnexureTwoKComponent,
    GoDialogNpsComponent,
    NewLegacyUploadTrancationComponent,
  ],
  entryComponents: [
    SearchEmployeeDppfNpsComponent,
    SearchInwardNoDppfNpsComponent,
    SearchPpaDppfNpsComponent,
    SearchCardexDppfNpsComponent,
    WorkflowDetailsDppfNpsComponent,
    NotAcceptDialog,
    AcceptDialog,
    GoDialogNpsComponent,
  ]
})
export class DppfNpsModule { }
