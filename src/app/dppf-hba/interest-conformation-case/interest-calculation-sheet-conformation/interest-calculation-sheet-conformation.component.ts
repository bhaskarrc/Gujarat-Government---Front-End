import { CommonListing } from 'src/app/model/common-listing';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { dppfHbaMessage } from 'src/app/common/error-message/common-message.constants';
import { WorkflowDppfHbaComponent } from '../../workflow-dppf-hba/workflow-dppf-hba.component';
@Component({
  selector: 'app-interest-calculation-sheet-conformation',
  templateUrl: './interest-calculation-sheet-conformation.component.html',
  styleUrls: ['./interest-calculation-sheet-conformation.component.css']
})
export class InterestCalculationSheetConformationComponent implements OnInit {
  // DAte
  todayDate = Date.now();
  maxDate = new Date();
  // Form Group
  interestConformationForm: FormGroup;
  // Variable
  errorMessage;
  // Form Control
  employeClassCtrl: FormControl = new FormControl();
  designationCtrl: FormControl = new FormControl();
  loanFornCtrl: FormControl = new FormControl();
  districtCtrl: FormControl = new FormControl();
  // Lists
  designation_List: CommonListing[] = [
    { value: '1', viewValue: 'Under Secretary,URBAN DEVLOPMENT $$ URBAN HOUSING DEPARTMENT, GANDHINAGAR, Gandhinagar ' },
  ];
  emplyeClass_List: CommonListing[] = [
    { value: '1', viewValue: 'Class 1 ' },
    { value: '2', viewValue: 'Class 1 ' },
    { value: '3 ', viewValue: 'Class 3' },
  ];
  load_list: CommonListing[] = [
    { value: '1', viewValue: 'HBA' },
    { value: '2', viewValue: 'MCA' },
  ];
  districtList: CommonListing[] = [
    { value: '1', viewValue: 'District Treasury Office,Gandhinagar' },
    { value: '2', viewValue: 'District Treasury Office,Ahmedabad' },
    { value: '3', viewValue: 'District Treasury Office,Rajkot' },
  ];
  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder) { }
  ngOnInit() {
    this.interestConformationFormData();
    this.errorMessage = dppfHbaMessage;
  }
  interestConformationFormData() {
    this.interestConformationForm = this.fb.group({
      employeId: [''],
      name: [''],
      loanAmount: [''],
      officeName: [''],
      hbaNo: [''],
      firstEMI: [''],
      lastEMI: [''],
      emiNo: [''],
      reduceloanAmount: [''],
      insaurncereduceloanAmount: [''],
      emiType: [''],
      status: [''],
      interest: [''],
      recoverdDate: [''],
      penalty: [''],
      additional: [''],
      totalInterest: ['']

    });
  }
  // Work Flow Popup
  commentGrantDetails(): void {
    const dialogRef = this.dialog.open(WorkflowDppfHbaComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

