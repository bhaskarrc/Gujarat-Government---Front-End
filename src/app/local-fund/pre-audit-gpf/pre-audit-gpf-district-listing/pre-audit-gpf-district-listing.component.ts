import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { PreAuditGpfListing } from 'src/app/model/local-fund';

@Component({
  selector: 'app-pre-audit-gpf-district-listing',
  templateUrl: './pre-audit-gpf-district-listing.component.html',
  styleUrls: ['./pre-audit-gpf-district-listing.component.css']
})
export class PreAuditGpfDistrictListingComponent implements OnInit {
  preAuditGpfListingForm: FormGroup;
  instituteTypeCtrl: FormControl = new FormControl();
  instituteType_list: ListValue[] = [
    { value: 'MP', viewValue: 'MahaNagar Palika' },
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
  instituteNameCtrl: FormControl = new FormControl();
  instituteName_list: ListValue[] = [
    { value: '0', viewValue: 'Dahegam Nagarpalika' },
    { value: '1', viewValue: 'DMDG' },
    { value: '2', viewValue: 'Gandhinagar-District Panchayat' },
    { value: '3', viewValue: 'GMC' },
    { value: '4', viewValue: 'GPCB' },
    { value: '5', viewValue: 'Dahegam Nagar Palika' },
    { value: '6', viewValue: 'Ahmedabad - District Panchayat' },
  ];

  Element_Data: PreAuditGpfListing[] = [
    {
      district: 'Ahmedabad', instituteType: 'District Panchayat', instituteName: 'Ahmedabad - District Panchayat',
      employeeNo: '1200034560', employeeName: 'Mr. J P Patel', designation: 'Auditor', accNo: '1856739578',
      doj: '12-Jan-1956', dor: '12-Jan-1991', retirementType: 'Superannuation', status: 'Pending for Verify',
      approvedClaimAmt: '121211.00', finalClaimAmt: '89908098.00'
    },
    {
      district: 'Ahmedabad', instituteType: 'District Panchayat', instituteName: 'Ahmedabad - District Panchayat',
      employeeNo: '1200034361', employeeName: 'Mr. J M Patel', designation: 'Auditor', accNo: '1555739578',
      doj: '12-Sept-1956', dor: '12-Mar-1992', retirementType: 'Superannuation', status: 'Pending for Verify',
      approvedClaimAmt: '232323.00', finalClaimAmt: '323232.00'
    },
    {
      district: 'Ahmedabad', instituteType: 'District Panchayat', instituteName: 'Ahmedabad - District Panchayat',
      employeeNo: '1200046576', employeeName: 'Mr. A P Patel', designation: 'Auditor', accNo: '1823439578',
      doj: '12-Jul-1956', dor: '12-Apr-1977', retirementType: 'Expired', status: 'Verified', approvedClaimAmt: '232323.00',
      finalClaimAmt: '323232.00'
    },
    {
      district: 'Ahmedabad', instituteType: 'Taluka Panchayat', instituteName: 'Dholka - District Panchayat',
      employeeNo: '1200023457', employeeName: 'Mr. J O Patel', designation: 'Auditor', accNo: '1876539578',
      doj: '20-Jan-1956', dor: '02-May-1980', retirementType: 'Voluntary', status: 'Approved',
      approvedClaimAmt: '323.00', finalClaimAmt: '1232.00'
    },
    {
      district: 'Ahmedabad', instituteType: 'Taluka  Panchayat', instituteName: 'Viramgam - District Panchayat',
      employeeNo: '1290042376', employeeName: 'Mr. M P Patel', designation: 'Auditor', accNo: '185674569578',
      doj: '12-Oct-1976', dor: '15-Dec-2001', retirementType: 'Fund Transfer', status: 'Pending for Verify',
      approvedClaimAmt: '1232323.00', finalClaimAmt: '2323232.00'
    },
  ];
  dataSource = new MatTableDataSource<PreAuditGpfListing>(this.Element_Data);
  displayedColumns: any[] = ['position', 'instituteType', 'instituteName', 'employeeNo', 'employeeName',
    'designation', 'accNo', 'doj', 'dor', 'retirementType', 'finalClaimAmt', 'approvedClaimAmt', 'status', 'action'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.preAuditGpfListingForm = this.fb.group({
      instituteType: [''],
      instituteName: [''],
      employeeNo: [''],
      employeeName: ['']

    });
    this.dataSource.paginator = this.paginator;

  }

}

