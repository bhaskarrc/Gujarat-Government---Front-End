import { Component, OnInit, ViewChild } from '@angular/core';
import { lfMessage } from 'src/app/common/error-message/common-message.constants';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { WorkflowDetailsLfComponent } from '../../workflow-details-lf/workflow-details-lf.component';
import { AuditProgressRegisterSvo } from 'src/app/model/local-fund';
import { LocalFundDirective } from 'src/app/common/directive/local-fund-directive';


@Component({
  selector: 'app-audit-progress-register-svo',
  templateUrl: './audit-progress-register-svo.component.html',
  styleUrls: ['./audit-progress-register-svo.component.css']
})
export class AuditProgressRegisterSvoComponent implements OnInit {

  directiveObject = new LocalFundDirective(this.dialog);
  referenceNumber = 'Reference Number:';
  referenceNumberDate = 'Reference Date:';
  todayDate = Date.now();
  errorMessages = lfMessage;
  isSubmitted = false;
  auditProgressRegisterSvo: FormGroup;
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
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.submitFormData();
  }

  // form data
  submitFormData() {
    this.auditProgressRegisterSvo = this.fb.group({
      financialYear: [''],
      districtName: [''],
      talukaName: [''],
      instituteName: [''],
      auditType: [''],
      intimationDate: [''],
      sanctionedMandays: [''],
      auditStartDate: [''],
      auditEndDate: [''],
      auditReportIssueDate: [''],
      remarks: [''],
    });
  }

  // add table entry on form submission
  onSubmit() {

    if (this.auditProgressRegisterSvo.valid) {
      this.isSubmitted = false;

      this.ElementData.push({
        financialYear: '2018-19',
        district: 'Ahmedabad',
        taluka: 'Ranpur',
        instituteName: 'Ranpur Taluka panchayat',
        auditType: 'Non Chargeble',
        intimationDate: this.auditProgressRegisterSvo.value.intimationDate,
        sanctionedMandays: 35,
        auditStartDate: this.auditProgressRegisterSvo.value.auditStartDate,
        auditEndDate: this.auditProgressRegisterSvo.value.auditEndDate,
        auditReportIssueDate: this.auditProgressRegisterSvo.value.auditReportIssueDate,
        remarks: this.auditProgressRegisterSvo.value.remarks
      });

      this.dataSource = new MatTableDataSource<AuditProgressRegisterSvo>(this.ElementData);
    } else {
      this.isSubmitted = true;
    }
  }

  // on click on reset button
  clearForm() {
    this.auditProgressRegisterSvo.reset();
    this.auditProgressRegisterSvo.patchValue({
      financialYear: '2018-19',
      districtName: 'Ahmedabad',
      talukaName: 'Ranpur',
      instituteName: 'Ranpur Taluka panchayat',
      auditType: 'Non Chargeble',
      sanctionedMandays: '35',
    });
  }

  // on click on common reset button
  reset() { }

}
