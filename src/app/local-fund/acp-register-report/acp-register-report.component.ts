import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { AcpRegisterReport } from 'src/app/model/local-fund';
import { LocalFundDirective } from 'src/app/common/directive/local-fund-directive';

@Component({
  selector: 'app-acp-register-report',
  templateUrl: './acp-register-report.component.html',
  styleUrls: ['./acp-register-report.component.css']
})
export class AcpRegisterReportComponent implements OnInit {

  // directive object for workflow dialog
  directiveObject = new LocalFundDirective(this.dialog);

  // form group
  acpReport: FormGroup;

  // form control
  auditorNameCtrl: FormControl = new FormControl();
  districtCtrl: FormControl = new FormControl();

  // list
  auditorNameList: ListValue[] = [
    { value: '0', viewValue: 'Mr. M.K.Shah' },
    { value: '0', viewValue: 'Mr. B.K. Patel' },
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
  // list end

  // table data
  elementData: AcpRegisterReport[] = [
    {
      auditorName: 'B K Patel, M K Patel', noOfAuditors: '2', toDistrict: 'Surat',
      fromDistrict: 'Ahmedabad', officeName: 'Examiner Local Fund', startDate: '01-Apr-2017',
      endDate: '05-Apr-2017', totalManDaysAssigned: '10',
      remarks: '', attachment: ''
    },
    {
      auditorName: 'B K Patel, M K Patel', noOfAuditors: '2', toDistrict: 'Surat',
      fromDistrict: 'Ahmedabad', officeName: 'Examiner Local Fund', startDate:
        '01-Apr-2017', endDate: '05-Apr-2017', totalManDaysAssigned: '10',
      remarks: '', attachment: ''
    },
    {
      auditorName: 'B K Patel, M K Patel', noOfAuditors: '2', toDistrict: 'Vadodara',
      fromDistrict: 'Gandhinagar', officeName: 'Examiner Local Fund', startDate: '01-May-2017',
      endDate: '05-May-2017', totalManDaysAssigned: '9',
      remarks: '', attachment: ''
    },
    {
      auditorName: 'B K Patel, M K Patel', noOfAuditors: '2', toDistrict: 'Vadodara',
      fromDistrict: 'Gandhinagar', officeName: 'Examiner Local Fund', startDate: '01-May-2017',
      endDate: '05-May-2017', totalManDaysAssigned: '9',
      remarks: '', attachment: ''
    },
  ];
  dataSource = new MatTableDataSource<AcpRegisterReport>(this.elementData);
  columns: string[] = ['position', 'fromDistrict', 'auditorName', 'noOfAuditors', 'toDistrict', 'officeName',
    'totalManDaysAssigned', 'startDate', 'endDate', 'remarks', 'assignment'
  ];
  // table data end

  // paginator
  @ViewChild(MatPaginator) paginator: MatPaginator;

  // constructor
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.acpReport = this.fb.group({
      fromDistrict: [''],
      toDistrict: [''],
      auditorName: ['']
    });
    this.dataSource.paginator = this.paginator;

  }
}
