import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonListing } from 'src/app/model/common-listing';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { WorkflowDetailsDppfComponent } from '../workflow-details-dppf/workflow-details-dppf.component';
import { SelectionModel } from '@angular/cdk/collections';
import { SentPensionCase } from 'src/app/model/dppf';
@Component({
  selector: 'app-sent-pension-case-listing',
  templateUrl: './sent-pension-case-listing.component.html',
  styleUrls: ['./sent-pension-case-listing.component.css']
})
export class SentPensionCaseListingComponent implements OnInit {
  constructor(private fb: FormBuilder, private router: Router, public dialog: MatDialog) { }
  // Variable
  isTokentable = false;
  pensionreceivedform = 'Sent Online Pension Case - DDO';
  refNuber = 'Reference Number:';
  refNuberDate = ' Date:';
  // Date
  todayDate = Date.now();
  // Form Group Name
  receivedPensionJrClerkCase: FormGroup;
  // table source
  ELEMENT_DATA: SentPensionCase[] = [
    {
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
      workflow: 'Approved',
      from: ' ',
      branchInwardDate: ' ',
      noting: ' '
    },
    {
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
      workflow: 'Approved',
      from: ' ',
      branchInwardDate: ' ',
      noting: ' '
    },
    {
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
      workflow: 'Approved',
      from: ' ',
      branchInwardDate: ' ',
      noting: ' '
    },

    {
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
      workflow: 'Approved',
      from: ' ',
      branchInwardDate: ' ',
      noting: ' '
    }
  ];

  ELEMENT_DATAA: SentPensionCase[] = [
    {
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
      workflow: 'Approved',
      from: ' ',
      branchInwardDate: ' ',
      noting: ' '
    },

    {
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
      workflow: 'Approved',
      from: ' ',
      branchInwardDate: ' ',
      noting: ' '
    },

    {
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
      workflow: 'Approved',
      from: ' ',
      branchInwardDate: ' ',
      noting: ' '
    },

    {
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
      workflow: 'Approved',
      from: ' ',
      branchInwardDate: ' ',
      noting: ' '
    }
  ];

  ELEMENT_DATTA: SentPensionCase[] = [
    {
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
      status: 'Rejected',
      workflow: 'Approved',
      from: ' ',
      branchInwardDate: ' ',
      noting: ' '
    },
    {
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
      status: 'Approved',
      workflow: 'Approved',
      from: ' ',
      branchInwardDate: ' ',
      noting: ' '
    },

    {
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
      status: 'Rejected',
      workflow: 'Approved',
      from: ' ',
      branchInwardDate: ' ',
      noting: ' '
    },

    {
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
      status: 'Approved',
      workflow: 'Approved',
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

  branchName_list: CommonListing[] = [{ value: 1, viewValue: 'PR-1' }];

  districtName_list: CommonListing[] = [{ value: 1, viewValue: 'Gandhinagar' }];

  forwardTo_list: CommonListing[] = [
    { value: '1', viewValue: 'Rajesh Pandita' },
    { value: '2', viewValue: 'Tushar Joshi' },
    { value: '3', viewValue: 'Sanam Zadoo' },
    { value: '4', viewValue: ' Palak patel  ' },
    { value: '5', viewValue: ' Raman joshi  ' }
  ];

  workFlowStatus_list: CommonListing[] = [
    { value: '1', viewValue: 'Received Pension Case' },
    { value: '2', viewValue: 'Sent Pension Case' },
  ];

  pensionCaseInwardType_list: any[] = [
    { value: '1', viewValue: 'All' },
    { value: '2', viewValue: 'Physical' },
    { value: '3', viewValue: 'Online' },
  ];
  // Controls of form
  statusTypeCtrl: FormControl = new FormControl();
  pensionTypeCtrl: FormControl = new FormControl();
  branchNameCtrl: FormControl = new FormControl();
  districtNameCtrl: FormControl = new FormControl();
  forwardTo: FormControl = new FormControl();
  pensionCaseInwardTypeCtrl: FormControl = new FormControl();
  // table source
  dataSource = new MatTableDataSource<SentPensionCase>(
    this.ELEMENT_DATA
  );

  dataSourcee = new MatTableDataSource<SentPensionCase>(
    this.ELEMENT_DATAA
  );

  dataSourcce = new MatTableDataSource<SentPensionCase>(
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
    'workflow',
    'from',
    'branchInwardDate',
    'noting',
    'action'
  ];
  selection = new SelectionModel<any>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.dataSourcee.paginator = this.paginator;
    this.dataSourcee.sort = this.sort;

    this.receivedPensionJrClerkCase = this.fb.group({
      firstName: [''],
      middleName: [''],
      lastName: [''],
      inwardNo: [''],
      inwardFrom: [''],
      retirementFromDate: [''],
      retirementToDate: [''],
      pensionType: [''],
      branchName: [''],
      districtName: [''],
      ppoNo: [''],
      forwardTo: [''],
      pensionCaseInwardType: [''],
      statusTypeCtrl: ['']
    });
  }


  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  clearForm() {
    this.receivedPensionJrClerkCase.reset();
  }
  workflowDetails(): void {
    const dialogRef = this.dialog.open(WorkflowDetailsDppfComponent, {
      width: '1100px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  searhReceivedJrClerkCase() {

  }
  // Selcet value By dropdown
  ontoken(index) {
    if (index.value === '2') {
      this.isTokentable = true;
    } else {
      this.isTokentable = false;
    }
  }
  // navigation route
  gotoObjection() {
    this.router.navigate(['./dppf/objection']);
  }
}
