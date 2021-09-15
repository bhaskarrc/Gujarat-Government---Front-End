// import { RequestForGrantListComponent } from './request-for-grant/request-for-grant-list/request-for-grant-list.component';
// import { RequestForGrantComponent } from './request-for-grant/request-for-grant.component';
// tslint:disable-next-line: max-line-length
import { GrantReleaseFromAdListComponent } from './grant-release-from-administrative-department/grant-release-from-ad-list/grant-release-from-ad-list.component';
import { FromDepartmentComponent } from './from-department/from-department.component';
import { FdToAdministrativeDepartmentListComponent } from './grant-release-fd-to-administrative-department/fd-to-administrative-department-list/fd-to-administrative-department-list.component';
import { GrantReleaseFdToAdministrativeDepartmentComponent } from './grant-release-fd-to-administrative-department/grant-release-fd-to-administrative-department.component';
import { SubHeadMappingApplicationComponent } from './sub-head-mapping-application/sub-head-mapping-application.component';
import { SanctionOrdersComponent } from './sanction-orders/sanction-orders.component';
import { ReDistributionProcessComponent } from './re-distribution-process/re-distribution-process.component';
import { ReAppropriationProcessComponent } from './re-appropriation-process/re-appropriation-process.component';
import { GrantSurrenderProcessComponent } from './grant-surrender-process/grant-surrender-process.component';
import { GrantFromControllingOfficerListComponent } from './grant-from-controlling-officer/grant-from-controlling-officer-list/grant-from-controlling-officer-list.component';
import { GrantFromControllingOfficerComponent } from './grant-from-controlling-officer/grant-from-controlling-officer.component';
import { ContingencyFdToDepartmentListComponent } from './contingency-fd-to-department/contingency-fd-to-department-list/contingency-fd-to-department-list.component';
import { ContingencyFdToDepartmentComponent } from './contingency-fd-to-department/contingency-fd-to-department.component';
import { ListComponent } from './additional-grant-management/list/list.component';
import { AdditionalGrantManagementComponent } from './additional-grant-management/additional-grant-management.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrantComponent } from './grant.component';
import { GrantFdToCssComponent } from './grant-fd-to-css/grant-fd-to-css.component';
import { GrantFdToCssListComponent } from './grant-fd-to-css/grant-fd-to-css-list/grant-fd-to-css-list.component';
import { GrantSurrenderProcessListComponent } from './grant-surrender-process/grant-surrender-process-list/grant-surrender-process-list.component';
import { ReAppropriationProcessListComponent } from './re-appropriation-process/re-appropriation-process-list/re-appropriation-process-list.component';
import { ReDistributionProcessListComponent } from './re-distribution-process/re-distribution-process-list/re-distribution-process-list.component';
import { SanctionOrdersListComponent } from './sanction-orders/sanction-orders-list/sanction-orders-list.component';
import { SubHeadMappingApplicationListComponent } from './sub-head-mapping-application/sub-head-mapping-application-list/sub-head-mapping-application-list.component';
import { GrantReleaseFromAdministrativeDepartmentComponent } from './grant-release-from-administrative-department/grant-release-from-administrative-department.component';
import { GrantConsolidatedRequestComponent } from './grant-consolidated-request/grant-consolidated-request.component';
import { GrantExcessDemandDetailsComponent } from './grant-excess-demand-details/grant-excess-demand-details.component';
import { GrantReleaseOrderComponent } from './grant-release-fd-to-administrative-department/grant-release-order/grant-release-order.component';
import { RequestForGrantComponent } from './request-for-grant/request-for-grant.component';
import { RequestForGrantListComponent } from './request-for-grant/request-for-grant-list/request-for-grant-list.component';


export const GrantRoute: Routes = [{
  path: '',
  component: GrantComponent
},
{
  path: 'additional-grant-management',
  component: AdditionalGrantManagementComponent
},
{
  path: 'additional-grant-management/list',
  component: ListComponent
},
{
  path: 'contingency-fd-to-department',
  component: ContingencyFdToDepartmentComponent
},
{
  path: 'contingency-fd-to-department/contingency-fd-to-department-list',
  component: ContingencyFdToDepartmentListComponent
},
{
  path: 'grant-fd-to-css',
  component: GrantFdToCssComponent
},
{
  path: 'grant-fd-to-css/grant-fd-to-css-list',
  component: GrantFdToCssListComponent
},
{
  path: 'grant-from-controlling-officer',
  component: GrantFromControllingOfficerComponent
},
{
  path: 'grant-from-controlling-officer/grant-from-controlling-officer-list',
  component: GrantFromControllingOfficerListComponent
},
{
  path: 'grant-surrender-process',
  component: GrantSurrenderProcessComponent
},
{
  path: 'grant-surrender-process/grant-surrender-process-list',
  component: GrantSurrenderProcessListComponent
},
{
  path: 're-appropriation-process',
  component: ReAppropriationProcessComponent
},
{
  path: 're-appropriation-process/re-appropriation-process-list',
  component: ReAppropriationProcessListComponent
},
{
  path: 're-distribution-process',
  component: ReDistributionProcessComponent
},
{
  path: 're-distribution-process/re-distribution-process-list',
  component: ReDistributionProcessListComponent
},
{
  path: 'sanction-orders',
  component: SanctionOrdersComponent
},
{
  path: 'sanction-orders/sanction-orders-list',
  component: SanctionOrdersListComponent
},
{
  path: 'sub-head-mapping-application',
  component: SubHeadMappingApplicationComponent
},
{
  path: 'sub-head-mapping-application/sub-head-mapping-application-list',
  component: SubHeadMappingApplicationListComponent
},
{
  path: 'grant-release-fd-to-administrative-department',
  component: GrantReleaseFdToAdministrativeDepartmentComponent
},
{
  path: 'grant-release-fd-to-administrative-department/fd-to-administrative-department-list',
  component: FdToAdministrativeDepartmentListComponent
},
{
  path: 'grant-release-fd-to-administrative-department/grant-release-order',
  component: GrantReleaseOrderComponent
},
{
  path: 'from-department',
  component: FromDepartmentComponent
},
{
  path: 'grant-release-from-administrative-department',
  component: GrantReleaseFromAdministrativeDepartmentComponent
},
{
  path: 'grant-release-from-administrative-department/grant-release-from-ad-list',
  component: GrantReleaseFromAdListComponent
},
// {
//   path: 'request-for-grant',
//   component: RequestForGrantComponent
// },
{
  path: 'grant-excess-demand-details',
  component: GrantExcessDemandDetailsComponent
},
{
  path: 'request-for-grant',
  component: RequestForGrantComponent
},
{
  path: 'request-for-grant/request-for-grant-list',
  component: RequestForGrantListComponent
},
{
  path: 'grant-consolidated-request',
  component: GrantConsolidatedRequestComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(GrantRoute)],
  exports: [RouterModule],
  declarations: []
})

export class GrantRoutingModule {
}