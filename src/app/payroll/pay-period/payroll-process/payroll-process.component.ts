import { SelectionModel } from '@angular/cdk/collections';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatOption, MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { CommonListing } from 'src/app/model/common-listing';

import { DataService } from './../../../common/data.service';
import { payrollMessage } from './../../../common/error-message/common-message.constants';
import { IndividualEmployeeSearch, PayrollProcess } from './../../../model/payroll';

@Component({
  selector: 'app-payroll-process',
  templateUrl: './payroll-process.component.html',
  styleUrls: ['./payroll-process.component.css']
})
export class PayrollProcessComponent implements OnInit {

  private paginator: MatPaginator;
  payrollProcessDetails: FormGroup;
  indivudialEmployeeForm: FormGroup;
  designationCtrl: FormControl = new FormControl();
  payrollStatusCtrl: FormControl = new FormControl();
  categoryWiseProcessingCtrl: FormControl = new FormControl();
  subOfficeCtrl: FormControl = new FormControl();
  errorMessages;
  todayDate = new Date();
  isPayrollStatus = false;
  isProcess = true;
  data;
  payRolType = 'Regular';
  @ViewChild('allSubOfficeSelected') private allSubOfficeSelected: MatOption;

  designationList: CommonListing[] = [
    { value: '1', viewValue: 'GRD1' },
    { value: '2', viewValue: '2nd Additional Senior Civil Judge' },
    { value: '3', viewValue: 'A.D.C. To H.E. Governor ' },
    { value: '4', viewValue: 'Account Assistant' },
    { value: '5', viewValue: 'Account Clerk' },
    { value: '6', viewValue: 'Account Controller' },
    { value: '7', viewValue: 'Account Cum - Administrator Officer' },
    { value: '8', viewValue: 'Account Officer-Class I' },
    { value: '9', viewValue: 'Account Officer-Class II' },
    { value: '10', viewValue: 'Accountant' },
  ];

  payrollStatusList: CommonListing[] = [
    { value: '1', viewValue: 'All' },
    { value: '2', viewValue: 'Payroll Created' },
    { value: '3', viewValue: 'Payroll Initiated' },
    { value: '4', viewValue: 'Payroll Processed' },
    { value: '5', viewValue: 'Payroll Terminated' },
  ];

