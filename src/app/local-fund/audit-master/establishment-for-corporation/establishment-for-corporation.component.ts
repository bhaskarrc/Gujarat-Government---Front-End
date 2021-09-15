import { lfMessage } from './../../../common/error-message/common-message.constants';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { WorkflowDetailsLfComponent } from '../../workflow-details-lf/workflow-details-lf.component';
import { GiSearchEmployeeComponent } from 'src/app/group-insurance/gi-search-employee/gi-search-employee.component';
import { SearchEmployeeComponent } from '../../search-employee/search-employee.component';
import { EstablishmentForCorporation } from 'src/app/model/local-fund';
import { LocalFundDirective } from 'src/app/common/directive/local-fund-directive';




@Component({
  selector: 'app-establishment-for-corporation',
  templateUrl: './establishment-for-corporation.component.html',
  styleUrls: ['./establishment-for-corporation.component.css']
})
export class EstablishmentForCorporationComponent implements OnInit {

  directiveObject = new LocalFundDirective(this.dialog);
  isSubmitted = false;
  errorMessages: any = lfMessage;
  referenceNumber = 'Reference Number:';
  referenceNumberDate = 'Reference Date:';
  todayDate = Date.now();
  isEditClicked = false;
  indexValue: number;
  isDisabled = false;

  establishmentForCorporationForm: FormGroup;
  establishmentForCorporationFormInfo = 'Establishment For Corporation';
  isListing = false;

  // list
  groupNumberList: ListValue[] = [
    { value: '0', viewValue: 'Deputy Examiner' },
    { value: '1', viewValue: 'Assistant Examiner' },
    { value: '2', viewValue: 'Junior Assistant Examiner' },
    { value: '3', viewValue: 'PIO' },
    { value: '4', viewValue: 'Group 1 (Auditor)' },
    { value: '5', viewValue: 'Group 2 (Deputy Auditor)' },
    { value: '6', viewValue: 'Group 3 (Sub Auditor)' },
    { value: '7', viewValue: 'Group 4 (Junior Clerk)' },
    { value: '8', viewValue: 'Class 4' },
  ];

  categoryList: ListValue[] = [
    { value: '0', viewValue: 'Audit Staff' },
    { value: '1', viewValue: 'Office Staff' },
  ];

  districtNameList: ListValue[] = [
    { value: '0', viewValue: 'Ahmedabad' },
    { value: '1', viewValue: 'Amreli' },
    { value: '2', viewValue: 'Anand' },
    { value: '3', viewValue: 'Aravalli' },
    { value: '4', viewValue: 'Banaskantha' },
    { value: '5', viewValue: 'Bharuch' },
    { value: '6', viewValue: 'Bhavnagar' },
    { value: '7', viewValue: 'Botad' },
    { value: '8', viewValue: 'Chhota Udaipur' },
    { value: '9', viewValue: 'Dahod' },
    { value: '10', viewValue: 'Dang' },
    { value: '11', viewValue: 'Devbhoomi Dwarka' },
    { value: '12', viewValue: 'Gandhinagar' },
    { value: '13', viewValue: 'Gir Somnath' },
    { value: '14', viewValue: 'Jamnagar' },
    { value: '15', viewValue: 'Junagadh' },
    { value: '16', viewValue: 'Kutch' },
    { value: '17', viewValue: 'Kheda' },
    { value: '18', viewValue: 'Mahisagar' },
    { value: '19', viewValue: 'Mehsana' },
    { value: '20', viewValue: 'Morbi' },
    { value: '21', viewValue: 'Narmada' },
    { value: '22', viewValue: 'Navsari' },
    { value: '23', viewValue: 'Panchmahal' },
    { value: '24', viewValue: 'Patan' },
    { value: '25', viewValue: 'Porbandar' },
    { value: '26', viewValue: 'Rajkot' },
    { value: '27', viewValue: 'Sabarkantha' },
    { value: '28', viewValue: 'Surat' },
    { value: '29', viewValue: 'Surendranagar' },
    { value: '30', viewValue: 'Tapi' },
    { value: '31', viewValue: 'Vadodara' },
    { value: '32', viewValue: 'Valsad' },
  ];


  subDivisionList: ListValue[] = [
    { value: '0', viewValue: 'Dy, Examiner office, Ahmedabad' },
    { value: '1', viewValue: 'Dy. Examiner office, Vadodara' },
    { value: '2', viewValue: 'Dy. Examiner offce, Surat' },
    { value: '3', viewValue: 'Dy. Examiner office, Rajkot' },
  ];

  officeNameList: ListValue[] = [
    { value: '0', viewValue: 'Ahmedabad LF' },
    { value: '1', viewValue: 'GNC' },
    { value: '2', viewValue: 'SU' },
  ];

  postDetailList: ListValue[] = [
    { value: '0', viewValue: 'Sanction Post' },
    { value: '1', viewValue: 'Filled Post' },
    { value: '2', viewValue: 'Vacant Post' },
  ];

  // table data
  dataSourceList: EstablishmentForCorporation[] = [
    {
      district: 'Ahmedabad',
      subDivision: 'Dy, Examiner office, Ahmedabad',
      officeName: 'Ahmedabad LF',
      employeeGroup: 'Group 2 (Deputy Auditor)',
      employeeNumber: '1234556433',
      employeeName: 'Mr. X. Y. Zed',
      category: 'Audit Staff',
      postDetail: 'Vacant Post'
    },
    {
      district: 'Surat',
      subDivision: 'Dy. Examiner offce, Surat',
      officeName: 'SU',
      employeeGroup: 'Group 1 (Auditor)',
      employeeNumber: '1234567811',
      employeeName: 'Mr. K. Y Patel',
      category: 'Office Staff',
      postDetail: 'Sanction Post'
    },
  ];

