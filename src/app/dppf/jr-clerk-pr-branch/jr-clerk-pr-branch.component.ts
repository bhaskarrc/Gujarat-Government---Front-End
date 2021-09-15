import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { CommonListing } from 'src/app/model/common-listing';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { RecievedCasesJrClerk } from 'src/app/model/dppf';



@Component({
  selector: 'app-fwd-jr-clerk-pr-branch-dialog',
  templateUrl: './fwd-jr-clerk-pr-branch-dialog.html',
})
export class FwdJrClerkPrBranchDialogComponent implements OnInit {
  userName: string;
  actionForm: FormGroup;
  actionCtrl: FormControl = new FormControl();
  branchNameCtrl: FormControl = new FormControl();
  additionalText: FormControl = new FormControl();
  isOther = false;
  action_list: CommonListing[] = [
    { value: '1', viewValue: 'Forward' },
    { value: '2', viewValue: 'Outward' },
    { value: '3', viewValue: 'Forward to other branches' },
  ];
  branchName_list: CommonListing[] = [
    { value: '1', viewValue: 'PR-1' },
    { value: '2', viewValue: 'PR-2' },
    { value: '3', viewValue: 'PR-3' },
    { value: '4', viewValue: 'PR-4' },
    { value: '5', viewValue: 'PR-5' },
    { value: '6', viewValue: 'PR-6' },
    { value: '7', viewValue: 'PR-7' },
    { value: '8', viewValue: 'PR-8' },
  ];

  private _onDestroy = new Subject<void>();

  constructor(
    private fb: FormBuilder,

    private dialogRef: MatDialogRef<FwdJrClerkPrBranchDialogComponent>) { }

  ngOnInit(): void {
    this.actionFormData();
  }

  selectAction(event) {
    if (event === '3') {
      this.isOther = true;
    } else {
      this.isOther = false;
    }
  }
  onNoClick() {
    this.dialogRef.close('close');
  }
  actionFormData() {

    this.actionForm = this.fb.group({
      action: [''],
      branchName: [''],
      user: [''],
    });
  }

  changeUser() {
    this.userName = 'Rajesh Pandita';
  }


}

@Component({
  selector: 'app-jr-clerk-pr-branch',
  templateUrl: './jr-clerk-pr-branch.component.html',
  styleUrls: ['./jr-clerk-pr-branch.component.css']
})
export class JrClerkPrBranchComponent implements OnInit {
  selection = new SelectionModel<RecievedCasesJrClerk>(true, []);
  constructor(private fb: FormBuilder, private router: Router, public dialog: MatDialog, private toaster: ToastrService) { }
  // Variable
  pensionJrClerkBranchForm = 'Jr Clerk PR Branch';
  refNuber = 'Reference Number:';
  refNuberDate = ' Date:';
  // Date
  todayDate = Date.now();
  // Form Group
  receivedPensionJrClerkCase: FormGroup;
  // Lists
  ELEMENT_DATA: RecievedCasesJrClerk[] = [
    {
      checkbox: false,
      inwardNo: '002810/02/2020',
      inwardDate: '06-Feb-2020',
      inwType: 'Pension Case',
      ppoNo_scNo: ' PR-1/09/2020/355853',
      employeeID: 1234567891,
      name: 'Sanjaysingh Sisodia',
      forwardTo: [''],
      retDate: '30-Sep-2020',
      pnsnType: 'Retiring',
      docCount: 1,
      revNo: 0,
      branchName: 'PR-1',
      status: 'CLOSED',
      from: ' ',
      branchInwardDate: ' ',
      noting: ' '
    },
    {
      checkbox: false,
      inwardNo: '002710/01/2020',
      inwardDate: '02-Mar-2020',
      inwType: 'Pension Case',
      ppoNo_scNo: ' PR-1/09/2020/355853',
      employeeID: 1234567892,
      name: 'Rashi Raina',
      forwardTo: [''],
      retDate: '30-Oct-2020',
      pnsnType: 'Compensation',
      docCount: 1,
      revNo: 0,
      branchName: 'PR-1',
      status: 'FORWARD',
      from: ' ',
      branchInwardDate: ' ',
      noting: ' '
    },
    {
      checkbox: false,
      inwardNo: '002710/01/2020',
      inwardDate: '02-Mar-2020',
      inwType: 'Pension Case',
      ppoNo_scNo: ' PR-1/09/2020/355853',
      employeeID: 1234567891,
      name: 'Ridhima Patel',
      forwardTo: [''],
      retDate: '30-Nov-2020',
      pnsnType: 'Family Lost',
      docCount: 1,
      revNo: 0,
      branchName: 'PR-1',
      status: 'CLOSED',
      from: ' ',
      branchInwardDate: ' ',
      noting: ' '
    },

    {
      checkbox: false,
      inwardNo: '002710/01/2020',
      inwardDate: '02-Mar-2020',
      inwType: 'Pension Case',
      ppoNo_scNo: ' PR-1/09/2020/355853',
      employeeID: 1234567891,
      name: 'Ridhima Patel',
      forwardTo: [''],
      retDate: '26-Jan-2020',
      pnsnType: 'Absorption',
      docCount: 1,
      revNo: 0,
      branchName: 'PR-1',
      status: 'FORWARD',
      from: ' ',
      branchInwardDate: ' ',
      noting: ' '
    }
  ];

