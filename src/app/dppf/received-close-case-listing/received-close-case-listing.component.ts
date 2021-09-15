import { AuditorInwardDetailsComponent } from './../auditor-inward-details/auditor-inward-details.component';
import { Component, OnInit } from '@angular/core';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';
import { Router } from '@angular/router';
import { WorkflowDetailsDppfComponent } from '../workflow-details-dppf/workflow-details-dppf.component';
import { RecievedOtherStatePensionCase } from 'src/app/model/dppf';


@Component({
  selector: 'app-received-close-case-listing',
  templateUrl: './received-close-case-listing.component.html',
  styleUrls: ['./received-close-case-listing.component.css']
})

export class ReceivedCloseCaseListingComponent implements OnInit {
  // List
  pensionType_list: ListValue[] = [
    { value: '1', viewValue: 'Sup' },
    { value: '2', viewValue: 'Fam' },
  ];

  branchName_list: ListValue[] = [
    { value: '1', viewValue: 'PR-1' },
  ];

  districtName_list: ListValue[] = [
    { value: '1', viewValue: 'Gandhinagar' },
  ];

  inwardType_list: ListValue[] = [
    { value: '1', viewValue: 'PC' },
  ];

  // Element of Table
  recievedOtherStateData: RecievedOtherStatePensionCase[] = [
    {
      inwardNumber: '010608/05/2019',
      inwardDate: '06-Mar-2020',
      inwardType: 'PC',
      employeeId: '',
      ppoNoScNo: '',
      name: 'ABCD',
      retirementDate: '20-Mar-2020',
      pensionType: 'Sup',
      docCount: '1',
      revNo: '0',
      branchName: '',
      status: 'Rejected',
      from: '',
      branchInwardDate: '	4-Aug-2020',
      noting: '',
      remarks: '',
    },
    {
      inwardNumber: '010608/05/2019',
      inwardDate: '05-Feb-2020',
      inwardType: 'PC',
      employeeId: '',
      ppoNoScNo: '',
      name: 'ABCD',
      retirementDate: '20-Mar-2020',
      pensionType: 'Sup',
      docCount: '1',
      revNo: '0',
      branchName: '',
      status: 'Approved',
      from: '',
      branchInwardDate: '	4-Aug-2020',
      noting: '',
      remarks: '',
    },
    {
      inwardNumber: '010507/05/2019',
      inwardDate: '07-Feb-2020',
      inwardType: 'PC',
      employeeId: '',
      ppoNoScNo: '',
      name: 'ABCD',
      retirementDate: '20-Mar-2020',
      pensionType: 'Sup',
      docCount: '1',
      revNo: '0',
      branchName: '',
      status: 'Approved',
      from: '',
      branchInwardDate: '	4-Aug-2020',
      noting: '',
      remarks: '',
    }
  ];
  // Table Source
  columns = [
    'select',
    'serialNo',
    'inwardNumber',
    'inwardDate',
    'inwardType',
    'employeeId',
    'ppoNoScNo',
    'name',
    'retirementDate',
    'pensionType',
    'docCount',
    'revNo',
    'branchName',
    'status',
    'from',
    'branchInwardDate',
    'noting',
    'remarks'
  ];


  dataSource = new MatTableDataSource<RecievedOtherStatePensionCase>(this.recievedOtherStateData);
  // Form Group
  receivedCloseCaseListing: FormGroup;
  // Date
  todaysDate = new Date();
  // Controls Fro   in Select
  pensionTypeCtrl: FormControl = new FormControl();
  branchNameCtrl: FormControl = new FormControl();
  districtNameCtrl: FormControl = new FormControl();
  inwardTypeCtrl: FormControl = new FormControl();
  isReceived = false;

  selection = new SelectionModel<RecievedOtherStatePensionCase>(true, []);
  constructor(private fb: FormBuilder, public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.receivedCloseCaseListing = this.fb.group({
      inwardNo: [''],
      inwardDate: [''],
      inwardType: [''],
      retirementDate: [''],
      pensionType: [''],
      branchName: [''],
      districtName: [''],
      ppoNo: [''],
      inwardTODate: [''],
      firstName: [''],
      middleName: [''],
      lastName: ['']
    });
  }

  checkboxLabel(row?: RecievedOtherStatePensionCase): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} `;
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  // WorkFlow Dialog
  workflowDetails(): void {
    const dialogRef = this.dialog.open(WorkflowDetailsDppfComponent, {
      width: '1100px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.router.navigate(['/dppf/recieved-other-state-pension-case']);
    });
  }
  // Inward Pension Dialog
  openDialog() {
    const dialogRef = this.dialog.open(AuditorInwardDetailsComponent, {
      width: '100%',
      height: '800px',
      disableClose: true,
      data: 'noButtons'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  // Navigation Route
  gotoObjection() {
    this.router.navigate(['./dppf/objection']);
  }

  receive() {
    this.isReceived = true;
  }
  resetForm() { }
  masterToggle() { }
  clearForm() { }
  receivedCloseCaseListingForm() { }

}
