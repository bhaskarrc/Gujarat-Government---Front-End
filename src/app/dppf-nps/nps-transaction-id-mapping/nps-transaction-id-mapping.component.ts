import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { WorkflowDetailsDppfNpsComponent } from '../workflow-details-dppf-nps/workflow-details-dppf-nps.component';
import { TransactionIdMapping } from 'src/app/model/dppf-nps';

@Component({
  selector: 'app-nps-transaction-id-mapping',
  templateUrl: './nps-transaction-id-mapping.component.html',
  styleUrls: ['./nps-transaction-id-mapping.component.css']
})
export class NpsTransactionIdMappingComponent implements OnInit {
  // List
  transactionIDMappingData: TransactionIdMapping[] = [
    { transactionId: '', batchId: '' }
  ];

  transactionIDMappingDataColumn: string[] = [
    'srno', 'transactionId', 'batchId', 'action'
  ];
  // Date
  todayDate = new Date();
  // FormGroup
  transactionIDMappingForm: FormGroup;
  // Table Source
  transactionIDMappingDataSource = new MatTableDataSource<TransactionIdMapping>(this.transactionIDMappingData);
  // constructor
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
  // Open Annexture 
  openAnnexure() {

  }
  // Work Flow Dialog
  workflowDetails(): void {
    const dialogRef = this.dialog.open(WorkflowDetailsDppfNpsComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  // Print Annexure Function
  printAnnexure() {

  }
  // Search Function
  search() { }

}
