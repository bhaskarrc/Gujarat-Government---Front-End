import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { ConsolidatedDiaryReport } from 'src/app/model/local-fund';

@Component({
  selector: 'app-consolidated-diary-report',
  templateUrl: './consolidated-diary-report.component.html',
  styleUrls: ['./consolidated-diary-report.component.css']
})
export class ConsolidatedDiaryReportComponent implements OnInit {
  maxDate = new Date();
  consolidateDiaryReport: FormGroup;

  instituteTypeCtrl: FormControl = new FormControl();
  instituteNameCtrl: FormControl = new FormControl();
  monthYearCtrl: FormControl = new FormControl();

  monthYearList: ListValue[] = [
    { value: '0', viewValue: 'Jan-18' },
    { value: '1', viewValue: 'Fab-18' },
    { value: '2', viewValue: 'Mar-18' },
    { value: '3', viewValue: 'Apr-18' },
    { value: '4', viewValue: 'May-18' },
    { value: '5', viewValue: 'Jun-18' },
    { value: '6', viewValue: 'Jul-18' },
    { value: '7', viewValue: 'Aug-18' },
    { value: '8', viewValue: 'Sep-18' },
    { value: '9', viewValue: 'Oct-18' },
    { value: '10', viewValue: 'Nov-18' },
    { value: '12', viewValue: 'Dec-18' },
  ];

  instituteTypeList: ListValue[] = [
    { value: '0', viewValue: 'Maha Nagarpalika' },
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
    { value: '0', viewValue: 'Taluka panchayat –2015-16' },
    { value: '1', viewValue: 'DMDG' },
    { value: '2', viewValue: 'District Panchayat - Gandhinagar' },
    { value: '3', viewValue: 'GMC' },
    { value: '4', viewValue: 'GPCB' },
    { value: '5', viewValue: 'Village Panchayat' },
    { value: '6', viewValue: 'District Panchayat - Ahmedabad' },
  ];


  ElementData: ConsolidatedDiaryReport[] = [
    {
      monthYear: 'OCT-18',
      weekCompleteDate: '6-OCT-18',
      weeklyLeave: '2',
      place: 'Kalol',
      instituteType: 'Taluka Panchayat',
      instituteName: 'Taluka panchayat –2015-16',
      timeOfAudit: '',
      approvedTimeForAudit: '',
      noOfAuditor: '2',
      noOfDeputyAuditor: '3',
      noOfSubAuditor: '0',
      total: '5'
    },
  ];

  dataSource = new MatTableDataSource<ConsolidatedDiaryReport>(this.ElementData);
  displayedColumns: any[] = [
    'serialNo',
    'monthYear',
    'weekCompleteDate',
    'weeklyLeave',
    'place',
    'instituteType',
    'instituteName',
    'timeOfAudit',
    'approvedTimeForAudit',
    'noOfAuditor',
    'noOfDeputyAuditor',
    'noOfSubAuditor',
    'total',
    'action'
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.consolidateDiaryReport = this.fb.group({
      monthYear: [''],
      weekCompleteDate: [''],
      weeklyLeave: [''],
      place: [''],
      instituteType: [''],
      instituteName: [''],
      timeOfAudit: [''],
      approvedTimeForAudit: [''],
      noOfAuditor: [''],
      noOfDeputyAuditor: [''],
      noOfSubAuditor: [''],
      total: [''],

    });
  }

  // reset form
  clearForm() {
    this.consolidateDiaryReport.reset();
  }

}
