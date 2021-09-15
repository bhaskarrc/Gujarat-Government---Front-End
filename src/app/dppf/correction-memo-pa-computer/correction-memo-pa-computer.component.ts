import { Component, OnInit } from '@angular/core';
import { SavedCases } from '../../model/dppf';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';
import { WorkflowDetailsDppfComponent } from '../workflow-details-dppf/workflow-details-dppf.component';
import { Router } from '@angular/router';
import { CorrectionMemoInwardPopupComponent } from '../correction-memo-inward-popup/correction-memo-inward-popup.component';

@Component({
  selector: 'app-correction-memo-pa-computer',
  templateUrl: './correction-memo-pa-computer.component.html',
  styleUrls: ['./correction-memo-pa-computer.component.css']
})
export class CorrectionMemoPaComputerComponent implements OnInit {
  // Date
  refNuberDate: Date;
  todayDate = new Date();
  // Table Source
  savedCasesData: SavedCases[] = [
    {
      inwardNumber: '010608/05/2019',
      inwardDate: '06-Mar-2020',
      inwardType: 'PC',
      ppoNoScNo: 'PR-4/05/2019/33257',
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
      ppoNoScNo: 'PR-4/05/2019/33257',
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
      ppoNoScNo: 'PR-4/05/2019/33257',
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
  forwardedTo_list: ListValue[] = [
    { value: '1', viewValue: 'forward Name1' },
    { value: '2', viewValue: 'forward Name2' }
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
    { value: '2', viewValue: 'Approved' },
    { value: '3', viewValue: 'Rejected' },
    { value: '4', viewValue: 'Objected' },
    { value: '5', viewValue: 'Returned' },
    { value: '6', viewValue: 'Forwarded' }
  ];
  pensionCaseInwardType_list: any[] = [
    { value: '1', viewValue: 'All' },
    { value: '2', viewValue: 'Physical' },
    { value: '3', viewValue: 'Online' },
  ];


  savedCasesDataSource = new MatTableDataSource<SavedCases>(this.savedCasesData);
  // Form Group
  savedCases: FormGroup;
  todaysDate = new Date();
  // Form Control
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
  // Correction Memo Inward Popup
  openInwardDialog(event?) {
    const dialogRef = this.dialog.open(CorrectionMemoInwardPopupComponent, {
      width: '1200px',
      height: '800px',
      disableClose: true
    }
    );
    dialogRef.afterClosed().subscribe(result => {

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
  // Popup Workflow
  workflowDetails(): void {
    const dialogRef = this.dialog.open(WorkflowDetailsDppfComponent, {
      width: '1100px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  // Navigation
  gotoObjection() {
    this.router.navigate(['./dppf/objection']);
  }

  resetForm() {

  }
  masterToggle() {

  }
}
