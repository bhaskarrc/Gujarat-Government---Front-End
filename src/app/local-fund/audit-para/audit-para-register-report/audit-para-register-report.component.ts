import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { AuditParaRegister } from 'src/app/model/local-fund';


@Component({
  selector: 'app-audit-para-register-report',
  templateUrl: './audit-para-register-report.component.html',
  styleUrls: ['./audit-para-register-report.component.css']
})
export class AuditParaRegisterReportComponent implements OnInit {

  searchForm: FormGroup;
  filterElementData: any[];

  instituteTypeCtrl: FormControl = new FormControl();
  instituteNameCtrl: FormControl = new FormControl();
  auditYearCtrl: FormControl = new FormControl();
  districtNameCtrl: FormControl = new FormControl();
  administrativeDepartmentCtrl: FormControl = new FormControl();
  paraClearedByCtrl: FormControl = new FormControl();


  paraClearedByList: ListValue[] = [
    { value: '0', viewValue: 'By Camp' },
    { value: '1', viewValue: 'Reply by Institute' },
    { value: '2', viewValue: 'Dropped' },
  ];

  administrativeDepartmentList: ListValue[] = [
    { value: '0', viewValue: 'Panchayat' },
    { value: '1', viewValue: 'Education' },
    { value: '2', viewValue: 'Agriculture' },
    { value: '3', viewValue: 'Health' },
    { value: '4', viewValue: 'Construction' },

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

  auditYearList: ListValue[] = [
    { value: '0', viewValue: '2017-18' },
    { value: '1', viewValue: '2018-19' },
    { value: '2', viewValue: '2019-20' },
    { value: '3', viewValue: '2020-21' },
  ];

  instituteTypeList: ListValue[] = [
    { value: '0', viewValue: 'Maha Nagarpalika' },
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
  instituteNameList: ListValue[] = [
    { value: '0', viewValue: 'Dahegam Nagarpalika' },
    { value: '1', viewValue: 'DMDG' },
    { value: '2', viewValue: 'District Panchayat - Gandhinagar' },
    { value: '3', viewValue: 'GMC' },
    { value: '4', viewValue: 'GPCB' },
    { value: '5', viewValue: 'Village Panchayat' },
    { value: '6', viewValue: 'District Panchayat - Ahmedabad' },
  ];

  // listing dat
  ElementData: AuditParaRegister[] = [
    {

      district: 'Gandhinagar',
      instituteName: 'Taluka panchayat, Gandhinagar',
      instituteType: 'Taluka Panchayat',
      auditYear: '2016-17',
      auditReportIssueDate: new Date('05/01/2016'),
      paraNo: 4,
      auditParaSubject: 'Subject of Para',
      paraDescription: 'Details of the Para',

      administrativeDepartment: 'Construction',
      majorHead: '4434',
      objectAmount: 2635,
      recoverableAmount: 2635,
      receivedAmount: 2635,
      pendingAmount: 0,
      clearanceDate: new Date('06/12/2016'),
      clearanceDetails: 'NA',
      clearedBy: 'By Camp',
      remarks: 'NA'

    },
    {

      district: 'Ahmedabad',
      instituteName: 'District Panchayat - Ahmedabad',
      instituteType: 'District Panchayat',
      auditYear: '2018-19',
      auditReportIssueDate: new Date('04/18/2018'),
      paraNo: 1,
      auditParaSubject: 'Subject of Para',
      paraDescription: 'Details of the Para',

      administrativeDepartment: 'Panchayat',
      majorHead: '7687',
      objectAmount: 456,
      recoverableAmount: 456,
      receivedAmount: 456,
      pendingAmount: 0,
      clearanceDate: new Date('04/30/2019'),
      clearanceDetails: 'NA',
      clearedBy: 'Reply by Institute',
      remarks: 'NA'

    },
    {

      district: 'Ahmedabad',
      instituteName: 'District Panchayat - Ahmedabad',
      instituteType: 'District Panchayat',
      auditYear: '2018-19',
      auditReportIssueDate: new Date('04/18/2018'),
      paraNo: 2,
      auditParaSubject: 'Subject of Para',
      paraDescription: 'Details of the Para',

      administrativeDepartment: 'Education',
      majorHead: '8694',
      objectAmount: 28736,
      recoverableAmount: 28736,
      receivedAmount: 28736,
      pendingAmount: 0,
      clearanceDate: new Date('04/30/2019'),
      clearanceDetails: 'NA',
      clearedBy: 'Reply by Institute',
      remarks: 'NA'

    },
    {

      district: 'Ahmedabad',
      instituteName: 'District Panchayat - Ahmedabad',
      instituteType: 'District Panchayat',
      auditYear: '2018-19',
      auditReportIssueDate: new Date('04/18/2018'),
      paraNo: 3,
      auditParaSubject: 'Subject of Para',
      paraDescription: 'Details of the Para',

      administrativeDepartment: 'Agriculture',
      majorHead: '2637',
      objectAmount: 995874,
      recoverableAmount: 990000,
      receivedAmount: 990000,
      pendingAmount: 5874,
      clearanceDate: new Date('04/30/2019'),
      clearanceDetails: 'NA',
      clearedBy: 'By Camp',
      remarks: 'NA'

    },
    {

      district: 'Ahmedabad',
      instituteName: 'District Panchayat - Ahmedabad',
      instituteType: 'District Panchayat',
      auditYear: '2018-19',
      auditReportIssueDate: new Date('04/18/2018'),
      paraNo: 4,
      auditParaSubject: 'Subject of Para',
      paraDescription: 'Details of the Para',

      administrativeDepartment: 'Education',
      majorHead: '4758',
      objectAmount: 10000,
      recoverableAmount: 10000,
      receivedAmount: 10000,
      pendingAmount: 0,
      clearanceDate: new Date('04/30/2019'),
      clearanceDetails: 'NA',
      clearedBy: 'Dropped',
      remarks: 'NA'

    },
    {

      district: 'Ahmedabad',
      instituteName: 'District Panchayat - Ahmedabad',
      instituteType: 'District Panchayat',
      auditYear: '2018-19',
      auditReportIssueDate: new Date('04/18/2018'),
      paraNo: 5,
      auditParaSubject: 'Subject of Para',
      paraDescription: 'Details of the Para',

      administrativeDepartment: 'Health',
      majorHead: '9847',
      objectAmount: 1200,
      recoverableAmount: 1000,
      receivedAmount: 1000,
      pendingAmount: 200,
      clearanceDate: new Date('04/30/2019'),
      clearanceDetails: 'NA',
      clearedBy: 'By Camp',
      remarks: 'NA'

    },
    {

      district: 'Ahmedabad',
      instituteName: 'District Panchayat - Ahmedabad',
      instituteType: 'District Panchayat',
      auditYear: '2018-19',
      auditReportIssueDate: new Date('04/18/2018'),
      paraNo: 6,
      auditParaSubject: 'Subject of Para',
      paraDescription: 'Details of the Para',

      administrativeDepartment: 'Construction',
      majorHead: '3465',
      objectAmount: 34567,
      recoverableAmount: 15000,
      receivedAmount: 15000,
      pendingAmount: 21547,
      clearanceDate: new Date('04/30/2019'),
      clearanceDetails: 'NA',
      clearedBy: 'By Camp',
      remarks: 'NA'

    },
    {

      district: 'Ahmedabad',
      instituteName: 'District Panchayat - Ahmedabad',
      instituteType: 'District Panchayat',
      auditYear: '2018-19',
      auditReportIssueDate: new Date('04/18/2018'),
      paraNo: 7,
      auditParaSubject: 'Subject of Para',
      paraDescription: 'Details of the Para',

      administrativeDepartment: 'Panchayat',
      majorHead: '8567',
      objectAmount: 98352,
      recoverableAmount: 85000,
      receivedAmount: 85000,
      pendingAmount: 13352,
      clearanceDate: new Date('04/30/2019'),
      clearanceDetails: 'NA',
      clearedBy: 'Dropped',
      remarks: 'NA'

    },
    {

      district: 'Ahmedabad',
      instituteName: 'District Panchayat - Ahmedabad',
      instituteType: 'District Panchayat',
      auditYear: '2018-19',
      auditReportIssueDate: new Date('04/18/2018'),
      paraNo: 8,
      auditParaSubject: 'Subject of Para',
      paraDescription: 'Details of the Para',

      administrativeDepartment: 'Panchayat',
      majorHead: '3756',
      objectAmount: 100,
      recoverableAmount: 100,
      receivedAmount: 100,
      pendingAmount: 0,
      clearanceDate: new Date('04/30/2019'),
      clearanceDetails: 'NA',
      clearedBy: 'Reply by Institute',
      remarks: 'NA'

    },
    {

      district: 'Ahmedabad',
      instituteName: 'District Panchayat - Ahmedabad',
      instituteType: 'District Panchayat',
      auditYear: '2018-19',
      auditReportIssueDate: new Date('04/18/2018'),
      paraNo: 9,
      auditParaSubject: 'Subject of Para',
      paraDescription: 'Details of the Para',

      administrativeDepartment: 'Panchayat',
      majorHead: '5764',
      objectAmount: 2500,
      recoverableAmount: 2500,
      receivedAmount: 2500,
      pendingAmount: 2500,
      clearanceDate: new Date('04/30/2019'),
      clearanceDetails: 'NA',
      clearedBy: 'Dropped',
      remarks: 'NA'

    },
    {

      district: 'Ahmedabad',
      instituteName: 'District Panchayat - Ahmedabad',
      instituteType: 'District Panchayat',
      auditYear: '2018-19',
      auditReportIssueDate: new Date('08/26/2018'),
      paraNo: 10,
      auditParaSubject: 'Subject of Para',
      paraDescription: 'Details of the Para',

      administrativeDepartment: 'Education',
      majorHead: '8767',
      objectAmount: 2635,
      recoverableAmount: 0,
      receivedAmount: 0,
      pendingAmount: 0,
      clearanceDate: new Date('10/10/2020'),
      clearanceDetails: 'NA',
      clearedBy: 'Reply by Institute',
      remarks: 'NA'
    },
    {

      district: 'Gandhinagar',
      instituteName: 'District Panchayat - Gandhinagar',
      instituteType: 'District Panchayat',
      auditYear: '2019-20',
      auditReportIssueDate: new Date('08/26/2018'),
      paraNo: 1,
      auditParaSubject: 'Subject of Para',
      paraDescription: 'Details of the Para',

      administrativeDepartment: 'Agriculture',
      majorHead: '9856',
      objectAmount: 456,
      recoverableAmount: 0,
      receivedAmount: 0,
      pendingAmount: 0,
      clearanceDate: new Date('10/11/2020'),
      clearanceDetails: 'NA',
      clearedBy: 'Dropped',
      remarks: 'NA'
    },
    {

      district: 'Gandhinagar',
      instituteName: 'District Panchayat - Gandhinagar',
      instituteType: 'District Panchayat',
      auditYear: '2019-20',
      auditReportIssueDate: new Date('08/26/2018'),
      paraNo: 2,
      auditParaSubject: 'Subject of Para',
      paraDescription: 'Details of the Para',

      administrativeDepartment: 'Education',
      majorHead: '1986',
      objectAmount: 28736,
      recoverableAmount: 28736,
      receivedAmount: 28736,
      pendingAmount: 0,
      clearanceDate: new Date('10/12/2020'),
      clearanceDetails: 'NA',
      clearedBy: 'By Camp',
      remarks: 'NA'
    },
    {

      district: 'Gandhinagar',
      instituteName: 'District Panchayat - Gandhinagar',
      instituteType: 'District Panchayat',
      auditYear: '2019-20',
      auditReportIssueDate: new Date('08/26/2018'),
      paraNo: 3,
      auditParaSubject: 'Subject of Para',
      paraDescription: 'Details of the Para',

      administrativeDepartment: 'Health',
      majorHead: '4499',
      objectAmount: 995874,
      recoverableAmount: 995874,
      receivedAmount: 995874,
      pendingAmount: 0,
      clearanceDate: new Date('10/13/2020'),
      clearanceDetails: 'NA',
      clearedBy: 'By Camp',
      remarks: 'NA'

    },
    {

      district: 'Gandhinagar',
      instituteName: 'District Panchayat - Gandhinagar',
      instituteType: 'District Panchayat',
      auditYear: '2019-20',
      auditReportIssueDate: new Date('08/26/2018'),
      paraNo: 4,
      auditParaSubject: 'Subject of Para',
      paraDescription: 'Details of the Para',

      administrativeDepartment: 'Construction',
      majorHead: '6588',
      objectAmount: 0,
      recoverableAmount: 0,
      receivedAmount: 0,
      pendingAmount: 0,
      clearanceDate: new Date('10/14/2020'),
      clearanceDetails: 'NA',
      clearedBy: 'Reply by Institute',
      remarks: 'NA'

    },
    {

      district: 'Gandhinagar',
      instituteName: 'District Panchayat - Gandhinagar',
      instituteType: 'District Panchayat',
      auditYear: '2019-20',
      auditReportIssueDate: new Date('08/26/2018'),
      paraNo: 5,
      auditParaSubject: 'Subject of Para',
      paraDescription: 'Details of the Para',

      administrativeDepartment: 'Panchayat',
      majorHead: '9433',
      objectAmount: 0,
      recoverableAmount: 0,
      receivedAmount: 0,
      pendingAmount: 0,
      clearanceDate: new Date('10/15/2020'),
      clearanceDetails: 'NA',
      clearedBy: 'Reply by Institute',
      remarks: 'NA'

    },
    {

      district: 'Gandhinagar',
      instituteName: 'District Panchayat - Gandhinagar',
      instituteType: 'District Panchayat',
      auditYear: '2019-20',
      auditReportIssueDate: new Date('08/26/2018'),
      paraNo: 6,
      auditParaSubject: 'Subject of Para',
      paraDescription: 'Details of the Para',

      administrativeDepartment: 'Panchayat',
      majorHead: '8765',
      objectAmount: 36547,
      recoverableAmount: 36000,
      receivedAmount: 36000,
      pendingAmount: 547,
      clearanceDate: new Date('10/16/2020'),
      clearanceDetails: 'NA',
      clearedBy: 'Dropped',
      remarks: 'NA'


    },
    {

      district: 'Gandhinagar',
      instituteName: 'District Panchayat - Gandhinagar',
      instituteType: 'District Panchayat',
      auditYear: '2019-20',
      auditReportIssueDate: new Date('08/26/2018'),
      paraNo: 7,
      auditParaSubject: 'Subject of Para',
      paraDescription: 'Details of the Para',

      administrativeDepartment: 'Health',
      majorHead: '4499',
      objectAmount: 98352,
      recoverableAmount: 0,
      receivedAmount: 0,
      pendingAmount: 98352,
      clearanceDate: new Date('10/17/2020'),
      clearanceDetails: 'NA',
      clearedBy: 'Reply by Institute',
      remarks: 'NA'

    },
    {

      district: 'Gandhinagar',
      instituteName: 'District Panchayat - Gandhinagar',
      instituteType: 'District Panchayat',
      auditYear: '2019-20',
      auditReportIssueDate: new Date('08/26/2018'),
      paraNo: 8,
      auditParaSubject: 'Subject of Para',
      paraDescription: 'Details of the Para',

      administrativeDepartment: 'Construction',
      majorHead: '8698',
      objectAmount: 0,
      recoverableAmount: 0,
      receivedAmount: 0,
      pendingAmount: 0,
      clearanceDate: new Date('10/18/2020'),
      clearanceDetails: 'NA',
      clearedBy: 'By Camp',
      remarks: 'NA'
    },
    {

      district: 'Gandhinagar',
      instituteName: 'District Panchayat - Gandhinagar',
      instituteType: 'District Panchayat',
      auditYear: '2019-20',
      auditReportIssueDate: new Date('08/26/2018'),
      paraNo: 9,
      auditParaSubject: 'Subject of Para',
      paraDescription: 'Details of the Para',

      administrativeDepartment: 'Health',
      majorHead: '5599',
      objectAmount: 0,
      recoverableAmount: 0,
      receivedAmount: 0,
      pendingAmount: 0,
      clearanceDate: new Date('10/19/2020'),
      clearanceDetails: 'NA',
      clearedBy: 'Reply by Institute',
      remarks: 'NA'
    },
    {

      district: 'Gandhinagar',
      instituteName: 'District Panchayat - Gandhinagar',
      instituteType: 'District Panchayat',
      auditYear: '2019-20',
      auditReportIssueDate: new Date('08/26/2018'),
      paraNo: 10,
      auditParaSubject: 'Subject of Para',
      paraDescription: 'Details of the Para',

      administrativeDepartment: 'Construction',
      majorHead: '4499',
      objectAmount: 36547,
      recoverableAmount: 36547,
      receivedAmount: 36547,
      pendingAmount: 0,
      clearanceDate: new Date('10/20/2020'),
      clearanceDetails: 'NA',
      clearedBy: 'Reply by Institute',
      remarks: 'NA'

    },

  ];

  // listing datasource
  dataSource = new MatTableDataSource<AuditParaRegister>(this.ElementData);

  // listing column
  displayedColumns: any[] = [
    'serialNo',
    'district',
    'instituteType',
    'instituteName',
    'auditYear',
    'auditReportIssueDate',
    'paraNo',
    'auditParaSubject',
    'paraDescription',
    'administrativeDepartment',
    'majorHead',
    'objectAmount',
    'recoverableAmount',
    'receivedAmount',
    'pendingAmount',
    'clearanceDate',
    'clearanceDetails',
    'clearedBy',
    'remarks',
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
      auditYear: [''],
      districtName: [''],
      instituteType: [''],
      instituteName: [''],
      administrativeDepartment: [''],
      paraNo: [''],
      paraSubject: [''],
      clearanceDate: [''],
      paraClearedBy: [''],
    });
  }
  // opens workflow dialog box
  workflowDetails() { }

