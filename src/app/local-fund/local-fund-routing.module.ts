import { ConsolidatedDiaryReportComponent } from './consolidated-diary-report/consolidated-diary-report.component';
// tslint:disable-next-line: max-line-length
import { DistrictOfficeImportantParaRegisterComponent } from './district-office-important-para-register/district-office-important-para-register.component';
import { AnnualAdministrativeReportComponent } from './annual-administrative-report/annual-administrative-report.component';
import { WorkflowRegisterReportComponent } from './workflow-register-report/workflow-register-report.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstituteMasterListingComponent } from './audit-master/institute-master-listing/institute-master-listing.component';
import { InstituteMasterScreenComponent } from './audit-master/institute-master-screen/institute-master-screen.component';
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
import { PendingParaRegisterComponent } from './pending-para-register/pending-para-register.component';
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
import { LrParaVerificationRegisterComponent } from './lr-para/lr-para-verification-register/lr-para-verification-register.component';
// tslint:disable-next-line: max-line-length
import { ScheduleFourLoanReceivedReportComponent } from './schedule-four/schedule-four-loan-received-report/schedule-four-loan-received-report.component';
import { ScheduleFourListingComponent } from './schedule-four/schedule-four-listing/schedule-four-listing.component';
import { ScheduleFiveListingComponent } from './schedule-five/schedule-five-listing/schedule-five-listing.component';
import { ScheduleFiveIncomeReportComponent } from './schedule-five/schedule-five-income-report/schedule-five-income-report.component';
import { ScheduleSixAnnualReportComponent } from './schedule-six/schedule-six-annual-report/schedule-six-annual-report.component';
import { ScheduleSixListingComponent } from './schedule-six/schedule-six-listing/schedule-six-listing.component';
import { AuditProcessRegisterComponent } from './audit-process-register/audit-process-register/audit-process-register.component';
// tslint:disable-next-line: max-line-length
import { AuditProcessRegisterListingComponent } from './audit-process-register/audit-process-register-listing/audit-process-register-listing.component';
import { DistrictMahekamRegisterComponent } from './district-mahekam-register/district-mahekam-register.component';
// tslint:disable-next-line: max-line-length
import { DistrictMahekamRegisterListComponent } from './district-mahekam-register/district-mahekam-register-list/district-mahekam-register-list.component';
// tslint:disable-next-line: max-line-length
import { DistrictMahekamRegisterViewComponent } from './district-mahekam-register/district-mahekam-register-view/district-mahekam-register-view.component';
import { FieldVisitRegisterComponent } from './field-visit-register/field-visit-register.component';
import { FieldVisitRegisterListComponent } from './field-visit-register/field-visit-register-list/field-visit-register-list.component';
import { FieldVisitRegisterViewComponent } from './field-visit-register/field-visit-register-view/field-visit-register-view.component';
import { InwardRegisterEntryComponent } from './inward-register/inward-register-entry/inward-register-entry.component';
import { InwardRegisterRegisterComponent } from './inward-register/inward-register-register/inward-register-register.component';
import { OutwardRegisterReportComponent } from './outward-register/outward-register-report/outward-register-report.component';
import { OutwardRegisterEntryComponent } from './outward-register/outward-register-entry/outward-register-entry.component';
import { RtiRegisterEntryComponent } from './rti-register/rti-register-entry/rti-register-entry.component';
import { RtiRegisterReportComponent } from './rti-register/rti-register-report/rti-register-report.component';
import { RtiRegisterListingComponent } from './rti-register/rti-register-listing/rti-register-listing.component';
import { EstablishmentDistrictOfficeComponent } from './audit-master/establishment-district-office/establishment-district-office.component';
import { EstablishmentForCorporationComponent } from './audit-master/establishment-for-corporation/establishment-for-corporation.component';
import { EstablishmentHqComponent } from './audit-master/establishment-hq/establishment-hq.component';
import { EstablishmentReportListingComponent } from './audit-master/establishment-report-listing/establishment-report-listing.component';
// tslint:disable-next-line: max-line-length
import { AdditionalMandaysRegisterComponent } from './additional-mandays-register/additional-mandays-register/additional-mandays-register.component';
// tslint:disable-next-line: max-line-length
import { LrParaVerificationRegisterReportComponent } from './lr-para/lr-para-verification-register-report/lr-para-verification-register-report.component';
import { StampRegisterEntryComponent } from './stamp-register/stamp-register-entry/stamp-register-entry.component';
import { StampRegisterListingComponent } from './stamp-register/stamp-register-listing/stamp-register-listing.component';
import { StampRegisterReportComponent } from './stamp-register/stamp-register-report/stamp-register-report.component';
// tslint:disable-next-line: max-line-length
import { AdditionalMandaysRegisterListingComponent } from './additional-mandays-register/additional-mandays-register-listing/additional-mandays-register-listing.component';
import { ScheduleThreeReportComponent } from './schedule-three/schedule-three-report/schedule-three-report.component';
import { PreAuditGpfDistrictEntryComponent } from './pre-audit-gpf/pre-audit-gpf-district-entry/pre-audit-gpf-district-entry.component';
// tslint:disable-next-line: max-line-length
import { PreAuditGpfDistrictListingComponent } from './pre-audit-gpf/pre-audit-gpf-district-listing/pre-audit-gpf-district-listing.component';
import { PreAuditGpfInstituteEntryComponent } from './pre-audit-gpf/pre-audit-gpf-institute-entry/pre-audit-gpf-institute-entry.component';
import { PreAuditGpfListingComponent } from './pre-audit-gpf/pre-audit-gpf-listing/pre-audit-gpf-listing.component';
import { ScheduleFourReportComponent } from './schedule-four/schedule-four-report/schedule-four-report.component';
import { ScheduleFiveReportComponent } from './schedule-five/schedule-five-report/schedule-five-report.component';
import { MprForwardingLetterDetailsComponent } from './mpr-forwarding-letter-details/mpr-forwarding-letter-details.component';
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
// tslint:disable-next-line: max-line-length
import { PensionPreAuditCasesRegisterDetailsComponent } from './pension-pre-audit-cases-register/pension-pre-audit-cases-register-details/pension-pre-audit-cases-register-details.component';
// tslint:disable-next-line: max-line-length
import { PensionPreAuditCasesRegisterReportComponent } from './pension-pre-audit-cases-register/pension-pre-audit-cases-register-report/pension-pre-audit-cases-register-report.component';
// tslint:disable-next-line: max-line-length
import { DisposalOfPendingAuditParaComponent } from './disposal-of-pending-audit-para-given-by-ag/disposal-of-pending-audit-para/disposal-of-pending-audit-para.component';
// tslint:disable-next-line: max-line-length
import { DisposalOfPendingAuditParaReportComponent } from './disposal-of-pending-audit-para-given-by-ag/disposal-of-pending-audit-para-report/disposal-of-pending-audit-para-report.component';
// tslint:disable-next-line: max-line-length
import { CircleWiseOnAuditDutyOfficerDetailsReportComponent } from './office-staff-work-allocation-details-register-for-mpr/circle-wise-on-audit-duty-officer-details-report/circle-wise-on-audit-duty-officer-details-report.component';
import { RtiReportRegisterComponent } from './rti-report-register/rti-report-register.component';
// tslint:disable-next-line: max-line-length
import { PendingCasesForRemovalAtHqRegisterComponent } from './pending-cases-for-removal-at-hq-register/pending-cases-for-removal-at-hq-register.component';
// tslint:disable-next-line: max-line-length
import { PendingCasesForRemovalAtHqRegisterReportComponent } from './pending-cases-for-removal-at-hq-register-report/pending-cases-for-removal-at-hq-register-report.component';
import { ModelParaRegisterListComponent } from './model-para-register/model-para-register-list/model-para-register-list.component';
import { ModelParaRegisterComponent } from './model-para-register/model-para-register.component';
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
import { AcpRegisterReportComponent } from './acp-register-report/acp-register-report.component';
import { EstablishmentDistrictOfficeListingComponent } from './audit-master/establishment-district-office-listing/establishment-district-office-listing.component';
import { EstablishmentHqListingComponent } from './audit-master/establishment-hq-listing/establishment-hq-listing.component';
import { EstablishmentForCorporationListingComponent } from './audit-master/establishment-for-corporation-listing/establishment-for-corporation-listing.component';
const routes: Routes = [
    {
        path: 'establishment-district-office',
        component: EstablishmentDistrictOfficeComponent
    },
    {
        path: 'establishment-for-corporation',
        component: EstablishmentForCorporationComponent
    },
    {
        path: 'establishment-hq',
        component: EstablishmentHqComponent
    },
    {
        path: 'establishment-report-listing',
        component: EstablishmentReportListingComponent
    },
    {
        path: 'additional-mandays-register',
        component: AdditionalMandaysRegisterComponent
    },
    {
        path: 'institute-master-listing',
        component: InstituteMasterListingComponent
    },
    {
        path: 'institute-master-screen',
        component: InstituteMasterScreenComponent
    },
    {
        path: 'major-head-master',
        component: MajorHeadMasterComponent
    },
    {
        path: 'pending-institute-audit-master',
        component: PendingInstituteAuditMasterComponent
    },
    {
        path: 'district-audit-planning',
        component: DistrictAuditPlanningComponent
    },
    {
        path: 'village-panchayat-audit-planning',
        component: VillagePanchayatAuditPlanningComponent
    },
    {
        path: 'quaterly-audit-report-planning',
        component: QuaterlyAuditReportPlanningComponent
    },
    {
        path: 'search-criteria',
        component: SearchCriteriaComponent
    },
    {
        path: 'online-dairy-submission',
        component: OnlineDiarySubmissionComponent
    },
    {
        path: 'district-panchayat-creator',
        component: DistrictPanchayatCreatorComponent
    },
    {
        path: 'audit-para',
        component: AuditParaRegisterComponent
    },
    {
        path: 'district-audit-planning-listing',
        component: DistrictAuditPlanningListingComponent
    },
    {
        path: 'hod-audit-planning',
        component: HodAuditPlanningComponent
    },
    {
        path: 'audit-para-register-report',
        component: AuditParaRegisterReportComponent
    },
    {
        path: 'audit-para-register-listing',
        component: AuditParaRegisterListingComponent
    },
    {
        path: 'online-dairy-submission-listing',
        component: OnlineDiarySubmissionListingComponent
    },
    {
        path: 'pending-para-register',
        component: PendingParaRegisterComponent
    },
    {
        path: 'grant-annexure-one-listing',
        component: GrantAnnexureOneListingComponent
    },
    {
        path: 'grant-annexure-one-search-criteria',
        component: GrantAnnexureOneRegisterSearchCriteriaComponent
    },
    {
        path: 'lr-para-entry',
        component: LrParaEntryComponent
    },
    {
        path: 'lr-para-listing',
        component: LrParaListingComponent
    },
    {
        path: 'lr-para-register-search-criteria',
        component: LrParaRegisterComponent
    },
    {
        path: 'schedule-two',
        component: ScheduleTwoComponent
    },
    {
        path: 'schedule-two-point-one',
        component: ScheduleTwoPointOneComponent
    },
    {
        path: 'schedule-three',
        component: ScheduleThreeComponent
    },
    {
        path: 'schedule-three-listing',
        component: ScheduleThreeListingComponent
    },
    {
        path: 'schedule-four',
        component: ScheduleFourLoanReceivedReportComponent
    },
    {
        path: 'schedule-four-listing',
        component: ScheduleFourListingComponent
    },
    {
        path: 'schedule-five',
        component: ScheduleFiveIncomeReportComponent
    },
    {
        path: 'schedule-five-listing',
        component: ScheduleFiveListingComponent
    },
    {
        path: 'schedule-six',
        component: ScheduleSixAnnualReportComponent
    },
    {
        path: 'schedule-six-listing',
        component: ScheduleSixListingComponent
    },
    {
        path: 'audit-process-register',
        component: AuditProcessRegisterComponent
    },
    {
        path: 'audit-process-register-listing',
        component: AuditProcessRegisterListingComponent
    },
    {
        path: 'lr-para-verification-register',
        component: LrParaVerificationRegisterComponent
    },
    {
        path: 'inward-register-entry',
        component: InwardRegisterEntryComponent
    },
    {
        path: 'inward-register-register',
        component: InwardRegisterRegisterComponent
    },
    {
        path: 'district-mahekam-register',
        component: DistrictMahekamRegisterComponent
    },
    {
        path: 'district-mahekam-register-list',
        component: DistrictMahekamRegisterListComponent
    },
    {
        path: 'district-mahekam-register-view',
        component: DistrictMahekamRegisterViewComponent
    },
    {
        path: 'field-visit-register',
        component: FieldVisitRegisterComponent
    },
    {
        path: 'field-visit-register-list',
        component: FieldVisitRegisterListComponent
    },
    {
        path: 'field-visit-register-view',
        component: FieldVisitRegisterViewComponent
    },
    {
        path: 'additional-mandays-register-listing',
        component: AdditionalMandaysRegisterListingComponent
    },
    {

        path: 'outward-register-entry',
        component: OutwardRegisterEntryComponent
    },
    {
        path: 'outward-register-report',
        component: OutwardRegisterReportComponent
    },
    {
        path: 'rti-register-entry',
        component: RtiRegisterEntryComponent
    },
    {
        path: 'rti-register-report',
        component: RtiRegisterReportComponent
    },
    {
        path: 'rti-register-listing',
        component: RtiRegisterListingComponent
    },
    {
        path: 'la-para-verification-register-report',
        component: LrParaVerificationRegisterReportComponent
    },
    {
        path: 'stamp-register-entry',
        component: StampRegisterEntryComponent
    },
    {
        path: 'stamp-register-listing',
        component: StampRegisterListingComponent
    },
    {
        path: 'stamp-register-report',
        component: StampRegisterReportComponent
    },
    {
        path: 'schedule-three-report',
        component: ScheduleThreeReportComponent
    },
    {

        path: 'pre-audit-gpf-district-entry',
        component: PreAuditGpfDistrictEntryComponent
    },
    {
        path: 'pre-audit-gpf-district-listing',
        component: PreAuditGpfDistrictListingComponent
    },
    {
        path: 'pre-audit-gpf-institute-entry',
        component: PreAuditGpfInstituteEntryComponent
    },
    {
        path: 'pre-audit-gpf-listing',
        component: PreAuditGpfListingComponent
    },
    {
        path: 'schedule-four-report',
        component: ScheduleFourReportComponent
    },
    {
        path: 'schedule-five-report',
        component: ScheduleFiveReportComponent
    },
    {
        path: 'mpr-forwarding-letter-details',
        component: MprForwardingLetterDetailsComponent
    },
    {
        path: 'mpr-forwarding-letter-details-listing',
        component: MprForwardingLetterDetailsListingComponent
    },
    {

        path: 'audit-fees-details-register',
        component: AuditFeesDetailsRegisterComponent
    },
    {
        path: 'audit-fees-details-register-report',
        component: AuditFeesDetailsRegisterReportComponent
    },
    {
        path: 'audit-para-detail-register-svo',
        component: AuditParaDetailRegisterSvoComponent
    },
    {
        path: 'audit-para-detail-register-svo-report',
        component: AuditParaDetailRegisterSvoReportComponent
    },
    {
        path: 'audit-progress-register-svo',
        component: AuditProgressRegisterSvoComponent
    },
    {
        path: 'audit-progress-register-svo-report',
        component: AuditProgressRegisterSvoReportComponent
    },
    {
        path: 'audit-supervision-register',
        component: AuditSupervisionRegisterComponent
    },
    {
        path: 'audit-supervision-register-report',
        component: AuditSupervisionRegisterReportComponent
    },
    {
        path: 'office-staff-work-allocation-details',
        component: OfficeStaffWorkAllocationDetailsComponent
    },
    {
        path: 'office-staff-work-allocation-details-report',
        component: OfficeStaffWorkAllocationDetailsReportComponent
    },
    {
        path: 'circle-wise-on-audit-duty-officer-details',
        component: CircleWiseOnAuditDutyOfficerDetailsComponent
    },
    {
        path: 'circle-wise-on-audit-duty-officer-details-report',
        component: CircleWiseOnAuditDutyOfficerDetailsReportComponent
    },
    {
        path: 'rti-appeal-register',
        component: RtiAppealRegisterComponent
    },
    {
        path: 'rti-appeal-register-listing',
        component: RtiAppealRegisterListingComponent
    },
    {
        path: 'pending-audit-master-for-svo',
        component: PendingAuditMasterForSvoComponent
    },
    {
        path: 'pending-audit-master-for-svo-report',
        component: PendingAuditMasterForSvoReportComponent
    },
    {
        path: 'quarterly-removal-pending-para-entry',
        component: QuarterlyRemovalPendingParaEntryComponent
    },
    {
        path: 'quarterly-removal-pending-para-report',
        component: QuarterlyRemovalPendingParaReportComponent
    },
    {
        path: 'rti-report-register',
        component: RtiReportRegisterComponent
    },
    {
        path: 'pending-cases-for-removal-at-hq-register',
        component: PendingCasesForRemovalAtHqRegisterComponent
    },
    {
        path: 'pending-cases-for-removal-at-hq-register-report',
        component: PendingCasesForRemovalAtHqRegisterReportComponent
    },
    {
        path: 'pension-pre-audit-cases-register-details',
        component: PensionPreAuditCasesRegisterDetailsComponent
    },
    {
        path: 'pension-pre-audit-cases-register-report',
        component: PensionPreAuditCasesRegisterReportComponent
    },
    {
        path: 'disposal-of-pending-audit-para',
        component: DisposalOfPendingAuditParaComponent
    },
    {
        path: 'disposal-of-pending-audit-para-report',
        component: DisposalOfPendingAuditParaReportComponent
    },
    {
        path: 'model-para-register',
        component: ModelParaRegisterComponent
    },
    {
        path: 'model-para-register-list',
        component: ModelParaRegisterListComponent
    },
    {
        path: 'out-of-control-audit-register-entry',
        component: OutOfControlAuditRegisterEntryComponent
    },
    {
        path: 'out-of-control-audit-register-report',
        component: OutOfControlAuditRegisterReportComponent
    },
    {
        path: 'document-repository-entry',
        component: DocumentRepositoryEntryComponent
    },
    {
        path: 'document-repository-listing',
        component: DocumentRepositoryListingComponent
    },
    {
        path: 'gpf-interest-eight-three-three-six-register',
        component: GpfInterestEightThreeThreeSixRegisterComponent
    },
    {
        path: 'gpf-interest-eight-three-three-six-statement-report',
        component: GpfInterestEightThreeThreeSixStatementReportComponent
    },
    {
        path: 'audit-file-report',
        component: AuditFileReportComponent
    },
    {
        path: 'consolidated-diary-report',
        component: ConsolidatedDiaryReportComponent
    },
    {
        path: 'workflow-register-report',
        component: WorkflowRegisterReportComponent
    },
    {
        path: 'annual-administrative-report',
        component: AnnualAdministrativeReportComponent
    },
    {
        path: 'district-office-important-para-register',
        component: DistrictOfficeImportantParaRegisterComponent
    },
    {
        path: 'acp-register-report',
        component: AcpRegisterReportComponent
    },
    {
        path: 'establishment-district-office-listing',
        component: EstablishmentDistrictOfficeListingComponent
    },
    {
        path: 'establishment-for-corporation-listing',
        component: EstablishmentForCorporationListingComponent
    },
    {
        path: 'establishment-hq-listing',
        component: EstablishmentHqListingComponent
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class LocalFundRoutingModule { }
