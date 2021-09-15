import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { CommonListing } from 'src/app/model/common-listing';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { WorkflowDetailsDppfComponent } from '../workflow-details-dppf/workflow-details-dppf.component';
import { OutwardCases } from 'src/app/model/dppf';
import { Router } from '@angular/router';
import { DataService } from 'src/app/common/data.service';

@Component({
  selector: 'app-outward-pension-cases',
  templateUrl: './outward-pension-cases.component.html',
  styleUrls: ['./outward-pension-cases.component.css']
})
export class OutwardPensionCasesComponent implements OnInit {

  constructor(private fb: FormBuilder, public dialog: MatDialog, private router: Router, private dataService: DataService) { }
  // Date
  todayDate = Date.now();
  // Variable
  outwardPension = false;
  gtrfourtyFout = 'Form GTR 44 - Detailed Bill of Contingent Charges of Fully vouched contingent charges';
  refNuber = 'Reference Number:';
  refNuberDate = 'Reference Date:';
  isMergeEnable: Boolean = false;
  istransferBranch: Boolean = false;
  // Form Group
  outwardPensionCase: FormGroup;
  // TAble Source
  ELEMENT_DATA: OutwardCases[] = [
    {
      checkbox: false,
      inwardNo: '000523/12/2008', inwardDate: '29-Dec-2008', inwType: 'PC', ppoNo_scNo: ' PR-2/02/2009/000191',
      employeeID: 1234567891, name: 'SMT. ANSUYA SHAH  ', retDate: '01-Feb-2009', pnsnType: 'Sup', docCount: 1, revNo: 0,
      branchName: 'PR-2', status: 'APPROVE', workflow: 'Approved', from: 'P J Joshi'
    },
  ];
  ELEMENT_DATA2: any[] = [
    {
      checkbox: false, outwardNo: '000523/12/2008', outwardDate: '29-Dec-2008',
      inwardNo: '000523/12/2008', inwardDate: '29-Dec-2008', inwType: 'PC', ppoNo_scNo: ' PR-2/02/2009/000191',
      employeeID: 1234567891, name: 'SMT. ANSUYA SHAH  ', retDate: '01-Feb-2009', pnsnType: 'Sup', docCount: 1, revNo: 0,
      branchName: 'PR-2', status: 'APPROVE', workflow: 'Approved', from: 'P J Joshi'
    },
  ];
  // Lists
  pensionType_list: CommonListing[] = [
    { value: 1, viewValue: 'Sup' },
    { value: 2, viewValue: 'Fam' },
  ];

  branchName_list: CommonListing[] = [
    { value: 1, viewValue: 'PR-1' },
  ];

  districtName_list: CommonListing[] = [
    { value: 1, viewValue: 'Gandhinagar' },
  ];

  inwardType_list: CommonListing[] = [
    { value: 1, viewValue: 'PC' },
  ];

  pensionCaseInwardType_list: any[] = [
    { value: '1', viewValue: 'All' },
    { value: '2', viewValue: 'Physical' },
    { value: '3', viewValue: 'Online' },
  ];

  workFlowStatus_list: CommonListing[] = [
    { value: '1', viewValue: 'Received Pension Case' },
    { value: '2', viewValue: 'Outwarded  Pension Case ' },
  ];
  // Form Control
  pensionTypeCtrl: FormControl = new FormControl();
  branchNameCtrl: FormControl = new FormControl();
  districtNameCtrl: FormControl = new FormControl();
  inwardTypeCtrl: FormControl = new FormControl();
  statusCtrl: FormControl = new FormControl();
  pensionCaseInwardTypeCtrl: FormControl = new FormControl();
  // Table Source
  dataSource = new MatTableDataSource<OutwardCases>(this.ELEMENT_DATA);
  dataSource2 = new MatTableDataSource<OutwardCases>(this.ELEMENT_DATA2);
  checkbox;
  displayedColumns: any[] = [
    'checkbox',
    'serialNo',
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
    'action'];
  displayedColumns2: any[] = [
    'checkbox',
    'serialNo',
    'outwardNo',
    'outwardDate',
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
    'action'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.outwardPensionCase = this.fb.group({
      inwardNo: [''],
      inwardFrom: [''],
      inwardTo: [''],
      inwardType: [''],
      outwardFromDate: [''],
      outwardToDate: [''],
      retirementFromDate: [''],
      retirementToDate: [''],
      pensionType: [''],
      pensionCaseInwardType: [''],
      branchName: [''],
      districtName: [''],
      ppoNo: [''],
      firstName: [''],
      middleName: [''],
      lastName: [''],
      outWard: [''],
      status: [''],
      outwardTo: [''],
      outwardFrom: [''],

    });
  }

  clearForm() {
    this.outwardPensionCase.reset();
  }


  searchOutwardPensionCase() { }
  onClickInwardNo() { } // function for inward no. hyperlink
  // Work Flow Popup
  workflowDetails(): void {
    const dialogRef = this.dialog.open(WorkflowDetailsDppfComponent, {
      width: '1100px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  resetForm() {

  }
  selectAll() {
    this.dataSource.data.forEach(obj => {
      obj.checkbox = this.checkbox;
    });
    this.isMergeEnable = this.checkbox;
    this.istransferBranch = this.checkbox;
  }
  checkboxValueChange() {
    let cnt = 0;
    this.dataSource.data.forEach((element, index) => {
      if (element['checkbox']) {
        cnt++;
      }
    });
    this.isMergeEnable = (cnt > 1) ? true : false;
    this.istransferBranch = (cnt > 0) ? true : false;
  }
  ontoken(index) {

    if (index.value === '2') {
      this.outwardPension = true;
    } else {
      this.outwardPension = false;
    }
  }
  onView() {
    this.dataService.setOption('outward-pension-cases-view', 'isView');
    this.router.navigate(['/dppf/inward-physical-pension-case']);
  }

}

