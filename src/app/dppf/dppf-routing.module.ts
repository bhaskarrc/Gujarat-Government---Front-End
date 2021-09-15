import { InwardOutwardListingComponent } from './inward-outward-listing/inward-outward-listing.component';
// tslint:disable-next-line:max-line-length
import { PensionCaseLetterSixthPayCommissionComponent } from './pension-case-letter-sixth-pay-commission/pension-case-letter-sixth-pay-commission.component';
import { SentPensionCaseListingComponent } from './sent-pension-case-listing/sent-pension-case-listing.component';
import { SavedOnlinePensionCaseComponent } from './saved-online-pension-case/saved-online-pension-case.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnlinePensionCaseComponent } from './online-pension-case/online-pension-case.component';
import { SentPensionCaseComponent } from './sent-pension-case/sent-pension-case.component';
import { OutwardPensionCasesComponent } from './outward-pension-cases/outward-pension-cases.component';
import { OutwardedPensionCasesListComponent } from './outwarded-pension-cases-list/outwarded-pension-cases-list.component';
import { MasterRateUpdationScreenComponent } from './master-rate-updation-screen/master-rate-updation-screen.component';
import { ReceivedOnlinePensionCaseComponent } from './received-online-pension-case/received-online-pension-case.component';
import { InwardPensionCaseComponent } from './inward-pension-case/inward-pension-case.component';
import { InwardOutwardLetterScreenComponent } from './inward-outward-letter-screen/inward-outward-letter-screen.component';
import { InwardOutwardLetterScreenListComponent } from './inward-outward-letter-screen-list/inward-outward-letter-screen-list.component';
import { PensionCaseLetterComponent } from './pension-case-letter/pension-case-letter.component';
import { AuditorSavedCasesComponent } from './auditor-saved-cases/auditor-saved-cases.component';
import { OfficeSuperintendentSavedCasesComponent } from './office-superintendent-saved-cases/office-superintendent-saved-cases.component';
import { AccountOfficerSavedCasesComponent } from './account-officer-saved-cases/account-officer-saved-cases.component';
import { DyDirectorSavedCasesComponent } from './dy-director-saved-cases/dy-director-saved-cases.component';
import { DirectorSavedCasesComponent } from './director-saved-cases/director-saved-cases.component';
import { RtiVigilanceBranchComponent } from './rti-vigilance-branch/rti-vigilance-branch.component';
import { SavedCasesPaComputerComponent } from './saved-cases-pa-computer/saved-cases-pa-computer.component';
// tslint:disable-next-line:max-line-length
import { RecievedOtherStatePensionCaseToPpoComponent } from './recieved-other-state-pension-case-to-ppo/recieved-other-state-pension-case-to-ppo.component';
import { InwardOutwardDetailsComponent } from './inward-outward-details/inward-outward-details.component';
import { RecievedOtherStatePensionCaseComponent } from './recieved-other-state-pension-case/recieved-other-state-pension-case.component';
import { CorrectionMemoPaComputerComponent } from './correction-memo-pa-computer/correction-memo-pa-computer.component';
// tslint:disable-next-line:max-line-length
import { InwardOutwardLetterScreenListInwardnoComponent } from './inward-outward-letter-screen-list-inwardno/inward-outward-letter-screen-list-inwardno.component';
import { AuditorInwardDetailsComponent } from './auditor-inward-details/auditor-inward-details.component';
import { InternalAuditBranchComponent } from './internal-audit-branch/internal-audit-branch.component';
import { SavedCasesPaOneTwoComponent } from './saved-cases-pa-one-two/saved-cases-pa-one-two.component';
import { DeletePensionCaseComponent } from './delete-pension-case/delete-pension-case.component';
import { JrClerkPrBranchComponent } from './jr-clerk-pr-branch/jr-clerk-pr-branch.component';
import { ObjectionComponent } from './objection/objection.component';
import { PrintStickerComponent } from './print-sticker/print-sticker.component';
import { DppfDialogBoxComponent } from './dppf-dialog-box/dppf-dialog-box.component';
import { ReceivedCloseCaseListingComponent } from './received-close-case-listing/received-close-case-listing.component';
import { ReceivedCaseFromToPpoListingComponent } from './received-case-from-to-ppo-listing/received-case-from-to-ppo-listing.component';
import { DppfOnlinePensionCaseComponent } from './dppf-online-pension-case/dppf-online-pension-case.component';
import { DppfOnlinePensionCasePrintComponent } from './dppf-online-pension-case-print/dppf-online-pension-case-print.component';
import { RtiVigilanceBranchListingComponent } from './rti-vigilance-branch/rti-vigilance-branch-listing/rti-vigilance-branch-listing.component';

