import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { PensionPreAuditCasesRegisterDetails } from 'src/app/model/local-fund';

@Component({
  selector: 'app-pension-pre-audit-cases-register-report',
  templateUrl: './pension-pre-audit-cases-register-report.component.html',
  styleUrls: ['./pension-pre-audit-cases-register-report.component.css']
})
export class PensionPreAuditCasesRegisterReportComponent implements OnInit {
  // form group
  searchForm: FormGroup;
  filterElementData: PensionPreAuditCasesRegisterDetails[];
  // date
  maxDate = new Date();
  // form control
  instituteTypeCtrl: FormControl = new FormControl();
  instituteNameCtrl: FormControl = new FormControl();
  auditYearCtrl: FormControl = new FormControl();
  districtNameCtrl: FormControl = new FormControl();

  // list start
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
  // list end

  // table data
  ElementData: PensionPreAuditCasesRegisterDetails[] = [
    {
      id: '1',
      district: 'Ahmedabad',
      inwardNumber: '333',
      inwardDate: new Date('03/02/2019'),
      pensionerName: 'Bhartiben N Patel',
      designation: 'Primary Teacher',
      pensionOfficeName: 'Ahmedabad',
      ppoNumber: '12313',
      retirementDate: new Date('09/30/2018'),
      isApprovedOrQuery: 'Approved',
      dcrg: '',
      cvp: '',
      ae: '',
      outwardNo: '1240',
      outwardDate: '16/06/2019',
      remarks: ''
    }
  ];
  dataSource = new MatTableDataSource<PensionPreAuditCasesRegisterDetails>(this.ElementData);
  displayedColumns: string[] = [
    'serialNo',
    'id',
    'district',
    'inwardNumber',
    'inwardDate',
    'pensionerName',
    'designation',
    'pensionOfficeName',
    'ppoNumber',
    'retirementDate',
    'isApprovedOrQuery',
    'dcrg',
    'cvp',
    'ae',
    'outwardNo',
    'outwardDate',
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
    this.searchForm = this.fb.group({
      retirementFromDate: [''],
      retirementToDate: [''],
      districtName: [''],
      instituteType: [''],
      instituteName: [''],
      auditYear: [''],
      others: ['']
    });
  }

  // search data on basis of search fields
  onSearch() {
    const formVal = this.searchForm.value;
    const districtNameValue = formVal.districtName;

    if (formVal.districtName !== '' && formVal.districtName !== null) {
      const districtName = this.districtNameList[districtNameValue].viewValue;
      this.filterElementData = this.ElementData.filter(
        searchBy => searchBy.district.toLowerCase() === districtName.toLowerCase());
      this.dataSource = new MatTableDataSource<PensionPreAuditCasesRegisterDetails>(this.filterElementData);
    }

    if ((formVal.districtName === '' || formVal.districtName == null)) {
      this.dataSource = new MatTableDataSource<PensionPreAuditCasesRegisterDetails>(this.ElementData);
    }

  }

  // reset form
  clearForm() {
    this.searchForm.reset();
  }

}
