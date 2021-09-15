import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BranchHaMappingComponent, BranchHaDialogComponent } from './branch-ha-mapping/branch-ha-mapping.component';
import { EPaoRoutingModule } from './e-pao-routing.module';
import { CommonProtoModule } from '../common/common.module';
import { MaterialModule } from '../material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { BranchSaDaMappingComponent, BranchSaDaDialogComponent } from './branch-sa-da-mapping/branch-sa-da-mapping.component';
import { WorkFlowEPaoComponent } from './work-flow-e-pao/work-flow-e-pao.component';
import { BankRateMasterComponent, BankRateMasterDialogeComponent, BankRateMasterEditDialogeComponent } from './bank-rate-master/bank-rate-master.component';
import { GstFileAccountingComponent } from './gst-file-accounting/gst-file-accounting.component';
import { ScollDstributionComponent } from './scoll-dstribution/scoll-dstribution.component';
import { BankRateMasterHaComponent } from './bank-rate-master-ha/bank-rate-master-ha.component';
import { BankRateMasterAoComponent } from './bank-rate-master-ao/bank-rate-master-ao.component';
import { GstFilrAccountingAoComponent } from './gst-filr-accounting-ao/gst-filr-accounting-ao.component';
import { GstFilrAccountingHaComponent } from './gst-filr-accounting-ha/gst-filr-accounting-ha.component';
import { BankRateMasterAoListingComponent } from './bank-rate-master-ao-listing/bank-rate-master-ao-listing.component';
import { BankRateMasterHaListingComponent } from './bank-rate-master-ha-listing/bank-rate-master-ha-listing.component';
import { BankRateMasterListingComponent, BankRateMasterDialoge2Component, BankRateMasterEditDialoge2Component } from './bank-rate-master-listing/bank-rate-master-listing.component';
import { GstFileAccountingAoListingComponent } from './gst-file-accounting-ao-listing/gst-file-accounting-ao-listing.component';
import { GstFileAccountingHaListingComponent } from './gst-file-accounting-ha-listing/gst-file-accounting-ha-listing.component';
import { GstFileAccountingListingComponent } from './gst-file-accounting-listing/gst-file-accounting-listing.component';
import { ScrollDistributionListingComponent } from './scroll-distribution-listing/scroll-distribution-listing.component';
import { ChallanDistributionComponent } from './challan-distribution/challan-distribution.component';
import { ChallanDistributionListingComponent } from './challan-distribution-listing/challan-distribution-listing.component';
import { AccountingScreenComponent } from './accounting-screen/accounting-screen.component';
import { AccountingScreenListingComponent } from './accounting-screen-listing/accounting-screen-listing.component';
import { CinCpinStatusComponent } from './cin-cpin-status/cin-cpin-status.component';
import { FileSummaryComponent } from './file-summary/file-summary.component';
import { ManualEntryMasterComponent } from './manual-entry/manual-entry-master/manual-entry-master.component';
import { ManualEntryMasterListingComponent } from './manual-entry/manual-entry-master/manual-entry-master-listing/manual-entry-master-listing.component';
import { ManualEntryHaComponent } from './manual-entry-ha/manual-entry-ha.component';
import { ManualEntryHaLinkComponent } from './manual-entry-ha-link/manual-entry-ha-link.component';
import { ManualEntryAoComponent } from './manual-entry-ao/manual-entry-ao.component';
import { ManualEntryAoLinkComponent } from './manual-entry-ao-link/manual-entry-ao-link.component';
import { ManualEntryHaListingComponent } from './manual-entry-ha/manual-entry-ha-listing/manual-entry-ha-listing.component';
import { ManualEntryHaLinkListingComponent } from './manual-entry-ha-link/manual-entry-ha-link-listing/manual-entry-ha-link-listing.component';
import { ManualEntryAoListingComponent } from './manual-entry-ao/manual-entry-ao-listing/manual-entry-ao-listing.component';
import { ManualEntryAoLinkListingComponent } from './manual-entry-ao-link/manual-entry-ao-link-listing/manual-entry-ao-link-listing.component';
import { BlockCpinComponent } from './block-cpin/block-cpin.component';
import { BlockCpinViewComponent } from './block-cpin-view/block-cpin-view.component';
import { GenereateMoeComponent, GSTDialogComponent } from './genereate-moe/genereate-moe.component';
import { GenerateModeListingComponent } from './generate-mode-listing/generate-mode-listing.component';
import { GenerateModeHaComponent, GSTDialogHAComponent } from './generate-mode-ha/generate-mode-ha.component';
import { GenerateModeHaListingComponent } from './generate-mode-ha-listing/generate-mode-ha-listing.component';
import { GenerateModeAoComponent, GSTDialogAoComponent } from './generate-mode-ao/generate-mode-ao.component';
import { GenerateModeAoListingComponent } from './generate-mode-ao-listing/generate-mode-ao-listing.component';
import { BlockCpinHaComponent } from './block-cpin-ha/block-cpin-ha.component';
import { BlockCpinHaListingComponent } from './block-cpin-ha/block-cpin-ha-listing/block-cpin-ha-listing.component';
import { BlockCpinAoComponent } from './block-cpin-ao/block-cpin-ao.component';
import { BlockCpinAoListingComponent } from './block-cpin-ao/block-cpin-ao-listing/block-cpin-ao-listing.component';
import { BlockCpinAoLinkComponent } from './block-cpin-ao-link/block-cpin-ao-link.component';
import { PenaltyAmountReceiveComponent } from './penalty-amount-receive/penalty-amount-receive.component';
import { PenaltyAmountReceiveListingComponent } from './penalty-amount-receive/penalty-amount-receive-listing/penalty-amount-receive-listing.component';
import { PenaltyAmountReceiveHaComponent } from './penalty-amount-receive-ha/penalty-amount-receive-ha.component';
import { PenaltyAmountReceiveAoComponent } from './penalty-amount-receive-ao/penalty-amount-receive-ao.component';
import { PenaltyAmountReceiveHaListingComponent } from './penalty-amount-receive-ha/penalty-amount-receive-ha-listing/penalty-amount-receive-ha-listing.component';
import { PenaltyAmountReceiveAoListingComponent } from './penalty-amount-receive-ao/penalty-amount-receive-ao-listing/penalty-amount-receive-ao-listing.component';
import { LoadBalancerHaComponent } from './load-balancer-ha/load-balancer-ha.component';
import { LoadBalancerHaListingComponent } from './load-balancer-ha-listing/load-balancer-ha-listing.component';
import { LoadBalancerAoComponent } from './load-balancer-ao/load-balancer-ao.component';
import { LoadBalancerAoListingComponent } from './load-balancer-ao-listing/load-balancer-ao-listing.component';
import { BlockCpinListingComponent } from './block-cpin-listing/block-cpin-listing.component';

