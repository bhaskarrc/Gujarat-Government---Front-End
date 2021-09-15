import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { SearchEmployeeComponent } from '../../search-employee/search-employee.component';
import { EstablishmentHq } from 'src/app/model/local-fund';

@Component({
  selector: 'app-establishment-hq-listing',
  templateUrl: './establishment-hq-listing.component.html',
  styleUrls: ['./establishment-hq-listing.component.css']
})
export class EstablishmentHqListingComponent implements OnInit {

  searchForm: FormGroup;
  filterElementData: any[];

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

  officeNameList: ListValue[] = [
    { value: '0', viewValue: 'Ahmedabad LF' },
    { value: '1', viewValue: 'GNC' },
  ];

  postDetailList: ListValue[] = [
    { value: '0', viewValue: 'Sanction Post' },
    { value: '1', viewValue: 'Filled Post' },
    { value: '2', viewValue: 'Vacant Post' },
  ];

  // form control
  postDetailCtrl: FormControl = new FormControl();
  groupNumberCtrl: FormControl = new FormControl();
  categoryCtrl: FormControl = new FormControl();
  districtNameCtrl: FormControl = new FormControl();
  officeNameCtrl: FormControl = new FormControl();


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

  dataSource = new MatTableDataSource<EstablishmentHq>(this.dataSourceList);

  // table columns
  displayedColumns: string[] = [
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
    this.searchFormData();
  }

  // form data
  searchFormData() {
    this.searchForm = this.fb.group({
      groupNumber: [''],
      officeName: [''],
      employeeName: [''],
      category: [''],
      districtName: [''],
      postDetail: [''],
      employeeNo: ['']
    });
  }

  // search data on basis of search fields
  onSearch() {
    const formVal = this.searchForm.value;

    if (formVal.officeName !== '' && formVal.officeName !== null) {
      const officeName = formVal.officeName;

      const districtName = this.officeNameList[officeName].viewValue;
      this.filterElementData = this.dataSourceList.filter(
        searchBy => searchBy.officeName.toLowerCase() === districtName.toLowerCase());
      this.dataSource = new MatTableDataSource<any>(this.filterElementData);

    }

    if (formVal.employeeNo !== '' && formVal.employeeNo !== null) {
      const employeeNo = formVal.employeeNo;
      console.log(employeeNo);
      console.log(typeof employeeNo);
      this.filterElementData = this.dataSourceList.filter(
        searchBy => searchBy.employeeNumber.toLowerCase() === employeeNo);
      this.dataSource = new MatTableDataSource<any>(this.filterElementData);

      if (formVal.employeeName !== '' && formVal.employeeName !== null) {
        const employeeName = formVal.employeeName;
        this.filterElementData = this.dataSourceList.filter(
          searchBy => searchBy.employeeName.toLowerCase() === employeeName.toLowerCase());
        this.dataSource = new MatTableDataSource<any>(this.filterElementData);

      }
    }


    if (formVal.groupNumber !== '' && formVal.groupNumber !== null) {
      const groupNumber = formVal.groupNumber;
      const group = this.groupNumberList[groupNumber].viewValue;
      this.filterElementData = this.dataSourceList.filter(
        searchBy => searchBy.employeeGroup.toLowerCase() === group.toLowerCase());
      this.dataSource = new MatTableDataSource<any>(this.filterElementData);
    }

    if (formVal.category !== '' && formVal.category !== null) {
      const category = formVal.category;
      const categoryValue = this.categoryList[category].viewValue;
      this.filterElementData = this.dataSourceList.filter(
        searchBy => searchBy.category.toLowerCase() === categoryValue.toLowerCase());
      this.dataSource = new MatTableDataSource<any>(this.filterElementData);

    }

    if (formVal.postDetail !== '' && formVal.postDetail !== null) {
      const postDetail = formVal.postDetail;
      const postDetailValue = this.postDetailList[postDetail].viewValue;
      this.filterElementData = this.dataSourceList.filter(
        searchBy => searchBy.postDetail.toLowerCase() === postDetailValue.toLowerCase());
      this.dataSource = new MatTableDataSource<any>(this.filterElementData);

    }

    if ((formVal.districtName === '' || formVal.districtName == null) &&
      (formVal.employeeName === '' || formVal.employeeName == null) &&
      (formVal.groupNumber === '' || formVal.groupNumber == null) &&
      (formVal.category === '' || formVal.category == null) &&
      (formVal.postDetail === '' || formVal.postDetail == null) &&
      (formVal.officeName === '' || formVal.officeName == null) &&
      (formVal.employeeNo === '' || formVal.employeeNo == null)
    ) {
      this.dataSource = new MatTableDataSource<any>(this.dataSourceList);
    }
  }

  // delete row
  deleteRow(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource.data = this.dataSource.data;
  }

  // reset search form
  clearForm() {
    this.searchForm.reset();
  }

  // open employee number dialog box
  openDialogEmployeeNumber() {

    const dialogRef = this.dialog.open(SearchEmployeeComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {

        this.searchForm.patchValue({
          employeeNo: result[0].employeeNumber,
          employeeName: result[0].employeeName,

        });
      }
    });
  }

}
