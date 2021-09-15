import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource } from '@angular/material';
import { AuditProcessRegister } from 'src/app/model/local-fund';



@Component({
  selector: 'app-audit-process-register-listing',
  templateUrl: './audit-process-register-listing.component.html',
  styleUrls: ['./audit-process-register-listing.component.css']
})
export class AuditProcessRegisterListingComponent implements OnInit {
  searchForm: FormGroup;
  searchFormYearComplitedUnit: FormGroup;
  instituteTypeCtrl: FormControl = new FormControl();
  instituteNameCtrl: FormControl = new FormControl();
  auditYearCtrl: FormControl = new FormControl();
  auditorNameCtrl: FormControl = new FormControl();
  financialYearCtrl: FormControl = new FormControl();
  districtNameCtrl: FormControl = new FormControl();
  filterElementData: any[];

  instituteTypeList: ListValue[] = [
    { value: '0', viewValue: 'Maha Nagar Palika' },
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
    { value: '2', viewValue: 'District Panchayat-Gandhinagar' },
    { value: '3', viewValue: 'Ahmedabad Municipal Corporation' },
    { value: '4', viewValue: 'District Panchayat - Ahmedabad' },
    { value: '5', viewValue: 'GMC' },
    { value: '6', viewValue: 'RMC' },
  ];

  auditYearList: ListValue[] = [
    { value: '0', viewValue: '2017-18' },
    { value: '1', viewValue: '2018-19' },
    { value: '2', viewValue: '2019-20' },
    { value: '3', viewValue: '2020-21' },
    { value: '4', viewValue: '2021-22' },
    { value: '5', viewValue: '2022-23' },
  ];

  financialYearList: ListValue[] = [
    { value: '0', viewValue: '2017-18' },
    { value: '1', viewValue: '2018-19' },
    { value: '2', viewValue: '2019-20' },
    { value: '3', viewValue: '2020-21' },
    { value: '4', viewValue: '2021-22' },
    { value: '5', viewValue: '2022-23' },
  ];

  auditYearUnitList: ListValue[] = [
    { value: '0', viewValue: '2017' },
    { value: '1', viewValue: '2018' },
    { value: '2', viewValue: '2019' },
    { value: '3', viewValue: '2020' },
    { value: '4', viewValue: '2021' },
    { value: '5', viewValue: '2022' },
  ];

  auditorNameList: any[] = [{ value: '0', viewValue: 'Shri Pratik K Shah' }];
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

  ElementData: AuditProcessRegister[] = [
    {

      district: 'Gandhinagar',
      instituteType: 'District Panchayat',
      instituteName: 'District Panchayat-Gandhinagar',
      auditYear: '2017-18',
      auditorName: 'J P Patel',
      auditStartDate: new Date('12/28/2017'),
      auditEndDate: new Date('01/12/2018'),
      discussionDate: new Date('01/12/2018'),
      probableIssuingReportDate: new Date('2/03/2018'),
      auditorSubmitDate: new Date('02/15/2018'),
      returnToAuditorDate: new Date('04/10/2018'),
      resubmissionByAuditorDate: new Date('04/30/2018'),
      submissionToHqDate: new Date('05/01/2018'),
      sanctionedDate: new Date('05/05/2018'),
      typingSubmissionDate: new Date('05/06/2018'),
      returnFromTypingDate: new Date('05/10/2018'),
      reportIssueDate: new Date('06/12/2018'),
      firstComplianceDate: new Date('06/15/2018'),
      instituteReplyDate: new Date('06/20/2017'),
      auditFeeReceived: '500',
      instituteIncome: '24374654',
      instituteExpense: '345235',
      auditReportCopy: '4',
      remarks: 'NA',
      status: 'Submitted to HQ'

    },
    {

      district: 'Ahmedabad',
      instituteType: 'Municipal Corporation',
      instituteName: 'Ahmedabad Municipal Corporation',
      auditYear: '2017-18',
      auditorName: 'M P Patel',
      auditStartDate: new Date('04/26/2018'),
      auditEndDate: new Date('05/15/2018'),
      discussionDate: new Date('05/15/2018'),
      probableIssuingReportDate: new Date('06/04/2018'),
      auditorSubmitDate: new Date('06/16/2018'),
      returnToAuditorDate: new Date('08/11/2018'),
      resubmissionByAuditorDate: new Date('08/01/2018'),
      submissionToHqDate: new Date('09/02/2018'),
      sanctionedDate: new Date('09/10/2018'),
      typingSubmissionDate: '',
      returnFromTypingDate: '',
      reportIssueDate: '',
      firstComplianceDate: '',
      instituteReplyDate: '',
      auditFeeReceived: '',
      instituteIncome: '',
      instituteExpense: '',
      auditReportCopy: '',
      remarks: '',
      status: 'Sanctioned '

    },
    {

      district: 'Ahmedabad',
      instituteType: 'District Panchayat',
      instituteName: 'District Panchayat - Ahmedabad',
      auditYear: '2018-19',
      auditorName: 'C P Patel',
      auditStartDate: new Date('05/01/2019'),
      auditEndDate: new Date('06/12/2018'),
      discussionDate: '',
      probableIssuingReportDate: '',
      auditorSubmitDate: '',
      returnToAuditorDate: '',
      resubmissionByAuditorDate: '',
      submissionToHqDate: '',
      sanctionedDate: '',
      typingSubmissionDate: '',
      returnFromTypingDate: '',
      reportIssueDate: '',
      firstComplianceDate: '',
      instituteReplyDate: '',
      auditFeeReceived: '',
      instituteIncome: '',
      instituteExpense: '',
      auditReportCopy: '',
      remarks: '',
      status: 'Audit Completed'

    },
    {

      district: 'Gandhinagar',
      instituteType: 'Municipal Corporation',
      instituteName: 'GMC',
      auditYear: '2018-19',
      auditorName: 'J P Patel',
      auditStartDate: new Date('06/04/2018'),
      auditEndDate: new Date('06/30/2018'),
      discussionDate: new Date('06/30/2018'),
      probableIssuingReportDate: new Date('07/20/2018'),
      auditorSubmitDate: new Date('07/25/2018'),
      returnToAuditorDate: '',
      resubmissionByAuditorDate: '',
      submissionToHqDate: '',
      sanctionedDate: '',
      typingSubmissionDate: '',
      returnFromTypingDate: '',
      reportIssueDate: '',
      firstComplianceDate: '',
      instituteReplyDate: '',
      auditFeeReceived: '',
      instituteIncome: '',
      instituteExpense: '',
      auditReportCopy: '',
      remarks: '',
      status: 'Submitted by Auditor'

    },
    {

      district: 'Rajkot',
      instituteType: 'Municipal Corporation',
      instituteName: 'RMC',
      auditYear: '2019-20',
      auditorName: 'K P Zala',
      auditStartDate: new Date('01/04/2018'),
      auditEndDate: new Date('02/06/2018'),
      discussionDate: new Date('02/06/2018'),
      probableIssuingReportDate: new Date('02/26/2018'),
      auditorSubmitDate: new Date('03/10/2018'),
      returnToAuditorDate: new Date('03/12/2018'),
      resubmissionByAuditorDate: '',
      submissionToHqDate: '',
      sanctionedDate: '',
      typingSubmissionDate: '',
      returnFromTypingDate: '',
      reportIssueDate: '',
      firstComplianceDate: '',
      instituteReplyDate: '',
      auditFeeReceived: '',
      instituteIncome: '',
      instituteExpense: '',
      auditReportCopy: '',
      remarks: '',
      status: 'Pending with Auditor'

    },

  ];

