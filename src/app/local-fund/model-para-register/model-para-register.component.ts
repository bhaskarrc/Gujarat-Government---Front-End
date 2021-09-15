import { CommonListing } from 'src/app/model/common-listing';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { lfMessage } from 'src/app/common/error-message/common-message.constants';
import { ModelParaRegister } from 'src/app/model/local-fund';
import { LocalFundDirective } from 'src/app/common/directive/local-fund-directive';

@Component({
  selector: 'app-model-para-register',
  templateUrl: './model-para-register.component.html',
  styleUrls: ['./model-para-register.component.css']
})
export class ModelParaRegisterComponent implements OnInit {

  // directive object for workflow dialog
  directiveObject = new LocalFundDirective(this.dialog);
  // variables
  referenceNumber = 'Reference Number:';
  referenceNumberDate = 'Reference Date:';
  errorMessages = lfMessage;
  isSubmitted = false;

  // date
  todayDate = Date.now();
  // form group
  modelPara: FormGroup;
  // form control
  instituteTypeCtrl: FormControl = new FormControl();
  auditYearCtrl: FormControl = new FormControl();

  // lists start
  instituteTypeList: CommonListing[] = [
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
  elementData: ModelParaRegister[] = [
    {
      id: '1',
      instituteName: 'AMC',
      instituteType: 'Municiple Corporation',
      auditYear: '2018-19',
      auditName: 'Mr M K Shah',
      desig: 'Auditor',
      reason: 'NA'
    },
    {
      id: '5',
      instituteName: 'Ahmedabad District Panchayat',
      instituteType: 'District Office',
      auditYear: '2018-19',
      auditName: 'Mr K S Patel',
      desig: 'Auditor',
      // auditSal: '62960',
      reason: 'NA'
    },
    {
      id: '8',
      instituteName: 'Ahmedabad District LF office',
      instituteType: 'District Office',
      auditYear: '2019-20',
      auditName: 'Mr. M P Parmar',
      desig: 'Auditor',
      // auditSal: '68560',
      reason: 'NA'
    },
    {
      id: '10',
      instituteName: 'Ahmedabad District Revenue Office',
      instituteType: 'District Office',
      auditYear: '2019-20',
      auditName: 'Mr. S K Dabhi',
      desig: 'Auditor',
      // auditSal: '69745',
      reason: 'NA'
    },
  ];
  dataSource = new MatTableDataSource<ModelParaRegister>(this.elementData);
  displayedColumns: string[] = [
    'serialNo',
    'id',
    'instituteType',
    'instituteName',
    'auditYear',
    'auditName',
    'desig',
    'reason',
    'action',
  ];
  // table data start

  // paginator
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // constructor
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.submitFormData();
  }

  // form data
  submitFormData() {
    this.modelPara = this.fb.group({
      id: ['21'],
      instituteType: ['2'],
      instituteName: ['District Panchayat - Ahmedabad'],
      auditYear: ['', Validators.required],
      auditName: ['', Validators.required],
      desig: ['', Validators.required],
      objec: [''],
    });
  }

  // reset form
  resetForm() {
    this.modelPara.reset();
  }

}
