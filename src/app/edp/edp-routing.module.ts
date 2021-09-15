import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EdpComponent } from './edp.component/edp.component';

import { DdoOfficesComponent } from './ddo-office/ddo-offices/ddo-offices.component';
import { DdoOfficeHodComponent } from './ddo-office/ddo-office-hod/ddo-office-hod.component';
import { DdoOfficesToComponent } from './ddo-office/ddo-offices-to/ddo-offices-to.component';
import { RequestListingComponent } from './ddo-office/request-listing/request-listing.component';
import { DdoOfficesUpdationComponent } from './ddo-office/ddo-offices-updation/ddo-offices-updation.component';
import { OfficeUpdationListEDPComponent } from './ddo-office/office-updation-list-edp/office-updation-list-edp.component';
import { OfficeUpdationListDdoComponent } from './ddo-office/office-updation-list-ddo/office-updation-list-ddo.component';

import { PostCreationComponent } from './users/post-creation/post-creation.component';
import { PostCreationListComponent } from './users/post-creation-list/post-creation-list.component';

import { AddDesignationComponent } from './add-designation/add-designation.component';
import { AddDesignationListComponent } from './add-designation-list/add-designation-list.component';
import { UpdateDesignationComponent } from './update-designation/update-designation.component';
import { UpdateDesignationListComponent } from './update-designation-list/update-designation-list.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { GlobalResetPasswordComponent } from './global-reset-password/global-reset-password.component';

import { BranchMasterComponent } from './branch-master/branch-master.component';
import { UserPostMappingRequestComponent } from './user-post-mapping/user-post-mapping-request/user-post-mapping-request.component';
import { UserPostMappingDtailComponent } from './user-post-mapping/user-post-mapping-creater/user-post-mapping-detail.component';
import { UserPostMappingToComponent } from './user-post-mapping/user-post-mapping-to/user-post-mapping-to.component';

import { BillTypewiseObjectclassMappingComponent } from './bill-typewise-objectclass-mapping/bill-typewise-objectclass-mapping.component';
import { UserRoleMappingToComponent } from './user-role-mapping/user-role-mapping-to/user-role-mapping-to.component';
import { UserRoleMappingListComponent } from './user-role-mapping/user-role-mapping-list/user-role-mapping-list.component';
import { UserRoleMappingCreateComponent } from './user-role-mapping/user-role-mapping-create/user-role-mapping-create.component';
import { AddIfscComponent } from './add-ifsc/add-ifsc.component';
import { GrantExemptionComponent } from './grant-exemption/grant-exemption.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { GrantExemptionListComponent } from './grant-exemption-list/grant-exemption-list.component';
import { AddIfscListingComponent } from './add-ifsc-listing/add-ifsc-listing.component';
import { BranchCreationComponent } from './branch-creation/branch-creation.component';
import { BranchCreationListingComponent } from './branch-creation-listing/branch-creation-listing.component';
import { BranchMappingAndTransferComponent } from './branch-mapping-and-transfer/branch-mapping-and-transfer.component';
import {
    BranchMappingAndTransferListingComponent
} from './branch-mapping-and-transfer-listing/branch-mapping-and-transfer-listing.component';

export const edpRoutes: Routes = [
    {
        path: '',
        component: EdpComponent
    },
    {
        path: 'ddo-offices-hod',
        component: DdoOfficeHodComponent
    },
    {
        path: 'ddo-offices-to',
        component: DdoOfficesToComponent
    },
    {
        path: 'ddo-offices-edp',
        component: DdoOfficesComponent
    },
    {
        path: 'request-listing',
        component: RequestListingComponent
    },
    {
        path: 'ddo-offices-updation-hod',
        component: DdoOfficesUpdationComponent
    },
    {
        path: 'office-updation-list-edp',
        component: OfficeUpdationListEDPComponent
    },
    {
        path: 'office-updation-list-ddo',
        component: OfficeUpdationListDdoComponent
    },
    {
        path: 'post-creation',
        component: PostCreationComponent
    },
    {
        path: 'post-creation-list',
        component: PostCreationListComponent
    },
    {
        path: 'add-designation',
        component: AddDesignationComponent
    },
    {
        path: 'add-designation-list',
        component: AddDesignationListComponent
    },
    {
        path: 'update-designation',
        component: UpdateDesignationComponent
    },
    {
        path: 'update-designation-list',
        component: UpdateDesignationListComponent
    },
    {
        path: 'reset-password',
        component: ResetPasswordComponent
    },
    {
        path: 'global-reset-password',
        component: GlobalResetPasswordComponent
    },
    {
        path: 'branch',
        component: BranchMasterComponent
    },
    {
        path: 'user-post-mapping-request',
        component: UserPostMappingRequestComponent
    },
    {
        path: 'user-post-mapping-detail',
        component: UserPostMappingDtailComponent
    },
    {
        path: 'user-post-mapping-to',
        component: UserPostMappingToComponent
    },
    {
        path: 'bill-typewise-objectclass-mapping',
        component: BillTypewiseObjectclassMappingComponent
    },
    {
        path: 'user-role-mapping',
        component: UserRoleMappingCreateComponent
    },
    {
        path: 'user-role-mapping-list',
        component: UserRoleMappingListComponent
    },
    {
        path: 'user-role-mapping-to',
        component: UserRoleMappingToComponent
    },
    {
        path: 'add-ifsc',
        component: AddIfscComponent
    },
    {
        path: 'grant-exemption',
        component: GrantExemptionComponent
    },
    {
        path: 'change-password',
        component: ChangePasswordComponent
    },
    {
        path: 'grant-exemption-list',
        component: GrantExemptionListComponent
    },
    {
        path: 'add-ifsc-listing',
        component: AddIfscListingComponent
    },
    {
        path: 'branch-creation',
        component: BranchCreationComponent
    },
    {
        path: 'branch-creation-lisiting',
        component: BranchCreationListingComponent
    },
    {
        path: 'branch-mapping-and-transfer',
        component: BranchMappingAndTransferComponent
    },
    {
        path: 'branch-mapping-and-transfer-listing',
        component: BranchMappingAndTransferListingComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(edpRoutes)],
    exports: [RouterModule],
    declarations: []
})

export class EdpRoutingModule { }
