import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { AuditorInwardDetailsComponent } from '../auditor-inward-details/auditor-inward-details.component';
import { SelectionModel } from '@angular/cdk/collections';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { WorkflowDetailsDppfComponent } from '../workflow-details-dppf/workflow-details-dppf.component';
import { SavedCases, HeadData } from '../../model/dppf';
import { Router } from '@angular/router';


@Component({
  selector: 'app-director-saved-cases',
  templateUrl: './director-saved-cases.component.html',
  styleUrls: ['./director-saved-cases.component.css']
})
export class DirectorSavedCasesComponent implements OnInit {
  // Variable
  refNuberDate: any;
  todaysDate = new Date();
  // Date
  todayDate = new Date();
  // Table Souree
  savedCasesData: SavedCases[] = [
    {
      inwardNumber: '010608/05/2019',
      inwardDate: '06-Mar-2020',
      inwardType: 'PC',
      ppoNoScNo: '',
      name: 'ABCD',
      retirementDate: '20-Mar-2020',
      pensionType: 'Sup',
      documentCount: '1',
      revisionNumber: '0',
      branchName: 'PR-1',
      status: 'Rejected',
      workflow: 'Approved',
      from: 'AS Rana',
      branchInwardDate: '07-Mar-2020',
      remarks: ''
    },
    {
      inwardNumber: '010608/05/2019',
      inwardDate: '05-Feb-2020',
      inwardType: 'PC',
      ppoNoScNo: '',
      name: 'ABCD',
      retirementDate: '20-Mar-2020',
      pensionType: 'Sup',
      documentCount: '1',
      revisionNumber: '0',
      branchName: 'PR-1',
      status: 'Approved',
      workflow: 'Approved',
      from: 'AS Rana',
      branchInwardDate: '07-Mar-2020',
      remarks: ''
    },
    {
      inwardNumber: '010507/05/2019',
      inwardDate: '07-Feb-2020',
      inwardType: 'PC',
      ppoNoScNo: '',
      name: 'ABCD',
      retirementDate: '20-Mar-2020',
      pensionType: 'Sup',
      documentCount: '1',
      revisionNumber: '0',
      branchName: 'PR-1',
      status: 'Approved',
      workflow: 'Approved',
      from: 'AS Rana',
      branchInwardDate: '07-Mar-2020',
      remarks: ''
    }
  ];

  savedCasesColumn = [
    'select',
    'serialNo',
    'inwardNumber',
    'inwardDate',
    'inwardType',
    'ppoNoScNo',
    'name',
    'retirementDate',
    'pensionType',
    'documentCount',
    'revisionNumber',
    'branchName',
    'status',
    'workflow',
    'from',
    'branchInwardDate',
    'remarks'
  ];
  // Lists

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

  outwardedTo_list: ListValue[] = [
    { value: '1', viewValue: 'Outwarded Name1' },
    { value: '2', viewValue: 'Outwarded Name2' }
  ];
  workFlowStatus_list: ListValue[] = [
    { value: '1', viewValue: 'Approval In Progress' },
    { value: '2', viewValue: 'Send Back ' },
    { value: '3', viewValue: 'Approved' },
    { value: '4', viewValue: 'Rejected' },
  ];
  pensionCaseInwardType_list: any[] = [
    { value: '1', viewValue: 'All' },
    { value: '2', viewValue: 'Physical' },
    { value: '3', viewValue: 'Online' },
  ];
  savedCasesDataSource = new MatTableDataSource<SavedCases>(this.savedCasesData);
  // Form Group
  savedCases: FormGroup;
  // Control Form
  pensionTypeCtrl: FormControl = new FormControl();
  branchNameCtrl: FormControl = new FormControl();
  districtNameCtrl: FormControl = new FormControl();
  inwardTypeCtrl: FormControl = new FormControl();
  forwardedToCtrl: FormControl = new FormControl();
  statusCtrl: FormControl = new FormControl();
  pensionCaseInwardTypeCtrl: FormControl = new FormControl();
  selection = new SelectionModel<HeadData>(true, []);

  constructor(private fb: FormBuilder, public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.savedCases = this.fb.group({
      firstName: [''],
      middleName: [''],
      lastName: [''],
      inwardNo: [''],
      inwardDate: [''],
      inwardType: [''],
      retirementFromDate: [''],
      retirementToDate: [''],
      pensionType: [''],
      branchName: [''],
      districtName: [''],
      ppoNo: ['']
    });
  }
  // Auditor Inward Popup
  openInwardDialog(event?) {
    const dialogRef = this.dialog.open(AuditorInwardDetailsComponent, {
      width: '100%',
      height: '800px',
      disableClose: true,
      data: ''
    }
    );
    dialogRef.afterClosed().subscribe(result => {

    });
  }

  checkboxLabel(row?: HeadData): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} `;
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.savedCasesDataSource.data.length;
    return numSelected === numRows;
  }

  clearForm() {
    this.savedCases.reset();
  }

  submitSavedCases() {
  }

  statusChanged() {
    this.savedCasesDataSource.data = this.savedCasesData.filter((result) => {
      if (result.status.toLowerCase() === this.statusCtrl.value.toLowerCase() || this.statusCtrl.value.toLowerCase() === 'all') {
        return true;
      }
    });
  }
  // Work Flow Popup
  workflowDetails(): void {
    const dialogRef = this.dialog.open(WorkflowDetailsDppfComponent, {
      width: '1100px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  // Navigation Route
  gotoObjection() {
    this.router.navigate(['./dppf/objection']);
  }

}
