import { DeputyDirectorLevelListingComponent } from './deputy-director-level-listing/deputy-director-level-listing.component';
import { DeputyDirectorLevelComponent } from './deputy-director-level/deputy-director-level.component';
import { AccountOfficerLevelComponent } from './account-officer-level/account-officer-level.component';
import { SupritendentLevelComponent } from './supritendent-level/supritendent-level.component';
// tslint:disable-next-line:max-line-length

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InwardScreenComponent } from './inward-screen/inward-screen.component';
import { InwardScreenListingComponent } from './inward-screen-listing/inward-screen-listing.component';
// tslint:disable-next-line: max-line-length
import { AccountGenerationDetailsComponent, GPFAccountDetailsDialog } from './account-generation-details/account-generation-details.component';
// tslint:disable-next-line: max-line-length
import { AccountGenerationDetailsListingComponent } from './account-generation-details-listing/account-generation-details-listing.component';
import { TopScheduleEntryComponent } from './top-schedule-entry/top-schedule-entry.component';
import { VoucherEntryComponent } from './voucher-entry/voucher-entry.component';
import { VoucherEntryListingComponent } from './voucher-entry-listing/voucher-entry-listing.component';
import { AccountWiseEntryComponent } from './account-wise-entry/account-wise-entry.component';
import { OutwardDetailsComponent } from './outward-details/outward-details.component';
import { MissingAccountWiseEntryComponent } from './missing-account-wise-entry/missing-account-wise-entry.component';
import { AgcaDetailsComponent } from './agca-details/agca-details.component';
import { AgcaDetailsListingComponent } from './agca-details-listing/agca-details-listing.component';
import { MissingAccountWiseEntryListingComponent } from './missing-account-wise-entry-listing/missing-account-wise-entry-listing.component';
import { YearEndProcessComponent } from './year-end-process/year-end-process.component';
import { DeleteGpfYearEndProcessComponent } from './delete-gpf-year-end-process/delete-gpf-year-end-process.component';
import { FreezeUnfreezeScheduleComponent } from './freeze-unfreeze-schedule/freeze-unfreeze-schedule.component';
import { FreezeUnfreezeScheduleListingComponent } from './freeze-unfreeze-schedule-listing/freeze-unfreeze-schedule-listing.component';
import { AccountWiseEntryListingComponent } from './account-wise-entry-listing/account-wise-entry-listing.component';
import { OutwardDetailsListingComponent } from './outward-details-listing/outward-details-listing.component';
import { TopScheduleEntryListingComponent } from './top-schedule-entry-listing/top-schedule-entry-listing.component';
import { AccountAdjustmentDetailComponent } from './account-adjustment-detail/account-adjustment-detail.component';
import { AcceptAccountScreenComponent } from './accept-account-screen/accept-account-screen.component';
import { LinkInsuranceDetailComponent } from './link-insurance-detail/link-insurance-detail.component';
import { AccountTransferComponent } from './account-transfer/account-transfer.component';
import { OutwardCasesComponent } from './outward-cases/outward-cases.component';
import { CaseMovedToSavedCaseComponent } from './case-moved-to-saved-case/case-moved-to-saved-case.component';
import { AccountAdjustmentDetailListingComponent } from './account-adjustment-detail-listing/account-adjustment-detail-listing.component';
import { AuditorMappingComponent } from './auditor-mapping/auditor-mapping.component';
import { PrepareOnlineFinalPaymentCaseComponent } from './prepare-online-final-payment-case/prepare-online-final-payment-case.component';
// tslint:disable-next-line: max-line-length
import { PrepareOnlineFinalPaymentCaseDppfComponent } from './prepare-online-final-payment-case-dppf/prepare-online-final-payment-case-dppf.component';
// tslint:disable-next-line: max-line-length
import { PrepareOnlineFinalPaymentCaseListingComponent } from './prepare-online-final-payment-case-listing/prepare-online-final-payment-case-listing.component';
import { MasterRateUpdationComponent } from './master-rate-updation/master-rate-updation.component';
import { BookTransferRegisterComponent } from './book-transfer-register/book-transfer-register.component';
// tslint:disable-next-line: max-line-length
import { ScheduleOfEightZeroZeroNineAccountPostingProcessComponent } from './schedule-of-eight-zero-zero-nine-account-posting-process/schedule-of-eight-zero-zero-nine-account-posting-process.component';
import { GpfInterestCalculationComponent } from './gpf-interest-calculation/gpf-interest-calculation.component';




