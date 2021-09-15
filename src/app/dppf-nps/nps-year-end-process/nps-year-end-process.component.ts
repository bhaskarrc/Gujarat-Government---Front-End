import { CommonListing } from 'src/app/model/common-listing';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { WorkflowDetailsDppfNpsComponent } from '../workflow-details-dppf-nps/workflow-details-dppf-nps.component';
import { GoDialogNpsComponent } from './go-dialog-nps/go-dialog-nps.component';
import { YearEndProcess } from 'src/app/model/dppf-nps';

@Component({
  selector: 'app-nps-year-end-process',
  templateUrl: './nps-year-end-process.component.html',
  styleUrls: ['./nps-year-end-process.component.css']
})
export class NpsYearEndProcessComponent implements OnInit {
  // Variable
  passwordInfo = false;
  editable = true;
  // List
  district_list: CommonListing[] = [
    { value: '1', viewValue: 'Ahmedabad' },
    { value: '2', viewValue: 'Gandhinagar' },
    { value: '3', viewValue: 'Vadodara' },
    { value: '4', viewValue: 'Surat' },
    { value: '5', viewValue: 'Rajkot' },
    { value: '6', viewValue: 'Anand' },
    { value: '7', viewValue: 'Bharuch' },
    { value: '8', viewValue: 'Valsad' },
    { value: '9', viewValue: 'Navsari' },
    { value: '10', viewValue: 'Dang' },
  ];

  yearEndData: YearEndProcess[] = [
    { ppanNo: '', year: '' }
  ];

  yearEndDataColumn: string[] = [
    'srno', 'ppanNo', 'year', 'action'
  ];
  // Date
  todayDate = new Date();
  // Form Group
  yearEndProcessForm: FormGroup;
  // Form Control
  districtCTRL: FormControl = new FormControl();
  // Table Source
  yearEndDataSource = new MatTableDataSource<YearEndProcess>(this.yearEndData);
  // constructor
  constructor(private fb: FormBuilder, private dialog: MatDialog) { }

  ngOnInit() {
    this.yearEndProcessFormData();
  }

  yearEndProcessFormData() {
    this.yearEndProcessForm = this.fb.group({
      district: ['']
    });
  }

  openAnnexure() {
    // this.route.navigate(['/dppf-nps/annexure-one']);
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

  printDetails() {
    // this.route.navigate(['/dppf-nps/print-annexure-one']);
  }

  search() {

  }
  // Go Dialog Nps
  goTopage() {
    const dialogRef = this.dialog.open(GoDialogNpsComponent, {
      width: '450px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      this.passwordInfo = true;
      this.editable = false;
    });
  }
}
