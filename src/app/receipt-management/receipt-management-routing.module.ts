import { PaymentHistoryComponent } from './payment-history/payment-history.component';
import { PayConfirmationComponent } from './pay-confirmation/pay-confirmation.component';
import { PurposeCreationListComponent } from './purpose-creation-list/purpose-creation-list.component';
import { ChallanPreparationAtCounterComponent } from './challan-preparation-at-counter/challan-preparation-at-counter.component';
import { PurposeCreationComponent } from './purpose-creation/purpose-creation.component';
import { SubUserCreationComponent } from './sub-user-creation/sub-user-creation.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
// tslint:disable-next-line:max-line-length
import { ChallanPreparationAtCounterListingComponent } from './challan-preparation-at-counter-listing/challan-preparation-at-counter-listing.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RmGenerateChallanComponent } from './rm-generate-challan/rm-generate-challan.component';
import { ReceiptManagementLoginComponent } from './receipt-management-login/receipt-management-login.component';

export const routesrecMan: Routes = [
  {
    path: 'registration', component: RegistrationComponent
  },

  {
    path: 'registration-listing', component: RegistrationListingComponent
  },

  {
    path: 'registration-view', component: RegistrationViewComponent
  },

  {
    path: 'user-registration', component: UserRegistrationComponent
  },

  {
    path: 'corporate-agency-registration', component: CorporteAgencyRegistrationComponent
  },

  {
    path: 'gtr-five-six', component: GtrFiveSixComponent
  },

  {
    path: 'gtr-five-six-listing', component: GtrFiveSixListingComponent
  },

  {
    path: 'challan-preparation-gov', component: ChallanPreparationGovComponent
  },

  {
    path: 'challan-preparation-gov-listing', component: ChallanPreparationGovListingComponent
  },

  {
    path: 'challan-payment-from-department', component: ChallanPaymentFromGovComponent
  },

  {
    path: 'challan-payment', component: ChallanPaymentComponent
  },

  {
    path: 'sub-user-creation', component: SubUserCreationComponent
  },

  {
    path: 'purpose-creation', component: PurposeCreationComponent
  },

  {
    path: 'challan-preparation-at-counter', component: ChallanPreparationAtCounterComponent
  },

  {
    path: 'challan-preparation-at-counter-listing', component: ChallanPreparationAtCounterListingComponent
  },

  {
    path: 'purpose-creation-list', component: PurposeCreationListComponent
  },

  // {
  //   path: 'payment-confirmation', component: PaymentConfirmationComponent
  // },

  // {
  //   path: 'login', component: LoginComponent
  // },

  {
    path: 'forgot-password', component: ForgotPasswordComponent
  },
  {
    path: 'pay-confirmation', component: PayConfirmationComponent
  },
  {
    path: 'payment-history', component: PaymentHistoryComponent
  },
  {
    path: 'generate-challan', component: RmGenerateChallanComponent
  },
  {
    path: 'login', component: ReceiptManagementLoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routesrecMan)],
  exports: [RouterModule]
})
export class ReceiptManagementRoutingModule { }
