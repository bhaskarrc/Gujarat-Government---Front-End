

import { from } from 'rxjs';
import { MaterialModule } from './../material-module';
import { NgModule } from '@angular/core';
import { BudgetRoutingModule } from './budget-routing.module';
// tslint:disable-next-line: max-line-length
import {
  StandaloneChargeComponent, StandingChargeForwardDialogComponent, StadingChargeConfirmDialogComponent, StandingChargeViewCommentsComponent, DeleteConfirmDialogComponent2
} from './standing-charge/standalone-charge/standalone-charge.component';

import {
  StandingChargeForwardDialogComponent1, StadingChargeConfirmDialogComponent1, StandingChargeViewCommentsComponent1,
} from './new-item-estimate/new-item-estimates/new-item-estimates.component';

// tslint:disable-next-line: max-line-length
import { StandaloneChargeListingComponent, ViewCommentsComponent } from './standing-charge/standalone-charge-listing/standalone-charge-listing.component';
import { StandingChargeHistoryComponent } from './standing-charge/standing-charge-history/standing-charge-history.component';
import { StandingChargeViewComponent } from './standing-charge/standing-charge-view/standing-charge-view.component';
import { StandingChargeView1Component } from './standing-charge/standing-charge-view1/standing-charge-view1.component';
import { NewItemEstimatesComponent } from './new-item-estimate/new-item-estimates/new-item-estimates.component';
// tslint:disable-next-line: max-line-length
import { NewItemEstimatesListComponent, NewItemEstimatesForwardDialogComponent } from './new-item-estimate/new-item-estimates-list/new-item-estimates-list.component';
import { NewItemViewComponent } from './new-item-estimate/new-item-view/new-item-view.component';
import { CreateBudgetEstimateComponent, ItemContEstimateConfirmDialogComponent, ItemContEstimateDialogComponent, ItemContEstimateViewCommentsComponent } from './item-continuous/item-continuous-estimate/create-budget-estimate.component';
// tslint:disable-next-line: max-line-length
import { CreateBudgetEstimateListComponent, CreateForwardDialogComponent } from './item-continuous/item-continuous-list/create-budget-estimate-list.component';
import { CreateBudgetEstimateViewComponent } from './item-continuous/item-continuous-view/create-budget-estimate-view.component';
import { EstimateViewComponent } from './new-work/new-work-view/estimate-view.component';
import { EstimateListComponent } from './new-work/new-work-list/estimate-list.component';
import { CreateEstimateComponent } from './new-work/new-work-estimate/create-estimate.component';
import { ReceiptEstimatesComponent, ReceiptEstimateConfirmDialogComponent, ReceiptEstimateDialogComponent, ReceiptEstimateViewCommentsComponent } from './receipt-estimate/receipt-estimates/receipt-estimates.component';
// tslint:disable-next-line: max-line-length
import { ReceiptEstimatesListComponent, ReceiptForwardDialogComponent } from './receipt-estimate/receipt-estimates-list/receipt-estimates-list.component';
import { ReceiptEstimateViewComponent } from './receipt-estimate/receipt-estimate-view/receipt-estimate-view.component';
// tslint:disable-next-line: max-line-length
import { CreateRevisedReceiptEstimateComponent } from './revised-receipt-estimate/revised-receipt-estimate/create-revised-receipt-estimate.component';
// tslint:disable-next-line: max-line-length
import { RevisedRecepitListComponent, RevisedRecepitForwardDialogComponent } from './revised-receipt-estimate/revised-recepit-list/revised-recepit-list.component';
// tslint:disable-next-line: max-line-length
import { RevisedReceiptEstimateViewComponent } from './revised-receipt-estimate/revised-receipt-view/revised-receipt-estimate-view.component';
import { RevisedEstimateViewComponent } from './revised-expenditure/revised-expenditure-view/revised-estimate-view.component';
import { WorkInProgressComponent } from './work-in-progress/work-in-progress_list/work-in-progress.component';
import { WIPCreateEstimateComponent } from './work-in-progress/work-in-progress-estimate/wip-create-estimate.component';
import { WipViewEstimateComponent } from './work-in-progress/work-in-progress-view/wip-view-estimate.component';
import { RevisedComponent } from './revised-expenditure/revised-expenditure-estimate/revised.component';
// tslint:disable-next-line: max-line-length
import { RevisedListingComponent, RevisedEstimateForwardDialogComponent } from './revised-expenditure/revised-expenditure-listing/revised-listing.component';
import { OutcomeSubmitionAdminDepComponent } from './Outcome-Budget/outcome-achivement/outcome-submition-admin-dep.component';
import { OutcomeAnnualTargetsComponent } from './Outcome-Budget/outcome-annual-targets/outcome-annual-targets.component';
import { SupplementaryDemandComponent, SupplementaryDemandHistoryComponent } from './supplementary-demand-estimates/supplementary-demand/supplementary-demand.component';
import {
  SupplementaryDemandListComponent
} from './supplementary-demand-estimates/supplementary-demand-list/supplementary-demand-list.component';
import {
  SupplementaryDemandViewComponent
} from './supplementary-demand-estimates/supplementary-demand-view/supplementary-demand-view.component';

