import { RopComponent } from './rop/rop.component';
import { EmpViewOtherOfficeComponent } from './emp-view-other-office/emp-view-other-office.component';
import { AuditorEventViewComponent } from './auditor-event-view/auditor-event-view.component';
import { AuditorComponent } from './auditor/auditor.component';
import { PromotionForgoComponent } from './promotion-forgo/promotion-forgo.component';
import { ShettyPayComponent } from './shetty-pay/shetty-pay.component';
import { ReversionComponent } from './reversion/reversion.component';
import { SelectionGradeCasComponent } from './selection-grade-cas/selection-grade-cas.component';
import { PromotionComponent } from './promotion/promotion.component';
import { ExtraOrdinaryLeaveComponent } from './extra-ordinary-leave/extra-ordinary-leave.component';
import { SuspensionCreateComponent } from './suspension-create/suspension-create.component';
import { EndUserComponent } from './end-user/end-user.component';
import { IncrementListComponent } from './increment-list/increment-list.component';
import { SuspensionListComponent } from './suspension-list/suspension-list.component';
import { SuspensionComponent } from '../pvu/suspension/suspension.component';
import { TikuPanchComponent } from './tiku-panch/tiku-panch.component';
import { IncrementComponent } from './increment/increment.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PvuComponent } from './pvu.component/pvu.component';
import { EmployeeCreationComponent } from './employee-creation/employee-creation.component';
import { EmployeeCreationListComponent } from './employee-creation-list/employee-creation-list.component';
import { TransferComponent } from './transfer/transfer.component';
import { ExtraOrdinaryLeaveListComponent } from './extra-ordinary-leave-list/extra-ordinary-leave-list.component';
import { PayCommissionChangesComponent } from './pay-commission-changes/pay-commission-changes.component';
import { AssuredCareerProgressionComponent } from './assured-career-progression/assured-career-progression.component';
import { HigherPayScaleComponent } from './higher-pay-scale/higher-pay-scale.component';
import { SteppingUpComponent } from './stepping-up/stepping-up.component';
import { SeniorScaleComponent } from './senior-scale/senior-scale.component';
import { PayCommissionChangeListComponent } from './pay-commission-change-list/pay-commission-change-list.component';
import { ChangeOfScaleComponent } from './change-of-scale/change-of-scale.component';
import { EventsListComponent } from './events-list/events-list.component';
import { DeemedDateComponent } from './deemed-date/deemed-date.component';
import { EventsPvuListComponent } from './events-pvu-list/events-pvu-list.component';
import { ChangeOfScaleEmpCreationComponent } from './change-of-scale-emp-creation/change-of-scale-emp-creation.component';
import { EmployeeCreationsComponent } from './employee-creations/employee-creations.component';
import { TransferJoiningComponent } from './transfer-joining/transfer-joining.component';
import { TransferJoiningListComponent } from './transfer-joining-list/transfer-joining-list.component';
import { PvuRegistryComponent } from './pvu-registry/pvu-registry.component';
import { PvuRegistryRopComponent } from './pvu-registry-rop/pvu-registry-rop.component';
import { EventsPvuApproverComponent } from './events-pvu-approver/events-pvu-approver.component';
import { ApproverEventViewComponent } from './approver-event-view/approver-event-view.component';
import { OutwardRegistryComponent } from './outward-registry/outward-registry.component';
import { EventsComponent } from './events/events.component';
import { PvuEventsComponent } from './pvu-events/pvu-events.component';
import { GridShowComponent } from './grid-show/grid-show.component';
import { ShettyPay1Component } from './shetty-pay1/shetty-pay1.component';
import { EventReportComponent } from './reports/event-report/event-report.component';
import { PayEndorsementReportComponent } from './reports/pay-endorsement-report/pay-endorsement-report.component';

