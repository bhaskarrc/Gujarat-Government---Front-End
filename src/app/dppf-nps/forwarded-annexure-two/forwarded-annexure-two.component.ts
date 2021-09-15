import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { CommonListing } from 'src/app/model/common-listing';
import { SearchEmployeeDppfNpsComponent } from '../search-employee-dppf-nps/search-employee-dppf-nps.component';
import { WorkflowDetailsDppfNpsComponent } from '../workflow-details-dppf-nps/workflow-details-dppf-nps.component';
import { ForwardedAnnexureTwo } from './../../model/dppf-nps';

@Component({
  selector: 'app-forwarded-annexure-two',
  templateUrl: './forwarded-annexure-two.component.html',
  styleUrls: ['./forwarded-annexure-two.component.css']
})
export class ForwardedAnnexureTwoComponent implements OnInit {
  // Table COntent
  savedAnnexureData: ForwardedAnnexureTwo[] = [
    {
      payFixationEmployeeId: '7591238641',
      employeeName: 'Karan Patel',
      designation: 'Officer',
      joiningDate: '16-Jul-1967',
      dateOfRetirement: '15-Jan-2019',
      status: 'Inward'
    }
  ];

  savedAnnexureDataSourceColumn: string[] = [
    'select', 'srno', 'payFixationEmployeeId', 'employeeName', 'designation', 'joiningDate', 'dateOfRetirement', 'status', 'action'
  ];

  designationList: CommonListing[] = [
    { value: '1', viewValue: '' }
  ];

  statusList: CommonListing[] = [
    { value: '1', viewValue: 'Inward' },
    { value: '2', viewValue: 'Approve' },
    { value: '3', viewValue: 'Reject' },
    { value: '4', viewValue: 'PPAN Generated' },
  ];
  // DAte
  todayDate = new Date();
  // Variable
  empdetails = true;
  // FormGroup
  savedAnnexureOneForm: FormGroup;
  // FormControl
  designationCTRL: FormControl = new FormControl();
  statusCTRL: FormControl = new FormControl();
  savedAnnexureDataSource = new MatTableDataSource<ForwardedAnnexureTwo>(this.savedAnnexureData);
  // directiveObj
  directiveObj = new CommonDirective(this.route);
  // constructor
  constructor(private fb: FormBuilder, private route: Router, private dialog: MatDialog) { }

  ngOnInit() {
    this.savedAnnexureOneFormData();
  }

  savedAnnexureOneFormData() {
    this.savedAnnexureOneForm = this.fb.group({
      payFixationEmployeeNumber: [''],
      firstName: [''],
      middleName: [''],
      lastName: [''],
      designation: [''],
      joiningDate: [''],
      retirementDate: [''],
      status: [''],
    });
  }

  // Open workFlow dialog
  workflowDetails(): void {
    const dialogRef = this.dialog.open(WorkflowDetailsDppfNpsComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  // Open employee no dialog
  openDialogEmployeeNumber() {
    const dialogRef = this.dialog.open(SearchEmployeeDppfNpsComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.empdetails = true;
        this.savedAnnexureOneForm.patchValue({
          payFixationEmployeeNumber: result[0].employeeNumber,
          employeeName: result[0].employeeName,
          designation: result[0].designation,
        });
      }
    });
  }


}
