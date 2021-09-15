import { Router } from '@angular/router';
import { CommonListing } from './../../model/common-listing';
import { MatDialog, MatPaginator, MatTableDataSource } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProceedDialogComponent } from '../proceed-dialog/proceed-dialog.component';
import { DataService } from 'src/app/common/data.service';
import { BranchMappingAndTransferListing } from 'src/app/model/edp';

@Component({
  selector: 'app-branch-mapping-and-transfer-listing',
  templateUrl: './branch-mapping-and-transfer-listing.component.html',
  styleUrls: ['./branch-mapping-and-transfer-listing.component.css']
})
export class BranchMappingAndTransferListingComponent implements OnInit {

  branchMappingAndTransferListingForm: FormGroup;
  branchTypeCtrl: FormControl = new FormControl();
  statusCtrl: FormControl = new FormControl();
  requstTypeCtrl: FormControl = new FormControl();

  // branch type list
  branchTypeList: CommonListing[] = [
    { value: '1', viewValue: 'Budget Branch' },
    { value: '2', viewValue: 'Admin Branch' },
  ];

  // Status list
  statusList: CommonListing[] = [
    { value: '1', viewValue: 'Draft' },
    { value: '2', viewValue: 'Approved' },
  ];

  // Request type list
  requstTypeList: CommonListing[] = [
    { value: '1', viewValue: 'Branch Mapping' },
    { value: '2', viewValue: 'Branch Transfer' },
  ];

  // branch Mapping And Transfer source data and declaration Starts
  branchMappingAndTransferData: BranchMappingAndTransferListing[] = [
    {
      referenceNumber: '19-20/EDP/BCL/001',
      referenceDate: new Date('12-12-19'),
      district: 'Ahmedabad',
      ddoNo: '4265',
      cardexNo: '5622',
      officeName: 'Collector Office, Ahmedabad',
      requestType: 'Budget Branch',
      fromEmployeeNumber: '1000000001',
      fromPostName: 'Accounts Officer -2',
      toEmployeeNumber: '1000000021',
      toPostName: 'Accounts Officer -2',
      lyingWith: 'Mr. ABC',
      transactionStatus: 'Draft',
    },
    {
      referenceNumber: '19-20/EDP/BCL/002',
      referenceDate: new Date('12-25-19'),
      district: 'Ahmedabad',
      ddoNo: '4265',
      cardexNo: '5622',
      officeName: 'Collector Office, Ahmedabad',
      requestType: 'Admin Branch',
      fromEmployeeNumber: '1000000055',
      fromPostName: 'Accounts Officer -2',
      toEmployeeNumber: '1000000026',
      toPostName: 'Accounts Officer -2',
      lyingWith: 'Mr. PQR',
      transactionStatus: 'Approved',
    },
  ];
  branchMappingAndTransferColumns: string[] = [
    'position',
    'referenceNumber',
    'referenceDate',
    'district',
    'ddoNo',
    'cardexNo',
    'officeName',
    'requestType',
    'fromEmployeeNumber',
    'fromPostName',
    'toEmployeeNumber',
    'toPostName',
    'lyingWith',
    'transactionStatus',
    'action',
  ];
  branchMappingAndTransferDataSource: MatTableDataSource<BranchMappingAndTransferListing>
    = new MatTableDataSource(this.branchMappingAndTransferData);
  paginator: MatPaginator;
  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.branchMappingAndTransferDataSource.paginator = this.paginator;
  }
  // Branch Data source data and declaration Ends

  constructor(private fb: FormBuilder, private dialog: MatDialog, private router: Router, private data: DataService) { }

  ngOnInit() {
    this.branchMappingAndTransferListingForm = this.fb.group({
      referenceNumber: [''],
      referenceFromDate: [''],
      referenceToDate: [''],
      employeeNumber: [''],
      employeeName: [''],
      status: [''],
      requstType: [''],
    });
  }

  onDelete(i) {
    this.branchMappingAndTransferDataSource.data.splice(i, 1);
    this.branchMappingAndTransferDataSource.data = this.branchMappingAndTransferDataSource.data;
  }

  gotoCreation(data) {
    this.data.setOption('fromBranchMappingAndTransferListing', data);
    this.router.navigate(['./edp/branch-mapping-and-transfer']);
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
