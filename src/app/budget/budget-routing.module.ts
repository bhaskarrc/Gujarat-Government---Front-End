import { WireframeOfEstablishmentDetailsComponent } from './wireframe-of-establishment-details/wireframe-of-establishment-details.component';
import { CommentDetailsBudgetComponent } from './comment-details-budget/comment-details-budget.component';

import { RevusedComponent } from './revused/revused.component';
import { BudgetComponent } from './budget/budget.component';
import { UserRollMappingComponent } from './user-roll-mapping/user-roll-mapping.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StandaloneChargeComponent } from './standing-charge/standalone-charge/standalone-charge.component';
import { StandingChargeViewComponent } from './standing-charge/standing-charge-view/standing-charge-view.component';
import { StandaloneChargeListingComponent } from './standing-charge/standalone-charge-listing/standalone-charge-listing.component';
import { NewItemEstimatesComponent } from './new-item-estimate/new-item-estimates/new-item-estimates.component';
import { NewItemEstimatesListComponent } from './new-item-estimate/new-item-estimates-list/new-item-estimates-list.component';
import { NewItemViewComponent } from './new-item-estimate/new-item-view/new-item-view.component';
import { CreateBudgetEstimateComponent } from './item-continuous/item-continuous-estimate/create-budget-estimate.component';
import { CreateBudgetEstimateListComponent } from './item-continuous/item-continuous-list/create-budget-estimate-list.component';
import { CreateBudgetEstimateViewComponent } from './item-continuous/item-continuous-view/create-budget-estimate-view.component';
import { CreateEstimateComponent } from './new-work/new-work-estimate/create-estimate.component';
import { EstimateListComponent } from './new-work/new-work-list/estimate-list.component';
import { EstimateViewComponent } from './new-work/new-work-view/estimate-view.component';
import { ReceiptEstimatesComponent } from './receipt-estimate/receipt-estimates/receipt-estimates.component';
import { ReceiptEstimatesListComponent } from './receipt-estimate/receipt-estimates-list/receipt-estimates-list.component';
import { ReceiptEstimateViewComponent } from './receipt-estimate/receipt-estimate-view/receipt-estimate-view.component';
import { WorkInProgressComponent } from './work-in-progress/work-in-progress_list/work-in-progress.component';
import { WIPCreateEstimateComponent } from './work-in-progress/work-in-progress-estimate/wip-create-estimate.component';
import { WipViewEstimateComponent } from './work-in-progress/work-in-progress-view/wip-view-estimate.component';
import { RevisedComponent } from './revised-expenditure/revised-expenditure-estimate/revised.component';
import { RevisedListingComponent } from './revised-expenditure/revised-expenditure-listing/revised-listing.component';
import { RevisedEstimateViewComponent } from './revised-expenditure/revised-expenditure-view/revised-estimate-view.component';
import { RevisedRecepitListComponent } from './revised-receipt-estimate/revised-recepit-list/revised-recepit-list.component';
// tslint:disable-next-line: max-line-length
import { CreateRevisedReceiptEstimateComponent } from './revised-receipt-estimate/revised-receipt-estimate/create-revised-receipt-estimate.component';
// tslint:disable-next-line: max-line-length
import { RevisedReceiptEstimateViewComponent } from './revised-receipt-estimate/revised-receipt-view/revised-receipt-estimate-view.component';
import { OutcomeSubmitionAdminDepComponent } from './Outcome-Budget/outcome-achivement/outcome-submition-admin-dep.component';
import { OutcomeAnnualTargetsComponent } from './Outcome-Budget/outcome-annual-targets/outcome-annual-targets.component';
import { SupplementaryDemandComponent } from './supplementary-demand-estimates/supplementary-demand/supplementary-demand.component';
// tslint:disable-next-line: max-line-length
import { SupplementaryDemandListComponent } from './supplementary-demand-estimates/supplementary-demand-list/supplementary-demand-list.component';
// tslint:disable-next-line: max-line-length
import { SupplementaryDemandViewComponent } from './supplementary-demand-estimates/supplementary-demand-view/supplementary-demand-view.component';