import { FreezeUnfreezeBudgetCeilingComponent } from './freeze-unfreeze-budget-ceiling/freeze-unfreeze-budget-ceiling.component';
import { NewSubHeadComponent } from './new-sub-head/new-sub-head.component';
import { CreateSubHeadComponent, NewSubHeadHistoryComponent } from './new-sub-head/create-sub-head/create-sub-head.component';
import {
  StandingChargeConsolidateComponent, StandingChargeConsolidateForwardDialogComponent, DialogOverviewExampleDialog
} from './standing-charge-consolidation/standing-charge-consolidate/standing-charge-consolidate.component';
import {
  StandingChargeSchemewiseDdoListComponent
} from './standing-charge-consolidation/standing-charge-schemewise-ddo-list/standing-charge-schemewise-ddo-list.component';
import {
  StandingChargeConsolidateViewComponent
} from './standing-charge-consolidation/standing-charge-consolidate-view/standing-charge-consolidate-view.component';
import { ItemTrackingReportComponent } from './reports/item-tracking-report/item-tracking-report.component';
import { DepartmentExpenditureReportComponent } from './reports/department-expenditure-report/department-expenditure-report.component';
import { CommonProtoModule } from '../common/common.module';
import { FinanceDepartmentComponent, FinanceViewHistryDiloagComponent } from './freeze-unfreeze-budget-ceiling/finance-department/finance-department.component';
import {
  AdministrativeDepartmentComponent, ViewHistryDiloagComponent2
} from './freeze-unfreeze-budget-ceiling/administrative-department/administrative-department.component';
import { HeadOfDepartmentComponent, ViewHistryDiloagComponent } from './freeze-unfreeze-budget-ceiling/head-of-department/head-of-department.component';
import { AdministrativeApprovalComponent } from './administrative-approval/administrative-approval.component';
import { NewItemEstimateConsolidationComponent } from './new-item-estimate-consolidation/new-item-estimate-consolidation.component';
import { UserCreationComponent } from './user-creation/user-creation.component';
import { UserRollMappingComponent } from './user-roll-mapping/user-roll-mapping.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {
  NewItemConsolidationComponent,
  NewItemConsolidateDialogComponent
} from './new-item-consolidation/new-item-consolidation/new-item-consolidate.component';
import {
  NewItemDdoRequestListComponent,
  NewItemMergeDialogComponent,
  BottomSheetOverviewExampleComponent
} from './new-item-consolidation/new-item-ddo-request-list/new-item-ddo-request-list.component';
import { NewItemHistoryComponent } from './new-item-consolidation/new-item-history/new-item-history.component';
import { StandingChargeConsolidateHistoryComponent } from 'src/app/budget/standing-charge-consolidation/standing-charge-consolidate-history/standing-charge-consolidate-history.component';
import {
  NewItemMergedItemsComponent,
  BottomWriteUpComponent
} from './new-item-consolidation/new-item-merged-items/new-item-merged-items.component';
import { LockingunlockingComponent, SubmitConfirmCommonDialigComponent1, } from './lockingunlocking/lockingunlockingtimelimit/lockingunlocking.component';
import { LockingunlockinglistingComponent } from './lockingunlocking/lockingunlockinglisting/lockingunlockinglisting.component';
import { BudgetComponent } from './budget/budget.component';
import { RevusedComponent } from './revused/revused.component';
import { StandingChargeConsolidateFdComponent, DialogOverviewFDExampleDialog, StandingChargeConsolidateForwardDialogFdComponent } from './standing-charge-consolidation/standing-charge-consolidate-fd/standing-charge-consolidate-fd.component';
import { BudgetListComponent, BudgetListDialogComponent } from './budget-list/budget-list.component';
import { PublicationsComponent } from './publications/publications.component';
import { PublicationsListComponent } from './publications-list/publications-list.component';
import { DelegationComponent } from './delegation/delegation.component';
import { DelegationListComponent } from './delegation-list/delegation-list.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { DisclaimerListComponent } from './disclaimer-list/disclaimer-list.component';
// import { OutcomeBudgetIntroductionComponent } from './Outcome-Budget-intr'

