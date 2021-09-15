import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GiEmployeeMasterComponent } from './gi-employee-master/gi-employee-master.component';
import { GiEmployeeMasterListingComponent } from './gi-employee-master-listing/gi-employee-master-listing.component';
import { GiChallanEntryComponent } from './gi-challan-entry/gi-challan-entry.component';
import { GiChallanListingComponent } from './gi-challan-listing/gi-challan-listing.component';
import { GiInterestRateComponent } from './gi-interest-rate/gi-interest-rate.component';
import { GiEmployeeLedgerComponent } from './gi-employee-ledger/gi-employee-ledger.component';
import { GiStatementOneComponent } from './gi-statement-one/gi-statement-one.component';
import { GiStatementTwoComponent } from './gi-statement-two/gi-statement-two.component';
import { GiStatementThreeComponent } from './gi-statement-three/gi-statement-three.component';
import { GiResolutionMasterComponent } from './gi-resolution-master/gi-resolution-master.component';
import { GiPlusMinusStatementComponent } from './gi-plus-minus-statement/gi-plus-minus-statement.component';
import { GiPlusMinusStatementListingComponent } from './gi-plus-minus-statement-listing/gi-plus-minus-statement-listing.component';
import { GiEnrollEmployeeAisComponent } from './gi-enroll-employee-ais/gi-enroll-employee-ais.component';
import { GiEnrollEmployeeAisListingComponent } from './gi-enroll-employee-ais-listing/gi-enroll-employee-ais-listing.component';
import { GiChallanEntryAisComponent } from './gi-challan-entry-ais/gi-challan-entry-ais.component';
import { GiChallanEntryAisListingComponent } from './gi-challan-entry-ais-listing/gi-challan-entry-ais-listing.component';
import { GiEmployeeLedgerAisComponent } from './gi-employee-ledger-ais/gi-employee-ledger-ais.component';
import { GiEmployeeLedgerListingComponent } from './gi-employee-ledger-listing/gi-employee-ledger-listing.component';
import { GiEmployeeLedgerAisListingComponent } from './gi-employee-ledger-ais-listing/gi-employee-ledger-ais-listing.component';
import { GiAgDataComponent } from './gi-ag-data/gi-ag-data.component';
import { GiAgDataListingComponent } from './gi-ag-data-listing/gi-ag-data-listing.component';
import { GiSubscriptionRequestLetterComponent } from './gi-subscription-request-letter/gi-subscription-request-letter.component';
import {
    GiSubscriptionRequestLetterListingComponent
} from './gi-subscription-request-letter-listing/gi-subscription-request-letter-listing.component';
import {
    GiSubscriptionRequestLetterPrintComponent
} from './gi-subscription-request-letter-print/gi-subscription-request-letter-print.component';
import { GiEmployeeScheduleComponent } from './gi-employee-schedule/gi-employee-schedule.component';
import { GiEmployeeScheduleListingComponent } from './gi-employee-schedule-listing/gi-employee-schedule-listing.component';
import { GiExpenditureStatementComponent } from './gi-expenditure-statement/gi-expenditure-statement.component';
import { GiAnnexureBComponent } from './gi-annexure-b/gi-annexure-b.component';
import { GiDailyInputSheetComponent } from './gi-daily-input-sheet/gi-daily-input-sheet.component';
import { GiDailyInputSheetAisComponent } from './gi-daily-input-sheet-ais/gi-daily-input-sheet-ais.component';
import { GiTreasuryOfficeReportComponent } from './gi-treasury-office-report/gi-treasury-office-report.component';
import { GiEightZeroOneOneAgDataEntryComponent } from './gi-eight-zero-one-one-ag-data-entry/gi-eight-zero-one-one-ag-data-entry.component';
import {
    GiEightZeroOneOneAgDataListingComponent
} from './gi-eight-zero-one-one-ag-data-listing/gi-eight-zero-one-one-ag-data-listing.component';
import { GiDailyInputSheetListingComponent } from './gi-daily-input-sheet-listing/gi-daily-input-sheet-listing.component';
import { GiInterestRateListingComponent } from './gi-interest-rate-listing/gi-interest-rate-listing.component';
import { GiEmployeeMasterViewComponent } from './gi-employee-master/gi-employee-master-view/gi-employee-master-view.component';
import { GiAisEmployeeScheduleComponent } from './gi-ais-employee-schedule/gi-ais-employee-schedule.component';
import { GiAisEmployeeScheduleListingComponent } from './gi-ais-employee-schedule-listing/gi-ais-employee-schedule-listing.component';
import { GiAcceptAccountFromTreasuryComponent } from './gi-accept-account-from-treasury/gi-accept-account-from-treasury.component';
import { GiBookTransferRegisterComponent } from './gi-book-transfer-register/gi-book-transfer-register.component';
import {
    PlusMinusMemoReportTreasuryOfficeComponent
} from './plus-minus-memo-report-treasury-office/plus-minus-memo-report-treasury-office.component';
import { PlusMinusMemoReportPaoComponent } from './plus-minus-memo-report-pao/plus-minus-memo-report-pao.component';
import { BookTransferEightSixFiveEightComponent } from './book-transfer-eight-six-five-eight/book-transfer-eight-six-five-eight.component';
import {
    DailyInputSheetEightSixFiveEightComponent
} from './daily-input-sheet-eight-six-five-eight/daily-input-sheet-eight-six-five-eight.component';
import { DailyInputSheetTreasuryOfficeComponent } from './daily-input-sheet-treasury-office/daily-input-sheet-treasury-office.component';
import {
    PlusMinusMemoReportEightSixFiveEightComponent
} from './plus-minus-memo-report-eight-six-five-eight/plus-minus-memo-report-eight-six-five-eight.component';
import { FormElevenComponent } from './form-eleven/form-eleven.component';
import { FormTwelveComponent } from './form-twelve/form-twelve.component';
import { FormTwelveEntryComponent } from './form-twelve-entry/form-twelve-entry.component';
import { FormElevenEntryComponent } from './form-eleven-entry/form-eleven-entry.component';
import {
    OfficeOrderScreenEightSixFiveEightComponent
} from './office-order-screen-eight-six-five-eight/office-order-screen-eight-six-five-eight.component';
import {
    ReceiptExpenditureScreenEightSixFiveEightComponent
} from './receipt-expenditure-screen-eight-six-five-eight/receipt-expenditure-screen-eight-six-five-eight.component';
import { FormElevenListingComponent } from './form-eleven-listing/form-eleven-listing.component';
import { FormTwelveListingComponent } from './form-twelve-listing/form-twelve-listing.component';
import { FormTwelveViewComponent } from './form-twelve-view/form-twelve-view.component';
import { FormElevenViewComponent } from './form-eleven-view/form-eleven-view.component';

