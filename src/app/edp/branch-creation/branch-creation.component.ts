import { Router } from '@angular/router';
import { CommonListing } from './../../model/common-listing';
import { MatDialog, MatPaginator, MatTableDataSource } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { BranchCreation } from 'src/app/model/edp';
import { ProceedDialogComponent } from '../proceed-dialog/proceed-dialog.component';
import { DataService } from 'src/app/common/data.service';
import { edpMessage } from 'src/app/common/error-message/common-message.constants';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-branch-creation',
  templateUrl: './branch-creation.component.html',
  styleUrls: ['./branch-creation.component.css']
})
export class BranchCreationComponent implements OnInit {

  branchCreationForm: FormGroup;
  branchTypeCtrl: FormControl = new FormControl();
  data;
  errorMessages = edpMessage;
  todayDate = new Date();

  // branch type list
  branchTypeList: CommonListing[] = [
    { value: '1', viewValue: 'Budget Branch' },
    { value: '2', viewValue: 'Admin Branch' },
  ];
  // Branch Data source data and declaration Starts
  branchDetailsData: BranchCreation[] = [
    {
      branchName: 'ABC Branch',
      branchType: '1',
      isEdit: true,
    }
  ];
  branchDetailsColumns: string[] = [
    // 'position',
    'branchName',
    'branchType',
    // 'action',
  ];
  branchDetailsDataSource: MatTableDataSource<BranchCreation> = new MatTableDataSource(this.branchDetailsData);
  paginator: MatPaginator;
  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.branchDetailsDataSource.paginator = this.paginator;
  }
  // Branch Data source data and declaration Ends

  constructor(private fb: FormBuilder, private dialog: MatDialog, private router: Router,
    private dataService: DataService, private toastr: ToastrService) {
    this.data = this.dataService.getOption();
  }

  ngOnInit() {
    this.branchCreationForm = this.fb.group({
      district: [{ value: 'Ahmedabad', disabled: true }],
      ddoNo: [{ value: '4265', disabled: true }],
      cardexNo: [{ value: '5622', disabled: true }],
      officeName: [{ value: 'Collector Office, Ahmedabad', disabled: true }],
      branchName: [{ value: 'ABC Branch', disabled: false }],
      branchType: [{ value: '1', disabled: false }],
    });
    if (this.data['fromBranchCreationListing'] === 'viewMode') {
      this.branchCreationForm.controls.branchName.disable();
      this.branchCreationForm.controls.branchType.disable();
      this.data['fromBranchCreationListing'] = '';
    } else if (this.data['fromBranchCreationListing'] === 'editMode') {
      this.data['fromBranchCreationListing'] = '';
    } else { }
  }
  // To Add Row
  add() {
    this.branchDetailsDataSource.data.push(
      {
        branchName: '',
        branchType: '1',
        isEdit: true,
      });
    this.branchDetailsDataSource.data = this.branchDetailsDataSource.data;
  }
  // On Save
  onSave(element) {
    element.isEdit = !element.isEdit;
  }
  // On Edit
  onEdit(element) {
    this.onSave(element);
  }

  // On Save as Draft to open ProceedDialogComponent
  onSaveAsDraft() {
    if (this.branchCreationForm.valid) {
      const dialogRef = this.dialog.open(ProceedDialogComponent, {
        width: '300px',
        height: 'auto',
        data: ''
      }
      );
      dialogRef.afterClosed().subscribe(result => {
        console.log('Dialog Closed');
      });
    } else {
      this.toastr.error('Please Fill The Data!');
    }
  }

  // On close to open ProceedDialogComponent
  onClose() {
    const dialogRef = this.dialog.open(ProceedDialogComponent, {
      width: '300px',
      height: 'auto',
      data: ''
    }
    );
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog Closed');
    });
  }
  // On Submit
  onSubmit() {
    if (this.branchCreationForm.valid) {
      const dialogRef = this.dialog.open(ProceedDialogComponent, {
        width: '300px',
        height: 'auto',
        data: ''
      }
      );
      dialogRef.afterClosed().subscribe(result => {
        console.log('Dialog Closed');
      });
    } else {
      this.toastr.error('Please Fill The Data!');
    }
  }
  // On listing
  gotoListing() {
    const dialogRef = this.dialog.open(ProceedDialogComponent, {
      width: '300px',
      height: 'auto',
      data: ''
    }
    );
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'Yes') {
        this.router.navigate(['./edp/branch-creation-lisiting']);
      } else { }
      console.log('Dialog Closed');
    });
  }
  // on Reset
  onReset() {
    const dialogRef = this.dialog.open(ProceedDialogComponent, {
      width: '300px',
      height: 'auto',
      data: ''
    }
    );
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'Yes') {
        this.branchCreationForm.controls.branchName.reset();
        this.branchCreationForm.controls.branchType.reset();
      } else {

      }
      console.log('Dialog Closed');
    });
  }
}