  groupNumberCtrl: FormControl = new FormControl();
  categoryCtrl: FormControl = new FormControl();
  districtNameCtrl: FormControl = new FormControl();
  subDivisionCtrl: FormControl = new FormControl();
  officeNameCtrl: FormControl = new FormControl();
  postDetailCtrl: FormControl = new FormControl();

  // table datasource
  dataSource = new MatTableDataSource<EstablishmentForCorporation>(this.dataSourceList);

  // table columns
  displayedColumns: any[] = [
    'serialNo',
    'district',
    'subDivision',
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
    this.establishmentForCorporationForm = this.fb.group({
      groupNumber: [''],
      employeeName: [''],
      category: [''],
      districtName: [''],
      subDivision: [''],
      officeName: [''],
      postDetail: [''],
      employeeNo: ['']
    });
  }

  // reset form data
  resetForm() {
    this.establishmentForCorporationForm.reset();
  }

  // add form data into table
  add() {

    if (this.establishmentForCorporationForm.valid) {
      this.isSubmitted = false;

      this.isListing = true;

      let districtName;
      let subDivisonValue;
      let groupNumberValue;
      let categoryValue;
      let officeNameValue;
      let postDetailValue;


      const district = this.establishmentForCorporationForm.value.districtName;
      const subDivison = this.establishmentForCorporationForm.value.subDivision;
      const groupNumber = this.establishmentForCorporationForm.value.groupNumber;
      const category = this.establishmentForCorporationForm.value.category;
      const officeName = this.establishmentForCorporationForm.value.officeName;
      const postDetail = this.establishmentForCorporationForm.value.postDetail;

      districtName = this.districtNameList[district].viewValue;
      subDivisonValue = this.subDivisionList[subDivison].viewValue;
      groupNumberValue = this.groupNumberList[groupNumber].viewValue;
      categoryValue = this.categoryList[category].viewValue;
      officeNameValue = this.officeNameList[officeName].viewValue;
      postDetailValue = this.postDetailList[postDetail].viewValue;

      /** if data is edited, updates table data at respective row else add new data into table**/

      if (this.isEditClicked) {
        this.dataSourceList.splice(this.indexValue, 1, {

          district: districtName,
          subDivision: subDivisonValue,
          officeName: officeNameValue,
          employeeGroup: groupNumberValue,
          employeeNumber: this.establishmentForCorporationForm.value.employeeNo,
          employeeName: this.establishmentForCorporationForm.value.employeeName,
          category: categoryValue,
          postDetail: postDetailValue
        });

        this.dataSource = new MatTableDataSource<EstablishmentForCorporation>(this.dataSourceList);

        this.isDisabled = false;
        this.isEditClicked = false;
        this.establishmentForCorporationForm.patchValue({
          groupNumber: [''],
          employeeName: [''],
          category: [''],
          districtName: [''],
          subDivision: [''],
          officeName: [''],
          employeeNo: [''],
          postDetail: ['']
        });
      } else {
        this.dataSourceList.push({
          district: districtName,
          subDivision: subDivisonValue,
          officeName: officeNameValue,
          employeeGroup: groupNumberValue,
          employeeName: this.establishmentForCorporationForm.value.employeeName,
          employeeNumber: this.establishmentForCorporationForm.value.employeeNo,
          category: categoryValue,
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
    this.establishmentForCorporationForm.reset();
    this.isDisabled = false;
    this.isEditClicked = false;
  }

  // for enabling editing show respective row data into form
  editRow(index) {
    this.isEditClicked = true;   // to check is edit icon clicked
    this.isDisabled = true;      // to disable employee name field if edit clicked
    this.indexValue = index;

    const categoryValue = this.dataSourceList[index].category;
    const employeeGroupValue = this.dataSourceList[index].employeeGroup;
    const employeeNameValue = this.dataSourceList[index].employeeName;
    const districtValue = this.dataSourceList[index].district;
    const subDivisionValue = this.dataSourceList[index].subDivision;
    const officeNameValue = this.dataSourceList[index].officeName;
    const postDetailValue = this.dataSourceList[index].postDetail;



    const length = Object.keys(this.categoryList).length;
    const length1 = Object.keys(this.groupNumberList).length;
    const length3 = Object.keys(this.districtNameList).length;
    const length4 = Object.keys(this.subDivisionList).length;
    const length5 = Object.keys(this.officeNameList).length;
    const length6 = Object.keys(this.postDetailList).length;

    let category;
    let employeeGroup;
    let district;
    let subDivision;
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

    for (let i = 0; i < length3; i++) {

      if (districtValue === this.districtNameList[i].viewValue) {
        district = this.districtNameList[i].value;

      }
    }

    for (let i = 0; i < length4; i++) {

      if (subDivisionValue === this.subDivisionList[i].viewValue) {
        subDivision = this.subDivisionList[i].value;

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
    this.establishmentForCorporationForm.setValue({
      groupNumber: employeeGroup,
      employeeName: this.dataSourceList[index].employeeName,
      category: category,
      districtName: district,
      subDivision: subDivision,
      officeName: officeName,
      postDetail: postDetail,
      employeeNo: this.dataSourceList[index].employeeNumber
    });

    return this.isEditClicked;
  }

  // delete respective row
  deleteRow(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource.data = this.dataSource.data;
  }

  // open employee number dialog box
  openDialogEmployeeNumber() {
    const dialogRef = this.dialog.open(SearchEmployeeComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {

        this.establishmentForCorporationForm.patchValue({
          employeeNo: result[0].employeeNumber,
          employeeName: result[0].employeeName,
          category: '1'
        });
      }
    });
  }

}