  ElementData1: any[] = [
    {
      financialYear: '2018-19',
      auditYear: '2018',
      district: 'Ahmedabad',
      instituteType: 'Municipal Corporation',
      instituteName: 'AMC',
      sanctionedUnit: '20',
      auditStartDate: '1-May-2018',
      auditEndDate: '2-Jun-2018',
      noOfComplitedUnit: '18'
    },
    {
      financialYear: '2018-19',
      auditYear: '2018',
      district: 'Gandhinagar',
      instituteType: 'District Panchayat',
      instituteName: 'Gandhinagar -District Panchayat',
      sanctionedUnit: '32',
      auditStartDate: '12-Jan-2018',
      auditEndDate: '12-Jan-2018',
      noOfComplitedUnit: '35'
    },
    {
      financialYear: '2019-20',
      auditYear: '2019',
      district: 'Gandhinagar',
      instituteType: 'Municipal Corporation',
      instituteName: 'GMC',
      sanctionedUnit: '15',
      auditStartDate: '30-Jun-2019',
      auditEndDate: '30-Jun-2019',
      noOfComplitedUnit: '15'
    },
    {
      financialYear: '2019-20',
      auditYear: '2019',
      district: 'Ahmedabad',
      instituteType: 'District Panchayat',
      instituteName: 'Ahmedabad-District Panchayat',
      sanctionedUnit: '40',
      auditStartDate: '2-Jun-2019',
      auditEndDate: '15-Jul-2019',
      noOfComplitedUnit: '45'
    },
  ];

  dataSource = new MatTableDataSource<AuditProcessRegister>(this.ElementData);
  displayedColumns: any[] = [
    'serialNo',
    'district',
    'instituteType',
    'instituteName',
    'auditYear',
    'auditorName',
    'auditStartDate',
    'auditEndDate',
    'discussionDate',
    'probableIssuingReportDate',
    'auditorSubmitDate',
    'returnToAuditorDate',
    'resubmissionByAuditorDate',
    'submissionToHqDate',
    'sanctionedDate',
    'typingSubmissionDate',
    'returnFromTypingDate',
    'reportIssueDate',
    'firstComplianceDate',
    'instituteReplyDate',
    'auditFeeReceived',
    'instituteIncome',
    'instituteExpense',
    'auditReportCopy',
    'remarks',
    'status',
    'action'
  ];

  // year complited unit data source
  dataSourceYearComplitedUnit = new MatTableDataSource<AuditProcessRegister>(this.ElementData1);

  // year complited unit column
  displayedColumnsYearComplitedUnit: any[] = [
    'serialNo',
    'financialYear',
    'auditYear',
    'district',
    'instituteType',
    'instituteName',
    'sanctionedUnit',
    'auditStartDate',
    'auditEndDate',
    'noOfComplitedUnit'
  ];
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.searchFormData();
    this.searchFormDataYear();
  }

  // form data
  searchFormData() {
    this.searchForm = this.fb.group({
      instituteType: [''],
      instituteName: [''],
      auditYear: [''],
      auditorName: [''],
      auditDate: [''],
    });
  }

  // form data for year complited unit
  searchFormDataYear() {
    this.searchFormYearComplitedUnit = this.fb.group({
      instituteType: [''],
      instituteName: [''],
      auditYear: [''],
      financialYear: [''],
      districtName: ['']
    });
  }

  // search data on basis of search fields
  onSearch() {

    const formVal = this.searchForm.value;

    const instituteTypeValue = formVal.instituteType;
    const instituteNameValue = formVal.instituteName;
    const auditYearValue = formVal.auditYear;
    const auditorNameValue = formVal.auditorName;



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

    if (formVal.auditYear !== '' && formVal.auditYear != null) {

      const auditYear = this.auditYearList[auditYearValue].viewValue;
      this.filterElementData = this.ElementData.filter(
        searchBy => searchBy.auditYear.toLowerCase() === auditYear.toLowerCase());
      this.dataSource = new MatTableDataSource<any>(this.filterElementData);

    }

    if (formVal.auditorName !== '' && formVal.auditorName != null) {

      const auditorName = this.auditorNameList[auditorNameValue].viewValue;
      this.filterElementData = this.ElementData.filter(
        searchBy => searchBy.auditorName.toLowerCase() === auditorName.toLowerCase());
      this.dataSource = new MatTableDataSource<any>(this.filterElementData);

    }

    if (
      (formVal.auditorName === '' || formVal.auditorName == null) &&
      (formVal.auditYear === '' || formVal.auditYear == null) &&
      (formVal.instituteName === '' || formVal.instituteName == null) &&
      (formVal.instituteType === '' || formVal.instituteType == null)

    ) {
      this.dataSource = new MatTableDataSource<any>(this.ElementData);
    }

  }

  // reset search form
  clearForm() {
    this.searchForm.reset();
  }

  // search year comlited unit on basis of search fields
  onSearchYearComplitedUnit() {
    const formVal = this.searchFormYearComplitedUnit.value;

    const instituteTypeValue = formVal.instituteType;
    const auditYearValue = formVal.auditYear;
    const financialYearValue = formVal.financialYear;
    const districtNameValue = formVal.districtName;

    if (formVal.instituteType !== '' && formVal.instituteType != null) {

      const instituteType = this.instituteTypeList[instituteTypeValue].viewValue;
      this.filterElementData = this.ElementData1.filter(
        searchBy => searchBy.instituteType.toLowerCase() === instituteType.toLowerCase());
      this.dataSourceYearComplitedUnit = new MatTableDataSource<any>(this.filterElementData);

    }

    if (formVal.instituteName !== '' && formVal.instituteName != null) {

      this.filterElementData = this.ElementData1.filter(
        searchBy => searchBy.instituteName.toLowerCase() === formVal.instituteName.toLowerCase());
      this.dataSourceYearComplitedUnit = new MatTableDataSource<any>(this.filterElementData);

    }

    if (formVal.auditYear !== '' && formVal.auditYear != null) {

      const auditYear = this.auditYearUnitList[auditYearValue].viewValue;
      this.filterElementData = this.ElementData1.filter(
        searchBy => searchBy.auditYear.toLowerCase() === auditYear.toLowerCase());
      this.dataSourceYearComplitedUnit = new MatTableDataSource<any>(this.filterElementData);

    }

    if (formVal.financialYear !== '' && formVal.financialYear != null) {

      const financialYear = this.financialYearList[financialYearValue].viewValue;
      this.filterElementData = this.ElementData1.filter(
        searchBy => searchBy.financialYear.toLowerCase() === financialYear.toLowerCase());
      this.dataSourceYearComplitedUnit = new MatTableDataSource<any>(this.filterElementData);

    }

    if (formVal.districtName !== '' && formVal.districtName != null) {

      const districtName = this.districtNameList[districtNameValue].viewValue;
      this.filterElementData = this.ElementData1.filter(
        searchBy => searchBy.district.toLowerCase() === districtName.toLowerCase());
      this.dataSourceYearComplitedUnit = new MatTableDataSource<any>(this.filterElementData);

    }

    if (
      (formVal.districtName === '' || formVal.districtName == null) &&
      (formVal.auditYear === '' || formVal.auditYear == null) &&
      (formVal.financialYear === '' || formVal.financialYear == null) &&
      (formVal.instituteName === '' || formVal.instituteName == null) &&
      (formVal.instituteType === '' || formVal.instituteType == null)

    ) {
      this.dataSourceYearComplitedUnit = new MatTableDataSource<any>(this.ElementData1);
    }
  }

  // reset year  complited unit
  clearFormYearComplitedUnit() {
    this.searchFormYearComplitedUnit.reset();
  }
}
