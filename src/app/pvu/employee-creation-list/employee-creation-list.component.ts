import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { EmployeeCreationList } from '../../model/employee-creation-list';
import { CommonListing } from 'src/app/model/common-listing';

@Component({
  selector: 'app-employee-creation-list',
  templateUrl: './employee-creation-list.component.html',
  styleUrls: ['./employee-creation-list.component.css']
})

export class EmployeeCreationListComponent implements OnInit {

  ELEMENT_DATA: EmployeeCreationList[] = [
    {empNumber: 1100100012, empName: 'Employee 1', caseNo: 3021,
    empDesignation: 'Assistant Manager',
    empClass: 'Class I', empDob: '19-02-1971', dojGog: '19-05-2001', panNo: 'APPPG8813B', officeName: 'Office 1', status: 'Pending'},
    {empNumber: 1100100014, empName: 'Employee 2', caseNo: 3201,
    empDesignation: 'Dy. Manager',
    empClass: 'Class II', empDob: '10-05-1976', dojGog: '10-02-2001', panNo: 'APTFG8877B', officeName: 'Office 1', status: 'Pending'},
    {empNumber: 1100105010, empName: 'Employee 3', caseNo: 3655,
    empDesignation: 'Manager', empClass: 'Class I', empDob: '19-10-1974', dojGog: '19-20-2001', panNo: 'APPPG8813B',
    officeName: 'Office 1', status: 'Pending'},
    {empNumber: 1100550015, empName: 'Employee 4', caseNo: 3758,
    empDesignation: 'Dy. Manager',
    empClass: 'Class IV', empDob: '02-05-1979', dojGog: '19-20-2001', panNo: 'BSPPG8563B', officeName: 'Office 1', status: 'Pending'},
    {empNumber: 1100165020, empName: 'Employee 5', caseNo: 3880,
    empDesignation: 'Assistant Manager',
    empClass: 'Class I', empDob: '19-12-1972', dojGog: '19-20-2001', panNo: 'LSPPG8813B', officeName: 'Office 1', status: 'Pending'},
    {empNumber: 1100365440, empName: 'Employee 6', caseNo: 3991, empDesignation: 'Manager',
    empClass: 'Class III', empDob: '05-11-1980', dojGog: '19-20-2001', panNo: 'AMMPG8813B', officeName: 'Office 1', status: 'Pending'},
  ];

  displayedColumns: string[] = [ 'position', 'empNumber', 'empName', 'caseNo',
  'empDesignation', 'empClass', 'empDob', 'dojGog', 'panNo', 'officeName', 'status', 'action'];

  searchListForm: FormGroup;

  empDesignation_list: CommonListing[] = [
    { value: '1', viewValue: 'Assistant Manager' },
    { value: '2', viewValue: 'Director' },
    { value: '3', viewValue: 'Dy.Manager ' },
    { value: '4', viewValue: 'Senior Assistant' },
  ];

  empType_list: CommonListing[] = [
    { value: '1', viewValue: 'GO' },
    { value: '2', viewValue: 'NGO' },
    { value: '3', viewValue: 'AIS' },
  ];

  empClass_list: CommonListing[] = [
    { value: '1', viewValue: 'Class I' },
    { value: '2', viewValue: 'Class II' },
    { value: '3', viewValue: 'Class III' },
    { value: '4', viewValue: 'Class IV' },
    { value: '5', viewValue: 'No Grade' },
  ];

  officeName_list: CommonListing[] = [
    { value: '1', viewValue: 'Gujrat Sales tax, Commission Ahmedabad' },
    { value: '2', viewValue: 'Commissioner of Sales Tax' },
    { value: '3', viewValue: 'Examiner, Local Fund Account' },
  ];

  officeType_list: CommonListing[] = [
    { value: '1', viewValue: 'Self' },
    { value: '2', viewValue: 'Sub-Office' },
  ];

  empPayType_list: CommonListing[] = [
    { value: '1', viewValue: 'Regular' },
    { value: '2', viewValue: 'Fix Pay' },
    { value: '3', viewValue: 'Contractual' },
    { value: '4', viewValue: 'Re-Appointed' },
    { value: '4', viewValue: 'Adhoc/ Bonded' },
];

  workflowStatus_list: CommonListing[] = [
    { value: '1', viewValue: 'Pending' },
    { value: '2', viewValue: 'Approved' },
  ];

  majorHead_list: CommonListing[] = [
    { value: '2251 : Secretariat-Social Services', viewValue: '2251 : Secretariat-Social Services' },
    { value: '2049 : Interest Payments', viewValue: '2049 : Interest Payments' },
    { value: '2215 : Water Supply and Sanitation', viewValue: '2215 : Water Supply and Sanitation' },
    { value: '3435 : Ecology and Environment', viewValue: '3435 : Ecology and Environment' },
    { value: '4217 : Capital Outlay on Urban Development', viewValue: '4217 : Capital Outlay on Urban Development' },
    { value: '2202 : General Education', viewValue: '2202 : General Education' },
  ];

  empDesignationCtrl: FormControl = new FormControl();
  empTypeCtrl: FormControl = new FormControl();
  empClassCtrl: FormControl = new FormControl();
  officeNameCtrl: FormControl = new FormControl();
  officeTypeCtrl: FormControl = new FormControl();
  empPayTypeCtrl: FormControl = new FormControl();
  workflowStatusCtrl: FormControl = new FormControl();

  _onDestroy = new Subject<void>();

  dataSource = new MatTableDataSource<EmployeeCreationList>(this.ELEMENT_DATA);

  private paginator: MatPaginator;
  private sort: MatSort;

  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.searchListForm = this.fb.group({
      dateCreatedTo: [''],
      dateCreatedFrom: [''],
      employeeNo: [''],
      employeeName: [''],
      empDesignation: [''],
      gpfNo: [''],
      cpfNo: [''],
      npsNo: [''],
      caseNo: [''],
      empType: [''],
      empClass: [''],
      officeName: [''],
      officeType: [''],
      dateRetire: [''],
      empPayType: [''],
      workflowStatus: [''],
    });
  }

  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onclickStatus(data) {
    if (data.active) {
      data.active = false;
    } else {
      data.active = true;
    }
    return data;
  }

  clearForm() {
    this.searchListForm.reset();
  }

  saveEstimate() {
  }
}
