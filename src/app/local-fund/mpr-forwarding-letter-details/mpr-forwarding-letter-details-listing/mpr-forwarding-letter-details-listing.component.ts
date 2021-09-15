import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { CommonListing } from 'src/app/model/common-listing';
import { ListValue } from 'src/app/model/common-grant';
import { MprForwardingLetterDetails } from 'src/app/model/local-fund';


@Component({
  selector: 'app-mpr-forwarding-letter-details-listing',
  templateUrl: './mpr-forwarding-letter-details-listing.component.html',
  styleUrls: ['./mpr-forwarding-letter-details-listing.component.css']
})
export class MprForwardingLetterDetailsListingComponent implements OnInit {
  // date
  todayDate = Date.now();
  // form group
  mprForwardingLetterLisitngForm: FormGroup;
  // form control
  auditYearCtrl: FormControl = new FormControl();
  districtCtrl: FormControl = new FormControl();
  // lists start
  districtList: ListValue[] = [
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
  // constructo
  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.mprForwardingLetterLisitngForm = this.fb.group({

      id: [{ value: '1011', disabled: true }],
      auditYear: [''],
      district: [{ value: 'Ahmedabad', disabled: true }],
    });
  }

  // reset form
  reset() {
    this.mprForwardingLetterLisitngForm.reset();
  }

}
