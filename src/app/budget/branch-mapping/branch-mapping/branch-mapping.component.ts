import { budgetMessage } from './../../../common/error-message/common-message.constants';
import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CommonListing } from 'src/app/model/common-listing';
import { MatTableDataSource, MatDialog, MatDialogRef} from '@angular/material';
import { Router } from '@angular/router';
import { SubmitConfirmCommonDialogComponent } from '../../annexure-a/annexure-a.component';
import { BranchMapping } from 'src/app/model/budget';

const ELEMENT_DATA: BranchMapping[] = [
  { empNum: '1000000001', empName: 'Shri Pratik Shah', postName: 'Post 1' },
  { empNum: '1000000002', empName: 'Shri Kartik Shah', postName: 'Post 2' },
];
const ELEMENT_DATA_2: BranchMapping[] = [
  { empNum: '1000000001', empName: 'Shri Pratik Shah', postName: 'Post 1' },
  { empNum: '1000000002', empName: 'Shri Kartik Shah', postName: 'Post 2' },
];
@Component({
  selector: 'app-branch-mapping',
  templateUrl: './branch-mapping.component.html',
  styleUrls: ['./branch-mapping.component.css']
})
export class BranchMappingComponent implements OnInit {

  branchMap: FormGroup;
  branchCtrl: FormControl = new FormControl();
  branchCtrlTab2: FormControl = new FormControl();
  empNumCtrl: FormControl = new FormControl();
  branchActionCtrl: FormControl = new FormControl();
  errorMessages = budgetMessage;
  checkbox = false;
  // Entry Field Details
  branchAction_list: CommonListing[] = [
    { value: '1', viewValue: 'Branch Mapping' },
    { value: '2', viewValue: 'Branch Transfer' },
  ];

  branch_list: CommonListing[] = [
    { value: '1', viewValue: 'Branch 1' },
    { value: '2', viewValue: 'Branch 2' },
    { value: '3', viewValue: 'Branch 3' },
    { value: '4', viewValue: 'Branch 4' },
  ];

  branch_list1: CommonListing[] = [
    { value: '1', viewValue: 'Branch 1' },
    { value: '2', viewValue: 'Branch 2' },
    { value: '3', viewValue: 'Branch 3' },
    { value: '4', viewValue: 'Branch 4' },
  ];

  empNum_list: CommonListing[] = [
    { value: '1', viewValue: '1000000001 - Shri Pratik Shah' },
    { value: '2', viewValue: '1000000002 - Shri Kartik Shah' },
  ];

  fileBrowseIndex: number;

  // Attachments Table
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  dataSourceSecond = new MatTableDataSource(ELEMENT_DATA_2);
  displayColumns = ['position', 'empNum', 'empName', 'postName', 'branch'];
  displayColumnsSecond = ['checkbox', 'position', 'empNum', 'empName', 'postName', 'branch'];


  constructor(
    private fb: FormBuilder,
    private el: ElementRef,
    private router: Router,
    public dialog: MatDialog,

    ) { }

  ngOnInit() {
    this.branchMap = this.fb.group({
      branchAction: ['', Validators.required],
      brMapFrom: ['Branch 1', Validators.required],
      brMapTo: ['Branch 2', Validators.required],
      branch: ['1', Validators.required],
      toBeTransfer: ['Branch 1,', Validators.required],
      empNum: ['', Validators.required],
      branchTab2: ['1', Validators.required],
    });
  }

  // CheckBox Function
  checkboxValueChange(idx) {
    let cnt = 0;
    this.dataSourceSecond.data.forEach((element, index) => {
      if (element['checkbox']) {
        cnt++;
      }
    });
    // this.dataSourceSecond.data.forEach((element, index) => {
    //   if (index === idx) {
    //     this.checkbox = false;
    //   }
    //   else { this.checkbox = true; }
    // });
  }
  goToDashboard() {}

  // Transfer popup
  transfer() {
    const dialogRef = this.dialog.open(TransferConfirmCommonDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes') {
      }
    });
  }
}
@Component({
  selector: 'app-transfer-confirm-common-dialog',
  templateUrl: './transfer-confirm-common-dialog.component.html',
  styleUrls: ['./branch-mapping.component.css']
})
export class TransferConfirmCommonDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TransferConfirmCommonDialogComponent>) { }

  ngOnInit() {
  }
  onCancel() {
    this.closeDialog('no');
  }

  onyes() {
    this.closeDialog('yes');
  }

  closeDialog(popup: 'no' | 'yes') {
    this.dialogRef.close(popup);
  }
}
