import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalFundRoutingModule } from './local-fund-routing.module';
// tslint:disable-next-line: max-line-length
import { AdditionalMandaysRegisterComponent } from './additional-mandays-register/additional-mandays-register/additional-mandays-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MaterialModule } from 'src/app/material-module';
import { CommonProtoModule } from '../common/common.module';
import { EstablishmentDistrictOfficeComponent } from './audit-master/establishment-district-office/establishment-district-office.component';
import { EstablishmentForCorporationComponent } from './audit-master/establishment-for-corporation/establishment-for-corporation.component';
import { EstablishmentHqComponent } from './audit-master/establishment-hq/establishment-hq.component';
// tslint:disable-next-line: max-line-length
import { EstablishmentReportListingComponent, EstablishmentReportTablesComponent } from './audit-master/establishment-report-listing/establishment-report-listing.component';
import { InstituteMasterListingComponent } from './audit-master/institute-master-listing/institute-master-listing.component';
// tslint:disable-next-line: max-line-length
import { InstituteMasterScreenComponent, GenerateInstituteCodeComponent } from './audit-master/institute-master-screen/institute-master-screen.component';
import { MajorHeadMasterComponent } from './audit-master/major-head-master/major-head-master.component';
// tslint:disable-next-line: max-line-length
import { PendingInstituteAuditMasterComponent } from './audit-master/pending-institute-audit-master/pending-institute-audit-master.component';
// tslint:disable-next-line: max-line-length
import { DistrictAuditPlanningComponent } from './audit-planning/district-audit-planning/district-audit-planning/district-audit-planning.component';
// tslint:disable-next-line: max-line-length
import { VillagePanchayatAuditPlanningComponent } from './audit-planning/district-audit-planning/village-panchayat-audit-planning/village-panchayat-audit-planning.component';
// tslint:disable-next-line: max-line-length
import { QuaterlyAuditReportPlanningComponent } from './audit-planning/hod-audit-planning/quaterly-audit-report-planning/quaterly-audit-report-planning.component';
import { SearchCriteriaComponent } from './audit-planning/hod-audit-planning/search-criteria/search-criteria.component';
import { OnlineDiarySubmissionComponent } from './online-diary/online-diary-submission/online-diary-submission.component';
import { DistrictPanchayatCreatorComponent } from './grant-annexure-1/district-panchayat-creator/district-panchayat-creator.component';
// tslint:disable-next-line: max-line-length
import { DistrictAuditPlanningListingComponent } from './audit-planning/district-audit-planning/district-audit-planning-listing/district-audit-planning-listing.component';
import { HodAuditPlanningComponent } from './audit-planning/hod-audit-planning/hod-audit-planning/hod-audit-planning.component';
import { AuditParaRegisterComponent } from './audit-para/audit-para-register/audit-para-register.component';
import { AuditParaRegisterReportComponent } from './audit-para/audit-para-register-report/audit-para-register-report.component';
import { AuditParaRegisterListingComponent } from './audit-para/audit-para-register-listing/audit-para-register-listing.component';
// tslint:disable-next-line: max-line-length
import { OnlineDiarySubmissionListingComponent } from './online-diary/online-diary-submission-listing/online-diary-submission-listing.component';
// tslint:disable-next-line: max-line-length
import { PendingParaRegisterComponent, NoParaListingComponent, NoOfDroppedParaListingComponent, NoOfPendingParaListingComponent } from './pending-para-register/pending-para-register.component';
import { GrantAnnexureOneListingComponent } from './grant-annexure-1/grant-annexure-one-listing/grant-annexure-one-listing.component';
// tslint:disable-next-line: max-line-length
import { GrantAnnexureOneRegisterSearchCriteriaComponent } from './grant-annexure-1/grant-annexure-one-register-search-criteria/grant-annexure-one-register-search-criteria.component';
import { LrParaEntryComponent } from './lr-para/lr-para-entry/lr-para-entry.component';
import { LrParaListingComponent } from './lr-para/lr-para-listing/lr-para-listing.component';
import { LrParaRegisterComponent } from './lr-para/lr-para-register/lr-para-register.component';
import { ScheduleTwoComponent } from './schedule-two/schedule-two.component';
import { ScheduleTwoPointOneComponent } from './schedule-two-point-one/schedule-two-point-one.component';
import { ScheduleThreeComponent } from './schedule-three/schedule-three-statutory-grant/schedule-three-statutory-grant.component';
import { ScheduleThreeListingComponent } from './schedule-three/schedule-three-listing/schedule-three-listing.component';
// tslint:disable-next-line: max-line-length
import { ScheduleFourLoanReceivedReportComponent } from './schedule-four/schedule-four-loan-received-report/schedule-four-loan-received-report.component';
import { ScheduleFourListingComponent } from './schedule-four/schedule-four-listing/schedule-four-listing.component';
import { ScheduleFiveIncomeReportComponent } from './schedule-five/schedule-five-income-report/schedule-five-income-report.component';
import { ScheduleFiveListingComponent } from './schedule-five/schedule-five-listing/schedule-five-listing.component';
import { ScheduleSixAnnualReportComponent } from './schedule-six/schedule-six-annual-report/schedule-six-annual-report.component';
import { ScheduleSixListingComponent } from './schedule-six/schedule-six-listing/schedule-six-listing.component';
import { AuditProcessRegisterComponent } from './audit-process-register/audit-process-register/audit-process-register.component';
// tslint:disable-next-line: max-line-length
import { AuditProcessRegisterListingComponent } from './audit-process-register/audit-process-register-listing/audit-process-register-listing.component';
import { LrParaVerificationRegisterComponent } from './lr-para/lr-para-verification-register/lr-para-verification-register.component';
import { InwardRegisterEntryComponent } from './inward-register/inward-register-entry/inward-register-entry.component';
import { InwardRegisterRegisterComponent } from './inward-register/inward-register-register/inward-register-register.component';
import { DistrictMahekamRegisterComponent } from './district-mahekam-register/district-mahekam-register.component';
// tslint:disable-next-line: max-line-length
import { DistrictMahekamRegisterListComponent } from './district-mahekam-register/district-mahekam-register-list/district-mahekam-register-list.component';
// tslint:disable-next-line: max-line-length
import { DistrictMahekamRegisterViewComponent } from './district-mahekam-register/district-mahekam-register-view/district-mahekam-register-view.component';
import { FieldVisitRegisterComponent } from './field-visit-register/field-visit-register.component';
import { FieldVisitRegisterListComponent } from './field-visit-register/field-visit-register-list/field-visit-register-list.component';
import { FieldVisitRegisterViewComponent } from './field-visit-register/field-visit-register-view/field-visit-register-view.component';
// tslint:disable-next-line: max-line-length
import { AdditionalMandaysRegisterListingComponent } from './additional-mandays-register/additional-mandays-register-listing/additional-mandays-register-listing.component';
import { OutwardRegisterEntryComponent } from './outward-register/outward-register-entry/outward-register-entry.component';
import { OutwardRegisterReportComponent } from './outward-register/outward-register-report/outward-register-report.component';
import { RtiRegisterEntryComponent } from './rti-register/rti-register-entry/rti-register-entry.component';
import { RtiRegisterReportComponent } from './rti-register/rti-register-report/rti-register-report.component';
import { RtiRegisterListingComponent } from './rti-register/rti-register-listing/rti-register-listing.component';
// tslint:disable-next-line: max-line-length
import { LrParaVerificationRegisterReportComponent } from './lr-para/lr-para-verification-register-report/lr-para-verification-register-report.component';
import { StampRegisterEntryComponent } from './stamp-register/stamp-register-entry/stamp-register-entry.component';
import { StampRegisterListingComponent } from './stamp-register/stamp-register-listing/stamp-register-listing.component';
import { StampRegisterReportComponent } from './stamp-register/stamp-register-report/stamp-register-report.component';
import { ScheduleThreeReportComponent } from './schedule-three/schedule-three-report/schedule-three-report.component';
import { ScheduleFourReportComponent } from './schedule-four/schedule-four-report/schedule-four-report.component';
import { ScheduleFiveReportComponent } from './schedule-five/schedule-five-report/schedule-five-report.component';
import { MprForwardingLetterDetailsComponent } from './mpr-forwarding-letter-details/mpr-forwarding-letter-details.component';
import { PreAuditGpfInstituteEntryComponent } from './pre-audit-gpf/pre-audit-gpf-institute-entry/pre-audit-gpf-institute-entry.component';
import { PreAuditGpfListingComponent } from './pre-audit-gpf/pre-audit-gpf-listing/pre-audit-gpf-listing.component';
// tslint:disable-next-line: max-line-length
import { PreAuditGpfDistrictListingComponent } from './pre-audit-gpf/pre-audit-gpf-district-listing/pre-audit-gpf-district-listing.component';
import { PreAuditGpfDistrictEntryComponent } from './pre-audit-gpf/pre-audit-gpf-district-entry/pre-audit-gpf-district-entry.component';
// tslint:disable-next-line: max-line-length
import { MprForwardingLetterDetailsListingComponent } from './mpr-forwarding-letter-details/mpr-forwarding-letter-details-listing/mpr-forwarding-letter-details-listing.component';
import { AuditFeesDetailsRegisterComponent } from './audit-fees-details/audit-fees-details-register/audit-fees-details-register.component';
// tslint:disable-next-line: max-line-length
import { AuditFeesDetailsRegisterReportComponent } from './audit-fees-details/audit-fees-details-register-report/audit-fees-details-register-report.component';
// tslint:disable-next-line: max-line-length
import { AuditParaDetailRegisterSvoComponent } from './audit-para-detail-register-svo/audit-para-detail-register-svo/audit-para-detail-register-svo.component';
// tslint:disable-next-line: max-line-length
import { AuditParaDetailRegisterSvoReportComponent } from './audit-para-detail-register-svo/audit-para-detail-register-svo-report/audit-para-detail-register-svo-report.component';
// tslint:disable-next-line: max-line-length
import { AuditProgressRegisterSvoComponent } from './audit-progress-register-svo/audit-progress-register-svo/audit-progress-register-svo.component';
// tslint:disable-next-line: max-line-length
import { AuditProgressRegisterSvoReportComponent } from './audit-progress-register-svo/audit-progress-register-svo-report/audit-progress-register-svo-report.component';
// tslint:disable-next-line: max-line-length
import { AuditSupervisionRegisterComponent } from './audit-supervision-register/audit-supervision-register/audit-supervision-register.component';
// tslint:disable-next-line: max-line-length
import { AuditSupervisionRegisterReportComponent } from './audit-supervision-register/audit-supervision-register-report/audit-supervision-register-report.component';
// tslint:disable-next-line: max-line-length
import { OfficeStaffWorkAllocationDetailsComponent } from './office-staff-work-allocation-details-register-for-mpr/office-staff-work-allocation-details/office-staff-work-allocation-details.component';
// tslint:disable-next-line: max-line-length
import { OfficeStaffWorkAllocationDetailsReportComponent } from './office-staff-work-allocation-details-register-for-mpr/office-staff-work-allocation-details-report/office-staff-work-allocation-details-report.component';
// tslint:disable-next-line: max-line-length
import { CircleWiseOnAuditDutyOfficerDetailsComponent } from './office-staff-work-allocation-details-register-for-mpr/circle-wise-on-audit-duty-officer-details/circle-wise-on-audit-duty-officer-details.component';
// tslint:disable-next-line: max-line-length
import { CircleWiseOnAuditDutyOfficerDetailsReportComponent } from './office-staff-work-allocation-details-register-for-mpr/circle-wise-on-audit-duty-officer-details-report/circle-wise-on-audit-duty-officer-details-report.component';
import { RtiAppealRegisterComponent } from './rti-appeal-register/rti-appeal-register.component';
import { RtiAppealRegisterListingComponent } from './rti-appeal-register/rti-appeal-register-listing/rti-appeal-register-listing.component';
// tslint:disable-next-line: max-line-length
import { PendingAuditMasterForSvoComponent } from './pending-audit-master-for-svo/pending-audit-master-for-svo/pending-audit-master-for-svo.component';
// tslint:disable-next-line: max-line-length
import { PendingAuditMasterForSvoReportComponent } from './pending-audit-master-for-svo/pending-audit-master-for-svo-report/pending-audit-master-for-svo-report.component';
// tslint:disable-next-line: max-line-length
import { QuarterlyRemovalPendingParaEntryComponent } from './quarterly-removal-pending-para/quarterly-removal-pending-para-entry/quarterly-removal-pending-para-entry.component';
// tslint:disable-next-line: max-line-length
import { QuarterlyRemovalPendingParaReportComponent } from './quarterly-removal-pending-para/quarterly-removal-pending-para-report/quarterly-removal-pending-para-report.component';
import { RtiReportRegisterComponent } from './rti-report-register/rti-report-register.component';
// tslint:disable-next-line: max-line-length
import { PendingCasesForRemovalAtHqRegisterComponent } from './pending-cases-for-removal-at-hq-register/pending-cases-for-removal-at-hq-register.component';
// tslint:disable-next-line: max-line-length
import { PendingCasesForRemovalAtHqRegisterReportComponent } from './pending-cases-for-removal-at-hq-register-report/pending-cases-for-removal-at-hq-register-report.component';
// tslint:disable-next-line: max-line-length
import { PensionPreAuditCasesRegisterDetailsComponent } from './pension-pre-audit-cases-register/pension-pre-audit-cases-register-details/pension-pre-audit-cases-register-details.component';
// tslint:disable-next-line: max-line-length
import { PensionPreAuditCasesRegisterReportComponent } from './pension-pre-audit-cases-register/pension-pre-audit-cases-register-report/pension-pre-audit-cases-register-report.component';
// tslint:disable-next-line: max-line-length
import { DisposalOfPendingAuditParaComponent } from './disposal-of-pending-audit-para-given-by-ag/disposal-of-pending-audit-para/disposal-of-pending-audit-para.component';
// tslint:disable-next-line: max-line-length
import { DisposalOfPendingAuditParaReportComponent } from './disposal-of-pending-audit-para-given-by-ag/disposal-of-pending-audit-para-report/disposal-of-pending-audit-para-report.component';
import { ModelParaRegisterComponent } from './model-para-register/model-para-register.component';
import { ModelParaRegisterListComponent } from './model-para-register/model-para-register-list/model-para-register-list.component';
// tslint:disable-next-line: max-line-length
import { OutOfControlAuditRegisterEntryComponent } from './out-of-control-audit-register/out-of-control-audit-register-entry/out-of-control-audit-register-entry.component';
// tslint:disable-next-line: max-line-length
import { OutOfControlAuditRegisterReportComponent } from './out-of-control-audit-register/out-of-control-audit-register-report/out-of-control-audit-register-report.component';
import { DocumentRepositoryEntryComponent } from './document-repository/document-repository-entry/document-repository-entry.component';
// tslint:disable-next-line: max-line-length
import { DocumentRepositoryListingComponent } from './document-repository/document-repository-listing/document-repository-listing.component';
// tslint:disable-next-line: max-line-length
import { GpfInterestEightThreeThreeSixRegisterComponent } from './gpf-interest-eight-three-three-six-register/gpf-interest-eight-three-three-six-register/gpf-interest-eight-three-three-six-register.component';
// tslint:disable-next-line: max-line-length
import { GpfInterestEightThreeThreeSixStatementReportComponent } from './gpf-interest-eight-three-three-six-register/gpf-interest-eight-three-three-six-statement-report/gpf-interest-eight-three-three-six-statement-report.component';
import { AuditFileReportComponent } from './audit-file-report/audit-file-report.component';
import { ConsolidatedDiaryReportComponent } from './consolidated-diary-report/consolidated-diary-report.component';
import { WorkflowRegisterReportComponent } from './workflow-register-report/workflow-register-report.component';
import { AnnualAdministrativeReportComponent } from './annual-administrative-report/annual-administrative-report.component';
// tslint:disable-next-line: max-line-length
import { DistrictOfficeImportantParaRegisterComponent } from './district-office-important-para-register/district-office-important-para-register.component';
import { AcpRegisterReportComponent } from './acp-register-report/acp-register-report.component';
import { WorkflowDetailsLfComponent } from './workflow-details-lf/workflow-details-lf.component';
import { EstablishmentHqListingComponent } from './audit-master/establishment-hq-listing/establishment-hq-listing.component';
import { EstablishmentDistrictOfficeListingComponent } from './audit-master/establishment-district-office-listing/establishment-district-office-listing.component';
import { EstablishmentForCorporationListingComponent } from './audit-master/establishment-for-corporation-listing/establishment-for-corporation-listing.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';

