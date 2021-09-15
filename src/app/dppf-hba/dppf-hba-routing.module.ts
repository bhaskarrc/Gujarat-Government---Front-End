import { ScheduleOfHbaComponent } from './accept-account-screen/schedule-of-hba/schedule-of-hba.component';
import { BookTransferRegisterComponent } from './accept-account-screen/book-transfer-register/book-transfer-register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceptAccountScreenComponent } from './accept-account-screen/accept-account-screen.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { SaveCasesComponent } from './save-cases/save-cases.component';
import { InwardDetailsComponent } from './inward-details/inward-details.component';
import { FieldCaseComponent } from './field-case/field-case.component';
import { SentCaseComponent } from './sent-case/sent-case.component';
import { TopScheduleEntryFormComponent } from './top-schedule-entry-form/top-schedule-entry-form.component';
import { VoucherEntryFormComponent } from './voucher-entry-form/voucher-entry-form.component';
import { AccountEntryWiseComponent } from './account-entry-wise/account-entry-wise.component';
import { AdjustmentAccountComponent } from './adjustment-account/adjustment-account.component';
import { CashBookEntryHbaComponent } from './cash-book-entry-hba/cash-book-entry-hba.component';
import { YearEndProcessHbaComponent } from './year-end-process-hba/year-end-process-hba.component';
import { InterestNdcDetailsHbaComponent } from './interest-ndc-details-hba/interest-ndc-details-hba.component';
import { AccountStatusHbaComponent } from './account-status-hba/account-status-hba.component';
import { RefundGenerationHbaComponent } from './refund-generation-hba/refund-generation-hba.component';
import { WaiveOffDetailsHbaComponent } from './waive-off-details-hba/waive-off-details-hba.component';
import { AgcaDetailsHbaComponent } from './agca-details-hba/agca-details-hba.component';
import { AccountTransferHbaComponent } from './account-transfer-hba/account-transfer-hba.component';
import { FreezeUnfreezScheduleHbaComponent } from './freeze-unfreez-schedule-hba/freeze-unfreez-schedule-hba.component';
import { OutwardCaseHbaComponent } from './outward-case-hba/outward-case-hba.component';
import { OutwardDetailsHbaComponent } from './outward-details-hba/outward-details-hba.component';
import { VoucherEntryFormListingComponent } from './voucher-entry-form-listing/voucher-entry-form-listing.component';
import { TopScheduleEntryListingHbaComponent } from './top-schedule-entry-listing-hba/top-schedule-entry-listing-hba.component';
// tslint:disable-next-line: max-line-length
import { FreezeUnfreezeScheduleHbaListingComponent } from './freeze-unfreeze-schedule-hba-listing/freeze-unfreeze-schedule-hba-listing.component';
import { AgcaDetailsHbaListingComponent } from './agca-details-hba-listing/agca-details-hba-listing.component';
import { OutwardDetailsListingHbaComponent } from './outward-details-listing-hba/outward-details-listing-hba.component';
import { WaiveOfferDetailsHbaDetailsComponent } from './waive-offer-details-hba-details/waive-offer-details-hba-details.component';
import { AccountWiseHbaListingComponent } from './account-wise-hba-listing/account-wise-hba-listing.component';
import { AdjustmentAccountListingComponent } from './adjustment-account-listing/adjustment-account-listing.component';
import { AccountDetailsListingComponent } from './account-details-listing/account-details-listing.component';
import { AccountTransferHbaListingComponent } from './account-transfer-hba-listing/account-transfer-hba-listing.component';
import { CashBookEntryHbaListingComponent } from './cash-book-entry-hba-listing/cash-book-entry-hba-listing.component';
import { ScheduleEntryHbaComponent } from './schedule-entry-hba/schedule-entry-hba.component';
import { ScheduleEntryHbaListingComponent } from './schedule-entry-hba-listing/schedule-entry-hba-listing.component';
import { ObjectionReportComponent } from './objection-report/objection-report.component';
import { NdcReportComponent } from './ndc-report/ndc-report.component';
import { NdcNoteComponent } from './ndc-note/ndc-note.component';
import { NdcRequestCaseComponent } from './ndc-request-case/ndc-request-case.component';
import { InterestConformationCaseComponent } from './interest-conformation-case/interest-conformation-case.component';
import { SavedCaseDdoSideComponent } from './saved-case-ddo-side/saved-case-ddo-side.component';
import { DemandForNdcComponent } from './demand-for-ndc/demand-for-ndc.component';
// tslint:disable-next-line: max-line-length
import { InterestConformationCaseListingComponent } from './interest-conformation-case-listing/interest-conformation-case-listing.component';
import { NdcReqListingComponent } from './ndc-req-listing/ndc-req-listing.component';
import { SavedprocessListingComponent } from './savedprocess-listing/savedprocess-listing.component';
import { InwardDetailsListingComponent } from './inward-details-listing/inward-details-listing.component';

