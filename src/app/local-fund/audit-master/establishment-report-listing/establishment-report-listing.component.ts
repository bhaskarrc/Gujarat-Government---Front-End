import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource, MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatPaginator } from '@angular/material';
import { DialogData } from 'src/app/model/standing-charge';
import { EstablishmentReportListing, EstablishmentReport } from 'src/app/model/local-fund';


// listing data
const ELEMENT_DATA = [
  {
    district: 'Ahmedabad',
    subDivision: '-',
    officeName: 'Ahmedabad LF',
    employeeGroup: 'Auditor',
    employeeName: 'Mr. X. Y. Zed',
    category: 'Audit Staff'
  },
  {
    district: 'Gandhinagar',
    subDivision: 'Municipal Corporation',
    officeName: 'GNC',
    employeeGroup: 'Deputy Auditor',
    employeeName: 'Mr. K. Y Patel',
    category: 'Office Staff'
  },
];

// establishment report
const ELEMENT_DATA1 = [
  {
    officeName: 'District Office',
    sanctionedPost: '112',
    filledPost: '89',
    vacantPost: '23'

  },
  {
    officeName: 'Corporation Office',
    sanctionedPost: '36',
    filledPost: '30',
    vacantPost: '6'

  },
  {
    officeName: 'Head Office',
    sanctionedPost: '45',
    filledPost: '38',
    vacantPost: '7'

  },
];

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-establishment-report-table',
  templateUrl: 'establishment-report-tables.html',
  styleUrls: ['./establishment-report-listing.component.css']

})
// tslint:disable-next-line: component-class-suffix
export class EstablishmentReportTablesComponent {
  vacantIndex;
  filledPostIndex;
  sanctionedIndex;
  isDistrictOfficeFPost;
  isCorporationOfficeFPost;
  isHeadOfficeFPost;
  isDistrictOfficeVPost = false;
  isCorporationOfficeVPost = false;
  isHeadOfficeVPost = false;
  isDistrictOffice: boolean;
  isCorporationOffice: boolean;
  isHeadOffice: boolean;

  // passes data which sanction post,filled post, vacant post is selected
  constructor(
    public dialogRef: MatDialogRef<EstablishmentReportTablesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {


    this.vacantIndex = data['vacantIndex'];
    this.filledPostIndex = data['filledPostIndex'];
    this.sanctionedIndex = data['sanctionedIndex'];

    if (this.vacantIndex === 0) {
      this.isDistrictOfficeVPost = true;
      this.isCorporationOfficeVPost = false;
      this.isHeadOfficeVPost = false;
    }
    if (this.vacantIndex === 1) {
      this.isDistrictOfficeVPost = false;
      this.isCorporationOfficeVPost = true;
      this.isHeadOfficeVPost = false;
    }
    if (this.vacantIndex === 2) {
      this.isDistrictOfficeVPost = false;
      this.isCorporationOfficeVPost = false;
      this.isHeadOfficeVPost = true;
    }

    if (this.filledPostIndex === 0) {
      this.isDistrictOfficeFPost = true;
      this.isCorporationOfficeFPost = false;
      this.isHeadOfficeFPost = false;
    }
    if (this.filledPostIndex === 1) {
      this.isDistrictOfficeFPost = false;
      this.isCorporationOfficeFPost = true;
      this.isHeadOfficeFPost = false;
    }
    if (this.filledPostIndex === 2) {
      this.isDistrictOfficeFPost = false;
      this.isCorporationOfficeFPost = false;
      this.isHeadOfficeFPost = true;
    }

    if (this.sanctionedIndex === 0) {
      this.isDistrictOffice = true;
      this.isCorporationOffice = false;
      this.isHeadOffice = false;
    }
    if (this.sanctionedIndex === 1) {
      this.isDistrictOffice = false;
      this.isCorporationOffice = true;
      this.isHeadOffice = false;
    }
    if (this.sanctionedIndex === 2) {
      this.isDistrictOffice = false;
      this.isCorporationOffice = false;
      this.isHeadOffice = true;
    }

  }

  // closes the dialog box
  close() {
    this.dialogRef.close();
  }
}
@Component({
  selector: 'app-establishment-report-listing',
  templateUrl: './establishment-report-listing.component.html',

})
export class EstablishmentReportListingComponent implements OnInit {

  referenceNumber = 'Reference Number:';
  referenceNumberDate = 'Reference Date:';
  todayDate = Date.now();
  searchForm: FormGroup;
  establishmentReport: FormGroup;
  filterElementData: any[];

  // variables to check which row value of sanction post is selected
  isDistrictOffice = false;
  isCorporationOffice = false;
  isHeadOffice = false;

  // variables to check which row value of filled post is selected
  isDistrictOfficeFPost = false;
  isCorporationOfficeFPost = false;
  isHeadOfficeFPost = false;

  // variable to check which row value of vacant post is selected
  isDistrictOfficeVPost = false;
  isCorporationOfficeVPost = false;
  isHeadOfficeVPost = false;

  groupNumberList: ListValue[] = [
    { value: '0', viewValue: 'Auditor' },
    { value: '1', viewValue: 'Deputy Auditor' },
    { value: '2', viewValue: 'Sub Auditor, Sr. Clerk' },
    { value: '3', viewValue: 'Jr. Clerk' },

  ];

  categoryList: ListValue[] = [
    { value: '0', viewValue: 'Audit Staff' },
    { value: '1', viewValue: 'Office Staff' },
  ];