  // reset searcch form
  resetForm() {
    this.searchForm.reset();
  }

  // search data on basis of search fields
  onSearch() {
    const formVal = this.searchForm.value;
    const instituteTypeValue = formVal.instituteType;
    const instituteNameValue = formVal.instituteName;
    const auditYearValue = formVal.auditYear;
    const startDate = formVal.auditStartDate;
    const districtNameValue = formVal.districtName;
    const administrativeDepartmentValue = formVal.administrativeDepartment;
    const clearedByValue = formVal.paraClearedBy;

    if (formVal.auditYear !== '' && formVal.auditYear != null) {

      const auditYear = this.auditYearList[auditYearValue].viewValue;
      this.filterElementData = this.ElementData.filter(
        searchBy => searchBy.auditYear.toLowerCase() === auditYear.toLowerCase());
      this.dataSource = new MatTableDataSource<any>(this.filterElementData);

    }

    if (formVal.districtName !== '' && formVal.districtName != null) {

      const districtName = this.districtNameList[districtNameValue].viewValue;
      this.filterElementData = this.ElementData.filter(
        searchBy => searchBy.district.toLowerCase() === districtName.toLowerCase());
      this.dataSource = new MatTableDataSource<any>(this.filterElementData);

    }

    if (formVal.instituteType !== '' && formVal.instituteType != null) {

      const instituteType = this.instituteTypeList[instituteTypeValue].viewValue;
      this.filterElementData = this.ElementData.filter(
        searchBy => searchBy.instituteType.toLowerCase() === instituteType.toLowerCase());
      this.dataSource = new MatTableDataSource<any>(this.filterElementData);

    }

    if (formVal.instituteName !== '' && formVal.instituteName != null) {

      const instituteName = this.instituteNameList[instituteNameValue].viewValue;
      this.filterElementData = this.ElementData.filter(
        searchBy => searchBy.instituteName.toLowerCase() === instituteName.toLowerCase());
      this.dataSource = new MatTableDataSource<any>(this.filterElementData);

    }

    if (formVal.administrativeDepartment !== '' && formVal.administrativeDepartment != null) {

      const administrativeDepartment = this.administrativeDepartmentList[administrativeDepartmentValue].viewValue;
      this.filterElementData = this.ElementData.filter(
        searchBy => searchBy.administrativeDepartment.toLowerCase() === administrativeDepartment.toLowerCase());
      this.dataSource = new MatTableDataSource<any>(this.filterElementData);

    }


    if (formVal.paraNo !== '' && formVal.paraNo != null) {

      this.filterElementData = this.ElementData.filter(
        searchBy => searchBy.paraNo === formVal.paraNo);
      this.dataSource = new MatTableDataSource<any>(this.filterElementData);

    }

    if (formVal.paraSubject !== '' && formVal.paraSubject != null) {

      this.filterElementData = this.ElementData.filter(
        searchBy => searchBy.auditParaSubject.toLowerCase() === formVal.paraSubject.toLowerCase());
      this.dataSource = new MatTableDataSource<any>(this.filterElementData);

    }


    if (formVal.clearanceDate !== '' && formVal.clearanceDate != null) {
      const date = new Date(formVal.clearanceDetails);
      this.filterElementData = this.ElementData.filter(
        searchBy => searchBy.clearanceDate === date);
      this.dataSource = new MatTableDataSource<any>(this.filterElementData);

    }

    if (formVal.paraClearedBy !== '' && formVal.paraClearedBy != null) {

      const clearedBy = this.paraClearedByList[clearedByValue].viewValue;
      this.filterElementData = this.ElementData.filter(
        searchBy => searchBy.clearedBy.toLowerCase() === clearedBy.toLowerCase());
      this.dataSource = new MatTableDataSource<any>(this.filterElementData);

    }

    if ((formVal.paraNo === '' || formVal.paraNo == null) &&
      (formVal.paraSubject === '' || formVal.paraSubject == null) &&
      (formVal.clearanceDate === '' || formVal.clearanceDate == null) &&
      (formVal.instituteName === '' || formVal.instituteName == null) &&
      (formVal.instituteType === '' || formVal.instituteType == null) &&
      (formVal.auditYear === '' || formVal.auditYear == null) &&
      (formVal.districtName === '' || formVal.districtName == null) &&
      (formVal.administrativeDepartment === '' || formVal.administrativeDepartment == null) &&
      (formVal.paraClearedBy === '' || formVal.paraClearedBy == null)
    ) {
      this.dataSource = new MatTableDataSource<any>(this.ElementData);
    }

  }

  // reset form
  clearForm() {
    this.searchForm.reset();
  }

  // navigate to report
  goToReport() { }

  // on click on export to pdf
  captureScreen() { }
}
