import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { CommonListing } from 'src/app/model/common-listing';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { DppfNpsMessage } from 'src/app/common/error-message/common-message.constants';
import { SearchEmployeeDppfNpsComponent } from '../search-employee-dppf-nps/search-employee-dppf-nps.component';
import { WorkflowDetailsDppfNpsComponent } from '../workflow-details-dppf-nps/workflow-details-dppf-nps.component';
import { ForwardedAnnexureOne } from 'src/app/model/dppf-nps';

@Component({
  selector: 'app-forwarded-annexure-one',
  templateUrl: './forwarded-annexure-one.component.html',
  styleUrls: ['./forwarded-annexure-one.component.css']
})
export class ForwardedAnnexureOneComponent implements OnInit {
  // Table Content
  savedAnnexureData: ForwardedAnnexureOne[] = [
    {
      payFixationEmployeeId: '7591238641',
      ragNumber: 'RAG/01/2020/000001',
      ppanNo: '',
      employeeName: 'Karan Patel',
      designation: 'Officer',
      joiningDate: '16-Jul-1967',
      dateOfRetirement: '15-Jan-2019',
      status: 'Save as Draft'
    },
    {
      payFixationEmployeeId: '7591238642',
      ragNumber: 'RAG/01/2020/000002',
      ppanNo: '',
      employeeName: 'Hetal Patel',
      designation: 'Officer',
      joiningDate: '18-Feb-1967',
      dateOfRetirement: '17-Nov-2018',
      status: 'Send Annexure - 1'
    }
  ];

  savedAnnexureDataSourceColumn: any[] = [
    'select',
    'srno',
    'payFixationEmployeeId',
    'ragNumber',
    'ppanNo',
    'employeeName',
    'designation',
    'joiningDate',
    'dateOfRetirement',
    'status',
    'action'
  ];
  // List
  designationList: CommonListing[] = [
    { value: '1', viewValue: '' }
  ];

  statusList: CommonListing[] = [
    { value: '1', viewValue: 'Save as Draft' },
    { value: '2', viewValue: 'Send Annexure - 1' },
  ];
  // Date
  todayDate = new Date();
  // Variable
  empdetails = true;
  // FormGroup;
  savedAnnexureOneForm: FormGroup;
  // FormControl
  designationCTRL: FormControl = new FormControl();
  statusCTRL: FormControl = new FormControl();
  // TableDataSource
  savedAnnexureDataSource = new MatTableDataSource<ForwardedAnnexureOne>(this.savedAnnexureData);
  // Directive
  directiveObj = new CommonDirective(this.route);

  constructor(private fb: FormBuilder, private route: Router, private dialog: MatDialog) { }

  ngOnInit() {
    this.savedAnnexureOneFormData();
  }

  savedAnnexureOneFormData() {
    this.savedAnnexureOneForm = this.fb.group({
      payFixationEmployeeNumber: [''],
      ragNumber: [''],
      ppaNo: [''],
      firstName: [''],
      middleName: [''],
      lastName: [''],
      designation: [''],
      joiningDate: [''],
      retirementDate: [''],
      status: [''],
    });
  }

  // open workFlow dialog
  workflowDetails(): void {
    const dialogRef = this.dialog.open(WorkflowDetailsDppfNpsComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  // open employee number dialog
  openDialogEmployeeNumber() {
    const dialogRef = this.dialog.open(SearchEmployeeDppfNpsComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.empdetails = true;
        this.savedAnnexureOneForm.patchValue({
          payFixationEmployeeNumber: result[0].employeeNumber,
          employeeName: result[0].employeeName,
          designation: result[0].designation,
        });
      }
      console.log('The dialog was closed');
    });
  }

}
