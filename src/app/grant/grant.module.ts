// tslint:disable-next-line: max-line-length 
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../material-module';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { CommonModule } from '@angular/common';
import { GrantComponent } from './grant.component';
import { GrantRoutingModule } from './grant-routing.module';
import { CommonProtoModule } from '../common/common.module';
import { AdditionalGrantManagementComponent } from './additional-grant-management/additional-grant-management.component';
import { ListComponent } from './additional-grant-management/list/list.component';
import { ContingencyFdToDepartmentComponent, GrantRecevedContigincDialogComponent, GrantviewDialog3Component } from './contingency-fd-to-department/contingency-fd-to-department.component';
import { ContingencyFdToDepartmentListComponent } from './contingency-fd-to-department/contingency-fd-to-department-list/contingency-fd-to-department-list.component';
import { GrantFdToCssListComponent } from './grant-fd-to-css/grant-fd-to-css-list/grant-fd-to-css-list.component';
import { GrantFdToCssComponent, GrantFdToCssDialog, GrantviewDialog2Component } from './grant-fd-to-css/grant-fd-to-css.component';
import { GrantFromControllingOfficerComponent, GrantRecevedControllingOfficerDialogComponent, GrantRecevedControllingOfficerDialogDDOComponent, GrantviewDialog4Component } from './grant-from-controlling-officer/grant-from-controlling-officer.component';
import { GrantFromControllingOfficerListComponent } from './grant-from-controlling-officer/grant-from-controlling-officer-list/grant-from-controlling-officer-list.component';
import { GrantSurrenderProcessComponent } from './grant-surrender-process/grant-surrender-process.component';
import { GrantSurrenderProcessListComponent } from './grant-surrender-process/grant-surrender-process-list/grant-surrender-process-list.component';
import { ReAppropriationProcessComponent } from './re-appropriation-process/re-appropriation-process.component';
import { ReAppropriationProcessListComponent } from './re-appropriation-process/re-appropriation-process-list/re-appropriation-process-list.component';
import { ReDistributionProcessComponent } from './re-distribution-process/re-distribution-process.component';
import { ReDistributionProcessListComponent } from './re-distribution-process/re-distribution-process-list/re-distribution-process-list.component';
import { SanctionOrdersComponent } from './sanction-orders/sanction-orders.component';
import { SanctionOrdersListComponent } from './sanction-orders/sanction-orders-list/sanction-orders-list.component';
import { SubHeadMappingApplicationListComponent } from './sub-head-mapping-application/sub-head-mapping-application-list/sub-head-mapping-application-list.component';
import { SubHeadMappingApplicationComponent, SubHeadMappingDialogComponent, SubHeadMappingDialog2Component } from './sub-head-mapping-application/sub-head-mapping-application.component';
import { GrantReleaseFdToAdministrativeDepartmentComponent, GrantCalculateDialogComponent } from './grant-release-fd-to-administrative-department/grant-release-fd-to-administrative-department.component';
import { FdToAdministrativeDepartmentListComponent } from './grant-release-fd-to-administrative-department/fd-to-administrative-department-list/fd-to-administrative-department-list.component';
import { WorkflowDetailsGrantComponent } from './workflow-details-grant/workflow-details-grant.component';
import { AddSchemeDialogComponent, FromDepartmentComponent } from './from-department/from-department.component';
import { GrantReleaseFromAdministrativeDepartmentComponent, GrantReleaseAdDepartmentDialogComponent, GrantRecevedControllingOfficerDialogDDO2Component, GrantviewDialog5Component } from './grant-release-from-administrative-department/grant-release-from-administrative-department.component';
import { GrantReleaseFromAdListComponent } from './grant-release-from-administrative-department/grant-release-from-ad-list/grant-release-from-ad-list.component';
import { GrantConsolidatedRequestComponent } from './grant-consolidated-request/grant-consolidated-request.component';
import { GrantExcessDemandDetailsComponent, GrantviewDialogComponent } from './grant-excess-demand-details/grant-excess-demand-details.component';
// tslint:disable-next-line: max-line-length
import { GrantReleaseOrderComponent } from './grant-release-fd-to-administrative-department/grant-release-order/grant-release-order.component';
import { RequestForGrantComponent } from './request-for-grant/request-for-grant.component';
import { RequestForGrantListComponent } from './request-for-grant/request-for-grant-list/request-for-grant-list.component';


@NgModule({
  imports: [
    ReactiveFormsModule,
    MaterialModule,
    NgxMatSelectSearchModule,
    CommonModule,
    FormsModule,
    GrantRoutingModule,
    CommonProtoModule,

  ],
  declarations: [
    GrantComponent,
    AdditionalGrantManagementComponent,
    ListComponent,
    ContingencyFdToDepartmentComponent,
    ContingencyFdToDepartmentListComponent,
    GrantFdToCssListComponent,
    GrantFdToCssComponent,
    GrantFromControllingOfficerComponent,
    GrantFromControllingOfficerListComponent,
    GrantRecevedControllingOfficerDialogComponent,
    GrantFdToCssDialog,
    GrantSurrenderProcessComponent,
    GrantSurrenderProcessListComponent,
    ReAppropriationProcessComponent,
    ReAppropriationProcessListComponent,
    ReDistributionProcessComponent,
    ReDistributionProcessListComponent,
    SanctionOrdersComponent,
    SanctionOrdersListComponent,
    SubHeadMappingApplicationComponent,
    SubHeadMappingApplicationListComponent,
    GrantRecevedContigincDialogComponent,
    GrantReleaseFdToAdministrativeDepartmentComponent,
    GrantCalculateDialogComponent,
    FdToAdministrativeDepartmentListComponent,
    WorkflowDetailsGrantComponent,
    FromDepartmentComponent,
    AddSchemeDialogComponent,
    GrantReleaseFromAdministrativeDepartmentComponent,
    GrantReleaseAdDepartmentDialogComponent,
    GrantReleaseFromAdListComponent,
    GrantConsolidatedRequestComponent,
    GrantExcessDemandDetailsComponent,
    GrantReleaseOrderComponent,
    SubHeadMappingDialogComponent,
    RequestForGrantComponent,
    RequestForGrantListComponent,
    GrantRecevedControllingOfficerDialogDDOComponent,
    GrantRecevedControllingOfficerDialogDDO2Component,
    GrantviewDialogComponent,
    GrantviewDialog2Component,
    GrantviewDialog3Component,
    GrantviewDialog4Component,
    GrantviewDialog5Component,
    SubHeadMappingDialog2Component
  ],
  entryComponents: [
    GrantFdToCssDialog,
    GrantRecevedControllingOfficerDialogComponent,
    GrantRecevedContigincDialogComponent,
    GrantCalculateDialogComponent,
    WorkflowDetailsGrantComponent,
    AddSchemeDialogComponent,
    GrantReleaseAdDepartmentDialogComponent,
    SubHeadMappingDialogComponent,
    GrantRecevedControllingOfficerDialogDDOComponent,
    GrantRecevedControllingOfficerDialogDDO2Component,
    GrantviewDialogComponent,
    GrantviewDialog2Component,
    GrantviewDialog3Component,
    GrantviewDialog4Component,
    GrantviewDialog5Component,
    SubHeadMappingDialog2Component
  ],
})
export class GrantModule { }
