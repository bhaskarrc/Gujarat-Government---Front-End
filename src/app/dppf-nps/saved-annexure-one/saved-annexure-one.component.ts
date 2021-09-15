import { CommonListing } from 'src/app/model/common-listing';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { SearchEmployeeDppfNpsComponent } from '../search-employee-dppf-nps/search-employee-dppf-nps.component';
import { WorkflowDetailsDppfNpsComponent } from '../workflow-details-dppf-nps/workflow-details-dppf-nps.component';
import { SavedAnnexureOne } from 'src/app/model/dppf-nps';

@Component({
  selector: 'app-saved-annexure-one',
  templateUrl: './saved-annexure-one.component.html',
  styleUrls: ['./saved-annexure-one.component.css']
})
export class SavedAnnexureOneComponent implements OnInit {
  // Table Data
  savedAnnexureData: SavedAnnexureOne[] = [
    {
      payFixationEmployeeId: '7591238641',
      ragNumber: 'RAG/01/2020/000001',
      employeeName: 'Karan Patel',
      designation: 'Officer',
      joiningDate: '16-JUL-1967',
      dateOfRetirement: '15-JAN-2019',
      status: 'Save as Draft'
    }
  ];
  // Table SOurce
  savedAnnexureDataSourceColumn: string[] = [
    'srno', 'payFixationEmployeeId', 'ragNumber', 'employeeName', 'designation', 'joiningDate', 'dateOfRetirement', 'status', 'action'
  ];
  // List
  designationList: CommonListing[] = [
    { value: '1', viewValue: '' },
    { value: '2', viewValue: '' },
  ];

  statusList: CommonListing[] = [
    { value: '1', viewValue: 'Save as Draft' },
    { value: '2', viewValue: 'RAG Generated' },
  ];
  // Date
  todayDate = new Date();
  // Variable
  empdetails = true;
  // Form Group
  savedAnnexureOneForm: FormGroup;
  // Form COntrol
  designationCTRL: FormControl = new FormControl();
  statusCTRL: FormControl = new FormControl();
  // Selection check box
  selection = new SelectionModel<any>(true, []);
  // DAta SOurce
  savedAnnexureDataSource = new MatTableDataSource<SavedAnnexureOne>(this.savedAnnexureData);
  // COnstructor
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
      ragNo: [''],
      designation: [''],
      joiningDate: [''],
      retirementDate: [''],
      status: [''],
    });
  }

  openAnnexure() {
    this.route.navigate(['/dppf-nps/annexure-one']);
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

  printAnnexure() {
    this.route.navigate(['/dppf-nps/print-annexure-one']);
  }

  search() {

  }
  // Search Employee DppfNps
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
