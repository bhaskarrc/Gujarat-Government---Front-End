import { lfMessage } from './../../../common/error-message/common-message.constants';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { WorkflowDetailsLfComponent } from '../../workflow-details-lf/workflow-details-lf.component';
import { SearchEmployeeComponent } from '../../search-employee/search-employee.component';
import { EstablishmentDistrictOffice } from 'src/app/model/local-fund';
import { LocalFundDirective } from 'src/app/common/directive/local-fund-directive';



@Component({
  selector: 'app-establishment-district-office',
  templateUrl: './establishment-district-office.component.html',
  styleUrls: ['./establishment-district-office.component.css']
})
export class EstablishmentDistrictOfficeComponent implements OnInit {

  directiveObject = new LocalFundDirective(this.dialog);
  isSubmitted = false;
  errorMessages = lfMessage;
  referenceNumber = 'Reference Number:';
  referenceNumberDate = 'Reference Date:';
  todayDate = Date.now();
  establishmentDistrictOfficeForm: FormGroup;
  isListing = false;
  district = 'Ahmedabad';
  isEditClicked = false;
  indexValue: number;
  isDisabled = false;

  groupNumberList: ListValue[] = [
    { value: '0', viewValue: 'Assistant Examiner' },
    { value: '1', viewValue: 'Junior Assistant Examiner' },
    { value: '2', viewValue: 'PIO' },
    { value: '3', viewValue: 'Group 1 (Auditor)' },
    { value: '4', viewValue: 'Group 2 (Deputy Auditor)' },
    { value: '5', viewValue: 'Group 3 (Sub Auditor)' },
    { value: '6', viewValue: 'Group 4 (Junior Clerk)' },
    { value: '7', viewValue: 'Class 4' },

  ];
  categoryList: ListValue[] = [
    { value: '0', viewValue: 'Audit Staff' },
    { value: '1', viewValue: 'Office Staff' },
  ];

  employeeNameList: ListValue[] = [
    { value: '0', viewValue: 'Charul Patel' },
    { value: '1', viewValue: 'Sanket' },
    { value: '2', viewValue: 'Kirti Patel' },
    { value: '3', viewValue: 'Piyush Viyas' },
    { value: '4', viewValue: 'Prashant Prajapati' },
    { value: '5', viewValue: 'Anand Vaghela' },
    { value: '6', viewValue: 'Mr. X. Y. Zed' },
    { value: '7', viewValue: 'Mr. K. Y. Patel' },
  ];
  officeNameList: ListValue[] = [
    { value: '0', viewValue: 'Ahmedabad LF' },
    { value: '1', viewValue: 'GNC' },
  ];

  postDetailList: ListValue[] = [
    { value: '0', viewValue: 'Sanction Post' },
    { value: '1', viewValue: 'Filled Post' },
    { value: '2', viewValue: 'Vacant Post' },
  ];

  groupNumberCtrl: FormControl = new FormControl();
  employeeNameCtrl: FormControl = new FormControl();
  categoryCtrl: FormControl = new FormControl();
  officeNameCtrl: FormControl = new FormControl();
  postDetailCtrl: FormControl = new FormControl();
  // table data
  dataSourceList: EstablishmentDistrictOffice[] = [
    {
      district: 'Ahmedabad',
      officeName: 'Ahmedabad LF',
      employeeGroup: 'Group 1 (Auditor)',
      employeeNumber: '1234556433',
      employeeName: 'Mr. X. Y. Zed',
      category: 'Audit Staff',
      postDetail: 'Vacant Post'
    },
    {
      district: 'Ahmedabad',
      officeName: 'GNC',
      employeeGroup: 'Group 2 (Deputy Auditor)',
      employeeNumber: '1234567811',
      employeeName: 'Mr. K. Y. Patel',
      category: 'Office Staff',
      postDetail: 'Sanction Post'
    },
  ];

  // table datasource
  dataSource = new MatTableDataSource<EstablishmentDistrictOffice>(this.dataSourceList);

