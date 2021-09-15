import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetBookPrintingComponent } from './budget-book-printing/budget-book-printing.component';
import { WorkflowReAssignmentComponent } from './workflow-re-assignment/workflow-re-assignment.component';

// tslint:disable-next-line:max-line-length
// tslint:disable-next-line: max-line-length

const appRoutes: Routes = [
    {
        path: 'budget-book-printing',
        component: BudgetBookPrintingComponent
    },
    {
        path: 'budget',
        loadChildren: './budget/budget.module#BudgetModule'
    },
    {
        path: 'pvu',
        loadChildren: './pvu/pvu.module#PVUModule'
    },
    {
        path: 'payroll',
        loadChildren: './payroll/payroll.module#PayrollModule'
    },
    {
        path: 'grant',
        loadChildren: './grant/grant.module#GrantModule'
    },
    {
        path: 'edp',
        loadChildren: './edp/edp.module#EdpModule'
    },

    {
        path: 'contract-management',
        loadChildren: './contract-management/contract-management.module#ContractManagementModule'
    },
    {
        path: 'ddo',
        loadChildren: './ddo/ddo.module#DdoModule'
    },
    {
        path: 'treasury-bill',
        loadChildren: './treasury-bill/treasury-bill.module#TreasuryBillModule'
    },
    {
        path: 'dppf',
        loadChildren: './dppf/dppf.module#DppfModule'
    },
    {
        path: 'pao',
        loadChildren: './pao/pao.module#PaoModule'
    },
    {
        path: 'ppo',
        loadChildren: './ppo/ppo.module#PpoModule'
    },
    {
        path: 'dppfgpf',
        loadChildren: './dppfgpf/dppfgpf.module#DppfgpfModule'
    },
    {
        path: 'emd',
        loadChildren: './emd/emd.module#EmdModule'
    },
    {
        path: 'lc',
        loadChildren: './letter-of-credit/letter-of-credit.module#LetterOfCreditModule'
    },
    {
        path: 'stamp-processing',
        loadChildren: './stamp-processing/stamp-processing.module#StampProcessingModule'
    },

    {
        path: 'pdpla',
        loadChildren: './pdpla/pdpla.module#PdplaModule'
    },

    {
        path: 'receipt-management',
        loadChildren: './receipt-management/receipt-management.module#ReceiptManagementModule'
    },
    {
        path: 'ea',
        loadChildren: './expenditure-accounting/expenditure-accounting.module#ExpenditureAccountingModule'
    },
    {
        path: 'dppf-nps',
        loadChildren: './dppf-nps/dppf-nps.module#DppfNpsModule'
    },
    {
        path: 'ag-office',
        loadChildren: './ag-office/ag-office.module#AgOfficeModule'
    },
    {
        path: 'local-fund',
        loadChildren: './local-fund/local-fund.module#LocalFundModule'
    },
    {
        path: 'dppf-hba',
        loadChildren: './dppf-hba/dppf-hba.module#DppfHbaModule'
    },
    {
        path: 'ci',
        loadChildren: './cheque-inventory/cheque-inventory.module#ChequeInventoryModule'
    },
    {
        path: 'e-pao',
        loadChildren: './e-pao/e-pao.module#EPaoModule'
    },
    {
        path: 'gi',
        loadChildren: './group-insurance/group-insurance.module#GroupInsuranceModule'
    },

    {
        path: 'bpe',
        loadChildren: './bpe/bpe.module#BpeModule'
    }
    ,
    {
        path: 'doi',
        loadChildren: './doi/doi.module#DoiModule'
    }
    ,
    {
        path: 'dmo',
        loadChildren: './dmo/dmo.module#DmoModule'
    },
    { path: 'workflow-re-assignment', component: WorkflowReAssignmentComponent }



];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {
                enableTracing: false, // <-- debugging purposes only
                useHash: true
            }
        )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }
