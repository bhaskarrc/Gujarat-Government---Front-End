import { ChequeforCorrectionListComponent } from './chequefor-correction-list/chequefor-correction-list.component';
import { ChequeforCorrectionComponent } from './chequefor-correction/chequefor-correction.component';

import { EmployeeListComponent } from './gtr-forms/employee-list/employee-list.component';
import { CreateEmployeeComponent } from './gtr-forms/create-employee/create-employee.component';
import { VendorListComponent } from './gtr-forms/vendor-list/vendor-list.component';
import { CreateVendorComponent } from './gtr-forms/create-vendor/create-vendor.component';
import { GtrSeventySevenComponent } from './gtr-forms/gtr-seventy-seven/gtr-seventy-seven.component';
import { ReportGtrSixtyThreeComponent } from './gtr-reports/report-gtr-sixty-three/report-gtr-sixty-three.component';
import { ReportGtrEightyFiveComponent } from './gtr-reports/report-gtr-eighty-five/report-gtr-eighty-five.component';
import { FORMGTRComponent } from './report-gtr-fourty-eight/form-gtr.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillPreparationFormComponent } from './bill-preparation-form/bill-preparation-form.component';
import { CreatNewBillComponent } from './creat-new-bill/creat-new-bill.component';
import { ChequeListComponent } from './cheque-list/cheque-list.component';
import { ReportGtrSeventyFiveComponent } from './gtr-reports/report-gtr-seventy-five/report-gtr-seventy-five.component';
import { ReportGtrSeventySixComponent } from './gtr-reports/report-gtr-seventy-six/report-gtr-seventy-six.component';
import { ReportGtrSeventySevenComponent } from './gtr-reports/report-gtr-seventy-seven/report-gtr-seventy-seven.component';
import { ReportGtrSixtyTwoAComponent } from './gtr-reports/report-gtr-sixty-two-a/report-gtr-sixty-two-a.component';
import { ReportGtrSixtyTwoBComponent } from './gtr-reports/report-gtr-sixty-two-b/report-gtr-sixty-two-b.component';
import { ReportGtrSixtyTwoCComponent } from './gtr-reports/report-gtr-sixty-two-c/report-gtr-sixty-two-c.component';
import { GtrFortyEightListComponent } from './gtr-forty-eight-list/gtr-forty-eight-list.component';
import { GtrSeventyfiveComponent } from './gtr-forms/gtr-seventyfive/gtr-seventyfive.component';
import { GtrSeventySixComponent } from './gtr-forms/gtr-seventysix/gtr-seventysix.component';
import { ReportGtrFourtyFourComponent } from './gtr-reports/report-gtr-fourty-four/report-gtr-fourty-four.component';
import { GtrFourtyEightComponent } from './gtr-forms/gtr-fourty-eight/gtr-fourty-eight.component';
import { SixtytwoAComponent } from './gtr-forms/gtr-sixtytwo-a/sixtytwo-a.component';
import { GtrSixtytwoBComponent } from './gtr-forms/gtr-sixtytwo-b/gtr-sixtytwo-b.component';
import { GtrSixtytwoCComponent } from './gtr-forms/gtr-sixtytwo-c/gtr-sixtytwo-c.component';
import { GtrFortyfiveComponent } from './gtr-forms/gtr-fortyfive/gtr-fortyfive.component';
import { SrOnlinebillComponent } from './gtr-forms/sr-onlinebill/sr-onlinebill.component';
import { GtrFourtyFourComponent } from './gtr-forms/gtr-fourty-four/gtr-fourty-four.component';
import { ReportGtrEightyOneComponent } from './gtr-reports/report-gtr-eighty-one/report-gtr-eighty-one.component';
import { ReportGtrThirtyFiveComponent } from './gtr-reports/report-gtr-thirty-five/report-gtr-thirty-five.component';
import { GtrSeventyEightComponent } from './gtr-forms/gtr-seventy-eight/gtr-seventy-eight.component';
import { GtrSeventyNineComponent } from './gtr-forms/gtr-seventy-nine/gtr-seventy-nine.component';
import { ReportGtrSeventyNineComponent } from './gtr-reports/report-gtr-seventy-nine/report-gtr-seventy-nine.component';
import { ReportGtrTwentyNineComponent } from './gtr-reports/report-gtr-twenty-nine/report-gtr-twenty-nine.component';
import { ReportGtrThirtyComponent } from './gtr-reports/report-gtr-thirty/report-gtr-thirty.component';
import { ReportGtrSeventyEightComponent } from './gtr-reports/report-gtr-seventy-eight/report-gtr-seventy-eight.component';
import { ReportGtrFourtySixComponent } from './gtr-reports/report-gtr-fourty-six/report-gtr-fourty-six.component';
import { ReportGtrFourtyFiveComponent } from './gtr-reports/report-gtr-fourty-five/report-gtr-fourty-five.component';
import { GtrCourtFeeRefundComponent } from './gtr-forms/gtr-court-fee-refund/gtr-court-fee-refund.component';
import { ReportGtrSrComponent } from './gtr-reports/report-gtr-sr/report-gtr-sr.component';
import { GtrSixtythreeComponent } from './gtr-forms/gtr-sixtythree/gtr-sixtythree.component';
import { GtrTweintynineComponent } from './gtr-forms/gtr-tweintynine/gtr-tweintynine.component';
import { SixtyoneComponent } from './gtr-forms/gtr-sixtyone/sixtyone.component';
import { GtrThirtyfiveComponent } from './gtr-forms/gtr-thirtyfive-ltc/gtr-thirtyfive.component';
import { GtrEightyOneComponent } from './gtr-forms/gtr-eighty-one/gtr-eighty-one.component';
import { GtrThirtyfiveNormalComponent } from './gtr-forms/gtr-thirtyfive-normal/gtr-thirtyfive-normal.component';
import { ReportGtrEightyThreeComponent } from './gtr-reports/report-gtr-eighty-three/report-gtr-eighty-three.component';
import { GtrEightythreeComponent } from './gtr-forms/gtr-eightythree/gtr-eightythree.component';
import { ReportGtrCfrComponent } from './gtr-reports/report-gtr-cfr/report-gtr-cfr.component';
import { GtrThirtyComponent } from './gtr-forms/gtr-thirty/gtr-thirty.component';
import { SavedBillComponent } from './gtr-forms/saved-bill/saved-bill.component';
import { HbaMcaComponent } from './gtr-forms/eighty-five/hba-mca/hba-mca.component';
import { OthersComponent } from './gtr-forms/eighty-five/others/others.component';
import { ReportGtrSixtyOneComponent } from './gtr-reports/report-gtr-sixty-one/report-gtr-sixty-one.component';
import { SavedBillListComponent } from './gtr-forms/saved-bill-list/saved-bill-list.component';
import {
  CidFormAttachementSeventyFiveComponent
} from './gtr-reports/report-gtr-seventy-five/cid-form-attachement-seventy-five/cid-form-attachement-seventy-five.component';
import {
  CidFormAttachementSeventySixComponent
} from './gtr-reports/report-gtr-seventy-six/cid-form-attachement-seventy-six/cid-form-attachement-seventy-six.component';
import {
  CidFormAttachementSeventyEightComponent
} from './gtr-reports/report-gtr-seventy-eight/cid-form-attachement-seventy-eight/cid-form-attachement-seventy-eight.component';
import {
  CidFormAttachementSeventyNineComponent
} from './gtr-reports/report-gtr-seventy-nine/cid-form-attachement-seventy-nine/cid-form-attachement-seventy-nine.component';
import { ReportGtrSrOfficeOrderComponent } from './gtr-reports/report-gtr-sr-office-order/report-gtr-sr-office-order.component';
import { GtrThirtyfiveTabillFixpayComponent } from './gtr-forms/gtr-thirtyfive-tabill-fixpay/gtr-thirtyfive-tabill-fixpay.component';
import { GtrThirtyfiveBillouterComponent } from './gtr-forms/gtr-thirtyfive-billouter/gtr-thirtyfive-billouter.component';
import { BillsReturnedByVerifierComponent } from './gtr-forms/bills-returned-by-verifier/bills-returned-by-verifier.component';
import { BillReturnedByDdoApproverComponent } from './gtr-forms/bill-returned-by-ddo-approver/bill-returned-by-ddo-approver.component';
import { SentToPaoBillsComponent } from './gtr-forms/sent-to-pao-bills/sent-to-pao-bills.component';
import { PulledBackBillsComponent } from './gtr-forms/pulled-back-bills/pulled-back-bills.component';
import { BillsForApprovalComponent } from './gtr-forms/bills-for-approval/bills-for-approval.component';
import {
  ReinitiateUnsuccessfulTransactionComponent
} from './gtr-forms/reinitiate-unsuccessful-transaction/reinitiate-unsuccessful-transaction.component';
import { GtrSixtyThreeBillsComponent } from './gtr-forms/gtr-sixty-three-bills/gtr-sixty-three-bills.component';
import { HrmsBillsComponent } from './gtr-forms/hrms-bills/hrms-bills.component';
import { IncomeTaxBillComponent } from './gtr-reports/report-gtr-fourty-four/income-tax-bill/income-tax-bill.component';
import { SavedBillFourtySixComponent } from './saved-bill-fourty-six/saved-bill-fourty-six.component';
import { GtrFourtySixComponent } from './gtr-forms/gtr-fourty-six/gtr-fourty-six.component';
import { CfrAttachmentComponent } from './gtr-reports/report-gtr-cfr/cfr-attachment/cfr-attachment.component';
import {
  GtrFormSixtyOneAttachmentComponent
} from './gtr-reports/report-gtr-sixty-one/gtr-form-sixty-one-attachment/gtr-form-sixty-one-attachment.component';
import { BillTypeWiseStructureComponent } from './gtr-forms/bill-type-wise-structure/bill-type-wise-structure.component';
import { RejectedByToComponent } from './gtr-forms/rejected-by-to/rejected-by-to.component';
import { RejectedApprovedBillsByCoComponent } from './gtr-forms/rejected-approved-bills-by-co/rejected-approved-bills-by-co.component';
import { CreateBillComponent } from './gtr-forms/create-bill/create-bill.component';
import {
  EdpCodeMasterExpenditureRecoveryComponent
} from './edp-code-master-expenditure-recovery/edp-code-master-expenditure-recovery.component';
import { EdpCodeMasterReceiptComponent } from './edp-code-master-receipt/edp-code-master-receipt.component';
import { SearchEdpCodeComponent } from './search-edp-code/search-edp-code.component';
import { ChequeforCorrectionNewComponent } from './chequefor-correction-new/chequefor-correction-new.component';


