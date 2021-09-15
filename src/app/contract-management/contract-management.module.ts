import { PprViewComponent } from './ppr/ppr-view/ppr-view.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { ContaractManagementRoutingModule } from './contract-management-routing.module';

import { CreatePprComponent } from './ppr/create-ppr/create-ppr.component';
import { PprCommentsComponent, PprCommentsForwardDialogComponent } from './ppr/ppr-comments/ppr-comments.component';
import { UTCComponent, GenerateUCIDComponent, UtcSanctionOrderAttachementComponent } from './utc/utc.component';
import { MaterialModule } from '../material-module';
import { UtcListComponent, UtcCommentlistComponent } from './utc-list/utc-list.component';
import { UtcCertificateComponent } from './utc-certificate/utc-certificate.component';
import { CommonProtoModule } from '../common/common.module';
import { PprApproveRejectComponent } from './ppr/ppr-approve-reject/ppr-approve-reject.component';
import { PprListComponent } from './ppr/ppr-list/ppr-list.component';
import { PprDashboardComponent } from './ppr/ppr-dashboard/ppr-dashboard.component';
import { WorflowDetailCMComponent } from './worflow-detail-cm/worflow-detail-cm.component';
import { UtcVerifyComponent } from './utc-verify-approve/utc-verify-approve.component';

@NgModule({
  imports: [
    CommonProtoModule,
    ContaractManagementRoutingModule,
    MaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMatSelectSearchModule,
  ],

  declarations: [
    CreatePprComponent,
    PprCommentsComponent,
    PprApproveRejectComponent,
    PprListComponent,
    PprDashboardComponent,
    PprCommentsForwardDialogComponent,
    UTCComponent,
    UtcListComponent,
    UtcCertificateComponent,
    PprViewComponent,
    WorflowDetailCMComponent,
    UtcCommentlistComponent,
    GenerateUCIDComponent,
    UtcVerifyComponent,
    UtcSanctionOrderAttachementComponent
  ],
  entryComponents: [
    PprCommentsForwardDialogComponent,
    WorflowDetailCMComponent,
    UtcCommentlistComponent,
    GenerateUCIDComponent,
    UtcSanctionOrderAttachementComponent

  ],
})

export class ContractManagementModule { }
