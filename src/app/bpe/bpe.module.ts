
import { from } from 'rxjs';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonProtoModule } from '../common/common.module';
import { MaterialModule } from '../material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

import { BpeRoutingModule } from './bpe-routing.module';
import { PseRegistrationComponent } from './pse-registration/pse-registration.component';
import { FinancialDetailsComponent } from './psu-details/financial-details/financial-details.component';
import { IndependentBodiesDetailsComponent } from './independent-bodies-details/independent-bodies-details.component';
import { EmploymentDetailsComponent } from './psu-details/employment-details/employment-details.component';
import { InvestmentDetailsComponent } from './psu-details/investment-details/investment-details.component';
import { LoanDetailsComponent } from './psu-details/loan-details/loan-details.component';
import { PseRegistrationListingComponent } from './pse-registration-listing/pse-registration-listing.component';
import { FinancialDetailsListingComponent } from './psu-details/financial-details-listing/financial-details-listing.component';
import { LoanDetailsListingComponent } from './psu-details/loan-details-listing/loan-details-listing.component';
import { InvestmentDetailsListingComponent } from './psu-details/investment-details-listing/investment-details-listing.component';
import { EmploymentDetailsListingComponent } from './psu-details/employment-details-listing/employment-details-listing.component';
import { IndependentBodiesDetailsListingComponent } from './independent-bodies-details-listing/independent-bodies-details-listing.component';

@NgModule({
  imports: [

    BpeRoutingModule,
    CommonProtoModule,
    MaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMatSelectSearchModule,
  ],
  declarations: [PseRegistrationComponent, FinancialDetailsComponent, IndependentBodiesDetailsComponent, EmploymentDetailsComponent, InvestmentDetailsComponent, LoanDetailsComponent, PseRegistrationListingComponent, FinancialDetailsListingComponent, LoanDetailsListingComponent, InvestmentDetailsListingComponent, EmploymentDetailsListingComponent, IndependentBodiesDetailsListingComponent],

  entryComponents: [],

})
export class BpeModule { }