@NgModule({
  imports: [
    CommonProtoModule,
    MaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMatSelectSearchModule,
    EPaoRoutingModule
  ],
  declarations: [BranchHaMappingComponent,
    BranchSaDaMappingComponent,
    WorkFlowEPaoComponent,
    BankRateMasterComponent,
    GstFileAccountingComponent,
    ScollDstributionComponent,
    BankRateMasterHaComponent,
    BankRateMasterAoComponent,
    GstFilrAccountingAoComponent,
    GstFilrAccountingHaComponent,
    BankRateMasterAoListingComponent,
    BankRateMasterHaListingComponent,
    BankRateMasterListingComponent,
    GstFileAccountingAoListingComponent,
    GstFileAccountingHaListingComponent,
    GstFileAccountingListingComponent,
    ScrollDistributionListingComponent,
    ChallanDistributionComponent,
    ChallanDistributionListingComponent,
    AccountingScreenComponent,
    AccountingScreenListingComponent,
    BranchHaDialogComponent,
    BranchSaDaDialogComponent,
    BankRateMasterDialogeComponent,
    CinCpinStatusComponent,
    FileSummaryComponent,
    ManualEntryMasterComponent,
    ManualEntryMasterListingComponent,
    ManualEntryHaComponent,
    ManualEntryHaLinkComponent,
    ManualEntryAoComponent,
    ManualEntryAoLinkComponent,
    ManualEntryHaListingComponent,
    ManualEntryHaLinkListingComponent,
    ManualEntryAoListingComponent,
    ManualEntryAoLinkListingComponent,
    BlockCpinComponent,
    BlockCpinViewComponent,
    GenereateMoeComponent,
    GSTDialogComponent,
    GenerateModeListingComponent,
    GenerateModeHaComponent,
    GenerateModeHaListingComponent,
    GenerateModeAoComponent,
    GenerateModeAoListingComponent,
    GSTDialogAoComponent,
    GSTDialogHAComponent,
    BlockCpinHaComponent,
    BlockCpinHaListingComponent,
    BlockCpinAoComponent,
    BlockCpinAoListingComponent,
    BlockCpinAoLinkComponent,
    PenaltyAmountReceiveComponent,
    PenaltyAmountReceiveListingComponent,
    PenaltyAmountReceiveHaComponent,
    PenaltyAmountReceiveAoComponent,
    PenaltyAmountReceiveHaListingComponent,
    PenaltyAmountReceiveAoListingComponent,
    LoadBalancerHaComponent,
    LoadBalancerHaListingComponent,
    LoadBalancerAoComponent,
    LoadBalancerAoListingComponent,
    BankRateMasterEditDialogeComponent,
    BankRateMasterDialoge2Component,
    BankRateMasterEditDialoge2Component,
    BlockCpinListingComponent,

  ],
  entryComponents: [
    WorkFlowEPaoComponent,
    BranchHaDialogComponent,
    BranchSaDaDialogComponent,

    BankRateMasterDialogeComponent,
    GSTDialogComponent,
    GSTDialogAoComponent,
    GSTDialogHAComponent,
    BankRateMasterEditDialogeComponent,
    BankRateMasterDialoge2Component,
    BankRateMasterEditDialoge2Component,

  ]
})
export class EPaoModule { }
