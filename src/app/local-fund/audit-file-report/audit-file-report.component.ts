import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { WorkflowDetailsLfComponent } from '../workflow-details-lf/workflow-details-lf.component';
import { AuditFileReport } from 'src/app/model/local-fund';
import { LocalFundDirective } from 'src/app/common/directive/local-fund-directive';

@Component({
  selector: 'app-audit-file-report',
  templateUrl: './audit-file-report.component.html',
  styleUrls: ['./audit-file-report.component.css']
})
export class AuditFileReportComponent implements OnInit {

  directiveObject = new LocalFundDirective(this.dialog);

  // form group
  auditFileReport: FormGroup;

  // form control , list
  districtCtrl: FormControl = new FormControl();
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

  auditYearCtrl: FormControl = new FormControl();
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

  instituteTypeCtrl: FormControl = new FormControl();
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
  instituteNameCtrl: FormControl = new FormControl();

  finYearCtrl: FormControl = new FormControl();
  financialYearList: ListValue[] = [
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

  statusList: any[] = [
    { value: 'Pending', viewValue: 'Pending' },
    { value: 'Processed', viewValue: 'Processed' },
  ];
  statusCtrl: FormControl = new FormControl();

  // table data
  elementData: AuditFileReport[] = [
    {
      instituteType: 'District Panchayat', instituteName: 'District Panchayat, Ahmedabad', district: 'Ahmadabad',
      auditYear: '1990-91', issueDate: '31-May-2019', auditorName: 'Mr. ABC', financialYear: '1990-91'
    },
    {
      instituteType: 'District Panchayat', instituteName: 'District Panchayat, Ahmedabad', district: 'Ahmadabad',
      auditYear: '1991-92', issueDate: '31-May-2019', auditorName: 'Mr. BDC', financialYear: '1990-91'
    }];

  dataSource = new MatTableDataSource<AuditFileReport>(this.elementData);
  columns: string[] = ['position', 'district', 'financialYear', 'auditYear', 'instituteType',
    'instituteName', 'issueDate', 'auditorName', 'report'];

  // paginator
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.auditFileReport = this.fb.group({
      district: [''],
      instituteType: [''],
      instituteName: [''],
      financialYear: [''],
      auditYear: [''],
      issueDate: [''],
      status: ['']
    });
    this.dataSource.paginator = this.paginator;

  }

}
