import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { WorkflowDetailsDppfNpsComponent } from '../workflow-details-dppf-nps/workflow-details-dppf-nps.component';
import { TransactionIDMapping } from './../../model/dppf-nps';

@Component({
  selector: 'app-new-legacy-upload-trancation',
  templateUrl: './new-legacy-upload-trancation.component.html',
  styleUrls: ['./new-legacy-upload-trancation.component.css']
})
export class NewLegacyUploadTrancationComponent implements OnInit {
  // Lists
  transactionIDMappingData: TransactionIDMapping[] = [
    { transactionId: '89418641685', batchId: '75748647' },
    { transactionId: '45465465534', batchId: '54634659' },
    { transactionId: '46654564564', batchId: '45454545' },
    { transactionId: '81453213213', batchId: '98595645' },
    { transactionId: '15454564564', batchId: '65654565' },
  ];
  // Table SOurce
  transactionIDMappingDataColumn: string[] = [
    'srno', 'transactionId', 'batchId', 'action'
  ];
  //Date
  todayDate = new Date();
  // Form Group
  transactionIDMappingForm: FormGroup;
  transactionIDMappingDataSource = new MatTableDataSource<TransactionIDMapping>(this.transactionIDMappingData);
  directiveObj = new CommonDirective();
  constructor(private fb: FormBuilder, private dialog: MatDialog) { }

  ngOnInit() {
    this.transactionIDMappingFormData();
  }

  transactionIDMappingFormData() {
    this.transactionIDMappingForm = this.fb.group({
      batchId: [''],
      transactionId: ['']
    });
  }

  // Open workFLow dialog
  workflowDetails(): void {
    const dialogRef = this.dialog.open(WorkflowDetailsDppfNpsComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }

  search() { }

}
