import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MaterialModule } from '../material-module';
import { CommonProtoModule } from './../common/common.module';
import { AdhocMasterComponent } from './adhoc-master/adhoc-master.component';
import { AdhocSubscriptionComponent } from './adhoc-subscription/adhoc-subscription.component';
import { BudgetHeadMappingTwoComponent } from './budget-head-mapping-two/budget-head-mapping-two.component';
import { BudgetHeadMappingComponent } from './budget-head-mapping/budget-head-mapping.component';
import { EmployeeLeaveDetailComponent } from './employee-leave-detail/employee-leave-detail.component';
import { EmployeeLoanDetailsComponent } from './employee-loan-details/employee-loan-details.component';
import { EmployeeQuarterAllocationComponent } from './employee-quarter-allocation/employee-quarter-allocation.component';
import { EmployeeSubscriptionComponent } from './employee-subscription/employee-subscription.component';
import { EmployeesPayConfigurationComponent } from './employees-pay-configuration/employees-pay-configuration.component';
import { ItDeclationPayrollComponent } from './it-declation-payroll/it-declation-payroll.component';
import { LoanMigrationComponent } from './loan-migration/loan-migration.component';
import { PayHeadLocationMappingComponent } from './pay-head-location-mapping/pay-head-location-mapping.component';
import { ClassWiseRegularSalaryViewComponent } from './pay-period/class-wise-regular-salary-view/class-wise-regular-salary-view.component';
import {
  IndividualEmployeeSalaryProcessingComponent
} from './pay-period/individual-employee-salary-processing/individual-employee-salary-processing.component';
import { PayPeriodComponent } from './pay-period/pay-period.component';
import { IndividualEmployeeSearchDialog, PayrollProcessComponent } from './pay-period/payroll-process/payroll-process.component';
import { RegularEmployeeDetailsComponent } from './pay-period/regular-employee-details/regular-employee-details.component';
import { payrollRoutingModule } from './payroll-routing.module';
import { SalaryAdjustmentComponent } from './salary-adjustment/salary-adjustment.component';
import { FinalizeProcessComponent } from './salary-finalization/finalize-process/finalize-process.component';
import { TaskListComponent } from './salary-finalization/task-list/task-list.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { SocietyMasterComponent } from './society-master/society-master.component';
import { SocietyRecoveryComponent } from './society-recovery/society-recovery.component';
import { SubmitDialogComponent } from './submit-dialog/submit-dialog.component';

@NgModule({
  imports: [
    payrollRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    NgxMatSelectSearchModule,
    CommonModule,
    FormsModule,
    CommonProtoModule,
  ],
  declarations: [
    EmployeeLoanDetailsComponent,
    EmployeesPayConfigurationComponent,
    EmployeeQuarterAllocationComponent,
    EmployeeLeaveDetailComponent,
    PayPeriodComponent,
    RegularEmployeeDetailsComponent,
    PayrollProcessComponent,
    ClassWiseRegularSalaryViewComponent,
    IndividualEmployeeSalaryProcessingComponent,
    PayHeadLocationMappingComponent,
    EmployeeSubscriptionComponent,
    SocietyMasterComponent,
    AdhocMasterComponent,
    TaskListComponent,
    FinalizeProcessComponent,
    IndividualEmployeeSearchDialog,
    SearchEmployeeComponent,
    SubmitDialogComponent,
    SocietyRecoveryComponent,
    AdhocSubscriptionComponent,
    SalaryAdjustmentComponent,
    LoanMigrationComponent,
    BudgetHeadMappingComponent,
    ItDeclationPayrollComponent,
    BudgetHeadMappingTwoComponent,
  ],
  entryComponents: [
    IndividualEmployeeSearchDialog,
    SearchEmployeeComponent,
    SubmitDialogComponent
  ]
})
export class PayrollModule { }
