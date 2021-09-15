import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { AuditParaRegisterListing, AuditParaRegisterDetailsListing } from 'src/app/model/local-fund';



@Component({
  selector: 'app-audit-para-register-listing',
  templateUrl: './audit-para-register-listing.component.html',
  styleUrls: ['./audit-para-register-listing.component.css']
})
export class AuditParaRegisterListingComponent implements OnInit {

  searchForm: FormGroup;

  instituteTypeCtrl: FormControl = new FormControl();
  instituteNameCtrl: FormControl = new FormControl();
  auditYearCtrl: FormControl = new FormControl();
  districtNameCtrl: FormControl = new FormControl();


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


  // datasourceInstituteParaList data
  ElementData1: AuditParaRegisterListing[] = [
    {

      paraNo: '1',
      auditParaSubject: 'Subject of Para',
      paraDescription: 'Details of the Para',
      administrativeDepartment: 'Panchayat',
      majorHead: '4434',
      objectAmount: 2635,
      recoverableAmount: 2635,
      receivedAmount: 2635,
      pendingAmount: 0,
      clearanceDate: new Date('04/30/2019'),
      clearanceDetails: 'Text',
      clearedThrough: 'By Camp',
      remarks: 'Text',
      status: 'Pending'

    },
    {

      paraNo: '2',
      auditParaSubject: 'Subject of Para',
      paraDescription: 'Details of the Para',
      administrativeDepartment: 'Panchayat',
      majorHead: '7687',
      objectAmount: 456,
      recoverableAmount: 456,
      receivedAmount: 456,
      pendingAmount: 0,
      clearanceDate: new Date('04/30/2019'),
      clearanceDetails: 'Text',
      clearedThrough: 'By Camp',
      remarks: 'Text',
      status: 'Pending'

    },
    {

      paraNo: '3',
      auditParaSubject: 'Subject of Para',
      paraDescription: 'Details of the Para',
      administrativeDepartment: 'Panchayat',
      majorHead: '8694',
      objectAmount: 28736,
      recoverableAmount: 26000,
      receivedAmount: 26000,
      pendingAmount: 2736,
      clearanceDate: new Date('04/30/2019'),
      clearanceDetails: 'Text',
      clearedThrough: 'By Camp',
      remarks: 'Text',
      status: 'Pending'

    },
    {

      paraNo: '4',
      auditParaSubject: 'Subject of Para',
      paraDescription: 'Details of the Para',
      administrativeDepartment: 'Panchayat',
      majorHead: '2637',
      objectAmount: 995874,
      recoverableAmount: 900000,
      receivedAmount: 900000,
      pendingAmount: 95874,
      clearanceDate: new Date('04/30/2019'),
      clearanceDetails: 'Text',
      clearedThrough: 'By Camp',
      remarks: 'Text',
      status: 'Pending'

    },
    {

      paraNo: '5',
      auditParaSubject: 'Subject of Para',
      paraDescription: 'Details of the Para',
      administrativeDepartment: 'Panchayat',
      majorHead: '4758',
      objectAmount: 0,
      recoverableAmount: 0,
      receivedAmount: 0,
      pendingAmount: 0,
      clearanceDate: new Date('04/30/2019'),
      clearanceDetails: 'Text',
      clearedThrough: 'By Camp',
      remarks: 'Text',
      status: 'Dropped'

    },
    {

      paraNo: '6',
      auditParaSubject: 'Subject of Para',
      paraDescription: 'Details of the Para',
      administrativeDepartment: 'Panchayat',
      majorHead: '9847',
      objectAmount: 0,
      recoverableAmount: 0,
      receivedAmount: 0,
      pendingAmount: 0,
      clearanceDate: new Date('04/30/2019'),
      clearanceDetails: 'Text',
      clearedThrough: 'By Camp',
      remarks: 'Text',
      status: 'Pending'

    },
    {

      paraNo: '7',
      auditParaSubject: 'Subject of Para',
      paraDescription: 'Details of the Para',
      administrativeDepartment: 'Panchayat',
      majorHead: '3465',
      objectAmount: 36547,
      recoverableAmount: 36547,
      receivedAmount: 36547,
      pendingAmount: 0,
      clearanceDate: new Date('04/30/2019'),
      clearanceDetails: 'Text',
      clearedThrough: 'By Camp',
      remarks: 'Text',
      status: 'Pending'

    },
    {

      paraNo: '8',
      auditParaSubject: 'Subject of Para',
      paraDescription: 'Details of the Para',
      administrativeDepartment: 'Panchayat',
      majorHead: '8567',
      objectAmount: 98352,
      recoverableAmount: 98300,
      receivedAmount: 98300,
      pendingAmount: 52,
      clearanceDate: new Date('04/30/2019'),
      clearanceDetails: 'Text',
      clearedThrough: 'By Camp',
      remarks: 'Text',
      status: 'Pending'

    },

    {

      paraNo: '9',
      auditParaSubject: 'Subject of Para',
      paraDescription: 'Details of the Para',
      administrativeDepartment: 'Panchayat',
      majorHead: '3756',
      objectAmount: 0,
      recoverableAmount: 0,
      receivedAmount: 0,
      pendingAmount: 0,
      clearanceDate: new Date('04/30/2019'),
      clearanceDetails: 'Text',
      clearedThrough: 'By Camp',
      remarks: 'Text',
      status: 'Pending'

    },

    {

      paraNo: '10',
      auditParaSubject: 'Subject of Para',
      paraDescription: 'Details of the Para',
      administrativeDepartment: 'Panchayat',
      majorHead: '5764',
      objectAmount: 0,
      recoverableAmount: 0,
      receivedAmount: 0,
      pendingAmount: 0,
      clearanceDate: new Date('04/30/2019'),
      clearanceDetails: 'Text',
      clearedThrough: 'By Camp',
      remarks: 'Text',
      status: 'Dropped'

    },

  ];

