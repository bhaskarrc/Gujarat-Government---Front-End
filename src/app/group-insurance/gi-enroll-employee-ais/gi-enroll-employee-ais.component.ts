import { Component, OnInit, ElementRef } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { GroupInsuranceMessage } from 'src/app/common/error-message/common-message.constants';
import { Router } from '@angular/router';
import { GiSearchEmployeeComponent } from '../gi-search-employee/gi-search-employee.component';
import { GiEnrollEmployeeAis } from 'src/app/model/group-insurance';
import { CommonListing } from 'src/app/model/common-listing';
import { GroupInsuranceDirective } from 'src/app/common/directive/group-insurance-directive';

@Component({
  selector: 'app-gi-enroll-employee-ais',
  templateUrl: './gi-enroll-employee-ais.component.html',
  styleUrls: ['./gi-enroll-employee-ais.component.css']
})
export class GiEnrollEmployeeAisComponent implements OnInit {

  // date
  todayDate = new Date();
  // variable
  selectedIndex: number;
  tabDisable: Boolean = true;
  errorMessages = GroupInsuranceMessage;
  // form group
  enrollEmployeeForm: FormGroup;
  // directive object for workflow dialog
  directiveObject = new GroupInsuranceDirective(this.dialog);

  // List of attachment
  attachmentTypeCode: CommonListing[] = [
    { value: '01', viewValue: 'Scheme Join Document' },
    { value: '02', viewValue: 'Group change Document' },
    { value: '03', viewValue: 'Rate Change Document' },
    { value: '04', viewValue: 'Latest Nomination Document' }
  ];

  // Table data for employee master table
  employeeMasterData: GiEnrollEmployeeAis[] = [
    {
      employeeNumber: '1000005384',
      employeeName: 'Mr P K Sinha',
      designation: 'IAS',
      class: 'Class 1',
      district: 'Ahmedabad',
      officeName: 'Collector Office Ahmedabad',
      group: 'A',
      groupInsuranceAmount: '120',
      dateOfEnrollmentNo: new Date(1982, 4, 14),
      enrollmentNo: '14051982',
      emailId: 'ahm.collector@gujarat.gov.in'
    },
    {
      employeeNumber: '1000002435',
      employeeName: 'Mr. S K Narayana',
      designation: 'IAS',
      class: 'Class 1',
      district: 'Amreli',
      officeName: 'Dy. Collector Office, Amreli',
      group: 'A',
      groupInsuranceAmount: '120',
      dateOfEnrollmentNo: new Date(1991, 5, 25),
      enrollmentNo: '25061991',
      emailId: 'amreli.dycollector@gujarat.gov.in'
    },
    {
      employeeNumber: '1000003866',
      employeeName: 'Mr. S P Khanna',
      designation: 'IPS',
      class: 'Class 1',
      district: 'Rajkot',
      officeName: 'District Supritendant office, Rajkot',
      group: 'A',
      groupInsuranceAmount: '120',
      dateOfEnrollmentNo: new Date(1981, 2, 12),
      enrollmentNo: '12031981',
      emailId: 'rajkor.supri@gujarat.gov.in'
    },
    {
      employeeNumber: '1000001001',
      employeeName: 'Mr. K V Kamath',
      designation: 'IFS',
      class: 'Class 1',
      district: 'Dang',
      officeName: 'Dy. Conservative of Forest, Dang',
      group: 'A',
      groupInsuranceAmount: '120',
      dateOfEnrollmentNo: new Date(1998, 9, 10),
      enrollmentNo: '10101998',
      emailId: 'dang.dyconserv@gujarat.gov.in'
    }
  ];
  employeeMasterDataSourceColumn: string[] = [
    'srno',
    'employeeNumber',
    'employeeName',
    'designation',
    'class',
    'district',
    'officeName',
    'group',
    'groupInsuranceAmount',
    'dateOfEnrollmentNo',
    'enrollmentNo',
    'emailId',
    'action'
  ];
  employeeMasterDataSource = new MatTableDataSource<GiEnrollEmployeeAis>(this.employeeMasterData);
  // Table data for employee master table end

  // constructor
  constructor(private fb: FormBuilder, private el: ElementRef, public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.enrollEmployeeFormData();
  }

  // form data
  enrollEmployeeFormData() {
    this.enrollEmployeeForm = this.fb.group({
      employeeNo: [''],
      employeeName: [''],
      designation: [{ value: 'IAS', disabled: 'true' }],
      district: [{ value: 'Ahmedabad', disabled: true }],
      officeName: [{ value: 'Collector Office Ahmedabad', disabled: true }],
      group: [{ value: 'A', disabled: 'true' }],
      groupInsuranceAmount: [{ value: '120.00', disabled: 'true' }],
      dateOfEnrollment: [''],
      enrollmentOrderNo: [''],
    });
  }

  // add row
  addRow() {
    const Col_Data = this.employeeMasterDataSource.data;
    Col_Data.push({
      employeeNumber: this.enrollEmployeeForm.controls['employeeNo'].value,
      employeeName: this.enrollEmployeeForm.controls['employeeName'].value,
      designation: 'IAS',
      class: 'Class 1',
      district: 'Ahmedabad',
      officeName: this.enrollEmployeeForm.controls['officeName'].value,
      group: 'A',
      groupInsuranceAmount: this.enrollEmployeeForm.controls['groupInsuranceAmount'].value,
      dateOfEnrollmentNo: this.enrollEmployeeForm.controls['dateOfEnrollment'].value,
      enrollmentNo: this.enrollEmployeeForm.controls['enrollmentOrderNo'].value,
      emailId: 'ahm.collector@gujarat.gov.in',
    });
    this.employeeMasterDataSource.data = Col_Data;
    this.employeeMasterDataSource = new MatTableDataSource(this.employeeMasterData);
  }

  // go to edit
  goToEdit(index) {
    this.enrollEmployeeForm.controls['employeeNo'].setValue(this.employeeMasterDataSource.data[index]['employeeNumber']);
    this.enrollEmployeeForm.controls['employeeName'].setValue(this.employeeMasterDataSource.data[index]['employeeName']);
    this.enrollEmployeeForm.controls['officeName'].setValue(this.employeeMasterDataSource.data[index]['officeName']);
    this.enrollEmployeeForm.controls['group'].setValue(this.employeeMasterDataSource.data[index]['group']);
    this.enrollEmployeeForm.controls['groupInsuranceAmount'].setValue(this.employeeMasterDataSource.data[index]['groupInsuranceAmount']);
    this.enrollEmployeeForm.controls['dateOfEnrollment'].setValue(this.employeeMasterDataSource.data[index]['dateOfEnrollmentNo']);
    this.enrollEmployeeForm.controls['enrollmentOrderNo'].setValue(this.employeeMasterDataSource.data[index]['enrollmentNo']);
    this.enrollEmployeeForm.controls['district'].setValue(this.employeeMasterDataSource.data[index]['district']);
  }

  // delete row from table
  goToDelete(index) {
    this.employeeMasterDataSource.data.splice(index, 1);
    this.employeeMasterDataSource = new MatTableDataSource(this.employeeMasterDataSource.data);
  }

  // reset form
  resetForm() {
    this.enrollEmployeeForm.reset();
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

  // open employee number dialog box
  openDialogEmployeeNumber() {
    const dialogRef = this.dialog.open(GiSearchEmployeeComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.enrollEmployeeForm.patchValue({
          employeeNo: result[0].employeeNumber,
          employeeName: result[0].employeeName,
          designation: 'IAS',
          district: 'Ahmedabad',
          group: 'A',
        });
      }
    });
  }

}
