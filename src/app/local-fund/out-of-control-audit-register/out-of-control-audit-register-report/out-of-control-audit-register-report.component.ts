import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { OutOfControlAuditRegisterEntry } from 'src/app/model/local-fund';

@Component({
  selector: 'app-out-of-control-audit-register-report',
  templateUrl: './out-of-control-audit-register-report.component.html',
  styleUrls: ['./out-of-control-audit-register-report.component.css']
})
export class OutOfControlAuditRegisterReportComponent implements OnInit {

  outOfControlAuditReport: FormGroup;
  isSubmitted = false;
  districtCtrl: FormControl = new FormControl();
  district_list: any[] = [
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
  instituteName_list: ListValue[] = [
    { value: '0', viewValue: 'Dahegam Nagarpalika' },
    { value: '1', viewValue: 'DMDG' },
    { value: '2', viewValue: 'Gandhinagar-District Panchayat' },
    { value: '3', viewValue: 'GMC' },
    { value: '4', viewValue: 'GPCB' },
    { value: '5', viewValue: 'Dahegam Nagar Palika' },
    { value: '6', viewValue: 'Ahmedabad - District Panchayat' },
  ];
  instituteNameCtrl: FormControl = new FormControl();
  Element_Data: OutOfControlAuditRegisterEntry[] = [{
    instituteType: 'Village Panchayat', instituteName: 'Valad', district: 'Gandhinagar', taluka: 'Kalol',
    auditYear: '1990-91', units: '1', manDays: '1', reason: 'Because of all the records are in police station', remarks: ''
  },
  {
    instituteType: 'Village Panchayat', instituteName: 'Valad', district: 'Gandhinagar', taluka: 'Kalol',
    auditYear: '1991-92', units: '2', manDays: '2', reason: 'Because of all the records are in police station', remarks: ''
  }];
  dataSource = new MatTableDataSource<any>(this.Element_Data);
  columns: string[] = ['position', 'instituteType', 'instituteName', 'district',
    'taluka', 'auditYear', 'units', 'manDays', 'reason', 'remarks'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.outOfControlAuditReport = this.fb.group({
      district: [''],
      instituteType: [''],
      instituteName: [''],
      auditYear: [''],
    });
    this.dataSource.paginator = this.paginator;

  }

}
