import { NgModule } from '@angular/core';
import { EdpComponent } from './edp.component/edp.component';
import { EdpRoutingModule } from './edp-routing.module';
import { CommonProtoModule } from '../common/common.module';

// tslint:disable-next-line: max-line-length
import { DdoOfficeHodComponent, DDOSubOfficeHODComponent, } from './ddo-office/ddo-office-hod/ddo-office-hod.component';
import { DdoOfficesToComponent, DDOSubOfficeCreationTOComponent } from './ddo-office/ddo-offices-to/ddo-offices-to.component';
import { DdoOfficesComponent, DDOSubOfficeCreationComponent } from './ddo-office/ddo-offices/ddo-offices.component';
import { RequestListingComponent } from './ddo-office/request-listing/request-listing.component';
import { DdoOfficesUpdationComponent, DDOSubOfficeUpdationComponent, DialogSubOfficeDialog } from './ddo-office/ddo-offices-updation/ddo-offices-updation.component';
import { OfficeUpdationListEDPComponent } from './ddo-office/office-updation-list-edp/office-updation-list-edp.component';
import { OfficeUpdationListDdoComponent } from './ddo-office/office-updation-list-ddo/office-updation-list-ddo.component';

import { PostCreationComponent, MappingForwardDialogComponent, PostialogComponent } from './users/post-creation/post-creation.component';
import { PostCreationListComponent } from './users/post-creation-list/post-creation-list.component';

import { AddDesignationComponent } from './add-designation/add-designation.component';
import { AddDesignationListComponent } from './add-designation-list/add-designation-list.component';
import { UpdateDesignationComponent, UpdateDesignationDialogComponent } from './update-designation/update-designation.component';
import { UpdateDesignationListComponent } from './update-designation-list/update-designation-list.component';
import { ResetPasswordComponent, ResetPasswordComponentDialog } from './reset-password/reset-password.component';
import { GlobalResetPasswordComponent, GlobalResetPasswordComponentDialog } from './global-reset-password/global-reset-password.component';
import { UserPostMappingRequestComponent } from './user-post-mapping/user-post-mapping-request/user-post-mapping-request.component';
import { UserPostMappingDtailComponent, ChargeConfirmDialogComponent } from './user-post-mapping/user-post-mapping-creater/user-post-mapping-detail.component';
import { UserPostMappingToComponent } from './user-post-mapping/user-post-mapping-to/user-post-mapping-to.component';
import { UserRoleMappingCreateComponent, UserRoleMappingForwardDialogComponent, UserRoleMappingViewDialogComponent } from './user-role-mapping/user-role-mapping-create/user-role-mapping-create.component';
import { UserRoleMappingListComponent } from './user-role-mapping/user-role-mapping-list/user-role-mapping-list.component';
import { UserRoleMappingToComponent } from './user-role-mapping/user-role-mapping-to/user-role-mapping-to.component';
import { BillTypewiseObjectclassMappingComponent } from './bill-typewise-objectclass-mapping/bill-typewise-objectclass-mapping.component';
import { BranchMasterComponent } from './branch-master/branch-master.component';
import { AddIfscComponent } from './add-ifsc/add-ifsc.component';
import { GrantExemptionComponent } from './grant-exemption/grant-exemption.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { GrantExemptionListComponent } from './grant-exemption-list/grant-exemption-list.component';
import { AddIfscListingComponent } from './add-ifsc-listing/add-ifsc-listing.component';
import { BranchCreationComponent } from './branch-creation/branch-creation.component';
import { ProceedDialogComponent } from './proceed-dialog/proceed-dialog.component';
import { BranchCreationListingComponent } from './branch-creation-listing/branch-creation-listing.component';
import { BranchMappingAndTransferComponent } from './branch-mapping-and-transfer/branch-mapping-and-transfer.component';
import { BranchMappingAndTransferListingComponent } from './branch-mapping-and-transfer-listing/branch-mapping-and-transfer-listing.component';
import { MappedBranchDialogComponent } from './mapped-branch-dialog/mapped-branch-dialog.component';
// import { TestTableComponent } from './test-table/test-table.component';

@NgModule({
  imports: [
    EdpRoutingModule,
    CommonProtoModule,
  ],

  declarations: [
    EdpComponent,
    BranchMasterComponent,
    DdoOfficeHodComponent,
    DDOSubOfficeHODComponent,
    DdoOfficesToComponent,
    DDOSubOfficeCreationTOComponent,
    DdoOfficesUpdationComponent,
    DDOSubOfficeUpdationComponent,
    DialogSubOfficeDialog,
    DdoOfficesComponent,
    RequestListingComponent,
    BranchMasterComponent,
    BillTypewiseObjectclassMappingComponent,
    ResetPasswordComponentDialog,
    ResetPasswordComponent,
    GlobalResetPasswordComponentDialog,
    UpdateDesignationComponent,
    PostCreationComponent,
    PostCreationListComponent,
    GlobalResetPasswordComponent,
    GlobalResetPasswordComponentDialog,
    UpdateDesignationComponent,
    UserPostMappingRequestComponent,
    UserPostMappingDtailComponent,
    DDOSubOfficeCreationComponent,
    UserPostMappingToComponent,
    AddDesignationComponent,
    AddDesignationListComponent,
    UpdateDesignationComponent,
    UpdateDesignationDialogComponent,
    UpdateDesignationListComponent,
    UserRoleMappingCreateComponent,
    UserRoleMappingForwardDialogComponent,
    MappingForwardDialogComponent,
    UserRoleMappingListComponent,
    UserRoleMappingToComponent,
    OfficeUpdationListEDPComponent,
    OfficeUpdationListDdoComponent,
    AddIfscComponent,
    GrantExemptionComponent,
    ChangePasswordComponent,
    GrantExemptionListComponent,
    AddIfscListingComponent,
    ChargeConfirmDialogComponent,
    PostialogComponent,
    UserRoleMappingViewDialogComponent,
    BranchCreationComponent,
    ProceedDialogComponent,
    BranchCreationListingComponent,
    BranchMappingAndTransferComponent,
    BranchMappingAndTransferListingComponent,
    MappedBranchDialogComponent,
    // TestTableComponent
  ],
  entryComponents: [
    ResetPasswordComponentDialog,
    UpdateDesignationDialogComponent,
    GlobalResetPasswordComponentDialog,
    DDOSubOfficeCreationComponent,
    DDOSubOfficeHODComponent,
    DDOSubOfficeCreationTOComponent,
    DDOSubOfficeUpdationComponent,
    DialogSubOfficeDialog,
    UserRoleMappingForwardDialogComponent,
    MappingForwardDialogComponent,
    ChargeConfirmDialogComponent,
    PostialogComponent,
    UserRoleMappingViewDialogComponent,
    ProceedDialogComponent,
    MappedBranchDialogComponent,
  ]
})
export class EdpModule { }
