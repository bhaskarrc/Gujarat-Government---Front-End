import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { AuditParaDetailRegisterSvo } from 'src/app/model/local-fund';


@Component({
  selector: 'app-audit-para-detail-register-svo-report',
  templateUrl: './audit-para-detail-register-svo-report.component.html',
  styleUrls: ['./audit-para-detail-register-svo-report.component.css']
})
export class AuditParaDetailRegisterSvoReportComponent implements OnInit {
  isSubmitted = false;
  minDate = new Date();

  searchForm: FormGroup;

  // listing data
  ElementData: AuditParaDetailRegisterSvo[] = [
    {
      financialYear: '2018-19',
      district: 'Ahmedabad',
      taluka: 'District Panchayat',
      instituteName: 'Ahmedabad District Panchayat',
      sanctionedMandays: 50,
      auditStartDate: new Date('04/01/2018'),
      auditEndDate: new Date('04/15/2018'),
      auditReportIssueDate: new Date('04/18/2018'),
      paraNo: '1',
      paraDescription: 'Subject of Para',
      objectAmount: 2635,
      recoverableAmount: 2635,
      receivedAmount: 2635,
      pendingAmount: 0,
      clearanceDate: new Date('04/30/2019'),
      clearanceDetails: 'Text',
      status: 'Drop',
      remarks: 'Text'
    },
    {
      financialYear: '2018-20',
      district: 'Ahmedabad',
      taluka: 'District Panchayat',
      instituteName: 'Ahmedabad District Panchayat',
      sanctionedMandays: 50,
      auditStartDate: new Date('04/01/2019'),
      auditEndDate: new Date('04/15/2019'),
      auditReportIssueDate: new Date('04/18/2019'),
      paraNo: '2',
      paraDescription: 'Subject of Para',
      objectAmount: 456,
      recoverableAmount: 456,
      receivedAmount: 456,
      pendingAmount: 0,
      clearanceDate: new Date('04/30/2019'),
      clearanceDetails: 'Text',
      status: 'Clear By Camp',
      remarks: 'Text'
    },
    {
      financialYear: '2018-21',
      district: 'Ahmedabad',
      taluka: 'District Panchayat',
      instituteName: 'Ahmedabad District Panchayat',
      sanctionedMandays: 50,
      auditStartDate: new Date('04/01/2020'),
      auditEndDate: new Date('04/15/2020'),
      auditReportIssueDate: new Date('04/18/2020'),
      paraNo: '3',
      paraDescription: 'Subject of Para',
      objectAmount: 28736,
      recoverableAmount: 26000,
      receivedAmount: 26000,
      pendingAmount: 2736,
      clearanceDate: new Date('04/30/2019'),
      clearanceDetails: 'Text',
      status: 'Drop',
      remarks: 'Text'
    },
    {
      financialYear: '2018-22',
      district: 'Ahmedabad',
      taluka: 'District Panchayat',
      instituteName: 'Ahmedabad District Panchayat',
      sanctionedMandays: 50,
      auditStartDate: new Date('04/01/2021'),
      auditEndDate: new Date('04/15/2021'),
      auditReportIssueDate: new Date('04/18/2021'),
      paraNo: '4',
      paraDescription: 'Subject of Para',
      objectAmount: 995874,
      recoverableAmount: 900000,
      receivedAmount: 900000,
      pendingAmount: 95874,
      clearanceDate: new Date('04/30/2019'),
      clearanceDetails: 'Text',
      status: 'Drop',
      remarks: 'Text'
    },
    {
      financialYear: '2018-23',
      district: 'Ahmedabad',
      taluka: 'District Panchayat',
      instituteName: 'Ahmedabad District Panchayat',
      sanctionedMandays: 50,
      auditStartDate: new Date('04/01/2022'),
      auditEndDate: new Date('04/15/2022'),
      auditReportIssueDate: new Date('04/18/2022'),
      paraNo: '5',
      paraDescription: 'Subject of Para',
      objectAmount: 0,
      recoverableAmount: 0,
      receivedAmount: 0,
      pendingAmount: 0,
      clearanceDate: new Date('04/30/2019'),
      clearanceDetails: 'Text',
      status: 'Clear By Camp',
      remarks: 'Text'
    },
    {
      financialYear: '2018-24',
      district: 'Ahmedabad',
      taluka: 'District Panchayat',
      instituteName: 'Ahmedabad District Panchayat',
      sanctionedMandays: 50,
      auditStartDate: new Date('04/01/2023'),
      auditEndDate: new Date('04/15/2023'),
      auditReportIssueDate: new Date('04/18/2023'),
      paraNo: '6',
      paraDescription: 'Subject of Para',
      objectAmount: 0,
      recoverableAmount: 0,
      receivedAmount: 0,
      pendingAmount: 0,
      clearanceDate: new Date('04/30/2019'),
      clearanceDetails: 'Text',
      status: 'Clear By Institute',
      remarks: 'Text'
    },

  ];

  // listing columns
  displayedColumns: any[] = [
    'serialNo',
    'financialYear',
    'district',
    'taluka',
    'instituteName',
    'sanctionedMandays',
    'auditStartDate',
    'auditEndDate',
    'auditReportIssueDate',
    'paraNo',
    'paraDescription',
    'objectAmount',
    'recoverableAmount',
    'receivedAmount',
    'pendingAmount',
    'clearanceDate',
    'clearanceDetails',
    'status',
    'remarks',
  ];

  // listing datasource
  dataSource = new MatTableDataSource<AuditParaDetailRegisterSvo>(this.ElementData);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.searchFormData();
  }

  // form data
  searchFormData() {
    this.searchForm = this.fb.group({
      financialYear: [''],
      districtName: [''],
      talukaName: [''],
      instituteName: [''],
      instituteType: [''],
      auditStartDate: [''],
      auditEndDate: [''],
      auditReportIssueDate: [''],
      paraNo: [''],
      paraDescription: [''],
      clearanceDate: [''],
    });
  }


  // on click on search button
  onSearch() {

  }

  // reset search form
  clearForm() {
    this.searchForm.reset();

    // patches data upon reset
    this.searchForm.patchValue(
      {
        financialYear: '2018-24',
        districtName: 'Ahmedabad',
        talukaName: 'District Panchayat',
        instituteName: 'Ahmedabad District Panchayat',
        instituteType: 'District Panchayat',
      }
    );
  }

  // go to report
  goToReport() { }

  // export to pdf
  captureScreen() { }

}
