import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// tslint:disable-next-line: max-line-length
import { NssfLoanReceivedAddDetailsComponent } from './nssf-loan-received/nssf-loan-received-add-details/nssf-loan-received-add-details.component';
import { NssfLoanReceivedComponent } from './nssf-loan-received/nssf-loan-received.component';

const routes: Routes = [
  {
    path: 'nssf-loan-received',
    component: NssfLoanReceivedComponent
  },
  {
    path: 'nssf-loan-received/add-details',
    component: NssfLoanReceivedAddDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DmoRoutingModule { }
