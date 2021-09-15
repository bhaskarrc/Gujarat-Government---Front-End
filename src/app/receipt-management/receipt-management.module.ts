import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceiptManagementRoutingModule } from './receipt-management-routing.module';
import { CommonProtoModule } from '../common/common.module';
import { MaterialModule } from '../material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatRadioModule } from '@angular/material';
import { RegistrationComponent } from './department-registration/registration/registration.component';
import { RegistrationListingComponent } from './department-registration/registration-listing/registration-listing.component';
import { RegistrationViewComponent } from './department-registration/registration-view/registration-view.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { CorporteAgencyRegistrationComponent } from './corporte-agency-registration/corporte-agency-registration.component';
import { GtrFiveSixComponent } from './gtr-five-to-gtr-six/gtr-five-six/gtr-five-six.component';
import { GtrFiveSixListingComponent } from './gtr-five-to-gtr-six/gtr-five-six-listing/gtr-five-six-listing.component';
import { ChallanPreparationGovComponent } from './challan-preparation-gov/challan-preparation-gov.component';
import { ChallanPreparationGovListingComponent } from './challan-preparation-gov-listing/challan-preparation-gov-listing.component';
import { ChallanPaymentComponent } from './challan-payment/challan-payment.component';
import { ChallanPaymentFromGovComponent } from './challan-payment-from-gov/challan-payment-from-gov.component';
import { WorkflowDepartmentComponent } from './department-registration/workflow-department/workflow-department.component';
import { PaymentConfirmationComponent } from './payment-confirmation/payment-confirmation.component';
import { SubUserCreationComponent } from './sub-user-creation/sub-user-creation.component';
import { PurposeCreationComponent } from './purpose-creation/purpose-creation.component';
import { ChallanPreparationAtCounterComponent } from './challan-preparation-at-counter/challan-preparation-at-counter.component';
// tslint:disable-next-line:max-line-length
import { ChallanPreparationAtCounterListingComponent } from './challan-preparation-at-counter-listing/challan-preparation-at-counter-listing.component';
import { PurposeCreationListComponent } from './purpose-creation-list/purpose-creation-list.component';
import { PurposeCreationPopUpComponent } from './purpose-creation-pop-up/purpose-creation-pop-up.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { PayConfirmationComponent } from './pay-confirmation/pay-confirmation.component';
import { PaymentHistoryComponent } from './payment-history/payment-history.component';
import { RmGenerateChallanComponent } from './rm-generate-challan/rm-generate-challan.component';
import { ReceiptManagementLoginComponent } from './receipt-management-login/receipt-management-login.component';

@NgModule({
  imports: [
    CommonModule,
    ReceiptManagementRoutingModule,
    CommonProtoModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMatSelectSearchModule,
    MatRadioModule
  ],
  declarations: [

    RegistrationComponent,
    RegistrationListingComponent,
    RegistrationViewComponent,
    UserRegistrationComponent,
    CorporteAgencyRegistrationComponent,
    GtrFiveSixComponent,
    GtrFiveSixListingComponent,
    ChallanPreparationGovComponent,
    ChallanPreparationGovListingComponent,
    ChallanPaymentComponent,
    ChallanPaymentFromGovComponent,
    WorkflowDepartmentComponent,
    PaymentConfirmationComponent,
    SubUserCreationComponent,
    PurposeCreationComponent,
    ChallanPreparationAtCounterComponent,
    ChallanPreparationAtCounterListingComponent,
    PurposeCreationListComponent,
    PurposeCreationPopUpComponent,
    LoginComponent,
    ForgotPasswordComponent,
    PayConfirmationComponent,
    PaymentHistoryComponent,
    RmGenerateChallanComponent,
    ReceiptManagementLoginComponent,
  ],

  entryComponents: [
    WorkflowDepartmentComponent,
    PurposeCreationPopUpComponent


  ]
})
export class ReceiptManagementModule { }