const routes: Routes = [

  {
    path: 'inward-screen',
    component: InwardScreenComponent
  },
  {
    path: 'inward-screen/inward-screen-listing',
    component: InwardScreenListingComponent
  },
  {
    path: 'account-generation-details',
    component: AccountGenerationDetailsComponent
  },
  {
    path: 'account-generation-details/account-generation-details-listing',
    component: AccountGenerationDetailsListingComponent
  },

  {
    path: 'top-schedule-entry',
    component: TopScheduleEntryComponent
  },
  {
    path: 'voucher-entry',
    component: VoucherEntryComponent
  },
  {
    path: 'voucher-entry/voucher-entry-listing',
    component: VoucherEntryListingComponent
  },
  {
    path: 'account-wise-entry',
    component: AccountWiseEntryComponent
  },
  {
    path: 'outward-details',
    component: OutwardDetailsComponent
  },
  {
    path: 'missing-account-wise-entry',
    component: MissingAccountWiseEntryComponent
  },
  {
    path: 'agca-details',
    component: AgcaDetailsComponent
  },
  {
    path: 'agca-details/agca-details-listing',
    component: AgcaDetailsListingComponent
  },
  {
    path: 'missing-account-wise-entry/missing-account-wise-entry-listing',
    component: MissingAccountWiseEntryListingComponent
  },
  {
    path: 'year-end-process',
    component: YearEndProcessComponent
  },
  {
    path: 'delete-gpf-year-end-process',
    component: DeleteGpfYearEndProcessComponent
  },
  {
    path: 'freeze-unfreeze-schedule',
    component: FreezeUnfreezeScheduleComponent
  },
  {
    path: 'freeze-unfreeze-schedule/freeze-unfreeze-schedule-listing',
    component: FreezeUnfreezeScheduleListingComponent
  },
  {
    path: 'account-wise-entry/account-wise-entry-listing',
    component: AccountWiseEntryListingComponent
  },
  {
    path: 'outward-details/outward-details-listing',
    component: OutwardDetailsListingComponent
  },
  {
    path: 'top-schedule-entry/top-schedule-entry-listing',
    component: TopScheduleEntryListingComponent
  },
  {
    path: 'account-adjustment-detail',
    component: AccountAdjustmentDetailComponent
  },
  {
    path: 'accept-account-screen',
    component: AcceptAccountScreenComponent
  },
  {
    path: 'link-insurance-detail',
    component: LinkInsuranceDetailComponent
  },
  {
    path: 'account-transfer',
    component: AccountTransferComponent
  },
  {
    path: 'outward-cases',
    component: OutwardCasesComponent
  },

  {
    path: 'case-moved-to-saved-case',
    component: CaseMovedToSavedCaseComponent
  },
  {
    path: 'account-adjustment-detail/account-adjustment-detail-listing',
    component: AccountAdjustmentDetailListingComponent
  },
  {
    path: 'auditor-mapping',
    component: AuditorMappingComponent
  },
  {
    path: 'prepare-online-final-payment-case',
    component: PrepareOnlineFinalPaymentCaseComponent
  },
  {
    path: 'prepare-online-final-payment-case-dppf',
    component: PrepareOnlineFinalPaymentCaseDppfComponent
  },
  {
    path: 'prepare-online-final-payment-case/prepare-online-final-payment-case-list',
    component: PrepareOnlineFinalPaymentCaseListingComponent
  },
  {
    path: 'master-rate-updation',
    component: MasterRateUpdationComponent
  },
  {
    path: 'accept-account-screen/book-transfer-register',
    component: BookTransferRegisterComponent
  },
  {
    path: 'account-generation-details/supritendent-level',
    component: SupritendentLevelComponent
  },
  {
    path: 'account-generation-details/account-officer-level',
    component: AccountOfficerLevelComponent
  },
  {
    path: 'account-generation-details/deputy-director-level',
    component: DeputyDirectorLevelComponent
  },
  {
    path: 'account-generation-details/deputy-director-level-listing',
    component: DeputyDirectorLevelListingComponent
  },
  {
    path: 'schedule-of-eight-zero-zero-nine-account-posting-process',
    component: ScheduleOfEightZeroZeroNineAccountPostingProcessComponent
  },
  {
    path: 'gpf-interest-calculation',
    component: GpfInterestCalculationComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DppfgpfRoutingModule { }
