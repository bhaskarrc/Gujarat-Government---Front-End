import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { LrParaEntry } from 'src/app/model/local-fund';



@Component({
  selector: 'app-lr-para-entry',
  templateUrl: './lr-para-entry.component.html',
  styleUrls: ['./lr-para-entry.component.css']
})
export class LrParaEntryComponent implements OnInit {

  // variables
  referenceNumber = 'Reference Number:';
  referenceNumberDate = 'Reference Date:';
  filterElementData: LrParaEntry[];
  // date
  todayDate = Date.now();
  // form group
  searchForm: FormGroup;
  // form control
  instituteTypeCtrl: FormControl = new FormControl();
  instituteNameCtrl: FormControl = new FormControl();
  auditYearCtrl: FormControl = new FormControl();
  districtNameCtrl: FormControl = new FormControl();
  paraNoCtrl: FormControl = new FormControl();
  // list value start
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
  paraNoList: ListValue[] = [
    { value: '0', viewValue: '1' },
    { value: '1', viewValue: '2' },
    { value: '2', viewValue: '3' },
    { value: '3', viewValue: '4' },
    { value: '4', viewValue: '5' },
    { value: '5', viewValue: '6' },
    { value: '6', viewValue: '7' },
    { value: '7', viewValue: '8' },
    { value: '8', viewValue: '9' },
    { value: '9', viewValue: '10' },
    { value: '10', viewValue: '11' },
  ];
  // lists value end

  // table data start
  elementData: LrParaEntry[] = [
    {

      district: 'Ahmedabad',
      instituteName: 'District Panchayat - Ahmedabad',
      instituteType: 'District Panchayat',
      auditYear: '2018-19',
      auditReportIssueDate: new Date('04/18/2018'),
      paraNo: '1',
      auditParaSubject: 'Subject of Para',
      paraDescription: 'Details of the Para',

      administrativeDepartment: 'Panchayat',
      majorHead: '7687',
      clearedBy: 'Reply by Institute',
      remarks: 'NA'

    },
    {

      district: 'Ahmedabad',
      instituteName: 'District Panchayat - Ahmedabad',
      instituteType: 'District Panchayat',
      auditYear: '2018-19',
      auditReportIssueDate: new Date('04/18/2018'),
      paraNo: '2',
      auditParaSubject: 'Subject of Para',
      paraDescription: 'Details of the Para',

      administrativeDepartment: 'Education',
      majorHead: '8694',
      clearedBy: 'Reply by Institute',
      remarks: 'NA'

    },
    {

      district: 'Ahmedabad',
      instituteName: 'District Panchayat - Ahmedabad',
      instituteType: 'District Panchayat',
      auditYear: '2018-19',
      auditReportIssueDate: new Date('04/18/2018'),
      paraNo: '3',
      auditParaSubject: 'Subject of Para',
      paraDescription: 'Details of the Para',

      administrativeDepartment: 'Agriculture',
      majorHead: '2637',
      clearedBy: 'By Camp',
      remarks: 'NA'

    },
    {

      district: 'Ahmedabad',
      instituteName: 'District Panchayat - Ahmedabad',
      instituteType: 'District Panchayat',
      auditYear: '2018-19',
      auditReportIssueDate: new Date('04/18/2018'),
      paraNo: '4',
      auditParaSubject: 'Subject of Para',
      paraDescription: 'Details of the Para',

      administrativeDepartment: 'Health',
      majorHead: '9847',
      clearedBy: 'By Camp',
      remarks: 'NA'
    },
    {

      district: 'Ahmedabad',
      instituteName: 'District Panchayat - Ahmedabad',
      instituteType: 'District Panchayat',
      auditYear: '2018-19',
      auditReportIssueDate: new Date('04/18/2018'),
      paraNo: '5',
      auditParaSubject: 'Subject of Para',
      paraDescription: 'Details of the Para',

      administrativeDepartment: 'Construction',
      majorHead: '3465',
      clearedBy: 'By Camp',
      remarks: 'NA'

    },
    {

      district: 'Ahmedabad',
      instituteName: 'District Panchayat - Ahmedabad',
      instituteType: 'District Panchayat',
      auditYear: '2018-19',
      auditReportIssueDate: new Date('04/18/2018'),
      paraNo: '6',
      auditParaSubject: 'Subject of Para',
      paraDescription: 'Details of the Para',

      administrativeDepartment: 'Panchayat',
      majorHead: '3756',
      clearedBy: 'Reply by Institute',
      remarks: 'NA'

    },
    {

      district: 'Ahmedabad',
      instituteName: 'District Panchayat - Ahmedabad',
      instituteType: 'District Panchayat',
      auditYear: '2018-19',
      auditReportIssueDate: new Date('04/18/2018'),
      paraNo: '7',
      auditParaSubject: 'Subject of Para',
      paraDescription: 'Details of the Para',

      administrativeDepartment: 'Reply by Institute',
      majorHead: '5764',
      clearedBy: 'Reply by Institute',
      remarks: 'NA'

    },

  ];
  dataSource = new MatTableDataSource<LrParaEntry>(this.elementData);
  displayedColumns: string[] = [
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
    'isProposedLrPara',
    'clearedBy',
    'remarks',
    'action'
  ];
  // table data end