const routes: Routes = [
  // {
  //   path: 'online-pension-case',
  //   component: OnlinePensionCaseComponent
  // },
  {
    path: 'inward-physical-case-listing',
    component: SentPensionCaseComponent
  },
  {
    path: 'outward-pension-cases',
    component: OutwardPensionCasesComponent
  },

  // {
  //   path: 'outward-pension-cases/outward-pension-cases-list',
  //   component: OutwardedPensionCasesListComponent
  // },

  {
    path: 'outwarded-case-sticker-print',
    component: OutwardedPensionCasesListComponent
  },

  {
    path: 'master-rate-updation-screen',
    component: MasterRateUpdationScreenComponent
  },
  {
    path: 'recieved-online-pension-case',
    component: ReceivedOnlinePensionCaseComponent
  },

  // {
  //   path: 'inward-pension-case',
  //   component: InwardPensionCaseComponent
  // },

  {
    path: 'inward-physical-pension-case',
    component: InwardPensionCaseComponent
  },

  {
    path: 'inward-outward-letter-screen',
    component: InwardOutwardLetterScreenComponent
  },

  {
    path: 'inward-outward-letter-screen/inward-outward-letter-screen-list',
    component: InwardOutwardLetterScreenListComponent
  },
  {
    path: 'inward-outward-listing',
    component: InwardOutwardListingComponent
  },

  {
    path: 'inward-outward-letter-screen-list-inwardno',
    component: InwardOutwardLetterScreenListInwardnoComponent
  },

  // {
  //   path: 'auditor-saved-cases',
  //   component: AuditorSavedCasesComponent
  // },
  {

    path: 'pr-auditor-listing',
    component: AuditorSavedCasesComponent
  },
  // {
  //   path: 'office-superintendent-saved-cases',
  //   component: OfficeSuperintendentSavedCasesComponent
  // },

  {
    path: 'pr-office-supritendent-listing',
    component: OfficeSuperintendentSavedCasesComponent
  },

  {
    path: 'auditor-inward-details',
    component: AuditorInwardDetailsComponent
  },

  // {
  //   path: 'account-officer-saved-cases',
  //   component: AccountOfficerSavedCasesComponent
  // },

  {
    path: 'account-officer-listing',
    component: AccountOfficerSavedCasesComponent
  },

  // {
  //   path: 'dy-director-saved-cases',
  //   component: DyDirectorSavedCasesComponent
  // },

  {
    path: 'dy-director-listing',
    component: DyDirectorSavedCasesComponent
  },

  // {
  //   path: 'director-saved-cases',
  //   component: DirectorSavedCasesComponent
  // },

  {
    path: 'director-listing',
    component: DirectorSavedCasesComponent
  },

  // {
  //   path: 'saved-cases-pa-computer',
  //   component: SavedCasesPaComputerComponent
  // },

  {
    path: 'pa-computer-listing',
    component: SavedCasesPaComputerComponent
  },

  {
    path: 'correction-memo-pa-computer',
    component: CorrectionMemoPaComputerComponent
  },
  {
    path: 'pension-case-forward-letter',
    component: PensionCaseLetterComponent
  },
  {
    path: 'rti-vigilance-branch',
    component: RtiVigilanceBranchComponent
  },
  {
    path: 'rti-vigilance-branch-listing',
    component: RtiVigilanceBranchListingComponent
  },

  {
    path: 'online-pension-case-listing',
    component: SavedOnlinePensionCaseComponent
  },


  {
    path: 'pr-jr-clerk-listing',
    component: SentPensionCaseListingComponent
  },

  {
    path: 'recieved-other-state-pension-case-to-ppo',
    component: RecievedOtherStatePensionCaseToPpoComponent
  },
  {
    path: 'received-other-state-pension-case',
    component: RecievedOtherStatePensionCaseComponent
  },
  {
    path: 'inward-outward-details',
    component: InwardOutwardDetailsComponent
  },
  {
    path: 'pension-case-letter-sixth-pay-commission',
    component: PensionCaseLetterSixthPayCommissionComponent
  },
  // {
  //   path: 'internal-audit-branch',
  //   component: InternalAuditBranchComponent
  // },

  {
    path: 'internal-audit-branch-listing',
    component: InternalAuditBranchComponent
  },

  // {
  //   path: 'pa-one-two',
  //   component: SavedCasesPaOneTwoComponent
  // },

  {
    path: 'pa-one-two-branch-listing',
    component: SavedCasesPaOneTwoComponent
  },

  {
    path: 'delete-pension-case',
    component: DeletePensionCaseComponent
  },
  {
    path: 'jr-clerk-pr-branch',
    component: JrClerkPrBranchComponent
  },

  {
    path: 'objection',
    component: ObjectionComponent
  },
  {
    path: 'stickers',
    component: PrintStickerComponent
  },
  {
    path: 'dppf-dialog-box',
    component: DppfDialogBoxComponent
  },
  {
    path: 'received-close-case-listing',
    component: ReceivedCloseCaseListingComponent
  },
  {
    path: 'received-case-from-to-ppo-listing',
    component: ReceivedCaseFromToPpoListingComponent
  },
  {
    path: 'dppf-online-pension-case',
    component: DppfOnlinePensionCaseComponent
  },
  {
    path: 'dppf-online-pension-case-print',
    component: DppfOnlinePensionCasePrintComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DppfRoutingModule { }
