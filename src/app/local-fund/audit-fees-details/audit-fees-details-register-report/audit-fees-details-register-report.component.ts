import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { AuditFeesDetailsRegister } from 'src/app/model/local-fund';



@Component({
  selector: 'app-audit-fees-details-register-report',
  templateUrl: './audit-fees-details-register-report.component.html',
  styleUrls: ['./audit-fees-details-register-report.component.css']
})
export class AuditFeesDetailsRegisterReportComponent implements OnInit {

  // form group
  searchForm: FormGroup;

  // variables
  filterElementData: any[];
  maxDate = new Date();

  // form control
  instituteTypeCtrl: FormControl = new FormControl();
  instituteNameCtrl: FormControl = new FormControl();
  auditYearCtrl: FormControl = new FormControl();
  districtNameCtrl: FormControl = new FormControl();

  // lists
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
    { value: '0', viewValue: 'Gujarat State Medical Council Ahmedabad' },
    { value: '1', viewValue: 'Gujarat State Public Transport Ahmedabad' },
    { value: '2', viewValue: 'Gujarat Energy Developement Agency' },
    { value: '3', viewValue: 'Gujarat Pollution Control Board' },
  ];

  auditYearList: ListValue[] = [
    { value: '0', viewValue: '2001-02' },
    { value: '1', viewValue: '2002-03' },
    { value: '2', viewValue: '2003-04' },
    { value: '3', viewValue: '2004-05' },
    { value: '4', viewValue: '2005-06' },
    { value: '5', viewValue: '2006-07' },
    { value: '6', viewValue: '2007-08' },
    { value: '7', viewValue: '2008-09' },
    { value: '8', viewValue: '2009-10' },
    { value: '9', viewValue: '2010-11' },
    { value: '10', viewValue: '2011-12' },
    { value: '11', viewValue: '2012-13' },
    { value: '12', viewValue: '2013-14' },
    { value: '13', viewValue: '2014-15' },
    { value: '14', viewValue: '2015-16' },
    { value: '15', viewValue: '2016-17' },
    { value: '16', viewValue: '2017-18' },
    { value: '17', viewValue: '2018-19' },
    { value: '18', viewValue: '2019-20' },
    { value: '19', viewValue: '2020-21' },
    { value: '20', viewValue: '2021-22' },
    { value: '21', viewValue: '2022-23' },
  ];

  // table data
  ElementData: AuditFeesDetailsRegister[] = [
    {
      district: 'Ahmedabad',
      id: 1,
      instituteType: 'Others',
      instituteName: 'Gujarat State Medical Council Ahmedabad',
      auditYear: '2018-19',
      recoverableAmountFee: 3900,
      actualReceivedAuditFee: 3900,
      auditFeeReceivedDate: new Date('11/12/2018'),
      pendingRecovery: 0,
      remarks: 'NA'
    },
    {
      district: 'Ahmedabad',
      id: 2,
      instituteType: 'Others',
      instituteName: 'Gujarat State Public Transport Ahmedabad',
      auditYear: '2018-19',
      recoverableAmountFee: 5500,
      actualReceivedAuditFee: 5500,
      auditFeeReceivedDate: new Date('12/12/2018'),
      pendingRecovery: 0,
      remarks: 'NA'
    },
    {
      district: 'Ahmedabad',
      id: 3,
      instituteType: 'Others',
      instituteName: 'Gujarat Energy Developement Agency',
      auditYear: '2018-19',
      recoverableAmountFee: 8000,
      actualReceivedAuditFee: 8000,
      auditFeeReceivedDate: new Date('01/12/2019'),
      pendingRecovery: 0,
      remarks: 'NA'
    },
    {
      district: 'Ahmedabad',
      id: 4,
      instituteType: 'Others',
      instituteName: 'Gujarat Pollution Control Board',
      auditYear: '2018-19',
      recoverableAmountFee: 10000,
      actualReceivedAuditFee: 10000,
      auditFeeReceivedDate: new Date('02/12/2019'),
      pendingRecovery: 0,
      remarks: 'NA'
    }
  ];

  // table dataource
  dataSource = new MatTableDataSource<AuditFeesDetailsRegister>(this.ElementData);

  // table columns
  displayedColumns: any[] = [
    'serialNo',
    'district',
    'id',
    'instituteType',
    'instituteName',
    'auditYear',
    'recoverableAmountFee',
    'actualReceivedAuditFee',
    'auditFeeReceivedDate',
    'pendingRecovery',
    'remarks',
  ];

  // paginator
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.searchFormData();
  }

  // form data
  searchFormData() {
    this.searchForm = this.fb.group({
      auditFeeReceivedDate: [''],
      auditFeeReceivedToDate: [''],
      districtName: [''],
      instituteType: [''],
      instituteName: [''],
      auditYear: [''],
      others: ['']
    });
  }

  // allow search on basis of search fields
  onSearch() {
    const formVal = this.searchForm.value;

    const instituteTypeValue = formVal.instituteType;
    const instituteNameValue = formVal.instituteName;
    const auditYearValue = formVal.auditYear;
    const districtNameValue = formVal.districtName;


    if (formVal.instituteType !== '' && formVal.instituteType != null) {


      if (formVal.instituteType === '11') {

        this.filterElementData = this.ElementData.filter(
          searchBy => searchBy.instituteName.toLowerCase() === formVal.others.toLowerCase());
        this.dataSource = new MatTableDataSource<AuditFeesDetailsRegister>(this.filterElementData);



      } else {

        const instituteType = this.instituteTypeList[instituteTypeValue].viewValue;
        this.filterElementData = this.ElementData.filter(
          searchBy => searchBy.instituteType.toLowerCase() === instituteType.toLowerCase());
        this.dataSource = new MatTableDataSource<AuditFeesDetailsRegister>(this.filterElementData);

      }
    }

    if (formVal.instituteName !== '' && formVal.instituteName != null) {

      const instituteName = this.instituteNameList[instituteNameValue].viewValue;
      this.filterElementData = this.ElementData.filter(
        searchBy => searchBy.instituteName.toLowerCase() === instituteName.toLowerCase());
      this.dataSource = new MatTableDataSource<AuditFeesDetailsRegister>(this.filterElementData);

    }

    if (formVal.auditYear !== '' && formVal.auditYear != null) {

      const auditYear = this.auditYearList[auditYearValue].viewValue;
      this.filterElementData = this.ElementData.filter(
        searchBy => searchBy.auditYear.toLowerCase() === auditYear.toLowerCase());
      this.dataSource = new MatTableDataSource<AuditFeesDetailsRegister>(this.filterElementData);

    }

    if (formVal.districtName !== '' && formVal.districtName !== null) {

      const districtName = this.districtNameList[districtNameValue].viewValue;
      this.filterElementData = this.ElementData.filter(
        searchBy => searchBy.district.toLowerCase() === districtName.toLowerCase());
      this.dataSource = new MatTableDataSource<AuditFeesDetailsRegister>(this.filterElementData);

    }

    if (
      (formVal.auditYear === '' || formVal.auditYear == null) &&
      (formVal.instituteName === '' || formVal.instituteName == null) &&
      (formVal.instituteType === '' || formVal.instituteType == null) &&
      (formVal.districtName === '' || formVal.districtName == null)

    ) {
      this.dataSource = new MatTableDataSource<AuditFeesDetailsRegister>(this.ElementData);
    }

  }

  // reset search form
  clearForm() {
    this.searchForm.reset();
  }

  // go to report
  goToReport() { }

  // capture screen
  captureScreen() {

  }

}