const routes: Routes = [
    {
        path: 'account-details-generation',
        component: AccountDetailsComponent
    },
    {
        path: 'account-details-generation-listing',
        component: AccountDetailsListingComponent
    },
    {
        path: 'save-cases',
        component: SaveCasesComponent
    },
    {
        path: 'inward-details',
        component: InwardDetailsComponent
    },
    {
        path: 'inward-details-listing',
        component: InwardDetailsListingComponent
    },
    {
        path: 'field-case',
        component: FieldCaseComponent
    },
    {
        path: 'sent-case',
        component: SentCaseComponent
    },
    {
        path: 'top-Schedule-entry',
        component: TopScheduleEntryFormComponent
    },
    {
        path: 'top-Schedule-entry-listing',
        component: TopScheduleEntryListingHbaComponent
    },
    {
        path: 'voucher-entry',
        component: VoucherEntryFormComponent
    },
    {
        path: 'voucher-entry-listing',
        component: VoucherEntryFormListingComponent
    }
    ,
    {
        path: 'account-wise-entry',
        component: AccountEntryWiseComponent
    },
    {
        path: 'account-wise-entry-listing',
        component: AccountWiseHbaListingComponent
    },


    {
        path: 'account-adustment',
        component: AdjustmentAccountComponent
    },

    {
        path: 'account-adustment-listing',
        component: AdjustmentAccountListingComponent
    },
    {
        path: 'cash-book-entry',
        component: CashBookEntryHbaComponent
    },
    {
        path: 'cash-book-entry-listing',
        component: CashBookEntryHbaListingComponent
    }
    ,
    {
        path: 'year-end-process',
        component: YearEndProcessHbaComponent
    },
    {
        path: 'interest-ndc-details',
        component: InterestNdcDetailsHbaComponent
    },
    {
        path: 'account-status',
        component: AccountStatusHbaComponent
    },
    {
        path: 'refund-order-generation',
        component: RefundGenerationHbaComponent
    }
    ,
    {
        path: 'waive-offer-details',
        component: WaiveOffDetailsHbaComponent
    },
    {
        path: 'waive-offer-details-listing',
        component: WaiveOfferDetailsHbaDetailsComponent
    },
    {
        path: 'agca-details',
        component: AgcaDetailsHbaComponent
    },
    {
        path: 'agca-details-listing',
        component: AgcaDetailsHbaListingComponent
    },
    {
        path: 'account-transfer',
        component: AccountTransferHbaComponent
    }
    ,
    {
        path: 'account-transfer-listing',
        component: AccountTransferHbaListingComponent
    }
    ,

    {
        path: 'freeze-unfreeze-schedule',
        component: FreezeUnfreezScheduleHbaComponent
    },

    {
        path: 'freeze-unfreeze-schedule-listing',
        component: FreezeUnfreezeScheduleHbaListingComponent
    },
    {
        path: 'outward-case',
        component: OutwardCaseHbaComponent
    },
    {
        path: 'outward-details',
        component: OutwardDetailsHbaComponent
    },
    {
        path: 'outward-details/outward-details-listing',
        component: OutwardDetailsListingHbaComponent
    }
    ,
    {
        path: 'schedule-entry',
        component: ScheduleEntryHbaComponent
    }
    ,
    {
        path: 'schedule-entry-listing',
        component: ScheduleEntryHbaListingComponent
    },
    {
        path: 'objection-report',
        component: ObjectionReportComponent
    }
    ,
    {
        path: 'ndc-report',
        component: NdcReportComponent
    }
    ,
    {
        path: 'ndc-note',
        component: NdcNoteComponent
    },
    {
        path: 'ndc-request',
        component: NdcRequestCaseComponent
    },
    {
        path: 'ndc-request-listing',
        component: NdcReqListingComponent
    },

    {
        path: 'interest-confirmation-case',
        component: InterestConformationCaseComponent
    },
    {
        path: 'interest-conformation-case-listing',
        component: InterestConformationCaseListingComponent
    },
    // {
    //     path: 'interest-conformation-case/interest-calculation',
    //     component: InterestCalculationSheetConformationComponent
    // },

    {
        path: 'saved-process',
        component: SavedCaseDdoSideComponent
    }
    ,
    {
        path: 'saved-process-listing',
        component: SavedprocessListingComponent
    }
    ,
    {
        path: 'demand-for-ndc',
        component: DemandForNdcComponent
    },
    // {
    //     path: 'interest-calculation-sheet',
    //     component: InterestCalculationSheetComponent
    // },
    {
        path: 'accept-account-screen',
        component: AcceptAccountScreenComponent
    },
    {
        path: 'accept-account-screen/book-transfer-register',
        component: BookTransferRegisterComponent
    },
    {
        path: 'accept-account-screen/schedule-of-hba',
        component: ScheduleOfHbaComponent
    },


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DppfHbaRoutingModule { }
