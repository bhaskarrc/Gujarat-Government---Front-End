import { Component, OnInit, ViewChild } from '@angular/core';
import { lfMessage } from 'src/app/common/error-message/common-message.constants';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { AuditProgressRegisterSvo } from 'src/app/model/local-fund';



@Component({
  selector: 'app-audit-progress-register-svo-report',
  templateUrl: './audit-progress-register-svo-report.component.html',
  styleUrls: ['./audit-progress-register-svo-report.component.css']
})
export class AuditProgressRegisterSvoReportComponent implements OnInit {

  errorMessages = lfMessage;
  isSubmitted = false;
  minDate = new Date();

  searchForm: FormGroup;
  ElementData: AuditProgressRegisterSvo[] = [
    {
      financialYear: '2017-18',
      district: 'Ahmedabad',
      taluka: 'Ranpur',
      instituteName: 'Ranpur Taluka panchayat',
      auditType: 'Non Chargeble',
      intimationDate: new Date('06/10/2017'),
      sanctionedMandays: 35,
      auditStartDate: new Date('06/15/2017'),
      auditEndDate: new Date('06/25/2017'),
      auditReportIssueDate: new Date('06/27/2017'),
      remarks: 'NA'
    },
    {
      financialYear: '2017-18',
      district: 'Ahmedabad',
      taluka: 'Botad',
      instituteName: 'Botad Taluka panchayat',
      auditType: 'Non Chargeble',
      intimationDate: new Date('06/30/2017'),
      sanctionedMandays: 40,
      auditStartDate: new Date('07/05/2017'),
      auditEndDate: new Date('07/20/2017'),
      auditReportIssueDate: new Date('07/22/2017'),
      remarks: 'NA'
    },
    {
      financialYear: '2018-19',
      district: 'Gandhinagar',
      taluka: 'Dahegam',
      instituteName: 'Dahegam Taluka panchayat',
      auditType: 'Non Chargeble',
      intimationDate: new Date('05/08/2018'),
      sanctionedMandays: 25,
      auditStartDate: new Date('05/15/2018'),
      auditEndDate: new Date('05/30/2018'),
      auditReportIssueDate: new Date('06/05/2018'),
      remarks: 'NA'
    },
    {
      financialYear: '2018-19',
      district: 'Gandhinagar',
      taluka: 'Kalol',
      instituteName: 'Kalol Taluka panchayat',
      auditType: 'Non Chargeble',
      intimationDate: new Date('01/05/2019'),
      sanctionedMandays: 10,
      auditStartDate: new Date('01/10/2019'),
      auditEndDate: new Date('01/25/2019'),
      auditReportIssueDate: new Date('01/28/2019'),

      remarks: 'NA'
    },

  ];

  displayedColumns: any[] = [
    'serialNo',
    'financialYear',
    'district',
    'taluka',
    'instituteName',
    'auditType',
    'intimationDate',
    'sanctionedMandays',
    'auditStartDate',
    'auditEndDate',
    'auditReportIssueDate',
    'remarks',
    'action'
  ];

  dataSource = new MatTableDataSource<AuditProgressRegisterSvo>(this.ElementData);
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
      auditStartDate: [''],
      auditEndDate: [''],
    });
  }

  // on click on search button
  onSearch() { }

  // on click on reset button
  clearForm() {
    this.searchForm.reset();
    this.searchForm.patchValue(
      {
        financialYear: '2018-19',
        districtName: 'Ahmedabad',
        talukaName: 'Ranpur',
        instituteName: 'Ranpur Taluka panchayat',
      }
    );
  }

  // on click on generate report button
  goToReport() { }

  // on click on export to pdf
  captureScreen() { }



}