const routes: Routes = [
  {
    path: 'bill-preparation-form',
    component: BillPreparationFormComponent
  },

  {
    path: 'bill-type-wise-structure',
    component: BillTypeWiseStructureComponent
  },
  {
    path: 'create-new-bill',
    component: CreatNewBillComponent
  },
  {
    path: 'gtr-forty-eight-list',
    component: GtrFortyEightListComponent
  },
  {
    path: 'gtr-75',
    component: GtrSeventyfiveComponent
  },
  {
    path: 'gtr-76',
    component: GtrSeventySixComponent
  },
  {
    path: 'gtr-48',
    component: GtrFourtyEightComponent
  },
  {
    path: 'gtr-62-a',
    component: SixtytwoAComponent
  },

  {
    path: 'gtr-cfr',
    component: GtrCourtFeeRefundComponent
  },
  {
    path: 'gtr-62-b',
    component: GtrSixtytwoBComponent
  },
  {
    path: 'gtr-62-c',
    component: GtrSixtytwoCComponent
  },
  {
    path: 'gtr-45',
    component: GtrFortyfiveComponent
  },
  {
    path: 'sr',
    component: SrOnlinebillComponent
  },
  {

    path: 'gtr-44',
    component: GtrFourtyFourComponent
  },
  {
    path: 'gtr-30',
    component: GtrThirtyComponent
  },
  {
    path: 'gtr-29',
    component: GtrTweintynineComponent
  },
  {
    path: 'report-gtr-48',
    component: FORMGTRComponent
  },
  {
    path: 'gtr-78',
    component: GtrSeventyEightComponent
  },
  {
    path: 'gtr-79',
    component: GtrSeventyNineComponent
  },
  {
    path: 'cheque-list',
    component: ChequeListComponent
  },
  {
    path: 'report-gtr-44',
    component: ReportGtrFourtyFourComponent
  }
  ,
  {
    path: 'report-gtr-45',
    component: ReportGtrFourtyFiveComponent
  }
  ,
  {
    path: 'report-gtr-46',
    component: ReportGtrFourtySixComponent
  },
  {
    path: 'report-gtr-75',
    component: ReportGtrSeventyFiveComponent
  },
  {
    path: 'report-gtr-76',
    component: ReportGtrSeventySixComponent
  },
  {
    path: 'report-gtr-81',
    component: ReportGtrEightyOneComponent
  },
  {
    path: 'report-gtr-79',
    component: ReportGtrSeventyNineComponent
  },
  {
    path: 'report-gtr-78',
    component: ReportGtrSeventyEightComponent
  },
  {
    path: 'report-gtr-77',
    component: ReportGtrSeventySevenComponent
  },
  {
    path: 'report-gtr-62a',
    component: ReportGtrSixtyTwoAComponent
  },
  {
    path: 'report-gtr-62b',
    component: ReportGtrSixtyTwoBComponent
  },
  {
    path: 'report-gtr-62c',
    component: ReportGtrSixtyTwoCComponent
  },
  {
    path: 'report-gtr-35',
    component: ReportGtrThirtyFiveComponent
  },
  {
    path: 'report-gtr-29',
    component: ReportGtrTwentyNineComponent
  },
  {
    path: 'report-gtr-30',
    component: ReportGtrThirtyComponent
  },
  {
    path: 'gtr-63',
    component: GtrSixtythreeComponent
  },
  {
    path: 'report-gtr-85',
    component: ReportGtrEightyFiveComponent
  },
  {
    path: 'report-gtr-cfr',
    component: ReportGtrCfrComponent
  },
  {
    path: 'gtr-61',
    component: SixtyoneComponent
  },
  {
    path: 'gtr-83',
    component: GtrEightythreeComponent
  },
  {
    path: 'report-gtr-83',
    component: ReportGtrEightyThreeComponent
  },
  {
    path: 'report-gtr-sr',
    component: ReportGtrSrComponent
  },
  {
    path: 'report-gtr-63',
    component: ReportGtrSixtyThreeComponent
  },
  {
    path: 'gtr-35-ltc',
    component: GtrThirtyfiveComponent
  },

  {
    path: 'gtr-35-normal',
    component: GtrThirtyfiveNormalComponent
  },

  {
    path: 'gtr-35-tabill-fixpay',
    component: GtrThirtyfiveTabillFixpayComponent
  },

  {
    path: 'gtr-35-tabill-outer',
    component: GtrThirtyfiveBillouterComponent
  },

  {
    path: 'gtr-81',
    component: GtrEightyOneComponent
  },

  {
    path: 'saved-bill',
    component: SavedBillComponent
  },
  {
    path: 'gtr-77',
    component: GtrSeventySevenComponent
  },

  {
    path: 'create-vendor',
    component: CreateVendorComponent
  },
  {
    path: 'create-employee',
    component: CreateEmployeeComponent
  },
  {
    path: 'vendor-list',
    component: VendorListComponent
  },
  {
    path: 'employee-list',
    component: EmployeeListComponent
  },
  {
    path: 'gtr-85',
    component: HbaMcaComponent
  },
  {
    path: 'gtr-85-other',
    component: OthersComponent
  },
  {
    path: 'report-gtr-61',
    component: ReportGtrSixtyOneComponent
  },
  {
    path: 'saved-bill-list',
    component: SavedBillListComponent
  },
  {
    path: 'rejected-approved-by-co',
    component: RejectedApprovedBillsByCoComponent
  },
  {
    path: 'rejected-by-to',
    component: RejectedByToComponent
  },
  {
    path: 'report-gtr-75/cid-form-attachement',
    component: CidFormAttachementSeventyFiveComponent
  },
  {
    path: 'report-gtr-76/cid-form-attachement',
    component: CidFormAttachementSeventySixComponent
  },
  {
    path: 'report-gtr-78/cid-form-attachement',
    component: CidFormAttachementSeventyEightComponent
  },
  {
    path: 'report-gtr-79/cid-form-attachement',
    component: CidFormAttachementSeventyNineComponent
  },

  {
    path: 'gtr-sr-office-order',
    component: ReportGtrSrOfficeOrderComponent
  },
  {
    path: 'bills-returned-by-verifier',
    component: BillsReturnedByVerifierComponent
  },
  {
    path: 'bill-returned-by-ddo-approver',
    component: BillReturnedByDdoApproverComponent
  },
  {
    path: 'sent-to-pao-bills',
    component: SentToPaoBillsComponent
  },
  {
    path: 'pulled-back-bills',
    component: PulledBackBillsComponent
  },
  {
    path: 'bills-for-approval',
    component: BillsForApprovalComponent
  },
  {
    path: 'reinitiate-unsuccessful-transaction',
    component: ReinitiateUnsuccessfulTransactionComponent
  },
  {
    path: 'gtr-63-bills',
    component: GtrSixtyThreeBillsComponent
  },
  {
    path: 'hrms-bills',
    component: HrmsBillsComponent
  },
  {
    path: 'report-gtr-44/income-tax-bill',
    component: IncomeTaxBillComponent
  },
  {
    path: 'saved-bill-46',
    component: SavedBillFourtySixComponent
  },
  {
    path: 'gtr-46',
    component: GtrFourtySixComponent
  },
  {
    path: 'report-gtr-cfr/cfr-attachment',
    component: CfrAttachmentComponent
  },
  {
    path: 'report-gtr-61/gtr-form-sixty-one-attachment',
    component: GtrFormSixtyOneAttachmentComponent
  },
  {
    path: 'create-bill',
    component: CreateBillComponent
  },
  {
    path: 'edp-code-master-expenditure-recovery',
    component: EdpCodeMasterExpenditureRecoveryComponent
  },
  {
    path: 'edp-code-master-receipt',
    component: EdpCodeMasterReceiptComponent
  },
  {
    path: 'search-edp-code',
    component: SearchEdpCodeComponent
  },
  {
    path: 'cheque-for-correction',
    component: ChequeforCorrectionComponent
  },
  {
    path: 'chequefor-correction-list',
    component: ChequeforCorrectionListComponent
  },
  {
    path: 'chequefor-correction-new',
    component: ChequeforCorrectionNewComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DdoRoutingModule { }
