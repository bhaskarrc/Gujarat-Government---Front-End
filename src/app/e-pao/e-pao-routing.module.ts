// tslint:disable-next-line: max-line-length
// tslint:disable-next-line: max-line-length
import { PenaltyAmountReceiveListingComponent } from './penalty-amount-receive/penalty-amount-receive-listing/penalty-amount-receive-listing.component';
import { PenaltyAmountReceiveComponent } from './penalty-amount-receive/penalty-amount-receive.component';
import { BlockCpinViewComponent } from './block-cpin-view/block-cpin-view.component';
import { BlockCpinComponent } from './block-cpin/block-cpin.component';
// tslint:disable-next-line: max-line-length
import { ManualEntryMasterListingComponent } from './manual-entry/manual-entry-master/manual-entry-master-listing/manual-entry-master-listing.component';
import { ManualEntryMasterComponent } from './manual-entry/manual-entry-master/manual-entry-master.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BranchHaMappingComponent } from './branch-ha-mapping/branch-ha-mapping.component';
import { BranchSaDaMappingComponent } from './branch-sa-da-mapping/branch-sa-da-mapping.component';
import { BankRateMasterComponent } from './bank-rate-master/bank-rate-master.component';
import { GstFileAccountingComponent } from './gst-file-accounting/gst-file-accounting.component';
import { ScollDstributionComponent } from './scoll-dstribution/scoll-dstribution.component';
import { BankRateMasterListingComponent } from './bank-rate-master-listing/bank-rate-master-listing.component';
import { GstFileAccountingListingComponent } from './gst-file-accounting-listing/gst-file-accounting-listing.component';
import { ScrollDistributionListingComponent } from './scroll-distribution-listing/scroll-distribution-listing.component';
import { ChallanDistributionComponent } from './challan-distribution/challan-distribution.component';
import { ChallanDistributionListingComponent } from './challan-distribution-listing/challan-distribution-listing.component';
import { AccountingScreenComponent } from './accounting-screen/accounting-screen.component';
import { AccountingScreenListingComponent } from './accounting-screen-listing/accounting-screen-listing.component';
import { CinCpinStatusComponent } from './cin-cpin-status/cin-cpin-status.component';
import { FileSummaryComponent } from './file-summary/file-summary.component';
import { GenereateMoeComponent } from './genereate-moe/genereate-moe.component';
import { GenerateModeListingComponent } from './generate-mode-listing/generate-mode-listing.component';
import { LoadBalancerHaComponent } from './load-balancer-ha/load-balancer-ha.component';
import { LoadBalancerHaListingComponent } from './load-balancer-ha-listing/load-balancer-ha-listing.component';
import { LoadBalancerAoComponent } from './load-balancer-ao/load-balancer-ao.component';
import { LoadBalancerAoListingComponent } from './load-balancer-ao-listing/load-balancer-ao-listing.component';
import { BlockCpinListingComponent } from './block-cpin-listing/block-cpin-listing.component';


const routes: Routes = [
  {
    path: 'branch-ha-maping',
    component: BranchHaMappingComponent
  },

  {
    path: 'branch-sa-da-maping',
    component: BranchSaDaMappingComponent
  },
  {
    path: 'bank-rate-master',
    component: BankRateMasterComponent
  },
  {
    path: 'bank-rate-master-listing',
    component: BankRateMasterListingComponent
  },

  {
    path: 'gst-file-accounting',
    component: GstFileAccountingComponent
  },
  {
    path: 'gst-file-accounting-listing',
    component: GstFileAccountingListingComponent
  },

  {
    path: 'scroll-distribution',
    component: ScollDstributionComponent
  },
  {
    path: 'scroll-distribution-listing',
    component: ScrollDistributionListingComponent
  },
  {
    path: 'challan-distribution',
    component: ChallanDistributionComponent
  }
  ,
  {
    path: 'challan-distribution-listing',
    component: ChallanDistributionListingComponent

  },
  {
    path: 'manual-entry/manual-entry-master',
    component: ManualEntryMasterComponent
  },
  {
    path: 'manual-entry/manual-entry-master-listing',
    component: ManualEntryMasterListingComponent
  }
  ,
  {
    path: 'account-screen',
    component: AccountingScreenComponent
  }
  ,
  {
    path: 'account-screen-listing',
    component: AccountingScreenListingComponent
  },
  {
    path: 'cin-cpin-status',
    component: CinCpinStatusComponent
  },
  {
    path: 'file-summary',
    component: FileSummaryComponent
  },
  {
    path: 'block-cpin',
    component: BlockCpinComponent
  },
  {
    path: 'block-cpin-view',
    component: BlockCpinViewComponent
  },
  {
    path: 'generate-moe',
    component: GenereateMoeComponent
  },
  {
    path: 'generate-moe-listing',
    component: GenerateModeListingComponent
  }
  ,

  {
    path: 'penalty-amount-receive',
    component: PenaltyAmountReceiveComponent
  },
  {
    path: 'penalty-amount-receive-listing',
    component: PenaltyAmountReceiveListingComponent
  },
  {
    path: 'load-balancer-ha',
    component: LoadBalancerHaComponent
  }
  ,
  {
    path: 'load-balancer-ha-listing',
    component: LoadBalancerHaListingComponent
  }
  ,
  {
    path: 'load-balancer-ao',
    component: LoadBalancerAoComponent
  }
  ,
  {
    path: 'load-balancer-ao-listing',
    component: LoadBalancerAoListingComponent
  },
  {
    path: 'block-cpin-listing',
    component: BlockCpinListingComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EPaoRoutingModule { }
