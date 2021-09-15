import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { WorkflowModel } from '../model/workflow-re-assignment';
import { CommonDirective } from '../common/directive/validation.directive';
import { Router } from '@angular/router';
import { workflowReAssignmentMessage } from '../common/error-message/common-message.constants';
import { CommonListing } from '../model/common-listing';

@Component({
  selector: 'app-workflow-re-assignment',
  templateUrl: './workflow-re-assignment.component.html',
  styleUrls: ['./workflow-re-assignment.component.css']
})


export class WorkflowReAssignmentComponent implements OnInit {
  workflowReAssignmentForm: FormGroup;

  module_list: CommonListing[] = [
    { value: '1', viewValue: 'EMD' },
    { value: '2', viewValue: 'Cheque Inventory' }
  ];
  emd_subModule_list: CommonListing[] = [
    { value: '1', viewValue: 'EMD Master' },
    { value: '2', viewValue: 'EMD Challan Posting ' },
    { value: '3', viewValue: 'Posted EMD Challan-HA' },
    { value: '4', viewValue: 'Posted EMD Challan' },
    { value: '5', viewValue: 'View All Posted Challan' },
    { value: '6', viewValue: 'Record Room-View All Posted Challan' },
    { value: '7', viewValue: 'EMD Voucher Posting Details' },
    { value: '8', viewValue: 'Posted EMD Voucher' },
    { value: '9', viewValue: 'Posted EMD Voucher-HA' },
    { value: '10', viewValue: 'View All Posted Voucher' },
    { value: '11', viewValue: 'Record Room-View All Posted Voucher' }
  ];
  ci_subModule_list: CommonListing[] = [
    { value: '1', viewValue: 'CTS Account Mapping' },
    { value: '2', viewValue: 'Yearly Indent Preparation Request' },
    { value: '3', viewValue: 'Regular Indent Preparation' },
    { value: '4', viewValue: 'CTS Cheque Book Receipt from Bank' },
    { value: '5', viewValue: 'Cheque Book Issue' },
    { value: '6', viewValue: 'Revert Issued Cheque Book' },
    { value: '7', viewValue: 'Cancel Cheque Book' },
  ];
  menu_list: CommonListing[] = [];
  user_list: CommonListing[] = [
    { value: '1', viewValue: 'A' },
    { value: '2', viewValue: 'B' },
    { value: '3', viewValue: 'C' }];
  post_list: CommonListing[] = [
    { value: '1', viewValue: 'Head Accountant' }
  ];
  workflowRole_list: CommonListing[] = [
    { value: '1', viewValue: 'Approver' },
    { value: '2', viewValue: 'Verifier' },
    { value: '3', viewValue: 'Creator' }
  ];
  moduleCtrl: FormControl = new FormControl();
  subModuleCtrl: FormControl = new FormControl();
  menuCtrl: FormControl = new FormControl();
  userCtrl: FormControl = new FormControl();
  postCtrl: FormControl = new FormControl();
  workflowRoleCtrl: FormControl = new FormControl();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  Element_Data: WorkflowModel[] = [
    {
      menu: 'Regular Indent Preparation', refNo: '19-20/BUD/RE/001',
      workflowStatus: 'Pending for Approval', pendingSince: '19-Dec-2019',
      transactionInitiationDate: '12-Dec-2019', transactionStatus: 'Forwarded to Approver'
    },
    {
      menu: 'Revert Issued Cheque Book', refNo: '19-20/BUD/RE/002',
      workflowStatus: 'Pending for Approval', pendingSince: '19-Dec-2019',
      transactionInitiationDate: '12-Dec-2019', transactionStatus: 'Forwarded to Approver'
    },
    {
      menu: 'EMD Challan Posting ', refNo: '19-20/BUD/RE/003',
      workflowStatus: 'Pending for Approval', pendingSince: '19-Dec-2019',
      transactionInitiationDate: '15-Nov-2019', transactionStatus: 'Forwarded to Approver'
    }
  ];
  dataSource = new MatTableDataSource<WorkflowModel>(this.Element_Data);
  displayedColumns: string[] = ['checkbox', 'srno', 'menu', 'refNo', 'workflowStatus', 'transactionStatus',
    'transactionInitiationDate', 'pendingSince'];
  directiveObj = new CommonDirective(this.route);

  errorMessage = workflowReAssignmentMessage;

  constructor(private fb: FormBuilder, private route: Router) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;


    this.workflowReAssignmentForm = this.fb.group({
      office: [{ value: '', disabled: true }],
      module: [{ value: '', disabled: false }],
      subModule: [{ value: '', disabled: false }],
      menu: [{ value: '', disabled: false }],
      user: [{ value: '', disabled: false }],
      post: [{ value: '', disabled: false }],
      workflowRole: [{ value: '', disabled: false }],
      refNo: [{ value: '', disabled: false }],
      fromDate: [{ value: '', disabled: false }],
      toDate: [{ value: '', disabled: false }]
    });
  }
  selectUser(user) {
    this.workflowReAssignmentForm.patchValue({
      post: '1',
    });
  }
}
