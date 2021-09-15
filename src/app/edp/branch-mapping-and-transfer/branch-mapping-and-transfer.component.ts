import { edpMessage } from './../../common/error-message/common-message.constants';
import { Router } from '@angular/router';
import { CommonListing } from './../../model/common-listing';
import { MatDialog, MatPaginator, MatTableDataSource } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProceedDialogComponent } from '../proceed-dialog/proceed-dialog.component';
import { DataService } from 'src/app/common/data.service';
import { ToastrService } from 'ngx-toastr';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { MappedBranchDialogComponent } from '../mapped-branch-dialog/mapped-branch-dialog.component';

@Component({
  selector: 'app-branch-mapping-and-transfer',
  templateUrl: './branch-mapping-and-transfer.component.html',
  styleUrls: ['./branch-mapping-and-transfer.component.css']
})
export class BranchMappingAndTransferComponent implements OnInit {

  todayDate = new Date();
  branchMappingTransferForm: FormGroup;
  branchActionCtrl: FormControl = new FormControl();
  employeeDetailsCtrl: FormControl = new FormControl();
  branchCtrl: FormControl = new FormControl();
  employeeDetailsToCtrl: FormControl = new FormControl();
  errorMessages = edpMessage;
  data;
  isMappingFromBtn = true;
  isMappingTo = true;
  isFromEmployeeDetails = false;
  initallyChecked = [];
  fromSectionHeader = 'Branch Mapping';
  directiveObj = new CommonDirective();

  branchActionList: CommonListing[] = [
    { value: '1', viewValue: 'Branch Mapping' },
    { value: '2', viewValue: 'Branch Transfer' },
  ];
  branchList: any[] = [
    { value: '1', viewValue: 'Branch 1', isDisabled: false },
    { value: '2', viewValue: 'Branch 2', isDisabled: false },
    { value: '3', viewValue: 'Branch 3', isDisabled: false },
    { value: '4', viewValue: 'Branch 4', isDisabled: false },
    { value: '5', viewValue: 'Branch 5', isDisabled: false },
  ];

  branchList2: any[] = [
    { value: '1', viewValue: 'Branch 1', isDisabled: true },
    { value: '2', viewValue: 'Branch 2', isDisabled: true },
    { value: '3', viewValue: 'Branch 3', isDisabled: true },
    { value: '4', viewValue: 'Branch 4', isDisabled: true },
    { value: '5', viewValue: 'Branch 5', isDisabled: true },
  ];

  employeeDetailsList: any[] = [
    { value: '1', empNo: '10000000001', empName: 'Shri Pratik Shah', postName: 'Accounts Officer -2' },
    { value: '2', empNo: '10000000002', empName: ' Shri Priyank Shah', postName: 'Accounts Officer -2' },
  ];

  employeeDetailsToList: any[] = [
    { value: '1', empNo: '10000000001', empName: 'Shri Pratik Shah', postName: 'Accounts Officer -2' },
    { value: '2', empNo: '10000000002', empName: ' Shri Priyank Shah', postName: 'Accounts Officer -2' },
  ];
  // Branch Mapping and transfer Data source data and declaration Starts
  branchMappingTransferData: any[] = [];

