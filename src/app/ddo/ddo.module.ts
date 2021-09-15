import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DdoRoutingModule } from './ddo-routing.module';
import { BillPreparationFormComponent } from './bill-preparation-form/bill-preparation-form.component';
import { CommonProtoModule } from '../common/common.module';
import { MaterialModule } from '../material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { CreatNewBillComponent, CreateBillDialogComponent } from './creat-new-bill/creat-new-bill.component';
import { GtrFortyEightListComponent } from './gtr-forty-eight-list/gtr-forty-eight-list.component';
import { GtrSeventyfiveComponent, GTR75DialogCheckList, GTR75Dialog } from './gtr-forms/gtr-seventyfive/gtr-seventyfive.component';
import { GtrSeventySixComponent, GTR76DialogCheckList, GTR76Dialog } from './gtr-forms/gtr-seventysix/gtr-seventysix.component';
import {
  GtrFourtyEightComponent, GTR48Dialog, GTR48DialogCheckList
} from './gtr-forms/gtr-fourty-eight/gtr-fourty-eight.component';
import { ChequeListComponent } from './cheque-list/cheque-list.component';
import { FORMGTRComponent } from './report-gtr-fourty-eight/form-gtr.component';
import { SixtytwoAComponent } from './gtr-forms/gtr-sixtytwo-a/sixtytwo-a.component';
import { GtrSixtytwoBComponent } from './gtr-forms/gtr-sixtytwo-b/gtr-sixtytwo-b.component';
import { GtrFortyfiveComponent, GTR45Dialog, GTR45DialogCheckList } from './gtr-forms/gtr-fortyfive/gtr-fortyfive.component';
import { GtrSixtytwoCComponent } from './gtr-forms/gtr-sixtytwo-c/gtr-sixtytwo-c.component';
import {
  SrOnlinebillComponent, GrantHeadSRDialogComponent, ChecklistsrleDialogComponent
} from './gtr-forms/sr-onlinebill/sr-onlinebill.component';
import {
  GtrFourtyFourComponent, GTR44DialogCheckList, IncomeTaxDetailsDialog,
  GTR44Dialog, IncomeTaxDetailsCheckListDialog, GTR44EmployeeDialogChecklist,
  IncomeTaxDetailsNoDialogComponent
} from './gtr-forms/gtr-fourty-four/gtr-fourty-four.component';
import { ReportGtrFourtyFourComponent } from './gtr-reports/report-gtr-fourty-four/report-gtr-fourty-four.component';
import { ReportGtrSeventyFiveComponent } from './gtr-reports/report-gtr-seventy-five/report-gtr-seventy-five.component';
import { ReportGtrSeventySixComponent } from './gtr-reports/report-gtr-seventy-six/report-gtr-seventy-six.component';
import { ReportGtrSeventyNineComponent } from './gtr-reports/report-gtr-seventy-nine/report-gtr-seventy-nine.component';
import { ReportGtrTwentyNineComponent } from './gtr-reports/report-gtr-twenty-nine/report-gtr-twenty-nine.component';
import { ReportGtrThirtyComponent } from './gtr-reports/report-gtr-thirty/report-gtr-thirty.component';
import { ReportGtrSeventyEightComponent } from './gtr-reports/report-gtr-seventy-eight/report-gtr-seventy-eight.component';
import { ReportGtrSixtyTwoAComponent } from './gtr-reports/report-gtr-sixty-two-a/report-gtr-sixty-two-a.component';
import { ReportGtrSixtyTwoBComponent } from './gtr-reports/report-gtr-sixty-two-b/report-gtr-sixty-two-b.component';
import { ReportGtrSixtyTwoCComponent } from './gtr-reports/report-gtr-sixty-two-c/report-gtr-sixty-two-c.component';
import { ReportGtrEightyOneComponent } from './gtr-reports/report-gtr-eighty-one/report-gtr-eighty-one.component';
import { ReportGtrThirtyFiveComponent } from './gtr-reports/report-gtr-thirty-five/report-gtr-thirty-five.component';
import { GtrSeventyEightComponent } from './gtr-forms/gtr-seventy-eight/gtr-seventy-eight.component';
import { GtrSeventyNineComponent } from './gtr-forms/gtr-seventy-nine/gtr-seventy-nine.component';
import { ReportGtrFourtySixComponent } from './gtr-reports/report-gtr-fourty-six/report-gtr-fourty-six.component';
import { ReportGtrFourtyFiveComponent } from './gtr-reports/report-gtr-fourty-five/report-gtr-fourty-five.component';
import { ReportGtrEightyThreeComponent } from './gtr-reports/report-gtr-eighty-three/report-gtr-eighty-three.component';
import {
  GtrCourtFeeRefundComponent, CFRDdoHeadDialogComponent, CFRGTR62ADialogCheckListComponent,
} from './gtr-forms/gtr-court-fee-refund/gtr-court-fee-refund.component';
import { ReportGtrSrComponent } from './gtr-reports/report-gtr-sr/report-gtr-sr.component';
import { ReportGtrSeventySevenComponent } from './gtr-reports/report-gtr-seventy-seven/report-gtr-seventy-seven.component';
import { GtrSixtythreeComponent, GTR63Dialog, GTR63DialogCheckList } from './gtr-forms/gtr-sixtythree/gtr-sixtythree.component';
import { GtrTweintynineComponent, GrantHead29Dialog, GTR29DialogCheckList } from './gtr-forms/gtr-tweintynine/gtr-tweintynine.component';
import { ReportGtrEightyFiveComponent } from './gtr-reports/report-gtr-eighty-five/report-gtr-eighty-five.component';
import { ReportGtrSixtyThreeComponent } from './gtr-reports/report-gtr-sixty-three/report-gtr-sixty-three.component';
import { SixtyoneComponent, DdoHeadDialog, GTR61ADialogCheckList } from './gtr-forms/gtr-sixtyone/sixtyone.component';
import {
  GtrThirtyfiveComponent, CalculationDialog
} from './gtr-forms/gtr-thirtyfive-ltc/gtr-thirtyfive.component';
import {
  GtrThirtyfiveNormalComponent, CalculationTADialog, CalculationDADialog, CalculationDATableDialog
} from './gtr-forms/gtr-thirtyfive-normal/gtr-thirtyfive-normal.component';
import {
  GtrEightyOneComponent, GTR81DialogComponent, GTR81DialogCheckListComponent
} from './gtr-forms/gtr-eighty-one/gtr-eighty-one.component';
import { GtrThirtyComponent, GTR30DialogCheckList, GTR30Dialog } from './gtr-forms/gtr-thirty/gtr-thirty.component';
import { SavedBillComponent } from './gtr-forms/saved-bill/saved-bill.component';
import { GtrSeventySevenComponent, GTR77Dialog } from './gtr-forms/gtr-seventy-seven/gtr-seventy-seven.component';
import { CreateVendorComponent } from './gtr-forms/create-vendor/create-vendor.component';
import { VendorListComponent } from './gtr-forms/vendor-list/vendor-list.component';
import {
  GtrEightythreeComponent, GTR83DialogCheckListComponent, GTR83DialogComponent
} from './gtr-forms/gtr-eightythree/gtr-eightythree.component';
import { ReportGtrCfrComponent } from './gtr-reports/report-gtr-cfr/report-gtr-cfr.component';
import { SavedBillListComponent } from './gtr-forms/saved-bill-list/saved-bill-list.component';
import { SearchEmployeeComponent } from './gtr-forms/search-employee/search-employee.component';
import { ReportGtrSrOfficeOrderComponent } from './gtr-reports/report-gtr-sr-office-order/report-gtr-sr-office-order.component';
import { HbaMcaComponent } from './gtr-forms/eighty-five/hba-mca/hba-mca.component';
import { OthersComponent } from './gtr-forms/eighty-five/others/others.component';
import { ReportGtrSixtyOneComponent } from './gtr-reports/report-gtr-sixty-one/report-gtr-sixty-one.component';
import { WorkflowDetailsDdoComponent } from './gtr-forms/workflow-details-ddo/workflow-details-ddo.component';
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
import {
  GtrThirtyfiveTabillFixpayComponent
} from './gtr-forms/gtr-thirtyfive-tabill-fixpay/gtr-thirtyfive-tabill-fixpay.component';
import {
  GtrThirtyfiveBillouterComponent
} from './gtr-forms/gtr-thirtyfive-billouter/gtr-thirtyfive-billouter.component';
import { BillsReturnedByVerifierComponent } from './gtr-forms/bills-returned-by-verifier/bills-returned-by-verifier.component';
import { BillReturnedByDdoApproverComponent } from './gtr-forms/bill-returned-by-ddo-approver/bill-returned-by-ddo-approver.component';
import { SentToPaoBillsComponent } from './gtr-forms/sent-to-pao-bills/sent-to-pao-bills.component';
import { PulledBackBillsComponent } from './gtr-forms/pulled-back-bills/pulled-back-bills.component';
import { BillsForApprovalComponent } from './gtr-forms/bills-for-approval/bills-for-approval.component';
import {
  ReinitiateUnsuccessfulTransactionComponent, ReinitiateUnsuccessfulTransactionDailogComponent
} from './gtr-forms/reinitiate-unsuccessful-transaction/reinitiate-unsuccessful-transaction.component';
import { GtrSixtyThreeBillsComponent } from './gtr-forms/gtr-sixty-three-bills/gtr-sixty-three-bills.component';
import { HrmsBillsComponent } from './gtr-forms/hrms-bills/hrms-bills.component';
import { IncomeTaxBillComponent } from './gtr-reports/report-gtr-fourty-four/income-tax-bill/income-tax-bill.component';
import { CreateEmployeeComponent } from './gtr-forms/create-employee/create-employee.component';
import { EmployeeListComponent } from './gtr-forms/employee-list/employee-list.component';
import { SavedBillFourtySixComponent } from './saved-bill-fourty-six/saved-bill-fourty-six.component';
import { GtrFourtySixComponent, GTR46DialogCheckList, GTR46Dialog } from './gtr-forms/gtr-fourty-six/gtr-fourty-six.component';
import { CfrAttachmentComponent } from './gtr-reports/report-gtr-cfr/cfr-attachment/cfr-attachment.component';
import {
  GtrFormSixtyOneAttachmentComponent
} from './gtr-reports/report-gtr-sixty-one/gtr-form-sixty-one-attachment/gtr-form-sixty-one-attachment.component';
import { BillTypeWiseStructureComponent } from './gtr-forms/bill-type-wise-structure/bill-type-wise-structure.component';
// import { SixtyoneComponent, GrantHeadDialog, GTR62ADialogCheckList } from './gtr-forms/gtr-sixtytwo-a/sixtytwo-a.component';
import { MatRadioModule } from '@angular/material/radio';
import { RejectedByToComponent } from './gtr-forms/rejected-by-to/rejected-by-to.component';
import { RejectedApprovedBillsByCoComponent } from './gtr-forms/rejected-approved-bills-by-co/rejected-approved-bills-by-co.component';
import { CreateBillComponent } from './gtr-forms/create-bill/create-bill.component';
import {
  EdpCodeMasterExpenditureRecoveryComponent
} from './edp-code-master-expenditure-recovery/edp-code-master-expenditure-recovery.component';
import { EdpCodeMasterReceiptComponent } from './edp-code-master-receipt/edp-code-master-receipt.component';
import { SearchEdpCodeComponent } from './search-edp-code/search-edp-code.component';
import { ChequeforCorrectionComponent } from './chequefor-correction/chequefor-correction.component';
import { ChequeforCorrectionListComponent } from './chequefor-correction-list/chequefor-correction-list.component';
import { ChequeforCorrectionNewComponent } from './chequefor-correction-new/chequefor-correction-new.component';
import { CancleChequeNewComponent } from './cancle-cheque-new/cancle-cheque-new.component';
import { ChequeDuplicateDialogNewComponent } from './cheque-duplicate-dialog-new/cheque-duplicate-dialog-new.component';
import { ChequeRenameDialogNewComponent } from './cheque-rename-dialog-new/cheque-rename-dialog-new.component';
import {
  BillPreparationSixtyTwoComponent, DdoGrantHeadComponent, ChequeListTypeDialogComponent
} from './gtr-forms/bill-preparation-sixty-two/bill-preparation-sixty-two.component';
import {
  BillPreparationThirtyFiveComponent, DdoGrantHeadDialogComponent, ChequeListTypeDialogThirtyFiveComponent
} from './gtr-forms/bill-preparation-thirty-five/bill-preparation-thirty-five.component';
import {
  BillPreparationSeventyEightSeventyNineComponent,
  DdoGrantHeadSeventyEightSeventyNineComponent,
  ChequeListTypeSeventyEightSeventyNineComponent
} from './gtr-forms/bill-preparation-seventy-eight-seventy-nine/bill-preparation-seventy-eight-seventy-nine.component';
import {
  BillPreparationEightyFiveEightyFiveOtherComponent, DdoGrantHeadDialogEightyFiveComponent, ChequeListTypeDialogEightyFiveComponent
} from './gtr-forms/bill-preparation-eighty-five-eighty-five-other/bill-preparation-eighty-five-eighty-five-other.component';




