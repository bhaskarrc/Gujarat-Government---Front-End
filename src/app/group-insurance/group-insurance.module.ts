import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupInsuranceRoutingModule } from './group-insurance-routing';
import { MaterialModule } from '../material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { CommonProtoModule } from '../common/common.module';
import { GiEmployeeMasterComponent } from './gi-employee-master/gi-employee-master.component';
import { GiSearchEmployeeComponent } from './gi-search-employee/gi-search-employee.component';
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
import {
  GiPlusMinusStatementListingComponent, ReturnDialogComponent, AcceptDialogComponent
} from './gi-plus-minus-statement-listing/gi-plus-minus-statement-listing.component';
import { GiEnrollEmployeeAisComponent } from './gi-enroll-employee-ais/gi-enroll-employee-ais.component';
import {
  GiEnrollEmployeeAisListingComponent, DeleteReasonDialogComponent
} from './gi-enroll-employee-ais-listing/gi-enroll-employee-ais-listing.component';
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
  GiSubscriptionRequestLetterPrintComponent, EmailIdDialogComponent
} from './gi-subscription-request-letter-print/gi-subscription-request-letter-print.component';
import { GiEmployeeScheduleComponent } from './gi-employee-schedule/gi-employee-schedule.component';
import { GiEmployeeScheduleListingComponent } from './gi-employee-schedule-listing/gi-employee-schedule-listing.component';
import { GiExpenditureStatementComponent } from './gi-expenditure-statement/gi-expenditure-statement.component';
import { GiAnnexureBComponent } from './gi-annexure-b/gi-annexure-b.component';
import { GiDailyInputSheetComponent } from './gi-daily-input-sheet/gi-daily-input-sheet.component';
import { GiDailyInputSheetAisComponent } from './gi-daily-input-sheet-ais/gi-daily-input-sheet-ais.component';
import { GiTreasuryOfficeReportComponent } from './gi-treasury-office-report/gi-treasury-office-report.component';
import { GiWorkflowDetailsComponent } from './gi-workflow-details/gi-workflow-details.component';
import { GiInterestRateListingComponent } from './gi-interest-rate-listing/gi-interest-rate-listing.component';
import { GiDailyInputSheetListingComponent } from './gi-daily-input-sheet-listing/gi-daily-input-sheet-listing.component';
import { GiAisEmployeeScheduleComponent } from './gi-ais-employee-schedule/gi-ais-employee-schedule.component';
import { GiAisEmployeeScheduleListingComponent } from './gi-ais-employee-schedule-listing/gi-ais-employee-schedule-listing.component';
import { GiEightZeroOneOneAgDataEntryComponent } from './gi-eight-zero-one-one-ag-data-entry/gi-eight-zero-one-one-ag-data-entry.component';
import {
  GiEightZeroOneOneAgDataListingComponent
} from './gi-eight-zero-one-one-ag-data-listing/gi-eight-zero-one-one-ag-data-listing.component';
import {
  GiEmployeeMasterViewComponent
} from './gi-employee-master/gi-employee-master-view/gi-employee-master-view.component';
import {
  GiAcceptAccountFromTreasuryComponent, NotAcceptDialog
} from './gi-accept-account-from-treasury/gi-accept-account-from-treasury.component';
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
import { FormElevenEntryComponent } from './form-eleven-entry/form-eleven-entry.component';
import { FormTwelveEntryComponent } from './form-twelve-entry/form-twelve-entry.component';
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

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMatSelectSearchModule,
    CommonProtoModule,
    GroupInsuranceRoutingModule
  ],
  declarations: [
    GiEmployeeMasterComponent,
    GiSearchEmployeeComponent,
    GiEmployeeMasterListingComponent,
    GiChallanEntryComponent,
    GiChallanListingComponent,
    GiInterestRateComponent,
    GiEmployeeLedgerComponent,
    GiStatementOneComponent,
    GiStatementTwoComponent,
    GiStatementThreeComponent,
    GiResolutionMasterComponent,
    GiPlusMinusStatementComponent,
    GiPlusMinusStatementListingComponent,
    GiEnrollEmployeeAisComponent,
    GiEnrollEmployeeAisListingComponent,
    GiChallanEntryAisComponent,
    GiChallanEntryAisListingComponent,
    GiEmployeeLedgerAisComponent,
    GiEmployeeLedgerListingComponent,
    GiEmployeeLedgerAisListingComponent,
    GiAgDataComponent,
    GiAgDataListingComponent,
    GiSubscriptionRequestLetterComponent,
    GiSubscriptionRequestLetterListingComponent,
    GiSubscriptionRequestLetterPrintComponent,
    GiEmployeeScheduleComponent,
    GiEmployeeScheduleListingComponent,
    GiExpenditureStatementComponent,
    GiAnnexureBComponent,
    GiDailyInputSheetComponent,
    GiDailyInputSheetAisComponent,
    GiTreasuryOfficeReportComponent,
    GiWorkflowDetailsComponent,
    GiInterestRateListingComponent,
    GiDailyInputSheetListingComponent,
    GiAisEmployeeScheduleComponent,
    GiAisEmployeeScheduleListingComponent,
    GiEightZeroOneOneAgDataEntryComponent,
    GiEightZeroOneOneAgDataListingComponent,
    EmailIdDialogComponent,
    ReturnDialogComponent,
    AcceptDialogComponent,
    GiEmployeeMasterViewComponent,
    DeleteReasonDialogComponent,
    GiAcceptAccountFromTreasuryComponent,
    GiBookTransferRegisterComponent,
    NotAcceptDialog,
    PlusMinusMemoReportTreasuryOfficeComponent,
    PlusMinusMemoReportPaoComponent,
    BookTransferEightSixFiveEightComponent,
    DailyInputSheetEightSixFiveEightComponent,
    DailyInputSheetTreasuryOfficeComponent,
    PlusMinusMemoReportEightSixFiveEightComponent,
    FormElevenComponent,
    FormTwelveComponent,
    FormElevenEntryComponent,
    FormTwelveEntryComponent,
    OfficeOrderScreenEightSixFiveEightComponent,
    ReceiptExpenditureScreenEightSixFiveEightComponent,
    FormElevenListingComponent,
    FormTwelveListingComponent,
    FormTwelveViewComponent,
    FormElevenViewComponent
  ],
  entryComponents: [
    GiSearchEmployeeComponent,
    EmailIdDialogComponent,
    ReturnDialogComponent,
    AcceptDialogComponent,
    GiEmployeeMasterViewComponent,
    DeleteReasonDialogComponent,
    NotAcceptDialog,
    GiWorkflowDetailsComponent
  ]
})
export class GroupInsuranceModule { }
