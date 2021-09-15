import { BudgetHeadMappingTwoComponent } from './budget-head-mapping-two/budget-head-mapping-two.component';
import { AdhocSubscriptionComponent } from './adhoc-subscription/adhoc-subscription.component';
import { SocietyRecoveryComponent } from './society-recovery/society-recovery.component';
// tslint:disable-next-line: max-line-length
import { IndividualEmployeeSalaryProcessingComponent } from './pay-period/individual-employee-salary-processing/individual-employee-salary-processing.component';
import { ClassWiseRegularSalaryViewComponent } from './pay-period/class-wise-regular-salary-view/class-wise-regular-salary-view.component';
import { PayrollProcessComponent } from './pay-period/payroll-process/payroll-process.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeLoanDetailsComponent } from './employee-loan-details/employee-loan-details.component';
import { EmployeesPayConfigurationComponent } from './employees-pay-configuration/employees-pay-configuration.component';
import { EmployeeQuarterAllocationComponent } from './employee-quarter-allocation/employee-quarter-allocation.component';
import { EmployeeLeaveDetailComponent } from './employee-leave-detail/employee-leave-detail.component';
import { PayPeriodComponent } from './pay-period/pay-period.component';
import { RegularEmployeeDetailsComponent } from './pay-period/regular-employee-details/regular-employee-details.component';
import { PayHeadLocationMappingComponent } from './pay-head-location-mapping/pay-head-location-mapping.component';
import { EmployeeSubscriptionComponent } from './employee-subscription/employee-subscription.component';
import { SocietyMasterComponent } from './society-master/society-master.component';
import { AdhocMasterComponent } from './adhoc-master/adhoc-master.component';
import { TaskListComponent } from './salary-finalization/task-list/task-list.component';
import { FinalizeProcessComponent } from './salary-finalization/finalize-process/finalize-process.component';
import { SalaryAdjustmentComponent } from './salary-adjustment/salary-adjustment.component';
import { LoanMigrationComponent } from './loan-migration/loan-migration.component';
import { BudgetHeadMappingComponent } from './budget-head-mapping/budget-head-mapping.component';
import { ItDeclationPayrollComponent } from './it-declation-payroll/it-declation-payroll.component';

export const payrollRoute: Routes = [
  {
    path: 'employee-loan-details',
    component: EmployeeLoanDetailsComponent
  },
  {
    path: 'employee-pay-configuration',
    component: EmployeesPayConfigurationComponent,
  },
  {
    path: 'employee-quarter-allocation',
    component: EmployeeQuarterAllocationComponent
  },
  {
    path: 'employee-leave-detail',
    component: EmployeeLeaveDetailComponent
  },
  {
    path: 'pay-period',
    component: PayPeriodComponent
  },
  {
    path: 'regular-employee-details',
    component: RegularEmployeeDetailsComponent
  },
  {
    path: 'payroll-process',
    component: PayrollProcessComponent
  },
  {
    path: 'class-wise-regular-salary-view',
    component: ClassWiseRegularSalaryViewComponent
  },
  {
    path: 'individual-employee-salary-processing',
    component: IndividualEmployeeSalaryProcessingComponent
  },
  {
    path: 'pay-head-location-mapping',
    component: PayHeadLocationMappingComponent
  },
  {
    path: 'employee-subscription',
    component: EmployeeSubscriptionComponent
  },
  {
    path: 'salary-adjustment',
    component: SalaryAdjustmentComponent
  },
  {
    path: 'loan-migration',
    component: LoanMigrationComponent
  },
  {
    path: 'it-declaration',
    component: ItDeclationPayrollComponent
  },
  {
    path: 'society-master',
    component: SocietyMasterComponent
  },
  {
    path: 'adhoc-master',
    component: AdhocMasterComponent
  },
  {
    path: 'task-list',
    component: TaskListComponent
  },
  {
    path: 'finalize-process',
    component: FinalizeProcessComponent
  },
  {
    path: 'society-recovery',
    component: SocietyRecoveryComponent
  },
  {
    path: 'adhoc-subscription',
    component: AdhocSubscriptionComponent
  },
  {
    path: 'budget-head-mapping',
    component: BudgetHeadMappingComponent
  },
  {
    path: 'budget-head-mapping-two',
    component: BudgetHeadMappingTwoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(payrollRoute)],
  exports: [RouterModule],
  declarations: []
})
// tslint:disable-next-line: class-name
export class payrollRoutingModule {
}