  ELEMENT_DATAA: RecievedCasesJrClerk[] = [
    {
      checkbox: false,
      inwardNo: '002710/01/2020',
      inwardDate: '02-Mar-2020',
      inwType: 'Pension Case',
      ppoNo_scNo: ' PR-1/09/2020/355853',
      employeeID: 1234567892,
      name: 'Rashi Raina',
      forwardTo: [''],
      retDate: '30-Oct-2020',
      pnsnType: 'Compensation',
      docCount: 1,
      revNo: 0,
      branchName: 'PR-1',
      status: 'FORWARD',
      from: ' ',
      branchInwardDate: ' ',
      noting: ' '
    },

    {
      checkbox: false,
      inwardNo: '002710/01/2020',
      inwardDate: '02-Mar-2020',
      inwType: 'Pension Case',
      ppoNo_scNo: ' PR-1/09/2020/355853',
      employeeID: 1234567891,
      name: 'Ridhima Patel',
      forwardTo: [''],
      retDate: '30-Nov-2020',
      pnsnType: 'Family Lost',
      docCount: 1,
      revNo: 0,
      branchName: 'PR-1',
      status: 'CLOSED',
      from: ' ',
      branchInwardDate: ' ',
      noting: ' '
    },

    {
      checkbox: false,
      inwardNo: '002710/01/2020',
      inwardDate: '02-Mar-2020',
      inwType: 'Pension Case',
      ppoNo_scNo: ' PR-1/09/2020/355853',
      employeeID: 1234567891,
      name: 'Ridhima Patel',
      forwardTo: [''],
      retDate: '26-Jan-2020',
      pnsnType: 'Absorption',
      docCount: 1,
      revNo: 0,
      branchName: 'PR-1',
      status: 'FORWARD',
      from: ' ',
      branchInwardDate: ' ',
      noting: ' '
    },

    {
      checkbox: false,
      inwardNo: '002810/02/2020',
      inwardDate: '06-Feb-2020',
      inwType: 'Pension Case',
      ppoNo_scNo: ' PR-1/09/2020/355853',
      employeeID: 1234567891,
      name: 'Sanjaysingh Sisodia',
      forwardTo: [''],
      retDate: '30-Sep-2020',
      pnsnType: 'Retiring',
      docCount: 1,
      revNo: 0,
      branchName: 'PR-1',
      status: 'CLOSED',
      from: ' ',
      branchInwardDate: ' ',
      noting: ' '
    }
  ];

  ELEMENT_DATTA: RecievedCasesJrClerk[] = [
    {
      checkbox: false,
      inwardNo: '002710/01/2020',
      inwardDate: '02-Mar-2020',
      inwType: 'Pension Case',
      ppoNo_scNo: ' PR-1/09/2020/355853',
      employeeID: 1234567891,
      name: 'Gitesh Patel',
      forwardTo: [''],
      retDate: '30-Nov-2020',
      pnsnType: 'Family Lost',
      docCount: 1,
      revNo: 0,
      branchName: 'PR-1',
      status: 'CLOSED',
      from: ' ',
      branchInwardDate: ' ',
      noting: ' '
    },
    {
      checkbox: false,
      inwardNo: '002710/01/2020',
      inwardDate: '02-Mar-2020',
      inwType: 'Pension Case',
      ppoNo_scNo: ' PR-1/09/2020/355853',
      employeeID: 1234567892,
      name: 'Sakshi Bakaya',
      forwardTo: [''],
      retDate: '30-Oct-2020',
      pnsnType: 'Compensation',
      docCount: 1,
      revNo: 0,
      branchName: 'PR-1',
      status: 'FORWARD',
      from: ' ',
      branchInwardDate: ' ',
      noting: ' '
    },

    {
      checkbox: false,
      inwardNo: '002710/01/2020',
      inwardDate: '02-Mar-2020',
      inwType: 'Pension Case',
      ppoNo_scNo: ' PR-1/09/2020/355853',
      employeeID: 1234567891,
      name: 'Tushar Patel',
      forwardTo: [''],
      retDate: '26-Jan-2020',
      pnsnType: 'Absorption',
      docCount: 1,
      revNo: 0,
      branchName: 'PR-1',
      status: 'FORWARD',
      from: ' ',
      branchInwardDate: ' ',
      noting: ' '
    },

    {
      checkbox: false,
      inwardNo: '002810/02/2020',
      inwardDate: '06-Feb-2020',
      inwType: 'Pension Case',
      ppoNo_scNo: ' PR-1/09/2020/355853',
      employeeID: 1234567891,
      name: 'Sanjaysingh Sisodia',
      forwardTo: [''],
      retDate: '30-Sep-2020',
      pnsnType: 'Retiring',
      docCount: 1,
      revNo: 0,
      branchName: 'PR-1',
      status: 'CLOSED',
      from: ' ',
      branchInwardDate: ' ',
      noting: ' '
    }
  ];