import { OutcomeBudgetIntroductionComponent } from './outcome-budget-introduction/outcome-budget-introduction.component';
import { MacroOutcomeComponent } from './macro-outcome/macro-outcome.component';
import { PhysicalTargetComponent } from './physical-target/physical-target.component';
import { UploadAsAccountComponent } from './upload-as-account/upload-as-account.component';
import { PhysicalTargetListComponent } from './physical-target-list/physical-target-list.component';
import { ReceiptEstimateConsolidateComponent } from './receipt-estimate-consolidate/receipt-estimate-consolidate.component';
// tslint:disable-next-line: max-line-length
import { ReceiptEstimateConsolidateViewComponent } from './receipt-estimate-consolidate/receipt-estimate-consolidate-view/receipt-estimate-consolidate-view.component';
// tslint:disable-next-line: max-line-length
import { ReceiptEstimateConsolidateListComponent } from './receipt-estimate-consolidate/receipt-estimate-consolidate-list/receipt-estimate-consolidate-list.component';
import { UploadAsAccountListComponent } from './upload-as-account-list/upload-as-account-list.component';
import { AdministrativeApproval2Component } from './administrative-approval2/administrative-approval2.component';
import { BudgetBookPrintComponent } from './budget-book-print/budget-book-print.component';
import { AdministrativeApprovalViewComponent } from './administrative-approval-view/administrative-approval-view.component';
import { OutcomeAchivementListingComponent } from './Outcome-Budget/outcome-achivement-listing/outcome-achivement-listing.component';
import { AdminRemarksComponent } from './admin-remarks/admin-remarks.component';
import { CommentDetailsBudgetComponent } from './comment-details-budget/comment-details-budget.component';
import { ExpenditurExplanationWriteupComponent } from './expenditur-explanation-writeup/expenditur-explanation-writeup.component';
import { ExpenditurExplanationWriteupListingComponent } from './expenditur-explanation-writeup-listing/expenditur-explanation-writeup-listing.component';
import { AnnualFinacialStatmentComponent } from './annual-financial-statement/annual-finacial-statment.component';
import { AnnualFinancialStatementListignComponent } from './annual-financial-statement-listing/annual-financial-statement-listign.component';
import { SaveConfirmDialogComponent } from './save-confirm-dialog/save-confirm-dialog.component';
import { SchemeTypeMappingComponent, SchemeTypeForwardDialogComponent } from './scheme-type-mapping/scheme-type-mapping.component';
import { WireframeOfEstablishmentDetailsComponent, DeleteConfirmDialogComponent } from './wireframe-of-establishment-details/wireframe-of-establishment-details.component';
import { WireframeOfEstablishmentListComponent, DeleteConfirmDialogComponent3 } from './wireframe-of-establishment-details/wireframe-of-establishment-list/wireframe-of-establishment-list.component';
import { StandingchargelistDuplicateComponent } from './standingchargelist-duplicate/standingchargelist-duplicate.component';
import { SaveConfirmDialogComponent1 } from './freeze-unfreeze-budget-ceiling/administrative-department/save-confirm-dialog/save-confirm-dialog.component';
import { SaveDialogComponent } from './freeze-unfreeze-budget-ceiling/finance-department/save-dialog/save-dialog.component';
import { StandingChargeEditComponent } from './standing-charge/standing-charge-edit/standing-charge-edit.component';
import { ReceiptHeadMasterComponent, ObjectHradMasterComponent } from './receipt-head-master/receipt-head-master.component';
import { StandingChargeConsolidationListComponent } from './standing-charge-consolidation/standing-charge-consolidation-list/standing-charge-consolidation-list.component';
import { ReceiptConsolidateListComponent, ReceiptConsolidateViewCommentsComponent } from './receipt-consolidate-list/receipt-consolidate-list.component';
import { HodCoListComponent } from './hod-co-list/hod-co-list.component';
import { ReceiptConsolidateViewComponent } from './receipt-consolidate-view/receipt-consolidate-view.component';
import { ReceiptConsolidateNameViewComponent } from './receipt-consolidate-name-view/receipt-consolidate-name-view.component';
import { ReceiptConsolidateComponent } from './receipt-consolidate/receipt-consolidate.component';
import { AnnexureAComponent, SubmitConfirmCommonDialogComponent } from './annexure-a/annexure-a.component';
import { AnnexureAListComponent } from './annexure-a-list/annexure-a-list.component';
import { AnnexureAViewComponent } from './annexure-a-view/annexure-a-view.component';
import { FdGroupMappingComponent, FdGroupMappingDialogComponent } from './fd-group-mapping/fd-group-mapping.component';
import { ItemContinuousConsolidateListComponent } from './item-continuous-consolidate/item-continuous-consolidate-list/item-continuous-consolidate-list.component';
import { ItemContinuousConsolidateComponent } from './item-continuous-consolidate/item-continuous-consolidate/item-continuous-consolidate.component';
import { ItemContinuousSchemewiseDdoListComponent } from './item-continuous-consolidate/item-continuous-schemewise-ddo-list/item-continuous-schemewise-ddo-list.component';
import { ItemContinuousConsolidateViewComponent } from './item-continuous-consolidate/item-continuous-consolidate-view/item-continuous-consolidate-view.component';
import { WorkInProgressConsolidateViewComponent } from './work-in-progress-consolidate/work-in-progress-consolidate-view/work-in-progress-consolidate-view.component';
import { WorkInProgressConsolidateListComponent } from './work-in-progress-consolidate/work-in-progress-consolidate-list/work-in-progress-consolidate-list.component';
import { WorkInProgressSchemewiseDdoListComponent } from './work-in-progress-consolidate/work-in-progress-schemewise-ddo-list/work-in-progress-schemewise-ddo-list.component';
import { WorkInProgressConsolidateComponent } from './work-in-progress-consolidate/work-in-progress-consolidate/work-in-progress-consolidate.component';
import { SchemeTypeWiseMappingComponent } from './scheme-type-wise-mapping/scheme-type-wise-mapping.component';
import { MhObjectMappingComponent } from './mh-object-mapping/mh-object-mapping.component';
import { StandingChargeConsolidateNameViewComponent } from './standing-charge-consolidate-name-view/standing-charge-consolidate-name-view.component';
import { AdminApprovalListComponent } from './admin-approval-list/admin-approval-list.component';
import { AdminApprovalComponent } from './admin-approval/admin-approval.component';
import { AdminApprovalViewComponent } from './admin-approval-view/admin-approval-view.component';
import { RevisedReceiptConsolidationListComponent } from './revised-receipt-consolidate/revised-receipt-consolidation-list/revised-receipt-consolidation-list.component';
import { RevisedReceiptConsolidationComponent } from './revised-receipt-consolidate/revised-receipt-consolidation/revised-receipt-consolidation.component';
import { RevisedReceiptConsolidationViewComponent } from './revised-receipt-consolidate/revised-receipt-consolidation-view/revised-receipt-consolidation-view.component';
import { DepartmentListComponent } from './revised-receipt-consolidate/department-list/department-list.component';
import { ItemContinuousEstimateDuplicateComponent } from './item-continuous-estimate-duplicate/item-continuous-estimate-duplicate.component';
import { ReceiptEstimateDuplicateComponent } from './receipt-estimate/receipt-estimate-duplicate/receipt-estimate-duplicate.component';
import { RevisedReceiptEstimateDuplicateComponent } from './revised-receipt-estimate/revised-receipt-estimate-duplicate/revised-receipt-estimate-duplicate.component';
import { NewItemEstimateDuplicateComponent } from './new-item-estimate/new-item-estimate-duplicate/new-item-estimate-duplicate.component';
import { GenerateBudgetBookComponent } from './generate-budget-book/generate-budget-book.component';
import { FdGroupMappingListComponent } from './fd-group-mapping/fd-group-mapping-list/fd-group-mapping-list.component';
import { BranchCreationComponent } from './branch-mapping/branch-creation/branch-creation.component';
import { BranchMappingComponent, TransferConfirmCommonDialogComponent } from './branch-mapping/branch-mapping/branch-mapping.component';
import { MacroOutcomeDetailsComponent } from './macro-outcome-details/macro-outcome-details.component';
import { PhysicalTargetDetailsComponent } from './physical-target-details/physical-target-details.component';
// import { OutcomeSubmissionDetailsComponent } from './outcome-budget/outcome-submission-details/outcome-submission-details.component';
import { SupplementaryDemandConsolidateComponent } from './supplementary-demand-consolidate/supplementary-demand-consolidate.component';
import { SupplementaryDemandConsolidateListComponent } from './supplementary-demand-consolidate/supplementary-demand-consolidate-list/supplementary-demand-consolidate-list.component';
import { SupplementaryDemandConsolidateViewComponent } from './supplementary-demand-consolidate/supplementary-demand-consolidate-view/supplementary-demand-consolidate-view.component';
import { OutcomeSubmissionDetailsComponent } from './Outcome-Budget/outcome-submission-details/outcome-submission-details.component';
import { AchievementDetailsComponent } from './achievement-details/achievement-details.component';
import { DepartmentAchievementDetailsListComponent } from './department-achievement-details-list/department-achievement-details-list.component';
import { AchievementAgainstTargetsComponent } from './Outcome-Budget/achievement-against-targets/achievement-against-targets.component';
import { CreateSubHeadDuplicateComponent } from './new-sub-head/create-sub-head-duplicate/create-sub-head-duplicate.component';
import { RemarksPopupComponent } from './supplementary-demand-estimates/remarks-popup/remarks-popup.component';
import { MacroOutcomeWorkflowComponent } from './macro-outcome-details/macro-outcome-workflow/macro-outcome-workflow.component';
import { MacroOutcomeHistoryPopupComponent } from './macro-outcome-details/macro-outcome-history-popup/macro-outcome-history-popup.component';
import { DepartmentAchievementDetailsComponent } from './department-achievement-details/department-achievement-details.component';








