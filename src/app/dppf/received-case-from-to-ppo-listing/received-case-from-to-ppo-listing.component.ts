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
  selector: 'app-received-case-from-to-ppo-listing',
  templateUrl: './received-case-from-to-ppo-listing.component.html',
  styleUrls: ['./received-case-from-to-ppo-listing.component.css']
})
export class ReceivedCaseFromToPpoListingComponent implements OnInit {
  // Element Data
  recievedOtherStateData: any[] = [
    {
      inwardNumber: '010608/05/2019',
      inwardDate: '06-Mar-2020',
      inwardType: 'PC',
      dppfReceivedDate: '',
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
      branchInwardDate: '4-Aug-2020',
      noting: '',
      remarks: '',
    },
    {
      inwardNumber: '010608/05/2019',
      inwardDate: '05-Feb-2020',
      inwardType: 'PC',
      dppfReceivedDate: '',
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
      branchInwardDate: '4-Aug-2020',
      noting: '',
      remarks: '',
    },
    {
      inwardNumber: '010507/05/2019',
      inwardDate: '07-Feb-2020',
      inwardType: 'PC',
      dppfReceivedDate: '',
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
      branchInwardDate: '4-Aug-2020',
      noting: '',
      remarks: '',
    }
  ];
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
  // Table Source
  columns = [
    'select',
    'serialNo',
    'inwardNumber',
    'inwardDate',
    'dppfReceivedDate',
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
    'remarks'
  ];



  dataSource = new MatTableDataSource<RecievedOtherStatePensionCase>(this.recievedOtherStateData);
  // Form Group
  receivedCaseFromToPpoListing: FormGroup;
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
    this.receivedCaseFromToPpoListing = this.fb.group({
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
  // Work Flow Details
  workflowDetails(): void {
    const dialogRef = this.dialog.open(WorkflowDetailsDppfComponent, {
      width: '1100px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.router.navigate(['./dppf/received-other-state-pension-case']);
    });
  }
  // Inward Pension Case
  openDialog() {
    const dialogRef = this.dialog.open(AuditorInwardDetailsComponent, {
      width: '100%',
      height: '800px',
      disableClose: true,
      data: 'noButtons'
    }
    );

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  // Navigation
  gotoObjection() {
    this.router.navigate(['./dppf/objection']);
  }

  receive() {
    this.isReceived = true;
    let selectedData = [];
    selectedData = this.dataSource.data.filter(item => {
      return this.selection.isSelected(item);
    });
    console.log('Select :', selectedData);

    selectedData.forEach(event => {
      event.dppfReceivedDate = new Date();
    });
  }

  resetForm() { }
  masterToggle() { }
  clearForm() { }

}
