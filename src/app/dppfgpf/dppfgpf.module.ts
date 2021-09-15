import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InwardScreenComponent, InwardScreenDialog, AcceptInwardScreenDialog } from './inward-screen/inward-screen.component';
import { DppfgpfRoutingModule } from './dppfgpf-routing.module';
import { CommonProtoModule } from '../common/common.module';
import { MaterialModule } from '../material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { InwardScreenListingComponent } from './inward-screen-listing/inward-screen-listing.component';
// tslint:disable-next-line: max-line-length
import { AccountGenerationDetailsComponent, GPFAccountDetailsDialog } from './account-generation-details/account-generation-details.component';
// tslint:disable-next-line: max-line-length
import { AccountGenerationDetailsListingComponent } from './account-generation-details-listing/account-generation-details-listing.component';
import { TopScheduleEntryComponent, TopScheduleDialog, AlertMessageDialogComponent } from './top-schedule-entry/top-schedule-entry.component';
import { VoucherEntryComponent, VoucherEntryDialog } from './voucher-entry/voucher-entry.component';
import { VoucherEntryListingComponent } from './voucher-entry-listing/voucher-entry-listing.component';
import { AccountWiseEntryComponent, AccountWiseEntryDialog, GpfDialog } from './account-wise-entry/account-wise-entry.component';
import { OutwardDetailsComponent, OutwardDetailsDialog } from './outward-details/outward-details.component';
// tslint:disable-next-line: max-line-length
import { MissingAccountWiseEntryComponent, MissingAccountWiseEntryDialog } from './missing-account-wise-entry/missing-account-wise-entry.component';
import { AgcaDetailsComponent, AgcaDetailsDialog } from './agca-details/agca-details.component';
import { AgcaDetailsListingComponent } from './agca-details-listing/agca-details-listing.component';
import { MissingAccountWiseEntryListingComponent } from './missing-account-wise-entry-listing/missing-account-wise-entry-listing.component';
import { YearEndProcessComponent } from './year-end-process/year-end-process.component';
// tslint:disable-next-line: max-line-length
import { DeleteGpfYearEndProcessComponent, DeleteGpfYearEndProcessDialog } from './delete-gpf-year-end-process/delete-gpf-year-end-process.component';
import { FreezeUnfreezeScheduleComponent } from './freeze-unfreeze-schedule/freeze-unfreeze-schedule.component';
import { FreezeUnfreezeScheduleListingComponent } from './freeze-unfreeze-schedule-listing/freeze-unfreeze-schedule-listing.component';
import { AccountWiseEntryListingComponent } from './account-wise-entry-listing/account-wise-entry-listing.component';
import { TopScheduleEntryListingComponent } from './top-schedule-entry-listing/top-schedule-entry-listing.component';
import { OutwardDetailsListingComponent } from './outward-details-listing/outward-details-listing.component';
import { AccountAdjustmentDetailComponent, AccountAdjustmentDialog } from './account-adjustment-detail/account-adjustment-detail.component';
import { AcceptAccountScreenComponent, NotAcceptDialog } from './accept-account-screen/accept-account-screen.component';
import { LinkInsuranceDetailComponent, LinkInsuranceDialog } from './link-insurance-detail/link-insurance-detail.component';
// tslint:disable-next-line: max-line-length
import { AccountTransferComponent, AccountWiseEntryTransferDialog, AccountTransferInwardDialog, GpfTableDialog } from './account-transfer/account-transfer.component';
import { OutwardCasesComponent, OutwardCasesDialog } from './outward-cases/outward-cases.component';
import { CaseMovedToSavedCaseComponent, SearchDialog, InwardDialog } from './case-moved-to-saved-case/case-moved-to-saved-case.component';
import { AccountAdjustmentDetailListingComponent } from './account-adjustment-detail-listing/account-adjustment-detail-listing.component';
import { AuditorMappingComponent } from './auditor-mapping/auditor-mapping.component';
import { WorkflowDetailsAuditorMappingComponent } from './workflow-details-auditor-mapping/workflow-details-auditor-mapping.component';
// tslint:disable-next-line: max-line-length
import { PrepareOnlineFinalPaymentCaseComponent, OpenAccountDetaiOpenDialog, OpenAccountDetaiDialog } from './prepare-online-final-payment-case/prepare-online-final-payment-case.component';
// tslint:disable-next-line: max-line-length
import { PrepareOnlineFinalPaymentCaseDppfComponent } from './prepare-online-final-payment-case-dppf/prepare-online-final-payment-case-dppf.component';
// tslint:disable-next-line: max-line-length
import { PrepareOnlineFinalPaymentCaseListingComponent } from './prepare-online-final-payment-case-listing/prepare-online-final-payment-case-listing.component';
import { MasterRateUpdationComponent } from './master-rate-updation/master-rate-updation.component';
import { BookTransferRegisterComponent } from './book-transfer-register/book-transfer-register.component';
import { SupritendentLevelComponent, SLAccountDetailsDialog } from './supritendent-level/supritendent-level.component';
import { DeputyDirectorLevelComponent, DDLAccountDetailsDialog } from './deputy-director-level/deputy-director-level.component';
import { AccountOfficerLevelComponent, AOLAccountDetailsDialog } from './account-officer-level/account-officer-level.component';
import { DeputyDirectorLevelListingComponent } from './deputy-director-level-listing/deputy-director-level-listing.component';
import { ScheduleOfEightZeroZeroNineAccountPostingProcessComponent } from './schedule-of-eight-zero-zero-nine-account-posting-process/schedule-of-eight-zero-zero-nine-account-posting-process.component';
import { GpfInterestCalculationComponent } from './gpf-interest-calculation/gpf-interest-calculation.component';
import { SuccessfulSubmitionComponent } from './successful-submition/successful-submition.component';





