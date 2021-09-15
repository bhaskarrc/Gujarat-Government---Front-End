import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { GiSearchEmployeeComponent } from '../gi-search-employee/gi-search-employee.component';
import { GiEmployeeMasterListing } from 'src/app/model/group-insurance';
import { CommonListing } from 'src/app/model/common-listing';

@Component({
  selector: 'app-gi-employee-master-listing',
  templateUrl: './gi-employee-master-listing.component.html',
  styleUrls: ['./gi-employee-master-listing.component.css']
})
export class GiEmployeeMasterListingComponent implements OnInit {

  // variable
  showTable = false;
  // date
  todayDate = new Date();
  // form group
  employeeMasterForm: FormGroup;
  // form control
  groupCtrl: FormControl = new FormControl();
  districtCtrl: FormControl = new FormControl();
  payScaleEmployeeCtrl: FormControl = new FormControl();
  treasuryOfficeCtrl: FormControl = new FormControl();

  // List of Group
  groupList: CommonListing[] = [
    { value: '1', viewValue: 'A' },
    { value: '2', viewValue: 'B' },
    { value: '3', viewValue: 'C' },
    { value: '4', viewValue: 'D' },
  ];

  // List of District
  districtList: CommonListing[] = [
    { value: '1', viewValue: 'Ahmedabad' },
    { value: '2', viewValue: 'Gandhinagar' },
    { value: '3', viewValue: 'Vadodara' },
    { value: '4', viewValue: 'Surat' },
    { value: '5', viewValue: 'Bharuch' },
    { value: '6', viewValue: 'Anand' },
    { value: '7', viewValue: 'Valsad' },
    { value: '8', viewValue: 'Dang' },
  ];

  // list of pay scale
  payScaleList: CommonListing[] = [
    { value: '1', viewValue: '3400-6400' },
    { value: '2', viewValue: '4400-8800' },
    { value: '3', viewValue: '6400-12000' },
  ];


  // List of Treasury Offices
  treasuryOfficeNameList: CommonListing[] = [];

  // Table data for employee master
  employeeMasterData: GiEmployeeMasterListing[] = [
    {
      district: 'Gandhinagar',
      treasuryOffice: 'Directorate of Account & Treasury',
      employeeNumber: '1000000234',
      employeeName: 'Mr. K H Patel',
      schemeJoinDate: new Date(1960, 9, 18),
      schemeJoinGroup: 'B',
      groupChangeDate: new Date(2007, 9, 10),
      currentGroup: 'A',
      isNominatedIas: 'Yes',
      continueInStateScheme: 'No',
      workflowStatus: 'Submitted By Creator',
      status: 'Submitted'
    },
    {
      district: 'Gandhinagar',
      treasuryOffice: 'Directorate of Account & Treasury',
      employeeNumber: '1000000345',
      employeeName: 'Kum. S K Patel',
      schemeJoinDate: new Date(1971, 3, 2),
      schemeJoinGroup: 'D',
      groupChangeDate: new Date(2010, 3, 1),
      currentGroup: 'B',
      isNominatedIas: 'No',
      continueInStateScheme: 'NA',
      workflowStatus: 'Forwarded to Verifier',
      status: 'Pending'
    },
    {
      district: 'Gandhinagar',
      treasuryOffice: 'Directorate of Account & Treasury',
      employeeNumber: '1000000546',
      employeeName: 'Mr. G N Singh',
      schemeJoinDate: new Date(1986, 5, 25),
      schemeJoinGroup: 'D',
      groupChangeDate: new Date(2010, 5, 25),
      currentGroup: 'A',
      isNominatedIas: 'Yes',
      continueInStateScheme: 'Yes',
      workflowStatus: 'Recommended',
      status: 'Forwarded to Approver'
    },
    {
      district: 'Gandhinagar',
      treasuryOffice: 'Directorate of Account & Treasury',
      employeeNumber: '1000000764',
      employeeName: 'Mr. L P Shah',
      schemeJoinDate: new Date(1981, 3, 10),
      schemeJoinGroup: 'C',
      groupChangeDate: new Date(2011, 2, 1),
      currentGroup: 'B',
      isNominatedIas: 'No',
      continueInStateScheme: 'NA',
      workflowStatus: 'Forwarded to Verifier',
      status: 'Pending'
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
    'workflowStatus',
    'status',
    'action'
  ];
  employeeMasterDataSource = new MatTableDataSource<GiEmployeeMasterListing>(this.employeeMasterData);
  // Table data for employee master end

  // constructor
  constructor(private fb: FormBuilder, public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.employeeMasterFormData();
  }

  // form data
  employeeMasterFormData() {
    this.employeeMasterForm = this.fb.group({
      district: [''],
      treasuryOffice: [''],
      employeeNo: [''],
      employeeName: [''],
      group: [''],
      payScale: [''],
      treasuryOfficeOther: ['']
    });
  }

  // go to edit
  goToEdit() {
    this.router.navigate(['gi/employee-master']);
  }

  // on click on search button
  search() {
    if (
      this.employeeMasterForm.controls['employeeNo'].value !== '' || this.employeeMasterForm.controls['employeeName'].value !== ''
      || this.employeeMasterForm.controls['district'].value !== '' || this.employeeMasterForm.controls['treasuryOffice'].value !== ''
      || this.employeeMasterForm.controls['group'].value !== '' || this.employeeMasterForm.controls['treasuryOfficeOther'].value !== ''
      || this.employeeMasterForm.controls['payScale'].value !== ''
    ) {
      this.showTable = true;
    }
  }

  // open employee number dialog box
  openDialogEmployeeNumber() {
    const dialogRef = this.dialog.open(GiSearchEmployeeComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.employeeMasterForm.patchValue({
          employeeNo: result[0].employeeNumber,
          employeeName: result[0].employeeName,
          district: '2',
          treasuryOffice: result[0].treasuryOffice,
          group: '1',
        });
      }
    });
  }

  // on selecting district display treasury office name
  onSelectingDistrict(event) {
    if (event.value === '1') {
      // tslint:disable-next-line: prefer-const
      let treasuryList = [];
      treasuryList.push({
        value: '1', viewValue: 'Treasury Office, ' + this.districtList[this.employeeMasterForm.controls['district'].value - 1].viewValue
      },
        { value: '2', viewValue: 'PAO, ' + this.districtList[this.employeeMasterForm.controls['district'].value - 1].viewValue });

      this.treasuryOfficeNameList = treasuryList;
    }
    if (event.value === '2') {
      // tslint:disable-next-line: prefer-const
      let treasuryList = [];
      treasuryList.push({
        value: '1', viewValue: 'Treasury Office, ' + this.districtList[this.employeeMasterForm.controls['district'].value - 1].viewValue
      },
        { value: '2', viewValue: 'PAO, ' + this.districtList[this.employeeMasterForm.controls['district'].value - 1].viewValue },

        { value: '3', viewValue: 'Lisaning Office Delhi' },
        { value: '4', viewValue: 'Lisaning Office Mumbai' });

      this.treasuryOfficeNameList = treasuryList;
    }
    if (event.value !== '2' && event.value !== '1') {
      this.employeeMasterForm.controls['treasuryOfficeOther'].setValue('District Treasury Office, ' +
        this.districtList[this.employeeMasterForm.controls['district'].value - 1].viewValue);
    }
  }
}
