import { AuditorInwardDetailsComponent } from './../auditor-inward-details/auditor-inward-details.component';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { WorkflowDetailsDppfComponent } from '../workflow-details-dppf/workflow-details-dppf.component';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { Router } from '@angular/router';
import { ReceivedOtherStatePension } from 'src/app/model/dppf';


@Component({
  selector: 'app-recieved-other-state-pension-case-to-ppo',
  templateUrl: './recieved-other-state-pension-case-to-ppo.html',
  styleUrls: ['./recieved-other-state-pension-case-to-ppo.css']
})
export class RecievedOtherStatePensionCaseToPpoComponent implements OnInit {
  // Table Source
  recievedOtherStateData: ReceivedOtherStatePension[] = [
    {
      inwardNumber: '010608/05/2019',
      inwardDate: '06/03/2020',
      inwardType: 'PC',
      ppoNoScNo: '',
      name: 'ABCD',
      retirementDate: '20/03/2020',
      pensionType: 'Sup',
      status: 'Rejected',
      remarks: '',
    },
    {
      inwardNumber: '010608/05/2019',
      inwardDate: '05/02/2020',
      inwardType: 'PC',
      ppoNoScNo: '',
      name: 'ABCD',
      retirementDate: '20/03/2020',
      pensionType: 'Sup',
      status: 'Approved',
      remarks: '',
    },
    {
      inwardNumber: '010507/05/2019',
      inwardDate: '07/02/2020',
      inwardType: 'PC',
      ppoNoScNo: '',
      name: 'ABCD',
      retirementDate: '20/03/2020',
      pensionType: 'Sup',
      status: 'Approved',
      remarks: '',
    }
  ];

  recievedOtherStateColumn = [
    'select',
    'serialNo',
    'inwardNumber',
    'inwardDate',
    'inwardType',
    'ppoNoScNo',
    'name',
    'retirementDate',
    'pensionType',
    'status',
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

  recievedOtherStateDataSource = new MatTableDataSource<ReceivedOtherStatePension>(this.recievedOtherStateData);
  // form group
  savedCases: FormGroup;
  // date
  todaysDate = new Date();
  // Control of select
  pensionTypeCtrl: FormControl = new FormControl();
  branchNameCtrl: FormControl = new FormControl();
  districtNameCtrl: FormControl = new FormControl();
  inwardTypeCtrl: FormControl = new FormControl();

  selection = new SelectionModel<ReceivedOtherStatePension>(true, []);
  constructor(private fb: FormBuilder, public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.savedCases = this.fb.group({
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

  checkboxLabel(row?: ReceivedOtherStatePension): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} `;
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.recievedOtherStateDataSource.data.length;
    return numSelected === numRows;
  }
  // workflow dialog
  workflowDetails(): void {
    const dialogRef = this.dialog.open(WorkflowDetailsDppfComponent, {
      width: '1100px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.router.navigate(['/dppf/recieved-other-state-pension-case']);
    });
  }
  // inward  pension case dialog
  openDialog() {
    const dialogRef = this.dialog.open(AuditorInwardDetailsComponent, {
      width: '100%',
      height: '800px',
      disableClose: true,
      data: ''
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  // navigate router
  gotoObjection() {
    this.router.navigate(['./dppf/objection']);
  }

  resetForm() { }
  masterToggle() { }
  submitSavedCases() {

  }
  clearForm() {

  }
}
