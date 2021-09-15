
import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog, MatDialogRef } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { SubmitConfirmCommonDialogComponent } from '../../annexure-a/annexure-a.component';
import { budgetMessage } from 'src/app/common/error-message/common-message.constants';
import { BranchCreation } from 'src/app/model/budget';
import { BudgetDirectives } from 'src/app/common/directive/budget-directive';



// Table data
const ELEMENT_DATA: BranchCreation[] = [
  {
    branchName: 'Shri S J Shah',
    branchType: 'Section Officer',
   },
   {
    branchName: 'Shri R M Patel',
    branchType: 'Deputy Section Officer',
   },
];
@Component({
  selector: 'app-branch-creation',
  templateUrl: './branch-creation.component.html',
  styleUrls: ['./branch-creation.component.css']
})
export class BranchCreationComponent implements OnInit {
  directiveObject = new BudgetDirectives(this.dialog);
  // Entry Field Details
  branchType_list: CommonListing[] = [
    { value: '1', viewValue: 'Budget Branch' },
    { value: '2', viewValue: 'Admin Branch' },
  ];
  // Entry Table
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  displayedColumns: string[] = ['position', 'branchName', 'branchType', 'action'];

  branchcreateForm: FormGroup;
  branchTypeCtrl: FormControl = new FormControl();
  errorMessages = budgetMessage;

  constructor(private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog,
    private toastr: ToastrService) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.branchcreateForm = this.fb.group({
      district: ['Ahmedabad', Validators.required],
      ddoNo: ['1112200', Validators.required],
      cardex: ['1000121', Validators.required],
      offName: ['Office Name', Validators.required],
      branchType: ['1'],
    });
  }oDashboard() {
    this.router.navigate(['']);
  }

  gotoListing() {
    this.router.navigate(['./budget/fd-group-mapping-list']);
  }
  // Add Details
  addDetails() {
      const p_data = this.dataSource.data;
      p_data.push({
        branchName: null,
        branchType: null,
      });
      this.dataSource.data = p_data;
   }

   // Delete
   deleteRow(index) {
     this.dataSource.data.splice(index, 1);
     this.dataSource = new MatTableDataSource(this.dataSource.data);
   }
}
