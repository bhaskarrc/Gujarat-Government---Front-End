import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { CommonListing } from 'src/app/model/common-listing';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { OutwardedCases } from 'src/app/model/dppf';

@Component({
  selector: 'app-outwarded-pension-cases-list',
  templateUrl: './outwarded-pension-cases-list.component.html',
  styleUrls: ['./outwarded-pension-cases-list.component.css']
})

export class OutwardedPensionCasesListComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router) { }
  // Variable
  inwardDate_words = 'Inward Date:';
  inwardDate = '29-Dec-2008';
  gtrfourtyFout = 'Form GTR 44 - Detailed Bill of Contingent Charges of Fully vouched contingent charges';
  refNuber = 'Reference Number:';
  refNuberDate = 'Reference Date:';
  // Date
  todayDate = Date.now();
  todaysDate = new Date();
  // Form Group
  outwardedPensionCase: FormGroup;
  // Table Source
  ELEMENT_DATA: OutwardedCases[] = [
    {

      outwardNo: '000014/12/2008',
      outwardDate: '29-Dec-2008', inwardNo: '000523/12/2008', inwardDate: '29-Dec-2008', inwType: 'PC', ppoNo_scNo: ' PR-2/02/2009/000191',
      employeeID: 1234567891, name: 'SMT. ANSUYA SHAH  ', retDate: '01-Feb-2009', pnsnType: 'Sup', docCount: 1, revNo: 0,
      branchName: 'PR-2',
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
  workFlowStatus_list: CommonListing[] = [
    { value: '1', viewValue: 'Approval In Progress' },
    { value: '2', viewValue: 'Send Back ' },
    { value: '3', viewValue: 'Approved' },
    { value: '4', viewValue: 'Rejected' },
  ];


  // Form Control
  statusTypeCtrl: FormControl = new FormControl();
  pensionTypeCtrl: FormControl = new FormControl();
  branchNameCtrl: FormControl = new FormControl();
  districtNameCtrl: FormControl = new FormControl();
  inwardTypeCtrl: FormControl = new FormControl();
  // Table Source
  dataSource = new MatTableDataSource<OutwardedCases>(this.ELEMENT_DATA);
  selection = new SelectionModel<OutwardedCases>(true, []);

  displayedColumns: any[] = [
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
    'action'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.outwardedPensionCase = this.fb.group({
      inwardNo: [''],
      outwardNo: [''],
      outwardFrom: [''],
      outwardTo: [''],
      inwardType: [''],
      retirementDate: [''],
      pensionType: [''],
      branchName: [''],
      districtName: [''],
      ppoNo: [''],
      status: [''],
      firstName: [''],
      middleName: [''],
      lastName: ['']

    });
  }

  // CheckBox methods
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
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  clearForm() {
    this.outwardedPensionCase.reset();
  }
  searchOutwardedPensionCaseList() { }
  // Navigation Route
  gotoObjection() {
    this.router.navigate(['./dppf/objection']);
  }
  // Navigation Route
  printSticker() {
    this.router.navigate(['./dppf/stickers']);
  }

}


