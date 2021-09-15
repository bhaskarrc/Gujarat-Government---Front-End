import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { GiSearchEmployeeComponent } from '../../gi-search-employee/gi-search-employee.component';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { GroupInsuranceMessage } from 'src/app/common/error-message/common-message.constants';
import { Router } from '@angular/router';
import { CommonListing } from 'src/app/model/common-listing';
import { GiEmployeeMaster, GroupDetails } from 'src/app/model/group-insurance';

@Component({
  selector: 'app-gi-employee-master-view',
  templateUrl: './gi-employee-master-view.component.html',
  styleUrls: ['./gi-employee-master-view.component.css']
})
export class GiEmployeeMasterViewComponent implements OnInit {

  // attachment list
  attachmentTypeCode: CommonListing[] = [
    { value: '01', viewValue: 'Scheme Join Document' },
    { value: '02', viewValue: 'Group change Document' },
    { value: '03', viewValue: 'Rate Change Document' },
    { value: '04', viewValue: 'Latest Nomination Document' }
  ];

  // group list
  groupList: CommonListing[] = [
    { value: '1', viewValue: 'A' },
    { value: '2', viewValue: 'B' },
    { value: '3', viewValue: 'C' },
    { value: '4', viewValue: 'D' }
  ];

  // employee group list
  employeeGroupList: CommonListing[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];

  // continue in state scheme list
  continueInStateSchemeList: CommonListing[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];

  // is nominated ias list
  isNominatedIasList: CommonListing[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];

  // expected rate change list
  expectedRateChangeList: CommonListing[] = [
    { value: '1', viewValue: '01/04/1982' },
    { value: '2', viewValue: '01/04/1990' },
    { value: '3', viewValue: '01/04/1993' },
    { value: '4', viewValue: '01/01/2003' },
  ];

  // treasury office ahmedabad list
  treasuryOfficeAhmedabadList: CommonListing[] = [
    { value: '1', viewValue: 'Treasury Office, Gandhinagar' },
    { value: '2', viewValue: 'PAO, Gandhinagar' },
    { value: '3', viewValue: 'Lisaning office Delhi' },
    { value: '4', viewValue: 'Lisaning office Mumbai' },
  ];

  // table data
  employeeMasterData: GiEmployeeMaster[] = [
    {
      district: 'Gandhinagar',
      treasuryOffice: 'Directorate of Account & Treasury',
      employeeNumber: '1000000234',
      employeeName: 'Mr. K H Patel',
      schemeJoinDate: new Date(2003, 9, 18),
      schemeJoinGroup: 'B',
      groupChangeDate: new Date(2007, 9, 10),
      currentGroup: 'A',
      isNominatedIas: 'Yes',
      continueInStateScheme: 'No'
    },
    {
      district: 'Gandhinagar',
      treasuryOffice: 'Directorate of Account & Treasury',
      employeeNumber: '1000000345',
      employeeName: 'Kum. S K Patel',
      schemeJoinDate: new Date(2005, 3, 2),
      schemeJoinGroup: 'D',
      groupChangeDate: new Date(2010, 3, 1),
      currentGroup: 'B',
      isNominatedIas: 'No',
      continueInStateScheme: 'NA'
    },
    {
      district: 'Gandhinagar',
      treasuryOffice: 'Directorate of Account & Treasury',
      employeeNumber: '1000000546',
      employeeName: 'Mr. G N Singh',
      schemeJoinDate: new Date(2005, 5, 25),
      schemeJoinGroup: 'D',
      groupChangeDate: new Date(2010, 5, 25),
      currentGroup: 'A',
      isNominatedIas: 'Yes',
      continueInStateScheme: 'Yes'
    },
    {
      district: 'Gandhinagar',
      treasuryOffice: 'Directorate of Account & Treasury',
      employeeNumber: '1000000764',
      employeeName: 'Mr. L P Shah',
      schemeJoinDate: new Date(2010, 3, 10),
      schemeJoinGroup: 'C',
      groupChangeDate: new Date(2011, 2, 1),
      currentGroup: 'B',
      isNominatedIas: 'No',
      continueInStateScheme: 'NA'
    }
  ];

  employeeMasterDataSourceColumn: string[] = [
    'srno',
    'district',
    'treasuryOffice',
    'employeeNumber',
    'employeeName',
    'schemeJoinDate',
    'schemeJoinGroup',
    'groupChangeDate',
    'currentGroup',
    'isNominatedIas',
    'continueInStateScheme',
  ];

  // pay scale list
  payScaleList: CommonListing[] = [
    { value: '1', viewValue: '3400-6400' },
    { value: '2', viewValue: '4400-8800' },
    { value: '3', viewValue: '6400-12000' },
  ];

  recoveryColumn = ['srNo', 'groupChangeDate', 'group', 'payScale', 'action'];
  elementData: GroupDetails[] = [
    {
      groupChangeDate: new Date('04/01/1992'),
      group: '3',
      payScale: '1',
    },
    {
      groupChangeDate: new Date('04/01/2005'),
      group: '2',
      payScale: '2',
    },
    {
      groupChangeDate: new Date('04/01/2010'),
      group: '1',
      payScale: '3',
    },

  ];
  groupDetailsDataSource = new MatTableDataSource<GroupDetails>(this.elementData);

