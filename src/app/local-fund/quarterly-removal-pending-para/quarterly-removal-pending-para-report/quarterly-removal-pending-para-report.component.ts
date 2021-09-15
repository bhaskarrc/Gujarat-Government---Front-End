import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { QuarterlyRemovalPendingPara } from 'src/app/model/local-fund';

@Component({
  selector: 'app-quarterly-removal-pending-para-report',
  templateUrl: './quarterly-removal-pending-para-report.component.html',
  styleUrls: ['./quarterly-removal-pending-para-report.component.css']
})
export class QuarterlyRemovalPendingParaReportComponent implements OnInit {
  quarterlyRemovalPendingParaReport: FormGroup;
  isSubmitted = false;

  districtCtrl: FormControl = new FormControl();
  auditYearCtrl: FormControl = new FormControl();
  instituteTypeCtrl: FormControl = new FormControl();
  instituteNameCtrl: FormControl = new FormControl();

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

  auditYearList: ListValue[] = [
    { value: '1', viewValue: '2001-02' },
    { value: '2', viewValue: '2002-02' },
    { value: '3', viewValue: '2003-04' },
    { value: '4', viewValue: '2004-05' },
    { value: '5', viewValue: '2005-06' },
    { value: '6', viewValue: '2006-07' },
    { value: '7', viewValue: '2007-08' },
    { value: '9', viewValue: '2008-09' },
    { value: '10', viewValue: '2009-10' },
    { value: '11', viewValue: '2010-11' },
  ];

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
    { value: '2', viewValue: 'Gandhinagar-District Panchayat' },
    { value: '3', viewValue: 'GMC' },
    { value: '4', viewValue: 'GPCB' },
    { value: '5', viewValue: 'Dahegam Nagar Palika' },
    { value: '6', viewValue: 'Ahmedabad - District Panchayat' },
  ];

  elementData: QuarterlyRemovalPendingPara[] = [
    {
      id: '1', district: 'Ahmedabad', instituteType: 'Municipal Corporation', instituteName: 'AMC',
      auditYear: '2019-20', dateOfNotesReceivedFromAg: '16-Jun-2019', totalNoOfPara: '2', paraNo: '10,11',
      paraSubject: 'Office Expenditure', reasonForNotClose: 'Proper Clarification', remarks: ''
    },
    {
      id: '5', district: 'Ahmedabad', instituteType: 'District Corporation', instituteName: 'Ahmedabad District Panchayat',
      auditYear: '2019-21', dateOfNotesReceivedFromAg: '16-Apr-2020', totalNoOfPara: '4', paraNo: '5,8,10,15',
      paraSubject: 'Quarterly Expenditure', reasonForNotClose: 'Proper Clarification', remarks: ''
    },
    {
      id: '6', district: 'Ahmedabad', instituteType: 'District Corporation', instituteName: 'Ahmedabad Distrct LF',
      auditYear: '2019-22', dateOfNotesReceivedFromAg: '5-May-2019', totalNoOfPara: '3', paraNo: '2,6,8',
      paraSubject: 'Software Expenditure', reasonForNotClose: 'Proper Clarification', remarks: ''
    },
    {
      id: '7', district: 'Ahmedabad', instituteType: 'Taluka Panchayat', instituteName: 'Botad Taluka Panchayat',
      auditYear: '2019-23', dateOfNotesReceivedFromAg: '30-Sep-2019', totalNoOfPara: '1', paraNo: '8',
      paraSubject: 'Expenditure', reasonForNotClose: 'Proper Clarification', remarks: ''
    },
  ];
  dataSource = new MatTableDataSource<QuarterlyRemovalPendingPara>(this.elementData);
  columns: string[] = ['position',
    'id', 'district', 'instituteType', 'instituteName', 'dateOfNotesReceivedFromAg', 'auditYear', 'totalNoOfPara',
    'paraNo', 'paraSubject', 'reasonForNotClose', 'remarks', 'action'
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.quarterlyRemovalPendingParaReport = this.fb.group({
      district: [''],
      instituteType: [''],
      instituteName: [''],
      auditYear: [''],
    });
    this.dataSource.paginator = this.paginator;
  }
}
