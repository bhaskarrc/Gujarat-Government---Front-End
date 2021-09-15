import { Component, OnInit, ViewChild } from '@angular/core';
import { lfMessage } from 'src/app/common/error-message/common-message.constants';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { WorkflowDetailsLfComponent } from '../../workflow-details-lf/workflow-details-lf.component';
import { DisposalOfPendingAuditPara } from 'src/app/model/local-fund';
import { LocalFundDirective } from 'src/app/common/directive/local-fund-directive';



@Component({
  selector: 'app-disposal-of-pending-audit-para',
  templateUrl: './disposal-of-pending-audit-para.component.html',
  styleUrls: ['./disposal-of-pending-audit-para.component.css']
})
export class DisposalOfPendingAuditParaComponent implements OnInit {

  referenceNumber = 'Reference Number:';
  referenceNumberDate = 'Reference Date:';
  todayDate = Date.now();
  maxDate = new Date();
  errorMessages = lfMessage;
  isSubmitted = false;
  id = 2;
  disposalOfPendingAuditPara: FormGroup;
  directiveObject = new LocalFundDirective(this.dialog);

  instituteTypeCtrl: FormControl = new FormControl();
  instituteNameCtrl: FormControl = new FormControl();
  auditYearCtrl: FormControl = new FormControl();


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

  instituteNameList: ListValue[] = [
    { value: '0', viewValue: 'Dahegam Nagarpalika' },
    { value: '1', viewValue: 'DMDG' },
  ];

  ElementData: DisposalOfPendingAuditPara[] = [
    {
      id: '3',
      district: 'Ahmedabad',
      instituteType: 'District Panchayat',
      instituteName: 'Ahmedabad District Panchayat',
      auditYear: '2018-19',
      amount: '10000',
      treasuryVoucherNo: '1244',
      treasuryVoucherDate: new Date('08/12/2019'),
      primaryReason: 'stationary Expence',
      reason: 'NA',
      remarks: 'NA'
    },
    {
      id: '4',
      district: 'Ahmedabad',
      instituteType: 'District Panchayat',
      instituteName: 'Ahmedabad District Panchayat',
      auditYear: '2018-20',
      amount: '10000',
      treasuryVoucherNo: '1244',
      treasuryVoucherDate: new Date('09/12/2019'),
      primaryReason: 'stationary Expence',
      reason: 'NA',
      remarks: 'NA'
    },
    {
      id: '5',
      district: 'Ahmedabad',
      instituteType: 'District Panchayat',
      instituteName: 'Ahmedabad District Panchayat',
      auditYear: '2018-20',
      amount: '10000',
      treasuryVoucherNo: '1244',
      treasuryVoucherDate: new Date('10/12/2019'),
      primaryReason: 'stationary Expence',
      reason: 'NA',
      remarks: 'NA'
    },
    {
      id: '6',
      district: 'Ahmedabad',
      instituteType: 'District Panchayat',
      instituteName: 'Ahmedabad District Panchayat',
      auditYear: '2018-21',
      amount: '10000',
      treasuryVoucherNo: '1244',
      treasuryVoucherDate: new Date('11/12/2019'),
      primaryReason: 'stationary Expence',
      reason: 'NA',
      remarks: 'NA'
    },
  ];

  dataSource = new MatTableDataSource<DisposalOfPendingAuditPara>(this.ElementData);
  displayedColumns: any[] = [
    'serialNo',
    'id',
    'district',
    'instituteType',
    'instituteName',
    'auditYear',
    'amount',
    'treasuryVoucherNo',
    'treasuryVoucherDate',
    'primaryReason',
    'reason',
    'remarks',
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
    this.disposalOfPendingAuditPara = this.fb.group({
      id: [''],
      districtName: [''],
      instituteType: [''],
      instituteName: [''],
      auditYear: [''],
      amount: [''],
      treasuryVoucherNo: [''],
      treasuryVoucherDate: [''],
      primaryReason: [''],
      reason: [''],
      remarks: [''],
    });
  }

  // add table entry
  add() {
    if (this.disposalOfPendingAuditPara.valid) {
      this.isSubmitted = false;

      this.ElementData.push({
        id: String(this.id),
        district: 'Ahmedabad',
        instituteType: this.instituteTypeList[this.disposalOfPendingAuditPara.value.instituteType].viewValue,
        instituteName: this.instituteNameList[this.disposalOfPendingAuditPara.value.instituteName].viewValue,
        auditYear: this.auditYearList[this.disposalOfPendingAuditPara.value.auditYear].viewValue,
        amount: this.disposalOfPendingAuditPara.value.amount,
        treasuryVoucherNo: this.disposalOfPendingAuditPara.value.treasuryVoucherNo,
        treasuryVoucherDate: this.disposalOfPendingAuditPara.value.treasuryVoucherDate,
        primaryReason: this.disposalOfPendingAuditPara.value.primaryReason,
        reason: this.disposalOfPendingAuditPara.value.reason,
        remarks: this.disposalOfPendingAuditPara.value.remarks
      });
      this.dataSource = new MatTableDataSource<DisposalOfPendingAuditPara>(this.ElementData);
      this.id = Number(this.id) + 1;

    } else {
      this.isSubmitted = true;
    }
  }

  // reset form
  clearForm() {
    this.disposalOfPendingAuditPara.reset();
    this.disposalOfPendingAuditPara.patchValue({

      districtName: 'Ahmedabad',
      id: this.id,
    });
  }

  // common reset button
  reset() {

  }
}
