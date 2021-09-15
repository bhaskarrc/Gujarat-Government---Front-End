import { NdcRequestListing } from './../../model/dppf-hba';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { ListValue } from 'src/app/model/common-grant';

@Component({
  selector: 'app-ndc-req-listing',
  templateUrl: './ndc-req-listing.component.html',
  styleUrls: ['./ndc-req-listing.component.css']
})
export class NdcReqListingComponent implements OnInit {
  // Date
  todayDate = Date.now();
  // Form COntrol
  districtCtrl: FormControl = new FormControl();
  // List
  district_list: ListValue[] = [
    { value: '1', viewValue: 'Vadodara' },
    { value: '2', viewValue: 'Surat' },
    { value: '3', viewValue: 'Ahmedabad' },
    { value: '4', viewValue: 'Gandhinagar' }
  ];
  statusList: ListValue[] = [
    { value: '1', viewValue: 'Approval in Progress' },
    { value: '2', viewValue: 'Send Back' },
    { value: '3', viewValue: 'Approved' },
    { value: '3', viewValue: 'Rejected' },
  ];
  ndcRequestListingData: NdcRequestListing[] = [
    {
      accNo: '111212',
      district: 'Gandhinagar',
      doj: '01-May-2020',
      empClass: 'Class 1',
      empNo: '2020002',
      loanAmt: '10000.00',
      name: 'A B Patel',
      status: 'Approval in Progress',
      workFlowStatus: '',
    },
    {
      accNo: '111212',
      district: 'Vadodara',
      doj: '02-May-2020',
      empClass: 'Class 2',
      empNo: '2020001',
      loanAmt: '10000.00',
      name: 'A C Patel',
      status: 'Approval in Progress',
      workFlowStatus: '',
    },
    {
      accNo: '111212',
      district: 'Gandhinagar',
      doj: '03-May-2020',
      empClass: 'Class 3',
      empNo: '2020003',
      loanAmt: '10000.00',
      name: 'A D Patel',
      status: 'Approved',
      workFlowStatus: '',
    },
  ];

  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder) { }
  // Form group
  savedNdcCaseForm: FormGroup;
  statusCtrl: FormControl = new FormControl();
  workFlowStatusCtrl: FormControl = new FormControl();
  // Table Source
  dataSource = new MatTableDataSource<NdcRequestListing>(this.ndcRequestListingData);
  displayedColumns: string[] = [
    'srno', 'accNo', 'name', 'empNo', 'empClass', 'doj', 'loanAmt', 'district', 'status', 'workFlowStatus', 'action'
  ];

  ngOnInit() {
    this.savedNdcCaseForm = this.fb.group({
      accountNo: [''],
      empNo: [''],
      firstName: [''],
      lastName: [''],
      middleName: [''],
      ddo: [''],
      cardex: [''],
      district: [''],
      status: [''],
      workFlowStatus: [''],

    });
  }
  // clears form
  clearForm() {
    this.savedNdcCaseForm.reset();
  }
  // routing
  navigate() {
    this.router.navigate(['./dppf-hba/ndc-request']);
  }
}