  // paginator
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // constructor
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
      paraNo: ['']

    });
  }

  // search data on basis of search fields
  onSearch() {
    const formVal = this.searchForm.value;

    const instituteTypeValue = formVal.instituteType;
    const instituteNameValue = formVal.instituteName;
    const auditYearValue = formVal.auditYear;
    const districtNameValue = formVal.districtName;
    const paraNoValue = formVal.paraNo;



    if (formVal.instituteType !== '' && formVal.instituteType != null) {
      const instituteType = this.instituteTypeList[instituteTypeValue].viewValue;
      this.filterElementData = this.elementData.filter(
        searchBy => searchBy.instituteType.toLowerCase() === instituteType.toLowerCase());
      this.dataSource = new MatTableDataSource<LrParaEntry>(this.filterElementData);
    }

    if (formVal.instituteName !== '' && formVal.instituteName != null) {

      const instituteName = this.instituteNameList[instituteNameValue].viewValue;
      this.filterElementData = this.elementData.filter(
        searchBy => searchBy.instituteName.toLowerCase() === instituteName.toLowerCase());
      this.dataSource = new MatTableDataSource<LrParaEntry>(this.filterElementData);

    }

    if (formVal.auditYear !== '' && formVal.auditYear != null) {

      const auditYear = this.auditYearList[auditYearValue].viewValue;
      this.filterElementData = this.elementData.filter(
        searchBy => searchBy.auditYear.toLowerCase() === auditYear.toLowerCase());
      this.dataSource = new MatTableDataSource<LrParaEntry>(this.filterElementData);

    }

    if (formVal.districtName !== '' && formVal.districtName != null) {


      const districtName = this.districtNameList[districtNameValue].viewValue;
      this.filterElementData = this.elementData.filter(
        searchBy => searchBy.district.toLowerCase() === districtName.toLowerCase());
      this.dataSource = new MatTableDataSource<LrParaEntry>(this.filterElementData);

    }



    if (formVal.paraNo !== '' && formVal.paraNo != null) {


      const paraNo = this.paraNoList[paraNoValue].viewValue;
      this.filterElementData = this.elementData.filter(
        searchBy => searchBy.paraNo.toLowerCase() === paraNo.toLowerCase());
      this.dataSource = new MatTableDataSource<LrParaEntry>(this.filterElementData);

    }

    if ((formVal.paraNo === '' || formVal.paraNo == null) &&
      (formVal.instituteName === '' || formVal.instituteName == null) &&
      (formVal.instituteType === '' || formVal.instituteType == null) &&
      (formVal.auditYear === '' || formVal.auditYear == null) &&
      (formVal.districtName === '' || formVal.districtName == null)


    ) {
      this.dataSource = new MatTableDataSource<LrParaEntry>(this.elementData);
    }

  }

  // reset form
  clearForm() {
    this.searchForm.reset();
  }

  // checks is checkbox clicked
  isCheckboxClicked(element, index) {

  }


}