  categoryWiseProcessingList: CommonListing[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '1', viewValue: 'No' },
  ];


  subOfficeList: CommonListing[] = [
    { value: '1', viewValue: 'Office 1' },
    { value: '2', viewValue: 'Office 2' },
    { value: '3', viewValue: 'Office 3' },
  ];

  // table data
  Element_Data: PayrollProcess[] = [
    {
      select: '',
      employeeCategory: 'GO',
      includeCount: '14',
      excludeCount: '3',
      total: '17',
      finalCount: '0',
      payrollStatus: 'Processed',
      statusDetails: 'All Employee Processed Successfully.',
      processIndividual: '',
      downloadPayrollData: '',
      isPayrollStatus: false,
      isProcess: false,
    },
    {
      select: '',
      employeeCategory: 'NGO',
      includeCount: '46',
      excludeCount: '0',
      total: '46',
      finalCount: '0',
      payrollStatus: 'Initialized',
      statusDetails: '',
      processIndividual: '',
      downloadPayrollData: '',
      isPayrollStatus: false,
      isProcess: true,
    },
    {
      select: '',
      employeeCategory: 'AIS',
      includeCount: '134',
      excludeCount: '0',
      total: '134',
      finalCount: '0',
      payrollStatus: 'Initialized',
      statusDetails: '',
      processIndividual: '',
      downloadPayrollData: '',
      isPayrollStatus: false,
      isProcess: true,
    },
  ];
  Element_Sub_Data: any[] = [
    {
      select: '',
      employeeCategory: 'GO',
      includeCount: '5',
      excludeCount: '0',
      total: '5',
      finalCount: '0',
      payrollStatus: 'Processed',
      statusDetails: 'All Employee Processed Successfully.',
      processIndividual: '',
      downloadPayrollData: '',
      isPayrollStatus: false,
      isProcess: false,
    },
    {
      select: '',
      employeeCategory: 'NGO',
      includeCount: '3',
      excludeCount: '0',
      total: '3',
      finalCount: '0',
      payrollStatus: 'Initialized',
      statusDetails: '',
      processIndividual: '',
      downloadPayrollData: '',
      isPayrollStatus: false,
      isProcess: true,
    },
    {
      select: '',
      employeeCategory: 'AIS',
      includeCount: '1',
      excludeCount: '0',
      total: '1',
      finalCount: '0',
      payrollStatus: 'Initialized',
      statusDetails: '',
      processIndividual: '',
      downloadPayrollData: '',
      isPayrollStatus: false,
      isProcess: true,
    },
  ];
  dataSource = new MatTableDataSource<PayrollProcess>(this.Element_Data);
  displayedColumns: any[] = [
    'select',
    'employeeCategory',
    'includeCount',
    'excludeCount',
    'total',
    'finalCount',
    'payrollStatus',
    'statusDetails',
    // 'action',
    'processIndividual',
    'downloadPayrollData',
  ];
  directiveObj = new CommonDirective(this.router);
  selection = new SelectionModel<PayrollProcess>(false, []);

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }
  @ViewChild('allSelected') private allSelected: MatOption;
  constructor(private fb: FormBuilder, private router: Router, public dialog: MatDialog, private dataService: DataService) {
    this.data = dataService.getOption();
  }

  ngOnInit() {
    this.errorMessages = payrollMessage;
    this.payrollProcessDetails = this.fb.group({
      ddoNo: [{ value: '4265', disabled: true }],
      cardexNo: [{ value: '5622', disabled: true }],
      officeName: [{ value: 'Collector Office, Ahmedabad', disabled: true }],
      district: [{ value: 'Ahmedabad', disabled: true }],

      categoryWiseProcessing: [{ value: '1', disabled: true }],
      payrollType: [{ value: 'Regular', disabled: true }],
      payPeriod: [{ value: 'Jan-21', disabled: true }],
      financialYear: [{ value: '2020-2021', disabled: true }],

      subOffice: [{ value: ['1', '2', '3', 0], disabled: false }],

    });
    this.indivudialEmployeeForm = this.fb.group({
      designation: [{ value: '', disabled: false }],
      employeeNumber: [{ value: '', disabled: false }],
      employeeName: [{ value: '', disabled: false }],
      payrollStatus: [{ value: '1', disabled: false }],
    });
    if (this.data['payRolType']) {
      this.payRolType = this.data['payRolType'];
    } else {
      this.payRolType = 'Regular';
    }
    this.payrollProcessDetails.controls['payrollType'].patchValue([this.payRolType]);
    if (this.payRolType === 'Supplementary') {
      this.dataSource = new MatTableDataSource<PayrollProcess>([
        {
          select: '',
          employeeCategory: 'GO',
          includeCount: '1',
          excludeCount: '0',
          total: '1',
          finalCount: '0',
          payrollStatus: 'Processed',
          statusDetails: 'All Employee Processed Successfully.',
          processIndividual: '',
          downloadPayrollData: '',
          isPayrollStatus: false,
          isProcess: false,
        },
        {
          select: '',
          employeeCategory: 'NGO',
          includeCount: '2',
          excludeCount: '0',
          total: '2',
          finalCount: '0',
          payrollStatus: 'Initialized',
          statusDetails: '',
          processIndividual: '',
          downloadPayrollData: '',
          isPayrollStatus: false,
          isProcess: true,
        },
        {
          select: '',
          employeeCategory: 'AIS',
          includeCount: '1',
          excludeCount: '0',
          total: '1',
          finalCount: '0',
          payrollStatus: 'Initialized',
          statusDetails: '',
          processIndividual: '',
          downloadPayrollData: '',
          isPayrollStatus: false,
          isProcess: true,
        },
      ]);
    } else {
      this.dataSource = new MatTableDataSource<PayrollProcess>(this.Element_Data);
    }
  }
  // Set paginator
  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
  }

  // On click of process button
  onProcess() {
    this.isProcess = false;
    this.dataSource.data.forEach(item => {
      item.isProcess = false;
      if (item.employeeCategory === 'AIS') {
        item.payrollStatus = 'Terminated';
        item.statusDetails = 'Some employee salary could not be processed successfully check individual employee salary processing.';
      } else if (item.employeeCategory === 'NGO') {
        item.payrollStatus = 'Processed';
        item.statusDetails = 'All Employee Processed Successfully.';
      }
    });
  }

  // On click of Process Individual radio button
  onProcessIndividual(element) {
    this.Element_Data.forEach(item => {
      item.isPayrollStatus = false;
    });
    element.isPayrollStatus = true;
    this.isPayrollStatus = true;
  }

  // On Indivudial Employee Search
  onSearchIndividualEmployee() {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(IndividualEmployeeSearchDialog, {
      width: '1200px',
      height: 'auto',
    }
    );
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'onLink') {
        this.directiveObj.goToScreen('./payroll/individual-employee-salary-processing');
      } else if (result === 'back') {
        this.selection.clear();
        this.Element_Data.forEach(item => {
          item.isPayrollStatus = false;
        });
        this.isPayrollStatus = false;
      }
    });
  }

  // If Select checkBox is checked Then eneble submit.
  isSubmit() {

    if (this.directiveObj.selection.selected.length > 0) {
      return false;
    } else {
      return true;
    }
  }

  // On Submit button click
  onSubmit() {
    this.dataSource.data.forEach(row => {
      const result = this.directiveObj.selection.isSelected(row) ? this.setFinalize(row) : null;
    });
  }
  setFinalize(row) {
    row.statusDetails = 'Finalized Successfully.'; row.payrollStatus = 'Finalized';
  }

  // Reset Indivudial Employee Search
  resetForm() {

    this.payrollProcessDetails.patchValue({
      subOffice: ['1', '2', '3', 0],
    });
    this.dataSource = new MatTableDataSource<PayrollProcess>(this.Element_Data);
    this.selection.clear();
    this.directiveObj.selection.clear();
    this.Element_Data.forEach(item => {
      item.isPayrollStatus = false;
    });
    this.isPayrollStatus = false;
    this.indivudialEmployeeForm.patchValue({
      designation: '',
      employeeNumber: '',
      employeeName: '',
      payrollStatus: '1',
    });
  }

  // --------- to select all options while selection all in designation-------------
  ddOneSelection(field) {
    if (field === 'subOffice') {
      if (this.allSubOfficeSelected.selected) {
        this.allSubOfficeSelected.deselect();
        return false;
      }
      if (this.payrollProcessDetails.controls.subOffice.value.length === this.subOfficeList.length) {
        this.allSubOfficeSelected.select();
      }
    } else if (field === 'designation') {
      if (this.allSelected.selected) {
        this.allSelected.deselect();
        return false;
      }
      if (this.payrollProcessDetails.controls.designation.value.length === this.designationList.length) {
        this.allSelected.select();
      }
    }
  }

  ddAllSelection(field) {
    if (field === 'subOffice') {
      if (this.allSubOfficeSelected.selected) {
        this.payrollProcessDetails.controls.subOffice.patchValue([...this.subOfficeList.map(item => item.value), 0]);
      } else {
        this.payrollProcessDetails.controls.subOffice.patchValue([]);
      }
    } else if (field === 'designation') {
      if (this.allSelected.selected) {
        this.indivudialEmployeeForm.controls.designation.patchValue([...this.designationList.map(item => item.value), 0]);
      } else {
        this.indivudialEmployeeForm.controls.designation.patchValue([]);
      }
    }
  }
  // -------------------------------------------------------------------------------

  selectSubOffice(event) {
    const value = event;
    const length = event.length;

    if (this.payRolType !== 'Supplementary') {
      if (length === 4) {
        this.dataSource = new MatTableDataSource<PayrollProcess>(this.Element_Data);
      } else if (length === 3) {
        if (JSON.stringify(value) === JSON.stringify(['1', '2', '3'])) {
          this.dataSource = new MatTableDataSource<PayrollProcess>(this.Element_Sub_Data);
        } else {
          this.dataSource = new MatTableDataSource<PayrollProcess>(this.Element_Data);
        }
      } else if (length === 2) {
        if (value[0] === 0) {
          this.dataSource = new MatTableDataSource<PayrollProcess>(this.Element_Data);
        } else {
          this.dataSource = new MatTableDataSource<PayrollProcess>(this.Element_Sub_Data);
        }
      } else if (length === 1) {
        if (JSON.stringify(value) === JSON.stringify([0])) {
          this.dataSource = new MatTableDataSource<PayrollProcess>(this.Element_Data);
        } else if (JSON.stringify(value) !== JSON.stringify([0])) {
          this.dataSource = new MatTableDataSource<PayrollProcess>(this.Element_Sub_Data);
        }
      }
    }
    if (this.payRolType === 'Supplementary') {
      this.dataSource = new MatTableDataSource<PayrollProcess>([
        {
          select: '',
          employeeCategory: 'GO',
          includeCount: '1',
          excludeCount: '0',
          total: '1',
          finalCount: '0',
          payrollStatus: 'Processed',
          statusDetails: 'All Employee Processed Successfully.',
          processIndividual: '',
          downloadPayrollData: '',
          isPayrollStatus: false,
          isProcess: false,
        },
        {
          select: '',
          employeeCategory: 'NGO',
          includeCount: '2',
          excludeCount: '0',
          total: '2',
          finalCount: '0',
          payrollStatus: 'Initialized',
          statusDetails: '',
          processIndividual: '',
          downloadPayrollData: '',
          isPayrollStatus: false,
          isProcess: true,
        },
        {
          select: '',
          employeeCategory: 'AIS',
          includeCount: '1',
          excludeCount: '0',
          total: '1',
          finalCount: '0',
          payrollStatus: 'Initialized',
          statusDetails: '',
          processIndividual: '',
          downloadPayrollData: '',
          isPayrollStatus: false,
          isProcess: true,
        },
      ]);
    }
  }
}