@NgModule({
  imports: [
    CommonModule,
    LocalFundRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMatSelectSearchModule,
    MaterialModule,
    CommonProtoModule
  ],
  declarations: [
    AdditionalMandaysRegisterComponent,
    EstablishmentDistrictOfficeComponent,
    EstablishmentForCorporationComponent,
    EstablishmentHqComponent,
    EstablishmentReportListingComponent,
    InstituteMasterListingComponent,
    InstituteMasterScreenComponent,
    MajorHeadMasterComponent,
    PendingInstituteAuditMasterComponent,
    DistrictAuditPlanningComponent,
    VillagePanchayatAuditPlanningComponent,
    QuaterlyAuditReportPlanningComponent,
    SearchCriteriaComponent,
    OnlineDiarySubmissionComponent,
    GenerateInstituteCodeComponent,
    EstablishmentReportTablesComponent,
    DistrictPanchayatCreatorComponent,
    DistrictAuditPlanningListingComponent,
    HodAuditPlanningComponent,
    AuditParaRegisterComponent,
    AuditParaRegisterReportComponent,
    AuditParaRegisterListingComponent,
    OnlineDiarySubmissionListingComponent,
    PendingParaRegisterComponent,
    NoParaListingComponent,
    NoOfDroppedParaListingComponent,
    NoOfPendingParaListingComponent,
    GrantAnnexureOneListingComponent,
    GrantAnnexureOneRegisterSearchCriteriaComponent,
    LrParaEntryComponent,
    LrParaListingComponent,
    LrParaRegisterComponent,
    ScheduleTwoComponent,
    ScheduleTwoPointOneComponent,
    ScheduleThreeComponent,
    ScheduleThreeListingComponent,
    ScheduleFourLoanReceivedReportComponent,
    ScheduleFourListingComponent,
    ScheduleFiveIncomeReportComponent,
    ScheduleFiveListingComponent,
    ScheduleSixAnnualReportComponent,
    ScheduleSixListingComponent,
    AuditProcessRegisterComponent,
    AuditProcessRegisterListingComponent,
    LrParaVerificationRegisterComponent,
    InwardRegisterEntryComponent,
    InwardRegisterRegisterComponent,
    DistrictMahekamRegisterComponent,
    DistrictMahekamRegisterListComponent,
    DistrictMahekamRegisterViewComponent,
    FieldVisitRegisterComponent,
    FieldVisitRegisterListComponent,
    FieldVisitRegisterViewComponent,
    AdditionalMandaysRegisterListingComponent,
    OutwardRegisterEntryComponent,
    OutwardRegisterReportComponent,
    RtiRegisterEntryComponent,
    RtiRegisterReportComponent,
    RtiRegisterListingComponent,
    LrParaVerificationRegisterReportComponent,
    StampRegisterEntryComponent,
    StampRegisterListingComponent,
    StampRegisterReportComponent,
    ScheduleThreeReportComponent,
    ScheduleFourReportComponent,
    ScheduleFiveReportComponent,
    MprForwardingLetterDetailsComponent,
    PreAuditGpfInstituteEntryComponent,
    PreAuditGpfListingComponent,
    PreAuditGpfDistrictListingComponent,
    PreAuditGpfDistrictEntryComponent,
    MprForwardingLetterDetailsListingComponent,
    AuditFeesDetailsRegisterComponent,
    AuditFeesDetailsRegisterReportComponent,
    AuditParaDetailRegisterSvoComponent,
    AuditParaDetailRegisterSvoReportComponent,
    AuditProgressRegisterSvoComponent,
    AuditProgressRegisterSvoReportComponent,
    AuditSupervisionRegisterComponent,
    AuditSupervisionRegisterReportComponent,
    OfficeStaffWorkAllocationDetailsComponent,
    OfficeStaffWorkAllocationDetailsReportComponent,
    CircleWiseOnAuditDutyOfficerDetailsComponent,
    CircleWiseOnAuditDutyOfficerDetailsReportComponent,
    RtiAppealRegisterComponent,
    RtiAppealRegisterListingComponent,
    PendingAuditMasterForSvoComponent,
    PendingAuditMasterForSvoReportComponent,
    QuarterlyRemovalPendingParaEntryComponent,
    QuarterlyRemovalPendingParaReportComponent,
    RtiReportRegisterComponent,
    PendingCasesForRemovalAtHqRegisterComponent,
    PendingCasesForRemovalAtHqRegisterReportComponent,
    PensionPreAuditCasesRegisterDetailsComponent,
    PensionPreAuditCasesRegisterReportComponent,
    DisposalOfPendingAuditParaComponent,
    DisposalOfPendingAuditParaReportComponent,
    ModelParaRegisterComponent,
    ModelParaRegisterListComponent,
    OutOfControlAuditRegisterEntryComponent,
    OutOfControlAuditRegisterReportComponent,
    DocumentRepositoryEntryComponent,
    DocumentRepositoryListingComponent,
    GpfInterestEightThreeThreeSixRegisterComponent,
    GpfInterestEightThreeThreeSixStatementReportComponent,
    AuditFileReportComponent,
    ConsolidatedDiaryReportComponent,
    WorkflowRegisterReportComponent,
    AnnualAdministrativeReportComponent,
    DistrictOfficeImportantParaRegisterComponent,
    AcpRegisterReportComponent,
    WorkflowDetailsLfComponent,
    EstablishmentHqListingComponent,
    EstablishmentDistrictOfficeListingComponent,
    EstablishmentForCorporationListingComponent,
    SearchEmployeeComponent,

  ], entryComponents: [
    GenerateInstituteCodeComponent,
    EstablishmentReportTablesComponent,
    NoParaListingComponent,
    NoOfDroppedParaListingComponent,
    NoOfPendingParaListingComponent,
    WorkflowDetailsLfComponent,
    SearchEmployeeComponent
  ]
})
export class LocalFundModule { }
