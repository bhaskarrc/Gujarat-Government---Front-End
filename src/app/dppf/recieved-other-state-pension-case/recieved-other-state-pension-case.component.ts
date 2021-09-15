import { Component, OnInit, Inject } from '@angular/core';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource, MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
// tslint:disable-next-line:max-line-length
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';
import { WorkflowDetailsDppfComponent } from '../workflow-details-dppf/workflow-details-dppf.component';
import { DialogData } from 'src/app/model/standing-charge';
import { Router } from '@angular/router';
import { RecievedOtherStatePensionCase } from 'src/app/model/dppf';

@Component({
  selector: 'app-recieved-other-state-pension-case',
  templateUrl: './recieved-other-state-pension-case.component.html',
  styleUrls: ['./recieved-other-state-pension-case.component.css']
})
export class RecievedOtherStatePensionCaseComponent implements OnInit {
  // Tabel Source
  recievedOtherStateData: any[] = [
    {
      inwardNumber: '010608/05/2019',
      inwardDate: '06/03/2020',
      inwardType: 'PC',
      ppoNoScNo: '',
      name: 'ABCD',
      retirementDate: '20/03/2020',
      pensionType: 'Sup',
      status: 'Rejected',
      workflow: 'Approved',
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
      workflow: 'Approved',
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
      workflow: 'Approved',
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
    'workflow',
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
  pensionCaseInwardType_list: any[] = [
    { value: '1', viewValue: 'All' },
    { value: '2', viewValue: 'Physical' },
    { value: '3', viewValue: 'Online' },
  ];

  recievedOtherStateDataSource = new MatTableDataSource<RecievedOtherStatePensionCase>(this.recievedOtherStateData);
  // Form Group
  savedCases: FormGroup;
  todaysDate = new Date();

  // Controls Fro   in Select
  pensionTypeCtrl: FormControl = new FormControl();
  branchNameCtrl: FormControl = new FormControl();
  districtNameCtrl: FormControl = new FormControl();
  inwardTypeCtrl: FormControl = new FormControl();
  pensionCaseInwardTypeCtrl: FormControl = new FormControl();
  selection = new SelectionModel<RecievedOtherStatePensionCase>(true, []);
  constructor(private fb: FormBuilder, public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.savedCases = this.fb.group({
      inwardNo: [''],
      inwardDate: [''],
      inwardType: [''],
      retirementDate: [''],
      retirementFromDate: [''],
      retirementToDate: [''],
      pensionCaseInwardType: [''],
      pensionType: [''],
      branchName: [''],
      districtName: [''],
      ppoNo: [''],
      firstName: [''],
      lastName: [''],
      inwardTODate: [''],
      middleName: ['']
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
    const numRows = this.recievedOtherStateDataSource.data.length;
    return numSelected === numRows;
  }
  // WorkFlow Dialog

  workflowDetails(): void {
    const dialogRef = this.dialog.open(WorkflowDetailsDppfComponent, {
      width: '1100px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  // Inward Details Dialog
  openDialog() {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(InwardDetailsDialogComponent, {
      width: '1200px', height: '800px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  submitSavedCases() {

  }
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.recievedOtherStateDataSource.data.forEach(row => this.selection.select(row));
  }
  // Navigation
  gotoObjection() {
    this.router.navigate(['./dppf/objection']);
  }

}

// app inward details dialog other state
@Component({
  selector: 'app-inward-details-dialog-other-state',
  templateUrl: './inward-details-dialog.html',
  styleUrls: ['./recieved-other-state-pension-case.component.css']
})
export class InwardDetailsDialogComponent implements OnInit {
  designationType_list: ListValue[] = [
    { value: '1', viewValue: 'office1' }
  ];
  pensionType_list: ListValue[] = [
    { value: '1', viewValue: 'office1' }
  ];
  pensionerDistrict_list: ListValue[] = [
    { value: '1', viewValue: 'office1' }
  ];
  state_list: ListValue[] = [
    { value: '1', viewValue: 'Gujarat' },
    { value: '2', viewValue: 'Madhya Pradesh' }
  ];

  designationTypeCtrl: FormControl = new FormControl();
  pensionTypeCtrl: FormControl = new FormControl();
  pensionerDistrictCtrl: FormControl = new FormControl();
  stateCtrl: FormControl = new FormControl();

  public onlinePensionForm: FormGroup;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<InwardDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
    this.onlinePensionForm = this.fb.group({
      name: [''],
      middleName: [''],
      surName: [''],
      designation: [''],
      typeOfPension: [''],
      dateOfBirth: [''],
      dateOfJoining: [''],
      dateOfRetirement: [''],
      ppoNo: [''],
      OtherStatePpoNo: [''],
      officeAddress: [''],
      homeAddress: [''],
      pensionerHusbandWifeName: [''],
      spouseDateOfBirth: [''],
      pensionerDistrict: [''],
      state: [''],
      tiRate: [''],
      pensionStartDate: [''],
      cvpAmount: [''],
      dcrgAmount: [''],
      pensionAmount: [''],
      fp1Amount: [''],
      fp2Amount: [''],
      netService: [''],
      break: [''],
      actualService: [''],
      notionalService: [''],
      lastSalary: [''],
      lastPay: [''],
      approvedPensionAmount: [''],
      fourtyPercentOfPension: [''],
      fourtyPercentDeductionPension: [''],
      nominee: [''],

    });
  }

  closeClick($event?) {
    this.dialogRef.close();
  }

  decimalFromControlPoint(formGroupName, controlName) {
    formGroupName.controls[controlName].value = Number(formGroupName.controls[controlName].value).toFixed(2);
    formGroupName.controls[controlName].setValue(formGroupName.controls[controlName].value);
  }

  decimalKeyPress(event: any) {
    const pattern = /^\d+(\\d{0,0})?$/;
    const inputChar = String.fromCharCode(
      !event.charCode ? event.which : event.charCode
    );
    let tempstr = event.target.value;
    tempstr += inputChar;
    if (!pattern.test(tempstr)) {
      event.preventDefault();
      return false;
    }
  }


}
