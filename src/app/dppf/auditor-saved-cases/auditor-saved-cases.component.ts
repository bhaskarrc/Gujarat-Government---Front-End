import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { AuditorInwardDetailsComponent } from '../auditor-inward-details/auditor-inward-details.component';
import { SelectionModel } from '@angular/cdk/collections';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { WorkflowDetailsDppfComponent } from '../workflow-details-dppf/workflow-details-dppf.component';
import { Router } from '@angular/router';
import { SavedCases } from 'src/app/model/dppf';

@Component({
  selector: 'app-auditor-saved-cases',
  templateUrl: './auditor-saved-cases.component.html',
  styleUrls: ['./auditor-saved-cases.component.css']
})
export class AuditorSavedCasesComponent implements OnInit {
  // Variable
  [x: string]: any;
  refNuberDate: any;
  todayDate: any;

  // Table Source
  savedCasesData: SavedCases[] = [
    {
      inwardNumber: '010608/05/2019',
      inwardDate: '06/03/2020',
      inwardType: 'Pension Case',
      ppoNoScNo: '',
      name: 'ABCD',
      retirementDate: '20/03/2020',
      pensionType: 'Sup',
      documentCount: '1',
      revisionNumber: '0',
      branchName: 'PR-1',
      status: 'Forwarded',
      workflow: 'Approved',
      from: 'AS Rana',
      branchInwardDate: '07/03/2020',
      remarks: ''
    },
    {
      inwardNumber: '010608/05/2019',
      inwardDate: '05/02/2020',
      inwardType: 'Pension Case',
      ppoNoScNo: '',
      name: 'ABCD',
      retirementDate: '20/03/2020',
      pensionType: 'Sup',
      documentCount: '1',
      revisionNumber: '0',
      branchName: 'PR-1',
      status: 'Returned',
      workflow: 'Approved',
      from: 'AS Rana',
      branchInwardDate: '07/03/2020',
      remarks: ''
    },
    {
      inwardNumber: '010507/05/2019',
      inwardDate: '07/02/2020',
      inwardType: 'Pension Case',
      ppoNoScNo: '',
      name: 'ABCD',
      retirementDate: '20/03/2020',
      pensionType: 'Sup',
      documentCount: '1',
      revisionNumber: '0',
      branchName: 'PR-1',
      status: 'Approved',
      workflow: 'Approved',
      from: 'AS Rana',
      branchInwardDate: '07/03/2020',
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
  actionTab_list: ListValue[] = [
    { value: '1', viewValue: 'Forwarded To' },
    { value: '2', viewValue: 'Outwarded To' }
  ];
  forwardedTo_list: ListValue[] = [
    { value: '1', viewValue: 'forward Name1' },
    { value: '2', viewValue: 'forward Name2' }
  ];
  outwardedTo_list: ListValue[] = [
    { value: '1', viewValue: 'Outwarded Name1' },
    { value: '2', viewValue: 'Outwarded Name2' }
  ];
  pensionCaseInwardType_list: any[] = [
    { value: '1', viewValue: 'All' },
    { value: '2', viewValue: 'Physical' },
    { value: '3', viewValue: 'Online' },
  ];

  cash_Satus_list: ListValue[] = [
    { value: '1', viewValue: 'Received Pension Case' },
    { value: '2', viewValue: 'Received Service Certificate Case' },
    { value: '3', viewValue: 'Sent Pension Case' },
    { value: '4', viewValue: 'Returned Case' }
  ];

  savedCasesDataSource = new MatTableDataSource<SavedCases>(this.savedCasesData);
  // Form Group
  savedCasesForm: FormGroup;
  todaysDate = new Date();
  // Form Control
  pensionTypeCtrl: FormControl = new FormControl();
  branchNameCtrl: FormControl = new FormControl();
  districtNameCtrl: FormControl = new FormControl();
  inwardTypeCtrl: FormControl = new FormControl();
  actionTab: FormControl = new FormControl('1');
  forwardedToCtrl: FormControl = new FormControl();
  outwardedToCtrl: FormControl = new FormControl();
  statusCtrl: FormControl = new FormControl();
  pensionCaseInwardTypeCtrl: FormControl = new FormControl();
  selection = new SelectionModel<SavedCases>(true, []);

  constructor(private fb: FormBuilder, public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.savedCasesForm = this.fb.group({
      firstName: [''],
      middleName: [''],
      lastName: [''],
      pensionCaseInwardType: [''],
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
  // Auditor Inward Details  popup
  openInwardDialog(event?) {
    const dialogRef = this.dialog.open(AuditorInwardDetailsComponent, {
      width: '100%',
      height: '800px',
      disableClose: true,
      data: ''

    }
    );
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
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
  // WorkFlow Details Popup
  workflowDetails(): void {
    const dialogRef = this.dialog.open(WorkflowDetailsDppfComponent, {
      width: '1100px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.savedCasesDataSource.data.forEach(row => this.selection.select(row));

  }
  resetForm() {

  }

  gotoObjection() {
    this.router.navigate(['./dppf/objection']);
  }

}
