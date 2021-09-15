import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { lfMessage } from 'src/app/common/error-message/common-message.constants';
import { MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { CommonListing } from 'src/app/model/common-listing';
import { MprForwardingLetterDetails } from 'src/app/model/local-fund';
import { LocalFundDirective } from 'src/app/common/directive/local-fund-directive';


@Component({
  selector: 'app-mpr-forwarding-letter-details',
  templateUrl: './mpr-forwarding-letter-details.component.html',
  styleUrls: ['./mpr-forwarding-letter-details.component.css']
})
export class MprForwardingLetterDetailsComponent implements OnInit {
  // directive object for workflow dialog
  directiveObject = new LocalFundDirective(this.dialog);
  // variables
  errorMessages = lfMessage;
  isSubmitted = false;
  // date
  todayDate = Date.now();
  // form group
  mprForwardingLetterForm: FormGroup;
  // form control
  instituteNameCtrl: FormControl = new FormControl();
  auditYearCtrl: FormControl = new FormControl();
  // lists start
  instituteNameList: CommonListing[] = [
    { value: '0', viewValue: 'AMC' },
    { value: '1', viewValue: 'Ahmedabad Dist. Panchayat' },
    { value: '2', viewValue: 'District Education Office' },
    { value: '3', viewValue: 'District Agriculture office' },
  ];

  auditYearList: CommonListing[] = [
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
  ];
  // lists end

  // table data start
  elementData: MprForwardingLetterDetails[] = [
    {
      id: '1011',
      auditYear: '2019-20',
      instituteType: 'District Panchayat',
      district: 'Ahmedabad',
      instituteName: 'AMC',
      fromAddress: 'District Local fund office, District – Ahmedabad',
      forwardingLetterDate: new Date('4-6-2019'),
      toAddress: 'Local fund Examiner Office, Gandhinagar',
      forwardingLetterSubject: 'Sending Monthly Progress Report for the month March-2019',
      forwardingLetterBody: 'I am submitting the monthly progress report with all verified details.',
      districtOfficerName: 'Shree Varunkumar Baranval(IAS)',
      districtOfficerDesignation: 'District Development Officer',
      districtOfficerPhoneNo: '2426810/2430295',
      lfOfficeOfficerName: 'Shree B.B. Raval',
      lfOfficeOfficerDesignation: 'District Assistant Examiner',
      lfOfficeOfficerDutyJoinDate: new Date('2-2-2019'),
      lfOfficeOfficerPhoneNo: '9090909090',
      signatureDetails: 'District Assistant Examiner, Local Examiner Fund, Ahmedabad',
      edit: true
    },
    {
      id: '1012',
      auditYear: '2019-20',
      instituteType: 'District Panchayat',
      district: 'Ahmedabad',
      instituteName: 'Ahmedabad Dist. Panchayat',
      fromAddress: 'District Local fund office, District – Ahmedabad',
      forwardingLetterDate: new Date('4-10-2019'),
      toAddress: 'Local fund Examiner Office, Gandhinagar',
      forwardingLetterSubject: 'Sending Monthly Progress Report for the month March-2019',
      forwardingLetterBody: 'I am submitting the monthly progress report with all verified details.',
      districtOfficerName: 'Shree Varunkumar Baranval(IAS)',
      districtOfficerDesignation: 'District Development Officer',
      districtOfficerPhoneNo: '2426810/2430295',
      lfOfficeOfficerName: 'Shree B.B. Raval',
      lfOfficeOfficerDesignation: 'District Assistant Examiner',
      lfOfficeOfficerDutyJoinDate: new Date('3-2-2019'),
      lfOfficeOfficerPhoneNo: '9090909090',
      signatureDetails: 'District Assistant Examiner, Local Examiner Fund, Ahmedabad',
      edit: true
    },
    {
      id: '1013',
      auditYear: '2019-20',
      instituteType: 'District Panchayat',
      district: 'Ahmedabad',
      instituteName: 'District Education Office',
      fromAddress: 'District Local fund office, District – Ahmedabad',
      forwardingLetterDate: new Date('4-21-2019'),
      toAddress: 'Local fund Examiner Office, Gandhinagar',
      forwardingLetterSubject: 'Sending Monthly Progress Report for the month March-2019',
      forwardingLetterBody: 'I am submitting the monthly progress report with all verified details.',
      districtOfficerName: 'Shree Varunkumar Baranval(IAS)',
      districtOfficerDesignation: 'District Development Officer',
      districtOfficerPhoneNo: '2426810/2430295',
      lfOfficeOfficerName: 'Shree B.B. Raval',
      lfOfficeOfficerDesignation: 'District Assistant Examiner',
      lfOfficeOfficerDutyJoinDate: new Date('4-2-2019'),
      lfOfficeOfficerPhoneNo: '9090909090',
      signatureDetails: 'District Assistant Examiner, Local Examiner Fund, Ahmedabad',
      edit: true
    },
    {
      id: '1014',
      auditYear: '2019-20',
      instituteType: 'District Panchayat',
      district: 'Ahmedabad',
      instituteName: 'District Agriculture office',
      fromAddress: 'District Local fund office, District – Ahmedabad',
      forwardingLetterDate: new Date('4-28-2019'),
      toAddress: 'Local fund Examiner Office, Gandhinagar',
      forwardingLetterSubject: 'Sending Monthly Progress Report for the month March-2019',
      forwardingLetterBody: 'I am submitting the monthly progress report with all verified details.',
      districtOfficerName: 'Shree Varunkumar Baranval(IAS)',
      districtOfficerDesignation: 'District Development Officer',
      districtOfficerPhoneNo: '2426810/2430295',
      lfOfficeOfficerName: 'Shree B.B. Raval',
      lfOfficeOfficerDesignation: 'District Assistant Examiner',
      lfOfficeOfficerDutyJoinDate: new Date('2-2-2019'),
      lfOfficeOfficerPhoneNo: '9090909090',
      signatureDetails: 'District Assistant Examiner, Local Examiner Fund, Ahmedabad',
      edit: true
    },
  ];
  displayedColumns: string[] = [
    'serialNo',
    'id',
    'auditYear',
    'instituteType',
    'district',
    'instituteName',
    'fromAddress',
    'forwardingLetterDate',
    'toAddress',
    'forwardingLetterSubject',
    'forwardingLetterBody',
    'districtOfficerName',
    'districtOfficerDesignation',
    'districtOfficerPhoneNo',
    'lfOfficeOfficerName',
    'lfOfficeOfficerDesignation',
    'lfOfficeOfficerDutyJoinDate',
    'lfOfficeOfficerPhoneNo',
    'signatureDetails',
    'action',
  ];

  dataSource = new MatTableDataSource<MprForwardingLetterDetails>(this.elementData);
  // table data end

  // paginator
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // constructor
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {

    this.mprForwardingLetterForm = this.fb.group({

      id: [{ value: '1011', disabled: true }],
      auditYear: [''],
      instituteType: [{ value: 'District Panchayat', disabled: true }],
      district: [{ value: 'Ahmedabad', disabled: true }],
      instituteName: [''],
      fromAddress: [''],
      forwardingLetterDate: [''],
      toAddress: [''],
      forwardingLetterSubject: [''],
      forwardingLetterBody: [''],
      districtOfficerName: [''],
      districtOfficerDesignation: [''],
      districtOfficerPhoneNo: [''],
      lfOfficeOfficerName: [''],
      lfOfficeOfficerDesignation: [''],
      lfOfficeOfficerDutyJoinDate: [''],
      lfOfficeOfficerPhoneNo: [''],
      signatureDetails: [''],


    });
  }

  // on click on add button
  add() {

    if (this.mprForwardingLetterForm.valid) {
      this.isSubmitted = false;

      this.elementData.push({
        id: this.mprForwardingLetterForm.value.id,
        auditYear: this.mprForwardingLetterForm.value.auditYear,
        instituteType: this.mprForwardingLetterForm.value.instituteType,
        district: this.mprForwardingLetterForm.value.district,
        instituteName: this.mprForwardingLetterForm.value.instituteName,
        fromAddress: this.mprForwardingLetterForm.value.fromAddress,
        forwardingLetterDate: this.mprForwardingLetterForm.value.forwardingLetterDate,
        toAddress: this.mprForwardingLetterForm.value.toAddress,
        forwardingLetterSubject: this.mprForwardingLetterForm.value.forwardingLetterSubject,
        forwardingLetterBody: this.mprForwardingLetterForm.value.forwardingLetterBody,
        districtOfficerName: this.mprForwardingLetterForm.value.districtOfficerName,
        districtOfficerDesignation: this.mprForwardingLetterForm.value.districtOfficerDesignation,
        districtOfficerPhoneNo: this.mprForwardingLetterForm.value.districtOfficerPhoneNo,
        lfOfficeOfficerName: this.mprForwardingLetterForm.value.lfOfficeOfficerName,
        lfOfficeOfficerDesignation: this.mprForwardingLetterForm.value.lfOfficeOfficerDesignation,
        lfOfficeOfficerDutyJoinDate: this.mprForwardingLetterForm.value.lfOfficeOfficerDutyJoinDate,
        lfOfficeOfficerPhoneNo: this.mprForwardingLetterForm.value.lfOfficeOfficerPhoneNo,
        signatureDetails: this.mprForwardingLetterForm.value.signatureDetails,
        edit: true
      });

      this.dataSource.data = this.dataSource.data;

    } else {
      this.isSubmitted = true;
    }

  }

  // reset form
  reset() {
    this.mprForwardingLetterForm.reset();
  }

  // on click on edit icon in table
  onEdit(element) {
    element.edit = !element.edit;
  }

}
