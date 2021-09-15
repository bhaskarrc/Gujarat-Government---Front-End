import { CommonListing } from './../../model/common-listing';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { SearchInwardNoDppfNpsComponent } from '../search-inward-no-dppf-nps/search-inward-no-dppf-nps.component';
import { WorkflowDetailsDppfNpsComponent } from '../workflow-details-dppf-nps/workflow-details-dppf-nps.component';
import { OutwardDetails } from 'src/app/model/dppf-nps';


@Component({
  selector: 'app-nps-outward-details',
  templateUrl: './nps-outward-details.component.html',
  styleUrls: ['./nps-outward-details.component.css']
})
export class NpsOutwardDetailsComponent implements OnInit {
  // List
  typeOnInwardList: CommonListing[] = [
    { value: '1', viewValue: 'Top Schedule' },
    { value: '2', viewValue: 'AGTE Misclassified Entry' },
    { value: '3', viewValue: 'Request for Account Generation' },
    { value: '4', viewValue: 'Other' },
    { value: '5', viewValue: 'Debit/Credit Correction Entry' },
    { value: '6', viewValue: 'AGTE Clearance Entry' },
    { value: '7', viewValue: 'Request for account details Modification' },
    { value: '8', viewValue: 'E-mail' },
    { value: '9', viewValue: 'Final Withdrawal' },
    { value: '10', viewValue: 'Partial Withdrawal' },
    { value: '11', viewValue: 'Miss Match' },
  ];

  departmentList: CommonListing[] = [
    { value: '1', viewValue: 'Agriculture, Famers welfare and Co-operation Department' },
    { value: '2', viewValue: 'Climate Change Department' },
    { value: '3', viewValue: 'Education Department' },
    { value: '4', viewValue: 'Energy & Petrochemicals Department' },
    { value: '5', viewValue: 'Finance Department' },
    { value: '6', viewValue: 'Food, Civil Supplies & Consumer Affairs Department' },
    { value: '7', viewValue: 'Forest & Environment Department' },
    { value: '8', viewValue: 'General Administration Department' },
    { value: '9', viewValue: 'Gujarat Legislature Secretariat Department' },
    { value: '10', viewValue: 'Health & Family Welfare Department' },
  ];
  // Table Source
  outwardDetailData: OutwardDetails[] = [
    { inwardNo: '', inwardType: '', inwardDate: '', department: '', whichBranch: '', branchUser: '', outwardRemark: '' }
  ];

  outwardDataColumn: string[] = [
    'select', 'srno', 'inwardNo', 'inwardType', 'inwardDate', 'department', 'whichBranch', 'branchUser', 'outwardRemark',
  ];
  // Date
  todayDate = new Date();
  // Variable
  inwardDetails = true;
  // Form Gorup
  outwardDetailsForm: FormGroup;
  // Form Control
  typeOfInwardCTRL: FormControl = new FormControl();
  departmentCTRL: FormControl = new FormControl();
  selection = new SelectionModel<any>(true, []);
  // Table Source
  outwardDetailDataSource = new MatTableDataSource<OutwardDetails>(this.outwardDetailData);
  // Directive
  directiveObj = new CommonDirective();
  // Constrcutor
  constructor(private fb: FormBuilder, private route: Router, private dialog: MatDialog) { }

  ngOnInit() {
    this.outwardDetailsFormData();
  }

  outwardDetailsFormData() {
    this.outwardDetailsForm = this.fb.group({
      inwardNo: [''],
      typeOfInward: [''],
      inwardFromDate: [''],
      inwardToDate: [''],
      department: [''],
    });
  }
  // Work Flow
  workflowDetails(): void {
    const dialogRef = this.dialog.open(WorkflowDetailsDppfNpsComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  // Dialog Inward NUmber
  openDialogInwardNumber() {
    const dialogRef = this.dialog.open(SearchInwardNoDppfNpsComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.inwardDetails = true;
        this.outwardDetailsForm.patchValue({
          inwardNo: result[0].inwardNo,
          inwardDate: result[0].inwardDate,
        });
      }
    });
  }

}
