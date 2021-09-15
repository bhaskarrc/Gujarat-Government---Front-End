import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { GenerateDataFilesComponent } from './generate-data-files/generate-data-files.component';
import { GenerateLopTextFileComponent } from './generate-lop-text-file/generate-lop-text-file.component';
import { SubmitAccountsToAgOfficeComponent } from './submit-accounts-to-ag-office/submit-accounts-to-ag-office.component';

const routes: Routes = [
    {
        path: 'generate-data-file',
        component: GenerateDataFilesComponent
    },
    {
        path: 'generate-lop-text-file',
        component: GenerateLopTextFileComponent
    },
    {
        path: 'submit-accounts-to-ag-office',
        component: SubmitAccountsToAgOfficeComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AgOfficeRoutingModule { }