import { FreezeUnfreezeBudgetCeilingComponent } from './freeze-unfreeze-budget-ceiling/freeze-unfreeze-budget-ceiling.component';
import { NewSubHeadComponent } from './new-sub-head/new-sub-head.component';
import { CreateSubHeadComponent } from './new-sub-head/create-sub-head/create-sub-head.component';
import {
  StandingChargeConsolidateComponent
} from './standing-charge-consolidation/standing-charge-consolidate/standing-charge-consolidate.component';

import {
  StandingChargeSchemewiseDdoListComponent
} from './standing-charge-consolidation/standing-charge-schemewise-ddo-list/standing-charge-schemewise-ddo-list.component';
import {
  StandingChargeConsolidateViewComponent
} from './standing-charge-consolidation/standing-charge-consolidate-view/standing-charge-consolidate-view.component';
import { DepartmentExpenditureReportComponent } from './reports/department-expenditure-report/department-expenditure-report.component';
import { ItemTrackingReportComponent } from './reports/item-tracking-report/item-tracking-report.component';

import { FinanceDepartmentComponent } from './freeze-unfreeze-budget-ceiling/finance-department/finance-department.component';
import {
  AdministrativeDepartmentComponent
} from './freeze-unfreeze-budget-ceiling/administrative-department/administrative-department.component';
import { HeadOfDepartmentComponent } from './freeze-unfreeze-budget-ceiling/head-of-department/head-of-department.component';
import { AdministrativeApprovalComponent } from './administrative-approval/administrative-approval.component';
import { NewItemEstimateConsolidationComponent } from './new-item-estimate-consolidation/new-item-estimate-consolidation.component';
import { UserCreationComponent } from './user-creation/user-creation.component';
import { NewItemConsolidationComponent } from './new-item-consolidation/new-item-consolidation/new-item-consolidate.component';
import { NewItemDdoRequestListComponent } from './new-item-consolidation/new-item-ddo-request-list/new-item-ddo-request-list.component';
import { LockingunlockingComponent } from './lockingunlocking/lockingunlockingtimelimit/lockingunlocking.component';
import { LockingunlockinglistingComponent } from './lockingunlocking/lockingunlockinglisting/lockingunlockinglisting.component';
import { StandingChargeConsolidateFdComponent } from './standing-charge-consolidation/standing-charge-consolidate-fd/standing-charge-consolidate-fd.component';
import { BudgetListComponent } from './budget-list/budget-list.component';
import { DelegationComponent } from './delegation/delegation.component';
import { DelegationListComponent } from './delegation-list/delegation-list.component';
import { PublicationsListComponent } from './publications-list/publications-list.component';
import { PublicationsComponent } from './publications/publications.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { DisclaimerListComponent } from './disclaimer-list/disclaimer-list.component';
import { OutcomeBudgetIntroductionComponent } from './outcome-budget-introduction/outcome-budget-introduction.component';
import { MacroOutcomeComponent } from './macro-outcome/macro-outcome.component';
import { PhysicalTargetComponent } from './physical-target/physical-target.component';
import { UploadAsAccountComponent } from './upload-as-account/upload-as-account.component';
import { UploadAsAccountListComponent } from './upload-as-account-list/upload-as-account-list.component';
import { AdministrativeApproval2Component } from './administrative-approval2/administrative-approval2.component';
import { AdministrativeApprovalViewComponent } from './administrative-approval-view/administrative-approval-view.component';
import { OutcomeAchivementListingComponent } from './Outcome-Budget/outcome-achivement-listing/outcome-achivement-listing.component';
import { PhysicalTargetListComponent } from './physical-target-list/physical-target-list.component';
import { ReceiptEstimateConsolidateComponent } from './receipt-estimate-consolidate/receipt-estimate-consolidate.component';
import { ReceiptEstimateConsolidateListComponent } from './receipt-estimate-consolidate/receipt-estimate-consolidate-list/receipt-estimate-consolidate-list.component';
import { ExpenditurExplanationWriteupComponent } from './expenditur-explanation-writeup/expenditur-explanation-writeup.component';
import { ExpenditurExplanationWriteupListingComponent } from './expenditur-explanation-writeup-listing/expenditur-explanation-writeup-listing.component';
import { AnnualFinacialStatmentComponent } from './annual-financial-statement/annual-finacial-statment.component';
import { AnnualFinancialStatementListignComponent } from './annual-financial-statement-listing/annual-financial-statement-listign.component';
import { SchemeTypeMappingComponent } from './scheme-type-mapping/scheme-type-mapping.component';
import { WireframeOfEstablishmentListComponent } from './wireframe-of-establishment-details/wireframe-of-establishment-list/wireframe-of-establishment-list.component';
import { StandingchargelistDuplicateComponent } from './standingchargelist-duplicate/standingchargelist-duplicate.component';
import { ReceiptHeadMasterComponent } from './receipt-head-master/receipt-head-master.component';
import { StandingChargeConsolidationListComponent } from './standing-charge-consolidation/standing-charge-consolidation-list/standing-charge-consolidation-list.component';
import { StandingChargeEditComponent } from './standing-charge/standing-charge-edit/standing-charge-edit.component';
import { ReceiptConsolidateListComponent } from './receipt-consolidate-list/receipt-consolidate-list.component';
import { HodCoListComponent } from './hod-co-list/hod-co-list.component';
import { ReceiptConsolidateViewComponent } from './receipt-consolidate-view/receipt-consolidate-view.component';
import { ReceiptConsolidateNameViewComponent } from './receipt-consolidate-name-view/receipt-consolidate-name-view.component';
import { ReceiptConsolidateComponent } from './receipt-consolidate/receipt-consolidate.component';
import { AnnexureAComponent } from './annexure-a/annexure-a.component';
import { AnnexureAListComponent } from './annexure-a-list/annexure-a-list.component';
import { AnnexureAViewComponent } from './annexure-a-view/annexure-a-view.component';
import { FdGroupMappingComponent } from './fd-group-mapping/fd-group-mapping.component';
import { ItemContinuousConsolidateListComponent } from './item-continuous-consolidate/item-continuous-consolidate-list/item-continuous-consolidate-list.component';
import { ItemContinuousConsolidateComponent } from './item-continuous-consolidate/item-continuous-consolidate/item-continuous-consolidate.component';
import { ItemContinuousSchemewiseDdoListComponent } from './item-continuous-consolidate/item-continuous-schemewise-ddo-list/item-continuous-schemewise-ddo-list.component';
import { ItemContinuousConsolidateViewComponent } from './item-continuous-consolidate/item-continuous-consolidate-view/item-continuous-consolidate-view.component';
import { WorkInProgressConsolidateListComponent } from './work-in-progress-consolidate/work-in-progress-consolidate-list/work-in-progress-consolidate-list.component';
import { WorkInProgressConsolidateViewComponent } from './work-in-progress-consolidate/work-in-progress-consolidate-view/work-in-progress-consolidate-view.component';
import { WorkInProgressConsolidateComponent } from './work-in-progress-consolidate/work-in-progress-consolidate/work-in-progress-consolidate.component';
import { WorkInProgressSchemewiseDdoListComponent } from './work-in-progress-consolidate/work-in-progress-schemewise-ddo-list/work-in-progress-schemewise-ddo-list.component';
import { SchemeTypeWiseMappingComponent } from './scheme-type-wise-mapping/scheme-type-wise-mapping.component';
import { MhObjectMappingComponent } from './mh-object-mapping/mh-object-mapping.component';
import { StandingChargeConsolidateNameViewComponent } from './standing-charge-consolidate-name-view/standing-charge-consolidate-name-view.component';
import { AdminApprovalListComponent } from './admin-approval-list/admin-approval-list.component';
import { AdminApprovalComponent } from './admin-approval/admin-approval.component';
import { AdminApprovalViewComponent } from './admin-approval-view/admin-approval-view.component';
import { RevisedReceiptConsolidationComponent } from './revised-receipt-consolidate/revised-receipt-consolidation/revised-receipt-consolidation.component';
import { RevisedReceiptConsolidationListComponent } from './revised-receipt-consolidate/revised-receipt-consolidation-list/revised-receipt-consolidation-list.component';
import { RevisedReceiptConsolidationViewComponent } from './revised-receipt-consolidate/revised-receipt-consolidation-view/revised-receipt-consolidation-view.component';
import { DepartmentListComponent } from './revised-receipt-consolidate/department-list/department-list.component';
import { ItemContinuousEstimateDuplicateComponent } from './item-continuous-estimate-duplicate/item-continuous-estimate-duplicate.component';
import { ReceiptEstimateDuplicateComponent } from './receipt-estimate/receipt-estimate-duplicate/receipt-estimate-duplicate.component';
import { RevisedReceiptEstimateDuplicateComponent } from './revised-receipt-estimate/revised-receipt-estimate-duplicate/revised-receipt-estimate-duplicate.component';
import { NewItemEstimateDuplicateComponent } from './new-item-estimate/new-item-estimate-duplicate/new-item-estimate-duplicate.component';
import { GenerateBudgetBookComponent } from './generate-budget-book/generate-budget-book.component';
import { FdGroupMappingListComponent } from './fd-group-mapping/fd-group-mapping-list/fd-group-mapping-list.component';
import { BranchCreationComponent } from './branch-mapping/branch-creation/branch-creation.component';
import { BranchMappingComponent } from './branch-mapping/branch-mapping/branch-mapping.component';
import { MacroOutcomeDetailsComponent } from './macro-outcome-details/macro-outcome-details.component';
import { PhysicalTargetDetailsComponent } from './physical-target-details/physical-target-details.component';
import { OutcomeSubmissionDetailsComponent } from './Outcome-Budget/outcome-submission-details/outcome-submission-details.component';
import { SupplementaryDemandConsolidateListComponent } from './supplementary-demand-consolidate/supplementary-demand-consolidate-list/supplementary-demand-consolidate-list.component';
import { SupplementaryDemandConsolidateComponent } from './supplementary-demand-consolidate/supplementary-demand-consolidate.component';
import { SupplementaryDemandConsolidateViewComponent } from './supplementary-demand-consolidate/supplementary-demand-consolidate-view/supplementary-demand-consolidate-view.component';
import { AchievementDetailsComponent } from './achievement-details/achievement-details.component';
import { DepartmentAchievementDetailsListComponent } from './department-achievement-details-list/department-achievement-details-list.component';
import { AchievementAgainstTargetsComponent } from './Outcome-Budget/achievement-against-targets/achievement-against-targets.component';
import { CreateSubHeadDuplicateComponent } from './new-sub-head/create-sub-head-duplicate/create-sub-head-duplicate.component';
import { DepartmentAchievementDetailsComponent } from './department-achievement-details/department-achievement-details.component';



export const appRoutes1: Routes = [
  {
    path: 'reports/item-tracking-report',
    component: ItemTrackingReportComponent
  },
  {
    path: 'reports/department-expenditure-report',
    component: DepartmentExpenditureReportComponent
  },
  {
    path: 'standing-charge-consolidate/:id',
    children: [
      {
        path: '',
        component: StandingChargeConsolidateComponent
      },
      {
        path: 'ddo-list',
        component: StandingChargeSchemewiseDdoListComponent,
      },
    ]
  },
  {
    path: 'new-item-consolidation',
    children: [
      {
        path: '',
        component: NewItemConsolidationComponent
      },
      {
        path: 'request-list',
        component: NewItemDdoRequestListComponent,
      },
    ]
  },
  {
    path: 'standing-charge-consolidate-view',
    component: StandingChargeConsolidateViewComponent,
  },
  {
    path: 'standing-charge-estimate',
    component: StandaloneChargeComponent
  },
  {
    path: 'standing-charge-list',
    component: StandaloneChargeListingComponent
  },
  {
    path: 'standing-charge-view',
    component: StandingChargeViewComponent
  },
  {
    // path: 'new-item-estimate/:id/:id1',
    path: 'new-item-estimate/:id',
    component: NewItemEstimatesComponent
  },
  {
    path: 'new-item-list',
    component: NewItemEstimatesListComponent
  },
  {
    path: 'new-item-view',
    component: NewItemViewComponent
  },
  {
    path: 'item-continuous-estimate/:id',
    component: CreateBudgetEstimateComponent
  },
  {
    path: 'item-continuous-list',
    component: CreateBudgetEstimateListComponent
  },
  {
    path: 'item-continuous-view',
    component: CreateBudgetEstimateViewComponent
  },
  {
    path: 'new-work-estimate/:id',
    component: CreateEstimateComponent
  },
  {
    path: 'new-work-list',
    component: EstimateListComponent
  },
  {
    path: 'new-work-view',
    component: EstimateViewComponent
  },
  {
    path: 'receipt-estimate',
    component: ReceiptEstimatesComponent
  },
  {
    path: 'receipt-estimate-list',
    component: ReceiptEstimatesListComponent
  },
  {
    path: 'receipt-estimate-view',
    component: ReceiptEstimateViewComponent
  },
  {
    path: 'work-in-progress-list',
    component: WorkInProgressComponent
  },
  {
    path: 'work-in-progress-estimate/:id',
    component: WIPCreateEstimateComponent
  },
  {
    path: 'work-in-progress-view',
    component: WipViewEstimateComponent
  },
  {
    path: 'revised-expenditure-estimate',
    component: RevisedComponent
  },
  {
    path: 'revised-expenditure-list',
    component: RevisedListingComponent
  },
  {
    path: 'revised-expenditure-view',
    component: RevisedEstimateViewComponent
  },
  {
    path: 'revised-receipt-estimate',
    component: CreateRevisedReceiptEstimateComponent
  },
  {
    path: 'revised-receipt-estimate-List',
    component: RevisedRecepitListComponent
  },
  {
    path: 'revised-receipt-estimate-view',
    component: RevisedReceiptEstimateViewComponent
  },
  {
    path: 'outcome-achivement',
    component: OutcomeSubmitionAdminDepComponent,
  },
  {
    path: 'outcome-achivement-list',
    component: OutcomeAchivementListingComponent,
  },
  {
    path: 'outcome-annual-target',
    component: OutcomeAnnualTargetsComponent,
  },
  {
    path: 'supplementary-demand',
    component: SupplementaryDemandComponent
  },
  {
    path: 'supplementary-demand-list',
    component: SupplementaryDemandListComponent
  },
  {
    path: 'supplementary-demand-view',
    component: SupplementaryDemandViewComponent
  },
  {
    path: 'lockingunlocking',
    component: LockingunlockingComponent
  },
  {
    path: 'lockingunlockinglisting',
    component: LockingunlockinglistingComponent,
  },
  {
    path: 'freeze-unfreeze-budget-ceiling',
    component: FreezeUnfreezeBudgetCeilingComponent,
    children: [{
      path: 'finance-department',
      component: FinanceDepartmentComponent
    }, {
      path: 'administrative-department',
      component: AdministrativeDepartmentComponent
    }, {
      path: 'head-of-department',
      component: HeadOfDepartmentComponent
    }]
  },
  {
    path: 'sub-head-list',
    component: NewSubHeadComponent
  },
  {
    path: 'new-sub-head',
    component: CreateSubHeadComponent
  },
  {
    path: 'administrative-approval',
    component: AdministrativeApprovalComponent
  },
  {
    path: 'new-item-estimate-consolidation',
    component: NewItemEstimateConsolidationComponent
  },
  {
    path: 'user-creation',
    component: UserCreationComponent
  },
  {
    path: 'user-roll-mapping',
    component: UserRollMappingComponent
  },
  {
    path: 'budget',
    component: BudgetComponent
  },
  {
    path: 'revused',
    component: RevusedComponent
  },
  {
    path: 'standing-charge-consolidate-fd',
    component: StandingChargeConsolidateFdComponent
  },
  {
    path: 'budget-list',
    component: BudgetListComponent
  },
  {
    path: 'publications',
    component: PublicationsComponent
  },
  {
    path: 'publications-list',
    component: PublicationsListComponent
  },
  {
    path: 'delegation',
    component: DelegationComponent
  },
  {
    path: 'delegation-list',
    component: DelegationListComponent
  },
  {
    path: 'disclaimer',
    component: DisclaimerComponent
  },
  {
    path: 'disclaimer-list',
    component: DisclaimerListComponent
  },

  {
    path: 'upload-ag-accounts',
    component: UploadAsAccountComponent
  },

  {
    path: 'upload-ag-accounts-list',
    component: UploadAsAccountListComponent
  },

  {
    path: 'macro-outcome',
    component: MacroOutcomeComponent
  },

  {
    path: 'physical-target',
    component: PhysicalTargetComponent
  },


  {
    path: 'physical-target-list',
    component: PhysicalTargetListComponent
  },
  {
    path: 'outcome-budget-introduction',
    component: OutcomeBudgetIntroductionComponent
  },

  {
    path: 'expenditur-explanation-writeup',
    component: ExpenditurExplanationWriteupComponent
  },
  {
    path: 'expenditur-explanation-writeup-listing',
    component: ExpenditurExplanationWriteupListingComponent
  },
  {
    path: 'annual-finacial-statement',
    component: AnnualFinacialStatmentComponent
  },
  {
    path: 'annual-finacial-statement-listing',
    component: AnnualFinancialStatementListignComponent
  },
  {
    path: 'scheme-type-mapping',
    component: SchemeTypeMappingComponent
  },
  {
    path: 'wireframe-of-establishment-details',
    component: WireframeOfEstablishmentDetailsComponent
  },
  {
    path: 'wireframe-of-establishment-list',
    component: WireframeOfEstablishmentListComponent
  },
  {
    path: 'standing-charge-list-duplicate',
    component: StandingchargelistDuplicateComponent
  },
  {
    path: 'receipt-objecthead-master',
    component: ReceiptHeadMasterComponent
  },
  {
    path: 'standing-charge-consolidate-list',
    component: StandingChargeConsolidationListComponent
  },
  {
    path: 'standing-charge-edit',
    component: StandingChargeEditComponent
  },
  {
    path: 'receipt-consolidate-list',
    component: ReceiptConsolidateListComponent
  }
  ,
  {
    path: 'hod-co-list',
    component: HodCoListComponent
  },
  {
    path: 'receipt-consolidate-view',
    component: ReceiptConsolidateViewComponent
  }
  ,
  {
    path: 'receipt-consolidate-name-view',
    component: ReceiptConsolidateNameViewComponent
  }
  ,
  {
    path: 'receipt-consolidate',
    component: ReceiptConsolidateComponent
  }
  ,
  {
    path: 'annexure-a',
    component: AnnexureAComponent
  }
  ,
  {
    path: 'annexure-a-list',
    component: AnnexureAListComponent
  },
  {
    path: 'annexure-a-view',
    component: AnnexureAViewComponent
  },
  {
    path: 'fd-group-mapping',
    component: FdGroupMappingComponent
  },
  {
    path: 'fd-group-mapping-list',
    component: FdGroupMappingListComponent
  },
  {
    path: 'item-continuous-consolidate-list',
    component: ItemContinuousConsolidateListComponent
  },
  {
    path: 'item-continuous-consolidate-view',
    component: ItemContinuousConsolidateViewComponent
  },
  {
    path: 'item-continuous-consolidate',
    children: [
      {
        path: '',
        component: ItemContinuousConsolidateComponent
      },
      {
        path: 'ddo-list',
        component: ItemContinuousSchemewiseDdoListComponent,
      },
    ]
  },
  {
    path: 'work-in-progress-consolidate-list',
    component: WorkInProgressConsolidateListComponent
  },
  {
    path: 'work-in-progress-consolidate-view',
    component: WorkInProgressConsolidateViewComponent
  },
  {
    path: 'work-in-progress-consolidate',
    children: [
      {
        path: '',
        component: WorkInProgressConsolidateComponent
      },
      {
        path: 'ddo-list',
        component: WorkInProgressSchemewiseDdoListComponent,
      },
    ]
  },
  {
    path: 'scheme-type-wise-mapping',
    component: SchemeTypeWiseMappingComponent
  },
  {
    path: 'mh-object-mapping',
    component: MhObjectMappingComponent
  },
  {
    path: 'standing-charge-consolidate-name-view',
    component: StandingChargeConsolidateNameViewComponent
  },
  {
    path: 'admin-approval-list',
    component: AdminApprovalListComponent
  },
  {
    path: 'admin-approval',
    component: AdminApprovalComponent
  },
  {
    path: 'admin-approval-view',
    component: AdminApprovalViewComponent
  },
  {
    path: 'revised-receipt-consolidation',
    component: RevisedReceiptConsolidationComponent
  },
  {
    path: 'revised-receipt-consolidation-list',
    component: RevisedReceiptConsolidationListComponent
  },
  {
    path: 'revised-receipt-consolidation-view',
    component: RevisedReceiptConsolidationViewComponent
  },
  {
    path: 'department-list',
    component: DepartmentListComponent
  },
  {
    path: 'item-continuous-estimate-duplicate/:id',
    component: ItemContinuousEstimateDuplicateComponent
  },
  {
    path: 'receipt-estimate-duplicate',
    component: ReceiptEstimateDuplicateComponent
  },
  {
    path: 'revised-receipt-estimate-duplicate',
    component: RevisedReceiptEstimateDuplicateComponent
  },
  {
    path: 'new-item-estimate-duplicate/:id',
    component: NewItemEstimateDuplicateComponent
  },
  {
    path: 'generate-budget-book',
    component: GenerateBudgetBookComponent
  },
  {
    path: 'branch-creation',
    component: BranchCreationComponent
  },
  {
    path: 'branch-mapping',
    component: BranchMappingComponent
  },
  {
    path: 'macro-outcome-details',
    component: MacroOutcomeDetailsComponent
  },
  {
    path: 'physical-target-details',
    component: PhysicalTargetDetailsComponent
  },
  {
    path: 'achievement-against-targets-details',
    component: OutcomeSubmissionDetailsComponent
  },
  {
    path: 'supplementary-demand-consolidate-list',
    component: SupplementaryDemandConsolidateListComponent
  },
  {
    path: 'supplementary-demand-consolidate-view',
    component: SupplementaryDemandConsolidateViewComponent
  },
  {
    path: 'supplementary-demand-consolidate',
    component: SupplementaryDemandConsolidateComponent
  },
  {
    path: 'achievement-details',
    component: AchievementDetailsComponent
  },
  {
    path: 'department-achievement-details-list',
    component: DepartmentAchievementDetailsListComponent
  },
  {
    path: 'achievement-against-targets',
    component: AchievementAgainstTargetsComponent
  },
  {
    path: 'new-sub-head-duplicate',
    component: CreateSubHeadDuplicateComponent
  },
  {
    path: 'department-achievement-details',
    component: DepartmentAchievementDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes1)],
  exports: [RouterModule],
  declarations: [],
  entryComponents: [
  ]
})
export class BudgetRoutingModule { }
