import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { lfMessage } from 'src/app/common/error-message/common-message.constants';
import { WorkflowDetailsLfComponent } from '../../workflow-details-lf/workflow-details-lf.component';
import { SearchEmployeeComponent } from '../../search-employee/search-employee.component';
import { EstablishmentHq } from 'src/app/model/local-fund';
import { LocalFundDirective } from 'src/app/common/directive/local-fund-directive';




@Component({
  selector: 'app-establishment-hq',
  templateUrl: './establishment-hq.component.html',
  styleUrls: ['./establishment-hq.component.css']
})
export class EstablishmentHqComponent implements OnInit {

  // variables
  referenceNumber = 'Reference Number:';
  referenceNumberDate = 'Reference Date:';
  todayDate = Date.now();
  establishmentHqForm: FormGroup;
  establishmentHqFormInfo = 'Establishment HQ';
  isListing = false;
  isSubmitted = false;
  isDisabled = false;
  isEditClicked = false;
  errorMessages = lfMessage;
  indexValue: number;
  updatedData: any[] = [];
  directiveObject = new LocalFundDirective(this.dialog);

  // list
  groupNumberList: ListValue[] = [
    { value: '0', viewValue: 'Examiner' },
    { value: '1', viewValue: 'Joint Examiner' },
    { value: '2', viewValue: 'Deputy Examiner' },
    { value: '3', viewValue: 'Assistant Examiner' },
    { value: '4', viewValue: 'Junior Assistant Examiner' },
    { value: '5', viewValue: 'PIO' },
    { value: '6', viewValue: 'Group 1 (Auditor)' },
    { value: '7', viewValue: 'Group 2 (Deputy Auditor)' },
    { value: '8', viewValue: 'Group 3 (Sub Auditor)' },
    { value: '9', viewValue: 'Group 4 (Junior Clerk)' },
    { value: '10', viewValue: 'Class 4' },
    { value: '11', viewValue: 'Driver' },
    { value: '12', viewValue: 'Stenographer' },


  ];

  categoryList: ListValue[] = [
    { value: '0', viewValue: 'Audit Staff' },
    { value: '1', viewValue: 'Office Staff' },
  ];

  postDetailList: ListValue[] = [
    { value: '0', viewValue: 'Sanction Post' },
    { value: '1', viewValue: 'Filled Post' },
    { value: '2', viewValue: 'Vacant Post' },
  ];

  groupNumberCtrl: FormControl = new FormControl();
  categoryCtrl: FormControl = new FormControl();
  postDetailCtrl: FormControl = new FormControl();

  // table data
  dataSourceList: EstablishmentHq[] = [
    {
      officeName: 'Ahmedabad LF',
      employeeGroup: 'Group 4 (Junior Clerk)',
      employeeName: 'Mr. X. Y. Zed',
      employeeNumber: '1234556433',
      category: 'Audit Staff',
      postDetail: 'Vacant Post'

    },
    {
      officeName: 'GNC',
      employeeGroup: 'Group 2 (Deputy Auditor)',
      employeeName: 'Mr. K. Y. Patel',
      employeeNumber: '1234567811',
      category: 'Office Staff',
      postDetail: 'Sanction Post'
    },
  ];

  // table datasource
  dataSource = new MatTableDataSource<EstablishmentHq>(this.dataSourceList);

  // table columns
  displayedColumns: any[] = [
    'serialNo',
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
    this.submitFormData();
  }

  // form data
  submitFormData() {
    this.establishmentHqForm = this.fb.group({
      groupNumber: [''],
      employeeName: [''],
      category: [''],
      postDetail: [''],
      employeeNo: ['']
    });
  }

  // reset form
  resetForm() {
  }

  // add form data into table
  add() {

    if (this.establishmentHqForm.valid) {
      this.isSubmitted = false;
      let employeeGroupValue: string;
      let categoryValue: string;

      let postDetailValue;
      const groupNumber = this.establishmentHqForm.value.groupNumber;
      const category = this.establishmentHqForm.value.category;
      const postDetail = this.establishmentHqForm.value.postDetail;

      employeeGroupValue = this.groupNumberList[groupNumber].viewValue;
      categoryValue = this.categoryList[category].viewValue;
      postDetailValue = this.postDetailList[postDetail].viewValue;

      /** if data is edited, updates table data at respective row else add new data into table**/

      if (this.isEditClicked) {
        this.dataSourceList.splice(this.indexValue, 1, {
          employeeGroup: employeeGroupValue,
          employeeNumber: this.establishmentHqForm.value.employeeNo,
          employeeName: this.establishmentHqForm.value.employeeName,
          category: categoryValue,
          officeName: 'Ahmedabad LF',
          postDetail: postDetailValue
        });

        this.dataSource = new MatTableDataSource<EstablishmentHq>(this.dataSourceList);

        this.isDisabled = false;
        this.isEditClicked = false;
        this.establishmentHqForm.patchValue({
          groupNumber: [''],
          employeeName: [''],
          category: [''],
          postDetail: [''],
          employeeNo: ['']

        });
      } else {
        this.dataSourceList.push({
          employeeGroup: employeeGroupValue,
          employeeName: this.establishmentHqForm.value.employeeName,
          employeeNumber: this.establishmentHqForm.value.employeeNo,
          category: categoryValue,
          officeName: 'Ahmedabad LF',
          postDetail: postDetailValue
        });

        this.dataSource.data = this.dataSource.data;
      }

    } else {
      this.isSubmitted = true;
    }

  }

  // delete respective row
  delete(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource.data = this.dataSource.data;
  }

  // reset form data
  clearForm() {
    this.establishmentHqForm.reset();
    this.isEditClicked = false;
    this.isDisabled = false;
  }

  // for enabling editing show respective row data into form
  edit(index) {
    this.isEditClicked = true;  // to check is edit icon clicked
    this.isDisabled = true;     // to disable employee name field if edit clicked
    this.indexValue = index;
    const categoryValue = this.dataSourceList[index].category;
    const employeeGroupValue = this.dataSourceList[index].employeeGroup;
    const postDetailValue = this.dataSourceList[index].postDetail;
    const length = Object.keys(this.categoryList).length;
    const length1 = Object.keys(this.groupNumberList).length;
    const length3 = Object.keys(this.postDetailList).length;

    let category;
    let employeeGroup;
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

    for (let i = 0; i < length3; i++) {

      if (postDetailValue === this.postDetailList[i].viewValue) {
        postDetail = this.postDetailList[i].value;

      }
    }
    this.establishmentHqForm.setValue({
      groupNumber: employeeGroup,
      employeeName: this.dataSourceList[index].employeeName,
      category: category,
      postDetail: postDetail,
      employeeNo: this.dataSourceList[index].employeeNumber
    });

    return this.isEditClicked;
  }

  // open employee number dialog box
  openDialogEmployeeNumber() {

    const dialogRef = this.dialog.open(SearchEmployeeComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {

        this.establishmentHqForm.patchValue({
          employeeNo: result[0].employeeNumber,
          employeeName: result[0].employeeName,
          category: '1'
        });
      }
    });
  }
}
