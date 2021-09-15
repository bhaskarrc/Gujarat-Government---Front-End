import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateDataFilesComponent } from './generate-data-files/generate-data-files.component';
import { CommonProtoModule } from '../common/common.module';
import { MaterialModule } from '../material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { AgOfficeRoutingModule } from './ag-office-routing.module';
import { GenerateLopTextFileComponent } from './generate-lop-text-file/generate-lop-text-file.component';
import { SubmitAccountsToAgOfficeComponent } from './submit-accounts-to-ag-office/submit-accounts-to-ag-office.component';

@NgModule({
  imports: [
    CommonModule,
    CommonProtoModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMatSelectSearchModule,
    AgOfficeRoutingModule

  ],
  declarations: [GenerateDataFilesComponent, GenerateLopTextFileComponent, SubmitAccountsToAgOfficeComponent]
})
export class AgOfficeModule { }