  employeeNameList: ListValue[] = [
    { value: '0', viewValue: 'Charul Patel' },
    { value: '1', viewValue: 'Mr. K. Y Patel' },
    { value: '2', viewValue: 'Kirti Patel' },
    { value: '3', viewValue: 'Piyush Viyush' },
    { value: '4', viewValue: 'Mr. X. Y. Zed' },
    { value: '5', viewValue: 'Anand Vaghela' },
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
    { value: '0', viewValue: '-' },
    { value: '1', viewValue: 'Municipal Corporation' },
  ];

  officeNameList: ListValue[] = [
    { value: '0', viewValue: 'Ahmedabad LF' },
    { value: '1', viewValue: 'GNC' },
  ];

  groupNumberCtrl: FormControl = new FormControl();
  employeeNameCtrl: FormControl = new FormControl();
  categoryCtrl: FormControl = new FormControl();
  districtNameCtrl: FormControl = new FormControl();
  subDivisionCtrl: FormControl = new FormControl();
  officeNameCtrl: FormControl = new FormControl();

  // listing datasource
  dataSource = new MatTableDataSource<EstablishmentReportListing>(ELEMENT_DATA);

  // listing columns
  displayedColumns: any[] = [
    'serialNo',
    'district',
    'subDivision',
    'officeName',
    'employeeGroup',
    'employeeName',
    'category',
  ];

  // establishment report datasource
  dataSourceEstablishmentReport = new MatTableDataSource<EstablishmentReport>(ELEMENT_DATA1);

  // establishment report columns
  displayedColumnsEstablishmentReport: any[] = [
    'officeName',
    'sanctionedPost',
    'filledPost',
    'vacantPost'
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSourceEstablishmentReport.paginator = this.paginator;
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
      subDivision: ['']
    });
  }

  // search data on basis of search fields
  onSearch() {
    const formVal = this.searchForm.value;

    if (formVal.districtName !== '' && formVal.districtName !== null) {
      const districtName = formVal.districtName;

      const district = this.districtNameList[districtName].viewValue;
      this.filterElementData = ELEMENT_DATA.filter(
        searchBy => searchBy.district.toLowerCase() === district.toLowerCase());
      this.dataSource = new MatTableDataSource<any>(this.filterElementData);

    }

    if (formVal.officeName !== '' && formVal.officeName !== null) {
      const officeName = formVal.officeName;

      const districtName = this.officeNameList[officeName].viewValue;
      this.filterElementData = ELEMENT_DATA.filter(
        searchBy => searchBy.officeName.toLowerCase() === districtName.toLowerCase());
      this.dataSource = new MatTableDataSource<any>(this.filterElementData);

    }

    if (formVal.employeeName !== '' && formVal.employeeName !== null) {
      const employeeName = formVal.employeeName;
      const employee = this.employeeNameList[employeeName].viewValue;
      this.filterElementData = ELEMENT_DATA.filter(
        searchBy => searchBy.employeeName.toLowerCase() === employee.toLowerCase());
      this.dataSource = new MatTableDataSource<any>(this.filterElementData);

    }

    if (formVal.groupNumber !== '' && formVal.groupNumber !== null) {
      const groupNumber = formVal.groupNumber;
      const group = this.groupNumberList[groupNumber].viewValue;
      this.filterElementData = ELEMENT_DATA.filter(
        searchBy => searchBy.employeeGroup.toLowerCase() === group.toLowerCase());
      this.dataSource = new MatTableDataSource<any>(this.filterElementData);
    }

    if (formVal.category !== '' && formVal.category !== null) {
      const category = formVal.category;
      const categoryValue = this.categoryList[category].viewValue;
      this.filterElementData = ELEMENT_DATA.filter(
        searchBy => searchBy.category.toLowerCase() === categoryValue.toLowerCase());
      this.dataSource = new MatTableDataSource<any>(this.filterElementData);

    }

    if (formVal.subDivision !== '' && formVal.subDivision !== null) {
      const subDivision = formVal.subDivision;
      const districtName = this.subDivisionList[subDivision].viewValue;
      this.filterElementData = ELEMENT_DATA.filter(
        searchBy => searchBy.subDivision.toLowerCase() === districtName.toLowerCase());
      this.dataSource = new MatTableDataSource<any>(this.filterElementData);
    }

    if ((formVal.districtName === '' || formVal.districtName == null) &&
      (formVal.employeeName === '' || formVal.employeeName == null) &&
      (formVal.groupNumber === '' || formVal.groupNumber == null) &&
      (formVal.category === '' || formVal.category == null) &&
      (formVal.subDivision === '' || formVal.subDivision == null) &&
      (formVal.officeName === '' || formVal.officeName == null)
    ) {
      this.dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
    }
  }

  // reset search form
  clearForm() {
    this.searchForm.reset();
  }

  // select sanction post and opens dialog pop-up
  selectSanctionPost(sanctionedIndex) {
    const dialogRef = this.dialog.open(EstablishmentReportTablesComponent, {
      width: '1000px', data: { sanctionedIndex }
    });
  }

  // select filled post and opens dialog pop-up
  selectFilledPost(filledPostIndex) {
    const dialogRef = this.dialog.open(EstablishmentReportTablesComponent, {
      width: '1000px', data: { filledPostIndex }
    });
  }


  // select vacant post and opens dialog pop-up
  selectVacantPost(vacantIndex) {
    const dialogRef = this.dialog.open(EstablishmentReportTablesComponent, {
      width: '1000px', data: { vacantIndex }
    });
  }

}


