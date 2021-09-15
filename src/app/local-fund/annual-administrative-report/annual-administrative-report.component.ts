
import { CommonListing } from 'src/app/model/common-listing';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { lfMessage } from 'src/app/common/error-message/common-message.constants';
import { WorkflowDetailsLfComponent } from '../workflow-details-lf/workflow-details-lf.component';
import { AnnualAdministrativeReport } from 'src/app/model/local-fund';
import { LocalFundDirective } from 'src/app/common/directive/local-fund-directive';

@Component({
  selector: 'app-annual-administrative-report',
  templateUrl: './annual-administrative-report.component.html',
  styleUrls: ['./annual-administrative-report.component.css']
})
export class AnnualAdministrativeReportComponent implements OnInit {

  // variables
  referenceNumber = 'Reference Number:';
  referenceNumberDate = 'Reference Date:';
  todayDate = Date.now();
  annualAdministratorRegister: FormGroup;
  errorMessages = lfMessage;
  isSubmitted = false;
  maxDate = new Date();

  instituteTypeCtrl: FormControl = new FormControl();
  dateTypeCtrl: FormControl = new FormControl();
  instituteNameCtrl: FormControl = new FormControl();
  finYearCtrl: FormControl = new FormControl();
  districtNameCtrl: FormControl = new FormControl();

  directiveObject = new LocalFundDirective(this.dialog);


  dateTypeList: CommonListing[] = [
    { value: '1', viewValue: 'Audit Completion Date' },
    { value: '2', viewValue: 'Audit Report Issue Date' },
  ];

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

  instituteNameList: CommonListing[] = [
    { value: '0', viewValue: 'Dahegam Nagarpalika' },
    { value: '1', viewValue: 'DMDG' },
  ];

  finYearList: CommonListing[] = [
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

  districtNameList: CommonListing[] = [
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

  // table data
  ElementData: AnnualAdministrativeReport[] = [
    {
      instituteType: 'Maha Nagar Palika',
      instituteName: 'AMC',
      instIncome: '1000.00',
      auditYear: '2018-19',
      auditCompDate: '12-May-2018',
      instExp: '1000.00',
      total: '1000.00',
      marginMemo: '500.00',
      halfMarginMemo: '500.00',
      objectedAmt: '100.00',
      recoveredAmt: '500.00',
      para: 'ABC'
    },
  ];

  dataSource = new MatTableDataSource<AnnualAdministrativeReport>(this.ElementData);
  displayedColumns: any[] = [
    'serialNo',
    'instituteType',
    'instituteName',
    'auditYear',
    'auditCompDate',
    'objectedAmt',
    'instIncome',
    'instExp',
    'total',
    'marginMemo',
    'halfMarginMemo',
    'recoveredAmt',
    'para',
    'action',
  ];

  // paginator
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.annualAdministratorRegisterData();
  }

  annualAdministratorRegisterData() {
    this.annualAdministratorRegister = this.fb.group({
      dateType: [''],
      fromDate: [''],
      toDate: [''],
      districtName: [''],
      instituteType: [''],
      instituteName: ['District Panchayat - Ahmedabad'],
      finYear: [''],

    });
  }

  // reset form
  resetForm() {
    this.annualAdministratorRegister.reset();
  }

}