  pensionType_list: CommonListing[] = [
    { value: '1', viewValue: ' Retiring' },
    { value: '2', viewValue: 'Absorption' },
    { value: '3', viewValue: ' Compensation' },
    { value: '4', viewValue: 'Compassionate' },
    { value: '5', viewValue: ' Family' },
    { value: '6', viewValue: ' Family Lost' },
    { value: '7', viewValue: ' Invalid' },
    { value: '8', viewValue: 'Other' },
    { value: '9', viewValue: ' Superannuation' },
    { value: '10', viewValue: 'Voluntary' },
    { value: '11', viewValue: ' Wound and Injury' }
  ];

  classReceivedCasType: CommonListing[] = [
    { value: 1, viewValue: 'Forward' },
    { value: 2, viewValue: 'Outward' },
    { value: 3, viewValue: 'Forward To Other Branch' }
  ];

  branchName_list: CommonListing[] = [{ value: 1, viewValue: 'PR-1' }];

  districtName_list: CommonListing[] = [{ value: 1, viewValue: 'Gandhinagar' }];

  inwardType_list: CommonListing[] = [
    { value: '1', viewValue: 'Pension Case' },
    { value: '2', viewValue: 'Service Certificate' },
    { value: '3', viewValue: 'Provisional Pension Case' },
    { value: '4', viewValue: ' Other State Pension Cases  ' },
    { value: '5', viewValue: '  NPS Gratuity  ' }
  ];

  workFlowStatus_list: CommonListing[] = [
    { value: '1', viewValue: 'Received Pension Case' },
    { value: '2', viewValue: 'Send Pension Case' },

  ];

  forwardTo_list: CommonListing[] = [
    { value: '1', viewValue: 'Rajesh Pandita' },
    { value: '2', viewValue: 'Tushar Joshi' },
    { value: '3', viewValue: 'Sanam Zadoo' },
    { value: '4', viewValue: ' Palak patel  ' },
    { value: '5', viewValue: ' Raman joshi  ' }
  ];

  todaysDate = new Date();
  pensionTypeCtrl: FormControl = new FormControl();
  branchNameCtrl: FormControl = new FormControl();
  districtNameCtrl: FormControl = new FormControl();
  inwardTypeCtrl: FormControl = new FormControl();
  statusTypeCtrl: FormControl = new FormControl();
  forwardTo: FormControl = new FormControl();
  dataSource = new MatTableDataSource<RecievedCasesJrClerk>(
    this.ELEMENT_DATA
  );

  dataSourcee = new MatTableDataSource<RecievedCasesJrClerk>(
    this.ELEMENT_DATAA
  );

  dataSourcce = new MatTableDataSource<RecievedCasesJrClerk>(
    this.ELEMENT_DATTA
  );

  displayedColumns: any[] = [
    'select',
    'serialNo',
    'inwardNo',
    'inwardDate',
    'inwType',
    'ppoNo_scNo',
    'employeeID',
    'name',
    'retDate',
    'forwardTo',
    'pnsnType',
    'docCount',
    'revNo',
    'branchName',
    'status',
    'from',
    'branchInwardDate',
    'noting',
    'action'
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.dataSourcee.paginator = this.paginator;
    this.dataSourcee.sort = this.sort;

    this.receivedPensionJrClerkCase = this.fb.group({
      employeeNo: [''],
      firstName: [''],
      middleName: [''],
      surname: [''],
      inwardNo: [''],
      inwardFrom: [''],
      inwardTo: [''],
      inwardType: [''],
      retirementDate: [''],
      pensionType: [''],
      branchName: [''],
      districtName: [''],
      ppoNo: [''],
      forwardTo: [''],
      inwardDate: [''],
      status: [''],
    });
  }

  // routing
  gotoObjection() {
    this.router.navigate(['./dppf/objection']);
  }

  // shows toaster message
  submitData() {
    this.toaster.success('Pension case forwarded successfully to Auditor');
  }

  clearForm() {
    this.receivedPensionJrClerkCase.reset();
  }
  resetForm() { }

  // checkbox related methods
  checkboxLabel(row?: RecievedCasesJrClerk): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} `;
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }
}

