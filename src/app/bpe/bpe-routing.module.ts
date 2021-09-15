import { FinancialDetailsComponent } from './psu-details/financial-details/financial-details.component';
import { PseRegistrationComponent } from './pse-registration/pse-registration.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndependentBodiesDetailsComponent } from './independent-bodies-details/independent-bodies-details.component';
import { EmploymentDetailsComponent } from './psu-details/employment-details/employment-details.component';
import { InvestmentDetailsComponent } from './psu-details/investment-details/investment-details.component';
import { LoanDetailsComponent } from './psu-details/loan-details/loan-details.component';
import { PseRegistrationListingComponent } from './pse-registration-listing/pse-registration-listing.component';
import { LoanDetailsListingComponent } from './psu-details/loan-details-listing/loan-details-listing.component';
import { FinancialDetailsListingComponent } from './psu-details/financial-details-listing/financial-details-listing.component';
import { InvestmentDetailsListingComponent } from './psu-details/investment-details-listing/investment-details-listing.component';
import { EmploymentDetailsListingComponent } from './psu-details/employment-details-listing/employment-details-listing.component';
import {
  IndependentBodiesDetailsListingComponent
} from './independent-bodies-details-listing/independent-bodies-details-listing.component';

const routes: Routes = [
  {
    path: 'pse-registration',
    component: PseRegistrationComponent
  },
  {
    path: 'psu-details/financial-details',
    component: FinancialDetailsComponent
  },
  {
    path: 'independent-bodies-details',
    component: IndependentBodiesDetailsComponent
  },
  {
    path: 'psu-details/employment-details',
    component: EmploymentDetailsComponent
  },
  {
    path: 'psu-details/investment-details',
    component: InvestmentDetailsComponent
  },
  {
    path: 'psu-details/loan-details',
    component: LoanDetailsComponent
  },
  {
    path: 'pse-registration-listing',
    component: PseRegistrationListingComponent
  },
  {
    path: 'psu-details/loan-details-listing',
    component: LoanDetailsListingComponent
  },
  {
    path: 'psu-details/financial-details-listing',
    component: FinancialDetailsListingComponent
  },
  {
    path: 'psu-details/investment-details-listing',
    component: InvestmentDetailsListingComponent
  },
  {
    path: 'psu-details/employment-details-listing',
    component: EmploymentDetailsListingComponent
  },
  {
    path: 'independent-bodies-details-listing',
    component: IndependentBodiesDetailsListingComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BpeRoutingModule { }
