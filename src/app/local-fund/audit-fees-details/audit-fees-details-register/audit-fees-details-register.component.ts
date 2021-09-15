import { Component, OnInit, ViewChild } from '@angular/core';
import { ListValue } from 'src/app/model/common-grant';
import { lfMessage } from 'src/app/common/error-message/common-message.constants';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { WorkflowDetailsLfComponent } from '../../workflow-details-lf/workflow-details-lf.component';
import { AuditFeesDetailsRegister } from 'src/app/model/local-fund';
import { LocalFundDirective } from 'src/app/common/directive/local-fund-directive';

@Component({
  selector: 'app-audit-fees-details-register',
  templateUrl: './audit-fees-details-register.component.html',
  styleUrls: ['./audit-fees-details-register.component.css']
})
export class AuditFeesDetailsRegisterComponent implements OnInit {

  // variables
  referenceNumber = 'Reference Number:';
  referenceNumberDate = 'Reference Date:';
  todayDate = Date.now();
  auditFeeDetailsRegister: FormGroup;
  errorMessages = lfMessage;
  isSubmitted = false;
  maxDate = new Date();
  districtName = 'Ahmedabad';
  idValue = 5;

  directiveObject = new LocalFundDirective(this.dialog);

  // form controls
  instituteTypeCtrl: FormControl = new FormControl();
  instituteNameCtrl: FormControl = new FormControl();
  auditYearCtrl: FormControl = new FormControl();

  // lists
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
  instituteNameList: ListValue[] = [
    { value: '0', viewValue: 'Gujarat State Medical Council Ahmedabad' },
    { value: '1', viewValue: 'Gujarat State Public Transport Ahmedabad' },
    { value: '2', viewValue: 'Gujarat Energy Developement Agency' },
    { value: '3', viewValue: 'Gujarat Pollution Control Board' },
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

  // table data
  ElementData: AuditFeesDetailsRegister[] = [
    {
      district: 'Ahmedabad',
      id: 1,
      instituteType: 'Others',
      instituteName: 'Gujarat State Medical Council Ahmedabad',
      auditYear: '2018-19',
      recoverableAmountFee: 3900,
      actualReceivedAuditFee: 3900,
      auditFeeReceivedDate: new Date('11/12/2018'),
      pendingRecovery: 0,
      remarks: 'NA'
    },
    {
      district: 'Ahmedabad',
      id: 2,
      instituteType: 'Others',
      instituteName: 'Gujarat State Public Transport Ahmedabad',
      auditYear: '2018-19',
      recoverableAmountFee: 5500,
      actualReceivedAuditFee: 5500,
      auditFeeReceivedDate: new Date('12/12/2018'),
      pendingRecovery: 0,
      remarks: 'NA'
    },
    {
      district: 'Ahmedabad',
      id: 3,
      instituteType: 'Others',
      instituteName: 'Gujarat Energy Developement Agency',
      auditYear: '2018-19',
      recoverableAmountFee: 8000,
      actualReceivedAuditFee: 8000,
      auditFeeReceivedDate: new Date('01/12/2019'),
      pendingRecovery: 0,
      remarks: 'NA'
    },
    {
      district: 'Ahmedabad',
      id: 4,
      instituteType: 'Others',
      instituteName: 'Gujarat Pollution Control Board',
      auditYear: '2018-19',
      recoverableAmountFee: 10000,
      actualReceivedAuditFee: 10000,
      auditFeeReceivedDate: new Date('02/12/2019'),
      pendingRecovery: 0,
      remarks: 'NA'
    }
  ];

  // table datasource
  dataSource = new MatTableDataSource<AuditFeesDetailsRegister>(this.ElementData);

  // table column
  displayedColumns: any[] = [
    'serialNo',
    'district',
    'id',
    'instituteType',
    'instituteName',
    'auditYear',
    'recoverableAmountFee',
    'actualReceivedAuditFee',
    'auditFeeReceivedDate',
    'pendingRecovery',
    'remarks',
    'action'
  ];

  // paginator
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.auditFeeDetailsRegisterData();
  }

  // form data
  auditFeeDetailsRegisterData() {
    this.auditFeeDetailsRegister = this.fb.group({
      districtName: [{ value: 'Ahmedabad', disabled: true }],
      id: [{ value: '5', disabled: true }],
      instituteType: [''],
      others: [''],
      instituteName: [''],
      auditYear: [''],
      recoverableAmountFee: [''],
      actualReceivedAuditFee: [''],
      auditFeeReceivedDate: [''],
      pendingRecovery: [''],
      remarks: [''],
    });
  }

  // calculates pending recovery
  calculatePendingRecovery() {
    const recoverableAmountFee = this.auditFeeDetailsRegister.value.recoverableAmountFee;
    const actualReceivedAuditFee = this.auditFeeDetailsRegister.value.actualReceivedAuditFee;
    let pendingRecovery = null;
    if (recoverableAmountFee !== '' && actualReceivedAuditFee !== '') {
      pendingRecovery = Number(actualReceivedAuditFee) - Number(recoverableAmountFee);
    }
    return pendingRecovery;

  }



  // add form data into table
  add() {
    if (this.auditFeeDetailsRegister.valid) {
      this.isSubmitted = false;

      this.ElementData.push({
        district: this.districtName,
        id: this.idValue,
        instituteType: this.instituteTypeList[this.auditFeeDetailsRegister.value.instituteType].viewValue,
        instituteName: this.instituteNameList[this.auditFeeDetailsRegister.value.instituteName].viewValue,
        auditYear: this.auditYearList[this.auditFeeDetailsRegister.value.auditYear].viewValue,
        recoverableAmountFee: this.auditFeeDetailsRegister.value.recoverableAmountFee,
        actualReceivedAuditFee: this.auditFeeDetailsRegister.value.actualReceivedAuditFee,
        auditFeeReceivedDate: new Date(this.auditFeeDetailsRegister.value.auditFeeReceivedDate),
        pendingRecovery: this.calculatePendingRecovery(),
        remarks: this.auditFeeDetailsRegister.value.remarks
      });

      // increments id value
      this.idValue++;
      this.auditFeeDetailsRegister.patchValue({
        id: this.idValue
      });
      this.dataSource = new MatTableDataSource<AuditFeesDetailsRegister>(this.ElementData);

    } else {
      this.isSubmitted = true;
    }

  }

  // reset form data
  resetForm() {

    this.auditFeeDetailsRegister.reset();
    const id = Number(this.idValue);
    const pendingRecovery = null;

    // patches default value in form upon reset
    this.auditFeeDetailsRegister.patchValue({
      districtName: this.districtName,
      id: id,
      pendingRecovery: pendingRecovery

    });
  }

  // reset common method
  resetFormData() { }
}
