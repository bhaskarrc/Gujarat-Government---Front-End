import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { lfMessage } from 'src/app/common/error-message/common-message.constants';
import { MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { WorkflowDetailsLfComponent } from '../../workflow-details-lf/workflow-details-lf.component';
import { AuditParaDetailRegisterSvo } from 'src/app/model/local-fund';
import { CommonListing } from 'src/app/model/common-listing';
import { LocalFundDirective } from 'src/app/common/directive/local-fund-directive';


@Component({
  selector: 'app-audit-para-detail-register-svo',
  templateUrl: './audit-para-detail-register-svo.component.html',
  styleUrls: ['./audit-para-detail-register-svo.component.css']
})
export class AuditParaDetailRegisterSvoComponent implements OnInit {

  directiveObject = new LocalFundDirective(this.dialog);
  referenceNumber = 'Reference Number:';
  referenceNumberDate = 'Reference Date:';
  todayDate = Date.now();
  errorMessages = lfMessage;
  isSubmitted = false;
  auditParaDetailRegisterSvo: FormGroup;
  minDate = new Date();

  paraNoList: CommonListing[] = [
    { value: '0', viewValue: '1' },
    { value: '1', viewValue: '2' },
    { value: '2', viewValue: '3' },
    { value: '3', viewValue: '4' },
    { value: '4', viewValue: '5' },
    { value: '5', viewValue: '6' },
  ];

  statusList: CommonListing[] = [
    { value: '0', viewValue: 'Edit Audit Para' },
    { value: '1', viewValue: 'Drop Para' },
  ];


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
      paraNo: this.paraNoList[0].viewValue,
      paraDescription: 'Subject of Para',
      objectAmount: 2635,
      recoverableAmount: 2635,
      receivedAmount: 2635,
      pendingAmount: 0,
      clearanceDate: new Date('04/30/2019'),
      clearanceDetails: 'Text',
      status: '',
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
      paraNo: this.paraNoList[0].viewValue,
      paraDescription: 'Subject of Para',
      objectAmount: 456,
      recoverableAmount: 456,
      receivedAmount: 456,
      pendingAmount: 0,
      clearanceDate: new Date('04/30/2019'),
      clearanceDetails: 'Text',
      status: '',
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
      paraNo: this.paraNoList[0].viewValue,
      paraDescription: 'Subject of Para',
      objectAmount: 28736,
      recoverableAmount: 26000,
      receivedAmount: 26000,
      pendingAmount: 2736,
      clearanceDate: new Date('04/30/2019'),
      clearanceDetails: 'Text',
      status: '',
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
      paraNo: this.paraNoList[0].viewValue,
      paraDescription: 'Subject of Para',
      objectAmount: 995874,
      recoverableAmount: 900000,
      receivedAmount: 900000,
      pendingAmount: 95874,
      clearanceDate: new Date('04/30/2019'),
      clearanceDetails: 'Text',
      status: '',
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
      paraNo: this.paraNoList[0].viewValue,
      paraDescription: 'Subject of Para',
      objectAmount: 0,
      recoverableAmount: 0,
      receivedAmount: 0,
      pendingAmount: 0,
      clearanceDate: new Date('04/30/2019'),
      clearanceDetails: 'Text',
      status: '',
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
      paraNo: this.paraNoList[0].viewValue,
      paraDescription: 'Subject of Para',
      objectAmount: 0,
      recoverableAmount: 0,
      receivedAmount: 0,
      pendingAmount: 0,
      clearanceDate: new Date('04/30/2019'),
      clearanceDetails: 'Text',
      status: '',
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
    'action'
  ];

  // listing datsource
  dataSource = new MatTableDataSource<AuditParaDetailRegisterSvo>(this.ElementData);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.submitFormData();
  }

  // on click on search button
  onSearch() {
    if (this.auditParaDetailRegisterSvo.valid) {
      this.isSubmitted = false;
    } else {
      this.isSubmitted = true;
    }
  }

  // reset form
  clearForm() { }

  // form data
  submitFormData() {
    this.auditParaDetailRegisterSvo = this.fb.group({
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

  // reset data
  reset() { }

}
