import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { lfMessage } from 'src/app/common/error-message/common-message.constants';
import { WorkflowDetailsLfComponent } from '../../workflow-details-lf/workflow-details-lf.component';
import { AuditProcessRegister } from 'src/app/model/local-fund';
import { LocalFundDirective } from 'src/app/common/directive/local-fund-directive';

@Component({
  selector: 'app-audit-process-register',
  templateUrl: './audit-process-register.component.html',
  styleUrls: ['./audit-process-register.component.css']
})
export class AuditProcessRegisterComponent implements OnInit {

  directiveObject = new LocalFundDirective(this.dialog);
  referenceNumber = 'Reference Number:';
  referenceNumberDate = 'Reference Date:';
  date = null;
  todayDate = Date.now();
  errorMessages = lfMessage;
  auditProcessRegister: FormGroup;
  instituteTypeCtrl: FormControl = new FormControl();
  instituteNameCtrl: FormControl = new FormControl();
  auditYearCtrl: FormControl = new FormControl();
  auditorNameCtrl: FormControl = new FormControl();
  isSubmitted = false;

  instituteTypeList: ListValue[] = [
    { value: 'MP', viewValue: 'Maha Nagar Palika' },
    { value: 'NP', viewValue: 'Nagarpalika' },
    { value: 'DP', viewValue: 'District Panchayat' },
    { value: 'TP', viewValue: 'Taluka Panchayat' },
    { value: 'UN', viewValue: 'University' },
    { value: 'MS', viewValue: 'Municiple School Board' },
    { value: 'VP', viewValue: 'Village Panchayat' },
    { value: 'PW', viewValue: 'Police Welfare Fund' },
    { value: 'PD', viewValue: 'Provident Fund of District Panchayat' },
    { value: 'PS', viewValue: 'Provident Fund of Secondary Education office' },
    { value: 'AT', viewValue: 'Ambaji Temple Trust' },
    { value: 'OTH', viewValue: 'Others' },

  ];

  instituteNameList: ListValue[] = [
    { value: '1', viewValue: 'Dahegam Nagarpalika' },
    { value: '2', viewValue: 'DMDG' },
  ];

  auditYearList: ListValue[] = [
    { value: '2017', viewValue: '2017' },
    { value: '2018', viewValue: '2018' },
    { value: '2019', viewValue: '2019' },
    { value: '2020', viewValue: '2020' },
    { value: '2021', viewValue: '2021' },
    { value: '2022', viewValue: '2022' },
  ];

  auditorNameList: any[] = [{ value: '0', viewValue: 'Shri Pratik K Shah' }];

  ElementData: AuditProcessRegister[] = [
    {

      district: 'Gandhinagar',
      instituteType: 'District Panchayat',
      instituteName: 'District Panchayat-Gandhinagar',
      auditYear: '2017-18',
      auditorName: 'J P Patel',
      auditStartDate: new Date('12/28/2017'),
      auditEndDate: new Date('01/12/2018'),
      discussionDate: '12-Jan-2018',
      probableIssuingReportDate: '03-Feb-2018',
      auditorSubmitDate: '15-Feb-2018',
      returnToAuditorDate: '10-Apr-2018',
      resubmissionByAuditorDate: '30-Apr-2018',
      submissionToHqDate: '01-May-2018	',
      sanctionedDate: '05-May-2018',
      typingSubmissionDate: '06-May-2018',
      returnFromTypingDate: '10-May-2018',
      reportIssueDate: '12-Jun-2018',
      firstComplianceDate: '15-Jun-2018',
      instituteReplyDate: '20-Jun-2017',
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
      discussionDate: '15-May-2018',
      probableIssuingReportDate: '04-Jun-2018',
      auditorSubmitDate: '16-Jun-2018',
      returnToAuditorDate: '11-Aug-2018	',
      resubmissionByAuditorDate: '01-Aug-2018	',
      submissionToHqDate: '02-Sep-2018	',
      sanctionedDate: '10-Sep-2018',
      typingSubmissionDate: ' ',
      returnFromTypingDate: ' ',
      reportIssueDate: ' ',
      firstComplianceDate: ' ',
      instituteReplyDate: ' ',
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
      auditorSubmitDate: ' ',
      returnToAuditorDate: ' ',
      resubmissionByAuditorDate: ' ',
      submissionToHqDate: ' ',
      sanctionedDate: ' ',
      typingSubmissionDate: ' ',
      returnFromTypingDate: ' ',
      reportIssueDate: ' ',
      firstComplianceDate: ' ',
      instituteReplyDate: ' ',
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
      discussionDate: '30-Jun-2018',
      probableIssuingReportDate: '20-Jul-2018',
      auditorSubmitDate: '25-Jul-2018',
      returnToAuditorDate: ' ',
      resubmissionByAuditorDate: ' ',
      submissionToHqDate: ' ',
      sanctionedDate: ' ',
      typingSubmissionDate: ' ',
      returnFromTypingDate: ' ',
      reportIssueDate: ' ',
      firstComplianceDate: ' ',
      instituteReplyDate: ' ',
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
      discussionDate: '06-Feb-2018',
      probableIssuingReportDate: '26-Feb-2018',
      auditorSubmitDate: '10-Mar-2018',
      returnToAuditorDate: '12-Mar-2018',
      resubmissionByAuditorDate: ' ',
      submissionToHqDate: ' ',
      sanctionedDate: ' ',
      typingSubmissionDate: ' ',
      returnFromTypingDate: ' ',
      reportIssueDate: ' ',
      firstComplianceDate: ' ',
      instituteReplyDate: ' ',
      auditFeeReceived: '',
      instituteIncome: '',
      instituteExpense: '',
      auditReportCopy: '',
      remarks: '',
      status: 'Pending with Auditor'

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
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.submitFormData();
  }

  // form data
  submitFormData() {
    this.auditProcessRegister = this.fb.group({
      district: [''],
      instituteType: [''],
      instituteName: [''],
      auditYear: [''],
      auditorName: [''],
      auditStartDate: [''],
      auditEndDate: [''],
      discussionDate: [''],
      probableIssuingReportDate: [''],
      auditorSubmitDate: [''],
      returnToAuditorDate: [''],
      resubmissionByAuditorDate: [''],
      submissionToHqDate: [''],
      sanctionedDate: [''],
      typingSubmissionDate: [''],
      returnFromTypingDate: [''],
      reportIssueDate: [''],
      firstComplianceDate: [''],
      instituteReplyDate: [''],
      auditFeeReceived: [''],
      instituteIncome: [''],
      instituteExpense: [''],
      auditReportCopy: [''],
      remarks: [''],
    });
  }

  // on click on add button
  add() {
    if (this.auditProcessRegister.valid) {
      this.isSubmitted = false;
    } else {
      this.isSubmitted = true;
    }
  }

  // reset form
  resetForm() {
    this.auditProcessRegister.reset();
    this.auditProcessRegister.patchValue({
      district: 'Gandhingar'
    });
  }

  // reset common button
  reset() { }
}
