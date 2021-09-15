import { CommonProtoModule } from './../common/common.module';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../material-module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DmoRoutingModule } from './dmo-routing.module';
import { NssfLoanReceivedComponent } from './nssf-loan-received/nssf-loan-received.component';
// tslint:disable-next-line: max-line-length
import { NssfLoanReceivedAddDetailsComponent } from './nssf-loan-received/nssf-loan-received-add-details/nssf-loan-received-add-details.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMatSelectSearchModule,
    CommonProtoModule,
    DmoRoutingModule
  ],
  declarations: [
    NssfLoanReceivedComponent,
    NssfLoanReceivedAddDetailsComponent,
  ]
})
export class DmoModule { }
