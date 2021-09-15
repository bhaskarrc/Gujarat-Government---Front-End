import { SteppingUpComponent } from './stepping-up/stepping-up.component';
import { ReversionComponent } from './reversion/reversion.component';
import { SuspensionComponent } from '../pvu/suspension/suspension.component';
import { NgModule } from '@angular/core';
import { PvuComponent } from './pvu.component/pvu.component';
import { PVURoutingModule } from './pvu-routing.module';
import { CommonProtoModule } from '../common/common.module';
import { EmployeeCreationComponent, EmployeeForwardDialogComponent } from './employee-creation/employee-creation.component';
import { EmployeeCreationListComponent } from './employee-creation-list/employee-creation-list.component';
import { IncrementComponent, ExcludeOptionComponent } from './increment/increment.component';
import { EmpViewOtherOfficeComponent } from './emp-view-other-office/emp-view-other-office.component';
import { TikuPanchComponent } from './tiku-panch/tiku-panch.component';
import { SuspensionListComponent } from './suspension-list/suspension-list.component';
import { ExtraOrdinaryLeaveComponent } from './extra-ordinary-leave/extra-ordinary-leave.component';
import { PayCommissionChangesComponent } from './pay-commission-changes/pay-commission-changes.component';
import { TransferComponent } from './transfer/transfer.component';
import { ExtraOrdinaryLeaveListComponent } from './extra-ordinary-leave-list/extra-ordinary-leave-list.component';
import { EndUserComponent, EndUserEventSearchDialogComponent } from './end-user/end-user.component';
import { IncrementListComponent } from './increment-list/increment-list.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { AssuredCareerProgressionComponent } from './assured-career-progression/assured-career-progression.component';
import { SuspensionCreateComponent } from './suspension-create/suspension-create.component';
import { HigherPayScaleComponent } from './higher-pay-scale/higher-pay-scale.component';
import { SelectionGradeCasComponent } from './selection-grade-cas/selection-grade-cas.component';
import { PromotionComponent } from './promotion/promotion.component';
import { SeniorScaleComponent } from './senior-scale/senior-scale.component';
import { PayCommissionChangeListComponent } from './pay-commission-change-list/pay-commission-change-list.component';
import { ChangeOfScaleComponent } from './change-of-scale/change-of-scale.component';
import { EventsListComponent } from './events-list/events-list.component';
import { ShettyPayComponent, ShettypayDialogModal } from './shetty-pay/shetty-pay.component';
import { PromotionForgoComponent } from './promotion-forgo/promotion-forgo.component';
import { DeemedDateComponent } from './deemed-date/deemed-date.component';
import { EventsPvuListComponent, FwdInwardDataDialogComponent } from './events-pvu-list/events-pvu-list.component';
import { ChangeOfScaleEmpCreationComponent } from './change-of-scale-emp-creation/change-of-scale-emp-creation.component';
import { EmployeeCreationsComponent } from './employee-creations/employee-creations.component';
import { TransferJoiningComponent } from './transfer-joining/transfer-joining.component';
import { TransferJoiningListComponent } from './transfer-joining-list/transfer-joining-list.component';
import { PvuRegistryComponent, FwdPvuRegistryDialogComponent } from './pvu-registry/pvu-registry.component';
import { PvuRegistryRopComponent, FwdPvuRegistryRopDialogComponent } from './pvu-registry-rop/pvu-registry-rop.component';
import { EventsPvuApproverComponent, EventsPuvApproverDialogComponent } from './events-pvu-approver/events-pvu-approver.component';
import { ApproverEventViewComponent, ApprovedForwardDialogComponent } from './approver-event-view/approver-event-view.component';
import { AuditorComponent } from './auditor/auditor.component';
import { AuditorEventViewComponent } from './auditor-event-view/auditor-event-view.component';
import { OutwardRegistryComponent } from './outward-registry/outward-registry.component';
import { EventsComponent } from './events/events.component';
import { PvuEventsComponent } from './pvu-events/pvu-events.component';
import { GridShowComponent } from './grid-show/grid-show.component';
import { ShettyPay1Component, Shettypay1DialogModal } from './shetty-pay1/shetty-pay1.component';
import { PayEndorsementReportComponent } from './reports/pay-endorsement-report/pay-endorsement-report.component';
import { EventReportComponent } from './reports/event-report/event-report.component';
import { RopComponent } from './rop/rop.component';



@NgModule({
  imports: [
    PVURoutingModule,
    CommonProtoModule
  ],
  declarations: [
    PvuComponent,
    EmployeeCreationComponent,
    EmployeeCreationListComponent,
    HigherPayScaleComponent,
    IncrementComponent,
    TikuPanchComponent,
    EmpViewOtherOfficeComponent,
    SuspensionComponent,
    SuspensionListComponent,
    ExtraOrdinaryLeaveComponent,
    PayCommissionChangesComponent,
    TransferComponent,
    ExtraOrdinaryLeaveListComponent,
    AssuredCareerProgressionComponent,
    IncrementListComponent,
    SearchEmployeeComponent,
    EndUserComponent,
    EndUserEventSearchDialogComponent,
    SuspensionCreateComponent,
    SteppingUpComponent,
    ExcludeOptionComponent,
    PromotionComponent,
    ShettyPayComponent,
    ShettypayDialogModal,
    SelectionGradeCasComponent,
    SeniorScaleComponent,
    PayCommissionChangeListComponent,
    ChangeOfScaleComponent,
    EventsListComponent,
    ReversionComponent,
    PromotionForgoComponent,
    DeemedDateComponent,
    EventsPvuListComponent,
    ShettypayDialogModal,
    FwdInwardDataDialogComponent,
    ChangeOfScaleEmpCreationComponent,
    EmployeeCreationsComponent,
    TransferJoiningComponent,
    TransferJoiningListComponent,
    PvuRegistryComponent,
    FwdPvuRegistryDialogComponent,
    PvuRegistryRopComponent,
    FwdPvuRegistryRopDialogComponent,
    EventsPvuApproverComponent,
    EventsPuvApproverDialogComponent,
    ApproverEventViewComponent,
    AuditorComponent,
    AuditorEventViewComponent,
    OutwardRegistryComponent,
    EventsComponent,
    PvuEventsComponent,
    GridShowComponent,
    ShettyPay1Component,
    Shettypay1DialogModal,
    ApprovedForwardDialogComponent,
    EmployeeForwardDialogComponent,
    PayEndorsementReportComponent,
    EventReportComponent,
    RopComponent,
    
  ],
  entryComponents: [
    TikuPanchComponent,
    SearchEmployeeComponent,
    EndUserEventSearchDialogComponent,
    ShettypayDialogModal,
    ExcludeOptionComponent,
    PayCommissionChangeListComponent,
    ReversionComponent,
    PromotionForgoComponent,
    ChangeOfScaleComponent,
    EventsListComponent,
    ReversionComponent,
    DeemedDateComponent,
    EventsPvuListComponent,
    ShettypayDialogModal,
    FwdInwardDataDialogComponent,
    ChangeOfScaleEmpCreationComponent,
    EmployeeCreationsComponent,
    FwdPvuRegistryDialogComponent,
    ApproverEventViewComponent,
    Shettypay1DialogModal,
    FwdPvuRegistryRopDialogComponent,
    ApprovedForwardDialogComponent,
    EmployeeForwardDialogComponent
  ]
})
export class PVUModule { }