@NgModule({
  imports: [
    BudgetRoutingModule,
    CommonProtoModule,
    MaterialModule,
    Ng2SearchPipeModule,

  ],
  declarations: [
    DeleteConfirmDialogComponent3,
    DeleteConfirmDialogComponent2,
    StandaloneChargeComponent,
    DialogOverviewExampleDialog,
    StandingChargeForwardDialogComponent,
    StandingChargeViewCommentsComponent,
    SchemeTypeMappingComponent,
    StadingChargeConfirmDialogComponent,
    StandingChargeForwardDialogComponent1,
    StandingChargeViewCommentsComponent1,
    StadingChargeConfirmDialogComponent1,
    StandaloneChargeListingComponent,
    StandingChargeHistoryComponent,
    StandingChargeViewComponent,
    StandingChargeView1Component,
    NewItemEstimatesComponent,
    NewItemEstimatesListComponent,
    NewItemEstimatesForwardDialogComponent,
    NewItemViewComponent,
    CreateBudgetEstimateComponent,
    CreateBudgetEstimateListComponent,
    CreateBudgetEstimateViewComponent,
    CreateForwardDialogComponent,
    EstimateViewComponent,
    EstimateListComponent,
    CreateEstimateComponent,
    ReceiptEstimatesComponent,
    ReceiptEstimatesListComponent,
    ReceiptForwardDialogComponent,
    ReceiptEstimateViewComponent,
    CreateRevisedReceiptEstimateComponent,
    RevisedRecepitListComponent,
    RevisedReceiptEstimateViewComponent,
    RevisedRecepitForwardDialogComponent,
    WorkInProgressComponent,
    WIPCreateEstimateComponent,
    WipViewEstimateComponent,
    RevisedEstimateViewComponent,
    RevisedComponent,
    RevisedListingComponent,
    RevisedEstimateForwardDialogComponent,
    CreateRevisedReceiptEstimateComponent,
    RevisedRecepitListComponent,
    OutcomeSubmitionAdminDepComponent,
    OutcomeAnnualTargetsComponent,
    SupplementaryDemandComponent,
    SupplementaryDemandListComponent,
    SupplementaryDemandViewComponent,
    LockingunlockingComponent,
    FreezeUnfreezeBudgetCeilingComponent,
    NewSubHeadComponent,
    CreateSubHeadComponent,
    StandingChargeConsolidateComponent,
    StandingChargeSchemewiseDdoListComponent,
    StandingChargeConsolidateViewComponent,
    StandingChargeConsolidateForwardDialogComponent,
    SchemeTypeForwardDialogComponent,
    ItemTrackingReportComponent,
    DepartmentExpenditureReportComponent,
    NewItemEstimateConsolidationComponent,
    FinanceDepartmentComponent,
    AdministrativeDepartmentComponent,
    HeadOfDepartmentComponent,
    AdministrativeApprovalComponent,
    UserCreationComponent,
    UserRollMappingComponent,
    NewItemConsolidationComponent,
    NewItemDdoRequestListComponent,
    NewItemMergeDialogComponent,
    NewItemConsolidateDialogComponent,
    NewItemHistoryComponent,
    BottomSheetOverviewExampleComponent,
    StandingChargeConsolidateHistoryComponent,
    NewItemMergedItemsComponent,
    BottomWriteUpComponent,
    LockingunlockinglistingComponent,
    BudgetComponent,
    RevusedComponent,
    StandingChargeConsolidateFdComponent,
    DialogOverviewFDExampleDialog,
    BudgetListComponent,
    PublicationsComponent,
    PublicationsListComponent,
    ViewCommentsComponent,
    BudgetListDialogComponent,
    DelegationComponent,
    DelegationListComponent,
    DisclaimerComponent,
    DisclaimerListComponent,
    OutcomeBudgetIntroductionComponent,
    MacroOutcomeComponent,
    PhysicalTargetComponent,
    UploadAsAccountComponent,
    PhysicalTargetListComponent,
    ReceiptEstimateConsolidateComponent,
    ReceiptEstimateConsolidateViewComponent,
    ReceiptEstimateConsolidateListComponent,
    StandingChargeConsolidateForwardDialogFdComponent,
    UploadAsAccountListComponent,
    AdministrativeApproval2Component,
    BudgetBookPrintComponent,
    AdministrativeApprovalViewComponent,
    OutcomeAchivementListingComponent,
    AdminRemarksComponent,
    CommentDetailsBudgetComponent,
    ExpenditurExplanationWriteupComponent,
    ExpenditurExplanationWriteupListingComponent,
    AnnualFinacialStatmentComponent,
    AnnualFinancialStatementListignComponent,
    SaveConfirmDialogComponent,
    SaveConfirmDialogComponent1,
    SchemeTypeMappingComponent,
    DeleteConfirmDialogComponent,
    WireframeOfEstablishmentDetailsComponent,
    WireframeOfEstablishmentListComponent,
    StandingchargelistDuplicateComponent,
    FinanceViewHistryDiloagComponent,
    ViewHistryDiloagComponent,
    ViewHistryDiloagComponent2,
    SaveDialogComponent,
    StandingChargeEditComponent,
    ReceiptHeadMasterComponent,
    ObjectHradMasterComponent,
    StandingChargeConsolidationListComponent,
    ReceiptConsolidateListComponent,
    HodCoListComponent,
    ReceiptConsolidateViewComponent,
    ReceiptConsolidateNameViewComponent,
    ReceiptConsolidateComponent,
    SubmitConfirmCommonDialigComponent1,
    ReceiptConsolidateListComponent,
    AnnexureAComponent,
    AnnexureAListComponent,
    SubmitConfirmCommonDialogComponent,
    AnnexureAViewComponent,
    FdGroupMappingComponent,
    ItemContinuousConsolidateListComponent,
    ItemContinuousConsolidateComponent,
    ItemContinuousSchemewiseDdoListComponent,
    ItemContinuousConsolidateViewComponent,
    WorkInProgressConsolidateViewComponent,
    WorkInProgressConsolidateListComponent,
    WorkInProgressSchemewiseDdoListComponent,
    WorkInProgressConsolidateComponent,
    SchemeTypeWiseMappingComponent,
    ReceiptEstimateDialogComponent,
    ReceiptEstimateConfirmDialogComponent,
    ReceiptEstimateViewCommentsComponent,
    ReceiptConsolidateViewCommentsComponent,
    MhObjectMappingComponent,
    ItemContEstimateDialogComponent,
    ItemContEstimateConfirmDialogComponent,
    ItemContEstimateViewCommentsComponent,
    StandingChargeConsolidateNameViewComponent,
    AdminApprovalListComponent,
    AdminApprovalComponent,
    AdminApprovalViewComponent,
    RevisedReceiptConsolidationListComponent,
    RevisedReceiptConsolidationComponent,
    RevisedReceiptConsolidationViewComponent,
    DepartmentListComponent,
    ItemContinuousEstimateDuplicateComponent,
    ReceiptEstimateDuplicateComponent,
    RevisedReceiptEstimateDuplicateComponent,
    NewItemEstimateDuplicateComponent,
    GenerateBudgetBookComponent,
    FdGroupMappingDialogComponent,
    FdGroupMappingListComponent,
    BranchCreationComponent,
    BranchMappingComponent,
    TransferConfirmCommonDialogComponent,
    MacroOutcomeDetailsComponent,
    PhysicalTargetDetailsComponent,
    OutcomeSubmissionDetailsComponent,
    SupplementaryDemandConsolidateComponent,
    SupplementaryDemandConsolidateListComponent,
    SupplementaryDemandConsolidateViewComponent,
    SupplementaryDemandHistoryComponent,
    AchievementDetailsComponent,
    DepartmentAchievementDetailsListComponent,
    AchievementAgainstTargetsComponent,
    NewSubHeadHistoryComponent,
    CreateSubHeadDuplicateComponent,
    RemarksPopupComponent,
    MacroOutcomeWorkflowComponent,
    MacroOutcomeHistoryPopupComponent,
    DepartmentAchievementDetailsComponent,
  ],
  entryComponents: [
    SaveDialogComponent,
    SubmitConfirmCommonDialogComponent,
    DeleteConfirmDialogComponent2,
    DeleteConfirmDialogComponent3,
    DeleteConfirmDialogComponent,
    SchemeTypeForwardDialogComponent,
    StandaloneChargeComponent,
    NewItemConsolidateDialogComponent,
    NewItemEstimatesForwardDialogComponent,
    NewItemMergeDialogComponent,
    NewItemHistoryComponent,
    BottomSheetOverviewExampleComponent,
    StandingChargeHistoryComponent,
    StandingChargeForwardDialogComponent,
    StandingChargeViewCommentsComponent,
    StandingChargeForwardDialogComponent1,
    StandingChargeViewCommentsComponent1,
    ViewCommentsComponent,
    StadingChargeConfirmDialogComponent,
    StadingChargeConfirmDialogComponent1,
    StandingChargeConsolidateHistoryComponent,
    NewItemHistoryComponent,
    StandingChargeForwardDialogComponent,
    NewItemMergedItemsComponent,
    BottomWriteUpComponent,
    BudgetListDialogComponent,
    DialogOverviewExampleDialog,
    StandingChargeConsolidateForwardDialogFdComponent,
    CommentDetailsBudgetComponent,
    SaveConfirmDialogComponent,
    SaveConfirmDialogComponent1,
    FinanceViewHistryDiloagComponent,
    ViewHistryDiloagComponent,
    ViewHistryDiloagComponent2,
    ObjectHradMasterComponent,
    SubmitConfirmCommonDialigComponent1,
    ReceiptEstimateDialogComponent,
    ReceiptEstimateConfirmDialogComponent,
    ReceiptEstimateViewCommentsComponent,
    ReceiptConsolidateViewCommentsComponent,
    ItemContEstimateDialogComponent,
    ItemContEstimateConfirmDialogComponent,
    ItemContEstimateViewCommentsComponent,
    FdGroupMappingDialogComponent,
    TransferConfirmCommonDialogComponent,
    SupplementaryDemandHistoryComponent,
    NewSubHeadHistoryComponent,
    RemarksPopupComponent,
    MacroOutcomeWorkflowComponent,
    MacroOutcomeHistoryPopupComponent,
  ]
})
export class BudgetModule { }