  // table columns
  displayedColumns: any[] = [
    'serialNo',
    'district',
    'officeName',
    'employeeNumber',
    'employeeName',
    'employeeGroup',
    'category',
    'postDetail',
    'action'

  ];


  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.establishmentDistrictOfficeForm = this.fb.group({
      groupNumber: [''],
      employeeName: [''],
      category: [''],
      districtName: ['Ahmedabad'],
      officeName: [''],
      postDetail: [''],
      employeeNo: ['']
    });
  }

  // reset form
  resetForm() {
  }

  // submit
  submit() { }

  // add form data into table
  add() {

    if (this.establishmentDistrictOfficeForm.valid) {
      this.isSubmitted = false;


      let groupNumberValue;
      let categoryValue;
      let officeNameValue;
      let postDetailValue;


      const groupNumber = this.establishmentDistrictOfficeForm.value.groupNumber;
      const category = this.establishmentDistrictOfficeForm.value.category;
      const officeName = this.establishmentDistrictOfficeForm.value.officeName;
      const postDetail = this.establishmentDistrictOfficeForm.value.postDetail;

      groupNumberValue = this.groupNumberList[groupNumber].viewValue;
      categoryValue = this.categoryList[category].viewValue;
      officeNameValue = this.officeNameList[officeName].viewValue;
      postDetailValue = this.postDetailList[postDetail].viewValue;

      /** if data is edited, updates table data at respective row else add new data into table**/

      if (this.isEditClicked) {
        this.dataSourceList.splice(this.indexValue, 1, {

          district: this.district,
          officeName: officeNameValue,
          employeeGroup: groupNumberValue,
          employeeNumber: this.establishmentDistrictOfficeForm.value.employeeNo,
          employeeName: this.establishmentDistrictOfficeForm.value.employeeName,
          category: categoryValue,
          postDetail: postDetailValue

        });

        this.dataSource = new MatTableDataSource<EstablishmentDistrictOffice>(this.dataSourceList);

        this.isDisabled = false;
        this.isEditClicked = false;
        this.establishmentDistrictOfficeForm.patchValue({
          groupNumber: [''],
          employeeName: [''],
          category: [''],
          districtName: ['Ahmedabad'],
          officeName: [''],
          postDetail: [''],
          employeeNo: ['']
        });
      } else {
        this.dataSourceList.push({
          employeeGroup: groupNumberValue,
          employeeName: this.establishmentDistrictOfficeForm.value.employeeName,
          employeeNumber: this.establishmentDistrictOfficeForm.value.employeeNo,
          category: categoryValue,
          district: this.district,
          officeName: officeNameValue,
          postDetail: postDetailValue
        });

        this.dataSource.data = this.dataSource.data;


      }
    } else {
      this.isSubmitted = true;
    }


  }

  // reset form data
  clearForm() {
    this.establishmentDistrictOfficeForm.reset();
    // patches value into form after reset
    this.establishmentDistrictOfficeForm.patchValue({
      districtName: ['Ahmedabad']
    });
  }

  // for enabling editing show respective row data into form
  edit(index) {
    this.isEditClicked = true; // to check is edit icon clicked
    this.isDisabled = true;     // to disable employee name field if edit clicked
    this.indexValue = index;

    const categoryValue = this.dataSourceList[index].category;
    const employeeGroupValue = this.dataSourceList[index].employeeGroup;
    const officeNameValue = this.dataSourceList[index].officeName;
    const postDetailValue = this.dataSourceList[index].postDetail;


    const length = Object.keys(this.categoryList).length;
    const length1 = Object.keys(this.groupNumberList).length;
    const length5 = Object.keys(this.officeNameList).length;
    const length6 = Object.keys(this.postDetailList).length;

    let category;
    let employeeGroup;
    let officeName;
    let postDetail;

    for (let i = 0; i < length1; i++) {

      if (employeeGroupValue === this.groupNumberList[i].viewValue) {
        employeeGroup = this.groupNumberList[i].value;

      }
    }
    for (let i = 0; i < length; i++) {

      if (categoryValue === this.categoryList[i].viewValue) {
        category = this.categoryList[i].value;

      }
    }
    for (let i = 0; i < length5; i++) {

      if (officeNameValue === this.officeNameList[i].viewValue) {
        officeName = this.officeNameList[i].value;

      }
    }

    for (let i = 0; i < length5; i++) {

      if (officeNameValue === this.officeNameList[i].viewValue) {
        officeName = this.officeNameList[i].value;

      }
    }

    for (let i = 0; i < length6; i++) {

      if (postDetailValue === this.postDetailList[i].viewValue) {
        postDetail = this.postDetailList[i].value;

      }
    }

    this.establishmentDistrictOfficeForm.setValue({
      groupNumber: employeeGroup,
      employeeName: this.dataSourceList[index].employeeName,
      category: category,
      districtName: this.district,
      officeName: officeName,
      postDetail: postDetail,
      employeeNo: this.dataSourceList[index].employeeNumber
    });

    return this.isEditClicked;
  }

  // delete respective row
  delete(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource.data = this.dataSource.data;
  }

  // opens employee number dialog box
  openDialogEmployeeNumber() {

    const dialogRef = this.dialog.open(SearchEmployeeComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {

        this.establishmentDistrictOfficeForm.patchValue({
          employeeNo: result[0].employeeNumber,
          employeeName: result[0].employeeName,
          category: '1'
        });
      }
    });
  }
}
