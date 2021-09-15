import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { CommonListing } from 'src/app/model/common-listing';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { ReceivedOnlinePensioncase } from 'src/app/model/dppf';

@Component({
  selector: 'app-received-online-pension-case',
  templateUrl: './received-online-pension-case.component.html',
  styleUrls: ['./received-online-pension-case.css']
})
export class ReceivedOnlinePensionCaseComponent implements OnInit {
  selection = new SelectionModel<ReceivedOnlinePensioncase>(true, []);
  constructor(private fb: FormBuilder, private router: Router, public dialog: MatDialog) { }
  // Variable
  pensionreceivedform = 'Received Online Pension Cases';
  refNuber = 'Reference Number:';
  refNuberDate = ' Date:';
  // Date
  todayDate = Date.now();
  receivedPensionJrClerkCase: FormGroup;
  // Table Source

  ELEMENT_DATA: ReceivedOnlinePensioncase[] = [
    {
      checkbox: false,
      referenceNo: '19-20/DPPF/OPC/001',
      referenceDate: '30-Jul-2020',
      inwardNo: null,
      inwardDate: '',
      inwType: 'Pension Case',
      ppoNo_scNo: ' PR-1/09/2020/355853',
      employeeID: 1234567891,
      name: 'Sanjaysingh Sisodia',
      retDate: '30-Sep-2020',
      pnsnType: 'Retiring',
      docCount: 1,
      revNo: 0,
      branchName: 'PR-1',
      status: 'CLOSED',
      workflow: 'Approved',
      from: ' ',
      branchInwardDate: ' ',
    },
    {
      checkbox: false,
      referenceNo: '19-20/DPPF/OPC/002',
      referenceDate: '27-May-2020',
      inwardNo: null,
      inwardDate: '',
      inwType: 'Pension Case',
      ppoNo_scNo: ' PR-1/09/2020/355853',
      employeeID: 1234567892,
      name: 'Rashi Raina',
      retDate: '30-Oct-2020',
      pnsnType: 'Compensation',
      docCount: 1,
      revNo: 0,
      branchName: 'PR-1',
      status: 'FORWARD',
      workflow: 'Approved',
      from: ' ',
      branchInwardDate: ' ',
    },
    {
      checkbox: false,
      referenceNo: '19-20/DPPF/OPC/003',
      referenceDate: '17-Mar-2020',
      inwardNo: null,
      inwardDate: ' ',
      inwType: 'Pension Case',
      ppoNo_scNo: ' PR-1/09/2020/355853',
      employeeID: 1234567891,
      name: 'Ridhima Patel',
      retDate: '30-Nov-2020',
      pnsnType: 'Family Lost',
      docCount: 1,
      revNo: 0,
      branchName: 'PR-1',
      status: 'CLOSED',
      workflow: 'Approved',
      from: ' ',
      branchInwardDate: ' ',
    },

    {
      checkbox: false,
      referenceNo: '19-20/DPPF/OPC/004',
      referenceDate: '5-Jun-2020',
      inwardNo: null,
      inwardDate: '',
      inwType: 'Pension Case',
      ppoNo_scNo: ' PR-1/09/2020/355853',
      employeeID: 1234567891,
      name: 'Ridhima Patel',
      retDate: '26-Jan-2020',
      pnsnType: 'Absorption',
      docCount: 1,
      revNo: 0,
      branchName: 'PR-1',
      status: 'FORWARD',
      workflow: 'Approved',
      from: ' ',
      branchInwardDate: ' ',
    }
  ];
  // List

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
  branch_list: any[] = [

    { value: '1', viewValue: 'PR-1' },
    { value: '2', viewValue: 'PR-2' },
    { value: '3', viewValue: 'PR-3' },
    { value: '4', viewValue: 'PR-4' },
    { value: '5', viewValue: 'PR-5' },
    { value: '6', viewValue: 'PR-6' },
    { value: '7', viewValue: 'PR-7' }

  ];
  inwardType_list: CommonListing[] = [
    { value: '1', viewValue: 'Pension Case' },
    { value: '2', viewValue: 'Service Certificate' },
    { value: '3', viewValue: 'Provisional Pension Case' },
    { value: '4', viewValue: ' Other State Pension Cases  ' },
    { value: '5', viewValue: '  NPS Gratuity  ' }
  ];

  workFlowStatus_list: CommonListing[] = [
    { value: '1', viewValue: 'Approval In Progress' },
    { value: '2', viewValue: 'Send Back ' },
    { value: '3', viewValue: 'Approved' },
    { value: '4', viewValue: 'Rejected' },
  ];
  todaysDate = new Date();
  inwardNoVal = 2810;
  // FormControl
  pensionTypeCtrl: FormControl = new FormControl();
  branchNameCtrl: FormControl = new FormControl();
  districtNameCtrl: FormControl = new FormControl();
  inwardTypeCtrl: FormControl = new FormControl();
  receivedCasType: FormControl = new FormControl();
  statusTypeCtrl: FormControl = new FormControl();
  // Table Source
  dataSource = new MatTableDataSource<ReceivedOnlinePensioncase>(
    this.ELEMENT_DATA
  );

  displayedColumns: any[] = [
    'checkbox',
    'serialNo',
    'referenceNo',
    'referenceDate',
    'inwardNo',
    'inwardDate',
    'inwType',
    'ppoNo_scNo',
    'employeeID',
    'name',
    'retDate',
    'pnsnType',
    'docCount',
    'revNo',
    'branchName',
    'status',
    'workflow',
    'from',
    'branchInwardDate',
    // 'action'
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.receivedPensionJrClerkCase = this.fb.group({
      inwardNo: [''],
      inwardFrom: [''],
      inwardTo: [''],
      inwardType: [''],
      retirementFromDate: [''],
      retirementToDate: [''],
      pensionType: [''],
      branchName: [''],
      districtName: [''],
      ppoNo: [''],
      inwardDate: [''],
      status: [''],
      firstName: [''],
      middleName: [''],
      lastName: [''],
      branchNameL: ['1']
    });
  }

  clearForm() {
    this.receivedPensionJrClerkCase.reset();
  }
  resetForm() { }

  onReceive(): void {
    let selectedData = [];
    selectedData = this.dataSource.data.filter(item => {
      return this.selection.isSelected(item);
    });
    console.log('Select :', selectedData);

    selectedData.forEach(event => {
      if (event.inwardNo === null) {
        event.inwardNo = '00' + (this.inwardNoVal++) + '/02/2020',
          event.inwardDate = new Date();
      }
    });
  }
  checkboxLabel(row?: ReceivedOnlinePensioncase): string {
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
  // Navigation Route
  gotoObjection() {
    this.router.navigate(['./dppf/objection']);
  }

}
