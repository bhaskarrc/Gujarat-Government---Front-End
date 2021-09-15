import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { lfMessage } from 'src/app/common/error-message/common-message.constants';
import { ListValue } from 'src/app/model/common-grant';
import { WorkflowDetailsLfComponent } from '../../workflow-details-lf/workflow-details-lf.component';
import { AuditSupervisionRegister } from 'src/app/model/local-fund';
import { LocalFundDirective } from 'src/app/common/directive/local-fund-directive';


@Component({
  selector: 'app-audit-supervision-register',
  templateUrl: './audit-supervision-register.component.html',
  styleUrls: ['./audit-supervision-register.component.css']
})
export class AuditSupervisionRegisterComponent implements OnInit {

  referenceNumber = 'Reference Number:';
  referenceNumberDate = 'Reference Date:';
  todayDate = Date.now();
  errorMessages = lfMessage;
  isSubmitted = false;
  auditSupervisionRegister: FormGroup;
  id = 5;

  directiveObject = new LocalFundDirective(this.dialog);

  instituteTypeCtrl: FormControl = new FormControl();
  auditYearCtrl: FormControl = new FormControl();
  isIntimatedCtrl: FormControl = new FormControl();
  isAuditorAvailableCtrl: FormControl = new FormControl();

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

  isAuditorAvailableList: ListValue[] = [
    { value: '0', viewValue: 'Yes' },
    { value: '1', viewValue: 'No' },
  ];

  isIntimatedList: ListValue[] = [
    { value: '0', viewValue: 'Yes' },
    { value: '1', viewValue: 'No' },
  ];

  ElementData: AuditSupervisionRegister[] = [
    {
      district: 'Gandhinagar',
      id: '1',
      instituteType: 'Gram Panchayat Gandhinagar Taluka',
      instituteName: 'Gram Panchayat',
      auditorName: 'Mr. S O Patel',
      auditYear: '2016-17',
      dateOfSupervision: new Date('04/25/2017'),
      isIntimated: 'No',
      isAuditorAvailable: 'Yes',
      auditDescription: 'Audit Description',
      detailsIfNotIntimated: '',
    },
    {
      district: 'Gandhinagar',
      id: '2',
      instituteType: 'Taluka Panchayat Gandhinagar Taluka',
      instituteName: 'Taluka Panchayat',
      auditorName: 'Mr. K P Sanghavi',
      auditYear: '2016-18',
      dateOfSupervision: new Date('04/25/2018'),
      isIntimated: 'No',
      isAuditorAvailable: 'Yes',
      auditDescription: 'Audit Description',
      detailsIfNotIntimated: '',
    },
    {
      district: 'Gandhinagar',
      id: '3',
      instituteType: 'Taluka Panchayat Gandhinagar Taluka',
      instituteName: 'Taluka Panchayat',
      auditorName: 'Mr. P S Patel',
      auditYear: '2016-19',
      dateOfSupervision: new Date('04/25/2019'),
      isIntimated: 'No',
      isAuditorAvailable: 'Yes',
      auditDescription: 'Audit Description',
      detailsIfNotIntimated: '',
    },
    {
      district: 'Gandhinagar',
      id: '4',
      instituteType: 'District Panchayat Gandhinagar Taluka',
      instituteName: 'District Panchayat',
      auditorName: 'Mr S R Shukla',
      auditYear: '2016-20',
      dateOfSupervision: new Date('04/25/2020'),
      isIntimated: 'No',
      isAuditorAvailable: 'Yes',
      auditDescription: 'Audit Description',
      detailsIfNotIntimated: '',
    }
  ];

  dataSource = new MatTableDataSource<AuditSupervisionRegister>(this.ElementData);
  displayedColumns: any[] = [
    'serialNo',
    'district',
    'id',
    'instituteType',
    'instituteName',
    'auditorName',
    'auditYear',
    'dateOfSupervision',
    'isIntimated',
    'isAuditorAvailable',
    'auditDescription',
    'detailsIfNotIntimated',
    'action'
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.submitFormData();
  }

  // form data
  submitFormData() {
    this.auditSupervisionRegister = this.fb.group({
      id: [''],
      districtName: [''],
      instituteType: [''],
      others: [''],
      instituteName: [''],
      auditorName: [''],
      auditYear: [''],
      supervisionDate: [''],
      isIntimated: ['1'],
      isAuditorAvailable: ['0'],
      auditDescription: [''],
      detailsIfNotIntimated: [''],
    });
  }

  // add table entry
  add() {
    if (this.auditSupervisionRegister.valid) {
      this.isSubmitted = false;
      this.ElementData.push({
        district: 'Gandhinagar',
        id: String(this.id),
        instituteType: this.instituteTypeList[this.auditSupervisionRegister.value.instituteType].viewValue,
        instituteName: 'Taluka Panchayat',
        auditorName: this.auditSupervisionRegister.value.auditorName,
        auditYear: this.auditYearList[this.auditSupervisionRegister.value.auditYear].viewValue,
        dateOfSupervision: this.auditSupervisionRegister.value.supervisionDate,
        isIntimated: this.isIntimatedList[this.auditSupervisionRegister.value.isIntimated].viewValue,
        isAuditorAvailable: this.isAuditorAvailableList[this.auditSupervisionRegister.value.isAuditorAvailable].viewValue,
        auditDescription: this.auditSupervisionRegister.value.auditDescription,
        detailsIfNotIntimated: this.auditSupervisionRegister.value.detailsIfNotIntimated,
      });
      this.dataSource = new MatTableDataSource<AuditSupervisionRegister>(this.ElementData);
      this.id = Number(this.id) + 1;

    } else {
      this.isSubmitted = true;
    }
  }

  // reset form
  clearForm() {
    this.auditSupervisionRegister.reset();
    this.auditSupervisionRegister.patchValue({
      districtName: 'Gandhinagar',
      id: String(this.id),
      instituteName: 'Gram Panchayat Gandhinagar Taluka',
      isIntimated: this.isIntimatedList[1].value,
      isAuditorAvailable: this.isAuditorAvailableList[0].value,
    });
  }

  // reset common button
  reset() { }
}