  // listing data
  ElementData: AuditParaRegisterDetailsListing[] = [
    {
      auditYear: '2018-19',
      instituteName: 'District Panchayat -Ahmedabad',
      instituteType: 'District Panchayat',
      district: 'Ahmedabad',
      taluka: 'Ahmedabad',
      auditReportIssueDate: new Date('04/18/2018')
    }
  ];

  clearedThroughList: ListValue[] = [
    { value: '0', viewValue: 'Camp' },
    { value: '1', viewValue: 'Reply by Institute' },
    { value: '2', viewValue: 'Dropped' },
  ];


  // listing datasource
  dataSource = new MatTableDataSource<AuditParaRegisterDetailsListing>(this.ElementData);

  // listing column
  displayedColumns: any[] = [
    'auditYear',
    'instituteName',
    'instituteType',
    'district',
    'taluka',
    'auditReportIssueDate'
  ];

  // instituteparalist datasource
  dataSourceInstitueParaList = new MatTableDataSource<AuditParaRegisterListing>(this.ElementData1);

  // instituteparalist column
  displayedColumnsInstitueParaList: any[] = [
    'serialNo',
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
    'clearedThrough',
    'remarks',
    'status',
    'action'
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.dataSourceInstitueParaList.paginator = this.paginator;
    this.searchFormData();
  }

  // form data
  searchFormData() {
    this.searchForm = this.fb.group({
      auditYear: [''],
      districtName: [''],
      instituteType: [''],
      instituteName: [''],
      auditReportIssueDate: ['']
    });
  }

  // on click on search button
  onSearch() {

  }

  // delete respective row
  delete(index) {
    this.dataSourceInstitueParaList.data.splice(index, 1);
    this.dataSourceInstitueParaList = new MatTableDataSource(
      this.dataSourceInstitueParaList.data
    );
  }

  // reset form
  clearForm() {
    this.searchForm.reset();
  }

  // on click on edit
  onEdit(index) {
  }


}
