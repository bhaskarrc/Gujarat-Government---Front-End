import { Component, OnInit, ViewChild } from '@angular/core';
import { ListValue } from 'src/app/model/common-grant';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { lfMessage } from 'src/app/common/error-message/common-message.constants';
import { GeneralDetail, GpfDetail } from 'src/app/model/local-fund';
import { LocalFundDirective } from 'src/app/common/directive/local-fund-directive';

@Component({
  selector: 'app-pre-audit-gpf-institute-entry',
  templateUrl: './pre-audit-gpf-institute-entry.component.html',
  styleUrls: ['./pre-audit-gpf-institute-entry.component.css']
})
export class PreAuditGpfInstituteEntryComponent implements OnInit {
  // directive object for workflow dialog
  directiveObject = new LocalFundDirective(this.dialog);
  // variables
  id = 0;
  errorMessages = lfMessage;
  // form group
  generalDetail: FormGroup;
  gpfDetail: FormGroup;
  // form control
  districtCtrl: FormControl = new FormControl();
  instituteNameCtrl: FormControl = new FormControl();
  retirementTypeCtrl: FormControl = new FormControl();
  employeeNameCtrl: FormControl = new FormControl();
  instituteTypeCtrl: FormControl = new FormControl();
  // lists start
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
  retirementTypeList: ListValue[] = [
    { value: '1', viewValue: 'Superannuation' },
    { value: '2', viewValue: 'Expired' },
    { value: '3', viewValue: 'Voluntary' },
    { value: '4', viewValue: 'Fund Transfer' }
  ];

  employeeNameList: ListValue[] = [];
  // lists end

  // table data start
  generalDetailsData: GeneralDetail[] = [
    {
      district: 'Ahmedabad', instituteType: 'District Panchayat', instituteName: 'Ahmedabad - District Panchayat',
      employeeName: 'Mr. J. P. Patel', employeeNo: '1232423412', designation: 'Auditor', accNo: '121241231',
      doj: '12-Jan-1956', dor: '12-Jan-1991', retirementType: 'Superannuation'
    }
  ];
  generalDetailDataSource = new MatTableDataSource<GeneralDetail>(this.generalDetailsData);
  generalDetailColumns: any[] = ['position', 'district', 'instituteType', 'instituteName', 'employeeNo',
    'employeeName', 'employeeDesignation', 'accNo', 'doj', 'dor', 'retirementType', 'action'];
  @ViewChild(MatPaginator) generalDetailPaginator: MatPaginator;
  // table data end

  // table data start
  gpfDetailsData: GpfDetail[] = [
    {
      year: '2014', monthYear: 'Apr-14', gpfDeductionAmt: '50000.00',
      dod: '1-Apr-2014', withdrawAmt: '20000.00', withdrawDate: '1-May-2014', remarks: ''
    },
    {
      year: '2014', monthYear: 'May-14', gpfDeductionAmt: '50000.00',
      dod: '1-May-2014', withdrawAmt: '20000.00', withdrawDate: '1-Jun-2014', remarks: ''
    },
    {
      year: '2014', monthYear: 'Jun-14', gpfDeductionAmt: '10000.00',
      dod: '1-Jun-2014', withdrawAmt: '20000.00', withdrawDate: '1-Jul-2014', remarks: ''
    },
    {
      year: '2014', monthYear: 'Jan-14', gpfDeductionAmt: '100000.00',
      dod: '1-Jul-2014', withdrawAmt: '22000.00', withdrawDate: '1-Aug-2014', remarks: ''
    },
    {
      year: '2014', monthYear: 'May-14', gpfDeductionAmt: '50000.00',
      dod: '1-Aug-2014', withdrawAmt: '300.00', withdrawDate: '1-Sep-2014', remarks: ''
    },
    {
      year: '2014', monthYear: 'Apr-14', gpfDeductionAmt: '10000.00',
      dod: '1-Sep-2014', withdrawAmt: '20000.00', withdrawDate: '1-Oct-2014', remarks: ''
    },
    {
      year: '2014', monthYear: 'Aug-14', gpfDeductionAmt: '110000.00',
      dod: '1-Oct-2014', withdrawAmt: '2000.00', withdrawDate: '1-Nov-2014', remarks: ''
    },
    {
      year: '2014', monthYear: 'Nov-14', gpfDeductionAmt: '50000.00',
      dod: '1-Nov-2014', withdrawAmt: '11000.00', withdrawDate: '1-Dec-2014', remarks: ''
    },
    {
      year: '2014', monthYear: 'Apr-14', gpfDeductionAmt: '10000.00',
      dod: '1-Dec-2014', withdrawAmt: '129000.00', withdrawDate: '1-Jan-2014', remarks: ''
    },
    {
      year: '2014', monthYear: 'Dec-14', gpfDeductionAmt: '50000.00',
      dod: '1-Jan-2014', withdrawAmt: '22000.00', withdrawDate: '1-Feb-2014', remarks: ''
    },
    {
      year: '2014', monthYear: 'Apr-14', gpfDeductionAmt: '50000.00',
      dod: '1-Feb-2014', withdrawAmt: '20000.00', withdrawDate: '1-Mar-2014', remarks: ''
    },
    {
      year: '2014', monthYear: 'Oct-15', gpfDeductionAmt: '50000.00',
      dod: '1-Apr-2014', withdrawAmt: '20000.00', withdrawDate: '1-May-2014', remarks: ''
    },
    {
      year: '2014', monthYear: 'Jun-15', gpfDeductionAmt: '50000.00',
      dod: '1-Apr-2014', withdrawAmt: '20000.00', withdrawDate: '1-May-2014', remarks: ''
    },
    {
      year: '2014', monthYear: 'Jul-15', gpfDeductionAmt: '50000.00',
      dod: '1-Apr-2014', withdrawAmt: '20000.00', withdrawDate: '1-May-2014', remarks: ''
    },

  ];
  gpfDetailDataSource = new MatTableDataSource<GpfDetail>(this.gpfDetailsData);
  gpfDetailColumns: string[] = ['position', 'year', 'month', 'gpfDeductionAmt', 'dod', 'withdrawAmt', 'withdrawDate',
    'remarks', 'action'
  ];
  // table data end

  // paginator
  @ViewChild('gpfDetailPaginator', { read: MatPaginator }) gpfDetailPaginator: MatPaginator;
  // constructor
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.generalDetail = this.fb.group({
      id: [''],
      district: [''],
      instituteType: [''],
      instituteName: [''],
      employeeNo: [''],
      employeeName: [''],
      employeeDesignation: [''],
      accNo: [''],
      doj: [''],
      dor: [''],
      retirementType: ['']
    });
    this.id++;
    this.gpfDetail = this.fb.group({
      year: [''],
      month: [''],
      gpfDeductionAmt: [''],
      dod: [''],
      withdrawAmt: [''],
      withdrawDate: [''],
      remarks: ['']
    });
    this.generalDetailDataSource.paginator = this.generalDetailPaginator;
    this.gpfDetailDataSource.paginator = this.gpfDetailPaginator;

  }
}