  branchMappingTransferColumns: string[] = [
    'position',
    'employeeNo',
    'employeeName',
    'postName',
    'branch',
    'toBeAdded',
    'toBeRemoved',
    'toBeTransferred',
    'mappedBranch',
  ];
  branchMappingTransferDisplayedRows: string[] = ['noData'];
  branchMappingTransferDataSource: MatTableDataSource<any> = new MatTableDataSource([{ noData: 'No Data Available.' }]);
  paginator: MatPaginator;
  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.branchMappingTransferDataSource.paginator = this.paginator;
  }
  // Branch Mapping and transfer Data source data and declaration Ends

  // Branch Mapping and transfer Data source data and declaration Starts
  branchMappingToData: any[] = [];
  branchMappingToColumns: string[] = [
    'position',
    'employeeNo',
    'employeeName',
    'postName',
    'branch',
  ];
  branchMappingToDisplayedRows: string[] = ['noData'];
  branchMappingToDataSource: MatTableDataSource<any> = new MatTableDataSource([{ noData: 'No Data Available.' }]);
  // paginator: MatPaginator;
  // @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
  //   this.paginator = mp;
  //   this.branchMappingTransferDataSource.paginator = this.paginator;
  // }
  // Branch Mapping and transfer Data source data and declaration Ends

  constructor(private fb: FormBuilder, private dialog: MatDialog, private router: Router,
    private dataService: DataService, private toastr: ToastrService) {
    this.data = this.dataService.getOption();
  }

  ngOnInit() {
    this.branchMappingTransferForm = this.fb.group({
      district: [{ value: 'Ahmedabad', disabled: true }],
      ddoNo: [{ value: '4265', disabled: true }],
      cardexNo: [{ value: '5622', disabled: true }],
      officeName: [{ value: 'Collector Office, Ahmedabad', disabled: true }],
      branchAction: [''],
      employeeDetails: [''],
      employeeDetailsTo: [''],
    });
    if (this.data['fromBranchMappingAndTransferListing'] === 'viewMode') {
      this.branchMappingTransferForm.controls.branchAction.setValue('2');
      this.branchMappingTransferForm.controls.employeeDetails.setValue('1');
      this.branchMappingTransferForm.controls.employeeDetailsTo.setValue('2');
      this.branchMappingTransferForm.controls.branchAction.disable();
      this.branchMappingTransferForm.controls.employeeDetails.disable();
      this.branchMappingTransferForm.controls.employeeDetailsTo.disable();
      this.onBranchAction('2');
      this.onFromEmpDetails('1');
      this.onToEmpDetails('2');
      this.branchList = [
        { value: '1', viewValue: 'Branch 1', isDisabled: true },
        { value: '2', viewValue: 'Branch 2', isDisabled: true },
        { value: '3', viewValue: 'Branch 3', isDisabled: true },
        { value: '4', viewValue: 'Branch 4', isDisabled: true },
        { value: '5', viewValue: 'Branch 5', isDisabled: true },
      ];
      this.data['fromBranchMappingAndTransferListing'] = '';
    } else if (this.data['fromBranchMappingAndTransferListing'] === 'editMode') {
      this.branchMappingTransferForm.controls.branchAction.setValue('2');
      this.branchMappingTransferForm.controls.branchAction.disable();
      this.onBranchAction('2');
      this.data['fromBranchMappingAndTransferListing'] = '';
    } else {
    }
  }

  // On branch action
  onBranchAction(value) {
    if (value === '1') {
      this.fromSectionHeader = 'Branch Mapping';
      this.branchMappingTransferColumns = [
        'position',
        'employeeNo',
        'employeeName',
        'postName',
        'branch',
        'toBeAdded',
        'toBeRemoved',
        'mappedBranch',
      ];
      if (this.isFromEmployeeDetails) {
        this.branchMappingTransferDisplayedRows = this.branchMappingTransferColumns;
      }
      this.branchList = [
        { value: '1', viewValue: 'Branch 1', isDisabled: false },
        { value: '2', viewValue: 'Branch 2', isDisabled: false },
        { value: '3', viewValue: 'Branch 3', isDisabled: false },
        { value: '4', viewValue: 'Branch 4', isDisabled: false },
        { value: '5', viewValue: 'Branch 5', isDisabled: false },
      ];
      this.isMappingFromBtn = true;
      this.isMappingTo = false;
      this.branchMappingToDataSource.data[0].toBeAdded = '';
      this.branchMappingToDataSource.data[0].toBeRemoved = '';
      this.branchMappingToDataSource.data = this.branchMappingToDataSource.data;
    } else if (value === '2') {
      this.fromSectionHeader = 'Branch Mapping From';
      this.branchMappingTransferColumns = [
        'position',
        'employeeNo',
        'employeeName',
        'postName',
        'branch',
        'toBeTransferred',
        'mappedBranch',
      ];
      if (this.isFromEmployeeDetails) {
        this.branchMappingTransferDisplayedRows = this.branchMappingTransferColumns;
      }
      this.isMappingTo = true;
      this.isMappingFromBtn = false;
      // To set iniatially unchecked fields disabled for transfer
      this.branchMappingToDataSource.data[0].branch = ['1', '3', '4'];
      this.branchList = [
        { value: '1', viewValue: 'Branch 1', isDisabled: false },
        { value: '2', viewValue: 'Branch 2', isDisabled: true },
        { value: '3', viewValue: 'Branch 3', isDisabled: false },
        { value: '4', viewValue: 'Branch 4', isDisabled: false },
        { value: '5', viewValue: 'Branch 5', isDisabled: true },
      ];
      this.branchMappingToDataSource.data[0].toBeAdded = '';
      this.branchMappingToDataSource.data[0].toBeRemoved = '';
      this.branchMappingToDataSource.data[0].toBeTransferred = '';
      // this.branchList.filter((item) => {
      //   if (this.branchMappingToDataSource.data[0].branch.include(item.value)) {
      //     item.isDisabled = true;
      //   }
      // });
      this.branchMappingToDataSource.data = this.branchMappingToDataSource.data;
    }
  }

  // On change of branch
  onFromBranch(value, element) {
    const toBeAdded = [];
    const toBeRemoved = [];
    let initallyUnChecked = [];
    let added = [];
    let removed = [];
    this.branchList.forEach(item => {
      initallyUnChecked.push(item.value);
    });
    initallyUnChecked = initallyUnChecked.filter((el) => !this.initallyChecked.includes(el));

    // to find added element i.e. by filtering changes in dd by initallyUnChecked
    added = initallyUnChecked.filter((el) => value.includes(el));
    // pushing viewValue in toBeAdded to further set in element.toBeAdded
    added.forEach(item => {
      toBeAdded.push(this.directiveObj.getViewValue(this.branchList, item));
      console.log(this.directiveObj.getViewValue(this.branchList, item));
    });

    // to find removed element i.e. by filtering changes in dd which are not included in initallyChecked
    removed = this.initallyChecked.filter((el) => !value.includes(el));
    // pushing viewValue in toBeRemoved to further set in element.toBeRemoved
    removed.forEach(item => {
      toBeRemoved.push(this.directiveObj.getViewValue(this.branchList, item));
      console.log(this.directiveObj.getViewValue(this.branchList, item));
    });
    toBeAdded.join(', ');
    toBeRemoved.join(', ');

    element.toBeAdded = toBeAdded;
    element.toBeRemoved = toBeRemoved;
    element.toBeTransferred = toBeRemoved;

  }

  // On to employee details
  onToEmpDetails(value) {
    this.employeeDetailsToList.forEach(item => {
      if (item.value === value) {
        this.branchMappingToData.pop();
        this.branchMappingToData.push({
          employeeNo: item.empNo,
          employeeName: item.empName,
          postName: item.postName,
          branch: ['1', '3', '4'],
        });
      }
    });
    this.branchMappingToDataSource = new MatTableDataSource(this.branchMappingToData);
    this.branchMappingToDataSource = this.branchMappingToDataSource;
    this.branchMappingToDisplayedRows = this.branchMappingToColumns;
  }

  // On save as draft
  onSaveAsDraft() {
    if (this.branchMappingTransferDataSource.data[0].branch) {
      const dialogRef = this.dialog.open(ProceedDialogComponent, {
        width: '300px',
        height: 'auto',
        data: ''
      }
      );
      dialogRef.afterClosed().subscribe(result => {
        if (result === 'Yes') {
          this.toastr.success('Details saved successfully');
        }
        console.log('Dialog Closed');
      });
    } else {
      this.toastr.error('Please Select atleast one Branch');
    }
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
  // On submit button
  onSubmit() {
    if (this.branchMappingTransferDataSource.data[0].branch) {
      const dialogRef = this.dialog.open(ProceedDialogComponent, {
        width: '300px',
        height: 'auto',
        data: ''
      }
      );
      dialogRef.afterClosed().subscribe(result => {
        if (result === 'Yes') {
          this.toastr.success('#Branch is Successfully Mapped with #post to the #User');
        }
        console.log('Dialog Closed');
      });
    } else {
      this.toastr.error('Please Select atleast one Branch');
    }
  }
  // on listing button to Go to listing
  gotoListing() {
    const dialogRef = this.dialog.open(ProceedDialogComponent, {
      width: '300px',
      height: 'auto',
      data: ''
    }
    );
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'Yes') {
        this.router.navigate(['./edp/branch-mapping-and-transfer-listing']);
      } else {

      }
      console.log('Dialog Closed');
    });
  }

  // on EmpDetails of Branch Mapping & Transfer section
  onFromEmpDetails(value) {

    this.employeeDetailsList.forEach(item => {
      if (item.value === value) {
        this.branchMappingTransferData.pop();
        this.branchMappingTransferData.push({
          employeeNo: item.empNo,
          employeeName: item.empName,
          postName: item.postName,
          branch: ['1', '3', '4'],
          mappedBranch: '',
          toBeAdded: '',
          toBeRemoved: '',
          toBeTransferred: '',
        });
      }
    });
    this.branchList.forEach(item => {
      this.initallyChecked.push(item.value);
    });
    this.initallyChecked = this.initallyChecked.filter((el) => this.branchMappingTransferData[0].branch.includes(el));
    console.log('initallyChecked' + this.initallyChecked);
    this.branchMappingTransferDataSource = new MatTableDataSource(this.branchMappingTransferData);
    this.branchMappingTransferDisplayedRows = this.branchMappingTransferColumns;
    this.isFromEmployeeDetails = true;
  }

  // On mapped branch to open dialog
  onMappedBranch() {
    const dialogRef = this.dialog.open(MappedBranchDialogComponent, {
      width: '800px',
      height: 'auto',
      data: ''
    }
    );
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog Closed');
    });
  }

  // on Reset
  onReset() {
    const dialogRef = this.dialog.open(ProceedDialogComponent, {
      width: '300px',
      height: 'auto',
      data: ''
    }
    );
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'Yes') { } else { }
      console.log('Dialog Closed');
    });
  }
}
