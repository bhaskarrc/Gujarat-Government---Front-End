import { DataService } from './../../common/data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { CommonListing } from 'src/app/model/common-listing';
import { BranchCreationLisiting } from 'src/app/model/edp';
import { ProceedDialogComponent } from '../proceed-dialog/proceed-dialog.component';

@Component({
  selector: 'app-branch-creation-listing',
  templateUrl: './branch-creation-listing.component.html',
  styleUrls: ['./branch-creation-listing.component.css']
})
export class BranchCreationListingComponent implements OnInit {

  branchCreationListingForm: FormGroup;
  branchTypeCtrl: FormControl = new FormControl();

  // branch type list
  branchTypeList: CommonListing[] = [
    { value: '1', viewValue: 'Budget Branch' },
    { value: '2', viewValue: 'Admin Branch' },
  ];
  // Branch Data source data and declaration Starts
  branchDetailsData: BranchCreationLisiting[] = [
    {
      referenceNumber: '19-20/EDP/BCL/001',
      referenceDate: new Date('12-12-19'),
      district: 'Ahmedabad',
      ddoNo: '4265',
      cardexNo: '5622',
      officeName: 'Collector Office, Ahmedabad',
      branchName: 'Budget',
      branchType: 'Budget Branch',
      transactionStatus: 'Draft',
      lyingWith: 'Mr. ABC',
    },
    {
      referenceNumber: '19-20/EDP/BCL/002',
      referenceDate: new Date('12-25-19'),
      district: 'Ahmedabad',
      ddoNo: '4265',
      cardexNo: '5622',
      officeName: 'Collector Office, Ahmedabad',
      branchName: 'Admin',
      branchType: 'Admin Branch',
      transactionStatus: 'Approved',
      lyingWith: 'Mr. PQR',
    },
  ];
  branchDetailsColumns: string[] = [
    'position',
    'referenceNumber',
    'referenceDate',
    'district',
    'ddoNo',
    'cardexNo',
    'officeName',
    'branchName',
    'branchType',
    'transactionStatus',
    'lyingWith',
    'action',
  ];
  branchDetailsDataSource: MatTableDataSource<BranchCreationLisiting> = new MatTableDataSource(this.branchDetailsData);
  paginator: MatPaginator;
  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.branchDetailsDataSource.paginator = this.paginator;
  }
  // Branch Data source data and declaration Ends

  constructor(private fb: FormBuilder, private dialog: MatDialog, private router: Router, private data: DataService) { }

  ngOnInit() {
    this.branchCreationListingForm = this.fb.group({
      referenceNumber: [''],
      referenceFromDate: [''],
      referenceToDate: [''],
      branchName: [''],
      branchType: [''],
    });
  }
  onDelete(i) {
    this.branchDetailsDataSource.data.splice(i, 1);
    this.branchDetailsDataSource.data = this.branchDetailsDataSource.data;
  }

  gotoCreation(data) {
    this.data.setOption('fromBranchCreationListing', data);
    this.router.navigate(['./edp/branch-creation']);
  }

  // On close to open closeDialog
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
}

