import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { SavedCases } from '../../model/dppf';
import { SelectionModel } from '@angular/cdk/collections';
import { WorkflowDetailsDppfComponent } from '../workflow-details-dppf/workflow-details-dppf.component';
import { ListValue } from 'src/app/model/common-grant';
import { InwardOutwardDetailsComponent } from '../inward-outward-details/inward-outward-details.component';
import { Router } from '@angular/router';
import { AuditorInwardDetailsComponent } from '../auditor-inward-details/auditor-inward-details.component';

@Component({
  selector: 'app-saved-cases-pa-computer',
  templateUrl: './saved-cases-pa-computer.component.html',
  styleUrls: ['./saved-cases-pa-computer.component.css']
})
export class SavedCasesPaComputerComponent implements OnInit {
  // Date
  refNuberDate: Date;
  todayDate = new Date();
  // Table Source
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
  // Form Control
  pensionTypeCtrl: FormControl = new FormControl();
  branchNameCtrl: FormControl = new FormControl();
  districtNameCtrl: FormControl = new FormControl();
  inwardTypeCtrl: FormControl = new FormControl();
  statusCtrl: FormControl = new FormControl();
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
      ppoNo: [''],
      pensionCaseInwardType: ['']
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
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.savedCasesDataSource.data.forEach(row => this.selection.select(row));
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
  // Work FLow Dialog
  workflowDetails(): void {
    const dialogRef = this.dialog.open(WorkflowDetailsDppfComponent, {
      width: '1100px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  generatePPONo(event) {
    let i = 0;
    for (const obj of this.savedCasesData) {
      if (this.selection.selected.includes(obj)) {
        obj.ppoNoScNo = 'PR-4/05/2019/33257' + (i++);
      }
    }
  }
  // Navigation Route
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
