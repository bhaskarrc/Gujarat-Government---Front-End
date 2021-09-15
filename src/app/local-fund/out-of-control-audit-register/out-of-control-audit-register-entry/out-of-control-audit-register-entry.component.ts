import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { lfMessage } from 'src/app/common/error-message/common-message.constants';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { OutOfControlAuditRegisterEntry } from 'src/app/model/local-fund';

@Component({
  selector: 'app-out-of-control-audit-register-entry',
  templateUrl: './out-of-control-audit-register-entry.component.html',
  styleUrls: ['./out-of-control-audit-register-entry.component.css']
})
export class OutOfControlAuditRegisterEntryComponent implements OnInit {
  // variables
  id = 1;
  isSubmitted = false;
  errorMessage = lfMessage;
  // form group
  outOfControlAuditRegisterEntry: FormGroup;
  // form control
  auditYearCtrl: FormControl = new FormControl();
  districtCtrl: FormControl = new FormControl();
  instituteTypeCtrl: FormControl = new FormControl();
  instituteNameCtrl: FormControl = new FormControl();
  talukaCtrl: FormControl = new FormControl();
  // lists start
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

  districtList: ListValue[] = [
    { value: '1', viewValue: 'Ahmedabad' },
    { value: '2', viewValue: 'Gandhinagar' },
    { value: '3', viewValue: 'Vadodara' },
    { value: '4', viewValue: 'Surat' },
    { value: '5', viewValue: 'Rajkot' },
    { value: '6', viewValue: 'Anand' },
    { value: '7', viewValue: 'Bharuch' },
    { value: '8', viewValue: 'Valsad' },
    { value: '9', viewValue: 'Navsari' },
    { value: '10', viewValue: 'Dang' },
  ];

  instituteTypeList: ListValue[] = [
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
  instituteNameList: ListValue[] = [
    { value: '0', viewValue: 'Dahegam Nagarpalika' },
    { value: '1', viewValue: 'DMDG' },
    { value: '2', viewValue: 'Gandhinagar-District Panchayat' },
    { value: '3', viewValue: 'GMC' },
    { value: '4', viewValue: 'GPCB' },
    { value: '5', viewValue: 'Dahegam Nagar Palika' },
    { value: '6', viewValue: 'Ahmedabad - District Panchayat' },
  ];

  talukaList: ListValue[] = [
    { value: '1', viewValue: 'Ahmedabad' },
    { value: '2', viewValue: 'Amreli' },
    { value: '3', viewValue: 'Anand' },
    { value: '4', viewValue: 'Banaskantha' },
    { value: '5', viewValue: 'Bharuch' },
    { value: '6', viewValue: 'Bhavnagar' },
    { value: '7', viewValue: 'Dahod' },
    { value: '8', viewValue: 'Dang' },
    { value: '9', viewValue: 'Gandhinagar' }
  ];
  // lists start

  // table data start
  elementData: OutOfControlAuditRegisterEntry[] = [{
    instituteType: 'Village Panchayat', instituteName: 'Valad', district: 'Gandhinagar', taluka: 'Kalol',
    auditYear: '1990-91', units: '1', manDays: '1', reason: 'Because of all the records are in police station', remarks: ''
  },
  {
    instituteType: 'Village Panchayat', instituteName: 'Valad', district: 'Gandhinagar', taluka: 'Kalol',
    auditYear: '1991-92', units: '2', manDays: '2', reason: 'Because of all the records are in police station', remarks: ''
  }];
  dataSource = new MatTableDataSource<OutOfControlAuditRegisterEntry>(this.elementData);
  columns: string[] = ['position', 'instituteType', 'instituteName', 'district',
    'taluka', 'auditYear', 'units', 'manDays', 'reason', 'remarks'
  ];
  // table data end

  // paginator
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // constructor
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.outOfControlAuditRegisterEntry = this.fb.group({
      id: [''],
      instituteType: [''],
      instituteName: [''],
      district: [''],
      taluka: [''],
      auditYear: [''],
      units: [''],
      manDays: [''],
      reason: [''],
      remarks: ['']
    });
    this.dataSource.paginator = this.paginator;

  }

  // reset form
  clearForm() {
    this.outOfControlAuditRegisterEntry.reset();
    this.outOfControlAuditRegisterEntry.patchValue({
      id: this.id
    });
  }

  // on click on add button
  add() {
    this.id++;
  }

}
