import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import {
  MatTableDataSource,
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatSort,
  MatPaginator
} from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { DialogData } from 'src/app/model/standing-charge';
import { Router } from '@angular/router';
import { SavedCase } from 'src/app/model/dppf';


@Component({
  selector: 'app-delete-pension-case',
  templateUrl: './delete-pension-case.component.html',
  styleUrls: ['./delete-pension-case.component.css']
})
export class DeletePensionCaseComponent implements OnInit {
  // Lists

  pensionType_list: ListValue[] = [
    { value: '1', viewValue: 'Sup' },
    { value: '2', viewValue: 'Fam' }
  ];

  pensionerType_list: ListValue[] = [
    { value: '1', viewValue: 'IAS' },
    { value: '2', viewValue: 'High Court Judges' },
    { value: '3', viewValue: 'Public Prosecutor' },
    { value: '4', viewValue: 'Class 4' },
    { value: '5', viewValue: 'Rozmadar' },
    { value: '6', viewValue: 'Kotwal' }
  ];

  departmentType_list: ListValue[] = [
    { value: '1', viewValue: 'Education Department' },
    { value: '2', viewValue: 'Finance Department' },
    { value: '3', viewValue: 'Home Department' },
    { value: '4', viewValue: 'Legal Department' },
    { value: '5', viewValue: 'Revenue Department' },
    { value: '6', viewValue: ' Ports and Fisheries Department' }
  ];

  pensionCaseInwardType_list: any[] = [
    { value: '1', viewValue: 'All' },
    { value: '2', viewValue: 'Physical' },
    { value: '3', viewValue: 'Online' },
  ];

  inwardType_list: ListValue[] = [
    { value: '1', viewValue: 'PC' },
  ];
  // table source
  savedCasesData: SavedCase[] = [
    {

      inwardNumber: '010608/05/2019',
      inwardDate: '06-Mar-2020',
      radioStatus: false,
      ppoNoScNo: 'PR-4/05/2019/33257',
      name: 'ABCD',
      status: 'Approved',
      workflow: 'Approved',
      retirementDate: '20-Mar-2020'
    },
    {
      radioStatus: false, inwardNumber: '010608/05/2019',
      inwardDate: '05-Feb-2020',

      ppoNoScNo: 'PR-4/05/2019/33257',
      status: 'Approved',
      workflow: 'Approved',
      name: 'ABCD',
      retirementDate: '20-Mar-2020'
    },
    {
      radioStatus: false, inwardNumber: '010507/05/2019',
      inwardDate: '07-Feb-2020',

      ppoNoScNo: 'PR-4/05/2019/33257',
      status: 'Approved',
      workflow: 'Approved',
      name: 'ABCD',
      retirementDate: '20-Mar-2020'
    }
  ];

  savedCasesColumn = [
    'select',
    'serialNo',
    'inwardNumber',
    'inwardDate',

    'ppoNoScNo',
    'status',
    'workflow',
    'name',
    'retirementDate'
  ];
  savedCasesDataSource = new MatTableDataSource<SavedCase>(
    this.savedCasesData
  );
  // FormGroup
  deletePensionCaseForm: FormGroup;
  // Date
  selection = new SelectionModel<SavedCase>(false, []);
  // Controls Fro   in Select
  pensionTypeCtrl: FormControl = new FormControl();
  pensionerTypeCtrl: FormControl = new FormControl();
  departmentTypeCtrl: FormControl = new FormControl();
  inwardTypeCtrl: FormControl = new FormControl();
  pensionCaseInwardTypeCtrl: FormControl = new FormControl();
  indexToCancel: number[] = [];
  // variable
  checkedCheck = false;
  indexx: number;
  indexToCancell: number[] = [];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog, // public dialogRef: MatDialogRef<DeleteConfirmModelComponent>
    private router: Router,
  ) { }

  ngOnInit() {
    this.savedCasesDataSource.sort = this.sort;
    this.savedCasesDataSource.paginator = this.paginator;
    this.deletePensionCaseForm = this.fb.group({
      inwardNumber: [''],
      inwardDate: [''],
      ppoNo: [''],
      firstName: [''],
      middleName: [''],
      surname: [''],
      pensionType: [''],
      pensionerType: [''],
      dateOfRetirement: [''],
      retirementFromDate: [''],
      retirementToDate: [''],
      departmentType: [''],
      lastName: [''],
      inwardTODate: [''],
    });
  }
  // On click of Process Individual radio button
  onProcessIndividual(element) {
    this.savedCasesData.forEach(item => {
      item.radioStatus = false;
    });
    element.radioStatus = true;
    // this.isPayrollStatus = true;
  }


  getIndex(index: number, event: any) {
    const i = index;
    if (event) {
      const ind = this.indexToCancel.indexOf(i);
      this.indexToCancel.splice(ind, 1);
    } else {
      this.indexToCancel.push(index);
    }
    console.log(this.indexToCancel);
  }

  // clear form

  clearForm() {
    this.deletePensionCaseForm.reset();
  }
  // inward dialog
  openInwardDialog(event?) {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(DeleteConfirmModelComponent, {
      width: '100%',
      height: '800px',
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => { });
  }
  // work flow dialog
  workflowCancel(event?: any) {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(DeleteConfirmModelComponent, {
      width: '300px',
      height: '200px',
      disableClose: true,
      data: this.indexToCancel
    });
    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
      } else {
        result.forEach(element => {
          this.savedCasesDataSource.data[element].status = 'Approved';
        });
      }
    });
  }
  workflowDetails() { }
  gotoObjection() {
    this.router.navigate(['./dppf/objection']);
  }
}
// app delete confirm model
@Component({
  selector: 'app-delete-confirm-model',
  templateUrl: './delete-confirm-model.html'
})
export class DeleteConfirmModelComponent {
  index;
  constructor(
    public dialogRef: MatDialogRef<DeleteConfirmModelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.index = data;
  }
  closeClick($event?) {
    this.dialogRef.close();
  }

  cancelEntry() {
    this.dialogRef.close(this.index);
  }
}
// app open del inward dialog
@Component({
  selector: 'app-open-del-inward-dialog',
  templateUrl: './open-del-inward-dialog.html',
  styleUrls: ['./delete-pension-case.component.css']
})
export class OpenDelInwardDialogComponent {
  index;
  constructor(
    public dialogRef: MatDialogRef<OpenDelInwardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }
  closeClick($event?) {
    this.dialogRef.close();
  }


}
