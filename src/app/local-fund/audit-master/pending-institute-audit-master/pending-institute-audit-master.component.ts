import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { ListValue } from 'src/app/model/common-grant';
import { PendingInstitute } from 'src/app/model/local-fund';



// table data
const ELEMENT_DATA: PendingInstitute[] = [
  {
    financialYear: '2018-19',
    districtName: 'Ahmedabad',
    instituteName: 'AMC',
    instituteType: 'Municipal Corporation',
    sanctionedManDays: 20,
    additionalManDays: 10,
    totalManDays: 30,
  },
  {
    financialYear: '2018-19',
    districtName: 'Ahmedabad',
    instituteName: 'District Panchayat Office',
    instituteType: 'District Panchayat',
    sanctionedManDays: 35,
    additionalManDays: 10,
    totalManDays: 45,
  }
];
@Component({
  selector: 'app-pending-institute-audit-master',
  templateUrl: './pending-institute-audit-master.component.html',
  styleUrls: ['./pending-institute-audit-master.component.css']
})
export class PendingInstituteAuditMasterComponent implements OnInit {

  searchForm: FormGroup;
  filterElementData: any[];

  financialYearCtrl: FormControl = new FormControl();
  districtNameCtrl: FormControl = new FormControl();
  instituteTypeCtrl: FormControl = new FormControl();

  financialYearList: ListValue[] = [
    { value: '2018-19', viewValue: '2018-2019' },
    { value: '2019-20', viewValue: '2019-2020' },
    { value: '2020-21', viewValue: '2020-2021' },
    { value: '2021-22', viewValue: '2021-2022' },
    { value: '2022-23', viewValue: '2022-2023' },
  ];
  districtNameList: ListValue[] = [
    { value: 'Ahmedabad', viewValue: 'Ahmedabad' },
    { value: 'Gandhinagar', viewValue: 'Gandhinagar' },
  ];

  instituteTypeList: ListValue[] = [
    { value: '0', viewValue: 'MahaNagar Palika' },
    { value: '1', viewValue: 'Nagarpalika' },
    { value: '2', viewValue: 'District Panchayat' },
    { value: '3', viewValue: 'Taluka Panchayat' },
    { value: '4', viewValue: 'University' },
    { value: '5', viewValue: 'Municiple School Board' },
    { value: '6', viewValue: 'Village Panchayat' },
    { value: '7', viewValue: 'Police Welfare Fund' },
    { value: '8', viewValue: 'Provident Fund of District Panchayat' },
    { value: '9', viewValue: 'Provident Fund of Secondary Education office' },
    { value: '10', viewValue: 'Ambaji Temple Trust' },
    { value: '11', viewValue: 'Others' },

  ];

  // table datasource
  dataSource = new MatTableDataSource<PendingInstitute>(ELEMENT_DATA);

  // table columns
  displayedColumns: any[] = [
    'serialNo',
    'financialYear',
    'districtName',
    'instituteName',
    'instituteType',
    'sanctionedManDays',
    'additionalManDays',
    'totalManDays',

  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.searchFormData();
  }

  // form data
  searchFormData() {
    this.searchForm = this.fb.group({
      financialYear: [''],
      districtName: [''],
      instituteName: [''],
      instituteType: ['']
    });
  }

  // reset form data
  clearForm() {
    this.searchForm.reset();
  }

  // search data on basis of search fiels
  onSearch() {
    const formVal = this.searchForm.value;

    const instituteTypeValue = formVal.instituteType;

    console.log(formVal);
    if (formVal.financialYear !== '' && formVal.financialYear != null) {
      this.filterElementData = ELEMENT_DATA.filter(
        searchByFinancialYear => searchByFinancialYear.financialYear.toLowerCase() === formVal.financialYear.toLowerCase());
      this.dataSource = new MatTableDataSource<any>(this.filterElementData);
    }

    if (formVal.districtName !== '' && formVal.districtName != null) {
      this.filterElementData = ELEMENT_DATA.filter(
        searchBy => searchBy.districtName.toLowerCase() === formVal.districtName.toLowerCase());
      this.dataSource = new MatTableDataSource<any>(this.filterElementData);
    }
    if (formVal.instituteName !== '' && formVal.instituteName != null) {
      this.filterElementData = ELEMENT_DATA.filter(
        searchBy => searchBy.instituteName.toLowerCase() === formVal.instituteName.toLowerCase());
      this.dataSource = new MatTableDataSource<any>(this.filterElementData);
    }

    if (formVal.instituteType !== '' && formVal.instituteType != null) {
      const instituteType = this.instituteTypeList[instituteTypeValue].viewValue;
      this.filterElementData = ELEMENT_DATA.filter(
        searchBy => searchBy.instituteType.toLowerCase() === instituteType.toLowerCase());
      this.dataSource = new MatTableDataSource<any>(this.filterElementData);
    }

    if ((formVal.financialYear === '' || formVal.financialYear == null) &&
      (formVal.districtName === '' || formVal.districtName == null) &&
      (formVal.instituteName === '' || formVal.instituteName == null) &&
      (formVal.instituteType === '' || formVal.instituteType == null)) {
      this.dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
    }
  }
}