  todayDate = new Date();
  selectedIndex: number;
  tabDisable: Boolean = true;
  inwardDetails = true;
  groupCtrl: FormControl = new FormControl();
  employeeGroupChangeCtrl: FormControl = new FormControl();
  expectedRateChangeCtrl: FormControl = new FormControl();
  employeeMasterForm: FormGroup;
  treasuryOfficeCtrl: FormControl = new FormControl();
  isNominatedIasCtrl: FormControl = new FormControl();
  continueInStateSchemeCtrl: FormControl = new FormControl();
  payScaleCtrl: FormControl = new FormControl();
  payScaleEmployeeCtrl: FormControl = new FormControl();

  employeeMasterDataSource = new MatTableDataSource(this.employeeMasterData);
  errorMessages = GroupInsuranceMessage;
  isEditClicked = false;

  constructor(private fb: FormBuilder, public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.employeeMasterFormData();
  }

  // form data
  employeeMasterFormData() {
    this.employeeMasterForm = this.fb.group({
      district: [{ value: 'Gandhinagar', disabled: true }],
      treasuryOffice: [{ value: '', disabled: false }],
      employeeNo: [''],
      employeeGroupChange: [''],
      expectedRateChange: [''],
      employeeName: [''],
      schemeJoinGroup: [''],
      schemeJoinDate: [''],
      ddoNo: [{ value: '49', disabled: true }],
      cardexNo: [{ value: '132', disabled: true }],
      ddoOfficeName: [{ value: 'Directorate of Account & Treasury', disabled: true }],
      isNominatedIas: [''],
      continueInStateScheme: [''],
      payScale: ['']
    });
  }

  // on click on add button
  addRow() {
    const Col_Data = this.employeeMasterDataSource.data;
    Col_Data.push({
      district: this.employeeMasterForm.controls['district'].value,
      treasuryOffice: this.employeeMasterForm.controls['treasuryOffice'].value,
      employeeNumber: this.employeeMasterForm.controls['employeeNo'].value,
      employeeName: this.employeeMasterForm.controls['employeeName'].value,
      schemeJoinDate: this.employeeMasterForm.controls['schemeJoinDate'].value,
      schemeJoinGroup: this.employeeMasterForm.controls['schemeJoinGroup'].value,
      groupChangeDate: new Date('01/01/2019'),
      currentGroup: 'A',
      isNominatedIas: this.isNominatedIasList[this.employeeMasterForm.controls['isNominatedIas'].value - 1].viewValue,
      continueInStateScheme: this.continueInStateSchemeList[this.employeeMasterForm.controls['continueInStateScheme'].value - 1].viewValue
    });
    this.employeeMasterDataSource.data = Col_Data;
    this.employeeMasterDataSource = new MatTableDataSource(this.employeeMasterData);
  }

  // on click on edit icon
  goToEdit(index) {
    this.employeeMasterForm.controls['district'].setValue(this.employeeMasterDataSource.data[index]['district']);
    this.employeeMasterForm.controls['treasuryOffice'].setValue(this.employeeMasterDataSource.data[index]['treasuryOffice']);
    this.employeeMasterForm.controls['employeeNo'].setValue(this.employeeMasterDataSource.data[index]['employeeNumber']);
    this.employeeMasterForm.controls['employeeName'].setValue(this.employeeMasterDataSource.data[index]['employeeName']);
    this.employeeMasterForm.controls['schemeJoinDate'].setValue(this.employeeMasterDataSource.data[index]['schemeJoinDate']);
    this.employeeMasterForm.controls['schemeJoinGroup'].setValue(this.employeeMasterDataSource.data[index]['schemeJoinGroup']);
    this.isEditClicked = true;
  }

  // delete row from table
  goToDelete(index) {
    this.employeeMasterDataSource.data.splice(index, 1);
    this.employeeMasterDataSource = new MatTableDataSource(this.employeeMasterDataSource.data);
  }

  // reset form
  resetForm() {
    this.employeeMasterForm.reset();
  }

  // go to listing page
  goToListing() {
    this.router.navigate(['gi/employee-master-listing']);
  }

  // get tab index
  getTabIndex(tabIndex) {
    this.selectedIndex = tabIndex;
    const temp = this.selectedIndex;
  }

  // go to next
  goToNext() {
    this.tabDisable = false;
    this.selectedIndex = 1;
  }

  // open empoyee number dialog box
  openDialogEmployeeNumber() {
    const dialogRef = this.dialog.open(GiSearchEmployeeComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.employeeMasterForm.patchValue({
          employeeNo: result[0].employeeNumber,
          employeeName: result[0].employeeName,
          district: result[0].district,
          treasuryOffice: result[0].treasuryOffice,
          schemeJoinDate: result[0].schemeJoinDate,
          schemeJoinGroup: result[0].group
        });
      }
    });
  }

  // delete row from table
  deleteRowRecovery(index) {
    this.groupDetailsDataSource.data.splice(index, 1);
    this.groupDetailsDataSource = new MatTableDataSource(
      this.groupDetailsDataSource.data
    );
  }

  // add row in table
  addRecoveryDetailRow() {
    const push_data = this.groupDetailsDataSource.data;
    push_data.push({
      groupChangeDate: new Date(),
      group: '',
      payScale: '',
    });
    this.groupDetailsDataSource.data = push_data;
  }

  // opens view component
  goToView() {
    const dialogRef = this.dialog.open(GiEmployeeMasterViewComponent, {
      width: '1200px', height: '750px'
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }
}