export const pvuRoutes: Routes = [
    {
        path: '',
        component: PvuComponent
    },
    {
        path: 'employee-creation',
        component: EmployeeCreationComponent
    },
    {
        path: 'employee-creation/:index',
        component: EmployeeCreationComponent
    },
    {
        path: 'employee-creation-list',
        component: EmployeeCreationListComponent
    },
    {
        path: 'higher-pay-scale',
        component: HigherPayScaleComponent
    },
    {
        path: 'increment',
        component: IncrementComponent
    },
    {
        path: 'tiku-panch',
        component: TikuPanchComponent
    },
    {
        path: 'extra-ordinary-leave',
        component: ExtraOrdinaryLeaveComponent
    },

    {
        path: 'extra-ordinary-leave-list',
        component: ExtraOrdinaryLeaveListComponent
    },
    {
        path: 'pay-commission-change',
        component: PayCommissionChangesComponent
    },
    {
        path: 'pay-commission-change-list',
        component: PayCommissionChangeListComponent
    },
    {
        path: 'transfer',
        component: TransferComponent
    },
    {
        path: 'suspension',
        component: SuspensionComponent
    },
    {
        path: 'suspension-create',
        component: SuspensionCreateComponent
    },
    {
        path: 'suspension-list',
        component: SuspensionListComponent
    },
    {
        path: 'assured-career-progression',
        component: AssuredCareerProgressionComponent
    },
    {
        path: 'end-user',
        component: EndUserComponent
    },
    {
        path: 'increment-list',
        component: IncrementListComponent
    },

    {
        path: 'stepping-up',
        component: SteppingUpComponent
    },
    {
        path: 'selection-grade-cas',
        component: SelectionGradeCasComponent
    },
    {
        path: 'promotion',
        component: PromotionComponent
    },
    {
        path: 'senior-scale',
        component: SeniorScaleComponent
    },
    {
        path: 'change-of-scale',
        component: ChangeOfScaleComponent
    },
    {
        path: 'change-of-scale-emp-creation',
        component: ChangeOfScaleEmpCreationComponent
    },
    {
        path: 'events-list',
        component: EventsListComponent
    },
    {
        path: 'reversion',
        component: ReversionComponent
    },
    {
        path: 'shetty-pay',
        component: ShettyPayComponent
    },
    {
        path: 'promotion-forgo',
        component: PromotionForgoComponent
    },
    {
        path: 'deemed-date',
        component: DeemedDateComponent
    },
    {
        path: 'events-pvu-list',
        component: EventsPvuListComponent
    },
    {
        path: 'employee-creations',
        component: EmployeeCreationsComponent
    },
    {
        path: 'transfer-joining-details',
        component: TransferJoiningComponent
    },
    {
        path: 'transfer-joining-list',
        component: TransferJoiningListComponent
    },
    {
        path: 'pvu-registry',
        component: PvuRegistryComponent
    },
    {
        path: 'emp-view-other-office',
        component: EmpViewOtherOfficeComponent
    },
    {
        path: 'pvu-registry-rop',
        component: PvuRegistryRopComponent
    },
    {
        path: 'events-pvu-approver',
        component: EventsPvuApproverComponent
    },
    {
        path: 'approver-event-view',
        component: ApproverEventViewComponent
    },
    {
        path: 'auditor',
        component: AuditorComponent
    },
    {
        path: 'auditor-event-view',
        component: AuditorEventViewComponent
    },
    {
        path: 'outward-registry',
        component: OutwardRegistryComponent
    },
    {
        path: 'events',
        component: EventsComponent
    },
    {
        path: 'pvu-events',
        component: PvuEventsComponent
    },
    {
        path: 'grid-show',
        component: GridShowComponent
    },
    {
        path: 'shetty-pay1',
        component: ShettyPay1Component
    },
    {
        path: 'pay-commission-changes',
        component: PayCommissionChangesComponent
    },
    {
        path : 'event-report',
        component : EventReportComponent
    }
    ,
    {
        path : '6th-pay-endorsement-report',
        component : PayEndorsementReportComponent
    },
    {
        path: 'rop',
        component: RopComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(pvuRoutes)],
    exports: [RouterModule],
    declarations: []
})
export class PVURoutingModule { }
