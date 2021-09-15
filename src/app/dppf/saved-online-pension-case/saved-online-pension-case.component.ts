import { Component, OnInit } from '@angular/core';
import { SavedCases } from '../../model/dppf';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { WorkflowDetailsDppfComponent } from '../workflow-details-dppf/workflow-details-dppf.component';
import { ListValue } from 'src/app/model/common-grant';
import { OnlinePensionCaseComponent } from '../online-pension-case/online-pension-case.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saved-online-pension-case',
  templateUrl: './saved-online-pension-case.component.html',
  styleUrls: ['./saved-online-pension-case.component.css']
})
export class SavedOnlinePensionCaseComponent implements OnInit {

  constructor(private fb: FormBuilder, public dialog: MatDialog, private router: Router) { }
  // table source
  savedCasesData: any[] = [
    {
      inwardNumber: '19-20/DPPF/OPC/001',
      inwardDate: '06-Mar-2020',
      inwardType: 'PC',
      ppoNoScNo: '',
      name: 'ABCD',
      employeeNumber: '',
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
      inwardNumber: '19-20/DPPF/OPC/001',
      inwardDate: '05-Feb-2020',
      inwardType: 'PC',
      ppoNoScNo: '',
      name: 'ABCD',
      employeeNumber: '',
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
      inwardNumber: '19-20/DPPF/OPC/001',
      inwardDate: '07-Feb-2020',
      inwardType: 'PC',
      ppoNoScNo: '',
      name: 'ABCD',
      employeeNumber: '',
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
    'employeeNumber',
    'ppoNoScNo',
    'name',
    'retirementDate',
    'pensionType',
    'documentCount',
    'revisionNumber',
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
  status_list: ListValue[] = [
    { value: '1', viewValue: 'All' },
    { value: '2', viewValue: 'Approved' },
    { value: '3', viewValue: 'Rejected' },
    { value: '4', viewValue: 'Objected' },
    { value: '5', viewValue: 'Returned' },
    { value: '6', viewValue: 'Forwarded' }
  ];

  savedCasesDataSource = new MatTableDataSource<SavedCases>(this.savedCasesData);
  // Form Group
  savedCases: FormGroup;
  // Date
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

  selection = new SelectionModel<SavedCases>(true, []);
  ngOnInit() {
    this.savedCases = this.fb.group({
      inwardNo: [''],
      inwardDate: [''],
      inwardType: [''],
      retirementFromDate: [''],
      retirementToDate: [''],
      pensionType: [''],
      branchName: [''],
      districtName: [''],
      ppoNo: [''],
      firstName: [''],
      middleName: [''],
      lastName: [''],
      inwardToDate: ['']
    });
  }
  // online pension case
  openInwardDialog(event?) {
    const dialogRef = this.dialog.open(OnlinePensionCaseComponent, {
      width: '100%',
      height: '700px'
    }
    );
    dialogRef.afterClosed().subscribe(result => {

    });
  }
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.savedCasesDataSource.data.forEach(row => this.selection.select(row));
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
  // work flow dialog
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
  // Navigation Route
  navigate() {
    this.router.navigate(['./dppf/dppf-online-pension-case']);
  }

}
