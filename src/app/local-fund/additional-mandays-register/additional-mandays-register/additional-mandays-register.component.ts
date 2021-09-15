import { lfMessage } from '../../../common/error-message/common-message.constants';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { AdditionalMandaysRegister } from 'src/app/model/local-fund';
import { LocalFundDirective } from 'src/app/common/directive/local-fund-directive';

@Component({
  selector: 'app-additional-mandays-register',
  templateUrl: './additional-mandays-register.component.html',
  styleUrls: ['./additional-mandays-register.component.css']
})
export class AdditionalMandaysRegisterComponent implements OnInit {

  // variables
  referenceNumber = 'Reference Number:';
  referenceNumberDate = 'Reference Date:';
  errorMessages = lfMessage;
  isSubmitted = false;
  // date
  todayDate = Date.now();
  // directive object for workflow dialog
  directiveObject = new LocalFundDirective(this.dialog);

  // form group
  additionalManDaysRegisterForm: FormGroup;

  // form control
  instituteTypeCtrl: FormControl = new FormControl();
  instituteNameCtrl: FormControl = new FormControl();
  auditTypeCtrl: FormControl = new FormControl();
  auditYearCtrl: FormControl = new FormControl();
  monthsFromAuditYearCtrl: FormControl = new FormControl();
  auditorNameCtrl: FormControl = new FormControl();

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
    { value: '0', viewValue: 'Dahegam Nagarpalika' },
    { value: '1', viewValue: 'DMDG' },
  ];
  auditTypeList: ListValue[] = [
    { value: '0', viewValue: 'Chargable' },
    { value: '1', viewValue: 'Non-Chargable' },
  ];
  auditYearList: ListValue[] = [
    { value: '0', viewValue: '2017-18' },
    { value: '1', viewValue: '2018-19' },
    { value: '2', viewValue: '2019-20' },
    { value: '3', viewValue: '2020-21' },
    { value: '4', viewValue: '2021-22' },
    { value: '5', viewValue: '2022-23' },
  ];
  monthsFromAuditYearList: ListValue[] = [
    { value: '0', viewValue: 'January' },
    { value: '1', viewValue: 'February' },
    { value: '2', viewValue: 'March' },
    { value: '3', viewValue: 'April' },
    { value: '4', viewValue: 'May' },
    { value: '5', viewValue: 'June' },
    { value: '6', viewValue: 'July' },
    { value: '7', viewValue: 'August' },
    { value: '8', viewValue: 'September' },
    { value: '9', viewValue: 'October' },
    { value: '10', viewValue: 'November' },
    { value: '11', viewValue: 'December' }
  ];
  auditorNameList: ListValue[] = [
    { value: '0', viewValue: 'Mr. M.K.Shah' },
    { value: '0', viewValue: 'Mr. K.T. Patel' },
  ];
  // lists end

  // table data
  ElementData: AdditionalMandaysRegister[] = [
    {
      district: 'Rajkot',
      auditYear: '2018-19',
      month: 'April',
      instituteType: 'Municipal Corporation',
      instituteName: 'RMC',
      auditType: 'Chargable',
      auditorName: 'Mr. M.K.Shah',
      auditStartDate: new Date('04/18/2018'),
      sanctionedMandays: '20',
      requestedAdditionalMandays: '10',
      reason: 'Sanctioned Mandays are not enough for audit',
    }
  ];
  dataSource = new MatTableDataSource<AdditionalMandaysRegister>(this.ElementData);
  displayedColumns: string[] = [
    'serialNo',
    'district',
    'auditYear',
    'month',
    'instituteType',
    'instituteName',
    'auditType',
    'auditorName',
    'auditStartDate',
    'sanctionedMandays',
    'requestedAdditionalMandays',
    'reason',
    'action'
  ];
  // table data end

  // paginator
  @ViewChild(MatPaginator) paginator: MatPaginator;

  // constructor
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.additionalManDaysRegisterFormData();
  }

  // form data
  additionalManDaysRegisterFormData() {
    this.additionalManDaysRegisterForm = this.fb.group({
      instituteType: [''],
      instituteName: [''],
      auditType: [''],
      auditYear: [''],
      sanctionedMandays: [''],
      auditorName: [''],
      auditStartDate: [''],
      requestedAdditionalMandays: [''],
      reasonForAdditionalMandays: [''],
      lastTwoYearIncome: [''],
      lastTwoYearExpenditure: [''],
      lastTwoYearVoucher: [''],
      monthsFromAuditYear: [''],
      noOfPfaccount: [''],
      noOfLegalVoucher: [''],
      lastYearApprovedMandays: [''],
      districtName: ['Rajkot']
    });
  }

  // reset form
  reset() { }

  // add form data into table
  add() {
    if (this.additionalManDaysRegisterForm.valid) {
      this.isSubmitted = false;

      this.ElementData.push({
        district: 'Rajkot',
        auditYear: this.auditYearList[this.additionalManDaysRegisterForm.value.auditYear].viewValue,
        month: this.monthsFromAuditYearList[this.additionalManDaysRegisterForm.value.monthsFromAuditYear].viewValue,
        instituteType: this.instituteTypeList[this.additionalManDaysRegisterForm.value.instituteType].viewValue,
        instituteName: this.instituteNameList[this.additionalManDaysRegisterForm.value.instituteName].viewValue,
        auditType: this.auditTypeList[this.additionalManDaysRegisterForm.value.auditType].viewValue,
        auditorName: this.auditorNameList[this.additionalManDaysRegisterForm.value.auditorName].viewValue,
        auditStartDate: this.additionalManDaysRegisterForm.value.auditStartDate,
        sanctionedMandays: this.additionalManDaysRegisterForm.value.sanctionedMandays,
        requestedAdditionalMandays: this.additionalManDaysRegisterForm.value.requestedAdditionalMandays,
        reason: this.additionalManDaysRegisterForm.value.reasonForAdditionalMandays,
      });

      this.dataSource.data = this.dataSource.data;

    } else {
      this.isSubmitted = true;
    }
  }

  // reset form
  clearForm() {
    this.additionalManDaysRegisterForm.reset();
  }

  // delete row from table
  deleteRow(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource.data = this.dataSource.data;
  }
}
