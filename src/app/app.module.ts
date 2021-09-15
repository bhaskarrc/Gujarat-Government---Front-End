
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material-module';
import { CommonModule, DecimalPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaskModule } from 'ngx-mask';
import { ToastrModule } from 'ngx-toastr';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { BudgetBookPrintingComponent } from './budget-book-printing/budget-book-printing.component';
import { CommonProtoModule } from './common/common.module';
import { MAT_DATE_LOCALE } from '@angular/material';
import { DatePipe } from '@angular/common';
import { WorkflowReAssignmentComponent } from './workflow-re-assignment/workflow-re-assignment.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BudgetBookPrintingComponent,
    WorkflowReAssignmentComponent,
  ],

  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
    ToastrModule.forRoot(),
    NgxMatSelectSearchModule,
    CommonProtoModule,
  ],

  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB', }, DatePipe, DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
