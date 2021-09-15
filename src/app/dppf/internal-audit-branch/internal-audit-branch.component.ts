import { Component, OnInit } from '@angular/core';
import { WorkflowDetailsDppfComponent } from '../workflow-details-dppf/workflow-details-dppf.component';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { SavedCases } from '../../model/dppf';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';
import { Router } from '@angular/router';
import { AuditorInwardDetailsComponent } from '../auditor-inward-details/auditor-inward-details.component';

@Component({
  selector: 'app-internal-audit-branch',
  templateUrl: './internal-audit-branch.component.html',
  styleUrls: ['./internal-audit-branch.component.css']
})
export class InternalAuditBranchComponent implements OnInit {
  // Date
  refNuberDate: Date;
  todayDate = new Date();
  todaysDate = new Date();
  // Table Source
  internalAuditData: SavedCases[] = [
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

  internalAuditColumn = [
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
  forwardedTo_list: ListValue[] = [
    { value: '1', viewValue: 'Forward Name1' },
    { value: '2', viewValue: 'Forward Name2' }
  ];

  inwardType_list: ListValue[] = [
    { value: '1', viewValue: 'PC' },
  ];
  actionTab_list: ListValue[] = [
    { value: '1', viewValue: 'Forwarded To' },
    { value: '2', viewValue: 'Outwarded To' }
  ];
  status_list: ListValue[] = [
    { value: '1', viewValue: 'All' },
    { value: '2', viewValue: 'Sent' },
    { value: '3', viewValue: 'Recieved' },
  ];

  pensionCaseInwardType_list: any[] = [
    { value: '1', viewValue: 'All' },
    { value: '2', viewValue: 'Physical' },
    { value: '3', viewValue: 'Online' },
  ];
  internalAuditDataSource = new MatTableDataSource<SavedCases>(this.internalAuditData);
  // Form Group
  internalAudit: FormGroup;

  // Controls Fro   in Select
  pensionTypeCtrl: FormControl = new FormControl();
  branchNameCtrl: FormControl = new FormControl();
  districtNameCtrl: FormControl = new FormControl();
  inwardTypeCtrl: FormControl = new FormControl();
  statusCtrl: FormControl = new FormControl();
  forwardedToCtrl: FormControl = new FormControl();
  pensionCaseInwardTypeCtrl: FormControl = new FormControl();
  selection = new SelectionModel<SavedCases>(true, []);

  constructor(private fb: FormBuilder, public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.internalAudit = this.fb.group({
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

  checkboxLabel(row?: SavedCases): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} `;
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.internalAuditDataSource.data.length;
    return numSelected === numRows;
  }

  clearForm() {
    this.internalAudit.reset();
  }

  submitSavedCases() {
  }

  statusChanged() {
    this.internalAuditDataSource.data = this.internalAuditData.filter((result) => {
      if (result.status.toLowerCase() === this.statusCtrl.value.toLowerCase() || this.statusCtrl.value.toLowerCase() === 'all') {
        return true;
      }
    });
  }
  // Work Flow Dialog
  workflowDetails(): void {
    const dialogRef = this.dialog.open(WorkflowDetailsDppfComponent, {
      width: '1100px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  resetForm() { }
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.internalAuditDataSource.data.forEach(row => this.selection.select(row));
  }
  // navigation
  gotoObjection() {
    this.router.navigate(['./dppf/objection']);
  }

  // Auditor Inward Details  popup
  openInwardDialog(event?) {
    const dialogRef = this.dialog.open(AuditorInwardDetailsComponent, {
      width: '100%',
      height: '800px',
      disableClose: true,
      data: 'noButtons'

    }
    );
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
