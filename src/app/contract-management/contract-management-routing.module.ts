import { PprViewComponent } from './ppr/ppr-view/ppr-view.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePprComponent } from './ppr/create-ppr/create-ppr.component';
import { UTCComponent } from './utc/utc.component';
import { UtcListComponent } from './utc-list/utc-list.component';
import { UtcCertificateComponent } from './utc-certificate/utc-certificate.component';
import { PprCommentsComponent } from './ppr/ppr-comments/ppr-comments.component';
import { PprApproveRejectComponent } from './ppr/ppr-approve-reject/ppr-approve-reject.component';
import { PprListComponent } from './ppr/ppr-list/ppr-list.component';
import { PprDashboardComponent } from './ppr/ppr-dashboard/ppr-dashboard.component';
import { UtcVerifyComponent } from './utc-verify-approve/utc-verify-approve.component';



export const ContractManagementRoutes: Routes = [

  {
    path: 'create-ppr',
    component: CreatePprComponent
  },

  {
    path: 'utc',
    component: UTCComponent
  },

  {
    path: 'utc-list',
    component: UtcListComponent
  },

  {
    path: 'utc-certificate',
    component: UtcCertificateComponent
  },
  {
    path: 'ppr-comments',
    component: PprCommentsComponent
  },
  {
    path: 'ppr-approve-reject',
    component: PprApproveRejectComponent
  },
  {
    path: 'ppr-list',
    component: PprListComponent
  },

  {
    path: 'ppr-dashboard',
    component: PprDashboardComponent
  },

  {
    path: 'ppr-view',
    component: PprViewComponent
  },
  {
    path: 'utc-verify-approve',
    component: UtcVerifyComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(ContractManagementRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class ContaractManagementRoutingModule { }