const routes: Routes = [
    {
        path: 'employee-master',
        component: GiEmployeeMasterComponent
    },
    {
        path: 'employee-master-listing',
        component: GiEmployeeMasterListingComponent
    },
    {
        path: 'challan-entry',
        component: GiChallanEntryComponent
    },
    {
        path: 'challan-listing',
        component: GiChallanListingComponent
    },
    {
        path: 'interest-rate',
        component: GiInterestRateComponent
    },
    {
        path: 'employee-ledger',
        component: GiEmployeeLedgerComponent
    },
    {
        path: 'statement-one',
        component: GiStatementOneComponent
    },
    {
        path: 'statement-two',
        component: GiStatementTwoComponent
    },
    {
        path: 'statement-three',
        component: GiStatementThreeComponent
    },
    {
        path: 'resolution-master',
        component: GiResolutionMasterComponent
    },
    {
        path: 'plus-minus-statement',
        component: GiPlusMinusStatementComponent
    },
    {
        path: 'plus-minus-statement-listing',
        component: GiPlusMinusStatementListingComponent
    },
    {
        path: 'enroll-employee-ais',
        component: GiEnrollEmployeeAisComponent
    },
    {
        path: 'enroll-employee-ais-listing',
        component: GiEnrollEmployeeAisListingComponent
    },
    {
        path: 'challan-entry-ais',
        component: GiChallanEntryAisComponent
    },
    {
        path: 'challan-entry-ais-listing',
        component: GiChallanEntryAisListingComponent
    },
    {
        path: 'employee-ledger-ais',
        component: GiEmployeeLedgerAisComponent
    },
    {
        path: 'employee-ledger-listing',
        component: GiEmployeeLedgerListingComponent
    },
    {
        path: 'employee-ledger-ais-listing',
        component: GiEmployeeLedgerAisListingComponent
    },
    {
        path: 'ag-data',
        component: GiAgDataComponent
    },
    {
        path: 'ag-data-listing',
        component: GiAgDataListingComponent
    },
    {
        path: 'subscription-request-letter',
        component: GiSubscriptionRequestLetterComponent
    },
    {
        path: 'subscription-request-letter-listing',
        component: GiSubscriptionRequestLetterListingComponent
    },
    {
        path: 'subscription-request-letter-print',
        component: GiSubscriptionRequestLetterPrintComponent
    },
    {
        path: 'employee-schedule',
        component: GiEmployeeScheduleComponent
    },
    {
        path: 'employee-schedule-listing',
        component: GiEmployeeScheduleListingComponent
    },
    {
        path: 'expenditure-statement',
        component: GiExpenditureStatementComponent
    },
    {
        path: 'annexure-b',
        component: GiAnnexureBComponent
    },
    {
        path: 'daily-input-sheet',
        component: GiDailyInputSheetComponent
    },
    {
        path: 'daily-input-sheet-ais',
        component: GiDailyInputSheetAisComponent
    },
    {
        path: 'treasury-office-report',
        component: GiTreasuryOfficeReportComponent
    },
    {
        path: 'ag-data-entry-8011',
        component: GiEightZeroOneOneAgDataEntryComponent
    },
    {
        path: 'ag-data-listing-8011',
        component: GiEightZeroOneOneAgDataListingComponent
    },
    {
        path: 'daily-input-sheet-listing',
        component: GiDailyInputSheetListingComponent
    },
    {
        path: 'gi-interest-rate-listing',
        component: GiInterestRateListingComponent
    },
    {
        path: 'gi-employee-master-view',
        component: GiEmployeeMasterViewComponent
    },
    { path: 'ais-employee-schedule', component: GiAisEmployeeScheduleComponent },
    { path: 'ais-employee-schedule-listing', component: GiAisEmployeeScheduleListingComponent },
    { path: 'accept-account-from-treasury', component: GiAcceptAccountFromTreasuryComponent },
    { path: 'book-transfer-register', component: GiBookTransferRegisterComponent },
    { path: 'plus-minus-memo-report-treasury-office', component: PlusMinusMemoReportTreasuryOfficeComponent },
    { path: 'plus-minus-memo-report-pao', component: PlusMinusMemoReportPaoComponent },
    { path: 'book-transfer-8658', component: BookTransferEightSixFiveEightComponent },
    { path: 'daily-input-sheet-8658', component: DailyInputSheetEightSixFiveEightComponent },
    { path: 'daily-input-sheet-dto', component: DailyInputSheetTreasuryOfficeComponent },
    { path: '8658-daily-input-sheet', component: PlusMinusMemoReportEightSixFiveEightComponent },
    { path: 'form-11', component: FormElevenComponent },
    { path: 'form-12', component: FormTwelveComponent },
    { path: 'form-11-entry', component: FormElevenEntryComponent },
    { path: 'form-12-entry', component: FormTwelveEntryComponent },
    { path: '8658-office-order-screen', component: OfficeOrderScreenEightSixFiveEightComponent },
    { path: '8658-expenditure-form-cam-54-screen', component: ReceiptExpenditureScreenEightSixFiveEightComponent },
    { path: 'form-11-listing', component: FormElevenListingComponent },
    { path: 'form-12-listing', component: FormTwelveListingComponent },
    { path: 'form-11-view', component: FormElevenViewComponent },
    { path: 'form-12-view', component: FormTwelveViewComponent },

];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class GroupInsuranceRoutingModule { }