@Component({
  selector: 'app-individual-employee-search-dialog',
  templateUrl: './individual-employee-search-dialog.html',
})
// tslint:disable-next-line: component-class-suffix
export class IndividualEmployeeSearchDialog implements OnInit {

  // table data
  Element_Data: IndividualEmployeeSearch[] = [
    {
      employeeNumber: '1000000001',
      employeeName: 'Mr. Neeraj Gautam',
      designation: 'Assistant Professor',
      status: 'Processed',
      statusDetails: 'Employee Processed Successfully.',
      isProcess: false,
    },
    {
      employeeNumber: '1000000002',
      employeeName: 'Mr. Abc',
      designation: 'Assistant Professor',
      status: 'Terminated',
      statusDetails: 'Issue in Employee Basic salary.',
      isProcess: false,
    }
  ];
  dataSource = new MatTableDataSource<IndividualEmployeeSearch>(this.Element_Data);
  displayedColumns: any[] = [
    'select',
    'employeeNumber',
    'employeeName',
    'designation',
    'status',
    'statusDetails'
  ];
  directiveObj = new CommonDirective();
  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<IndividualEmployeeSearchDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.dataSource.paginator = mp;
  }
  ngOnInit() { }

  // On click of process
  onProcess(element) {
    console.log('any' + element);
    element.isProcess = !element.isProcess;
  }

  // On click of back button
  onBack() {
    this.dialogRef.close('back');
  }

  // on click of employee number hype link
  onEmpNo() {
    this.dialogRef.close('onLink');
  }

  // ----------- if checkbox is checked then enable ProcessReprocess button--------------
  isProcessReprocess() {
    if (this.directiveObj.selection.selected.length > 0) {
      return false;
    } else {
      return true;
    }
  }
  onSelect(dataSource) {
    this.directiveObj.masterToggle(dataSource);
    this.isSelected();
  }
  onSelect2(row) {
    this.directiveObj.selection.toggle(row);
    this.isSelected();
  }
  isSelected() {
    this.dataSource.data.forEach(row => {
      const ans = this.directiveObj.selection.isSelected(row) ? row.isProcess = true : row.isProcess = false;
    });
  }
  // ------------------------------------------------------------------------------------
}