@NgModule({
  imports: [
    CommonModule,
    CommonProtoModule,
    MaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMatSelectSearchModule,
    DdoRoutingModule,
    CommonProtoModule,
    MatRadioModule
  ],
  declarations: [
    BillPreparationFormComponent,
    CreatNewBillComponent,
    GTR75DialogCheckList,
    GtrFortyEightListComponent,
    GtrSeventyfiveComponent,
    GtrSeventySixComponent,
    GTR76DialogCheckList,
    GTR48Dialog,
    GtrFourtyEightComponent,
    ChequeListComponent,
    FORMGTRComponent,
    ReportGtrSeventyFiveComponent,
    ReportGtrSeventySixComponent,
    SixtytwoAComponent,
    GtrSixtytwoBComponent,
    GtrSixtytwoCComponent,
    GtrFortyfiveComponent,
    SrOnlinebillComponent,
    GrantHeadSRDialogComponent,
    GtrFourtyFourComponent,
    GTR44DialogCheckList,
    IncomeTaxDetailsDialog,
    GTR44Dialog,
    GTR75Dialog,
    GTR76Dialog,
    GTR45Dialog,
    ChecklistsrleDialogComponent,
    IncomeTaxDetailsCheckListDialog,
    ReportGtrFourtyFourComponent,
    ReportGtrSeventyNineComponent,
    ReportGtrSixtyTwoAComponent,
    ReportGtrSixtyTwoBComponent,
    ReportGtrSixtyTwoCComponent,
    ReportGtrTwentyNineComponent,
    ReportGtrThirtyComponent,
    ReportGtrSeventyEightComponent,
    ReportGtrSixtyTwoAComponent,
    ReportGtrSixtyTwoBComponent,
    ReportGtrSixtyTwoCComponent,
    ReportGtrEightyOneComponent,
    ReportGtrThirtyFiveComponent,
    GtrSeventyEightComponent,
    GtrSeventyNineComponent,
    ReportGtrFourtySixComponent,
    ReportGtrFourtyFiveComponent,
    GTR45DialogCheckList,
    GtrSixtythreeComponent,
    GTR63Dialog,
    GTR63DialogCheckList,
    GtrTweintynineComponent,
    GrantHead29Dialog,
    GTR29DialogCheckList,
    ReportGtrSeventySevenComponent,
    ReportGtrEightyFiveComponent,
    GtrTweintynineComponent,
    ReportGtrSixtyThreeComponent,
    SixtyoneComponent,
    DdoHeadDialog,
    ReportGtrEightyThreeComponent,
    GtrEightythreeComponent, ReportGtrCfrComponent,
    GtrCourtFeeRefundComponent,
    CFRDdoHeadDialogComponent,
    ReportGtrSrComponent,
    GtrThirtyfiveComponent,
    GtrEightyOneComponent,
    GTR81DialogComponent,
    GTR81DialogCheckListComponent,
    CalculationDialog,
    GtrThirtyfiveNormalComponent,
    GtrSeventySevenComponent,
    GTR77Dialog, CreateVendorComponent, VendorListComponent,
    SearchEmployeeComponent,
    GtrThirtyComponent,
    GTR30Dialog,
    GTR30DialogCheckList,
    SavedBillComponent,
    GtrSeventySevenComponent,
    GTR77Dialog, CreateVendorComponent, VendorListComponent, SavedBillListComponent, ReportGtrSrOfficeOrderComponent,
    HbaMcaComponent, OthersComponent,
    ReportGtrSixtyOneComponent,
    SavedBillListComponent,
    WorkflowDetailsDdoComponent,
    CidFormAttachementSeventyFiveComponent,
    CidFormAttachementSeventySixComponent,
    CidFormAttachementSeventyEightComponent,
    CidFormAttachementSeventyNineComponent,
    GtrThirtyfiveTabillFixpayComponent,
    GtrThirtyfiveBillouterComponent,
    BillsReturnedByVerifierComponent,
    BillReturnedByDdoApproverComponent,
    SentToPaoBillsComponent,
    PulledBackBillsComponent,
    BillsForApprovalComponent,
    ReinitiateUnsuccessfulTransactionComponent,
    GtrSixtyThreeBillsComponent,
    HrmsBillsComponent,
    IncomeTaxBillComponent,
    CreateEmployeeComponent,
    EmployeeListComponent,
    SavedBillFourtySixComponent,
    GtrFourtySixComponent,
    GTR46DialogCheckList,
    GTR46Dialog,
    CreateBillDialogComponent,
    CfrAttachmentComponent,
    GtrFormSixtyOneAttachmentComponent,
    GTR61ADialogCheckList,
    BillTypeWiseStructureComponent,
    CalculationTADialog,
    CalculationDADialog,
    CFRGTR62ADialogCheckListComponent,
    GTR83DialogComponent,
    GTR83DialogCheckListComponent,
    GTR61ADialogCheckList,
    CalculationDATableDialog,
    RejectedByToComponent,
    RejectedApprovedBillsByCoComponent,
    ReinitiateUnsuccessfulTransactionDailogComponent,
    CalculationDATableDialog,
    GTR48DialogCheckList,
    CreateBillComponent,
    GTR44EmployeeDialogChecklist,
    EdpCodeMasterExpenditureRecoveryComponent,
    EdpCodeMasterReceiptComponent,
    SearchEdpCodeComponent,
    IncomeTaxDetailsNoDialogComponent,
    ChequeforCorrectionComponent,
    ChequeforCorrectionListComponent,
    ChequeforCorrectionNewComponent,
    CancleChequeNewComponent,
    ChequeDuplicateDialogNewComponent,
    ChequeRenameDialogNewComponent,
    BillPreparationSixtyTwoComponent,
    DdoGrantHeadComponent,
    ChequeListTypeDialogComponent,
    BillPreparationThirtyFiveComponent,
    DdoGrantHeadDialogComponent,
    ChequeListTypeDialogThirtyFiveComponent,
    BillPreparationSeventyEightSeventyNineComponent,
    BillPreparationEightyFiveEightyFiveOtherComponent,
    DdoGrantHeadSeventyEightSeventyNineComponent,
    ChequeListTypeSeventyEightSeventyNineComponent,
    DdoGrantHeadDialogEightyFiveComponent,
    ChequeListTypeDialogEightyFiveComponent

  ],
  entryComponents: [
    GTR75DialogCheckList,
    GTR76DialogCheckList,
    GTR48Dialog,
    GTR45Dialog,
    GrantHeadSRDialogComponent,
    GTR44DialogCheckList,
    IncomeTaxDetailsDialog,
    GTR44Dialog,
    GTR75Dialog,
    GTR76Dialog,
    GTR45DialogCheckList,
    ChecklistsrleDialogComponent,
    GTR63Dialog,
    GTR63DialogCheckList,
    IncomeTaxDetailsCheckListDialog,
    DdoHeadDialog,
    CFRDdoHeadDialogComponent,
    GrantHead29Dialog,
    GTR29DialogCheckList,
    DdoHeadDialog,
    GTR81DialogComponent,
    GTR81DialogCheckListComponent,
    CalculationDialog,
    GTR30Dialog,
    GTR30DialogCheckList,
    GTR77Dialog,
    SearchEmployeeComponent,
    WorkflowDetailsDdoComponent,
    GTR83DialogComponent,
    GTR83DialogCheckListComponent,
    GTR61ADialogCheckList,
    SavedBillFourtySixComponent,
    GtrFourtySixComponent,
    GTR46DialogCheckList,
    GTR46Dialog,
    CreateBillDialogComponent,
    CalculationTADialog,
    CalculationDADialog,
    CFRGTR62ADialogCheckListComponent,
    ReinitiateUnsuccessfulTransactionDailogComponent,
    CalculationDATableDialog,
    GTR48DialogCheckList,
    GTR44EmployeeDialogChecklist,
    IncomeTaxDetailsNoDialogComponent,
    CancleChequeNewComponent,
    ChequeDuplicateDialogNewComponent,
    ChequeRenameDialogNewComponent,
    DdoGrantHeadComponent,
    ChequeListTypeDialogComponent,
    DdoGrantHeadDialogComponent,
    ChequeListTypeDialogThirtyFiveComponent,
    DdoGrantHeadSeventyEightSeventyNineComponent,
    ChequeListTypeSeventyEightSeventyNineComponent,
    DdoGrantHeadDialogEightyFiveComponent,
    ChequeListTypeDialogEightyFiveComponent
  ],
})
export class DdoModule { }