@NgModule({
  imports: [

    DppfgpfRoutingModule,
    CommonProtoModule,
    MaterialModule,
    NgxMatSelectSearchModule,
    MatRadioModule,
    MatDatepickerModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatSelectModule,


  ],
  declarations: [
    InwardScreenComponent,
    InwardScreenListingComponent,
    AccountGenerationDetailsComponent,
    AccountGenerationDetailsListingComponent,
    GPFAccountDetailsDialog,
    SLAccountDetailsDialog,
    AOLAccountDetailsDialog,
    DDLAccountDetailsDialog,
    TopScheduleEntryComponent,
    TopScheduleDialog,
    VoucherEntryComponent,
    VoucherEntryDialog,
    VoucherEntryListingComponent,
    AccountWiseEntryComponent,
    AccountWiseEntryDialog,
    OutwardDetailsComponent,
    OutwardDetailsDialog,
    MissingAccountWiseEntryComponent,
    MissingAccountWiseEntryDialog,
    AgcaDetailsComponent,
    AgcaDetailsDialog,
    AgcaDetailsListingComponent,
    MissingAccountWiseEntryListingComponent,
    YearEndProcessComponent,
    DeleteGpfYearEndProcessComponent,
    FreezeUnfreezeScheduleComponent,
    FreezeUnfreezeScheduleListingComponent,
    AccountWiseEntryListingComponent,
    TopScheduleEntryListingComponent,
    OutwardDetailsListingComponent,
    AccountAdjustmentDetailComponent,
    AccountAdjustmentDialog,
    AcceptAccountScreenComponent,
    LinkInsuranceDetailComponent,
    AccountTransferComponent,
    OutwardCasesComponent,
    CaseMovedToSavedCaseComponent,
    SearchDialog,
    InwardDialog,
    AccountWiseEntryTransferDialog,
    LinkInsuranceDialog,
    OutwardCasesDialog,
    AccountTransferInwardDialog,
    GpfDialog,
    AccountAdjustmentDetailListingComponent,
    AuditorMappingComponent,
    WorkflowDetailsAuditorMappingComponent,
    GpfTableDialog,
    PrepareOnlineFinalPaymentCaseComponent,
    PrepareOnlineFinalPaymentCaseDppfComponent,
    PrepareOnlineFinalPaymentCaseListingComponent,
    OpenAccountDetaiOpenDialog,
    OpenAccountDetaiDialog,
    InwardScreenDialog,
    MasterRateUpdationComponent,
    BookTransferRegisterComponent,
    DeleteGpfYearEndProcessDialog,
    SupritendentLevelComponent,
    DeputyDirectorLevelComponent,
    AccountOfficerLevelComponent,
    DeputyDirectorLevelListingComponent,
    NotAcceptDialog,
    ScheduleOfEightZeroZeroNineAccountPostingProcessComponent,
    AcceptInwardScreenDialog,
    GpfInterestCalculationComponent,
    AlertMessageDialogComponent,
    SuccessfulSubmitionComponent
  ],
  entryComponents: [
    GPFAccountDetailsDialog,
    SLAccountDetailsDialog,
    AOLAccountDetailsDialog,
    DDLAccountDetailsDialog,
    TopScheduleDialog,
    VoucherEntryDialog,
    AccountWiseEntryDialog,
    OutwardDetailsDialog,
    MissingAccountWiseEntryDialog,
    AgcaDetailsDialog,
    AccountAdjustmentDialog,
    SearchDialog,
    InwardDialog,
    AccountWiseEntryTransferDialog,
    LinkInsuranceDialog,
    OutwardCasesDialog,
    AccountTransferInwardDialog,
    GpfDialog,
    WorkflowDetailsAuditorMappingComponent,
    GpfTableDialog,
    OpenAccountDetaiOpenDialog,
    OpenAccountDetaiDialog,
    InwardScreenDialog,
    DeleteGpfYearEndProcessDialog,
    NotAcceptDialog,
    AcceptInwardScreenDialog,
    AlertMessageDialogComponent,
    SuccessfulSubmitionComponent


  ]
})
export class DppfgpfModule { }
