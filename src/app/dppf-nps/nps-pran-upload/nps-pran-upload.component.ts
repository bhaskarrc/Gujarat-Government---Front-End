import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { WorkflowDetailsDppfNpsComponent } from '../workflow-details-dppf-nps/workflow-details-dppf-nps.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nps-pran-upload',
  templateUrl: './nps-pran-upload.component.html',
  styleUrls: ['./nps-pran-upload.component.css']
})
export class NpsPranUploadComponent implements OnInit {
  // List
  attachmentTypeCode: any[] = [
    { value: '01', viewValue: 'Supporting Document' },
    { value: '02', viewValue: 'Sanction Order' },
    { value: '03', viewValue: 'Others' }
  ];
  // Date
  todayDate = new Date();
  // FormGroup
  pranMappingForm: FormGroup;
  // FormControl
  attachmentTypeCodeCtrl: FormControl = new FormControl();
  // constructor
  constructor(private fb: FormBuilder, private el: ElementRef, private dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.pranMappingFormData();
  }
  // Pran Mapping Function
  pranMappingFormData() {
    this.pranMappingForm = this.fb.group({

    });
  }
  // Reset Form Function
  resetForm() {
    this.pranMappingForm.reset();
  }

  workflowDetails(): void {
    const dialogRef = this.dialog.open(WorkflowDetailsDppfNpsComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  goToListing() {
    this.router.navigate(['/dppf-nps/nps-pran-mapping']);
  }

}
